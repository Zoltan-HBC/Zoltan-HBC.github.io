// ═══════════ ADATOK ═══════════
const LOADED_ENTRIES = [{
 "id": 1000,
 "timestamp": "2025-12-25T20:30",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 3.2,
 "carbs": 85.0,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | 1 szelet diótorta | 18 g CH | Ételek: Lidl kovászos cipó (CH: 49 g / 100 g) - 1cm szelet 15 g CH, Lidl vega felvágott (CH: 6,8 g / 100 g) - 1 adag 2,5 szelet 3 g CH, Laktózmentes sajt (CH: 0,1 g / 100 g), 4 szelet Lidl kovászos cipó melegszendvics 70g CH, Paradicsomleves 15g CH, Erős paprika, Paradicsom, Szénsavmentes víz",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1001,
 "timestamp": "2026-01-04T05:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 7.4,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1002,
 "timestamp": "2026-01-04T09:05",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 3.7,
 "carbs": 64.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Nem korrigáltam, egyből ettem a kekszeket. | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 31g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1005,
 "timestamp": "2026-01-04T10:00",
 "type": "Egyéb tevékenység",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Főztünk, Mosogattam",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1003,
 "timestamp": "2026-01-04T11:00",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 51.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 40g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1004,
 "timestamp": "2026-01-04T13:55",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": null,
 "carbs": 76.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Zöldség leves 10g CH, Paprikás krumpli 50g CH, Csípős Csalamádé 5g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1006,
 "timestamp": "2026-01-04T15:00",
 "type": "Egyéb tevékenység",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Mosogattam...",
 "activity": "Számítógépezés",
 "sport": "",
 "foods": []
}, {
 "id": 1007,
 "timestamp": "2026-01-04T22:30",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1008,
 "timestamp": "2026-01-05T02:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 6.3,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1009,
 "timestamp": "2026-01-05T08:30",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 2.2,
 "carbs": 53.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH, Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g) | Hmmm... Miért? Talán a folyadék - víz -kimosta a szénhidrátot??? | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1010,
 "timestamp": "2026-01-05T12:12",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 36.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 25g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1011,
 "timestamp": "2026-01-05T14:00",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 9.4,
 "carbs": 71.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Zöldség leves, Cérnametélt / Betűtészta 10g CH, Paprikás krumpli 50g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1012,
 "timestamp": "2026-01-05T15:00",
 "type": "Egyéb tevékenység",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "",
 "activity": "Számítógépezés, Mosogatás",
 "sport": "",
 "foods": []
}, {
 "id": 1013,
 "timestamp": "2026-01-05T20:30",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 8.3,
 "carbs": 22.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Lidl durum vekni (CH: 49 g / 100 g) - 1cm szelet 15 g CH, Fanta - 1 dl 11 g CH 22g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1014,
 "timestamp": "2026-01-05T22:45",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1015,
 "timestamp": "2026-01-06T08:00",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 3.1,
 "carbs": 53.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH | 1dl Fanta | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1016,
 "timestamp": "2026-01-06T10:30",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 25.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 25g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1017,
 "timestamp": "2026-01-06T11:30",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 11.6,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1018,
 "timestamp": "2026-01-06T13:30",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 7.9,
 "carbs": 102.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Zöldség leves, Cérnametélt / Betűtészta 20g CH, Paprikás krumpli 50g CH, Csípős Csalamádé 10g CH, Fanta - 1 dl 11 g CH, Szénsavmentes víz 22g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1021,
 "timestamp": "2026-01-06T15:00",
 "type": "Egyéb tevékenység",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "",
 "activity": "Számítógépezés",
 "sport": "",
 "foods": []
}, {
 "id": 1019,
 "timestamp": "2026-01-06T17:30",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 9.9,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1022,
 "timestamp": "2026-01-06T19:00",
 "type": "Egyéb tevékenység",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "",
 "activity": "Számítógépezés",
 "sport": "",
 "foods": []
}, {
 "id": 1020,
 "timestamp": "2026-01-06T20:45",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 11.3,
 "carbs": 61.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Lidl durum vekni (CH: 49 g / 100 g) - 1cm szelet 15 g CH, Édes krumpli krém 50g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1023,
 "timestamp": "2026-01-06T22:00",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1024,
 "timestamp": "2026-01-07T00:45",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 10.1,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1025,
 "timestamp": "2026-01-07T05:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 5.0,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1026,
 "timestamp": "2026-01-07T07:10",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 3.1,
 "carbs": 64.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH | Reggeliztem | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 31g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1027,
 "timestamp": "2026-01-07T14:00",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 6.7,
 "carbs": 86.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Zöldség leves 20g CH, Sültkrumpli - air-fry 40g CH, Diótorta - 1 szelet 18 g CH 15g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1028,
 "timestamp": "2026-01-07T19:40",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 11.3,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1029,
 "timestamp": "2026-01-07T20:50",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 10.5,
 "carbs": 91.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Lidl durum vekni (CH: 49 g / 100 g) - 1cm szelet 15 g CH 60g CH, Palacsinta - kakaós 1 db 10 g CH 20g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1031,
 "timestamp": "2026-01-08T05:50",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 3.4,
 "carbs": 40.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g), Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1032,
 "timestamp": "2026-01-08T08:30",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 8.0,
 "carbs": 64.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 31g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1033,
 "timestamp": "2026-01-08T13:15",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 6.7,
 "carbs": 91.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Zöldség leves, Cérnametélt / Betűtészta 20g CH, Rizs (száraz CH: 70 g / 100 g) - 1 adag (125 g főtt) 50 g CH, Szecsuánival 60g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1034,
 "timestamp": "2026-01-08T15:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 4.2,
 "carbs": 35.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1036,
 "timestamp": "2026-01-08T20:15",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 9.7,
 "carbs": 76.0,
 "insulinRapid": 4.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Lidl durum vekni (CH: 49 g / 100 g) - 1cm szelet 15 g CH, Laktózmentes sajt (CH: 0,1 g / 100 g), vegán felvágott 65g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1038,
 "timestamp": "2026-01-09T01:30",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 9.4,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1039,
 "timestamp": "2026-01-09T04:50",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 6.9,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1040,
 "timestamp": "2026-01-09T08:40",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 2.0,
 "carbs": 69.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH | Pfff... Vajon miért lett alacsony? ...Mondjuk viszonylag későn keltem... | Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes) 5g CH, Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 31g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1041,
 "timestamp": "2026-01-09T11:20",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 7.8,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1042,
 "timestamp": "2026-01-09T13:00",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 4.6,
 "carbs": 81.0,
 "insulinRapid": 4.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Zöldség leves, Cérnametélt / Betűtészta 20g CH, Paprikás krumpli 30g CH, Gesztipüré 20g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1043,
 "timestamp": "2026-01-09T15:20",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 7.4,
 "carbs": 25.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH, Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH | Nem volt alacsony, de ettem ezeket...",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1045,
 "timestamp": "2026-01-09T20:30",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 5.7,
 "carbs": 121.0,
 "insulinRapid": 4.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: SPAR Pizza d'oro SuperMargarita (30 g / 100 g) - 1 adag (300 g) 90 g CH 90g CH, Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 31g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1047,
 "timestamp": "2026-01-10T05:40",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 3.9,
 "carbs": 36.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH, Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1048,
 "timestamp": "2026-01-10T08:20",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 5.1,
 "carbs": 44.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH, Tea 33g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1050,
 "timestamp": "2026-01-10T13:30",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 7.4,
 "carbs": 121.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: SPAR Pizza d'oro SuperMargarita (30 g / 100 g) - 1 adag (300 g) 90 g CH, ketchup 90g CH, Gesztipüré 20g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1051,
 "timestamp": "2026-01-10T20:30",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 17.0,
 "carbs": 101.0,
 "insulinRapid": 8.0,
 "insulinLong": null,
 "notes": "Magas vércukorszint | A Főétkezéshez adtam be 8-at, megduplázva a tegnapi 4-et! | Ételek: Lidl durum vekni (CH: 49 g / 100 g) - 1cm szelet 15 g CH 60g CH, TV paprika, Erős paprika, Paradicsom 10g CH, Gesztipüré (CH:  ) - 1 adag - előzetesen! - 20g CH 20g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1052,
 "timestamp": "2026-01-10T22:00",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1049,
 "timestamp": "2026-01-13T11:00",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 50.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 30g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1035,
 "timestamp": "2026-01-13T17:30",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 11.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1044,
 "timestamp": "2026-01-13T17:30",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 27.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 16g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1037,
 "timestamp": "2026-01-13T21:50",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1046,
 "timestamp": "2026-01-13T22:00",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1030,
 "timestamp": "2026-01-13T22:10",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1053,
 "timestamp": "2026-01-14T06:15",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 2.0,
 "carbs": 40.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g), Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH | 5 keksz volt",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1054,
 "timestamp": "2026-01-14T09:30",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 12.5,
 "carbs": 63.0,
 "insulinRapid": 10.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 30g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1056,
 "timestamp": "2026-01-14T13:20",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 14.7,
 "carbs": 100.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Burgonyaleves 15g CH, Rizs (száraz CH: 70 g / 100 g) - 1 adag (125 g főtt) 50 g CH 50g CH, Gesztipüré (CH:  ) - 1 adag - előzetesen! - 20g CH 25g CH, Fanta - 1 dl 11 g CH 10g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1057,
 "timestamp": "2026-01-14T14:50",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 14.8,
 "carbs": null,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Magas vércukorszint | Hmmm...",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1059,
 "timestamp": "2026-01-14T20:15",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 18.3,
 "carbs": 85.0,
 "insulinRapid": 8.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Lidl durum vekni (CH: 49 g / 100 g) - 1cm szelet 15 g CH 70g CH, TV paprika, Erős paprika, Paradicsom 5g CH, Fanta - 1 dl 11 g CH 10g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1060,
 "timestamp": "2026-01-14T22:30",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1061,
 "timestamp": "2026-01-15T02:20",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 7.4,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1062,
 "timestamp": "2026-01-15T06:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 2.8,
 "carbs": 36.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH, Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g) | Hmmm.Vajon miért?",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1063,
 "timestamp": "2026-01-15T09:30",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 6.8,
 "carbs": 53.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1064,
 "timestamp": "2026-01-15T14:15",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 6.8,
 "carbs": 95.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Burgonyaleves 15g CH, Rizs (száraz CH: 70 g / 100 g) - 1 adag (125 g főtt) 50 g CH 50g CH, Gesztipüré (CH:  ) - 1 adag - előzetesen! - 20g CH 20g CH, Fanta - 1 dl 11 g CH 10g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1065,
 "timestamp": "2026-01-15T15:30",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 7.9,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1066,
 "timestamp": "2026-01-15T20:30",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 8.8,
 "carbs": 100.0,
 "insulinRapid": 4.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: SPAR Pizza d'oro SuperMargarita (30 g / 100 g) - 1 adag (300 g) 90 g CH, ketchup 90g CH, Fanta - 1 dl 11 g CH 10g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1067,
 "timestamp": "2026-01-15T22:15",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1068,
 "timestamp": "2026-01-16T04:45",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 10.5,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1069,
 "timestamp": "2026-01-16T08:20",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 4.2,
 "carbs": 64.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 31g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1071,
 "timestamp": "2026-01-16T14:00",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 11.5,
 "carbs": null,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Burgonyaleves, Rizs (száraz CH: 70 g / 100 g) - 1 adag (125 g főtt) 50 g CH, Rakott zöldség",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1073,
 "timestamp": "2026-01-16T18:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 17.5,
 "carbs": null,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Magas vércukorszint | Pfff Miért?",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1075,
 "timestamp": "2026-01-16T22:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 12.3,
 "carbs": null,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Magas vércukorszint | Vacsi után mértem és adtam be...",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1076,
 "timestamp": "2026-01-16T22:10",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1077,
 "timestamp": "2026-01-17T03:50",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 4.9,
 "carbs": 25.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1078,
 "timestamp": "2026-01-17T07:45",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 4.8,
 "carbs": 64.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 31g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1079,
 "timestamp": "2026-01-17T14:00",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 4.7,
 "carbs": 26.0,
 "insulinRapid": 4.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Burgonyaleves 15g CH, Rizs (száraz CH: 70 g / 100 g) - 1 adag (125 g főtt) 50 g CH, Rakott zöldség, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1081,
 "timestamp": "2026-01-17T20:30",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 14.9,
 "carbs": 86.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Lidl durum vekni (CH: 49 g / 100 g) - 1cm szelet 15 g CH 70g CH, TV paprika, Erős paprika, Paradicsom 5g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1082,
 "timestamp": "2026-01-17T22:00",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1083,
 "timestamp": "2026-01-17T23:45",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 16.4,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1091,
 "timestamp": "2026-01-18T01:20",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 21.8,
 "carbs": null,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Magas vércukorszint | Pfff... KICSIT SOK...",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1084,
 "timestamp": "2026-01-18T03:50",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 8.6,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1085,
 "timestamp": "2026-01-18T08:15",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 3.7,
 "carbs": 31.0,
 "insulinRapid": 6.0,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH, Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 31g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1087,
 "timestamp": "2026-01-18T12:40",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 5.3,
 "carbs": 86.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Zöldség leves 15g CH, Rizs (száraz CH: 70 g / 100 g) - 1 adag (125 g főtt) 50 g CH, Rakott zöldség 60g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1089,
 "timestamp": "2026-01-18T21:00",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 8.6,
 "carbs": 70.0,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Lidl durum vekni (CH: 49 g / 100 g) - 1cm szelet 15 g CH 50g CH, TV paprika, Erős paprika, Paradicsom, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1090,
 "timestamp": "2026-01-18T23:15",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "Magas cukor KORR 3e Humalóggal!",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1092,
 "timestamp": "2026-01-19T05:25",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 13.5,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1093,
 "timestamp": "2026-01-19T08:00",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 7.9,
 "carbs": 53.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1095,
 "timestamp": "2026-01-19T13:30",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 9.0,
 "carbs": 91.0,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Zöldség leves 15g CH, Rizs (száraz CH: 70 g / 100 g) - 1 adag (125 g főtt) 50 g CH, Rakott zöldség 65g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1096,
 "timestamp": "2026-01-19T20:00",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 12.6,
 "carbs": 75.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Lidl durum vekni (CH: 49 g / 100 g) - 1cm szelet 15 g CH 50g CH, TV paprika, Erős paprika, Paradicsom 5g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1097,
 "timestamp": "2026-01-19T22:20",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1098,
 "timestamp": "2026-01-20T03:45",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 7.5,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1099,
 "timestamp": "2026-01-20T08:15",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 3.6,
 "carbs": 53.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g), Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1100,
 "timestamp": "2026-01-20T14:00",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 15.2,
 "carbs": 61.0,
 "insulinRapid": 8.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Zöldség leves, Cérnametélt / Betűtészta 50g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1101,
 "timestamp": "2026-01-20T16:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 8.4,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1103,
 "timestamp": "2026-01-20T20:30",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 10.8,
 "carbs": 101.0,
 "insulinRapid": 6.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: SPAR Pizza d'oro SuperMargarita (30 g / 100 g) - 1 adag (300 g) 90 g CH 90g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1104,
 "timestamp": "2026-01-20T22:45",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1105,
 "timestamp": "2026-01-21T01:20",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 5.7,
 "carbs": 25.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1106,
 "timestamp": "2026-01-21T08:20",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 3.8,
 "carbs": 44.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1108,
 "timestamp": "2026-01-21T13:15",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 6.0,
 "carbs": 106.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Zöldség leves, Cérnametélt / Betűtészta 15g CH, Rizs (száraz CH: 70 g / 100 g) - 1 adag (125 g főtt) 50 g CH, Rakott zöldség 60g CH, Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 31g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1109,
 "timestamp": "2026-01-21T16:10",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 14.2,
 "carbs": null,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Magas vércukorszint",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1111,
 "timestamp": "2026-01-21T20:00",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 14.3,
 "carbs": 81.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Lidl durum vekni (CH: 49 g / 100 g) - 1cm szelet 15 g CH, Lidl vega felvágott (CH: 6,8 g / 100 g) - 1 adag 2,5 szelet 3 g CH, Laktózmentes sajt (CH: 0,1 g / 100 g) 65g CH, TV paprika, Erős paprika, Paradicsom 5g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1112,
 "timestamp": "2026-01-21T23:55",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 4.4,
 "carbs": 36.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH, Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1113,
 "timestamp": "2026-01-22T03:45",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 4.8,
 "carbs": 36.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH, Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1114,
 "timestamp": "2026-01-22T07:30",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 3.5,
 "carbs": 36.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH, Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1115,
 "timestamp": "2026-01-22T09:15",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 6.7,
 "carbs": 64.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 31g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1117,
 "timestamp": "2026-01-22T14:15",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 4.2,
 "carbs": 61.0,
 "insulinRapid": 4.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Zöldség leves, Cérnametélt / Betűtészta 30g CH, Gesztipüré (CH:  ) - 1 adag - előzetesen! - 20g CH 20g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1118,
 "timestamp": "2026-01-22T17:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 11.3,
 "carbs": null,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Magas vércukorszint",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1120,
 "timestamp": "2026-01-22T20:30",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 18.2,
 "carbs": 81.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Lidl durum vekni (CH: 49 g / 100 g) - 1cm szelet 15 g CH 65g CH, TV paprika, Erős paprika, Paradicsom 5g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1121,
 "timestamp": "2026-01-22T23:00",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1122,
 "timestamp": "2026-01-23T04:20",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 11.8,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1123,
 "timestamp": "2026-01-23T08:30",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 7.5,
 "carbs": 53.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1125,
 "timestamp": "2026-01-23T13:30",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 7.5,
 "carbs": 111.0,
 "insulinRapid": 4.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Zöldség leves, Cérnametélt / Betűtészta 15g CH, Rizs (száraz CH: 70 g / 100 g) - 1 adag (125 g főtt) 50 g CH, Rakott zöldség 65g CH, Gesztipüré (CH:  ) - 1 adag - előzetesen! - 20g CH 20g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1126,
 "timestamp": "2026-01-23T17:30",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 7.8,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1128,
 "timestamp": "2026-01-23T21:15",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 9.5,
 "carbs": 81.0,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Lidl durum vekni (CH: 49 g / 100 g) - 1cm szelet 15 g CH 65g CH, TV paprika, Erős paprika, Paradicsom 5g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1129,
 "timestamp": "2026-01-24T00:20",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 10.3,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1130,
 "timestamp": "2026-01-24T06:30",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 2.9,
 "carbs": 36.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH, Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1131,
 "timestamp": "2026-01-24T09:30",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 5.9,
 "carbs": 53.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1133,
 "timestamp": "2026-01-24T14:00",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 12.2,
 "carbs": 101.0,
 "insulinRapid": 8.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: SPAR Pizza d'oro SuperMargarita (30 g / 100 g) - 1 adag (300 g) 90 g CH, ketchup 90g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1134,
 "timestamp": "2026-01-24T16:40",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 6.2,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1136,
 "timestamp": "2026-01-24T20:15",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 8.1,
 "carbs": 56.0,
 "insulinRapid": 4.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Lencsekenyér (CH: 25 g / 100 g) - 1cm szelet 5 g CH, SPAR Teljes Kiörlésű TOAST (CH: 44 g / 100 g) - 1cm szelet 12 g CH 40g CH, TV paprika, Erős paprika, Paradicsom 5g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1137,
 "timestamp": "2026-01-24T23:00",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1138,
 "timestamp": "2026-01-25T02:50",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 5.8,
 "carbs": 25.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1139,
 "timestamp": "2026-01-25T04:50",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 9.0,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1140,
 "timestamp": "2026-01-25T09:00",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 5.7,
 "carbs": 41.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g) 25g CH, Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 16g CH, Gyümölcstea",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1142,
 "timestamp": "2026-01-25T13:30",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 8.0,
 "carbs": 81.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Zöldség leves, Cérnametélt / Betűtészta 20g CH, Rizs (száraz CH: 70 g / 100 g) - 1 adag (125 g főtt) 50 g CH, Szecsuáni szósz 50g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1144,
 "timestamp": "2026-01-25T20:30",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 12.7,
 "carbs": 56.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Lencsekenyér (CH: 25 g / 100 g) - 1cm szelet 5 g CH, SPAR Teljes Kiörlésű TOAST (CH: 44 g / 100 g) - 1cm szelet 12 g CH 40g CH, TV paprika, Erős paprika, Paradicsom, fejes saláta 5g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1145,
 "timestamp": "2026-01-25T21:20",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 7.3,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1146,
 "timestamp": "2026-01-26T03:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 4.6,
 "carbs": 36.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH, Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1147,
 "timestamp": "2026-01-26T08:45",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 14.5,
 "carbs": 64.0,
 "insulinRapid": 10.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 31g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1149,
 "timestamp": "2026-01-26T14:30",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 8.9,
 "carbs": 42.0,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Répaleves 20g CH, Fanta - 1 dl 11 g CH 22g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1150,
 "timestamp": "2026-01-26T18:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 2.9,
 "carbs": 40.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH, Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH, gyümölcs | Hmmm... Épphogy megvolt a kontroll!...",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1152,
 "timestamp": "2026-01-26T21:00",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 11.2,
 "carbs": 56.0,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Lencsekenyér (CH: 25 g / 100 g) - 1cm szelet 5 g CH, SPAR Teljes Kiörlésű TOAST (CH: 44 g / 100 g) - 1cm szelet 12 g CH 40g CH, TV paprika, Erős paprika, Paradicsom, Kígyóuborka 5g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1153,
 "timestamp": "2026-01-26T22:30",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1162,
 "timestamp": "2026-01-27T02:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 14.9,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1154,
 "timestamp": "2026-01-27T04:50",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 5.5,
 "carbs": 36.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH, Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1155,
 "timestamp": "2026-01-27T09:10",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 7.1,
 "carbs": 55.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Fanta - 1 dl 11 g CH 22g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1157,
 "timestamp": "2026-01-27T13:50",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 12.5,
 "carbs": 31.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Répaleves, 2 adag répaleves - NYAMI!..., Gesztipüré (CH:  ) - 1 adag - előzetesen! - 20g CH 20g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1158,
 "timestamp": "2026-01-27T16:40",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 6.0,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1160,
 "timestamp": "2026-01-27T20:20",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 6.0,
 "carbs": 67.0,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Lencsekenyér (CH: 25 g / 100 g) - 1cm szelet 5 g CH, SPAR Teljes Kiörlésű TOAST (CH: 44 g / 100 g) - 1cm szelet 12 g CH 40g CH, TV paprika, Kígyóuborka 5g CH, Fanta - 1 dl 11 g CH 22g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1161,
 "timestamp": "2026-01-27T22:30",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1163,
 "timestamp": "2026-01-28T08:40",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 7.3,
 "carbs": 55.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Fanta - 1 dl 11 g CH 22g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1070,
 "timestamp": "2026-01-28T10:30",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 92.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 50g CH, Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH, 6 keksz 22g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1086,
 "timestamp": "2026-01-28T10:30",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 11.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1055,
 "timestamp": "2026-01-28T11:00",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 70.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 60g CH, Fanta - 1 dl 11 g CH 10g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1165,
 "timestamp": "2026-01-28T13:20",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": 6.5,
 "carbs": 46.0,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Répaleves 15g CH, Gesztipüré (CH:  ) - 1 adag - előzetesen! - 20g CH 20g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1072,
 "timestamp": "2026-01-28T17:30",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 61.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 25g CH, Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH, 5 keksz 16g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1058,
 "timestamp": "2026-01-28T18:00",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 31.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 31g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1080,
 "timestamp": "2026-01-28T18:30",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 31.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 31g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1167,
 "timestamp": "2026-01-28T19:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 12.3,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1074,
 "timestamp": "2026-01-28T21:00",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": null,
 "carbs": 111.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Lidl durum vekni (CH: 49 g / 100 g) - 1cm szelet 15 g CH 50g CH, TV paprika, Erős paprika, Paradicsom 5g CH, Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 25g CH, Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 31g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1168,
 "timestamp": "2026-01-28T21:00",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 15.8,
 "carbs": 67.0,
 "insulinRapid": 4.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Lencsekenyér (CH: 25 g / 100 g) - 1cm szelet 5 g CH, SPAR Teljes Kiörlésű TOAST (CH: 44 g / 100 g) - 1cm szelet 12 g CH 40g CH, TV paprika, Erős paprika, Kígyóuborka 5g CH, Fanta - 1 dl 11 g CH 22g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1169,
 "timestamp": "2026-01-28T23:00",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1170,
 "timestamp": "2026-01-29T01:45",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 14.4,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1171,
 "timestamp": "2026-01-29T07:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 9.3,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1172,
 "timestamp": "2026-01-29T09:15",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 7.2,
 "carbs": 77.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g) 25g CH, Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 30g CH, Fanta - 1 dl 11 g CH 22g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1148,
 "timestamp": "2026-01-29T10:15",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 36.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 25g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1107,
 "timestamp": "2026-01-29T10:30",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 56.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 25g CH, Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 31g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1116,
 "timestamp": "2026-01-29T10:30",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 36.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 16g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1141,
 "timestamp": "2026-01-29T10:30",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 36.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 25g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1164,
 "timestamp": "2026-01-29T10:30",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 47.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g) 25g CH, Fanta - 1 dl 11 g CH 22g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1124,
 "timestamp": "2026-01-29T10:45",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 45.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 25g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1156,
 "timestamp": "2026-01-29T10:45",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 36.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 25g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1094,
 "timestamp": "2026-01-29T11:00",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 70.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 50g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1132,
 "timestamp": "2026-01-29T11:00",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 36.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 25g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1173,
 "timestamp": "2026-01-29T11:00",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 41.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH, blue berry 30g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1174,
 "timestamp": "2026-01-29T13:40",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 10.2,
 "carbs": 61.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Répaleves 20g CH, Gesztipüré (CH:  ) - 1 adag - előzetesen! - 20g CH 30g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1175,
 "timestamp": "2026-01-29T16:30",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 6.4,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1166,
 "timestamp": "2026-01-29T16:50",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 11.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: SPAR Pizza d'oro SuperMargarita (30 g / 100 g) - 1 adag (300 g) 90 g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1102,
 "timestamp": "2026-01-29T17:00",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 31.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Gesztipüré (CH:  ) - 1 adag - előzetesen! - 20g CH 20g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1088,
 "timestamp": "2026-01-29T17:30",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 20.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1110,
 "timestamp": "2026-01-29T17:30",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 49.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 16g CH, Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 33g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1135,
 "timestamp": "2026-01-29T17:30",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 20.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1127,
 "timestamp": "2026-01-29T17:45",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 31.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Fanta - 1 dl 11 g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 31g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1159,
 "timestamp": "2026-01-29T17:45",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 36.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 25g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1119,
 "timestamp": "2026-01-29T17:50",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 20.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1143,
 "timestamp": "2026-01-29T18:00",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 45.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 25g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1151,
 "timestamp": "2026-01-29T18:00",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 31.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Gesztipüré (CH:  ) - 1 adag - előzetesen! - 20g CH 20g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1176,
 "timestamp": "2026-01-29T18:15",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 51.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Burgonya (nyers CH: 15 g / 100 g) - 100 g főtt 18 g CH 40g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1177,
 "timestamp": "2026-01-29T21:00",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 15.2,
 "carbs": 95.0,
 "insulinRapid": 6.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: SPAR Teljes Kiörlésű TOAST (CH: 44 g / 100 g) - 1cm szelet 12 g CH 60g CH, TV paprika, Erős paprika, Paradicsom 5g CH, Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH, blue berry 30g CH, Fanta - 1 dl 11 g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1178,
 "timestamp": "2026-01-29T22:45",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1179,
 "timestamp": "2026-01-30T02:10",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 16.5,
 "carbs": null,
 "insulinRapid": 2.0,
 "insulinLong": null,
 "notes": "Magas vércukorszint | Hmmm... Vajon miért?",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1180,
 "timestamp": "2026-01-30T06:30",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 5.5,
 "carbs": 25.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1181,
 "timestamp": "2026-01-30T08:50",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 6.9,
 "carbs": 44.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1182,
 "timestamp": "2026-01-30T11:30",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 27.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 16g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1183,
 "timestamp": "2026-01-30T12:30",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 2.6,
 "carbs": 66.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH | A kekszet ekkor ettem... | Ételek: Rizs (száraz CH: 70 g / 100 g) - 1 adag (125 g főtt) 50 g CH, befőttes lecsó 55g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1184,
 "timestamp": "2026-01-30T15:45",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 17.5,
 "carbs": null,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Magas vércukorszint | Elmaradt az ebéd inzulin... Pfff...",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1185,
 "timestamp": "2026-01-30T21:00",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 3.7,
 "carbs": 90.0,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH | Ételek: SPAR Teljes Kiörlésű TOAST (CH: 44 g / 100 g) - 1cm szelet 12 g CH, Lidl vega felvágott (CH: 6,8 g / 100 g) - 1 adag 2,5 szelet 3 g CH, Laktózmentes sajt (CH: 0,1 g / 100 g) 65g CH, TV paprika, Erős paprika, Paradicsom, fejes sali 5g CH, rostos narancslé 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1186,
 "timestamp": "2026-01-30T22:15",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1187,
 "timestamp": "2026-01-31T02:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 4.1,
 "carbs": 25.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1188,
 "timestamp": "2026-01-31T07:15",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 2.5,
 "carbs": 45.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g), rostos narancslé",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1189,
 "timestamp": "2026-01-31T09:30",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 8.6,
 "carbs": 53.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, rostos narancslé 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1190,
 "timestamp": "2026-01-31T13:45",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 4.8,
 "carbs": 86.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Paradicsomleves 10g CH, Rizs (száraz CH: 70 g / 100 g) - 1 adag (125 g főtt) 50 g CH, Üveges lecsó, Szecsuáni 65g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1191,
 "timestamp": "2026-01-31T20:45",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 5.2,
 "carbs": 113.0,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: SPAR Teljes Kiörlésű TOAST (CH: 44 g / 100 g) - 1cm szelet 12 g CH 72g CH, TV paprika, Erős paprika, Kígyóuborka 5g CH, Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g) 25g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1192,
 "timestamp": "2026-01-31T22:40",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1193,
 "timestamp": "2026-02-01T02:45",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 10.8,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1194,
 "timestamp": "2026-02-01T07:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 9.3,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1195,
 "timestamp": "2026-02-01T09:00",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 7.0,
 "carbs": 50.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 50g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1197,
 "timestamp": "2026-02-01T14:30",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 3.3,
 "carbs": 75.0,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Paradicsomleves 10g CH, Rizs (száraz CH: 70 g / 100 g) - 1 adag (125 g főtt) 50 g CH, lecsós Szecsuánis 65g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1199,
 "timestamp": "2026-02-01T20:30",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 15.9,
 "carbs": 98.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Magas vércukorszint | Hmmm... Soknak tűnik... | Ételek: SPAR Teljes Kiörlésű TOAST (CH: 44 g / 100 g) - 1cm szelet 12 g CH 48g CH, TV paprika, Erős paprika, Kígyóuborka 5g CH, Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g) 25g CH, Narancslé 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1200,
 "timestamp": "2026-02-01T22:00",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1201,
 "timestamp": "2026-02-02T00:45",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 8.5,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1202,
 "timestamp": "2026-02-02T05:25",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 5.8,
 "carbs": 25.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1203,
 "timestamp": "2026-02-02T09:00",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 7.3,
 "carbs": 65.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g) 25g CH, Fanta - 1 dl 11 g CH, 2dl Paradicsomlé 40g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1205,
 "timestamp": "2026-02-02T15:30",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 7.7,
 "carbs": 50.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Paradicsomleves 20g CH, Fanta - 1 dl 11 g CH 30g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1206,
 "timestamp": "2026-02-02T17:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 12.3,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1209,
 "timestamp": "2026-02-02T20:45",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 14.9,
 "carbs": 97.0,
 "insulinRapid": 5.0,
 "insulinLong": null,
 "notes": "Magas vércukorszint | A Fanta + keksz kicsit sok lett... | Ételek: SPAR Teljes Kiörlésű TOAST (CH: 44 g / 100 g) - 1cm szelet 12 g CH 72g CH, TV paprika, Erős paprika, Paradicsom, Kígyóuborka, Saláta 5g CH, Narancslé 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1210,
 "timestamp": "2026-02-02T23:00",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1211,
 "timestamp": "2026-02-03T01:30",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 8.0,
 "carbs": 25.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1212,
 "timestamp": "2026-02-03T08:25",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 2.6,
 "carbs": 78.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Fanta - 1 dl 11 g CH | Ételek: Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g) 25g CH, Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Paradicsomlé 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1213,
 "timestamp": "2026-02-03T12:30",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 10.9,
 "carbs": 30.0,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Zöldség leves 30g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1215,
 "timestamp": "2026-02-03T21:20",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 15.2,
 "carbs": 99.0,
 "insulinRapid": 4.0,
 "insulinLong": null,
 "notes": "Magas vércukorszint | Ételek: SPAR Teljes Kiörlésű TOAST (CH: 44 g / 100 g) - 1cm szelet 12 g CH 72g CH, TV paprika, Erős paprika, Kígyóuborka 5g CH, Fanta - 1 dl 11 g CH 22g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1216,
 "timestamp": "2026-02-03T22:00",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1217,
 "timestamp": "2026-02-04T00:20",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 22.6,
 "carbs": null,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Magas vércukorszint | Olyan mintha nem adtam volna be vacsira a 4e inzulint... Pfff...",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1218,
 "timestamp": "2026-02-04T04:40",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 8.1,
 "carbs": 25.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1219,
 "timestamp": "2026-02-04T08:15",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 5.4,
 "carbs": 78.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g) 25g CH, Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Paradicsomlé 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1220,
 "timestamp": "2026-02-04T11:00",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 20.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1196,
 "timestamp": "2026-02-04T11:50",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 20.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: 2dl Narancslé 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1204,
 "timestamp": "2026-02-04T12:00",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 30.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Fanta - 1 dl 11 g CH 30g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1221,
 "timestamp": "2026-02-04T13:00",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 5.5,
 "carbs": 61.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Zöldség leves 20g CH, Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Blue-berry 25g CH, 1 Raffaello 5g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1207,
 "timestamp": "2026-02-04T15:00",
 "type": "Egyéb tevékenység",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Pakolás PINCE",
 "activity": "Pakolás",
 "sport": "",
 "foods": []
}, {
 "id": 1222,
 "timestamp": "2026-02-04T15:35",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 6.0,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1223,
 "timestamp": "2026-02-04T16:30",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 55.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Fanta - 1 dl 11 g CH 22g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1208,
 "timestamp": "2026-02-04T17:30",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 63.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Fanta - 1 dl 11 g CH 30g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1198,
 "timestamp": "2026-02-04T18:30",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 25.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH 25g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1214,
 "timestamp": "2026-02-04T18:30",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 50.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Mandarin (CH: 12 g / 100 g) - 1 mandarin 5 g CH, Blue-berry 50g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1224,
 "timestamp": "2026-02-04T18:30",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 18.0,
 "carbs": null,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Magas vércukorszint | Hmmm... Nem adtam ebédre és ettem kekszet, meg ittam Fantát is... Pfff...",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1225,
 "timestamp": "2026-02-04T20:30",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 8.0,
 "carbs": 101.0,
 "insulinRapid": 4.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: SPAR Pizza d'oro SuperMargarita (30 g / 100 g) - 1 adag (300 g) 90 g CH, ketchup 90g CH, Erős paprika, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1226,
 "timestamp": "2026-02-04T22:00",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1227,
 "timestamp": "2026-02-05T02:20",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 8.9,
 "carbs": 25.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1228,
 "timestamp": "2026-02-05T07:45",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 2.9,
 "carbs": 78.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Narancslé | Hmmm... Korábban kéne kelni?... | Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH 25g CH, Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1229,
 "timestamp": "2026-02-05T11:00",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 25.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: 3 Raffaello 15g CH, 2 dl Paradicsomlé 10g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1230,
 "timestamp": "2026-02-05T12:15",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 12.3,
 "carbs": 60.0,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Zöldség leves 20g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH, 2dl Narancslé 40g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1231,
 "timestamp": "2026-02-05T15:30",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 7.5,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1233,
 "timestamp": "2026-02-05T20:20",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 6.4,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1235,
 "timestamp": "2026-02-05T22:00",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 10.0,
 "notes": "8-at adtam be!",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1234,
 "timestamp": "2026-02-05T22:15",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 6.9,
 "carbs": 80.0,
 "insulinRapid": 4.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Rizs (száraz CH: 70 g / 100 g) - 1 adag (125 g főtt) 50 g CH, Szecsuánis lecsó 60g CH, Narancslé 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1236,
 "timestamp": "2026-02-06T03:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 4.1,
 "carbs": 25.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Banán (CH: 20 g / 100 g) - 1 banán 25 g CH (közepes - 120 g)",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1237,
 "timestamp": "2026-02-06T08:30",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 2.7,
 "carbs": 73.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | Narancslé | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Cappuccino Casablanca csokis (CH: 76 g / 100 g) - 1 adag 20 g CH, 2db Lindt Lindor golyó 40g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1238,
 "timestamp": "2026-02-06T10:50",
 "type": "Étkezés",
 "mealType": "Tízórai",
 "bloodGlucose": null,
 "carbs": 45.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Blue-berry 25g CH, 2dl Narancslé 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1239,
 "timestamp": "2026-02-06T13:15",
 "type": "Étkezés",
 "mealType": "Ebéd",
 "bloodGlucose": 16.1,
 "carbs": 130.0,
 "insulinRapid": 6.0,
 "insulinLong": null,
 "notes": "Magas vércukorszint | Több inzulin evés előtt... | Ételek: Paradicsomleves, Cérnametélt / Betűtészta 20g CH, SPAR Pizza d'oro SuperMargarita (30 g / 100 g) - 1 adag (300 g) 90 g CH 90g CH, Solevita Narancslé - 1dl 10g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1232,
 "timestamp": "2026-02-06T17:30",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 55.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Fanta - 1 dl 11 g CH 22g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1240,
 "timestamp": "2026-02-06T19:00",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 17.1,
 "carbs": null,
 "insulinRapid": 3.0,
 "insulinLong": null,
 "notes": "Magas vércukorszint | ...Éreztem, h vmi zavar van a zerőben!... 🤔",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1241,
 "timestamp": "2026-02-06T19:15",
 "type": "Étkezés",
 "mealType": "Uzsonna",
 "bloodGlucose": null,
 "carbs": 46.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: Alma (CH: 11,4 g / 100 g) - 1 alma 15 g CH (közepes), Szőlő (CH: 18 g / 100 g) - 10 szem 20 g CH, Narancs (CH: 10 g / 100 g) - 1 narancs 20 g CH, Kék áfonya (CH: 10 g / 100 g) - 8 szem 10 g CH 25g CH, 1db Lindt Lindor 10g CH, Fanta - 1 dl 11 g CH 11g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1243,
 "timestamp": "2026-02-06T22:00",
 "type": "Lantus",
 "mealType": "",
 "bloodGlucose": null,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": 6.0,
 "notes": "",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1242,
 "timestamp": "2026-02-06T22:10",
 "type": "Étkezés",
 "mealType": "Vacsora",
 "bloodGlucose": 3.6,
 "carbs": 85.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Alacsony vércukorszint | ...Vacsiztam/tunk... | Ételek: SPAR Teljes Kiörlésű TOAST (CH: 44 g / 100 g) - 1cm szelet 12 g CH 50g CH, TV paprika, Erős paprika, Kígyóuborka 5g CH, 1db Lindt Lindor 10g CH, Solevita Narancslé - 1dl 10g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1246,
 "timestamp": "2026-02-07T03:15",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 14.2,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1247,
 "timestamp": "2026-02-07T08:15",
 "type": "Étkezés",
 "mealType": "Reggeli",
 "bloodGlucose": 8.0,
 "carbs": 53.0,
 "insulinRapid": 7.0,
 "insulinLong": null,
 "notes": "Rendben van | Ételek: Keksz (háztartási)  (CH: 76 g / 100 g) - 1 adag (10 db) 33 g CH 33g CH, Solevita Narancslé - 1dl 10g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1244,
 "timestamp": "2026-02-07T23:30",
 "type": "Étkezés",
 "mealType": "Utóvacsora",
 "bloodGlucose": null,
 "carbs": 30.0,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Ételek: 1db Lindt Lindor 10g CH, Solevita Narancslé - 1dl 10g CH 20g CH",
 "activity": "",
 "sport": "",
 "foods": []
}, {
 "id": 1245,
 "timestamp": "2026-02-07T23:55",
 "type": "Kontroll",
 "mealType": "",
 "bloodGlucose": 12.7,
 "carbs": null,
 "insulinRapid": null,
 "insulinLong": null,
 "notes": "Rendben van",
 "activity": "",
 "sport": "",
 "foods": []
}];

