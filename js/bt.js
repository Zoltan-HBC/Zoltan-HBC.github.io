/* ═══════════ HBC v18 — BLUETOOTH VÉRCUKORMÉRŐ KAPCSOLAT (6.4) ═══════════
   A szabványos Bluetooth Glucose Profile (GATT 0x1808) szerint működő mérők
   (pl. Accu-Chek Instant/Guide, Dcont okosmérők) UTOLSÓ mérési eredményének
   átvétele Web Bluetooth-szal.
   FONTOS KORLÁT: csak Androidon, Chrome/Edge böngészőben működik.
   iPhone-on (Safari) a Web Bluetooth nem támogatott — ott marad a kézi bevitel.
   A funkció a Beállításokban kapcsolható ki-be (alapból BE). */

window.HBC_BT = (function () {
  const GLUCOSE_SERVICE = 0x1808;
  const GLUCOSE_MEASUREMENT = 0x2A18;
  const RACP = 0x2A52; /* Record Access Control Point */

  function supported() {
    return !!(navigator.bluetooth && navigator.bluetooth.requestDevice);
  }

  /* IEEE-11073 16 bites SFLOAT dekódolása */
  function sfloat(raw) {
    let mant = raw & 0x0FFF;
    let exp = (raw >> 12) & 0xF;
    if (exp >= 8) exp -= 16;
    if (mant >= 2048) mant -= 4096;
    return mant * Math.pow(10, exp);
  }

  /* Glucose Measurement karakterisztika értelmezése → mmol/l */
  function parseMeasurement(dv) {
    const flags = dv.getUint8(0);
    let o = 3 + 7; /* flags(1) + sequence(2) + base time(7) */
    if (flags & 0x01) o += 2; /* time offset */
    if (!(flags & 0x02)) return null; /* nincs koncentráció a rekordban */
    const raw = dv.getUint16(o, true);
    const conc = sfloat(raw);
    /* mértékegység: 0 → kg/L (mg/dl-hez ×100000), 1 → mol/L (mmol/l-hez ×1000) */
    const molL = !!(flags & 0x04);
    let mmol;
    if (molL) mmol = conc * 1000;
    else mmol = (conc * 100000) / 18.016;
    return Math.round(mmol * 10) / 10;
  }

  /* Az utolsó tárolt mérés lekérése. onOk(mmol), onErr(message) */
  function readLast(onOk, onErr) {
    if (!supported()) {
      onErr('Ezen az eszközön/böngészőn nincs Web Bluetooth (iPhone-on nem támogatott). Kérlek, írd be az értéket kézzel.');
      return;
    }
    let device, server, timer;
    const fail = e => {
      try { if (server && server.connected) server.disconnect(); } catch (x) {}
      clearTimeout(timer);
      onErr(typeof e === 'string' ? e : (e && e.name === 'NotFoundError' ?
        'Nincs kiválasztott mérő. Kapcsold be a mérőt, és próbáld újra!' :
        'Bluetooth-hiba: ' + ((e && e.message) || e)));
    };
    navigator.bluetooth.requestDevice({
      filters: [{ services: [GLUCOSE_SERVICE] }],
      optionalServices: [GLUCOSE_SERVICE]
    }).then(d => {
      device = d;
      return d.gatt.connect();
    }).then(s => {
      server = s;
      return s.getPrimaryService(GLUCOSE_SERVICE);
    }).then(svc => Promise.all([
      svc.getCharacteristic(GLUCOSE_MEASUREMENT),
      svc.getCharacteristic(RACP)
    ])).then(([meas, racp]) => {
      let got = false;
      /* biztonsági időkorlát: 15 mp */
      timer = setTimeout(() => { if (!got) fail('Időtúllépés — nem érkezett mérés a mérőből.'); }, 15000);
      meas.addEventListener('characteristicvaluechanged', ev => {
        const mmol = parseMeasurement(ev.target.value);
        if (mmol != null && !got) {
          got = true;
          clearTimeout(timer);
          try { if (server.connected) server.disconnect(); } catch (x) {}
          onOk(mmol);
        }
      });
      return meas.startNotifications()
        .then(() => racp.startNotifications())
        /* RACP parancs: 0x01 = tárolt rekordok kérése, 0x06 = az utolsó rekord */
        .then(() => racp.writeValue(new Uint8Array([0x01, 0x06])));
    }).catch(fail);
  }

  return { supported, readLast };
})();
