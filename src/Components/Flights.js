//Get data from this API
//https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=44.786568&lng=44.786568&fDstL=0&fDstU=1000
//I could not overcome CORS security, I download JSON data here.

export default () => ({
    "src": 1,
    "feeds": [],
    "srcFeed": 1,
    "showSil": true,
    "showFlg": true,
    "showPic": true,
    "flgH": 20,
    "flgW": 85,
    "acList": [
        {
            "Id": 11377161,
            "Rcvr": 1,
            "HasSig": false,
            "Icao": "AD9A09",
            "Bad": false,
            "Reg": "N976BA",
            "FSeen": "/Date(1528928163820)/",
            "TSecs": 150,
            "CMsgs": 43,
            "Alt": 37000,
            "GAlt": 37021,
            "InHg": 29.9409447,
            "AltT": 0,
            "Call": "CMB164",
            "Lat": 41.393097,
            "Long": 44.802807,
            "PosTime": 1528928312897,
            "Mlat": false,
            "Tisb": false,
            "Spd": 509,
            "Trak": 99.1,
            "TrkH": false,
            "Type": "B744",
            "Mdl": "1991 BOEING 747-4B5",
            "Man": "Boeing",
            "CNum": "25275",
            "Op": "BOEING AIRCRAFT HOLDING CO     - SEATTLE, WA",
            "OpIcao": "CKS",
            "Sqk": "",
            "Vsi": -64,
            "VsiT": 0,
            "Dst": 377.34,
            "Brng": 179.8,
            "WTC": 3,
            "Species": 1,
            "Engines": "4",
            "EngType": 3,
            "EngMount": 0,
            "Mil": false,
            "Cou": "United States",
            "HasPic": false,
            "Interested": false,
            "FlightsCount": 0,
            "Gnd": false,
            "SpdTyp": 0,
            "CallSus": false,
            "Trt": 2,
            "Year": "1991"
},
        {},
        {
            "Id": 4739317,
            "Rcvr": 1,
            "HasSig": true,
            "Sig": 55,
            "Icao": "4850F5",
            "Bad": false,
            "Reg": "PH-BVO",
            "FSeen": "/Date(1528928127742)/",
            "TSecs": 186,
            "CMsgs": 61,
            "Alt": 31000,
            "GAlt": 30873,
            "InHg": 29.7933064,
            "AltT": 0,
            "Lat": 48.958649,
            "Long": 44.099121,
            "PosTime": 1528928313960,
            "Mlat": false,
            "Tisb": false,
            "Spd": 523.8,
            "Trak": 137.6,
            "TrkH": false,
            "Type": "B773",
            "Mdl": "Boeing 777 306ER",
            "Man": "Boeing",
            "CNum": "35946",
            "Op": "KLM Royal Dutch Airlines",
            "OpIcao": "KLM",
            "Sqk": "",
            "Vsi": 0,
            "VsiT": 0,
            "Dst": 466.84,
            "Brng": 353.8,
            "WTC": 3,
            "Species": 1,
            "Engines": "2",
            "EngType": 3,
            "EngMount": 0,
            "Mil": false,
            "Cou": "Netherlands",
            "HasPic": false,
            "Interested": false,
            "FlightsCount": 0,
            "Gnd": false,
            "SpdTyp": 0,
            "CallSus": false,
            "Trt": 2,
            "Year": "2015"
},
        {
            "Id": 5254349,
            "Rcvr": 1,
            "HasSig": true,
            "Sig": 26,
            "Icao": "502CCD",
            "Bad": false,
            "Reg": "YL-CSD",
            "FSeen": "/Date(1528928091446)/",
            "TSecs": 222,
            "CMsgs": 58,
            "Alt": 38975,
            "GAlt": 38963,
            "InHg": 29.9080849,
            "AltT": 0,
            "TAlt": 39008,
            "Call": "BTI732",
            "Lat": 49.067781,
            "Long": 43.946469,
            "PosTime": 1528928309131,
            "Mlat": false,
            "Tisb": false,
            "Spd": 491.2,
            "Trak": 137.5,
            "TrkH": false,
            "TTrk": 130.078125,
            "Type": "BCS3",
            "Mdl": "Bombardier C Series 300",
            "Man": "Bombardier",
            "CNum": "55006",
            "Op": "Air Baltic",
            "OpIcao": "BTI",
            "Sqk": "4305",
            "Help": false,
            "Vsi": -64,
            "VsiT": 0,
            "Dst": 480.3,
            "Brng": 352.7,
            "WTC": 2,
            "Species": 1,
            "Engines": "2",
            "EngType": 3,
            "EngMount": 0,
            "Mil": false,
            "Cou": "Latvia",
            "HasPic": false,
            "Interested": false,
            "FlightsCount": 0,
            "Gnd": false,
            "SpdTyp": 0,
            "CallSus": false,
            "Trt": 5,
            "Year": "2017"
},
        {
            "Id": 4343176,
            "Rcvr": 1,
            "HasSig": false,
            "Icao": "424588",
            "Bad": false,
            "Reg": "VQ-BSM",
            "FSeen": "/Date(1528927877916)/",
            "TSecs": 436,
            "CMsgs": 116,
            "Alt": 34000,
            "GAlt": 33785,
            "InHg": 29.7047253,
            "AltT": 0,
            "Call": "LLM9311",
            "Lat": 45.801628,
            "Long": 40.056358,
            "PosTime": 1528928284241,
            "Mlat": false,
            "Tisb": false,
            "Spd": 454,
            "Trak": 25,
            "TrkH": false,
            "Type": "A321",
            "Mdl": "Airbus A321 231",
            "Man": "Airbus",
            "CNum": "1967",
            "Op": "Yamal Airlines",
            "OpIcao": "LLM",
            "Sqk": "2512",
            "Help": false,
            "Vsi": 64,
            "VsiT": 0,
            "Dst": 386.77,
            "Brng": 288.6,
            "WTC": 2,
            "Species": 1,
            "Engines": "2",
            "EngType": 3,
            "EngMount": 0,
            "Mil": false,
            "Cou": "Bermuda",
            "HasPic": false,
            "Interested": false,
            "FlightsCount": 0,
            "Gnd": false,
            "SpdTyp": 0,
            "CallSus": false,
            "Trt": 2,
            "Year": "2003"
},
        {
            "Id": 4739575,
            "Rcvr": 1,
            "HasSig": true,
            "Sig": 92,
            "Icao": "4851F7",
            "Bad": false,
            "Reg": "PH-BVU",
            "FSeen": "/Date(1528927619808)/",
            "TSecs": 694,
            "CMsgs": 324,
            "Alt": 33000,
            "GAlt": 32873,
            "InHg": 29.7933064,
            "AltT": 0,
            "TAlt": 32992,
            "Call": "KLM809",
            "Lat": 48.012543,
            "Long": 45.121399,
            "PosTime": 1528928313944,
            "Mlat": false,
            "Tisb": false,
            "Spd": 517.5,
            "Trak": 146.2,
            "TrkH": false,
            "TTrk": 137.109375,
            "Type": "B77W",
            "Mdl": "Boeing 777 300ER",
            "Man": "Boeing",
            "CNum": "61702",
            "From": "EHAM Amsterdam Airport Schiphol, Netherlands",
            "To": "WIII Soekarno-Hatta, Jakarta, Indonesia",
            "Stops": [
"WMKK Kuala Lumpur, Malaysia"
],
            "Op": "KLM Royal Dutch Airlines",
            "OpIcao": "KLM",
            "Sqk": "0172",
            "Help": false,
            "Vsi": 0,
            "VsiT": 0,
            "Dst": 359.63,
            "Brng": 4,
            "WTC": 3,
            "Species": 1,
            "Engines": "2",
            "EngType": 3,
            "EngMount": 0,
            "Mil": false,
            "Cou": "Netherlands",
            "HasPic": false,
            "Interested": false,
            "FlightsCount": 0,
            "Gnd": false,
            "SpdTyp": 0,
            "CallSus": false,
            "Trt": 5,
            "Year": "2017"
},
        {
            "Id": 4953742,
            "Rcvr": 1,
            "HasSig": false,
            "Icao": "4B968E",
            "Bad": false,
            "Reg": "TC-ETN",
            "FSeen": "/Date(1528927607340)/",
            "TSecs": 707,
            "CMsgs": 110,
            "Alt": 34000,
            "GAlt": 33844,
            "InHg": 29.7637787,
            "AltT": 0,
            "Call": "KKK6637",
            "Lat": 46.005901,
            "Long": 41.154922,
            "PosTime": 1528928306350,
            "Mlat": false,
            "Tisb": false,
            "Spd": 468,
            "Trak": 36.7,
            "TrkH": false,
            "Type": "A321",
            "Mdl": "Airbus A321 131",
            "Man": "Airbus",
            "CNum": "614",
            "Op": "AtlasGlobal",
            "OpIcao": "KKK",
            "Sqk": "",
            "Vsi": 64,
            "VsiT": 0,
            "Dst": 314.27,
            "Brng": 296.8,
            "WTC": 2,
            "Species": 1,
            "Engines": "2",
            "EngType": 3,
            "EngMount": 0,
            "Mil": false,
            "Cou": "Turkey",
            "HasPic": false,
            "Interested": false,
            "FlightsCount": 0,
            "Gnd": false,
            "SpdTyp": 0,
            "CallSus": false,
            "Trt": 2,
            "Year": "1996"
},
        {
            "Id": 4342559,
            "Rcvr": 1,
            "HasSig": false,
            "Icao": "42431F",
            "Bad": false,
            "Reg": "VP-BGR",
            "FSeen": "/Date(1528927328936)/",
            "TSecs": 985,
            "CMsgs": 291,
            "Alt": 36000,
            "GAlt": 35844,
            "InHg": 29.7637787,
            "AltT": 0,
            "Lat": 46.319733,
            "Long": 41.493484,
            "PosTime": 1528928293335,
            "Mlat": false,
            "Tisb": false,
            "Spd": 437,
            "Trak": 37.1,
            "TrkH": false,
            "Type": "B738",
            "Mdl": "Boeing 737NG 800/W",
            "Man": "Boeing",
            "CNum": "41228",
            "Op": "Rossiya Russian Airlines",
            "OpIcao": "SDM",
            "Sqk": "2511",
            "Help": false,
            "Vsi": 0,
            "VsiT": 0,
            "Dst": 307.87,
            "Brng": 304.8,
            "WTC": 2,
            "Species": 1,
            "Engines": "2",
            "EngType": 3,
            "EngMount": 0,
            "Mil": false,
            "Cou": "United Kingdom",
            "HasPic": false,
            "Interested": false,
            "FlightsCount": 0,
            "Gnd": false,
            "SpdTyp": 0,
            "CallSus": false,
            "Trt": 2,
            "Year": "2016"
},
        {
            "Id": 6828588,
            "Rcvr": 1,
            "HasSig": false,
            "Icao": "68322C",
            "Bad": false,
            "Reg": "UP-B6703",
            "FSeen": "/Date(1528927089506)/",
            "TSecs": 1224,
            "CMsgs": 132,
            "Alt": 36000,
            "GAlt": 35903,
            "InHg": 29.822834,
            "AltT": 0,
            "Call": "VSV482",
            "Lat": 45.143845,
            "Long": 44.885513,
            "PosTime": 1528928311006,
            "Mlat": false,
            "Tisb": false,
            "Spd": 455,
            "Trak": 248.2,
            "TrkH": false,
            "Type": "B763",
            "Mdl": "Boeing 767 332ER",
            "Man": "Boeing",
            "CNum": "30597",
            "Op": "Sunday Airlines",
            "Sqk": "3441",
            "Help": false,
            "Vsi": 0,
            "VsiT": 0,
            "Dst": 40.48,
            "Brng": 11.1,
            "WTC": 3,
            "Species": 1,
            "Engines": "2",
            "EngType": 3,
            "EngMount": 0,
            "Mil": false,
            "Cou": "Kazakhstan",
            "HasPic": false,
            "Interested": false,
            "FlightsCount": 0,
            "Gnd": false,
            "SpdTyp": 0,
            "CallSus": false,
            "Trt": 2,
            "Year": "2000"
},
        {
            "Id": 5308544,
            "Rcvr": 1,
            "HasSig": true,
            "Sig": 5,
            "Icao": "510080",
            "Bad": false,
            "Reg": "EW-400PO",
            "FSeen": "/Date(1528926668409)/",
            "TSecs": 1646,
            "CMsgs": 630,
            "Alt": 35000,
            "GAlt": 35012,
            "InHg": 29.93171,
            "AltT": 0,
            "TAlt": 35008,
            "Call": "BRU739",
            "Lat": 46.287689,
            "Long": 46.767995,
            "PosTime": 1528928313944,
            "Mlat": false,
            "Tisb": false,
            "Spd": 468.8,
            "Trak": 147.6,
            "TrkH": false,
            "Type": "E190",
            "Mdl": "Embraer EMB-195 LR",
            "Man": "Embraer",
            "CNum": "19000668",
            "From": "UMMS Minsk, Belarus",
            "To": "UBBB Heydar Aliyev, Baku, Azerbaijan",
            "Op": "Belavia",
            "OpIcao": "BRU",
            "Sqk": "6205",
            "Help": false,
            "Vsi": 0,
            "VsiT": 1,
            "Dst": 227.31,
            "Brng": 42.1,
            "WTC": 2,
            "Species": 1,
            "Engines": "2",
            "EngType": 3,
            "EngMount": 0,
            "Mil": false,
            "Cou": "Belarus",
            "HasPic": false,
            "Interested": false,
            "FlightsCount": 0,
            "Gnd": false,
            "SpdTyp": 0,
            "CallSus": false,
            "Trt": 5,
            "Year": "2014"
},
        {
            "Id": 5024984,
            "Rcvr": 1,
            "HasSig": true,
            "Sig": 33,
            "Icao": "4CACD8",
            "Bad": false,
            "Reg": "EI-GCZ",
            "FSeen": "/Date(1528925672525)/",
            "TSecs": 2641,
            "CMsgs": 618,
            "Alt": 37000,
            "GAlt": 36873,
            "InHg": 29.7933064,
            "AltT": 0,
            "Call": "RSY4122",
            "Lat": 48.998703,
            "Long": 44.52463,
            "PosTime": 1528928313944,
            "Mlat": false,
            "Tisb": false,
            "Spd": 448.8,
            "Trak": 28.6,
            "TrkH": false,
            "Type": "A332",
            "Mdl": "Airbus A330 223",
            "Man": "Airbus",
            "CNum": "739",
            "Op": "I-Fly",
            "OpIcao": "RSY",
            "Sqk": "5043",
            "Help": false,
            "Vsi": 0,
            "VsiT": 0,
            "Dst": 468.79,
            "Brng": 357.7,
            "WTC": 3,
            "Species": 1,
            "Engines": "2",
            "EngType": 3,
            "EngMount": 0,
            "Mil": false,
            "Cou": "Ireland",
            "HasPic": false,
            "Interested": false,
            "FlightsCount": 0,
            "Gnd": false,
            "SpdTyp": 0,
            "CallSus": false,
            "Trt": 2,
            "Year": "2006"
},
        {
            "Id": 4342661,
            "Rcvr": 1,
            "HasSig": false,
            "Icao": "424385",
            "Bad": false,
            "Reg": "VP-BPT",
            "FSeen": "/Date(1528925454199)/",
            "TSecs": 2860,
            "CMsgs": 640,
            "Alt": 37000,
            "GAlt": 37012,
            "InHg": 29.93171,
            "AltT": 0,
            "TAlt": 36992,
            "Call": "PBD365",
            "Lat": 49.512308,
            "Long": 44.951823,
            "PosTime": 1528928302428,
            "Mlat": false,
            "Tisb": false,
            "Spd": 447.5,
            "Trak": 28.6,
            "TrkH": false,
            "TTrk": 14.765625,
            "Type": "B738",
            "Mdl": "Boeing 737NG 800/W",
            "Man": "Boeing",
            "CNum": "63405",
            "From": "URSS Sochi, Russia",
            "To": "USPP Bolshoye Savino, Perm, Russia",
            "Op": "Pobeda",
            "OpIcao": "PBD",
            "Sqk": "2456",
            "Help": false,
            "Vsi": -64,
            "VsiT": 1,
            "Dst": 525.63,
            "Brng": 1.3,
            "WTC": 2,
            "Species": 1,
            "Engines": "2",
            "EngType": 3,
            "EngMount": 0,
            "Mil": false,
            "Cou": "United Kingdom",
            "HasPic": false,
            "Interested": false,
            "FlightsCount": 0,
            "Gnd": false,
            "SpdTyp": 0,
            "CallSus": false,
            "Trt": 5,
            "Year": "2018"
},
        {
            "Id": 6293581,
            "Rcvr": 1,
            "HasSig": true,
            "Sig": 13,
            "Icao": "60084D",
            "Bad": false,
            "Reg": "4K-AZ77",
            "FSeen": "/Date(1528923796603)/",
            "TSecs": 4517,
            "CMsgs": 582,
            "Alt": 35050,
            "GAlt": 34923,
            "InHg": 29.7933064,
            "AltT": 0,
            "Call": "AHY853",
            "Lat": 47.646744,
            "Long": 45.482094,
            "PosTime": 1528928313944,
            "Mlat": false,
            "Tisb": false,
            "Spd": 470.7,
            "Trak": 146.6,
            "TrkH": false,
            "Type": "A320",
            "Mdl": "Airbus A320 214",
            "Man": "Airbus",
            "CNum": "2846",
            "From": "UUDD Domodedovo, Moscow, Russia",
            "To": "UBBB Heydar Aliyev, Baku, Azerbaijan",
            "Op": "Azerbaijan Airlines",
            "OpIcao": "AHY",
            "Sqk": "2101",
            "Help": false,
            "Vsi": 64,
            "VsiT": 0,
            "Dst": 322.5,
            "Brng": 9.3,
            "WTC": 2,
            "Species": 1,
            "Engines": "2",
            "EngType": 3,
            "EngMount": 0,
            "Mil": false,
            "Cou": "Azerbaijan",
            "HasPic": false,
            "Interested": false,
            "FlightsCount": 0,
            "Gnd": false,
            "SpdTyp": 0,
            "CallSus": false,
            "Trt": 2,
            "Year": "2006"
},
        {
            "Id": 4344069,
            "Rcvr": 1,
            "HasSig": false,
            "Icao": "424905",
            "Bad": false,
            "Reg": "VQ-BJH",
            "FSeen": "/Date(1528923612260)/",
            "TSecs": 4702,
            "CMsgs": 624,
            "Alt": 37000,
            "GAlt": 36903,
            "InHg": 29.822834,
            "AltT": 0,
            "Call": "UTA745",
            "Lat": 47.17385,
            "Long": 45.938697,
            "PosTime": 1528928272397,
            "Mlat": false,
            "Tisb": false,
            "Spd": 480.7,
            "Trak": 147,
            "TrkH": false,
            "Type": "B738",
            "Mdl": "Boeing 737NG 8AS/W",
            "Man": "Boeing",
            "CNum": "32780",
            "From": "UUWW Vnukovo, Moscow, Russia",
            "To": "UBBB Heydar Aliyev, Baku, Azerbaijan",
            "Op": "UT air",
            "OpIcao": "UTA",
            "Sqk": "1516",
            "Help": false,
            "Vsi": 0,
            "VsiT": 0,
            "Dst": 279.98,
            "Brng": 18.1,
            "WTC": 2,
            "Species": 1,
            "Engines": "2",
            "EngType": 3,
            "EngMount": 0,
            "Mil": false,
            "Cou": "Bermuda",
            "HasPic": false,
            "Interested": false,
            "FlightsCount": 0,
            "Gnd": false,
            "SpdTyp": 0,
            "CallSus": false,
            "Trt": 2,
            "Year": "2002"
},
        {
            "Id": 9003415,
            "Rcvr": 1,
            "HasSig": false,
            "Icao": "896197",
            "Bad": false,
            "Reg": "A6-EEX",
            "FSeen": "/Date(1528923288513)/",
            "TSecs": 5025,
            "CMsgs": 655,
            "Alt": 39000,
            "GAlt": 39012,
            "InHg": 29.93171,
            "AltT": 0,
            "TAlt": 39008,
            "Call": "UAE132",
            "Lat": 46.200396,
            "Long": 46.847832,
            "PosTime": 1528928239867,
            "Mlat": false,
            "Tisb": false,
            "Spd": 499.9,
            "Trak": 147.6,
            "TrkH": false,
            "TTrk": 140.625,
            "Type": "A388",
            "Mdl": "Airbus A380 861",
            "Man": "Airbus",
            "CNum": "154",
            "From": "UUDD Domodedovo, Moscow, Russia",
            "To": "OMDB Dubai, United Arab Emirates",
            "Op": "Emirates Airline",
            "OpIcao": "UAE",
            "Sqk": "2176",
            "Help": false,
            "Vsi": 0,
            "VsiT": 1,
            "Dst": 224.77,
            "Brng": 44.9,
            "WTC": 3,
            "Species": 1,
            "Engines": "4",
            "EngType": 3,
            "EngMount": 0,
            "Mil": false,
            "Cou": "United Arab Emirates",
            "HasPic": false,
            "Interested": false,
            "FlightsCount": 0,
            "Gnd": false,
            "SpdTyp": 0,
            "CallSus": false,
            "Trt": 5,
            "Year": "2013"
}
],
    "totalAc": 7560,
    "lastDv": "636644557518738673",
    "shtTrlSec": 65,
    "stm": 1528928314272
});