const INIT_FOODS = [{
  id: 'd001',
  name: 'Lencsekenyer (1cm szelet)',
  carbs: 5,
  unit: '1cm szelet',
  isDefault: true
 },
 {
  id: 'd002',
  name: 'SPAR Teljes Kiőrlésű TOAST (1cm szelet)',
  carbs: 12,
  unit: '1cm szelet',
  isDefault: true
 },
 {
  id: 'd003',
  name: 'Lidl durum vekni (1cm szelet)',
  carbs: 15,
  unit: '1cm szelet',
  isDefault: true
 },
 {
  id: 'd004',
  name: 'Lidl kovászos cipó (1cm szelet)',
  carbs: 15,
  unit: '1cm szelet',
  isDefault: true
 },
 {
  id: 'd005',
  name: 'Szendvics (zsömle)',
  carbs: 30,
  unit: '1 db',
  isDefault: true
 },
 {
  id: 'd006',
  name: 'Rizs (1 adag 125g főtt)',
  carbs: 50,
  unit: '1 adag',
  isDefault: true
 },
 {
  id: 'd007',
  name: 'Burgonya (100g főtt)',
  carbs: 18,
  unit: '100g',
  isDefault: true
 },
 {
  id: 'd008',
  name: 'SPAR Pizza SuperMargarita (300g)',
  carbs: 90,
  unit: '1 db',
  isDefault: true
 },
 {
  id: 'd009',
  name: 'Paradicsomos chilis bab (1 adag)',
  carbs: 30,
  unit: '1 adag',
  isDefault: true
 },
 {
  id: 'd010',
  name: 'Banán (1 közepes)',
  carbs: 25,
  unit: '1 db',
  isDefault: true
 },
 {
  id: 'd011',
  name: 'Alma (1 közepes)',
  carbs: 15,
  unit: '1 db',
  isDefault: true
 },
 {
  id: 'd012',
  name: 'Narancs (1 db)',
  carbs: 20,
  unit: '1 db',
  isDefault: true
 },
 {
  id: 'd013',
  name: 'Mandarin (1 db)',
  carbs: 5,
  unit: '1 db',
  isDefault: true
 },
 {
  id: 'd014',
  name: 'Szőlő (10 szem)',
  carbs: 20,
  unit: '10 szem',
  isDefault: true
 },
 {
  id: 'd015',
  name: 'Fanta (1 dl)',
  carbs: 11,
  unit: '1 dl',
  isDefault: true
 },
 {
  id: 'd016',
  name: 'Narancslé (1 dl)',
  carbs: 10,
  unit: '1 dl',
  isDefault: true
 },
 {
  id: 'd017',
  name: 'Keksz (10 db)',
  carbs: 33,
  unit: '10 db',
  isDefault: true
 },
 {
  id: 'd018',
  name: 'Palacsinta kakaós (1 db)',
  carbs: 10,
  unit: '1 db',
  isDefault: true
 },
 {
  id: 'd019',
  name: 'Palacsinta túrós (1 db)',
  carbs: 5,
  unit: '1 db',
  isDefault: true
 },
 {
  id: 'd020',
  name: 'Túrórudi SPAR nagy',
  carbs: 15,
  unit: '1 db',
  isDefault: true
 },
 {
  id: 'd021',
  name: 'Dióitorta (1 szelet)',
  carbs: 18,
  unit: '1 szelet',
  isDefault: true
 },
 {
  id: 'd022',
  name: 'Cappuccino Casablanca csokis',
  carbs: 20,
  unit: '1 adag',
  isDefault: true
 },
];

/* ═══════════ v12: KÖZPONTI VERZIÓSZÁM — minden felirat (fejléc, riport, export) ebből él ═══════════ */
const APP_VERSION = '14.0';

// ═══════════ REACT SHORTHAND ═══════════
const {
 useState,
 useEffect,
 useRef,
 useCallback,
 useMemo,
 Fragment
} = React;
/* v7: fordító createElement-burkolat — minden szöveg-gyerek és placeholder/title
   megjelenítéskor átmegy a t() fordításon; a tárolt adat változatlan marad */
const __ce = React.createElement;
const h = (type, props, ...kids) => {
 if (props) {
  for (const k of ['placeholder', 'title']) {
   if (typeof props[k] === 'string') props[k] = window.t(props[k]);
  }
 }
 return __ce(type, props, ...kids.map(k => typeof k === 'string' ? window.t(k) : k));
};

// ═══════════ v8: SVG IKONKÉSZLET (emoji-ikonok helyett, egységes vonalvastagság) ═══════════
const ICON_PATHS = {
 home: 'M3 10.5L12 3l9 7.5M5 9.5V21h5v-6h4v6h5V9.5',
 chart: 'M3 3v18h18M7 14l4-4 3 3 5-6',
 list: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
 pie: 'M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z',
 food: 'M4 3v7a4 4 0 0 0 4 4v7M8 3v7M12 3v7M19 3c-2 1.6-3 4-3 7v3h4V3zM18 13v8',
 sync: 'M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6',
 gear: 'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6',
 plus: 'M12 5v14M5 12h14',
 pencil: 'M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z',
 trash: 'M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6',
 x: 'M18 6L6 18M6 6l12 12',
 printer: 'M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6v-8z',
 menu: 'M3 6h18M3 12h18M3 18h18',
 /* v9: hamburger menü ikon */
 eye: 'M1 12s4-7.5 11-7.5S23 12 23 12s-4 7.5-11 7.5S1 12 1 12zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
 /* v14: követő betekintő ikon */
 lock: 'M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4' /* v14: privát bejegyzés */
};

function Icon({
 name,
 size = 20,
 cls = '',
 sw = 2
}) {
 return __ce('svg', {
   width: size,
   height: size,
   viewBox: '0 0 24 24',
   fill: 'none',
   stroke: 'currentColor',
   strokeWidth: sw,
   strokeLinecap: 'round',
   strokeLinejoin: 'round',
   className: cls,
   'aria-hidden': true
  },
  __ce('path', {
   d: ICON_PATHS[name] || ''
  }));
}

// ═══════════ IOB ═══════════
/* v12.3: külön inzulin beadási idők — ha meg van adva, az felülírja a bejegyzés
   időpontját minden inzulinhoz kötött számításban (IOB, statisztika, grafikon, riport) */
const rapidTS = e => (e && e.insulinRapidTime) || (e && e.timestamp) || '';
const basalTS = e => (e && e.insulinLongTime) || (e && e.timestamp) || '';

function calcIOB(entries, diaHours) {
 const now = Date.now();
 let iob = 0;
 const DIA = (parseFloat(diaHours) || 4) * 60; // beállítható hatásidő, alap: 4 óra
 entries.forEach(e => {
  if (!e.insulinRapid || e.insulinRapid <= 0) return;
  const mins = (now - new Date(rapidTS(e))) / (60000);
  if (mins < 0 || mins > DIA) return;
  const t = mins / DIA;
  const rem = 1 - t * (1 + t * (-0.5 + t / 3));
  iob += parseFloat(e.insulinRapid) * Math.max(0, Math.min(1, rem));
 });
 return iob;
}

// ═══════════ DÁTUM SEGÉDFÜGGVÉNYEK ═══════════
/* v12.6: helyi idejű "ÉÉÉÉ-HH-NNTÓÓ:PP" a datetime-local mezőkhöz — a korábbi
   toISOString() UTC-t adott, ezért az alapérték eltért a készülék időzónájától */
const nowLocalDT = () => {
 const d = new Date(),
  p = n => String(n).padStart(2, '0');
 return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
};
const today = () => {
 const d = new Date();
 return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
};
/* v7: a hibás, nem használt addDays függvény törölve (mindig a mai napot adta volna vissza) */
function addD(s, n) {
 const d = new Date(s + 'T00:00:00');
 d.setDate(d.getDate() + n);
 return [d.getFullYear(), String(d.getMonth() + 1).padStart(2, '0'), String(d.getDate()).padStart(2, '0')].join('-');
}

function subD(n) {
 const d = new Date();
 d.setDate(d.getDate() - n);
 return [d.getFullYear(), String(d.getMonth() + 1).padStart(2, '0'), String(d.getDate()).padStart(2, '0')].join('-');
}

function todayStr() {
 const d = new Date();
 return [d.getFullYear(), String(d.getMonth() + 1).padStart(2, '0'), String(d.getDate()).padStart(2, '0')].join('-');
}
/* ═══ v11: törlés-nyilvántartás (tombstone) — a törlés minden készülékre átterjed ═══ */
const getTombs = () => {
 try {
  const t = JSON.parse(localStorage.getItem('hbc-v5-deleted') || '[]');
  return Array.isArray(t) ? t : [];
 } catch (e) {
  return [];
 }
};
const addTomb = (id, k) => {
 const t = [{
  id,
  ts: Date.now(),
  k
 }, ...getTombs()].slice(0, 1000);
 localStorage.setItem('hbc-v5-deleted', JSON.stringify(t));
 return t;
};
/* v11: a szinkron mindig a friss helyi adatokból dolgozik (localStorage a hiteles forrás) */
const syncPayload = () => {
 const g = k => {
  try {
   return JSON.parse(localStorage.getItem(k) || 'null');
  } catch (e) {
   return null;
  }
 };
 return {
  entries: g('hbc-v5-entries') || [],
  foods: g('hbc-v5-foods') || [],
  settings: g('hbc-v5-settings') || {},
  deleted: getTombs(),
  cgm: (window.HBC_CGM ? window.HBC_CGM.getRange(subD(1), todayStr()) : [])
 };
};

function getDate(ts) {
 return ts ? ts.split('T')[0] : '';
}

function fmtTime(ts) {
 if (!ts) return '';
 return ts.length >= 16 ? ts.slice(11, 16) : ts;
}

function fmtDT(ts) {
 if (!ts) return '';
 const d = ts.slice(0, 10).split('-');
 const M = ['jan.', 'feb.', 'már.', 'ápr.', 'máj.', 'jún.', 'júl.', 'aug.', 'szep.', 'okt.', 'nov.', 'dec.'];
 /* v9: a hónapnév a kiválasztott nyelven jelenik meg */
 return parseInt(d[2]) + '. ' + window.t(M[parseInt(d[1]) - 1]) + ' ' + (ts.length >= 16 ? ts.slice(11, 16) : '');
}

function fmtAlwaysDT(ts) {
 if (!ts) return '';
 const d = ts.slice(0, 10).split('-');
 const M = ['jan.', 'feb.', 'már.', 'ápr.', 'máj.', 'jún.', 'júl.', 'aug.', 'szep.', 'okt.', 'nov.', 'dec.'];
 /* v9: a hónapnév a kiválasztott nyelven jelenik meg */
 return d[0] + '. ' + window.t(M[parseInt(d[1]) - 1]) + ' ' + parseInt(d[2]) + '. – ' + (ts.length >= 16 ? ts.slice(11, 16) : '');
}

function sortedByTS(arr) {
 return [...arr].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
}

function filterRange(entries, from, to) {
 return entries.filter(e => {
  const d = getDate(e.timestamp);
  return d >= from && d <= to;
 });
}

// ═══════════ UI HELPERS ═══════════
function btn(text, onClick, cls = '', style = null) {
 return h('button', {
  onClick,
  className: cls,
  style,
  type: 'button'
 }, text);
}

function inp(type, value, onChange, placeholder = '', cls = '') {
 return h('input', {
  type,
  value: value || '',
  onChange: e => onChange(e.target.value),
  placeholder,
  className: cls || 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
 });
}

function sel(value, onChange, options, cls = '') {
 return h('select', {
   value: value || '',
   onChange: e => onChange(e.target.value),
   className: cls || 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
  },
  options.map(o => typeof o === 'string' ? h('option', {
   key: o,
   value: o
  }, o) : h('option', {
   key: o.v,
   value: o.v
  }, o.l))
 );
}

function lbl(text) {
 return h('label', {
  className: 'text-sm font-bold text-gray-500 block mb-1'
 }, text);
}

function card(children, cls = '') {
 return h('div', {
  className: 'bg-white/95 rounded-2xl shadow-lg p-4 ' + (cls || '')
 }, children);
}

// ═══════════ BADGE COMPONENT ═══════════
function Badge({
 bg,
 text
}) {
 return h('span', {
  className: `hbc-badge px-2 py-0.5 rounded-full text-xs font-bold ${bg}`
 }, text);
}

/* ═══ v12.3: INZULIN BEADÁSI IDŐ MEZŐ ═══
   Alapból a bejegyzés időpontja érvényes; az óra gombbal külön beadási idő
   állítható be (pl. alacsony cukor miatt ELTOLT étkezés utáni bolus).
   Az ✖ gombbal visszaáll a bejegyzés időpontjára. */
function InsTimeField({
 value,
 base,
 onChange
}) {
 if (!value) return h('button', {
   type: 'button',
   onClick: () => onChange(base || nowLocalDT()),
   /* v12.6: helyi idő */
   className: 'mt-1 w-full text-left text-xs font-bold text-indigo-500 bg-indigo-50 border border-indigo-200 rounded-lg px-2 py-1.5'
  },
  '⏰ ' + window.t('Beadás ideje eltér?'));
 return h('div', {
   className: 'mt-1'
  },
  h('label', {
   className: 'text-[11px] font-bold text-indigo-500 block mb-0.5'
  }, '⏰ ' + window.t('Beadás időpontja')),
  h('div', {
    className: 'flex gap-1'
   },
   h('input', {
    type: 'datetime-local',
    value,
    onChange: e => onChange(e.target.value),
    className: 'flex-1 min-w-0 border-2 border-indigo-300 rounded-lg px-2 py-1 text-xs focus:outline-none focus:border-indigo-500'
   }),
   h('button', {
    type: 'button',
    onClick: () => onChange(''),
    title: window.t('Vissza a bejegyzés időpontjára'),
    'aria-label': 'reset',
    className: 'px-2 rounded-lg bg-gray-100 text-gray-500 text-xs font-bold'
   }, '✖')));
}

// ═══════════ ENTRY CARD ═══════════
/* ═══════════ v14: TEVÉKENYSÉG-SEGÉDEK ═══════════ */
/* Időtartam (perc) → emberi felirat: 95 → "1 ó 35 p" */
function fmtDur(mins) {
 mins = parseInt(mins) || 0;
 if (mins <= 0) return '';
 const o = Math.floor(mins / 60),
  p = mins % 60;
 if (window.HBC_I18N.getLang() === 'en') return ((o ? o + ' h ' : '') + (p ? p + ' min' : '')).trim();
 return ((o ? o + ' ó ' : '') + (p ? p + ' p' : '')).trim();
}
/* Fizikai aktivitás szintek (1–5) — a nevek a Beállításokban módosíthatók */
const ACT_LEVEL_DEFAULTS = ['Nagyon könnyű', 'Könnyű', 'Közepes', 'Megerőltető', 'Nagyon megerőltető'];

function actLevelName(settings, n) {
 const arr = (settings && Array.isArray(settings.actLevels)) ? settings.actLevels : [];
 const v = arr[n - 1];
 return (v && String(v).trim()) ? v : window.t(ACT_LEVEL_DEFAULTS[n - 1] || '');
}
/* A korábban felvitt tevékenységnevek egyedi listája (gyorsválasztóhoz, szűrőhöz) */
function activityNames(entries) {
 const set = {};
 (entries || []).forEach(e => {
  if (e && e.activity) String(e.activity).split(',').forEach(n => {
   const v = n.trim();
   if (v) set[v] = 1;
  });
 });
 return Object.keys(set).sort((a, b) => a.localeCompare(b, 'hu'));
}

