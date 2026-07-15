# Telepítési útmutató — HBC Diabétesz Napló v12.0 Personal APP

## Miért kell közzétenni?
A telepíthetőséghez (és a Drive-szinkronhoz) az appnak HTTPS-címen kell futnia.
A legegyszerűbb ingyenes megoldás a GitHub Pages — kb. 15 perc, bankkártya nem kell.
(A fájlokat dupla kattintással megnyitva az app böngészőben fut, de nem telepíthető.)

## 0. lépés — Közzététel GitHub Pages-en (egyszeri, ingyenes)
1. Regisztrálj / lépj be: https://github.com
2. Jobb felül „+" → „New repository" → a tárhely neve legyen PONTOSAN a teljes cím:
   `FELHASZNÁLÓNEVED.github.io` — a `.github.io` végződéssel EGYÜTT!
   (Ellenőrzés: a „General" beállításoknál és a „Settings → Pages" oldalon is
   a TELJES `https://FELHASZNÁLÓNEVED.github.io` névnek kell látszania.)
   → Public → Create
3. „uploading an existing file" link → NAGYON FONTOS: a HBC_App_v12 mappában lévő
   ÖSSZES fájlt és almappát töltsd fel, de NE magát a mappát!
   Vagyis: nyisd meg a HBC_App_v12 mappát, jelölj ki MINDENT (Ctrl+A), és azt
   húzd be (index.html, manifest.json, sw.js + css/, js/, lib/, fonts/, icons/,
   store/ mappák) → Commit changes
   ❌ HIBÁS: a HBC_App_v12 mappát egyben behúzni — akkor az app a
   .../HBC_App_v12/ alcímre kerülne, és nem indulna el a főcímen!
4. Pár perc múlva az app él: `https://FELHASZNÁLÓNEVED.github.io`
   (Ha frissítesz egy fájlt, ugyanígy töltsd fel újra — a telepített appok maguktól frissülnek.)

## Telepítés Android telefonra
1. Nyisd meg Chrome-ban: `https://NEVED.github.io`
2. Koppints a felugró „Telepítés" ajánlatra, VAGY: ⋮ menü → „Alkalmazás telepítése"
3. Az ikon a kezdőképernyőre kerül — innentől offline is működik, teljes képernyőn fut

## Telepítés iPhone-ra
1. Nyisd meg Safariban: `https://NEVED.github.io`
2. Koppints a Megosztás gombra (négyzet felfelé nyíllal)
3. „Hozzáadás a kezdőképernyőhöz" → Hozzáadás
4. Az ikon a kezdőképernyőn — offline is működik

## Telepítés Windows/Mac gépre
1. Nyisd meg Chrome-ban vagy Edge-ben: `https://NEVED.github.io`
2. A címsor jobb szélén megjelenő telepítés-ikonra kattints („Alkalmazás telepítése")
3. Az app saját ablakban fut, a Start menübe / Dockba kerül

## Régi adataid átvétele (v6-ból)
- Ugyanabban a böngészőben: az új app AUTOMATIKUSAN átveszi a régi bejegyzéseket
- Másik eszközön/böngészőben: régi appban Szinkron → „📤 JSON Export" →
  az új appban Szinkron → „📥 JSON/CSV Import" (a régi és új formátumot is felismeri)

## Első beállítások (ajánlott sorrend)
1. Beállítások → nyelv, mértékegység (mmol/l vagy mg/dl), becenév, színtéma
2. Vércukor-határok + célérték + érzékenység — Andival egyeztetve
3. CH/inzulin arány (ICR) reggel/délben/este — Andival egyeztetve
4. Inzulinnevek és hatásidő ellenőrzése
5. Drive-szinkron bekapcsolása → lásd DRIVE_BEALLITASI_UTMUTATO.md

## Újdonság v11.1-ben
A szerkesztő ablakban (ceruza ikon) az étkezés ételei utólag is bővíthetők
vagy törölhetők, a „Szinkron most" gomb pedig kézi indításkor pontos
hibaüzenetet ad (lejárt bejelentkezés, hiányzó jogosultság, törölt fájl,
nincs internetkapcsolat). A telepített app neve a kezdőképernyőn „HBC Diab
Napló".

⚠️ Minden dózisjavaslat tájékoztató jellegű — a döntés mindig az orvosi iránymutatás szerint történjen!
