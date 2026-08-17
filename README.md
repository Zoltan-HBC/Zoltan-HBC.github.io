# HBC Diabétesz Napló v20 Personal APP

Telepíthető, offline is működő diabétesz napló inzulinnal kezelt cukorbetegeknek.
Telefonra, tabletre, laptopra és asztali gépre (PWA).

## Első lépések
1. **TELEPITESI_UTMUTATO.md** — közzététel (GitHub Pages, ingyenes) + telepítés minden eszközre
2. **DRIVE_BEALLITASI_UTMUTATO.md** — Google Drive szinkron + Andi követő módja + riasztások
3. **store/** mappa — Google Play megjelenés anyagai és útmutatója

## v20.3 korrekció (2026. augusztus 17.)

- **📱 "Ételek a bejegyzésben" — túl magas kártya mobil álló nézetben:** a
  hozzáadott étel-tétel sora (idő / mód / mennyiség / ráta / CH-összeg /
  törlés — akár 6 mező) korábban szabad flex-wrap-re volt bízva 480px alatt,
  ami keskeny, álló mobil nézetben kiszámíthatatlanul, akár 4-5 sorba törte a
  mezőket — a kártya emiatt irrelevánsan magas, "négyzetes" dobozzá nőtt.
  Megoldás: 480px alatt a mezők egy fix, 3 oszlopos rácsba rendeződnek, ami
  az elemszámtól függetlenül mindig legfeljebb 2 sorba fér — kompakt,
  kiszámítható magassággal (css/custom.css).
- **🌙 Sötét mód — "Egyéb tevékenység" szövegek kontrasztja:** a csempe
  háttere sötét módban sötétbarnára váltott, de a rajta lévő feliratokhoz
  (text-yellow-800/700) soha nem készült sötét módú felülírás — a világos
  módra tervezett közepes barna szín rossz, nehezen olvasható kontraszttal
  jelent meg a sötét háttéren. Pótolva a többi szín (amber/indigo/purple)
  mintájára, WCAG AAA kontraszttal (css/custom.css).
- **▾ "Egyéb tevékenység" — nagyobb legördítő-háromszög:** a korábbi
  tevékenységek listáját nyitó/csukó ▸/▾ jelzés a felirattal azonos, nehezen
  észrevehető méretű volt — önálló, nagyobb betűméretű elembe emelve
  (js/app.js).
- **➕ "Bejegyzés szerkesztése" — hiányzó "Új étel mentése adatbázisba":** ez
  a lehetőség eddig csak az "Új bejegyzés" űrlapon volt elérhető; mostantól
  az utólagos szerkesztésnél (Bejegyzés szerkesztése) is elmenthető egy új
  étel az adatbázisba (js/app.js).
- **🏷️ Névhasználat frissítése (Zoltán kérése):** a fő fejlécben és az
  indítóképernyőn (splash) a verziószám helyett mostantól az évszám látszik
  ("Type 1 Diabetes APP ⚡ 2026") — a becenév-utótag változatlan. A
  verziószám egy új "Névjegy" csempén jelenik meg a Beállítások alján, a
  Használati útmutató fölött ("HBC Diabétesz Napló 2026 - vX.Y Type 1
  Diabetes APP" / EN megfelelője). Az orvosi PDF-jelentés és a CSV-export
  fájlneve Zoltán kérésére változatlanul tartalmazza a verziószámot
  (index.html, js/app.js).

## v20.2 korrekció (2026. augusztus 14.)

- **📱💻 Responsive-ellenőrzés (mobil + asztali nézet):** átfogó ellenőrzés
  után kiderült, hogy az app.css (előre lefordított, purge-olt Tailwind-
  készlet) egy korábbi lépés óta több, ténylegesen használt segédosztályt
  nem tartalmazott. Ez érintette: (1) az "Ételek a bejegyzésben" mezőinek
  szélességét (mobilon kilóghattak a kártyából); (2) az asztali felső
  navigációs sávot (SOS/➕Új gomb, lapfül-sáv) — 768px fölött SOHA nem jelent
  meg —, és a mobil hamburger-gombot/alsó navigációt, amik asztali nézetben
  IS megjelentek; (3) az alsó mobil navigáció és a mobil menü képernyőhöz
  rögzítését; (4) mobilon a tartalom alsó térközét (a rögzített alsó
  navigáció alá lóghatott a szöveg). Mindegyik saját, nem purge-olt CSS
  osztállyal javítva (css/custom.css) — az app.css-t nem kellett újrafordítani.
  Zoltán kérésére ezután egy TELJES, programmatikus átvizsgálás történt az
  egész app.js forrásra (a ténylegesen használt ~330 CSS-osztály mindegyike
  ellenőrizve az app.css-hez képest): további 43, kisebb hatású, de valós
  hiányzó osztály került elő (kurzor, hover/focus visszajelzés, betűforma,
  térközök, pl. uppercase, underline, space-y-1.5, flex-col, cursor-pointer,
  accent-szín jelölőnégyzeteknél, focus:border-* mezőkeret-szín stb.) — ezek
  is mind saját osztályra cserélve; az egész alkalmazásban 0 hiányzó,
  ténylegesen használt CSS-osztály maradt.
- **🍽️ Ételek a bejegyzésben — g / ml / db felismerés:** a rendszer mostantól
  felismeri, hogy egy étel súly (g), folyadék (ml, pl. "1 dl" = 100 ml) vagy
  darab/adag (db, pl. "1 db", "1 adag", "1 evőkanál" — ahol nincs
  értelmezhető "100 g/ml-enkénti" arány) alapú-e, az adatbázis-tétel
  mértékegysége alapján. A felismert Mód (g/ml/db) egy legördülő menüvel
  bármikor kézzel felülbírálható. "g"/"ml" módban Mennyiség + CH/100g (vagy
  CH/100ml) pár adható meg; "db" módban egy Mennyiség (darabszám) mező.
- **✖️ Étel hozzáadása — ×1/×2/×3 szorzó javítva:** a gyorsválasztó
  szorzógombok korábban nem működtek darab/adag-alapú (pl. "1 db", "1 adag",
  "1 evőkanál" — súly/térfogat nélküli) ételeknél, mert az akkori modell csak
  a súlyalapú tételeket kezelte. Az új g/ml/db modellben a "db" módú
  tételeknél a szorzó a darabszámot (Mennyiség mezőt) állítja — ugyanúgy,
  mint a v19 és korábbi verziókban.

## v20.1 korrekció (2026. augusztus 14.)

- **📍 Hőmérséklet automatikus lekérdezése:** az Aktivitás/hőség blokk
  megjelenésekor a hőmérséklet mostantól alapból automatikusan lekérdezésre
  kerül (a készülék helye alapján) — a Beállításokban egy jelölőnégyzettel
  kikapcsolható, ekkor a korábbi, kézi "📍 Lekérdezés" gombos működés marad.
  Sikertelen/megtagadott lekérdezés esetén továbbra is kézzel megadható.
- **⚖️ Ételsorok — Súly (g) + CH/100g:** a kiválasztott ételek beírómezői
  újragondolva: Idő | Súly (g) | CH/100g | Törlés. A tétel végleges
  szénhidráttartalma (g CH) ezekből számolt, megjelenített érték — nem külön
  szerkeszthető mező. A CH/100g mező ott töltődik ki előre, ahol az
  adatbázis-tételből ismert a tipikus grammsúly; egyébként a csomagolás/
  tápértéktáblázat alapján adható meg. Régi bejegyzések automatikusan,
  veszteség nélkül jelennek meg az új modellben.
- **🏃 Tevékenység-választó — alapból összecsukva:** a "Tevékenység (választás
  a korábbiakból)" kereshető lista mostantól alapból zárt állapotban jelenik
  meg, kattintásra nyílik — kevesebb helyet foglal az űrlapon.
- **🌡️ Bázisinzulin aktív mennyisége (Lantus és társai):** új, tájékoztató
  jellegű becslés a bázisinzulin (Lantus/Abasaglar/Semglee/Toujeo/Tresiba/
  Levemir/Insulatard/Humulin N) aktív mennyiségéről, a gyártói hivatalos
  hatásidő-adatok alapján (típusonként eltérő hatástartam és lecsengési
  görbe). Külön számkártya és a Humalog-IOB-val közös vonalgrafikon az
  Áttekintésen és a Statisztikán, valamint összefoglaló az Orvosi riportban
  — kizárólag informatív, NEM kerül levonásra a bólusz-javaslatból.
- **🌅 Hajnali jelenség / Somogyi-hatás felismerés (új, tájékoztató):** a napló
  automatikusan felismeri a hajnali (alapból 03:00–08:00, Beállításokban
  módosítható), CH-bevitel/gyors inzulin nélküli, figyelemre méltó
  vércukor-emelkedéseket, és megkülönbözteti a hajnali jelenség-gyanús és a
  Somogyi-hatás-gyanús mintázatot (utóbbinál alacsony vércukor előzte meg az
  emelkedést). Statisztika oldal + Orvosi riport összefoglaló — kizárólag
  mintafelismerés, nem diagnózis és nem automatikus dózisjavaslat.

## v20.0 korrekció (2026. augusztus 12.)

- **⏰ Mérés eltolódási hiba javítva:** ha egy Étkezés bejegyzés fő időpontja
  utólag automatikusan a legkorábbi ételtétel-időponthoz igazodott (pl.
  7:30-kor mért vércukor, majd 8:00-kor kezdett reggeli esetén a bejegyzés
  ideje 8:00-ra vált), a vércukor mérésének (és az inzulin beadásának) eredeti
  pillanata korábban ilyenkor elveszett — mostantól mindig megmarad és
  látszik a "Bejegyzések" kártyáin, a részletnézetben, a PDF orvosi
  riportban és a CSV-exportban is (ugyanúgy, mint a kézi Időpont-mező
  módosításánál eddig is).
- **🔒 Privát bejegyzés minden típusnál:** a korábban csak "Egyéb
  tevékenység"-nél elérhető "Privát bejegyzés" kapcsoló mostantól Étkezés,
  Kontroll és Lantus bejegyzéseknél is beállítható — a Követő ezeket sem
  látja.
- **🔍 Kereshető tevékenység-választó:** a "Válassz korábbi tevékenységet…"
  egyszerű legördülője helyett kereső mező + élő szűrt, kattintható lista —
  sok korábbi tevékenység esetén is gyors a választás, az Ételek
  gyorsválasztójával megegyező működéssel.
- **⚖️ Egyedi gramm/CH ételsoronként:** a bejegyzésbe felvett ételek eddigi
  1–10-es egész szorzója helyett minden ételsornál szabadon megadható/
  korrigálható a ténylegesen elfogyasztott mennyiség (g) ÉS a hozzá tartozó
  szénhidrát (g CH) — felviteltnél és utólagos szerkesztésnél egyaránt (pl.
  "Rizs (1 adag 125 g) 50,0 g CH", ha csak a fele fogy el, 62 g / 25,0 g CH
  írható be). A beépített CH-táblázat és a saját Ételek alapértékei
  továbbra is külön, tartósan is szerkeszthetők (Ételek oldal).
- **✏️ Aktivitás/hőség profil utólag is szerkeszthető:** a felviteltnél
  választható profil és hőmérséklet eddig utólag nem volt módosítható —
  mostantól a Bejegyzés szerkesztésében is elérhető, azonos működéssel
  (profil-választó, hőmérséklet kézi vagy 📍 lekérdezéssel).
- **📊 Statisztika — megerősítve:** a Statisztika mindig az aktuális,
  korrigált bejegyzés-adatokat használja; a CGM-import (ha van ilyen
  eszközöd) továbbra is teljesen külön adattárban marad, a kézi korrekciók
  nem érintik.
- **🧹 Kódtisztítás:** az ételsorok megszűnt szorzó-mezője (mult) törölve;
  régi, még szorzóval mentett bejegyzések automatikusan, veszteség nélkül
  jelennek meg az új gramm/CH modellben.
- **📅 Áttekintés — legutóbbi bejegyzés elöl (finomítás):** a "Mai
  bejegyzések" lista az Áttekintés oldalon mostantól a legutóbbi bejegyzést
  mutatja először, ugyanúgy, mint a Bejegyzések/Napló oldal listája
  (korábban időrendben, a legkorábbival kezdődött).

## v19.6 korrekció (2026. július 30.)

- **Profilkép mérete és reszponzivitása javítva:** a fejlécben megjelenő
  profilkép korábban a lepurgázott stíluslapból hiányzó méretosztályok miatt
  a natív (256×256 képpontos) méretében jelent meg — irrelevánsan nagyra
  nőve, és szétverve a fejléc, illetve (feltöltés után) a Beállítások
  "Fénykép választása"/"Törlés" gombjainak elrendezését minden eszközön,
  asztali nézetben is. Mostantól a fejléci profilkép mérete a HBC logó
  pontosan kétszerese (saját, garantáltan érvényes CSS-osztállyal, nem a
  hiányzó Tailwind-osztályoktól függ), a Beállítások oldali előnézet fix,
  kompakt méretű, a gombsor pedig szükség esetén tördelődik. (7.4, 7.5)

## v19.5 korrekció (2026. július 30.)

- **Vércukor-mérés időpontja nem csúszik el:** ha egy már rögzített
  vércukor-értékkel rendelkező bejegyzés fő Időpontját utólag módosítod
  (pl. egy Étkezésnél előrébb tolod az időt, mert később eszel), a mérés
  eredeti pillanata mostantól mindig külön megmarad — mintha a "Mérés ideje
  eltér?" opcióval explicit módosítottad volna. Korábban a mérés implicit
  időpontja együtt csúszott a fő Időponttal.

## v19.4 korrekció (2026. július 30.)

- **Kerek mmol/l érték teljes alakban:** az Áttekintés és a Bejegyzések oldal
  kártyáin a vércukor mmol/l-es értéke mostantól mindig egy tizedesjeggyel
  jelenik meg (pl. "8.0") — korábban a kerek értékek tizedesjegy nélkül,
  csonkítva látszottak (pl. "8"). Javítás: új `window.bgU.dispFixed()`
  segédfüggvény (a `disp()` numerikus marad, mert a grafikonok is használják).
- **Sötét mód — Aktivitás/hőség profilok kontrasztjavítás:** a profilokkal
  kapcsolatos kártyák (Beállítások, Statisztika) szövege sötét módban is jól
  olvasható lett — korábban sötétzöld szöveg jelent meg szürkés háttéren
  (hiányzó `.text-teal-700`/`.text-teal-600` és `bg-teal-50` opacitás-változat
  dark-mode felülírások pótolva).

## v19.3 kiegészítés (2026. július 30.)

- **Kalibrálható visszatekintő elemzés:** az Aktivitás/hőség profilok
  visszatekintő elemzésének vizsgált időszaka mostantól 1 napra is
  lecsökkenthető (nem csak 7+ napra). Az app megmutatja, hány mérésből és
  milyen időszak alapján számolt ("miből kalkulált"), és 3 szintű
  megbízhatósági visszajelzést ad (kevés/korlátozott/elég adat). A "mérés
  utáni" időablak (mettől-meddig számít egy érték az adott profilhoz tartozó
  eredménynek) gyors preset-listából vagy egyénileg is beállítható és
  megmarad a Beállításokban.
- **Testsúly mező:** új, opcionális testsúly-mező az Új bejegyzésnél és a
  Bejegyzés utólagos szerkesztésénél is. A legutóbb rögzített érték az
  Áttekintés "Mai naplózási kör" csempéjén jelenik meg — asztalin a csík
  alatt, mobilon a felirat-sorban jobbra igazítva, a csík fölött.
- **"Megnyitás" gomb az Új szolgáltatásoknál:** a Beállítások "Új
  szolgáltatások (v19)" listájában minden szolgáltatás neve mellett egy
  gomb egyenesen a szolgáltatás saját felületére navigál — a ki-be kapcsoló
  továbbra is a listában marad.
- **Profilkép:** a Beállítások "Becenév" mezője mellett spontán fénykép
  készíthető a kamerával, vagy tetszőleges kép választható a
  galériából/gépről (egyetlen vezérlő kínálja fel mindkettőt). A kép csak a
  készüléken tárolódik, kör alakban jelenik meg a Beállításokban és a
  fejlécben is.
- **Ikonok a Felhasználói kézikönyvben:** a korábban egyes rendszereken/PDF-
  nézőkben kérdőjeles négyzetként megjelenő emoji-jelek helyett a kézikönyv
  (HU/EN) most saját, éles képi ikonokat használ minden olyan helyen, ahol
  vizuális útmutatást ad — ez minden Word-verzióban és PDF-nézőben
  egységesen, helyesen jelenik meg.

## v19.2 kiegészítés (2026. július 29.)

- **⏱️ "Egyéb tevékenység" kártya — -tól-ig a dátumsorban:** ha egy bejegyzés
  kizárólag "Egyéb tevékenység" (nincs rajta vércukor és inzulin sem), a kártya
  dátum/idő sora a bejegyzés időpontja helyett a tevékenység teljes -tól-ig
  időtartamát mutatja (pl. "2026. júl. 29. – 08:30–12:30"), a tevékenység kis
  csempéjén pedig csak az össz-időtartam marad (pl. "4 ó"), hogy az információ
  ne ismétlődjön kétszer. Ha a bejegyzésen más adat (vércukor, inzulin) is
  szerepel, minden a megszokott módon marad: a dátumsor a bejegyzés időpontját
  mutatja, a -tól-ig a tevékenység-csempén, zárójelben látszik.

## v19.1 kiegészítés (2026. július 29.)

- **👁️ "Szem" nézet Tulajdonos módban is:** az "Áttekintés" oldal "Mai bejegyzések"
  kártyáin és a "Bejegyzések" oldal listájában a Tulajdonos (nem csak a Követő)
  is kap egy 👁️ gombot minden bejegyzésen — ugyanaz a csak-olvasó részletnézet
  nyílik meg, amit eddig csak a Követő látott. A ✏️ szerkesztés-gomb változatlanul,
  külön elérhető marad.

## v19.0 új szolgáltatás (2026. július 29.)

- **🌡️ Aktivitás/hőség profilok:** szabadon szerkeszthető preset-lista (Beállítások →
  Aktivitás/hőség profilok) — pl. „Könnyű házimunka”, „Kerti munka – enyhén/extrém
  meleg” — mindegyik reggel/délben/este saját %-os bólus-csökkentéssel + szabad
  szöveges "javasolt extra CH" emlékeztetővel (pl. „Szőlőcukor 2 db / 10g CH”).
  Alapból be van kapcsolva (Beállítások → Új szolgáltatások (v19), ki-be kapcsolható).
- **📍 Alkalmazás Új bejegyzésnél:** a bólus-kalkulátor kártyán opcionális profil-
  választó + hőmérséklet mező (📍 Lekérdezés gomb: helyadat + ingyenes Open-Meteo
  API, vagy kézi bevitel) — a kiválasztott profil a napszaknak megfelelő %-kal
  korrigálja a javasolt adagot, badge mutatja a korrekciót és az emlékeztetőt.
  A mentéskor alkalmazott név/%/hőmérséklet rögzül a bejegyzésen (a profil későbbi
  szerkesztése/törlése nem módosítja visszamenőleg a már mentett bejegyzéseket).
  Megjelenik a bejegyzés-kártyán (badge) és a bejegyzés-részletekben is.
- **📊 Visszatekintő elemzés (Statisztika oldal):** állítható időszak (napban)
  alapján, profilonként megmutatja az azt követő mérések átlagos elmozdulását, és
  tájékoztató javaslatot ad (nagyobb/kisebb csökkentés indokolt lehet-e) — csak
  javaslat, semmit nem ír át automatikusan, "⚠️ Orvossal egyeztess!" jelzéssel.
- Ez a funkció a `HBC_App_v19` mappában él (a `HBC_App_v18.7` változatlan marad).

## v18.9 korrekció (2026. július 29.)

- **📋 "Bejegyzések" (Napló) oldal — egységes elrendezés az Áttekintéssel:** a
  v18.8-ban bevezetett "Mai bejegyzések" elrendezés (Típus felül, alatta saját
  sorban, balra igazítva a dátum/idő, majd a többi adat-címke, majd a jegyzet,
  nagyobb/erősebb kontrasztú szöveggel) mostantól a Bejegyzések/Napló oldal
  listáján is pontosan így jelenik meg — mobilon és asztalin egyaránt.
- **🧹 Kódtisztítás:** a bejegyzéskártya korábbi "emphasize" kapcsolója (ami
  addig az Áttekintés és a Napló oldal eltérő elrendezését/betűméretét
  vezérelte) megszűnt — mivel mindkét oldal ugyanazt az elrendezést kapja,
  a kapcsoló és a hozzá tartozó elágazások feleslegessé váltak.

## v18.8 finomítás (2026. július 29.)

- **📅 "Mai bejegyzések" — egyszerűsített elrendezés:** a v18.7-ben bevezetett,
  asztalin külön oszlopos (Típus+adatok jobbra, dátum/idő balra) elrendezés
  helyett mostantól egységes, függőleges elrendezés — mobilon és asztalin
  egyaránt: Típus, alatta (saját sorban, balra igazítva) a dátum/idő, majd a
  többi adat-címke (vércukor, CH, inzulin, tevékenység), majd a jegyzet. Több
  magasságot foglal, de olvashatóbb.
- **⏰ Inzulin beadási idő — véglegesen rögzítve az étkezés-időpont mögött:**
  a v18.7-es "Étkezésnél a legkorábbi ételtétel-időponthoz igazodó fő
  időpont" finomítva — eddig csak a vércukor mérési ideje maradt változatlan
  a fő időpont esetleges elmozdulásakor, az inzulin (Humalog/Lantus) beadási
  ideje nem. Mostantól az inzulin adag beírásakor (vagy a bólusjavaslat
  elfogadásakor) is rögzül az akkori időpont, és az a fő időpont későbbi
  elmozdulásától függetlenül változatlan marad — pl. 6:30-kor mért vércukor
  és beadott inzulin, majd 7:30-kor kezdett étkezés esetén a bejegyzés ideje
  7:30-ra vált, de a mérés és a beadás ideje (6:30) nem.
- **🧹 Kódtisztítás:** a v18.7-es "Mai bejegyzések" grid-elrendezéshez tartozó,
  most feleslegessé vált CSS-szabályok eltávolítva.

## v18.7 javítás és bővítés (2026. július 28.)

- **📱 "Bejegyzés szerkesztése" — hosszú ételnév tördelése:** a bejegyzéshez
  hozzáadott ételek sora mobil álló nézetben hosszú ételnévnél korábban
  töredezetten jelent meg, a ❌ törlés gomb kilógott a kártyából — mostantól a
  sor szükség esetén tördelődik, a vezérlők (idő/szorzó/❌) sosem lógnak ki.
  Ugyanez a javítás az Új bejegyzés űrlapján is.
- **🩸 "Legutóbbi vércukor" nagy csempe — teljes tizedesjegy:** kerek mmol/l
  érték (pl. 7.0) eddig csonkolva ("7") jelent meg ezen az egy csempén —
  mostantól mindig a teljes, egy tizedesjegyes alakban látszik. Mg/dl esetén
  (egész szám) a megjelenés változatlan. (A v18-as "CH értékek egységesen egy
  tizedessel" javítás a szénhidrát-értékekre vonatkozott — ez a hiba
  kifejezetten a vércukor-megjelenítést érintette, most ez is javítva.)
- **📚 Beépített CH-táblázat a Bejegyzés szerkesztésében is:** az Új bejegyzés
  ételválasztójában már elérhető, kategóriánként/kereséssel böngészhető
  "Magyar CH-táblázat (beépített, 205 tétel)" mostantól a "Bejegyzés
  szerkesztése" ablakban is elérhető, azonos működéssel.
- **🥗 "Ételek" oldal — lenyitható listák:** az "Összes étel" lista és a
  "Beépített magyar CH-táblázat (205 tétel)" mostantól lenyitható/összecsukható
  kártyák, alapból ZÁRVA (asztali és mobil nézetben egyaránt) — gyorsabb
  áttekintés, kevesebb görgetés.
- **📅 "Mai bejegyzések" — asztali elrendezés és olvashatóság:** asztali nézetben
  a dátum/idő blokk balra, a Típus + vércukor/CH/inzulin/tevékenység adatok
  jobbra kerülnek (mobilon a korábbi elrendezés változatlan). A szövegek
  betűmérete nőtt és kontrasztja erősödött, Világos és Sötét beállítás esetén
  is, asztali ÉS mobil nézetben egyaránt.
- **⏰ Típus szerinti alapértelmezett időpont + külön vércukor mérési idő:**
  - Étkezésnél a bejegyzés FŐ időpontja automatikusan a legkorábbi
    ételtétel-időponthoz igazodik (pl. 6:30-kor mért vércukor, majd 7:30-kor
    elkezdett étkezés esetén a bejegyzés ideje 7:30-ra vált).
  - A vércukor mérésének saját időpontja ekkor külön, változatlanul megmarad
    (pl. "🩸 6,2 mmol/l · ⏰ 6:30"), és mindenhol megjelenik, ahol eltér a
    bejegyzés fő idejétől: Mai bejegyzések kártya, Bejegyzés megtekintése,
    Bejegyzés szerkesztése, CSV-export/import, e-mailes/PDF orvosi riport.
  - Kontroll, Lantus és Egyéb tevékenység típusnál a fő időpont változatlanul
    a felhasználó által megadott (mérés / beadás / kezdés) időpont; egy
    esetlegesen hozzáadott "Tevékenység" adat nem írja felül.
- **🧹 Kódtisztítás:** a fenti javítások mellett néhány, korábban duplikált és
  soha nem érvényesülő sötét-módú CSS-szabály eltávolítva (a működést nem
  érintette, mert a felülíró szabály eddig is érvényben volt).

## v18.6 javítás (2026. július 26.)

- **⏱️ Tevékenység "-tól-ig" ideje visszafelé számolva:** a tevékenység (Egyéb
  tevékenység / Kontroll) időtartam-csúszkája mostantól a bejegyzés (rögzítés)
  időpontjából VISSZAFELÉ számolja a kezdetet, mert a tevékenység utólag, a
  befejezése után kerül naplózásba. A "⏰ Pontos kezdés/befejezés megadása"
  gombbal a Kezdete és a Vége órája külön is pontosítható — pl. ha a rögzítés
  később történt, mint a tényleges befejezés. Az Áttekintésen és a bejegyzés
  megtekintésénél mostantól a "-tól-ig" idősáv is látszik az időtartam mellett.
- **📝 Elavult, automatikusan visszatérő jegyzet-szöveg megszüntetve:** egy régi
  (v15 előtti) migrációs mechanizmus miatt egy törölt megjegyzés időnként
  újra megjelent a legutóbbi vércukor-bejegyzés jegyzeteinél — a hibás
  mechanizmus eltávolítva, a jelenség nem térhet vissza.

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