function EntryCard({
 entry,
 onEdit,
 onDelete,
 showDate,
 settings
}) {
 /* v14: követő módban a kártya csak-olvasó — szem ikon, nincs törlés */
 const _ro = window.HBC_SYNC && window.HBC_SYNC.cfg.mode === 'follower';
 const typeC = {
  'Étkezés': 'bg-emerald-50 border-emerald-200',
  'Kontroll': 'bg-blue-50 border-blue-200',
  'Lantus': 'bg-purple-50 border-purple-200',
  'Egyéb tevékenység': 'bg-yellow-50 border-yellow-200',
 };
 const mealC = {
  'Reggeli': 'bg-amber-100 text-amber-800',
  'Tízórai': 'bg-lime-100 text-lime-800',
  'Ebéd': 'bg-sky-100 text-sky-800',
  'Uzsonna': 'bg-violet-100 text-violet-800',
  'Vacsora': 'bg-rose-100 text-rose-800',
  'Utóvacsora': 'bg-indigo-100 text-indigo-800',
 };
 const bg = entry.bloodGlucose ? parseFloat(entry.bloodGlucose) : null;
 const _low = settings && settings.lowBG != null ? settings.lowBG : 3.9;
 const _high = settings && settings.highBG != null ? settings.highBG : 10.0;
 const bgBadge = bg ? (bg < _low ? 'bg-amber-100 text-amber-700' : bg > _high ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700') : '';
 const critStyle = bg && bg < _low ? {
  borderLeft: '4px solid #f59e0b'
 } : bg && bg > _high ? {
  borderLeft: '4px solid #ef4444'
 } : {};
 return h('div', {
   className: `ecard border-2 rounded-xl p-3 ${typeC[entry.type]||'bg-gray-50 border-gray-200'}`,
   style: critStyle
  },
  h('div', {
    className: 'flex items-start justify-between'
   },
   h('div', {
     className: 'flex-1 min-w-0'
    },
    h('div', {
      className: 'flex items-center gap-2 flex-wrap mb-1.5'
     },
     h('span', {
      className: 'font-black text-gray-800 text-sm'
     }, entry.type),
     /* v12.9: hbc-badge — az étkezés-címke sötét módban is a világos módbeli színeit tartja */
     entry.mealType && h('span', {
      className: `hbc-badge text-xs font-bold px-2 py-0.5 rounded-full ${mealC[entry.mealType]||'bg-gray-100 text-gray-600'}`
     }, entry.mealType),
     h('span', {
      className: 'text-xs text-gray-400 font-mono ml-auto whitespace-nowrap'
     }, fmtAlwaysDT(entry.timestamp))
    ),
    h('div', {
      className: 'flex flex-wrap gap-1.5'
     },
     bg && h(Badge, {
      bg: bgBadge,
      text: '🩸 ' + window.bgU.disp(bg) + ' ' + window.bgU.label()
     }),
     entry.carbs > 0 && h(Badge, {
      bg: 'bg-emerald-100 text-emerald-700',
      text: '🍽️ ' + entry.carbs + 'g CH'
     }),
     /* v12.3: ha a beadási idő eltér a bejegyzés időpontjától, a címkén ⏰ idő is látszik */
     entry.insulinRapid > 0 && h(Badge, {
      bg: 'bg-blue-100 text-blue-700',
      text: '💉 ' + entry.insulinRapid + 'E ' + ((settings && settings.rapidName) || 'Humalog') + (entry.insulinRapidTime && entry.insulinRapidTime !== entry.timestamp ? ' ⏰' + fmtTime(entry.insulinRapidTime) : '')
     }),
     entry.insulinLong > 0 && h(Badge, {
      bg: 'bg-purple-100 text-purple-700',
      text: '💉 ' + entry.insulinLong + 'E ' + ((settings && settings.basalName) || 'Lantus') + (entry.insulinLongTime && entry.insulinLongTime !== entry.timestamp ? ' ⏰' + fmtTime(entry.insulinLongTime) : '')
     }),
     entry.activity && h(Badge, {
      bg: 'bg-yellow-100 text-yellow-700',
      text: '🏃 ' + entry.activity + (entry.activityDur > 0 ? ' · ' + fmtDur(entry.activityDur) : '')
     }),
     /* v14: fizikai aktivitás szint (1–5, elnevezhető) */
     entry.activityLevel > 0 && h(Badge, {
      bg: 'bg-orange-100 text-orange-700',
      text: '⚡ ' + entry.activityLevel + '/5 – ' + actLevelName(settings, entry.activityLevel)
     }),
     /* v14: privát bejegyzés jelölése — csak a Tulajdonos látja (követőhöz el sem jut) */
     entry.private && h(Badge, {
      bg: 'bg-gray-200 text-gray-700',
      text: '🔒 ' + window.t('Privát')
     })
    ),
    entry.notes && h('p', {
     className: 'mt-1 text-xs text-gray-500 italic truncate'
    }, '"' + entry.notes + '"')
   ),
   h('div', {
     className: 'flex gap-1 ml-2 shrink-0'
    },
    /* v14: Követő módban ceruza helyett SZEM ikon — csak-olvasó részletnézet;
       a törlés gomb követőnek nem jelenik meg. */
    _ro ?
    h('button', {
     onClick: () => onEdit(entry),
     className: 'p-2 text-purple-400 hover:text-purple-600 rounded-lg',
     type: 'button',
     title: 'Részletek megtekintése',
     'aria-label': 'Részletek megtekintése'
    }, h(Icon, {
     name: 'eye',
     size: 18
    })) :
    h(Fragment, null,
     h('button', {
      onClick: () => onEdit(entry),
      className: 'p-2 text-indigo-400 hover:text-indigo-600 rounded-lg',
      type: 'button',
      title: 'Szerkesztés',
      'aria-label': 'Szerkesztés'
     }, h(Icon, {
      name: 'pencil',
      size: 16
     })),
     h('button', {
      onClick: () => onDelete(entry.id),
      className: 'p-2 text-red-300 hover:text-red-500 rounded-lg',
      type: 'button',
      title: 'Törlés',
      'aria-label': 'Törlés'
     }, h(Icon, {
      name: 'trash',
      size: 16
     }))
    )
   )
  )
 );
}

// ═══════════ DASHBOARD ═══════════
function Dashboard({
 entries,
 onEdit,
 onDelete,
 settings,
 onAdd
}) {
 const [bgNote, setBgNote] = useState(localStorage.getItem('hbc-bgnote') || '');
 const [editingNote, setEditingNote] = useState(false);
 const [noteInput, setNoteInput] = useState('');

 const tod = todayStr();
 const todayEs = useMemo(() => sortedByTS(entries.filter(e => getDate(e.timestamp) === tod)), [entries, tod]);
 const last7 = useMemo(() => filterRange(entries, subD(7), tod), [entries]);
 const bgE7 = last7.filter(e => e.bloodGlucose);
 const avgBG = bgE7.length > 0 ? bgE7.reduce((s, e) => s + parseFloat(e.bloodGlucose), 0) / bgE7.length : 0;
 /* v12.3: a napi inzulin-összeg és az "Utolsó" a tényleges BEADÁSI időt követi */
 const todIns = entries.reduce((s, e) => s +
  (e.insulinRapid > 0 && getDate(rapidTS(e)) === tod ? parseFloat(e.insulinRapid) : 0) +
  (e.insulinLong > 0 && getDate(basalTS(e)) === tod ? parseFloat(e.insulinLong) : 0), 0);
 const todCarbs = todayEs.reduce((s, e) => s + (parseFloat(e.carbs) || 0), 0);
 const lastInsTS = entries.reduce((m, e) => {
  if (e.insulinRapid > 0 && getDate(rapidTS(e)) === tod && (!m || rapidTS(e) > m)) m = rapidTS(e);
  if (e.insulinLong > 0 && getDate(basalTS(e)) === tod && (!m || basalTS(e) > m)) m = basalTS(e);
  return m;
 }, null);
 const latestBG = [...sortedByTS(entries)].reverse().find(e => e.bloodGlucose);
 const latestVal = latestBG ? parseFloat(latestBG.bloodGlucose) : null;
 const iob = useMemo(() => calcIOB(entries, settings && settings.diaHours), [entries, settings]);

 const saveNote = () => {
  localStorage.setItem('hbc-bgnote', noteInput);
  setBgNote(noteInput);
  setEditingNote(false);
 };

 /* ── v7 UX: sorozat (streak), napi naplózási kör, heti TIR-cél ── */
 const motivOn = !settings || settings.motivation !== false;
 const streak = useMemo(() => {
  const days = new Set(entries.map(e => getDate(e.timestamp)));
  let n = 0,
   d = new Date();
  if (!days.has(todayStr())) d.setDate(d.getDate() - 1); /* a mai nap még folyamatban lehet */
  while (true) {
   const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
   if (days.has(key)) {
    n++;
    d.setDate(d.getDate() - 1);
   } else break;
   if (n > 3650) break;
  }
  return n + (days.has(todayStr()) && n === 0 ? 1 : 0);
 }, [entries, tod]);
 const dailyGoal = 4; /* napi cél: legalább 4 rögzítés */
 const dailyDone = Math.min(todayEs.length, dailyGoal);
 /* v8 javítás: _dLow/_dHigh a használat ELŐTT deklarálva (TDZ-hiba a v7-ben) */
 const _dLow = settings && settings.lowBG != null ? settings.lowBG : 3.9;
 const _dHigh = settings && settings.highBG != null ? settings.highBG : 10.0;
 const bgAll7 = last7.filter(e => e.bloodGlucose);
 const tir7 = bgAll7.length > 0 ? Math.round(bgAll7.filter(e => e.bloodGlucose >= _dLow && e.bloodGlucose <= _dHigh).length / bgAll7.length * 100) : null;
 const noBasalToday = !entries.some(e => parseFloat(e.insulinLong) > 0 && getDate(basalTS(e)) === tod); /* v12.3: beadási idő szerint */
 const backupOld = window.HBC_STORE && window.HBC_STORE.daysSinceBackup() > 7;
 const bgGrad = v => v < _dLow ? 'linear-gradient(135deg,#f59e0b,#f97316)' : v > _dHigh ? 'linear-gradient(135deg,#ef4444,#dc2626)' : 'linear-gradient(135deg,#10b981,#059669)';
 const bgIcon = v => v < _dLow ? '⚠️' : v > _dHigh ? '🔺' : '✅';

 return h('div', {
   className: 'space-y-4'
  },

  /* v7: bázisinzulin-emlékeztető (este) */
  noBasalToday && new Date().getHours() >= 18 && h('div', {
    className: 'p-3 rounded-2xl bg-purple-50 border-2 border-purple-200 text-purple-800 text-sm font-bold'
   },
   '💜 Ma még nem rögzítettél bázisinzulint.', ' (', (settings && settings.basalName) || 'Lantus', ')'),

  /* v7: biztonsági mentés-emlékeztető */
  backupOld && h('div', {
    className: 'p-3 rounded-2xl bg-amber-50 border-2 border-amber-200 text-amber-800 text-sm font-bold'
   },
   '⚠️ Több mint 7 napja nem volt biztonsági mentés vagy Drive-szinkron!'),

  /* v7 UX: sorozat + napi kör + heti TIR-cél (kikapcsolható a Beállításokban) */
  motivOn && h('div', {
    className: 'grid grid-cols-1 md:grid-cols-3 gap-3'
   },
   h('div', {
     className: 'rounded-2xl shadow p-4 bg-white border-2 border-indigo-100'
    },
    h('p', {
     className: 'text-xs font-bold text-indigo-400 mb-1'
    }, '🔥 ' + window.t('Sorozat')),
    h('p', {
      className: 'text-3xl font-black text-indigo-700'
     }, streak,
     h('span', {
      className: 'text-sm ml-2 font-bold text-indigo-400'
     }, window.t('napja hiánytalan a napló'))),
    streak >= 3 && h('p', {
     className: 'text-xs text-indigo-400 mt-1'
    }, window.t('Ne szakadjon meg a sorozat!'))
   ),
   h('div', {
     className: 'rounded-2xl shadow p-4 bg-white border-2 border-indigo-100'
    },
    h('p', {
     className: 'text-xs font-bold text-indigo-400 mb-1'
    }, '⭕ ' + window.t('Mai naplózási kör')),
    h('div', {
      className: 'flex items-center gap-3'
     },
     h('p', {
      className: 'text-3xl font-black text-indigo-700'
     }, dailyDone + '/' + dailyGoal),
     h('div', {
       className: 'flex-1 h-3 bg-indigo-100 rounded-full overflow-hidden'
      },
      h('div', {
       className: 'h-full rounded-full transition-all',
       style: {
        width: (dailyDone / dailyGoal * 100) + '%',
        background: 'linear-gradient(90deg,var(--hbc-c1,#4f46e5),var(--hbc-c2,#7c3aed))'
       }
      }))
    )
   ),
   h('div', {
     className: 'rounded-2xl shadow p-4 bg-white border-2 border-indigo-100'
    },
    h('p', {
     className: 'text-xs font-bold text-indigo-400 mb-1'
    }, '🎯 ' + window.t('Heti TIR-cél') + ' (70%)'),
    tir7 != null ? h('div', {
      className: 'flex items-center gap-3'
     },
     h('p', {
      className: 'text-3xl font-black ' + (tir7 >= 70 ? 'text-emerald-600' : 'text-amber-600')
     }, tir7 + '%'),
     h('div', {
       className: 'flex-1 h-3 bg-indigo-100 rounded-full overflow-hidden'
      },
      h('div', {
       className: 'h-full rounded-full transition-all',
       style: {
        width: Math.min(100, tir7) + '%',
        background: tir7 >= 70 ? '#10b981' : '#f59e0b'
       }
      }))
    ) : h('p', {
     className: 'text-sm text-gray-400'
    }, '–')
   )
  ),

  // KPI kártyák
  h('div', {
    className: 'grid grid-cols-1 md:grid-cols-3 gap-3'
   },
   // Inzulin ma
   h('div', {
     className: 'rounded-2xl shadow-lg p-4 text-white relative overflow-hidden',
     style: {
      background: 'linear-gradient(135deg,#3b82f6,#4f46e5)'
     }
    },
    h('div', {
     className: 'absolute -right-2 -bottom-4 text-7xl opacity-20 pointer-events-none select-none'
    }, '💉'),
    h('p', {
     className: 'text-xs font-bold opacity-80 mb-1'
    }, '💉 Ma eddig beadott inzulin'),
    h('p', {
     className: 'text-3xl font-black'
    }, todIns.toFixed(1), h('span', {
     className: 'text-sm ml-1'
    }, 'E')),
    lastInsTS && h('p', {
     className: 'text-xs opacity-70 mt-1'
    }, `Utolsó: ${fmtTime(lastInsTS)} – ${new Date(lastInsTS).toLocaleDateString(window.HBC_LOCALE(),{month:'long',day:'numeric'})}`),
    iob > 0.1 && h('p', {
     className: 'text-xs mt-2 bg-white/20 rounded-lg px-2 py-1 iob-p'
    }, `🔄 IOB: ${iob.toFixed(1)}E aktív`)
   ),
   // Átlag VC
   h('div', {
     className: 'rounded-2xl shadow-lg p-4 text-white relative overflow-hidden',
     style: {
      background: 'linear-gradient(135deg,#ec4899,#ef4444)'
     }
    },
    h('div', {
     className: 'absolute -right-2 -bottom-4 text-7xl opacity-20 pointer-events-none select-none'
    }, '📊'),
    h('p', {
     className: 'text-xs font-bold opacity-80 mb-1'
    }, '📊 Átlag vércukor (7 nap)'),
    h('p', {
     className: 'text-3xl font-black'
    }, String(window.bgU.disp(avgBG)), h('span', {
     className: 'text-sm ml-1'
    }, window.bgU.label())),
    h('p', {
     className: 'text-xs opacity-70 mt-1'
    }, `${bgE7.length} mérés`)
   ),
   // Mai CH
   h('div', {
     className: 'rounded-2xl shadow-lg p-4 text-white relative overflow-hidden',
     style: {
      background: 'linear-gradient(135deg,#10b981,#059669)'
     }
    },
    h('div', {
     className: 'absolute -right-2 -bottom-4 text-7xl opacity-20 pointer-events-none select-none'
    }, '🍽️'),
    h('p', {
     className: 'text-xs font-bold opacity-80 mb-1'
    }, '🍽️ Mai szénhidrát'),
    h('p', {
     className: 'text-3xl font-black'
    }, todCarbs, h('span', {
     className: 'text-sm ml-1'
    }, 'g')),
    h('p', {
     className: 'text-xs opacity-70 mt-1'
    }, `${todayEs.filter(e=>e.carbs).length} étkezés`)
   )
  ),

  // Legutóbbi vércukor
  latestVal && h('div', {
    className: 'rounded-2xl shadow-lg p-4 text-white relative overflow-hidden',
    style: {
     background: bgGrad(latestVal)
    }
   },
   h('div', {
     className: 'flex items-start justify-between'
    },
    h('div', {
      className: 'flex-1'
     },
     h('p', {
      className: 'text-sm font-bold opacity-90 mb-1'
     }, '🩸 Legutóbbi vércukor'),
     h('p', {
      className: 'text-5xl font-black'
     }, String(window.bgU.disp(latestVal)), h('span', {
      className: 'text-xl ml-1'
     }, window.bgU.label())),
     h('p', {
      className: 'text-xs opacity-70 mt-1'
     }, fmtAlwaysDT(latestBG.timestamp) + (latestBG.type ? ` – ${latestBG.type}` : '')),
     // Megjegyzés
     h('div', {
       className: 'mt-3'
      },
      editingNote ?
      h('div', {
        className: 'flex gap-2'
       },
       h('input', {
        type: 'text',
        value: noteInput,
        onChange: e => setNoteInput(e.target.value),
        placeholder: 'Megjegyzés az orvosnak...',
        className: 'flex-1 px-3 py-2 rounded-xl text-sm text-gray-800 border-2 border-white/50 focus:outline-none',
        onKeyDown: e => e.key === 'Enter' && saveNote()
       }),
       h('button', {
        onClick: saveNote,
        className: 'bg-white/30 px-3 py-1 rounded-xl text-sm font-bold hover:bg-white/40',
        type: 'button'
       }, '✅'),
       h('button', {
        onClick: () => setEditingNote(false),
        className: 'bg-white/20 px-2 py-1 rounded-xl text-sm',
        type: 'button'
       }, '❌')
      ) :
      h('div', {
        className: 'flex items-center gap-2'
       },
       bgNote && h('p', {
        className: 'text-sm bg-white/20 rounded-xl px-3 py-1 flex-1'
       }, `💬 ${bgNote}`),
       h('button', {
        onClick: () => {
         setNoteInput(bgNote);
         setEditingNote(true);
        },
        className: 'bg-white/25 px-3 py-1 rounded-xl text-xs font-bold hover:bg-white/35',
        type: 'button'
       }, bgNote ? '✏️ Szerk.' : '✏️ Megjegyzés')
      )
     )
    ),
    h('div', {
     className: 'text-6xl ml-4'
    }, bgIcon(latestVal))
   )
  ),

  // Mai bejegyzések
  card([
   h('h2', {
    className: 'text-lg font-black text-gray-800 mb-3'
   }, `📅 Mai bejegyzések (${todayEs.length})`),
   todayEs.length === 0 ?
   h('div', {
     className: 'text-center py-8'
    },
    h('div', {
     className: 'text-6xl mb-3'
    }, '🌱'),
    h('p', {
     className: 'text-gray-500 font-bold mb-1'
    }, 'Még nincs mai bejegyzés'),
    h('p', {
     className: 'text-xs text-gray-400 mb-4'
    }, 'Egy mérés rögzítése fél percet sem vesz igénybe.'),
    onAdd && h('button', {
     onClick: onAdd,
     type: 'button',
     className: 'font-bold text-white px-6 py-3 rounded-2xl text-sm shadow-lg',
     style: {
      background: 'linear-gradient(135deg,var(--hbc-c1,#4f46e5),var(--hbc-c2,#7c3aed))'
     }
    }, '➕ Első mai bejegyzés rögzítése')) :
   h('div', {
    className: 'space-y-2'
   }, todayEs.map(e => h(EntryCard, {
    key: e.id,
    entry: e,
    onEdit,
    onDelete,
    settings
   })))
  ])
 );
}

// ═══════════ GRAFIKONOK ═══════════
function Charts({
 entries,
 settings
}) {
 const [mode, setMode] = useState('week');
 const [from, setFrom] = useState(subD(7));
 const [to, setTo] = useState(todayStr());
 const bgR = useRef(null),
  carbR = useRef(null),
  insR = useRef(null),
  cgmR = useRef(null);
 const charts = useRef({});

 const getRange = () => {
  if (mode === 'day') return {
   f: todayStr(),
   t: todayStr()
  };
  if (mode === 'week') return {
   f: subD(7),
   t: todayStr()
  };
  if (mode === 'month') return {
   f: subD(30),
   t: todayStr()
  };
  return {
   f: from,
   t: to
  };
 };

 const {
  f,
  t
 } = getRange();
 const filtered = useMemo(() => sortedByTS(filterRange(entries, f, t)), [entries, f, t]);
 const bgD = filtered.filter(e => e.bloodGlucose);
 const carbD = filtered.filter(e => e.carbs);
 /* v12.3: az inzulin grafikon a tényleges BEADÁSI időket mutatja — ha a gyors és a
    bázis ideje eltér egy bejegyzésen belül, külön oszlopot kapnak */
 const insD = (() => {
  const ev = [];
  filtered.forEach(e => {
   const rT = rapidTS(e),
    bT = basalTS(e);
   if (e.insulinRapid > 0) ev.push({
    ts: rT,
    rapid: parseFloat(e.insulinRapid),
    basal: 0
   });
   if (e.insulinLong > 0) {
    const last = ev[ev.length - 1];
    if (e.insulinRapid > 0 && last && bT === rT) last.basal = parseFloat(e.insulinLong);
    else ev.push({
     ts: bT,
     rapid: 0,
     basal: parseFloat(e.insulinLong)
    });
   }
  });
  return ev.sort((a, b) => new Date(a.ts) - new Date(b.ts));
 })();
 /* v7: küszöbök a beállításokból + CGM-adatok */
 const _lo = (settings && settings.lowBG != null) ? settings.lowBG : 3.9;
 const _hi = (settings && settings.highBG != null) ? settings.highBG : 10.0;
 const cgmD = useMemo(() => window.HBC_CGM ? window.HBC_CGM.getRange(f, t) : [], [f, t]);

 useEffect(() => {
  /* v7.1: sötét módhoz igazodó tengelyszínek */
  const _dark = document.documentElement.hasAttribute('data-hbc-dark');
  Chart.defaults.color = _dark ? '#c9c5e8' : '#666';
  Chart.defaults.borderColor = _dark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.08)';
  if (bgR.current) {
   charts.current.bg?.destroy();
   const _ctx = bgR.current.getContext('2d');
   /* lágy színátmenet a görbe alá */
   const _grad = _ctx.createLinearGradient(0, 0, 0, 320);
   _grad.addColorStop(0, 'rgba(239,68,68,.28)');
   _grad.addColorStop(1, 'rgba(239,68,68,0)');
   charts.current.bg = new Chart(_ctx, {
    type: 'line',
    data: {
     labels: bgD.map(e => fmtDT(e.timestamp)),
     datasets: [
      /* zöld céltartomány-sáv háttérként (két vonal közötti kitöltés) */
      {
       label: 'Max (' + window.bgU.disp(_hi) + ')',
       data: bgD.map(() => window.bgU.disp(_hi)),
       borderColor: 'rgba(245,158,11,.65)',
       borderDash: [5, 4],
       pointRadius: 0,
       borderWidth: 1.5,
       fill: false
      },
      {
       label: 'Min (' + window.bgU.disp(_lo) + ')',
       data: bgD.map(() => window.bgU.disp(_lo)),
       borderColor: 'rgba(16,185,129,.65)',
       borderDash: [5, 4],
       pointRadius: 0,
       borderWidth: 1.5,
       fill: {
        target: '-1',
        above: 'rgba(16,185,129,.10)'
       }
      },
      {
       label: window.t('Vércukor') + ' (' + window.bgU.label() + ')',
       data: bgD.map(e => window.bgU.disp(e.bloodGlucose)),
       borderColor: '#ef4444',
       backgroundColor: _grad,
       tension: .35,
       fill: true,
       pointRadius: 4,
       borderWidth: 2.5,
       pointBackgroundColor: bgD.map(e => e.bloodGlucose < _lo ? '#f59e0b' : e.bloodGlucose > _hi ? '#ef4444' : '#10b981'),
       pointBorderColor: '#fff',
       pointBorderWidth: 1
      }
     ]
    },
    options: {
     responsive: true,
     maintainAspectRatio: false,
     plugins: {
      legend: {
       position: 'top'
      },
      tooltip: {
       mode: 'index',
       intersect: false
      }
     },
     scales: {
      y: {
       min: 0,
       max: window.bgU.disp(Math.min(30, Math.max(15, ...bgD.map(e => parseFloat(e.bloodGlucose))) + 2))
      }
     }
    }
   });
  }
  if (carbR.current) {
   charts.current.carb?.destroy();
   charts.current.carb = new Chart(carbR.current.getContext('2d'), {
    type: 'bar',
    data: {
     labels: carbD.map(e => fmtDT(e.timestamp)),
     datasets: [{
      label: window.t('CH (g)'),
      data: carbD.map(e => e.carbs),
      backgroundColor: 'rgba(16,185,129,.7)',
      borderColor: '#10b981',
      borderWidth: 0,
      borderRadius: 8,
      borderSkipped: false
     }]
    },
    options: {
     responsive: true,
     maintainAspectRatio: false,
     plugins: {
      legend: {
       position: 'top'
      }
     },
     scales: {
      y: {
       beginAtZero: true
      }
     }
    }
   });
  }
  if (cgmR.current && cgmD.length) {
   charts.current.cgm?.destroy();
   charts.current.cgm = new Chart(cgmR.current.getContext('2d'), {
    type: 'line',
    data: {
     labels: cgmD.map(r => fmtDT(r.ts)),
     datasets: [{
       label: 'CGM (' + window.bgU.label() + ')',
       data: cgmD.map(r => window.bgU.disp(r.v)),
       borderColor: '#6366f1',
       backgroundColor: 'rgba(99,102,241,.06)',
       tension: .25,
       fill: true,
       pointRadius: 0,
       borderWidth: 2
      },
      {
       label: 'Min (' + window.bgU.disp(_lo) + ')',
       data: cgmD.map(() => window.bgU.disp(_lo)),
       borderColor: '#10b981',
       borderDash: [5, 4],
       pointRadius: 0,
       borderWidth: 1
      },
      {
       label: 'Max (' + window.bgU.disp(_hi) + ')',
       data: cgmD.map(() => window.bgU.disp(_hi)),
       borderColor: '#f59e0b',
       borderDash: [5, 4],
       pointRadius: 0,
       borderWidth: 1
      }
     ]
    },
    options: {
     responsive: true,
     maintainAspectRatio: false,
     plugins: {
      legend: {
       position: 'top'
      }
     },
     scales: {
      y: {
       min: 0
      }
     }
    }
   });
  }
  if (insR.current) {
   charts.current.ins?.destroy();
   charts.current.ins = new Chart(insR.current.getContext('2d'), {
    type: 'bar',
    data: {
     labels: insD.map(ev => fmtDT(ev.ts)),
     datasets: [{
       label: ((settings && settings.rapidName) || 'Humalog') + ' (E)',
       data: insD.map(ev => ev.rapid || 0),
       backgroundColor: 'rgba(59,130,246,.7)',
       borderColor: '#3b82f6',
       borderWidth: 0,
       borderRadius: 8,
       borderSkipped: false
      },
      {
       label: ((settings && settings.basalName) || 'Lantus') + ' (E)',
       data: insD.map(ev => ev.basal || 0),
       backgroundColor: 'rgba(139,92,246,.7)',
       borderColor: '#8b5cf6',
       borderWidth: 0,
       borderRadius: 8,
       borderSkipped: false
      },
     ]
    },
    options: {
     responsive: true,
     maintainAspectRatio: false,
     plugins: {
      legend: {
       position: 'top'
      }
     },
     scales: {
      y: {
       beginAtZero: true
      }
     }
    }
   });
  }
  return () => Object.values(charts.current).forEach(c => c?.destroy());
 }, [filtered, cgmD, settings]);

 const modes = [{
  id: 'day',
  l: 'Nap'
 }, {
  id: 'week',
  l: 'Hét'
 }, {
  id: 'month',
  l: 'Hónap'
 }, {
  id: 'custom',
  l: 'Egyéni'
 }];

 return h('div', {
   className: 'space-y-4'
  },
  card([
   h('div', {
     className: 'flex flex-wrap gap-2 mb-3'
    },
    modes.map(m => h('button', {
     key: m.id,
     onClick: () => setMode(m.id),
     type: 'button',
     className: `px-4 py-2 rounded-xl text-sm font-bold transition-all ${mode===m.id?'ta':'ti'}`
    }, m.l))
   ),
   mode === 'custom' && h('div', {
     className: 'flex gap-3 flex-wrap items-end'
    },
    h('div', null, h('label', {
     className: 'text-sm font-bold text-gray-500 block mb-1'
    }, 'Tól:'), h('input', {
     type: 'date',
     value: from,
     onChange: e => setFrom(e.target.value),
     className: 'border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
    })),
    h('div', null, h('label', {
     className: 'text-sm font-bold text-gray-500 block mb-1'
    }, 'Ig:'), h('input', {
     type: 'date',
     value: to,
     onChange: e => setTo(e.target.value),
     className: 'border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
    })),
    h('span', {
     className: 'text-xs text-indigo-400 font-semibold mb-2'
    }, `${filtered.length} bejegyzés`)
   )
  ]),
  card([h('h3', {
   className: 'font-black text-gray-800 mb-3'
  }, `📊 Vércukor (${bgD.length} mérés)`), h('div', {
   className: 'chart-container'
  }, h('canvas', {
   ref: bgR
  }))]),
  cgmD.length > 0 && card([h('h3', {
   className: 'font-black text-gray-800 mb-3'
  }, `📡 CGM szenzor (${cgmD.length} mérés)`), h('div', {
   className: 'chart-container'
  }, h('canvas', {
   ref: cgmR
  }))]),
  card([h('h3', {
   className: 'font-black text-gray-800 mb-3'
  }, `🍽️ Szénhidrát (${carbD.length} étkezés)`), h('div', {
   className: 'chart-container'
  }, h('canvas', {
   ref: carbR
  }))]),
  card([h('h3', {
   className: 'font-black text-gray-800 mb-3'
  }, `💉 Inzulin (${insD.length} adag)`), h('div', {
   className: 'chart-container'
  }, h('canvas', {
   ref: insR
  }))])
 );
}

// ═══════════ BEJEGYZÉSEK ═══════════
function EntriesList({
 entries,
 onEdit,
 onDelete,
 settings
}) {
 const [mode, setMode] = useState('day');
 const [selDate, setSelDate] = useState(todayStr());
 const [fromD, setFromD] = useState(subD(3));
 const [toD, setToD] = useState(todayStr());
 const [typeF, setTypeF] = useState('all');
 const [actF, setActF] = useState('all'); /* v14: tevékenységnév-szűrő */

 const {
  f,
  t
 } = mode === 'day' ? {
  f: selDate,
  t: selDate
 } : {
  f: fromD,
  t: toD
 };
 const actNames = useMemo(() => activityNames(entries), [entries]); /* v14 */
 const filtered = useMemo(() => {
  let arr = sortedByTS(filterRange(entries, f, t)).reverse();
  /* v13: a Lantus és az Egyéb tevékenység szűrő TARTALOM szerint is szűr —
     a bázisinzulin és a mozgás legtöbbször nem külön típusú bejegyzés,
     hanem egy étkezés/kontroll bejegyzés mezője. Így minden olyan bejegyzés
     megjelenik, amelyben van bázisdózis, ill. tevékenység. */
  if (typeF === 'Lantus') arr = arr.filter(e => e.type === 'Lantus' || parseFloat(e.insulinLong) > 0);
  else if (typeF === 'Egyéb tevékenység') {
   arr = arr.filter(e => e.type === 'Egyéb tevékenység' || (e.activity && String(e.activity).trim() !== ''));
   /* v14: további szűrés a tevékenység NEVÉRE */
   if (actF !== 'all') arr = arr.filter(e => String(e.activity || '').split(',').map(x => x.trim()).includes(actF));
  } else if (typeF !== 'all') arr = arr.filter(e => e.type === typeF);
  return arr;
 }, [entries, f, t, typeF, actF]);

 return h('div', {
   className: 'space-y-4'
  },
  card([
   h('div', {
     className: 'flex flex-wrap gap-2 mb-3'
    },
    h('button', {
     onClick: () => setMode('day'),
     type: 'button',
     className: `px-4 py-2 rounded-xl text-sm font-bold ${mode==='day'?'ta':'ti'}`
    }, 'Nap'),
    h('button', {
     onClick: () => setMode('custom'),
     type: 'button',
     className: `px-4 py-2 rounded-xl text-sm font-bold ${mode==='custom'?'ta':'ti'}`
    }, 'Egyéni tartomány'),
    h('select', {
      value: typeF,
      onChange: e => setTypeF(e.target.value),
      className: 'ml-auto border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm font-bold focus:outline-none'
     },
     h('option', {
      value: 'all'
     }, '✅ Összes'),
     h('option', {
      value: 'Étkezés'
     }, '🍽️ Étkezés'),
     h('option', {
      value: 'Kontroll'
     }, '🩸 Kontroll'),
     h('option', {
      value: 'Lantus'
     }, '💉 ' + ((settings && settings.basalName) || 'Lantus')), /* v13: a beállított bázisnév */
     h('option', {
      value: 'Egyéb tevékenység'
     }, '🏃 Egyéb tevékenység')
    )
   ),
   /* v14: az Egyéb tevékenység szűrő TOVÁBBI szűrése a tevékenység nevére */
   typeF === 'Egyéb tevékenység' && actNames.length > 0 && h('div', {
     className: 'mb-3'
    },
    h('label', {
     className: 'text-xs font-bold text-yellow-700 block mb-1'
    }, '🏷️ ' + window.t('Szűrés tevékenység nevére')),
    h('select', {
      value: actF,
      onChange: e => setActF(e.target.value),
      className: 'w-full border-2 border-yellow-300 rounded-xl px-3 py-2 text-sm font-bold focus:outline-none bg-white'
     },
     h('option', {
      value: 'all'
     }, '✅ ' + window.t('Minden tevékenység')),
     actNames.map(n => h('option', {
      key: n,
      value: n
     }, n))
    )
   ),
   mode === 'day' && h('div', {
     className: 'flex items-center gap-3 mb-3'
    },
    h('button', {
     onClick: () => setSelDate(addD(selDate, -1)),
     type: 'button',
     className: 'w-10 h-10 bg-indigo-100 hover:bg-indigo-200 rounded-xl font-bold text-indigo-700 flex items-center justify-center'
    }, '◀'),
    h('input', {
     type: 'date',
     value: selDate,
     onChange: e => setSelDate(e.target.value),
     className: 'flex-1 border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm font-bold text-center focus:outline-none focus:border-indigo-400'
    }),
    h('button', {
     onClick: () => setSelDate(addD(selDate, 1)),
     type: 'button',
     className: 'w-10 h-10 bg-indigo-100 hover:bg-indigo-200 rounded-xl font-bold text-indigo-700 flex items-center justify-center'
    }, '▶')
   ),
   mode === 'custom' && h('div', {
     className: 'flex gap-3 flex-wrap mb-3 items-end'
    },
    h('div', null, h('label', {
     className: 'text-sm font-bold text-gray-500 block mb-1'
    }, 'Tól:'), h('input', {
     type: 'date',
     value: fromD,
     onChange: e => setFromD(e.target.value),
     className: 'border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
    })),
    h('div', null, h('label', {
     className: 'text-sm font-bold text-gray-500 block mb-1'
    }, 'Ig:'), h('input', {
     type: 'date',
     value: toD,
     onChange: e => setToD(e.target.value),
     className: 'border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
    }))
   ),
   h('p', {
    className: 'text-xs text-indigo-400 font-semibold mb-3'
   }, `${filtered.length} bejegyzés`),
   filtered.length === 0 ?
   h('div', {
     className: 'text-center py-8'
    },
    h('div', {
     className: 'text-6xl mb-3'
    }, '🔎'),
    h('p', {
     className: 'text-gray-500 font-bold'
    }, 'Nincs bejegyzés ebben az időszakban'),
    h('p', {
     className: 'text-xs text-gray-400 mt-1'
    }, 'Válassz másik napot vagy időszakot fent.')) :
   h('div', {
    className: 'space-y-2'
   }, filtered.map(e => h(EntryCard, {
    key: e.id,
    entry: e,
    onEdit,
    onDelete,
    showDate: mode === 'custom',
    settings
   })))
  ])
 );
}

