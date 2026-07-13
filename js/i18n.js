/* ═══════════ HBC v8.0 — KÉTNYELVŰSÉG (hu/en) + MÉRTÉKEGYSÉG (mmol/l ↔ mg/dl) ═══════════
   A fordítás megjelenítéskor történik: a tárolt adatok mindig magyarul / mmol/l-ben maradnak,
   így nyelv- vagy egységváltásnál semmilyen adat nem sérül. */

window.HBC_I18N = (function () {
  let lang = localStorage.getItem('hbc-lang') || 'hu';

  /* HU → EN szótár. Ami nincs benne, magyarul jelenik meg (biztonságos visszaesés). */
  const EN = {
    // Navigáció
    'Áttekintés': 'Overview', 'Grafikonok': 'Charts', 'Bejegyzések': 'Entries',
    'Statisztika': 'Statistics', 'Ételek': 'Foods', 'Szinkron': 'Sync', 'Beállítások': 'Settings',
    'HBC Diabétesz Napló': 'HBC Diabetes Diary',
    // Típusok, étkezések
    'Étkezés': 'Meal', 'Kontroll': 'Check', 'Lantus': 'Basal (Lantus)', 'Egyéb tevékenység': 'Other activity',
    'Reggeli': 'Breakfast', 'Tízórai': 'Mid-morning snack', 'Ebéd': 'Lunch', 'Uzsonna': 'Afternoon snack',
    'Vacsora': 'Dinner', 'Utóvacsora': 'Late-night snack',
    // Gombok, műveletek
    'OK': 'OK', '✅ Igen': '✅ Yes', '❌ Nem': '❌ No', '✅ Mentés': '✅ Save', '✅ Hozzáad': '✅ Add',
    '✅ Összes': '✅ All', '❌ Zár': '❌ Close', '➕ Új': '➕ New', '➕ Új bejegyzés': '➕ New entry',
    '➕ Új étel hozzáadása': '➕ Add new food', '✏️ Bejegyzés szerkesztése': '✏️ Edit entry',
    '✨ Javaslat alkalmazása': '✨ Apply suggestion', '✅ Beállítások mentése': '✅ Save settings',
    'Mégse': 'Cancel', 'Törlés': 'Delete', 'Szerkesztés': 'Edit',
    // Címkék, mezők
    'Időpont': 'Time', 'Típus': 'Type', 'Vércukor': 'Blood glucose', 'CH (g)': 'Carbs (g)', 'CH(g)': 'Carbs(g)',
    'Egység': 'Unit', 'Egység (pl. 1 db)': 'Unit (e.g. 1 pc)', 'Étel neve': 'Food name',
    '⏰ Időpont': '⏰ Time', '⏰ Időpont (utólag is módosítható!)': '⏰ Time (can be changed later!)',
    '🍽️ Étkezés': '🍽️ Meal', '🍽️ Étkezés típusa': '🍽️ Meal type', '🍽️ Szénhidrát (g)': '🍽️ Carbohydrate (g)',
    '🏃 Tevékenység': '🏃 Activity', '🏃 Egyéb tevékenység': '🏃 Other activity',
    '📝 Megjegyzés': '📝 Note', '✏️ Megjegyzés': '✏️ Note', '📝 Típus': '📝 Type',
    '🥗 Ételek (gyorsválasztó)': '🥗 Foods (quick picker)', 'Egyéb/Extra CH (g)': 'Other/extra carbs (g)',
    '🔍 Keresés...': '🔍 Search...', 'Megjegyzések...': 'Notes...', 'Megjegyzés az orvosnak...': 'Note for the doctor...',
    'Ide illeszd be az exportált adatokat...': 'Paste the exported data here...',
    // Vércukor-címkék (dinamikus egységgel a bgL() adja hozzá a mértékegységet)
    '🩸 Vércukor': '🩸 Blood glucose', '⚠️ Alacsony vércukor határ': '⚠️ Low glucose threshold',
    '🔺 Magas vércukor határ': '🔺 High glucose threshold', '🎯 Célvércukor – bolus korrektorhoz': '🎯 Target glucose – for bolus correction',
    '📐 Inzulin érzékenység (1E gyors inzulin ennyivel csökkent': '📐 Insulin sensitivity (1U rapid insulin lowers by',
    // Statisztika, dashboard
    'Átlag VC': 'Avg BG', 'TIR (célban)': 'TIR (in range)', 'Becsült HbA1c': 'Estimated HbA1c',
    'Nap': 'Day', 'Hét': 'Week', 'Hónap': 'Month', 'Egyéni': 'Custom', 'Egyéni tartomány': 'Custom range',
    'Tól:': 'From:', 'Ig:': 'To:', 'Ma': 'Today',
    // Szinkron, mentés
    '💾 Teljes mentés (JSON)': '💾 Full backup (JSON)', '📊 CSV letöltése': '📊 Download CSV',
    '📤 Export szövegbe': '📤 Export to text', '📥 Import szövegből': '📥 Import from text',
    '🔄 Szinkron – Hogyan működik?': '🔄 Sync – How does it work?',
    // Üzenetek
    '✅ Beállítások mentve!': '✅ Settings saved!', '✅ Étel mentve az adatbázisba!': '✅ Food saved to database!',
    '✅ Étel hozzáadva az adatbázisba!': '✅ Food added to database!',
    'Törlöd ezt a bejegyzést?': 'Delete this entry?', 'Törlöd ezt az ételt?': 'Delete this food?',
    'Add meg az étel nevét és a CH értékét!': 'Enter the food name and carb value!',
    '⚙️ Személyes beállítások': '⚙️ Personal settings',
    // Hónapok
    'jan.': 'Jan', 'feb.': 'Feb', 'már.': 'Mar', 'ápr.': 'Apr', 'máj.': 'May', 'jún.': 'Jun',
    'júl.': 'Jul', 'aug.': 'Aug', 'szep.': 'Sep', 'okt.': 'Oct', 'nov.': 'Nov', 'dec.': 'Dec',
    // ── v7 új funkciók szövegei ──
    'Nyelv / Language': 'Language / Nyelv', 'Vércukor mértékegysége': 'Blood glucose unit',
    'Gyors inzulin neve': 'Rapid insulin name', 'Bázis inzulin neve': 'Basal insulin name',
    'Inzulin hatásideje (óra)': 'Insulin action time (hours)',
    'CH/inzulin arány (ICR) napszakonként': 'Carb-to-insulin ratio (ICR) by time of day',
    '1 egység inzulin ennyi gramm CH-t fedez': '1 unit of insulin covers this many grams of carbs',
    'Reggel': 'Morning', 'Délben': 'Midday', 'Este': 'Evening',
    '⚠️ FIGYELEM: minden dózisérték csak tájékoztató javaslat, NEM orvosi utasítás! A dózisról mindig a kezelőorvosod iránymutatása szerint dönts!':
      '⚠️ WARNING: all dose values are informational suggestions only, NOT medical advice! Always decide doses according to your doctor\'s guidance!',
    '🚨 ALACSONY VÉRCUKOR! Egyél 15 g gyorsan felszívódó szénhidrátot (pl. szőlőcukor, gyümölcslé), és 15 perc múlva mérj újra!':
      '🚨 LOW BLOOD GLUCOSE! Eat 15 g of fast-acting carbs (e.g. glucose tablets, juice) and re-check in 15 minutes!',
    '💜 Ma még nem rögzítettél bázisinzulint.': '💜 No basal insulin logged today yet.',
    'Aktív inzulin (IOB) levonva': 'Active insulin (IOB) deducted',
    'napja hiánytalan a napló': 'days of complete logging', 'Ne szakadjon meg a sorozat!': 'Don\'t break the streak!',
    'Mai naplózási kör': 'Today\'s logging circle', 'Heti TIR-cél': 'Weekly TIR goal',
    'Szuper! Céltartományban vagy! 👏': 'Great! You are in range! 👏',
    'Becenév': 'Nickname', 'Színtéma': 'Color theme',
    'Motivációs elemek (sorozat, haladás, visszajelzés)': 'Motivation features (streak, progress, feedback)',
    'Bekapcsolva': 'Enabled', 'Kikapcsolva': 'Disabled',
    '☁️ Google Drive szinkron': '☁️ Google Drive sync',
    'Tulajdonos mód (a saját naplómat osztom meg)': 'Owner mode (I share my own diary)',
    'Követő mód (más naplóját követem)': 'Follower mode (I follow someone else\'s diary)',
    'Kapcsolódás Google-fiókkal': 'Connect with Google account',
    'Mappa kiválasztása': 'Choose folder', 'Megosztott napló kiválasztása': 'Choose shared diary',
    'Utolsó szinkron': 'Last sync', 'Szinkron most': 'Sync now', 'Leválasztás': 'Disconnect',
    'Riasztási beállítások': 'Alert settings', 'Riasztás alacsony értéknél': 'Alert on low glucose',
    'Riasztás magas értéknél': 'Alert on high glucose', 'Értesítések engedélyezése': 'Enable notifications',
    'Frissítés (perc)': 'Refresh interval (min)',
    '📡 CGM adatok importálása (LibreView / Dexcom CSV)': '📡 Import CGM data (LibreView / Dexcom CSV)',
    'CGM CSV fájl kiválasztása': 'Choose CGM CSV file',
    'Nincs még CGM-eszközöd? Az import LibreView/Clarity exportot fogad. Élő eszköz-csatlakozás előkészítve.':
      'No CGM device yet? Import accepts LibreView/Clarity exports. Live device connection is prepared for the future.',
    'Utolsó biztonsági mentés': 'Last backup',
    '⚠️ Több mint 7 napja nem volt biztonsági mentés vagy Drive-szinkron!': '⚠️ No backup or Drive sync for more than 7 days!',
    'Ez a szám becslés, nem laboreredmény!': 'This number is an estimate, not a lab result!',
    'javaslat, nem orvosi utasítás': 'suggestion, not medical advice',
    'Sorozat': 'Streak',
    // ── v7.0.1: teljes lefedettség ──
    '💉 Ma eddig beadott inzulin': '💉 Insulin taken today',
    '📊 Átlag vércukor (7 nap)': '📊 Average glucose (7 days)',
    '🍽️ Mai szénhidrát': '🍽️ Carbs today',
    '🩸 Legutóbbi vércukor': '🩸 Latest blood glucose',
    'Még nincs mai bejegyzés': 'No entries today yet',
    'Nincs bejegyzés ebben az időszakban': 'No entries in this period',
    '🔄 IOB – Aktív inzulin (Insulin On Board)': '🔄 IOB – Active insulin (Insulin On Board)',
    '✅ Normál': '✅ Normal', 'Alacsony': 'Low', 'Magas': 'High', 'Normál': 'Normal',
    '⚠️ Alacsony': '⚠️ Low', '🔺 Magas': '🔺 High',
    '💡 CH/Inzulin arány': '💡 Carb/insulin ratio',
    'Becsült HbA1c ℹ️': 'Estimated HbA1c ℹ️',
    '💡 Bolus kalkulátor javaslat:': '💡 Bolus calculator suggestion:',
    'Válassz...': 'Choose...', '✏️ Szerk.': '✏️ Edit',
    '📱 Hova mentődnek az adatok?': '📱 Where is data saved?',
    'Erre az eszközre (localStorage + IndexedDB), és ha bekapcsolod, a saját Google Drive-odra.':
      'On this device (localStorage + IndexedDB) and, if enabled, in your own Google Drive.',
    '🔄 Szinkron eszközök között:': '🔄 Sync between devices:',
    'Drive-szinkronnal automatikus; vagy kézzel: JSON Export → másik eszközön Import.':
      'Automatic with Drive sync; or manually: JSON Export → Import on the other device.',
    '🔀 Összefésülés:': '🔀 Merging:',
    'ID alapján dedupl. – nincs duplikátum!': 'Deduplicated by ID – no duplicates!',
    '📊 CSV Export (Excel/Orvos)': '📊 CSV Export (Excel/Doctor)',
    '📋 Copy-paste szinkron': '📋 Copy-paste sync',
    'Adatméret': 'Data size', '📊 Adatok': '📊 Data',
    '💜 Indigó (alap)': '💜 Indigo (default)', '💚 Türkiz': '💚 Teal', '🌹 Rózsa': '🌹 Rose',
    '🩸 Vércukor-határok': '🩸 Blood glucose thresholds',
    'Az orvossal közösen meghatározott értékeket add meg!': 'Enter the values agreed with your doctor!',
    '💉 Inzulin-beállítások': '💉 Insulin settings',
    '⚠️ Fontos figyelmeztetés!': '⚠️ Important warning!',
    '1️⃣ Google Client ID (lásd: Drive beállítási útmutató)': '1️⃣ Google Client ID (see: Drive setup guide)',
    '❌ Ez a böngésző nem támogatja az értesítéseket.': '❌ This browser does not support notifications.',
    '⚠️ Csak orvossal egyeztetett értékek alapján — javaslat, nem orvosi utasítás!':
      '⚠️ Based only on values agreed with your doctor — a suggestion, not medical advice!',
    'pl. Zoli': 'e.g. Zoli',
    // ── v7.1: grafikai frissítés szövegei ──
    'Megjelenés': 'Appearance',
    '☀️ Világos': '☀️ Light', '🌙 Sötét': '🌙 Dark',
    '🌗 Automatikus (rendszer szerint)': '🌗 Automatic (follow system)',
    'Egy mérés rögzítése fél percet sem vesz igénybe.': 'Logging a reading takes less than half a minute.',
    '➕ Első mai bejegyzés rögzítése': '➕ Log the first entry today',
    'Válassz másik napot vagy időszakot fent.': 'Choose another day or period above.',
    // ── v8: új funkciók szövegei ──
    'Új': 'New', 'Szerkesztés': 'Edit', 'Törlés': 'Delete',
    '🕒 Napszakhatárok': '🕒 Time-of-day boundaries',
    'Óra (0–23), ameddig az adott napszak tart. Ezek vezérlik az étkezéstípus-alapértelmezést és a bolus-kalkulátor napszakválasztását.':
      'Hour (0–23) until which each period of the day lasts. These control the default meal type and the bolus calculator\'s time-of-day selection.',
    '🍽️ Étkezés-alapértelmezés határai': '🍽️ Default meal type boundaries',
    '💉 Bolus-ICR napszakhatárai': '💉 Bolus ICR time boundaries',
    'Reggeli eddig': 'Breakfast until', 'Tízórai eddig': 'Mid-morning until', 'Ebéd eddig': 'Lunch until',
    'Uzsonna eddig': 'Afternoon snack until', 'Vacsora eddig': 'Dinner until',
    'Reggel eddig': 'Morning until', 'Délben eddig': 'Midday until',
    'A Vacsora-határ után rögzített étkezés alapértelmezése: Utóvacsora.':
      'Meals logged after the Dinner boundary default to Late-night snack.',
    'A Délben-határ után az „Este" ICR érvényes.': 'After the Midday boundary the "Evening" ICR applies.',
    'Napi mintázat (óránkénti átlag)': 'Daily pattern (hourly average)',
    'A sáv az adott órában mért legkisebb és legnagyobb értéket mutatja a kiválasztott időszakban.':
      'The band shows the lowest and highest reading for each hour in the selected period.',
    'Átlag': 'Average',
    'Orvosi riport (PDF)': 'Medical report (PDF)',
    'Riport készítése': 'Create report',
    'Nyomtatható összefoglaló a kezelőorvosnak: TIR, becsült HbA1c/GMI, grafikonok és részletes napló. A megnyíló oldalon a Nyomtatás gombbal PDF-be is mentheted.':
      'Printable summary for your doctor: TIR, estimated HbA1c/GMI, charts and a detailed log. On the opened page you can also save it as PDF via the Print button.',
    'A kezdő dátum nem lehet később, mint a záró dátum!': 'The start date cannot be later than the end date!',
    'GMI ℹ️': 'GMI ℹ️',
    // ── v9: új funkciók szövegei ──
    'Menü': 'Menu', 'Oldalak': 'Pages', 'Bezárás': 'Close',
    'Gyors (bólus) inzulin': 'Rapid (bolus) insulin', 'Bázis inzulin': 'Basal insulin',
    'Egyéb (egyéni név)…': 'Other (custom name)…', 'Egyéni név': 'Custom name',
    'pl. Insulin lispro Sanofi': 'e.g. Insulin lispro Sanofi',
    '🎨 Egyéni szín (színskáláról)': '🎨 Custom color (from palette)',
    'Egyéni kiemelőszín': 'Custom accent color',
    'Koppints a színmezőre, és válassz a felugró színskáláról!': 'Tap the color field and pick from the pop-up palette!',
    'A riasztás csak AZNAPI mérés alapján szólal meg – régebbi (utólag rögzített) érték nem vált riasztást.':
      'Alerts fire only for measurements taken TODAY – older (back-dated) values never trigger an alert.',
    '⏰ Dátum és idő (alapból a mostani – utólagos rögzítéshez módosítsd!)':
      '⏰ Date & time (defaults to now – change it for back-dated entries!)',
    'Riasztás (hozzátartozó)': 'Alert (family member)',
    // ── v9: nyelvi teljesség — korábban hiányzó feliratok ──
    '📝 Jegyzetek': '📝 Notes', '➕ Nyit': '➕ Open', 'Ment': 'Save',
    '– Válassz –': '– Choose –', '➕ Új étel mentése adatbázisba:': '➕ Save new food to database:',
    'pl. Séta, Számítógépezés...': 'e.g. Walking, Computer time...',
    'Nem tömb!': 'Not a list!',
    // hónap-rövidítések a dátumformázáshoz (fmtDT/fmtAlwaysDT)
    'jan.': 'Jan', 'feb.': 'Feb', 'már.': 'Mar', 'ápr.': 'Apr', 'máj.': 'May', 'jún.': 'Jun',
    'júl.': 'Jul', 'aug.': 'Aug', 'szep.': 'Sep', 'okt.': 'Oct', 'nov.': 'Nov', 'dec.': 'Dec'
  };

  /* Mintaalapú fordítás dinamikus (számot/nevet tartalmazó) szövegekhez.
     A $1, $2 a mintában elkapott részeket illeszti vissza. */
  const EN_PATTERNS = [
    [/^(\d+) mérés$/, '$1 readings'],
    [/^(\d+) bejegyzés$/, '$1 entries'],
    [/^(\d+) étkezés$/, '$1 meals'],
    [/^(\d+) nap$/, '$1 days'],
    [/^📅 Mai bejegyzések \((\d+)\)$/, "📅 Today's entries ($1)"],
    [/^📊 Vércukor \((\d+) mérés\)$/, '📊 Blood glucose ($1 readings)'],
    [/^📡 CGM szenzor \((\d+) mérés\)$/, '📡 CGM sensor ($1 readings)'],
    [/^🍽️ Szénhidrát \((\d+) étkezés\)$/, '🍽️ Carbohydrate ($1 meals)'],
    [/^💉 Inzulin \((\d+) adag\)$/, '💉 Insulin ($1 doses)'],
    [/^📊 Mérési összesítő \((\d+) mérés\)$/, '📊 Measurement summary ($1 readings)'],
    [/^🥗 Összes étel \((\d+)\)$/, '🥗 All foods ($1)'],
    [/^🔄 IOB: ([\d.,]+)E aktív$/, '🔄 IOB: $1U active'],
    [/^Utolsó: (.+)$/, 'Last: $1'],
    [/^CH-rész: ([\d.,]+)E$/, 'Carb part: $1U'],
    [/^BG korr\.: (.+)E$/, 'BG corr.: $1U'],
    [/^Gyorsválasztó: ([\d.,]+)g CH$/, 'Quick picker: $1g carbs'],
    [/^TELJES CH: ([\d.,]+)g$/, 'TOTAL CARBS: $1g'],
    [/^\((.+): 1E≈([\d.,]+)g CH\)$/, '($1: 1U≈$2g carbs)'],
    [/^([\d.,]+)E (.+)$/, '$1U $2'],
    [/^Alkalmazzuk a javasolt ([\d.,]+)E (.+) adagot\?$/, 'Apply the suggested $1U of $2?'],
    [/^✅ (\d+) új bejegyzés importálva\.$/, '✅ $1 new entries imported.'],
    [/^✅ CSV: (\d+) új bejegyzés importálva\.$/, '✅ CSV: $1 new entries imported.'],
    [/^✅ CGM: (\d+) mérés importálva \(összesen: (\d+)\)\.$/, '✅ CGM: $1 readings imported (total: $2).'],
    [/^(.*)\((\d+) mérés betöltve\)$/, '$1($2 readings loaded)'],
    [/^❌ Hiba: (.+)$/, '❌ Error: $1'],
    [/^❌ CSV hiba: (.+)$/, '❌ CSV error: $1'],
    [/^(\d+) étkezés alapján: átlag ([\d.,]+)g CH\/étk, ([\d.,]+)E (.+) → 1E ≈ (.+)g CH\. ⚠️ Orvossal egyeztess!$/,
      'Based on $1 meals: avg $2g carbs/meal, $3U $4 → 1U ≈ $5g carbs. ⚠️ Consult your doctor!'],
    [/^([\d.,]+)g CH \/ (.+)$/, '$1g carbs / $2'],
    [/^(\d+)\. mai bejegyzés — csak így tovább!$/, 'Entry #$1 today — keep it up!'],
    // ── v8 minták ──
    [/^⚠️ Szokatlan vércukorérték: (.+)\. Biztosan helyes\? Nem elgépelés\?$/,
      '⚠️ Unusual blood glucose value: $1. Is it correct? Not a typo?'],
    [/^(.+) \(h\)$/, '$1 (h)']
  ];

  function t(s) {
    if (lang === 'hu' || typeof s !== 'string') return s;
    if (EN[s] !== undefined) return EN[s];
    /* szóköz-tűrés: a mondat eleji/végi szóközök megtartásával keresünk */
    const core = s.trim();
    if (core !== s && EN[core] !== undefined) {
      return s.replace(core, EN[core]);
    }
    for (const [re, rep] of EN_PATTERNS) {
      const m = s.match(re);
      if (m) return rep.replace(/\$(\d)/g, (_, i) => m[+i] !== undefined ? m[+i] : '');
    }
    return s;
  }
  function setLang(l) { lang = l; localStorage.setItem('hbc-lang', l); }
  function getLang() { return lang; }
  return { t, setLang, getLang, EN };
})();

