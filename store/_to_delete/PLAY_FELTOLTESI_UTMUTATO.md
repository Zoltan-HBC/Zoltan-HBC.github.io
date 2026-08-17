# Google Play feltöltési útmutató — lépésről lépésre
*Ezeket a lépéseket csak te tudod elvégezni (fiók + fizetés). Minden anyag készen áll hozzá.*

## Előfeltétel: az app legyen kint az interneten
A Play-csomag (TWA) a hostolt PWA-t csomagolja be, ezért előbb a TELEPITESI_UTMUTATO.md
szerinti GitHub Pages közzétételt végezd el. Jegyezd fel a címet (pl. `https://NEVED.github.io`).

## 1. Google Play fejlesztői fiók (kb. 20 perc + pár nap jóváhagyás)
1. Nyisd meg: https://play.google.com/console/signup
2. Jelentkezz be a Google-fiókoddal → „Saját magam" fióktípus
3. Egyszeri 25 USD regisztrációs díj bankkártyával
4. Személyazonosság-ellenőrzés (fénykép az igazolványról) — pár nap alatt hagyják jóvá

## 2. Android-csomag (AAB) elkészítése a géppel
1. Telepítsd a Node.js-t: https://nodejs.org (LTS változat)
2. Parancssorban: `npm install -g @bubblewrap/cli`
3. `bubblewrap init --manifest=https://NEVED.github.io/manifest.json`
   – a kérdéseknél a `twa-manifest.json` fájlban lévő értékeket add meg
   – aláíró kulcsot generál: a jelszavakat írd fel és őrizd meg! (frissítéshez kell)
4. `bubblewrap build` → elkészül az `app-release-bundle.aab`
5. Digital Asset Links: a Bubblewrap kiírja az `assetlinks.json` tartalmát →
   tedd fel a weboldalra `/.well-known/assetlinks.json` néven (enélkül címsáv látszik az appban)

## 3. Feltöltés a Play Console-ba
1. Play Console → „Alkalmazás létrehozása" → név: HBC Diabétesz Napló, nyelv: magyar
2. „Belső tesztelés" sáv → új kiadás → töltsd fel az `.aab` fájlt
3. Áruházi adatlap: másold be a STORE_ANYAGOK.md szövegeit (magyar + angol),
   töltsd fel az ikonokat (icons/icon-512.png) és a képernyőfotókat
4. Adatvédelem: add meg a nyilvános adatvédelmi nyilatkozat linkjét
   (`https://NEVED.github.io/privacy.html`), az adatbiztonsági űrlapon jelöld:
   „nem gyűjt adatot, nem oszt meg adatot harmadik féllel"
5. Egészség-kategóriás nyilatkozat: jelöld, hogy az app NEM orvostechnikai eszköz
6. Tesztelés után: „Éles kiadás" → beküldés felülvizsgálatra (általában 1–7 nap)

## Tippek
- Először a Belső tesztelést használd: azonnal telepíthető linket kapsz magadnak és Andinak
- Verziófrissítésnél a `twa-manifest.json`-ban emeld az `appVersionCode`-ot (+1)
- iOS: lásd STORE_ANYAGOK.md — első körben a Safari „Hozzáadás a kezdőképernyőhöz" ajánlott