// ═══════════ v8: ORVOSI RIPORT (nyomtatható / PDF) ═══════════
function generateDoctorReport(entries, settings, f, t) {
 const lang = window.HBC_I18N.getLang();
 const hu = lang !== 'en';
 const R = (a, b) => hu ? a : b;
 const D = window.bgU.disp,
  UL = window.bgU.label();
 const _lo = settings && settings.lowBG != null ? settings.lowBG : 3.9;
 const _hi = settings && settings.highBG != null ? settings.highBG : 10.0;
 const es = sortedByTS(filterRange(entries, f, t));
 const bgE = es.filter(e => e.bloodGlucose);
 const n = bgE.length;
 const avg = n ? bgE.reduce((s, e) => s + parseFloat(e.bloodGlucose), 0) / n : 0;
 const sd = n > 1 ? Math.sqrt(bgE.reduce((s, e) => s + Math.pow(parseFloat(e.bloodGlucose) - avg, 2), 0) / (n - 1)) : 0;
 const cv = avg > 0 ? (sd / avg * 100) : 0;
 const inR = bgE.filter(e => e.bloodGlucose >= _lo && e.bloodGlucose <= _hi).length;
 const nLow = bgE.filter(e => e.bloodGlucose < _lo).length;
 const nHigh = bgE.filter(e => e.bloodGlucose > _hi).length;
 const tir = n ? Math.round(inR / n * 100) : 0;
 const hba1c = avg > 0 ? ((avg * 18 + 46.7) / 28.7).toFixed(1) : '–';
 const gmi = avg > 0 ? (3.31 + 0.02392 * avg * 18.016).toFixed(1) : '–';
 const dayCount = Math.max(1, Math.round((new Date(t + 'T00:00:00') - new Date(f + 'T00:00:00')) / 864e5) + 1);
 /* v12.3: az inzulin-összegek a tényleges beadási idő szerint kerülnek az időszakba */
 const sumRapid = entries.reduce((s, e) => {
  const d = getDate(rapidTS(e));
  return s + (e.insulinRapid > 0 && d >= f && d <= t ? parseFloat(e.insulinRapid) : 0);
 }, 0);
 const sumBasal = entries.reduce((s, e) => {
  const d = getDate(basalTS(e));
  return s + (e.insulinLong > 0 && d >= f && d <= t ? parseFloat(e.insulinLong) : 0);
 }, 0);
 const sumCH = es.reduce((s, e) => s + (parseFloat(e.carbs) || 0), 0);
 const rapidN = (settings && settings.rapidName) || 'Humalog';
 const basalN = (settings && settings.basalName) || 'Lantus';

 /* grafikonok képpé renderelése (offscreen canvas, animáció nélkül) */
 const oldColor = Chart.defaults.color;
 Chart.defaults.color = '#444';
 const mkChart = cfg => {
  const c = document.createElement('canvas');
  c.width = 980;
  c.height = 330;
  const ch = new Chart(c.getContext('2d'), cfg);
  const url = c.toDataURL('image/png');
  ch.destroy();
  return url;
 };
 const baseOpt = {
  responsive: false,
  animation: false,
  devicePixelRatio: 1,
  plugins: {
   legend: {
    position: 'top',
    labels: {
     boxWidth: 18
    }
   }
  }
 };
 const bgImg = n ? mkChart({
  type: 'line',
  data: {
   labels: bgE.map(e => fmtDT(e.timestamp)),
   datasets: [{
     label: `Max (${D(_hi)})`,
     data: bgE.map(() => D(_hi)),
     borderColor: 'rgba(245,158,11,.7)',
     borderDash: [5, 4],
     pointRadius: 0,
     borderWidth: 1.2,
     fill: false
    },
    {
     label: `Min (${D(_lo)})`,
     data: bgE.map(() => D(_lo)),
     borderColor: 'rgba(16,185,129,.7)',
     borderDash: [5, 4],
     pointRadius: 0,
     borderWidth: 1.2,
     fill: {
      target: '-1',
      above: 'rgba(16,185,129,.08)'
     }
    },
    {
     label: R('Vércukor', 'Blood glucose') + ` (${UL})`,
     data: bgE.map(e => D(e.bloodGlucose)),
     borderColor: '#ef4444',
     tension: .3,
     pointRadius: 2.5,
     borderWidth: 2,
     fill: false,
     pointBackgroundColor: bgE.map(e => e.bloodGlucose < _lo ? '#f59e0b' : e.bloodGlucose > _hi ? '#ef4444' : '#10b981')
    }
   ]
  },
  options: {
   ...baseOpt,
   scales: {
    y: {
     min: 0
    }
   }
  }
 }) : null;
 const buckets = Array.from({
  length: 24
 }, () => []);
 bgE.forEach(e => {
  buckets[new Date(e.timestamp).getHours()].push(parseFloat(e.bloodGlucose));
 });
 const hAvg = buckets.map(b => b.length ? b.reduce((a, x) => a + x, 0) / b.length : null);
 const patImg = n ? mkChart({
  type: 'line',
  data: {
   labels: Array.from({
    length: 24
   }, (_, i) => i + ':00'),
   datasets: [{
     label: R('Óránkénti átlag', 'Hourly average') + ` (${UL})`,
     data: hAvg.map(v => v != null ? D(v) : null),
     borderColor: '#6366f1',
     borderWidth: 2.2,
     pointRadius: 3,
     tension: .3,
     spanGaps: true
    },
    {
     label: `Max (${D(_hi)})`,
     data: Array(24).fill(D(_hi)),
     borderColor: 'rgba(245,158,11,.7)',
     borderDash: [5, 4],
     pointRadius: 0,
     borderWidth: 1.2
    },
    {
     label: `Min (${D(_lo)})`,
     data: Array(24).fill(D(_lo)),
     borderColor: 'rgba(16,185,129,.7)',
     borderDash: [5, 4],
     pointRadius: 0,
     borderWidth: 1.2
    }
   ]
  },
  options: {
   ...baseOpt,
   scales: {
    y: {
     min: 0
    }
   }
  }
 }) : null;
 Chart.defaults.color = oldColor;

 const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
 const fmtD = s => new Date(s + 'T00:00:00').toLocaleDateString(window.HBC_LOCALE());
 const rows = es.map(e => `<tr>
    <td>${esc(fmtAlwaysDT(e.timestamp))}</td><td>${esc(window.t(e.type||''))}${e.mealType?' – '+esc(window.t(e.mealType)):''}</td>
    <td class="num">${e.bloodGlucose?esc(D(e.bloodGlucose)):''}</td>
    <td class="num">${e.carbs?esc(e.carbs):''}</td>
    <td class="num">${e.insulinRapid?esc(e.insulinRapid)+(e.insulinRapidTime&&e.insulinRapidTime!==e.timestamp?' ('+esc(fmtTime(e.insulinRapidTime))+')':''):''}</td>
    <td class="num">${e.insulinLong?esc(e.insulinLong)+(e.insulinLongTime&&e.insulinLongTime!==e.timestamp?' ('+esc(fmtTime(e.insulinLongTime))+')':''):''}</td>
    <td class="notes">${esc(e.notes||'')}</td></tr>`).join('');

 const stat = (l, v) => `<div class="kpi"><div class="kl">${l}</div><div class="kv">${v}</div></div>`;
 const html = `<!DOCTYPE html><html lang="${hu?'hu':'en'}"><head><meta charset="UTF-8">
<base href="${location.href}">
<title>${R('HBC Orvosi riport','HBC Medical report')} ${f} – ${t}</title>
<style>
@page{size:A4;margin:14mm}
body{font-family:'Nunito','Segoe UI',sans-serif;color:#1f2937;margin:0;font-size:11px;line-height:1.45}
.hdr{display:flex;align-items:center;gap:12px;border-bottom:3px solid #4f46e5;padding-bottom:10px;margin-bottom:14px}
.hdr img{width:52px;height:52px;object-fit:contain}
h1{font-size:19px;margin:0;color:#4f46e5}
.sub{color:#6b7280;font-size:11px}
.meta{display:flex;gap:24px;flex-wrap:wrap;margin-bottom:12px;font-size:11.5px}
.meta b{color:#4f46e5}
.kpis{display:grid;grid-template-columns:repeat(6,1fr);gap:8px;margin:12px 0}
.kpi{border:1.5px solid #e0e7ff;border-radius:10px;padding:8px;text-align:center;background:#fafaff}
.kl{font-size:9px;color:#6b7280;font-weight:700;text-transform:uppercase;letter-spacing:.03em}
.kv{font-size:14px;font-weight:900;color:#312e81;margin-top:2px}
h2{font-size:13px;color:#4f46e5;border-bottom:1.5px solid #e0e7ff;padding-bottom:3px;margin:16px 0 8px}
img.chart{width:100%;max-width:100%}
table{width:100%;border-collapse:collapse;font-size:9.5px}
th{background:#eef2ff;color:#312e81;text-align:left;padding:4px 6px;border-bottom:2px solid #c7d2fe}
td{padding:3px 6px;border-bottom:1px solid #eef2ff;vertical-align:top}
td.num{text-align:right;font-variant-numeric:tabular-nums}
td.notes{color:#6b7280;font-style:italic;max-width:150px}
tr:nth-child(even) td{background:#fafbff}
.warn{margin-top:14px;border:1.5px solid #fcd34d;background:#fffbeb;color:#92400e;border-radius:10px;padding:8px;font-size:10px}
.foot{margin-top:10px;color:#9ca3af;font-size:9px;display:flex;justify-content:space-between}
.noprint{position:fixed;top:10px;right:10px}
.noprint button{background:#4f46e5;color:#fff;border:0;border-radius:10px;padding:10px 18px;font-weight:800;font-size:13px;cursor:pointer}
@media print{.noprint{display:none}}
</style></head><body>
<div class="noprint"><button onclick="window.print()">🖨️ ${R('Nyomtatás / PDF mentés','Print / Save as PDF')}</button></div>
<div class="hdr"><img src="icons/logo.png" alt="">
  <div><h1>HBC ${R('Diabétesz Napló — Orvosi riport','Diabetes Diary — Medical report')}</h1>
  <div class="sub">${R('Inzulinnal kezelt cukorbeteg személyes naplója','Personal diary of an insulin-treated person with diabetes')} · v${APP_VERSION}</div></div></div>
<div class="meta">
  ${settings&&settings.sosName?`<span>${R('Név','Name')}: <b>${esc(settings.sosName)}</b></span>`:(settings&&settings.nickname?`<span>${R('Név/becenév','Name/nickname')}: <b>${esc(settings.nickname)}</b></span>`:'')}
  ${settings&&settings.sosPhone?`<span>${R('Telefon','Phone')}: <b>${esc(settings.sosPhone)}</b></span>`:''}
  <span>${R('Időszak','Period')}: <b>${fmtD(f)} – ${fmtD(t)}</b> (${dayCount} ${R('nap','days')})</span>
  <span>${R('Mértékegység','Unit')}: <b>${UL}</b></span>
  <span>${R('Céltartomány','Target range')}: <b>${D(_lo)}–${D(_hi)} ${UL}</b></span>
  <span>${R('Készült','Generated')}: <b>${new Date().toLocaleString(window.HBC_LOCALE())}</b></span>
</div>
<div class="kpis">
  ${stat(R('Mérések','Readings'),n)}
  ${stat(R('Átlag','Average'),n?D(avg)+' '+UL:'–')}
  ${stat('SD / CV',n>1?D(sd)+' / '+cv.toFixed(0)+'%':'–')}
  ${stat('TIR',tir+'%')}
  ${stat(R('Becsült HbA1c','Est. HbA1c'),hba1c+'%')}
  ${stat('GMI',gmi+'%')}
</div>
<div class="kpis">
  ${stat(R('Alacsony esemény','Low events'),nLow+' ('+(n?Math.round(nLow/n*100):0)+'%)')}
  ${stat(R('Magas esemény','High events'),nHigh+' ('+(n?Math.round(nHigh/n*100):0)+'%)')}
  ${stat(rapidN+' '+R('napi átlag','daily avg'),(sumRapid/dayCount).toFixed(1)+' E')}
  ${stat(basalN+' '+R('napi átlag','daily avg'),(sumBasal/dayCount).toFixed(1)+' E')}
  ${stat(R('CH napi átlag','Daily avg carbs'),(sumCH/dayCount).toFixed(0)+' g')}
  ${stat(R('Bejegyzések','Entries'),es.length)}
</div>
${bgImg?`<h2>${R('Vércukor-értékek a teljes időszakban','Blood glucose over the whole period')}</h2><img class="chart" src="${bgImg}">`:''}
${patImg?`<h2>${R('Napi mintázat (óránkénti átlag)','Daily pattern (hourly average)')}</h2><img class="chart" src="${patImg}">`:''}
<h2>${R('Részletes napló','Detailed log')} (${es.length})</h2>
<table><thead><tr><th>${R('Időpont','Time')}</th><th>${R('Típus','Type')}</th><th>${R('VC','BG')} (${UL})</th><th>CH (g)</th><th>${esc(rapidN)} (E)</th><th>${esc(basalN)} (E)</th><th>${R('Megjegyzés','Notes')}</th></tr></thead>
<tbody>${rows}</tbody></table>
<p style="font-size:9.5px;color:#6b7280;margin:4px 0 0">${R('A zárójeles idő az inzulin tényleges beadási időpontja, ha az eltér a bejegyzés időpontjától.','Time in parentheses is the actual insulin injection time when it differs from the entry time.')}</p>
<div class="warn">⚠️ ${R('Ez a riport a felhasználó saját naplóbejegyzésein alapuló becsléseket tartalmaz (HbA1c, GMI, TIR). Nem laboreredmény és nem orvostechnikai eszköz — a terápiás döntéseket mindig a kezelőorvos hozza meg!','This report contains estimates (HbA1c, GMI, TIR) based on diary entries recorded by the user. It is not a laboratory result and not a medical device — treatment decisions must always be made by the treating physician!')}</div>
<div class="foot"><span>${R('HBC Diabétesz Napló','HBC Diabetes Diary')} v${APP_VERSION} Type 1 Diabetes APP</span><span>${R('Oldal','Page')}: <span class="pg"></span></span></div>
<script>setTimeout(function(){window.print();},400);</script>
</body></html>`;
 const win = window.open('', '_blank');
 if (!win) return false;
 win.document.open();
 win.document.write(html);
 win.document.close();
 return true;
}

// ═══════════ STATISZTIKA + IOB ═══════════
function Statistics({
 entries,
 settings
}) {
 const [mode, setMode] = useState('7');
 const [fromD, setFromD] = useState(subD(7));
 const [toD, setToD] = useState(todayStr());
 const iob = useMemo(() => calcIOB(entries, settings && settings.diaHours), [entries, settings]);
 const patR = useRef(null);
 const patC = useRef(null);
 /* v8: orvosi riport időszaka — naptári "-tól -ig" */
 const [repF, setRepF] = useState(subD(14));
 const [repT, setRepT] = useState(todayStr());

 const {
  f,
  t
 } = mode === 'custom' ? {
  f: fromD,
  t: toD
 } : {
  f: subD(parseInt(mode)),
  t: todayStr()
 };
 const filtered = useMemo(() => filterRange(entries, f, t), [entries, f, t]);
 const bgE = filtered.filter(e => e.bloodGlucose);
 const avgBG = bgE.length > 0 ? bgE.reduce((s, e) => s + parseFloat(e.bloodGlucose), 0) / bgE.length : 0;
 const _sLow = settings && settings.lowBG != null ? settings.lowBG : 3.9;
 const _sHigh = settings && settings.highBG != null ? settings.highBG : 10.0;
 const inR = bgE.filter(e => e.bloodGlucose >= _sLow && e.bloodGlucose <= _sHigh).length;
 const tir = bgE.length > 0 ? (inR / bgE.length * 100) : 0;
 const low = bgE.filter(e => e.bloodGlucose < _sLow).length;
 const high = bgE.filter(e => e.bloodGlucose > _sHigh).length;
 const hba1c = avgBG > 0 ? ((avgBG * 18 + 46.7) / 28.7).toFixed(1) : '–';
 /* v8: GMI (Glucose Management Indicator) — nemzetközi képlet mg/dl alapon */
 const gmi = avgBG > 0 ? (3.31 + 0.02392 * avgBG * 18.016).toFixed(1) : '–';

 /* v8: napi mintázat — óránkénti átlag / min / max a kiválasztott időszakban */
 const hourly = useMemo(() => {
  const buckets = Array.from({
   length: 24
  }, () => []);
  bgE.forEach(e => {
   const hh = new Date(e.timestamp).getHours();
   buckets[hh].push(parseFloat(e.bloodGlucose));
  });
  return buckets.map(b => b.length ? {
   avg: b.reduce((a, x) => a + x, 0) / b.length,
   min: Math.min(...b),
   max: Math.max(...b),
   n: b.length
  } : null);
 }, [bgE]);
 useEffect(() => {
  if (!patR.current) return;
  patC.current && patC.current.destroy();
  const _dark = document.documentElement.hasAttribute('data-hbc-dark');
  Chart.defaults.color = _dark ? '#c9c5e8' : '#666';
  const D = window.bgU.disp;
  patC.current = new Chart(patR.current.getContext('2d'), {
   type: 'line',
   data: {
    labels: Array.from({
     length: 24
    }, (_, i) => i + ':00'),
    datasets: [{
      label: 'Max',
      data: hourly.map(x => x ? D(x.max) : null),
      borderColor: 'rgba(99,102,241,.35)',
      pointRadius: 0,
      borderWidth: 1,
      fill: false,
      spanGaps: true
     },
     {
      label: 'Min',
      data: hourly.map(x => x ? D(x.min) : null),
      borderColor: 'rgba(99,102,241,.35)',
      pointRadius: 0,
      borderWidth: 1,
      spanGaps: true,
      fill: {
       target: '-1',
       above: 'rgba(99,102,241,.12)',
       below: 'rgba(99,102,241,.12)'
      }
     },
     {
      label: window.t('Átlag'),
      data: hourly.map(x => x ? D(x.avg) : null),
      borderColor: '#6366f1',
      borderWidth: 2.5,
      pointRadius: 3,
      tension: .3,
      spanGaps: true
     },
     {
      label: 'Max (' + D(_sHigh) + ')',
      data: Array(24).fill(D(_sHigh)),
      borderColor: 'rgba(245,158,11,.6)',
      borderDash: [5, 4],
      pointRadius: 0,
      borderWidth: 1.2
     },
     {
      label: 'Min (' + D(_sLow) + ')',
      data: Array(24).fill(D(_sLow)),
      borderColor: 'rgba(16,185,129,.6)',
      borderDash: [5, 4],
      pointRadius: 0,
      borderWidth: 1.2
     }
    ]
   },
   options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
     legend: {
      position: 'top'
     }
    },
    scales: {
     y: {
      min: 0
     }
    }
   }
  });
  return () => {
   patC.current && patC.current.destroy();
   patC.current = null;
  };
 }, [hourly, settings]);
 const meals = filtered.filter(e => e.type === 'Étkezés' && e.carbs > 0 && e.insulinRapid > 0);
 const avgC = meals.length > 0 ? meals.reduce((s, e) => s + parseFloat(e.carbs), 0) / meals.length : 0;
 const avgI = meals.length > 0 ? meals.reduce((s, e) => s + parseFloat(e.insulinRapid), 0) / meals.length : 0;
 const ratio = avgI > 0 ? (avgC / avgI).toFixed(1) : '–';

 const ranges = [{
  id: '1',
  l: '1 nap'
 }, {
  id: '7',
  l: '7 nap'
 }, {
  id: '30',
  l: '30 nap'
 }, {
  id: '90',
  l: '90 nap'
 }, {
  id: 'custom',
  l: 'Egyéni'
 }];

 return h('div', {
   className: 'space-y-4'
  },
  // IOB kártya
  h('div', {
    className: 'rounded-2xl shadow-lg p-4 text-white',
    style: {
     background: 'linear-gradient(135deg,#7c3aed,#4f46e5)'
    }
   },
   h('p', {
    className: 'text-sm font-bold opacity-80 mb-1'
   }, '🔄 IOB – Aktív inzulin (Insulin On Board)'),
   h('p', {
    className: 'text-4xl font-black iob-p'
   }, iob.toFixed(2), h('span', {
    className: 'text-xl ml-1'
   }, 'E')),
   h('p', {
    className: 'text-xs opacity-70 mt-1'
   }, 'Humalog ~4h hatástartam (Walsh-görbe). Becslés – konzultálj orvossal!'),
   h('div', {
     className: 'mt-2 bg-white/10 rounded-xl p-2'
    },
    h('div', {
      className: 'bg-white/20 rounded-full h-2.5'
     },
     h('div', {
      className: 'bg-white rounded-full h-2.5 transition-all',
      style: {
       width: `${Math.min(100,iob*12)}%`
      }
     })
    )
   )
  ),

  // Időszak választó
  card([
   h('div', {
     className: 'flex flex-wrap gap-2 mb-3'
    },
    ranges.map(r => h('button', {
     key: r.id,
     onClick: () => setMode(r.id),
     type: 'button',
     className: `px-3 py-2 rounded-xl text-sm font-bold transition-all ${mode===r.id?'ta':'ti'}`
    }, r.l))
   ),
   mode === 'custom' && h('div', {
     className: 'flex gap-3 flex-wrap'
    },
    h('div', null, h('label', {
     className: 'text-sm font-bold text-gray-500 block mb-1'
    }, 'Tól:'), h('input', {
     type: 'date',
     value: fromD,
     onChange: e => setFromD(e.target.value),
     className: 'border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none'
    })),
    h('div', null, h('label', {
     className: 'text-sm font-bold text-gray-500 block mb-1'
    }, 'Ig:'), h('input', {
     type: 'date',
     value: toD,
     onChange: e => setToD(e.target.value),
     className: 'border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none'
    }))
   )
  ]),

  // KPI-k (v8: + GMI)
  h('div', {
    className: 'grid grid-cols-2 md:grid-cols-5 gap-3'
   },
   [{
     label: 'Átlag VC',
     val: `${window.bgU.disp(avgBG)} ${window.bgU.label()}`,
     c: 'bg-red-50 border-red-200 text-red-700'
    },
    {
     label: 'TIR (célban)',
     val: `${tir.toFixed(0)}%`,
     c: 'bg-green-50 border-green-200 text-green-700'
    },
    {
     label: 'Becsült HbA1c ℹ️',
     val: `${hba1c}%`,
     c: 'bg-purple-50 border-purple-200 text-purple-700',
     note: true
    },
    {
     label: 'GMI ℹ️',
     val: `${gmi}%`,
     c: 'bg-indigo-50 border-indigo-200 text-indigo-700',
     note: true
    },
    {
     label: '1E ' + ((settings && settings.rapidName) || 'Humalog') + ' ≈',
     val: `${ratio}g CH`,
     c: 'bg-blue-50 border-blue-200 text-blue-700'
    },
   ].map((k, i) => h('div', {
     key: i,
     className: `rounded-2xl border-2 p-4 text-center ${k.c}`
    },
    h('p', {
     className: 'text-xs font-bold opacity-70 mb-1'
    }, k.label),
    h('p', {
     className: 'text-lg font-black'
    }, k.val),
    k.note && h('p', {
     className: 'text-[10px] opacity-60 mt-1'
    }, 'Ez a szám becslés, nem laboreredmény!')
   ))
  ),

  /* v8: napi mintázat — óránkénti átlag/min/max */
  bgE.length > 0 && card([
   h('h3', {
    className: 'font-black text-gray-800 mb-3'
   }, '🕒 ' + window.t('Napi mintázat (óránkénti átlag)')),
   h('div', {
    className: 'chart-container'
   }, h('canvas', {
    ref: patR
   })),
   h('p', {
    className: 'text-xs text-gray-400 mt-2'
   }, 'A sáv az adott órában mért legkisebb és legnagyobb értéket mutatja a kiválasztott időszakban.')
  ]),

  // Mérési összesítő
  card([
   h('h3', {
    className: 'font-black text-gray-800 mb-3'
   }, `📊 Mérési összesítő (${bgE.length} mérés)`),
   h('div', {
     className: 'grid grid-cols-3 gap-3'
    },
    h('div', {
      className: 'text-center p-3 bg-green-50 rounded-xl border border-green-200'
     },
     h('p', {
      className: 'text-xs text-gray-500 font-bold'
     }, '✅ Normál'), h('p', {
      className: 'text-2xl font-black text-green-700'
     }, inR), h('p', {
      className: 'text-xs text-green-500'
     }, `${tir.toFixed(0)}%`)),
    h('div', {
      className: 'text-center p-3 bg-amber-50 rounded-xl border border-amber-200'
     },
     h('p', {
      className: 'text-xs text-gray-500 font-bold'
     }, '⚠️ Alacsony'), h('p', {
      className: 'text-2xl font-black text-amber-700'
     }, low), h('p', {
      className: 'text-xs text-amber-500'
     }, `<${_sLow}`)),
    h('div', {
      className: 'text-center p-3 bg-red-50 rounded-xl border border-red-200'
     },
     h('p', {
      className: 'text-xs text-gray-500 font-bold'
     }, '🔺 Magas'), h('p', {
      className: 'text-2xl font-black text-red-700'
     }, high), h('p', {
      className: 'text-xs text-red-500'
     }, `>${_sHigh}`))
   ),
   h('div', {
     className: 'mt-3 p-3 bg-indigo-50 rounded-xl border border-indigo-200'
    },
    h('p', {
     className: 'text-xs font-bold text-indigo-800'
    }, '💡 CH/Inzulin arány'),
    h('p', {
     className: 'text-xs text-indigo-700 mt-1'
    }, `${meals.length} étkezés alapján: átlag ${avgC.toFixed(0)}g CH/étk, ${avgI.toFixed(1)}E ${(settings&&settings.rapidName)||'Humalog'} → 1E ≈ ${ratio}g CH. ⚠️ Orvossal egyeztess!`)
   )
  ]),

  /* v8: nyomtatható orvosi riport, szabad "-tól -ig" dátumtartománnyal */
  card([
   h('h3', {
    className: 'font-black text-gray-800 mb-1 flex items-center gap-2'
   }, h(Icon, {
    name: 'printer',
    size: 18,
    cls: 'text-indigo-500'
   }), window.t('Orvosi riport (PDF)')),
   h('p', {
    className: 'text-sm text-gray-500 mb-3'
   }, 'Nyomtatható összefoglaló a kezelőorvosnak: TIR, becsült HbA1c/GMI, grafikonok és részletes napló. A megnyíló oldalon a Nyomtatás gombbal PDF-be is mentheted.'),
   h('div', {
     className: 'flex gap-3 flex-wrap items-end'
    },
    h('div', null, h('label', {
      className: 'text-sm font-bold text-gray-500 block mb-1'
     }, 'Tól:'),
     h('input', {
      type: 'date',
      value: repF,
      onChange: e => setRepF(e.target.value),
      className: 'border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
     })),
    h('div', null, h('label', {
      className: 'text-sm font-bold text-gray-500 block mb-1'
     }, 'Ig:'),
     h('input', {
      type: 'date',
      value: repT,
      onChange: e => setRepT(e.target.value),
      className: 'border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
     })),
    h('button', {
      type: 'button',
      onClick: () => {
       if (repF > repT) return;
       generateDoctorReport(entries, settings, repF, repT);
      },
      className: 'font-bold text-white px-5 py-2.5 rounded-xl text-sm shadow-lg inline-flex items-center gap-2 min-h-[44px]',
      style: {
       background: 'linear-gradient(135deg,var(--hbc-c1,#4f46e5),var(--hbc-c2,#7c3aed))'
      }
     },
     h(Icon, {
      name: 'printer',
      size: 16
     }), window.t('Riport készítése'))
   ),
   repF > repT && h('p', {
    className: 'text-xs text-red-500 font-bold mt-2'
   }, 'A kezdő dátum nem lehet később, mint a záró dátum!')
  ])
 );
}

// ═══════════ ÉTEL MANAGER ═══════════
function FoodManager({
 allFoods,
 onAdd,
 onUpdate,
 onDelete,
 showAlert,
 showConfirm
}) {
 const [editing, setEditing] = useState(null);
 const [eName, setEName] = useState('');
 const [eCarbs, setECarbs] = useState('');
 const [eUnit, setEUnit] = useState('');
 const [aName, setAName] = useState('');
 const [aCarbs, setACarbs] = useState('');
 const [aUnit, setAUnit] = useState('');
 const [search, setSearch] = useState('');

 const shown = allFoods.filter(f => f.name.toLowerCase().includes(search.toLowerCase()));
 const startEdit = f => {
  setEditing(f.id);
  setEName(f.name);
  setECarbs(String(f.carbs));
  setEUnit(f.unit || '');
 };
 const saveEdit = () => {
  onUpdate(editing, {
   name: eName,
   carbs: parseInt(eCarbs),
   unit: eUnit
  });
  setEditing(null);
 };
 const doAdd = () => {
  if (!aName || !aCarbs) {
   showAlert && showAlert('Add meg az étel nevét és a CH értékét!');
   return;
  }
  onAdd({
   name: aName,
   carbs: parseInt(aCarbs),
   unit: aUnit || '1 adag',
   isDefault: false
  });
  setAName('');
  setACarbs('');
  setAUnit('');
  showAlert && showAlert('✅ Étel hozzáadva az adatbázisba!');
 };

 return h('div', {
   className: 'space-y-4'
  },
  // Új étel
  card([
   h('h2', {
    className: 'font-black text-gray-800 mb-3'
   }, '➕ Új étel hozzáadása'),
   h('div', {
     className: 'grid grid-cols-3 gap-2 mb-2'
    },
    h('input', {
     type: 'text',
     value: aName,
     onChange: e => setAName(e.target.value),
     placeholder: 'Étel neve',
     className: 'col-span-2 border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
    }),
    h('input', {
     type: 'number',
     value: aCarbs,
     onChange: e => setACarbs(e.target.value),
     placeholder: 'CH (g)',
     className: 'border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
    })
   ),
   h('div', {
     className: 'flex gap-2'
    },
    h('input', {
     type: 'text',
     value: aUnit,
     onChange: e => setAUnit(e.target.value),
     placeholder: 'Egység (pl. 1 db)',
     className: 'flex-1 border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
    }),
    h('button', {
     onClick: doAdd,
     type: 'button',
     className: 'ta px-4 py-2 rounded-xl font-bold text-sm text-white'
    }, '✅ Hozzáad')
   )
  ]),

  // Lista
  card([
   h('div', {
     className: 'flex items-center justify-between mb-3'
    },
    h('h2', {
     className: 'font-black text-gray-800'
    }, `🥗 Összes étel (${allFoods.length})`)),
   h('input', {
    type: 'text',
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: '🔍 Keresés...',
    className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm mb-3 focus:outline-none focus:border-indigo-400'
   }),
   h('div', {
     className: 'space-y-2'
    },
    shown.map(f => h('div', {
      key: f.id,
      className: `border-2 rounded-xl p-3 ${f.isDefault?'bg-indigo-50 border-indigo-200':'bg-emerald-50 border-emerald-200'}`
     },
     editing === f.id ?
     h('div', {
       className: 'space-y-2'
      },
      h('input', {
       type: 'text',
       value: eName,
       onChange: e => setEName(e.target.value),
       className: 'w-full border-2 border-indigo-300 rounded-xl px-3 py-2 text-sm focus:outline-none'
      }),
      h('div', {
        className: 'flex gap-2'
       },
       h('input', {
        type: 'number',
        value: eCarbs,
        onChange: e => setECarbs(e.target.value),
        placeholder: 'CH (g)',
        className: 'flex-1 border-2 border-indigo-300 rounded-xl px-3 py-2 text-sm focus:outline-none'
       }),
       h('input', {
        type: 'text',
        value: eUnit,
        onChange: e => setEUnit(e.target.value),
        placeholder: 'Egység',
        className: 'flex-1 border-2 border-indigo-300 rounded-xl px-3 py-2 text-sm focus:outline-none'
       })
      ),
      h('div', {
        className: 'flex gap-2'
       },
       h('button', {
        onClick: saveEdit,
        type: 'button',
        className: 'flex-1 bg-green-500 text-white rounded-xl py-2 font-bold text-sm'
       }, '✅ Mentés'),
       h('button', {
        onClick: () => setEditing(null),
        type: 'button',
        className: 'px-4 py-2 border-2 border-gray-300 rounded-xl font-bold text-sm'
       }, '❌')
      )
     ) :
     h('div', {
       className: 'flex items-center justify-between'
      },
      h('div', null,
       h('div', {
         className: 'flex items-center gap-2'
        },
        h('p', {
         className: 'font-bold text-gray-800 text-sm'
        }, f.name),
        f.isDefault && h('span', {
         className: 'text-xs bg-indigo-200 text-indigo-700 px-2 py-0.5 rounded-full font-bold'
        }, 'Alap')
       ),
       h('p', {
        className: 'text-xs text-gray-500'
       }, `${f.carbs}g CH${f.unit?' / '+f.unit:''}`)
      ),
      h('div', {
        className: 'flex gap-1'
       },
       h('button', {
        onClick: () => startEdit(f),
        type: 'button',
        className: 'p-2 text-indigo-500 hover:bg-indigo-100 rounded-lg'
       }, '✏️'),
       h('button', {
        onClick: () => onDelete(f.id),
        type: 'button',
        className: 'p-2 text-red-400 hover:bg-red-50 rounded-lg'
       }, '🗑️')
      )
     )
    ))
   )
  ])
 );
}

// ═══════════ ÚJ BEJEGYZÉS ═══════════
/* ═══════════ v14: TEVÉKENYSÉG-MEZŐK (Egyéb tevékenység típushoz) ═══════════
   - Legördülő gyorsválasztó a KORÁBBAN felvitt tevékenységnevekből
   - Új tevékenység név szabadon beírható (a mentés után bekerül a gyorsválasztóba)
   - Tól–ig időtartam: 5 perces lépések, legfeljebb 12 óra
   - Fizikai aktivitás jelző: 1–5 skála, a szintnevek a Beállításokban módosíthatók */
function ActivityFields({
 form,
 setForm,
 entries,
 settings
}) {
 const names = activityNames(entries);
 const cur = (form.activity || '').split(',').map(x => x.trim()).filter(Boolean);
 const addName = n => {
  n = (n || '').trim();
  if (!n || cur.includes(n)) return;
  setForm(p => ({
   ...p,
   activity: cur.concat([n]).join(', ')
  }));
 };
 const dur = parseInt(form.activityDur) || 0;
 /* a tevékenység vége = bejegyzés időpontja + időtartam */
 let endLbl = '';
 if (dur > 0 && form.timestamp) {
  try {
   const d = new Date(form.timestamp);
   d.setMinutes(d.getMinutes() + dur);
   endLbl = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  } catch (e) {}
 }
 const lvl = parseInt(form.activityLevel) || 0;
 return h('div', {
   className: 'p-3 bg-yellow-50 rounded-2xl border-2 border-yellow-200 space-y-3'
  },
  h('div', null,
   h('label', {
    className: 'text-sm font-bold text-yellow-800 block mb-1'
   }, '🏃 ' + window.t('Tevékenység (választás a korábbiakból)')),
   names.length > 0 && h('select', {
     value: '',
     onChange: e => {
      addName(e.target.value);
      e.target.value = '';
     },
     className: 'w-full border-2 border-yellow-300 rounded-xl px-3 py-2 text-sm mb-2 focus:outline-none bg-white'
    },
    h('option', {
     value: ''
    }, '➕ ' + window.t('Válassz korábbi tevékenységet...')),
    names.map(n => h('option', {
     key: n,
     value: n
    }, n))
   ),
   h('input', {
    type: 'text',
    value: form.activity || '',
    onChange: e => setForm(p => ({
     ...p,
     activity: e.target.value
    })),
    placeholder: 'Új tevékenység neve (pl. Séta, Kertészkedés) — többet vesszővel válassz el',
    className: 'w-full border-2 border-yellow-300 rounded-xl px-3 py-2 text-sm focus:outline-none bg-white'
   }),
   h('p', {
    className: 'text-[11px] text-yellow-700 mt-1'
   }, window.t('Az új név mentés után automatikusan bekerül a gyorsválasztóba.'))
  ),
  h('div', null,
   h('label', {
     className: 'text-sm font-bold text-yellow-800 block mb-1'
    }, '⏱️ ' + window.t('Időtartam (tól–ig)') + ': ' + (dur > 0 ? fmtDur(dur) : window.t('nincs megadva')) +
    (endLbl ? ' (' + window.t('eddig') + ': ' + endLbl + ')' : '')),
   h('input', {
    type: 'range',
    min: '0',
    max: '720',
    step: '5',
    value: dur,
    onChange: e => setForm(p => ({
     ...p,
     activityDur: parseInt(e.target.value) || 0
    })),
    className: 'w-full accent-yellow-600',
    style: {
     minHeight: '30px'
    }
   }),
   h('div', {
     className: 'flex justify-between text-[10px] text-yellow-700 font-bold'
    },
    h('span', null, '0'), h('span', null, '3 ó'), h('span', null, '6 ó'), h('span', null, '9 ó'), h('span', null, '12 ó'))
  ),
  h('div', null,
   h('label', {
    className: 'text-sm font-bold text-yellow-800 block mb-1'
   }, '⚡ ' + window.t('Fizikai aktivitás (1–5)') + (lvl > 0 ? ': ' + actLevelName(settings, lvl) : '')),
   h('div', {
     className: 'grid grid-cols-5 gap-1'
    },
    [1, 2, 3, 4, 5].map(n => h('button', {
     type: 'button',
     key: n,
     onClick: () => setForm(p => ({
      ...p,
      activityLevel: (parseInt(p.activityLevel) || 0) === n ? 0 : n
     })),
     title: actLevelName(settings, n),
     className: 'py-2 rounded-xl text-sm font-black border-2 ' + (lvl >= n && lvl > 0 ? 'bg-yellow-500 border-yellow-600 text-white' : 'bg-white border-yellow-200 text-yellow-700')
    }, n))
   ),
   h('p', {
    className: 'text-[11px] text-yellow-700 mt-1'
   }, window.t('A szintek elnevezése a Beállításokban módosítható. Újra koppintva törölhető.'))
  )
 );
}

