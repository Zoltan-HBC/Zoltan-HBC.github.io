# HBC Diabétesz Napló v8.0 Personal APP

Telepíthető, offline is működő diabétesz napló inzulinnal kezelt cukorbetegeknek.
Telefonra, tabletre, laptopra és asztali gépre (PWA).

## Első lépések
1. **TELEPITESI_UTMUTATO.md** — közzététel (GitHub Pages, ingyenes) + telepítés minden eszközre
2. **DRIVE_BEALLITASI_UTMUTATO.md** — Google Drive szinkron + Andi követő módja + riasztások
3. **store/** mappa — Google Play megjelenés anyagai és útmutatója

## Mit tud a v7-hez képest? (v8 újdonságok)
- **Vizuális megújulás:** TypeOneDiab logó a fejlécben és az app-ikonokban,
  egységes SVG ikonkészlet az emoji-ikonok helyett
- **Alsó navigációs sáv mobilon** (asztali gépen marad a felső fülsor),
  nagyobb érintőfelületek, fókusz-jelzés, sötét módú kontraszt-javítás (WCAG AA)
- **Orvosi riport (PDF):** a Statisztika fülön szabad „-tól -ig" dátumtartományra
  nyomtatható összefoglaló — TIR, becsült HbA1c, GMI, SD/CV, grafikonok,
  napi mintázat és részletes napló; magyarul és angolul, mmol/l és mg/dl egységgel
- **GMI (Glucose Management Indicator)** a Statisztikában a becsült HbA1c mellett
- **Napi mintázat grafikon:** óránkénti átlag/min/max a kiválasztott időszakra
- **Beállítható napszakhatárok:** az étkezéstípus-alapértelmezés (Reggeli…Utóvacsora)
  és a bolus-ICR napszakainak órahatárai a Beállításokban módosíthatók
- **Elgépelés-védelem:** szokatlan vércukorérték (2,0 alatt / 25,0 mmol/l felett)
  mentése előtt megerősítő kérdés
- Grafikonok, Bejegyzések és Statisztika: egyéni „-tól -ig" dátumtartomány mindenhol
- **Hibajavítás:** a heti TIR-kártya változósorrend-hibája (v7 TDZ) javítva;
  a bejegyzés-kártyák a beállított inzulinneveket mutatják
- A v7 minden funkciója változatlanul megmaradt: kétnyelvűség, mértékegység-váltó,
  Drive-szinkron + követő mód, riasztások, ICR/IOB bolus-javaslat, CGM-import,
  IndexedDB tartalék, JSON/CSV import-export
- **Adatkompatibilitás:** a v6/v7 adatok automatikusan, veszteség nélkül betöltődnek

## Fájlszerkezet
```
index.html          — az app váza
manifest.json, sw.js — telepíthetőség + offline működés
js/app.js           — a teljes alkalmazás (React)
js/i18n.js          — fordítás + mértékegység-kezelés
js/storage.js       — tartós tárolás (IndexedDB)
js/sync.js          — Google Drive szinkron + riasztások
js/cgm.js           — CGM-import + illesztőréteg
css/, lib/, fonts/, icons/ — helyi erőforrások (offline)
store/              — Google Play anyagok
```

⚠️ Az alkalmazás nem orvostechnikai eszköz. Minden dózisjavaslat és becsült érték
(HbA1c, GMI, TIR) tájékoztató jellegű — a döntés mindig a kezelőorvos
iránymutatása szerint történjen!
