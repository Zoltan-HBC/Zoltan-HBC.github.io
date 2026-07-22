# HBC Diabétesz Napló v18 Personal APP

Telepíthető, offline is működő diabétesz napló inzulinnal kezelt cukorbetegeknek.
Telefonra, tabletre, laptopra és asztali gépre (PWA).

## Első lépések
1. **TELEPITESI_UTMUTATO.md** — közzététel (GitHub Pages, ingyenes) + telepítés minden eszközre
2. **DRIVE_BEALLITASI_UTMUTATO.md** — Google Drive szinkron + Andi követő módja + riasztások
3. **store/** mappa — Google Play megjelenés anyagai és útmutatója

## v18.5 bővítés (2026. július 22.)

- **🌓 Logó = sötét/világos váltó:** a bal felső TypeOneDiab logóra koppintva
  azonnali oda-vissza váltás a sötét és a világos nézet között — jóváhagyás
  nélkül, asztali és mobil nézetben egyaránt; a választás azonnal mentődik

## v18.4 bővítés (2026. július 22.)

- **⏱️ Tételenkénti CH-időpontok:** az étkezés minden ételéhez külön elfogyasztási
  idő adható (alapból a bejegyzés időpontja érvényes) — új felvitelnél és utólagos
  szerkesztésnél is. Az elnyújtott étkezés (pl. 12:45-ös ebéd + 16:10-es cappuccino)
  így a valós idejével jelenik meg a CH-grafikonon, és az étkezés utáni mérési
  emlékeztető is az utolsó CH-tétel idejétől számol. A módosított időpontú tétel
  zöld kerettel jelölődik.

## v18.3 javítás (2026. július 22.)

- **CH-táblázat kategória-gombok sötét módban:** a világos gombokon a felirat
  világosra váltott és olvashatatlan volt — mostantól sötét módban is a világos
  módbeli színpár marad (világos háttér + sötét zöld felirat)

## v18.2 bővítés (2026. július 22.)

- **📚 CH-táblázat böngészése:** a beépített magyar CH-táblázat (205 tétel) mostantól
  kategória-gombokkal is böngészhető — az Új bejegyzés gyorsválasztójában ÉS az
  Ételek oldal új, teljes listájában (keresővel, kategória-szűrővel); bármely tétel
  a ➕ gombbal átemelhető a saját ételek közé

## v18.1 javítás (2026. július 22.)

- **IOB idő-csík az Áttekintésen:** az aktív inzulin csíkja nem látszott (a `h-2`
  magasság-osztály hiányzott az előre fordított app.css-ből) — javítva, a csík
  mostantól a Statisztika oldali IOB-sávval azonos módon jelenik meg

## Mit tud a v17-hez képest? (v18 újdonságok — 2026. július)

- **📚 Beépített magyar CH-táblázat:** több száz magyar étel (pékáru, köretek, levesek,
  főételek, gyümölcsök, tejtermékek, édességek, italok) tipikus adaggal és CH-értékkel —
  offline, az Ételek gyorsválasztó keresőjébe építve (js/chtabla.js)
- **📈 AGP nézet:** nemzetközi szabvány szerinti percentilis grafikon a Statisztika
  oldalon — óránkénti medián + a mérések középső 50%-át és 90%-át mutató sávok,
  ujjbegyes és CGM-adatok együtt
- **🥓 Zsíros/fehérjedús étel jelölés:** kapcsoló az étkezés bejegyzésben + figyelmeztetés
  az elnyújtott vércukor-emelkedésre és a 2–3 órával későbbi ellenőrző mérésre
- **📶 Bluetooth vércukormérő kapcsolat:** az utolsó mérés átvétele szabványos Bluetooth
  mérőből (Accu-Chek, Dcont okosmérők) — Android + Chrome; iPhone-on nem támogatott (js/bt.js)
- **📉 Előrejelzett alacsony érték riasztás:** a követő a CGM-trend alapján már azelőtt
  riasztást kap, hogy az érték a határ alá esne
- **⏰ Étkezés utáni mérési emlékeztető:** beállítható idővel (alap: 100 perc) jelez az
  Áttekintésen, hogy ideje ellenőrző mérést végezni
- **🔍 Keresés a naplóban:** szabad szavas keresés a Bejegyzések oldalon (pl. „pizza") —
  a teljes naplóban
- **🔠 Nagy betűs mód** és **📬 heti összefoglaló a követőnek**
- **💬 Szerkeszthető motivációs üzenetek** (Beállítások) + állítható megjelenítési idő (1–10 mp)
- **🔥 Szerkeszthető Sorozat-feliratok** pozitív/ezoterikus alapszövegekkel
- **Javítások:** tevékenység-időtartam csúszka feliratai (0–4 óra), CH értékek egységesen
  egy tizedessel (pl. 7.0), IOB idő-csík az Áttekintésen is
- Minden új szolgáltatás a **Beállítások → 🧩 Új szolgáltatások (v18)** kártyán külön
  ki-be kapcsolható — alapból bekapcsolva

## Mit tud a v11.1-hez képest? (v12.0 újdonságok)

- **🆘 SOS vészhelyzeti funkció**: piros SOS gomb a mobil hamburger menüben és az asztali fejlécben — teljes képernyős segítőlap (elsősegély-lépések, 112-gomb, hozzátartozók egyérintéses hívása, lakcím, "Így kommunikálj velem" jegyzet), magyarul és angolul.
- **Automatikus SOS-riasztás**: az aznapi legfrissebb mérés a beállított alacsony határ alatt → az SOS-lap magától megjelenik + értesítés; a "Jól vagyok" gombbal zárható.
- **Orvosi riport hivatalos fejadatokkal**: a beállított teljes név és telefonszám a riport fejlécében; a verziószám automatikusan az aktuális verziót követi.
- **Szabad számbevitel mobilon**: a Beállítások szám-mezői gépelés közben nem ugranak vissza az alapértékre.

## Mit tud a v10-hez képest? (v11.1 újdonságok)
- **Ételek utólagos szerkesztése:** egy már rögzített étkezéshez tartozó
  ételek a bejegyzés szerkesztő ablakában (ceruza ikon) utólag bővíthetők
  vagy törölhetők; a szénhidrát-összeg automatikusan újraszámol
- **Pontosabb szinkron-hibaüzenetek:** a „Szinkron most" gomb kézi
  indításakor az app pontosan jelzi a hiba okát (lejárt bejelentkezés,
  hiányzó jogosultság, törölt fájl, nincs internetkapcsolat, hibás
  Client ID); az időzített, automatikus szinkron csendben fut tovább
- **App neve a kezdőképernyőn:** a telepített ikon alatt mostantól
  „HBC Diab Napló" felirat jelenik meg
- **Nyilvános Google-hozzáférés:** a Drive-szinkron Google-engedélyezése
  mostantól bárki számára elérhető, tesztfelhasználói lista nélkül
  (lásd DRIVE_BEALLITASI_UTMUTATO.md)

## Mit tud a v9-hez képest? (v10 újdonságok)
- **Nagyobb asztali gombsor:** a felső oldalválasztó gombok az app tartalmi
  szélességén (nem a monitor teljes szélességén) egyenletesen osztoznak,
  nagyobb betűvel és ikonnal, jobban kattinthatóan
- **Javított mobil hamburger menü:** a menüpanel mostantól a fejléc ALATT
  nyílik — korábban előfordulhatott, hogy a panel eltakarta a fejlécet;
  emellett sok elemnél a panel görgethető
- **Egyéni háttérszín:** Beállítások → Megjelenés mellett felugró színskáláról
  választható egyéni háttérszín, amely lágy színátmenetként jelenik meg az
  app teljes felületén (világos és sötét módban is), a kártyák kontrasztjának
  megtartása mellett; „Visszaállítás" gombbal bármikor törölhető

## Mit tud a v8-hoz képest? (v9 újdonságok)
- **Sérült v8-fájlok helyreállítva:** az app.js, i18n.js és README.md a v8-as
  csomagban csonkolódott (hibás másolás) — a v9 teljes, működő kód
- **TypeOneDiab logó:** asztali nézetben +20%-kal nagyobb, és a képernyő
  szélességével automatikusan skálázódik; mobilon a fejlécben rendelkezésre
  álló helyhez igazodik
- **Asztali felső sáv:** minden oldalválasztó és beállítás gomb minden oldalon
  látható (ahogy a v7-ben volt) — SVG ikonokkal
- **Mobil navigáció:** ÚJ hamburger menü a fejlécben (minden oldal elérhető) +
  alsó navigációs sáv a leggyakoribb oldalakkal — beteg, hozzátartozó és orvos
  is könnyen válthat az oldalak (Statisztika, Grafikonok, Bejegyzések…) között
- **Inzulin-legördülők:** a Magyarországon elérhető gyors (bólus) inzulinok
  (Humalog, NovoRapid, Fiasp, Apidra, Lyumjev, Actrapid…) és bázisinzulinok
  (Lantus, Abasaglar, Toujeo, Levemir, Tresiba, Semglee…) listából választhatók,
  egyéni név továbbra is megadható
- **Egyéni színválasztó:** a Sötét / Világos / Automatikus megjelenés mellett
  az app kiemelőszíne felugró színskálán is kiválasztható (Beállítások → Színtéma
  → 🎨 Egyéni szín)
- **Riasztás csak aznapi értékre:** a hozzátartozói (követő) riasztás kizárólag
  az AZNAPI, legfrissebb mérés alapján szólal meg — utólag rögzített, régebbi
  érték nem vált riasztást; a megosztott adatcsomag a CGM-méréseket is tartalmazza
- **Adatfelvitel:** a dátum + idő mező alapból az aktuális időpont, de szabadon
  módosítható — utólagos (visszadátumozott) rögzítéshez is
- **Nyelvi teljesség:** minden felirat magyarul ÉS angolul is megjelenik
  a kiválasztott nyelvnek megfelelően
- A v8 minden funkciója megmaradt: orvosi riport (PDF), GMI, napi mintázat
  grafikon, beállítható napszakhatárok, elgépelés-védelem, alsó navigáció
- **Adatkompatibilitás:** a v6/v7/v8 adatok automatikusan, veszteség nélkül betöltődnek

## Fájlszerkezet
```
index.html          — az app váza
manifest.json       — telepítési adatok (PWA)
sw.js               — service worker (offline működés)
css/                — stílusok (Tailwind + egyéni)
js/i18n.js          — kétnyelvűség + mértékegység-kezelés
js/storage.js       — IndexedDB tartalék-mentés
js/sync.js          — Google Drive szinkron + riasztások (v18: előrejelzett alacsony)
js/cgm.js           — CGM CSV-import (LibreView/Dexcom)
js/chtabla.js       — v18: beépített magyar szénhidráttáblázat
js/bt.js            — v18: Bluetooth vércukormérő kapcsolat (Web Bluetooth)
js/app.js           — maga az alkalmazás (React)
lib/                — React + Chart.js (helyben, CDN nélkül)
fonts/              — Nunito betűtípus (offline)
icons/              — app-ikonok + TypeOneDiab logó
store/              — Google Play anyagok
```

## Fontos
⚠️ Minden dózisérték csak tájékoztató javaslat, NEM orvosi utasítás!
A kezelésről mindig a kezelőorvos iránymutatása szerint dönts!