function AddEntry({
 onSave,
 onCancel,
 allFoods,
 onAddFood,
 entries,
 settings,
 showAlert,
 showConfirm
}) {
 /* v7 UX (Smart Default): napszak szerint előre kiválasztott étkezéstípus
    v8: a napszakhatárok a Beállításokban módosíthatók */
 const _hh = new Date().getHours();
 const _B = (k, d) => {
  const v = parseFloat(settings && settings[k]);
  return isNaN(v) ? d : v;
 };
 const _defMeal = _hh < _B('mb1', 9) ? 'Reggeli' : _hh < _B('mb2', 11) ? 'Tízórai' : _hh < _B('mb3', 14) ? 'Ebéd' : _hh < _B('mb4', 17) ? 'Uzsonna' : _hh < _B('mb5', 21) ? 'Vacsora' : 'Utóvacsora';
 const [form, setForm] = useState({
  timestamp: nowLocalDT(),
  /* v12.6: a készülék időzónája szerinti helyi idő */
  type: 'Étkezés',
  mealType: _defMeal,
  bloodGlucose: '',
  carbs: '',
  insulinRapid: '',
  insulinLong: '',
  insulinRapidTime: '',
  insulinLongTime: '',
  foods: [],
  notes: '',
  /* v12.3: külön beadási idők */
  /* v14: tevékenység (név, időtartam, fizikai aktivitás) + privát jelölés */
  activity: '',
  activityDur: 0,
  activityLevel: 0,
  private: false
 });
 const [showPicker, setShowPicker] = useState(false);
 const [fSearch, setFSearch] = useState('');
 const [nfName, setNfName] = useState('');
 const [nfCarbs, setNfCarbs] = useState('');
 const [nfUnit, setNfUnit] = useState('');

 const shownFoods = allFoods.filter(f => f.name.toLowerCase().includes(fSearch.toLowerCase()));
 const addFoodToForm = (f, mult = 1) => setForm(p => ({
  ...p,
  foods: [...p.foods, {
   ...f,
   fid: Date.now(),
   mult
  }]
 }));
 const removeFood = fid => setForm(p => ({
  ...p,
  foods: p.foods.filter(f => f.fid !== fid)
 }));
 const setMult = (fid, mult) => setForm(p => ({
  ...p,
  foods: p.foods.map(f => f.fid === fid ? {
   ...f,
   mult
  } : f)
 }));
 const foodCH = form.foods.reduce((s, f) => s + f.carbs * f.mult, 0);
 const extraCH = parseFloat(form.carbs) || 0;
 const totalCH = foodCH + extraCH;

 /* v7: napszak szerinti, orvossal egyeztetett ICR a Beállításokból
    (a korábbi "átlagból tanulás" helyett) + aktív inzulin (IOB) levonása */
 const hourNow = new Date(form.timestamp || Date.now()).getHours();
 /* v8: ICR-napszakhatárok a Beállításokból */
 const _ib1 = _B('ib1', 10),
  _ib2 = _B('ib2', 16);
 const ratio = hourNow < _ib1 ? (parseFloat(settings && settings.icrMorning) || 10) :
  hourNow < _ib2 ? (parseFloat(settings && settings.icrNoon) || 10) :
  (parseFloat(settings && settings.icrEvening) || 10);
 const icrLabel = hourNow < _ib1 ? 'Reggel' : hourNow < _ib2 ? 'Délben' : 'Este';
 const curBG = window.bgU.toMmol(form.bloodGlucose) || 0;
 const tgt = settings && settings.targetBG != null ? settings.targetBG : 6.0;
 const sens = settings && settings.sensitivity != null ? settings.sensitivity : 2.5;
 const bgCorr = curBG > 0 ? ((curBG - tgt) / sens) : 0;
 const bolusBase = totalCH > 0 ? (totalCH / ratio) : 0;
 const iobNow = calcIOB(entries, settings && settings.diaHours);
 const sugInsRaw = Math.max(0, bolusBase + bgCorr - iobNow);
 const sugIns = totalCH > 0 ? (Math.round(sugInsRaw * 2) / 2).toFixed(1) : '0';
 const corrSign = bgCorr > 0 ? '+' : '';
 const corrAbs = Math.abs(bgCorr).toFixed(1);
 const rapidN = (settings && settings.rapidName) || 'Humalog';

 const saveNewFood = () => {
  if (!nfName || !nfCarbs) return;
  onAddFood({
   name: nfName,
   carbs: parseInt(nfCarbs),
   unit: nfUnit || '1 adag',
   isDefault: false
  });
  setNfName('');
  setNfCarbs('');
  setNfUnit('');
  showAlert && showAlert('✅ Étel mentve az adatbázisba!');
 };

 const submit = e => {
  e.preventDefault();
  const _mmol = form.bloodGlucose ? window.bgU.toMmol(form.bloodGlucose) : null;
  /* v14: a típushoz nem tartozó mezők NEM kerülnek mentésre (típusváltás után se) */
  const _isAct = form.type === 'Egyéb tevékenység';
  const _noRapid = form.type === 'Lantus' || _isAct;
  const _hasCH = form.type === 'Étkezés' || form.type === 'Kontroll';
  const doSave = () => onSave({
   ...form,
   carbs: _hasCH ? (totalCH || null) : null,
   foods: _hasCH ? form.foods : [],
   mealType: form.type === 'Étkezés' ? form.mealType : '',
   bloodGlucose: _mmol,
   insulinRapid: (!_noRapid && form.insulinRapid) ? parseFloat(form.insulinRapid) : null,
   insulinLong: ((form.type === 'Lantus' || form.type === 'Étkezés') && form.insulinLong) ? parseFloat(form.insulinLong) : null,
   /* v12.3: beadási idő csak akkor tárolódik, ha van dózis ÉS eltér a bejegyzés időpontjától */
   insulinRapidTime: (!_noRapid && form.insulinRapid && form.insulinRapidTime && form.insulinRapidTime !== form.timestamp) ? form.insulinRapidTime : null,
   insulinLongTime: ((form.type === 'Lantus' || form.type === 'Étkezés') && form.insulinLong && form.insulinLongTime && form.insulinLongTime !== form.timestamp) ? form.insulinLongTime : null,
   /* v14: tevékenység-adatok csak Egyéb tevékenységnél */
   activity: _isAct ? (form.activity || '').trim() : '',
   activityDur: _isAct ? (parseInt(form.activityDur) || 0) : 0,
   activityLevel: _isAct ? (parseInt(form.activityLevel) || 0) : 0,
   private: _isAct ? !!form.private : false /* v14: privát CSAK Egyéb tevékenységnél */
  });
  /* v8: extrém érték — megerősítő kérdés mentés előtt */
  const warn = extremeBGWarn(_mmol);
  if (warn && showConfirm) showConfirm(warn, doSave);
  else doSave();
 };

 return h('div', {
   className: 'bg-white/95 rounded-2xl shadow-lg p-4'
  },
  h('div', {
    className: 'flex items-center justify-between mb-4'
   },
   h('h2', {
    className: 'text-xl font-black text-gray-800'
   }, '➕ Új bejegyzés'),
   h('button', {
    onClick: onCancel,
    type: 'button',
    className: 'text-gray-400 text-2xl'
   }, '✖️')
  ),
  h('form', {
    onSubmit: submit,
    className: 'space-y-4'
   },
   h('div', {
     className: 'grid grid-cols-2 gap-3'
    },
    h('div', null, h('label', {
      className: 'text-sm font-bold text-gray-500 block mb-1'
     }, '⏰ Időpont (utólag is módosítható!)'),
     h('input', {
      type: 'datetime-local',
      value: form.timestamp,
      onChange: e => setForm({
       ...form,
       timestamp: e.target.value
      }),
      required: true,
      className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
     })),
    h('div', null, h('label', {
      className: 'text-sm font-bold text-gray-500 block mb-1'
     }, '📝 Típus'),
     h('select', {
       value: form.type,
       onChange: e => setForm({
        ...form,
        type: e.target.value
       }),
       className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
      },
      h('option', null, 'Étkezés'), h('option', null, 'Kontroll'), h('option', null, 'Lantus'), h('option', null, 'Egyéb tevékenység')))
   ),

   form.type === 'Étkezés' && h('div', null,
    h('label', {
     className: 'text-sm font-bold text-gray-500 block mb-1'
    }, '🍽️ Étkezés típusa'),
    h('select', {
      value: form.mealType,
      onChange: e => setForm({
       ...form,
       mealType: e.target.value
      }),
      className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
     },
     h('option', {
      value: ''
     }, 'Válassz...'),
     ['Reggeli', 'Tízórai', 'Ebéd', 'Uzsonna', 'Vacsora', 'Utóvacsora'].map(m => h('option', {
      key: m
     }, m))
    )
   ),

   h('div', null,
    h('label', {
     className: 'text-sm font-bold text-gray-500 block mb-1'
    }, window.bgL('🩸 Vércukor')),
    h('input', {
     type: 'number',
     step: window.bgU.step(),
     value: form.bloodGlucose,
     onChange: e => setForm({
      ...form,
      bloodGlucose: e.target.value
     }),
     placeholder: window.bgU.getUnit() === 'mgdl' ? 'pl. 117' : 'pl. 6.5',
     className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
    })
   ),

   /* v14: a teljes Ételek (gyorsválasztó) a KONTROLL típusnál is elérhető —
      alacsony vércukor esetén a plusz CH a gyors inzulin korrekció ELŐTT rögzíthető */
   (form.type === 'Étkezés' || form.type === 'Kontroll') && h('div', null,
    form.type === 'Kontroll' && h('p', {
     className: 'text-xs font-black text-amber-700 mb-2 p-2 bg-amber-50 rounded-xl border border-amber-200'
    }, '🍬 ' + window.t('Plusz CH — alacsony vércukor esetén: itt rögzítsd a bevitt szénhidrátot!')),
    h('div', {
      className: 'flex items-center justify-between mb-2'
     },
     h('label', {
      className: 'text-xs font-bold text-gray-500'
     }, '🥗 Ételek (gyorsválasztó)'),
     h('button', {
      type: 'button',
      onClick: () => setShowPicker(!showPicker),
      className: `text-xs font-bold px-3 py-1 rounded-xl ${showPicker?'bg-red-100 text-red-600':'bg-indigo-100 text-indigo-600'}`
     }, showPicker ? '❌ Zár' : '➕ Nyit')
    ),
    showPicker && h('div', {
      className: 'border-2 border-indigo-200 rounded-2xl p-3 bg-indigo-50 mb-3'
     },
     h('div', {
       className: 'mb-3 pb-3 border-b-2 border-indigo-200'
      },
      h('p', {
       className: 'text-xs font-black text-indigo-700 mb-2'
      }, '➕ Új étel mentése adatbázisba:'),
      h('div', {
        className: 'grid grid-cols-3 gap-2 mb-2'
       },
       h('input', {
        type: 'text',
        value: nfName,
        onChange: e => setNfName(e.target.value),
        placeholder: 'Étel neve',
        className: 'col-span-2 border border-indigo-300 rounded-xl px-2 py-1.5 text-xs focus:outline-none'
       }),
       h('input', {
        type: 'number',
        value: nfCarbs,
        onChange: e => setNfCarbs(e.target.value),
        placeholder: 'CH(g)',
        className: 'border border-indigo-300 rounded-xl px-2 py-1.5 text-xs focus:outline-none'
       })
      ),
      h('div', {
        className: 'flex gap-2'
       },
       h('input', {
        type: 'text',
        value: nfUnit,
        onChange: e => setNfUnit(e.target.value),
        placeholder: 'Egység',
        className: 'flex-1 border border-indigo-300 rounded-xl px-2 py-1.5 text-xs focus:outline-none'
       }),
       h('button', {
        type: 'button',
        onClick: saveNewFood,
        className: 'bg-indigo-600 text-white px-3 py-1.5 rounded-xl text-xs font-bold'
       }, 'Ment')
      )
     ),
     h('input', {
      type: 'text',
      value: fSearch,
      onChange: e => setFSearch(e.target.value),
      placeholder: '🔍 Keresés...',
      className: 'w-full border border-indigo-300 rounded-xl px-3 py-2 text-sm mb-2 focus:outline-none'
     }),
     h('div', {
       className: 'max-h-52 overflow-y-auto space-y-1'
      },
      shownFoods.map(f => h('div', {
        key: f.id,
        className: 'flex items-center justify-between bg-white rounded-xl px-3 py-2 border border-indigo-100'
       },
       h('div', null, h('p', {
        className: 'text-xs font-bold text-gray-800'
       }, f.name), h('p', {
        className: 'text-xs text-gray-500'
       }, `${f.carbs}g CH`)),
       h('div', {
         className: 'flex gap-1'
        },
        [1, 2, 3].map(n => h('button', {
         type: 'button',
         key: n,
         onClick: () => addFoodToForm(f, n),
         className: 'bg-indigo-100 text-indigo-700 px-2 py-1 rounded-lg text-xs font-bold hover:bg-indigo-200'
        }, `${n}×`))
       )
      ))
     )
    ),
    form.foods.length > 0 && h('div', {
      className: 'space-y-2 mb-2'
     },
     form.foods.map(f => h('div', {
       key: f.fid,
       className: 'flex items-center justify-between bg-indigo-50 px-3 py-2 rounded-xl border border-indigo-200'
      },
      h('div', {
       className: 'flex-1'
      }, h('p', {
       className: 'text-xs font-bold text-gray-800'
      }, f.name), h('p', {
       className: 'text-xs text-gray-500'
      }, `${f.carbs}g × ${f.mult} = ${f.carbs*f.mult}g CH`)),
      h('div', {
        className: 'flex items-center gap-1'
       },
       h('select', {
         value: f.mult,
         onChange: e => setMult(f.fid, parseInt(e.target.value)),
         className: 'border rounded-lg px-1 py-1 text-xs'
        },
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => h('option', {
         key: n,
         value: n
        }, `${n}×`))
       ),
       h('button', {
        type: 'button',
        onClick: () => removeFood(f.fid),
        className: 'text-red-500 p-1'
       }, '❌')
      )
     )),
     h('p', {
      className: 'text-xs font-black text-indigo-700'
     }, `Gyorsválasztó: ${foodCH}g CH`)
    ),
    h('input', {
     type: 'number',
     value: form.carbs,
     onChange: e => setForm({
      ...form,
      carbs: e.target.value
     }),
     placeholder: 'Egyéb/Extra CH (g)',
     className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
    }),
    totalCH > 0 && h('p', {
     className: 'text-xs font-black text-indigo-600 mt-1'
    }, `TELJES CH: ${totalCH}g`)
   ),

   totalCH > 0 && h('div', {
     className: 'p-3 bg-purple-50 rounded-2xl border-2 border-purple-200'
    },
    h('p', {
     className: 'text-sm font-black text-purple-900 mb-1'
    }, '💡 Bolus kalkulátor javaslat:'),
    h('div', {
      className: 'text-sm text-purple-800 mb-1'
     },
     h('span', null, `CH-rész: ${bolusBase.toFixed(1)}E`),
     curBG > 0 && h('span', {
      className: 'text-xs ml-2 text-purple-600'
     }, `BG korr.: ${corrSign}${corrAbs}E`),
     iobNow > 0.05 && h('span', {
      className: 'text-xs ml-2 text-purple-600'
     }, `IOB: −${iobNow.toFixed(1)}E`)
    ),
    h('p', {
      className: 'text-lg font-black text-purple-900 mb-2'
     },
     '= ', h('strong', null, `${sugIns}E ${rapidN}`),
     h('span', {
      className: 'text-xs font-normal ml-1 text-purple-600'
     }, `(${window.t(icrLabel)}: 1E≈${ratio.toFixed(1)}g CH)`)
    ),
    iobNow > 0.05 && h('p', {
     className: 'text-xs text-purple-600 mb-1'
    }, '✓ ' + window.t('Aktív inzulin (IOB) levonva')),
    h('button', {
     type: 'button',
     onClick: () => {
      showConfirm ? showConfirm(`Alkalmazzuk a javasolt ${sugIns}E ${rapidN} adagot?`, () => setForm({
       ...form,
       insulinRapid: sugIns
      })) : setForm({
       ...form,
       insulinRapid: sugIns
      });
     },
     className: 'mt-1 w-full bg-purple-600 text-white rounded-xl py-2.5 text-sm font-bold'
    }, '✨ Javaslat alkalmazása'),
    h('p', {
     className: 'text-xs text-purple-500 mt-1'
    }, '⚠️ Csak orvossal egyeztetett értékek alapján — javaslat, nem orvosi utasítás!')
   ),

   /* v14: a gyors (bólus) inzulin mező a LANTUS és az EGYÉB TEVÉKENYSÉG
      típusnál NEM jelenik meg (ott felesleges/irreleváns) */
   form.type !== 'Egyéb tevékenység' && h('div', {
     className: 'grid grid-cols-2 gap-3'
    },
    (form.type !== 'Lantus' && form.type !== 'Egyéb tevékenység') && h('div', null, h('label', {
      className: 'text-sm font-bold text-gray-500 block mb-1'
     }, '💉 ' + (((typeof settings !== 'undefined') && settings && settings.rapidName) || 'Humalog') + ' (E)'),
     h('input', {
      type: 'number',
      step: '0.5',
      value: form.insulinRapid,
      onChange: e => setForm({
       ...form,
       insulinRapid: e.target.value
      }),
      placeholder: 'pl. 4',
      className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
     }),
     /* v12.3: külön beadási idő — alapból a bejegyzés időpontja */
     form.insulinRapid && h(InsTimeField, {
      value: form.insulinRapidTime,
      base: form.timestamp,
      onChange: v => setForm({
       ...form,
       insulinRapidTime: v
      })
     })),
    (form.type === 'Lantus' || form.type === 'Étkezés') && h('div', null, h('label', {
      className: 'text-sm font-bold text-gray-500 block mb-1'
     }, '💉 ' + (((typeof settings !== 'undefined') && settings && settings.basalName) || 'Lantus') + ' (E)'),
     h('input', {
      type: 'number',
      step: '0.5',
      value: form.insulinLong,
      onChange: e => setForm({
       ...form,
       insulinLong: e.target.value
      }),
      placeholder: 'pl. 10',
      className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
     }),
     form.insulinLong && h(InsTimeField, {
      value: form.insulinLongTime,
      base: form.timestamp,
      onChange: v => setForm({
       ...form,
       insulinLongTime: v
      })
     }))
   ),

   /* v14: EGYÉB TEVÉKENYSÉG — gyorsválasztó, időtartam, fizikai aktivitás
      (a gyors inzulin mező helyett) */
   form.type === 'Egyéb tevékenység' && h(ActivityFields, {
    form,
    setForm,
    entries,
    settings
   }),

   h('div', null,
    h('label', {
     className: 'text-sm font-bold text-gray-500 block mb-1'
    }, '📝 Jegyzetek'),
    h('textarea', {
     value: form.notes,
     onChange: e => setForm({
      ...form,
      notes: e.target.value
     }),
     placeholder: 'Megjegyzések...',
     rows: 2,
     className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
    })
   ),

   /* v14: PRIVÁT bejegyzés — CSAK Egyéb tevékenységnél állítható;
      csak a Tulajdonos látja, a Követőhöz el sem jut */
   form.type === 'Egyéb tevékenység' && h('label', {
     className: 'flex items-center gap-2 text-sm font-bold text-gray-600 p-2 bg-gray-50 rounded-xl border border-gray-200 cursor-pointer'
    },
    h('input', {
     type: 'checkbox',
     checked: !!form.private,
     onChange: e => setForm({
      ...form,
      private: e.target.checked
     }),
     className: 'w-5 h-5 accent-gray-600'
    }),
    '🔒 ' + window.t('Privát bejegyzés (a Követő egyáltalán nem látja)')),

   h('div', {
     className: 'flex gap-3'
    },
    h('button', {
     type: 'submit',
     className: 'flex-1 font-black text-white py-3 rounded-2xl shadow-lg',
     style: {
      background: 'linear-gradient(135deg,var(--hbc-c1,#4f46e5),var(--hbc-c2,#7c3aed))'
     }
    }, '✅ Mentés'),
    h('button', {
     type: 'button',
     onClick: onCancel,
     className: 'px-6 py-3 border-2 border-gray-200 text-gray-600 font-bold rounded-2xl'
    }, '❌')
   )
  )
 );
}

/* ═══════════ v14: KÖVETŐ RÉSZLETNÉZET (szem ikon) ═══════════
   Csak-olvasó, teljes részletezés — a Követő minden felvitt adatot lát,
   de semmit sem módosíthat. A privát bejegyzések ide el sem jutnak. */
function ViewEntryModal({
 entry,
 onClose,
 settings
}) {
 const row = (icon, label, value) => (value == null || value === '' || value === false) ? null :
  h('div', {
    className: 'flex items-start justify-between gap-3 py-2 border-b border-indigo-50'
   },
   h('span', {
    className: 'text-sm font-bold text-gray-500 shrink-0'
   }, icon + ' ' + window.t(label)),
   h('span', {
    className: 'text-sm font-black text-gray-800 text-right'
   }, String(value))
  );
 const foods = Array.isArray(entry.foods) ? entry.foods : [];
 return h('div', {
   className: 'fixed inset-0 bg-black/60 z-50',
   style: {
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch'
   },
   onClick: e => {
    if (e.target === e.currentTarget) onClose();
   }
  },
  h('div', {
    style: {
     minHeight: '100%',
     display: 'flex',
     alignItems: 'flex-start',
     justifyContent: 'center',
     padding: '16px',
     paddingTop: 'calc(16px + env(safe-area-inset-top,0px))',
     paddingBottom: 'calc(24px + env(safe-area-inset-bottom,0px))'
    },
    onClick: e => {
     if (e.target === e.currentTarget) onClose();
    }
   },
   h('div', {
     className: 'bg-white rounded-2xl shadow-2xl max-w-lg w-full'
    },
    h('div', {
      className: 'flex items-center justify-between p-4 border-b'
     },
     h('h3', {
      className: 'font-black text-gray-900'
     }, '👁️ ' + window.t('Bejegyzés részletei (megtekintés)')),
     h('button', {
      onClick: onClose,
      type: 'button',
      className: 'text-gray-400 text-2xl',
      'aria-label': 'Bezárás'
     }, '✖️')
    ),
    h('div', {
      className: 'p-4'
     },
     row('📝', 'Típus', window.t(entry.type || '')),
     entry.mealType && row('🍽️', 'Étkezés típusa', window.t(entry.mealType)),
     row('⏰', 'Időpont', fmtAlwaysDT(entry.timestamp)),
     entry.bloodGlucose != null && entry.bloodGlucose !== '' && row('🩸', 'Vércukor', window.bgU.disp(entry.bloodGlucose) + ' ' + window.bgU.label()),
     foods.length > 0 && h('div', {
       className: 'py-2 border-b border-indigo-50'
      },
      h('p', {
       className: 'text-sm font-bold text-gray-500 mb-1'
      }, '🥗 ' + window.t('Ételek a bejegyzésben')),
      foods.map((f, i) => h('p', {
       key: i,
       className: 'text-sm text-gray-800 font-semibold pl-2'
      }, '• ' + f.name + ' — ' + (parseFloat(f.carbs) || 0) + 'g × ' + (parseFloat(f.mult) || 1) + ' = ' + ((parseFloat(f.carbs) || 0) * (parseFloat(f.mult) || 1)) + 'g CH'))
     ),
     entry.carbs > 0 && row('🍽️', 'TELJES CH', entry.carbs + ' g'),
     entry.insulinRapid > 0 && row('💉', ((settings && settings.rapidName) || 'Humalog'),
      entry.insulinRapid + ' E' + (entry.insulinRapidTime && entry.insulinRapidTime !== entry.timestamp ? ' · ⏰ ' + fmtAlwaysDT(entry.insulinRapidTime) : '')),
     entry.insulinLong > 0 && row('💉', ((settings && settings.basalName) || 'Lantus'),
      entry.insulinLong + ' E' + (entry.insulinLongTime && entry.insulinLongTime !== entry.timestamp ? ' · ⏰ ' + fmtAlwaysDT(entry.insulinLongTime) : '')),
     entry.activity && row('🏃', 'Tevékenység', entry.activity),
     entry.activityDur > 0 && row('⏱️', 'Időtartam', fmtDur(entry.activityDur)),
     entry.activityLevel > 0 && row('⚡', 'Fizikai aktivitás', entry.activityLevel + '/5 – ' + actLevelName(settings, entry.activityLevel)),
     entry.notes && h('div', {
       className: 'py-2'
      },
      h('p', {
       className: 'text-sm font-bold text-gray-500 mb-1'
      }, '📝 ' + window.t('Jegyzetek')),
      h('p', {
       className: 'text-sm text-gray-800 italic whitespace-pre-wrap'
      }, entry.notes)
     ),
     h('button', {
      type: 'button',
      onClick: onClose,
      className: 'mt-3 w-full font-black text-white py-3 rounded-2xl',
      style: {
       background: 'linear-gradient(135deg,var(--hbc-c1,#4f46e5),var(--hbc-c2,#7c3aed))'
      }
     }, window.t('Bezárás'))
    )
   )
  )
 );
}

// ═══════════ EDIT MODAL ═══════════
function EditModal({
 entry,
 onSave,
 onCancel,
 settings,
 showConfirm,
 allFoods,
 entries
}) {
 /* v11.1: ÉTEL-SZERKESZTÉS — a bejegyzés ételei utólag is bővíthetők/törölhetők.
    A tárolt carbs = ételek CH-ja + extra CH; megnyitáskor szétbontjuk, mentéskor
    újra összeadjuk, így a CH mindig pontos marad. */
 const [form, setForm] = useState(() => {
  const fds = (Array.isArray(entry.foods) ? entry.foods : []).map((f, i) => ({
   ...f,
   fid: f.fid || i + 1,
   mult: parseFloat(f.mult) || 1
  }));
  const fCH = fds.reduce((s, f) => s + (parseFloat(f.carbs) || 0) * f.mult, 0);
  const extra = Math.max(0, (parseFloat(entry.carbs) || 0) - fCH);
  return {
   ...entry,
   foods: fds,
   timestamp: entry.timestamp?.slice(0, 16),
   insulinRapidTime: entry.insulinRapidTime ? entry.insulinRapidTime.slice(0, 16) : '',
   /* v12.3 */
   insulinLongTime: entry.insulinLongTime ? entry.insulinLongTime.slice(0, 16) : '',
   carbs: extra ? String(Math.round(extra * 10) / 10) : '',
   bloodGlucose: entry.bloodGlucose != null && entry.bloodGlucose !== '' ? window.bgU.disp(entry.bloodGlucose) : '',
   /* v14: tevékenység + privát mezők alapértelmezései */
   activity: entry.activity || '',
   activityDur: parseInt(entry.activityDur) || 0,
   activityLevel: parseInt(entry.activityLevel) || 0,
   private: !!entry.private
  };
 });
 const [showPicker, setShowPicker] = useState(false);
 const [fSearch, setFSearch] = useState('');
 const shownFoods = (allFoods || []).filter(f => f.name.toLowerCase().includes(fSearch.toLowerCase()));
 const addFoodToForm = (f, mult = 1) => setForm(p => ({
  ...p,
  foods: [...(p.foods || []), {
   ...f,
   fid: Date.now(),
   mult
  }]
 }));
 const removeFood = fid => setForm(p => ({
  ...p,
  foods: (p.foods || []).filter(x => x.fid !== fid)
 }));
 const setMult = (fid, mult) => setForm(p => ({
  ...p,
  foods: (p.foods || []).map(x => x.fid === fid ? {
   ...x,
   mult
  } : x)
 }));
 const foodCH = (form.foods || []).reduce((s, f) => s + (parseFloat(f.carbs) || 0) * (parseFloat(f.mult) || 1), 0);
 const totalCH = foodCH + (parseFloat(form.carbs) || 0);
 /* v14: az utólagos szerkesztés mezői PONTOSAN a típusnak megfelelően jelennek meg —
    ugyanúgy, mint az Új bejegyzés űrlapon */
 const _isAct = form.type === 'Egyéb tevékenység';
 const _noRapid = form.type === 'Lantus' || _isAct;
 const _hasCH = form.type === 'Étkezés' || form.type === 'Kontroll';
 const showFoodEd = _hasCH || foodCH > 0;
 const showLong = form.type === 'Lantus' || form.type === 'Étkezés';
 const submit = e => {
  e.preventDefault();
  const _mmol = form.bloodGlucose !== '' && form.bloodGlucose != null ? window.bgU.toMmol(form.bloodGlucose) : null;
  const doSave = () => onSave({
   ...form,
   carbs: (showFoodEd && totalCH) ? totalCH : null,
   foods: showFoodEd ? (form.foods || []) : [],
   mealType: form.type === 'Étkezés' ? (form.mealType || '') : '',
   bloodGlucose: _mmol,
   insulinRapid: (!_noRapid && form.insulinRapid) ? parseFloat(form.insulinRapid) : null,
   insulinLong: (showLong && form.insulinLong) ? parseFloat(form.insulinLong) : null,
   /* v12.3: beadási idő csak dózissal együtt, és csak ha eltér a bejegyzés időpontjától */
   insulinRapidTime: (!_noRapid && form.insulinRapid && form.insulinRapidTime && form.insulinRapidTime !== form.timestamp) ? form.insulinRapidTime : null,
   insulinLongTime: (showLong && form.insulinLong && form.insulinLongTime && form.insulinLongTime !== form.timestamp) ? form.insulinLongTime : null,
   /* v14: tevékenység-adatok csak Egyéb tevékenységnél */
   activity: _isAct ? (form.activity || '').trim() : '',
   activityDur: _isAct ? (parseInt(form.activityDur) || 0) : 0,
   activityLevel: _isAct ? (parseInt(form.activityLevel) || 0) : 0,
   private: _isAct ? !!form.private : false /* v14: privát CSAK Egyéb tevékenységnél */
  });
  /* v8: extrém érték — megerősítő kérdés mentés előtt */
  const warn = extremeBGWarn(_mmol);
  if (warn && showConfirm) showConfirm(warn, doSave);
  else doSave();
 };
 /* v14 MOBIL JAVÍTÁS: a korábbi „flex items-center + overflow" kombináció miatt a
    hosszú űrlap teteje-alja mobilon kilógott és nem volt visszagörgethető.
    Új szerkezet: a KÜLSŐ réteg görget, a belső min-height:100% réteg felülre
    igazít, a biztonsági sávokat (kivágás, gesztussáv) padding kezeli. */
 return h('div', {
   className: 'fixed inset-0 bg-black/60 z-50',
   style: {
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch'
   }
  },
  h('div', {
    style: {
     minHeight: '100%',
     display: 'flex',
     alignItems: 'flex-start',
     justifyContent: 'center',
     padding: '16px',
     paddingTop: 'calc(16px + env(safe-area-inset-top,0px))',
     paddingBottom: 'calc(24px + env(safe-area-inset-bottom,0px))'
    }
   },
   h('div', {
    className: 'bg-white rounded-2xl shadow-2xl max-w-lg w-full'
   },
   h('div', {
     className: 'flex items-center justify-between p-4 border-b'
    },
    h('h3', {
     className: 'font-black text-gray-900'
    }, '✏️ Bejegyzés szerkesztése'),
    h('button', {
     onClick: onCancel,
     type: 'button',
     className: 'text-gray-400 text-2xl'
    }, '✖️')
   ),
   h('form', {
     onSubmit: submit,
     className: 'p-4 space-y-3'
    },
    h('div', null, h('label', {
      className: 'text-sm font-bold text-gray-500 block mb-1'
     }, '⏰ Időpont (utólag is módosítható!)'),
     h('input', {
      type: 'datetime-local',
      value: form.timestamp || '',
      onChange: e => setForm({
       ...form,
       timestamp: e.target.value
      }),
      className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
     })),
    h('div', null, h('label', {
      className: 'text-sm font-bold text-gray-500 block mb-1'
     }, '📝 Típus'),
     h('select', {
       value: form.type || '',
       onChange: e => setForm({
        ...form,
        type: e.target.value
       }),
       className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
      },
      h('option', null, 'Étkezés'), h('option', null, 'Kontroll'), h('option', null, 'Lantus'), h('option', null, 'Egyéb tevékenység'))),
    h('div', null, h('label', {
      className: 'text-sm font-bold text-gray-500 block mb-1'
     }, window.bgL('🩸 Vércukor')),
     h('input', {
      type: 'number',
      step: window.bgU.step(),
      value: form.bloodGlucose || '',
      onChange: e => setForm({
       ...form,
       bloodGlucose: e.target.value
      }),
      className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
     })),
    h('div', null,
     /* v11.1: a bejegyzés ételeinek kezelése (hozzáadás gyorsválasztóból, szorzó, törlés) */
     showFoodEd && h('div', {
       className: 'mb-2'
      },
      h('div', {
        className: 'flex items-center justify-between mb-2'
       },
       h('label', {
        className: 'text-xs font-bold text-gray-500'
       }, '🥗 ' + window.t('Ételek a bejegyzésben')),
       h('button', {
        type: 'button',
        onClick: () => setShowPicker(!showPicker),
        className: `text-xs font-bold px-3 py-1 rounded-xl ${showPicker?'bg-red-100 text-red-600':'bg-indigo-100 text-indigo-600'}`
       }, showPicker ? window.t('❌ Zár') : '➕ ' + window.t('Étel hozzáadása'))
      ),
      showPicker && h('div', {
        className: 'border-2 border-indigo-200 rounded-2xl p-3 bg-indigo-50 mb-2'
       },
       h('input', {
        type: 'text',
        value: fSearch,
        onChange: e => setFSearch(e.target.value),
        placeholder: '🔍 ' + window.t('Keresés...'),
        className: 'w-full border border-indigo-300 rounded-xl px-3 py-2 text-sm mb-2 focus:outline-none'
       }),
       h('div', {
         className: 'max-h-52 overflow-y-auto space-y-1'
        },
        shownFoods.map(f => h('div', {
          key: f.id,
          className: 'flex items-center justify-between bg-white rounded-xl px-3 py-2 border border-indigo-100'
         },
         h('div', null, h('p', {
          className: 'text-xs font-bold text-gray-800'
         }, f.name), h('p', {
          className: 'text-xs text-gray-500'
         }, `${f.carbs}g CH`)),
         h('div', {
           className: 'flex gap-1'
          },
          [1, 2, 3].map(n => h('button', {
           type: 'button',
           key: n,
           onClick: () => addFoodToForm(f, n),
           className: 'bg-indigo-100 text-indigo-700 px-2 py-1 rounded-lg text-xs font-bold hover:bg-indigo-200'
          }, `${n}×`))
         )
        ))
       )
      ),
      (form.foods || []).length > 0 && h('div', {
        className: 'space-y-2 mb-2'
       },
       form.foods.map(f => h('div', {
         key: f.fid,
         className: 'flex items-center justify-between bg-indigo-50 px-3 py-2 rounded-xl border border-indigo-200'
        },
        h('div', {
         className: 'flex-1'
        }, h('p', {
         className: 'text-xs font-bold text-gray-800'
        }, f.name), h('p', {
         className: 'text-xs text-gray-500'
        }, `${f.carbs}g × ${f.mult} = ${(parseFloat(f.carbs)||0)*(parseFloat(f.mult)||1)}g CH`)),
        h('div', {
          className: 'flex items-center gap-1'
         },
         h('select', {
           value: f.mult,
           onChange: e => setMult(f.fid, parseInt(e.target.value)),
           className: 'border rounded-lg px-1 py-1 text-xs'
          },
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => h('option', {
           key: n,
           value: n
          }, `${n}×`))
         ),
         h('button', {
          type: 'button',
          onClick: () => removeFood(f.fid),
          className: 'text-red-500 p-1',
          'aria-label': 'Törlés',
          title: 'Törlés'
         }, '❌')
        )
       ))
      )
     ),
     h('label', {
      className: 'text-sm font-bold text-gray-500 block mb-1'
     }, showFoodEd ? window.t('🍽️ Egyéb/Extra CH (g)') : window.t('🍽️ Szénhidrát (g)')),
     h('input', {
      type: 'number',
      value: form.carbs || '',
      onChange: e => setForm({
       ...form,
       carbs: e.target.value
      }),
      className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
     }),
     totalCH > 0 && h('p', {
      className: 'text-xs font-black text-indigo-600 mt-1'
     }, window.t('TELJES CH') + `: ${totalCH}g`)),
    /* v14: az inzulinmezők a TÍPUSNAK megfelelően — mint az Új bejegyzésnél */
    (!_noRapid || showLong) && h('div', {
      className: 'grid grid-cols-2 gap-3'
     },
     !_noRapid && h('div', null, h('label', {
       className: 'text-sm font-bold text-gray-500 block mb-1'
      }, '💉 ' + (((typeof settings !== 'undefined') && settings && settings.rapidName) || 'Humalog') + ' (E)'),
      h('input', {
       type: 'number',
       step: '0.5',
       value: form.insulinRapid || '',
       onChange: e => setForm({
        ...form,
        insulinRapid: e.target.value
       }),
       className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
      }),
      /* v12.3: külön beadási idő */
      form.insulinRapid && h(InsTimeField, {
       value: form.insulinRapidTime,
       base: form.timestamp,
       onChange: v => setForm({
        ...form,
        insulinRapidTime: v
       })
      })),
     showLong && h('div', null, h('label', {
       className: 'text-sm font-bold text-gray-500 block mb-1'
      }, '💉 ' + (((typeof settings !== 'undefined') && settings && settings.basalName) || 'Lantus') + ' (E)'),
      h('input', {
       type: 'number',
       step: '0.5',
       value: form.insulinLong || '',
       onChange: e => setForm({
        ...form,
        insulinLong: e.target.value
       }),
       className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
      }),
      form.insulinLong && h(InsTimeField, {
       value: form.insulinLongTime,
       base: form.timestamp,
       onChange: v => setForm({
        ...form,
        insulinLongTime: v
       })
      }))
    ),
    /* v14: étkezéstípus csak Étkezésnél */
    form.type === 'Étkezés' && h('div', null, h('label', {
      className: 'text-sm font-bold text-gray-500 block mb-1'
     }, '🍽️ Étkezés típusa'),
     h('select', {
       value: form.mealType || '',
       onChange: e => setForm({
        ...form,
        mealType: e.target.value
       }),
       className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
      },
      h('option', {
       value: ''
      }, '– Válassz –'),
      ['Reggeli', 'Tízórai', 'Ebéd', 'Uzsonna', 'Vacsora', 'Utóvacsora'].map(m => h('option', {
       key: m,
       value: m
      }, m))
     )),
    /* v14: tevékenység-mezők (gyorsválasztó, időtartam, fizikai aktivitás) —
       csak Egyéb tevékenységnél, ugyanúgy, mint az Új bejegyzésnél */
    _isAct && h(ActivityFields, {
     form,
     setForm,
     entries,
     settings
    }),
    h('div', null, h('label', {
      className: 'text-sm font-bold text-gray-500 block mb-1'
     }, '📝 Megjegyzés'),
     h('textarea', {
      value: form.notes || '',
      onChange: e => setForm({
       ...form,
       notes: e.target.value
      }),
      rows: 3,
      className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400'
     })),
    /* v14: PRIVÁT bejegyzés — CSAK Egyéb tevékenységnél állítható;
       csak a Tulajdonos látja, a Követőhöz el sem jut */
    _isAct && h('label', {
      className: 'flex items-center gap-2 text-sm font-bold text-gray-600 p-2 bg-gray-50 rounded-xl border border-gray-200 cursor-pointer'
     },
     h('input', {
      type: 'checkbox',
      checked: !!form.private,
      onChange: e => setForm({
       ...form,
       private: e.target.checked
      }),
      className: 'w-5 h-5 accent-gray-600'
     }),
     '🔒 ' + window.t('Privát bejegyzés (a Követő egyáltalán nem látja)')),
    h('div', {
      className: 'flex gap-3 pt-2'
     },
     h('button', {
      type: 'submit',
      className: 'flex-1 font-black text-white py-3 rounded-2xl',
      style: {
       background: 'linear-gradient(135deg,var(--hbc-c1,#4f46e5),var(--hbc-c2,#7c3aed))'
      }
     }, '✅ Mentés'),
     h('button', {
      type: 'button',
      onClick: onCancel,
      className: 'px-6 py-3 border-2 border-gray-200 font-bold rounded-2xl'
     }, '❌'))
   )
   )
  )
 );
}

