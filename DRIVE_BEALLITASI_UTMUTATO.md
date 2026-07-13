# Google Drive szinkron beállítása — lépésről lépésre
*Egyszeri beállítás, kb. 20 perc. Ingyenes, bankkártya NEM szükséges.*

## Hogyan működik?
- **Te (tulajdonos mód):** minden mentésnél az app automatikusan feltölti a naplót
  a saját Drive-od általad kiválasztott mappájába (HBC_Diabetesz_Naplo.json fájl).
- **Andi (követő mód):** a telefonján lévő ugyanezen appban a megosztott fájlhoz
  kapcsolódik; az app megnyitáskor és beállítható időnként (alap: 5 perc) frissíti
  és megjeleníti a friss értékeket, kérésre riasztást ad alacsony/magas értéknél.
- Az app a szűk `drive.file` jogosultságot használja: CSAK a saját naplófájljához
  fér hozzá, a Drive-od többi tartalmát nem is látja.

## 1. rész — Google Cloud beállítás (egyszer, a te Google-fiókoddal)
1. Nyisd meg: https://console.cloud.google.com (lépj be a Gmail-fiókoddal)
2. Fent „Select a project" → „NEW PROJECT" → név: `HBC Naplo` → Create
3. Bal menü → „APIs & Services" → „Library" → keresd: **Google Drive API** → Enable
   Utána ugyanígy: **Google Picker API** → Enable
4. „APIs & Services" → „OAuth consent screen" → External → Create
   - App name: HBC Naplo; support email: a saját címed → Save
   - Scopes: nem kell hozzáadni semmit → Save
   - Test users: add hozzá a SAJÁT e-mail-címed ÉS ANDIÉT → Save
   (Teszt módban max. 100 felhasználó — nektek bőven elég, nem kell Google-felülvizsgálat.)
5. „APIs & Services" → „Credentials" → „+ CREATE CREDENTIALS" → „OAuth client ID"
   - Application type: **Web application**; név: HBC Naplo Web
   - „Authorized JavaScript origins" → ADD URI: `https://NEVED.github.io`
   - Create → másold ki a **Client ID**-t (xxxx.apps.googleusercontent.com)

## 2. rész — Bekapcsolás a TE telefonodon/gépeden (tulajdonos)
1. App → Szinkron fül → „☁️ Google Drive szinkron"
2. Válaszd: „📤 Tulajdonos mód"
3. 1️⃣ mezőbe illeszd be a Client ID-t
4. 2️⃣ „Kapcsolódás Google-fiókkal" → engedélyezd
5. 3️⃣ „Mappa kiválasztása" → válaszd ki (vagy előtte a Drive-ban hozd létre) a napló mappáját
6. Kész! Innentől minden mentés automatikusan felkerül. („Szinkron most" gombbal kézzel is indítható.)

## 3. rész — Mappa megosztása Andival (a Drive-ban, egyszer)
1. drive.google.com → keresd meg a kiválasztott mappát
2. Jobb klikk → „Megosztás" → add meg Andi e-mail-címét → „Megtekintő" szerep → Küldés

## 4. rész — Andi telefonján (követő)
1. Telepítse az appot (TELEPITESI_UTMUTATO.md — ugyanaz a cím)
2. Szinkron fül → „👀 Követő mód"
3. 1️⃣ ugyanaz a Client ID → 2️⃣ kapcsolódás a SAJÁT Google-fiókjával
4. 3️⃣ „Megosztott napló kiválasztása" → a választóban a „Shared with me / Megosztva velem"
   részből válassza ki a `HBC_Diabetesz_Naplo.json` fájlt
5. 🔔 Riasztási beállítások: „Értesítések engedélyezése" + alacsony/magas kapcsolók + frissítési idő
6. Kész! A fejléc alatti lila sávban látja az utolsó szinkront; a „Szinkron most" azonnal frissít.

## Külső felhasználóknak (sorstársak + hozzátartozóik)
Pontosan ugyanez a folyamat a saját fiókjukkal és Client ID-jukkal — vagy használhatják
a te Client ID-dat is, ha hozzáadod őket Test userként (max. 100 fő). Minden pár a saját
Drive-jában, a saját mappájával dolgozik; az adatok párok között nem keverednek.

## Gyakori kérdések
- **Mennyibe kerül?** Semmibe. A Drive API ingyenes, a napló pár MB a 15 GB-os tárhelyeden.
- **Riasztás bezárt appnál?** A riasztás nyitott vagy háttérben futó app mellett érkezik.
  Teljesen bezárt apphoz központi szerver kellene — az alapok elő vannak készítve egy
  későbbi bővítéshez.
- **„Az app nincs ellenőrizve" képernyő jön be.** Teszt módban normális: „Continue" /
  „Folytatás" gombbal továbbléphetsz — csak a Test users listán lévők férnek hozzá.
- **Token lejárt / újra kér belépést.** Normális működés (kb. óránként); a háttérben
  általában felugró ablak nélkül megújul.
