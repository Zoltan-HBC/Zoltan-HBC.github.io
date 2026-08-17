/* ═══════════ HBC v8.0 — KÉTNYELVŰSÉG (hu/en) + MÉRTÉKEGYSÉG (mmol/l ↔ mg/dl) ═══════════
   A fordítás megjelenítéskor történik: a tárolt adatok mindig magyarul / mmol/l-ben maradnak,
   így nyelv- vagy egységváltásnál semmilyen adat nem sérül. */

window.HBC_I18N = (function() {
 let lang = localStorage.getItem('hbc-lang') || 'hu';

 /* HU → EN szótár. Ami nincs benne, magyarul jelenik meg (biztonságos visszaesés). */
 const EN = {
  // ═══ v18: új szolgáltatások ═══
  'Motivációs üzenetek': 'Motivational messages',
  'Ezek az üzenetek jelennek meg bejegyzés mentése után, ha az érték céltartományban van. Soronként egy üzenet — szabadon átírhatod, törölheted, bővítheted.': 'These messages appear after saving an entry when the value is in range. One message per line — edit, delete or extend them freely.',
  'Üres sorok nem számítanak. Ha minden sort törölsz, az alapüzenetek élnek.': 'Empty lines are ignored. If you delete all lines, the default messages are used.',
  'Alapüzenetek visszaállítása': 'Restore default messages',
  'Megjelenítés hossza': 'Display duration',
  'mp': 's',
  'Sorozat feliratai': 'Streak card texts',
  'Az Áttekintés Sorozat-kártyáján megjelenő szövegek — fogalmazd a saját ízlésedre!': 'Texts shown on the Streak card of the Overview — phrase them to your own taste!',
  'Kártya címe': 'Card title',
  'Szám utáni felirat': 'Text after the number',
  'Buzdító üzenet (3+ napnál)': 'Encouraging message (3+ days)',
  'Alapfeliratok visszaállítása': 'Restore default texts',
  'Új szolgáltatások (v19)': 'New features (v19)',
  'Minden új szolgáltatás külön ki-be kapcsolható. Alapállapotban mind be van kapcsolva.': 'Every new feature can be switched on/off separately. All are enabled by default.',
  'Beépített magyar CH-táblázat': 'Built-in Hungarian carb table',
  'Több száz magyar étel az Ételek gyorsválasztó keresőjében, internet nélkül.': 'Hundreds of Hungarian foods in the quick-select search, fully offline.',
  'AGP nézet (percentilis sávok)': 'AGP view (percentile bands)',
  'Nemzetközi szabvány szerinti grafikon a Statisztika oldalon: medián + 50% és 90% sávok.': 'International standard chart on the Statistics page: median + 50% and 90% bands.',
  'Zsíros/fehérjedús étel jelölés': 'Fatty/protein-rich meal flag',
  'Kapcsoló az étkezés bejegyzésben + figyelmeztetés az elnyújtott vércukor-emelkedésre.': 'Toggle on the meal entry + warning about delayed glucose rise.',
  'Bluetooth vércukormérő kapcsolat': 'Bluetooth glucose meter connection',
  'Az utolsó mérés átvétele szabványos Bluetooth mérőből. Android + Chrome szükséges; iPhone-on nem támogatott.': 'Reads the last measurement from a standard Bluetooth meter. Requires Android + Chrome; not supported on iPhone.',
  'Előrejelzett alacsony érték riasztás': 'Predicted low alert',
  'A követő már azelőtt riasztást kap, hogy a CGM-érték a határ alá esne (trend-alapú előrejelzés).': 'The follower is alerted before the CGM value drops below the limit (trend-based prediction).',
  'Étkezés utáni mérési emlékeztető': 'Post-meal measurement reminder',
  'Beállítható idővel az étkezés után jelez az Áttekintésen, hogy ideje ellenőrző mérést végezni.': 'Signals on the Overview a configurable time after a meal that it is time for a control measurement.',
  'Keresés a naplóban': 'Diary search',
  'Szabad szavas keresés a Bejegyzések oldalon (pl. „pizza") — a teljes naplóban.': 'Free-text search on the Entries page (e.g. "pizza") — across the whole diary.',
  'Heti összefoglaló a követőnek': 'Weekly summary for the follower',
  'A követő készülékén hetente egyszer rövid összesítő: TIR, átlag, hipók száma.': 'A short weekly digest on the follower device: TIR, average, number of hypos.',
  // ═══ v19: aktivitás/hőség profilok ═══
  'Aktivitás/hőség profilok': 'Activity/heat profiles',
  'Szerkeszthető profilok (pl. kerti munka, meleg idő) a bólusjavaslat napszakonkénti %-os csökkentéséhez + extra CH emlékeztetőhöz. Beállítás: lentebb, külön kártyán.': 'Editable profiles (e.g. garden work, hot weather) for a time-of-day % reduction of the bolus suggestion, plus an extra-carb reminder. Configure below, on its own card.',
  'Aktivitás/hőség profil (opcionális)': 'Activity/heat profile (optional)',
  'Aktivitás/hőség profil': 'Activity/heat profile',
  'Nincs (alap)': 'None (default)',
  'Lekérdezés': 'Fetch',
  'Lekérdezés…': 'Fetching…',
  'korrigálva': 'adjusted',
  'Javasolt extra CH': 'Suggested extra carbs',
  'A böngésző nem támogatja a helyadatot.': 'This browser does not support location data.',
  'Nem érkezett hőmérséklet-adat.': 'No temperature data was returned.',
  'Nem sikerült elérni az időjárás-szolgáltatást.': 'Could not reach the weather service.',
  'Nincs engedély a helyadat lekéréséhez.': 'Location permission was not granted.',
  'Saját preset-ek (pl. kerti munka, meleg idő) az Új bejegyzés bólus-javaslatának napszakonkénti %-os csökkentéséhez. A negatív érték csökkenti, a pozitív növeli a javasolt adagot. Az „extra CH” szabad szöveg, csak emlékeztető — nem kerül automatikusan összeadásra.': 'Your own presets (e.g. garden work, hot weather) for a time-of-day % reduction of the New entry bolus suggestion. A negative value reduces, a positive value increases the suggested dose. The "extra carbs" field is free text — a reminder only, never added automatically.',
  'Profil neve': 'Profile name',
  'Javasolt extra CH (pl. „Szőlőcukor 2 db / 10g CH”)': 'Suggested extra carbs (e.g. "Glucose tablets x2 / 10g carbs")',
  'Új profil': 'New profile',
  'Új profil hozzáadása': 'Add new profile',
  'Alapértelmezett profilok visszaállítása': 'Restore default profiles',
  'Aktivitás/hőség profilok — visszatekintő elemzés': 'Activity/heat profiles — retrospective analysis',
  'Vizsgált időszak': 'Analysis period',
  'nap': 'days',
  'Még nincs elég adat: jelölj meg profilt egy-két Étkezés bejegyzésnél a bólus-kalkulátornál, majd térj vissza ide.': 'Not enough data yet: tag a profile on a couple of Meal entries at the bolus calculator, then come back here.',
  'alkalom': 'times',
  'Átlagos vércukor-elmozdulás a mérés után': 'Average glucose change after the reading',
  'Még kevés adat (n<3) — egyelőre nem eléggé megbízható.': 'Still too little data (n<3) — not reliable enough yet.',
  'Talán nagyobb csökkentés indokolt ennél a profilnál.': 'A larger reduction may be worth considering for this profile.',
  'Talán kisebb csökkentés is elég ennél a profilnál.': 'A smaller reduction may already be enough for this profile.',
  'A jelenlegi beállítás megfelelőnek tűnik.': 'The current setting looks about right.',
  'Csak tájékoztató jellegű, nem orvosi javaslat — a %-ok módosítása mindig a te döntésed. Orvossal egyeztess!': 'For information only, not medical advice — changing the % values is always your own decision. Consult your doctor!',
  /* v19.3 (feladat 1): kalibrálható visszatekintő elemzés — 1 napra lecsökkenthető
     időszak, kalibrálható perc-ablak, "miből számolt" visszajelzés */
  '1 nap': '1 day',
  'nap (egyéni)': 'days (custom)',
  '⚙️ Számítás finomhangolása': 'Fine-tune the calculation',
  'Számítás finomhangolása': 'Fine-tune the calculation',
  'Gyors preset': 'Quick preset',
  'Rövid (gyors inzulin hatása) — 15–120 perc': 'Short (fast insulin effect) — 15–120 min',
  'Alapértelmezett (ajánlott) — 30–360 perc': 'Default (recommended) — 30–360 min',
  'Hosszú (napközbeni elhúzódó hatás) — 60–480 perc': 'Long (extended daytime effect) — 60–480 min',
  'Egyéni beállítás': 'Custom setting',
  'Legkorábban a bejegyzés után': 'Earliest after the entry',
  'legkésőbb': 'latest',
  'Ez határozza meg, hogy egy mérés mennyi idő elteltével még "az adott profilhoz tartozó eredménynek" számít. Alapból jó, de finomítható.': 'This determines how long after the entry a reading still counts as "the result of that profile". The default is fine, but you can fine-tune it.',
  'Az utolsó': 'Based on the last',
  'nap adatai alapján': 'days of data',
  '1 mérésből': 'from 1 reading',
  'mérésekből': 'from readings',
  'Kevés adat (n<3) — inkább csak irányadó, egyelőre nem eléggé megbízható.': 'Little data (n<3) — indicative only, not reliable enough yet.',
  'Korlátozott mennyiségű adat — óvatosan értelmezd, még gyűjts tapasztalatot.': 'Limited amount of data — interpret with caution, keep gathering experience.',
  /* v19.3 (feladat 2): testsúly mező */
  '⚖️ Testsúly (kg)': '⚖️ Weight (kg)',
  'pl. 72.5': 'e.g. 72.5',
  /* v19.3 (feladat 3): "Megnyitás" gomb az Új szolgáltatások listában */
  'Ugrás a szolgáltatás felületéhez': 'Go to the feature\'s screen',
  'Megnyitás': 'Open',
  /* v19.3 (Feature B): profilkép */
  'Profilkép': 'Profile photo',
  'Feldolgozás…': 'Processing…',
  'Fénykép választása': 'Choose photo',
  'Telefonon a fényképezőgép és a galéria közül is választhatsz — a böngésző saját választója ajánlja fel mindkettőt. A kép csak ezen a készüléken tárolódik.': 'On a phone you can pick either the camera or the gallery — your browser\'s own picker offers both. The photo is stored only on this device.',
  'Jelzés az étkezés után': 'Remind after meal',
  'perc': 'min',
  'javasolt': 'recommended',
  'Nagy betűs mód': 'Large font mode',
  'Nagyobb betűméret az egész alkalmazásban — idősebb vagy gyengébben látó felhasználóknak. (Ez megjelenítési opció, ezért alapból kikapcsolt.)': 'Larger font size across the whole app — for older or visually impaired users. (Display option, therefore off by default.)',
  'Magyar CH-táblázat (beépített)': 'Hungarian carb table (built-in)',
  'találat': 'hits',
  'Válassz fent kategóriát, vagy írj be legalább 2 betűt a keresőbe (pl. „kenyér", „alma", „rizs") — a beépített táblázat tételei itt jelennek meg.': 'Choose a category above, or type at least 2 letters into the search box (e.g. "bread", "apple", "rice") — items of the built-in table appear here.',
  /* v18.7: lenyitható/összecsukható listák (Ételek oldal) */
  'Nyit': 'Open',
  'Zár': 'Close',
  /* v18.5: logó = sötét/világos váltó */
  'Sötét/világos nézet váltása': 'Toggle dark/light view',
  /* v18.4: tételenkénti CH-időpontok */
  'Ennek a tételnek az elfogyasztási ideje (alapból a bejegyzés időpontja)': 'The time this item was eaten (defaults to the entry time)',
  'Az óra mezővel tételenként megadhatod, MIKOR fogyasztottad el az adott ételt — alapból a bejegyzés időpontja érvényes. A módosított időpontú tétel zöld kerettel jelenik meg, és a grafikonon meg az étkezés utáni emlékeztetőben a saját idejével számít.': 'With the clock field you can set per item WHEN you ate that food — by default the entry time applies. An item with a modified time gets a green frame, and counts with its own time on the chart and in the post-meal reminder.',
  /* v18.2: CH-táblázat böngészés */
  'tétel': 'items',
  'tétel látható': 'items shown',
  'Mind': 'All',
  'Kattints egy kategóriára, vagy keress! A ➕ gombbal bármely tétel átemelhető a saját ételeid közé, hogy a gyorsválasztó tetején legyen. Az értékek átlagos, kerekített értékek — a pontos CH terméktől függően eltérhet.': 'Click a category or search! With the ➕ button any item can be copied into your own foods so it sits at the top of the quick picker. The values are average, rounded figures — exact carbs may differ by product.',
  'Keresés a táblázatban...': 'Search the table...',
  'Átemelés a saját ételek közé': 'Copy to your own foods',
  'Ez az étel már szerepel a saját ételeid között.': 'This food is already among your own foods.',
  'Átemelve a saját ételeid közé!': 'Copied to your own foods!',
  'Pékáru': 'Bakery',
  'Köret': 'Side dish',
  'Leves': 'Soup',
  'Főétel': 'Main course',
  'Édes főétel': 'Sweet main',
  'Gyümölcs': 'Fruit',
  'Zöldség': 'Vegetable',
  'Tejtermék': 'Dairy',
  'Édesség': 'Sweets & snacks',
  'Ital': 'Drink',
  'Hipó-kezelés': 'Hypo treatment',
  'Nincs találat a beépített táblázatban.': 'No match in the built-in table.',
  'Átlagos, kerekített értékek — a pontos CH terméktől függően eltérhet.': 'Average, rounded values — exact carbs may differ by product.',
  'Zsíros, fehérjedús étel': 'Fatty, protein-rich meal',
  'A zsír és a fehérje lassítja a felszívódást: a vércukor később, elnyújtva is emelkedhet. Javasolt 2–3 óra múlva ellenőrző mérést végezni. Ez tájékoztatás, nem dózistanács — kérdéseddel fordulj kezelőorvosodhoz!': 'Fat and protein slow absorption: glucose may rise later, in a prolonged way. A control measurement in 2–3 hours is recommended. This is information, not dosing advice — ask your doctor with any question!',
  'elnyújtott felszívódás — 2–3 óra múlva ellenőrző mérés javasolt': 'prolonged absorption — control measurement recommended in 2–3 hours',
  'Mérés átvétele Bluetooth vércukormérőből': 'Read measurement from Bluetooth glucose meter',
  'A Bluetooth-átvétel Android telefonon, Chrome böngészőben működik. iPhone-on kézi bevitel szükséges.': 'Bluetooth reading works on Android phones in Chrome. On iPhone, manual input is required.',
  'Keresés a naplóban (pl. pizza, séta, reggeli)...': 'Search the diary (e.g. pizza, walk, breakfast)...',
  'A keresés a teljes naplóban fut, a fenti dátumszűrőtől függetlenül.': 'The search runs across the whole diary, regardless of the date filter above.',
  'Az utolsó étkezés óta': 'Since the last meal',
  'perc telt el — ideje ellenőrző mérést végezni!': 'minutes have passed — time for a control measurement!',
  '(Zsíros/fehérjedús étel volt: 2–3 óra múlva is érdemes mérni.)': '(It was a fatty/protein-rich meal: measuring after 2–3 hours is also worthwhile.)',
  'Rendben': 'OK',
  'Heti összefoglaló (utolsó 7 nap)': 'Weekly summary (last 7 days)',
  'hipó': 'hypos',
  'Medián': 'Median',
  'A vastag vonal az óránkénti középérték (medián). A sötétebb sáv a mérések középső 50%-a (25–75. percentilis), a halványabb a középső 90%-a (5–95. percentilis). Ujjbegyes és CGM-adatok együtt': 'The thick line is the hourly median. The darker band is the middle 50% of readings (25th–75th percentile), the lighter one the middle 90% (5th–95th percentile). Fingerstick and CGM data combined',
  'mérés': 'readings',
  'Előrejelzett alacsony érték!': 'Predicted low value!',
  'A vércukor süllyed': 'Glucose is falling',
  'kb. 20 perc múlva': 'in about 20 minutes',
  // Navigáció
  'Áttekintés': 'Overview',
  'Grafikonok': 'Charts',
  'Bejegyzések': 'Entries',
  'Statisztika': 'Statistics',
  'Ételek': 'Foods',
  'Szinkron': 'Sync',
  'Beállítások': 'Settings',
  'HBC Diabétesz Napló': 'HBC Diabetes Diary',
  // v12: SOS vészhelyzeti modul
  'Vészhelyzet': 'Emergency',
  'Vészhelyzet (SOS)': 'Emergency (SOS)',
  'A követő mód csak-olvasási Google Drive-jogot kér. Ez azért kell, hogy a kiválasztott naplófájl a Google-belépés lejárta után se „vesszen el”. Az app ezzel sem tud semmit írni vagy módosítani a Drive-on.': 'Follower mode requests read-only Google Drive access. This is needed so the selected diary file is not "lost" after the Google sign-in expires. Even with this, the app cannot write or modify anything on Drive.',
  'Ezek az adatok a menü piros SOS gombjára koppintva jelennek meg — az ismeretlen segítők és a mentők számára.': 'This information appears when the red SOS button in the menu is tapped — for unknown helpers and paramedics.',
  'Minden adat kizárólag a te eszközödön tárolódik.': 'All data is stored only on your device.',
  'Teljes név (Orvosi riporton is)': 'Full name (also shown on the Medical report)',
  'Saját telefonszám (Orvosi riporton is)': 'Own phone number (also shown on the Medical report)',
  'Lakcím': 'Home address',
  'Értesítendő hozzátartozók': 'Contacts to notify',
  'Név': 'Name',
  'Kapcsolat (pl. párom)': 'Relation (e.g. partner)',
  'Telefonszám': 'Phone number',
  'Hozzátartozó hozzáadása': 'Add contact',
  'A lista első tagja a fő értesítendő.': 'The first person in the list is the primary contact.',
  'Így kommunikálj velem (szabadon szerkeszthető)': 'How to communicate with me (fully editable)',
  'Saját tapasztalataid alapján írd le a segítőknek, milyen vagy hipoglikémiásan, és hogyan érdemes veled bánni!': 'Based on your own experience, tell helpers what you are like during hypoglycaemia and how they should treat you!',
  'pl. Ilyenkor zavart vagyok, elutasító lehetek — mintha részeg lennék. Nyugodtan, lassan beszélj, ne vitatkozz velem, add a kezembe a szőlőcukrot vagy a cukros üdítőt!': 'e.g. I may be confused and dismissive — as if I were drunk. Speak calmly and slowly, do not argue with me, put glucose tablets or a sugary drink in my hand!',
  // Típusok, étkezések
  'Étkezés': 'Meal',
  'Kontroll': 'Check',
  'Lantus': 'Basal (Lantus)',
  'Egyéb tevékenység': 'Other activity',
  'Reggeli': 'Breakfast',
  'Tízórai': 'Mid-morning snack',
  'Ebéd': 'Lunch',
  'Uzsonna': 'Afternoon snack',
  'Vacsora': 'Dinner',
  'Utóvacsora': 'Late-night snack',
  // Gombok, műveletek
  'OK': 'OK',
  '✅ Igen': '✅ Yes',
  '❌ Nem': '❌ No',
  '✅ Mentés': '✅ Save',
  '✅ Hozzáad': '✅ Add',
  '✅ Összes': '✅ All',
  '❌ Zár': '❌ Close',
  '➕ Új': '➕ New',
  '➕ Új bejegyzés': '➕ New entry',
  '➕ Új étel hozzáadása': '➕ Add new food',
  '✏️ Bejegyzés szerkesztése': '✏️ Edit entry',
  '✨ Javaslat alkalmazása': '✨ Apply suggestion',
  '✅ Beállítások mentése': '✅ Save settings',
  'Mégse': 'Cancel',
  'Törlés': 'Delete',
  'Szerkesztés': 'Edit',
  // Címkék, mezők
  'Időpont': 'Time',
  'Típus': 'Type',
  'Vércukor': 'Blood glucose',
  'CH (g)': 'Carbs (g)',
  'CH(g)': 'Carbs(g)',
  /* v20 (feladat 1–4): új szolgáltatások szövegei */
  'Hőmérséklet automatikus lekérdezése': 'Automatic temperature lookup',
  'Az Aktivitás/hőség blokk megjelenésekor a készülék helye alapján automatikusan lekéri az aktuális hőmérsékletet. Kikapcsolva a korábbi, kézi „Lekérdezés" gombos működés marad.': 'When the Activity/heat block appears, it automatically looks up the current temperature based on the device\'s location. When turned off, the previous, manual "Look up" button behaviour remains.',
  'súly (g)': 'weight (g)',
  'CH/100g': 'carbs/100g',
  'A ténylegesen elfogyasztott mennyiség súlya, grammban': 'The weight of the amount actually eaten, in grams',
  'Szénhidráttartalom 100 grammra vetítve — a termék csomagolásáról vagy egy tápérték-táblázatból (pl. a beépített CH-táblázatból)': 'Carbohydrate content per 100 grams — from the product packaging or a nutrition table (e.g. the built-in carb table)',
  'Számolt szénhidráttartalom: súly × CH/100g ÷ 100': 'Calculated carbohydrate content: weight × carbs/100g ÷ 100',
  /* v20.2 (korrekció, feladat 2–3): mód (g/ml/db) legördülő + darabszám (qty) */
  'db': 'pcs',
  'mennyiség (ml)': 'amount (ml)',
  'CH/100ml': 'carbs/100ml',
  'A ténylegesen elfogyasztott mennyiség, milliliterben (100 ml = 1 dl)': 'The amount actually consumed, in milliliters (100 ml = 1 dl)',
  'Szénhidráttartalom 100 milliliterre vetítve — a termék csomagolásáról': 'Carbohydrate content per 100 milliliters — from the product packaging',
  'Számolt szénhidráttartalom': 'Calculated carbohydrate content',
  'Mód: súly (g), folyadék (ml) vagy darab/adag (db) — ha a felismerés téves, itt módosítható': 'Mode: weight (g), liquid (ml) or piece/serving (pcs) — adjust here if detected incorrectly',
  'Darabszám/adagszám — ez váltja ki a korábbi ×1/×2/×3 szorzót': 'Number of pieces/servings — this replaces the earlier ×1/×2/×3 multiplier',
  'Bázis aktív inzulin': 'Active basal insulin',
  'Tájékoztató becslés — nem kerül levonásra a bólusz-javaslatból.': 'Informational estimate — not subtracted from the bolus suggestion.',
  'Tájékoztató becslés — nem kerül levonásra a bólusz-javaslatból, konzultálj orvossal!': 'Informational estimate — not subtracted from the bolus suggestion, consult your doctor!',
  'hatástartam': 'duration of action',
  'csúcsos lecsengés': 'peaked decline',
  'lapos, csúcs nélküli lecsengés': 'flat, peakless decline',
  'Aktív inzulin — közös görbe': 'Active insulin — combined curve',
  'A gyors (bólusz) és a bázisinzulin becsült, egymástól elkülönített lecsengése az elmúlt időszakban, valamint a kettő összege — kizárólag tájékoztató jelleggel.': 'The estimated, separately tracked decline of the rapid (bolus) and basal insulin over the recent period, plus their sum — for informational purposes only.',
  'Összesen (tájékoztató)': 'Total (informational)',
  'Hajnali időszak kezdete': 'Start of dawn period',
  'Hajnali időszak vége': 'End of dawn period',
  'Ebben az időszakban rögzített vércukormérésekből ismeri fel az app a hajnali jelenség/Somogyi-hatás gyanús eseteit (l. Statisztika oldal + Orvosi riport) — kizárólag tájékoztató jelleggel, nem ad automatikus dózisjavaslatot.': 'The app uses blood glucose readings recorded in this period to detect suspected dawn phenomenon/Somogyi effect cases (see Statistics page + Medical report) — for informational purposes only, it does not give an automatic dosing suggestion.',
  'Hajnali jelenség / Somogyi-hatás (tájékoztató)': 'Dawn phenomenon / Somogyi effect (informational)',
  'hajnali jelenség-gyanú': 'suspected dawn phenomenon',
  'Somogyi-gyanú': 'suspected Somogyi effect',
  'éjszaka közül mutatott figyelemre méltó reggeli emelkedést': 'nights showed a notable morning rise',
  'Átlagos emelkedés': 'Average rise',
  'Ez az elemzés kizárólag tájékoztató jellegű mintafelismerés a rögzített naplóadatok alapján — nem diagnózis és nem automatikus dózisjavaslat. A hajnali jelenség és a Somogyi-hatás kezelése eltérő lehet, a végső döntést mindig a kezelőorvos hozza meg!': 'This analysis is an informational pattern detection based on recorded diary data only — it is not a diagnosis and not an automatic dosing suggestion. Managing dawn phenomenon vs. the Somogyi effect can differ — the treating physician always makes the final decision!',
  'Egység': 'Unit',
  'Egység (pl. 1 db)': 'Unit (e.g. 1 pc)',
  'Étel neve': 'Food name',
  '⏰ Időpont': '⏰ Time',
  '⏰ Időpont (utólag is módosítható!)': '⏰ Time (can be changed later!)',
  '🍽️ Étkezés': '🍽️ Meal',
  '🍽️ Étkezés típusa': '🍽️ Meal type',
  '🍽️ Szénhidrát (g)': '🍽️ Carbohydrate (g)',
  '🏃 Tevékenység': '🏃 Activity',
  '🏃 Egyéb tevékenység': '🏃 Other activity',
  '📝 Megjegyzés': '📝 Note',
  '✏️ Megjegyzés': '✏️ Note',
  '📝 Típus': '📝 Type',
  '🥗 Ételek (gyorsválasztó)': '🥗 Foods (quick picker)',
  'Egyéb/Extra CH (g)': 'Other/extra carbs (g)',
  '🔍 Keresés...': '🔍 Search...',
  'Megjegyzések...': 'Notes...',
  'Megjegyzés az orvosnak...': 'Note for the doctor...',
  'Ide illeszd be az exportált adatokat...': 'Paste the exported data here...',
  // Vércukor-címkék (dinamikus egységgel a bgL() adja hozzá a mértékegységet)
  '🩸 Vércukor': '🩸 Blood glucose',
  '⚠️ Alacsony vércukor határ': '⚠️ Low glucose threshold',
  '🔺 Magas vércukor határ': '🔺 High glucose threshold',
  '🎯 Célvércukor – bolus korrektorhoz': '🎯 Target glucose – for bolus correction',
  '📐 Inzulin érzékenység (1E gyors inzulin ennyivel csökkent': '📐 Insulin sensitivity (1U rapid insulin lowers by',
  // Statisztika, dashboard
  'Átlag VC': 'Avg BG',
  'TIR (célban)': 'TIR (in range)',
  'Becsült HbA1c': 'Estimated HbA1c',
  'Nap': 'Day',
  'Hét': 'Week',
  'Hónap': 'Month',
  'Egyéni': 'Custom',
  'Egyéni tartomány': 'Custom range',
  'Tól:': 'From:',
  'Ig:': 'To:',
  'Ma': 'Today',
  'Előző időszak': 'Previous period',
  'Következő időszak': 'Next period',
  // Szinkron, mentés
  '💾 Teljes mentés (JSON)': '💾 Full backup (JSON)',
  '📊 CSV letöltése': '📊 Download CSV',
  '📤 Export szövegbe': '📤 Export to text',
  '📥 Import szövegből': '📥 Import from text',
  '🔄 Szinkron – Hogyan működik?': '🔄 Sync – How does it work?',
  // Üzenetek
  '✅ Beállítások mentve!': '✅ Settings saved!',
  '✅ Étel mentve az adatbázisba!': '✅ Food saved to database!',
  '✅ Étel hozzáadva az adatbázisba!': '✅ Food added to database!',
  'Törlöd ezt a bejegyzést?': 'Delete this entry?',
  'Törlöd ezt az ételt?': 'Delete this food?',
  'Add meg az étel nevét és a CH értékét!': 'Enter the food name and carb value!',
  '⚙️ Személyes beállítások': '⚙️ Personal settings',
  // Hónapok
  'jan.': 'Jan',
  'feb.': 'Feb',
  'már.': 'Mar',
  'ápr.': 'Apr',
  'máj.': 'May',
  'jún.': 'Jun',
  'júl.': 'Jul',
  'aug.': 'Aug',
  'szep.': 'Sep',
  'okt.': 'Oct',
  'nov.': 'Nov',
  'dec.': 'Dec',
  // ── v7 új funkciók szövegei ──
  'Nyelv / Language': 'Language / Nyelv',
  'Vércukor mértékegysége': 'Blood glucose unit',
  'Gyors inzulin neve': 'Rapid insulin name',
  'Bázis inzulin neve': 'Basal insulin name',
  'Inzulin hatásideje (óra)': 'Insulin action time (hours)',
  'CH/inzulin arány (ICR) napszakonként': 'Carb-to-insulin ratio (ICR) by time of day',
  '1 egység inzulin ennyi gramm CH-t fedez': '1 unit of insulin covers this many grams of carbs',
  'Reggel': 'Morning',
  'Délben': 'Midday',
  'Este': 'Evening',
  '⚠️ FIGYELEM: minden dózisérték csak tájékoztató javaslat, NEM orvosi utasítás! A dózisról mindig a kezelőorvosod iránymutatása szerint dönts!': '⚠️ WARNING: all dose values are informational suggestions only, NOT medical advice! Always decide doses according to your doctor\'s guidance!',
  '🚨 ALACSONY VÉRCUKOR! Egyél 15 g gyorsan felszívódó szénhidrátot (pl. szőlőcukor, gyümölcslé), és 15 perc múlva mérj újra!': '🚨 LOW BLOOD GLUCOSE! Eat 15 g of fast-acting carbs (e.g. glucose tablets, juice) and re-check in 15 minutes!',
  '💜 Ma még nem rögzítettél bázisinzulint.': '💜 No basal insulin logged today yet.',
  'Aktív inzulin (IOB) levonva': 'Active insulin (IOB) deducted',
  /* v18: a Sorozat-feliratok a Beállításokban szerkeszthetők — a régi fix kulcsok törölve */
  'Mai naplózási kör': 'Today\'s logging circle',
  'Heti TIR-cél': 'Weekly TIR goal',
  /* v18: a céltartomány-üzenet a szerkeszthető motivációs listából jön (app.js) */
  'Becenév': 'Nickname',
  'Színtéma': 'Color theme',
  'Motivációs elemek (sorozat, haladás, visszajelzés)': 'Motivation features (streak, progress, feedback)',
  'Bekapcsolva': 'Enabled',
  'Kikapcsolva': 'Disabled',
  '☁️ Google Drive szinkron': '☁️ Google Drive sync',
  'Tulajdonos mód (a saját naplómat osztom meg)': 'Owner mode (I share my own diary)',
  'Követő mód (más naplóját követem)': 'Follower mode (I follow someone else\'s diary)',
  'Kapcsolódás Google-fiókkal': 'Connect with Google account',
  'Mappa kiválasztása': 'Choose folder',
  'Megosztott napló kiválasztása': 'Choose shared diary',
  'Utolsó szinkron': 'Last sync',
  'Szinkron most': 'Sync now',
  'Leválasztás': 'Disconnect',
  'Szinkron kész!': 'Sync complete!',
  'Szinkronhiba': 'Sync error',
  'Ismeretlen hiba.': 'Unknown error.',
  'Ételek a bejegyzésben': 'Foods in this entry',
  'Étel hozzáadása': 'Add food',
  '🍽️ Egyéb/Extra CH (g)': '🍽️ Other/extra carbs (g)',
  'TELJES CH': 'TOTAL carbs',
  'Keresés...': 'Search...',
  'Nincs internetkapcsolat.': 'No internet connection.',
  'Nincs internetkapcsolat, vagy a Google nem érhető el.': 'No internet connection, or Google is unreachable.',
  'A Google-belépés lejárt — nyomd meg a „Kapcsolódás Google-fiókkal" gombot.': 'Google sign-in expired — tap "Connect with Google account".',
  'Nincs hozzáférés a naplófájlhoz — ellenőrizd, hogy a mappa/fájl meg van-e osztva ezzel a fiókkal.': 'No access to the diary file — check that the folder/file is shared with this account.',
  'A naplófájl nem található — válaszd ki újra a megosztott naplót (3️⃣).': 'Diary file not found — pick the shared diary again (3️⃣).',
  'Google-belépés szükséges — engedélyezd a felugró ablakban („Kapcsolódás Google-fiókkal").': 'Google sign-in required — allow it in the pop-up ("Connect with Google account").',
  'Hiányzik a Google Client ID (1️⃣).': 'Google Client ID is missing (1️⃣).',
  'Nincs kiválasztva a megosztott naplófájl (3️⃣).': 'The shared diary file is not selected (3️⃣).',
  'Nincs kiválasztva a Drive-mappa (3️⃣).': 'The Drive folder is not selected (3️⃣).',
  'Nem követő módban van a készülék.': 'This device is not in Follower mode.',
  'Nem tulajdonos módban van a készülék.': 'This device is not in Owner mode.',
  'A szinkron nem sikerült — ellenőrizd az internetkapcsolatot és a beállítást.': 'Sync failed — check your internet connection and setup.',
  'Riasztási beállítások': 'Alert settings',
  'Riasztás alacsony értéknél': 'Alert on low glucose',
  'Riasztás magas értéknél': 'Alert on high glucose',
  'Értesítések engedélyezése': 'Enable notifications',
  'Frissítés (perc)': 'Refresh interval (min)',
  /* ── v12.3: külön inzulin beadási idő ── */
  'Beadás ideje eltér?': 'Injection time differs?',
  'Beadás időpontja': 'Injection time',
  'Vissza a bejegyzés időpontjára': 'Reset to the entry time',
  /* ── v18.7 (feladat 6–7): külön vércukor mérési idő ── */
  'Mérés ideje eltér?': 'Measurement time differs?',
  'Mérés időpontja': 'Measurement time',
  '📡 CGM adatok importálása (LibreView / Dexcom CSV)': '📡 Import CGM data (LibreView / Dexcom CSV)',
  'CGM CSV fájl kiválasztása': 'Choose CGM CSV file',
  'Nincs még CGM-eszközöd? Az import LibreView/Clarity exportot fogad. Élő eszköz-csatlakozás előkészítve.': 'No CGM device yet? Import accepts LibreView/Clarity exports. Live device connection is prepared for the future.',
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
  '✅ Normál': '✅ Normal',
  'Alacsony': 'Low',
  'Magas': 'High',
  'Normál': 'Normal',
  '⚠️ Alacsony': '⚠️ Low',
  '🔺 Magas': '🔺 High',
  '💡 CH/Inzulin arány': '💡 Carb/insulin ratio',
  'Becsült HbA1c ℹ️': 'Estimated HbA1c ℹ️',
  '💡 Bolus kalkulátor javaslat:': '💡 Bolus calculator suggestion:',
  'Válassz...': 'Choose...',
  '✏️ Szerk.': '✏️ Edit',
  '📱 Hova mentődnek az adatok?': '📱 Where is data saved?',
  'Erre az eszközre (localStorage + IndexedDB), és ha bekapcsolod, a saját Google Drive-odra.': 'On this device (localStorage + IndexedDB) and, if enabled, in your own Google Drive.',
  '🔄 Szinkron eszközök között:': '🔄 Sync between devices:',
  'Drive-szinkronnal automatikus; vagy kézzel: JSON Export → másik eszközön Import.': 'Automatic with Drive sync; or manually: JSON Export → Import on the other device.',
  '🔀 Összefésülés:': '🔀 Merging:',
  'ID alapján dedupl. – nincs duplikátum!': 'Deduplicated by ID – no duplicates!',
  '📊 CSV Export (Excel/Orvos)': '📊 CSV Export (Excel/Doctor)',
  '📋 Copy-paste szinkron': '📋 Copy-paste sync',
  'Adatméret': 'Data size',
  '📊 Adatok': '📊 Data',
  '💜 Indigó (alap)': '💜 Indigo (default)',
  '💚 Türkiz': '💚 Teal',
  '🌹 Rózsa': '🌹 Rose',
  '🩸 Vércukor-határok': '🩸 Blood glucose thresholds',
  'Az orvossal közösen meghatározott értékeket add meg!': 'Enter the values agreed with your doctor!',
  '💉 Inzulin-beállítások': '💉 Insulin settings',
  '⚠️ Fontos figyelmeztetés!': '⚠️ Important warning!',
  '1️⃣ Google Client ID (lásd: Drive beállítási útmutató)': '1️⃣ Google Client ID (see: Drive setup guide)',
  '❌ Ez a böngésző nem támogatja az értesítéseket.': '❌ This browser does not support notifications.',
  '⚠️ Csak orvossal egyeztetett értékek alapján — javaslat, nem orvosi utasítás!': '⚠️ Based only on values agreed with your doctor — a suggestion, not medical advice!',
  'pl. Zoli': 'e.g. Zoli',
  // ── v7.1: grafikai frissítés szövegei ──
  'Megjelenés': 'Appearance',
  '☀️ Világos': '☀️ Light',
  '🌙 Sötét': '🌙 Dark',
  '🌗 Automatikus (rendszer szerint)': '🌗 Automatic (follow system)',
  'Egy mérés rögzítése fél percet sem vesz igénybe.': 'Logging a reading takes less than half a minute.',
  '➕ Első mai bejegyzés rögzítése': '➕ Log the first entry today',
  'Válassz másik napot vagy időszakot fent.': 'Choose another day or period above.',
  // ── v8: új funkciók szövegei ──
  'Új': 'New',
  'Szerkesztés': 'Edit',
  'Törlés': 'Delete',
  '🕒 Napszakhatárok': '🕒 Time-of-day boundaries',
  'Óra (0–23), ameddig az adott napszak tart. Ezek vezérlik az étkezéstípus-alapértelmezést és a bolus-kalkulátor napszakválasztását.': 'Hour (0–23) until which each period of the day lasts. These control the default meal type and the bolus calculator\'s time-of-day selection.',
  '🍽️ Étkezés-alapértelmezés határai': '🍽️ Default meal type boundaries',
  '💉 Bolus-ICR napszakhatárai': '💉 Bolus ICR time boundaries',
  'Reggeli eddig': 'Breakfast until',
  'Tízórai eddig': 'Mid-morning until',
  'Ebéd eddig': 'Lunch until',
  'Uzsonna eddig': 'Afternoon snack until',
  'Vacsora eddig': 'Dinner until',
  'Reggel eddig': 'Morning until',
  'Délben eddig': 'Midday until',
  'A Vacsora-határ után rögzített étkezés alapértelmezése: Utóvacsora.': 'Meals logged after the Dinner boundary default to Late-night snack.',
  'A Délben-határ után az „Este" ICR érvényes.': 'After the Midday boundary the "Evening" ICR applies.',
  'Napi mintázat (óránkénti átlag)': 'Daily pattern (hourly average)',
  'A sáv az adott órában mért legkisebb és legnagyobb értéket mutatja a kiválasztott időszakban.': 'The band shows the lowest and highest reading for each hour in the selected period.',
  'Átlag': 'Average',
  'Orvosi riport (PDF)': 'Medical report (PDF)',
  'Riport készítése': 'Create report',
  'Nyomtatható összefoglaló a kezelőorvosnak: TIR, becsült HbA1c/GMI, grafikonok és részletes napló. A megnyíló oldalon a Nyomtatás gombbal PDF-be is mentheted.': 'Printable summary for your doctor: TIR, estimated HbA1c/GMI, charts and a detailed log. On the opened page you can also save it as PDF via the Print button.',
  'A kezdő dátum nem lehet később, mint a záró dátum!': 'The start date cannot be later than the end date!',
  'GMI ℹ️': 'GMI ℹ️',
  // ── v10.1: használati útmutató (PDF kézikönyvek) ──
  'Használati útmutató': 'User Manual',
  'A teljes kézikönyv PDF-ben. A könyv ikonnal megnyitod, a nyíllal letöltöd. Megnyitás után offline is elérhető marad.': 'The full manual as PDF. Tap the book to open it, the arrow to download. Once opened, it stays available offline.',
  'Letöltés': 'Download',
  // ── v9: új funkciók szövegei ──
  'Menü': 'Menu',
  'Oldalak': 'Pages',
  'Bezárás': 'Close',
  // ═══ v14: automatikus bejelentkezés, privát bejegyzés, követő részletnézet ═══
  'Automatikus bejelentkezés — Google-fiók (e-mail)': 'Automatic sign-in — Google account (e-mail)',
  'Ha megadod, az app mindig ezzel a fiókkal jelentkezik be — a Google fiókválasztó lista NEM jelenik meg. Az első engedélyezés eszközönként egyszer kézzel történik, utána minden belépés automatikus. Mobilon és asztali gépen is működik.': 'If provided, the app always signs in with this account — the Google account picker list does NOT appear. The first authorisation is done manually once per device; every later sign-in is automatic. Works on mobile and desktop alike.',
  'Privát': 'Private',
  'Privát bejegyzés (a Követő egyáltalán nem látja)': 'Private entry (completely hidden from the Follower)',
  'Bejegyzés részletei (megtekintés)': 'Entry details (view only)',
  'Részletek megtekintése': 'View details',
  'Jegyzetek': 'Notes',
  // ═══ v14: tevékenységek ═══
  'Tevékenység': 'Activity',
  'Tevékenység (választás a korábbiakból)': 'Activity (pick from previous ones)',
  'Válassz korábbi tevékenységet...': 'Pick a previous activity...',
  'Az új név mentés után automatikusan bekerül a gyorsválasztóba.': 'After saving, the new name is added to the quick picker automatically.',
  'Új tevékenység neve (pl. Séta, Kertészkedés) — többet vesszővel válassz el': 'New activity name (e.g. Walk, Gardening) — separate several with commas',
  'Időtartam (tól–ig)': 'Duration (from–to)',
  'Időtartam': 'Duration',
  'nincs megadva': 'not set',
  'eddig': 'until',
  'Fizikai aktivitás (1–5)': 'Physical activity (1–5)',
  'Fizikai aktivitás': 'Physical activity',
  'A szintek elnevezése a Beállításokban módosítható. Újra koppintva törölhető.': 'Level names can be changed in Settings. Tap again to clear.',
  'Plusz CH — alacsony vércukor esetén: itt rögzítsd a bevitt szénhidrátot!': 'Extra carbs — in case of low blood glucose: record the carbohydrate intake here!',
  'Szűrés tevékenység nevére': 'Filter by activity name',
  'Minden tevékenység': 'All activities',
  'Fizikai aktivitás szintjei (1–5)': 'Physical activity levels (1–5)',
  'Az Egyéb tevékenység bejegyzéseknél választható 1–5 skála szintjeinek elnevezése. Írd át őket a saját szavaidra!': 'Names of the 1–5 scale selectable on Other activity entries. Rewrite them in your own words!',
  'Alapértelmezett elnevezések visszaállítása': 'Restore default names',
  'Nagyon könnyű': 'Very light',
  'Könnyű': 'Light',
  'Közepes': 'Moderate',
  'Megerőltető': 'Strenuous',
  'Nagyon megerőltető': 'Very strenuous',
  // ═══ v17: bázisinzulin-emlékeztető ═══
  'Bázis beadásának időpontja': 'Basal injection time',
  'Emlékeztető ennyivel előbb': 'Show reminder this much earlier',
  'pontban a megadott időpontban': 'exactly at the set time',
  'perccel előtte': 'minutes before',
  'Emlékeztető az Áttekintésen': 'Reminder on the Overview',
  'Bekapcsolva': 'Enabled',
  'Kikapcsolva': 'Disabled',
  'javasolt beadás': 'recommended injection',
  // ═══ v15: riport küldése e-mailben, orvos-címlista ═══
  'Riport küldése e-mailben az orvosnak': 'Send the report to your doctor by e-mail',
  'A riport a saját Gmail-fiókodból megy el hivatalos kísérőlevéllel, maga a riport pedig csatolt, nyomtatható PDF-fájlként érkezik meg az orvoshoz. Az első küldés előtt a Google egyszeri engedélyt kér.': 'The report is sent from your own Gmail account with a formal cover letter, and the report itself arrives as an attached, printable PDF file. Before the first send, Google asks for a one-time permission.',
  'Az orvos e-mail címe': "Doctor's e-mail address",
  'Mentett címek': 'Saved addresses',
  'Szerkesztés': 'Edit',
  'Kész': 'Done',
  'Cím kiválasztása': 'Select address',
  'Módosításhoz: érintsd meg a címet, javítsd a mezőben, majd küldéskor újként mentődik.': 'To modify: tap the address, edit it in the field — it is saved as new when you send.',
  'Küldés folyamatban': 'Sending',
  'Küldés e-mailben': 'Send by e-mail',
  'PDF / Nyomtatás': 'PDF / Print',
  'A riport elküldve': 'Report sent',
  'A küldés nem sikerült': 'Sending failed',
  'Ellenőrizd az internetkapcsolatot és a Google-engedélyt, majd próbáld újra.': 'Check your internet connection and the Google permission, then try again.',
  // ═══ v14: értesítés minden új bejegyzésről (követő) ═══
  'Értesítés minden új bejegyzésről': 'Notification for every new entry',
  'Új bejegyzés érkezett': 'New entry received',
  'Minden új bejegyzésnél értesítés érkezik (a privát bejegyzésekről nem). Az értesítés legfeljebb a frissítési időköznyi késéssel jön, és csak nyitott vagy háttérben futó app mellett.': 'A notification arrives for every new entry (but not for private ones). It arrives with at most the refresh-interval delay, and only while the app is open or running in the background.',
  'Gyors (bólus) inzulin': 'Rapid (bolus) insulin',
  'Bázis inzulin': 'Basal insulin',
  'Egyéb (egyéni név)…': 'Other (custom name)…',
  'Egyéni név': 'Custom name',
  'pl. Insulin lispro Sanofi': 'e.g. Insulin lispro Sanofi',
  '🎨 Egyéni szín (színskáláról)': '🎨 Custom color (from palette)',
  'Egyéni kiemelőszín': 'Custom accent color',
  'Koppints a színmezőre, és válassz a felugró színskáláról!': 'Tap the color field and pick from the pop-up palette!',
  'A riasztás csak AZNAPI mérés alapján szólal meg – régebbi (utólag rögzített) érték nem vált riasztást.': 'Alerts fire only for measurements taken TODAY – older (back-dated) values never trigger an alert.',
  '⏰ Dátum és idő (alapból a mostani – utólagos rögzítéshez módosítsd!)': '⏰ Date & time (defaults to now – change it for back-dated entries!)',
  'Riasztás (hozzátartozó)': 'Alert (family member)',
  // ── v9: nyelvi teljesség — korábban hiányzó feliratok ──
  '📝 Jegyzetek': '📝 Notes',
  '➕ Nyit': '➕ Open',
  'Ment': 'Save',
  '– Válassz –': '– Choose –',
  '➕ Új étel mentése adatbázisba:': '➕ Save new food to database:',
  'pl. Séta, Számítógépezés...': 'e.g. Walking, Computer time...',
  'Nem tömb!': 'Not a list!',
  // ── v10: egyéni háttérszín + nagyobb asztali gombsor ──
  '🎨 Egyéni háttérszín (színskáláról)': '🎨 Custom background color (from palette)',
  'Egyéni háttérszín': 'Custom background color',
  '↩️ Visszaállítás (alap háttér)': '↩️ Reset (default background)',
  'Koppints a színmezőre, és válassz a felugró színskáláról! A háttér az egész alkalmazásban lágy színátmenetként jelenik meg, a kártyák kontrasztja megmarad.': 'Tap the color field and pick from the pop-up palette! The background will appear as a soft gradient throughout the app, while card contrast is preserved.',
  // hónap-rövidítések a dátumformázáshoz (fmtDT/fmtAlwaysDT)
  'jan.': 'Jan',
  'feb.': 'Feb',
  'már.': 'Mar',
  'ápr.': 'Apr',
  'máj.': 'May',
  'jún.': 'Jun',
  'júl.': 'Jul',
  'aug.': 'Aug',
  'szep.': 'Sep',
  'okt.': 'Oct',
  'nov.': 'Nov',
  'dec.': 'Dec'
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
   'Based on $1 meals: avg $2g carbs/meal, $3U $4 → 1U ≈ $5g carbs. ⚠️ Consult your doctor!'
  ],
  [/^([\d.,]+)g CH \/ (.+)$/, '$1g carbs / $2'],
  [/^(\d+)\. mai bejegyzés — csak így tovább!$/, 'Entry #$1 today — keep it up!'],
  // ── v8 minták ──
  [/^⚠️ Szokatlan vércukorérték: (.+)\. Biztosan helyes\? Nem elgépelés\?$/,
   '⚠️ Unusual blood glucose value: $1. Is it correct? Not a typo?'
  ],
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

 function setLang(l) {
  lang = l;
  localStorage.setItem('hbc-lang', l);
 }

 function getLang() {
  return lang;
 }
 return {
  t,
  setLang,
  getLang,
  EN
 };
})();