// ═══════════ SZINKRON ═══════════
function SyncManager({
 entries,
 saveEntries,
 exportCSV,
 importJSON,
 importCSV,
 showAlert,
 settings,
 allFoods
}) {
 const [txt, setTxt] = useState('');
 const fileRef = useRef(null);
 const cgmRef = useRef(null);
 const S = window.HBC_SYNC;
 const [, force] = useState(0);
 const rerender = () => force(x => x + 1);
 const [alerts, setAlerts] = useState(() => {
  try {
   return JSON.parse(localStorage.getItem('hbc-alerts') || '{"lowOn":true,"highOn":false,"notifOn":false}');
  } catch (e) {
   return {
    lowOn: true,
    highOn: false,
    notifOn: false
   };
  }
 });
 const saveAlerts = a => {
  setAlerts(a);
  localStorage.setItem('hbc-alerts', JSON.stringify(a));
 };
 const [busy, setBusy] = useState(false);

 const exportJSON = () => {
  const payload = {
   _hbc: 'v7',
   _exported: new Date().toISOString(),
   entries,
   foods: allFoods,
   settings
  };
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], {
   type: 'application/json'
  }));
  a.download = `HBC_v7_backup_${todayStr()}.json`;
  a.click();
  if (window.HBC_STORE) window.HBC_STORE.markBackup();
 };
 const handleFile = e => {
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = ev => {
   f.name.endsWith('.json') ? importJSON(ev.target.result) : importCSV(ev.target.result);
  };
  r.readAsText(f, 'UTF-8');
 };
 const handleCGM = e => {
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = ev => {
   try {
    const res = window.HBC_CGM.importCSV(ev.target.result);
    showAlert && showAlert('✅ CGM: ' + res.imported + ' mérés importálva (összesen: ' + res.total + ').');
   } catch (err) {
    showAlert && showAlert('❌ CGM import hiba: ' + err.message);
   }
  };
  r.readAsText(f, 'UTF-8');
 };

 /* ── Drive-varázsló műveletek ── */
 const setClientId = v => {
  S.cfg.clientId = v.trim();
  S.saveCfg();
  rerender();
 };
 const connect = () => {
  setBusy(true);
  S.ensureToken(true).then(() => {
   setBusy(false);
   rerender();
  }).catch(err => {
   setBusy(false);
   showAlert && showAlert('❌ ' + err.message);
  });
 };
 const pickFolder = () => {
  S.openPicker('folder').then(r => {
   S.cfg.folderId = r.id;
   S.cfg.folderName = r.name;
   S.cfg.fileId = '';
   S.saveCfg();
   S.push(syncPayload());
   rerender();
  }).catch(() => {});
 };
 const pickFile = () => {
  S.openPicker('file').then(r => {
   S.cfg.fileId = r.id;
   S.cfg.fileName = r.name;
   S.saveCfg();
   S.startPolling();
   rerender();
  }).catch(() => {});
 };
 const disconnect = () => {
  S.cfg.mode = 'off';
  S.cfg.folderId = '';
  S.cfg.fileId = '';
  S.saveCfg();
  S.stopPolling();
  sessionStorage.removeItem('hbc-drive-token');
  rerender();
 };
 const askNotif = () => {
  if (!('Notification' in window)) return showAlert && showAlert('❌ Ez a böngésző nem támogatja az értesítéseket.');
  Notification.requestPermission().then(p => {
   saveAlerts({
    ...alerts,
    notifOn: p === 'granted'
   });
  });
 };
 const stepBtn = 'w-full font-bold text-white py-3 rounded-xl';
 const stepGrad = {
  background: 'linear-gradient(135deg,var(--hbc-c1,#4f46e5),var(--hbc-c2,#7c3aed))'
 };
 const mode = S.cfg.mode;

 return h('div', {
   className: 'space-y-4'
  },

  /* ═══ GOOGLE DRIVE SZINKRON ═══ */
  card([
   h('h2', {
    className: 'font-black text-gray-800 mb-2'
   }, '☁️ Google Drive szinkron'),
   h('p', {
     className: 'text-xs text-gray-500 mb-3'
    }, window.HBC_I18N.getLang() === 'en' ?
    'Your diary syncs to your own Google Drive folder. A family member connects to the shared folder in Follower mode and sees fresh values automatically.' :
    'A naplód a saját Google Drive-mappádba szinkronizálódik. A hozzátartozód Követő módban kapcsolódik a megosztott mappához, és automatikusan látja a friss értékeket.'),
   /* mód-választó */
   h('div', {
     className: 'grid grid-cols-1 md:grid-cols-2 gap-2 mb-3'
    },
    h('button', {
      type: 'button',
      onClick: () => {
       S.setMode('owner');
       rerender();
      },
      className: 'p-3 rounded-xl border-2 text-sm font-bold text-left ' + (mode === 'owner' ? 'border-indigo-500 bg-indigo-50 text-indigo-800' : 'border-gray-200 text-gray-500')
     },
     '📤 ', window.t('Tulajdonos mód (a saját naplómat osztom meg)')),
    h('button', {
      type: 'button',
      onClick: () => {
       S.setMode('follower');
       rerender();
      },
      className: 'p-3 rounded-xl border-2 text-sm font-bold text-left ' + (mode === 'follower' ? 'border-purple-500 bg-purple-50 text-purple-800' : 'border-gray-200 text-gray-500')
     },
     '👀 ', window.t('Követő mód (más naplóját követem)'))
   ),
   mode !== 'off' && h('div', {
     className: 'space-y-3'
    },
    /* 1. lépés: Client ID */
    h('div', null,
     h('label', {
      className: 'text-xs font-bold text-gray-500 block mb-1'
     }, '1️⃣ Google Client ID (lásd: Drive beállítási útmutató)'),
     h('input', {
      type: 'text',
      value: S.cfg.clientId,
      onChange: e => setClientId(e.target.value),
      placeholder: 'xxxxx.apps.googleusercontent.com',
      className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-xs font-mono focus:outline-none focus:border-indigo-400'
     })
    ),
    /* v14: AUTOMATIKUS BEJELENTKEZÉS — a megadott Google-fiókkal, fiókválasztó nélkül.
       Rosszullét esetén egy idegen segítőnek sem kell 10+ fiókból választania. */
    h('div', {
      className: 'p-3 bg-emerald-50 rounded-xl border-2 border-emerald-200'
     },
     h('label', {
      className: 'text-xs font-black text-emerald-800 block mb-1'
     }, '🔑 ' + window.t('Automatikus bejelentkezés — Google-fiók (e-mail)')),
     h('input', {
      type: 'email',
      value: S.cfg.accountEmail || '',
      onChange: e => {
       S.cfg.accountEmail = e.target.value;
       S.saveCfg();
       rerender();
      },
      placeholder: 'pl. nev@gmail.com',
      className: 'w-full border-2 border-emerald-200 rounded-xl px-3 py-2 text-xs font-mono focus:outline-none focus:border-emerald-400'
     }),
     h('p', {
       className: 'text-[11px] text-emerald-700 mt-1'
      },
      window.t('Ha megadod, az app mindig ezzel a fiókkal jelentkezik be — a Google fiókválasztó lista NEM jelenik meg. Az első engedélyezés eszközönként egyszer kézzel történik, utána minden belépés automatikus. Mobilon és asztali gépen is működik.'))
    ),
    /* 2. lépés: kapcsolódás */
    h('button', {
      type: 'button',
      onClick: connect,
      disabled: !S.cfg.clientId || busy,
      className: stepBtn + ' disabled:opacity-40',
      style: stepGrad
     },
     busy ? '⏳...' : '2️⃣ ' + window.t('Kapcsolódás Google-fiókkal')),
    /* 3. lépés: mappa/fájl */
    mode === 'owner' ?
    h('button', {
      type: 'button',
      onClick: pickFolder,
      disabled: !S.cfg.clientId,
      className: stepBtn + ' bg-emerald-600 disabled:opacity-40'
     },
     '3️⃣ ' + window.t('Mappa kiválasztása') + (S.cfg.folderName ? ' ✅ (' + S.cfg.folderName + ')' : '')) :
    h('button', {
      type: 'button',
      onClick: pickFile,
      disabled: !S.cfg.clientId,
      className: stepBtn + ' bg-purple-600 disabled:opacity-40'
     },
     '3️⃣ ' + window.t('Megosztott napló kiválasztása') + (S.cfg.fileName ? ' ✅ (' + S.cfg.fileName + ')' : '')),
    /* v12.1: követő módban csak-olvasási Drive-jog — magyarázat */
    mode === 'follower' && h('p', {
      className: 'text-[11px] text-purple-500'
     },
     window.t('A követő mód csak-olvasási Google Drive-jogot kér. Ez azért kell, hogy a kiválasztott naplófájl a Google-belépés lejárta után se „vesszen el”. Az app ezzel sem tud semmit írni vagy módosítani a Drive-on.')),
    /* állapot */
    S.cfg.lastSync && h('p', {
     className: 'text-xs text-gray-400'
    }, window.t('Utolsó szinkron') + ': ' + new Date(S.cfg.lastSync).toLocaleString()),
    h('div', {
      className: 'flex gap-2'
     },
     h('button', {
      type: 'button',
      onClick: () => {
       const done = err => {
        showAlert && showAlert(err ? ('❌ ' + window.t('Szinkronhiba') + ': ' + window.t(err)) : '✅ ' + window.t('Szinkron kész!'));
        rerender();
       };
       (mode === 'owner' ? S.syncNow(syncPayload()) : S.pull(true))
       .then(() => done(null)).catch(e => done((e && e.message) || window.t('Ismeretlen hiba.')));
      },
      className: 'flex-1 bg-indigo-600 text-white font-bold py-2 rounded-xl text-sm'
     }, '🔄 ' + window.t('Szinkron most')),
     h('button', {
      type: 'button',
      onClick: disconnect,
      className: 'flex-1 border-2 border-gray-200 text-gray-500 font-bold py-2 rounded-xl text-sm'
     }, window.t('Leválasztás'))
    ),
    /* riasztások (követő mód) */
    mode === 'follower' && h('div', {
      className: 'mt-2 p-3 bg-purple-50 rounded-xl border border-purple-200 space-y-2'
     },
     h('p', {
      className: 'text-sm font-black text-purple-900'
     }, '🔔 ' + window.t('Riasztási beállítások')),
     h('button', {
       type: 'button',
       onClick: askNotif,
       className: 'w-full text-sm font-bold py-2 rounded-xl ' + (alerts.notifOn ? 'bg-emerald-600 text-white' : 'bg-white border-2 border-purple-300 text-purple-700')
      },
      (alerts.notifOn ? '✅ ' : '') + window.t('Értesítések engedélyezése')),
     h('label', {
       className: 'flex items-center gap-2 text-sm font-bold text-purple-800'
      },
      h('input', {
       type: 'checkbox',
       checked: alerts.lowOn,
       onChange: e => saveAlerts({
        ...alerts,
        lowOn: e.target.checked
       }),
       className: 'w-5 h-5 accent-purple-600'
      }),
      window.t('Riasztás alacsony értéknél')),
     h('label', {
       className: 'flex items-center gap-2 text-sm font-bold text-purple-800'
      },
      h('input', {
       type: 'checkbox',
       checked: alerts.highOn,
       onChange: e => saveAlerts({
        ...alerts,
        highOn: e.target.checked
       }),
       className: 'w-5 h-5 accent-purple-600'
      }),
      window.t('Riasztás magas értéknél')),
     /* v14: opcionális értesítés MINDEN új bejegyzésről */
     h('label', {
       className: 'flex items-center gap-2 text-sm font-bold text-purple-800'
      },
      h('input', {
       type: 'checkbox',
       checked: !!alerts.entryOn,
       onChange: e => saveAlerts({
        ...alerts,
        entryOn: e.target.checked
       }),
       className: 'w-5 h-5 accent-purple-600'
      }),
      '📝 ' + window.t('Értesítés minden új bejegyzésről')),
     alerts.entryOn && h('p', {
       className: 'text-[11px] text-purple-500'
      },
      window.t('Minden új bejegyzésnél értesítés érkezik (a privát bejegyzésekről nem). Az értesítés legfeljebb a frissítési időköznyi késéssel jön, és csak nyitott vagy háttérben futó app mellett.')),
     h('div', {
       className: 'flex items-center gap-2'
      },
      h('span', {
       className: 'text-sm font-bold text-purple-800'
      }, window.t('Frissítés (perc)') + ':'),
      h(NumInput, {
       min: '1',
       max: '60',
       step: '1',
       value: S.cfg.minutes || 5,
       def: 5,
       onNum: v => {
        S.cfg.minutes = Math.round(v);
        S.saveCfg();
        S.startPolling();
        rerender();
       },
       className: 'w-20 border-2 border-purple-200 rounded-xl px-2 py-1 text-sm'
      })),
     h('p', {
       className: 'text-[11px] text-purple-500'
      }, window.HBC_I18N.getLang() === 'en' ?
      'Note: alerts appear while the app is open or running in the background. Push to a fully closed app would require a central server (prepared for a future upgrade).' :
      'Megjegyzés: a riasztás nyitott vagy háttérben futó app mellett érkezik. Teljesen bezárt apphoz központi szerver kellene (előkészítve egy későbbi bővítéshez).'),
     /* v9: csak aznapi mérés riaszt */
     h('p', {
      className: 'text-[11px] font-bold text-purple-600'
     }, 'A riasztás csak AZNAPI mérés alapján szólal meg – régebbi (utólag rögzített) érték nem vált riasztást.')
    )
   )
  ]),

  /* ═══ CGM IMPORT ═══ */
  card([
   h('h3', {
    className: 'font-black text-gray-800 mb-2'
   }, '📡 CGM adatok importálása (LibreView / Dexcom CSV)'),
   h('p', {
    className: 'text-xs text-gray-500 mb-2'
   }, 'Nincs még CGM-eszközöd? Az import LibreView/Clarity exportot fogad. Élő eszköz-csatlakozás előkészítve.'),
   h('button', {
     type: 'button',
     onClick: () => cgmRef.current?.click(),
     className: 'w-full bg-indigo-600 text-white font-bold py-3 rounded-xl'
    },
    '📡 ' + window.t('CGM CSV fájl kiválasztása') + (window.HBC_CGM && window.HBC_CGM.count() > 0 ? ' (' + window.HBC_CGM.count() + ' mérés betöltve)' : '')),
   h('input', {
    ref: cgmRef,
    type: 'file',
    accept: '.csv,.txt',
    onChange: handleCGM,
    className: 'hidden'
   })
  ]),

  card([
   h('h2', {
    className: 'font-black text-gray-800 mb-3'
   }, '🔄 Szinkron – Hogyan működik?'),
   h('div', {
     className: 'space-y-2 p-3 bg-blue-50 rounded-xl border border-blue-200 text-sm text-blue-900'
    },
    h('p', null, h('strong', null, '📱 Hova mentődnek az adatok?'), ' Erre az eszközre (localStorage + IndexedDB), és ha bekapcsolod, a saját Google Drive-odra.'),
    h('p', null, h('strong', null, '🔄 Szinkron eszközök között:'), ' Drive-szinkronnal automatikus; vagy kézzel: JSON Export → másik eszközön Import.'),
    h('p', null, h('strong', null, '🔀 Összefésülés:'), ' ID alapján dedupl. – nincs duplikátum!')
   )
  ]),
  card([
   h('h3', {
    className: 'font-black text-gray-800 mb-3'
   }, '💾 Teljes mentés (JSON)'),
   h('div', {
     className: 'grid grid-cols-2 gap-2 mb-2'
    },
    h('button', {
     onClick: exportJSON,
     type: 'button',
     className: 'font-bold text-white py-3 rounded-xl',
     style: {
      background: 'linear-gradient(135deg,var(--hbc-c1,#4f46e5),var(--hbc-c2,#7c3aed))'
     }
    }, '📤 JSON Export'),
    h('button', {
     onClick: () => fileRef.current?.click(),
     type: 'button',
     className: 'bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700'
    }, '📥 JSON/CSV Import')
   ),
   h('input', {
    ref: fileRef,
    type: 'file',
    accept: '.json,.csv',
    onChange: handleFile,
    className: 'hidden'
   })
  ]),
  card([
   h('h3', {
    className: 'font-black text-gray-800 mb-3'
   }, '📊 CSV Export (Excel/Orvos)'),
   h('button', {
    onClick: exportCSV,
    type: 'button',
    className: 'w-full font-bold text-white py-3 rounded-xl bg-purple-600 hover:bg-purple-700'
   }, '📊 CSV letöltése')
  ]),
  card([
   h('h3', {
    className: 'font-black text-gray-800 mb-3'
   }, '📋 Copy-paste szinkron'),
   h('div', {
     className: 'flex gap-2 mb-2'
    },
    h('button', {
     onClick: () => setTxt(JSON.stringify(entries)),
     type: 'button',
     className: 'flex-1 bg-indigo-600 text-white font-bold py-2 rounded-xl text-sm'
    }, '📤 Export szövegbe'),
    h('button', {
     onClick: () => importJSON(txt),
     disabled: !txt,
     type: 'button',
     className: 'flex-1 bg-green-600 text-white font-bold py-2 rounded-xl text-sm disabled:opacity-50'
    }, '📥 Import szövegből')
   ),
   h('textarea', {
    value: txt,
    onChange: e => setTxt(e.target.value),
    placeholder: 'Ide illeszd be az exportált adatokat...',
    rows: 5,
    className: 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2 text-xs font-mono focus:outline-none focus:border-indigo-400'
   })
  ]),
  card([
   h('h3', {
    className: 'font-black text-gray-800 mb-2'
   }, '📊 Adatok'),
   h('div', {
     className: 'grid grid-cols-2 gap-3'
    },
    h('div', {
     className: 'text-center p-3 bg-indigo-50 rounded-xl'
    }, h('p', {
     className: 'text-xs font-bold text-gray-500'
    }, 'Bejegyzések'), h('p', {
     className: 'text-2xl font-black text-indigo-700'
    }, entries.length)),
    h('div', {
     className: 'text-center p-3 bg-indigo-50 rounded-xl'
    }, h('p', {
     className: 'text-xs font-bold text-gray-500'
    }, 'Adatméret'), h('p', {
     className: 'text-2xl font-black text-indigo-700'
    }, (JSON.stringify(entries).length / 1024).toFixed(1) + 'KB'))
   )
  ])
 );
}

/* ═══════════ v12.2: SOS VÉSZHELYZETI LAP — segítőknek szóló, teljes képernyős nézet ═══════════
   Megnyitás: piros SOS gomb a hamburger menüben (mobil) és a fejlécben (asztali),
   valamint automatikusan, ha az aznapi legfrissebb mérés kritikusan alacsony.
   v12.2 javítások:
   - MINDEN stílus inline: a lap garantáltan a fejléc/gombsor/alsó sáv FELETT van
     (az app.css-ből hiányzó z-[200] osztály okozta a takarást), görgethető, és a
     telefon biztonsági sávjait (kivágás, gesztussáv) is figyelembe veszi;
   - FIX színvilág: a vészhelyzeti lap világos és sötét témában is PONTOSAN
     ugyanúgy, maximális kontraszttal jelenik meg (a sötét téma !important
     felülírásai osztályok híján nem érik el);
   - a csempék ⠿ fogantyúval húzva átrendezhetők (ujjal és egérrel), a sorrend a
     készüléken megmarad (hbc-sos-order); alapsorrend: elsősegély → hozzátartozók
     → 112 → lakcím → jegyzet;
   - a jegyzet címe a megadott becenévvel egészül ki: „Így kommunikálj velem — a nevem: …”. */
const SOS_ORDER_KEY = 'hbc-sos-order';
const SOS_DEFAULT_ORDER = ['aid', 'contacts', 'call112', 'address', 'note'];

function sosLoadOrder() {
 try {
  const o = JSON.parse(localStorage.getItem(SOS_ORDER_KEY) || 'null');
  if (Array.isArray(o)) {
   const valid = o.filter(k => SOS_DEFAULT_ORDER.includes(k));
   SOS_DEFAULT_ORDER.forEach(k => {
    if (!valid.includes(k)) valid.push(k);
   });
   return valid;
  }
 } catch (e) {}
 return SOS_DEFAULT_ORDER.slice();
}

function SOSPage({
 settings,
 reading,
 onClose,
 autoAlert
}) {
 const en = window.HBC_I18N.getLang() === 'en';
 const R = (hu, eng) => en ? eng : hu;
 const u = window.bgU;
 const cs = (settings.sosContacts || []).filter(c => c && (c.name || c.phone));
 const [order, setOrder] = useState(sosLoadOrder);
 const [dragKey, setDragKey] = useState(null);
 const tileRefs = useRef({});
 const dragInfo = useRef(null);
 /* húzás: a ⠿ fogantyún pointerrel indul; a mutató y-pozíciója alapján
    cseréljük a sorrendet; felengedéskor mentés a készülékre */
 const startDrag = (key, e) => {
  e.preventDefault();
  dragInfo.current = {
   key
  };
  setDragKey(key);
  const move = ev => {
   const y = ev.clientY != null ? ev.clientY : (ev.touches && ev.touches[0] && ev.touches[0].clientY);
   if (y == null) return;
   setOrder(cur => {
    const from = cur.indexOf(key);
    if (from < 0) return cur;
    let to = from;
    cur.forEach((k, i) => {
     if (k === key) return;
     const el = tileRefs.current[k];
     if (!el) return;
     const r = el.getBoundingClientRect();
     const mid = r.top + r.height / 2;
     if (i < from && y < mid) to = Math.min(to, i);
     if (i > from && y > mid) to = Math.max(to, i);
    });
    if (to === from) return cur;
    const next = cur.slice();
    next.splice(from, 1);
    next.splice(to, 0, key);
    return next;
   });
  };
  const up = () => {
   window.removeEventListener('pointermove', move);
   window.removeEventListener('pointerup', up);
   window.removeEventListener('pointercancel', up);
   dragInfo.current = null;
   setDragKey(null);
   setOrder(cur => {
    try {
     localStorage.setItem(SOS_ORDER_KEY, JSON.stringify(cur));
    } catch (err) {}
    return cur;
   });
  };
  window.addEventListener('pointermove', move);
  window.addEventListener('pointerup', up);
  window.addEventListener('pointercancel', up);
 };
 const S = {
  page: {
   position: 'fixed',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   zIndex: 100000,
   background: '#7f1d1d',
   overflowY: 'auto',
   WebkitOverflowScrolling: 'touch',
   overscrollBehavior: 'contain'
  },
  wrap: {
   maxWidth: '480px',
   margin: '0 auto',
   padding: 'calc(env(safe-area-inset-top,0px) + 16px) 16px calc(env(safe-area-inset-bottom,0px) + 28px) 16px'
  },
  card: {
   background: '#ffffff',
   borderRadius: '16px',
   padding: '14px',
   marginBottom: '12px',
   position: 'relative'
  },
  handle: {
   position: 'absolute',
   top: '6px',
   right: '10px',
   cursor: 'grab',
   touchAction: 'none',
   color: '#9ca3af',
   fontSize: '18px',
   lineHeight: '1',
   padding: '6px',
   userSelect: 'none'
  },
  h: {
   fontWeight: '900',
   color: '#1f2937',
   fontSize: '18px',
   margin: '0 0 8px 0'
  }
 };
 const handle = key => h('span', {
  style: S.handle,
  title: R('Húzd a csempe áthelyezéséhez', 'Drag to move this tile'),
  onPointerDown: e => startDrag(key, e)
 }, '⠿');
 const tile = (key, style, kids) => h('div', {
   key,
   ref: el => {
    tileRefs.current[key] = el;
   },
   style: Object.assign({}, S.card, style || {}, dragKey === key ? {
    outline: '3px dashed #fbbf24',
    opacity: .92
   } : {})
  },
  handle(key), kids);
 const TILES = {
  aid: () => tile('aid', {
   background: '#fef3c7',
   border: '2px solid #f59e0b'
  }, [
   h('p', {
    key: 't',
    style: {
     fontWeight: '900',
     color: '#78350f',
     fontSize: '18px',
     margin: '0 0 8px 0'
    }
   }, R('MIT TEGYÉL? — Elsősegély', 'WHAT TO DO? — First aid')),
   h('ol', {
     key: 'l',
     style: {
      color: '#78350f',
      fontWeight: '700',
      fontSize: '16px',
      listStyleType: 'decimal',
      paddingLeft: '22px',
      margin: 0
     }
    },
    h('li', {
     style: {
      marginBottom: '6px'
     }
    }, R('Ha nyelni tud: adj neki cukrot, szőlőcukrot vagy cukros üdítőt (NEM lightot)!', 'If they can swallow: give sugar, glucose tablets or a sugary (NOT diet) drink!')),
    h('li', {
     style: {
      marginBottom: '6px'
     }
    }, R('Inzulint SEMMIKÉPP NE adj be neki!', 'NEVER inject insulin!')),
    h('li', {
     style: {
      marginBottom: '6px'
     }
    }, R('Ha eszméletlen: szájon át NE adj semmit — stabil oldalfekvés, és azonnal hívj mentőt!', 'If unconscious: give NOTHING by mouth — recovery position and call an ambulance immediately!')),
    h('li', null, R('Ha 15 perc múlva sem javul: hívj mentőt!', 'If there is no improvement in 15 minutes: call an ambulance!')))
  ]),
  contacts: () => cs.length ? tile('contacts', null, [
   h('p', {
    key: 't',
    style: S.h
   }, '📞 ' + R('Értesítendő hozzátartozók', 'Contacts to notify')),
   cs.map((c, i) => h('div', {
     key: i,
     style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '8px',
      padding: '8px 0',
      borderBottom: i < cs.length - 1 ? '1px solid #e5e7eb' : 'none'
     }
    },
    h('div', {
      style: {
       minWidth: 0
      }
     },
     h('p', {
      style: {
       fontWeight: '900',
       color: '#1f2937',
       fontSize: '18px',
       margin: 0,
       lineHeight: 1.2
      }
     }, c.name || ''),
     h('p', {
      style: {
       color: '#6b7280',
       fontWeight: '700',
       fontSize: '13px',
       margin: 0
      }
     }, (c.rel || '') + (c.phone ? ' · ' + c.phone : ''))),
    c.phone && h('a', {
     href: 'tel:' + String(c.phone).replace(/[\s()-]/g, ''),
     style: {
      flexShrink: 0,
      background: '#059669',
      color: '#ffffff',
      fontWeight: '900',
      padding: '12px 16px',
      borderRadius: '12px',
      textDecoration: 'none',
      fontSize: '16px'
     }
    }, '📞 ' + R('Hívás', 'Call'))))
  ]) : null,
  call112: () => tile('call112', {
   background: '#ffffff',
   padding: '0'
  }, [
   h('a', {
    key: 'a',
    href: 'tel:112',
    style: {
     display: 'block',
     color: '#b91c1c',
     textAlign: 'center',
     fontWeight: '900',
     padding: '18px 14px',
     fontSize: '22px',
     textDecoration: 'none'
    }
   }, '🚑 112 — ' + R('MENTŐHÍVÁS', 'EMERGENCY CALL'))
  ]),
  address: () => settings.sosAddress ? tile('address', null, [
   h('p', {
    key: 't',
    style: {
     fontWeight: '900',
     color: '#1f2937',
     margin: '0 0 4px 0',
     fontSize: '15px'
    }
   }, '🏠 ' + R('Lakcím', 'Home address')),
   h('p', {
    key: 'a',
    style: {
     color: '#1f2937',
     fontWeight: '700',
     fontSize: '18px',
     margin: 0
    }
   }, settings.sosAddress)
  ]) : null,
  note: () => settings.sosNote ? tile('note', {
   background: '#dbeafe',
   border: '2px solid #3b82f6'
  }, [
   h('p', {
     key: 't',
     style: {
      fontWeight: '900',
      color: '#1e3a8a',
      margin: '0 0 6px 0',
      fontSize: '18px',
      paddingRight: '26px'
     }
    },
    '💬 ' + R('Így kommunikálj velem', 'How to communicate with me') +
    (settings.nickname ? R(' — „' + settings.nickname + '” a nevem', ' — my name is “' + settings.nickname + '”') : '')),
   h('p', {
    key: 'n',
    style: {
     color: '#1e3a8a',
     fontWeight: '700',
     fontSize: '17px',
     whiteSpace: 'pre-wrap',
     margin: 0
    }
   }, settings.sosNote)
  ]) : null
 };
 return h('div', {
   style: S.page
  },
  h('div', {
    style: S.wrap
   },
   h('div', {
     style: {
      textAlign: 'center',
      marginBottom: '14px'
     }
    },
    h('p', {
     style: {
      color: '#ffffff',
      fontWeight: '900',
      fontSize: '26px',
      lineHeight: 1.15,
      margin: 0
     }
    }, R('INZULINNAL KEZELT CUKORBETEG', 'INSULIN-TREATED DIABETIC')),
    h('p', {
      style: {
       color: '#fecaca',
       fontWeight: '700',
       fontSize: '17px',
       margin: '6px 0 0 0'
      }
     }, autoAlert ?
     R('AUTOMATIKUS RIASZTÁS — kritikusan alacsony vércukor!', 'AUTOMATIC ALERT — critically low blood glucose!') :
     R('Rosszul van — valószínűleg alacsony a vércukra', 'Feeling unwell — blood glucose is probably low')),
    settings.sosName && h('p', {
     style: {
      color: '#ffffff',
      fontWeight: '900',
      fontSize: '20px',
      margin: '8px 0 0 0'
     }
    }, settings.sosName)
   ),
   reading && h('div', {
     style: {
      background: '#ffffff',
      borderRadius: '16px',
      padding: '12px',
      textAlign: 'center',
      marginBottom: '12px'
     }
    },
    h('p', {
     style: {
      fontWeight: '900',
      color: '#b91c1c',
      fontSize: '34px',
      margin: 0,
      lineHeight: 1.1
     }
    }, u.disp(reading.v) + ' ' + u.label()),
    h('p', {
     style: {
      fontWeight: '700',
      color: '#ef4444',
      fontSize: '13px',
      margin: '4px 0 0 0'
     }
    }, R('Mért érték', 'Measured value') + ' · ' + new Date(reading.ts).toLocaleString(window.HBC_LOCALE()))),
   order.map(k => TILES[k] && TILES[k]()),
   h('p', {
     style: {
      color: '#fca5a5',
      fontSize: '12px',
      textAlign: 'center',
      margin: '0 0 10px 0'
     }
    },
    R('A csempék a ⠿ fogantyúval húzva átrendezhetők — a sorrend ezen a készüléken megmarad.', 'Tiles can be re-arranged by dragging the ⠿ handle — the order is remembered on this device.')),
   h('button', {
     type: 'button',
     onClick: onClose,
     style: {
      width: '100%',
      background: 'rgba(255,255,255,.15)',
      border: '2px solid #ffffff',
      color: '#ffffff',
      fontWeight: '900',
      borderRadius: '16px',
      padding: '16px',
      fontSize: '18px',
      cursor: 'pointer'
     }
    },
    autoAlert ? '✅ ' + R('JÓL VAGYOK — riasztás bezárása', 'I AM OK — dismiss alert') : '✖ ' + R('Bezárás', 'Close'))
  )
 );
}