/* ═══════════ MÉRTÉKEGYSÉG-KEZELÉS ═══════════
   Belső tárolás MINDIG mmol/l. Megjelenítés/bevitel a választott egységben. */
window.HBC_UNITS = (function () {
  const F = 18.016; // 1 mmol/l = 18,016 mg/dl
  let unit = 'mmol'; // 'mmol' | 'mgdl' — az App állítja a settings alapján

  function setUnit(u) { unit = (u === 'mgdl') ? 'mgdl' : 'mmol'; }
  function getUnit() { return unit; }
  function label() { return unit === 'mgdl' ? 'mg/dl' : 'mmol/l'; }
  /* tárolt (mmol/l) → megjelenített érték */
  function disp(v) {
    if (v === null || v === undefined || v === '' || isNaN(v)) return v;
    return unit === 'mgdl' ? Math.round(parseFloat(v) * F) : Math.round(parseFloat(v) * 10) / 10;
  }
  /* megjelenített szöveg (magyar tizedesvesszőt is elfogad) → tárolt mmol/l */
  function toMmol(x) {
    if (x === null || x === undefined || x === '') return null;
    const v = parseFloat(String(x).replace(',', '.'));
    if (isNaN(v)) return null;
    return unit === 'mgdl' ? Math.round(v / F * 100) / 100 : v;
  }
  /* beviteli mező step/min/max javaslat */
  function step() { return unit === 'mgdl' ? '1' : '0.1'; }
  return { setUnit, getUnit, label, disp, toMmol, step, F };
})();

/* Rövidítések a kódban való kényelmes használatra */
window.t = window.HBC_I18N.t;
/* dátumformázáshoz: az aktuális nyelvhez tartozó lokálé */
window.HBC_LOCALE = function () { return window.HBC_I18N.getLang() === 'en' ? 'en-GB' : 'hu-HU'; };
window.bgU = window.HBC_UNITS;
/* vércukor-címke egységgel: bgL('🩸 Vércukor') → '🩸 Vércukor (mmol/l)' */
window.bgL = function (base) { return window.t(base) + ' (' + window.bgU.label() + ')'; };