/* ═══════════ MÉRTÉKEGYSÉG-KEZELÉS ═══════════
   Belső tárolás MINDIG mmol/l. Megjelenítés/bevitel a választott egységben. */
window.HBC_UNITS = (function() {
 const F = 18.016; // 1 mmol/l = 18,016 mg/dl
 let unit = 'mmol'; // 'mmol' | 'mgdl' — az App állítja a settings alapján

 function setUnit(u) {
  unit = (u === 'mgdl') ? 'mgdl' : 'mmol';
 }

 function getUnit() {
  return unit;
 }

 function label() {
  return unit === 'mgdl' ? 'mg/dl' : 'mmol/l';
 }
 /* tárolt (mmol/l) → megjelenített érték
    FONTOS: ez egy SZÁM-ot ad vissza (nem szöveget) — grafikonok (Chart.js
    data-tömbjei, tengelyhatárok) számként használják, ezért ez a függvény
    NEM módosítható szöveg-formázásra, az kerek mmol/l értéknél (pl. 8.0)
    elveszítené a tizedesjegyet, mert a JS a 8.0 számot 8-ként írja ki. */
 function disp(v) {
  if (v === null || v === undefined || v === '' || isNaN(v)) return v;
  return unit === 'mgdl' ? Math.round(parseFloat(v) * F) : Math.round(parseFloat(v) * 10) / 10;
 }
 /* v19.4 (korrekció): kijelzéshez szánt, FIX tizedesjegyű SZÖVEG — mmol/l-nél
    mindig egy tizedesjegy (pl. "8.0", sosem csak "8"), mg/dl-nél egész szám.
    Kártyák/csempék szöveges megjelenítéséhez használandó a puszta disp()
    helyett, mindenhol, ahol a végeredmény szövegként jelenik meg. */
 function dispFixed(v) {
  if (v === null || v === undefined || v === '' || isNaN(v)) return '';
  const n = parseFloat(v);
  return unit === 'mgdl' ? String(Math.round(n * F)) : (Math.round(n * 10) / 10).toFixed(1);
 }
 /* megjelenített szöveg (magyar tizedesvesszőt is elfogad) → tárolt mmol/l */
 function toMmol(x) {
  if (x === null || x === undefined || x === '') return null;
  const v = parseFloat(String(x).replace(',', '.'));
  if (isNaN(v)) return null;
  return unit === 'mgdl' ? Math.round(v / F * 100) / 100 : v;
 }
 /* beviteli mező step/min/max javaslat */
 function step() {
  return unit === 'mgdl' ? '1' : '0.1';
 }
 return {
  setUnit,
  getUnit,
  label,
  disp,
  dispFixed,
  toMmol,
  step,
  F
 };
})();

/* Rövidítések a kódban való kényelmes használatra */
window.t = window.HBC_I18N.t;
/* dátumformázáshoz: az aktuális nyelvhez tartozó lokálé */
window.HBC_LOCALE = function() {
 return window.HBC_I18N.getLang() === 'en' ? 'en-GB' : 'hu-HU';
};
window.bgU = window.HBC_UNITS;
/* vércukor-címke egységgel: bgL('🩸 Vércukor') → '🩸 Vércukor (mmol/l)' */
window.bgL = function(base) {
 return window.t(base) + ' (' + window.bgU.label() + ')';
};