// ═══════════ APP ═══════════

const DEFAULT_SETTINGS = {
 lowBG: 3.9,
 highBG: 10.0,
 targetBG: 6.0,
 sensitivity: 2.5,
 bgUnit: 'mmol',
 icrMorning: 10,
 icrNoon: 10,
 icrEvening: 10,
 rapidName: 'Humalog',
 basalName: 'Lantus',
 diaHours: 4,
 nickname: '',
 theme: 'indigo',
 motivation: true,
 darkMode: 'light',
 customBg: null,
 /* v10: egyéni háttérszín */
 /* v8: felhasználó által módosítható napszakhatárok (óra) */
 mb1: 9,
 mb2: 11,
 mb3: 14,
 mb4: 17,
 mb5: 21,
 /* étkezéstípus-alapértelmezés: Reggeli-ig, Tízórai-ig, Ebéd-ig, Uzsonna-ig, Vacsora-ig */
 ib1: 10,
 ib2: 16,
 /* bolus-ICR: Reggel-ig, Délben-ig (utána Este) */
 /* v12: SOS vészhelyzeti adatok — kizárólag a felhasználó eszközén (localStorage) tárolódnak */
 sosName: '',
 sosPhone: '',
 sosAddress: '',
 sosContacts: [],
 sosNote: '',
 /* v14: fizikai aktivitás szintek (1–5) — a felhasználó által elnevezhető */
 actLevels: ['Nagyon könnyű', 'Könnyű', 'Közepes', 'Megerőltető', 'Nagyon megerőltető']
};

/* v8: extrém vércukorérték-ellenőrzés (mmol/l-ben) — elgépelés-védelem */
const BG_EXTREME_LOW = 2.0,
 BG_EXTREME_HIGH = 25.0;

function extremeBGWarn(mmol) {
 if (mmol == null || isNaN(mmol)) return null;
 if (mmol < BG_EXTREME_LOW || mmol > BG_EXTREME_HIGH)
  return `⚠️ Szokatlan vércukorérték: ${window.bgU.disp(mmol)} ${window.bgU.label()}. Biztosan helyes? Nem elgépelés?`;
 return null;
}

// ═══════════ MODAL DIALOG ═══════════
function ModalDialog({
 modal
}) {
 if (!modal) return null;
 return h('div', {
   className: 'fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4',
   /* v14: hosszú üzenetnél is görgethető marad mobilon */
   style: {
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch'
   },
   onClick: e => {
    if (e.target === e.currentTarget && modal.type === 'alert') {
     modal.onOk && modal.onOk();
    }
   }
  },
  h('div', {
    className: 'bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6'
   },
   h('p', {
    className: 'text-gray-800 font-bold text-base mb-5 text-center'
   }, modal.msg),
   modal.type === 'alert' ?
   h('button', {
    onClick: modal.onOk,
    className: 'w-full font-bold text-white py-3 rounded-xl',
    style: {
     background: 'linear-gradient(135deg,var(--hbc-c1,#4f46e5),var(--hbc-c2,#7c3aed))'
    }
   }, 'OK') :
   h('div', {
     className: 'flex gap-3'
    },
    h('button', {
     onClick: modal.onOk,
     className: 'flex-1 font-bold text-white py-3 rounded-xl',
     style: {
      background: 'linear-gradient(135deg,var(--hbc-c1,#4f46e5),var(--hbc-c2,#7c3aed))'
     }
    }, '✅ Igen'),
    h('button', {
     onClick: modal.onCancel,
     className: 'flex-1 border-2 border-gray-200 text-gray-600 font-bold py-3 rounded-xl'
    }, '❌ Nem')
   )
  )
 );
}

/* ═══════════ v11.1.3: NumInput — szabad számbevitel mobilon ═══════════
   Hiba volt: a szám-mezők minden billentyűleütésnél visszaírták az alapértéket
   (üres/részleges beírás → pl. 10), így telefonon nem lehetett 10-nél kisebb
   számot beírni. A NumInput gépelés közben a nyers szöveget mutatja, csak
   érvényes számot ad tovább; az alapértéket és a min/max korlátot a mező
   elhagyásakor (blur) érvényesíti. Az asztali le-föl nyíl továbbra is működik. */
function NumInput({
 value,
 onNum,
 def,
 min,
 max,
 step,
 className,
 ...rest
}) {
 const [txt, setTxt] = useState(value == null || value === '' ? '' : String(value));
 const foc = useRef(false);
 useEffect(() => {
  if (!foc.current) setTxt(value == null || value === '' ? '' : String(value));
 }, [value]);
 const clamp = v => {
  if (min != null && v < parseFloat(min)) v = parseFloat(min);
  if (max != null && v > parseFloat(max)) v = parseFloat(max);
  return v;
 };
 return h('input', {
  ...rest,
  type: 'number',
  min,
  max,
  step,
  className,
  inputMode: 'decimal',
  value: txt,
  onFocus: () => {
   foc.current = true;
  },
  onChange: e => {
   const raw = e.target.value;
   setTxt(raw);
   const v = parseFloat(String(raw).replace(',', '.'));
   if (!isNaN(v)) onNum(clamp(v));
  },
  onBlur: e => {
   foc.current = false;
   let v = parseFloat(String(e.target.value).replace(',', '.'));
   v = isNaN(v) ? def : clamp(v);
   setTxt(v == null ? '' : String(v));
   if (v != null) onNum(v);
  }
 });
}

// ═══════════ BEÁLLÍTÁSOK (v7) ═══════════
function Settings({
 settings,
 onSave
}) {
 const [s, setS] = useState({
  ...settings
 });
 const fi = 'w-full border-2 border-indigo-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-400';
 const u = window.bgU;
 /* megjelenített érték a választott egységben (a state mindig mmol/l) */
 const dispOf = v => {
  if (v == null || isNaN(v)) return '';
  return s.bgUnit === 'mgdl' ? Math.round(v * 18.016) : v;
 };
 const storeOf = x => {
  const v = parseFloat(String(x).replace(',', '.'));
  if (isNaN(v)) return null;
  return s.bgUnit === 'mgdl' ? Math.round(v / 18.016 * 100) / 100 : v;
 };
 const uLbl = s.bgUnit === 'mgdl' ? 'mg/dl' : 'mmol/l';
 const bgField = (label, key, cls, defMmol) => h('div', null,
  h('label', {
   className: 'text-sm font-bold ' + cls + ' block mb-1'
  }, t(label) + ' (' + uLbl + ')'),
  h(NumInput, {
   step: s.bgUnit === 'mgdl' ? '1' : '0.1',
   value: dispOf(s[key]),
   def: dispOf(DEFAULT_SETTINGS[key]),
   onNum: v => setS(p => ({
    ...p,
    [key]: s.bgUnit === 'mgdl' ? Math.round(v / 18.016 * 100) / 100 : v
   })),
   className: fi
  })
 );
 /* v9: inzulinválasztó legördülő — piacon lévő készítmények + egyéni név */
 const insSel = (label, key, list, cls) => {
  const cur = s[key] != null ? s[key] : list[0];
  const isCustom = !list.includes(cur);
  return h('div', null,
   h('label', {
    className: 'text-sm font-bold ' + cls + ' block mb-1'
   }, label),
   h('select', {
     value: isCustom ? '_custom' : cur,
     onChange: e => {
      const v = e.target.value;
      setS(v === '_custom' ? {
       ...s,
       [key]: ''
      } : {
       ...s,
       [key]: v
      });
     },
     className: fi
    },
    list.map(n => h('option', {
     key: n,
     value: n
    }, n)),
    h('option', {
     value: '_custom'
    }, window.t('Egyéb (egyéni név)…'))),
   isCustom && h('input', {
    type: 'text',
    value: cur,
    placeholder: 'pl. Insulin lispro Sanofi',
    onChange: e => setS({
     ...s,
     [key]: e.target.value
    }),
    className: fi + ' mt-2'
   })
  );
 };
 /* v8/v9: napszakhatár-mező (óra, 0–23) */
 const hourField = (label, key, def) => h('div', null,
  h('label', {
   className: 'text-xs font-bold text-gray-500 block mb-1'
  }, label),
  h(NumInput, {
   min: '0',
   max: '23',
   step: '1',
   value: s[key] != null ? s[key] : def,
   def: def,
   onNum: v => setS(p => ({
    ...p,
    [key]: Math.max(0, Math.min(23, Math.round(v)))
   })),
   className: fi
  }));
 return h('div', {
   className: 'space-y-4'
  },
  card([
   h('h2', {
    className: 'font-black text-gray-800 mb-3'
   }, '⚙️ Személyes beállítások'),
   h('div', {
     className: 'grid md:grid-cols-2 gap-4'
    },
    h('div', null,
     h('label', {
      className: 'text-sm font-bold text-indigo-700 block mb-1'
     }, 'Nyelv / Language'),
     h('select', {
       value: s.lang || window.HBC_I18N.getLang(),
       onChange: e => setS({
        ...s,
        lang: e.target.value
       }),
       className: fi
      },
      h('option', {
       value: 'hu'
      }, 'Magyar'), h('option', {
       value: 'en'
      }, 'English'))
    ),
    h('div', null,
     h('label', {
      className: 'text-sm font-bold text-indigo-700 block mb-1'
     }, 'Vércukor mértékegysége'),
     h('select', {
       value: s.bgUnit || 'mmol',
       onChange: e => setS({
        ...s,
        bgUnit: e.target.value
       }),
       className: fi
      },
      h('option', {
       value: 'mmol'
      }, 'mmol/l'), h('option', {
       value: 'mgdl'
      }, 'mg/dl'))
    ),
    h('div', null,
     h('label', {
      className: 'text-sm font-bold text-indigo-700 block mb-1'
     }, 'Becenév'),
     h('input', {
      type: 'text',
      value: s.nickname || '',
      placeholder: 'pl. Zoli',
      onChange: e => setS({
       ...s,
       nickname: e.target.value
      }),
      className: fi
     })
    ),
    h('div', null,
     h('label', {
      className: 'text-sm font-bold text-indigo-700 block mb-1'
     }, 'Színtéma'),
     h('select', {
       value: s.theme || 'indigo',
       onChange: e => setS({
        ...s,
        theme: e.target.value
       }),
       className: fi
      },
      h('option', {
       value: 'indigo'
      }, '💜 Indigó (alap)'),
      h('option', {
       value: 'teal'
      }, '💚 Türkiz'),
      h('option', {
       value: 'rose'
      }, '🌹 Rózsa'),
      /* v9: egyéni szín felugró színskáláról */
      h('option', {
       value: 'custom'
      }, '🎨 Egyéni szín (színskáláról)')),
     s.theme === 'custom' && h('div', {
       className: 'mt-2 flex items-center gap-3'
      },
      h('input', {
       type: 'color',
       value: s.customC1 || '#4f46e5',
       onChange: e => setS({
        ...s,
        customC1: e.target.value
       }),
       className: 'hbc-colorpick',
       title: 'Egyéni kiemelőszín'
      }),
      h('span', {
       className: 'text-xs text-gray-500'
      }, 'Koppints a színmezőre, és válassz a felugró színskáláról!'))
    ),
    h('div', null,
     h('label', {
      className: 'text-sm font-bold text-indigo-700 block mb-1'
     }, 'Megjelenés'),
     h('select', {
       value: s.darkMode || 'light',
       onChange: e => setS({
        ...s,
        darkMode: e.target.value
       }),
       className: fi
      },
      h('option', {
       value: 'light'
      }, '☀️ Világos'),
      h('option', {
       value: 'dark'
      }, '🌙 Sötét'),
      h('option', {
       value: 'auto'
      }, '🌗 Automatikus (rendszer szerint)'))
    ),
    /* v10: egyéni háttérszín — felugró színskáláról, a Megjelenés mellett */
    h('div', null,
     h('label', {
      className: 'text-sm font-bold text-indigo-700 block mb-1'
     }, '🎨 Egyéni háttérszín (színskáláról)'),
     h('div', {
       className: 'flex items-center gap-3 flex-wrap'
      },
      h('input', {
       type: 'color',
       value: s.customBg || '#8b7cf6',
       onChange: e => setS({
        ...s,
        customBg: e.target.value
       }),
       className: 'hbc-colorpick',
       title: 'Egyéni háttérszín'
      }),
      s.customBg && h('button', {
       type: 'button',
       onClick: () => setS({
        ...s,
        customBg: null
       }),
       className: 'text-xs font-bold text-indigo-500 underline'
      }, '↩️ Visszaállítás (alap háttér)')
     ),
     h('p', {
      className: 'text-xs text-gray-500 mt-1'
     }, 'Koppints a színmezőre, és válassz a felugró színskáláról! A háttér az egész alkalmazásban lágy színátmenetként jelenik meg, a kártyák kontrasztja megmarad.')
    )
   ),
   h('div', {
     className: 'mt-4'
    },
    h('label', {
      className: 'flex items-center gap-2 text-sm font-bold text-indigo-700'
     },
     h('input', {
      type: 'checkbox',
      checked: s.motivation !== false,
      onChange: e => setS({
       ...s,
       motivation: e.target.checked
      }),
      className: 'w-5 h-5 accent-indigo-600'
     }),
     'Motivációs elemek (sorozat, haladás, visszajelzés)')
   )
  ]),
  /* ═══ v12: SOS VÉSZHELYZETI ADATOK ═══ */
  card([
   h('h2', {
    className: 'font-black text-red-700 mb-1'
   }, '🆘 ' + t('Vészhelyzet (SOS)')),
   h('p', {
    className: 'text-sm text-gray-500 mb-1'
   }, t('Ezek az adatok a menü piros SOS gombjára koppintva jelennek meg — az ismeretlen segítők és a mentők számára.')),
   h('p', {
    className: 'text-xs text-gray-400 mb-4'
   }, t('Minden adat kizárólag a te eszközödön tárolódik.')),
   h('div', {
     className: 'grid md:grid-cols-3 gap-4 mb-4'
    },
    h('div', null,
     h('label', {
      className: 'text-sm font-bold text-red-700 block mb-1'
     }, t('Teljes név (Orvosi riporton is)')),
     h('input', {
      type: 'text',
      value: s.sosName || '',
      placeholder: 'pl. Jurák Zoltán',
      onChange: e => setS({
       ...s,
       sosName: e.target.value
      }),
      className: fi
     })),
    h('div', null,
     h('label', {
      className: 'text-sm font-bold text-red-700 block mb-1'
     }, t('Saját telefonszám (Orvosi riporton is)')),
     h('input', {
      type: 'tel',
      value: s.sosPhone || '',
      placeholder: 'pl. +36 30 123 4567',
      onChange: e => setS({
       ...s,
       sosPhone: e.target.value
      }),
      className: fi
     })),
    h('div', null,
     h('label', {
      className: 'text-sm font-bold text-red-700 block mb-1'
     }, t('Lakcím')),
     h('input', {
      type: 'text',
      value: s.sosAddress || '',
      placeholder: 'pl. 1234 Példaváros, Minta u. 5.',
      onChange: e => setS({
       ...s,
       sosAddress: e.target.value
      }),
      className: fi
     }))
   ),
   h('p', {
    className: 'text-sm font-bold text-red-700 mb-2'
   }, '📞 ' + t('Értesítendő hozzátartozók')),
   (s.sosContacts || []).map((c, i) => h('div', {
     key: i,
     className: 'grid grid-cols-[1fr_1fr_1fr_auto] gap-2 mb-2 items-center'
    },
    h('input', {
     type: 'text',
     value: c.name || '',
     placeholder: t('Név'),
     onChange: e => {
      const l = (s.sosContacts || []).slice();
      l[i] = {
       ...l[i],
       name: e.target.value
      };
      setS({
       ...s,
       sosContacts: l
      });
     },
     className: fi
    }),
    h('input', {
     type: 'text',
     value: c.rel || '',
     placeholder: t('Kapcsolat (pl. párom)'),
     onChange: e => {
      const l = (s.sosContacts || []).slice();
      l[i] = {
       ...l[i],
       rel: e.target.value
      };
      setS({
       ...s,
       sosContacts: l
      });
     },
     className: fi
    }),
    h('input', {
     type: 'tel',
     value: c.phone || '',
     placeholder: t('Telefonszám'),
     onChange: e => {
      const l = (s.sosContacts || []).slice();
      l[i] = {
       ...l[i],
       phone: e.target.value
      };
      setS({
       ...s,
       sosContacts: l
      });
     },
     className: fi
    }),
    h('button', {
     type: 'button',
     'aria-label': t('Törlés'),
     onClick: () => {
      const l = (s.sosContacts || []).slice();
      l.splice(i, 1);
      setS({
       ...s,
       sosContacts: l
      });
     },
     className: 'px-3 py-2 rounded-xl bg-red-50 text-red-600 font-black border border-red-200'
    }, '🗑')
   )),
   h('button', {
    type: 'button',
    onClick: () => setS({
     ...s,
     sosContacts: (s.sosContacts || []).concat([{
      name: '',
      rel: '',
      phone: ''
     }])
    }),
    className: 'text-sm font-bold text-red-600 border-2 border-red-200 rounded-xl px-4 py-2 mb-4'
   }, '➕ ' + t('Hozzátartozó hozzáadása')),
   (s.sosContacts || []).length > 1 && h('p', {
    className: 'text-xs text-gray-400 mb-3'
   }, t('A lista első tagja a fő értesítendő.')),
   h('div', null,
    h('label', {
     className: 'text-sm font-bold text-blue-700 block mb-1'
    }, '💬 ' + t('Így kommunikálj velem (szabadon szerkeszthető)')),
    h('p', {
     className: 'text-xs text-gray-500 mb-1'
    }, t('Saját tapasztalataid alapján írd le a segítőknek, milyen vagy hipoglikémiásan, és hogyan érdemes veled bánni!')),
    h('textarea', {
     value: s.sosNote || '',
     rows: 4,
     placeholder: t('pl. Ilyenkor zavart vagyok, elutasító lehetek — mintha részeg lennék. Nyugodtan, lassan beszélj, ne vitatkozz velem, add a kezembe a szőlőcukrot vagy a cukros üdítőt!'),
     onChange: e => setS({
      ...s,
      sosNote: e.target.value
     }),
     className: fi
    })
   )
  ]),
  card([
   h('h2', {
    className: 'font-black text-gray-800 mb-1'
   }, '🩸 Vércukor-határok'),
   h('p', {
    className: 'text-sm text-gray-500 mb-4'
   }, 'Az orvossal közösen meghatározott értékeket add meg!'),
   h('div', {
     className: 'grid md:grid-cols-3 gap-4'
    },
    bgField('⚠️ Alacsony vércukor határ', 'lowBG', 'text-amber-700'),
    bgField('🔺 Magas vércukor határ', 'highBG', 'text-red-700'),
    bgField('🎯 Célvércukor – bolus korrektorhoz', 'targetBG', 'text-green-700')
   )
  ]),
  card([
   h('h2', {
    className: 'font-black text-gray-800 mb-1'
   }, '💉 Inzulin-beállítások'),
   h('div', {
     className: 'grid md:grid-cols-3 gap-4 mb-4'
    },
    /* v9: a piacon lévő gyors és bázis inzulinok legördülő menüből választhatók */
    insSel('Gyors (bólus) inzulin', 'rapidName', RAPID_INSULINS, 'text-indigo-700'),
    insSel('Bázis inzulin', 'basalName', BASAL_INSULINS, 'text-purple-700'),
    h('div', null,
     h('label', {
      className: 'text-sm font-bold text-indigo-700 block mb-1'
     }, 'Inzulin hatásideje (óra)'),
     h(NumInput, {
      step: '0.5',
      min: '2',
      max: '8',
      value: s.diaHours || 4,
      def: 4,
      onNum: v => setS(p => ({
       ...p,
       diaHours: v
      })),
      className: fi
     })
    )
   ),
   h('div', null,
    h('label', {
     className: 'text-sm font-bold text-indigo-700 block mb-1'
    }, t('📐 Inzulin érzékenység (1E gyors inzulin ennyivel csökkent') + ' ' + uLbl + ')'),
    h(NumInput, {
     step: s.bgUnit === 'mgdl' ? '1' : '0.1',
     value: dispOf(s.sensitivity),
     def: dispOf(2.5),
     onNum: v => setS(p => ({
      ...p,
      sensitivity: s.bgUnit === 'mgdl' ? Math.round(v / 18.016 * 100) / 100 : v
     })),
     className: fi
    })
   ),
   h('div', {
     className: 'mt-4'
    },
    h('p', {
     className: 'text-sm font-bold text-emerald-700 mb-2'
    }, 'CH/inzulin arány (ICR) napszakonként'),
    h('p', {
     className: 'text-xs text-gray-500 mb-2'
    }, '1 egység inzulin ennyi gramm CH-t fedez'),
    h('div', {
      className: 'grid grid-cols-3 gap-3'
     },
     h('div', null, h('label', {
       className: 'text-xs font-bold text-gray-500 block mb-1'
      }, 'Reggel'),
      h(NumInput, {
       step: '0.5',
       min: '1',
       max: '50',
       value: s.icrMorning || 10,
       def: 10,
       onNum: v => setS(p => ({
        ...p,
        icrMorning: v
       })),
       className: fi
      })),
     h('div', null, h('label', {
       className: 'text-xs font-bold text-gray-500 block mb-1'
      }, 'Délben'),
      h(NumInput, {
       step: '0.5',
       min: '1',
       max: '50',
       value: s.icrNoon || 10,
       def: 10,
       onNum: v => setS(p => ({
        ...p,
        icrNoon: v
       })),
       className: fi
      })),
     h('div', null, h('label', {
       className: 'text-xs font-bold text-gray-500 block mb-1'
      }, 'Este'),
      h(NumInput, {
       step: '0.5',
       min: '1',
       max: '50',
       value: s.icrEvening || 10,
       def: 10,
       onNum: v => setS(p => ({
        ...p,
        icrEvening: v
       })),
       className: fi
      }))
    )
   ),
   h('div', {
     className: 'mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200'
    },
    h('p', {
     className: 'text-xs font-bold text-amber-800 mb-1'
    }, '⚠️ Fontos figyelmeztetés!'),
    h('p', {
     className: 'text-xs text-amber-700'
    }, '⚠️ FIGYELEM: minden dózisérték csak tájékoztató javaslat, NEM orvosi utasítás! A dózisról mindig a kezelőorvosod iránymutatása szerint dönts!')
   )
  ]),
  /* v8 (v9-ben helyreállítva): felhasználó által módosítható napszakhatárok */
  card([
   h('h2', {
    className: 'font-black text-gray-800 mb-1'
   }, '🕒 Napszakhatárok'),
   h('p', {
    className: 'text-xs text-gray-500 mb-3'
   }, 'Óra (0–23), ameddig az adott napszak tart. Ezek vezérlik az étkezéstípus-alapértelmezést és a bolus-kalkulátor napszakválasztását.'),
   h('p', {
    className: 'text-sm font-bold text-emerald-700 mb-2'
   }, '🍽️ Étkezés-alapértelmezés határai'),
   h('div', {
     className: 'grid grid-cols-2 md:grid-cols-5 gap-3'
    },
    hourField('Reggeli eddig', 'mb1', 9),
    hourField('Tízórai eddig', 'mb2', 11),
    hourField('Ebéd eddig', 'mb3', 14),
    hourField('Uzsonna eddig', 'mb4', 17),
    hourField('Vacsora eddig', 'mb5', 21)
   ),
   h('p', {
    className: 'text-xs text-gray-400 mt-1 mb-3'
   }, 'A Vacsora-határ után rögzített étkezés alapértelmezése: Utóvacsora.'),
   h('p', {
    className: 'text-sm font-bold text-purple-700 mb-2'
   }, '💉 Bolus-ICR napszakhatárai'),
   h('div', {
     className: 'grid grid-cols-2 gap-3'
    },
    hourField('Reggel eddig', 'ib1', 10),
    hourField('Délben eddig', 'ib2', 16)
   ),
   h('p', {
    className: 'text-xs text-gray-400 mt-1'
   }, 'A Délben-határ után az „Este" ICR érvényes.')
  ]),
  /* ═══ v14: FIZIKAI AKTIVITÁS SZINTJEI (1–5) — elnevezhető, módosítható ═══ */
  card([
   h('h2', {
    className: 'font-black text-gray-800 mb-1'
   }, '⚡ ' + t('Fizikai aktivitás szintjei (1–5)')),
   h('p', {
    className: 'text-xs text-gray-500 mb-3'
   }, t('Az Egyéb tevékenység bejegyzéseknél választható 1–5 skála szintjeinek elnevezése. Írd át őket a saját szavaidra!')),
   h('div', {
     className: 'grid grid-cols-1 md:grid-cols-5 gap-3'
    },
    [0, 1, 2, 3, 4].map(i => h('div', {
      key: i
     },
     h('label', {
      className: 'text-xs font-bold text-yellow-700 block mb-1'
     }, (i + 1) + '.'),
     h('input', {
      type: 'text',
      value: (Array.isArray(s.actLevels) && s.actLevels[i] != null) ? s.actLevels[i] : ACT_LEVEL_DEFAULTS[i],
      placeholder: t(ACT_LEVEL_DEFAULTS[i]),
      onChange: e => {
       const arr = (Array.isArray(s.actLevels) ? s.actLevels : ACT_LEVEL_DEFAULTS).slice(0, 5);
       while (arr.length < 5) arr.push(ACT_LEVEL_DEFAULTS[arr.length]);
       arr[i] = e.target.value;
       setS({
        ...s,
        actLevels: arr
       });
      },
      className: fi
     })
    ))
   ),
   h('button', {
    type: 'button',
    onClick: () => setS({
     ...s,
     actLevels: ACT_LEVEL_DEFAULTS.slice()
    }),
    className: 'mt-3 text-xs font-bold text-indigo-500 underline'
   }, '↩️ ' + t('Alapértelmezett elnevezések visszaállítása'))
  ]),
  /* v10.1: HASZNÁLATI ÚTMUTATÓ — magyar és angol PDF kézikönyv megnyitása/letöltése.
     Új lapon nyílik (asztalin böngésző PDF-néző, telefonon rendszer-megjelenítő);
     a ⬇ gomb azonnali mentés. Első megnyitás után a service worker cache-eli → offline is elérhető. */
  card([
   h('h2', {
    className: 'font-black text-gray-800 mb-1'
   }, '📖 ' + window.t('Használati útmutató')),
   h('p', {
    className: 'text-xs text-gray-500 mb-3'
   }, window.t('A teljes kézikönyv PDF-ben. A könyv ikonnal megnyitod, a nyíllal letöltöd. Megnyitás után offline is elérhető marad.')),
   h('div', {
     className: 'grid grid-cols-1 md:grid-cols-2 gap-3'
    },
    /* v11.1.2: verziószám NÉLKÜLI, állandó fájlnevek — így a link soha nem törik el
       verzióváltáskor, és mindig a GitHub-on lévő legfrissebb PDF nyílik meg
       (a service worker network-first stratégiával tölti, offline cache-fallbackkel). */
    [{
      f: 'HBC_Felhasznaloi_Kezikonyv_HU.pdf',
      lb: '📘 Magyar kézikönyv (PDF)'
     },
     {
      f: 'HBC_User_Manual_EN.pdf',
      lb: '📗 English manual (PDF)'
     }
    ].map(m =>
     h('div', {
       key: m.f,
       className: 'flex items-stretch gap-2'
      },
      h('a', {
       href: m.f,
       target: '_blank',
       rel: 'noopener',
       className: 'ti flex-1 inline-flex items-center justify-center gap-2 px-3 py-3 rounded-xl font-bold text-sm min-h-[44px]',
       style: {
        textDecoration: 'none'
       }
      }, m.lb),
      h('a', {
       href: m.f,
       download: m.f,
       'aria-label': window.t('Letöltés') + ': ' + m.lb,
       className: 'ti inline-flex items-center justify-center px-4 rounded-xl font-black text-lg min-h-[44px]',
       style: {
        textDecoration: 'none'
       },
       title: window.t('Letöltés')
      }, '⬇')
     ))
   )
  ]),
  h('button', {
   onClick: () => onSave(s),
   className: 'w-full font-black text-white py-3 rounded-2xl shadow-lg',
   style: {
    background: 'linear-gradient(135deg,var(--hbc-c1,#4f46e5),var(--hbc-c2,#7c3aed))'
   }
  }, '✅ Beállítások mentése')
 );
}

/* ═══════════ v9: MAGYARORSZÁGON ELÉRHETŐ INZULINOK (legördülő listákhoz) ═══════════
   A lista tájékoztató jellegű – az „Egyéb (egyéni név)…" opcióval bármilyen
   készítménynév megadható. A kezelést mindig az orvos határozza meg! */
const RAPID_INSULINS = ['Humalog', 'NovoRapid', 'Fiasp', 'Apidra', 'Lyumjev', 'Actrapid', 'Insulin lispro Sanofi'];
const BASAL_INSULINS = ['Lantus', 'Abasaglar', 'Toujeo', 'Levemir', 'Tresiba', 'Semglee', 'Insulatard', 'Humulin N'];

/* v9: egyéni téma – a kiemelőszín második árnyalata (color-picker mellé) */
function shiftHue(hex, deg) {
 try {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16 & 255) / 255,
   g = (n >> 8 & 255) / 255,
   b = (n & 255) / 255;
  const max = Math.max(r, g, b),
   min = Math.min(r, g, b);
  let h0 = 0,
   s0 = 0;
  const l = (max + min) / 2;
  if (max !== min) {
   const d = max - min;
   s0 = l > 0.5 ? d / (2 - max - min) : d / (max + min);
   switch (max) {
    case r:
     h0 = (g - b) / d + (g < b ? 6 : 0);
     break;
    case g:
     h0 = (b - r) / d + 2;
     break;
    default:
     h0 = (r - g) / d + 4;
   }
   h0 /= 6;
  }
  h0 = (h0 + deg / 360) % 1;
  if (h0 < 0) h0 += 1;
  const hue2rgb = (p, q, t2) => {
   if (t2 < 0) t2 += 1;
   if (t2 > 1) t2 -= 1;
   if (t2 < 1 / 6) return p + (q - p) * 6 * t2;
   if (t2 < 1 / 2) return q;
   if (t2 < 2 / 3) return p + (q - p) * (2 / 3 - t2) * 6;
   return p;
  };
  let r2, g2, b2;
  if (s0 === 0) {
   r2 = g2 = b2 = l;
  } else {
   const q = l < 0.5 ? l * (1 + s0) : l + s0 - l * s0;
   const p = 2 * l - q;
   r2 = hue2rgb(p, q, h0 + 1 / 3);
   g2 = hue2rgb(p, q, h0);
   b2 = hue2rgb(p, q, h0 - 1 / 3);
  }
  const to = x => Math.round(x * 255).toString(16).padStart(2, '0');
  return '#' + to(r2) + to(g2) + to(b2);
 } catch (e) {
  return hex;
 }
}

/* v10: egyéni háttérszín — a választott színt lágy háttér-gradienssé keveri
   (világos módban fehérrel, sötét módban a sötét alaptónussal), a kártyák
   kontrasztja (fehér/sötétlila kártyaháttér) változatlan marad. */
function mixHex(hex, withHex, amt) {
 try {
  const a = parseInt(hex.slice(1), 16),
   b = parseInt(withHex.slice(1), 16);
  const ar = a >> 16 & 255,
   ag = a >> 8 & 255,
   ab = a & 255,
   br = b >> 16 & 255,
   bg = b >> 8 & 255,
   bb = b & 255;
  const to = x => Math.round(Math.max(0, Math.min(255, x))).toString(16).padStart(2, '0');
  return '#' + to(ar * (1 - amt) + br * amt) + to(ag * (1 - amt) + bg * amt) + to(ab * (1 - amt) + bb * amt);
 } catch (e) {
  return hex;
 }
}

function customBgVars(hex) {
 return {
  bg1: mixHex(hex, '#ffffff', 0.87),
  bg2: mixHex(hex, '#ffffff', 0.79),
  bg1Dark: mixHex(hex, '#0e0c1a', 0.82),
  bg2Dark: mixHex(hex, '#151226', 0.72)
 };
}

function App() {
 const [view, setView] = useState('dashboard');
 const [entries, setEntries] = useState(LOADED_ENTRIES);
 const [allFoods, setAllFoods] = useState(INIT_FOODS);
 const [editingEntry, setEditingEntry] = useState(null);
 const [viewingEntry, setViewingEntry] = useState(null); /* v14: követő részletnézet (szem ikon) */
 const [settings, setSettings] = useState(DEFAULT_SETTINGS);
 const [modal, setModal] = useState(null);
 const [followerData, setFollowerData] = useState(null); /* v7: követő mód adatai */
 const [toast, setToast] = useState(null); /* v7 UX: rövid pozitív visszajelzés */
 const [menuOpen, setMenuOpen] = useState(false); /* v9: mobil hamburger menü */
 const [headerH, setHeaderH] = useState(64); /* v10: mért fejléc-magasság — a menü ez alatt nyílik */
 const headerRef = useRef(null);
 useEffect(() => {
  const measure = () => {
   if (headerRef.current) setHeaderH(headerRef.current.offsetHeight);
  };
  measure();
  let ro;
  if (window.ResizeObserver && headerRef.current) {
   ro = new ResizeObserver(measure);
   ro.observe(headerRef.current);
  }
  window.addEventListener('resize', measure);
  return () => {
   window.removeEventListener('resize', measure);
   if (ro) ro.disconnect();
  };
 }, []);
 const showToast = msg => {
  setToast(msg);
  setTimeout(() => setToast(null), 3000);
 };
 const followerMode = window.HBC_SYNC && window.HBC_SYNC.cfg.mode === 'follower';

 const showAlert = (msg, onOk) => setModal({
  type: 'alert',
  msg,
  onOk: () => {
   setModal(null);
   onOk && onOk();
  }
 });
 const showConfirm = (msg, onOk, onCancel) => setModal({
  type: 'confirm',
  msg,
  onOk: () => {
   setModal(null);
   onOk && onOk();
  },
  onCancel: () => {
   setModal(null);
   onCancel && onCancel();
  }
 });

 useEffect(() => {
  const loadAll = () => {
   const se = localStorage.getItem('hbc-v5-entries');
   const sf = localStorage.getItem('hbc-v5-foods');
   const ss = localStorage.getItem('hbc-v5-settings');
   if (se) {
    try {
     setEntries(JSON.parse(se));
    } catch (e) {}
   }
   if (sf) {
    try {
     setAllFoods(JSON.parse(sf));
    } catch (e) {}
   }
   if (ss) {
    try {
     setSettings({
      ...DEFAULT_SETTINGS,
      ...JSON.parse(ss)
     });
    } catch (e) {}
   }
  };
  loadAll();
  /* v7: ha a localStorage kiürült volna, IndexedDB-ből helyreállítunk */
  if (window.HBC_STORE) window.HBC_STORE.restore().then(loadAll);
  /* v7: követő mód — Drive-ról érkező adatok fogadása */
  if (window.HBC_SYNC) {
   window.HBC_SYNC.setPayloadProvider(syncPayload); /* v11: mindig a friss helyi adat megy fel */
   window.HBC_SYNC.on('data', d => {
    if (!d) return;
    if (window.HBC_SYNC.cfg.mode === 'follower') {
     if (Array.isArray(d.entries)) setFollowerData(d);
     return;
    }
    /* v11 tulajdonos mód: a Drive-val összefésült napló átvétele a helyi tárba
       (közvetlen mentés — NEM saveEntries, hogy ne induljon körkörös feltöltés) */
    if (Array.isArray(d.entries)) {
     setEntries(d.entries);
     localStorage.setItem('hbc-v5-entries', JSON.stringify(d.entries));
    }
    if (Array.isArray(d.foods) && d.foods.length) {
     setAllFoods(d.foods);
     localStorage.setItem('hbc-v5-foods', JSON.stringify(d.foods));
    }
    if (d.settings && d.settings._mod) {
     setSettings({
      ...DEFAULT_SETTINGS,
      ...d.settings
     });
     localStorage.setItem('hbc-v5-settings', JSON.stringify(d.settings));
    }
    if (Array.isArray(d.deleted)) localStorage.setItem('hbc-v5-deleted', JSON.stringify(d.deleted));
   });
   window.HBC_SYNC.startPolling(); /* v11: tulajdonos módban is fut (induló + időzített szinkron) */
  }
 }, []);

 /* v7: követő módban a Drive-ról érkező napló jelenik meg (csak olvasható)
    v14 (korrekció): a fejléc FELIRATA (becenév) az effSettings-ből jön; a színtéma,
    háttér és sötét mód a Követő saját beállítása marad. */
 /* v14: kettős biztosítás — privát bejegyzés követőnél akkor sem jelenik meg,
    ha régebbi gyorsítótárból érkezne */
 const effEntries = (followerMode && followerData && Array.isArray(followerData.entries)) ? followerData.entries.filter(e => !(e && e.private)) : entries;
 const effSettings = (followerMode && followerData && followerData.settings) ? {
  ...DEFAULT_SETTINGS,
  ...followerData.settings,
  bgUnit: settings.bgUnit,
  lang: settings.lang
 } : settings;

 /* v7: nyelv, mértékegység, téma azonnali alkalmazása; v9: egyéni szín
    v14 (korrekció): követő módban CSAK a fejléc FELIRATA követi a Tulajdonost —
    a színtéma, a háttér és a világos/sötét mód a Követő SAJÁT beállítása marad. */
 useEffect(() => {
  if (settings.lang) window.HBC_I18N.setLang(settings.lang);
  window.bgU.setUnit(settings.bgUnit || 'mmol');
  const themes = {
   indigo: ['#4f46e5', '#7c3aed'],
   teal: ['#0d9488', '#0891b2'],
   rose: ['#e11d48', '#db2777']
  };
  let tc = themes[settings.theme] || themes.indigo;
  if (settings.theme === 'custom' && settings.customC1) tc = [settings.customC1, shiftHue(settings.customC1, 28)];
  document.documentElement.style.setProperty('--hbc-c1', tc[0]);
  document.documentElement.style.setProperty('--hbc-c2', tc[1]);
  /* v10: egyéni háttérszín — ha nincs beállítva, a CSS var()-fallback adja az alap háttért */
  if (settings.customBg) {
   const bv = customBgVars(settings.customBg);
   document.documentElement.style.setProperty('--hbc-bg1', bv.bg1);
   document.documentElement.style.setProperty('--hbc-bg2', bv.bg2);
   document.documentElement.style.setProperty('--hbc-bg1-dark', bv.bg1Dark);
   document.documentElement.style.setProperty('--hbc-bg2-dark', bv.bg2Dark);
  } else {
   document.documentElement.style.removeProperty('--hbc-bg1');
   document.documentElement.style.removeProperty('--hbc-bg2');
   document.documentElement.style.removeProperty('--hbc-bg1-dark');
   document.documentElement.style.removeProperty('--hbc-bg2-dark');
  }
  /* v7.1: sötét mód (kapcsolt vagy rendszerkövető) */
  const wantDark = settings.darkMode === 'dark' ||
   (settings.darkMode === 'auto' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.toggleAttribute('data-hbc-dark', !!wantDark);
  const mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  if (mq && settings.darkMode === 'auto') {
   const fn = e => document.documentElement.toggleAttribute('data-hbc-dark', e.matches);
   mq.addEventListener && mq.addEventListener('change', fn);
   return () => mq.removeEventListener && mq.removeEventListener('change', fn);
  }
 }, [settings]);

 /* v9: a CGM-mérések is a megosztott csomag részei → a hozzátartozói riasztás
    mindig a legfrissebb AZNAPI értéken alapul */
 const drivePush = (en, fo, se) => {
  if (window.HBC_SYNC) window.HBC_SYNC.push({
   entries: en,
   foods: fo,
   settings: se,
   deleted: getTombs(),
   cgm: (window.HBC_CGM ? window.HBC_CGM.getRange(subD(1), todayStr()) : [])
  });
 };
 const saveEntries = useCallback(arr => {
  setEntries(arr);
  localStorage.setItem('hbc-v5-entries', JSON.stringify(arr));
  drivePush(arr, allFoods, settings);
 }, [allFoods, settings]);
 const saveFoods = useCallback(arr => {
  setAllFoods(arr);
  localStorage.setItem('hbc-v5-foods', JSON.stringify(arr));
  drivePush(entries, arr, settings);
 }, [entries, settings]);
 const saveSettings = s0 => {
  const s = {
   ...s0,
   _mod: Date.now()
  };
  setSettings(s);
  localStorage.setItem('hbc-v5-settings', JSON.stringify(s));
  drivePush(entries, allFoods, s);
  showAlert('✅ Beállítások mentve!');
 };

 const addEntry = e => {
  const arr = [{
   ...e,
   id: Date.now(),
   _mod: Date.now()
  }, ...entries];
  saveEntries(arr);
  setView('dashboard');
  const low = settings.lowBG != null ? settings.lowBG : 3.9;
  const high = settings.highBG != null ? settings.highBG : 10.0;
  /* v9: hipo-figyelmeztetés CSAK aznapi mérésre — utólag rögzített (régebbi)
     érték nem vált riasztást */
  const isToday = getDate(e.timestamp) === todayStr();
  if (e.bloodGlucose && parseFloat(e.bloodGlucose) < low && isToday) {
   setTimeout(() => showAlert('🚨 ALACSONY VÉRCUKOR! Egyél 15 g gyorsan felszívódó szénhidrátot (pl. szőlőcukor, gyümölcslé), és 15 perc múlva mérj újra!'), 150);
  } else if (settings.motivation !== false) {
   /* v7 UX (Reciprocity): azonnali pozitív visszajelzés */
   if (e.bloodGlucose && parseFloat(e.bloodGlucose) >= low && parseFloat(e.bloodGlucose) <= high) {
    showToast('✅ ' + window.t('Szuper! Céltartományban vagy! 👏'));
   } else {
    const dCount = arr.filter(x => getDate(x.timestamp) === todayStr()).length;
    showToast('📝 ' + dCount + '. ' + (window.HBC_I18N.getLang() === 'en' ? 'entry today — keep it up!' : 'mai bejegyzés — csak így tovább!'));
   }
  }
 };
 const updateEntry = u => {
  saveEntries(entries.map(e => e.id === u.id ? {
   ...u,
   _mod: Date.now()
  } : e));
  setEditingEntry(null);
 };
 const deleteEntry = id => {
  showConfirm('Törlöd ezt a bejegyzést?', () => {
   addTomb(id, 'e');
   saveEntries(entries.filter(e => e.id !== id));
  });
 };
 const addFood = f => saveFoods([...allFoods, {
  ...f,
  id: 'c' + Date.now(),
  _mod: Date.now()
 }]);
 const updateFood = (id, u) => saveFoods(allFoods.map(f => f.id === id ? {
  ...f,
  ...u,
  _mod: Date.now()
 } : f));
 const deleteFood = id => {
  showConfirm('Törlöd ezt az ételt?', () => {
   addTomb(id, 'f');
   saveFoods(allFoods.filter(f => f.id !== id));
  });
 };

 const exportCSV = () => {
  const s = sortedByTS(entries);
  /* v12.3: + beadási idő oszlopok a végén (a régi importtal kompatibilis sorrendben) */
  const csv = [
   ['Időpont', 'Típus', 'Vércukor (' + window.bgU.label() + ')', 'CH (g)', (settings.rapidName || 'Humalog') + ' (E)', (settings.basalName || 'Lantus') + ' (E)', 'Jegyzetek', (settings.rapidName || 'Humalog') + ' beadás', (settings.basalName || 'Lantus') + ' beadás'].join(','),
   ...s.map(e => [new Date(e.timestamp).toLocaleString(window.HBC_LOCALE()), e.type || '', e.bloodGlucose ? window.bgU.disp(e.bloodGlucose) : '', e.carbs || '', e.insulinRapid || '', e.insulinLong || '', `"${(e.notes||'').replace(/"/g,'""')}"`, e.insulinRapidTime || '', e.insulinLongTime || ''].join(','))
  ].join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob(['﻿' + csv], {
   type: 'text/csv;charset=utf-8;'
  }));
  a.download = `HBC_v${APP_VERSION}_${todayStr()}.csv`;
  a.click();
  if (window.HBC_STORE) window.HBC_STORE.markBackup();
 };
 const importJSON = txt => {
  try {
   let arr = JSON.parse(txt);
   if (arr && !Array.isArray(arr) && Array.isArray(arr.entries)) arr = arr.entries;
   if (!Array.isArray(arr)) throw new Error(window.t('Nem tömb!'));
   const ids = new Set(entries.map(e => e.id));
   const newOnes = arr.filter(e => !ids.has(e.id));
   saveEntries([...entries, ...newOnes]);
   showAlert(`✅ ${newOnes.length} új bejegyzés importálva.`);
  } catch (err) {
   showAlert('❌ Hiba: ' + err.message);
  }
 };
 const importCSV = txt => {
  try {
   const lines = txt.split('\n').filter(l => l.trim());
   const parse = line => {
    const v = [];
    let cur = '',
     inQ = false;
    for (const c of line) {
     if (c === '"') {
      inQ = !inQ;
     } else if (c === ',' && !inQ) {
      v.push(cur.trim());
      cur = '';
     } else cur += c;
    }
    v.push(cur.trim());
    return v;
   };
   const imported = lines.slice(1).map((line, idx) => {
    const v = parse(line);
    let ts;
    /* v12.6: az importált idő helyi időként tárolódik (nem UTC-re konvertálva),
       így az órák a készülék időzónáját követik */
    try {
     const s = v[0].replace(/\.\s*/g, '-').trim();
     const m = s.match(/(\d{4})-(\d{1,2})-(\d{1,2})[T\s\-]+(\d{1,2}):(\d{2})/);
     const p2 = n => String(n).padStart(2, '0');
     ts = m ? `${m[1]}-${p2(+m[2])}-${p2(+m[3])}T${p2(+m[4])}:${m[5]}` : nowLocalDT();
    } catch (e) {
     ts = nowLocalDT();
    }
    /* v12.3: opcionális beadási idő oszlopok (v[7], v[8]) beolvasása */
    return {
     id: Date.now() + idx,
     timestamp: ts,
     type: v[1] || 'Étkezés',
     mealType: '',
     bloodGlucose: v[2] ? parseFloat(v[2]) : null,
     carbs: v[3] ? parseFloat(v[3]) : null,
     insulinRapid: v[4] ? parseFloat(v[4]) : null,
     insulinLong: v[5] ? parseFloat(v[5]) : null,
     notes: (v[6] || '').replace(/^"|"$/g, ''),
     insulinRapidTime: (v[7] && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(v[7])) ? v[7].slice(0, 16) : null,
     insulinLongTime: (v[8] && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(v[8])) ? v[8].slice(0, 16) : null,
     foods: []
    };
   });
   const ids = new Set(entries.map(e => e.id));
   const newOnes = imported.filter(e => !ids.has(e.id));
   saveEntries([...newOnes, ...entries]);
   showAlert(`✅ CSV: ${newOnes.length} új bejegyzés importálva.`);
  } catch (err) {
   showAlert('❌ CSV hiba: ' + err.message);
  }
 };

 const tabs = [{
   id: 'dashboard',
   ic: 'home',
   f: 'Áttekintés'
  },
  {
   id: 'charts',
   ic: 'chart',
   f: 'Grafikonok'
  },
  {
   id: 'entries',
   ic: 'list',
   f: 'Bejegyzések'
  },
  {
   id: 'stats',
   ic: 'pie',
   f: 'Statisztika'
  },
  {
   id: 'foods',
   ic: 'food',
   f: 'Ételek'
  },
  {
   id: 'sync',
   ic: 'sync',
   f: 'Szinkron'
  },
  {
   id: 'settings',
   ic: 'gear',
   f: 'Beállítások'
  },
 ];
 const visTabs = tabs.filter(tb => !(followerMode && (tb.id === 'foods')));
 const go = id => {
  setView(id);
  setMenuOpen(false);
 };

 /* ═══ v12: SOS-lap — kézi megnyitás + automatikus riasztás kritikusan alacsony értéknél ═══ */
 const [sosOpen, setSosOpen] = useState(false);
 const [sosAuto, setSosAuto] = useState(null); /* {v,ts} — az aznapi kritikus mérés */
 useEffect(() => {
  try {
   const low = effSettings.lowBG != null ? effSettings.lowBG : 3.9;
   const d = new Date();
   const todayISO = [d.getFullYear(), String(d.getMonth() + 1).padStart(2, '0'), String(d.getDate()).padStart(2, '0')].join('-');
   const manual = (effEntries || []).filter(e => e && e.bloodGlucose).map(e => ({
    ts: e.timestamp,
    v: parseFloat(e.bloodGlucose)
   }));
   const cgm = (window.HBC_CGM ? window.HBC_CGM.getRange(todayISO, todayISO) : []).map(r => ({
    ts: r.ts,
    v: parseFloat(r.v)
   }));
   /* csak AZNAPI mérés riaszt — régebbi (utólag rögzített) érték soha */
   const all = manual.concat(cgm).filter(r => !isNaN(r.v) && String(r.ts).slice(0, 10) === todayISO);
   if (!all.length) return;
   const newest = all.sort((a, b) => new Date(b.ts) - new Date(a.ts))[0];
   if (newest.v >= low) return;
   if (localStorage.getItem('hbc-sos-seen') === String(newest.ts)) return; /* ugyanarra a mérésre csak egyszer */
   setSosAuto(newest);
   if ('Notification' in window && Notification.permission === 'granted') {
    try {
     new Notification('🆘 HBC SOS — ' + window.t('Riasztás alacsony értéknél'), {
      body: '🩸 ' + window.bgU.disp(newest.v) + ' ' + window.bgU.label(),
      icon: 'icons/icon-192.png',
      tag: 'hbc-sos'
     });
    } catch (err) {}
   }
  } catch (e) {}
 }, [effEntries, effSettings.lowBG]);
 const closeSOS = () => {
  if (sosAuto) {
   try {
    localStorage.setItem('hbc-sos-seen', String(sosAuto.ts));
   } catch (e) {}
   setSosAuto(null);
  }
  setSosOpen(false);
 };

 return h('div', {
   className: 'min-h-screen',
   style: {
    background: 'linear-gradient(160deg,var(--hbc-bg1,#eef2ff),var(--hbc-bg2,#f5f3ff))'
   }
  },
  // ═══ Fejléc: v9 — TypeOneDiab logó + hamburger (mobil) ═══
  h('div', {
    ref: headerRef,
    className: 'bg-white/80 backdrop-blur-md shadow sticky top-0 z-50 border-b border-indigo-100'
   },
   h('div', {
     className: 'max-w-5xl mx-auto px-3 py-2 flex items-center justify-between gap-2'
    },
    h('div', {
      className: 'flex items-center gap-2 md:gap-3 min-w-0'
     },
     h('img', {
      src: 'icons/TypeOneDiab_logo.png',
      alt: 'TypeOneDiab logo',
      className: 'hbc-logo'
     }),
     h('div', {
       className: 'min-w-0'
      },
      /* v14: a fejléc FELIRATA követő módban is ugyanaz, mint a Tulajdonosnál
         (— Becenév naplója); a színtéma/háttér a Követő saját beállítása */
      h('h1', {
        className: 'text-lg md:text-2xl font-black truncate',
        style: {
         background: 'linear-gradient(135deg,var(--hbc-c1,#4f46e5),var(--hbc-c2,#7c3aed))',
         WebkitBackgroundClip: 'text',
         WebkitTextFillColor: 'transparent'
        }
       },
       window.t('HBC Diabétesz Napló')),
      h('p', {
       className: 'text-xs text-indigo-400 font-semibold'
      }, 'v' + APP_VERSION + ' Type 1 Diabetes APP ⚡' + (effSettings.nickname ?
       (window.HBC_I18N.getLang() === 'en' ? ' — ' + effSettings.nickname + "'s diary" : ' — ' + effSettings.nickname + ' naplója') : ''))
     )
    ),
    h('div', {
      className: 'flex items-center gap-2 shrink-0'
     },
     /* v12: kompakt SOS gomb — csak asztali nézetben (mobilon a hamburger menüben van) */
     h('button', {
      onClick: () => setSosOpen(true),
      type: 'button',
      'aria-label': 'SOS',
      title: '🆘 SOS — ' + window.t('Vészhelyzet'),
      className: 'hidden md:block font-black text-white px-3 py-2 rounded-xl text-sm shadow',
      style: {
       background: '#dc2626'
      }
     }, '🆘'),
     !followerMode && h('button', {
      onClick: () => setView('add'),
      type: 'button',
      className: 'hidden md:block font-bold text-white px-4 py-2 rounded-xl text-sm shadow-lg',
      style: {
       background: 'linear-gradient(135deg,var(--hbc-c1,#4f46e5),var(--hbc-c2,#7c3aed))'
      }
     }, '➕ Új'),
     /* v9: hamburger menü — csak mobilon */
     h('button', {
       onClick: () => setMenuOpen(o => !o),
       type: 'button',
       'aria-label': window.t('Menü'),
       className: 'md:hidden p-2 rounded-xl ' + (menuOpen ? 'ta' : 'ti')
      },
      h(Icon, {
       name: menuOpen ? 'x' : 'menu',
       size: 24
      }))
    )
   )
  ),
  // ═══ Asztali nézet: minden oldalválasztó gomb a felső sávban — v10.1: a mért fejlécmagassághoz tapad ═══
  h('div', {
    className: 'hidden md:block bg-white/75 backdrop-blur-md border-b border-indigo-100 sticky z-40',
    style: {
     top: headerH + 'px'
    }
   },
   h('div', {
     className: 'max-w-5xl mx-auto px-2 py-2 flex gap-1.5'
    },
    visTabs.map(tb => h('button', {
      key: tb.id,
      onClick: () => go(tb.id),
      type: 'button',
      className: `flex-1 min-w-0 flex items-center justify-center gap-2 px-2 py-2.5 rounded-xl font-bold text-sm text-center leading-snug transition-all ${view===tb.id?'ta':'ti hover:bg-indigo-100'}`
     },
     h(Icon, {
      name: tb.ic,
      size: 18
     }), h('span', null, window.t(tb.f))
    ))
   )
  ),
  // ═══ v10: mobil hamburger menü — a fejléc ALATT nyílik, nem takarja a fejlécet ═══
  menuOpen && h('div', {
    className: 'md:hidden fixed inset-x-0 bottom-0 z-[95] bg-black/40',
    style: {
     top: 'calc(' + headerH + 'px + env(safe-area-inset-top,0px))'
    },
    onClick: e => {
     if (e.target === e.currentTarget) setMenuOpen(false);
    }
   },
   h('div', {
     className: 'hbc-menu',
     style: {
      maxHeight: 'calc(100vh - ' + headerH + 'px - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px) - 16px)',
      overflowY: 'auto'
     }
    },
    h('p', {
     className: 'text-xs font-black text-gray-400 uppercase tracking-wide mb-2'
    }, 'Oldalak'),
    h('div', {
      className: 'grid grid-cols-2 gap-2'
     },
     visTabs.map(tb => h('button', {
       key: tb.id,
       onClick: () => go(tb.id),
       type: 'button',
       className: `flex items-center gap-2 px-3 py-3 rounded-xl font-bold text-sm ${view===tb.id?'ta':'ti'}`
      },
      h(Icon, {
       name: tb.ic,
       size: 18
      }), window.t(tb.f)
     ))
    ),
    !followerMode && h('button', {
     onClick: () => go('add'),
     type: 'button',
     className: 'mt-3 w-full font-black text-white py-3 rounded-2xl shadow-lg',
     style: {
      background: 'linear-gradient(135deg,var(--hbc-c1,#4f46e5),var(--hbc-c2,#7c3aed))'
     }
    }, '➕ Új bejegyzés'),
    /* v12: piros SOS gomb a hamburger menü alján */
    h('button', {
     onClick: () => {
      setSosOpen(true);
      setMenuOpen(false);
     },
     type: 'button',
     className: 'mt-2 w-full font-black text-white py-3 rounded-2xl shadow-lg',
     style: {
      background: '#dc2626'
     }
    }, '🆘 SOS — ' + window.t('Vészhelyzet'))
   )
  ),
  // v7: követő mód sáv
  followerMode && h('div', {
    className: 'bg-purple-100 border-b border-purple-200'
   },
   h('div', {
     className: 'max-w-5xl mx-auto px-3 py-2 flex items-center justify-between gap-2 text-xs font-bold text-purple-800'
    },
    h('span', null, '👀 ' + window.t('Követő mód (más naplóját követem)') + (window.HBC_SYNC.cfg.lastSync ? ' · ' + window.t('Utolsó szinkron') + ': ' + new Date(window.HBC_SYNC.cfg.lastSync).toLocaleTimeString() : '')),
    h('button', {
     onClick: () => window.HBC_SYNC.pull(true)
      .then(() => showToast('✅ ' + window.t('Szinkron kész!')))
      .catch(e => showAlert('❌ ' + window.t('Szinkronhiba') + ': ' + window.t((e && e.message) || 'Ismeretlen hiba.'))),
     className: 'px-3 py-1 rounded-lg bg-purple-600 text-white'
    }, window.t('Szinkron most'))
   )
  ),
  // Tartalom (mobilon alul hely az alsó navigációs sávnak)
  h('div', {
    className: 'max-w-5xl mx-auto px-2 md:px-4 py-4 md:py-6 pb-28 md:pb-6'
   },
   view === 'dashboard' && h(Dashboard, {
    entries: effEntries,
    /* v14: követő módban a szem ikon a csak-olvasó részletnézetet nyitja */
    onEdit: followerMode ? setViewingEntry : setEditingEntry,
    onDelete: followerMode ? () => {} : deleteEntry,
    settings: effSettings,
    onAdd: followerMode ? null : () => setView('add')
   }),
   view === 'charts' && h(Charts, {
    entries: effEntries,
    settings: effSettings
   }),
   view === 'add' && !followerMode && h(AddEntry, {
    onSave: addEntry,
    onCancel: () => setView('dashboard'),
    allFoods,
    onAddFood: addFood,
    entries,
    settings,
    showAlert,
    showConfirm
   }),
   view === 'entries' && h(EntriesList, {
    entries: effEntries,
    onEdit: followerMode ? setViewingEntry : setEditingEntry,
    onDelete: followerMode ? () => {} : deleteEntry,
    settings: effSettings
   }),
   view === 'stats' && h(Statistics, {
    entries: effEntries,
    settings: effSettings
   }),
   view === 'foods' && h(FoodManager, {
    allFoods,
    onAdd: addFood,
    onUpdate: updateFood,
    onDelete: deleteFood,
    showAlert,
    showConfirm
   }),
   view === 'sync' && h(SyncManager, {
    entries,
    saveEntries,
    exportCSV,
    importJSON,
    importCSV,
    showAlert,
    settings,
    allFoods
   }),
   view === 'settings' && h(Settings, {
    settings,
    onSave: saveSettings
   })
  ),
  // ═══ v8/v9: alsó navigációs sáv — csak mobilon, a leggyakoribb oldalak ═══
  h('div', {
    className: 'md:hidden bnav fixed bottom-0 left-0 right-0 z-50'
   },
   h('div', {
     className: 'flex items-stretch justify-around px-1 py-1.5'
    },
    [{
      id: 'dashboard',
      ic: 'home',
      f: 'Áttekintés'
     },
     {
      id: 'charts',
      ic: 'chart',
      f: 'Grafikonok'
     },
     !followerMode ? {
      id: 'add',
      ic: 'plus',
      f: 'Új'
     } : null,
     {
      id: 'entries',
      ic: 'list',
      f: 'Bejegyzések'
     },
     {
      id: 'stats',
      ic: 'pie',
      f: 'Statisztika'
     }
    ].filter(Boolean).map(tb =>
     h('button', {
       key: tb.id,
       onClick: () => go(tb.id),
       type: 'button',
       className: 'flex flex-col items-center gap-0.5 px-2 py-1 flex-1 ' + (view === tb.id ? 'bnav-a' : 'bnav-i')
      },
      h(Icon, {
       name: tb.ic,
       size: tb.id === 'add' ? 24 : 20,
       sw: tb.id === 'add' ? 2.5 : 2
      }),
      h('span', {
       className: 'text-[10px] font-bold leading-none'
      }, window.t(tb.f))
     ))
   )
  ),
  /* v12: SOS-lap — kézi megnyitásra vagy automatikus riasztásra */
  (sosOpen || sosAuto) && h(SOSPage, {
   settings: effSettings,
   reading: sosAuto,
   autoAlert: !!sosAuto,
   onClose: closeSOS
  }),
  editingEntry && h(EditModal, {
   entry: editingEntry,
   onSave: updateEntry,
   onCancel: () => setEditingEntry(null),
   settings,
   showConfirm,
   allFoods,
   entries
  }),
  /* v14: követő részletnézet — szem ikonra nyílik, csak olvasható */
  viewingEntry && h(ViewEntryModal, {
   entry: viewingEntry,
   onClose: () => setViewingEntry(null),
   settings: effSettings
  }),
  modal && h(ModalDialog, {
   modal
  }),
  toast && h('div', {
   className: 'fixed bottom-20 md:bottom-5 left-1/2 -translate-x-1/2 z-[110] px-5 py-3 rounded-2xl shadow-2xl text-white text-sm font-bold',
   style: {
    background: 'linear-gradient(135deg,var(--hbc-c1,#4f46e5),var(--hbc-c2,#7c3aed))'
   }
  }, toast)
 );
}

ReactDOM.createRoot(document.getElementById('root')).render(h(App, null));