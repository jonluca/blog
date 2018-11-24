let airports = {
  "label": "From:",
  "name": "departureInput",
  "allAirportsList": [{
    "id": "airport:AAL",
    "name": "Aalborg",
    "categories": ["CTY"],
    "iataCode": "AAL",
    "seoName": "aalborg",
    "cityCode": "AALBORG",
    "country": "Denmark",
    "currencyCode": "DKK",
    "routes": ["airport:STN", "country:gb", "region:ENGLAND", "city:LONDON"],
    "countryCode": "dk",
    "base": false,
    "coords": {
      "lat": 57.0534,
      "lng": 9.5057
    },
    "priority": 92,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:AAR",
    "name": "Aarhus",
    "categories": ["FAM", "CTY", "CUL", "XMS"],
    "iataCode": "AAR",
    "seoName": "aarhus",
    "cityCode": "AARHUS",
    "country": "Denmark",
    "currencyCode": "DKK",
    "routes": ["airport:STN", "airport:EIN", "country:gb", "city:DUBLIN", "region:ENGLAND", "country:nl", "country:ie", "country:pl", "airport:DUB", "airport:GDN", "city:GDANSK", "city:EINDHOVEN", "city:LONDON"],
    "countryCode": "dk",
    "base": false,
    "coords": {
      "lat": 56.3,
      "lng": 10.619
    },
    "priority": 149,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:ABZ",
    "name": "Aberdeen",
    "categories": [],
    "iataCode": "ABZ",
    "seoName": "aberdeen",
    "cityCode": "ABERDEEN",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["airport:AGP", "country:es", "airport:MLA", "region:COSTA_DE_SOL", "city:MALTA", "country:mt", "country:pt", "city:MALAGA", "city:ALICANTE", "city:FARO", "airport:ALC", "region:COSTA_BRAVA", "airport:FAO"],
    "countryCode": "gb",
    "base": false,
    "coords": {
      "lat": 57.2019,
      "lng": -2.19778
    },
    "priority": 190,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:AGA",
    "name": "Agadir",
    "categories": ["GLF", "FAM", "FST", "CUL", "SEA"],
    "iataCode": "AGA",
    "seoName": "agadir",
    "cityCode": "AGADIR",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["airport:STN", "airport:MRS", "city:DUSSELDORF", "city:CHARLEROI", "airport:EIN", "airport:NRN", "country:gb", "country:fr", "airport:CRL", "city:FRANKFURT", "city:MARSEILLE", "airport:MAN", "region:ENGLAND", "country:nl", "airport:FRA", "country:be", "city:MANCHESTER", "city:EINDHOVEN", "country:de", "city:LONDON"],
    "countryCode": "ma",
    "base": false,
    "coords": {
      "lat": 30.325,
      "lng": -9.41307
    },
    "priority": 136,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:AHO",
    "name": "Alghero",
    "categories": ["FAM", "SEA"],
    "iataCode": "AHO",
    "seoName": "alghero",
    "cityCode": "ALGHERO",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:PISA", "airport:STN", "airport:HHN", "city:CHARLEROI", "airport:BLQ", "airport:BTS", "airport:CRL", "airport:DTM", "city:FRANKFURT", "country:it", "region:ENGLAND", "airport:BGY", "region:TUSCANY", "city:LONDON", "city:EINDHOVEN", "city:MILAN", "country:gb", "airport:EIN", "country:sk", "airport:FMM", "city:BRATISLAVA", "airport:PSA", "city:DORTMUND", "city:MEMMINGEN", "country:nl", "city:BOLOGNA", "city:STUTTGART", "airport:STR", "country:be", "country:de"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 40.6321,
      "lng": 8.29077
    },
    "priority": 43,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:ALC",
    "name": "Alicante",
    "categories": ["GLF", "FAM", "SEA", "OUT"],
    "iataCode": "ALC",
    "seoName": "alicante",
    "cityCode": "ALICANTE",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:VXO", "city:HAMBURG", "city:BOURNEMOUTH", "city:CHARLEROI", "airport:ORK", "city:NUREMBERG", "airport:LTN", "airport:KRK", "airport:CRL", "city:FRANKFURT", "country:gr", "city:HAUGESUND", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "airport:KIR", "city:EINDHOVEN", "city:MILAN", "city:EDINBURGH", "airport:NYO", "city:BERLIN", "airport:DUS", "city:LAMEZIA", "city:KAUNAS", "city:BILLUND", "city:NAPLES", "country:pt", "city:NEWQUAY", "city:LEEDS", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:WRO", "airport:DUB", "airport:BHX", "city:KERRY", "airport:STN", "city:GLASGOW", "connectingFlight:PMO:FCO", "city:SHANNON", "airport:NRN", "country:es", "airport:BRU", "airport:MXP", "airport:BRS", "city:THESSALONIKI", "airport:SCQ", "connectingFlight:CTA:BGY", "city:PARIS", "city:MARSEILLE", "airport:GLA", "airport:BRE", "airport:FRA", "airport:NQY", "city:MANCHESTER", "airport:PED", "city:LONDON", "city:DUSSELDORF", "country:gb", "city:VAXJO", "airport:EIN", "connectingFlight:SKG:BGY", "city:COLOGNE", "country:fr", "airport:KUN", "city:SANTIAGO", "airport:FKB", "city:KNOCK", "city:SEVILLE", "country:nl", "airport:GDN", "country:no", "airport:SVQ", "country:cz", "airport:MRS", "airport:HHN", "connectingFlight:NAP:BGY", "airport:BLQ", "airport:LPL", "city:BRUSSELS", "airport:TXL", "region:SARDINIA", "airport:BLL", "city:PARDUBICE", "airport:POZ", "airport:SEN", "airport:LGW", "airport:MAN", "city:BRINDISI", "airport:VST", "airport:NCL", "airport:WMI", "airport:FCO", "city:KRAKOW", "airport:BVA", "airport:MST", "city:CATANIA", "airport:GOT", "city:CORK", "airport:CGN", "connectingFlight:BDS:BGY", "airport:FMM", "city:PALERMO", "city:WARSAW", "connectingFlight:CAG:BGY", "city:COMISO", "city:LIVERPOOL", "country:dk", "airport:NUE", "city:ROME", "airport:ABZ", "connectingFlight:ATH:BGY", "country:lt", "city:MEMMINGEN", "airport:SNN", "city:BELFAST", "region:SCOTLAND", "city:GDANSK", "country:de", "city:NEWCASTLE", "airport:OPO", "airport:LBA", "connectingFlight:PMO:BGY", "airport:EDI", "airport:TRF", "city:PORTO", "airport:SXF", "airport:CPH", "airport:HAU", "country:it", "country:ie", "airport:HAM", "airport:PIK", "region:SICILY", "city:OSLO", "region:NORTHERN_IRELAND", "city:MAASTRICHT", "city:BIRMINGHAM", "city:KARLSRUHE", "country:se", "city:WROCLAW", "city:ABERDEEN", "airport:NOC", "city:DUBLIN", "city:BRISTOL", "city:ATHENS", "airport:BOH", "city:COPENHAGEN", "airport:EMA", "region:PUGLIA", "city:SOUTHEND_ON_SEA", "connectingFlight:CIY:FCO", "city:CAGLIARI", "city:GOTHENBURG", "country:be", "city:POZNAN", "airport:BFS", "city:BREMEN"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 38.2822,
      "lng": -0.558156
    },
    "priority": 11,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LEI",
    "name": "Almeria",
    "categories": ["GLF", "FAM", "SEA"],
    "iataCode": "LEI",
    "seoName": "almeria",
    "cityCode": "ALMERIA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:CRL", "city:CHARLEROI", "country:gb", "airport:MAN", "region:ENGLAND", "country:ie", "airport:DUB", "country:be", "city:MANCHESTER", "city:LONDON", "city:DUBLIN"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 36.8439,
      "lng": -2.3701
    },
    "priority": 139,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:AMM",
    "name": "Amman Jordan",
    "categories": [],
    "iataCode": "AMM",
    "seoName": "amman",
    "cityCode": "AMMAN",
    "country": "Jordan",
    "currencyCode": "EUR",
    "routes": ["country:cy", "country:cz", "airport:OTP", "airport:BLQ", "city:BRUSSELS", "airport:BRU", "airport:PRG", "airport:KRK", "country:at", "airport:MLA", "country:mt", "country:it", "airport:WMI", "airport:BGY", "city:PAPHOS", "airport:VIE", "city:KRAKOW", "city:VILNIUS", "city:MILAN", "city:WARSAW", "country:hu", "city:VIENNA", "city:BUCHAREST", "city:MALTA", "airport:PFO", "city:BUDAPEST", "airport:VNO", "country:lt", "city:PRAGUE", "city:BOLOGNA", "country:pl", "country:ro", "airport:BUD", "country:be"],
    "countryCode": "jo",
    "base": false,
    "coords": {
      "lat": 31.9497,
      "lng": 35.9328
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:AMS",
    "name": "Amsterdam",
    "categories": [],
    "iataCode": "AMS",
    "seoName": "amsterdam",
    "cityCode": "AMSTERDAM",
    "country": "Netherlands",
    "currencyCode": "EUR",
    "routes": ["city:MALTA", "country:mt", "airport:MLA|Air Malta", "airport:AGP", "city:MALAGA", "country:es", "country:ie", "airport:DUB", "region:COSTA_DE_SOL", "city:DUBLIN"],
    "countryCode": "nl",
    "base": false,
    "coords": {
      "lat": 52.3105,
      "lng": 4.76827
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": ["Schipol", "Schiphol", "Holland", "Amsterdam Schiphol"]
  }, {
    "id": "airport:AOI",
    "name": "Ancona",
    "categories": ["FAM", "CUL"],
    "iataCode": "AOI",
    "seoName": "ancona",
    "cityCode": "ANCONA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:CRL", "airport:STN", "city:DUSSELDORF", "city:CHARLEROI", "airport:NRN", "country:gb", "region:ENGLAND", "country:be", "country:de", "city:LONDON"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 43.6163,
      "lng": 13.3623
    },
    "priority": 104,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:AQJ",
    "name": "Aqaba Jordan",
    "categories": [],
    "iataCode": "AQJ",
    "seoName": "aqaba",
    "cityCode": "AQABA",
    "country": "Jordan",
    "currencyCode": "EUR",
    "routes": ["city:SOFIA", "airport:CIA", "city:ATHENS", "country:bg", "city:ROME", "airport:SOF", "country:it", "country:gr", "airport:CGN", "airport:ATH", "city:COLOGNE", "country:de"],
    "countryCode": "jo",
    "base": false,
    "coords": {
      "lat": 29.364183,
      "lng": 35.010504
    },
    "priority": 101,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:ATH",
    "name": "Athens",
    "categories": ["SKI", "HEN", "FAM", "NIT", "CTY", "CUL", "OUT"],
    "iataCode": "ATH",
    "seoName": "athens",
    "cityCode": "ATHENS",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["city:CHARLEROI", "airport:LTN", "airport:KRK", "airport:CRL", "city:FRANKFURT", "city:KATOWICE", "country:gr", "region:ENGLAND", "city:MYKONOS", "airport:LCJ", "airport:BGY", "city:EINDHOVEN", "city:MILAN", "connectingFlight:IBZ:BGY", "country:hu", "city:BERLIN", "city:LAMEZIA", "city:NAPLES", "city:SOFIA", "city:BILLUND", "airport:KBP", "connectingFlight:BCN:BGY", "city:TRAPANI", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "airport:STN", "airport:KTW", "airport:OTP", "city:AQABA", "country:es", "connectingFlight:MAD:BGY", "city:THESSALONIKI", "connectingFlight:CTA:BGY", "airport:RZE", "country:mt", "airport:RAK", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "connectingFlight:BRI:BGY", "airport:FRA", "airport:HER", "connectingFlight:PRG:BGY", "airport:PMO", "airport:SKG", "city:MANCHESTER", "airport:CTA", "city:LONDON", "city:VILNIUS", "country:gb", "airport:EIN", "city:BRATISLAVA", "airport:FKB", "city:MALTA", "airport:AQJ", "city:ZARAGOZA", "city:PRAGUE", "country:nl", "city:PESCARA", "airport:GDN", "country:fi", "connectingFlight:AGP:BGY", "country:cz", "airport:LPP", "connectingFlight:NAP:BGY", "airport:BLQ", "airport:JTR", "city:SANTORINI", "city:BARI", "region:SARDINIA", "airport:BTS", "airport:BLL", "airport:POZ", "region:CANARY_ISLES", "connectingFlight:VLC:BGY", "city:BRINDISI", "connectingFlight:PSR:BGY", "city:RZESZOW", "airport:WMI", "city:KRAKOW", "country:ma", "city:CATANIA", "connectingFlight:CRL:BGY", "airport:SOF", "connectingFlight:BDS:BGY", "airport:JMK", "airport:FMM", "city:PALERMO", "city:WARSAW", "country:ua", "connectingFlight:CAG:BGY", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "city:BUCHAREST", "city:HERAKLION", "country:dk", "city:ROME", "city:MEMMINGEN", "city:LAPPEENRANTA", "country:lt", "region:COSTA_BRAVA", "connectingFlight:MAN:BGY", "airport:BUD", "city:GDANSK", "country:de", "connectingFlight:ZAZ:BGY", "connectingFlight:PMO:BGY", "city:IBIZA", "city:KIEV", "airport:SXF", "airport:MLA", "city:LANZAROTE", "country:it", "city:MALAGA", "city:ALICANTE", "country:ie", "connectingFlight:ALC:BGY", "region:SICILY", "country:sk", "connectingFlight:BRS:BGY", "city:KARLSRUHE", "city:WROCLAW", "city:MADRID", "city:DUBLIN", "city:BRISTOL", "region:CRETE", "airport:CIA", "country:jo", "country:bg", "region:PUGLIA", "connectingFlight:ACE:BGY", "connectingFlight:TPS:BGY", "city:BUDAPEST", "airport:VNO", "country:ro", "city:LODZ", "city:CAGLIARI", "country:be", "city:POZNAN"],
    "countryCode": "gr",
    "base": true,
    "coords": {
      "lat": 37.9364,
      "lng": 23.9445
    },
    "priority": 22,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BNX",
    "name": "Banja Luka",
    "categories": [],
    "iataCode": "BNX",
    "seoName": "banja_luka",
    "cityCode": "BANJA_LUKA",
    "country": "Bosnia & Herzegovina",
    "currencyCode": "EUR",
    "routes": ["airport:CRL", "city:CHARLEROI", "city:MEMMINGEN", "airport:FMM", "airport:NYO", "city:STOCKHOLM", "country:se", "country:be", "country:de"],
    "countryCode": "ba",
    "base": false,
    "coords": {
      "lat": 44.5629,
      "lng": 17.1731
    },
    "priority": 150,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BCN",
    "name": "Barcelona",
    "categories": ["SKI", "GLF", "HEN", "ROM", "FAM", "SPR", "NIT", "CTY", "CUL", "SEA"],
    "iataCode": "BCN",
    "seoName": "barcelona-el-prat",
    "cityCode": "BARCELONA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "connectingFlight:MLA:FCO", "airport:LTN", "airport:KRK", "connectingFlight:PDL:OPO", "city:SANTANDER", "airport:CRL", "airport:VGO", "city:FRANKFURT", "city:TENERIFE", "city:TURIN", "country:gr", "city:FARO", "region:ENGLAND", "connectingFlight:FAO:OPO", "city:STOCKHOLM", "airport:BGY", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:MILAN", "city:EDINBURGH", "connectingFlight:BRI:FCO", "airport:NYO", "country:hu", "city:BERLIN", "city:VIENNA", "city:LAMEZIA", "city:SOFIA", "city:NAPLES", "country:pt", "airport:KBP", "connectingFlight:TER:OPO", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:DUB", "airport:BHX", "city:GLASGOW", "airport:STN", "connectingFlight:PMO:FCO", "country:es", "airport:BRU", "city:THESSALONIKI", "airport:SCQ", "city:PARIS", "connectingFlight:CTA:BGY", "airport:NAP", "country:mt", "city:PALMA", "airport:RAK", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "connectingFlight:BRI:BGY", "airport:FRA", "city:LISBON", "airport:VIE", "connectingFlight:LIS:OPO", "city:MANCHESTER", "airport:LUX", "city:CARDIFF", "city:LONDON", "city:VILNIUS", "country:gb", "connectingFlight:SKG:BGY", "city:COLOGNE", "country:fr", "city:TERCEIRA", "airport:SDR", "airport:TFS", "city:SANTIAGO", "city:NADOR", "city:MALTA", "city:VIGO", "airport:TFN", "city:SEVILLE", "city:PRAGUE", "country:cz", "airport:SVQ", "airport:BLQ", "connectingFlight:MLA:BGY", "airport:LPL", "city:BRUSSELS", "city:BARI", "region:SARDINIA", "region:WALES", "airport:LPA", "region:CANARY_ISLES", "airport:MAN", "city:BRINDISI", "airport:VCE", "airport:WMI", "airport:MAH", "airport:FCO", "airport:BVA", "city:KRAKOW", "country:ma", "airport:GOT", "city:CATANIA", "airport:SOF", "airport:CGN", "connectingFlight:BDS:BGY", "city:VENICE", "country:ua", "city:PALERMO", "city:WARSAW", "connectingFlight:CAG:BGY", "airport:IBZ", "region:COSTA_DE_SOL", "city:COMISO", "city:MARRAKESH", "city:LIVERPOOL", "connectingFlight:CFU:BGY", "airport:NDR", "city:ROME", "connectingFlight:ATH:BGY", "country:lt", "country:lu", "airport:CWL", "airport:VLL", "airport:FUE", "city:MENORCA", "airport:BUD", "region:SCOTLAND", "country:de", "airport:OPO", "connectingFlight:CTA:FCO", "connectingFlight:PMO:BGY", "city:PONTA_DELGADA", "airport:EDI", "city:CORFU", "city:IBIZA", "city:PORTO", "airport:PRG", "city:KIEV", "airport:SXF", "country:at", "airport:MLA", "airport:FEZ", "country:it", "city:MALAGA", "city:FEZ", "country:ie", "airport:HAM", "airport:PIK", "region:SICILY", "city:JEREZ", "city:BIRMINGHAM", "country:se", "airport:XRY", "city:DUBLIN", "city:VALLADOLID", "city:ATHENS", "country:bg", "airport:EMA", "region:PUGLIA", "city:LUXEMBOURG", "city:BUDAPEST", "airport:VNO", "connectingFlight:CIY:FCO", "city:CAGLIARI", "city:GOTHENBURG", "region:AZORES", "country:be", "airport:TRN"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 41.2971,
      "lng": 2.07846
    },
    "priority": 4,
    "seasonalRoutes": [],
    "aliases": [],
    "weight": 1
  }, {
    "id": "airport:GRO",
    "name": "Barcelona Girona",
    "categories": ["SKI", "GLF", "HEN", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "SEA", "XMS"],
    "iataCode": "GRO",
    "seoName": "barcelona-girona",
    "cityCode": "GIRONA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:TALLINN", "city:CHARLEROI", "city:BOURNEMOUTH", "airport:ORK", "airport:LTN", "airport:KRK", "airport:CRL", "city:FRANKFURT", "country:gr", "region:ENGLAND", "airport:PSR", "city:EINDHOVEN", "city:EDINBURGH", "city:BERLIN", "city:KAUNAS", "city:BILLUND", "city:LEEDS", "country:pl", "airport:TLL", "airport:WRO", "airport:DUB", "airport:BHX", "city:PISA", "city:GLASGOW", "airport:STN", "airport:NRN", "airport:BRU", "airport:BRS", "city:THESSALONIKI", "airport:RIX", "city:PARIS", "country:mt", "airport:BRE", "airport:FRA", "region:TUSCANY", "country:ee", "city:MANCHESTER", "airport:SKG", "city:LONDON", "city:DUSSELDORF", "country:gb", "airport:EIN", "country:fr", "airport:KUN", "city:BRATISLAVA", "airport:FKB", "city:MALTA", "city:KNOCK", "country:nl", "city:PESCARA", "city:RABAT", "airport:RBA", "airport:HHN", "airport:TXL", "city:BRUSSELS", "airport:LPL", "region:SARDINIA", "airport:BTS", "airport:BLL", "airport:POZ", "airport:MAN", "airport:NCL", "airport:OMR", "city:KRAKOW", "airport:BVA", "airport:MST", "country:ma", "city:CORK", "airport:FMM", "city:LIVERPOOL", "country:dk", "country:lv", "city:MEMMINGEN", "country:lt", "city:BELFAST", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "airport:LBA", "airport:EDI", "city:ORADEA", "airport:MLA", "country:it", "country:ie", "airport:PIK", "airport:CAG", "region:NORTHERN_IRELAND", "country:sk", "city:MAASTRICHT", "city:KARLSRUHE", "city:BIRMINGHAM", "city:WROCLAW", "airport:NOC", "city:DUBLIN", "city:BRISTOL", "airport:PSA", "airport:BOH", "airport:EMA", "city:RIGA", "country:ro", "city:CAGLIARI", "country:be", "city:BREMEN", "city:POZNAN", "airport:BFS"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 41.901,
      "lng": 2.76055
    },
    "priority": 26,
    "seasonalRoutes": [],
    "aliases": ["Girona", "Barcelona Girona"],
    "weight": 2
  }, {
    "id": "airport:REU",
    "name": "Barcelona Reus",
    "categories": ["GLF", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "SEA", "OUT"],
    "iataCode": "REU",
    "seoName": "barcelona-reus",
    "cityCode": "BARCELONA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:HHN", "city:SHANNON", "city:CHARLEROI", "airport:LPL", "airport:ORK", "airport:BRS", "airport:CRL", "city:FRANKFURT", "airport:SEN", "airport:MAN", "region:ENGLAND", "country:ie", "city:MANCHESTER", "city:EINDHOVEN", "city:LONDON", "city:CORK", "country:gb", "airport:EIN", "city:BIRMINGHAM", "city:DUBLIN", "city:LIVERPOOL", "city:BRISTOL", "airport:EMA", "city:SOUTHEND_ON_SEA", "country:nl", "country:pl", "airport:SNN", "airport:GDN", "airport:DUB", "airport:BHX", "country:be", "city:GDANSK", "country:de"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 41.1474,
      "lng": 1.16717
    },
    "priority": 83,
    "seasonalRoutes": [],
    "aliases": ["Reus", "Barcelona Reus"],
    "weight": 3
  }, {
    "id": "airport:BRI",
    "name": "Bari",
    "categories": ["FAM", "SPR", "FST", "CUL", "SEA", "OUT"],
    "iataCode": "BRI",
    "seoName": "bari",
    "cityCode": "BARI",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:NUREMBERG", "connectingFlight:HAM:BGY", "airport:CRL", "city:FRANKFURT", "city:TENERIFE", "city:TURIN", "country:gr", "region:ENGLAND", "airport:BGY", "city:GRAN_CANARIA", "city:MILAN", "city:EDINBURGH", "connectingFlight:IBZ:BGY", "country:hu", "city:BERLIN", "country:pt", "connectingFlight:BCN:BGY", "connectingFlight:EDI:BGY", "city:BOLOGNA", "country:pl", "airport:DUB", "city:VALENCIA", "connectingFlight:LPA:BGY", "airport:STN", "city:PISA", "connectingFlight:PMO:FCO", "airport:NRN", "country:es", "city:THESSALONIKI", "connectingFlight:VNO:BGY", "city:PARIS", "connectingFlight:CGN:BGY", "country:mt", "city:TRIESTE", "city:LISBON", "connectingFlight:PRG:BGY", "region:TUSCANY", "city:MANCHESTER", "city:LONDON", "city:DUSSELDORF", "city:VILNIUS", "country:gb", "connectingFlight:SKG:BGY", "city:GENOA", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:FKB", "city:SANTIAGO", "city:MALTA", "connectingFlight:SCQ:BGY", "city:SEVILLE", "city:PRAGUE", "country:nl", "connectingFlight:LIS:BGY", "airport:VLC", "airport:HHN", "airport:SVQ", "country:cz", "airport:BLQ", "airport:TXL", "airport:LPL", "region:SARDINIA", "region:CANARY_ISLES", "airport:FCO", "airport:MAD", "city:KRAKOW", "airport:BVA", "airport:MST", "city:CATANIA", "city:VENICE", "city:PALERMO", "city:BARCELONA", "connectingFlight:TFS:BGY", "connectingFlight:BCN:FCO", "city:LIVERPOOL", "airport:NUE", "city:ROME", "airport:GOA", "country:lt", "region:COSTA_BRAVA", "connectingFlight:MAN:BGY", "airport:BUD", "region:SCOTLAND", "country:de", "connectingFlight:CTA:FCO", "connectingFlight:KRK:BGY", "city:IBIZA", "city:PORTO", "airport:PRG", "airport:SXF", "airport:MLA", "city:LANZAROTE", "country:it", "country:ie", "connectingFlight:BRE:BGY", "region:SICILY", "connectingFlight:OPO:BGY", "airport:CAG", "airport:TSF", "city:MAASTRICHT", "connectingFlight:BRS:BGY", "city:KARLSRUHE", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "airport:PSA", "connectingFlight:ACE:BGY", "airport:BOD", "city:BUDAPEST", "airport:TRS", "city:CAGLIARI", "country:be", "city:BREMEN", "airport:TRN"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 41.1389,
      "lng": 16.7606
    },
    "priority": 18,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BSL",
    "name": "Basel",
    "categories": ["SKI", "HEN", "FAM", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "BSL",
    "seoName": "basel",
    "cityCode": "BASEL",
    "country": "Switzerland",
    "currencyCode": "CHF",
    "routes": ["airport:STN", "city:PALMA", "airport:PMI", "country:gb", "region:ENGLAND", "country:es", "country:ie", "airport:DUB", "city:DUBLIN", "city:LONDON"],
    "countryCode": "ch",
    "base": false,
    "coords": {
      "lat": 47.5896,
      "lng": 7.52991
    },
    "priority": 120,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BFS",
    "name": "Belfast International",
    "categories": [],
    "iataCode": "BFS",
    "seoName": "belfast-international",
    "cityCode": "BELFAST",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["airport:STN", "country:es", "airport:KRK", "airport:GRO", "airport:SXF", "airport:MLA", "city:LANZAROTE", "country:mt", "city:TENERIFE", "region:CANARY_ISLES", "country:it", "city:MALAGA", "airport:MAN", "city:ALICANTE", "city:FARO", "region:ENGLAND", "airport:ALC", "airport:WMI", "airport:BGY", "airport:FAO", "city:MANCHESTER", "city:LONDON", "city:KRAKOW", "country:gb", "city:MILAN", "airport:AGP", "city:WARSAW", "airport:ACE", "airport:TFS", "city:BERLIN", "city:WROCLAW", "region:COSTA_DE_SOL", "city:MALTA", "country:pt", "country:pl", "region:COSTA_BRAVA", "airport:WRO", "airport:GDN", "city:GIRONA", "city:GDANSK", "country:de"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 54.6575,
      "lng": -6.2158
    },
    "priority": 300,
    "seasonalRoutes": [],
    "aliases": ["UK", "Northern Ireland", "International"]
  }, {
    "id": "airport:EGC",
    "name": "Bergerac",
    "categories": ["FAM", "CUL"],
    "iataCode": "EGC",
    "seoName": "bergerac",
    "cityCode": "BERGERAC",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:CHARLEROI", "country:gb", "airport:LPL", "airport:BRS", "city:BIRMINGHAM", "city:LIVERPOOL", "airport:CRL", "city:BRISTOL", "airport:EMA", "region:ENGLAND", "country:be", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 44.8253,
      "lng": 0.518611
    },
    "priority": 107,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SXF",
    "name": "Berlin Schönefeld",
    "categories": ["FAM", "FST", "CTY", "CUL"],
    "iataCode": "SXF",
    "seoName": "berlin",
    "cityCode": "BERLIN",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:INI", "airport:KRK", "city:SANTANDER", "city:VERONA", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "airport:KIR", "airport:BGY", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:MILAN", "city:EDINBURGH", "connectingFlight:IBZ:BGY", "country:hu", "city:BRNO", "city:LAMEZIA", "city:NAPLES", "city:BILLUND", "city:SOFIA", "country:pt", "airport:TLS", "airport:KBP", "country:hr", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:DUB", "city:VALENCIA", "city:KERRY", "airport:STN", "city:PISA", "city:GLASGOW", "city:ZADAR", "airport:OTP", "country:es", "airport:BRU", "city:THESSALONIKI", "airport:RIX", "airport:BRQ", "airport:ZAD", "city:NIS", "country:mt", "city:PALMA", "airport:RAK", "airport:GLA", "airport:BRI", "airport:FAO", "city:LISBON", "airport:PMO", "region:TUSCANY", "airport:SKG", "city:MANCHESTER", "airport:CTA", "city:LONDON", "airport:BCN", "city:VILNIUS", "country:gb", "city:COLOGNE", "country:fr", "airport:SDR", "airport:TFS", "city:MALTA", "city:SEVILLE", "city:PESCARA", "airport:VRN", "airport:VLC", "airport:SVQ", "country:cz", "connectingFlight:NAP:BGY", "airport:BLQ", "city:BRUSSELS", "city:TOULOUSE", "city:BARI", "region:SARDINIA", "airport:BLL", "airport:LPA", "region:CANARY_ISLES", "city:BRINDISI", "airport:MAN", "connectingFlight:PSR:BGY", "airport:TGD", "airport:MAD", "city:KRAKOW", "country:ma", "city:CATANIA", "airport:CGN", "airport:SOF", "connectingFlight:BDS:BGY", "country:me", "city:VENICE", "city:PALERMO", "country:ua", "airport:ACE", "connectingFlight:CAG:BGY", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "city:BUCHAREST", "country:dk", "city:ROME", "country:lv", "country:lt", "city:EILAT", "airport:FUE", "region:COSTA_BRAVA", "airport:VDA", "city:BELFAST", "airport:BUD", "region:SCOTLAND", "country:de", "city:PODGORICA", "airport:OPO", "airport:EDI", "city:IBIZA", "city:PORTO", "city:KIEV", "airport:MLA", "city:LANZAROTE", "city:MALAGA", "country:it", "city:ALICANTE", "airport:ALC", "airport:ATH", "airport:LIS", "country:ie", "country:il", "region:SICILY", "region:NORTHERN_IRELAND", "airport:TSF", "city:BIRMINGHAM", "city:DUBLIN", "city:MADRID", "airport:PSA", "airport:CIA", "city:ATHENS", "country:bg", "region:PUGLIA", "airport:EMA", "airport:VNO", "city:BUDAPEST", "city:RIGA", "country:ro", "city:CAGLIARI", "country:be", "airport:BFS", "country:rs"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 52.38,
      "lng": 13.5225
    },
    "priority": 60,
    "seasonalRoutes": [],
    "aliases": ["Schonefeld", "Berlin Schonefeld"]
  }, {
    "id": "airport:TXL",
    "name": "Berlin Tegel",
    "categories": [],
    "iataCode": "TXL",
    "seoName": "berlin tegel",
    "cityCode": "BERLIN",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:EFL", "city:BARI", "airport:GRO", "airport:LPA", "city:KEFALONIA", "region:CANARY_ISLES", "city:TENERIFE", "country:gr", "city:BRINDISI", "city:FARO", "city:FUERTEVENTURA", "city:PULA", "city:GRAN_CANARIA", "country:ma", "airport:PMI", "city:MILAN", "airport:AGP", "airport:ACE", "airport:IBZ", "region:COSTA_DE_SOL", "city:MARRAKESH", "city:HERAKLION", "city:NAPLES", "country:pt", "airport:RHO", "country:hr", "airport:FUE", "region:COSTA_BRAVA", "airport:BDS", "airport:CFU", "city:CORFU", "city:IBIZA", "country:es", "airport:MXP", "city:RIJEKA", "airport:NAP", "city:LANZAROTE", "city:PALMA", "airport:RAK", "airport:BRI", "country:it", "city:MALAGA", "city:ALICANTE", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:KGS", "airport:ALC", "airport:HER", "city:KOS", "airport:FAO", "city:RHODES", "city:PAPHOS", "airport:PUY", "airport:TFS", "region:CRETE", "airport:PFO", "region:PUGLIA", "airport:RJK", "city:GIRONA"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 52.3335,
      "lng": 13.1716
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": ["Tegel"]
  }, {
    "id": "airport:BZR",
    "name": "Beziers",
    "categories": ["FAM", "SPR", "FST", "CUL", "SEA", "OUT"],
    "iataCode": "BZR",
    "seoName": "beziers",
    "cityCode": "BEZIERS",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:BVA", "airport:STN", "city:DUSSELDORF", "country:gb", "airport:NRN", "airport:EDI", "city:EDINBURGH", "airport:LTN", "country:fr", "airport:BRS", "airport:NYO", "country:se", "city:PARIS", "city:BRISTOL", "airport:MAN", "region:ENGLAND", "city:STOCKHOLM", "city:MANCHESTER", "region:SCOTLAND", "country:de", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.3235,
      "lng": 3.3539
    },
    "priority": 95,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BIQ",
    "name": "Biarritz",
    "categories": ["HEN", "FAM", "FST", "CTY", "SEA"],
    "iataCode": "BIQ",
    "seoName": "biarritz",
    "cityCode": "BIARRITZ",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:CRL", "airport:STN", "city:CHARLEROI", "country:gb", "region:ENGLAND", "country:ie", "airport:DUB", "country:be", "city:DUBLIN", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.4684,
      "lng": -1.52332
    },
    "priority": 109,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BIO",
    "name": "Bilbao",
    "categories": [],
    "iataCode": "BIO",
    "seoName": "bilbao",
    "cityCode": "BILBAO",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:SEN", "country:gb", "city:SOUTHEND_ON_SEA", "region:ENGLAND"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 43.3011,
      "lng": -2.91061
    },
    "priority": 198,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BLL",
    "name": "Billund",
    "categories": ["FAM", "SPR", "CTY", "CUL", "OUT"],
    "iataCode": "BLL",
    "seoName": "billund",
    "cityCode": "BILLUND",
    "country": "Denmark",
    "currencyCode": "DKK",
    "routes": ["airport:STN", "city:PISA", "country:cz", "airport:EDI", "country:es", "airport:PRG", "airport:GRO", "airport:SXF", "airport:MLA", "city:PALMA", "country:mt", "airport:POZ", "country:it", "country:gr", "city:ALICANTE", "city:MALAGA", "region:ENGLAND", "airport:ALC", "airport:ATH", "airport:BGY", "region:TUSCANY", "city:LONDON", "airport:PMI", "country:gb", "city:MILAN", "airport:AGP", "city:EDINBURGH", "country:hu", "city:BERLIN", "region:COSTA_DE_SOL", "airport:PSA", "city:MALTA", "airport:CIA", "city:ATHENS", "city:ROME", "city:BUDAPEST", "city:PRAGUE", "country:pl", "region:COSTA_BRAVA", "airport:BUD", "city:GIRONA", "region:SCOTLAND", "city:POZNAN", "country:de"],
    "countryCode": "dk",
    "base": true,
    "coords": {
      "lat": 55.7403,
      "lng": 9.15178
    },
    "priority": 92,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BHX",
    "name": "Birmingham",
    "categories": ["FAM", "CTY", "OUT", "XMS"],
    "iataCode": "BHX",
    "seoName": "birmingham",
    "cityCode": "BIRMINGHAM",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:PERPIGNAN", "airport:GRO", "airport:KRK", "airport:BTS", "city:VERONA", "airport:LPA", "region:CANARY_ISLES", "city:TENERIFE", "city:KATOWICE", "country:gr", "city:FARO", "airport:WMI", "airport:PGF", "airport:MAD", "city:FUERTEVENTURA", "city:KRAKOW", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "airport:SOF", "airport:ACE", "city:WARSAW", "airport:IBZ", "region:COSTA_DE_SOL", "city:BARCELONA", "city:SOFIA", "country:pt", "airport:MJV", "country:lt", "airport:FUE", "region:COSTA_BRAVA", "country:pl", "airport:DUB", "airport:CFU", "city:GDANSK", "city:BYDGOSZCZ", "airport:OPO", "airport:KTW", "city:MURCIA", "airport:CHQ", "city:CORFU", "city:PORTO", "city:IBIZA", "country:es", "airport:MLA", "city:CHANIA", "airport:REU", "city:LANZAROTE", "country:mt", "city:PALMA", "city:MALAGA", "airport:RMU", "city:ALICANTE", "country:it", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ALC", "country:ie", "airport:FAO", "airport:BZG", "airport:BCN", "city:VILNIUS", "country:sk", "country:fr", "airport:TFS", "city:BRATISLAVA", "city:MADRID", "city:DUBLIN", "city:MALTA", "region:CRETE", "country:bg", "airport:VNO", "city:GIRONA", "airport:GDN", "airport:VRN"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 52.4539,
      "lng": -1.74803
    },
    "priority": 57,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB"]
  }, {
    "id": "airport:BJV",
    "name": "Bodrum",
    "categories": [],
    "iataCode": "BJV",
    "seoName": "bodrum",
    "cityCode": "BODRUM",
    "country": "Turkey",
    "currencyCode": "EUR",
    "routes": ["country:ie", "airport:DUB", "city:DUBLIN"],
    "countryCode": "tr",
    "base": false,
    "coords": {
      "lat": 37.2506,
      "lng": 27.6642
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BLQ",
    "name": "Bologna",
    "categories": ["SKI", "FAM", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "BLQ",
    "seoName": "bologna",
    "cityCode": "BOLOGNA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:CHARLEROI", "airport:CRV", "airport:LTN", "airport:KRK", "airport:CRL", "airport:VGO", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "connectingFlight:FAO:OPO", "city:MYKONOS", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:EDINBURGH", "city:BERLIN", "city:VIENNA", "city:LAMEZIA", "city:KAUNAS", "city:NAPLES", "country:pt", "airport:RHO", "city:ALGHERO", "city:TRAPANI", "country:pl", "airport:WRO", "airport:DUB", "city:VALENCIA", "airport:STN", "airport:OTP", "airport:AHO", "country:es", "city:THESSALONIKI", "airport:BRS", "city:PARIS", "city:CHANIA", "airport:NAP", "country:mt", "city:PALMA", "city:MARSEILLE", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "city:RHODES", "city:LISBON", "airport:VIE", "airport:PMO", "airport:SKG", "city:MANCHESTER", "city:LONDON", "airport:CTA", "airport:BCN", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:KUN", "airport:SUF", "city:BORDEAUX", "airport:TFS", "city:BRATISLAVA", "city:MALTA", "city:VIGO", "city:SEVILLE", "city:PRAGUE", "country:nl", "airport:STR", "airport:VLC", "airport:MRS", "airport:SVQ", "country:cz", "city:BARI", "region:SARDINIA", "airport:BTS", "airport:LPA", "region:CANARY_ISLES", "city:BRINDISI", "airport:MAN", "airport:WMI", "airport:MAD", "airport:BVA", "city:KRAKOW", "city:CATANIA", "airport:CGN", "airport:JMK", "airport:ACE", "city:PALERMO", "city:WARSAW", "airport:IBZ", "city:BARCELONA", "region:COSTA_DE_SOL", "city:BUCHAREST", "country:dk", "country:lt", "airport:TPS", "region:COSTA_BRAVA", "city:STUTTGART", "city:AMMAN", "airport:BDS", "airport:CFU", "region:SCOTLAND", "country:de", "airport:OPO", "airport:CHQ", "airport:EDI", "city:CORFU", "city:IBIZA", "city:PORTO", "airport:PRG", "airport:SXF", "country:at", "airport:MLA", "city:LANZAROTE", "airport:CPH", "country:it", "city:MALAGA", "city:ALICANTE", "airport:ALC", "airport:ATH", "airport:LIS", "country:ie", "region:SICILY", "airport:CAG", "country:sk", "airport:AMM", "city:WROCLAW", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "city:CROTONE", "city:ATHENS", "region:CRETE", "country:jo", "city:COPENHAGEN", "region:PUGLIA", "airport:BOD", "country:ro", "city:CAGLIARI", "country:be"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 44.5354,
      "lng": 11.2887
    },
    "priority": 14,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BOD",
    "name": "Bordeaux",
    "categories": ["ROM", "FAM", "SPR", "CTY", "CUL"],
    "iataCode": "BOD",
    "seoName": "bordeaux",
    "cityCode": "BORDEAUX",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "airport:MRS", "airport:SVQ", "city:CHARLEROI", "airport:BLQ", "city:TANGIER", "airport:ORK", "city:BARI", "airport:KRK", "airport:NTE", "airport:CRL", "country:gr", "airport:MAN", "region:ENGLAND", "city:MYKONOS", "airport:BGY", "city:KRAKOW", "country:ma", "city:CORK", "city:MILAN", "airport:CGN", "airport:JMK", "city:EDINBURGH", "city:VENICE", "city:MARRAKESH", "city:NAPLES", "country:dk", "country:pt", "city:ROME", "city:BOLOGNA", "country:pl", "city:VALENCIA", "airport:DUB", "region:SCOTLAND", "airport:OZZ", "country:de", "airport:TNG", "airport:STN", "airport:OPO", "airport:EDI", "city:PORTO", "country:es", "airport:NAP", "city:MARSEILLE", "airport:FEZ", "airport:CPH", "airport:RAK", "airport:BRI", "country:it", "city:FEZ", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:LIS", "country:ie", "city:LISBON", "city:OUARZAZATE", "city:MANCHESTER", "city:LONDON", "country:gb", "airport:TSF", "city:COLOGNE", "country:fr", "city:NANTES", "city:DUBLIN", "airport:CIA", "city:COPENHAGEN", "region:PUGLIA", "city:SEVILLE", "country:be"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 44.8283,
      "lng": -0.715556
    },
    "priority": 91,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BOH",
    "name": "Bournemouth",
    "categories": ["FAM", "SPR", "CTY", "CUL", "XMS"],
    "iataCode": "BOH",
    "seoName": "bournemouth",
    "cityCode": "BOURNEMOUTH",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["country:cy", "country:cz", "city:MURCIA", "country:es", "airport:PRG", "airport:GRO", "airport:KRK", "airport:MLA", "airport:LPA", "country:mt", "city:PALMA", "region:CANARY_ISLES", "city:TENERIFE", "city:MALAGA", "airport:RMU", "city:ALICANTE", "city:FARO", "airport:ALC", "country:ie", "airport:FAO", "city:PAPHOS", "city:KRAKOW", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "airport:TFS", "region:COSTA_DE_SOL", "city:DUBLIN", "city:MALTA", "country:pt", "airport:MJV", "airport:PFO", "city:PRAGUE", "region:COSTA_BRAVA", "country:pl", "airport:DUB", "city:GIRONA"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 50.78,
      "lng": -1.8425
    },
    "priority": 121,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB"]
  }, {
    "id": "airport:BTS",
    "name": "Bratislava",
    "categories": ["HEN", "FAM", "SPR", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "BTS",
    "seoName": "bratislava",
    "cityCode": "BRATISLAVA",
    "country": "Slovakia",
    "currencyCode": "EUR",
    "routes": ["country:cy", "city:CHARLEROI", "airport:BLQ", "airport:DLM", "region:SARDINIA", "airport:GRO", "airport:INI", "airport:CRL", "connectingFlight:VLC:BGY", "country:gr", "airport:MAN", "region:ENGLAND", "airport:BGY", "city:EINDHOVEN", "airport:MAD", "airport:BVA", "country:ma", "city:CATANIA", "airport:PMI", "airport:AGP", "city:MILAN", "city:EDINBURGH", "country:ua", "connectingFlight:CAG:BGY", "region:COSTA_DE_SOL", "city:MARRAKESH", "country:pt", "city:ROME", "city:ALGHERO", "airport:KBP", "city:EILAT", "city:LEEDS", "country:tr", "city:BOLOGNA", "region:COSTA_BRAVA", "airport:VDA", "airport:DUB", "city:VALENCIA", "airport:BHX", "city:DALAMAN", "airport:CFU", "region:SCOTLAND", "airport:STN", "airport:LBA", "airport:EDI", "city:CORFU", "airport:AHO", "city:PORTO", "country:es", "city:THESSALONIKI", "city:KIEV", "connectingFlight:CTA:BGY", "airport:MLA", "city:PARIS", "city:NIS", "city:PALMA", "country:mt", "airport:RAK", "country:it", "city:MALAGA", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ATH", "country:ie", "city:PAPHOS", "country:il", "airport:SKG", "city:MANCHESTER", "city:LONDON", "region:SICILY", "connectingFlight:OPO:BGY", "airport:EIN", "country:gb", "city:BIRMINGHAM", "country:fr", "city:DUBLIN", "city:MADRID", "airport:BOJ", "city:MALTA", "city:ATHENS", "airport:CIA", "country:bg", "airport:PFO", "city:BURGAS", "country:nl", "city:GIRONA", "city:CAGLIARI", "country:be", "country:rs"],
    "countryCode": "sk",
    "base": true,
    "coords": {
      "lat": 48.1702,
      "lng": 17.2127
    },
    "priority": 59,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BRE",
    "name": "Bremen",
    "categories": ["FAM", "SPR", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "BRE",
    "seoName": "bremen",
    "cityCode": "BREMEN",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["city:TALLINN", "city:BARI", "airport:GRO", "region:SARDINIA", "city:TENERIFE", "region:CANARY_ISLES", "connectingFlight:VLC:BGY", "country:gr", "city:FARO", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "city:FUERTEVENTURA", "country:ma", "airport:PMI", "city:CATANIA", "city:TAMPERE", "airport:AGP", "city:MILAN", "city:VENICE", "city:PALERMO", "airport:NYO", "connectingFlight:CAG:BGY", "region:COSTA_DE_SOL", "city:LAMEZIA", "city:NAPLES", "country:pt", "country:hr", "country:lv", "country:lt", "city:EILAT", "city:TRAPANI", "connectingFlight:SUF:BGY", "airport:FUE", "region:COSTA_BRAVA", "airport:VDA", "airport:TLL", "airport:DUB", "city:VALENCIA", "airport:STN", "airport:OPO", "city:ZADAR", "connectingFlight:PMO:BGY", "airport:CHQ", "city:PORTO", "country:es", "city:THESSALONIKI", "airport:RIX", "city:CHANIA", "connectingFlight:CTA:BGY", "airport:NAP", "airport:ZAD", "city:PALMA", "airport:FEZ", "city:ALICANTE", "country:it", "city:FEZ", "city:MALAGA", "airport:TMP", "airport:ALC", "connectingFlight:BRI:BGY", "airport:LIS", "country:ie", "airport:FAO", "city:LISBON", "country:il", "country:ee", "airport:SKG", "city:LONDON", "region:SICILY", "city:VILNIUS", "country:gb", "airport:TSF", "airport:TFS", "country:se", "city:DUBLIN", "region:CRETE", "region:PUGLIA", "airport:VNO", "connectingFlight:TPS:BGY", "city:RIGA", "city:GIRONA", "city:CAGLIARI", "country:fi"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 53.0475,
      "lng": 8.78667
    },
    "priority": 66,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BES",
    "name": "Brest",
    "categories": ["FAM", "SPR", "CTY", "OUT"],
    "iataCode": "BES",
    "seoName": "brest",
    "cityCode": "BREST",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:MRS", "city:MARSEILLE", "airport:FEZ", "country:ma", "airport:SEN", "city:FEZ", "country:gb", "city:SOUTHEND_ON_SEA", "region:ENGLAND", "country:fr"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 48.4479,
      "lng": -4.41854
    },
    "priority": 135,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BDS",
    "name": "Brindisi",
    "categories": ["FAM", "SPR", "CTY", "CUL", "SEA", "OUT"],
    "iataCode": "BDS",
    "seoName": "brindisi",
    "cityCode": "BRINDISI",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["country:cz", "city:HAMBURG", "city:CHARLEROI", "airport:BLQ", "connectingFlight:DUB:BGY", "airport:TXL", "connectingFlight:HAM:BGY", "airport:CRL", "city:VERONA", "city:FRANKFURT", "region:CANARY_ISLES", "city:TENERIFE", "city:TURIN", "country:gr", "airport:MAN", "region:ENGLAND", "airport:BGY", "airport:FCO", "city:EINDHOVEN", "airport:BVA", "city:KRAKOW", "city:GRAN_CANARIA", "connectingFlight:CRL:BGY", "city:MILAN", "city:VENICE", "city:EDINBURGH", "airport:FMM", "connectingFlight:IBZ:BGY", "country:hu", "city:BERLIN", "city:VIENNA", "city:BARCELONA", "connectingFlight:TFS:BGY", "country:pt", "city:ROME", "connectingFlight:ATH:BGY", "city:MEMMINGEN", "connectingFlight:BCN:BGY", "connectingFlight:EDI:BGY", "country:lt", "city:BOLOGNA", "region:COSTA_BRAVA", "country:pl", "connectingFlight:SXF:BGY", "region:SCOTLAND", "connectingFlight:LPA:BGY", "country:de", "city:PISA", "airport:STN", "connectingFlight:KRK:BGY", "city:IBIZA", "city:PORTO", "country:es", "connectingFlight:VNO:BGY", "city:PARIS", "country:at", "connectingFlight:CGN:BGY", "city:LANZAROTE", "country:it", "city:ALICANTE", "airport:FRA", "country:ie", "connectingFlight:PRG:BGY", "city:LISBON", "airport:VIE", "region:TUSCANY", "connectingFlight:ALC:BGY", "city:MANCHESTER", "city:LONDON", "city:VILNIUS", "connectingFlight:OPO:BGY", "country:gb", "airport:EIN", "airport:TSF", "city:COLOGNE", "connectingFlight:BRS:BGY", "country:fr", "city:DUBLIN", "city:SANTIAGO", "city:BRISTOL", "airport:PSA", "connectingFlight:SCQ:BGY", "city:ATHENS", "connectingFlight:ACE:BGY", "city:BUDAPEST", "city:PRAGUE", "connectingFlight:BUD:BGY", "country:nl", "connectingFlight:LIS:BGY", "country:be", "airport:VRN", "airport:TRN"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 40.6576,
      "lng": 17.947
    },
    "priority": 37,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BRS",
    "name": "Bristol",
    "categories": ["FAM", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "BRS",
    "seoName": "bristol",
    "cityCode": "BRISTOL",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:BERGERAC", "airport:GRO", "airport:KRK", "city:BEZIERS", "city:TENERIFE", "country:gr", "city:FARO", "airport:BGY", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "airport:AGP", "country:hu", "airport:EGC", "city:LAMEZIA", "city:SOFIA", "city:NAPLES", "city:KAUNAS", "country:pt", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "airport:OTP", "city:SHANNON", "country:es", "connectingFlight:CTA:BGY", "city:CHANIA", "airport:RZE", "country:mt", "city:PALMA", "airport:BZR", "connectingFlight:BRI:BGY", "airport:FAO", "city:COLOGNE", "country:fr", "airport:KUN", "airport:TFS", "city:MALTA", "city:KNOCK", "city:SEVILLE", "airport:GDN", "airport:VLC", "airport:SVQ", "connectingFlight:NAP:BGY", "airport:BLQ", "city:BARI", "region:SARDINIA", "airport:LPA", "airport:POZ", "region:CANARY_ISLES", "city:BRINDISI", "city:LIMOGES", "city:RZESZOW", "airport:VCE", "airport:WMI", "city:KRAKOW", "city:CATANIA", "airport:LIG", "airport:SOF", "airport:CGN", "connectingFlight:BDS:BGY", "city:VENICE", "city:PALERMO", "airport:ACE", "city:WARSAW", "connectingFlight:CAG:BGY", "airport:IBZ", "region:COSTA_DE_SOL", "city:BARCELONA", "city:BUCHAREST", "connectingFlight:ATH:BGY", "country:lt", "region:COSTA_BRAVA", "airport:SNN", "airport:BUD", "city:GDANSK", "country:de", "connectingFlight:PMO:BGY", "airport:CHQ", "city:IBIZA", "airport:MLA", "airport:REU", "city:LANZAROTE", "city:ALICANTE", "country:it", "city:MALAGA", "airport:ALC", "country:ie", "region:SICILY", "city:WROCLAW", "airport:NOC", "city:DUBLIN", "city:ATHENS", "region:CRETE", "country:bg", "region:PUGLIA", "city:BUDAPEST", "country:ro", "city:GIRONA", "city:CAGLIARI", "city:POZNAN"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 51.3827,
      "lng": -2.71909
    },
    "priority": 62,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB"]
  }, {
    "id": "airport:BVE",
    "name": "Brive",
    "categories": ["FAM", "SPR", "FST", "CUL", "OUT"],
    "iataCode": "BVE",
    "seoName": "brive",
    "cityCode": "BRIVE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:OPO", "country:pt", "country:gb", "city:PORTO", "region:ENGLAND", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 45.1508,
      "lng": 1.46917
    },
    "priority": 165,
    "seasonalRoutes": [],
    "aliases": ["Souillac", "Brive Souillac"]
  }, {
    "id": "airport:BRQ",
    "name": "Brno",
    "categories": ["FAM", "FST", "CTY", "CUL"],
    "iataCode": "BRQ",
    "seoName": "brno",
    "cityCode": "BRNO",
    "country": "Czech Republic",
    "currencyCode": "CZK",
    "routes": ["airport:STN", "country:gb", "city:MILAN", "country:it", "region:ENGLAND", "airport:BGY", "airport:SXF", "city:BERLIN", "country:de", "city:LONDON"],
    "countryCode": "cz",
    "base": false,
    "coords": {
      "lat": 49.1513,
      "lng": 16.6944
    },
    "priority": 124,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BRU",
    "name": "Brussels",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "BRU",
    "seoName": "brussels-zaventem",
    "cityCode": "BRUSSELS",
    "country": "Belgium",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:VLC", "airport:GRO", "connectingFlight:PDL:OPO", "city:FARO", "connectingFlight:FAO:OPO", "airport:FCO", "airport:MAD", "country:ma", "city:CATANIA", "airport:PMI", "city:MILAN", "airport:AGP", "city:VENICE", "city:PALERMO", "city:BERLIN", "city:BARCELONA", "region:COSTA_DE_SOL", "city:LARNACA", "city:MARRAKESH", "country:pt", "city:ROME", "region:COSTA_BRAVA", "city:VALENCIA", "city:AMMAN", "airport:DUB", "country:de", "city:PISA", "airport:OPO", "connectingFlight:PMO:FCO", "connectingFlight:CTA:FCO", "city:PONTA_DELGADA", "city:PORTO", "country:es", "airport:MXP", "airport:SXF", "city:PALMA", "airport:RAK", "country:it", "city:ALICANTE", "city:MALAGA", "airport:ALC", "airport:LIS", "country:ie", "city:LISBON", "region:TUSCANY", "region:SICILY", "airport:BCN", "airport:LCA", "airport:TSF", "airport:AMM", "city:MADRID", "city:DUBLIN", "airport:PSA", "country:jo", "city:GIRONA", "region:AZORES"],
    "countryCode": "be",
    "base": true,
    "coords": {
      "lat": 50.9014,
      "lng": 4.48444
    },
    "priority": 53,
    "seasonalRoutes": [],
    "aliases": [],
    "weight": 2
  }, {
    "id": "airport:CRL",
    "name": "Brussels Charleroi",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "CRL",
    "seoName": "brussels-charleroi",
    "cityCode": "CHARLEROI",
    "country": "Belgium",
    "currencyCode": "EUR",
    "routes": ["city:FIGARI", "city:CARCASSONNE", "city:BERGERAC", "city:TANGIER", "airport:KRK", "city:SANTANDER", "country:gr", "city:PERUGIA", "city:STOCKHOLM", "city:LA_ROCHELLE", "airport:PMI", "city:EDINBURGH", "airport:CCF", "country:hu", "airport:NYO", "airport:EGC", "city:SOFIA", "airport:AOI", "country:hr", "city:ALGHERO", "connectingFlight:SUF:BGY", "city:BOLOGNA", "airport:DUB", "city:VALENCIA", "country:es", "city:RIJEKA", "connectingFlight:CTA:BGY", "airport:ZAD", "city:PALMA", "airport:GLA", "airport:RAK", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "city:RHODES", "airport:PMO", "airport:LEI", "airport:BCN", "city:VILNIUS", "country:gb", "country:fr", "airport:SUF", "city:BORDEAUX", "airport:SDR", "airport:TFS", "city:MALTA", "city:SEVILLE", "city:ZARAGOZA", "airport:ZAZ", "city:RABAT", "airport:RBA", "airport:MRS", "connectingFlight:NAP:BGY", "airport:BLQ", "city:BARI", "region:SARDINIA", "airport:LPA", "city:BRINDISI", "airport:MAN", "airport:PGF", "airport:MAD", "country:ma", "airport:SOF", "country:me", "city:VENICE", "city:MARRAKESH", "city:BUCHAREST", "city:ROME", "airport:NDR", "country:lv", "country:lt", "airport:FUE", "airport:VDA", "city:AGADIR", "city:PODGORICA", "airport:BNX", "connectingFlight:PMO:BGY", "airport:EDI", "city:IBIZA", "airport:LRH", "airport:FEZ", "airport:CPH", "country:it", "airport:ALC", "country:ie", "country:il", "region:SICILY", "airport:CAG", "airport:TSF", "city:WROCLAW", "city:MADRID", "region:PUGLIA", "city:BUDAPEST", "airport:BOD", "city:CAGLIARI", "city:BANJA_LUKA", "airport:TRN", "airport:GRO", "city:VARNA", "city:VERONA", "city:TENERIFE", "city:TURIN", "city:FARO", "airport:CIY", "airport:BGY", "airport:PSR", "city:OUJDA", "city:FUERTEVENTURA", "city:PULA", "city:GRAN_CANARIA", "airport:BIQ", "city:MILAN", "airport:AGP", "airport:PDV", "city:LAMEZIA", "city:NAPLES", "country:pt", "airport:AGA", "airport:TLS", "airport:RHO", "city:RODEZ", "country:pl", "city:ANCONA", "airport:WRO", "airport:TNG", "city:GLASGOW", "city:PISA", "city:ZADAR", "airport:OTP", "airport:MPL", "airport:VAR", "airport:AHO", "city:THESSALONIKI", "airport:RIX", "city:CHANIA", "city:BIARRITZ", "airport:NAP", "country:mt", "city:MARSEILLE", "airport:FAO", "airport:PUY", "city:LISBON", "region:TUSCANY", "airport:PEG", "airport:SKG", "city:MANCHESTER", "city:ALMERIA", "city:BRATISLAVA", "city:NADOR", "airport:OUD", "city:PRAGUE", "airport:FSC", "city:PESCARA", "airport:RJK", "airport:VRN", "airport:VLC", "airport:SVQ", "country:cz", "city:PERPIGNAN", "city:TOULOUSE", "airport:BTS", "region:CANARY_ISLES", "airport:WMI", "airport:TGD", "city:KRAKOW", "city:MONTPELLIER", "city:CATANIA", "connectingFlight:BDS:BGY", "airport:RDZ", "city:PALERMO", "city:WARSAW", "airport:ACE", "airport:IBZ", "city:BARCELONA", "region:COSTA_DE_SOL", "region:CORSICA", "city:COMISO", "country:dk", "city:EILAT", "connectingFlight:ATH:BGY", "region:COSTA_BRAVA", "airport:BUD", "airport:BDS", "airport:CFU", "region:SCOTLAND", "airport:OPO", "airport:CHQ", "city:CORFU", "city:PORTO", "airport:PRG", "airport:FNI", "airport:MLA", "airport:REU", "city:LANZAROTE", "city:FEZ", "city:MALAGA", "city:ALICANTE", "city:PLOVDIV", "airport:ATH", "airport:LIS", "country:sk", "city:NIMES", "country:se", "city:DUBLIN", "airport:PSA", "airport:CIA", "region:CRETE", "city:ATHENS", "country:bg", "city:COPENHAGEN", "airport:VNO", "city:RIGA", "country:ba", "country:ro", "city:GIRONA"],
    "countryCode": "be",
    "base": true,
    "coords": {
      "lat": 50.4592,
      "lng": 4.45382
    },
    "priority": 7,
    "seasonalRoutes": [],
    "aliases": ["Charleroi", "Brussels Charleroi"],
    "weight": 1
  }, {
    "id": "airport:OTP",
    "name": "Bucharest",
    "categories": ["SKI", "FAM", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "OTP",
    "seoName": "Bucharest-Otopeni",
    "cityCode": "BUCHAREST",
    "country": "Romania",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:MRS", "city:CHARLEROI", "airport:BLQ", "airport:CRL", "country:gr", "region:ENGLAND", "airport:TSR", "airport:BGY", "airport:PSR", "airport:MAD", "city:TIMISOARA", "city:MILAN", "city:PALERMO", "city:BERLIN", "city:VIENNA", "city:ROME", "city:BOLOGNA", "city:AMMAN", "airport:DUB", "country:de", "airport:STN", "airport:CHQ", "airport:MXP", "country:es", "airport:BRS", "airport:SXF", "country:at", "city:CHANIA", "city:MARSEILLE", "country:it", "airport:ATH", "country:ie", "city:PAPHOS", "airport:VIE", "airport:PMO", "city:LONDON", "region:SICILY", "country:gb", "country:fr", "airport:AMM", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "city:ATHENS", "airport:CIA", "region:CRETE", "country:jo", "airport:PFO", "city:PESCARA", "country:ro", "country:be"],
    "countryCode": "ro",
    "base": true,
    "coords": {
      "lat": 44.5722,
      "lng": 26.1022
    },
    "priority": 85,
    "seasonalRoutes": [],
    "aliases": ["Otopeni"]
  }, {
    "id": "airport:BUD",
    "name": "Budapest",
    "categories": ["ROM", "FAM", "FST", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "BUD",
    "seoName": "budapest",
    "cityCode": "BUDAPEST",
    "country": "Hungary",
    "currencyCode": "HUF",
    "routes": ["city:CHARLEROI", "airport:ORK", "city:NUREMBERG", "city:SANTANDER", "airport:CRL", "country:gr", "region:ENGLAND", "airport:BGY", "city:GRAN_CANARIA", "airport:AGP", "city:MILAN", "city:EDINBURGH", "connectingFlight:IBZ:BGY", "city:BERLIN", "city:LAMEZIA", "city:BILLUND", "city:NAPLES", "country:pt", "connectingFlight:SUF:BGY", "airport:DUB", "city:VALENCIA", "airport:STN", "city:PISA", "country:es", "city:THESSALONIKI", "airport:BRS", "connectingFlight:CTA:BGY", "city:PARIS", "airport:NAP", "country:mt", "city:MARSEILLE", "airport:RAK", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:TMP", "city:PAPHOS", "airport:PMO", "region:TUSCANY", "city:MANCHESTER", "airport:SKG", "city:LONDON", "airport:BCN", "country:gb", "country:fr", "airport:SDR", "city:MALTA", "airport:PFO", "city:SEVILLE", "city:PRAGUE", "city:PESCARA", "airport:STR", "country:fi", "country:cy", "airport:VLC", "airport:MRS", "airport:SVQ", "country:cz", "city:BARI", "region:SARDINIA", "airport:BLL", "airport:LPA", "region:CANARY_ISLES", "city:BRINDISI", "airport:MAN", "connectingFlight:PSR:BGY", "airport:MAD", "airport:BVA", "country:ma", "city:CATANIA", "city:CORK", "city:TAMPERE", "connectingFlight:BDS:BGY", "city:VENICE", "city:PALERMO", "connectingFlight:CAG:BGY", "city:BARCELONA", "region:COSTA_DE_SOL", "city:MARRAKESH", "country:dk", "airport:NUE", "city:ROME", "city:EILAT", "region:COSTA_BRAVA", "airport:VDA", "city:STUTTGART", "city:AMMAN", "airport:CFU", "region:SCOTLAND", "country:de", "airport:EDI", "city:CORFU", "city:IBIZA", "city:PORTO", "airport:PRG", "airport:SXF", "airport:MLA", "airport:CPH", "country:it", "city:MALAGA", "airport:ATH", "country:ie", "country:il", "region:SICILY", "airport:CAG", "connectingFlight:OPO:BGY", "airport:TSF", "city:BIRMINGHAM", "airport:AMM", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "airport:PSA", "airport:CIA", "city:ATHENS", "city:COPENHAGEN", "country:jo", "region:PUGLIA", "airport:EMA", "city:CAGLIARI", "country:be"],
    "countryCode": "hu",
    "base": true,
    "coords": {
      "lat": 47.4369,
      "lng": 19.2556
    },
    "priority": 35,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BOJ",
    "name": "Burgas",
    "categories": ["CTY"],
    "iataCode": "BOJ",
    "seoName": "burgas",
    "cityCode": "BURGAS",
    "country": "Bulgaria",
    "currencyCode": "EUR",
    "routes": ["airport:HHN", "airport:NRN", "airport:KRK", "airport:RIX", "airport:BTS", "city:TEL_AVIV", "airport:RZE", "city:FRANKFURT", "country:it", "city:RZESZOW", "airport:WMI", "airport:BGY", "country:il", "city:KRAKOW", "city:DUSSELDORF", "city:MILAN", "country:sk", "airport:FMM", "city:WARSAW", "airport:KUN", "city:BRATISLAVA", "airport:TLV", "city:KAUNAS", "country:lv", "country:lt", "city:MEMMINGEN", "city:RIGA", "country:pl", "country:de"],
    "countryCode": "bg",
    "base": true,
    "coords": {
      "lat": 42.3413,
      "lng": 27.3055
    },
    "priority": 0,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BZG",
    "name": "Bydgoszcz",
    "categories": [],
    "iataCode": "BZG",
    "seoName": "bydgoszcz",
    "cityCode": "BYDGOSZCZ",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:STN", "city:GLASGOW", "city:DUSSELDORF", "country:gb", "airport:NRN", "airport:LTN", "city:KIEV", "country:ua", "city:BIRMINGHAM", "city:DUBLIN", "airport:GLA", "airport:KBP", "region:ENGLAND", "country:ie", "airport:DUB", "airport:BHX", "airport:PIK", "region:SCOTLAND", "city:LONDON", "country:de"],
    "countryCode": "pl",
    "base": false,
    "coords": {
      "lat": 53.0968,
      "lng": 17.9777
    },
    "priority": 86,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CAG",
    "name": "Cagliari",
    "categories": ["FAM", "SPR", "CUL", "OUT"],
    "iataCode": "CAG",
    "seoName": "cagliari",
    "cityCode": "CAGLIARI",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "connectingFlight:BTS:BGY", "city:NUREMBERG", "airport:KRK", "airport:GRO", "connectingFlight:HAM:BGY", "city:VERONA", "airport:CRL", "city:FRANKFURT", "city:TENERIFE", "country:gr", "region:ENGLAND", "airport:BGY", "city:GRAN_CANARIA", "airport:PMF", "city:MILAN", "city:EDINBURGH", "connectingFlight:IBZ:BGY", "country:hu", "city:BERLIN", "country:pt", "city:TRAPANI", "connectingFlight:EDI:BGY", "airport:SEN|Air Malta", "connectingFlight:BCN:BGY", "city:BOLOGNA", "country:pl", "connectingFlight:SXF:BGY", "city:VALENCIA", "airport:DUB", "connectingFlight:LPA:BGY", "airport:STN", "city:PISA", "airport:NRN", "country:es", "connectingFlight:VNO:BGY", "city:PARIS", "country:mt", "airport:BRI", "connectingFlight:PRG:BGY", "city:LISBON", "region:TUSCANY", "city:MANCHESTER", "city:LONDON", "airport:CTA", "city:DUSSELDORF", "city:VILNIUS", "country:gb", "country:fr", "city:BRATISLAVA", "airport:FKB", "city:SANTIAGO", "city:MALTA", "connectingFlight:SCQ:BGY", "city:SEVILLE", "city:PRAGUE", "connectingFlight:BUD:BGY", "connectingFlight:LIS:BGY", "airport:CUF", "airport:VRN", "connectingFlight:AGP:BGY", "airport:VLC", "country:cz", "airport:HHN", "airport:SVQ", "airport:BLQ", "connectingFlight:MLA:BGY", "city:BARI", "region:CANARY_ISLES", "airport:MAN", "airport:WMI", "airport:MAD", "city:KRAKOW", "airport:BVA", "city:CATANIA", "airport:MLA|Air Malta", "city:VENICE", "city:WARSAW", "region:COSTA_DE_SOL", "city:BARCELONA", "connectingFlight:TFS:BGY", "city:ROME", "airport:TPS", "country:lt", "connectingFlight:ATH:BGY", "region:COSTA_BRAVA", "airport:BUD", "connectingFlight:MAN:BGY", "region:SCOTLAND", "country:de", "airport:OPO", "city:IBIZA", "city:PORTO", "city:LANZAROTE", "city:CUNEO", "country:it", "city:ALICANTE", "city:MALAGA", "city:PARMA", "country:ie", "connectingFlight:ALC:BGY", "connectingFlight:BRE:BGY", "region:SICILY", "connectingFlight:NUE:BGY", "country:sk", "airport:TSF", "connectingFlight:BRS:BGY", "city:KARLSRUHE", "city:MADRID", "city:DUBLIN", "city:BRISTOL", "airport:PSA", "airport:CIA", "city:ATHENS", "region:PUGLIA", "connectingFlight:ACE:BGY", "city:BUDAPEST", "city:SOUTHEND_ON_SEA", "city:GIRONA", "country:be", "city:BREMEN"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 39.2515,
      "lng": 9.05428
    },
    "priority": 27,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CCF",
    "name": "Carcassonne",
    "categories": ["SKI", "FAM", "CUL", "OUT"],
    "iataCode": "CCF",
    "seoName": "carcassonne",
    "cityCode": "CARCASSONNE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:GLASGOW", "airport:OPO", "city:CHARLEROI", "city:CORK", "airport:EDI", "country:gb", "city:EDINBURGH", "city:PORTO", "airport:ORK", "city:BIRMINGHAM", "city:DUBLIN", "airport:CRL", "country:pt", "airport:GLA", "airport:EMA", "airport:MAN", "region:ENGLAND", "country:ie", "airport:DUB", "country:be", "region:SCOTLAND", "city:MANCHESTER", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.216,
      "lng": 2.30632
    },
    "priority": 81,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CWL",
    "name": "Cardiff",
    "categories": ["HEN", "FAM", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "CWL",
    "seoName": "cardiff",
    "cityCode": "CARDIFF",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["airport:BCN", "country:es", "airport:TFS", "airport:MLA", "city:BARCELONA", "city:DUBLIN", "city:MALTA", "country:mt", "country:pt", "city:TENERIFE", "region:CANARY_ISLES", "city:FARO", "country:ie", "region:COSTA_BRAVA", "airport:FAO", "airport:DUB"],
    "countryCode": "gb",
    "base": false,
    "coords": {
      "lat": 51.3967,
      "lng": -3.34333
    },
    "priority": 179,
    "seasonalRoutes": [],
    "aliases": ["Wales", "Great Britain", "UK", "GB"]
  }, {
    "id": "airport:CMN",
    "name": "Casablanca",
    "categories": [],
    "iataCode": "CMN",
    "seoName": "casablanca",
    "cityCode": "CASABLANCA",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["city:MALTA", "country:mt", "airport:MLA|Air Malta"],
    "countryCode": "ma",
    "base": false,
    "coords": {
      "lat": 33.3672,
      "lng": -7.5897
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CDT",
    "name": "Castellon (Valencia)",
    "categories": ["FAM", "CUL", "SEA", "OUT"],
    "iataCode": "CDT",
    "seoName": "castellon",
    "cityCode": "CASTELLON",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:SOFIA", "airport:POZ", "country:bg", "airport:SOF", "country:gb", "region:ENGLAND", "country:pl", "city:POZNAN", "city:LONDON"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 39.999,
      "lng": 0.026
    },
    "priority": 176,
    "seasonalRoutes": [],
    "aliases": ["Valencia", "Valencia Castellon", "Walencja"],
    "weight": 2
  }, {
    "id": "airport:CTA",
    "name": "Catania",
    "categories": ["FAM", "FST", "CTY", "CUL", "SEA"],
    "iataCode": "CTA",
    "seoName": "catania",
    "cityCode": "CATANIA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:CHARLEROI", "connectingFlight:BTS:BGY", "city:FRANKFURT", "connectingFlight:PMI:BGY", "city:TENERIFE", "city:TURIN", "country:gr", "region:ENGLAND", "city:PERUGIA", "airport:BGY", "city:EINDHOVEN", "city:MILAN", "city:EDINBURGH", "connectingFlight:BRI:FCO", "connectingFlight:IBZ:BGY", "country:hu", "city:BERLIN", "city:VIENNA", "airport:SEN|Air Malta", "connectingFlight:EDI:BGY", "connectingFlight:BCN:BGY", "city:BOLOGNA", "country:pl", "city:VALENCIA", "city:PISA", "country:es", "airport:MXP", "connectingFlight:VNO:BGY", "airport:VIE|Air Malta", "city:PALMA", "country:mt", "city:MARSEILLE", "airport:RAK", "airport:FRA", "city:TRIESTE", "connectingFlight:PRG:BGY", "region:TUSCANY", "airport:PEG", "city:VILNIUS", "country:gb", "airport:EIN", "country:fr", "city:BRATISLAVA", "city:MALTA", "connectingFlight:BRU:FCO", "city:SEVILLE", "city:PRAGUE", "connectingFlight:BUD:BGY", "connectingFlight:ACE:FCO", "country:nl", "connectingFlight:AGP:BGY", "country:cz", "airport:MRS", "airport:SVQ", "airport:BLQ", "city:BRUSSELS", "city:BARI", "region:SARDINIA", "region:CANARY_ISLES", "connectingFlight:VLC:BGY", "airport:FCO", "airport:MAD", "city:KRAKOW", "country:ma", "connectingFlight:CRL:BGY", "city:VENICE", "region:COSTA_DE_SOL", "city:BARCELONA", "connectingFlight:EMA:BGY", "city:MARRAKESH", "connectingFlight:TFS:BGY", "connectingFlight:BCN:FCO", "city:ROME", "country:lt", "connectingFlight:ATH:BGY", "region:COSTA_BRAVA", "region:SCOTLAND", "country:de", "connectingFlight:KRK:BGY", "city:IBIZA", "airport:SXF", "airport:MLA", "country:at", "city:LANZAROTE", "country:it", "city:MALAGA", "city:ALICANTE", "airport:ATH", "connectingFlight:ALC:BGY", "connectingFlight:BRE:BGY", "airport:CAG", "country:sk", "airport:TSF", "connectingFlight:BRS:BGY", "city:BIRMINGHAM", "city:MADRID", "city:BRISTOL", "airport:PSA", "city:ATHENS", "region:PUGLIA", "city:BUDAPEST", "city:SOUTHEND_ON_SEA", "airport:TRS", "city:CAGLIARI", "country:be", "connectingFlight:AGP:FCO", "city:BREMEN", "airport:TRN"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 37.4668,
      "lng": 15.0664
    },
    "priority": 24,
    "seasonalRoutes": [],
    "aliases": ["Fontanarossa", "Catania Fontanarossa"]
  }, {
    "id": "airport:CHQ",
    "name": "Chania",
    "categories": ["FAM", "NIT", "CTY", "CUL", "SEA"],
    "iataCode": "CHQ",
    "seoName": "crete",
    "cityCode": "CHANIA",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:HHN", "city:CHARLEROI", "airport:BLQ", "airport:KRK", "airport:CRL", "city:FRANKFURT", "airport:MAN", "country:gr", "region:ENGLAND", "airport:WMI", "airport:BGY", "airport:FCO", "city:EINDHOVEN", "city:KRAKOW", "airport:SOF", "city:MILAN", "city:WARSAW", "city:VIENNA", "city:BUCHAREST", "city:NAPLES", "city:SOFIA", "city:ROME", "city:LEEDS", "city:BOLOGNA", "country:pl", "airport:WRO", "airport:DUB", "airport:BHX", "region:SCOTLAND", "country:de", "city:GLASGOW", "airport:STN", "city:PISA", "airport:OTP", "airport:LBA", "airport:NRN", "city:THESSALONIKI", "airport:BRS", "country:at", "airport:NAP", "airport:GLA", "country:it", "airport:FRA", "airport:BRE", "country:ie", "city:PAPHOS", "airport:VIE", "region:TUSCANY", "city:MANCHESTER", "airport:SKG", "city:LONDON", "city:DUSSELDORF", "country:gb", "airport:EIN", "city:BIRMINGHAM", "city:WROCLAW", "city:DUBLIN", "city:BRISTOL", "airport:PSA", "country:bg", "airport:PFO", "airport:EMA", "country:nl", "country:ro", "country:be", "city:BREMEN"],
    "countryCode": "gr",
    "base": true,
    "coords": {
      "lat": 35.5317,
      "lng": 24.1497
    },
    "priority": 52,
    "seasonalRoutes": [],
    "aliases": ["Crete", "Crete Chania"]
  }, {
    "id": "airport:CFE",
    "name": "Clermont",
    "categories": ["FAM", "SPR", "CTY", "OUT"],
    "iataCode": "CFE",
    "seoName": "clermont-ferrand",
    "cityCode": "CLERMONT_FERRAND",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:OPO", "country:pt", "country:gb", "region:ENGLAND", "city:PORTO", "airport:LIS", "city:LISBON", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 45.7867,
      "lng": 3.16917
    },
    "priority": 171,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CLJ",
    "name": "Cluj",
    "categories": [],
    "iataCode": "CLJ",
    "seoName": "cluj",
    "cityCode": "CLUJ",
    "country": "Romania",
    "currencyCode": "EUR",
    "routes": ["airport:SEN", "country:gb", "city:SOUTHEND_ON_SEA", "region:ENGLAND"],
    "countryCode": "ro",
    "base": false,
    "coords": {
      "lat": 46.785,
      "lng": 23.6861
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CGN",
    "name": "Cologne",
    "categories": ["FAM", "SPR", "FST", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "CGN",
    "seoName": "cologne-bonn",
    "cityCode": "COLOGNE",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "airport:BGY", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:MILAN", "city:VITORIA-GASTEIZ", "connectingFlight:IBZ:BGY", "city:BERLIN", "city:LAMEZIA", "city:NAPLES", "city:SOFIA", "country:pt", "country:hr", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:DUB", "city:VALENCIA", "airport:STN", "city:ZADAR", "city:AQABA", "country:es", "airport:BRS", "airport:RIX", "airport:VIT", "airport:ZAD", "city:PALMA", "country:mt", "airport:RAK", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "connectingFlight:BRI:BGY", "airport:FAO", "city:LISBON", "airport:PMO", "city:MANCHESTER", "city:LONDON", "airport:BCN", "city:VILNIUS", "country:gb", "country:fr", "city:BORDEAUX", "airport:TFS", "city:MALTA", "city:KNOCK", "city:SEVILLE", "airport:AQJ", "connectingFlight:LIS:BGY", "airport:VLC", "airport:SVQ", "connectingFlight:NAP:BGY", "airport:BLQ", "city:BARI", "airport:LPA", "region:CANARY_ISLES", "airport:MAN", "city:BRINDISI", "airport:WMI", "airport:MAD", "country:ma", "airport:SOF", "connectingFlight:BDS:BGY", "city:VENICE", "city:WARSAW", "city:PALERMO", "city:BARCELONA", "region:COSTA_DE_SOL", "city:MARRAKESH", "country:dk", "city:ROME", "country:lv", "country:lt", "region:COSTA_BRAVA", "airport:CFU", "country:de", "airport:OPO", "connectingFlight:PMO:BGY", "city:CORFU", "city:IBIZA", "city:PORTO", "airport:SXF", "airport:MLA", "airport:CPH", "country:it", "city:ALICANTE", "city:MALAGA", "airport:ALC", "country:ie", "region:SICILY", "airport:TSF", "airport:NOC", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "airport:CIA", "country:bg", "city:COPENHAGEN", "country:jo", "region:PUGLIA", "airport:BOD", "airport:VNO", "city:RIGA"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 50.8659,
      "lng": 7.14274
    },
    "priority": 80,
    "seasonalRoutes": [],
    "aliases": ["Bonn", "Cologne Bonn"]
  }, {
    "id": "airport:CIY",
    "name": "Comiso",
    "categories": ["FAM", "FST", "CUL", "SEA", "OUT"],
    "iataCode": "CIY",
    "seoName": "comiso",
    "cityCode": "COMISO",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:PISA", "airport:STN", "airport:HHN", "city:CHARLEROI", "airport:NRN", "country:es", "airport:MXP", "airport:CRL", "city:FRANKFURT", "country:mt", "city:TURIN", "country:it", "city:ALICANTE", "region:ENGLAND", "airport:BGY", "region:TUSCANY", "airport:FCO", "city:LONDON", "connectingFlight:ALC:FCO", "city:DUSSELDORF", "airport:MLA|Air Malta", "city:MILAN", "country:gb", "city:BARCELONA", "connectingFlight:BCN:FCO", "airport:PSA", "city:MALTA", "airport:CIA", "city:ROME", "region:COSTA_BRAVA", "country:be", "country:de", "airport:TRN"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 36.9946,
      "lng": 14.6072
    },
    "priority": 101,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CPH",
    "name": "Copenhagen",
    "categories": ["ROM", "FAM", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "CPH",
    "seoName": "copenhagen",
    "cityCode": "COPENHAGEN",
    "country": "Denmark",
    "currencyCode": "DKK",
    "routes": ["airport:VLC", "country:cz", "airport:SVQ", "city:CHARLEROI", "airport:BLQ", "airport:LPL", "airport:LTN", "airport:CRL", "city:TENERIFE", "region:CANARY_ISLES", "airport:SEN", "country:gr", "region:ENGLAND", "airport:BGY", "airport:MAD", "city:MILAN", "airport:AGP", "airport:CGN", "city:EDINBURGH", "country:hu", "region:COSTA_DE_SOL", "city:VIENNA", "city:LIVERPOOL", "city:NAPLES", "city:KAUNAS", "country:pt", "city:ROME", "country:lt", "city:BOLOGNA", "region:COSTA_BRAVA", "city:STUTTGART", "city:VALENCIA", "airport:DUB", "airport:BUD", "region:SCOTLAND", "country:de", "airport:STN", "airport:OPO", "airport:EDI", "city:PORTO", "country:es", "airport:PRG", "city:THESSALONIKI", "country:at", "airport:NAP", "country:it", "city:MALAGA", "city:ALICANTE", "airport:ALC", "country:ie", "airport:VIE", "airport:SKG", "city:LONDON", "country:gb", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:KUN", "airport:TFS", "city:MADRID", "city:DUBLIN", "airport:CIA", "city:SEVILLE", "airport:BOD", "city:BUDAPEST", "city:PRAGUE", "city:SOUTHEND_ON_SEA", "airport:STR", "country:be"],
    "countryCode": "dk",
    "base": false,
    "coords": {
      "lat": 55.6181,
      "lng": 12.6561
    },
    "priority": 177,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CFU",
    "name": "Corfu",
    "categories": ["ROM", "FAM", "FST", "NIT", "CUL", "SEA", "OUT"],
    "iataCode": "CFU",
    "seoName": "corfu",
    "cityCode": "CORFU",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["airport:HHN", "city:CHARLEROI", "connectingFlight:NAP:BGY", "airport:BLQ", "airport:LPL", "airport:TXL", "airport:BTS", "airport:CRL", "city:FRANKFURT", "airport:POZ", "airport:SEN", "city:KATOWICE", "airport:MAN", "region:ENGLAND", "city:RZESZOW", "airport:WMI", "airport:BGY", "airport:FCO", "city:EINDHOVEN", "airport:CGN", "city:MILAN", "city:EDINBURGH", "city:VENICE", "city:PALERMO", "city:WARSAW", "country:hu", "city:BERLIN", "airport:DUS", "city:BARCELONA", "city:LIVERPOOL", "city:LAMEZIA", "city:NAPLES", "city:ROME", "country:lt", "connectingFlight:BCN:BGY", "city:LEEDS", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "region:COSTA_BRAVA", "airport:BUD", "airport:BHX", "region:SCOTLAND", "country:de", "city:PISA", "airport:STN", "airport:KTW", "airport:LBA", "connectingFlight:PMO:BGY", "airport:EDI", "airport:NRN", "country:es", "airport:RZE", "country:it", "airport:FRA", "region:TUSCANY", "city:MANCHESTER", "city:LONDON", "region:SICILY", "city:DUSSELDORF", "city:VILNIUS", "country:gb", "airport:EIN", "country:sk", "airport:TSF", "city:COLOGNE", "city:BIRMINGHAM", "city:BRATISLAVA", "airport:PSA", "airport:CIA", "airport:EMA", "airport:VNO", "city:BUDAPEST", "city:SOUTHEND_ON_SEA", "country:nl", "country:be", "city:POZNAN"],
    "countryCode": "gr",
    "base": true,
    "coords": {
      "lat": 39.6019,
      "lng": 19.9117
    },
    "priority": 113,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:ORK",
    "name": "Cork",
    "categories": ["GLF", "FAM", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "ORK",
    "seoName": "cork",
    "cityCode": "CORK",
    "country": "Ireland",
    "currencyCode": "EUR",
    "routes": ["city:CARCASSONNE", "airport:LPL", "airport:LTN", "airport:GRO", "city:SANTANDER", "airport:LPA", "airport:POZ", "region:CANARY_ISLES", "city:TENERIFE", "airport:LGW", "city:FARO", "region:ENGLAND", "airport:BGY", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:MILAN", "airport:CCF", "airport:ACE", "country:hu", "region:COSTA_DE_SOL", "city:BARCELONA", "city:LIVERPOOL", "city:NAPLES", "country:pt", "country:pl", "region:COSTA_BRAVA", "airport:WRO", "airport:BUD", "city:GDANSK", "airport:STN", "country:es", "airport:MLA", "airport:REU", "city:LANZAROTE", "airport:NAP", "city:PALMA", "country:mt", "city:MALAGA", "city:ALICANTE", "country:it", "airport:ALC", "airport:FAO", "city:LONDON", "country:gb", "country:fr", "city:BORDEAUX", "city:WROCLAW", "airport:SDR", "airport:TFS", "city:MALTA", "airport:BOD", "city:BUDAPEST", "city:GIRONA", "airport:GDN", "city:POZNAN"],
    "countryCode": "ie",
    "base": true,
    "coords": {
      "lat": 51.8413,
      "lng": -8.49111
    },
    "priority": 69,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CRA",
    "name": "Craiova",
    "categories": [],
    "iataCode": "CRA",
    "seoName": "craiova",
    "cityCode": "CRAIOVA",
    "country": "Romania",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "country:es", "city:VALENCIA"],
    "countryCode": "ro",
    "base": false,
    "coords": {
      "lat": 44.3181,
      "lng": 23.8886
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CRV",
    "name": "Crotone",
    "categories": ["FAM", "FST", "CTY", "SEA", "OUT"],
    "iataCode": "CRV",
    "seoName": "crotone",
    "cityCode": "CROTONE",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:PISA", "airport:PSA", "airport:NUE", "city:MILAN", "country:it", "airport:BLQ", "city:NUREMBERG", "city:BOLOGNA", "airport:BGY", "region:TUSCANY", "country:de"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 38.99722,
      "lng": 17.08028
    },
    "priority": 178,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CUF",
    "name": "Cuneo",
    "categories": ["FAM", "CTY", "OUT"],
    "iataCode": "CUF",
    "seoName": "cuneo",
    "cityCode": "CUNEO",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:CAG", "country:it", "region:SARDINIA", "city:CAGLIARI"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 44.547,
      "lng": 7.62322
    },
    "priority": 146,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:DLM",
    "name": "Dalaman",
    "categories": [],
    "iataCode": "DLM",
    "seoName": "dalaman",
    "cityCode": "DALAMAN",
    "country": "Turkey",
    "currencyCode": "EUR",
    "routes": ["country:sk", "country:ie", "airport:BTS", "airport:DUB", "city:BRATISLAVA", "city:DUBLIN"],
    "countryCode": "tr",
    "base": false,
    "coords": {
      "lat": 36.7147,
      "lng": 28.7928
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LDY",
    "name": "Derry",
    "categories": ["GLF", "HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "LDY",
    "seoName": "derry",
    "cityCode": "DERRY",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:GLASGOW", "city:LIVERPOOL", "airport:GLA", "airport:EDI", "country:gb", "city:EDINBURGH", "airport:LPL", "region:ENGLAND", "region:SCOTLAND"],
    "countryCode": "gb",
    "base": false,
    "coords": {
      "lat": 55.0428,
      "lng": -7.16111
    },
    "priority": 98,
    "seasonalRoutes": [],
    "aliases": ["UK", "Northern Ireland"]
  }, {
    "id": "airport:DNR",
    "name": "Dinard",
    "categories": ["FAM", "CTY"],
    "iataCode": "DNR",
    "seoName": "dinard",
    "cityCode": "DINARD",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:EMA", "country:gb", "region:ENGLAND", "city:BIRMINGHAM", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 48.5877,
      "lng": -2.07996
    },
    "priority": 128,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:DLE",
    "name": "Dole",
    "categories": ["FAM", "CTY", "OUT"],
    "iataCode": "DLE",
    "seoName": "dole",
    "cityCode": "DOLE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:OPO", "country:pt", "airport:FEZ", "country:ma", "airport:RAK", "country:gb", "city:FEZ", "city:PORTO", "region:ENGLAND", "city:LONDON", "city:MARRAKESH"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 47.039,
      "lng": 5.42725
    },
    "priority": 140,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:DTM",
    "name": "Dortmund",
    "categories": ["FAM", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "DTM",
    "seoName": "dortmund",
    "cityCode": "DORTMUND",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:OPO", "airport:LPL", "airport:AHO", "city:PORTO", "country:es", "city:THESSALONIKI", "region:SARDINIA", "airport:KRK", "city:PALMA", "country:gr", "country:it", "city:MALAGA", "region:ENGLAND", "city:LISBON", "connectingFlight:LIS:OPO", "airport:SKG", "city:LONDON", "city:KRAKOW", "airport:PMI", "country:gb", "airport:AGP", "region:COSTA_DE_SOL", "city:LIVERPOOL", "country:pt", "city:ALGHERO", "country:pl"],
    "countryCode": "de",
    "base": false,
    "coords": {
      "lat": 51.5183,
      "lng": 7.61224
    },
    "priority": 97,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:DUB",
    "name": "Dublin",
    "categories": ["GLF", "HEN", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "OUT", "XMS"],
    "iataCode": "DUB",
    "seoName": "dublin",
    "cityCode": "DUBLIN",
    "country": "Ireland",
    "currencyCode": "EUR",
    "routes": ["airport:LDE", "city:TALLINN", "city:CARCASSONNE", "airport:INN", "airport:LTN", "airport:KRK", "city:SANTANDER", "airport:CRL", "airport:VGO", "city:FRANKFURT", "city:KATOWICE", "country:gr", "airport:LCJ", "city:LA_ROCHELLE", "city:BODRUM", "airport:PMI", "city:EDINBURGH", "airport:TUF", "airport:CCF", "country:hu", "city:VIENNA", "city:SOFIA", "airport:KBP", "country:hr", "city:LEEDS", "connectingFlight:SUF:BGY", "city:BOLOGNA", "city:VALENCIA", "airport:STN", "airport:KTW", "country:es", "airport:BRU", "airport:BRS", "city:PARIS", "airport:ZAD", "city:PALMA", "airport:RAK", "airport:GLA", "airport:BRI", "airport:BRE", "airport:LUZ", "airport:VIE", "airport:PMO", "airport:LUX", "country:ee", "city:LONDON", "airport:LEI", "airport:BCN", "city:VILNIUS", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:KUN", "city:BORDEAUX", "airport:SDR", "airport:TFS", "city:MALTA", "airport:BSL", "city:VIGO", "city:SEVILLE", "airport:STR", "airport:HHN", "airport:BLQ", "airport:LPL", "city:BARI", "region:SARDINIA", "airport:NTE", "region:WALES", "airport:LPA", "city:BRINDISI", "airport:MAN", "city:MUNICH", "airport:NCL", "city:RZESZOW", "airport:MAD", "airport:NCE", "country:ma", "airport:SOF", "city:VENICE", "city:MARRAKESH", "city:BUCHAREST", "city:ROME", "country:lv", "country:lt", "city:MEMMINGEN", "country:lu", "airport:FUE", "city:STUTTGART", "city:DALAMAN", "city:GDANSK", "city:BYDGOSZCZ", "city:BASEL", "airport:LBA", "city:MURCIA", "airport:EDI", "city:IBIZA", "city:SALZBURG", "city:KIEV", "airport:LRH", "airport:CPH", "country:it", "airport:PIS", "airport:RMU", "airport:ALC", "region:SICILY", "airport:CAG", "airport:TSF", "airport:AMS", "city:POITIERS", "city:BIRMINGHAM", "city:WROCLAW", "city:MADRID", "airport:MUC", "airport:BOH", "region:PUGLIA", "airport:BOD", "city:BUDAPEST", "city:CAGLIARI", "city:BREMEN", "airport:TRN", "city:HAMBURG", "city:CHARLEROI", "city:BOURNEMOUTH", "airport:DLM", "airport:GRO", "airport:SZG", "city:TENERIFE", "city:TURIN", "city:FARO", "region:ENGLAND", "city:INNSBRUCK", "airport:BGY", "city:EINDHOVEN", "city:FUERTEVENTURA", "city:AMSTERDAM", "city:GRAN_CANARIA", "airport:AGP", "city:MILAN", "airport:BIQ", "city:SZCZECIN", "city:BERLIN", "city:LAMEZIA", "city:NAPLES", "city:KAUNAS", "country:pt", "city:RODEZ", "country:pl", "airport:SZZ", "airport:TLL", "airport:WRO", "city:TOURS", "airport:BHX", "city:LUBLIN", "city:PISA", "city:GLASGOW", "airport:BJV", "city:ZADAR", "airport:OTP", "city:THESSALONIKI", "airport:RIX", "city:CHANIA", "city:BIARRITZ", "city:GRENOBLE", "airport:NAP", "airport:RZE", "country:mt", "airport:FRA", "city:PAPHOS", "airport:FAO", "city:LISBON", "region:TUSCANY", "airport:BZG", "airport:SKG", "city:CARDIFF", "city:MANCHESTER", "city:ALMERIA", "city:BRATISLAVA", "airport:PFO", "city:PRAGUE", "country:nl", "airport:GDN", "country:cy", "airport:VLC", "country:cz", "airport:SVQ", "city:BRUSSELS", "airport:BTS", "airport:POZ", "airport:GNB", "region:CANARY_ISLES", "country:ch", "airport:LGW", "airport:SEN", "airport:WMI", "airport:AAR", "city:KRAKOW", "airport:BVA", "city:LOURDES", "airport:GOT", "airport:CGN", "connectingFlight:BDS:BGY", "airport:RDZ", "airport:FMM", "airport:ACE", "city:WARSAW", "country:ua", "city:PALERMO", "city:AARHUS", "airport:IBZ", "city:BARCELONA", "region:COSTA_DE_SOL", "city:LIVERPOOL", "country:dk", "airport:MJV", "airport:CWL", "country:tr", "region:COSTA_BRAVA", "airport:BUD", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "airport:OPO", "airport:CHQ", "city:PORTO", "airport:PRG", "airport:SXF", "airport:REU", "country:at", "airport:MLA", "city:LANZAROTE", "city:ALICANTE", "city:MALAGA", "airport:ATH", "airport:LIS", "airport:HAM", "country:sk", "city:NANTES", "country:se", "city:BRISTOL", "airport:PSA", "airport:CIA", "city:ATHENS", "region:CRETE", "country:bg", "city:COPENHAGEN", "airport:EMA", "city:LUXEMBOURG", "airport:VNO", "city:RIGA", "city:SOUTHEND_ON_SEA", "city:NICE", "country:ro", "city:GIRONA", "city:LODZ", "country:be", "city:GOTHENBURG", "city:POZNAN"],
    "countryCode": "ie",
    "base": true,
    "coords": {
      "lat": 53.4213,
      "lng": -6.27007
    },
    "priority": 2,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:DUS",
    "name": "Dusseldorf Int.",
    "categories": [],
    "iataCode": "DUS",
    "seoName": "dusseldorf-int",
    "cityCode": "DUSSELDORF",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:INN", "airport:LPA", "city:TENERIFE", "region:CANARY_ISLES", "country:gr", "city:FARO", "city:INNSBRUCK", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "country:ma", "airport:PMI", "airport:MLA|Air Malta", "airport:AGP", "airport:ACE", "city:PALERMO", "airport:IBZ", "region:COSTA_DE_SOL", "city:MARRAKESH", "city:HERAKLION", "city:NAPLES", "country:pt", "airport:RHO", "airport:FUE", "region:COSTA_BRAVA", "airport:CFU", "city:CORFU", "city:IBIZA", "country:es", "country:at", "airport:NAP", "city:LANZAROTE", "country:mt", "city:PALMA", "airport:RAK", "city:MALAGA", "country:it", "city:ALICANTE", "airport:KGS", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ALC", "airport:HER", "city:KOS", "airport:FAO", "city:RHODES", "airport:PMO", "region:SICILY", "airport:TFS", "city:MALTA", "region:CRETE"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 51.1722,
      "lng": 6.46
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:NRN",
    "name": "Dusseldorf Weeze",
    "categories": ["SKI", "FAM", "SPR", "FST", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "NRN",
    "seoName": "dusseldorf",
    "cityCode": "DUSSELDORF",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["city:TALLINN", "city:ESSAOUIRA", "city:TANGIER", "airport:GRO", "airport:INI", "connectingFlight:PDL:OPO", "city:SANTANDER", "city:BEZIERS", "city:LVIV", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "airport:CIY", "airport:BGY", "city:STOCKHOLM", "city:OUJDA", "airport:PSR", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "airport:AGP", "city:EDINBURGH", "airport:NYO", "city:LAMEZIA", "country:pt", "airport:AOI", "airport:AGA", "country:hr", "country:pl", "airport:TLL", "city:ANCONA", "city:VALENCIA", "airport:TNG", "airport:STN", "city:PISA", "city:ZADAR", "country:es", "city:THESSALONIKI", "city:CHANIA", "airport:ZAD", "city:NIS", "city:PALMA", "airport:RAK", "airport:BRI", "airport:BZR", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:FAO", "city:LISBON", "connectingFlight:LIS:OPO", "airport:PMO", "region:TUSCANY", "country:ee", "airport:SKG", "airport:BZG", "city:LONDON", "country:gb", "country:fr", "airport:LWO", "airport:SUF", "airport:TFS", "airport:SDR", "city:NADOR", "airport:OUD", "city:BURGAS", "city:RABAT", "city:PESCARA", "airport:RBA", "airport:VLC", "city:BARI", "region:SARDINIA", "airport:LPA", "region:CANARY_ISLES", "country:ma", "airport:ESU", "country:ua", "city:PALERMO", "airport:ACE", "airport:IBZ", "region:COSTA_DE_SOL", "city:MARRAKESH", "city:COMISO", "airport:NDR", "city:ROME", "city:EILAT", "airport:FUE", "region:COSTA_BRAVA", "airport:VDA", "airport:CFU", "city:AGADIR", "region:SCOTLAND", "city:BYDGOSZCZ", "airport:OPO", "airport:CHQ", "city:PONTA_DELGADA", "airport:EDI", "city:CORFU", "city:PORTO", "city:IBIZA", "city:LANZAROTE", "airport:FEZ", "country:it", "city:FEZ", "city:MALAGA", "city:ALICANTE", "airport:ALC", "country:il", "region:SICILY", "airport:CAG", "country:se", "airport:BOJ", "airport:PSA", "region:CRETE", "airport:CIA", "country:bg", "region:PUGLIA", "city:GIRONA", "city:CAGLIARI", "region:AZORES", "country:rs"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 51.6024,
      "lng": 6.14217
    },
    "priority": 54,
    "seasonalRoutes": [],
    "aliases": ["Weeze"]
  }, {
    "id": "airport:EMA",
    "name": "East Midlands",
    "categories": ["FAM", "SPR", "FST", "CUL", "OUT"],
    "iataCode": "EMA",
    "seoName": "east-midlands",
    "cityCode": "BIRMINGHAM",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:CARCASSONNE", "city:BERGERAC", "airport:KRK", "airport:GRO", "city:TENERIFE", "country:gr", "city:FARO", "airport:LCJ", "airport:BGY", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "airport:AGP", "airport:CCF", "country:hu", "city:BERLIN", "airport:EGC", "city:LAMEZIA", "city:NAPLES", "country:pt", "airport:RHO", "connectingFlight:SUF:BGY", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "city:PISA", "city:SHANNON", "city:DINARD", "airport:DNR", "country:es", "airport:RIX", "city:CHANIA", "connectingFlight:CTA:BGY", "airport:RZE", "airport:NAP", "country:mt", "city:PALMA", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:FAO", "city:RHODES", "region:TUSCANY", "airport:BCN", "country:fr", "airport:TFS", "city:MALTA", "city:KNOCK", "city:SEVILLE", "airport:VLC", "airport:SVQ", "airport:LPA", "region:BRITTANY", "region:CANARY_ISLES", "city:LIMOGES", "city:RZESZOW", "airport:WMI", "airport:MAH", "city:KRAKOW", "city:CATANIA", "airport:LIG", "city:VENICE", "city:PALERMO", "airport:ACE", "city:WARSAW", "airport:IBZ", "region:COSTA_DE_SOL", "city:BARCELONA", "city:ROME", "country:lv", "airport:MJV", "airport:FUE", "region:COSTA_BRAVA", "airport:SNN", "city:MENORCA", "airport:BUD", "airport:CFU", "country:de", "connectingFlight:PMO:BGY", "airport:CHQ", "city:MURCIA", "city:CORFU", "city:IBIZA", "airport:SXF", "airport:MLA", "airport:REU", "city:LANZAROTE", "country:it", "city:MALAGA", "city:ALICANTE", "airport:RMU", "airport:ALC", "country:ie", "region:SICILY", "airport:TSF", "city:WROCLAW", "airport:NOC", "city:DUBLIN", "airport:PSA", "region:CRETE", "airport:CIA", "city:BUDAPEST", "city:RIGA", "city:LODZ", "city:GIRONA"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 52.8311,
      "lng": -1.32806
    },
    "priority": 48,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB", "Nottingham", "Midlands"]
  }, {
    "id": "airport:EDI",
    "name": "Edinburgh",
    "categories": ["SKI", "GLF", "HEN", "FAM", "FST", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "EDI",
    "seoName": "edinburgh",
    "cityCode": "EDINBURGH",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:TALLINN", "city:HAMBURG", "city:DERRY", "city:CHARLEROI", "city:CARCASSONNE", "airport:KRK", "airport:GRO", "city:SANTANDER", "airport:CRL", "city:BEZIERS", "city:FRANKFURT", "airport:VGO", "city:KATOWICE", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "city:FUERTEVENTURA", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:MILAN", "airport:CCF", "airport:NYO", "country:hu", "airport:LDY", "city:SZCZECIN", "city:BERLIN", "city:KAUNAS", "city:BILLUND", "city:SOFIA", "city:NAPLES", "airport:TLS", "country:pt", "city:BOLOGNA", "country:pl", "airport:SZZ", "airport:TLL", "airport:WRO", "city:VALENCIA", "airport:DUB", "city:PISA", "airport:STN", "airport:KTW", "airport:NRN", "country:es", "airport:RIX", "connectingFlight:CTA:BGY", "country:mt", "city:PALMA", "city:MARSEILLE", "airport:BZR", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "connectingFlight:BRI:BGY", "airport:FAO", "city:LISBON", "region:TUSCANY", "airport:LUX", "country:ee", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:EIN", "country:fr", "airport:KUN", "city:BORDEAUX", "airport:SDR", "airport:TFS", "city:BRATISLAVA", "airport:FKB", "city:MALTA", "city:VIGO", "city:SEVILLE", "city:PRAGUE", "country:nl", "airport:GDN", "airport:VLC", "country:cz", "airport:SVQ", "airport:HHN", "airport:MRS", "connectingFlight:NAP:BGY", "airport:BLQ", "city:TOULOUSE", "city:BARI", "region:SARDINIA", "airport:BTS", "airport:BLL", "airport:NTE", "airport:LPA", "airport:POZ", "region:CANARY_ISLES", "city:BRINDISI", "airport:WMI", "city:KRAKOW", "city:CATANIA", "airport:GOT", "airport:SOF", "connectingFlight:BDS:BGY", "city:VENICE", "airport:FMM", "city:WARSAW", "city:PALERMO", "airport:ACE", "connectingFlight:CAG:BGY", "airport:IBZ", "city:BARCELONA", "region:COSTA_DE_SOL", "country:dk", "city:ROME", "country:lv", "country:lt", "city:MEMMINGEN", "country:lu", "airport:FUE", "region:COSTA_BRAVA", "airport:BUD", "airport:CFU", "city:GDANSK", "country:de", "airport:OPO", "connectingFlight:PMO:BGY", "city:CORFU", "city:IBIZA", "city:PORTO", "airport:PRG", "airport:SXF", "airport:MLA", "city:LANZAROTE", "airport:CPH", "country:it", "city:MALAGA", "airport:PIS", "city:ALICANTE", "airport:ALC", "airport:LIS", "country:ie", "airport:HAM", "region:SICILY", "region:NORTHERN_IRELAND", "country:sk", "airport:TSF", "city:POITIERS", "city:KARLSRUHE", "city:NANTES", "country:se", "city:WROCLAW", "city:DUBLIN", "airport:PSA", "airport:CIA", "city:COPENHAGEN", "country:bg", "region:PUGLIA", "city:LUXEMBOURG", "airport:BOD", "city:BUDAPEST", "city:RIGA", "city:CAGLIARI", "city:GIRONA", "country:be", "city:GOTHENBURG", "city:POZNAN"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 55.95,
      "lng": -3.3725
    },
    "priority": 31,
    "seasonalRoutes": [],
    "aliases": ["Scotland", "Great Britain", "UK", "GB"]
  }, {
    "id": "airport:VDA",
    "name": "Eilat (Ovda)",
    "categories": [],
    "iataCode": "VDA",
    "seoName": "eilat-ovda",
    "cityCode": "EILAT",
    "country": "Israel",
    "currencyCode": "EUR",
    "routes": ["country:cz", "airport:HHN", "city:CHARLEROI", "airport:NRN", "airport:PRG", "airport:KRK", "airport:SXF", "airport:BTS", "airport:CRL", "city:FRANKFURT", "airport:POZ", "country:it", "airport:BRE", "airport:WMI", "airport:BGY", "city:KRAKOW", "city:DUSSELDORF", "city:MILAN", "country:sk", "city:KARLSRUHE", "city:WARSAW", "country:hu", "airport:KUN", "city:BERLIN", "city:BRATISLAVA", "airport:FKB", "city:KAUNAS", "city:BUDAPEST", "country:lt", "city:PRAGUE", "country:pl", "airport:BUD", "airport:GDN", "country:be", "city:POZNAN", "city:BREMEN", "city:GDANSK", "country:de"],
    "countryCode": "il",
    "base": false,
    "coords": {
      "lat": 29.9402,
      "lng": 34.9358
    },
    "priority": 189,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:EIN",
    "name": "Eindhoven",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL"],
    "iataCode": "EIN",
    "seoName": "eindhoven",
    "cityCode": "EINDHOVEN",
    "country": "Netherlands",
    "currencyCode": "EUR",
    "routes": ["city:TANGIER", "airport:GRO", "airport:KRK", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "airport:BGY", "city:STOCKHOLM", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:MILAN", "city:EDINBURGH", "airport:NYO", "city:SOFIA", "city:NAPLES", "country:pt", "airport:AGA", "city:ALGHERO", "city:BOLOGNA", "country:pl", "city:VALENCIA", "airport:DUB", "airport:TNG", "airport:STN", "city:PISA", "airport:AHO", "country:es", "airport:MXP", "city:THESSALONIKI", "airport:RIX", "city:CHANIA", "airport:NAP", "country:mt", "city:PALMA", "city:MARSEILLE", "airport:RAK", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:FAO", "city:LISBON", "region:TUSCANY", "city:MANCHESTER", "airport:SKG", "city:LONDON", "airport:CTA", "country:gb", "country:fr", "airport:TFS", "city:BRATISLAVA", "city:MALTA", "city:SEVILLE", "city:PRAGUE", "city:RABAT", "airport:RBA", "airport:VLC", "country:cz", "airport:MRS", "airport:SVQ", "airport:BLQ", "region:SARDINIA", "airport:BTS", "airport:LPA", "region:CANARY_ISLES", "city:BRINDISI", "airport:MAN", "airport:WMI", "airport:OMR", "airport:AAR", "airport:MAD", "city:KRAKOW", "country:ma", "city:CATANIA", "airport:SOF", "city:VENICE", "city:WARSAW", "airport:ACE", "city:AARHUS", "airport:IBZ", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "country:dk", "city:ROME", "airport:MJV", "country:lv", "region:COSTA_BRAVA", "airport:BDS", "city:AGADIR", "airport:CFU", "region:SCOTLAND", "airport:OPO", "airport:CHQ", "city:MURCIA", "airport:EDI", "city:CORFU", "city:IBIZA", "city:PORTO", "airport:PRG", "city:ORADEA", "airport:MLA", "airport:REU", "city:LANZAROTE", "airport:FEZ", "country:it", "city:MALAGA", "city:FEZ", "city:ALICANTE", "airport:ALC", "airport:ATH", "airport:LIS", "country:ie", "region:SICILY", "country:sk", "airport:TSF", "country:se", "city:DUBLIN", "city:MADRID", "airport:PSA", "airport:CIA", "city:ATHENS", "region:CRETE", "country:bg", "region:PUGLIA", "city:RIGA", "country:ro", "city:GIRONA"],
    "countryCode": "nl",
    "base": true,
    "coords": {
      "lat": 51.4501,
      "lng": 5.37453
    },
    "priority": 40,
    "seasonalRoutes": [],
    "aliases": ["Holland"]
  }, {
    "id": "airport:ESU",
    "name": "Essaouira",
    "categories": ["GLF", "FAM", "SPR", "CTY", "CUL", "SEA"],
    "iataCode": "ESU",
    "seoName": "essaouira",
    "cityCode": "ESSAOUIRA",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["city:DUSSELDORF", "airport:NRN", "country:de"],
    "countryCode": "ma",
    "base": false,
    "coords": {
      "lat": 31.3918,
      "lng": -9.6757
    },
    "priority": 173,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:EXT",
    "name": "Exeter",
    "categories": [],
    "iataCode": "EXT",
    "seoName": "exeter",
    "cityCode": "EXETER",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["airport:NAP", "city:MALTA", "country:mt", "city:NAPLES", "country:it", "airport:AGP", "city:MALAGA", "country:es", "airport:MLA", "region:COSTA_DE_SOL"],
    "countryCode": "gb",
    "base": false,
    "coords": {
      "lat": 50.7344,
      "lng": -3.4139
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:FAO",
    "name": "Faro",
    "categories": ["GLF", "HEN", "FAM", "FST", "NIT", "CTY", "SEA"],
    "iataCode": "FAO",
    "seoName": "faro",
    "cityCode": "FARO",
    "country": "Portugal",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:BOURNEMOUTH", "city:CHARLEROI", "airport:ORK", "city:NUREMBERG", "airport:LTN", "connectingFlight:BCN:OPO", "airport:CRL", "city:FRANKFURT", "region:ENGLAND", "connectingFlight:BRU:OPO", "city:STOCKHOLM", "airport:BGY", "airport:KIR", "city:EINDHOVEN", "city:MILAN", "city:EDINBURGH", "airport:NYO", "city:BERLIN", "airport:DUS", "city:VIENNA", "country:pt", "city:NEWQUAY", "city:LEEDS", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "airport:BHX", "city:KERRY", "city:GLASGOW", "airport:STN", "city:SHANNON", "airport:NRN", "country:es", "airport:BRS", "city:PARIS", "city:MARSEILLE", "airport:BRE", "airport:FRA", "airport:NQY", "airport:VIE", "city:CARDIFF", "city:MANCHESTER", "city:LONDON", "city:DUSSELDORF", "connectingFlight:BGY:OPO", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "city:KNOCK", "country:nl", "airport:MRS", "airport:HHN", "city:BRUSSELS", "airport:LPL", "airport:TXL", "region:WALES", "airport:SEN", "airport:MAN", "airport:NCL", "airport:WMI", "connectingFlight:BLQ:OPO", "airport:BVA", "city:CORK", "airport:CGN", "airport:FMM", "city:WARSAW", "city:BARCELONA", "city:LIVERPOOL", "airport:ABZ", "city:MEMMINGEN", "airport:CWL", "region:COSTA_BRAVA", "airport:SNN", "city:BELFAST", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "airport:OPO", "airport:LBA", "airport:EDI", "city:PORTO", "connectingFlight:NUE:OPO", "airport:SXF", "country:at", "country:it", "country:ie", "airport:HAM", "airport:PIK", "region:NORTHERN_IRELAND", "city:BIRMINGHAM", "country:se", "city:WROCLAW", "airport:NOC", "city:ABERDEEN", "connectingFlight:VLC:OPO", "city:DUBLIN", "city:BRISTOL", "airport:BOH", "airport:EMA", "city:SOUTHEND_ON_SEA", "country:be", "city:BREMEN", "airport:BFS"],
    "countryCode": "pt",
    "base": true,
    "coords": {
      "lat": 37.0144,
      "lng": -7.96591
    },
    "priority": 23,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:FEZ",
    "name": "Fez",
    "categories": ["GLF", "FAM", "CTY", "OUT"],
    "iataCode": "FEZ",
    "seoName": "fez",
    "cityCode": "FEZ",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["airport:VLC", "airport:MRS", "airport:HHN", "airport:SVQ", "city:DOLE", "city:CHARLEROI", "airport:XCR", "city:TOULOUSE", "airport:NTE", "airport:DLE", "airport:CRL", "region:BRITTANY", "city:FRANKFURT", "city:TURIN", "region:ENGLAND", "airport:BGY", "airport:MAD", "city:EINDHOVEN", "airport:BVA", "city:MILAN", "city:VENICE", "airport:FMM", "city:BARCELONA", "airport:TLS", "city:MEMMINGEN", "region:COSTA_BRAVA", "city:VALENCIA", "country:de", "city:PISA", "airport:STN", "airport:NRN", "country:es", "airport:FNI", "city:PARIS", "city:MARSEILLE", "city:BREST", "country:it", "airport:BRE", "region:TUSCANY", "airport:BES", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "airport:EIN", "country:gb", "airport:TSF", "city:NIMES", "country:fr", "city:NANTES", "city:BORDEAUX", "city:MADRID", "airport:PSA", "city:SEVILLE", "airport:BOD", "country:nl", "country:be", "city:BREMEN", "airport:TRN"],
    "countryCode": "ma",
    "base": true,
    "coords": {
      "lat": 33.9273,
      "lng": -4.97796
    },
    "priority": 55,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:FSC",
    "name": "Figari",
    "categories": ["FAM", "SEA"],
    "iataCode": "FSC",
    "seoName": "figari",
    "cityCode": "FIGARI",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:BVA", "airport:CRL", "city:CHARLEROI", "country:fr", "city:PARIS", "country:be"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 41.5006,
      "lng": 9.09778
    },
    "priority": 142,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:HHN",
    "name": "Frankfurt Hahn",
    "categories": ["SKI", "FAM", "CTY", "CUL", "XMS"],
    "iataCode": "HHN",
    "seoName": "frankfurt-hahn",
    "cityCode": "FRANKFURT",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["city:TANGIER", "airport:GRO", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "airport:CIY", "airport:KIR", "airport:PSR", "city:PULA", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:EDINBURGH", "city:LAMEZIA", "city:NAPLES", "country:pt", "city:ALGHERO", "country:hr", "city:NEWQUAY", "city:TRAPANI", "airport:PDL", "airport:DUB", "city:KERRY", "city:PISA", "airport:TNG", "airport:STN", "airport:MPL", "airport:AHO", "country:es", "city:THESSALONIKI", "airport:RIX", "airport:SCQ", "city:CHANIA", "airport:NAP", "city:PALMA", "airport:RAK", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:NQY", "airport:PUY", "airport:FAO", "city:LISBON", "region:TUSCANY", "airport:SKG", "city:LONDON", "city:VILNIUS", "country:gb", "country:fr", "airport:SUF", "airport:TFS", "city:NADOR", "city:SANTIAGO", "city:BURGAS", "city:PESCARA", "city:BARI", "region:SARDINIA", "airport:LPA", "region:CANARY_ISLES", "country:ma", "city:MONTPELLIER", "airport:ACE", "airport:IBZ", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "city:COMISO", "city:ROME", "airport:NDR", "country:lv", "airport:TPS", "country:lt", "city:EILAT", "region:COSTA_BRAVA", "airport:VDA", "airport:CFU", "region:SCOTLAND", "airport:CHQ", "airport:EDI", "city:PONTA_DELGADA", "city:CORFU", "city:IBIZA", "airport:REU", "city:LANZAROTE", "airport:FEZ", "country:it", "city:FEZ", "city:ALICANTE", "city:MALAGA", "airport:ALC", "airport:LIS", "country:ie", "country:il", "region:SICILY", "city:JEREZ", "airport:CAG", "airport:XRY", "city:DUBLIN", "airport:BOJ", "airport:PSA", "airport:CIA", "region:CRETE", "country:bg", "region:PUGLIA", "airport:VNO", "city:RIGA", "city:CAGLIARI", "city:GIRONA", "region:AZORES"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 49.9487,
      "lng": 7.26389
    },
    "priority": 36,
    "seasonalRoutes": [],
    "aliases": ["Hahn", "Frankfurt Hahn"]
  }, {
    "id": "airport:FRA",
    "name": "Frankfurt International",
    "categories": ["SKI", "FAM", "CTY", "CUL", "XMS"],
    "iataCode": "FRA",
    "seoName": "frankfurt",
    "cityCode": "FRANKFURT",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "airport:SVQ", "city:PERPIGNAN", "airport:MRS", "airport:EFL", "airport:JTR", "city:SANTORINI", "airport:KRK", "airport:GRO", "airport:LPA", "city:KEFALONIA", "region:CANARY_ISLES", "city:TENERIFE", "country:gr", "airport:MAN", "city:BRINDISI", "city:FARO", "region:ENGLAND", "city:PERUGIA", "city:MYKONOS", "airport:BGY", "airport:PGF", "airport:MAD", "city:PULA", "city:KRAKOW", "city:GRAN_CANARIA", "country:ma", "airport:PMI", "city:CATANIA", "airport:MLA|Air Malta", "city:MILAN", "airport:AGP", "airport:JMK", "city:VENICE", "airport:ACE", "city:BARCELONA", "region:COSTA_DE_SOL", "country:pt", "airport:AGA", "country:hr", "airport:MJV", "country:pl", "region:COSTA_BRAVA", "airport:BDS", "airport:DUB", "city:VALENCIA", "airport:CFU", "city:AGADIR", "airport:STN", "city:PISA", "city:ZADAR", "airport:OPO", "airport:CHQ", "city:MURCIA", "city:CORFU", "city:PORTO", "country:es", "city:RIJEKA", "city:CHANIA", "city:LANZAROTE", "airport:ZAD", "city:PALMA", "country:mt", "city:MARSEILLE", "country:it", "city:ALICANTE", "city:MALAGA", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ALC", "airport:ATH", "airport:LIS", "country:ie", "airport:FAO", "airport:PUY", "city:LISBON", "airport:PEG", "region:TUSCANY", "city:MANCHESTER", "airport:CTA", "city:LONDON", "region:SICILY", "airport:BCN", "country:gb", "airport:TSF", "country:fr", "airport:TFS", "city:MADRID", "city:DUBLIN", "city:MALTA", "airport:PSA", "region:CRETE", "city:ATHENS", "city:SEVILLE", "region:PUGLIA", "airport:RJK", "city:GIRONA"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 50.02,
      "lng": 8.3414
    },
    "priority": 36,
    "seasonalRoutes": [],
    "aliases": ["Frankfurt International", "International"]
  }, {
    "id": "airport:FUE",
    "name": "Fuerteventura",
    "categories": ["FAM", "FST", "SEA"],
    "iataCode": "FUE",
    "seoName": "fuerteventura",
    "cityCode": "FUERTEVENTURA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:SVQ", "city:CHARLEROI", "airport:TXL", "airport:LPL", "airport:LTN", "airport:CRL", "airport:MAN", "region:ENGLAND", "airport:WMI", "airport:BGY", "airport:MAD", "city:MILAN", "city:EDINBURGH", "city:WARSAW", "city:BERLIN", "airport:DUS", "city:VIENNA", "city:BARCELONA", "city:LIVERPOOL", "city:LEEDS", "region:COSTA_BRAVA", "country:pl", "airport:SNN", "airport:DUB", "airport:BHX", "region:SCOTLAND", "country:de", "city:PISA", "airport:STN", "city:GLASGOW", "airport:LBA", "city:SHANNON", "airport:EDI", "airport:NRN", "country:es", "airport:SXF", "country:at", "country:it", "airport:BRE", "country:ie", "region:TUSCANY", "airport:VIE", "airport:PIK", "city:MANCHESTER", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "city:BIRMINGHAM", "city:MADRID", "city:DUBLIN", "airport:PSA", "airport:EMA", "city:SEVILLE", "country:be", "city:BREMEN"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 28.4527,
      "lng": -13.8638
    },
    "priority": 71,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:GDN",
    "name": "Gdansk",
    "categories": ["FAM", "SPR", "FST", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "GDN",
    "seoName": "gdansk",
    "cityCode": "GDANSK",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:VXO", "airport:ORK", "airport:KRK", "airport:MAN", "country:gr", "airport:NCL", "region:ENGLAND", "airport:BGY", "city:STOCKHOLM", "airport:AAR", "city:KRAKOW", "city:CORK", "city:MILAN", "city:EDINBURGH", "country:ua", "airport:NYO", "city:AARHUS", "city:BARCELONA", "country:dk", "city:NAPLES", "airport:TLV", "airport:KBP", "city:EILAT", "city:LEEDS", "region:COSTA_BRAVA", "country:pl", "airport:VDA", "city:BELFAST", "airport:WRO", "airport:DUB", "airport:BHX", "region:SCOTLAND", "city:NEWCASTLE", "airport:STN", "city:PISA", "airport:LBA", "airport:EDI", "airport:TRF", "country:es", "city:KIEV", "airport:BRS", "airport:REU", "airport:MLA", "city:TEL_AVIV", "airport:NAP", "country:mt", "country:it", "city:ALICANTE", "airport:ALC", "airport:ATH", "country:ie", "region:TUSCANY", "country:il", "city:MANCHESTER", "city:LONDON", "city:OSLO", "country:gb", "city:VAXJO", "region:NORTHERN_IRELAND", "city:BIRMINGHAM", "country:se", "city:WROCLAW", "city:DUBLIN", "city:BRISTOL", "airport:PSA", "city:MALTA", "city:ATHENS", "airport:BFS", "country:no"],
    "countryCode": "pl",
    "base": true,
    "coords": {
      "lat": 54.3776,
      "lng": 18.4662
    },
    "priority": 56,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:GVA",
    "name": "Geneva",
    "categories": [],
    "iataCode": "GVA",
    "seoName": "geneva",
    "cityCode": "GENEVA",
    "country": "Switzerland",
    "currencyCode": "CHF",
    "routes": ["city:MALTA", "country:mt", "airport:MLA|Air Malta"],
    "countryCode": "ch",
    "base": false,
    "coords": {
      "lat": 46.2383,
      "lng": 6.1094
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:GOA",
    "name": "Genoa",
    "categories": ["SKI", "ROM", "FAM", "CTY", "CUL"],
    "iataCode": "GOA",
    "seoName": "genoa",
    "cityCode": "GENOA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:BRI", "region:PUGLIA", "country:gb", "country:it", "region:ENGLAND", "city:BARI", "city:LONDON"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 44.4133,
      "lng": 8.8375
    },
    "priority": 106,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:GLA",
    "name": "Glasgow",
    "categories": ["SKI", "GLF", "HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "GLA",
    "seoName": "glasgow",
    "cityCode": "GLASGOW",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["airport:VLC", "city:CHARLEROI", "city:DERRY", "city:CARCASSONNE", "airport:KRK", "airport:CRL", "airport:LPA", "region:CANARY_ISLES", "country:gr", "region:ENGLAND", "airport:WMI", "airport:MAD", "city:KRAKOW", "city:GRAN_CANARIA", "airport:AGP", "airport:SOF", "airport:CCF", "city:WARSAW", "airport:ACE", "airport:LDY", "city:BERLIN", "region:COSTA_DE_SOL", "city:SOFIA", "country:pt", "country:lv", "country:lt", "airport:PLQ", "country:pl", "region:COSTA_BRAVA", "airport:WRO", "airport:DUB", "city:VALENCIA", "city:BYDGOSZCZ", "country:de", "airport:STN", "airport:CHQ", "country:es", "airport:RIX", "airport:SXF", "city:CHANIA", "city:LANZAROTE", "city:MALAGA", "city:ALICANTE", "airport:ALC", "airport:LIS", "country:ie", "city:LISBON", "airport:BZG", "city:LONDON", "country:gb", "region:NORTHERN_IRELAND", "country:fr", "city:WROCLAW", "city:DUBLIN", "city:MADRID", "region:CRETE", "country:bg", "city:RIGA", "city:PALANGA", "country:be"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 55.67194,
      "lng": -4.43306
    },
    "priority": 181,
    "seasonalRoutes": [],
    "aliases": ["Scotland", "Great Britain", "UK", "GB"],
    "weight": 1
  }, {
    "id": "airport:PIK",
    "name": "Glasgow Prestwick",
    "categories": ["SKI", "GLF", "HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "PIK",
    "seoName": "glasgow-prestwick",
    "cityCode": "GLASGOW",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:PISA", "city:MURCIA", "city:IBIZA", "country:es", "airport:GRO", "airport:MLA", "airport:LPA", "airport:RZE", "city:LANZAROTE", "country:mt", "city:PALMA", "region:CANARY_ISLES", "city:TENERIFE", "country:it", "city:ALICANTE", "airport:RMU", "city:MALAGA", "city:FARO", "city:RZESZOW", "airport:ALC", "airport:FAO", "region:TUSCANY", "airport:BZG", "city:FUERTEVENTURA", "airport:BCN", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "airport:ACE", "airport:IBZ", "airport:TFS", "city:BARCELONA", "region:COSTA_DE_SOL", "airport:PSA", "city:MALTA", "airport:CIA", "country:pt", "city:ROME", "airport:MJV", "airport:FUE", "region:COSTA_BRAVA", "country:pl", "city:GIRONA", "city:BYDGOSZCZ"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 55.5094,
      "lng": -4.58667
    },
    "priority": 102,
    "seasonalRoutes": [],
    "aliases": ["Scotland", "Great Britain", "UK", "GB", "Glasgow Prestwick", "Prestwick"],
    "weight": 2
  }, {
    "id": "airport:LPA",
    "name": "Gran Canaria",
    "categories": ["FAM", "SEA", "OUT"],
    "iataCode": "LPA",
    "seoName": "gran-canaria",
    "cityCode": "GRAN_CANARIA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:BOURNEMOUTH", "airport:ORK", "airport:LTN", "airport:KRK", "airport:CRL", "city:FRANKFURT", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "city:EINDHOVEN", "city:MILAN", "city:EDINBURGH", "airport:NYO", "country:hu", "city:BERLIN", "airport:DUS", "city:VIENNA", "city:LAMEZIA", "city:NAPLES", "country:pt", "city:LEEDS", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "city:VALENCIA", "airport:DUB", "airport:BHX", "airport:STN", "city:GLASGOW", "city:PISA", "airport:NRN", "country:es", "airport:MXP", "airport:BRS", "airport:SCQ", "airport:GLA", "connectingFlight:BRI:BGY", "airport:FRA", "airport:VIE", "region:TUSCANY", "city:MANCHESTER", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:EIN", "city:COLOGNE", "city:SANTIAGO", "city:SEVILLE", "country:nl", "country:no", "airport:VLC", "airport:SVQ", "airport:HHN", "connectingFlight:NAP:BGY", "airport:BLQ", "airport:LPL", "airport:TXL", "city:BARI", "region:SARDINIA", "airport:MAN", "city:BRINDISI", "airport:WMI", "airport:MAD", "city:KRAKOW", "city:CORK", "airport:CGN", "connectingFlight:BDS:BGY", "city:VENICE", "city:WARSAW", "city:PALERMO", "connectingFlight:CAG:BGY", "city:BARCELONA", "city:LIVERPOOL", "region:COSTA_BRAVA", "airport:BUD", "region:SCOTLAND", "country:de", "airport:OPO", "airport:LBA", "connectingFlight:PMO:BGY", "airport:EDI", "city:PORTO", "airport:TRF", "airport:SXF", "country:at", "country:it", "country:ie", "airport:HAM", "airport:PIK", "region:SICILY", "city:OSLO", "airport:TSF", "city:BIRMINGHAM", "country:se", "city:MADRID", "city:DUBLIN", "city:BRISTOL", "airport:PSA", "airport:BOH", "region:PUGLIA", "airport:EMA", "city:BUDAPEST", "city:CAGLIARI", "country:be"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 27.9319,
      "lng": -15.3866
    },
    "priority": 51,
    "seasonalRoutes": [],
    "aliases": ["Canaria"]
  }, {
    "id": "airport:GRZ",
    "name": "Graz",
    "categories": [],
    "iataCode": "GRZ",
    "seoName": "graz",
    "cityCode": "GRAZ",
    "country": "Austria",
    "currencyCode": "EUR",
    "routes": ["city:PALMA", "airport:PMI", "country:es"],
    "countryCode": "at",
    "base": false,
    "coords": {
      "lat": 46.9911,
      "lng": 15.4396
    },
    "priority": 209,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:GNB",
    "name": "Grenoble",
    "categories": ["SKI", "FAM", "CTY", "OUT"],
    "iataCode": "GNB",
    "seoName": "grenoble",
    "cityCode": "GRENOBLE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "country:gb", "region:ENGLAND", "country:ie", "airport:DUB", "city:DUBLIN", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 45.3629,
      "lng": 5.32937
    },
    "priority": 168,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:GOT",
    "name": "Göteborg Landvetter",
    "categories": ["SKI", "FAM", "SPR", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "GOT",
    "seoName": "gothenburg-landvetter",
    "cityCode": "GOTHENBURG",
    "country": "Sweden",
    "currencyCode": "SEK",
    "routes": ["country:cz", "airport:KRK", "airport:MAN", "country:gr", "region:ENGLAND", "airport:WMI", "airport:BGY", "city:KRAKOW", "airport:PMI", "city:MILAN", "airport:AGP", "city:EDINBURGH", "city:WARSAW", "region:COSTA_DE_SOL", "city:BARCELONA", "city:ROME", "country:hr", "region:COSTA_BRAVA", "country:pl", "city:STUTTGART", "airport:DUB", "region:SCOTLAND", "country:de", "airport:STN", "city:PISA", "city:ZADAR", "airport:EDI", "country:es", "airport:PRG", "city:THESSALONIKI", "airport:MLA", "airport:ZAD", "country:mt", "city:PALMA", "country:it", "city:MALAGA", "city:ALICANTE", "airport:ALC", "country:ie", "region:TUSCANY", "city:MANCHESTER", "airport:SKG", "city:LONDON", "airport:BCN", "country:gb", "city:DUBLIN", "airport:PSA", "city:MALTA", "airport:CIA", "city:PRAGUE", "airport:STR"],
    "countryCode": "se",
    "base": true,
    "coords": {
      "lat": 57.6741,
      "lng": 12.2925
    },
    "priority": 182,
    "seasonalRoutes": [],
    "aliases": ["Landvetter"]
  }, {
    "id": "airport:HAM",
    "name": "Hamburg",
    "categories": ["FAM", "SPR", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "HAM",
    "seoName": "hamburg",
    "cityCode": "HAMBURG",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "airport:SVQ", "connectingFlight:NAP:BGY", "city:BARI", "region:SARDINIA", "airport:KRK", "airport:LPA", "city:VERONA", "region:CANARY_ISLES", "city:KATOWICE", "country:gr", "airport:MAN", "city:BRINDISI", "city:FARO", "region:ENGLAND", "airport:BGY", "airport:MAD", "city:KRAKOW", "city:GRAN_CANARIA", "country:ma", "airport:PMI", "airport:SOF", "city:MILAN", "airport:AGP", "connectingFlight:BDS:BGY", "city:EDINBURGH", "city:VENICE", "city:PALERMO", "connectingFlight:CAG:BGY", "city:BARCELONA", "region:COSTA_DE_SOL", "city:MARRAKESH", "city:LAMEZIA", "city:SOFIA", "city:NAPLES", "country:pt", "country:hr", "connectingFlight:SUF:BGY", "region:COSTA_BRAVA", "country:pl", "airport:DUB", "city:VALENCIA", "region:SCOTLAND", "airport:STN", "airport:KTW", "city:ZADAR", "airport:OPO", "connectingFlight:PMO:BGY", "airport:EDI", "airport:TRF", "city:PORTO", "country:es", "city:THESSALONIKI", "airport:ZAD", "city:PALMA", "airport:RAK", "country:it", "city:ALICANTE", "city:MALAGA", "connectingFlight:BRI:BGY", "airport:ALC", "airport:LIS", "country:ie", "airport:FAO", "city:LISBON", "airport:SKG", "city:MANCHESTER", "city:LONDON", "airport:BCN", "city:OSLO", "region:SICILY", "country:gb", "airport:TSF", "airport:SUF", "city:MADRID", "city:DUBLIN", "country:bg", "region:PUGLIA", "city:SEVILLE", "city:CAGLIARI", "airport:VRN", "country:no"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 53.63028,
      "lng": 9.99111
    },
    "priority": 183,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:HAJ",
    "name": "Hannover",
    "categories": [],
    "iataCode": "HAJ",
    "seoName": "hannover",
    "cityCode": "HANNOVER",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["city:PALMA", "airport:PMI", "country:es"],
    "countryCode": "de",
    "base": false,
    "coords": {
      "lat": 52.2739,
      "lng": 9.4106
    },
    "priority": 0,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:HAU",
    "name": "Haugesund",
    "categories": ["FAM", "FST", "CUL"],
    "iataCode": "HAU",
    "seoName": "haugesund",
    "cityCode": "HAUGESUND",
    "country": "Norway",
    "currencyCode": "NOK",
    "routes": ["city:ALICANTE", "airport:AGP", "city:MALAGA", "airport:ALC", "country:es", "region:COSTA_BRAVA", "region:COSTA_DE_SOL"],
    "countryCode": "no",
    "base": false,
    "coords": {
      "lat": 59.3453,
      "lng": 5.20836
    },
    "priority": 162,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:HER",
    "name": "Heraklion Crete",
    "categories": [],
    "iataCode": "HER",
    "seoName": "heraklion-crete",
    "cityCode": "HERAKLION",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["city:DUSSELDORF", "city:ATHENS", "country:gr", "city:MILAN", "country:it", "airport:TXL", "airport:ATH", "airport:MXP", "airport:BGY", "city:BERLIN", "airport:DUS", "country:de"],
    "countryCode": "gr",
    "base": false,
    "coords": {
      "lat": 35.3397,
      "lng": 25.1803
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:IBZ",
    "name": "Ibiza",
    "categories": ["HEN", "FAM", "FST", "NIT", "SEA"],
    "iataCode": "IBZ",
    "seoName": "ibiza",
    "cityCode": "IBIZA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:CHARLEROI", "airport:CRL", "city:FRANKFURT", "city:TURIN", "country:gr", "region:ENGLAND", "airport:BGY", "city:EINDHOVEN", "airport:AGP", "city:MILAN", "city:EDINBURGH", "country:hu", "city:BERLIN", "airport:DUS", "city:VIENNA", "city:LAMEZIA", "city:NAPLES", "city:LEEDS", "connectingFlight:SUF:BGY", "city:BOLOGNA", "connectingFlight:SXF:BGY", "airport:DUB", "city:VALENCIA", "airport:BHX", "airport:STN", "city:PISA", "city:GLASGOW", "city:SHANNON", "airport:NRN", "country:es", "airport:BRS", "connectingFlight:CTA:BGY", "connectingFlight:CGN:BGY", "city:MARSEILLE", "connectingFlight:BRI:BGY", "region:TUSCANY", "airport:VIE", "city:MANCHESTER", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "city:SEVILLE", "connectingFlight:BUD:BGY", "country:nl", "city:PESCARA", "airport:VLC", "airport:HHN", "airport:SVQ", "airport:MRS", "connectingFlight:NAP:BGY", "airport:BLQ", "airport:LPL", "airport:TXL", "city:BARI", "region:SARDINIA", "city:BRINDISI", "airport:MAN", "connectingFlight:PSR:BGY", "airport:FCO", "airport:MAD", "city:CATANIA", "connectingFlight:BDS:BGY", "city:VENICE", "city:PALERMO", "connectingFlight:CAG:BGY", "region:COSTA_DE_SOL", "city:BARCELONA", "city:LIVERPOOL", "city:ROME", "connectingFlight:ATH:BGY", "airport:SNN", "region:COSTA_BRAVA", "region:SCOTLAND", "country:de", "airport:LBA", "connectingFlight:PMO:BGY", "airport:EDI", "country:at", "city:MALAGA", "country:it", "country:ie", "airport:PIK", "region:SICILY", "airport:TSF", "city:BIRMINGHAM", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "airport:PSA", "city:ATHENS", "airport:EMA", "region:PUGLIA", "city:BUDAPEST", "city:CAGLIARI", "country:be", "airport:TRN"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 38.8729,
      "lng": 1.37312
    },
    "priority": 33,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:INN",
    "name": "Innsbruck",
    "categories": ["SKI"],
    "iataCode": "INN",
    "seoName": "innsbruck",
    "cityCode": "INNSBRUCK",
    "country": "Austria",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:DUSSELDORF", "airport:PMI", "country:gb", "country:es", "airport:DUS", "city:DUBLIN", "city:PALMA", "region:ENGLAND", "country:ie", "airport:DUB", "country:de", "city:LONDON"],
    "countryCode": "at",
    "base": false,
    "coords": {
      "lat": 47.1537,
      "lng": 11.2038
    },
    "priority": 197,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:XRY",
    "name": "Jerez",
    "categories": ["GLF", "FAM", "CUL", "SEA", "OUT"],
    "iataCode": "XRY",
    "seoName": "jerez",
    "cityCode": "JEREZ",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:BCN", "airport:HHN", "city:FRANKFURT", "country:gb", "region:ENGLAND", "country:es", "region:COSTA_BRAVA", "city:BARCELONA", "country:de", "city:LONDON"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 36.7446,
      "lng": -6.06011
    },
    "priority": 125,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:KLX",
    "name": "Kalamata",
    "categories": ["FAM", "SPR", "NIT", "CTY", "CUL", "SEA"],
    "iataCode": "KLX",
    "seoName": "kalamata",
    "cityCode": "KALAMATA",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["airport:VIE", "country:at", "city:VIENNA"],
    "countryCode": "gr",
    "base": false,
    "coords": {
      "lat": 37.0683,
      "lng": 22.0255
    },
    "priority": 175,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:FKB",
    "name": "Karlsruhe / Baden-Baden",
    "categories": ["FAM", "SPR", "CTY"],
    "iataCode": "FKB",
    "seoName": "karlsruhe-baden",
    "cityCode": "KARLSRUHE",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:SVQ", "city:BARI", "airport:GRO", "region:SARDINIA", "country:gr", "region:ENGLAND", "airport:WMI", "country:ma", "airport:PMI", "airport:SOF", "airport:AGP", "city:EDINBURGH", "city:WARSAW", "region:COSTA_DE_SOL", "city:MARRAKESH", "city:LAMEZIA", "city:SOFIA", "airport:TLV", "country:pt", "city:ROME", "country:hr", "city:EILAT", "airport:TPS", "city:TRAPANI", "region:COSTA_BRAVA", "country:pl", "airport:VDA", "region:SCOTLAND", "airport:STN", "city:ZADAR", "airport:OPO", "airport:EDI", "city:PORTO", "country:es", "city:THESSALONIKI", "airport:MLA", "city:TEL_AVIV", "airport:ZAD", "country:mt", "city:PALMA", "airport:RAK", "airport:BRI", "country:it", "city:ALICANTE", "city:MALAGA", "airport:ALC", "airport:ATH", "airport:LIS", "city:LISBON", "country:il", "airport:SKG", "city:LONDON", "region:SICILY", "airport:CAG", "country:gb", "airport:SUF", "city:MALTA", "city:ATHENS", "airport:CIA", "country:bg", "city:SEVILLE", "region:PUGLIA", "city:GIRONA", "city:CAGLIARI"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 48.7794,
      "lng": 8.0805
    },
    "priority": 89,
    "seasonalRoutes": [],
    "aliases": ["Baden", "Karlsruhe Baden-Baden"]
  }, {
    "id": "airport:KTW",
    "name": "Katowice",
    "categories": ["FAM", "CTY", "CUL"],
    "iataCode": "KTW",
    "seoName": "katowice",
    "cityCode": "KATOWICE",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:STN", "city:HAMBURG", "country:gb", "city:MILAN", "airport:EDI", "city:CORFU", "city:EDINBURGH", "airport:MXP", "city:BIRMINGHAM", "city:DUBLIN", "city:ATHENS", "country:gr", "country:it", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "region:ENGLAND", "airport:ATH", "country:ie", "airport:HAM", "airport:DUB", "airport:BHX", "airport:CFU", "region:SCOTLAND", "country:de", "city:LONDON"],
    "countryCode": "pl",
    "base": true,
    "coords": {
      "lat": 50.4743,
      "lng": 19.08
    },
    "priority": 90,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:KUN",
    "name": "Kaunas",
    "categories": ["FAM", "SPR", "FST", "CTY", "OUT"],
    "iataCode": "KUN",
    "seoName": "kaunas",
    "cityCode": "KAUNAS",
    "country": "Lithuania",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:BLQ", "airport:LTN", "airport:GRO", "country:gr", "region:ENGLAND", "airport:RMI", "airport:PMI", "city:MILAN", "city:EDINBURGH", "city:NAPLES", "airport:TLV", "country:dk", "airport:RHO", "city:EILAT", "city:BOLOGNA", "airport:SNN", "region:COSTA_BRAVA", "airport:VDA", "airport:DUB", "city:RIMINI", "region:SCOTLAND", "airport:STN", "city:SHANNON", "airport:EDI", "airport:MXP", "country:es", "airport:BRS", "city:TEL_AVIV", "airport:NAP", "city:PALMA", "airport:CPH", "country:it", "city:ALICANTE", "airport:ALC", "country:ie", "city:RHODES", "city:PAPHOS", "country:il", "city:LONDON", "country:gb", "city:DUBLIN", "city:BRISTOL", "airport:BOJ", "city:COPENHAGEN", "country:bg", "airport:PFO", "city:BURGAS", "city:GIRONA"],
    "countryCode": "lt",
    "base": true,
    "coords": {
      "lat": 54.9639,
      "lng": 24.0848
    },
    "priority": 65,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:EFL",
    "name": "Kefalonia",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CUL", "SEA", "OUT"],
    "iataCode": "EFL",
    "seoName": "kefalonia",
    "cityCode": "KEFALONIA",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["city:PISA", "airport:STN", "country:gb", "city:MILAN", "airport:TXL", "city:BERLIN", "city:FRANKFURT", "airport:PSA", "country:it", "region:ENGLAND", "airport:FRA", "airport:BGY", "region:TUSCANY", "country:de", "city:LONDON"],
    "countryCode": "gr",
    "base": false,
    "coords": {
      "lat": 38.1201,
      "lng": 20.5005
    },
    "priority": 156,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:KIR",
    "name": "Kerry",
    "categories": ["GLF", "FAM", "SPR", "XMS"],
    "iataCode": "KIR",
    "seoName": "kerry",
    "cityCode": "KERRY",
    "country": "Ireland",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:HHN", "country:gb", "country:es", "airport:LTN", "airport:SXF", "city:BERLIN", "city:FRANKFURT", "country:pt", "city:ALICANTE", "city:FARO", "airport:ALC", "region:ENGLAND", "region:COSTA_BRAVA", "airport:FAO", "country:de", "city:LONDON"],
    "countryCode": "ie",
    "base": false,
    "coords": {
      "lat": 52.1809,
      "lng": -9.52378
    },
    "priority": 185,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:NOC",
    "name": "Knock",
    "categories": ["GLF", "FAM", "CUL", "OUT"],
    "iataCode": "NOC",
    "seoName": "knock",
    "cityCode": "KNOCK",
    "country": "Ireland",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:LPL", "country:es", "airport:LTN", "airport:BRS", "airport:GRO", "city:LANZAROTE", "region:CANARY_ISLES", "city:TENERIFE", "city:ALICANTE", "country:it", "city:MALAGA", "city:FARO", "region:ENGLAND", "airport:ALC", "airport:FAO", "airport:BGY", "city:LONDON", "country:gb", "city:MILAN", "airport:CGN", "airport:AGP", "city:COLOGNE", "city:BIRMINGHAM", "airport:ACE", "airport:TFS", "region:COSTA_DE_SOL", "city:LIVERPOOL", "city:BRISTOL", "country:pt", "airport:EMA", "region:COSTA_BRAVA", "city:GIRONA", "country:de"],
    "countryCode": "ie",
    "base": false,
    "coords": {
      "lat": 53.9103,
      "lng": -8.81849
    },
    "priority": 73,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:KGS",
    "name": "Kos",
    "categories": ["HEN", "FAM", "NIT", "SEA"],
    "iataCode": "KGS",
    "seoName": "kos",
    "cityCode": "KOS",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["city:DUSSELDORF", "airport:TXL", "city:BERLIN", "airport:DUS", "country:de"],
    "countryCode": "gr",
    "base": false,
    "coords": {
      "lat": 36.7933,
      "lng": 27.0917
    },
    "priority": 129,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:KSC",
    "name": "Kosice",
    "categories": [],
    "iataCode": "KSC",
    "seoName": "kosice",
    "cityCode": "KOSICE",
    "country": "Slovakia",
    "currencyCode": "EUR",
    "routes": ["airport:SEN", "country:gb", "city:SOUTHEND_ON_SEA", "region:ENGLAND"],
    "countryCode": "sk",
    "base": false,
    "coords": {
      "lat": 48.6631,
      "lng": 21.2411
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:KRK",
    "name": "Krakow",
    "categories": ["SKI", "HEN", "FAM", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "KRK",
    "seoName": "krakow",
    "cityCode": "KRAKOW",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:LDE", "city:HAMBURG", "city:BOURNEMOUTH", "city:CHARLEROI", "city:NUREMBERG", "airport:GRO", "airport:DTM", "airport:CRL", "city:FRANKFURT", "city:LVIV", "city:TENERIFE", "country:gr", "region:ENGLAND", "airport:MMX", "city:STOCKHOLM", "airport:BGY", "airport:PSR", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:MILAN", "city:EDINBURGH", "airport:NYO", "city:SZCZECIN", "city:BERLIN", "city:VIENNA", "city:LAMEZIA", "city:NAPLES", "airport:TLV", "country:pt", "airport:KBP", "city:LEEDS", "city:BOLOGNA", "country:pl", "airport:SZZ", "airport:DUB", "city:VALENCIA", "airport:BHX", "city:GLASGOW", "city:PISA", "airport:STN", "city:SHANNON", "country:es", "airport:BRS", "city:PARIS", "city:CHANIA", "connectingFlight:CTA:BGY", "city:TEL_AVIV", "airport:NAP", "city:PALMA", "country:mt", "city:MARSEILLE", "airport:RAK", "airport:GLA", "connectingFlight:BRI:BGY", "airport:FRA", "city:PAPHOS", "city:LISBON", "airport:VIE", "region:TUSCANY", "city:MANCHESTER", "city:LONDON", "airport:BCN", "country:gb", "airport:EIN", "country:fr", "city:BORDEAUX", "airport:LWO", "airport:SUF", "airport:TFS", "city:MALTA", "airport:PFO", "city:SEVILLE", "city:BURGAS", "city:PRAGUE", "country:nl", "city:PESCARA", "airport:STR", "airport:GDN", "country:no", "airport:VLC", "country:cy", "country:cz", "airport:SVQ", "airport:MRS", "airport:BLQ", "airport:LPL", "city:BARI", "region:SARDINIA", "airport:LPA", "region:CANARY_ISLES", "city:BRINDISI", "airport:MAN", "airport:MAD", "airport:BVA", "country:ma", "city:LOURDES", "city:CATANIA", "airport:GOT", "connectingFlight:BDS:BGY", "city:VENICE", "country:ua", "city:PALERMO", "city:MALMO", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "city:LIVERPOOL", "airport:NUE", "city:ROME", "city:EILAT", "region:COSTA_BRAVA", "airport:SNN", "airport:VDA", "city:STUTTGART", "city:BELFAST", "city:AMMAN", "region:SCOTLAND", "city:GDANSK", "country:de", "airport:OPO", "airport:LBA", "connectingFlight:PMO:BGY", "airport:CHQ", "airport:EDI", "city:PORTO", "airport:TRF", "airport:PRG", "city:KIEV", "airport:SXF", "country:at", "airport:MLA", "country:it", "city:MALAGA", "city:ALICANTE", "airport:ALC", "airport:ATH", "airport:LIS", "country:ie", "airport:HAM", "country:il", "region:SICILY", "city:OSLO", "airport:CAG", "region:NORTHERN_IRELAND", "airport:TSF", "city:BIRMINGHAM", "country:se", "airport:AMM", "city:DUBLIN", "city:MADRID", "airport:BOJ", "city:BRISTOL", "airport:PSA", "airport:BOH", "airport:CIA", "city:ATHENS", "region:CRETE", "country:bg", "country:jo", "region:PUGLIA", "city:DORTMUND", "airport:EMA", "airport:BOD", "city:GIRONA", "city:CAGLIARI", "country:be", "city:GOTHENBURG", "airport:BFS"],
    "countryCode": "pl",
    "base": true,
    "coords": {
      "lat": 50.0777,
      "lng": 19.7848
    },
    "priority": 17,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:KBP",
    "name": "Kyiv-Boryspil",
    "categories": [],
    "iataCode": "KBP",
    "seoName": "kyiv-boryspil",
    "cityCode": "KIEV",
    "country": "Ukraine",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:KRK", "airport:BTS", "airport:POZ", "country:gr", "airport:MAN", "region:ENGLAND", "airport:WMI", "city:STOCKHOLM", "city:KRAKOW", "airport:MLA|Air Malta", "airport:SOF", "city:WARSAW", "airport:NYO", "city:BERLIN", "city:BARCELONA", "city:SOFIA", "country:lt", "region:COSTA_BRAVA", "country:pl", "airport:WRO", "airport:DUB", "city:GDANSK", "country:de", "city:BYDGOSZCZ", "airport:STN", "country:es", "airport:SXF", "country:mt", "airport:ATH", "country:ie", "city:PAPHOS", "airport:BZG", "city:MANCHESTER", "city:LONDON", "airport:BCN", "city:VILNIUS", "country:gb", "country:sk", "city:WROCLAW", "country:se", "city:BRATISLAVA", "city:DUBLIN", "city:MALTA", "city:ATHENS", "country:bg", "airport:PFO", "airport:VNO", "airport:GDN", "city:POZNAN"],
    "countryCode": "ua",
    "base": false,
    "coords": {
      "lat": 50.2041,
      "lng": 30.5336
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LRH",
    "name": "La Rochelle",
    "categories": ["FAM", "SPR", "CTY", "SEA", "OUT"],
    "iataCode": "LRH",
    "seoName": "la-rochelle",
    "cityCode": "LA_ROCHELLE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:OPO", "city:CHARLEROI", "country:gb", "city:PORTO", "city:DUBLIN", "airport:CRL", "country:pt", "region:ENGLAND", "country:ie", "airport:DUB", "country:be", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 46.1792,
      "lng": -1.19528
    },
    "priority": 126,
    "seasonalRoutes": [],
    "aliases": ["Rochelle"]
  }, {
    "id": "airport:SUF",
    "name": "Lamezia",
    "categories": ["FAM", "CTY", "SEA"],
    "iataCode": "SUF",
    "seoName": "lamezia",
    "cityCode": "LAMEZIA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:HHN", "city:HAMBURG", "country:cz", "city:CHARLEROI", "airport:BLQ", "connectingFlight:DUB:BGY", "airport:KRK", "connectingFlight:HAM:BGY", "airport:CRL", "city:FRANKFURT", "connectingFlight:PMI:BGY", "region:CANARY_ISLES", "city:TENERIFE", "connectingFlight:VLC:BGY", "country:gr", "region:ENGLAND", "airport:BGY", "airport:MAD", "city:KRAKOW", "city:GRAN_CANARIA", "connectingFlight:CRL:BGY", "city:MILAN", "city:VENICE", "connectingFlight:IBZ:BGY", "country:hu", "city:BERLIN", "city:BARCELONA", "region:COSTA_DE_SOL", "connectingFlight:EMA:BGY", "connectingFlight:TFS:BGY", "connectingFlight:CFU:BGY", "country:pt", "connectingFlight:BCN:BGY", "connectingFlight:ATH:BGY", "city:BOLOGNA", "region:COSTA_BRAVA", "country:pl", "connectingFlight:SXF:BGY", "city:VALENCIA", "connectingFlight:MAN:BGY", "country:de", "connectingFlight:LPA:BGY", "airport:STN", "city:PISA", "connectingFlight:ZAZ:BGY", "airport:NRN", "city:CORFU", "city:IBIZA", "country:es", "airport:MXP", "city:THESSALONIKI", "airport:MLA", "connectingFlight:CGN:BGY", "city:PALMA", "country:mt", "country:it", "city:MALAGA", "city:ALICANTE", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "country:ie", "airport:HAM", "city:LISBON", "connectingFlight:PRG:BGY", "region:TUSCANY", "city:MANCHESTER", "connectingFlight:ALC:BGY", "city:LONDON", "connectingFlight:BRE:BGY", "city:DUSSELDORF", "country:gb", "airport:TSF", "connectingFlight:SKG:BGY", "city:COLOGNE", "connectingFlight:BRS:BGY", "city:KARLSRUHE", "city:BIRMINGHAM", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "airport:FKB", "city:MALTA", "airport:PSA", "city:ATHENS", "city:ZARAGOZA", "city:BUDAPEST", "connectingFlight:BUD:BGY", "city:PRAGUE", "connectingFlight:LIS:BGY", "country:be", "city:BREMEN", "connectingFlight:AGP:BGY"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 38.9054,
      "lng": 16.2423
    },
    "priority": 42,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:ACE",
    "name": "Lanzarote",
    "categories": ["FAM", "SEA"],
    "iataCode": "ACE",
    "seoName": "lanzarote",
    "cityCode": "LANZAROTE",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "airport:HHN", "airport:SVQ", "city:CHARLEROI", "airport:BLQ", "airport:ORK", "airport:TXL", "airport:LPL", "airport:LTN", "city:BARI", "region:SARDINIA", "city:SANTANDER", "airport:CRL", "city:FRANKFURT", "airport:MAN", "country:gr", "city:BRINDISI", "airport:NCL", "region:ENGLAND", "airport:BGY", "airport:FCO", "airport:MAD", "city:EINDHOVEN", "city:CATANIA", "city:CORK", "city:MILAN", "connectingFlight:BDS:BGY", "city:EDINBURGH", "city:PALERMO", "connectingFlight:CAG:BGY", "city:BERLIN", "airport:DUS", "city:VIENNA", "city:LIVERPOOL", "city:ROME", "connectingFlight:ATH:BGY", "city:LEEDS", "city:BOLOGNA", "airport:SNN", "city:BELFAST", "airport:DUB", "city:VALENCIA", "airport:BHX", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "city:GLASGOW", "airport:STN", "airport:LBA", "city:SHANNON", "connectingFlight:PMO:BGY", "connectingFlight:CTA:FCO", "airport:NRN", "airport:EDI", "country:es", "airport:BRS", "airport:SCQ", "airport:SXF", "country:at", "airport:GLA", "country:it", "connectingFlight:BRI:BGY", "airport:FRA", "country:ie", "airport:VIE", "airport:PIK", "city:MANCHESTER", "city:LONDON", "region:SICILY", "city:DUSSELDORF", "region:NORTHERN_IRELAND", "country:gb", "airport:EIN", "city:BIRMINGHAM", "airport:SDR", "airport:NOC", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "city:SANTIAGO", "city:ATHENS", "region:PUGLIA", "city:SEVILLE", "airport:EMA", "city:KNOCK", "city:ZARAGOZA", "country:nl", "airport:ZAZ", "city:CAGLIARI", "country:be", "airport:BFS"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 28.9455,
      "lng": -13.6052
    },
    "priority": 46,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LPP",
    "name": "Lappeenranta",
    "categories": ["SKI", "FAM", "CTY", "OUT"],
    "iataCode": "LPP",
    "seoName": "lappeenranta",
    "cityCode": "LAPPEENRANTA",
    "country": "Finland",
    "currencyCode": "EUR",
    "routes": ["city:ATHENS", "city:MILAN", "country:it", "country:gr", "airport:ATH", "city:THESSALONIKI", "airport:BGY", "airport:SKG"],
    "countryCode": "fi",
    "base": false,
    "coords": {
      "lat": 61.0446,
      "lng": 28.1444
    },
    "priority": 164,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LCA",
    "name": "Larnaca",
    "categories": [],
    "iataCode": "LCA",
    "seoName": "larnaca",
    "cityCode": "LARNACA",
    "country": "Cyprus",
    "currencyCode": "EUR",
    "routes": ["city:BRUSSELS", "airport:BRU", "country:be", "airport:VIE", "country:at", "city:VIENNA"],
    "countryCode": "cy",
    "base": false,
    "coords": {
      "lat": 34.8751,
      "lng": 33.6249
    },
    "priority": 220,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LBA",
    "name": "Leeds Bradford",
    "categories": ["FAM", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "LBA",
    "seoName": "leeds",
    "cityCode": "LEEDS",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["airport:GRO", "airport:KRK", "airport:BTS", "airport:LPA", "region:CANARY_ISLES", "city:TENERIFE", "country:gr", "city:FARO", "city:LIMOGES", "airport:WMI", "city:FUERTEVENTURA", "city:KRAKOW", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "airport:LIG", "city:VENICE", "airport:ACE", "city:WARSAW", "airport:IBZ", "region:COSTA_DE_SOL", "country:pt", "airport:MJV", "country:lv", "country:lt", "airport:FUE", "region:COSTA_BRAVA", "country:pl", "airport:WRO", "airport:DUB", "airport:CFU", "city:GDANSK", "city:PISA", "city:MURCIA", "airport:CHQ", "city:CORFU", "city:IBIZA", "country:es", "airport:RIX", "airport:MLA", "city:CHANIA", "city:LANZAROTE", "country:mt", "city:PALMA", "country:it", "city:ALICANTE", "city:MALAGA", "airport:RMU", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ALC", "country:ie", "airport:FAO", "region:TUSCANY", "city:VILNIUS", "airport:TSF", "country:sk", "country:fr", "airport:TFS", "city:WROCLAW", "city:BRATISLAVA", "city:DUBLIN", "city:MALTA", "airport:PSA", "region:CRETE", "airport:VNO", "city:RIGA", "city:GIRONA", "airport:GDN"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 53.8659,
      "lng": -1.66057
    },
    "priority": 74,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB", "Bradford"]
  }, {
    "id": "airport:LEJ",
    "name": "Leipzig",
    "categories": ["FAM", "SPR", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "LEJ",
    "seoName": "leipzig-halle",
    "cityCode": "LEIPZIG",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "country:gb", "region:ENGLAND", "city:LONDON"],
    "countryCode": "de",
    "base": false,
    "coords": {
      "lat": 51.4324,
      "lng": 12.2416
    },
    "priority": 153,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LIL",
    "name": "Lille",
    "categories": ["FAM", "SPR", "FST", "CTY", "CUL"],
    "iataCode": "LIL",
    "seoName": "lille",
    "cityCode": "LILLE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:OPO", "airport:MRS", "country:pt", "city:MARSEILLE", "city:PORTO", "country:fr"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 50.5619,
      "lng": 3.08944
    },
    "priority": 134,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LIG",
    "name": "Limoges",
    "categories": ["SKI", "FAM", "CTY", "CUL"],
    "iataCode": "LIG",
    "seoName": "limoges",
    "cityCode": "LIMOGES",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["city:BRISTOL", "airport:STN", "airport:LBA", "airport:EMA", "airport:MAN", "country:gb", "city:LEEDS", "region:ENGLAND", "airport:BRS", "city:BIRMINGHAM", "city:MANCHESTER", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 45.8628,
      "lng": 1.17944
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LNZ",
    "name": "Linz",
    "categories": ["SKI", "FAM", "CTY", "CUL", "XMS"],
    "iataCode": "LNZ",
    "seoName": "linz",
    "cityCode": "LINZ",
    "country": "Austria",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:PALMA", "airport:PMI", "country:gb", "region:ENGLAND", "country:es", "city:LONDON"],
    "countryCode": "at",
    "base": false,
    "coords": {
      "lat": 48.2332,
      "lng": 14.1875
    },
    "priority": 160,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LIS",
    "name": "Lisbon",
    "categories": ["GLF", "HEN", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "SEA", "OUT"],
    "iataCode": "LIS",
    "seoName": "lisbon",
    "cityCode": "LISBON",
    "country": "Portugal",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "connectingFlight:NRN:OPO", "connectingFlight:BCN:OPO", "airport:KRK", "airport:CRL", "city:FRANKFURT", "region:ENGLAND", "airport:BGY", "city:EINDHOVEN", "city:MILAN", "city:EDINBURGH", "connectingFlight:PMI:OPO", "city:BERLIN", "city:LAMEZIA", "city:NAPLES", "country:pt", "airport:TLS", "airport:PDL", "connectingFlight:SUF:BGY", "city:CLERMONT_FERRAND", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "connectingFlight:MXP:OPO", "airport:STN", "city:PISA", "city:GLASGOW", "country:es", "airport:BRU", "airport:TER", "city:PARIS", "connectingFlight:CGN:BGY", "airport:NAP", "city:PALMA", "country:mt", "city:MARSEILLE", "airport:GLA", "connectingFlight:BRI:BGY", "connectingFlight:FMM:OPO", "airport:FRA", "airport:BRE", "connectingFlight:DTM:OPO", "region:TUSCANY", "city:MANCHESTER", "airport:LUX", "city:LONDON", "connectingFlight:MAD:OPO", "city:DUSSELDORF", "airport:EIN", "country:gb", "city:COLOGNE", "country:fr", "city:BORDEAUX", "city:TERCEIRA", "airport:FKB", "city:MALTA", "country:nl", "airport:HHN", "airport:MRS", "airport:BLQ", "city:BRUSSELS", "city:TOULOUSE", "city:BARI", "region:SARDINIA", "airport:CFE", "airport:MAN", "city:BRINDISI", "airport:WMI", "airport:BVA", "city:KRAKOW", "airport:MLA|Air Malta", "connectingFlight:BDS:BGY", "city:PALERMO", "city:WARSAW", "connectingFlight:CAG:BGY", "city:BARCELONA", "city:ROME", "city:MEMMINGEN", "country:lu", "region:COSTA_BRAVA", "region:SCOTLAND", "country:de", "airport:OPO", "connectingFlight:PMO:BGY", "city:PONTA_DELGADA", "airport:EDI", "city:PORTO", "airport:SXF", "country:it", "country:ie", "airport:HAM", "region:SICILY", "city:KARLSRUHE", "city:WROCLAW", "connectingFlight:VLC:OPO", "city:MADRID", "city:DUBLIN", "airport:PSA", "airport:CIA", "region:PUGLIA", "city:DORTMUND", "city:LUXEMBOURG", "airport:BOD", "city:CAGLIARI", "region:AZORES", "country:be", "city:BREMEN"],
    "countryCode": "pt",
    "base": true,
    "coords": {
      "lat": 38.7813,
      "lng": -9.13592
    },
    "priority": 32,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LPL",
    "name": "Liverpool",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL"],
    "iataCode": "LPL",
    "seoName": "liverpool",
    "cityCode": "LIVERPOOL",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["country:cy", "country:cz", "city:DERRY", "city:BERGERAC", "airport:ORK", "city:BARI", "airport:KRK", "airport:GRO", "airport:DTM", "airport:LPA", "airport:POZ", "region:CANARY_ISLES", "city:TENERIFE", "country:gr", "city:FARO", "airport:WMI", "city:FUERTEVENTURA", "city:KRAKOW", "city:GRAN_CANARIA", "country:ma", "airport:PMI", "city:CORK", "airport:AGP", "city:MILAN", "airport:SOF", "city:WARSAW", "airport:ACE", "airport:LDY", "city:SZCZECIN", "airport:IBZ", "airport:EGC", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "country:dk", "city:SOFIA", "country:pt", "country:lt", "airport:FUE", "country:pl", "region:COSTA_BRAVA", "airport:SZZ", "airport:SNN", "airport:WRO", "airport:DUB", "airport:CFU", "country:de", "city:PISA", "airport:OPO", "city:SHANNON", "city:CORFU", "city:IBIZA", "city:PORTO", "country:es", "airport:MXP", "airport:PRG", "airport:REU", "airport:MLA", "city:LANZAROTE", "city:PALMA", "country:mt", "airport:CPH", "airport:RAK", "airport:BRI", "country:it", "city:MALAGA", "city:ALICANTE", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ALC", "country:ie", "airport:FAO", "city:PAPHOS", "region:TUSCANY", "airport:BCN", "city:VILNIUS", "region:NORTHERN_IRELAND", "country:gb", "country:fr", "airport:TFS", "city:WROCLAW", "airport:NOC", "city:DUBLIN", "airport:PSA", "city:MALTA", "city:COPENHAGEN", "country:bg", "city:DORTMUND", "region:PUGLIA", "airport:PFO", "city:KNOCK", "airport:VNO", "city:PRAGUE", "city:GIRONA", "city:POZNAN"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 53.3336,
      "lng": -2.84972
    },
    "priority": 44,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB"]
  }, {
    "id": "airport:LCJ",
    "name": "Lodz",
    "categories": ["FAM", "SPR", "CTY", "OUT"],
    "iataCode": "LCJ",
    "seoName": "lodz",
    "cityCode": "LODZ",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:STN", "city:ATHENS", "airport:EMA", "country:gb", "country:gr", "region:ENGLAND", "airport:ATH", "city:BIRMINGHAM", "country:ie", "airport:DUB", "city:LONDON", "city:DUBLIN"],
    "countryCode": "pl",
    "base": false,
    "coords": {
      "lat": 51.7219,
      "lng": 19.3981
    },
    "priority": 96,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LGW",
    "name": "London Gatwick",
    "categories": ["GLF", "HEN", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "LGW",
    "seoName": "london-gatwick",
    "cityCode": "LONDON",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:SHANNON", "city:CORK", "city:ALICANTE", "airport:ALC", "airport:ORK", "country:es", "country:ie", "airport:SNN", "region:COSTA_BRAVA", "airport:DUB", "city:DUBLIN"],
    "countryCode": "gb",
    "base": false,
    "coords": {
      "lat": 51.1481,
      "lng": -0.190278
    },
    "priority": 58,
    "seasonalRoutes": [],
    "aliases": ["Gatwick", "London Gatwick", "England", "Great Britain", "UK", "GB"],
    "weight": 2
  }, {
    "id": "airport:LTN",
    "name": "London Luton",
    "categories": ["GLF", "HEN", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "LTN",
    "seoName": "london-luton",
    "cityCode": "LONDON",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["airport:BLQ", "airport:ORK", "airport:GRO", "airport:LPA", "city:BEZIERS", "region:CANARY_ISLES", "city:TENERIFE", "country:gr", "city:FARO", "city:RZESZOW", "airport:KIR", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "country:ma", "city:CORK", "airport:AGP", "airport:ACE", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "country:dk", "city:KAUNAS", "country:pt", "airport:MJV", "country:lt", "city:BOLOGNA", "airport:FUE", "country:pl", "region:COSTA_BRAVA", "airport:DUB", "city:KERRY", "city:BYDGOSZCZ", "city:MURCIA", "country:es", "airport:FNI", "airport:MLA", "city:LANZAROTE", "airport:RZE", "country:mt", "airport:CPH", "airport:RAK", "city:MALAGA", "airport:RMU", "airport:BZR", "country:it", "city:ALICANTE", "airport:ALC", "airport:ATH", "country:ie", "airport:FAO", "airport:BZG", "airport:BCN", "city:VILNIUS", "city:NIMES", "country:fr", "airport:KUN", "airport:TFS", "airport:NOC", "city:DUBLIN", "city:MALTA", "city:ATHENS", "city:COPENHAGEN", "city:KNOCK", "airport:VNO", "city:GIRONA"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 51.8747,
      "lng": -0.368333
    },
    "priority": 50,
    "seasonalRoutes": [],
    "aliases": ["London Luton", "Luton", "England", "Great Britain", "UK", "GB"],
    "weight": 3
  }, {
    "id": "airport:SEN",
    "name": "London Southend",
    "categories": [],
    "iataCode": "SEN",
    "seoName": "london-southend",
    "cityCode": "SOUTHEND_ON_SEA",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:CORFU", "country:es", "region:SARDINIA", "airport:CLJ", "airport:REU", "city:PALMA", "region:BRITTANY", "airport:CPH", "city:BREST", "airport:CAG|Air Malta", "country:gr", "city:ALICANTE", "country:it", "city:MALAGA", "city:FARO", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ALC", "airport:VCE", "country:ie", "airport:FAO", "airport:BGY", "city:CLUJ", "airport:BES", "region:SICILY", "airport:PMI", "city:CATANIA", "airport:CTA|Air Malta", "airport:AGP", "city:MILAN", "country:sk", "city:VENICE", "airport:BIO", "city:BILBAO", "country:fr", "city:KOSICE", "city:BARCELONA", "region:COSTA_DE_SOL", "city:DUBLIN", "country:dk", "country:pt", "airport:KSC", "city:COPENHAGEN", "region:COSTA_BRAVA", "country:ro", "city:CAGLIARI", "airport:DUB", "airport:CFU"],
    "countryCode": "gb",
    "base": false,
    "coords": {
      "lat": 51.5703,
      "lng": 0.6933
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:STN",
    "name": "London Stansted",
    "categories": ["GLF", "HEN", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "STN",
    "seoName": "london-stansted",
    "cityCode": "LONDON",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:TALLINN", "airport:LDE", "airport:EFL", "city:DOLE", "airport:INN", "city:CARCASSONNE", "city:BERGERAC", "city:NUREMBERG", "airport:KRK", "city:SANTANDER", "airport:DTM", "city:FRANKFURT", "city:KEFALONIA", "city:BEZIERS", "city:KATOWICE", "country:gr", "city:PERUGIA", "airport:LCJ", "city:STOCKHOLM", "city:LA_ROCHELLE", "airport:PMI", "city:EDINBURGH", "airport:TUF", "airport:CCF", "country:hu", "airport:NYO", "airport:EGC", "city:VIENNA", "city:BILLUND", "city:SOFIA", "airport:AOI", "country:hr", "city:ALGHERO", "airport:KBP", "airport:PLQ", "city:CLERMONT_FERRAND", "city:BOLOGNA", "airport:DUB", "city:VALENCIA", "airport:KTW", "city:SHANNON", "country:es", "city:RIJEKA", "airport:MXP", "city:CASTELLON", "city:OLSZTYN", "airport:BRQ", "airport:SCQ", "airport:ZAD", "city:PALMA", "airport:RAK", "airport:GLA", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:BRE", "city:RHODES", "airport:LEJ", "airport:LUZ", "airport:PMO", "airport:VIE", "country:ee", "airport:LUX", "airport:LEI", "airport:BCN", "city:DUSSELDORF", "city:VILNIUS", "airport:AAL", "country:gb", "airport:EIN", "city:GENOA", "city:COLOGNE", "country:fr", "airport:SUF", "city:BORDEAUX", "airport:KUN", "airport:LWO", "airport:SDR", "airport:TFS", "airport:FKB", "city:MALTA", "airport:BSL", "city:SEVILLE", "city:ZARAGOZA", "city:RABAT", "airport:CDT", "airport:ZAZ", "airport:RBA", "airport:MRS", "airport:HHN", "airport:BLQ", "city:BARI", "region:SARDINIA", "airport:BLL", "city:PARDUBICE", "airport:NTE", "airport:LPA", "region:BRITTANY", "city:BRINDISI", "airport:VST", "city:LIMOGES", "city:RZESZOW", "airport:PGF", "airport:NCE", "airport:MAD", "airport:RMI", "country:ma", "airport:SOF", "country:me", "city:VENICE", "city:MARRAKESH", "city:BUCHAREST", "airport:NUE", "city:ROME", "country:lv", "country:lt", "city:MEMMINGEN", "country:lu", "airport:FUE", "airport:SNN", "city:BELFAST", "city:RIMINI", "city:AGADIR", "city:GDANSK", "city:PODGORICA", "city:BYDGOSZCZ", "city:BASEL", "city:MURCIA", "airport:EDI", "airport:TRF", "city:IBIZA", "city:SALZBURG", "city:KIEV", "airport:LRH", "airport:CPH", "airport:FEZ", "country:it", "airport:PIS", "airport:RMU", "airport:ALC", "country:ie", "region:SICILY", "city:OSLO", "city:JEREZ", "airport:CAG", "airport:TSF", "city:POITIERS", "city:WROCLAW", "city:MADRID", "region:PUGLIA", "city:BUDAPEST", "airport:BOD", "airport:TRS", "city:CAGLIARI", "city:PALANGA", "region:AZORES", "city:BREMEN", "airport:TRN", "city:HAMBURG", "airport:ORK", "airport:GRO", "airport:SZG", "city:VERONA", "airport:DLE", "city:STRASBOURG", "city:LVIV", "city:TENERIFE", "city:TURIN", "city:FARO", "city:INNSBRUCK", "airport:CIY", "airport:BGY", "airport:KIR", "airport:PSR", "city:PULA", "city:FUERTEVENTURA", "city:EINDHOVEN", "airport:OSR", "city:GRAN_CANARIA", "city:MILAN", "airport:AGP", "airport:BIQ", "airport:OSL", "city:BERLIN", "city:SZCZECIN", "airport:PDV", "city:BRNO", "city:LAMEZIA", "city:KAUNAS", "city:NAPLES", "country:pt", "airport:TLS", "airport:AGA", "airport:RHO", "airport:PDL", "country:pl", "airport:SZZ", "airport:TLL", "airport:WRO", "city:ANCONA", "city:TOURS", "airport:SZY", "city:KERRY", "city:PISA", "city:GLASGOW", "city:LUBLIN", "city:ZADAR", "airport:OTP", "city:DINARD", "airport:NRN", "airport:DNR", "airport:AHO", "city:THESSALONIKI", "airport:RIX", "city:LINZ", "city:CHANIA", "city:GRENOBLE", "city:BIARRITZ", "airport:RZE", "airport:NAP", "country:mt", "city:MARSEILLE", "airport:BZR", "airport:FRA", "city:TRIESTE", "airport:PUY", "city:PAPHOS", "airport:FAO", "city:LISBON", "region:TUSCANY", "airport:PEG", "airport:BZG", "airport:PED", "airport:SKG", "city:ALMERIA", "city:OSTRAVA", "city:BRATISLAVA", "city:SANTIAGO", "airport:PFO", "city:KNOCK", "city:PRAGUE", "airport:LNZ", "country:nl", "city:PESCARA", "airport:RJK", "airport:GDN", "airport:VRN", "country:no", "country:cy", "airport:VLC", "country:cz", "city:PERPIGNAN", "airport:SVQ", "city:TOULOUSE", "airport:BTS", "airport:CFE", "city:BRIVE", "city:AALBORG", "airport:GNB", "airport:POZ", "country:ch", "region:CANARY_ISLES", "airport:WMI", "airport:TGD", "airport:AAR", "city:KRAKOW", "city:LOURDES", "airport:GOT", "city:CORK", "airport:CGN", "airport:LIG", "airport:FMM", "city:WARSAW", "city:PALERMO", "country:ua", "airport:ACE", "city:AARHUS", "airport:IBZ", "city:BARCELONA", "region:COSTA_DE_SOL", "city:COMISO", "country:dk", "airport:MJV", "airport:GOA", "region:COSTA_BRAVA", "airport:BUD", "airport:BDS", "airport:CFU", "region:SCOTLAND", "country:de", "airport:OPO", "airport:CHQ", "city:PONTA_DELGADA", "city:CORFU", "city:PORTO", "airport:PRG", "airport:SXF", "airport:FNI", "country:at", "airport:MLA", "airport:REU", "airport:SXB", "city:LANZAROTE", "city:MALAGA", "city:ALICANTE", "city:FEZ", "city:PLOVDIV", "airport:ATH", "airport:LIS", "airport:HAM", "airport:BVE", "region:NORTHERN_IRELAND", "country:sk", "city:NIMES", "city:KARLSRUHE", "city:NANTES", "country:se", "airport:NOC", "airport:XRY", "city:DUBLIN", "city:LEIPZIG", "airport:PSA", "airport:CIA", "region:CRETE", "city:ATHENS", "city:COPENHAGEN", "country:bg", "city:DORTMUND", "city:LUXEMBOURG", "airport:VNO", "city:RIGA", "city:NICE", "country:ro", "city:LODZ", "city:GIRONA", "city:GOTHENBURG", "airport:BFS", "city:POZNAN"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 51.885,
      "lng": 0.235
    },
    "priority": 1,
    "seasonalRoutes": [],
    "aliases": ["Stansted", "London Stansted", "Stanstead", "England", "Great Britain", "UK", "GB"],
    "weight": 1
  }, {
    "id": "airport:LRT",
    "name": "Lorient",
    "categories": ["FAM", "SPR", "FST", "NIT", "OUT"],
    "iataCode": "LRT",
    "seoName": "lorient",
    "cityCode": "LORIENT",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:OPO", "country:pt", "city:PORTO"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 47.7588,
      "lng": -3.4378
    },
    "priority": 186,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LDE",
    "name": "Lourdes",
    "categories": ["SKI", "FAM", "SPR", "FST", "CUL"],
    "iataCode": "LDE",
    "seoName": "lourdes",
    "cityCode": "LOURDES",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["city:KRAKOW", "airport:STN", "airport:MLA|Air Malta", "city:MILAN", "country:gb", "airport:KRK", "city:DUBLIN", "city:MALTA", "country:mt", "airport:CIA", "city:ROME", "country:it", "region:ENGLAND", "country:ie", "country:pl", "airport:BGY", "airport:DUB", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.1787,
      "lng": -0.006439
    },
    "priority": 151,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LUZ",
    "name": "Lublin",
    "categories": ["FAM", "CTY", "CUL"],
    "iataCode": "LUZ",
    "seoName": "lublin",
    "cityCode": "LUBLIN",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:STN", "country:gb", "region:ENGLAND", "country:ie", "airport:DUB", "city:LONDON", "city:DUBLIN"],
    "countryCode": "pl",
    "base": false,
    "coords": {
      "lat": 51.2319,
      "lng": 22.6903
    },
    "priority": 143,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LUX",
    "name": "Luxembourg",
    "categories": [],
    "iataCode": "LUX",
    "seoName": "luxembourg",
    "cityCode": "LUXEMBOURG",
    "country": "Luxembourg",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:SVQ", "airport:OPO", "airport:EDI", "city:PORTO", "country:es", "airport:MLA", "city:PALMA", "country:mt", "country:it", "region:ENGLAND", "airport:LIS", "country:ie", "airport:BGY", "city:LISBON", "airport:MAD", "city:LONDON", "airport:BCN", "airport:PMI", "country:gb", "city:MILAN", "city:EDINBURGH", "city:BARCELONA", "city:MADRID", "city:DUBLIN", "city:MALTA", "country:pt", "city:SEVILLE", "region:COSTA_BRAVA", "airport:DUB", "region:SCOTLAND"],
    "countryCode": "lu",
    "base": false,
    "coords": {
      "lat": 49.6233,
      "lng": 6.2044
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LWO",
    "name": "Lviv",
    "categories": [],
    "iataCode": "LWO",
    "seoName": "lviv",
    "cityCode": "LVIV",
    "country": "Ukraine",
    "currencyCode": "EUR",
    "routes": ["city:KRAKOW", "airport:STN", "city:DUSSELDORF", "airport:NRN", "country:gb", "airport:FMM", "city:WARSAW", "airport:KRK", "city:MEMMINGEN", "region:ENGLAND", "country:pl", "airport:WMI", "country:de", "city:LONDON"],
    "countryCode": "ua",
    "base": false,
    "coords": {
      "lat": 49.4845,
      "lng": 23.5722
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LYS",
    "name": "Lyon",
    "categories": [],
    "iataCode": "LYS",
    "seoName": "lyon",
    "cityCode": "LYON",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["city:MALTA", "country:mt", "airport:MLA|Air Malta"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 45.7256,
      "lng": 5.0811
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:MST",
    "name": "Maastricht",
    "categories": ["FAM", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "MST",
    "seoName": "maastricht",
    "cityCode": "MAASTRICHT",
    "country": "Netherlands",
    "currencyCode": "EUR",
    "routes": ["country:es", "city:BARI", "airport:GRO", "airport:MLA", "city:MALTA", "country:mt", "airport:BRI", "region:PUGLIA", "country:it", "city:ALICANTE", "airport:ALC", "region:COSTA_BRAVA", "city:GIRONA"],
    "countryCode": "nl",
    "base": false,
    "coords": {
      "lat": 50.9117,
      "lng": 5.77014
    },
    "priority": 147,
    "seasonalRoutes": [],
    "aliases": ["Holland"]
  }, {
    "id": "airport:MAD",
    "name": "Madrid",
    "categories": ["HEN", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "MAD",
    "seoName": "madrid",
    "cityCode": "MADRID",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:TANGIER", "city:NUREMBERG", "airport:KRK", "airport:CRL", "city:VERONA", "city:FRANKFURT", "city:TENERIFE", "country:gr", "region:ENGLAND", "airport:BGY", "city:FUERTEVENTURA", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "country:hu", "city:BERLIN", "city:VIENNA", "city:LAMEZIA", "city:NAPLES", "city:SOFIA", "airport:TLS", "country:pt", "city:TRAPANI", "city:BOLOGNA", "country:pl", "airport:WRO", "airport:DUB", "airport:BHX", "airport:OZZ", "city:PISA", "city:GLASGOW", "airport:TNG", "airport:STN", "airport:OTP", "country:es", "airport:BRU", "airport:SCQ", "city:PARIS", "airport:NAP", "country:mt", "city:PALMA", "city:MARSEILLE", "airport:GLA", "airport:RAK", "airport:BRI", "airport:FRA", "city:LISBON", "region:TUSCANY", "airport:PMO", "connectingFlight:LIS:OPO", "airport:VIE", "city:MANCHESTER", "airport:LUX", "airport:CTA", "city:LONDON", "city:VILNIUS", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:SUF", "airport:TFS", "city:BRATISLAVA", "city:SANTIAGO", "city:MALTA", "airport:TFN", "city:PRAGUE", "country:nl", "city:RABAT", "city:PESCARA", "airport:RBA", "airport:VRN", "country:cz", "airport:MRS", "airport:BLQ", "city:BRUSSELS", "city:TOULOUSE", "city:BARI", "region:SARDINIA", "airport:BTS", "airport:LPA", "airport:POZ", "region:CANARY_ISLES", "airport:MAN", "airport:NCL", "connectingFlight:PSR:BGY", "airport:WMI", "airport:MAH", "city:KRAKOW", "airport:BVA", "country:ma", "city:CATANIA", "airport:SOF", "airport:CGN", "city:PALERMO", "city:WARSAW", "airport:ACE", "airport:IBZ", "city:MARRAKESH", "city:BUCHAREST", "airport:NUE", "country:dk", "city:ROME", "country:lt", "connectingFlight:ATH:BGY", "country:lu", "airport:FUE", "city:MENORCA", "airport:BUD", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "airport:OPO", "city:IBIZA", "city:PORTO", "airport:PRG", "airport:SXF", "airport:MLA", "country:at", "city:LANZAROTE", "airport:FEZ", "airport:CPH", "country:it", "city:FEZ", "country:ie", "airport:HAM", "city:OUARZAZATE", "region:SICILY", "airport:CAG", "country:sk", "city:BIRMINGHAM", "city:WROCLAW", "city:DUBLIN", "airport:PSA", "airport:CIA", "city:ATHENS", "country:bg", "city:COPENHAGEN", "region:PUGLIA", "city:LUXEMBOURG", "connectingFlight:TPS:BGY", "airport:VNO", "city:BUDAPEST", "country:ro", "city:CAGLIARI", "country:be", "city:POZNAN"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 40.4936,
      "lng": -3.56676
    },
    "priority": 6,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:AGP",
    "name": "Malaga",
    "categories": ["GLF", "HEN", "FAM", "SPR", "NIT", "CTY", "SEA", "OUT"],
    "iataCode": "AGP",
    "seoName": "malaga",
    "cityCode": "MALAGA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:BOURNEMOUTH", "airport:ORK", "city:NUREMBERG", "airport:LTN", "airport:KRK", "city:SANTANDER", "airport:CRL", "airport:DTM", "city:FRANKFURT", "country:gr", "city:HAUGESUND", "region:ENGLAND", "airport:BGY", "city:STOCKHOLM", "city:EINDHOVEN", "city:AMSTERDAM", "airport:PMI", "city:MILAN", "city:EDINBURGH", "airport:NYO", "country:hu", "city:BERLIN", "airport:DUS", "city:VIENNA", "city:LAMEZIA", "city:BILLUND", "city:NAPLES", "city:LEEDS", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:WRO", "airport:DUB", "airport:BHX", "city:GLASGOW", "airport:STN", "city:SHANNON", "airport:NRN", "country:es", "airport:BRU", "airport:BRS", "airport:SCQ", "airport:EXT", "connectingFlight:CTA:BGY", "airport:NAP", "city:PALMA", "country:mt", "city:MARSEILLE", "airport:GLA", "airport:FRA", "airport:BRE", "airport:VIE", "city:MANCHESTER", "city:EXETER", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:SDR", "city:BRATISLAVA", "city:SANTIAGO", "airport:FKB", "city:MALTA", "city:KNOCK", "city:PRAGUE", "country:nl", "airport:STR", "country:no", "airport:HHN", "airport:MRS", "country:cz", "airport:BLQ", "airport:TXL", "airport:LPL", "city:BRUSSELS", "region:SARDINIA", "airport:BTS", "airport:BLL", "airport:SEN", "airport:MAN", "airport:NCL", "airport:VST", "airport:WMI", "airport:FCO", "city:KRAKOW", "airport:GOT", "city:CATANIA", "city:CORK", "airport:MLA|Air Malta", "airport:CGN", "city:VENICE", "airport:FMM", "city:WARSAW", "city:PALERMO", "airport:IBZ", "connectingFlight:CAG:BGY", "city:BARCELONA", "city:LIVERPOOL", "country:dk", "airport:NUE", "city:ROME", "airport:ABZ", "city:MEMMINGEN", "connectingFlight:ATH:BGY", "airport:SNN", "region:COSTA_BRAVA", "city:STUTTGART", "city:BELFAST", "airport:BUD", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "airport:LBA", "connectingFlight:PMO:BGY", "connectingFlight:CTA:FCO", "airport:EDI", "city:IBIZA", "airport:TRF", "airport:PRG", "airport:SXF", "country:at", "airport:CPH", "airport:HAU", "country:it", "country:ie", "airport:HAM", "airport:PIK", "region:SICILY", "city:OSLO", "region:NORTHERN_IRELAND", "airport:AMS", "airport:TSF", "country:sk", "city:BIRMINGHAM", "city:KARLSRUHE", "country:se", "city:WROCLAW", "city:ABERDEEN", "airport:NOC", "city:DUBLIN", "city:BRISTOL", "city:ATHENS", "airport:BOH", "city:COPENHAGEN", "airport:EMA", "city:DORTMUND", "city:BUDAPEST", "city:SOUTHEND_ON_SEA", "city:CAGLIARI", "city:GOTHENBURG", "country:be", "airport:BFS", "city:BREMEN"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 36.6749,
      "lng": -4.49911
    },
    "priority": 8,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:MMX",
    "name": "Malmo",
    "categories": [],
    "iataCode": "MMX",
    "seoName": "malmo",
    "cityCode": "MALMO",
    "country": "Sweden",
    "currencyCode": "SEK",
    "routes": ["city:KRAKOW", "country:pl", "airport:KRK"],
    "countryCode": "se",
    "base": false,
    "coords": {
      "lat": 55.5363,
      "lng": 13.3762
    },
    "priority": 170,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:MLA",
    "name": "Malta",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CUL", "SEA", "OUT"],
    "iataCode": "MLA",
    "seoName": "malta",
    "cityCode": "MALTA",
    "country": "Malta",
    "currencyCode": "EUR",
    "routes": ["city:TALLINN", "airport:AGP|Air Malta", "city:NUREMBERG", "airport:LTN", "airport:KRK", "airport:CRL", "city:FRANKFURT", "city:ZURICH", "country:gr", "city:PERUGIA", "city:TUNIS", "city:STOCKHOLM", "city:EDINBURGH", "airport:CIY|Air Malta", "airport:PMO|Air Malta", "airport:NYO", "country:hu", "city:VIENNA", "city:BILLUND", "city:LEEDS", "city:BOLOGNA", "airport:DUB", "city:VALENCIA", "airport:STN", "country:es", "airport:BRS", "airport:EXT", "city:PARIS", "city:TEL_AVIV", "airport:LYS|Air Malta", "airport:BRI", "country:ee", "airport:LED|Air Malta", "airport:LUX", "airport:CTA", "city:LONDON", "city:EXETER", "airport:BCN", "city:DUSSELDORF", "city:VILNIUS", "country:gb", "airport:EIN", "connectingFlight:SKG:BGY", "city:COLOGNE", "country:fr", "airport:SUF", "airport:FKB", "city:SEVILLE", "airport:PRG|Air Malta", "airport:CMN|Air Malta", "airport:MRS", "airport:BLQ", "airport:LPL", "city:BARI", "region:SARDINIA", "airport:BLL", "airport:NTE", "region:WALES", "airport:KBP|Air Malta", "airport:MAN", "city:MUNICH", "airport:TLV|Air Malta", "airport:FCO", "airport:MAD", "airport:MST", "airport:TUN|Air Malta", "country:ma", "city:VENICE", "connectingFlight:CAG:BGY", "connectingFlight:BCN:FCO", "airport:NUE", "city:ROME", "country:lv", "country:lt", "country:lu", "city:BELFAST", "city:AMMAN", "city:GDANSK", "airport:LBA", "airport:EDI", "city:MOSCOW", "airport:TRF", "city:KIEV", "airport:CAG|Air Malta", "country:it", "country:ie", "airport:PIK", "country:il", "region:SICILY", "city:OSLO", "airport:TSF", "city:MAASTRICHT", "city:BIRMINGHAM", "airport:AMM", "city:WROCLAW", "city:MADRID", "airport:BOH", "country:jo", "region:PUGLIA", "airport:SVO|Air Malta", "city:BUDAPEST", "city:CAGLIARI", "airport:TRN", "city:BOURNEMOUTH", "city:CHARLEROI", "airport:ORK", "airport:GRO", "city:TURIN", "region:ENGLAND", "airport:BGY", "airport:PSR", "city:EINDHOVEN", "city:AMSTERDAM", "city:MILAN", "city:BERLIN", "city:GENEVA", "city:LYON", "city:LAMEZIA", "city:NAPLES", "country:pt", "airport:TLS", "connectingFlight:BCN:BGY", "airport:GVA|Air Malta", "country:pl", "airport:TLL", "airport:WRO", "airport:DUS|Air Malta", "airport:BHX", "city:PISA", "city:GLASGOW", "city:THESSALONIKI", "airport:RIX", "airport:VIE|Air Malta", "airport:NAP", "city:MARSEILLE", "city:LISBON", "region:TUSCANY", "airport:PEG", "city:MANCHESTER", "airport:SKG", "city:CARDIFF", "airport:LIS|Air Malta", "city:BRATISLAVA", "city:PRAGUE", "country:nl", "city:PESCARA", "airport:GDN", "country:no", "airport:VLC", "country:cz", "airport:SVQ", "country:tn", "city:TOULOUSE", "airport:BTS", "airport:FRA|Air Malta", "airport:POZ", "country:ch", "airport:ZRH|Air Malta", "city:KRAKOW", "airport:BVA", "city:CATANIA", "airport:GOT", "city:LOURDES", "city:CORK", "airport:CGN", "city:PALERMO", "country:ua", "city:BARCELONA", "region:COSTA_DE_SOL", "city:COMISO", "airport:AMS|Air Malta", "city:LIVERPOOL", "country:dk", "airport:ABZ", "airport:LDE|Air Malta", "airport:CWL", "region:COSTA_BRAVA", "airport:BUD", "region:SCOTLAND", "country:de", "airport:OPO", "city:CASABLANCA", "city:PORTO", "airport:SXF", "country:at", "city:MALAGA", "airport:ATH", "region:NORTHERN_IRELAND", "country:sk", "city:SAINT_PETERSBURG", "city:KARLSRUHE", "city:NANTES", "country:se", "city:ABERDEEN", "city:DUBLIN", "city:BRISTOL", "airport:PSA", "city:ATHENS", "airport:CIA", "airport:EMA", "airport:MUC|Air Malta", "city:LUXEMBOURG", "airport:VNO", "city:RIGA", "city:GIRONA", "country:ru", "city:GOTHENBURG", "country:be", "city:POZNAN", "airport:BFS"],
    "countryCode": "mt",
    "base": true,
    "coords": {
      "lat": 35.8575,
      "lng": 14.4775
    },
    "priority": 47,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:MAN",
    "name": "Manchester",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "MAN",
    "seoName": "manchester",
    "cityCode": "MANCHESTER",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:CARCASSONNE", "city:NUREMBERG", "airport:GRO", "airport:KRK", "airport:CRL", "city:BEZIERS", "city:FRANKFURT", "city:TENERIFE", "country:gr", "city:FARO", "airport:BGY", "city:FUERTEVENTURA", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "airport:AGP", "airport:CCF", "country:hu", "city:BERLIN", "city:LAMEZIA", "city:NAPLES", "country:pt", "airport:AGA", "airport:RHO", "airport:KBP", "country:hr", "airport:PDL", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "city:ZADAR", "city:SHANNON", "country:es", "city:THESSALONIKI", "airport:RIX", "city:CHANIA", "airport:RZE", "airport:ZAD", "airport:NAP", "city:PALMA", "country:mt", "city:MARSEILLE", "airport:RAK", "airport:BZR", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "connectingFlight:BRI:BGY", "airport:FRA", "city:RHODES", "airport:FAO", "city:LISBON", "airport:PMO", "airport:SKG", "airport:LEI", "city:ALMERIA", "airport:BCN", "airport:EIN", "country:gb", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:TFS", "city:BRATISLAVA", "city:MALTA", "city:SEVILLE", "country:nl", "city:PESCARA", "airport:GDN", "airport:STR", "country:no", "airport:VLC", "airport:MRS", "airport:SVQ", "airport:BLQ", "city:BARI", "region:SARDINIA", "airport:BTS", "airport:NTE", "airport:LPA", "region:CANARY_ISLES", "city:BRINDISI", "connectingFlight:PSR:BGY", "city:LIMOGES", "city:RZESZOW", "airport:WMI", "airport:MAD", "city:KRAKOW", "country:ma", "airport:GOT", "airport:LIG", "airport:CGN", "city:VENICE", "city:WARSAW", "city:PALERMO", "country:ua", "airport:ACE", "connectingFlight:CAG:BGY", "airport:IBZ", "city:BARCELONA", "region:COSTA_DE_SOL", "city:MARRAKESH", "airport:NUE", "city:ROME", "airport:MJV", "country:lv", "connectingFlight:ATH:BGY", "airport:FUE", "region:COSTA_BRAVA", "airport:SNN", "city:STUTTGART", "city:BELFAST", "airport:BDS", "airport:BUD", "airport:CFU", "city:AGADIR", "city:GDANSK", "country:de", "airport:OPO", "airport:CHQ", "city:MURCIA", "connectingFlight:PMO:BGY", "city:PONTA_DELGADA", "city:CORFU", "airport:TRF", "city:IBIZA", "city:PORTO", "city:KIEV", "airport:SXF", "airport:MLA", "airport:REU", "city:LANZAROTE", "country:it", "airport:RMU", "city:ALICANTE", "city:MALAGA", "airport:ALC", "airport:LIS", "country:ie", "airport:HAM", "city:OSLO", "region:SICILY", "airport:CAG", "region:NORTHERN_IRELAND", "airport:TSF", "country:sk", "city:NANTES", "country:se", "city:WROCLAW", "city:MADRID", "city:DUBLIN", "region:CRETE", "airport:CIA", "city:ATHENS", "region:PUGLIA", "airport:BOD", "city:BUDAPEST", "city:RIGA", "city:CAGLIARI", "city:GIRONA", "city:GOTHENBURG", "region:AZORES", "country:be", "airport:BFS"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 53.3537,
      "lng": -2.27495
    },
    "priority": 20,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB"]
  }, {
    "id": "airport:RAK",
    "name": "Marrakesh",
    "categories": ["GLF", "FAM", "SPR", "CTY", "CUL"],
    "iataCode": "RAK",
    "seoName": "marrakesh",
    "cityCode": "MARRAKESH",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["city:HAMBURG", "city:DOLE", "city:CHARLEROI", "airport:XCR", "city:NUREMBERG", "airport:LTN", "airport:KRK", "city:SANTANDER", "airport:DLE", "airport:CRL", "city:FRANKFURT", "country:gr", "region:ENGLAND", "airport:BGY", "city:STOCKHOLM", "city:EINDHOVEN", "city:MILAN", "airport:TUF", "airport:NYO", "country:hu", "city:BERLIN", "airport:DUS", "city:VIENNA", "city:NAPLES", "country:pt", "country:pl", "city:TOURS", "airport:DUB", "city:VALENCIA", "city:PISA", "airport:STN", "airport:NRN", "country:es", "airport:BRU", "city:PARIS", "airport:NAP", "city:MARSEILLE", "airport:VIE", "region:TUSCANY", "city:MANCHESTER", "airport:CTA", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:SDR", "city:BRATISLAVA", "airport:FKB", "city:SEVILLE", "city:PRAGUE", "country:nl", "airport:STR", "country:no", "airport:VLC", "airport:SVQ", "country:cz", "airport:MRS", "city:PERPIGNAN", "airport:HHN", "airport:TXL", "city:BRUSSELS", "airport:LPL", "airport:BTS", "airport:MAN", "airport:PGF", "airport:MAD", "city:KRAKOW", "airport:BVA", "city:CATANIA", "airport:CGN", "city:VENICE", "airport:FMM", "city:BARCELONA", "city:LIVERPOOL", "airport:NUE", "city:ROME", "city:MEMMINGEN", "region:COSTA_BRAVA", "city:STUTTGART", "airport:BUD", "country:de", "airport:OPO", "city:PORTO", "airport:TRF", "airport:PRG", "airport:FNI", "airport:SXF", "country:at", "country:it", "airport:PIS", "airport:ATH", "country:ie", "airport:HAM", "region:SICILY", "city:OSLO", "country:sk", "airport:TSF", "city:POITIERS", "city:NIMES", "city:KARLSRUHE", "country:se", "city:DUBLIN", "city:MADRID", "airport:PSA", "city:ATHENS", "airport:CIA", "city:BUDAPEST", "airport:BOD", "country:be"],
    "countryCode": "ma",
    "base": true,
    "coords": {
      "lat": 31.6069,
      "lng": -8.0363
    },
    "priority": 41,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:MRS",
    "name": "Marseille",
    "categories": ["SKI", "ROM", "FAM", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "MRS",
    "seoName": "marseille",
    "cityCode": "MARSEILLE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["city:CHARLEROI", "city:TANGIER", "airport:KRK", "airport:CRL", "city:FRANKFURT", "city:FARO", "region:ENGLAND", "city:OUJDA", "city:EINDHOVEN", "airport:PMI", "airport:AGP", "city:EDINBURGH", "airport:TUF", "country:hu", "city:NAPLES", "country:pt", "airport:AGA", "country:hr", "city:BOLOGNA", "country:pl", "city:VALENCIA", "city:TOURS", "airport:OZZ", "airport:TNG", "airport:STN", "city:ZADAR", "airport:OTP", "country:es", "airport:ZAD", "airport:NAP", "city:PALMA", "country:mt", "airport:RAK", "city:BREST", "airport:FRA", "airport:FAO", "city:LISBON", "airport:PMO", "city:MANCHESTER", "airport:CTA", "city:LONDON", "airport:EIN", "country:gb", "country:fr", "city:BORDEAUX", "city:NADOR", "airport:OUD", "city:MALTA", "city:SEVILLE", "city:PRAGUE", "country:nl", "city:RABAT", "airport:STR", "airport:RBA", "airport:VLC", "country:cz", "airport:SVQ", "airport:BLQ", "airport:NTE", "region:BRITTANY", "airport:MAN", "airport:WMI", "airport:FCO", "airport:MAD", "city:KRAKOW", "country:ma", "city:CATANIA", "city:WARSAW", "city:PALERMO", "airport:IBZ", "region:COSTA_DE_SOL", "city:MARRAKESH", "city:BUCHAREST", "city:ROME", "airport:NDR", "region:COSTA_BRAVA", "city:STUTTGART", "airport:BUD", "city:AGADIR", "region:SCOTLAND", "country:de", "airport:OPO", "city:LILLE", "airport:EDI", "city:IBIZA", "city:PORTO", "airport:PRG", "airport:MLA", "airport:FEZ", "country:it", "city:FEZ", "city:ALICANTE", "airport:PIS", "city:MALAGA", "airport:ALC", "airport:LIS", "city:OUARZAZATE", "airport:LIL", "airport:BES", "region:SICILY", "city:POITIERS", "city:NANTES", "city:MADRID", "airport:CIA", "airport:BOD", "city:BUDAPEST", "country:ro", "country:be"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.4393,
      "lng": 5.22142
    },
    "priority": 34,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:FMM",
    "name": "Memmingen",
    "categories": ["SKI", "FAM", "SPR", "FST", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "FMM",
    "seoName": "munich-memmingen",
    "cityCode": "MEMMINGEN",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:SVQ", "region:SARDINIA", "airport:GRO", "city:LVIV", "city:TENERIFE", "region:CANARY_ISLES", "country:gr", "city:BRINDISI", "city:FARO", "region:ENGLAND", "airport:WMI", "airport:OMR", "city:STOCKHOLM", "country:ma", "airport:PMI", "airport:AGP", "airport:SOF", "city:EDINBURGH", "city:PALERMO", "city:WARSAW", "country:ua", "airport:NYO", "region:COSTA_DE_SOL", "city:MARRAKESH", "airport:TLV", "city:SOFIA", "country:pt", "country:hr", "city:ALGHERO", "region:COSTA_BRAVA", "country:pl", "airport:BDS", "airport:DUB", "region:SCOTLAND", "airport:STN", "city:ZADAR", "airport:OPO", "airport:BNX", "airport:EDI", "city:PORTO", "airport:AHO", "country:es", "city:ORADEA", "city:THESSALONIKI", "city:TEL_AVIV", "airport:ZAD", "city:PALMA", "airport:FEZ", "airport:RAK", "country:it", "city:FEZ", "city:ALICANTE", "city:MALAGA", "airport:ALC", "airport:ATH", "country:ie", "airport:FAO", "city:LISBON", "airport:PMO", "country:il", "connectingFlight:LIS:OPO", "airport:SKG", "city:LONDON", "region:SICILY", "country:gb", "airport:LWO", "airport:TFS", "country:se", "city:DUBLIN", "airport:BOJ", "city:ATHENS", "country:bg", "city:SEVILLE", "region:PUGLIA", "city:BURGAS", "country:ba", "country:ro", "city:GIRONA", "city:BANJA_LUKA"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 47.9888,
      "lng": 10.2395
    },
    "priority": 84,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:MAH",
    "name": "Menorca",
    "categories": ["FAM", "SEA"],
    "iataCode": "MAH",
    "seoName": "mahon-menorca",
    "cityCode": "MENORCA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "airport:BCN", "airport:EMA", "country:gb", "region:ENGLAND", "country:es", "city:BIRMINGHAM", "region:COSTA_BRAVA", "city:VALENCIA", "city:BARCELONA", "airport:MAD", "city:MADRID"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 39.8626,
      "lng": 4.21865
    },
    "priority": 116,
    "seasonalRoutes": [],
    "aliases": ["Mahon"]
  }, {
    "id": "airport:BGY",
    "name": "Milan Bergamo",
    "categories": ["SKI", "ROM", "FAM", "CTY", "CUL", "OUT"],
    "iataCode": "BGY",
    "seoName": "milan-bergamo",
    "cityCode": "MILAN",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:TALLINN", "airport:LDE", "airport:EFL", "city:TANGIER", "airport:CRV", "city:NUREMBERG", "airport:KRK", "airport:INI", "city:SANTANDER", "connectingFlight:PDL:OPO", "airport:CRL", "city:FRANKFURT", "city:KEFALONIA", "airport:VGO", "country:gr", "connectingFlight:FAO:OPO", "airport:TSR", "city:STOCKHOLM", "airport:PMI", "city:EDINBURGH", "city:VITORIA-GASTEIZ", "airport:NYO", "country:hu", "city:VIENNA", "city:SOFIA", "city:BILLUND", "city:ALGHERO", "city:VALENCIA", "airport:DUB", "airport:STN", "country:es", "airport:BRS", "airport:SCQ", "airport:BRQ", "airport:VIT", "city:PARIS", "city:TEL_AVIV", "city:NIS", "city:PALMA", "airport:RAK", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:BRE", "city:RHODES", "airport:VIE", "airport:PMO", "country:ee", "airport:LUX", "city:LONDON", "airport:CTA", "airport:BCN", "city:DUSSELDORF", "city:VILNIUS", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:SUF", "city:TERCEIRA", "airport:SDR", "airport:TFS", "city:MALTA", "city:VIGO", "city:SEVILLE", "city:ZARAGOZA", "city:BURGAS", "airport:ZAZ", "airport:STR", "country:fi", "airport:LPP", "city:BARI", "region:SARDINIA", "airport:BLL", "airport:LPA", "city:BRINDISI", "airport:MAN", "airport:MAD", "country:ma", "airport:SOF", "city:MARRAKESH", "city:BUCHAREST", "city:HERAKLION", "airport:NUE", "country:lv", "airport:TPS", "city:LAPPEENRANTA", "country:lt", "country:lu", "airport:FUE", "airport:VDA", "city:STUTTGART", "city:BELFAST", "city:AMMAN", "city:GDANSK", "airport:EDI", "airport:TRF", "city:IBIZA", "airport:FEZ", "airport:CPH", "country:it", "airport:ALC", "country:ie", "country:il", "region:SICILY", "city:OSLO", "airport:CAG", "city:BIRMINGHAM", "airport:AMM", "city:WROCLAW", "city:MADRID", "city:CROTONE", "airport:BOJ", "country:jo", "region:PUGLIA", "airport:BOD", "city:BUDAPEST", "city:CAGLIARI", "region:AZORES", "city:BREMEN", "city:HAMBURG", "city:CHARLEROI", "airport:ORK", "city:TENERIFE", "city:FARO", "region:ENGLAND", "airport:CIY", "airport:PSR", "city:EINDHOVEN", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "airport:OSR", "city:TIMISOARA", "airport:AGP", "city:BERLIN", "airport:PDV", "city:BRNO", "city:LAMEZIA", "city:NAPLES", "airport:TLV", "country:pt", "airport:RHO", "connectingFlight:TER:OPO", "city:TRAPANI", "country:pl", "airport:TLL", "airport:WRO", "airport:TNG", "airport:OTP", "airport:NRN", "airport:AHO", "city:THESSALONIKI", "airport:RIX", "city:CHANIA", "airport:NAP", "country:mt", "airport:FRA", "airport:HER", "city:PAPHOS", "airport:FAO", "city:LISBON", "airport:SKG", "city:MANCHESTER", "city:OSTRAVA", "city:BRATISLAVA", "city:SANTIAGO", "airport:PFO", "city:KNOCK", "city:PRAGUE", "country:nl", "city:PESCARA", "airport:GDN", "country:no", "airport:VLC", "country:cy", "country:cz", "airport:SVQ", "airport:BTS", "airport:POZ", "region:CANARY_ISLES", "airport:SEN", "airport:WMI", "airport:OMR", "city:KRAKOW", "airport:BVA", "airport:GOT", "city:CATANIA", "city:LOURDES", "city:CORK", "airport:CGN", "city:WARSAW", "airport:ACE", "city:PALERMO", "airport:IBZ", "region:COSTA_DE_SOL", "city:BARCELONA", "city:COMISO", "country:dk", "city:EILAT", "region:COSTA_BRAVA", "airport:BDS", "airport:BUD", "airport:CFU", "region:SCOTLAND", "country:de", "airport:OPO", "airport:CHQ", "city:PONTA_DELGADA", "city:CORFU", "city:PORTO", "airport:PRG", "city:ORADEA", "airport:SXF", "airport:MLA", "country:at", "city:LANZAROTE", "city:FEZ", "city:MALAGA", "city:ALICANTE", "city:PLOVDIV", "airport:ATH", "airport:LIS", "airport:HAM", "region:NORTHERN_IRELAND", "country:sk", "country:se", "airport:NOC", "city:DUBLIN", "city:BRISTOL", "region:CRETE", "city:ATHENS", "country:bg", "city:COPENHAGEN", "airport:EMA", "city:LUXEMBOURG", "airport:VNO", "city:RIGA", "city:SOUTHEND_ON_SEA", "country:ro", "country:be", "city:GOTHENBURG", "city:POZNAN", "airport:BFS", "country:rs"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 45.6739,
      "lng": 9.70417
    },
    "priority": 3,
    "seasonalRoutes": [],
    "aliases": ["Bergamo"],
    "weight": 1
  }, {
    "id": "airport:MXP",
    "name": "Milan Malpensa",
    "categories": [],
    "iataCode": "MXP",
    "seoName": "milan-malpensa",
    "cityCode": "MILAN",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "airport:SVQ", "city:BRUSSELS", "airport:LPL", "airport:TXL", "airport:LPA", "region:CANARY_ISLES", "city:TENERIFE", "city:KATOWICE", "country:gr", "region:ENGLAND", "airport:CIY", "city:EINDHOVEN", "city:GRAN_CANARIA", "city:CATANIA", "airport:SOF", "city:PALERMO", "city:BERLIN", "city:COMISO", "city:BUCHAREST", "city:LIVERPOOL", "city:LAMEZIA", "city:HERAKLION", "city:KAUNAS", "city:SOFIA", "country:pt", "country:lt", "region:COSTA_BRAVA", "country:pl", "city:VALENCIA", "country:de", "airport:STN", "airport:OPO", "airport:KTW", "airport:OTP", "city:PORTO", "country:es", "airport:BRU", "country:it", "city:ALICANTE", "airport:ALC", "airport:HER", "city:LISBON", "connectingFlight:LIS:OPO", "airport:PMO", "airport:CTA", "city:LONDON", "region:SICILY", "country:gb", "airport:EIN", "airport:KUN", "airport:SUF", "airport:TFS", "region:CRETE", "country:bg", "city:SEVILLE", "country:nl", "country:ro", "country:be"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 45.63,
      "lng": 8.7231
    },
    "priority": 224,
    "seasonalRoutes": [],
    "aliases": ["Malpensa"],
    "weight": 2
  }, {
    "id": "airport:MPL",
    "name": "Montpellier",
    "categories": ["SKI", "FAM", "SPR", "CTY", "SEA"],
    "iataCode": "MPL",
    "seoName": "montpellier",
    "cityCode": "MONTPELLIER",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:CRL", "airport:HHN", "city:FRANKFURT", "city:CHARLEROI", "country:be", "country:de"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.5762,
      "lng": 3.96301
    },
    "priority": 119,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SVO",
    "name": "Moscow Sheremetyevo",
    "categories": [],
    "iataCode": "SVO",
    "seoName": "moscow-sheremetyevo",
    "cityCode": "MOSCOW",
    "country": "Russia",
    "currencyCode": "EUR",
    "routes": ["city:MALTA", "country:mt", "airport:MLA|Air Malta"],
    "countryCode": "ru",
    "base": false,
    "coords": {
      "lat": 55.9728,
      "lng": 37.4147
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": ["Sheremetyevo"]
  }, {
    "id": "airport:MUC",
    "name": "Munich",
    "categories": [],
    "iataCode": "MUC",
    "seoName": "munich",
    "cityCode": "MUNICH",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["city:MALTA", "country:mt", "city:PALMA", "airport:PMI", "airport:MLA|Air Malta", "country:es", "country:ie", "airport:DUB", "city:DUBLIN"],
    "countryCode": "de",
    "base": false,
    "coords": {
      "lat": 48.3539,
      "lng": 11.7861
    },
    "priority": 223,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:MJV",
    "name": "Murcia",
    "categories": ["GLF", "FAM", "CTY", "SEA", "OUT"],
    "iataCode": "MJV",
    "seoName": "murcia",
    "cityCode": "MURCIA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:GLASGOW", "airport:LBA", "city:BOURNEMOUTH", "airport:LTN", "city:FRANKFURT", "airport:MAN", "region:ENGLAND", "airport:FRA", "country:ie", "airport:PIK", "city:MANCHESTER", "city:LONDON", "city:EINDHOVEN", "country:gb", "airport:EIN", "city:BIRMINGHAM", "city:DUBLIN", "airport:BOH", "airport:EMA", "city:LEEDS", "country:nl", "airport:DUB", "airport:BHX", "region:SCOTLAND", "country:de"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 37.775,
      "lng": -0.812389
    },
    "priority": 67,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:RMU",
    "name": "Murcia International",
    "categories": [],
    "iataCode": "RMU",
    "seoName": "murcia-international",
    "cityCode": "MURCIA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:GLASGOW", "airport:STN", "airport:LBA", "city:BOURNEMOUTH", "country:gb", "airport:LTN", "city:BIRMINGHAM", "city:DUBLIN", "airport:BOH", "airport:EMA", "airport:MAN", "region:ENGLAND", "city:LEEDS", "country:ie", "airport:DUB", "airport:PIK", "airport:BHX", "region:SCOTLAND", "city:MANCHESTER", "city:LONDON"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 37.7903,
      "lng": -1.1418
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:JMK",
    "name": "Mykonos",
    "categories": [],
    "iataCode": "JMK",
    "seoName": "mykonos",
    "cityCode": "MYKONOS",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:BLQ", "country:fr", "city:BORDEAUX", "city:FRANKFURT", "city:ATHENS", "airport:PFO", "country:it", "country:gr", "airport:BOD", "airport:FRA", "airport:ATH", "city:BOLOGNA", "city:PAPHOS", "country:de"],
    "countryCode": "gr",
    "base": false,
    "coords": {
      "lat": 37.4351,
      "lng": 25.3481
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:FMO",
    "name": "Münster",
    "categories": ["FAM", "FST"],
    "iataCode": "FMO",
    "seoName": "munster",
    "cityCode": "MUNSTER",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["city:PALMA", "airport:PMI", "country:es"],
    "countryCode": "de",
    "base": false,
    "coords": {
      "lat": 52.1346,
      "lng": 7.68483
    },
    "priority": 158,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:NDR",
    "name": "Nador",
    "categories": ["FAM", "SPR", "FST", "CTY", "OUT"],
    "iataCode": "NDR",
    "seoName": "nador",
    "cityCode": "NADOR",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["airport:BCN", "airport:BVA", "city:DUSSELDORF", "airport:MRS", "airport:HHN", "city:CHARLEROI", "airport:NRN", "country:es", "country:fr", "city:PARIS", "city:BARCELONA", "airport:CRL", "city:FRANKFURT", "city:MARSEILLE", "region:COSTA_BRAVA", "country:be", "country:de"],
    "countryCode": "ma",
    "base": false,
    "coords": {
      "lat": 34.9888,
      "lng": -3.02821
    },
    "priority": 87,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:NTE",
    "name": "Nantes",
    "categories": ["FAM", "CTY", "CUL", "OUT"],
    "iataCode": "NTE",
    "seoName": "nantes",
    "cityCode": "NANTES",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:VLC", "airport:MRS", "airport:SVQ", "airport:EDI", "country:es", "airport:MLA", "airport:NAP", "country:mt", "airport:FEZ", "city:MARSEILLE", "city:FEZ", "country:it", "airport:MAN", "region:ENGLAND", "country:ie", "city:MANCHESTER", "city:LONDON", "country:ma", "country:gb", "city:EDINBURGH", "country:fr", "city:BORDEAUX", "city:DUBLIN", "city:NAPLES", "city:MALTA", "city:SEVILLE", "airport:BOD", "airport:DUB", "city:VALENCIA", "region:SCOTLAND"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 47.1532,
      "lng": -1.61073
    },
    "priority": 111,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:NAP",
    "name": "Naples",
    "categories": [],
    "iataCode": "NAP",
    "seoName": "naples",
    "cityCode": "NAPLES",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "airport:ORK", "airport:KRK", "connectingFlight:HAM:BGY", "airport:CRL", "connectingFlight:PMI:BGY", "city:FRANKFURT", "city:TENERIFE", "country:gr", "region:ENGLAND", "airport:BGY", "city:STOCKHOLM", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:AGP", "city:MILAN", "city:EDINBURGH", "connectingFlight:IBZ:BGY", "country:hu", "airport:NYO", "city:BERLIN", "airport:DUS", "city:KAUNAS", "airport:TLS", "country:pt", "airport:RHO", "connectingFlight:EDI:BGY", "city:BOLOGNA", "country:pl", "connectingFlight:SXF:BGY", "airport:WRO", "city:VALENCIA", "airport:DUB", "connectingFlight:LPA:BGY", "airport:STN", "country:es", "city:THESSALONIKI", "connectingFlight:VNO:BGY", "airport:EXT", "city:CHANIA", "connectingFlight:CGN:BGY", "city:PALMA", "country:mt", "city:MARSEILLE", "airport:RAK", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:BRE", "city:RHODES", "connectingFlight:PRG:BGY", "city:LISBON", "city:MANCHESTER", "airport:SKG", "city:EXETER", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "city:VILNIUS", "airport:EIN", "country:gb", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:KUN", "city:MALTA", "city:SEVILLE", "city:ZARAGOZA", "city:PRAGUE", "country:nl", "airport:GDN", "airport:STR", "airport:VLC", "country:cz", "airport:SVQ", "airport:MRS", "airport:HHN", "airport:BLQ", "airport:TXL", "city:TOULOUSE", "airport:NTE", "region:CANARY_ISLES", "airport:MAN", "airport:WMI", "airport:MAD", "city:KRAKOW", "country:ma", "connectingFlight:CRL:BGY", "city:CORK", "city:VENICE", "city:WARSAW", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "connectingFlight:TFS:BGY", "country:dk", "connectingFlight:CFU:BGY", "country:lt", "connectingFlight:ATH:BGY", "region:COSTA_BRAVA", "city:STUTTGART", "airport:BUD", "region:SCOTLAND", "city:GDANSK", "country:de", "airport:OPO", "airport:CHQ", "connectingFlight:ZAZ:BGY", "city:CORFU", "city:IBIZA", "city:PORTO", "airport:MLA", "airport:CPH", "city:ALICANTE", "city:MALAGA", "country:it", "airport:LIS", "country:ie", "connectingFlight:ALC:BGY", "airport:TSF", "connectingFlight:BRS:BGY", "city:BIRMINGHAM", "city:NANTES", "city:WROCLAW", "country:se", "city:MADRID", "city:DUBLIN", "city:BRISTOL", "region:CRETE", "city:ATHENS", "city:COPENHAGEN", "airport:EMA", "city:BUDAPEST", "airport:BOD", "country:be", "city:BREMEN"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 40.5304,
      "lng": 14.1727
    },
    "priority": 104,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:NCL",
    "name": "Newcastle",
    "categories": ["GLF", "HEN", "FAM", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "NCL",
    "seoName": "newcastle",
    "cityCode": "NEWCASTLE",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["country:es", "airport:GRO", "city:LANZAROTE", "city:PALMA", "region:CANARY_ISLES", "city:TENERIFE", "city:ALICANTE", "city:MALAGA", "city:FARO", "airport:ALC", "country:ie", "airport:WMI", "airport:FAO", "airport:MAD", "airport:PMI", "airport:AGP", "airport:ACE", "city:WARSAW", "city:WROCLAW", "airport:TFS", "region:COSTA_DE_SOL", "city:MADRID", "city:DUBLIN", "country:pt", "region:COSTA_BRAVA", "country:pl", "airport:WRO", "airport:DUB", "airport:GDN", "city:GIRONA", "city:GDANSK"],
    "countryCode": "gb",
    "base": false,
    "coords": {
      "lat": 55.0375,
      "lng": -1.69167
    },
    "priority": 132,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB"]
  }, {
    "id": "airport:NQY",
    "name": "Newquay Cornwall",
    "categories": [],
    "iataCode": "NQY",
    "seoName": "newquay",
    "cityCode": "NEWQUAY",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["airport:HHN", "city:FRANKFURT", "country:pt", "city:ALICANTE", "city:FARO", "airport:ALC", "country:es", "region:COSTA_BRAVA", "airport:FAO", "country:de"],
    "countryCode": "gb",
    "base": false,
    "coords": {
      "lat": 50.4406,
      "lng": -4.99541
    },
    "priority": 225,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB", "Cornwall"]
  }, {
    "id": "airport:NCE",
    "name": "Nice",
    "categories": ["SKI", "FAM", "SPR", "FST", "CTY", "CUL", "SEA", "XMS"],
    "iataCode": "NCE",
    "seoName": "nice",
    "cityCode": "NICE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "country:gb", "region:ENGLAND", "country:ie", "city:STUTTGART", "airport:DUB", "airport:STR", "city:LONDON", "city:DUBLIN", "country:de"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.6584,
      "lng": 7.21587
    },
    "priority": 127,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:FNI",
    "name": "Nimes",
    "categories": ["FAM", "CTY", "CUL", "OUT"],
    "iataCode": "FNI",
    "seoName": "nimes",
    "cityCode": "NIMES",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "country:ma", "city:CHARLEROI", "country:gb", "airport:LTN", "city:MARRAKESH", "airport:CRL", "airport:FEZ", "airport:RAK", "city:FEZ", "region:ENGLAND", "country:be", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.7574,
      "lng": 4.41635
    },
    "priority": 103,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:INI",
    "name": "Nis",
    "categories": [],
    "iataCode": "INI",
    "seoName": "nis",
    "cityCode": "NIS",
    "country": "Serbia",
    "currencyCode": "EUR",
    "routes": ["city:DUSSELDORF", "city:MILAN", "airport:NRN", "country:sk", "airport:NYO", "airport:BTS", "airport:SXF", "city:BERLIN", "country:se", "city:BRATISLAVA", "country:it", "airport:BGY", "city:STOCKHOLM", "country:de"],
    "countryCode": "rs",
    "base": false,
    "coords": {
      "lat": 43.3372,
      "lng": 21.8536
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:NUE",
    "name": "Nuremberg",
    "categories": ["FAM", "CTY", "CUL", "XMS"],
    "iataCode": "NUE",
    "seoName": "nuremberg",
    "cityCode": "NUREMBERG",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:CRV", "city:BARI", "airport:KRK", "region:SARDINIA", "airport:MAN", "country:gr", "city:FARO", "connectingFlight:FAO:OPO", "region:ENGLAND", "airport:BGY", "airport:MAD", "city:KRAKOW", "country:ma", "airport:PMI", "airport:AGP", "city:MILAN", "city:PALERMO", "country:hu", "connectingFlight:CAG:BGY", "region:COSTA_DE_SOL", "city:MARRAKESH", "country:pt", "city:ROME", "country:hr", "country:lt", "country:pl", "region:COSTA_BRAVA", "airport:BUD", "airport:STN", "airport:OPO", "city:ZADAR", "city:PORTO", "country:es", "city:THESSALONIKI", "airport:MLA", "airport:ZAD", "country:mt", "city:PALMA", "airport:RAK", "airport:BRI", "country:it", "city:MALAGA", "city:ALICANTE", "airport:ALC", "airport:PMO", "city:MANCHESTER", "airport:SKG", "city:LONDON", "region:SICILY", "city:VILNIUS", "country:gb", "city:MADRID", "city:CROTONE", "city:MALTA", "airport:CIA", "region:PUGLIA", "city:BUDAPEST", "airport:VNO", "city:CAGLIARI"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 49.4987,
      "lng": 11.0669
    },
    "priority": 122,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SZY",
    "name": "Olsztyn - Mazury",
    "categories": [],
    "iataCode": "SZY",
    "seoName": "olsztyn-mazury",
    "cityCode": "OLSZTYN",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:STN", "country:gb", "region:ENGLAND", "city:LONDON"],
    "countryCode": "pl",
    "base": false,
    "coords": {
      "lat": 53.4819,
      "lng": 20.9378
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": ["Mazury"]
  }, {
    "id": "airport:OMR",
    "name": "Oradea",
    "categories": [],
    "iataCode": "OMR",
    "seoName": "oradea",
    "cityCode": "ORADEA",
    "country": "Romania",
    "currencyCode": "EUR",
    "routes": ["city:MILAN", "airport:EIN", "country:es", "airport:FMM", "airport:GRO", "country:it", "city:MEMMINGEN", "country:nl", "region:COSTA_BRAVA", "airport:BGY", "city:GIRONA", "city:EINDHOVEN", "country:de"],
    "countryCode": "ro",
    "base": false,
    "coords": {
      "lat": 47.0252991,
      "lng": 21.9025002
    },
    "priority": 194,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:OSL",
    "name": "Oslo",
    "categories": [],
    "iataCode": "OSL",
    "seoName": "oslo",
    "cityCode": "OSLO",
    "country": "Norway",
    "currencyCode": "NOK",
    "routes": ["airport:STN", "city:VILNIUS", "country:gb", "airport:VNO", "country:lt", "region:ENGLAND", "city:LONDON"],
    "countryCode": "no",
    "base": false,
    "coords": {
      "lat": 60.2028,
      "lng": 11.0839
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TRF",
    "name": "Oslo Torp",
    "categories": ["FAM", "FST", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "TRF",
    "seoName": "oslo-torp",
    "cityCode": "OSLO",
    "country": "Norway",
    "currencyCode": "NOK",
    "routes": ["airport:STN", "city:HAMBURG", "country:es", "airport:KRK", "airport:MLA", "airport:LPA", "country:mt", "airport:POZ", "airport:RAK", "city:TENERIFE", "region:CANARY_ISLES", "city:MALAGA", "airport:MAN", "city:ALICANTE", "country:it", "airport:ALC", "region:ENGLAND", "airport:WMI", "airport:HAM", "airport:BGY", "city:MANCHESTER", "city:LONDON", "city:KRAKOW", "city:GRAN_CANARIA", "country:ma", "airport:AGP", "country:gb", "city:MILAN", "city:WARSAW", "city:WROCLAW", "airport:TFS", "region:COSTA_DE_SOL", "city:MARRAKESH", "city:MALTA", "country:pl", "region:COSTA_BRAVA", "airport:WRO", "airport:GDN", "city:GDANSK", "city:POZNAN", "country:de"],
    "countryCode": "no",
    "base": false,
    "coords": {
      "lat": 59.1867,
      "lng": 10.2586
    },
    "priority": 131,
    "seasonalRoutes": [],
    "aliases": ["Torp", "Oslo Torp"],
    "weight": 2
  }, {
    "id": "airport:OSR",
    "name": "Ostrava",
    "categories": ["FAM", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "OSR",
    "seoName": "ostrava",
    "cityCode": "OSTRAVA",
    "country": "Czech Republic",
    "currencyCode": "CZK",
    "routes": ["airport:STN", "country:gb", "city:MILAN", "country:it", "region:ENGLAND", "airport:BGY", "city:LONDON"],
    "countryCode": "cz",
    "base": false,
    "coords": {
      "lat": 49.6963,
      "lng": 18.1111
    },
    "priority": 144,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:OZZ",
    "name": "Ouarzazate",
    "categories": [],
    "iataCode": "OZZ",
    "seoName": "ouarzazate",
    "cityCode": "OUARZAZATE",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["airport:MRS", "city:MARSEILLE", "airport:BOD", "country:es", "country:fr", "city:BORDEAUX", "airport:MAD", "city:MADRID"],
    "countryCode": "ma",
    "base": false,
    "coords": {
      "lat": 30.9392,
      "lng": -6.9094
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:OUD",
    "name": "Oujda",
    "categories": ["FAM", "CTY", "CUL"],
    "iataCode": "OUD",
    "seoName": "oujda",
    "cityCode": "OUJDA",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["airport:CRL", "airport:BVA", "city:DUSSELDORF", "airport:MRS", "city:MARSEILLE", "city:CHARLEROI", "airport:NRN", "country:fr", "country:be", "city:PARIS", "country:de"],
    "countryCode": "ma",
    "base": false,
    "coords": {
      "lat": 34.7872,
      "lng": -1.92399
    },
    "priority": 110,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PAD",
    "name": "Paderborn",
    "categories": [],
    "iataCode": "PAD",
    "seoName": "paderborn",
    "cityCode": "PADERBORN",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["city:PALMA", "airport:PMI", "country:es"],
    "countryCode": "de",
    "base": false,
    "coords": {
      "lat": 51.3655,
      "lng": 8.3702
    },
    "priority": 198,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PLQ",
    "name": "Palanga",
    "categories": [],
    "iataCode": "PLQ",
    "seoName": "palanga",
    "cityCode": "PALANGA",
    "country": "Lithuania",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:GLASGOW", "airport:GLA", "country:gb", "region:ENGLAND", "region:SCOTLAND", "city:LONDON"],
    "countryCode": "lt",
    "base": false,
    "coords": {
      "lat": 55.9733,
      "lng": 21.0939
    },
    "priority": 300,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PMO",
    "name": "Palermo",
    "categories": ["FAM", "CTY", "CUL", "SEA"],
    "iataCode": "PMO",
    "seoName": "palermo",
    "cityCode": "PALERMO",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:NUREMBERG", "connectingFlight:HAM:BGY", "city:VERONA", "airport:CRL", "city:TENERIFE", "city:TURIN", "country:gr", "region:ENGLAND", "airport:BGY", "city:GRAN_CANARIA", "city:MILAN", "city:EDINBURGH", "connectingFlight:BRI:FCO", "connectingFlight:IBZ:BGY", "country:hu", "city:BERLIN", "airport:DUS", "country:pt", "connectingFlight:EDI:BGY", "connectingFlight:BCN:BGY", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "connectingFlight:LPA:BGY", "city:PISA", "airport:STN", "airport:OTP", "airport:NRN", "country:es", "airport:MXP", "city:THESSALONIKI", "connectingFlight:VNO:BGY", "city:PARIS", "connectingFlight:CGN:BGY", "country:mt", "city:MARSEILLE", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "connectingFlight:PRG:BGY", "city:LISBON", "region:TUSCANY", "city:MANCHESTER", "city:LONDON", "city:DUSSELDORF", "city:VILNIUS", "country:gb", "connectingFlight:SKG:BGY", "city:COLOGNE", "country:fr", "city:MALTA", "connectingFlight:BRU:FCO", "city:PRAGUE", "connectingFlight:LIS:BGY", "airport:VRN", "connectingFlight:AGP:BGY", "airport:VLC", "country:cz", "airport:MRS", "airport:BLQ", "city:BRUSSELS", "city:BARI", "region:CANARY_ISLES", "airport:MAN", "airport:FCO", "airport:MAD", "airport:BVA", "city:KRAKOW", "connectingFlight:ALC:FCO", "connectingFlight:CRL:BGY", "airport:MLA|Air Malta", "airport:CGN", "city:VENICE", "airport:FMM", "region:COSTA_DE_SOL", "city:BARCELONA", "connectingFlight:EMA:BGY", "connectingFlight:TFS:BGY", "connectingFlight:BCN:FCO", "city:BUCHAREST", "airport:NUE", "connectingFlight:CFU:BGY", "city:ROME", "connectingFlight:ATH:BGY", "city:MEMMINGEN", "country:lt", "region:COSTA_BRAVA", "connectingFlight:MAN:BGY", "airport:BUD", "region:SCOTLAND", "country:de", "connectingFlight:KRK:BGY", "city:CORFU", "city:IBIZA", "city:PORTO", "airport:SXF", "city:LANZAROTE", "city:MALAGA", "city:ALICANTE", "country:it", "airport:ATH", "country:ie", "connectingFlight:ALC:BGY", "connectingFlight:BRE:BGY", "connectingFlight:OPO:BGY", "airport:TSF", "connectingFlight:BRS:BGY", "city:BIRMINGHAM", "city:WROCLAW", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "airport:PSA", "city:ATHENS", "region:PUGLIA", "connectingFlight:ACE:BGY", "city:BUDAPEST", "country:ro", "country:be", "city:BREMEN", "airport:TRN"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 38.176,
      "lng": 13.091
    },
    "priority": 19,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PMI",
    "name": "Palma de Mallorca",
    "categories": ["HEN", "FAM", "CTY", "SEA", "OUT"],
    "iataCode": "PMI",
    "seoName": "palma-mallorca",
    "cityCode": "PALMA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:BOURNEMOUTH", "airport:INN", "airport:ORK", "city:NUREMBERG", "airport:KRK", "city:SANTANDER", "airport:SZG", "airport:DTM", "airport:CRL", "city:FRANKFURT", "city:STRASBOURG", "region:ENGLAND", "city:INNSBRUCK", "city:STOCKHOLM", "airport:BGY", "city:EINDHOVEN", "airport:AGP", "city:MILAN", "city:EDINBURGH", "city:VITORIA-GASTEIZ", "airport:NYO", "city:BERLIN", "airport:DUS", "city:VIENNA", "city:LAMEZIA", "city:NAPLES", "city:KAUNAS", "city:BILLUND", "country:pt", "city:LEEDS", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "airport:BHX", "airport:GRZ", "airport:STN", "city:GLASGOW", "city:SHANNON", "airport:NRN", "airport:BRU", "country:es", "city:HANNOVER", "airport:BRS", "city:LINZ", "airport:VIT", "airport:SCQ", "connectingFlight:CTA:BGY", "city:PARIS", "city:MARSEILLE", "airport:BRE", "airport:FRA", "city:LISBON", "connectingFlight:LIS:OPO", "airport:VIE", "city:MANCHESTER", "airport:LUX", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:KUN", "airport:SDR", "city:BRATISLAVA", "city:SANTIAGO", "airport:FKB", "airport:BSL", "city:SEVILLE", "city:ZARAGOZA", "airport:LNZ", "country:nl", "airport:ZAZ", "airport:STR", "airport:VLC", "airport:MRS", "airport:SVQ", "airport:HHN", "connectingFlight:NAP:BGY", "airport:BLQ", "city:BRUSSELS", "airport:LPL", "city:MUNSTER", "airport:TXL", "airport:BTS", "airport:BLL", "city:PADERBORN", "country:ch", "airport:SEN", "airport:MAN", "city:MUNICH", "airport:NCL", "airport:WMI", "airport:MAD", "city:KRAKOW", "airport:BVA", "city:CATANIA", "airport:GOT", "city:CORK", "airport:CGN", "airport:FMO", "airport:FMM", "city:WARSAW", "region:COSTA_DE_SOL", "city:BARCELONA", "city:LIVERPOOL", "airport:NUE", "country:dk", "city:ROME", "city:MEMMINGEN", "country:lt", "country:lu", "airport:VLL", "airport:SNN", "region:COSTA_BRAVA", "city:STUTTGART", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "city:BASEL", "airport:OPO", "airport:LBA", "airport:EDI", "city:PORTO", "city:SALZBURG", "airport:SXF", "country:at", "airport:SXB", "country:it", "city:MALAGA", "airport:PAD", "country:ie", "airport:HAM", "airport:HAJ", "airport:PIK", "region:SICILY", "city:GRAZ", "country:sk", "city:BIRMINGHAM", "city:KARLSRUHE", "country:se", "city:WROCLAW", "city:MADRID", "city:DUBLIN", "city:VALLADOLID", "city:BRISTOL", "airport:MUC", "airport:CIA", "airport:BOH", "city:DORTMUND", "airport:EMA", "city:LUXEMBOURG", "city:SOUTHEND_ON_SEA", "country:be", "city:GOTHENBURG", "city:BREMEN"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 39.5517,
      "lng": 2.73881
    },
    "priority": 12,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PFO",
    "name": "Paphos",
    "categories": ["HEN", "FAM", "NIT", "CTY", "CUL", "SEA", "OUT"],
    "iataCode": "PFO",
    "seoName": "paphos",
    "cityCode": "PAPHOS",
    "country": "Cyprus",
    "currencyCode": "EUR",
    "routes": ["city:TALLINN", "city:BOURNEMOUTH", "airport:TXL", "airport:LPL", "airport:KRK", "airport:BTS", "country:gr", "region:ENGLAND", "city:MYKONOS", "airport:BGY", "city:STOCKHOLM", "city:KRAKOW", "city:MILAN", "airport:SOF", "airport:JMK", "country:ua", "country:hu", "airport:NYO", "city:BERLIN", "city:VIENNA", "city:BUCHAREST", "city:LIVERPOOL", "city:KAUNAS", "airport:TLV", "city:SOFIA", "city:ROME", "airport:KBP", "country:lv", "country:lt", "country:pl", "airport:TLL", "airport:BUD", "city:AMMAN", "airport:DUB", "country:de", "airport:STN", "airport:OTP", "airport:CHQ", "city:KIEV", "city:THESSALONIKI", "airport:RIX", "country:at", "city:CHANIA", "city:TEL_AVIV", "country:it", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "country:ie", "airport:VIE", "country:il", "airport:SKG", "country:ee", "city:LONDON", "country:gb", "country:sk", "airport:KUN", "airport:AMM", "country:se", "city:BRATISLAVA", "city:DUBLIN", "airport:BOH", "airport:CIA", "region:CRETE", "country:jo", "country:bg", "city:BUDAPEST", "city:RIGA", "country:ro"],
    "countryCode": "cy",
    "base": true,
    "coords": {
      "lat": 34.718,
      "lng": 32.4857
    },
    "priority": 77,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PED",
    "name": "Pardubice",
    "categories": ["SKI"],
    "iataCode": "PED",
    "seoName": "pardubice",
    "cityCode": "PARDUBICE",
    "country": "Czech Republic",
    "currencyCode": "CZK",
    "routes": ["airport:STN", "city:ALICANTE", "country:gb", "airport:ALC", "region:ENGLAND", "country:es", "region:COSTA_BRAVA", "city:LONDON"],
    "countryCode": "cz",
    "base": false,
    "coords": {
      "lat": 50.0048,
      "lng": 15.4419
    },
    "priority": 93,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BVA",
    "name": "Paris Beauvais",
    "categories": ["HEN", "ROM", "FAM", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "BVA",
    "seoName": "paris-beauvais",
    "cityCode": "PARIS",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["city:FIGARI", "city:TANGIER", "airport:KRK", "airport:GRO", "city:BEZIERS", "city:TENERIFE", "country:gr", "city:FARO", "airport:BGY", "city:STOCKHOLM", "city:OUJDA", "airport:PMI", "city:MILAN", "country:hu", "airport:NYO", "city:VIENNA", "country:pt", "country:hr", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "airport:TNG", "city:PISA", "city:ZADAR", "country:es", "city:THESSALONIKI", "airport:ZAD", "country:mt", "city:PALMA", "airport:RAK", "airport:BRI", "airport:BZR", "airport:FAO", "city:LISBON", "airport:PMO", "airport:VIE", "region:TUSCANY", "airport:SKG", "airport:BCN", "city:VILNIUS", "country:fr", "airport:TFS", "city:BRATISLAVA", "city:NADOR", "city:MALTA", "airport:OUD", "city:SEVILLE", "city:ZARAGOZA", "city:PRAGUE", "airport:FSC", "city:RABAT", "airport:ZAZ", "airport:RBA", "airport:VLC", "airport:SVQ", "country:cz", "airport:BLQ", "city:BARI", "region:SARDINIA", "airport:BTS", "region:CANARY_ISLES", "city:BRINDISI", "airport:WMI", "airport:MAD", "city:KRAKOW", "country:ma", "city:VENICE", "city:PALERMO", "city:WARSAW", "city:BARCELONA", "region:CORSICA", "city:MARRAKESH", "airport:NDR", "city:ROME", "country:lt", "region:COSTA_BRAVA", "airport:BUD", "airport:BDS", "airport:OPO", "city:PORTO", "airport:PRG", "airport:MLA", "country:at", "airport:FEZ", "country:it", "city:ALICANTE", "city:FEZ", "airport:ALC", "airport:LIS", "country:ie", "region:SICILY", "airport:CAG", "country:sk", "airport:TSF", "city:WROCLAW", "country:se", "city:DUBLIN", "city:MADRID", "airport:PSA", "airport:CIA", "region:PUGLIA", "city:BUDAPEST", "airport:VNO", "city:CAGLIARI", "city:GIRONA"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 49.4544,
      "lng": 2.11278
    },
    "priority": 10,
    "seasonalRoutes": [],
    "aliases": ["Beauvais", "Paris Beauvais"],
    "weight": 1
  }, {
    "id": "airport:XCR",
    "name": "Paris Vatry",
    "categories": ["HEN", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "XCR",
    "seoName": "paris-vatry",
    "cityCode": "PARIS",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:OPO", "country:ma", "airport:FEZ", "country:pt", "airport:RAK", "city:FEZ", "city:PORTO", "city:MARRAKESH"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 48.7761,
      "lng": 4.18449
    },
    "priority": 157,
    "seasonalRoutes": [],
    "aliases": ["Vatry"],
    "weight": 2
  }, {
    "id": "airport:PMF",
    "name": "Parma",
    "categories": ["FAM", "SPR", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "PMF",
    "seoName": "parma",
    "cityCode": "PARMA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:CAG", "country:it", "region:SARDINIA", "city:CAGLIARI"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 44.8245,
      "lng": 10.2964
    },
    "priority": 115,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PGF",
    "name": "Perpignan",
    "categories": ["SKI", "FAM", "CTY", "CUL", "OUT"],
    "iataCode": "PGF",
    "seoName": "perpignan",
    "cityCode": "PERPIGNAN",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "country:ma", "city:CHARLEROI", "country:gb", "city:BIRMINGHAM", "city:MARRAKESH", "airport:CRL", "city:FRANKFURT", "airport:RAK", "region:ENGLAND", "airport:FRA", "airport:BHX", "country:be", "country:de", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 42.7404,
      "lng": 2.87067
    },
    "priority": 118,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PEG",
    "name": "Perugia",
    "categories": ["SKI", "FAM", "CTY", "CUL"],
    "iataCode": "PEG",
    "seoName": "perugia",
    "cityCode": "PERUGIA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["region:SICILY", "airport:STN", "city:CHARLEROI", "city:CATANIA", "country:gb", "airport:MLA", "airport:CRL", "city:MALTA", "country:mt", "city:FRANKFURT", "country:it", "region:ENGLAND", "airport:FRA", "country:be", "country:de", "airport:CTA", "city:LONDON"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 43.0959,
      "lng": 12.5132
    },
    "priority": 114,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PSR",
    "name": "Pescara",
    "categories": ["FAM", "CTY", "CUL", "SEA"],
    "iataCode": "PSR",
    "seoName": "pescara",
    "cityCode": "PESCARA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:HHN", "country:cz", "airport:OTP", "city:CHARLEROI", "airport:NRN", "city:IBIZA", "country:es", "airport:PRG", "connectingFlight:MAD:BGY", "airport:KRK", "airport:GRO", "airport:MLA", "airport:CRL", "city:FRANKFURT", "country:mt", "country:gr", "country:it", "region:ENGLAND", "airport:WMI", "airport:BGY", "city:MANCHESTER", "city:LONDON", "city:KRAKOW", "city:DUSSELDORF", "country:gb", "city:MILAN", "connectingFlight:IBZ:BGY", "city:WARSAW", "country:hu", "city:BERLIN", "city:MADRID", "city:BUCHAREST", "city:MALTA", "city:ATHENS", "connectingFlight:ATH:BGY", "city:BUDAPEST", "connectingFlight:BUD:BGY", "city:PRAGUE", "country:pl", "region:COSTA_BRAVA", "country:ro", "connectingFlight:SXF:BGY", "city:GIRONA", "connectingFlight:MAN:BGY", "country:be", "country:de"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 42.4317,
      "lng": 14.1811
    },
    "priority": 75,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PSA",
    "name": "Pisa",
    "categories": ["ROM", "FAM", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "PSA",
    "seoName": "pisa",
    "cityCode": "PISA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:EFL", "city:CHARLEROI", "airport:CRV", "airport:GRO", "airport:KRK", "airport:CRL", "city:FRANKFURT", "city:KEFALONIA", "city:TENERIFE", "country:gr", "region:ENGLAND", "airport:CIY", "city:STOCKHOLM", "city:FUERTEVENTURA", "city:EINDHOVEN", "city:GRAN_CANARIA", "city:EDINBURGH", "airport:NYO", "country:hu", "city:BERLIN", "city:VIENNA", "city:LAMEZIA", "city:SOFIA", "city:BILLUND", "country:pt", "city:ALGHERO", "airport:RHO", "city:TRAPANI", "city:LEEDS", "country:pl", "city:VALENCIA", "airport:DUB", "city:GLASGOW", "airport:STN", "airport:NRN", "airport:AHO", "country:es", "airport:BRU", "city:PARIS", "city:CHANIA", "country:mt", "airport:RAK", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:FRA", "city:RHODES", "city:LISBON", "airport:VIE", "airport:PMO", "airport:CTA", "city:LONDON", "city:DUSSELDORF", "country:gb", "airport:EIN", "country:fr", "airport:SUF", "airport:TFS", "city:MALTA", "city:SEVILLE", "city:PRAGUE", "country:nl", "airport:GDN", "airport:VLC", "airport:SVQ", "country:cz", "airport:HHN", "city:BRUSSELS", "airport:LPL", "city:BARI", "region:SARDINIA", "airport:BLL", "airport:LPA", "region:CANARY_ISLES", "city:BRINDISI", "airport:WMI", "airport:MAD", "airport:BVA", "city:KRAKOW", "country:ma", "city:CATANIA", "airport:GOT", "airport:SOF", "city:WARSAW", "city:PALERMO", "airport:IBZ", "city:COMISO", "city:MARRAKESH", "city:LIVERPOOL", "country:dk", "airport:TPS", "airport:FUE", "region:COSTA_BRAVA", "airport:BDS", "airport:BUD", "airport:CFU", "region:SCOTLAND", "city:GDANSK", "country:de", "airport:LBA", "airport:CHQ", "airport:EDI", "city:CORFU", "city:IBIZA", "airport:PRG", "airport:SXF", "country:at", "airport:MLA", "airport:FEZ", "country:it", "city:FEZ", "airport:LIS", "country:ie", "airport:PIK", "region:SICILY", "airport:CAG", "city:BIRMINGHAM", "country:se", "city:MADRID", "city:DUBLIN", "city:CROTONE", "region:CRETE", "country:bg", "region:PUGLIA", "airport:EMA", "city:BUDAPEST", "city:GIRONA", "city:CAGLIARI", "country:be", "city:GOTHENBURG"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 43.6839,
      "lng": 10.3927
    },
    "priority": 13,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PDV",
    "name": "Plovdiv",
    "categories": ["SKI", "FAM", "FST", "CTY", "CUL"],
    "iataCode": "PDV",
    "seoName": "plovdiv",
    "cityCode": "PLOVDIV",
    "country": "Bulgaria",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:CRL", "city:CHARLEROI", "country:gb", "city:MILAN", "country:it", "region:ENGLAND", "airport:BGY", "country:be", "city:LONDON"],
    "countryCode": "bg",
    "base": false,
    "coords": {
      "lat": 42.0678,
      "lng": 24.8508
    },
    "priority": 133,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TGD",
    "name": "Podgorica",
    "categories": ["FAM", "SPR", "CTY", "CUL", "OUT"],
    "iataCode": "TGD",
    "seoName": "podgorica-montenegro",
    "cityCode": "PODGORICA",
    "country": "Montenegro",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:CHARLEROI", "country:gb", "airport:NYO", "city:WROCLAW", "country:se", "airport:SXF", "city:BERLIN", "airport:CRL", "region:ENGLAND", "country:pl", "airport:WRO", "city:STOCKHOLM", "city:STUTTGART", "airport:STR", "country:be", "country:de", "city:LONDON"],
    "countryCode": "me",
    "base": false,
    "coords": {
      "lat": 42.3594,
      "lng": 19.2519
    },
    "priority": 150,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PIS",
    "name": "Poitiers",
    "categories": ["FAM", "CTY", "CUL"],
    "iataCode": "PIS",
    "seoName": "poitiers",
    "cityCode": "POITIERS",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:OPO", "airport:MRS", "country:ma", "country:gb", "airport:EDI", "city:PORTO", "city:EDINBURGH", "country:fr", "city:DUBLIN", "city:MARRAKESH", "country:pt", "city:MARSEILLE", "airport:RAK", "region:ENGLAND", "country:ie", "airport:DUB", "region:SCOTLAND", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 46.5877,
      "lng": 0.306666
    },
    "priority": 148,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PDL",
    "name": "Ponta Delgada",
    "categories": ["GLF", "HEN", "FAM", "NIT", "SEA"],
    "iataCode": "PDL",
    "seoName": "ponta-delgada",
    "cityCode": "PONTA_DELGADA",
    "country": "Portugal",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:HHN", "airport:OPO", "city:BRUSSELS", "city:PORTO", "country:es", "connectingFlight:BCN:OPO", "connectingFlight:NRN:OPO", "city:FRANKFURT", "country:it", "airport:MAN", "region:ENGLAND", "connectingFlight:BRU:OPO", "airport:LIS", "city:LISBON", "city:MANCHESTER", "city:LONDON", "city:DUSSELDORF", "connectingFlight:BGY:OPO", "city:MILAN", "country:gb", "city:BARCELONA", "country:pt", "region:COSTA_BRAVA", "country:be", "country:de"],
    "countryCode": "pt",
    "base": true,
    "coords": {
      "lat": 37.74194,
      "lng": -25.69778
    },
    "priority": 187,
    "seasonalRoutes": [],
    "aliases": ["Delgada"]
  }, {
    "id": "airport:OPO",
    "name": "Porto",
    "categories": ["GLF", "HEN", "FAM", "NIT", "CTY", "CUL", "SEA", "OUT"],
    "iataCode": "OPO",
    "seoName": "porto",
    "cityCode": "PORTO",
    "country": "Portugal",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:DOLE", "city:CHARLEROI", "city:CARCASSONNE", "connectingFlight:BTS:BGY", "airport:XCR", "city:NUREMBERG", "airport:KRK", "airport:DTM", "airport:DLE", "airport:CRL", "city:FRANKFURT", "city:STRASBOURG", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "airport:BGY", "city:EINDHOVEN", "city:LA_ROCHELLE", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "city:EDINBURGH", "airport:TUF", "airport:CCF", "country:hu", "city:BERLIN", "city:NAPLES", "country:pt", "airport:PDL", "city:CLERMONT_FERRAND", "city:BOLOGNA", "country:pl", "airport:DUB", "city:VALENCIA", "city:TOURS", "airport:BHX", "airport:STN", "airport:NRN", "country:es", "airport:BRU", "airport:MXP", "city:THESSALONIKI", "airport:TER", "city:PARIS", "airport:NAP", "country:mt", "city:PALMA", "city:MARSEILLE", "airport:RAK", "connectingFlight:BRI:BGY", "airport:BRE", "airport:FRA", "airport:FAO", "connectingFlight:PRG:BGY", "city:LISBON", "airport:LUX", "city:MANCHESTER", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:EIN", "connectingFlight:SKG:BGY", "city:COLOGNE", "country:fr", "city:BORDEAUX", "city:TERCEIRA", "airport:TFS", "city:BRATISLAVA", "city:LORIENT", "airport:FKB", "city:MALTA", "city:SEVILLE", "city:PRAGUE", "connectingFlight:BUD:BGY", "country:nl", "airport:VLC", "country:cz", "airport:SVQ", "airport:MRS", "airport:BLQ", "airport:LPL", "city:BRUSSELS", "city:BARI", "region:SARDINIA", "airport:CFE", "city:BRIVE", "airport:LPA", "region:BRITTANY", "region:CANARY_ISLES", "city:BRINDISI", "airport:MAN", "airport:WMI", "airport:MAD", "airport:BVA", "city:KRAKOW", "country:ma", "airport:CGN", "connectingFlight:BDS:BGY", "city:VENICE", "airport:FMM", "city:PALERMO", "city:WARSAW", "city:BARCELONA", "city:MARRAKESH", "city:LIVERPOOL", "country:dk", "airport:NUE", "city:ROME", "city:MEMMINGEN", "country:lu", "region:COSTA_BRAVA", "region:SCOTLAND", "country:de", "airport:LRT", "connectingFlight:PMO:BGY", "city:LILLE", "city:PONTA_DELGADA", "airport:EDI", "airport:SXF", "airport:MLA", "airport:LRH", "airport:SXB", "airport:CPH", "country:it", "city:ALICANTE", "airport:PIS", "airport:ALC", "airport:LIS", "country:ie", "airport:HAM", "airport:BVE", "airport:LIL", "region:SICILY", "airport:CAG", "country:sk", "airport:TSF", "city:POITIERS", "city:BIRMINGHAM", "city:KARLSRUHE", "city:MADRID", "city:DUBLIN", "airport:CIA", "city:COPENHAGEN", "region:PUGLIA", "city:DORTMUND", "city:LUXEMBOURG", "airport:BOD", "city:BUDAPEST", "city:CAGLIARI", "region:AZORES", "country:be", "city:BREMEN"],
    "countryCode": "pt",
    "base": true,
    "coords": {
      "lat": 41.2481,
      "lng": -8.68139
    },
    "priority": 9,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:POZ",
    "name": "Poznan",
    "categories": ["FAM", "SPR", "CTY", "CUL"],
    "iataCode": "POZ",
    "seoName": "poznan",
    "cityCode": "POZNAN",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:LPL", "airport:ORK", "airport:GRO", "airport:BLL", "country:gr", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "airport:MAD", "city:CORK", "city:MILAN", "city:EDINBURGH", "country:ua", "airport:NYO", "city:LIVERPOOL", "airport:TLV", "city:BILLUND", "country:dk", "city:ROME", "airport:KBP", "city:EILAT", "region:COSTA_BRAVA", "airport:VDA", "airport:DUB", "airport:CFU", "region:SCOTLAND", "airport:STN", "airport:EDI", "city:CORFU", "airport:TRF", "country:es", "city:CASTELLON", "airport:BRS", "city:KIEV", "airport:MLA", "city:TEL_AVIV", "country:mt", "country:it", "city:ALICANTE", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ALC", "airport:ATH", "country:ie", "country:il", "city:LONDON", "city:OSLO", "country:gb", "country:se", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "city:MALTA", "city:ATHENS", "airport:CIA", "airport:CDT", "city:GIRONA", "country:no"],
    "countryCode": "pl",
    "base": true,
    "coords": {
      "lat": 52.421,
      "lng": 16.8263
    },
    "priority": 78,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PRG",
    "name": "Prague",
    "categories": ["SKI", "HEN", "ROM", "FAM", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "PRG",
    "seoName": "prague",
    "cityCode": "PRAGUE",
    "country": "Czech Republic",
    "currencyCode": "CZK",
    "routes": ["city:BOURNEMOUTH", "city:CHARLEROI", "airport:KRK", "airport:CRL", "country:gr", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "airport:PSR", "city:EINDHOVEN", "airport:AGP", "city:MILAN", "city:EDINBURGH", "airport:NYO", "country:hu", "city:LAMEZIA", "city:NAPLES", "city:BILLUND", "country:pt", "country:hr", "city:TRAPANI", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:DUB", "city:VALENCIA", "airport:STN", "city:PISA", "city:ZADAR", "country:es", "airport:RIX", "connectingFlight:CTA:BGY", "city:PARIS", "airport:ZAD", "country:mt", "city:MARSEILLE", "airport:RAK", "airport:BRI", "connectingFlight:BRI:BGY", "region:TUSCANY", "city:LONDON", "airport:BCN", "country:gb", "airport:EIN", "country:fr", "city:MALTA", "country:nl", "city:PESCARA", "airport:MRS", "connectingFlight:NAP:BGY", "airport:BLQ", "airport:LPL", "city:BARI", "region:SARDINIA", "airport:BLL", "connectingFlight:VLC:BGY", "city:BRINDISI", "airport:MAD", "city:KRAKOW", "airport:BVA", "country:ma", "airport:GOT", "city:CATANIA", "airport:MLA|Air Malta", "connectingFlight:BDS:BGY", "city:VENICE", "city:PALERMO", "connectingFlight:CAG:BGY", "city:BARCELONA", "region:COSTA_DE_SOL", "city:MARRAKESH", "city:LIVERPOOL", "country:dk", "city:ROME", "country:lv", "airport:TPS", "city:EILAT", "connectingFlight:ATH:BGY", "region:COSTA_BRAVA", "airport:VDA", "city:AMMAN", "airport:BUD", "region:SCOTLAND", "connectingFlight:PMO:BGY", "airport:EDI", "city:PORTO", "airport:CPH", "country:it", "city:MALAGA", "country:ie", "country:il", "region:SICILY", "connectingFlight:OPO:BGY", "airport:TSF", "country:se", "airport:AMM", "city:MADRID", "city:DUBLIN", "airport:PSA", "airport:CIA", "airport:BOH", "city:ATHENS", "country:jo", "city:COPENHAGEN", "region:PUGLIA", "city:BUDAPEST", "city:RIGA", "city:CAGLIARI", "city:GOTHENBURG", "country:be"],
    "countryCode": "cz",
    "base": true,
    "coords": {
      "lat": 50.1008,
      "lng": 14.26
    },
    "priority": 93,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PUY",
    "name": "Pula",
    "categories": ["FAM", "FST", "CTY", "CUL"],
    "iataCode": "PUY",
    "seoName": "pula",
    "cityCode": "PULA",
    "country": "Croatia",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:HHN", "city:CHARLEROI", "country:gb", "airport:TXL", "city:BERLIN", "airport:CRL", "city:FRANKFURT", "region:ENGLAND", "airport:FRA", "city:STUTTGART", "airport:STR", "country:be", "city:LONDON", "country:de"],
    "countryCode": "hr",
    "base": false,
    "coords": {
      "lat": 44.8935,
      "lng": 13.9222
    },
    "priority": 141,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:RBA",
    "name": "Rabat",
    "categories": ["GLF", "FAM", "SPR", "FST", "CTY", "CUL", "SEA", "OUT"],
    "iataCode": "RBA",
    "seoName": "rabat",
    "cityCode": "RABAT",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["airport:STN", "airport:SVQ", "airport:MRS", "city:CHARLEROI", "airport:NRN", "country:es", "airport:GRO", "city:PARIS", "airport:CRL", "city:MARSEILLE", "country:it", "region:ENGLAND", "city:EINDHOVEN", "city:LONDON", "airport:MAD", "airport:BVA", "city:DUSSELDORF", "airport:EIN", "country:gb", "country:fr", "city:MADRID", "airport:CIA", "city:ROME", "city:SEVILLE", "country:nl", "region:COSTA_BRAVA", "city:GIRONA", "country:be", "country:de"],
    "countryCode": "ma",
    "base": false,
    "coords": {
      "lat": 34.0515,
      "lng": -6.75152
    },
    "priority": 79,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:RHO",
    "name": "Rhodes",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CUL", "SEA", "OUT"],
    "iataCode": "RHO",
    "seoName": "rhodes",
    "cityCode": "RHODES",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:PISA", "city:CHARLEROI", "airport:BLQ", "airport:TXL", "airport:NAP", "airport:CRL", "country:it", "airport:MAN", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "airport:FCO", "region:TUSCANY", "city:MANCHESTER", "city:LONDON", "city:DUSSELDORF", "city:MILAN", "country:gb", "city:BIRMINGHAM", "airport:NYO", "airport:KUN", "city:BERLIN", "country:se", "airport:DUS", "city:NAPLES", "airport:PSA", "city:KAUNAS", "city:ROME", "airport:EMA", "country:lt", "city:BOLOGNA", "country:be", "country:de"],
    "countryCode": "gr",
    "base": false,
    "coords": {
      "lat": 36.4054,
      "lng": 28.0862
    },
    "priority": 99,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:RIX",
    "name": "Riga",
    "categories": ["FAM", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "RIX",
    "seoName": "riga",
    "cityCode": "RIGA",
    "country": "Latvia",
    "currencyCode": "EUR",
    "routes": ["country:cy", "country:cz", "airport:HHN", "city:CHARLEROI", "airport:GRO", "airport:CRL", "city:FRANKFURT", "airport:MAN", "region:ENGLAND", "airport:BGY", "city:EINDHOVEN", "airport:CGN", "city:MILAN", "city:EDINBURGH", "city:BERLIN", "city:LEEDS", "region:COSTA_BRAVA", "airport:DUB", "region:SCOTLAND", "country:de", "city:GLASGOW", "airport:STN", "airport:LBA", "airport:EDI", "airport:PRG", "country:es", "airport:SXF", "airport:MLA", "country:mt", "airport:GLA", "country:it", "airport:BRE", "country:ie", "city:PAPHOS", "city:MANCHESTER", "city:LONDON", "country:gb", "airport:EIN", "city:COLOGNE", "city:BIRMINGHAM", "city:DUBLIN", "airport:BOJ", "city:MALTA", "country:bg", "airport:EMA", "airport:PFO", "city:PRAGUE", "city:BURGAS", "country:nl", "city:GIRONA", "country:be", "city:BREMEN"],
    "countryCode": "lv",
    "base": false,
    "coords": {
      "lat": 56.9236,
      "lng": 23.9711
    },
    "priority": 49,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:RJK",
    "name": "Rijeka",
    "categories": ["HEN", "FAM", "SPR", "NIT", "CTY"],
    "iataCode": "RJK",
    "seoName": "rijeka",
    "cityCode": "RIJEKA",
    "country": "Croatia",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:CHARLEROI", "country:gb", "airport:TXL", "airport:NYO", "country:se", "city:BERLIN", "airport:CRL", "city:FRANKFURT", "region:ENGLAND", "airport:FRA", "city:STOCKHOLM", "country:be", "city:LONDON", "country:de"],
    "countryCode": "hr",
    "base": false,
    "coords": {
      "lat": 45.2169,
      "lng": 14.5703
    },
    "priority": 159,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:RMI",
    "name": "Rimini",
    "categories": [],
    "iataCode": "RMI",
    "seoName": "rimini",
    "cityCode": "RIMINI",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:KAUNAS", "country:gb", "country:lt", "region:ENGLAND", "airport:WMI", "city:WARSAW", "country:pl", "airport:KUN", "city:LONDON"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 44.0203,
      "lng": 12.6117
    },
    "priority": 232,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:RDZ",
    "name": "Rodez",
    "categories": ["FAM", "CUL"],
    "iataCode": "RDZ",
    "seoName": "rodez",
    "cityCode": "RODEZ",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:CRL", "city:CHARLEROI", "country:ie", "airport:DUB", "country:be", "city:DUBLIN"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 44.4079,
      "lng": 2.48267
    },
    "priority": 154,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CIA",
    "name": "Rome Ciampino",
    "categories": ["ROM", "FAM", "SPR", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "CIA",
    "seoName": "rome-ciampino",
    "cityCode": "ROME",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:LDE", "city:CHARLEROI", "city:NUREMBERG", "airport:KRK", "city:SANTANDER", "airport:CRL", "city:FRANKFURT", "country:gr", "region:ENGLAND", "airport:CIY", "city:STOCKHOLM", "city:EINDHOVEN", "airport:PMI", "city:EDINBURGH", "airport:NYO", "country:hu", "city:BERLIN", "city:SOFIA", "city:BILLUND", "country:pt", "country:pl", "airport:WRO", "airport:DUB", "city:VALENCIA", "airport:STN", "city:GLASGOW", "airport:OTP", "city:AQABA", "airport:NRN", "country:es", "city:THESSALONIKI", "city:PARIS", "country:mt", "city:PALMA", "city:MARSEILLE", "airport:RAK", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "city:TRIESTE", "city:PAPHOS", "city:LISBON", "airport:SKG", "city:MANCHESTER", "city:LONDON", "city:DUSSELDORF", "city:VILNIUS", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:SDR", "city:BRATISLAVA", "airport:FKB", "city:MALTA", "city:SEVILLE", "airport:PFO", "airport:AQJ", "city:PRAGUE", "country:nl", "city:RABAT", "airport:RBA", "airport:VLC", "country:cy", "airport:MRS", "airport:SVQ", "airport:HHN", "country:cz", "region:SARDINIA", "airport:BTS", "airport:BLL", "airport:POZ", "airport:MAN", "airport:WMI", "airport:MAD", "airport:BVA", "city:KRAKOW", "country:ma", "airport:GOT", "city:LOURDES", "airport:SOF", "airport:CGN", "city:WARSAW", "city:MARRAKESH", "city:COMISO", "city:BUCHAREST", "country:dk", "airport:NUE", "country:lt", "airport:BUD", "airport:CFU", "region:SCOTLAND", "country:de", "airport:OPO", "airport:EDI", "city:CORFU", "city:PORTO", "airport:PRG", "airport:SXF", "airport:MLA", "airport:CPH", "country:it", "airport:ATH", "airport:LIS", "country:ie", "airport:PIK", "region:SICILY", "airport:CAG", "country:sk", "city:KARLSRUHE", "city:BIRMINGHAM", "country:se", "city:WROCLAW", "city:MADRID", "city:DUBLIN", "city:ATHENS", "country:bg", "country:jo", "city:COPENHAGEN", "airport:EMA", "airport:BOD", "city:BUDAPEST", "airport:VNO", "airport:TRS", "country:ro", "city:CAGLIARI", "country:be", "city:GOTHENBURG", "city:POZNAN"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 41.7994,
      "lng": 12.5949
    },
    "priority": 5,
    "seasonalRoutes": [],
    "aliases": ["Ciampino", "Rome Ciampino"],
    "weight": 3
  }, {
    "id": "airport:FCO",
    "name": "Rome Fiumicino",
    "categories": ["ROM", "FAM", "SPR", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "FCO",
    "seoName": "rome-fiumicino",
    "cityCode": "ROME",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:MRS", "airport:SVQ", "city:BRUSSELS", "city:BARI", "region:CANARY_ISLES", "country:gr", "city:BRINDISI", "airport:CIY", "city:CATANIA", "airport:AGP", "airport:ACE", "city:PALERMO", "airport:IBZ", "city:VIENNA", "city:BARCELONA", "region:COSTA_DE_SOL", "city:COMISO", "airport:TLV", "airport:RHO", "airport:SNN", "region:COSTA_BRAVA", "airport:BDS", "airport:CFU", "city:SHANNON", "airport:CHQ", "city:CORFU", "city:IBIZA", "country:es", "airport:BRU", "country:at", "airport:MLA", "city:CHANIA", "city:TEL_AVIV", "city:LANZAROTE", "country:mt", "city:MARSEILLE", "airport:BRI", "city:ALICANTE", "country:it", "city:MALAGA", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ALC", "country:ie", "city:RHODES", "airport:VIE", "airport:PMO", "country:il", "airport:CTA", "region:SICILY", "airport:BCN", "country:fr", "city:MALTA", "region:CRETE", "region:PUGLIA", "city:SEVILLE", "country:be"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 41.8045,
      "lng": 12.2508
    },
    "priority": 15,
    "seasonalRoutes": [],
    "aliases": ["Fiumicino", "Rome Fiumicino"],
    "weight": 4
  }, {
    "id": "airport:RZE",
    "name": "Rzeszow",
    "categories": ["FAM", "SPR", "FST", "CUL", "OUT"],
    "iataCode": "RZE",
    "seoName": "rzeszow",
    "cityCode": "RZESZOW",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:STN", "city:GLASGOW", "city:CORFU", "airport:LTN", "airport:BRS", "country:gr", "airport:MAN", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "region:ENGLAND", "airport:ATH", "country:ie", "airport:PIK", "city:MANCHESTER", "city:LONDON", "country:gb", "city:BIRMINGHAM", "city:DUBLIN", "airport:BOJ", "city:BRISTOL", "city:ATHENS", "country:bg", "airport:EMA", "city:BURGAS", "airport:DUB", "airport:CFU", "region:SCOTLAND"],
    "countryCode": "pl",
    "base": false,
    "coords": {
      "lat": 50.11,
      "lng": 22.019
    },
    "priority": 72,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SZG",
    "name": "Salzburg",
    "categories": ["SKI", "ROM", "FAM", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "SZG",
    "seoName": "salzburg",
    "cityCode": "SALZBURG",
    "country": "Austria",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:PALMA", "airport:PMI", "country:gb", "region:ENGLAND", "country:es", "country:ie", "airport:DUB", "city:LONDON", "city:DUBLIN"],
    "countryCode": "at",
    "base": false,
    "coords": {
      "lat": 47.7933,
      "lng": 13.0043
    },
    "priority": 137,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SDR",
    "name": "Santander",
    "categories": ["FAM", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "SDR",
    "seoName": "santander",
    "cityCode": "SANTANDER",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "city:CHARLEROI", "airport:ORK", "airport:CRL", "region:CANARY_ISLES", "city:TENERIFE", "region:ENGLAND", "airport:BGY", "country:ma", "airport:PMI", "city:CORK", "airport:AGP", "city:MILAN", "city:EDINBURGH", "airport:ACE", "country:hu", "city:BERLIN", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "city:ROME", "airport:SNN", "region:COSTA_BRAVA", "city:VALENCIA", "airport:BUD", "airport:DUB", "region:SCOTLAND", "country:de", "airport:STN", "city:SHANNON", "airport:EDI", "airport:NRN", "country:es", "airport:SXF", "city:LANZAROTE", "city:PALMA", "airport:RAK", "country:it", "city:MALAGA", "country:ie", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:TFS", "city:DUBLIN", "airport:CIA", "city:BUDAPEST", "country:be"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 43.4271,
      "lng": -3.82001
    },
    "priority": 76,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SCQ",
    "name": "Santiago",
    "categories": ["FAM", "SPR", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "SCQ",
    "seoName": "santiago-de-compostela",
    "cityCode": "SANTIAGO",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:VLC", "airport:SVQ", "airport:HHN", "country:es", "city:BARI", "region:SARDINIA", "city:LANZAROTE", "airport:LPA", "city:PALMA", "city:FRANKFURT", "city:TENERIFE", "region:CANARY_ISLES", "country:it", "city:MALAGA", "city:BRINDISI", "city:ALICANTE", "connectingFlight:BRI:BGY", "region:ENGLAND", "airport:ALC", "airport:BGY", "city:LONDON", "airport:MAD", "airport:BCN", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "airport:AGP", "country:gb", "connectingFlight:BDS:BGY", "airport:ACE", "airport:TFS", "connectingFlight:CAG:BGY", "city:BARCELONA", "region:COSTA_DE_SOL", "city:MADRID", "city:SEVILLE", "region:PUGLIA", "region:COSTA_BRAVA", "city:CAGLIARI", "city:VALENCIA", "country:de"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 42.8963,
      "lng": -8.41514
    },
    "priority": 61,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:JTR",
    "name": "Santorini",
    "categories": ["ROM", "FAM", "SPR", "NIT", "CUL", "SEA", "OUT"],
    "iataCode": "JTR",
    "seoName": "santorini",
    "cityCode": "SANTORINI",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["city:FRANKFURT", "city:ATHENS", "country:gr", "airport:FRA", "airport:ATH", "airport:VIE", "country:at", "city:VIENNA", "country:de"],
    "countryCode": "gr",
    "base": false,
    "coords": {
      "lat": 36.3992,
      "lng": 25.4793
    },
    "priority": 184,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SVQ",
    "name": "Seville",
    "categories": ["GLF", "ROM", "FAM", "SPR", "FST", "CTY", "CUL"],
    "iataCode": "SVQ",
    "seoName": "seville",
    "cityCode": "SEVILLE",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:TANGIER", "airport:KRK", "city:VERONA", "airport:CRL", "city:FRANKFURT", "city:TENERIFE", "region:ENGLAND", "airport:BGY", "city:FUERTEVENTURA", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "city:EDINBURGH", "city:VITORIA-GASTEIZ", "country:hu", "city:BERLIN", "city:VIENNA", "city:NAPLES", "country:pt", "airport:TLS", "city:BOLOGNA", "country:pl", "city:VALENCIA", "airport:DUB", "city:PISA", "airport:STN", "airport:TNG", "country:es", "airport:MXP", "airport:BRS", "airport:SCQ", "airport:VIT", "city:PARIS", "airport:NAP", "country:mt", "city:PALMA", "city:MARSEILLE", "airport:RAK", "airport:BRI", "airport:FRA", "airport:VIE", "region:TUSCANY", "airport:LUX", "city:MANCHESTER", "city:LONDON", "airport:CTA", "airport:BCN", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:TFS", "airport:FKB", "city:SANTIAGO", "city:MALTA", "country:nl", "city:RABAT", "airport:RBA", "airport:VRN", "airport:VLC", "airport:MRS", "airport:BLQ", "city:TOULOUSE", "city:BARI", "region:SARDINIA", "airport:NTE", "airport:LPA", "region:CANARY_ISLES", "airport:MAN", "airport:WMI", "airport:FCO", "airport:BVA", "city:KRAKOW", "country:ma", "city:CATANIA", "airport:CGN", "city:VENICE", "airport:FMM", "city:WARSAW", "airport:ACE", "airport:IBZ", "city:BARCELONA", "city:MARRAKESH", "country:dk", "city:ROME", "city:MEMMINGEN", "country:lu", "airport:FUE", "airport:VLL", "region:COSTA_BRAVA", "airport:BUD", "region:SCOTLAND", "country:de", "airport:OPO", "airport:EDI", "city:IBIZA", "city:PORTO", "airport:SXF", "country:at", "airport:MLA", "city:LANZAROTE", "airport:FEZ", "airport:CPH", "city:FEZ", "city:ALICANTE", "country:it", "airport:ALC", "country:ie", "airport:HAM", "region:SICILY", "airport:CAG", "airport:TSF", "city:KARLSRUHE", "city:BIRMINGHAM", "city:NANTES", "city:DUBLIN", "city:BRISTOL", "city:VALLADOLID", "airport:PSA", "airport:CIA", "city:COPENHAGEN", "region:PUGLIA", "airport:EMA", "city:LUXEMBOURG", "airport:BOD", "city:BUDAPEST", "city:CAGLIARI", "country:be"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 37.418,
      "lng": -5.89311
    },
    "priority": 38,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SNN",
    "name": "Shannon",
    "categories": ["GLF", "FAM", "SPR"],
    "iataCode": "SNN",
    "seoName": "shannon",
    "cityCode": "SHANNON",
    "country": "Ireland",
    "currencyCode": "EUR",
    "routes": ["airport:LPL", "airport:KRK", "city:SANTANDER", "region:CANARY_ISLES", "city:TENERIFE", "airport:LGW", "airport:MAN", "city:FARO", "region:ENGLAND", "airport:WMI", "airport:FCO", "city:FUERTEVENTURA", "city:KRAKOW", "airport:PMI", "airport:AGP", "city:WARSAW", "airport:ACE", "airport:IBZ", "region:COSTA_DE_SOL", "city:BARCELONA", "city:LIVERPOOL", "city:KAUNAS", "country:pt", "city:ROME", "country:lt", "airport:FUE", "country:pl", "region:COSTA_BRAVA", "airport:WRO", "airport:STN", "city:IBIZA", "country:es", "airport:BRS", "airport:REU", "city:LANZAROTE", "city:PALMA", "city:MALAGA", "country:it", "city:ALICANTE", "airport:ALC", "airport:FAO", "city:MANCHESTER", "city:LONDON", "country:gb", "city:BIRMINGHAM", "airport:KUN", "airport:SDR", "city:WROCLAW", "airport:TFS", "city:BRISTOL", "airport:EMA"],
    "countryCode": "ie",
    "base": true,
    "coords": {
      "lat": 52.702,
      "lng": -8.92482
    },
    "priority": 68,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SOF",
    "name": "Sofia",
    "categories": [],
    "iataCode": "SOF",
    "seoName": "sofia",
    "cityCode": "SOFIA",
    "country": "Bulgaria",
    "currencyCode": "EUR",
    "routes": ["country:cy", "city:HAMBURG", "city:CHARLEROI", "airport:LPL", "airport:CRL", "country:gr", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "airport:MAD", "city:EINDHOVEN", "airport:CGN", "city:MILAN", "city:EDINBURGH", "city:VENICE", "airport:FMM", "country:ua", "airport:NYO", "city:BERLIN", "city:BARCELONA", "city:LIVERPOOL", "city:ROME", "airport:KBP", "city:MEMMINGEN", "region:COSTA_BRAVA", "airport:DUB", "airport:BHX", "region:SCOTLAND", "country:de", "city:GLASGOW", "city:PISA", "airport:STN", "airport:CHQ", "city:AQABA", "airport:EDI", "country:es", "airport:MXP", "city:CASTELLON", "airport:BRS", "city:KIEV", "airport:SXF", "city:CHANIA", "airport:GLA", "country:it", "airport:ATH", "country:ie", "airport:HAM", "city:PAPHOS", "region:TUSCANY", "city:LONDON", "airport:BCN", "country:gb", "airport:EIN", "airport:TSF", "city:COLOGNE", "city:KARLSRUHE", "city:BIRMINGHAM", "country:se", "city:DUBLIN", "city:MADRID", "airport:FKB", "city:BRISTOL", "airport:PSA", "airport:CIA", "city:ATHENS", "region:CRETE", "country:jo", "airport:PFO", "airport:AQJ", "country:nl", "airport:CDT", "country:be"],
    "countryCode": "bg",
    "base": true,
    "coords": {
      "lat": 42.67,
      "lng": 23.35
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SPU",
    "name": "Split",
    "categories": [],
    "iataCode": "SPU",
    "seoName": "split",
    "cityCode": "SPLIT",
    "country": "Croatia",
    "currencyCode": "EUR",
    "routes": ["city:STUTTGART", "airport:STR", "country:de"],
    "countryCode": "hr",
    "base": false,
    "coords": {
      "lat": 43.5389,
      "lng": 16.2981
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LED",
    "name": "St. Petersburg",
    "categories": [],
    "iataCode": "LED",
    "seoName": "saint-petersburg",
    "cityCode": "SAINT_PETERSBURG",
    "country": "Russia",
    "currencyCode": "EUR",
    "routes": ["city:MALTA", "country:mt", "airport:MLA|Air Malta"],
    "countryCode": "ru",
    "base": false,
    "coords": {
      "lat": 59.8003,
      "lng": 30.2625
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:NYO",
    "name": "Stockholm Skavsta",
    "categories": ["HEN", "FAM", "SPR", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "NYO",
    "seoName": "stockholm-skavsta",
    "cityCode": "STOCKHOLM",
    "country": "Sweden",
    "currencyCode": "SEK",
    "routes": ["city:CHARLEROI", "airport:INI", "airport:KRK", "airport:CRL", "city:BEZIERS", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "airport:BGY", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "airport:AGP", "city:EDINBURGH", "city:SOFIA", "city:NAPLES", "country:pt", "airport:KBP", "country:hr", "airport:RHO", "country:pl", "city:PISA", "airport:STN", "city:ZADAR", "airport:NRN", "country:es", "city:RIJEKA", "city:THESSALONIKI", "city:PARIS", "airport:NAP", "city:NIS", "airport:ZAD", "city:PALMA", "country:mt", "airport:RAK", "airport:BZR", "airport:BRE", "city:PAPHOS", "city:RHODES", "airport:FAO", "region:TUSCANY", "airport:SKG", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "airport:EIN", "country:gb", "country:fr", "airport:TFS", "city:MALTA", "airport:PFO", "city:PRAGUE", "country:nl", "airport:RJK", "airport:GDN", "country:cy", "country:cz", "airport:LPA", "airport:POZ", "region:CANARY_ISLES", "airport:WMI", "airport:TGD", "airport:BVA", "city:KRAKOW", "country:ma", "airport:SOF", "country:me", "city:VENICE", "airport:FMM", "city:WARSAW", "country:ua", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "city:ROME", "city:MEMMINGEN", "region:COSTA_BRAVA", "city:GDANSK", "region:SCOTLAND", "city:PODGORICA", "country:de", "airport:BNX", "airport:EDI", "airport:PRG", "city:KIEV", "airport:MLA", "country:it", "city:ALICANTE", "city:MALAGA", "airport:ALC", "airport:TSF", "airport:PSA", "airport:CIA", "country:bg", "country:ba", "country:be", "city:BANJA_LUKA", "city:POZNAN", "city:BREMEN", "country:rs"],
    "countryCode": "se",
    "base": true,
    "coords": {
      "lat": 58.7886,
      "lng": 16.9122
    },
    "priority": 63,
    "seasonalRoutes": [],
    "aliases": ["Skavsta", "Stockholm Skavsta"],
    "weight": 1
  }, {
    "id": "airport:VST",
    "name": "Stockholm Västerås",
    "categories": ["HEN", "FAM", "FST", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "VST",
    "seoName": "stockholm-vasteras",
    "cityCode": "STOCKHOLM",
    "country": "Sweden",
    "currencyCode": "SEK",
    "routes": ["airport:STN", "country:gb", "airport:AGP", "city:MALAGA", "city:ALICANTE", "region:ENGLAND", "airport:ALC", "country:es", "region:COSTA_BRAVA", "region:COSTA_DE_SOL", "city:LONDON"],
    "countryCode": "se",
    "base": false,
    "coords": {
      "lat": 59.5894,
      "lng": 16.6336
    },
    "priority": 152,
    "seasonalRoutes": [],
    "aliases": ["Vasteras", "Stockholm Vasteras"],
    "weight": 2
  }, {
    "id": "airport:SXB",
    "name": "Strasbourg",
    "categories": ["SKI", "FAM", "FST", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "SXB",
    "seoName": "strasbourg",
    "cityCode": "STRASBOURG",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:OPO", "city:PALMA", "country:pt", "airport:PMI", "country:gb", "city:PORTO", "region:ENGLAND", "country:es", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 48.5383,
      "lng": 7.62823
    },
    "priority": 155,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:STR",
    "name": "Stuttgart",
    "categories": ["FAM", "FST", "CTY", "CUL"],
    "iataCode": "STR",
    "seoName": "stuttgart",
    "cityCode": "STUTTGART",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:MRS", "airport:BLQ", "airport:KRK", "region:SARDINIA", "city:VERONA", "airport:MAN", "airport:BGY", "airport:TGD", "city:PULA", "airport:NCE", "city:KRAKOW", "country:ma", "airport:PMI", "airport:GOT", "airport:AGP", "city:MILAN", "country:me", "city:VENICE", "city:SPLIT", "country:hu", "region:COSTA_DE_SOL", "city:MARRAKESH", "country:dk", "city:NAPLES", "country:hr", "city:ALGHERO", "city:BOLOGNA", "country:pl", "airport:DUB", "airport:BUD", "city:PODGORICA", "city:ZADAR", "airport:AHO", "country:es", "airport:NAP", "airport:ZAD", "city:PALMA", "city:MARSEILLE", "airport:CPH", "airport:RAK", "country:it", "city:MALAGA", "country:ie", "airport:PUY", "city:MANCHESTER", "country:gb", "airport:TSF", "country:fr", "country:se", "city:DUBLIN", "city:COPENHAGEN", "city:BUDAPEST", "airport:SPU", "city:NICE", "airport:VRN", "city:GOTHENBURG"],
    "countryCode": "de",
    "base": false,
    "coords": {
      "lat": 48.69,
      "lng": 9.2219
    },
    "priority": 188,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SZZ",
    "name": "Szczecin",
    "categories": ["FAM", "SPR", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "SZZ",
    "seoName": "szczecin",
    "cityCode": "SZCZECIN",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:WAW", "city:KRAKOW", "airport:STN", "country:gb", "airport:EDI", "city:EDINBURGH", "airport:LPL", "city:WARSAW", "airport:KRK", "city:DUBLIN", "city:LIVERPOOL", "region:ENGLAND", "country:ie", "country:pl", "airport:DUB", "region:SCOTLAND", "city:LONDON"],
    "countryCode": "pl",
    "base": false,
    "coords": {
      "lat": 53.5847,
      "lng": 14.9022
    },
    "priority": 112,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TLL",
    "name": "Tallinn",
    "categories": ["FAM", "CTY", "CUL", "XMS"],
    "iataCode": "TLL",
    "seoName": "tallinn",
    "cityCode": "TALLINN",
    "country": "Estonia",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:STN", "airport:EDI", "airport:NRN", "country:es", "airport:GRO", "airport:MLA", "country:mt", "country:it", "region:ENGLAND", "airport:BRE", "country:ie", "city:PAPHOS", "airport:BGY", "city:LONDON", "city:DUSSELDORF", "country:gb", "city:MILAN", "city:EDINBURGH", "city:DUBLIN", "city:MALTA", "airport:PFO", "region:COSTA_BRAVA", "city:GIRONA", "airport:DUB", "region:SCOTLAND", "city:BREMEN", "country:de"],
    "countryCode": "ee",
    "base": false,
    "coords": {
      "lat": 59.4133,
      "lng": 24.8328
    },
    "priority": 94,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TMP",
    "name": "Tampere",
    "categories": ["FAM", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "TMP",
    "seoName": "tampere",
    "cityCode": "TAMPERE",
    "country": "Finland",
    "currencyCode": "EUR",
    "routes": ["city:BUDAPEST", "airport:BRE", "country:hu", "airport:BUD", "city:BREMEN", "country:de"],
    "countryCode": "fi",
    "base": false,
    "coords": {
      "lat": 61.4141,
      "lng": 23.6044
    },
    "priority": 130,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TNG",
    "name": "Tangier",
    "categories": ["GLF", "FAM", "SPR", "CTY", "SEA"],
    "iataCode": "TNG",
    "seoName": "tangier",
    "cityCode": "TANGIER",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["airport:VLC", "airport:HHN", "airport:SVQ", "airport:MRS", "city:CHARLEROI", "airport:NRN", "country:es", "city:PARIS", "airport:CRL", "city:FRANKFURT", "city:MARSEILLE", "country:it", "airport:BGY", "airport:MAD", "city:EINDHOVEN", "airport:BVA", "city:DUSSELDORF", "city:MILAN", "airport:EIN", "country:fr", "city:BORDEAUX", "city:MADRID", "city:SEVILLE", "airport:BOD", "country:nl", "city:VALENCIA", "country:be", "country:de"],
    "countryCode": "ma",
    "base": false,
    "coords": {
      "lat": 35.7269,
      "lng": -5.91689
    },
    "priority": 88,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TLV",
    "name": "Tel Aviv",
    "categories": [],
    "iataCode": "TLV",
    "seoName": "tel-aviv",
    "cityCode": "TEL_AVIV",
    "country": "Israel",
    "currencyCode": "EUR",
    "routes": ["country:cy", "city:THESSALONIKI", "airport:KRK", "country:mt", "airport:POZ", "country:it", "country:gr", "city:PAPHOS", "airport:BGY", "airport:FCO", "airport:SKG", "city:KRAKOW", "airport:MLA|Air Malta", "city:MILAN", "airport:FMM", "city:KARLSRUHE", "airport:KUN", "city:WROCLAW", "airport:BOJ", "airport:FKB", "city:KAUNAS", "city:MALTA", "city:ROME", "country:bg", "airport:PFO", "country:lt", "city:MEMMINGEN", "city:BURGAS", "country:pl", "airport:WRO", "airport:GDN", "city:POZNAN", "city:GDANSK", "country:de"],
    "countryCode": "il",
    "base": false,
    "coords": {
      "lat": 32.0034,
      "lng": 34.5258
    },
    "priority": 189,
    "seasonalRoutes": [],
    "aliases": ["Aviv"]
  }, {
    "id": "airport:TFN",
    "name": "Tenerife North",
    "categories": ["GLF", "FAM", "SPR", "CUL", "SEA"],
    "iataCode": "TFN",
    "seoName": "tenerife-north",
    "cityCode": "TENERIFE",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:BCN", "country:es", "region:COSTA_BRAVA", "city:BARCELONA", "airport:MAD", "city:MADRID"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 28.4827,
      "lng": -16.3415
    },
    "priority": 117,
    "seasonalRoutes": [],
    "aliases": [],
    "weight": 2
  }, {
    "id": "airport:TFS",
    "name": "Tenerife South",
    "categories": ["GLF", "FAM", "FST", "CUL", "SEA", "OUT"],
    "iataCode": "TFS",
    "seoName": "tenerife-south",
    "cityCode": "TENERIFE",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:CHARLEROI", "city:BOURNEMOUTH", "airport:ORK", "airport:LTN", "airport:KRK", "city:SANTANDER", "airport:CRL", "city:FRANKFURT", "region:ENGLAND", "airport:BGY", "city:STOCKHOLM", "city:EINDHOVEN", "city:MILAN", "city:EDINBURGH", "city:VITORIA-GASTEIZ", "airport:NYO", "city:BERLIN", "airport:DUS", "city:VIENNA", "city:LAMEZIA", "city:NAPLES", "country:pt", "city:LEEDS", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "airport:BHX", "city:GLASGOW", "airport:STN", "city:PISA", "city:SHANNON", "airport:NRN", "country:es", "airport:MXP", "airport:BRS", "airport:VIT", "airport:SCQ", "connectingFlight:CTA:BGY", "city:PARIS", "connectingFlight:BRI:BGY", "airport:FRA", "airport:BRE", "region:TUSCANY", "airport:VIE", "city:CARDIFF", "city:MANCHESTER", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:SDR", "city:SANTIAGO", "city:SEVILLE", "city:KNOCK", "country:nl", "country:no", "airport:VLC", "airport:SVQ", "airport:HHN", "connectingFlight:NAP:BGY", "airport:BLQ", "airport:LPL", "airport:TXL", "city:BARI", "region:SARDINIA", "region:WALES", "city:BRINDISI", "airport:MAN", "airport:NCL", "airport:WMI", "airport:MAD", "city:KRAKOW", "airport:BVA", "city:CATANIA", "city:CORK", "airport:CGN", "connectingFlight:BDS:BGY", "city:VENICE", "airport:FMM", "city:WARSAW", "city:PALERMO", "connectingFlight:CAG:BGY", "city:BARCELONA", "city:LIVERPOOL", "country:dk", "city:MEMMINGEN", "airport:CWL", "region:COSTA_BRAVA", "airport:SNN", "city:BELFAST", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "airport:OPO", "airport:LBA", "connectingFlight:PMO:BGY", "airport:EDI", "city:PORTO", "airport:TRF", "airport:SXF", "country:at", "airport:CPH", "country:it", "country:ie", "airport:PIK", "city:OSLO", "region:SICILY", "region:NORTHERN_IRELAND", "airport:TSF", "city:BIRMINGHAM", "country:se", "city:WROCLAW", "airport:NOC", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "airport:PSA", "airport:BOH", "city:COPENHAGEN", "region:PUGLIA", "airport:EMA", "city:CAGLIARI", "country:be", "airport:BFS", "city:BREMEN"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 28.0445,
      "lng": -16.5725
    },
    "priority": 28,
    "seasonalRoutes": [],
    "aliases": [],
    "weight": 1
  }, {
    "id": "airport:TER",
    "name": "Terceira Lajes",
    "categories": [],
    "iataCode": "TER",
    "seoName": "terceira-lajes",
    "cityCode": "TERCEIRA",
    "country": "Portugal",
    "currencyCode": "EUR",
    "routes": ["airport:OPO", "connectingFlight:BGY:OPO", "connectingFlight:FKB:OPO", "city:MILAN", "city:PORTO", "country:es", "city:KARLSRUHE", "connectingFlight:BCN:OPO", "city:BARCELONA", "country:pt", "country:it", "airport:LIS", "region:COSTA_BRAVA", "city:LISBON", "country:de"],
    "countryCode": "pt",
    "base": false,
    "coords": {
      "lat": 38.761944,
      "lng": -27.090833
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": ["Lajes"]
  }, {
    "id": "airport:SKG",
    "name": "Thessaloniki",
    "categories": ["HEN", "FAM", "FST", "NIT", "CTY", "CUL", "SEA", "OUT"],
    "iataCode": "SKG",
    "seoName": "thessaloniki",
    "cityCode": "THESSALONIKI",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:NUREMBERG", "airport:GRO", "airport:DTM", "airport:CRL", "city:FRANKFURT", "country:gr", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "city:EINDHOVEN", "city:MILAN", "airport:NYO", "country:hu", "city:BERLIN", "city:LAMEZIA", "city:NAPLES", "airport:TLV", "country:pt", "connectingFlight:BCN:BGY", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:DUB", "airport:STN", "airport:NRN", "country:es", "city:PARIS", "city:CHANIA", "city:TEL_AVIV", "airport:NAP", "country:mt", "connectingFlight:BRI:BGY", "airport:BRE", "city:PAPHOS", "city:MANCHESTER", "city:LONDON", "city:DUSSELDORF", "country:gb", "airport:EIN", "country:fr", "city:BRATISLAVA", "airport:FKB", "city:MALTA", "airport:PFO", "country:nl", "country:fi", "country:cy", "airport:HHN", "airport:LPP", "airport:BLQ", "connectingFlight:MLA:BGY", "city:BARI", "airport:BTS", "airport:MAN", "airport:WMI", "airport:BVA", "airport:GOT", "airport:FMM", "city:WARSAW", "city:PALERMO", "city:BARCELONA", "airport:NUE", "country:dk", "city:ROME", "city:LAPPEENRANTA", "city:MEMMINGEN", "region:COSTA_BRAVA", "airport:BUD", "country:de", "airport:CHQ", "connectingFlight:PMO:BGY", "city:PORTO", "airport:SXF", "airport:MLA", "airport:CPH", "country:it", "city:ALICANTE", "airport:ATH", "country:ie", "airport:HAM", "country:il", "connectingFlight:ALC:BGY", "region:SICILY", "connectingFlight:OPO:BGY", "country:sk", "city:KARLSRUHE", "country:se", "city:DUBLIN", "city:ATHENS", "airport:CIA", "region:CRETE", "city:COPENHAGEN", "city:DORTMUND", "region:PUGLIA", "city:BUDAPEST", "city:GIRONA", "city:GOTHENBURG", "country:be", "city:BREMEN"],
    "countryCode": "gr",
    "base": true,
    "coords": {
      "lat": 40.5197,
      "lng": 22.9709
    },
    "priority": 29,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TSR",
    "name": "Timisoara",
    "categories": [],
    "iataCode": "TSR",
    "seoName": "timisoara",
    "cityCode": "TIMISOARA",
    "country": "Romania",
    "currencyCode": "EUR",
    "routes": ["city:BUCHAREST", "airport:OTP", "city:MILAN", "country:it", "country:ro", "airport:BGY"],
    "countryCode": "ro",
    "base": true,
    "coords": {
      "lat": 45.81,
      "lng": 21.3381
    },
    "priority": 300,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TLS",
    "name": "Toulouse",
    "categories": [],
    "iataCode": "TLS",
    "seoName": "toulouse",
    "cityCode": "TOULOUSE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:SVQ", "city:CHARLEROI", "airport:EDI", "country:es", "airport:SXF", "airport:MLA", "airport:CRL", "airport:NAP", "country:mt", "airport:FEZ", "city:FEZ", "country:it", "region:ENGLAND", "airport:LIS", "airport:WMI", "city:LISBON", "city:LONDON", "airport:MAD", "country:ma", "country:gb", "city:EDINBURGH", "city:WARSAW", "city:BERLIN", "city:MADRID", "city:MALTA", "city:NAPLES", "country:pt", "city:SEVILLE", "country:pl", "country:be", "region:SCOTLAND", "country:de"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.6044,
      "lng": 1.4439
    },
    "priority": 300,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TUF",
    "name": "Tours Loire Valley",
    "categories": ["FAM", "FST", "CTY"],
    "iataCode": "TUF",
    "seoName": "tours",
    "cityCode": "TOURS",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:OPO", "airport:MRS", "country:ma", "country:gb", "city:PORTO", "country:fr", "city:DUBLIN", "city:MARRAKESH", "country:pt", "city:MARSEILLE", "airport:RAK", "region:ENGLAND", "country:ie", "airport:DUB", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 47.4322,
      "lng": 0.727606
    },
    "priority": 123,
    "seasonalRoutes": [],
    "aliases": ["Loire", "Valley", "Loire Valley"]
  }, {
    "id": "airport:TPS",
    "name": "Trapani",
    "categories": ["FAM", "CTY", "CUL", "SEA"],
    "iataCode": "TPS",
    "seoName": "trapani",
    "cityCode": "TRAPANI",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:PISA", "airport:HHN", "country:cz", "airport:BLQ", "country:es", "airport:PRG", "connectingFlight:MAD:BGY", "region:SARDINIA", "connectingFlight:VNO:BGY", "city:FRANKFURT", "country:gr", "country:it", "airport:BGY", "region:TUSCANY", "connectingFlight:BRE:BGY", "city:VILNIUS", "airport:CAG", "city:MILAN", "city:KARLSRUHE", "city:MADRID", "airport:FKB", "airport:PSA", "city:ATHENS", "connectingFlight:ATH:BGY", "country:lt", "city:PRAGUE", "city:BOLOGNA", "city:CAGLIARI", "city:BREMEN", "country:de"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 37.9114,
      "lng": 12.488
    },
    "priority": 25,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TRS",
    "name": "Trieste",
    "categories": ["FAM", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "TRS",
    "seoName": "trieste",
    "cityCode": "TRIESTE",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["region:SICILY", "airport:VLC", "airport:STN", "city:CATANIA", "country:gb", "country:es", "city:BARI", "airport:CIA", "city:ROME", "airport:BRI", "region:PUGLIA", "country:it", "region:ENGLAND", "city:VALENCIA", "airport:CTA", "city:LONDON"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 45.8275,
      "lng": 13.4722
    },
    "priority": 105,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TUN",
    "name": "Tunis",
    "categories": [],
    "iataCode": "TUN",
    "seoName": "tunis",
    "cityCode": "TUNIS",
    "country": "Tunisia",
    "currencyCode": "EUR",
    "routes": ["city:MALTA", "country:mt", "airport:MLA|Air Malta"],
    "countryCode": "tn",
    "base": false,
    "coords": {
      "lat": 36.8064,
      "lng": 10.1817
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TRN",
    "name": "Turin",
    "categories": ["SKI", "FAM", "SPR", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "TRN",
    "seoName": "turin",
    "cityCode": "TURIN",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:VLC", "city:CHARLEROI", "city:IBIZA", "country:es", "city:BARI", "airport:MLA", "airport:CRL", "country:mt", "airport:FEZ", "airport:BRI", "country:it", "city:FEZ", "city:BRINDISI", "region:ENGLAND", "country:ie", "airport:CIY", "airport:PMO", "city:LONDON", "airport:CTA", "region:SICILY", "airport:BCN", "country:ma", "city:CATANIA", "country:gb", "city:PALERMO", "airport:IBZ", "city:BARCELONA", "city:DUBLIN", "city:COMISO", "city:MALTA", "region:PUGLIA", "region:COSTA_BRAVA", "airport:DUB", "airport:BDS", "city:VALENCIA", "country:be"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 45.2008,
      "lng": 7.64963
    },
    "priority": 64,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:VLC",
    "name": "Valencia",
    "categories": ["FAM", "SPR", "CTY", "CUL", "SEA"],
    "iataCode": "VLC",
    "seoName": "valencia",
    "cityCode": "VALENCIA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "connectingFlight:BTS:BGY", "city:TANGIER", "airport:KRK", "city:SANTANDER", "airport:CRL", "city:FRANKFURT", "city:TENERIFE", "city:TURIN", "country:gr", "city:FARO", "region:ENGLAND", "connectingFlight:FAO:OPO", "airport:BGY", "airport:CRA", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "city:EDINBURGH", "country:hu", "city:BERLIN", "city:VIENNA", "city:LAMEZIA", "city:NAPLES", "country:pt", "country:hr", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:DUB", "airport:TNG", "airport:STN", "city:PISA", "city:GLASGOW", "city:ZADAR", "airport:NRN", "country:es", "airport:BRU", "airport:MXP", "airport:BRS", "connectingFlight:VNO:BGY", "airport:SCQ", "connectingFlight:CTA:BGY", "city:PARIS", "airport:ZAD", "airport:NAP", "country:mt", "city:PALMA", "city:MARSEILLE", "airport:RAK", "airport:GLA", "airport:BRI", "airport:FRA", "city:TRIESTE", "connectingFlight:PRG:BGY", "city:LISBON", "connectingFlight:LIS:OPO", "region:TUSCANY", "airport:VIE", "airport:PMO", "city:MANCHESTER", "city:LONDON", "city:DUSSELDORF", "city:VILNIUS", "airport:EIN", "country:gb", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:SDR", "airport:TFS", "city:BRATISLAVA", "city:SANTIAGO", "city:MALTA", "city:SEVILLE", "city:PRAGUE", "country:nl", "country:cz", "airport:MRS", "airport:SVQ", "airport:BLQ", "city:BRUSSELS", "city:BARI", "region:SARDINIA", "airport:NTE", "airport:LPA", "region:CANARY_ISLES", "airport:MAN", "airport:WMI", "airport:MAH", "city:KRAKOW", "airport:BVA", "country:ma", "city:CATANIA", "airport:CGN", "city:VENICE", "airport:ACE", "city:WARSAW", "city:PALERMO", "airport:IBZ", "city:MARRAKESH", "country:dk", "city:ROME", "country:lt", "connectingFlight:ATH:BGY", "city:MENORCA", "airport:BUD", "region:SCOTLAND", "country:de", "airport:OPO", "airport:EDI", "city:IBIZA", "city:PORTO", "airport:SXF", "airport:MLA", "country:at", "city:LANZAROTE", "airport:FEZ", "airport:CPH", "country:it", "city:FEZ", "country:ie", "airport:HAM", "connectingFlight:BRE:BGY", "region:SICILY", "airport:CAG", "country:sk", "airport:TSF", "city:BIRMINGHAM", "city:NANTES", "city:DUBLIN", "city:BRISTOL", "airport:PSA", "airport:CIA", "city:ATHENS", "city:COPENHAGEN", "region:PUGLIA", "airport:EMA", "airport:BOD", "city:BUDAPEST", "airport:TRS", "country:ro", "city:CAGLIARI", "country:be", "city:CRAIOVA", "city:BREMEN", "airport:TRN"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 39.4893,
      "lng": -0.481625
    },
    "priority": 30,
    "seasonalRoutes": [],
    "aliases": [],
    "weight": 1
  }, {
    "id": "airport:VLL",
    "name": "Valladolid",
    "categories": ["FAM", "SPR", "CTY", "OUT"],
    "iataCode": "VLL",
    "seoName": "valladolid",
    "cityCode": "VALLADOLID",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:BCN", "airport:SVQ", "city:PALMA", "airport:PMI", "city:SEVILLE", "country:es", "region:COSTA_BRAVA", "city:BARCELONA"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 41.7061,
      "lng": -4.85194
    },
    "priority": 138,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:VAR",
    "name": "Varna",
    "categories": [],
    "iataCode": "VAR",
    "seoName": "varna",
    "cityCode": "VARNA",
    "country": "Bulgaria",
    "currencyCode": "EUR",
    "routes": ["airport:CRL", "city:CHARLEROI", "country:be"],
    "countryCode": "bg",
    "base": false,
    "coords": {
      "lat": 43.1355,
      "lng": 27.4931
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:VCE",
    "name": "Venice M.Polo",
    "categories": [],
    "iataCode": "VCE",
    "seoName": "venice",
    "cityCode": "VENICE",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:BCN", "city:BRISTOL", "airport:SEN", "country:gb", "city:SOUTHEND_ON_SEA", "region:ENGLAND", "country:es", "region:COSTA_BRAVA", "airport:BRS", "city:BARCELONA"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 45.5053,
      "lng": 12.3519
    },
    "priority": 238,
    "seasonalRoutes": [],
    "aliases": ["Marco Polo", "Marco", "Polo"]
  }, {
    "id": "airport:TSF",
    "name": "Venice Treviso",
    "categories": ["SKI", "ROM", "FAM", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "TSF",
    "seoName": "venice-treviso",
    "cityCode": "VENICE",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "airport:KRK", "airport:CRL", "city:FRANKFURT", "city:TENERIFE", "country:gr", "region:ENGLAND", "city:STOCKHOLM", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:AGP", "city:EDINBURGH", "country:hu", "airport:NYO", "city:BERLIN", "city:LAMEZIA", "city:NAPLES", "city:SOFIA", "country:pt", "city:LEEDS", "country:pl", "city:VALENCIA", "airport:DUB", "airport:STN", "country:es", "airport:BRU", "city:PARIS", "airport:NAP", "country:mt", "airport:RAK", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:BRE", "airport:FRA", "airport:PMO", "city:MANCHESTER", "airport:CTA", "city:LONDON", "city:VILNIUS", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:SUF", "city:BORDEAUX", "airport:TFS", "city:MALTA", "city:SEVILLE", "city:PRAGUE", "country:nl", "airport:STR", "airport:VLC", "country:cz", "airport:SVQ", "city:BRUSSELS", "city:BARI", "region:SARDINIA", "airport:LPA", "region:CANARY_ISLES", "airport:MAN", "city:BRINDISI", "airport:WMI", "airport:BVA", "city:KRAKOW", "country:ma", "city:CATANIA", "airport:CGN", "airport:SOF", "city:PALERMO", "city:WARSAW", "airport:IBZ", "region:COSTA_DE_SOL", "city:MARRAKESH", "country:lt", "city:STUTTGART", "airport:BUD", "airport:BDS", "airport:CFU", "region:SCOTLAND", "country:de", "airport:OPO", "airport:LBA", "airport:EDI", "city:CORFU", "city:PORTO", "city:IBIZA", "airport:PRG", "airport:SXF", "airport:MLA", "airport:FEZ", "country:it", "city:FEZ", "city:MALAGA", "country:ie", "airport:HAM", "region:SICILY", "airport:CAG", "city:BIRMINGHAM", "country:se", "city:DUBLIN", "country:bg", "airport:EMA", "region:PUGLIA", "airport:VNO", "city:BUDAPEST", "airport:BOD", "city:CAGLIARI", "country:be", "city:BREMEN"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 45.6484,
      "lng": 12.1944
    },
    "priority": 21,
    "seasonalRoutes": [],
    "aliases": ["Treviso", "Venice Treviso"]
  }, {
    "id": "airport:VRN",
    "name": "Verona",
    "categories": ["SKI", "ROM", "FAM", "FST", "CTY", "CUL"],
    "iataCode": "VRN",
    "seoName": "verona",
    "cityCode": "VERONA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:SVQ", "city:HAMBURG", "city:CHARLEROI", "country:es", "region:SARDINIA", "airport:SXF", "airport:CRL", "country:it", "city:BRINDISI", "region:ENGLAND", "airport:HAM", "airport:PMO", "airport:MAD", "city:LONDON", "region:SICILY", "airport:CAG", "country:gb", "city:PALERMO", "city:BIRMINGHAM", "city:BERLIN", "city:MADRID", "city:SEVILLE", "region:PUGLIA", "city:STUTTGART", "airport:STR", "city:CAGLIARI", "airport:BDS", "country:be", "airport:BHX", "country:de"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 45.3957,
      "lng": 10.8885
    },
    "priority": 163,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:VIE",
    "name": "Vienna",
    "categories": ["CUL"],
    "iataCode": "VIE",
    "seoName": "vienna",
    "cityCode": "VIENNA",
    "country": "Austria",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:VLC", "airport:SVQ", "airport:BLQ", "airport:JTR", "city:SANTORINI", "airport:KRK", "airport:LPA", "region:CANARY_ISLES", "city:TENERIFE", "country:gr", "city:BRINDISI", "city:FARO", "region:ENGLAND", "airport:BGY", "airport:FCO", "city:FUERTEVENTURA", "airport:MAD", "airport:BVA", "city:KRAKOW", "city:GRAN_CANARIA", "country:ma", "city:CATANIA", "airport:PMI", "airport:MLA|Air Malta", "city:MILAN", "airport:AGP", "airport:ACE", "airport:IBZ", "city:BARCELONA", "region:COSTA_DE_SOL", "city:LARNACA", "city:MARRAKESH", "city:BUCHAREST", "country:dk", "country:pt", "city:ROME", "airport:FUE", "city:BOLOGNA", "region:COSTA_BRAVA", "country:pl", "airport:DUB", "city:AMMAN", "airport:BDS", "city:VALENCIA", "city:PISA", "airport:STN", "airport:OTP", "airport:CHQ", "city:IBIZA", "country:es", "city:PARIS", "city:CHANIA", "city:KALAMATA", "city:LANZAROTE", "country:mt", "city:PALMA", "airport:CPH", "airport:RAK", "country:it", "city:MALAGA", "country:ie", "airport:FAO", "city:PAPHOS", "region:TUSCANY", "city:LONDON", "region:SICILY", "airport:BCN", "airport:LCA", "airport:CTA|Air Malta", "country:gb", "country:fr", "airport:AMM", "airport:TFS", "city:DUBLIN", "city:MADRID", "airport:PSA", "city:MALTA", "region:CRETE", "city:COPENHAGEN", "country:jo", "region:PUGLIA", "city:SEVILLE", "airport:PFO", "airport:KLX", "country:ro"],
    "countryCode": "at",
    "base": false,
    "coords": {
      "lat": 48.0639,
      "lng": 16.3415
    },
    "priority": 150,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:VGO",
    "name": "Vigo",
    "categories": [],
    "iataCode": "VGO",
    "seoName": "vigo",
    "cityCode": "VIGO",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:BCN", "city:MILAN", "airport:EDI", "country:gb", "airport:BLQ", "city:EDINBURGH", "country:es", "city:BARCELONA", "city:DUBLIN", "country:it", "city:BOLOGNA", "region:COSTA_BRAVA", "country:ie", "airport:BGY", "airport:DUB", "region:SCOTLAND"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 42.23,
      "lng": -8.63
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:VNO",
    "name": "Vilnius",
    "categories": ["FAM", "CTY", "CUL", "XMS"],
    "iataCode": "VNO",
    "seoName": "vilnius",
    "cityCode": "VILNIUS",
    "country": "Lithuania",
    "currencyCode": "EUR",
    "routes": ["airport:HHN", "city:CHARLEROI", "connectingFlight:NAP:BGY", "airport:LPL", "city:NUREMBERG", "airport:LTN", "city:BARI", "region:SARDINIA", "airport:CRL", "city:FRANKFURT", "connectingFlight:VLC:BGY", "country:gr", "city:BRINDISI", "region:ENGLAND", "airport:BGY", "airport:MAD", "airport:BVA", "city:CATANIA", "airport:CGN", "city:MILAN", "connectingFlight:BDS:BGY", "airport:OSL", "city:VENICE", "country:ua", "city:PALERMO", "connectingFlight:CAG:BGY", "city:BERLIN", "city:BARCELONA", "city:LIVERPOOL", "airport:NUE", "city:NAPLES", "city:ROME", "airport:KBP", "city:TRAPANI", "city:LEEDS", "region:COSTA_BRAVA", "city:VALENCIA", "airport:DUB", "city:AMMAN", "airport:CFU", "airport:BHX", "country:de", "airport:STN", "airport:LBA", "connectingFlight:PMO:BGY", "city:CORFU", "country:es", "city:KIEV", "airport:SXF", "airport:MLA", "connectingFlight:CTA:BGY", "city:PARIS", "country:mt", "country:it", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "connectingFlight:BRI:BGY", "airport:BRE", "airport:ATH", "country:ie", "city:LONDON", "city:OSLO", "region:SICILY", "airport:BCN", "country:gb", "airport:TSF", "city:COLOGNE", "city:BIRMINGHAM", "country:fr", "airport:AMM", "city:DUBLIN", "city:MADRID", "city:MALTA", "airport:CIA", "city:ATHENS", "country:jo", "region:PUGLIA", "connectingFlight:TPS:BGY", "city:CAGLIARI", "country:be", "city:BREMEN", "country:no"],
    "countryCode": "lt",
    "base": true,
    "coords": {
      "lat": 54.6341,
      "lng": 25.2858
    },
    "priority": 70,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:VIT",
    "name": "Vitoria (Basque Country)",
    "categories": [],
    "iataCode": "VIT",
    "seoName": "vitoria",
    "cityCode": "VITORIA-GASTEIZ",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:SVQ", "airport:PMI", "city:MILAN", "airport:CGN", "country:es", "city:COLOGNE", "airport:TFS", "city:PALMA", "city:TENERIFE", "region:CANARY_ISLES", "city:SEVILLE", "country:it", "airport:BGY", "country:de"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 42.8828,
      "lng": -2.7244
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": ["Vasco", "Basque", "Euskadi"]
  }, {
    "id": "airport:VXO",
    "name": "Växjö Småland",
    "categories": ["SKI", "FAM", "FST", "CTY"],
    "iataCode": "VXO",
    "seoName": "vaxjo",
    "cityCode": "VAXJO",
    "country": "Sweden",
    "currencyCode": "SEK",
    "routes": ["city:ALICANTE", "airport:ALC", "country:es", "region:COSTA_BRAVA", "country:pl", "airport:GDN", "city:GDANSK"],
    "countryCode": "se",
    "base": false,
    "coords": {
      "lat": 56.9291,
      "lng": 14.728
    },
    "priority": 167,
    "seasonalRoutes": [],
    "aliases": ["Vaxjo", "Smaland Vaxjo"]
  }, {
    "id": "airport:WAW",
    "name": "Warsaw Chopin",
    "categories": [],
    "iataCode": "WAW",
    "seoName": "warsaw-chopin",
    "cityCode": "WARSAW",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:SZZ", "country:pl", "city:SZCZECIN"],
    "countryCode": "pl",
    "base": true,
    "coords": {
      "lat": 52.1657,
      "lng": 20.9671
    },
    "priority": 240,
    "seasonalRoutes": [],
    "aliases": ["Chopin", "Okecie"],
    "weight": 2
  }, {
    "id": "airport:WMI",
    "name": "Warsaw Modlin",
    "categories": ["HEN", "FAM", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "WMI",
    "seoName": "warsaw-modlin",
    "cityCode": "WARSAW",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["city:CHARLEROI", "airport:CRL", "city:LVIV", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "airport:BGY", "city:STOCKHOLM", "airport:PSR", "city:EINDHOVEN", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:MILAN", "city:EDINBURGH", "airport:NYO", "city:NAPLES", "country:pt", "airport:TLS", "airport:KBP", "city:LEEDS", "city:BOLOGNA", "airport:DUB", "city:VALENCIA", "airport:BHX", "city:PISA", "airport:STN", "city:GLASGOW", "city:SHANNON", "country:es", "airport:BRS", "city:THESSALONIKI", "city:PARIS", "city:CHANIA", "airport:NAP", "city:PALMA", "city:MARSEILLE", "airport:GLA", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:FAO", "city:LISBON", "region:TUSCANY", "city:MANCHESTER", "airport:SKG", "city:LONDON", "airport:BCN", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:LWO", "airport:TFS", "airport:FKB", "city:SEVILLE", "city:BURGAS", "country:nl", "city:PESCARA", "country:no", "airport:VLC", "airport:SVQ", "airport:MRS", "airport:BLQ", "airport:LPL", "city:TOULOUSE", "region:SARDINIA", "airport:LPA", "region:CANARY_ISLES", "airport:MAN", "airport:NCL", "airport:MAD", "airport:BVA", "airport:RMI", "airport:GOT", "airport:CGN", "city:VENICE", "airport:FMM", "country:ua", "region:COSTA_DE_SOL", "city:BARCELONA", "city:LIVERPOOL", "city:ROME", "city:EILAT", "city:MEMMINGEN", "airport:FUE", "airport:SNN", "airport:VDA", "region:COSTA_BRAVA", "city:BELFAST", "city:AMMAN", "city:RIMINI", "airport:CFU", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "airport:OPO", "airport:LBA", "airport:CHQ", "airport:EDI", "city:CORFU", "airport:TRF", "city:PORTO", "city:KIEV", "country:it", "city:MALAGA", "city:ALICANTE", "airport:ALC", "airport:ATH", "airport:LIS", "country:ie", "country:il", "city:OSLO", "airport:CAG", "region:NORTHERN_IRELAND", "airport:TSF", "city:BIRMINGHAM", "city:KARLSRUHE", "country:se", "airport:AMM", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "airport:BOJ", "airport:PSA", "airport:CIA", "city:ATHENS", "region:CRETE", "country:jo", "country:bg", "airport:EMA", "city:CAGLIARI", "city:GOTHENBURG", "country:be", "airport:BFS"],
    "countryCode": "pl",
    "base": true,
    "coords": {
      "lat": 52.4511,
      "lng": 20.6517
    },
    "priority": 16,
    "seasonalRoutes": [],
    "aliases": ["Modlin", "Warsaw Modlin"],
    "weight": 1
  }, {
    "id": "airport:WRO",
    "name": "Wroclaw",
    "categories": ["FAM", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "WRO",
    "seoName": "wroclaw",
    "cityCode": "WROCLAW",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["city:CHARLEROI", "airport:BLQ", "airport:LPL", "airport:ORK", "airport:GRO", "airport:CRL", "city:TENERIFE", "region:CANARY_ISLES", "country:gr", "airport:MAN", "city:FARO", "airport:NCL", "region:ENGLAND", "airport:BGY", "airport:TGD", "airport:MAD", "airport:BVA", "airport:PMI", "city:CORK", "city:MILAN", "airport:AGP", "country:me", "city:EDINBURGH", "country:ua", "city:PALERMO", "region:COSTA_DE_SOL", "city:LIVERPOOL", "airport:TLV", "city:NAPLES", "country:pt", "city:ROME", "airport:KBP", "city:LEEDS", "city:BOLOGNA", "country:pl", "airport:SNN", "region:COSTA_BRAVA", "city:BELFAST", "airport:DUB", "city:GDANSK", "region:SCOTLAND", "city:PODGORICA", "city:NEWCASTLE", "airport:STN", "city:GLASGOW", "airport:LBA", "city:SHANNON", "airport:CHQ", "airport:EDI", "airport:TRF", "country:es", "city:KIEV", "airport:BRS", "airport:MLA", "city:PARIS", "city:CHANIA", "city:TEL_AVIV", "airport:NAP", "country:mt", "city:PALMA", "airport:GLA", "country:it", "city:MALAGA", "city:ALICANTE", "airport:ALC", "airport:ATH", "airport:LIS", "country:ie", "airport:FAO", "city:LISBON", "country:il", "airport:PMO", "city:MANCHESTER", "city:LONDON", "city:OSLO", "region:SICILY", "country:gb", "region:NORTHERN_IRELAND", "city:BIRMINGHAM", "country:fr", "airport:TFS", "city:MADRID", "city:DUBLIN", "city:BRISTOL", "city:MALTA", "airport:CIA", "city:ATHENS", "region:CRETE", "airport:EMA", "airport:GDN", "city:GIRONA", "country:be", "airport:BFS", "country:no"],
    "countryCode": "pl",
    "base": true,
    "coords": {
      "lat": 51.1027,
      "lng": 16.8858
    },
    "priority": 45,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:ZAD",
    "name": "Zadar",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "OUT"],
    "iataCode": "ZAD",
    "seoName": "zadar",
    "cityCode": "ZADAR",
    "country": "Croatia",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:HAMBURG", "country:cz", "airport:MRS", "city:CHARLEROI", "airport:NRN", "airport:PRG", "city:NUREMBERG", "airport:SXF", "city:PARIS", "airport:CRL", "city:FRANKFURT", "city:MARSEILLE", "airport:MAN", "region:ENGLAND", "airport:BRE", "airport:FRA", "country:ie", "airport:HAM", "city:STOCKHOLM", "city:MANCHESTER", "city:LONDON", "airport:BVA", "city:DUSSELDORF", "airport:GOT", "country:gb", "airport:CGN", "city:COLOGNE", "airport:FMM", "city:KARLSRUHE", "country:fr", "airport:NYO", "country:se", "city:BERLIN", "city:DUBLIN", "airport:FKB", "airport:NUE", "city:MEMMINGEN", "city:PRAGUE", "city:STUTTGART", "airport:STR", "airport:DUB", "city:GOTHENBURG", "country:be", "city:BREMEN", "country:de"],
    "countryCode": "hr",
    "base": true,
    "coords": {
      "lat": 44.1083,
      "lng": 15.3467
    },
    "priority": 82,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:ZAZ",
    "name": "Zaragoza",
    "categories": ["SKI", "FAM", "FST", "CTY", "OUT"],
    "iataCode": "ZAZ",
    "seoName": "zaragoza",
    "cityCode": "ZARAGOZA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:CHARLEROI", "connectingFlight:NAP:BGY", "country:es", "city:PARIS", "city:LANZAROTE", "airport:CRL", "city:PALMA", "region:CANARY_ISLES", "country:it", "country:gr", "region:ENGLAND", "airport:BGY", "city:LONDON", "airport:BVA", "airport:PMI", "country:gb", "city:MILAN", "airport:ACE", "country:fr", "city:LAMEZIA", "city:NAPLES", "city:ATHENS", "connectingFlight:ATH:BGY", "connectingFlight:SUF:BGY", "country:be"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 41.6662,
      "lng": -1.04155
    },
    "priority": 108,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:ZRH",
    "name": "Zurich",
    "categories": [],
    "iataCode": "ZRH",
    "seoName": "zurich",
    "cityCode": "ZURICH",
    "country": "Switzerland",
    "currencyCode": "CHF",
    "routes": ["city:MALTA", "country:mt", "airport:MLA|Air Malta"],
    "countryCode": "ch",
    "base": false,
    "coords": {
      "lat": 47.4647,
      "lng": 8.5492
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }],
  "nearbyAirportsList": [{
    "id": "airport:MXP",
    "name": "Milan Malpensa",
    "categories": [],
    "iataCode": "MXP",
    "seoName": "milan-malpensa",
    "cityCode": "MILAN",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "airport:SVQ", "city:BRUSSELS", "airport:LPL", "airport:TXL", "airport:LPA", "region:CANARY_ISLES", "city:TENERIFE", "city:KATOWICE", "country:gr", "region:ENGLAND", "airport:CIY", "city:EINDHOVEN", "city:GRAN_CANARIA", "city:CATANIA", "airport:SOF", "city:PALERMO", "city:BERLIN", "city:COMISO", "city:BUCHAREST", "city:LIVERPOOL", "city:LAMEZIA", "city:HERAKLION", "city:KAUNAS", "city:SOFIA", "country:pt", "country:lt", "region:COSTA_BRAVA", "country:pl", "city:VALENCIA", "country:de", "airport:STN", "airport:OPO", "airport:KTW", "airport:OTP", "city:PORTO", "country:es", "airport:BRU", "country:it", "city:ALICANTE", "airport:ALC", "airport:HER", "city:LISBON", "connectingFlight:LIS:OPO", "airport:PMO", "airport:CTA", "city:LONDON", "region:SICILY", "country:gb", "airport:EIN", "airport:KUN", "airport:SUF", "airport:TFS", "region:CRETE", "country:bg", "city:SEVILLE", "country:nl", "country:ro", "country:be"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 45.63,
      "lng": 8.7231
    },
    "priority": 224,
    "seasonalRoutes": [],
    "aliases": ["Malpensa"],
    "weight": 2
  }, {
    "id": "airport:BGY",
    "name": "Milan Bergamo",
    "categories": ["SKI", "ROM", "FAM", "CTY", "CUL", "OUT"],
    "iataCode": "BGY",
    "seoName": "milan-bergamo",
    "cityCode": "MILAN",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:TALLINN", "airport:LDE", "airport:EFL", "city:TANGIER", "airport:CRV", "city:NUREMBERG", "airport:KRK", "airport:INI", "city:SANTANDER", "connectingFlight:PDL:OPO", "airport:CRL", "city:FRANKFURT", "city:KEFALONIA", "airport:VGO", "country:gr", "connectingFlight:FAO:OPO", "airport:TSR", "city:STOCKHOLM", "airport:PMI", "city:EDINBURGH", "city:VITORIA-GASTEIZ", "airport:NYO", "country:hu", "city:VIENNA", "city:SOFIA", "city:BILLUND", "city:ALGHERO", "city:VALENCIA", "airport:DUB", "airport:STN", "country:es", "airport:BRS", "airport:SCQ", "airport:BRQ", "airport:VIT", "city:PARIS", "city:TEL_AVIV", "city:NIS", "city:PALMA", "airport:RAK", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:BRE", "city:RHODES", "airport:VIE", "airport:PMO", "country:ee", "airport:LUX", "city:LONDON", "airport:CTA", "airport:BCN", "city:DUSSELDORF", "city:VILNIUS", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:SUF", "city:TERCEIRA", "airport:SDR", "airport:TFS", "city:MALTA", "city:VIGO", "city:SEVILLE", "city:ZARAGOZA", "city:BURGAS", "airport:ZAZ", "airport:STR", "country:fi", "airport:LPP", "city:BARI", "region:SARDINIA", "airport:BLL", "airport:LPA", "city:BRINDISI", "airport:MAN", "airport:MAD", "country:ma", "airport:SOF", "city:MARRAKESH", "city:BUCHAREST", "city:HERAKLION", "airport:NUE", "country:lv", "airport:TPS", "city:LAPPEENRANTA", "country:lt", "country:lu", "airport:FUE", "airport:VDA", "city:STUTTGART", "city:BELFAST", "city:AMMAN", "city:GDANSK", "airport:EDI", "airport:TRF", "city:IBIZA", "airport:FEZ", "airport:CPH", "country:it", "airport:ALC", "country:ie", "country:il", "region:SICILY", "city:OSLO", "airport:CAG", "city:BIRMINGHAM", "airport:AMM", "city:WROCLAW", "city:MADRID", "city:CROTONE", "airport:BOJ", "country:jo", "region:PUGLIA", "airport:BOD", "city:BUDAPEST", "city:CAGLIARI", "region:AZORES", "city:BREMEN", "city:HAMBURG", "city:CHARLEROI", "airport:ORK", "city:TENERIFE", "city:FARO", "region:ENGLAND", "airport:CIY", "airport:PSR", "city:EINDHOVEN", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "airport:OSR", "city:TIMISOARA", "airport:AGP", "city:BERLIN", "airport:PDV", "city:BRNO", "city:LAMEZIA", "city:NAPLES", "airport:TLV", "country:pt", "airport:RHO", "connectingFlight:TER:OPO", "city:TRAPANI", "country:pl", "airport:TLL", "airport:WRO", "airport:TNG", "airport:OTP", "airport:NRN", "airport:AHO", "city:THESSALONIKI", "airport:RIX", "city:CHANIA", "airport:NAP", "country:mt", "airport:FRA", "airport:HER", "city:PAPHOS", "airport:FAO", "city:LISBON", "airport:SKG", "city:MANCHESTER", "city:OSTRAVA", "city:BRATISLAVA", "city:SANTIAGO", "airport:PFO", "city:KNOCK", "city:PRAGUE", "country:nl", "city:PESCARA", "airport:GDN", "country:no", "airport:VLC", "country:cy", "country:cz", "airport:SVQ", "airport:BTS", "airport:POZ", "region:CANARY_ISLES", "airport:SEN", "airport:WMI", "airport:OMR", "city:KRAKOW", "airport:BVA", "airport:GOT", "city:CATANIA", "city:LOURDES", "city:CORK", "airport:CGN", "city:WARSAW", "airport:ACE", "city:PALERMO", "airport:IBZ", "region:COSTA_DE_SOL", "city:BARCELONA", "city:COMISO", "country:dk", "city:EILAT", "region:COSTA_BRAVA", "airport:BDS", "airport:BUD", "airport:CFU", "region:SCOTLAND", "country:de", "airport:OPO", "airport:CHQ", "city:PONTA_DELGADA", "city:CORFU", "city:PORTO", "airport:PRG", "city:ORADEA", "airport:SXF", "airport:MLA", "country:at", "city:LANZAROTE", "city:FEZ", "city:MALAGA", "city:ALICANTE", "city:PLOVDIV", "airport:ATH", "airport:LIS", "airport:HAM", "region:NORTHERN_IRELAND", "country:sk", "country:se", "airport:NOC", "city:DUBLIN", "city:BRISTOL", "region:CRETE", "city:ATHENS", "country:bg", "city:COPENHAGEN", "airport:EMA", "city:LUXEMBOURG", "airport:VNO", "city:RIGA", "city:SOUTHEND_ON_SEA", "country:ro", "country:be", "city:GOTHENBURG", "city:POZNAN", "airport:BFS", "country:rs"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 45.6739,
      "lng": 9.70417
    },
    "priority": 3,
    "seasonalRoutes": [],
    "aliases": ["Bergamo"],
    "weight": 1
  }, {
    "id": "airport:PMF",
    "name": "Parma",
    "categories": ["FAM", "SPR", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "PMF",
    "seoName": "parma",
    "cityCode": "PARMA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:CAG", "country:it", "region:SARDINIA", "city:CAGLIARI"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 44.8245,
      "lng": 10.2964
    },
    "priority": 115,
    "seasonalRoutes": [],
    "aliases": []
  }],
  "selectedValue": {
    "id": "airport:TSF",
    "name": "Venice Treviso",
    "categories": ["SKI", "ROM", "FAM", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "TSF",
    "seoName": "venice-treviso",
    "cityCode": "VENICE",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "airport:KRK", "airport:CRL", "city:FRANKFURT", "city:TENERIFE", "country:gr", "region:ENGLAND", "city:STOCKHOLM", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:AGP", "city:EDINBURGH", "country:hu", "airport:NYO", "city:BERLIN", "city:LAMEZIA", "city:NAPLES", "city:SOFIA", "country:pt", "city:LEEDS", "country:pl", "city:VALENCIA", "airport:DUB", "airport:STN", "country:es", "airport:BRU", "city:PARIS", "airport:NAP", "country:mt", "airport:RAK", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:BRE", "airport:FRA", "airport:PMO", "city:MANCHESTER", "airport:CTA", "city:LONDON", "city:VILNIUS", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:SUF", "city:BORDEAUX", "airport:TFS", "city:MALTA", "city:SEVILLE", "city:PRAGUE", "country:nl", "airport:STR", "airport:VLC", "country:cz", "airport:SVQ", "city:BRUSSELS", "city:BARI", "region:SARDINIA", "airport:LPA", "region:CANARY_ISLES", "airport:MAN", "city:BRINDISI", "airport:WMI", "airport:BVA", "city:KRAKOW", "country:ma", "city:CATANIA", "airport:CGN", "airport:SOF", "city:PALERMO", "city:WARSAW", "airport:IBZ", "region:COSTA_DE_SOL", "city:MARRAKESH", "country:lt", "city:STUTTGART", "airport:BUD", "airport:BDS", "airport:CFU", "region:SCOTLAND", "country:de", "airport:OPO", "airport:LBA", "airport:EDI", "city:CORFU", "city:PORTO", "city:IBIZA", "airport:PRG", "airport:SXF", "airport:MLA", "airport:FEZ", "country:it", "city:FEZ", "city:MALAGA", "country:ie", "airport:HAM", "region:SICILY", "airport:CAG", "city:BIRMINGHAM", "country:se", "city:DUBLIN", "country:bg", "airport:EMA", "region:PUGLIA", "airport:VNO", "city:BUDAPEST", "airport:BOD", "city:CAGLIARI", "country:be", "city:BREMEN"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 45.6484,
      "lng": 12.1944
    },
    "priority": 21,
    "seasonalRoutes": [],
    "aliases": ["Treviso", "Venice Treviso"]
  },
  "formFieldId": "departure-input",
  "geolocation": "true",
  "Device": {
    "resizeCbs": [],
    "resizeRunning": false
  },
  "popupId": "departureInput",
  "filteredListOptions": [{
    "id": "airport:AAL",
    "name": "Aalborg",
    "categories": ["CTY"],
    "iataCode": "AAL",
    "seoName": "aalborg",
    "cityCode": "AALBORG",
    "country": "Denmark",
    "currencyCode": "DKK",
    "routes": ["airport:STN", "country:gb", "region:ENGLAND", "city:LONDON"],
    "countryCode": "dk",
    "base": false,
    "coords": {
      "lat": 57.0534,
      "lng": 9.5057
    },
    "priority": 92,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:AAR",
    "name": "Aarhus",
    "categories": ["FAM", "CTY", "CUL", "XMS"],
    "iataCode": "AAR",
    "seoName": "aarhus",
    "cityCode": "AARHUS",
    "country": "Denmark",
    "currencyCode": "DKK",
    "routes": ["airport:STN", "airport:EIN", "country:gb", "city:DUBLIN", "region:ENGLAND", "country:nl", "country:ie", "country:pl", "airport:DUB", "airport:GDN", "city:GDANSK", "city:EINDHOVEN", "city:LONDON"],
    "countryCode": "dk",
    "base": false,
    "coords": {
      "lat": 56.3,
      "lng": 10.619
    },
    "priority": 149,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:ABZ",
    "name": "Aberdeen",
    "categories": [],
    "iataCode": "ABZ",
    "seoName": "aberdeen",
    "cityCode": "ABERDEEN",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["airport:AGP", "country:es", "airport:MLA", "region:COSTA_DE_SOL", "city:MALTA", "country:mt", "country:pt", "city:MALAGA", "city:ALICANTE", "city:FARO", "airport:ALC", "region:COSTA_BRAVA", "airport:FAO"],
    "countryCode": "gb",
    "base": false,
    "coords": {
      "lat": 57.2019,
      "lng": -2.19778
    },
    "priority": 190,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:AGA",
    "name": "Agadir",
    "categories": ["GLF", "FAM", "FST", "CUL", "SEA"],
    "iataCode": "AGA",
    "seoName": "agadir",
    "cityCode": "AGADIR",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["airport:STN", "airport:MRS", "city:DUSSELDORF", "city:CHARLEROI", "airport:EIN", "airport:NRN", "country:gb", "country:fr", "airport:CRL", "city:FRANKFURT", "city:MARSEILLE", "airport:MAN", "region:ENGLAND", "country:nl", "airport:FRA", "country:be", "city:MANCHESTER", "city:EINDHOVEN", "country:de", "city:LONDON"],
    "countryCode": "ma",
    "base": false,
    "coords": {
      "lat": 30.325,
      "lng": -9.41307
    },
    "priority": 136,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:AHO",
    "name": "Alghero",
    "categories": ["FAM", "SEA"],
    "iataCode": "AHO",
    "seoName": "alghero",
    "cityCode": "ALGHERO",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:PISA", "airport:STN", "airport:HHN", "city:CHARLEROI", "airport:BLQ", "airport:BTS", "airport:CRL", "airport:DTM", "city:FRANKFURT", "country:it", "region:ENGLAND", "airport:BGY", "region:TUSCANY", "city:LONDON", "city:EINDHOVEN", "city:MILAN", "country:gb", "airport:EIN", "country:sk", "airport:FMM", "city:BRATISLAVA", "airport:PSA", "city:DORTMUND", "city:MEMMINGEN", "country:nl", "city:BOLOGNA", "city:STUTTGART", "airport:STR", "country:be", "country:de"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 40.6321,
      "lng": 8.29077
    },
    "priority": 43,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:ALC",
    "name": "Alicante",
    "categories": ["GLF", "FAM", "SEA", "OUT"],
    "iataCode": "ALC",
    "seoName": "alicante",
    "cityCode": "ALICANTE",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:VXO", "city:HAMBURG", "city:BOURNEMOUTH", "city:CHARLEROI", "airport:ORK", "city:NUREMBERG", "airport:LTN", "airport:KRK", "airport:CRL", "city:FRANKFURT", "country:gr", "city:HAUGESUND", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "airport:KIR", "city:EINDHOVEN", "city:MILAN", "city:EDINBURGH", "airport:NYO", "city:BERLIN", "airport:DUS", "city:LAMEZIA", "city:KAUNAS", "city:BILLUND", "city:NAPLES", "country:pt", "city:NEWQUAY", "city:LEEDS", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:WRO", "airport:DUB", "airport:BHX", "city:KERRY", "airport:STN", "city:GLASGOW", "connectingFlight:PMO:FCO", "city:SHANNON", "airport:NRN", "country:es", "airport:BRU", "airport:MXP", "airport:BRS", "city:THESSALONIKI", "airport:SCQ", "connectingFlight:CTA:BGY", "city:PARIS", "city:MARSEILLE", "airport:GLA", "airport:BRE", "airport:FRA", "airport:NQY", "city:MANCHESTER", "airport:PED", "city:LONDON", "city:DUSSELDORF", "country:gb", "city:VAXJO", "airport:EIN", "connectingFlight:SKG:BGY", "city:COLOGNE", "country:fr", "airport:KUN", "city:SANTIAGO", "airport:FKB", "city:KNOCK", "city:SEVILLE", "country:nl", "airport:GDN", "country:no", "airport:SVQ", "country:cz", "airport:MRS", "airport:HHN", "connectingFlight:NAP:BGY", "airport:BLQ", "airport:LPL", "city:BRUSSELS", "airport:TXL", "region:SARDINIA", "airport:BLL", "city:PARDUBICE", "airport:POZ", "airport:SEN", "airport:LGW", "airport:MAN", "city:BRINDISI", "airport:VST", "airport:NCL", "airport:WMI", "airport:FCO", "city:KRAKOW", "airport:BVA", "airport:MST", "city:CATANIA", "airport:GOT", "city:CORK", "airport:CGN", "connectingFlight:BDS:BGY", "airport:FMM", "city:PALERMO", "city:WARSAW", "connectingFlight:CAG:BGY", "city:COMISO", "city:LIVERPOOL", "country:dk", "airport:NUE", "city:ROME", "airport:ABZ", "connectingFlight:ATH:BGY", "country:lt", "city:MEMMINGEN", "airport:SNN", "city:BELFAST", "region:SCOTLAND", "city:GDANSK", "country:de", "city:NEWCASTLE", "airport:OPO", "airport:LBA", "connectingFlight:PMO:BGY", "airport:EDI", "airport:TRF", "city:PORTO", "airport:SXF", "airport:CPH", "airport:HAU", "country:it", "country:ie", "airport:HAM", "airport:PIK", "region:SICILY", "city:OSLO", "region:NORTHERN_IRELAND", "city:MAASTRICHT", "city:BIRMINGHAM", "city:KARLSRUHE", "country:se", "city:WROCLAW", "city:ABERDEEN", "airport:NOC", "city:DUBLIN", "city:BRISTOL", "city:ATHENS", "airport:BOH", "city:COPENHAGEN", "airport:EMA", "region:PUGLIA", "city:SOUTHEND_ON_SEA", "connectingFlight:CIY:FCO", "city:CAGLIARI", "city:GOTHENBURG", "country:be", "city:POZNAN", "airport:BFS", "city:BREMEN"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 38.2822,
      "lng": -0.558156
    },
    "priority": 11,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LEI",
    "name": "Almeria",
    "categories": ["GLF", "FAM", "SEA"],
    "iataCode": "LEI",
    "seoName": "almeria",
    "cityCode": "ALMERIA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:CRL", "city:CHARLEROI", "country:gb", "airport:MAN", "region:ENGLAND", "country:ie", "airport:DUB", "country:be", "city:MANCHESTER", "city:LONDON", "city:DUBLIN"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 36.8439,
      "lng": -2.3701
    },
    "priority": 139,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:AMM",
    "name": "Amman Jordan",
    "categories": [],
    "iataCode": "AMM",
    "seoName": "amman",
    "cityCode": "AMMAN",
    "country": "Jordan",
    "currencyCode": "EUR",
    "routes": ["country:cy", "country:cz", "airport:OTP", "airport:BLQ", "city:BRUSSELS", "airport:BRU", "airport:PRG", "airport:KRK", "country:at", "airport:MLA", "country:mt", "country:it", "airport:WMI", "airport:BGY", "city:PAPHOS", "airport:VIE", "city:KRAKOW", "city:VILNIUS", "city:MILAN", "city:WARSAW", "country:hu", "city:VIENNA", "city:BUCHAREST", "city:MALTA", "airport:PFO", "city:BUDAPEST", "airport:VNO", "country:lt", "city:PRAGUE", "city:BOLOGNA", "country:pl", "country:ro", "airport:BUD", "country:be"],
    "countryCode": "jo",
    "base": false,
    "coords": {
      "lat": 31.9497,
      "lng": 35.9328
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:AMS",
    "name": "Amsterdam",
    "categories": [],
    "iataCode": "AMS",
    "seoName": "amsterdam",
    "cityCode": "AMSTERDAM",
    "country": "Netherlands",
    "currencyCode": "EUR",
    "routes": ["city:MALTA", "country:mt", "airport:MLA|Air Malta", "airport:AGP", "city:MALAGA", "country:es", "country:ie", "airport:DUB", "region:COSTA_DE_SOL", "city:DUBLIN"],
    "countryCode": "nl",
    "base": false,
    "coords": {
      "lat": 52.3105,
      "lng": 4.76827
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": ["Schipol", "Schiphol", "Holland", "Amsterdam Schiphol"]
  }, {
    "id": "airport:AOI",
    "name": "Ancona",
    "categories": ["FAM", "CUL"],
    "iataCode": "AOI",
    "seoName": "ancona",
    "cityCode": "ANCONA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:CRL", "airport:STN", "city:DUSSELDORF", "city:CHARLEROI", "airport:NRN", "country:gb", "region:ENGLAND", "country:be", "country:de", "city:LONDON"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 43.6163,
      "lng": 13.3623
    },
    "priority": 104,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:AQJ",
    "name": "Aqaba Jordan",
    "categories": [],
    "iataCode": "AQJ",
    "seoName": "aqaba",
    "cityCode": "AQABA",
    "country": "Jordan",
    "currencyCode": "EUR",
    "routes": ["city:SOFIA", "airport:CIA", "city:ATHENS", "country:bg", "city:ROME", "airport:SOF", "country:it", "country:gr", "airport:CGN", "airport:ATH", "city:COLOGNE", "country:de"],
    "countryCode": "jo",
    "base": false,
    "coords": {
      "lat": 29.364183,
      "lng": 35.010504
    },
    "priority": 101,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:ATH",
    "name": "Athens",
    "categories": ["SKI", "HEN", "FAM", "NIT", "CTY", "CUL", "OUT"],
    "iataCode": "ATH",
    "seoName": "athens",
    "cityCode": "ATHENS",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["city:CHARLEROI", "airport:LTN", "airport:KRK", "airport:CRL", "city:FRANKFURT", "city:KATOWICE", "country:gr", "region:ENGLAND", "city:MYKONOS", "airport:LCJ", "airport:BGY", "city:EINDHOVEN", "city:MILAN", "connectingFlight:IBZ:BGY", "country:hu", "city:BERLIN", "city:LAMEZIA", "city:NAPLES", "city:SOFIA", "city:BILLUND", "airport:KBP", "connectingFlight:BCN:BGY", "city:TRAPANI", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "airport:STN", "airport:KTW", "airport:OTP", "city:AQABA", "country:es", "connectingFlight:MAD:BGY", "city:THESSALONIKI", "connectingFlight:CTA:BGY", "airport:RZE", "country:mt", "airport:RAK", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "connectingFlight:BRI:BGY", "airport:FRA", "airport:HER", "connectingFlight:PRG:BGY", "airport:PMO", "airport:SKG", "city:MANCHESTER", "airport:CTA", "city:LONDON", "city:VILNIUS", "country:gb", "airport:EIN", "city:BRATISLAVA", "airport:FKB", "city:MALTA", "airport:AQJ", "city:ZARAGOZA", "city:PRAGUE", "country:nl", "city:PESCARA", "airport:GDN", "country:fi", "connectingFlight:AGP:BGY", "country:cz", "airport:LPP", "connectingFlight:NAP:BGY", "airport:BLQ", "airport:JTR", "city:SANTORINI", "city:BARI", "region:SARDINIA", "airport:BTS", "airport:BLL", "airport:POZ", "region:CANARY_ISLES", "connectingFlight:VLC:BGY", "city:BRINDISI", "connectingFlight:PSR:BGY", "city:RZESZOW", "airport:WMI", "city:KRAKOW", "country:ma", "city:CATANIA", "connectingFlight:CRL:BGY", "airport:SOF", "connectingFlight:BDS:BGY", "airport:JMK", "airport:FMM", "city:PALERMO", "city:WARSAW", "country:ua", "connectingFlight:CAG:BGY", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "city:BUCHAREST", "city:HERAKLION", "country:dk", "city:ROME", "city:MEMMINGEN", "city:LAPPEENRANTA", "country:lt", "region:COSTA_BRAVA", "connectingFlight:MAN:BGY", "airport:BUD", "city:GDANSK", "country:de", "connectingFlight:ZAZ:BGY", "connectingFlight:PMO:BGY", "city:IBIZA", "city:KIEV", "airport:SXF", "airport:MLA", "city:LANZAROTE", "country:it", "city:MALAGA", "city:ALICANTE", "country:ie", "connectingFlight:ALC:BGY", "region:SICILY", "country:sk", "connectingFlight:BRS:BGY", "city:KARLSRUHE", "city:WROCLAW", "city:MADRID", "city:DUBLIN", "city:BRISTOL", "region:CRETE", "airport:CIA", "country:jo", "country:bg", "region:PUGLIA", "connectingFlight:ACE:BGY", "connectingFlight:TPS:BGY", "city:BUDAPEST", "airport:VNO", "country:ro", "city:LODZ", "city:CAGLIARI", "country:be", "city:POZNAN"],
    "countryCode": "gr",
    "base": true,
    "coords": {
      "lat": 37.9364,
      "lng": 23.9445
    },
    "priority": 22,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BNX",
    "name": "Banja Luka",
    "categories": [],
    "iataCode": "BNX",
    "seoName": "banja_luka",
    "cityCode": "BANJA_LUKA",
    "country": "Bosnia & Herzegovina",
    "currencyCode": "EUR",
    "routes": ["airport:CRL", "city:CHARLEROI", "city:MEMMINGEN", "airport:FMM", "airport:NYO", "city:STOCKHOLM", "country:se", "country:be", "country:de"],
    "countryCode": "ba",
    "base": false,
    "coords": {
      "lat": 44.5629,
      "lng": 17.1731
    },
    "priority": 150,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BCN",
    "name": "Barcelona",
    "categories": ["SKI", "GLF", "HEN", "ROM", "FAM", "SPR", "NIT", "CTY", "CUL", "SEA"],
    "iataCode": "BCN",
    "seoName": "barcelona-el-prat",
    "cityCode": "BARCELONA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "connectingFlight:MLA:FCO", "airport:LTN", "airport:KRK", "connectingFlight:PDL:OPO", "city:SANTANDER", "airport:CRL", "airport:VGO", "city:FRANKFURT", "city:TENERIFE", "city:TURIN", "country:gr", "city:FARO", "region:ENGLAND", "connectingFlight:FAO:OPO", "city:STOCKHOLM", "airport:BGY", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:MILAN", "city:EDINBURGH", "connectingFlight:BRI:FCO", "airport:NYO", "country:hu", "city:BERLIN", "city:VIENNA", "city:LAMEZIA", "city:SOFIA", "city:NAPLES", "country:pt", "airport:KBP", "connectingFlight:TER:OPO", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:DUB", "airport:BHX", "city:GLASGOW", "airport:STN", "connectingFlight:PMO:FCO", "country:es", "airport:BRU", "city:THESSALONIKI", "airport:SCQ", "city:PARIS", "connectingFlight:CTA:BGY", "airport:NAP", "country:mt", "city:PALMA", "airport:RAK", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "connectingFlight:BRI:BGY", "airport:FRA", "city:LISBON", "airport:VIE", "connectingFlight:LIS:OPO", "city:MANCHESTER", "airport:LUX", "city:CARDIFF", "city:LONDON", "city:VILNIUS", "country:gb", "connectingFlight:SKG:BGY", "city:COLOGNE", "country:fr", "city:TERCEIRA", "airport:SDR", "airport:TFS", "city:SANTIAGO", "city:NADOR", "city:MALTA", "city:VIGO", "airport:TFN", "city:SEVILLE", "city:PRAGUE", "country:cz", "airport:SVQ", "airport:BLQ", "connectingFlight:MLA:BGY", "airport:LPL", "city:BRUSSELS", "city:BARI", "region:SARDINIA", "region:WALES", "airport:LPA", "region:CANARY_ISLES", "airport:MAN", "city:BRINDISI", "airport:VCE", "airport:WMI", "airport:MAH", "airport:FCO", "airport:BVA", "city:KRAKOW", "country:ma", "airport:GOT", "city:CATANIA", "airport:SOF", "airport:CGN", "connectingFlight:BDS:BGY", "city:VENICE", "country:ua", "city:PALERMO", "city:WARSAW", "connectingFlight:CAG:BGY", "airport:IBZ", "region:COSTA_DE_SOL", "city:COMISO", "city:MARRAKESH", "city:LIVERPOOL", "connectingFlight:CFU:BGY", "airport:NDR", "city:ROME", "connectingFlight:ATH:BGY", "country:lt", "country:lu", "airport:CWL", "airport:VLL", "airport:FUE", "city:MENORCA", "airport:BUD", "region:SCOTLAND", "country:de", "airport:OPO", "connectingFlight:CTA:FCO", "connectingFlight:PMO:BGY", "city:PONTA_DELGADA", "airport:EDI", "city:CORFU", "city:IBIZA", "city:PORTO", "airport:PRG", "city:KIEV", "airport:SXF", "country:at", "airport:MLA", "airport:FEZ", "country:it", "city:MALAGA", "city:FEZ", "country:ie", "airport:HAM", "airport:PIK", "region:SICILY", "city:JEREZ", "city:BIRMINGHAM", "country:se", "airport:XRY", "city:DUBLIN", "city:VALLADOLID", "city:ATHENS", "country:bg", "airport:EMA", "region:PUGLIA", "city:LUXEMBOURG", "city:BUDAPEST", "airport:VNO", "connectingFlight:CIY:FCO", "city:CAGLIARI", "city:GOTHENBURG", "region:AZORES", "country:be", "airport:TRN"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 41.2971,
      "lng": 2.07846
    },
    "priority": 4,
    "seasonalRoutes": [],
    "aliases": [],
    "weight": 1
  }, {
    "id": "airport:GRO",
    "name": "Barcelona Girona",
    "categories": ["SKI", "GLF", "HEN", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "SEA", "XMS"],
    "iataCode": "GRO",
    "seoName": "barcelona-girona",
    "cityCode": "GIRONA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:TALLINN", "city:CHARLEROI", "city:BOURNEMOUTH", "airport:ORK", "airport:LTN", "airport:KRK", "airport:CRL", "city:FRANKFURT", "country:gr", "region:ENGLAND", "airport:PSR", "city:EINDHOVEN", "city:EDINBURGH", "city:BERLIN", "city:KAUNAS", "city:BILLUND", "city:LEEDS", "country:pl", "airport:TLL", "airport:WRO", "airport:DUB", "airport:BHX", "city:PISA", "city:GLASGOW", "airport:STN", "airport:NRN", "airport:BRU", "airport:BRS", "city:THESSALONIKI", "airport:RIX", "city:PARIS", "country:mt", "airport:BRE", "airport:FRA", "region:TUSCANY", "country:ee", "city:MANCHESTER", "airport:SKG", "city:LONDON", "city:DUSSELDORF", "country:gb", "airport:EIN", "country:fr", "airport:KUN", "city:BRATISLAVA", "airport:FKB", "city:MALTA", "city:KNOCK", "country:nl", "city:PESCARA", "city:RABAT", "airport:RBA", "airport:HHN", "airport:TXL", "city:BRUSSELS", "airport:LPL", "region:SARDINIA", "airport:BTS", "airport:BLL", "airport:POZ", "airport:MAN", "airport:NCL", "airport:OMR", "city:KRAKOW", "airport:BVA", "airport:MST", "country:ma", "city:CORK", "airport:FMM", "city:LIVERPOOL", "country:dk", "country:lv", "city:MEMMINGEN", "country:lt", "city:BELFAST", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "airport:LBA", "airport:EDI", "city:ORADEA", "airport:MLA", "country:it", "country:ie", "airport:PIK", "airport:CAG", "region:NORTHERN_IRELAND", "country:sk", "city:MAASTRICHT", "city:KARLSRUHE", "city:BIRMINGHAM", "city:WROCLAW", "airport:NOC", "city:DUBLIN", "city:BRISTOL", "airport:PSA", "airport:BOH", "airport:EMA", "city:RIGA", "country:ro", "city:CAGLIARI", "country:be", "city:BREMEN", "city:POZNAN", "airport:BFS"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 41.901,
      "lng": 2.76055
    },
    "priority": 26,
    "seasonalRoutes": [],
    "aliases": ["Girona", "Barcelona Girona"],
    "weight": 2
  }, {
    "id": "airport:REU",
    "name": "Barcelona Reus",
    "categories": ["GLF", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "SEA", "OUT"],
    "iataCode": "REU",
    "seoName": "barcelona-reus",
    "cityCode": "BARCELONA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:HHN", "city:SHANNON", "city:CHARLEROI", "airport:LPL", "airport:ORK", "airport:BRS", "airport:CRL", "city:FRANKFURT", "airport:SEN", "airport:MAN", "region:ENGLAND", "country:ie", "city:MANCHESTER", "city:EINDHOVEN", "city:LONDON", "city:CORK", "country:gb", "airport:EIN", "city:BIRMINGHAM", "city:DUBLIN", "city:LIVERPOOL", "city:BRISTOL", "airport:EMA", "city:SOUTHEND_ON_SEA", "country:nl", "country:pl", "airport:SNN", "airport:GDN", "airport:DUB", "airport:BHX", "country:be", "city:GDANSK", "country:de"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 41.1474,
      "lng": 1.16717
    },
    "priority": 83,
    "seasonalRoutes": [],
    "aliases": ["Reus", "Barcelona Reus"],
    "weight": 3
  }, {
    "id": "airport:BRI",
    "name": "Bari",
    "categories": ["FAM", "SPR", "FST", "CUL", "SEA", "OUT"],
    "iataCode": "BRI",
    "seoName": "bari",
    "cityCode": "BARI",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:NUREMBERG", "connectingFlight:HAM:BGY", "airport:CRL", "city:FRANKFURT", "city:TENERIFE", "city:TURIN", "country:gr", "region:ENGLAND", "airport:BGY", "city:GRAN_CANARIA", "city:MILAN", "city:EDINBURGH", "connectingFlight:IBZ:BGY", "country:hu", "city:BERLIN", "country:pt", "connectingFlight:BCN:BGY", "connectingFlight:EDI:BGY", "city:BOLOGNA", "country:pl", "airport:DUB", "city:VALENCIA", "connectingFlight:LPA:BGY", "airport:STN", "city:PISA", "connectingFlight:PMO:FCO", "airport:NRN", "country:es", "city:THESSALONIKI", "connectingFlight:VNO:BGY", "city:PARIS", "connectingFlight:CGN:BGY", "country:mt", "city:TRIESTE", "city:LISBON", "connectingFlight:PRG:BGY", "region:TUSCANY", "city:MANCHESTER", "city:LONDON", "city:DUSSELDORF", "city:VILNIUS", "country:gb", "connectingFlight:SKG:BGY", "city:GENOA", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:FKB", "city:SANTIAGO", "city:MALTA", "connectingFlight:SCQ:BGY", "city:SEVILLE", "city:PRAGUE", "country:nl", "connectingFlight:LIS:BGY", "airport:VLC", "airport:HHN", "airport:SVQ", "country:cz", "airport:BLQ", "airport:TXL", "airport:LPL", "region:SARDINIA", "region:CANARY_ISLES", "airport:FCO", "airport:MAD", "city:KRAKOW", "airport:BVA", "airport:MST", "city:CATANIA", "city:VENICE", "city:PALERMO", "city:BARCELONA", "connectingFlight:TFS:BGY", "connectingFlight:BCN:FCO", "city:LIVERPOOL", "airport:NUE", "city:ROME", "airport:GOA", "country:lt", "region:COSTA_BRAVA", "connectingFlight:MAN:BGY", "airport:BUD", "region:SCOTLAND", "country:de", "connectingFlight:CTA:FCO", "connectingFlight:KRK:BGY", "city:IBIZA", "city:PORTO", "airport:PRG", "airport:SXF", "airport:MLA", "city:LANZAROTE", "country:it", "country:ie", "connectingFlight:BRE:BGY", "region:SICILY", "connectingFlight:OPO:BGY", "airport:CAG", "airport:TSF", "city:MAASTRICHT", "connectingFlight:BRS:BGY", "city:KARLSRUHE", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "airport:PSA", "connectingFlight:ACE:BGY", "airport:BOD", "city:BUDAPEST", "airport:TRS", "city:CAGLIARI", "country:be", "city:BREMEN", "airport:TRN"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 41.1389,
      "lng": 16.7606
    },
    "priority": 18,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BSL",
    "name": "Basel",
    "categories": ["SKI", "HEN", "FAM", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "BSL",
    "seoName": "basel",
    "cityCode": "BASEL",
    "country": "Switzerland",
    "currencyCode": "CHF",
    "routes": ["airport:STN", "city:PALMA", "airport:PMI", "country:gb", "region:ENGLAND", "country:es", "country:ie", "airport:DUB", "city:DUBLIN", "city:LONDON"],
    "countryCode": "ch",
    "base": false,
    "coords": {
      "lat": 47.5896,
      "lng": 7.52991
    },
    "priority": 120,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BFS",
    "name": "Belfast International",
    "categories": [],
    "iataCode": "BFS",
    "seoName": "belfast-international",
    "cityCode": "BELFAST",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["airport:STN", "country:es", "airport:KRK", "airport:GRO", "airport:SXF", "airport:MLA", "city:LANZAROTE", "country:mt", "city:TENERIFE", "region:CANARY_ISLES", "country:it", "city:MALAGA", "airport:MAN", "city:ALICANTE", "city:FARO", "region:ENGLAND", "airport:ALC", "airport:WMI", "airport:BGY", "airport:FAO", "city:MANCHESTER", "city:LONDON", "city:KRAKOW", "country:gb", "city:MILAN", "airport:AGP", "city:WARSAW", "airport:ACE", "airport:TFS", "city:BERLIN", "city:WROCLAW", "region:COSTA_DE_SOL", "city:MALTA", "country:pt", "country:pl", "region:COSTA_BRAVA", "airport:WRO", "airport:GDN", "city:GIRONA", "city:GDANSK", "country:de"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 54.6575,
      "lng": -6.2158
    },
    "priority": 300,
    "seasonalRoutes": [],
    "aliases": ["UK", "Northern Ireland", "International"]
  }, {
    "id": "airport:EGC",
    "name": "Bergerac",
    "categories": ["FAM", "CUL"],
    "iataCode": "EGC",
    "seoName": "bergerac",
    "cityCode": "BERGERAC",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:CHARLEROI", "country:gb", "airport:LPL", "airport:BRS", "city:BIRMINGHAM", "city:LIVERPOOL", "airport:CRL", "city:BRISTOL", "airport:EMA", "region:ENGLAND", "country:be", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 44.8253,
      "lng": 0.518611
    },
    "priority": 107,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SXF",
    "name": "Berlin Schönefeld",
    "categories": ["FAM", "FST", "CTY", "CUL"],
    "iataCode": "SXF",
    "seoName": "berlin",
    "cityCode": "BERLIN",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:INI", "airport:KRK", "city:SANTANDER", "city:VERONA", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "airport:KIR", "airport:BGY", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:MILAN", "city:EDINBURGH", "connectingFlight:IBZ:BGY", "country:hu", "city:BRNO", "city:LAMEZIA", "city:NAPLES", "city:BILLUND", "city:SOFIA", "country:pt", "airport:TLS", "airport:KBP", "country:hr", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:DUB", "city:VALENCIA", "city:KERRY", "airport:STN", "city:PISA", "city:GLASGOW", "city:ZADAR", "airport:OTP", "country:es", "airport:BRU", "city:THESSALONIKI", "airport:RIX", "airport:BRQ", "airport:ZAD", "city:NIS", "country:mt", "city:PALMA", "airport:RAK", "airport:GLA", "airport:BRI", "airport:FAO", "city:LISBON", "airport:PMO", "region:TUSCANY", "airport:SKG", "city:MANCHESTER", "airport:CTA", "city:LONDON", "airport:BCN", "city:VILNIUS", "country:gb", "city:COLOGNE", "country:fr", "airport:SDR", "airport:TFS", "city:MALTA", "city:SEVILLE", "city:PESCARA", "airport:VRN", "airport:VLC", "airport:SVQ", "country:cz", "connectingFlight:NAP:BGY", "airport:BLQ", "city:BRUSSELS", "city:TOULOUSE", "city:BARI", "region:SARDINIA", "airport:BLL", "airport:LPA", "region:CANARY_ISLES", "city:BRINDISI", "airport:MAN", "connectingFlight:PSR:BGY", "airport:TGD", "airport:MAD", "city:KRAKOW", "country:ma", "city:CATANIA", "airport:CGN", "airport:SOF", "connectingFlight:BDS:BGY", "country:me", "city:VENICE", "city:PALERMO", "country:ua", "airport:ACE", "connectingFlight:CAG:BGY", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "city:BUCHAREST", "country:dk", "city:ROME", "country:lv", "country:lt", "city:EILAT", "airport:FUE", "region:COSTA_BRAVA", "airport:VDA", "city:BELFAST", "airport:BUD", "region:SCOTLAND", "country:de", "city:PODGORICA", "airport:OPO", "airport:EDI", "city:IBIZA", "city:PORTO", "city:KIEV", "airport:MLA", "city:LANZAROTE", "city:MALAGA", "country:it", "city:ALICANTE", "airport:ALC", "airport:ATH", "airport:LIS", "country:ie", "country:il", "region:SICILY", "region:NORTHERN_IRELAND", "airport:TSF", "city:BIRMINGHAM", "city:DUBLIN", "city:MADRID", "airport:PSA", "airport:CIA", "city:ATHENS", "country:bg", "region:PUGLIA", "airport:EMA", "airport:VNO", "city:BUDAPEST", "city:RIGA", "country:ro", "city:CAGLIARI", "country:be", "airport:BFS", "country:rs"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 52.38,
      "lng": 13.5225
    },
    "priority": 60,
    "seasonalRoutes": [],
    "aliases": ["Schonefeld", "Berlin Schonefeld"]
  }, {
    "id": "airport:TXL",
    "name": "Berlin Tegel",
    "categories": [],
    "iataCode": "TXL",
    "seoName": "berlin tegel",
    "cityCode": "BERLIN",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:EFL", "city:BARI", "airport:GRO", "airport:LPA", "city:KEFALONIA", "region:CANARY_ISLES", "city:TENERIFE", "country:gr", "city:BRINDISI", "city:FARO", "city:FUERTEVENTURA", "city:PULA", "city:GRAN_CANARIA", "country:ma", "airport:PMI", "city:MILAN", "airport:AGP", "airport:ACE", "airport:IBZ", "region:COSTA_DE_SOL", "city:MARRAKESH", "city:HERAKLION", "city:NAPLES", "country:pt", "airport:RHO", "country:hr", "airport:FUE", "region:COSTA_BRAVA", "airport:BDS", "airport:CFU", "city:CORFU", "city:IBIZA", "country:es", "airport:MXP", "city:RIJEKA", "airport:NAP", "city:LANZAROTE", "city:PALMA", "airport:RAK", "airport:BRI", "country:it", "city:MALAGA", "city:ALICANTE", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:KGS", "airport:ALC", "airport:HER", "city:KOS", "airport:FAO", "city:RHODES", "city:PAPHOS", "airport:PUY", "airport:TFS", "region:CRETE", "airport:PFO", "region:PUGLIA", "airport:RJK", "city:GIRONA"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 52.3335,
      "lng": 13.1716
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": ["Tegel"]
  }, {
    "id": "airport:BZR",
    "name": "Beziers",
    "categories": ["FAM", "SPR", "FST", "CUL", "SEA", "OUT"],
    "iataCode": "BZR",
    "seoName": "beziers",
    "cityCode": "BEZIERS",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:BVA", "airport:STN", "city:DUSSELDORF", "country:gb", "airport:NRN", "airport:EDI", "city:EDINBURGH", "airport:LTN", "country:fr", "airport:BRS", "airport:NYO", "country:se", "city:PARIS", "city:BRISTOL", "airport:MAN", "region:ENGLAND", "city:STOCKHOLM", "city:MANCHESTER", "region:SCOTLAND", "country:de", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.3235,
      "lng": 3.3539
    },
    "priority": 95,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BIQ",
    "name": "Biarritz",
    "categories": ["HEN", "FAM", "FST", "CTY", "SEA"],
    "iataCode": "BIQ",
    "seoName": "biarritz",
    "cityCode": "BIARRITZ",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:CRL", "airport:STN", "city:CHARLEROI", "country:gb", "region:ENGLAND", "country:ie", "airport:DUB", "country:be", "city:DUBLIN", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.4684,
      "lng": -1.52332
    },
    "priority": 109,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BIO",
    "name": "Bilbao",
    "categories": [],
    "iataCode": "BIO",
    "seoName": "bilbao",
    "cityCode": "BILBAO",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:SEN", "country:gb", "city:SOUTHEND_ON_SEA", "region:ENGLAND"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 43.3011,
      "lng": -2.91061
    },
    "priority": 198,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BLL",
    "name": "Billund",
    "categories": ["FAM", "SPR", "CTY", "CUL", "OUT"],
    "iataCode": "BLL",
    "seoName": "billund",
    "cityCode": "BILLUND",
    "country": "Denmark",
    "currencyCode": "DKK",
    "routes": ["airport:STN", "city:PISA", "country:cz", "airport:EDI", "country:es", "airport:PRG", "airport:GRO", "airport:SXF", "airport:MLA", "city:PALMA", "country:mt", "airport:POZ", "country:it", "country:gr", "city:ALICANTE", "city:MALAGA", "region:ENGLAND", "airport:ALC", "airport:ATH", "airport:BGY", "region:TUSCANY", "city:LONDON", "airport:PMI", "country:gb", "city:MILAN", "airport:AGP", "city:EDINBURGH", "country:hu", "city:BERLIN", "region:COSTA_DE_SOL", "airport:PSA", "city:MALTA", "airport:CIA", "city:ATHENS", "city:ROME", "city:BUDAPEST", "city:PRAGUE", "country:pl", "region:COSTA_BRAVA", "airport:BUD", "city:GIRONA", "region:SCOTLAND", "city:POZNAN", "country:de"],
    "countryCode": "dk",
    "base": true,
    "coords": {
      "lat": 55.7403,
      "lng": 9.15178
    },
    "priority": 92,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BHX",
    "name": "Birmingham",
    "categories": ["FAM", "CTY", "OUT", "XMS"],
    "iataCode": "BHX",
    "seoName": "birmingham",
    "cityCode": "BIRMINGHAM",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:PERPIGNAN", "airport:GRO", "airport:KRK", "airport:BTS", "city:VERONA", "airport:LPA", "region:CANARY_ISLES", "city:TENERIFE", "city:KATOWICE", "country:gr", "city:FARO", "airport:WMI", "airport:PGF", "airport:MAD", "city:FUERTEVENTURA", "city:KRAKOW", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "airport:SOF", "airport:ACE", "city:WARSAW", "airport:IBZ", "region:COSTA_DE_SOL", "city:BARCELONA", "city:SOFIA", "country:pt", "airport:MJV", "country:lt", "airport:FUE", "region:COSTA_BRAVA", "country:pl", "airport:DUB", "airport:CFU", "city:GDANSK", "city:BYDGOSZCZ", "airport:OPO", "airport:KTW", "city:MURCIA", "airport:CHQ", "city:CORFU", "city:PORTO", "city:IBIZA", "country:es", "airport:MLA", "city:CHANIA", "airport:REU", "city:LANZAROTE", "country:mt", "city:PALMA", "city:MALAGA", "airport:RMU", "city:ALICANTE", "country:it", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ALC", "country:ie", "airport:FAO", "airport:BZG", "airport:BCN", "city:VILNIUS", "country:sk", "country:fr", "airport:TFS", "city:BRATISLAVA", "city:MADRID", "city:DUBLIN", "city:MALTA", "region:CRETE", "country:bg", "airport:VNO", "city:GIRONA", "airport:GDN", "airport:VRN"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 52.4539,
      "lng": -1.74803
    },
    "priority": 57,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB"]
  }, {
    "id": "airport:BJV",
    "name": "Bodrum",
    "categories": [],
    "iataCode": "BJV",
    "seoName": "bodrum",
    "cityCode": "BODRUM",
    "country": "Turkey",
    "currencyCode": "EUR",
    "routes": ["country:ie", "airport:DUB", "city:DUBLIN"],
    "countryCode": "tr",
    "base": false,
    "coords": {
      "lat": 37.2506,
      "lng": 27.6642
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BLQ",
    "name": "Bologna",
    "categories": ["SKI", "FAM", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "BLQ",
    "seoName": "bologna",
    "cityCode": "BOLOGNA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:CHARLEROI", "airport:CRV", "airport:LTN", "airport:KRK", "airport:CRL", "airport:VGO", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "connectingFlight:FAO:OPO", "city:MYKONOS", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:EDINBURGH", "city:BERLIN", "city:VIENNA", "city:LAMEZIA", "city:KAUNAS", "city:NAPLES", "country:pt", "airport:RHO", "city:ALGHERO", "city:TRAPANI", "country:pl", "airport:WRO", "airport:DUB", "city:VALENCIA", "airport:STN", "airport:OTP", "airport:AHO", "country:es", "city:THESSALONIKI", "airport:BRS", "city:PARIS", "city:CHANIA", "airport:NAP", "country:mt", "city:PALMA", "city:MARSEILLE", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "city:RHODES", "city:LISBON", "airport:VIE", "airport:PMO", "airport:SKG", "city:MANCHESTER", "city:LONDON", "airport:CTA", "airport:BCN", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:KUN", "airport:SUF", "city:BORDEAUX", "airport:TFS", "city:BRATISLAVA", "city:MALTA", "city:VIGO", "city:SEVILLE", "city:PRAGUE", "country:nl", "airport:STR", "airport:VLC", "airport:MRS", "airport:SVQ", "country:cz", "city:BARI", "region:SARDINIA", "airport:BTS", "airport:LPA", "region:CANARY_ISLES", "city:BRINDISI", "airport:MAN", "airport:WMI", "airport:MAD", "airport:BVA", "city:KRAKOW", "city:CATANIA", "airport:CGN", "airport:JMK", "airport:ACE", "city:PALERMO", "city:WARSAW", "airport:IBZ", "city:BARCELONA", "region:COSTA_DE_SOL", "city:BUCHAREST", "country:dk", "country:lt", "airport:TPS", "region:COSTA_BRAVA", "city:STUTTGART", "city:AMMAN", "airport:BDS", "airport:CFU", "region:SCOTLAND", "country:de", "airport:OPO", "airport:CHQ", "airport:EDI", "city:CORFU", "city:IBIZA", "city:PORTO", "airport:PRG", "airport:SXF", "country:at", "airport:MLA", "city:LANZAROTE", "airport:CPH", "country:it", "city:MALAGA", "city:ALICANTE", "airport:ALC", "airport:ATH", "airport:LIS", "country:ie", "region:SICILY", "airport:CAG", "country:sk", "airport:AMM", "city:WROCLAW", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "city:CROTONE", "city:ATHENS", "region:CRETE", "country:jo", "city:COPENHAGEN", "region:PUGLIA", "airport:BOD", "country:ro", "city:CAGLIARI", "country:be"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 44.5354,
      "lng": 11.2887
    },
    "priority": 14,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BOD",
    "name": "Bordeaux",
    "categories": ["ROM", "FAM", "SPR", "CTY", "CUL"],
    "iataCode": "BOD",
    "seoName": "bordeaux",
    "cityCode": "BORDEAUX",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "airport:MRS", "airport:SVQ", "city:CHARLEROI", "airport:BLQ", "city:TANGIER", "airport:ORK", "city:BARI", "airport:KRK", "airport:NTE", "airport:CRL", "country:gr", "airport:MAN", "region:ENGLAND", "city:MYKONOS", "airport:BGY", "city:KRAKOW", "country:ma", "city:CORK", "city:MILAN", "airport:CGN", "airport:JMK", "city:EDINBURGH", "city:VENICE", "city:MARRAKESH", "city:NAPLES", "country:dk", "country:pt", "city:ROME", "city:BOLOGNA", "country:pl", "city:VALENCIA", "airport:DUB", "region:SCOTLAND", "airport:OZZ", "country:de", "airport:TNG", "airport:STN", "airport:OPO", "airport:EDI", "city:PORTO", "country:es", "airport:NAP", "city:MARSEILLE", "airport:FEZ", "airport:CPH", "airport:RAK", "airport:BRI", "country:it", "city:FEZ", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:LIS", "country:ie", "city:LISBON", "city:OUARZAZATE", "city:MANCHESTER", "city:LONDON", "country:gb", "airport:TSF", "city:COLOGNE", "country:fr", "city:NANTES", "city:DUBLIN", "airport:CIA", "city:COPENHAGEN", "region:PUGLIA", "city:SEVILLE", "country:be"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 44.8283,
      "lng": -0.715556
    },
    "priority": 91,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BOH",
    "name": "Bournemouth",
    "categories": ["FAM", "SPR", "CTY", "CUL", "XMS"],
    "iataCode": "BOH",
    "seoName": "bournemouth",
    "cityCode": "BOURNEMOUTH",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["country:cy", "country:cz", "city:MURCIA", "country:es", "airport:PRG", "airport:GRO", "airport:KRK", "airport:MLA", "airport:LPA", "country:mt", "city:PALMA", "region:CANARY_ISLES", "city:TENERIFE", "city:MALAGA", "airport:RMU", "city:ALICANTE", "city:FARO", "airport:ALC", "country:ie", "airport:FAO", "city:PAPHOS", "city:KRAKOW", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "airport:TFS", "region:COSTA_DE_SOL", "city:DUBLIN", "city:MALTA", "country:pt", "airport:MJV", "airport:PFO", "city:PRAGUE", "region:COSTA_BRAVA", "country:pl", "airport:DUB", "city:GIRONA"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 50.78,
      "lng": -1.8425
    },
    "priority": 121,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB"]
  }, {
    "id": "airport:BTS",
    "name": "Bratislava",
    "categories": ["HEN", "FAM", "SPR", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "BTS",
    "seoName": "bratislava",
    "cityCode": "BRATISLAVA",
    "country": "Slovakia",
    "currencyCode": "EUR",
    "routes": ["country:cy", "city:CHARLEROI", "airport:BLQ", "airport:DLM", "region:SARDINIA", "airport:GRO", "airport:INI", "airport:CRL", "connectingFlight:VLC:BGY", "country:gr", "airport:MAN", "region:ENGLAND", "airport:BGY", "city:EINDHOVEN", "airport:MAD", "airport:BVA", "country:ma", "city:CATANIA", "airport:PMI", "airport:AGP", "city:MILAN", "city:EDINBURGH", "country:ua", "connectingFlight:CAG:BGY", "region:COSTA_DE_SOL", "city:MARRAKESH", "country:pt", "city:ROME", "city:ALGHERO", "airport:KBP", "city:EILAT", "city:LEEDS", "country:tr", "city:BOLOGNA", "region:COSTA_BRAVA", "airport:VDA", "airport:DUB", "city:VALENCIA", "airport:BHX", "city:DALAMAN", "airport:CFU", "region:SCOTLAND", "airport:STN", "airport:LBA", "airport:EDI", "city:CORFU", "airport:AHO", "city:PORTO", "country:es", "city:THESSALONIKI", "city:KIEV", "connectingFlight:CTA:BGY", "airport:MLA", "city:PARIS", "city:NIS", "city:PALMA", "country:mt", "airport:RAK", "country:it", "city:MALAGA", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ATH", "country:ie", "city:PAPHOS", "country:il", "airport:SKG", "city:MANCHESTER", "city:LONDON", "region:SICILY", "connectingFlight:OPO:BGY", "airport:EIN", "country:gb", "city:BIRMINGHAM", "country:fr", "city:DUBLIN", "city:MADRID", "airport:BOJ", "city:MALTA", "city:ATHENS", "airport:CIA", "country:bg", "airport:PFO", "city:BURGAS", "country:nl", "city:GIRONA", "city:CAGLIARI", "country:be", "country:rs"],
    "countryCode": "sk",
    "base": true,
    "coords": {
      "lat": 48.1702,
      "lng": 17.2127
    },
    "priority": 59,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BRE",
    "name": "Bremen",
    "categories": ["FAM", "SPR", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "BRE",
    "seoName": "bremen",
    "cityCode": "BREMEN",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["city:TALLINN", "city:BARI", "airport:GRO", "region:SARDINIA", "city:TENERIFE", "region:CANARY_ISLES", "connectingFlight:VLC:BGY", "country:gr", "city:FARO", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "city:FUERTEVENTURA", "country:ma", "airport:PMI", "city:CATANIA", "city:TAMPERE", "airport:AGP", "city:MILAN", "city:VENICE", "city:PALERMO", "airport:NYO", "connectingFlight:CAG:BGY", "region:COSTA_DE_SOL", "city:LAMEZIA", "city:NAPLES", "country:pt", "country:hr", "country:lv", "country:lt", "city:EILAT", "city:TRAPANI", "connectingFlight:SUF:BGY", "airport:FUE", "region:COSTA_BRAVA", "airport:VDA", "airport:TLL", "airport:DUB", "city:VALENCIA", "airport:STN", "airport:OPO", "city:ZADAR", "connectingFlight:PMO:BGY", "airport:CHQ", "city:PORTO", "country:es", "city:THESSALONIKI", "airport:RIX", "city:CHANIA", "connectingFlight:CTA:BGY", "airport:NAP", "airport:ZAD", "city:PALMA", "airport:FEZ", "city:ALICANTE", "country:it", "city:FEZ", "city:MALAGA", "airport:TMP", "airport:ALC", "connectingFlight:BRI:BGY", "airport:LIS", "country:ie", "airport:FAO", "city:LISBON", "country:il", "country:ee", "airport:SKG", "city:LONDON", "region:SICILY", "city:VILNIUS", "country:gb", "airport:TSF", "airport:TFS", "country:se", "city:DUBLIN", "region:CRETE", "region:PUGLIA", "airport:VNO", "connectingFlight:TPS:BGY", "city:RIGA", "city:GIRONA", "city:CAGLIARI", "country:fi"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 53.0475,
      "lng": 8.78667
    },
    "priority": 66,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BES",
    "name": "Brest",
    "categories": ["FAM", "SPR", "CTY", "OUT"],
    "iataCode": "BES",
    "seoName": "brest",
    "cityCode": "BREST",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:MRS", "city:MARSEILLE", "airport:FEZ", "country:ma", "airport:SEN", "city:FEZ", "country:gb", "city:SOUTHEND_ON_SEA", "region:ENGLAND", "country:fr"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 48.4479,
      "lng": -4.41854
    },
    "priority": 135,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BDS",
    "name": "Brindisi",
    "categories": ["FAM", "SPR", "CTY", "CUL", "SEA", "OUT"],
    "iataCode": "BDS",
    "seoName": "brindisi",
    "cityCode": "BRINDISI",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["country:cz", "city:HAMBURG", "city:CHARLEROI", "airport:BLQ", "connectingFlight:DUB:BGY", "airport:TXL", "connectingFlight:HAM:BGY", "airport:CRL", "city:VERONA", "city:FRANKFURT", "region:CANARY_ISLES", "city:TENERIFE", "city:TURIN", "country:gr", "airport:MAN", "region:ENGLAND", "airport:BGY", "airport:FCO", "city:EINDHOVEN", "airport:BVA", "city:KRAKOW", "city:GRAN_CANARIA", "connectingFlight:CRL:BGY", "city:MILAN", "city:VENICE", "city:EDINBURGH", "airport:FMM", "connectingFlight:IBZ:BGY", "country:hu", "city:BERLIN", "city:VIENNA", "city:BARCELONA", "connectingFlight:TFS:BGY", "country:pt", "city:ROME", "connectingFlight:ATH:BGY", "city:MEMMINGEN", "connectingFlight:BCN:BGY", "connectingFlight:EDI:BGY", "country:lt", "city:BOLOGNA", "region:COSTA_BRAVA", "country:pl", "connectingFlight:SXF:BGY", "region:SCOTLAND", "connectingFlight:LPA:BGY", "country:de", "city:PISA", "airport:STN", "connectingFlight:KRK:BGY", "city:IBIZA", "city:PORTO", "country:es", "connectingFlight:VNO:BGY", "city:PARIS", "country:at", "connectingFlight:CGN:BGY", "city:LANZAROTE", "country:it", "city:ALICANTE", "airport:FRA", "country:ie", "connectingFlight:PRG:BGY", "city:LISBON", "airport:VIE", "region:TUSCANY", "connectingFlight:ALC:BGY", "city:MANCHESTER", "city:LONDON", "city:VILNIUS", "connectingFlight:OPO:BGY", "country:gb", "airport:EIN", "airport:TSF", "city:COLOGNE", "connectingFlight:BRS:BGY", "country:fr", "city:DUBLIN", "city:SANTIAGO", "city:BRISTOL", "airport:PSA", "connectingFlight:SCQ:BGY", "city:ATHENS", "connectingFlight:ACE:BGY", "city:BUDAPEST", "city:PRAGUE", "connectingFlight:BUD:BGY", "country:nl", "connectingFlight:LIS:BGY", "country:be", "airport:VRN", "airport:TRN"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 40.6576,
      "lng": 17.947
    },
    "priority": 37,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BRS",
    "name": "Bristol",
    "categories": ["FAM", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "BRS",
    "seoName": "bristol",
    "cityCode": "BRISTOL",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:BERGERAC", "airport:GRO", "airport:KRK", "city:BEZIERS", "city:TENERIFE", "country:gr", "city:FARO", "airport:BGY", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "airport:AGP", "country:hu", "airport:EGC", "city:LAMEZIA", "city:SOFIA", "city:NAPLES", "city:KAUNAS", "country:pt", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "airport:OTP", "city:SHANNON", "country:es", "connectingFlight:CTA:BGY", "city:CHANIA", "airport:RZE", "country:mt", "city:PALMA", "airport:BZR", "connectingFlight:BRI:BGY", "airport:FAO", "city:COLOGNE", "country:fr", "airport:KUN", "airport:TFS", "city:MALTA", "city:KNOCK", "city:SEVILLE", "airport:GDN", "airport:VLC", "airport:SVQ", "connectingFlight:NAP:BGY", "airport:BLQ", "city:BARI", "region:SARDINIA", "airport:LPA", "airport:POZ", "region:CANARY_ISLES", "city:BRINDISI", "city:LIMOGES", "city:RZESZOW", "airport:VCE", "airport:WMI", "city:KRAKOW", "city:CATANIA", "airport:LIG", "airport:SOF", "airport:CGN", "connectingFlight:BDS:BGY", "city:VENICE", "city:PALERMO", "airport:ACE", "city:WARSAW", "connectingFlight:CAG:BGY", "airport:IBZ", "region:COSTA_DE_SOL", "city:BARCELONA", "city:BUCHAREST", "connectingFlight:ATH:BGY", "country:lt", "region:COSTA_BRAVA", "airport:SNN", "airport:BUD", "city:GDANSK", "country:de", "connectingFlight:PMO:BGY", "airport:CHQ", "city:IBIZA", "airport:MLA", "airport:REU", "city:LANZAROTE", "city:ALICANTE", "country:it", "city:MALAGA", "airport:ALC", "country:ie", "region:SICILY", "city:WROCLAW", "airport:NOC", "city:DUBLIN", "city:ATHENS", "region:CRETE", "country:bg", "region:PUGLIA", "city:BUDAPEST", "country:ro", "city:GIRONA", "city:CAGLIARI", "city:POZNAN"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 51.3827,
      "lng": -2.71909
    },
    "priority": 62,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB"]
  }, {
    "id": "airport:BVE",
    "name": "Brive",
    "categories": ["FAM", "SPR", "FST", "CUL", "OUT"],
    "iataCode": "BVE",
    "seoName": "brive",
    "cityCode": "BRIVE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:OPO", "country:pt", "country:gb", "city:PORTO", "region:ENGLAND", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 45.1508,
      "lng": 1.46917
    },
    "priority": 165,
    "seasonalRoutes": [],
    "aliases": ["Souillac", "Brive Souillac"]
  }, {
    "id": "airport:BRQ",
    "name": "Brno",
    "categories": ["FAM", "FST", "CTY", "CUL"],
    "iataCode": "BRQ",
    "seoName": "brno",
    "cityCode": "BRNO",
    "country": "Czech Republic",
    "currencyCode": "CZK",
    "routes": ["airport:STN", "country:gb", "city:MILAN", "country:it", "region:ENGLAND", "airport:BGY", "airport:SXF", "city:BERLIN", "country:de", "city:LONDON"],
    "countryCode": "cz",
    "base": false,
    "coords": {
      "lat": 49.1513,
      "lng": 16.6944
    },
    "priority": 124,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BRU",
    "name": "Brussels",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "BRU",
    "seoName": "brussels-zaventem",
    "cityCode": "BRUSSELS",
    "country": "Belgium",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:VLC", "airport:GRO", "connectingFlight:PDL:OPO", "city:FARO", "connectingFlight:FAO:OPO", "airport:FCO", "airport:MAD", "country:ma", "city:CATANIA", "airport:PMI", "city:MILAN", "airport:AGP", "city:VENICE", "city:PALERMO", "city:BERLIN", "city:BARCELONA", "region:COSTA_DE_SOL", "city:LARNACA", "city:MARRAKESH", "country:pt", "city:ROME", "region:COSTA_BRAVA", "city:VALENCIA", "city:AMMAN", "airport:DUB", "country:de", "city:PISA", "airport:OPO", "connectingFlight:PMO:FCO", "connectingFlight:CTA:FCO", "city:PONTA_DELGADA", "city:PORTO", "country:es", "airport:MXP", "airport:SXF", "city:PALMA", "airport:RAK", "country:it", "city:ALICANTE", "city:MALAGA", "airport:ALC", "airport:LIS", "country:ie", "city:LISBON", "region:TUSCANY", "region:SICILY", "airport:BCN", "airport:LCA", "airport:TSF", "airport:AMM", "city:MADRID", "city:DUBLIN", "airport:PSA", "country:jo", "city:GIRONA", "region:AZORES"],
    "countryCode": "be",
    "base": true,
    "coords": {
      "lat": 50.9014,
      "lng": 4.48444
    },
    "priority": 53,
    "seasonalRoutes": [],
    "aliases": [],
    "weight": 2
  }, {
    "id": "airport:CRL",
    "name": "Brussels Charleroi",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "CRL",
    "seoName": "brussels-charleroi",
    "cityCode": "CHARLEROI",
    "country": "Belgium",
    "currencyCode": "EUR",
    "routes": ["city:FIGARI", "city:CARCASSONNE", "city:BERGERAC", "city:TANGIER", "airport:KRK", "city:SANTANDER", "country:gr", "city:PERUGIA", "city:STOCKHOLM", "city:LA_ROCHELLE", "airport:PMI", "city:EDINBURGH", "airport:CCF", "country:hu", "airport:NYO", "airport:EGC", "city:SOFIA", "airport:AOI", "country:hr", "city:ALGHERO", "connectingFlight:SUF:BGY", "city:BOLOGNA", "airport:DUB", "city:VALENCIA", "country:es", "city:RIJEKA", "connectingFlight:CTA:BGY", "airport:ZAD", "city:PALMA", "airport:GLA", "airport:RAK", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "city:RHODES", "airport:PMO", "airport:LEI", "airport:BCN", "city:VILNIUS", "country:gb", "country:fr", "airport:SUF", "city:BORDEAUX", "airport:SDR", "airport:TFS", "city:MALTA", "city:SEVILLE", "city:ZARAGOZA", "airport:ZAZ", "city:RABAT", "airport:RBA", "airport:MRS", "connectingFlight:NAP:BGY", "airport:BLQ", "city:BARI", "region:SARDINIA", "airport:LPA", "city:BRINDISI", "airport:MAN", "airport:PGF", "airport:MAD", "country:ma", "airport:SOF", "country:me", "city:VENICE", "city:MARRAKESH", "city:BUCHAREST", "city:ROME", "airport:NDR", "country:lv", "country:lt", "airport:FUE", "airport:VDA", "city:AGADIR", "city:PODGORICA", "airport:BNX", "connectingFlight:PMO:BGY", "airport:EDI", "city:IBIZA", "airport:LRH", "airport:FEZ", "airport:CPH", "country:it", "airport:ALC", "country:ie", "country:il", "region:SICILY", "airport:CAG", "airport:TSF", "city:WROCLAW", "city:MADRID", "region:PUGLIA", "city:BUDAPEST", "airport:BOD", "city:CAGLIARI", "city:BANJA_LUKA", "airport:TRN", "airport:GRO", "city:VARNA", "city:VERONA", "city:TENERIFE", "city:TURIN", "city:FARO", "airport:CIY", "airport:BGY", "airport:PSR", "city:OUJDA", "city:FUERTEVENTURA", "city:PULA", "city:GRAN_CANARIA", "airport:BIQ", "city:MILAN", "airport:AGP", "airport:PDV", "city:LAMEZIA", "city:NAPLES", "country:pt", "airport:AGA", "airport:TLS", "airport:RHO", "city:RODEZ", "country:pl", "city:ANCONA", "airport:WRO", "airport:TNG", "city:GLASGOW", "city:PISA", "city:ZADAR", "airport:OTP", "airport:MPL", "airport:VAR", "airport:AHO", "city:THESSALONIKI", "airport:RIX", "city:CHANIA", "city:BIARRITZ", "airport:NAP", "country:mt", "city:MARSEILLE", "airport:FAO", "airport:PUY", "city:LISBON", "region:TUSCANY", "airport:PEG", "airport:SKG", "city:MANCHESTER", "city:ALMERIA", "city:BRATISLAVA", "city:NADOR", "airport:OUD", "city:PRAGUE", "airport:FSC", "city:PESCARA", "airport:RJK", "airport:VRN", "airport:VLC", "airport:SVQ", "country:cz", "city:PERPIGNAN", "city:TOULOUSE", "airport:BTS", "region:CANARY_ISLES", "airport:WMI", "airport:TGD", "city:KRAKOW", "city:MONTPELLIER", "city:CATANIA", "connectingFlight:BDS:BGY", "airport:RDZ", "city:PALERMO", "city:WARSAW", "airport:ACE", "airport:IBZ", "city:BARCELONA", "region:COSTA_DE_SOL", "region:CORSICA", "city:COMISO", "country:dk", "city:EILAT", "connectingFlight:ATH:BGY", "region:COSTA_BRAVA", "airport:BUD", "airport:BDS", "airport:CFU", "region:SCOTLAND", "airport:OPO", "airport:CHQ", "city:CORFU", "city:PORTO", "airport:PRG", "airport:FNI", "airport:MLA", "airport:REU", "city:LANZAROTE", "city:FEZ", "city:MALAGA", "city:ALICANTE", "city:PLOVDIV", "airport:ATH", "airport:LIS", "country:sk", "city:NIMES", "country:se", "city:DUBLIN", "airport:PSA", "airport:CIA", "region:CRETE", "city:ATHENS", "country:bg", "city:COPENHAGEN", "airport:VNO", "city:RIGA", "country:ba", "country:ro", "city:GIRONA"],
    "countryCode": "be",
    "base": true,
    "coords": {
      "lat": 50.4592,
      "lng": 4.45382
    },
    "priority": 7,
    "seasonalRoutes": [],
    "aliases": ["Charleroi", "Brussels Charleroi"],
    "weight": 1
  }, {
    "id": "airport:OTP",
    "name": "Bucharest",
    "categories": ["SKI", "FAM", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "OTP",
    "seoName": "Bucharest-Otopeni",
    "cityCode": "BUCHAREST",
    "country": "Romania",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:MRS", "city:CHARLEROI", "airport:BLQ", "airport:CRL", "country:gr", "region:ENGLAND", "airport:TSR", "airport:BGY", "airport:PSR", "airport:MAD", "city:TIMISOARA", "city:MILAN", "city:PALERMO", "city:BERLIN", "city:VIENNA", "city:ROME", "city:BOLOGNA", "city:AMMAN", "airport:DUB", "country:de", "airport:STN", "airport:CHQ", "airport:MXP", "country:es", "airport:BRS", "airport:SXF", "country:at", "city:CHANIA", "city:MARSEILLE", "country:it", "airport:ATH", "country:ie", "city:PAPHOS", "airport:VIE", "airport:PMO", "city:LONDON", "region:SICILY", "country:gb", "country:fr", "airport:AMM", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "city:ATHENS", "airport:CIA", "region:CRETE", "country:jo", "airport:PFO", "city:PESCARA", "country:ro", "country:be"],
    "countryCode": "ro",
    "base": true,
    "coords": {
      "lat": 44.5722,
      "lng": 26.1022
    },
    "priority": 85,
    "seasonalRoutes": [],
    "aliases": ["Otopeni"]
  }, {
    "id": "airport:BUD",
    "name": "Budapest",
    "categories": ["ROM", "FAM", "FST", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "BUD",
    "seoName": "budapest",
    "cityCode": "BUDAPEST",
    "country": "Hungary",
    "currencyCode": "HUF",
    "routes": ["city:CHARLEROI", "airport:ORK", "city:NUREMBERG", "city:SANTANDER", "airport:CRL", "country:gr", "region:ENGLAND", "airport:BGY", "city:GRAN_CANARIA", "airport:AGP", "city:MILAN", "city:EDINBURGH", "connectingFlight:IBZ:BGY", "city:BERLIN", "city:LAMEZIA", "city:BILLUND", "city:NAPLES", "country:pt", "connectingFlight:SUF:BGY", "airport:DUB", "city:VALENCIA", "airport:STN", "city:PISA", "country:es", "city:THESSALONIKI", "airport:BRS", "connectingFlight:CTA:BGY", "city:PARIS", "airport:NAP", "country:mt", "city:MARSEILLE", "airport:RAK", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:TMP", "city:PAPHOS", "airport:PMO", "region:TUSCANY", "city:MANCHESTER", "airport:SKG", "city:LONDON", "airport:BCN", "country:gb", "country:fr", "airport:SDR", "city:MALTA", "airport:PFO", "city:SEVILLE", "city:PRAGUE", "city:PESCARA", "airport:STR", "country:fi", "country:cy", "airport:VLC", "airport:MRS", "airport:SVQ", "country:cz", "city:BARI", "region:SARDINIA", "airport:BLL", "airport:LPA", "region:CANARY_ISLES", "city:BRINDISI", "airport:MAN", "connectingFlight:PSR:BGY", "airport:MAD", "airport:BVA", "country:ma", "city:CATANIA", "city:CORK", "city:TAMPERE", "connectingFlight:BDS:BGY", "city:VENICE", "city:PALERMO", "connectingFlight:CAG:BGY", "city:BARCELONA", "region:COSTA_DE_SOL", "city:MARRAKESH", "country:dk", "airport:NUE", "city:ROME", "city:EILAT", "region:COSTA_BRAVA", "airport:VDA", "city:STUTTGART", "city:AMMAN", "airport:CFU", "region:SCOTLAND", "country:de", "airport:EDI", "city:CORFU", "city:IBIZA", "city:PORTO", "airport:PRG", "airport:SXF", "airport:MLA", "airport:CPH", "country:it", "city:MALAGA", "airport:ATH", "country:ie", "country:il", "region:SICILY", "airport:CAG", "connectingFlight:OPO:BGY", "airport:TSF", "city:BIRMINGHAM", "airport:AMM", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "airport:PSA", "airport:CIA", "city:ATHENS", "city:COPENHAGEN", "country:jo", "region:PUGLIA", "airport:EMA", "city:CAGLIARI", "country:be"],
    "countryCode": "hu",
    "base": true,
    "coords": {
      "lat": 47.4369,
      "lng": 19.2556
    },
    "priority": 35,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BOJ",
    "name": "Burgas",
    "categories": ["CTY"],
    "iataCode": "BOJ",
    "seoName": "burgas",
    "cityCode": "BURGAS",
    "country": "Bulgaria",
    "currencyCode": "EUR",
    "routes": ["airport:HHN", "airport:NRN", "airport:KRK", "airport:RIX", "airport:BTS", "city:TEL_AVIV", "airport:RZE", "city:FRANKFURT", "country:it", "city:RZESZOW", "airport:WMI", "airport:BGY", "country:il", "city:KRAKOW", "city:DUSSELDORF", "city:MILAN", "country:sk", "airport:FMM", "city:WARSAW", "airport:KUN", "city:BRATISLAVA", "airport:TLV", "city:KAUNAS", "country:lv", "country:lt", "city:MEMMINGEN", "city:RIGA", "country:pl", "country:de"],
    "countryCode": "bg",
    "base": true,
    "coords": {
      "lat": 42.3413,
      "lng": 27.3055
    },
    "priority": 0,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BZG",
    "name": "Bydgoszcz",
    "categories": [],
    "iataCode": "BZG",
    "seoName": "bydgoszcz",
    "cityCode": "BYDGOSZCZ",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:STN", "city:GLASGOW", "city:DUSSELDORF", "country:gb", "airport:NRN", "airport:LTN", "city:KIEV", "country:ua", "city:BIRMINGHAM", "city:DUBLIN", "airport:GLA", "airport:KBP", "region:ENGLAND", "country:ie", "airport:DUB", "airport:BHX", "airport:PIK", "region:SCOTLAND", "city:LONDON", "country:de"],
    "countryCode": "pl",
    "base": false,
    "coords": {
      "lat": 53.0968,
      "lng": 17.9777
    },
    "priority": 86,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CAG",
    "name": "Cagliari",
    "categories": ["FAM", "SPR", "CUL", "OUT"],
    "iataCode": "CAG",
    "seoName": "cagliari",
    "cityCode": "CAGLIARI",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "connectingFlight:BTS:BGY", "city:NUREMBERG", "airport:KRK", "airport:GRO", "connectingFlight:HAM:BGY", "city:VERONA", "airport:CRL", "city:FRANKFURT", "city:TENERIFE", "country:gr", "region:ENGLAND", "airport:BGY", "city:GRAN_CANARIA", "airport:PMF", "city:MILAN", "city:EDINBURGH", "connectingFlight:IBZ:BGY", "country:hu", "city:BERLIN", "country:pt", "city:TRAPANI", "connectingFlight:EDI:BGY", "airport:SEN|Air Malta", "connectingFlight:BCN:BGY", "city:BOLOGNA", "country:pl", "connectingFlight:SXF:BGY", "city:VALENCIA", "airport:DUB", "connectingFlight:LPA:BGY", "airport:STN", "city:PISA", "airport:NRN", "country:es", "connectingFlight:VNO:BGY", "city:PARIS", "country:mt", "airport:BRI", "connectingFlight:PRG:BGY", "city:LISBON", "region:TUSCANY", "city:MANCHESTER", "city:LONDON", "airport:CTA", "city:DUSSELDORF", "city:VILNIUS", "country:gb", "country:fr", "city:BRATISLAVA", "airport:FKB", "city:SANTIAGO", "city:MALTA", "connectingFlight:SCQ:BGY", "city:SEVILLE", "city:PRAGUE", "connectingFlight:BUD:BGY", "connectingFlight:LIS:BGY", "airport:CUF", "airport:VRN", "connectingFlight:AGP:BGY", "airport:VLC", "country:cz", "airport:HHN", "airport:SVQ", "airport:BLQ", "connectingFlight:MLA:BGY", "city:BARI", "region:CANARY_ISLES", "airport:MAN", "airport:WMI", "airport:MAD", "city:KRAKOW", "airport:BVA", "city:CATANIA", "airport:MLA|Air Malta", "city:VENICE", "city:WARSAW", "region:COSTA_DE_SOL", "city:BARCELONA", "connectingFlight:TFS:BGY", "city:ROME", "airport:TPS", "country:lt", "connectingFlight:ATH:BGY", "region:COSTA_BRAVA", "airport:BUD", "connectingFlight:MAN:BGY", "region:SCOTLAND", "country:de", "airport:OPO", "city:IBIZA", "city:PORTO", "city:LANZAROTE", "city:CUNEO", "country:it", "city:ALICANTE", "city:MALAGA", "city:PARMA", "country:ie", "connectingFlight:ALC:BGY", "connectingFlight:BRE:BGY", "region:SICILY", "connectingFlight:NUE:BGY", "country:sk", "airport:TSF", "connectingFlight:BRS:BGY", "city:KARLSRUHE", "city:MADRID", "city:DUBLIN", "city:BRISTOL", "airport:PSA", "airport:CIA", "city:ATHENS", "region:PUGLIA", "connectingFlight:ACE:BGY", "city:BUDAPEST", "city:SOUTHEND_ON_SEA", "city:GIRONA", "country:be", "city:BREMEN"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 39.2515,
      "lng": 9.05428
    },
    "priority": 27,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CCF",
    "name": "Carcassonne",
    "categories": ["SKI", "FAM", "CUL", "OUT"],
    "iataCode": "CCF",
    "seoName": "carcassonne",
    "cityCode": "CARCASSONNE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:GLASGOW", "airport:OPO", "city:CHARLEROI", "city:CORK", "airport:EDI", "country:gb", "city:EDINBURGH", "city:PORTO", "airport:ORK", "city:BIRMINGHAM", "city:DUBLIN", "airport:CRL", "country:pt", "airport:GLA", "airport:EMA", "airport:MAN", "region:ENGLAND", "country:ie", "airport:DUB", "country:be", "region:SCOTLAND", "city:MANCHESTER", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.216,
      "lng": 2.30632
    },
    "priority": 81,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CWL",
    "name": "Cardiff",
    "categories": ["HEN", "FAM", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "CWL",
    "seoName": "cardiff",
    "cityCode": "CARDIFF",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["airport:BCN", "country:es", "airport:TFS", "airport:MLA", "city:BARCELONA", "city:DUBLIN", "city:MALTA", "country:mt", "country:pt", "city:TENERIFE", "region:CANARY_ISLES", "city:FARO", "country:ie", "region:COSTA_BRAVA", "airport:FAO", "airport:DUB"],
    "countryCode": "gb",
    "base": false,
    "coords": {
      "lat": 51.3967,
      "lng": -3.34333
    },
    "priority": 179,
    "seasonalRoutes": [],
    "aliases": ["Wales", "Great Britain", "UK", "GB"]
  }, {
    "id": "airport:CMN",
    "name": "Casablanca",
    "categories": [],
    "iataCode": "CMN",
    "seoName": "casablanca",
    "cityCode": "CASABLANCA",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["city:MALTA", "country:mt", "airport:MLA|Air Malta"],
    "countryCode": "ma",
    "base": false,
    "coords": {
      "lat": 33.3672,
      "lng": -7.5897
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CDT",
    "name": "Castellon (Valencia)",
    "categories": ["FAM", "CUL", "SEA", "OUT"],
    "iataCode": "CDT",
    "seoName": "castellon",
    "cityCode": "CASTELLON",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:SOFIA", "airport:POZ", "country:bg", "airport:SOF", "country:gb", "region:ENGLAND", "country:pl", "city:POZNAN", "city:LONDON"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 39.999,
      "lng": 0.026
    },
    "priority": 176,
    "seasonalRoutes": [],
    "aliases": ["Valencia", "Valencia Castellon", "Walencja"],
    "weight": 2
  }, {
    "id": "airport:CTA",
    "name": "Catania",
    "categories": ["FAM", "FST", "CTY", "CUL", "SEA"],
    "iataCode": "CTA",
    "seoName": "catania",
    "cityCode": "CATANIA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:CHARLEROI", "connectingFlight:BTS:BGY", "city:FRANKFURT", "connectingFlight:PMI:BGY", "city:TENERIFE", "city:TURIN", "country:gr", "region:ENGLAND", "city:PERUGIA", "airport:BGY", "city:EINDHOVEN", "city:MILAN", "city:EDINBURGH", "connectingFlight:BRI:FCO", "connectingFlight:IBZ:BGY", "country:hu", "city:BERLIN", "city:VIENNA", "airport:SEN|Air Malta", "connectingFlight:EDI:BGY", "connectingFlight:BCN:BGY", "city:BOLOGNA", "country:pl", "city:VALENCIA", "city:PISA", "country:es", "airport:MXP", "connectingFlight:VNO:BGY", "airport:VIE|Air Malta", "city:PALMA", "country:mt", "city:MARSEILLE", "airport:RAK", "airport:FRA", "city:TRIESTE", "connectingFlight:PRG:BGY", "region:TUSCANY", "airport:PEG", "city:VILNIUS", "country:gb", "airport:EIN", "country:fr", "city:BRATISLAVA", "city:MALTA", "connectingFlight:BRU:FCO", "city:SEVILLE", "city:PRAGUE", "connectingFlight:BUD:BGY", "connectingFlight:ACE:FCO", "country:nl", "connectingFlight:AGP:BGY", "country:cz", "airport:MRS", "airport:SVQ", "airport:BLQ", "city:BRUSSELS", "city:BARI", "region:SARDINIA", "region:CANARY_ISLES", "connectingFlight:VLC:BGY", "airport:FCO", "airport:MAD", "city:KRAKOW", "country:ma", "connectingFlight:CRL:BGY", "city:VENICE", "region:COSTA_DE_SOL", "city:BARCELONA", "connectingFlight:EMA:BGY", "city:MARRAKESH", "connectingFlight:TFS:BGY", "connectingFlight:BCN:FCO", "city:ROME", "country:lt", "connectingFlight:ATH:BGY", "region:COSTA_BRAVA", "region:SCOTLAND", "country:de", "connectingFlight:KRK:BGY", "city:IBIZA", "airport:SXF", "airport:MLA", "country:at", "city:LANZAROTE", "country:it", "city:MALAGA", "city:ALICANTE", "airport:ATH", "connectingFlight:ALC:BGY", "connectingFlight:BRE:BGY", "airport:CAG", "country:sk", "airport:TSF", "connectingFlight:BRS:BGY", "city:BIRMINGHAM", "city:MADRID", "city:BRISTOL", "airport:PSA", "city:ATHENS", "region:PUGLIA", "city:BUDAPEST", "city:SOUTHEND_ON_SEA", "airport:TRS", "city:CAGLIARI", "country:be", "connectingFlight:AGP:FCO", "city:BREMEN", "airport:TRN"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 37.4668,
      "lng": 15.0664
    },
    "priority": 24,
    "seasonalRoutes": [],
    "aliases": ["Fontanarossa", "Catania Fontanarossa"]
  }, {
    "id": "airport:CHQ",
    "name": "Chania",
    "categories": ["FAM", "NIT", "CTY", "CUL", "SEA"],
    "iataCode": "CHQ",
    "seoName": "crete",
    "cityCode": "CHANIA",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:HHN", "city:CHARLEROI", "airport:BLQ", "airport:KRK", "airport:CRL", "city:FRANKFURT", "airport:MAN", "country:gr", "region:ENGLAND", "airport:WMI", "airport:BGY", "airport:FCO", "city:EINDHOVEN", "city:KRAKOW", "airport:SOF", "city:MILAN", "city:WARSAW", "city:VIENNA", "city:BUCHAREST", "city:NAPLES", "city:SOFIA", "city:ROME", "city:LEEDS", "city:BOLOGNA", "country:pl", "airport:WRO", "airport:DUB", "airport:BHX", "region:SCOTLAND", "country:de", "city:GLASGOW", "airport:STN", "city:PISA", "airport:OTP", "airport:LBA", "airport:NRN", "city:THESSALONIKI", "airport:BRS", "country:at", "airport:NAP", "airport:GLA", "country:it", "airport:FRA", "airport:BRE", "country:ie", "city:PAPHOS", "airport:VIE", "region:TUSCANY", "city:MANCHESTER", "airport:SKG", "city:LONDON", "city:DUSSELDORF", "country:gb", "airport:EIN", "city:BIRMINGHAM", "city:WROCLAW", "city:DUBLIN", "city:BRISTOL", "airport:PSA", "country:bg", "airport:PFO", "airport:EMA", "country:nl", "country:ro", "country:be", "city:BREMEN"],
    "countryCode": "gr",
    "base": true,
    "coords": {
      "lat": 35.5317,
      "lng": 24.1497
    },
    "priority": 52,
    "seasonalRoutes": [],
    "aliases": ["Crete", "Crete Chania"]
  }, {
    "id": "airport:CFE",
    "name": "Clermont",
    "categories": ["FAM", "SPR", "CTY", "OUT"],
    "iataCode": "CFE",
    "seoName": "clermont-ferrand",
    "cityCode": "CLERMONT_FERRAND",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:OPO", "country:pt", "country:gb", "region:ENGLAND", "city:PORTO", "airport:LIS", "city:LISBON", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 45.7867,
      "lng": 3.16917
    },
    "priority": 171,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CLJ",
    "name": "Cluj",
    "categories": [],
    "iataCode": "CLJ",
    "seoName": "cluj",
    "cityCode": "CLUJ",
    "country": "Romania",
    "currencyCode": "EUR",
    "routes": ["airport:SEN", "country:gb", "city:SOUTHEND_ON_SEA", "region:ENGLAND"],
    "countryCode": "ro",
    "base": false,
    "coords": {
      "lat": 46.785,
      "lng": 23.6861
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CGN",
    "name": "Cologne",
    "categories": ["FAM", "SPR", "FST", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "CGN",
    "seoName": "cologne-bonn",
    "cityCode": "COLOGNE",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "airport:BGY", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:MILAN", "city:VITORIA-GASTEIZ", "connectingFlight:IBZ:BGY", "city:BERLIN", "city:LAMEZIA", "city:NAPLES", "city:SOFIA", "country:pt", "country:hr", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:DUB", "city:VALENCIA", "airport:STN", "city:ZADAR", "city:AQABA", "country:es", "airport:BRS", "airport:RIX", "airport:VIT", "airport:ZAD", "city:PALMA", "country:mt", "airport:RAK", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "connectingFlight:BRI:BGY", "airport:FAO", "city:LISBON", "airport:PMO", "city:MANCHESTER", "city:LONDON", "airport:BCN", "city:VILNIUS", "country:gb", "country:fr", "city:BORDEAUX", "airport:TFS", "city:MALTA", "city:KNOCK", "city:SEVILLE", "airport:AQJ", "connectingFlight:LIS:BGY", "airport:VLC", "airport:SVQ", "connectingFlight:NAP:BGY", "airport:BLQ", "city:BARI", "airport:LPA", "region:CANARY_ISLES", "airport:MAN", "city:BRINDISI", "airport:WMI", "airport:MAD", "country:ma", "airport:SOF", "connectingFlight:BDS:BGY", "city:VENICE", "city:WARSAW", "city:PALERMO", "city:BARCELONA", "region:COSTA_DE_SOL", "city:MARRAKESH", "country:dk", "city:ROME", "country:lv", "country:lt", "region:COSTA_BRAVA", "airport:CFU", "country:de", "airport:OPO", "connectingFlight:PMO:BGY", "city:CORFU", "city:IBIZA", "city:PORTO", "airport:SXF", "airport:MLA", "airport:CPH", "country:it", "city:ALICANTE", "city:MALAGA", "airport:ALC", "country:ie", "region:SICILY", "airport:TSF", "airport:NOC", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "airport:CIA", "country:bg", "city:COPENHAGEN", "country:jo", "region:PUGLIA", "airport:BOD", "airport:VNO", "city:RIGA"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 50.8659,
      "lng": 7.14274
    },
    "priority": 80,
    "seasonalRoutes": [],
    "aliases": ["Bonn", "Cologne Bonn"]
  }, {
    "id": "airport:CIY",
    "name": "Comiso",
    "categories": ["FAM", "FST", "CUL", "SEA", "OUT"],
    "iataCode": "CIY",
    "seoName": "comiso",
    "cityCode": "COMISO",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:PISA", "airport:STN", "airport:HHN", "city:CHARLEROI", "airport:NRN", "country:es", "airport:MXP", "airport:CRL", "city:FRANKFURT", "country:mt", "city:TURIN", "country:it", "city:ALICANTE", "region:ENGLAND", "airport:BGY", "region:TUSCANY", "airport:FCO", "city:LONDON", "connectingFlight:ALC:FCO", "city:DUSSELDORF", "airport:MLA|Air Malta", "city:MILAN", "country:gb", "city:BARCELONA", "connectingFlight:BCN:FCO", "airport:PSA", "city:MALTA", "airport:CIA", "city:ROME", "region:COSTA_BRAVA", "country:be", "country:de", "airport:TRN"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 36.9946,
      "lng": 14.6072
    },
    "priority": 101,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CPH",
    "name": "Copenhagen",
    "categories": ["ROM", "FAM", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "CPH",
    "seoName": "copenhagen",
    "cityCode": "COPENHAGEN",
    "country": "Denmark",
    "currencyCode": "DKK",
    "routes": ["airport:VLC", "country:cz", "airport:SVQ", "city:CHARLEROI", "airport:BLQ", "airport:LPL", "airport:LTN", "airport:CRL", "city:TENERIFE", "region:CANARY_ISLES", "airport:SEN", "country:gr", "region:ENGLAND", "airport:BGY", "airport:MAD", "city:MILAN", "airport:AGP", "airport:CGN", "city:EDINBURGH", "country:hu", "region:COSTA_DE_SOL", "city:VIENNA", "city:LIVERPOOL", "city:NAPLES", "city:KAUNAS", "country:pt", "city:ROME", "country:lt", "city:BOLOGNA", "region:COSTA_BRAVA", "city:STUTTGART", "city:VALENCIA", "airport:DUB", "airport:BUD", "region:SCOTLAND", "country:de", "airport:STN", "airport:OPO", "airport:EDI", "city:PORTO", "country:es", "airport:PRG", "city:THESSALONIKI", "country:at", "airport:NAP", "country:it", "city:MALAGA", "city:ALICANTE", "airport:ALC", "country:ie", "airport:VIE", "airport:SKG", "city:LONDON", "country:gb", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:KUN", "airport:TFS", "city:MADRID", "city:DUBLIN", "airport:CIA", "city:SEVILLE", "airport:BOD", "city:BUDAPEST", "city:PRAGUE", "city:SOUTHEND_ON_SEA", "airport:STR", "country:be"],
    "countryCode": "dk",
    "base": false,
    "coords": {
      "lat": 55.6181,
      "lng": 12.6561
    },
    "priority": 177,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CFU",
    "name": "Corfu",
    "categories": ["ROM", "FAM", "FST", "NIT", "CUL", "SEA", "OUT"],
    "iataCode": "CFU",
    "seoName": "corfu",
    "cityCode": "CORFU",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["airport:HHN", "city:CHARLEROI", "connectingFlight:NAP:BGY", "airport:BLQ", "airport:LPL", "airport:TXL", "airport:BTS", "airport:CRL", "city:FRANKFURT", "airport:POZ", "airport:SEN", "city:KATOWICE", "airport:MAN", "region:ENGLAND", "city:RZESZOW", "airport:WMI", "airport:BGY", "airport:FCO", "city:EINDHOVEN", "airport:CGN", "city:MILAN", "city:EDINBURGH", "city:VENICE", "city:PALERMO", "city:WARSAW", "country:hu", "city:BERLIN", "airport:DUS", "city:BARCELONA", "city:LIVERPOOL", "city:LAMEZIA", "city:NAPLES", "city:ROME", "country:lt", "connectingFlight:BCN:BGY", "city:LEEDS", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "region:COSTA_BRAVA", "airport:BUD", "airport:BHX", "region:SCOTLAND", "country:de", "city:PISA", "airport:STN", "airport:KTW", "airport:LBA", "connectingFlight:PMO:BGY", "airport:EDI", "airport:NRN", "country:es", "airport:RZE", "country:it", "airport:FRA", "region:TUSCANY", "city:MANCHESTER", "city:LONDON", "region:SICILY", "city:DUSSELDORF", "city:VILNIUS", "country:gb", "airport:EIN", "country:sk", "airport:TSF", "city:COLOGNE", "city:BIRMINGHAM", "city:BRATISLAVA", "airport:PSA", "airport:CIA", "airport:EMA", "airport:VNO", "city:BUDAPEST", "city:SOUTHEND_ON_SEA", "country:nl", "country:be", "city:POZNAN"],
    "countryCode": "gr",
    "base": true,
    "coords": {
      "lat": 39.6019,
      "lng": 19.9117
    },
    "priority": 113,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:ORK",
    "name": "Cork",
    "categories": ["GLF", "FAM", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "ORK",
    "seoName": "cork",
    "cityCode": "CORK",
    "country": "Ireland",
    "currencyCode": "EUR",
    "routes": ["city:CARCASSONNE", "airport:LPL", "airport:LTN", "airport:GRO", "city:SANTANDER", "airport:LPA", "airport:POZ", "region:CANARY_ISLES", "city:TENERIFE", "airport:LGW", "city:FARO", "region:ENGLAND", "airport:BGY", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:MILAN", "airport:CCF", "airport:ACE", "country:hu", "region:COSTA_DE_SOL", "city:BARCELONA", "city:LIVERPOOL", "city:NAPLES", "country:pt", "country:pl", "region:COSTA_BRAVA", "airport:WRO", "airport:BUD", "city:GDANSK", "airport:STN", "country:es", "airport:MLA", "airport:REU", "city:LANZAROTE", "airport:NAP", "city:PALMA", "country:mt", "city:MALAGA", "city:ALICANTE", "country:it", "airport:ALC", "airport:FAO", "city:LONDON", "country:gb", "country:fr", "city:BORDEAUX", "city:WROCLAW", "airport:SDR", "airport:TFS", "city:MALTA", "airport:BOD", "city:BUDAPEST", "city:GIRONA", "airport:GDN", "city:POZNAN"],
    "countryCode": "ie",
    "base": true,
    "coords": {
      "lat": 51.8413,
      "lng": -8.49111
    },
    "priority": 69,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CRA",
    "name": "Craiova",
    "categories": [],
    "iataCode": "CRA",
    "seoName": "craiova",
    "cityCode": "CRAIOVA",
    "country": "Romania",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "country:es", "city:VALENCIA"],
    "countryCode": "ro",
    "base": false,
    "coords": {
      "lat": 44.3181,
      "lng": 23.8886
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CRV",
    "name": "Crotone",
    "categories": ["FAM", "FST", "CTY", "SEA", "OUT"],
    "iataCode": "CRV",
    "seoName": "crotone",
    "cityCode": "CROTONE",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:PISA", "airport:PSA", "airport:NUE", "city:MILAN", "country:it", "airport:BLQ", "city:NUREMBERG", "city:BOLOGNA", "airport:BGY", "region:TUSCANY", "country:de"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 38.99722,
      "lng": 17.08028
    },
    "priority": 178,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CUF",
    "name": "Cuneo",
    "categories": ["FAM", "CTY", "OUT"],
    "iataCode": "CUF",
    "seoName": "cuneo",
    "cityCode": "CUNEO",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:CAG", "country:it", "region:SARDINIA", "city:CAGLIARI"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 44.547,
      "lng": 7.62322
    },
    "priority": 146,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:DLM",
    "name": "Dalaman",
    "categories": [],
    "iataCode": "DLM",
    "seoName": "dalaman",
    "cityCode": "DALAMAN",
    "country": "Turkey",
    "currencyCode": "EUR",
    "routes": ["country:sk", "country:ie", "airport:BTS", "airport:DUB", "city:BRATISLAVA", "city:DUBLIN"],
    "countryCode": "tr",
    "base": false,
    "coords": {
      "lat": 36.7147,
      "lng": 28.7928
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LDY",
    "name": "Derry",
    "categories": ["GLF", "HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "LDY",
    "seoName": "derry",
    "cityCode": "DERRY",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:GLASGOW", "city:LIVERPOOL", "airport:GLA", "airport:EDI", "country:gb", "city:EDINBURGH", "airport:LPL", "region:ENGLAND", "region:SCOTLAND"],
    "countryCode": "gb",
    "base": false,
    "coords": {
      "lat": 55.0428,
      "lng": -7.16111
    },
    "priority": 98,
    "seasonalRoutes": [],
    "aliases": ["UK", "Northern Ireland"]
  }, {
    "id": "airport:DNR",
    "name": "Dinard",
    "categories": ["FAM", "CTY"],
    "iataCode": "DNR",
    "seoName": "dinard",
    "cityCode": "DINARD",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:EMA", "country:gb", "region:ENGLAND", "city:BIRMINGHAM", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 48.5877,
      "lng": -2.07996
    },
    "priority": 128,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:DLE",
    "name": "Dole",
    "categories": ["FAM", "CTY", "OUT"],
    "iataCode": "DLE",
    "seoName": "dole",
    "cityCode": "DOLE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:OPO", "country:pt", "airport:FEZ", "country:ma", "airport:RAK", "country:gb", "city:FEZ", "city:PORTO", "region:ENGLAND", "city:LONDON", "city:MARRAKESH"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 47.039,
      "lng": 5.42725
    },
    "priority": 140,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:DTM",
    "name": "Dortmund",
    "categories": ["FAM", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "DTM",
    "seoName": "dortmund",
    "cityCode": "DORTMUND",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:OPO", "airport:LPL", "airport:AHO", "city:PORTO", "country:es", "city:THESSALONIKI", "region:SARDINIA", "airport:KRK", "city:PALMA", "country:gr", "country:it", "city:MALAGA", "region:ENGLAND", "city:LISBON", "connectingFlight:LIS:OPO", "airport:SKG", "city:LONDON", "city:KRAKOW", "airport:PMI", "country:gb", "airport:AGP", "region:COSTA_DE_SOL", "city:LIVERPOOL", "country:pt", "city:ALGHERO", "country:pl"],
    "countryCode": "de",
    "base": false,
    "coords": {
      "lat": 51.5183,
      "lng": 7.61224
    },
    "priority": 97,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:DUB",
    "name": "Dublin",
    "categories": ["GLF", "HEN", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "OUT", "XMS"],
    "iataCode": "DUB",
    "seoName": "dublin",
    "cityCode": "DUBLIN",
    "country": "Ireland",
    "currencyCode": "EUR",
    "routes": ["airport:LDE", "city:TALLINN", "city:CARCASSONNE", "airport:INN", "airport:LTN", "airport:KRK", "city:SANTANDER", "airport:CRL", "airport:VGO", "city:FRANKFURT", "city:KATOWICE", "country:gr", "airport:LCJ", "city:LA_ROCHELLE", "city:BODRUM", "airport:PMI", "city:EDINBURGH", "airport:TUF", "airport:CCF", "country:hu", "city:VIENNA", "city:SOFIA", "airport:KBP", "country:hr", "city:LEEDS", "connectingFlight:SUF:BGY", "city:BOLOGNA", "city:VALENCIA", "airport:STN", "airport:KTW", "country:es", "airport:BRU", "airport:BRS", "city:PARIS", "airport:ZAD", "city:PALMA", "airport:RAK", "airport:GLA", "airport:BRI", "airport:BRE", "airport:LUZ", "airport:VIE", "airport:PMO", "airport:LUX", "country:ee", "city:LONDON", "airport:LEI", "airport:BCN", "city:VILNIUS", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:KUN", "city:BORDEAUX", "airport:SDR", "airport:TFS", "city:MALTA", "airport:BSL", "city:VIGO", "city:SEVILLE", "airport:STR", "airport:HHN", "airport:BLQ", "airport:LPL", "city:BARI", "region:SARDINIA", "airport:NTE", "region:WALES", "airport:LPA", "city:BRINDISI", "airport:MAN", "city:MUNICH", "airport:NCL", "city:RZESZOW", "airport:MAD", "airport:NCE", "country:ma", "airport:SOF", "city:VENICE", "city:MARRAKESH", "city:BUCHAREST", "city:ROME", "country:lv", "country:lt", "city:MEMMINGEN", "country:lu", "airport:FUE", "city:STUTTGART", "city:DALAMAN", "city:GDANSK", "city:BYDGOSZCZ", "city:BASEL", "airport:LBA", "city:MURCIA", "airport:EDI", "city:IBIZA", "city:SALZBURG", "city:KIEV", "airport:LRH", "airport:CPH", "country:it", "airport:PIS", "airport:RMU", "airport:ALC", "region:SICILY", "airport:CAG", "airport:TSF", "airport:AMS", "city:POITIERS", "city:BIRMINGHAM", "city:WROCLAW", "city:MADRID", "airport:MUC", "airport:BOH", "region:PUGLIA", "airport:BOD", "city:BUDAPEST", "city:CAGLIARI", "city:BREMEN", "airport:TRN", "city:HAMBURG", "city:CHARLEROI", "city:BOURNEMOUTH", "airport:DLM", "airport:GRO", "airport:SZG", "city:TENERIFE", "city:TURIN", "city:FARO", "region:ENGLAND", "city:INNSBRUCK", "airport:BGY", "city:EINDHOVEN", "city:FUERTEVENTURA", "city:AMSTERDAM", "city:GRAN_CANARIA", "airport:AGP", "city:MILAN", "airport:BIQ", "city:SZCZECIN", "city:BERLIN", "city:LAMEZIA", "city:NAPLES", "city:KAUNAS", "country:pt", "city:RODEZ", "country:pl", "airport:SZZ", "airport:TLL", "airport:WRO", "city:TOURS", "airport:BHX", "city:LUBLIN", "city:PISA", "city:GLASGOW", "airport:BJV", "city:ZADAR", "airport:OTP", "city:THESSALONIKI", "airport:RIX", "city:CHANIA", "city:BIARRITZ", "city:GRENOBLE", "airport:NAP", "airport:RZE", "country:mt", "airport:FRA", "city:PAPHOS", "airport:FAO", "city:LISBON", "region:TUSCANY", "airport:BZG", "airport:SKG", "city:CARDIFF", "city:MANCHESTER", "city:ALMERIA", "city:BRATISLAVA", "airport:PFO", "city:PRAGUE", "country:nl", "airport:GDN", "country:cy", "airport:VLC", "country:cz", "airport:SVQ", "city:BRUSSELS", "airport:BTS", "airport:POZ", "airport:GNB", "region:CANARY_ISLES", "country:ch", "airport:LGW", "airport:SEN", "airport:WMI", "airport:AAR", "city:KRAKOW", "airport:BVA", "city:LOURDES", "airport:GOT", "airport:CGN", "connectingFlight:BDS:BGY", "airport:RDZ", "airport:FMM", "airport:ACE", "city:WARSAW", "country:ua", "city:PALERMO", "city:AARHUS", "airport:IBZ", "city:BARCELONA", "region:COSTA_DE_SOL", "city:LIVERPOOL", "country:dk", "airport:MJV", "airport:CWL", "country:tr", "region:COSTA_BRAVA", "airport:BUD", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "airport:OPO", "airport:CHQ", "city:PORTO", "airport:PRG", "airport:SXF", "airport:REU", "country:at", "airport:MLA", "city:LANZAROTE", "city:ALICANTE", "city:MALAGA", "airport:ATH", "airport:LIS", "airport:HAM", "country:sk", "city:NANTES", "country:se", "city:BRISTOL", "airport:PSA", "airport:CIA", "city:ATHENS", "region:CRETE", "country:bg", "city:COPENHAGEN", "airport:EMA", "city:LUXEMBOURG", "airport:VNO", "city:RIGA", "city:SOUTHEND_ON_SEA", "city:NICE", "country:ro", "city:GIRONA", "city:LODZ", "country:be", "city:GOTHENBURG", "city:POZNAN"],
    "countryCode": "ie",
    "base": true,
    "coords": {
      "lat": 53.4213,
      "lng": -6.27007
    },
    "priority": 2,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:DUS",
    "name": "Dusseldorf Int.",
    "categories": [],
    "iataCode": "DUS",
    "seoName": "dusseldorf-int",
    "cityCode": "DUSSELDORF",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:INN", "airport:LPA", "city:TENERIFE", "region:CANARY_ISLES", "country:gr", "city:FARO", "city:INNSBRUCK", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "country:ma", "airport:PMI", "airport:MLA|Air Malta", "airport:AGP", "airport:ACE", "city:PALERMO", "airport:IBZ", "region:COSTA_DE_SOL", "city:MARRAKESH", "city:HERAKLION", "city:NAPLES", "country:pt", "airport:RHO", "airport:FUE", "region:COSTA_BRAVA", "airport:CFU", "city:CORFU", "city:IBIZA", "country:es", "country:at", "airport:NAP", "city:LANZAROTE", "country:mt", "city:PALMA", "airport:RAK", "city:MALAGA", "country:it", "city:ALICANTE", "airport:KGS", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ALC", "airport:HER", "city:KOS", "airport:FAO", "city:RHODES", "airport:PMO", "region:SICILY", "airport:TFS", "city:MALTA", "region:CRETE"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 51.1722,
      "lng": 6.46
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:NRN",
    "name": "Dusseldorf Weeze",
    "categories": ["SKI", "FAM", "SPR", "FST", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "NRN",
    "seoName": "dusseldorf",
    "cityCode": "DUSSELDORF",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["city:TALLINN", "city:ESSAOUIRA", "city:TANGIER", "airport:GRO", "airport:INI", "connectingFlight:PDL:OPO", "city:SANTANDER", "city:BEZIERS", "city:LVIV", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "airport:CIY", "airport:BGY", "city:STOCKHOLM", "city:OUJDA", "airport:PSR", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "airport:AGP", "city:EDINBURGH", "airport:NYO", "city:LAMEZIA", "country:pt", "airport:AOI", "airport:AGA", "country:hr", "country:pl", "airport:TLL", "city:ANCONA", "city:VALENCIA", "airport:TNG", "airport:STN", "city:PISA", "city:ZADAR", "country:es", "city:THESSALONIKI", "city:CHANIA", "airport:ZAD", "city:NIS", "city:PALMA", "airport:RAK", "airport:BRI", "airport:BZR", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:FAO", "city:LISBON", "connectingFlight:LIS:OPO", "airport:PMO", "region:TUSCANY", "country:ee", "airport:SKG", "airport:BZG", "city:LONDON", "country:gb", "country:fr", "airport:LWO", "airport:SUF", "airport:TFS", "airport:SDR", "city:NADOR", "airport:OUD", "city:BURGAS", "city:RABAT", "city:PESCARA", "airport:RBA", "airport:VLC", "city:BARI", "region:SARDINIA", "airport:LPA", "region:CANARY_ISLES", "country:ma", "airport:ESU", "country:ua", "city:PALERMO", "airport:ACE", "airport:IBZ", "region:COSTA_DE_SOL", "city:MARRAKESH", "city:COMISO", "airport:NDR", "city:ROME", "city:EILAT", "airport:FUE", "region:COSTA_BRAVA", "airport:VDA", "airport:CFU", "city:AGADIR", "region:SCOTLAND", "city:BYDGOSZCZ", "airport:OPO", "airport:CHQ", "city:PONTA_DELGADA", "airport:EDI", "city:CORFU", "city:PORTO", "city:IBIZA", "city:LANZAROTE", "airport:FEZ", "country:it", "city:FEZ", "city:MALAGA", "city:ALICANTE", "airport:ALC", "country:il", "region:SICILY", "airport:CAG", "country:se", "airport:BOJ", "airport:PSA", "region:CRETE", "airport:CIA", "country:bg", "region:PUGLIA", "city:GIRONA", "city:CAGLIARI", "region:AZORES", "country:rs"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 51.6024,
      "lng": 6.14217
    },
    "priority": 54,
    "seasonalRoutes": [],
    "aliases": ["Weeze"]
  }, {
    "id": "airport:EMA",
    "name": "East Midlands",
    "categories": ["FAM", "SPR", "FST", "CUL", "OUT"],
    "iataCode": "EMA",
    "seoName": "east-midlands",
    "cityCode": "BIRMINGHAM",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:CARCASSONNE", "city:BERGERAC", "airport:KRK", "airport:GRO", "city:TENERIFE", "country:gr", "city:FARO", "airport:LCJ", "airport:BGY", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "airport:AGP", "airport:CCF", "country:hu", "city:BERLIN", "airport:EGC", "city:LAMEZIA", "city:NAPLES", "country:pt", "airport:RHO", "connectingFlight:SUF:BGY", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "city:PISA", "city:SHANNON", "city:DINARD", "airport:DNR", "country:es", "airport:RIX", "city:CHANIA", "connectingFlight:CTA:BGY", "airport:RZE", "airport:NAP", "country:mt", "city:PALMA", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:FAO", "city:RHODES", "region:TUSCANY", "airport:BCN", "country:fr", "airport:TFS", "city:MALTA", "city:KNOCK", "city:SEVILLE", "airport:VLC", "airport:SVQ", "airport:LPA", "region:BRITTANY", "region:CANARY_ISLES", "city:LIMOGES", "city:RZESZOW", "airport:WMI", "airport:MAH", "city:KRAKOW", "city:CATANIA", "airport:LIG", "city:VENICE", "city:PALERMO", "airport:ACE", "city:WARSAW", "airport:IBZ", "region:COSTA_DE_SOL", "city:BARCELONA", "city:ROME", "country:lv", "airport:MJV", "airport:FUE", "region:COSTA_BRAVA", "airport:SNN", "city:MENORCA", "airport:BUD", "airport:CFU", "country:de", "connectingFlight:PMO:BGY", "airport:CHQ", "city:MURCIA", "city:CORFU", "city:IBIZA", "airport:SXF", "airport:MLA", "airport:REU", "city:LANZAROTE", "country:it", "city:MALAGA", "city:ALICANTE", "airport:RMU", "airport:ALC", "country:ie", "region:SICILY", "airport:TSF", "city:WROCLAW", "airport:NOC", "city:DUBLIN", "airport:PSA", "region:CRETE", "airport:CIA", "city:BUDAPEST", "city:RIGA", "city:LODZ", "city:GIRONA"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 52.8311,
      "lng": -1.32806
    },
    "priority": 48,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB", "Nottingham", "Midlands"]
  }, {
    "id": "airport:EDI",
    "name": "Edinburgh",
    "categories": ["SKI", "GLF", "HEN", "FAM", "FST", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "EDI",
    "seoName": "edinburgh",
    "cityCode": "EDINBURGH",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:TALLINN", "city:HAMBURG", "city:DERRY", "city:CHARLEROI", "city:CARCASSONNE", "airport:KRK", "airport:GRO", "city:SANTANDER", "airport:CRL", "city:BEZIERS", "city:FRANKFURT", "airport:VGO", "city:KATOWICE", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "city:FUERTEVENTURA", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:MILAN", "airport:CCF", "airport:NYO", "country:hu", "airport:LDY", "city:SZCZECIN", "city:BERLIN", "city:KAUNAS", "city:BILLUND", "city:SOFIA", "city:NAPLES", "airport:TLS", "country:pt", "city:BOLOGNA", "country:pl", "airport:SZZ", "airport:TLL", "airport:WRO", "city:VALENCIA", "airport:DUB", "city:PISA", "airport:STN", "airport:KTW", "airport:NRN", "country:es", "airport:RIX", "connectingFlight:CTA:BGY", "country:mt", "city:PALMA", "city:MARSEILLE", "airport:BZR", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "connectingFlight:BRI:BGY", "airport:FAO", "city:LISBON", "region:TUSCANY", "airport:LUX", "country:ee", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:EIN", "country:fr", "airport:KUN", "city:BORDEAUX", "airport:SDR", "airport:TFS", "city:BRATISLAVA", "airport:FKB", "city:MALTA", "city:VIGO", "city:SEVILLE", "city:PRAGUE", "country:nl", "airport:GDN", "airport:VLC", "country:cz", "airport:SVQ", "airport:HHN", "airport:MRS", "connectingFlight:NAP:BGY", "airport:BLQ", "city:TOULOUSE", "city:BARI", "region:SARDINIA", "airport:BTS", "airport:BLL", "airport:NTE", "airport:LPA", "airport:POZ", "region:CANARY_ISLES", "city:BRINDISI", "airport:WMI", "city:KRAKOW", "city:CATANIA", "airport:GOT", "airport:SOF", "connectingFlight:BDS:BGY", "city:VENICE", "airport:FMM", "city:WARSAW", "city:PALERMO", "airport:ACE", "connectingFlight:CAG:BGY", "airport:IBZ", "city:BARCELONA", "region:COSTA_DE_SOL", "country:dk", "city:ROME", "country:lv", "country:lt", "city:MEMMINGEN", "country:lu", "airport:FUE", "region:COSTA_BRAVA", "airport:BUD", "airport:CFU", "city:GDANSK", "country:de", "airport:OPO", "connectingFlight:PMO:BGY", "city:CORFU", "city:IBIZA", "city:PORTO", "airport:PRG", "airport:SXF", "airport:MLA", "city:LANZAROTE", "airport:CPH", "country:it", "city:MALAGA", "airport:PIS", "city:ALICANTE", "airport:ALC", "airport:LIS", "country:ie", "airport:HAM", "region:SICILY", "region:NORTHERN_IRELAND", "country:sk", "airport:TSF", "city:POITIERS", "city:KARLSRUHE", "city:NANTES", "country:se", "city:WROCLAW", "city:DUBLIN", "airport:PSA", "airport:CIA", "city:COPENHAGEN", "country:bg", "region:PUGLIA", "city:LUXEMBOURG", "airport:BOD", "city:BUDAPEST", "city:RIGA", "city:CAGLIARI", "city:GIRONA", "country:be", "city:GOTHENBURG", "city:POZNAN"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 55.95,
      "lng": -3.3725
    },
    "priority": 31,
    "seasonalRoutes": [],
    "aliases": ["Scotland", "Great Britain", "UK", "GB"]
  }, {
    "id": "airport:VDA",
    "name": "Eilat (Ovda)",
    "categories": [],
    "iataCode": "VDA",
    "seoName": "eilat-ovda",
    "cityCode": "EILAT",
    "country": "Israel",
    "currencyCode": "EUR",
    "routes": ["country:cz", "airport:HHN", "city:CHARLEROI", "airport:NRN", "airport:PRG", "airport:KRK", "airport:SXF", "airport:BTS", "airport:CRL", "city:FRANKFURT", "airport:POZ", "country:it", "airport:BRE", "airport:WMI", "airport:BGY", "city:KRAKOW", "city:DUSSELDORF", "city:MILAN", "country:sk", "city:KARLSRUHE", "city:WARSAW", "country:hu", "airport:KUN", "city:BERLIN", "city:BRATISLAVA", "airport:FKB", "city:KAUNAS", "city:BUDAPEST", "country:lt", "city:PRAGUE", "country:pl", "airport:BUD", "airport:GDN", "country:be", "city:POZNAN", "city:BREMEN", "city:GDANSK", "country:de"],
    "countryCode": "il",
    "base": false,
    "coords": {
      "lat": 29.9402,
      "lng": 34.9358
    },
    "priority": 189,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:EIN",
    "name": "Eindhoven",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL"],
    "iataCode": "EIN",
    "seoName": "eindhoven",
    "cityCode": "EINDHOVEN",
    "country": "Netherlands",
    "currencyCode": "EUR",
    "routes": ["city:TANGIER", "airport:GRO", "airport:KRK", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "airport:BGY", "city:STOCKHOLM", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:MILAN", "city:EDINBURGH", "airport:NYO", "city:SOFIA", "city:NAPLES", "country:pt", "airport:AGA", "city:ALGHERO", "city:BOLOGNA", "country:pl", "city:VALENCIA", "airport:DUB", "airport:TNG", "airport:STN", "city:PISA", "airport:AHO", "country:es", "airport:MXP", "city:THESSALONIKI", "airport:RIX", "city:CHANIA", "airport:NAP", "country:mt", "city:PALMA", "city:MARSEILLE", "airport:RAK", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:FAO", "city:LISBON", "region:TUSCANY", "city:MANCHESTER", "airport:SKG", "city:LONDON", "airport:CTA", "country:gb", "country:fr", "airport:TFS", "city:BRATISLAVA", "city:MALTA", "city:SEVILLE", "city:PRAGUE", "city:RABAT", "airport:RBA", "airport:VLC", "country:cz", "airport:MRS", "airport:SVQ", "airport:BLQ", "region:SARDINIA", "airport:BTS", "airport:LPA", "region:CANARY_ISLES", "city:BRINDISI", "airport:MAN", "airport:WMI", "airport:OMR", "airport:AAR", "airport:MAD", "city:KRAKOW", "country:ma", "city:CATANIA", "airport:SOF", "city:VENICE", "city:WARSAW", "airport:ACE", "city:AARHUS", "airport:IBZ", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "country:dk", "city:ROME", "airport:MJV", "country:lv", "region:COSTA_BRAVA", "airport:BDS", "city:AGADIR", "airport:CFU", "region:SCOTLAND", "airport:OPO", "airport:CHQ", "city:MURCIA", "airport:EDI", "city:CORFU", "city:IBIZA", "city:PORTO", "airport:PRG", "city:ORADEA", "airport:MLA", "airport:REU", "city:LANZAROTE", "airport:FEZ", "country:it", "city:MALAGA", "city:FEZ", "city:ALICANTE", "airport:ALC", "airport:ATH", "airport:LIS", "country:ie", "region:SICILY", "country:sk", "airport:TSF", "country:se", "city:DUBLIN", "city:MADRID", "airport:PSA", "airport:CIA", "city:ATHENS", "region:CRETE", "country:bg", "region:PUGLIA", "city:RIGA", "country:ro", "city:GIRONA"],
    "countryCode": "nl",
    "base": true,
    "coords": {
      "lat": 51.4501,
      "lng": 5.37453
    },
    "priority": 40,
    "seasonalRoutes": [],
    "aliases": ["Holland"]
  }, {
    "id": "airport:ESU",
    "name": "Essaouira",
    "categories": ["GLF", "FAM", "SPR", "CTY", "CUL", "SEA"],
    "iataCode": "ESU",
    "seoName": "essaouira",
    "cityCode": "ESSAOUIRA",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["city:DUSSELDORF", "airport:NRN", "country:de"],
    "countryCode": "ma",
    "base": false,
    "coords": {
      "lat": 31.3918,
      "lng": -9.6757
    },
    "priority": 173,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:EXT",
    "name": "Exeter",
    "categories": [],
    "iataCode": "EXT",
    "seoName": "exeter",
    "cityCode": "EXETER",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["airport:NAP", "city:MALTA", "country:mt", "city:NAPLES", "country:it", "airport:AGP", "city:MALAGA", "country:es", "airport:MLA", "region:COSTA_DE_SOL"],
    "countryCode": "gb",
    "base": false,
    "coords": {
      "lat": 50.7344,
      "lng": -3.4139
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:FAO",
    "name": "Faro",
    "categories": ["GLF", "HEN", "FAM", "FST", "NIT", "CTY", "SEA"],
    "iataCode": "FAO",
    "seoName": "faro",
    "cityCode": "FARO",
    "country": "Portugal",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:BOURNEMOUTH", "city:CHARLEROI", "airport:ORK", "city:NUREMBERG", "airport:LTN", "connectingFlight:BCN:OPO", "airport:CRL", "city:FRANKFURT", "region:ENGLAND", "connectingFlight:BRU:OPO", "city:STOCKHOLM", "airport:BGY", "airport:KIR", "city:EINDHOVEN", "city:MILAN", "city:EDINBURGH", "airport:NYO", "city:BERLIN", "airport:DUS", "city:VIENNA", "country:pt", "city:NEWQUAY", "city:LEEDS", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "airport:BHX", "city:KERRY", "city:GLASGOW", "airport:STN", "city:SHANNON", "airport:NRN", "country:es", "airport:BRS", "city:PARIS", "city:MARSEILLE", "airport:BRE", "airport:FRA", "airport:NQY", "airport:VIE", "city:CARDIFF", "city:MANCHESTER", "city:LONDON", "city:DUSSELDORF", "connectingFlight:BGY:OPO", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "city:KNOCK", "country:nl", "airport:MRS", "airport:HHN", "city:BRUSSELS", "airport:LPL", "airport:TXL", "region:WALES", "airport:SEN", "airport:MAN", "airport:NCL", "airport:WMI", "connectingFlight:BLQ:OPO", "airport:BVA", "city:CORK", "airport:CGN", "airport:FMM", "city:WARSAW", "city:BARCELONA", "city:LIVERPOOL", "airport:ABZ", "city:MEMMINGEN", "airport:CWL", "region:COSTA_BRAVA", "airport:SNN", "city:BELFAST", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "airport:OPO", "airport:LBA", "airport:EDI", "city:PORTO", "connectingFlight:NUE:OPO", "airport:SXF", "country:at", "country:it", "country:ie", "airport:HAM", "airport:PIK", "region:NORTHERN_IRELAND", "city:BIRMINGHAM", "country:se", "city:WROCLAW", "airport:NOC", "city:ABERDEEN", "connectingFlight:VLC:OPO", "city:DUBLIN", "city:BRISTOL", "airport:BOH", "airport:EMA", "city:SOUTHEND_ON_SEA", "country:be", "city:BREMEN", "airport:BFS"],
    "countryCode": "pt",
    "base": true,
    "coords": {
      "lat": 37.0144,
      "lng": -7.96591
    },
    "priority": 23,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:FEZ",
    "name": "Fez",
    "categories": ["GLF", "FAM", "CTY", "OUT"],
    "iataCode": "FEZ",
    "seoName": "fez",
    "cityCode": "FEZ",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["airport:VLC", "airport:MRS", "airport:HHN", "airport:SVQ", "city:DOLE", "city:CHARLEROI", "airport:XCR", "city:TOULOUSE", "airport:NTE", "airport:DLE", "airport:CRL", "region:BRITTANY", "city:FRANKFURT", "city:TURIN", "region:ENGLAND", "airport:BGY", "airport:MAD", "city:EINDHOVEN", "airport:BVA", "city:MILAN", "city:VENICE", "airport:FMM", "city:BARCELONA", "airport:TLS", "city:MEMMINGEN", "region:COSTA_BRAVA", "city:VALENCIA", "country:de", "city:PISA", "airport:STN", "airport:NRN", "country:es", "airport:FNI", "city:PARIS", "city:MARSEILLE", "city:BREST", "country:it", "airport:BRE", "region:TUSCANY", "airport:BES", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "airport:EIN", "country:gb", "airport:TSF", "city:NIMES", "country:fr", "city:NANTES", "city:BORDEAUX", "city:MADRID", "airport:PSA", "city:SEVILLE", "airport:BOD", "country:nl", "country:be", "city:BREMEN", "airport:TRN"],
    "countryCode": "ma",
    "base": true,
    "coords": {
      "lat": 33.9273,
      "lng": -4.97796
    },
    "priority": 55,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:FSC",
    "name": "Figari",
    "categories": ["FAM", "SEA"],
    "iataCode": "FSC",
    "seoName": "figari",
    "cityCode": "FIGARI",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:BVA", "airport:CRL", "city:CHARLEROI", "country:fr", "city:PARIS", "country:be"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 41.5006,
      "lng": 9.09778
    },
    "priority": 142,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:HHN",
    "name": "Frankfurt Hahn",
    "categories": ["SKI", "FAM", "CTY", "CUL", "XMS"],
    "iataCode": "HHN",
    "seoName": "frankfurt-hahn",
    "cityCode": "FRANKFURT",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["city:TANGIER", "airport:GRO", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "airport:CIY", "airport:KIR", "airport:PSR", "city:PULA", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:EDINBURGH", "city:LAMEZIA", "city:NAPLES", "country:pt", "city:ALGHERO", "country:hr", "city:NEWQUAY", "city:TRAPANI", "airport:PDL", "airport:DUB", "city:KERRY", "city:PISA", "airport:TNG", "airport:STN", "airport:MPL", "airport:AHO", "country:es", "city:THESSALONIKI", "airport:RIX", "airport:SCQ", "city:CHANIA", "airport:NAP", "city:PALMA", "airport:RAK", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:NQY", "airport:PUY", "airport:FAO", "city:LISBON", "region:TUSCANY", "airport:SKG", "city:LONDON", "city:VILNIUS", "country:gb", "country:fr", "airport:SUF", "airport:TFS", "city:NADOR", "city:SANTIAGO", "city:BURGAS", "city:PESCARA", "city:BARI", "region:SARDINIA", "airport:LPA", "region:CANARY_ISLES", "country:ma", "city:MONTPELLIER", "airport:ACE", "airport:IBZ", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "city:COMISO", "city:ROME", "airport:NDR", "country:lv", "airport:TPS", "country:lt", "city:EILAT", "region:COSTA_BRAVA", "airport:VDA", "airport:CFU", "region:SCOTLAND", "airport:CHQ", "airport:EDI", "city:PONTA_DELGADA", "city:CORFU", "city:IBIZA", "airport:REU", "city:LANZAROTE", "airport:FEZ", "country:it", "city:FEZ", "city:ALICANTE", "city:MALAGA", "airport:ALC", "airport:LIS", "country:ie", "country:il", "region:SICILY", "city:JEREZ", "airport:CAG", "airport:XRY", "city:DUBLIN", "airport:BOJ", "airport:PSA", "airport:CIA", "region:CRETE", "country:bg", "region:PUGLIA", "airport:VNO", "city:RIGA", "city:CAGLIARI", "city:GIRONA", "region:AZORES"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 49.9487,
      "lng": 7.26389
    },
    "priority": 36,
    "seasonalRoutes": [],
    "aliases": ["Hahn", "Frankfurt Hahn"]
  }, {
    "id": "airport:FRA",
    "name": "Frankfurt International",
    "categories": ["SKI", "FAM", "CTY", "CUL", "XMS"],
    "iataCode": "FRA",
    "seoName": "frankfurt",
    "cityCode": "FRANKFURT",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "airport:SVQ", "city:PERPIGNAN", "airport:MRS", "airport:EFL", "airport:JTR", "city:SANTORINI", "airport:KRK", "airport:GRO", "airport:LPA", "city:KEFALONIA", "region:CANARY_ISLES", "city:TENERIFE", "country:gr", "airport:MAN", "city:BRINDISI", "city:FARO", "region:ENGLAND", "city:PERUGIA", "city:MYKONOS", "airport:BGY", "airport:PGF", "airport:MAD", "city:PULA", "city:KRAKOW", "city:GRAN_CANARIA", "country:ma", "airport:PMI", "city:CATANIA", "airport:MLA|Air Malta", "city:MILAN", "airport:AGP", "airport:JMK", "city:VENICE", "airport:ACE", "city:BARCELONA", "region:COSTA_DE_SOL", "country:pt", "airport:AGA", "country:hr", "airport:MJV", "country:pl", "region:COSTA_BRAVA", "airport:BDS", "airport:DUB", "city:VALENCIA", "airport:CFU", "city:AGADIR", "airport:STN", "city:PISA", "city:ZADAR", "airport:OPO", "airport:CHQ", "city:MURCIA", "city:CORFU", "city:PORTO", "country:es", "city:RIJEKA", "city:CHANIA", "city:LANZAROTE", "airport:ZAD", "city:PALMA", "country:mt", "city:MARSEILLE", "country:it", "city:ALICANTE", "city:MALAGA", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ALC", "airport:ATH", "airport:LIS", "country:ie", "airport:FAO", "airport:PUY", "city:LISBON", "airport:PEG", "region:TUSCANY", "city:MANCHESTER", "airport:CTA", "city:LONDON", "region:SICILY", "airport:BCN", "country:gb", "airport:TSF", "country:fr", "airport:TFS", "city:MADRID", "city:DUBLIN", "city:MALTA", "airport:PSA", "region:CRETE", "city:ATHENS", "city:SEVILLE", "region:PUGLIA", "airport:RJK", "city:GIRONA"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 50.02,
      "lng": 8.3414
    },
    "priority": 36,
    "seasonalRoutes": [],
    "aliases": ["Frankfurt International", "International"]
  }, {
    "id": "airport:FUE",
    "name": "Fuerteventura",
    "categories": ["FAM", "FST", "SEA"],
    "iataCode": "FUE",
    "seoName": "fuerteventura",
    "cityCode": "FUERTEVENTURA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:SVQ", "city:CHARLEROI", "airport:TXL", "airport:LPL", "airport:LTN", "airport:CRL", "airport:MAN", "region:ENGLAND", "airport:WMI", "airport:BGY", "airport:MAD", "city:MILAN", "city:EDINBURGH", "city:WARSAW", "city:BERLIN", "airport:DUS", "city:VIENNA", "city:BARCELONA", "city:LIVERPOOL", "city:LEEDS", "region:COSTA_BRAVA", "country:pl", "airport:SNN", "airport:DUB", "airport:BHX", "region:SCOTLAND", "country:de", "city:PISA", "airport:STN", "city:GLASGOW", "airport:LBA", "city:SHANNON", "airport:EDI", "airport:NRN", "country:es", "airport:SXF", "country:at", "country:it", "airport:BRE", "country:ie", "region:TUSCANY", "airport:VIE", "airport:PIK", "city:MANCHESTER", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "city:BIRMINGHAM", "city:MADRID", "city:DUBLIN", "airport:PSA", "airport:EMA", "city:SEVILLE", "country:be", "city:BREMEN"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 28.4527,
      "lng": -13.8638
    },
    "priority": 71,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:GDN",
    "name": "Gdansk",
    "categories": ["FAM", "SPR", "FST", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "GDN",
    "seoName": "gdansk",
    "cityCode": "GDANSK",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:VXO", "airport:ORK", "airport:KRK", "airport:MAN", "country:gr", "airport:NCL", "region:ENGLAND", "airport:BGY", "city:STOCKHOLM", "airport:AAR", "city:KRAKOW", "city:CORK", "city:MILAN", "city:EDINBURGH", "country:ua", "airport:NYO", "city:AARHUS", "city:BARCELONA", "country:dk", "city:NAPLES", "airport:TLV", "airport:KBP", "city:EILAT", "city:LEEDS", "region:COSTA_BRAVA", "country:pl", "airport:VDA", "city:BELFAST", "airport:WRO", "airport:DUB", "airport:BHX", "region:SCOTLAND", "city:NEWCASTLE", "airport:STN", "city:PISA", "airport:LBA", "airport:EDI", "airport:TRF", "country:es", "city:KIEV", "airport:BRS", "airport:REU", "airport:MLA", "city:TEL_AVIV", "airport:NAP", "country:mt", "country:it", "city:ALICANTE", "airport:ALC", "airport:ATH", "country:ie", "region:TUSCANY", "country:il", "city:MANCHESTER", "city:LONDON", "city:OSLO", "country:gb", "city:VAXJO", "region:NORTHERN_IRELAND", "city:BIRMINGHAM", "country:se", "city:WROCLAW", "city:DUBLIN", "city:BRISTOL", "airport:PSA", "city:MALTA", "city:ATHENS", "airport:BFS", "country:no"],
    "countryCode": "pl",
    "base": true,
    "coords": {
      "lat": 54.3776,
      "lng": 18.4662
    },
    "priority": 56,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:GVA",
    "name": "Geneva",
    "categories": [],
    "iataCode": "GVA",
    "seoName": "geneva",
    "cityCode": "GENEVA",
    "country": "Switzerland",
    "currencyCode": "CHF",
    "routes": ["city:MALTA", "country:mt", "airport:MLA|Air Malta"],
    "countryCode": "ch",
    "base": false,
    "coords": {
      "lat": 46.2383,
      "lng": 6.1094
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:GOA",
    "name": "Genoa",
    "categories": ["SKI", "ROM", "FAM", "CTY", "CUL"],
    "iataCode": "GOA",
    "seoName": "genoa",
    "cityCode": "GENOA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:BRI", "region:PUGLIA", "country:gb", "country:it", "region:ENGLAND", "city:BARI", "city:LONDON"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 44.4133,
      "lng": 8.8375
    },
    "priority": 106,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:GLA",
    "name": "Glasgow",
    "categories": ["SKI", "GLF", "HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "GLA",
    "seoName": "glasgow",
    "cityCode": "GLASGOW",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["airport:VLC", "city:CHARLEROI", "city:DERRY", "city:CARCASSONNE", "airport:KRK", "airport:CRL", "airport:LPA", "region:CANARY_ISLES", "country:gr", "region:ENGLAND", "airport:WMI", "airport:MAD", "city:KRAKOW", "city:GRAN_CANARIA", "airport:AGP", "airport:SOF", "airport:CCF", "city:WARSAW", "airport:ACE", "airport:LDY", "city:BERLIN", "region:COSTA_DE_SOL", "city:SOFIA", "country:pt", "country:lv", "country:lt", "airport:PLQ", "country:pl", "region:COSTA_BRAVA", "airport:WRO", "airport:DUB", "city:VALENCIA", "city:BYDGOSZCZ", "country:de", "airport:STN", "airport:CHQ", "country:es", "airport:RIX", "airport:SXF", "city:CHANIA", "city:LANZAROTE", "city:MALAGA", "city:ALICANTE", "airport:ALC", "airport:LIS", "country:ie", "city:LISBON", "airport:BZG", "city:LONDON", "country:gb", "region:NORTHERN_IRELAND", "country:fr", "city:WROCLAW", "city:DUBLIN", "city:MADRID", "region:CRETE", "country:bg", "city:RIGA", "city:PALANGA", "country:be"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 55.67194,
      "lng": -4.43306
    },
    "priority": 181,
    "seasonalRoutes": [],
    "aliases": ["Scotland", "Great Britain", "UK", "GB"],
    "weight": 1
  }, {
    "id": "airport:PIK",
    "name": "Glasgow Prestwick",
    "categories": ["SKI", "GLF", "HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "PIK",
    "seoName": "glasgow-prestwick",
    "cityCode": "GLASGOW",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:PISA", "city:MURCIA", "city:IBIZA", "country:es", "airport:GRO", "airport:MLA", "airport:LPA", "airport:RZE", "city:LANZAROTE", "country:mt", "city:PALMA", "region:CANARY_ISLES", "city:TENERIFE", "country:it", "city:ALICANTE", "airport:RMU", "city:MALAGA", "city:FARO", "city:RZESZOW", "airport:ALC", "airport:FAO", "region:TUSCANY", "airport:BZG", "city:FUERTEVENTURA", "airport:BCN", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "airport:ACE", "airport:IBZ", "airport:TFS", "city:BARCELONA", "region:COSTA_DE_SOL", "airport:PSA", "city:MALTA", "airport:CIA", "country:pt", "city:ROME", "airport:MJV", "airport:FUE", "region:COSTA_BRAVA", "country:pl", "city:GIRONA", "city:BYDGOSZCZ"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 55.5094,
      "lng": -4.58667
    },
    "priority": 102,
    "seasonalRoutes": [],
    "aliases": ["Scotland", "Great Britain", "UK", "GB", "Glasgow Prestwick", "Prestwick"],
    "weight": 2
  }, {
    "id": "airport:LPA",
    "name": "Gran Canaria",
    "categories": ["FAM", "SEA", "OUT"],
    "iataCode": "LPA",
    "seoName": "gran-canaria",
    "cityCode": "GRAN_CANARIA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:BOURNEMOUTH", "airport:ORK", "airport:LTN", "airport:KRK", "airport:CRL", "city:FRANKFURT", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "city:EINDHOVEN", "city:MILAN", "city:EDINBURGH", "airport:NYO", "country:hu", "city:BERLIN", "airport:DUS", "city:VIENNA", "city:LAMEZIA", "city:NAPLES", "country:pt", "city:LEEDS", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "city:VALENCIA", "airport:DUB", "airport:BHX", "airport:STN", "city:GLASGOW", "city:PISA", "airport:NRN", "country:es", "airport:MXP", "airport:BRS", "airport:SCQ", "airport:GLA", "connectingFlight:BRI:BGY", "airport:FRA", "airport:VIE", "region:TUSCANY", "city:MANCHESTER", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:EIN", "city:COLOGNE", "city:SANTIAGO", "city:SEVILLE", "country:nl", "country:no", "airport:VLC", "airport:SVQ", "airport:HHN", "connectingFlight:NAP:BGY", "airport:BLQ", "airport:LPL", "airport:TXL", "city:BARI", "region:SARDINIA", "airport:MAN", "city:BRINDISI", "airport:WMI", "airport:MAD", "city:KRAKOW", "city:CORK", "airport:CGN", "connectingFlight:BDS:BGY", "city:VENICE", "city:WARSAW", "city:PALERMO", "connectingFlight:CAG:BGY", "city:BARCELONA", "city:LIVERPOOL", "region:COSTA_BRAVA", "airport:BUD", "region:SCOTLAND", "country:de", "airport:OPO", "airport:LBA", "connectingFlight:PMO:BGY", "airport:EDI", "city:PORTO", "airport:TRF", "airport:SXF", "country:at", "country:it", "country:ie", "airport:HAM", "airport:PIK", "region:SICILY", "city:OSLO", "airport:TSF", "city:BIRMINGHAM", "country:se", "city:MADRID", "city:DUBLIN", "city:BRISTOL", "airport:PSA", "airport:BOH", "region:PUGLIA", "airport:EMA", "city:BUDAPEST", "city:CAGLIARI", "country:be"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 27.9319,
      "lng": -15.3866
    },
    "priority": 51,
    "seasonalRoutes": [],
    "aliases": ["Canaria"]
  }, {
    "id": "airport:GRZ",
    "name": "Graz",
    "categories": [],
    "iataCode": "GRZ",
    "seoName": "graz",
    "cityCode": "GRAZ",
    "country": "Austria",
    "currencyCode": "EUR",
    "routes": ["city:PALMA", "airport:PMI", "country:es"],
    "countryCode": "at",
    "base": false,
    "coords": {
      "lat": 46.9911,
      "lng": 15.4396
    },
    "priority": 209,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:GNB",
    "name": "Grenoble",
    "categories": ["SKI", "FAM", "CTY", "OUT"],
    "iataCode": "GNB",
    "seoName": "grenoble",
    "cityCode": "GRENOBLE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "country:gb", "region:ENGLAND", "country:ie", "airport:DUB", "city:DUBLIN", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 45.3629,
      "lng": 5.32937
    },
    "priority": 168,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:GOT",
    "name": "Göteborg Landvetter",
    "categories": ["SKI", "FAM", "SPR", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "GOT",
    "seoName": "gothenburg-landvetter",
    "cityCode": "GOTHENBURG",
    "country": "Sweden",
    "currencyCode": "SEK",
    "routes": ["country:cz", "airport:KRK", "airport:MAN", "country:gr", "region:ENGLAND", "airport:WMI", "airport:BGY", "city:KRAKOW", "airport:PMI", "city:MILAN", "airport:AGP", "city:EDINBURGH", "city:WARSAW", "region:COSTA_DE_SOL", "city:BARCELONA", "city:ROME", "country:hr", "region:COSTA_BRAVA", "country:pl", "city:STUTTGART", "airport:DUB", "region:SCOTLAND", "country:de", "airport:STN", "city:PISA", "city:ZADAR", "airport:EDI", "country:es", "airport:PRG", "city:THESSALONIKI", "airport:MLA", "airport:ZAD", "country:mt", "city:PALMA", "country:it", "city:MALAGA", "city:ALICANTE", "airport:ALC", "country:ie", "region:TUSCANY", "city:MANCHESTER", "airport:SKG", "city:LONDON", "airport:BCN", "country:gb", "city:DUBLIN", "airport:PSA", "city:MALTA", "airport:CIA", "city:PRAGUE", "airport:STR"],
    "countryCode": "se",
    "base": true,
    "coords": {
      "lat": 57.6741,
      "lng": 12.2925
    },
    "priority": 182,
    "seasonalRoutes": [],
    "aliases": ["Landvetter"]
  }, {
    "id": "airport:HAM",
    "name": "Hamburg",
    "categories": ["FAM", "SPR", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "HAM",
    "seoName": "hamburg",
    "cityCode": "HAMBURG",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "airport:SVQ", "connectingFlight:NAP:BGY", "city:BARI", "region:SARDINIA", "airport:KRK", "airport:LPA", "city:VERONA", "region:CANARY_ISLES", "city:KATOWICE", "country:gr", "airport:MAN", "city:BRINDISI", "city:FARO", "region:ENGLAND", "airport:BGY", "airport:MAD", "city:KRAKOW", "city:GRAN_CANARIA", "country:ma", "airport:PMI", "airport:SOF", "city:MILAN", "airport:AGP", "connectingFlight:BDS:BGY", "city:EDINBURGH", "city:VENICE", "city:PALERMO", "connectingFlight:CAG:BGY", "city:BARCELONA", "region:COSTA_DE_SOL", "city:MARRAKESH", "city:LAMEZIA", "city:SOFIA", "city:NAPLES", "country:pt", "country:hr", "connectingFlight:SUF:BGY", "region:COSTA_BRAVA", "country:pl", "airport:DUB", "city:VALENCIA", "region:SCOTLAND", "airport:STN", "airport:KTW", "city:ZADAR", "airport:OPO", "connectingFlight:PMO:BGY", "airport:EDI", "airport:TRF", "city:PORTO", "country:es", "city:THESSALONIKI", "airport:ZAD", "city:PALMA", "airport:RAK", "country:it", "city:ALICANTE", "city:MALAGA", "connectingFlight:BRI:BGY", "airport:ALC", "airport:LIS", "country:ie", "airport:FAO", "city:LISBON", "airport:SKG", "city:MANCHESTER", "city:LONDON", "airport:BCN", "city:OSLO", "region:SICILY", "country:gb", "airport:TSF", "airport:SUF", "city:MADRID", "city:DUBLIN", "country:bg", "region:PUGLIA", "city:SEVILLE", "city:CAGLIARI", "airport:VRN", "country:no"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 53.63028,
      "lng": 9.99111
    },
    "priority": 183,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:HAJ",
    "name": "Hannover",
    "categories": [],
    "iataCode": "HAJ",
    "seoName": "hannover",
    "cityCode": "HANNOVER",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["city:PALMA", "airport:PMI", "country:es"],
    "countryCode": "de",
    "base": false,
    "coords": {
      "lat": 52.2739,
      "lng": 9.4106
    },
    "priority": 0,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:HAU",
    "name": "Haugesund",
    "categories": ["FAM", "FST", "CUL"],
    "iataCode": "HAU",
    "seoName": "haugesund",
    "cityCode": "HAUGESUND",
    "country": "Norway",
    "currencyCode": "NOK",
    "routes": ["city:ALICANTE", "airport:AGP", "city:MALAGA", "airport:ALC", "country:es", "region:COSTA_BRAVA", "region:COSTA_DE_SOL"],
    "countryCode": "no",
    "base": false,
    "coords": {
      "lat": 59.3453,
      "lng": 5.20836
    },
    "priority": 162,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:HER",
    "name": "Heraklion Crete",
    "categories": [],
    "iataCode": "HER",
    "seoName": "heraklion-crete",
    "cityCode": "HERAKLION",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["city:DUSSELDORF", "city:ATHENS", "country:gr", "city:MILAN", "country:it", "airport:TXL", "airport:ATH", "airport:MXP", "airport:BGY", "city:BERLIN", "airport:DUS", "country:de"],
    "countryCode": "gr",
    "base": false,
    "coords": {
      "lat": 35.3397,
      "lng": 25.1803
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:IBZ",
    "name": "Ibiza",
    "categories": ["HEN", "FAM", "FST", "NIT", "SEA"],
    "iataCode": "IBZ",
    "seoName": "ibiza",
    "cityCode": "IBIZA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:CHARLEROI", "airport:CRL", "city:FRANKFURT", "city:TURIN", "country:gr", "region:ENGLAND", "airport:BGY", "city:EINDHOVEN", "airport:AGP", "city:MILAN", "city:EDINBURGH", "country:hu", "city:BERLIN", "airport:DUS", "city:VIENNA", "city:LAMEZIA", "city:NAPLES", "city:LEEDS", "connectingFlight:SUF:BGY", "city:BOLOGNA", "connectingFlight:SXF:BGY", "airport:DUB", "city:VALENCIA", "airport:BHX", "airport:STN", "city:PISA", "city:GLASGOW", "city:SHANNON", "airport:NRN", "country:es", "airport:BRS", "connectingFlight:CTA:BGY", "connectingFlight:CGN:BGY", "city:MARSEILLE", "connectingFlight:BRI:BGY", "region:TUSCANY", "airport:VIE", "city:MANCHESTER", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "city:SEVILLE", "connectingFlight:BUD:BGY", "country:nl", "city:PESCARA", "airport:VLC", "airport:HHN", "airport:SVQ", "airport:MRS", "connectingFlight:NAP:BGY", "airport:BLQ", "airport:LPL", "airport:TXL", "city:BARI", "region:SARDINIA", "city:BRINDISI", "airport:MAN", "connectingFlight:PSR:BGY", "airport:FCO", "airport:MAD", "city:CATANIA", "connectingFlight:BDS:BGY", "city:VENICE", "city:PALERMO", "connectingFlight:CAG:BGY", "region:COSTA_DE_SOL", "city:BARCELONA", "city:LIVERPOOL", "city:ROME", "connectingFlight:ATH:BGY", "airport:SNN", "region:COSTA_BRAVA", "region:SCOTLAND", "country:de", "airport:LBA", "connectingFlight:PMO:BGY", "airport:EDI", "country:at", "city:MALAGA", "country:it", "country:ie", "airport:PIK", "region:SICILY", "airport:TSF", "city:BIRMINGHAM", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "airport:PSA", "city:ATHENS", "airport:EMA", "region:PUGLIA", "city:BUDAPEST", "city:CAGLIARI", "country:be", "airport:TRN"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 38.8729,
      "lng": 1.37312
    },
    "priority": 33,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:INN",
    "name": "Innsbruck",
    "categories": ["SKI"],
    "iataCode": "INN",
    "seoName": "innsbruck",
    "cityCode": "INNSBRUCK",
    "country": "Austria",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:DUSSELDORF", "airport:PMI", "country:gb", "country:es", "airport:DUS", "city:DUBLIN", "city:PALMA", "region:ENGLAND", "country:ie", "airport:DUB", "country:de", "city:LONDON"],
    "countryCode": "at",
    "base": false,
    "coords": {
      "lat": 47.1537,
      "lng": 11.2038
    },
    "priority": 197,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:XRY",
    "name": "Jerez",
    "categories": ["GLF", "FAM", "CUL", "SEA", "OUT"],
    "iataCode": "XRY",
    "seoName": "jerez",
    "cityCode": "JEREZ",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:BCN", "airport:HHN", "city:FRANKFURT", "country:gb", "region:ENGLAND", "country:es", "region:COSTA_BRAVA", "city:BARCELONA", "country:de", "city:LONDON"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 36.7446,
      "lng": -6.06011
    },
    "priority": 125,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:KLX",
    "name": "Kalamata",
    "categories": ["FAM", "SPR", "NIT", "CTY", "CUL", "SEA"],
    "iataCode": "KLX",
    "seoName": "kalamata",
    "cityCode": "KALAMATA",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["airport:VIE", "country:at", "city:VIENNA"],
    "countryCode": "gr",
    "base": false,
    "coords": {
      "lat": 37.0683,
      "lng": 22.0255
    },
    "priority": 175,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:FKB",
    "name": "Karlsruhe / Baden-Baden",
    "categories": ["FAM", "SPR", "CTY"],
    "iataCode": "FKB",
    "seoName": "karlsruhe-baden",
    "cityCode": "KARLSRUHE",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:SVQ", "city:BARI", "airport:GRO", "region:SARDINIA", "country:gr", "region:ENGLAND", "airport:WMI", "country:ma", "airport:PMI", "airport:SOF", "airport:AGP", "city:EDINBURGH", "city:WARSAW", "region:COSTA_DE_SOL", "city:MARRAKESH", "city:LAMEZIA", "city:SOFIA", "airport:TLV", "country:pt", "city:ROME", "country:hr", "city:EILAT", "airport:TPS", "city:TRAPANI", "region:COSTA_BRAVA", "country:pl", "airport:VDA", "region:SCOTLAND", "airport:STN", "city:ZADAR", "airport:OPO", "airport:EDI", "city:PORTO", "country:es", "city:THESSALONIKI", "airport:MLA", "city:TEL_AVIV", "airport:ZAD", "country:mt", "city:PALMA", "airport:RAK", "airport:BRI", "country:it", "city:ALICANTE", "city:MALAGA", "airport:ALC", "airport:ATH", "airport:LIS", "city:LISBON", "country:il", "airport:SKG", "city:LONDON", "region:SICILY", "airport:CAG", "country:gb", "airport:SUF", "city:MALTA", "city:ATHENS", "airport:CIA", "country:bg", "city:SEVILLE", "region:PUGLIA", "city:GIRONA", "city:CAGLIARI"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 48.7794,
      "lng": 8.0805
    },
    "priority": 89,
    "seasonalRoutes": [],
    "aliases": ["Baden", "Karlsruhe Baden-Baden"]
  }, {
    "id": "airport:KTW",
    "name": "Katowice",
    "categories": ["FAM", "CTY", "CUL"],
    "iataCode": "KTW",
    "seoName": "katowice",
    "cityCode": "KATOWICE",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:STN", "city:HAMBURG", "country:gb", "city:MILAN", "airport:EDI", "city:CORFU", "city:EDINBURGH", "airport:MXP", "city:BIRMINGHAM", "city:DUBLIN", "city:ATHENS", "country:gr", "country:it", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "region:ENGLAND", "airport:ATH", "country:ie", "airport:HAM", "airport:DUB", "airport:BHX", "airport:CFU", "region:SCOTLAND", "country:de", "city:LONDON"],
    "countryCode": "pl",
    "base": true,
    "coords": {
      "lat": 50.4743,
      "lng": 19.08
    },
    "priority": 90,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:KUN",
    "name": "Kaunas",
    "categories": ["FAM", "SPR", "FST", "CTY", "OUT"],
    "iataCode": "KUN",
    "seoName": "kaunas",
    "cityCode": "KAUNAS",
    "country": "Lithuania",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:BLQ", "airport:LTN", "airport:GRO", "country:gr", "region:ENGLAND", "airport:RMI", "airport:PMI", "city:MILAN", "city:EDINBURGH", "city:NAPLES", "airport:TLV", "country:dk", "airport:RHO", "city:EILAT", "city:BOLOGNA", "airport:SNN", "region:COSTA_BRAVA", "airport:VDA", "airport:DUB", "city:RIMINI", "region:SCOTLAND", "airport:STN", "city:SHANNON", "airport:EDI", "airport:MXP", "country:es", "airport:BRS", "city:TEL_AVIV", "airport:NAP", "city:PALMA", "airport:CPH", "country:it", "city:ALICANTE", "airport:ALC", "country:ie", "city:RHODES", "city:PAPHOS", "country:il", "city:LONDON", "country:gb", "city:DUBLIN", "city:BRISTOL", "airport:BOJ", "city:COPENHAGEN", "country:bg", "airport:PFO", "city:BURGAS", "city:GIRONA"],
    "countryCode": "lt",
    "base": true,
    "coords": {
      "lat": 54.9639,
      "lng": 24.0848
    },
    "priority": 65,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:EFL",
    "name": "Kefalonia",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CUL", "SEA", "OUT"],
    "iataCode": "EFL",
    "seoName": "kefalonia",
    "cityCode": "KEFALONIA",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["city:PISA", "airport:STN", "country:gb", "city:MILAN", "airport:TXL", "city:BERLIN", "city:FRANKFURT", "airport:PSA", "country:it", "region:ENGLAND", "airport:FRA", "airport:BGY", "region:TUSCANY", "country:de", "city:LONDON"],
    "countryCode": "gr",
    "base": false,
    "coords": {
      "lat": 38.1201,
      "lng": 20.5005
    },
    "priority": 156,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:KIR",
    "name": "Kerry",
    "categories": ["GLF", "FAM", "SPR", "XMS"],
    "iataCode": "KIR",
    "seoName": "kerry",
    "cityCode": "KERRY",
    "country": "Ireland",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:HHN", "country:gb", "country:es", "airport:LTN", "airport:SXF", "city:BERLIN", "city:FRANKFURT", "country:pt", "city:ALICANTE", "city:FARO", "airport:ALC", "region:ENGLAND", "region:COSTA_BRAVA", "airport:FAO", "country:de", "city:LONDON"],
    "countryCode": "ie",
    "base": false,
    "coords": {
      "lat": 52.1809,
      "lng": -9.52378
    },
    "priority": 185,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:NOC",
    "name": "Knock",
    "categories": ["GLF", "FAM", "CUL", "OUT"],
    "iataCode": "NOC",
    "seoName": "knock",
    "cityCode": "KNOCK",
    "country": "Ireland",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:LPL", "country:es", "airport:LTN", "airport:BRS", "airport:GRO", "city:LANZAROTE", "region:CANARY_ISLES", "city:TENERIFE", "city:ALICANTE", "country:it", "city:MALAGA", "city:FARO", "region:ENGLAND", "airport:ALC", "airport:FAO", "airport:BGY", "city:LONDON", "country:gb", "city:MILAN", "airport:CGN", "airport:AGP", "city:COLOGNE", "city:BIRMINGHAM", "airport:ACE", "airport:TFS", "region:COSTA_DE_SOL", "city:LIVERPOOL", "city:BRISTOL", "country:pt", "airport:EMA", "region:COSTA_BRAVA", "city:GIRONA", "country:de"],
    "countryCode": "ie",
    "base": false,
    "coords": {
      "lat": 53.9103,
      "lng": -8.81849
    },
    "priority": 73,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:KGS",
    "name": "Kos",
    "categories": ["HEN", "FAM", "NIT", "SEA"],
    "iataCode": "KGS",
    "seoName": "kos",
    "cityCode": "KOS",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["city:DUSSELDORF", "airport:TXL", "city:BERLIN", "airport:DUS", "country:de"],
    "countryCode": "gr",
    "base": false,
    "coords": {
      "lat": 36.7933,
      "lng": 27.0917
    },
    "priority": 129,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:KSC",
    "name": "Kosice",
    "categories": [],
    "iataCode": "KSC",
    "seoName": "kosice",
    "cityCode": "KOSICE",
    "country": "Slovakia",
    "currencyCode": "EUR",
    "routes": ["airport:SEN", "country:gb", "city:SOUTHEND_ON_SEA", "region:ENGLAND"],
    "countryCode": "sk",
    "base": false,
    "coords": {
      "lat": 48.6631,
      "lng": 21.2411
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:KRK",
    "name": "Krakow",
    "categories": ["SKI", "HEN", "FAM", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "KRK",
    "seoName": "krakow",
    "cityCode": "KRAKOW",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:LDE", "city:HAMBURG", "city:BOURNEMOUTH", "city:CHARLEROI", "city:NUREMBERG", "airport:GRO", "airport:DTM", "airport:CRL", "city:FRANKFURT", "city:LVIV", "city:TENERIFE", "country:gr", "region:ENGLAND", "airport:MMX", "city:STOCKHOLM", "airport:BGY", "airport:PSR", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:MILAN", "city:EDINBURGH", "airport:NYO", "city:SZCZECIN", "city:BERLIN", "city:VIENNA", "city:LAMEZIA", "city:NAPLES", "airport:TLV", "country:pt", "airport:KBP", "city:LEEDS", "city:BOLOGNA", "country:pl", "airport:SZZ", "airport:DUB", "city:VALENCIA", "airport:BHX", "city:GLASGOW", "city:PISA", "airport:STN", "city:SHANNON", "country:es", "airport:BRS", "city:PARIS", "city:CHANIA", "connectingFlight:CTA:BGY", "city:TEL_AVIV", "airport:NAP", "city:PALMA", "country:mt", "city:MARSEILLE", "airport:RAK", "airport:GLA", "connectingFlight:BRI:BGY", "airport:FRA", "city:PAPHOS", "city:LISBON", "airport:VIE", "region:TUSCANY", "city:MANCHESTER", "city:LONDON", "airport:BCN", "country:gb", "airport:EIN", "country:fr", "city:BORDEAUX", "airport:LWO", "airport:SUF", "airport:TFS", "city:MALTA", "airport:PFO", "city:SEVILLE", "city:BURGAS", "city:PRAGUE", "country:nl", "city:PESCARA", "airport:STR", "airport:GDN", "country:no", "airport:VLC", "country:cy", "country:cz", "airport:SVQ", "airport:MRS", "airport:BLQ", "airport:LPL", "city:BARI", "region:SARDINIA", "airport:LPA", "region:CANARY_ISLES", "city:BRINDISI", "airport:MAN", "airport:MAD", "airport:BVA", "country:ma", "city:LOURDES", "city:CATANIA", "airport:GOT", "connectingFlight:BDS:BGY", "city:VENICE", "country:ua", "city:PALERMO", "city:MALMO", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "city:LIVERPOOL", "airport:NUE", "city:ROME", "city:EILAT", "region:COSTA_BRAVA", "airport:SNN", "airport:VDA", "city:STUTTGART", "city:BELFAST", "city:AMMAN", "region:SCOTLAND", "city:GDANSK", "country:de", "airport:OPO", "airport:LBA", "connectingFlight:PMO:BGY", "airport:CHQ", "airport:EDI", "city:PORTO", "airport:TRF", "airport:PRG", "city:KIEV", "airport:SXF", "country:at", "airport:MLA", "country:it", "city:MALAGA", "city:ALICANTE", "airport:ALC", "airport:ATH", "airport:LIS", "country:ie", "airport:HAM", "country:il", "region:SICILY", "city:OSLO", "airport:CAG", "region:NORTHERN_IRELAND", "airport:TSF", "city:BIRMINGHAM", "country:se", "airport:AMM", "city:DUBLIN", "city:MADRID", "airport:BOJ", "city:BRISTOL", "airport:PSA", "airport:BOH", "airport:CIA", "city:ATHENS", "region:CRETE", "country:bg", "country:jo", "region:PUGLIA", "city:DORTMUND", "airport:EMA", "airport:BOD", "city:GIRONA", "city:CAGLIARI", "country:be", "city:GOTHENBURG", "airport:BFS"],
    "countryCode": "pl",
    "base": true,
    "coords": {
      "lat": 50.0777,
      "lng": 19.7848
    },
    "priority": 17,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:KBP",
    "name": "Kyiv-Boryspil",
    "categories": [],
    "iataCode": "KBP",
    "seoName": "kyiv-boryspil",
    "cityCode": "KIEV",
    "country": "Ukraine",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:KRK", "airport:BTS", "airport:POZ", "country:gr", "airport:MAN", "region:ENGLAND", "airport:WMI", "city:STOCKHOLM", "city:KRAKOW", "airport:MLA|Air Malta", "airport:SOF", "city:WARSAW", "airport:NYO", "city:BERLIN", "city:BARCELONA", "city:SOFIA", "country:lt", "region:COSTA_BRAVA", "country:pl", "airport:WRO", "airport:DUB", "city:GDANSK", "country:de", "city:BYDGOSZCZ", "airport:STN", "country:es", "airport:SXF", "country:mt", "airport:ATH", "country:ie", "city:PAPHOS", "airport:BZG", "city:MANCHESTER", "city:LONDON", "airport:BCN", "city:VILNIUS", "country:gb", "country:sk", "city:WROCLAW", "country:se", "city:BRATISLAVA", "city:DUBLIN", "city:MALTA", "city:ATHENS", "country:bg", "airport:PFO", "airport:VNO", "airport:GDN", "city:POZNAN"],
    "countryCode": "ua",
    "base": false,
    "coords": {
      "lat": 50.2041,
      "lng": 30.5336
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LRH",
    "name": "La Rochelle",
    "categories": ["FAM", "SPR", "CTY", "SEA", "OUT"],
    "iataCode": "LRH",
    "seoName": "la-rochelle",
    "cityCode": "LA_ROCHELLE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:OPO", "city:CHARLEROI", "country:gb", "city:PORTO", "city:DUBLIN", "airport:CRL", "country:pt", "region:ENGLAND", "country:ie", "airport:DUB", "country:be", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 46.1792,
      "lng": -1.19528
    },
    "priority": 126,
    "seasonalRoutes": [],
    "aliases": ["Rochelle"]
  }, {
    "id": "airport:SUF",
    "name": "Lamezia",
    "categories": ["FAM", "CTY", "SEA"],
    "iataCode": "SUF",
    "seoName": "lamezia",
    "cityCode": "LAMEZIA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:HHN", "city:HAMBURG", "country:cz", "city:CHARLEROI", "airport:BLQ", "connectingFlight:DUB:BGY", "airport:KRK", "connectingFlight:HAM:BGY", "airport:CRL", "city:FRANKFURT", "connectingFlight:PMI:BGY", "region:CANARY_ISLES", "city:TENERIFE", "connectingFlight:VLC:BGY", "country:gr", "region:ENGLAND", "airport:BGY", "airport:MAD", "city:KRAKOW", "city:GRAN_CANARIA", "connectingFlight:CRL:BGY", "city:MILAN", "city:VENICE", "connectingFlight:IBZ:BGY", "country:hu", "city:BERLIN", "city:BARCELONA", "region:COSTA_DE_SOL", "connectingFlight:EMA:BGY", "connectingFlight:TFS:BGY", "connectingFlight:CFU:BGY", "country:pt", "connectingFlight:BCN:BGY", "connectingFlight:ATH:BGY", "city:BOLOGNA", "region:COSTA_BRAVA", "country:pl", "connectingFlight:SXF:BGY", "city:VALENCIA", "connectingFlight:MAN:BGY", "country:de", "connectingFlight:LPA:BGY", "airport:STN", "city:PISA", "connectingFlight:ZAZ:BGY", "airport:NRN", "city:CORFU", "city:IBIZA", "country:es", "airport:MXP", "city:THESSALONIKI", "airport:MLA", "connectingFlight:CGN:BGY", "city:PALMA", "country:mt", "country:it", "city:MALAGA", "city:ALICANTE", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "country:ie", "airport:HAM", "city:LISBON", "connectingFlight:PRG:BGY", "region:TUSCANY", "city:MANCHESTER", "connectingFlight:ALC:BGY", "city:LONDON", "connectingFlight:BRE:BGY", "city:DUSSELDORF", "country:gb", "airport:TSF", "connectingFlight:SKG:BGY", "city:COLOGNE", "connectingFlight:BRS:BGY", "city:KARLSRUHE", "city:BIRMINGHAM", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "airport:FKB", "city:MALTA", "airport:PSA", "city:ATHENS", "city:ZARAGOZA", "city:BUDAPEST", "connectingFlight:BUD:BGY", "city:PRAGUE", "connectingFlight:LIS:BGY", "country:be", "city:BREMEN", "connectingFlight:AGP:BGY"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 38.9054,
      "lng": 16.2423
    },
    "priority": 42,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:ACE",
    "name": "Lanzarote",
    "categories": ["FAM", "SEA"],
    "iataCode": "ACE",
    "seoName": "lanzarote",
    "cityCode": "LANZAROTE",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "airport:HHN", "airport:SVQ", "city:CHARLEROI", "airport:BLQ", "airport:ORK", "airport:TXL", "airport:LPL", "airport:LTN", "city:BARI", "region:SARDINIA", "city:SANTANDER", "airport:CRL", "city:FRANKFURT", "airport:MAN", "country:gr", "city:BRINDISI", "airport:NCL", "region:ENGLAND", "airport:BGY", "airport:FCO", "airport:MAD", "city:EINDHOVEN", "city:CATANIA", "city:CORK", "city:MILAN", "connectingFlight:BDS:BGY", "city:EDINBURGH", "city:PALERMO", "connectingFlight:CAG:BGY", "city:BERLIN", "airport:DUS", "city:VIENNA", "city:LIVERPOOL", "city:ROME", "connectingFlight:ATH:BGY", "city:LEEDS", "city:BOLOGNA", "airport:SNN", "city:BELFAST", "airport:DUB", "city:VALENCIA", "airport:BHX", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "city:GLASGOW", "airport:STN", "airport:LBA", "city:SHANNON", "connectingFlight:PMO:BGY", "connectingFlight:CTA:FCO", "airport:NRN", "airport:EDI", "country:es", "airport:BRS", "airport:SCQ", "airport:SXF", "country:at", "airport:GLA", "country:it", "connectingFlight:BRI:BGY", "airport:FRA", "country:ie", "airport:VIE", "airport:PIK", "city:MANCHESTER", "city:LONDON", "region:SICILY", "city:DUSSELDORF", "region:NORTHERN_IRELAND", "country:gb", "airport:EIN", "city:BIRMINGHAM", "airport:SDR", "airport:NOC", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "city:SANTIAGO", "city:ATHENS", "region:PUGLIA", "city:SEVILLE", "airport:EMA", "city:KNOCK", "city:ZARAGOZA", "country:nl", "airport:ZAZ", "city:CAGLIARI", "country:be", "airport:BFS"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 28.9455,
      "lng": -13.6052
    },
    "priority": 46,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LPP",
    "name": "Lappeenranta",
    "categories": ["SKI", "FAM", "CTY", "OUT"],
    "iataCode": "LPP",
    "seoName": "lappeenranta",
    "cityCode": "LAPPEENRANTA",
    "country": "Finland",
    "currencyCode": "EUR",
    "routes": ["city:ATHENS", "city:MILAN", "country:it", "country:gr", "airport:ATH", "city:THESSALONIKI", "airport:BGY", "airport:SKG"],
    "countryCode": "fi",
    "base": false,
    "coords": {
      "lat": 61.0446,
      "lng": 28.1444
    },
    "priority": 164,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LCA",
    "name": "Larnaca",
    "categories": [],
    "iataCode": "LCA",
    "seoName": "larnaca",
    "cityCode": "LARNACA",
    "country": "Cyprus",
    "currencyCode": "EUR",
    "routes": ["city:BRUSSELS", "airport:BRU", "country:be", "airport:VIE", "country:at", "city:VIENNA"],
    "countryCode": "cy",
    "base": false,
    "coords": {
      "lat": 34.8751,
      "lng": 33.6249
    },
    "priority": 220,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LBA",
    "name": "Leeds Bradford",
    "categories": ["FAM", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "LBA",
    "seoName": "leeds",
    "cityCode": "LEEDS",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["airport:GRO", "airport:KRK", "airport:BTS", "airport:LPA", "region:CANARY_ISLES", "city:TENERIFE", "country:gr", "city:FARO", "city:LIMOGES", "airport:WMI", "city:FUERTEVENTURA", "city:KRAKOW", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "airport:LIG", "city:VENICE", "airport:ACE", "city:WARSAW", "airport:IBZ", "region:COSTA_DE_SOL", "country:pt", "airport:MJV", "country:lv", "country:lt", "airport:FUE", "region:COSTA_BRAVA", "country:pl", "airport:WRO", "airport:DUB", "airport:CFU", "city:GDANSK", "city:PISA", "city:MURCIA", "airport:CHQ", "city:CORFU", "city:IBIZA", "country:es", "airport:RIX", "airport:MLA", "city:CHANIA", "city:LANZAROTE", "country:mt", "city:PALMA", "country:it", "city:ALICANTE", "city:MALAGA", "airport:RMU", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ALC", "country:ie", "airport:FAO", "region:TUSCANY", "city:VILNIUS", "airport:TSF", "country:sk", "country:fr", "airport:TFS", "city:WROCLAW", "city:BRATISLAVA", "city:DUBLIN", "city:MALTA", "airport:PSA", "region:CRETE", "airport:VNO", "city:RIGA", "city:GIRONA", "airport:GDN"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 53.8659,
      "lng": -1.66057
    },
    "priority": 74,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB", "Bradford"]
  }, {
    "id": "airport:LEJ",
    "name": "Leipzig",
    "categories": ["FAM", "SPR", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "LEJ",
    "seoName": "leipzig-halle",
    "cityCode": "LEIPZIG",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "country:gb", "region:ENGLAND", "city:LONDON"],
    "countryCode": "de",
    "base": false,
    "coords": {
      "lat": 51.4324,
      "lng": 12.2416
    },
    "priority": 153,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LIL",
    "name": "Lille",
    "categories": ["FAM", "SPR", "FST", "CTY", "CUL"],
    "iataCode": "LIL",
    "seoName": "lille",
    "cityCode": "LILLE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:OPO", "airport:MRS", "country:pt", "city:MARSEILLE", "city:PORTO", "country:fr"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 50.5619,
      "lng": 3.08944
    },
    "priority": 134,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LIG",
    "name": "Limoges",
    "categories": ["SKI", "FAM", "CTY", "CUL"],
    "iataCode": "LIG",
    "seoName": "limoges",
    "cityCode": "LIMOGES",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["city:BRISTOL", "airport:STN", "airport:LBA", "airport:EMA", "airport:MAN", "country:gb", "city:LEEDS", "region:ENGLAND", "airport:BRS", "city:BIRMINGHAM", "city:MANCHESTER", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 45.8628,
      "lng": 1.17944
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LNZ",
    "name": "Linz",
    "categories": ["SKI", "FAM", "CTY", "CUL", "XMS"],
    "iataCode": "LNZ",
    "seoName": "linz",
    "cityCode": "LINZ",
    "country": "Austria",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:PALMA", "airport:PMI", "country:gb", "region:ENGLAND", "country:es", "city:LONDON"],
    "countryCode": "at",
    "base": false,
    "coords": {
      "lat": 48.2332,
      "lng": 14.1875
    },
    "priority": 160,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LIS",
    "name": "Lisbon",
    "categories": ["GLF", "HEN", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "SEA", "OUT"],
    "iataCode": "LIS",
    "seoName": "lisbon",
    "cityCode": "LISBON",
    "country": "Portugal",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "connectingFlight:NRN:OPO", "connectingFlight:BCN:OPO", "airport:KRK", "airport:CRL", "city:FRANKFURT", "region:ENGLAND", "airport:BGY", "city:EINDHOVEN", "city:MILAN", "city:EDINBURGH", "connectingFlight:PMI:OPO", "city:BERLIN", "city:LAMEZIA", "city:NAPLES", "country:pt", "airport:TLS", "airport:PDL", "connectingFlight:SUF:BGY", "city:CLERMONT_FERRAND", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "connectingFlight:MXP:OPO", "airport:STN", "city:PISA", "city:GLASGOW", "country:es", "airport:BRU", "airport:TER", "city:PARIS", "connectingFlight:CGN:BGY", "airport:NAP", "city:PALMA", "country:mt", "city:MARSEILLE", "airport:GLA", "connectingFlight:BRI:BGY", "connectingFlight:FMM:OPO", "airport:FRA", "airport:BRE", "connectingFlight:DTM:OPO", "region:TUSCANY", "city:MANCHESTER", "airport:LUX", "city:LONDON", "connectingFlight:MAD:OPO", "city:DUSSELDORF", "airport:EIN", "country:gb", "city:COLOGNE", "country:fr", "city:BORDEAUX", "city:TERCEIRA", "airport:FKB", "city:MALTA", "country:nl", "airport:HHN", "airport:MRS", "airport:BLQ", "city:BRUSSELS", "city:TOULOUSE", "city:BARI", "region:SARDINIA", "airport:CFE", "airport:MAN", "city:BRINDISI", "airport:WMI", "airport:BVA", "city:KRAKOW", "airport:MLA|Air Malta", "connectingFlight:BDS:BGY", "city:PALERMO", "city:WARSAW", "connectingFlight:CAG:BGY", "city:BARCELONA", "city:ROME", "city:MEMMINGEN", "country:lu", "region:COSTA_BRAVA", "region:SCOTLAND", "country:de", "airport:OPO", "connectingFlight:PMO:BGY", "city:PONTA_DELGADA", "airport:EDI", "city:PORTO", "airport:SXF", "country:it", "country:ie", "airport:HAM", "region:SICILY", "city:KARLSRUHE", "city:WROCLAW", "connectingFlight:VLC:OPO", "city:MADRID", "city:DUBLIN", "airport:PSA", "airport:CIA", "region:PUGLIA", "city:DORTMUND", "city:LUXEMBOURG", "airport:BOD", "city:CAGLIARI", "region:AZORES", "country:be", "city:BREMEN"],
    "countryCode": "pt",
    "base": true,
    "coords": {
      "lat": 38.7813,
      "lng": -9.13592
    },
    "priority": 32,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LPL",
    "name": "Liverpool",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL"],
    "iataCode": "LPL",
    "seoName": "liverpool",
    "cityCode": "LIVERPOOL",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["country:cy", "country:cz", "city:DERRY", "city:BERGERAC", "airport:ORK", "city:BARI", "airport:KRK", "airport:GRO", "airport:DTM", "airport:LPA", "airport:POZ", "region:CANARY_ISLES", "city:TENERIFE", "country:gr", "city:FARO", "airport:WMI", "city:FUERTEVENTURA", "city:KRAKOW", "city:GRAN_CANARIA", "country:ma", "airport:PMI", "city:CORK", "airport:AGP", "city:MILAN", "airport:SOF", "city:WARSAW", "airport:ACE", "airport:LDY", "city:SZCZECIN", "airport:IBZ", "airport:EGC", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "country:dk", "city:SOFIA", "country:pt", "country:lt", "airport:FUE", "country:pl", "region:COSTA_BRAVA", "airport:SZZ", "airport:SNN", "airport:WRO", "airport:DUB", "airport:CFU", "country:de", "city:PISA", "airport:OPO", "city:SHANNON", "city:CORFU", "city:IBIZA", "city:PORTO", "country:es", "airport:MXP", "airport:PRG", "airport:REU", "airport:MLA", "city:LANZAROTE", "city:PALMA", "country:mt", "airport:CPH", "airport:RAK", "airport:BRI", "country:it", "city:MALAGA", "city:ALICANTE", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ALC", "country:ie", "airport:FAO", "city:PAPHOS", "region:TUSCANY", "airport:BCN", "city:VILNIUS", "region:NORTHERN_IRELAND", "country:gb", "country:fr", "airport:TFS", "city:WROCLAW", "airport:NOC", "city:DUBLIN", "airport:PSA", "city:MALTA", "city:COPENHAGEN", "country:bg", "city:DORTMUND", "region:PUGLIA", "airport:PFO", "city:KNOCK", "airport:VNO", "city:PRAGUE", "city:GIRONA", "city:POZNAN"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 53.3336,
      "lng": -2.84972
    },
    "priority": 44,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB"]
  }, {
    "id": "airport:LCJ",
    "name": "Lodz",
    "categories": ["FAM", "SPR", "CTY", "OUT"],
    "iataCode": "LCJ",
    "seoName": "lodz",
    "cityCode": "LODZ",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:STN", "city:ATHENS", "airport:EMA", "country:gb", "country:gr", "region:ENGLAND", "airport:ATH", "city:BIRMINGHAM", "country:ie", "airport:DUB", "city:LONDON", "city:DUBLIN"],
    "countryCode": "pl",
    "base": false,
    "coords": {
      "lat": 51.7219,
      "lng": 19.3981
    },
    "priority": 96,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LGW",
    "name": "London Gatwick",
    "categories": ["GLF", "HEN", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "LGW",
    "seoName": "london-gatwick",
    "cityCode": "LONDON",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:SHANNON", "city:CORK", "city:ALICANTE", "airport:ALC", "airport:ORK", "country:es", "country:ie", "airport:SNN", "region:COSTA_BRAVA", "airport:DUB", "city:DUBLIN"],
    "countryCode": "gb",
    "base": false,
    "coords": {
      "lat": 51.1481,
      "lng": -0.190278
    },
    "priority": 58,
    "seasonalRoutes": [],
    "aliases": ["Gatwick", "London Gatwick", "England", "Great Britain", "UK", "GB"],
    "weight": 2
  }, {
    "id": "airport:LTN",
    "name": "London Luton",
    "categories": ["GLF", "HEN", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "LTN",
    "seoName": "london-luton",
    "cityCode": "LONDON",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["airport:BLQ", "airport:ORK", "airport:GRO", "airport:LPA", "city:BEZIERS", "region:CANARY_ISLES", "city:TENERIFE", "country:gr", "city:FARO", "city:RZESZOW", "airport:KIR", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "country:ma", "city:CORK", "airport:AGP", "airport:ACE", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "country:dk", "city:KAUNAS", "country:pt", "airport:MJV", "country:lt", "city:BOLOGNA", "airport:FUE", "country:pl", "region:COSTA_BRAVA", "airport:DUB", "city:KERRY", "city:BYDGOSZCZ", "city:MURCIA", "country:es", "airport:FNI", "airport:MLA", "city:LANZAROTE", "airport:RZE", "country:mt", "airport:CPH", "airport:RAK", "city:MALAGA", "airport:RMU", "airport:BZR", "country:it", "city:ALICANTE", "airport:ALC", "airport:ATH", "country:ie", "airport:FAO", "airport:BZG", "airport:BCN", "city:VILNIUS", "city:NIMES", "country:fr", "airport:KUN", "airport:TFS", "airport:NOC", "city:DUBLIN", "city:MALTA", "city:ATHENS", "city:COPENHAGEN", "city:KNOCK", "airport:VNO", "city:GIRONA"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 51.8747,
      "lng": -0.368333
    },
    "priority": 50,
    "seasonalRoutes": [],
    "aliases": ["London Luton", "Luton", "England", "Great Britain", "UK", "GB"],
    "weight": 3
  }, {
    "id": "airport:SEN",
    "name": "London Southend",
    "categories": [],
    "iataCode": "SEN",
    "seoName": "london-southend",
    "cityCode": "SOUTHEND_ON_SEA",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:CORFU", "country:es", "region:SARDINIA", "airport:CLJ", "airport:REU", "city:PALMA", "region:BRITTANY", "airport:CPH", "city:BREST", "airport:CAG|Air Malta", "country:gr", "city:ALICANTE", "country:it", "city:MALAGA", "city:FARO", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ALC", "airport:VCE", "country:ie", "airport:FAO", "airport:BGY", "city:CLUJ", "airport:BES", "region:SICILY", "airport:PMI", "city:CATANIA", "airport:CTA|Air Malta", "airport:AGP", "city:MILAN", "country:sk", "city:VENICE", "airport:BIO", "city:BILBAO", "country:fr", "city:KOSICE", "city:BARCELONA", "region:COSTA_DE_SOL", "city:DUBLIN", "country:dk", "country:pt", "airport:KSC", "city:COPENHAGEN", "region:COSTA_BRAVA", "country:ro", "city:CAGLIARI", "airport:DUB", "airport:CFU"],
    "countryCode": "gb",
    "base": false,
    "coords": {
      "lat": 51.5703,
      "lng": 0.6933
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:STN",
    "name": "London Stansted",
    "categories": ["GLF", "HEN", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "STN",
    "seoName": "london-stansted",
    "cityCode": "LONDON",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:TALLINN", "airport:LDE", "airport:EFL", "city:DOLE", "airport:INN", "city:CARCASSONNE", "city:BERGERAC", "city:NUREMBERG", "airport:KRK", "city:SANTANDER", "airport:DTM", "city:FRANKFURT", "city:KEFALONIA", "city:BEZIERS", "city:KATOWICE", "country:gr", "city:PERUGIA", "airport:LCJ", "city:STOCKHOLM", "city:LA_ROCHELLE", "airport:PMI", "city:EDINBURGH", "airport:TUF", "airport:CCF", "country:hu", "airport:NYO", "airport:EGC", "city:VIENNA", "city:BILLUND", "city:SOFIA", "airport:AOI", "country:hr", "city:ALGHERO", "airport:KBP", "airport:PLQ", "city:CLERMONT_FERRAND", "city:BOLOGNA", "airport:DUB", "city:VALENCIA", "airport:KTW", "city:SHANNON", "country:es", "city:RIJEKA", "airport:MXP", "city:CASTELLON", "city:OLSZTYN", "airport:BRQ", "airport:SCQ", "airport:ZAD", "city:PALMA", "airport:RAK", "airport:GLA", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:BRE", "city:RHODES", "airport:LEJ", "airport:LUZ", "airport:PMO", "airport:VIE", "country:ee", "airport:LUX", "airport:LEI", "airport:BCN", "city:DUSSELDORF", "city:VILNIUS", "airport:AAL", "country:gb", "airport:EIN", "city:GENOA", "city:COLOGNE", "country:fr", "airport:SUF", "city:BORDEAUX", "airport:KUN", "airport:LWO", "airport:SDR", "airport:TFS", "airport:FKB", "city:MALTA", "airport:BSL", "city:SEVILLE", "city:ZARAGOZA", "city:RABAT", "airport:CDT", "airport:ZAZ", "airport:RBA", "airport:MRS", "airport:HHN", "airport:BLQ", "city:BARI", "region:SARDINIA", "airport:BLL", "city:PARDUBICE", "airport:NTE", "airport:LPA", "region:BRITTANY", "city:BRINDISI", "airport:VST", "city:LIMOGES", "city:RZESZOW", "airport:PGF", "airport:NCE", "airport:MAD", "airport:RMI", "country:ma", "airport:SOF", "country:me", "city:VENICE", "city:MARRAKESH", "city:BUCHAREST", "airport:NUE", "city:ROME", "country:lv", "country:lt", "city:MEMMINGEN", "country:lu", "airport:FUE", "airport:SNN", "city:BELFAST", "city:RIMINI", "city:AGADIR", "city:GDANSK", "city:PODGORICA", "city:BYDGOSZCZ", "city:BASEL", "city:MURCIA", "airport:EDI", "airport:TRF", "city:IBIZA", "city:SALZBURG", "city:KIEV", "airport:LRH", "airport:CPH", "airport:FEZ", "country:it", "airport:PIS", "airport:RMU", "airport:ALC", "country:ie", "region:SICILY", "city:OSLO", "city:JEREZ", "airport:CAG", "airport:TSF", "city:POITIERS", "city:WROCLAW", "city:MADRID", "region:PUGLIA", "city:BUDAPEST", "airport:BOD", "airport:TRS", "city:CAGLIARI", "city:PALANGA", "region:AZORES", "city:BREMEN", "airport:TRN", "city:HAMBURG", "airport:ORK", "airport:GRO", "airport:SZG", "city:VERONA", "airport:DLE", "city:STRASBOURG", "city:LVIV", "city:TENERIFE", "city:TURIN", "city:FARO", "city:INNSBRUCK", "airport:CIY", "airport:BGY", "airport:KIR", "airport:PSR", "city:PULA", "city:FUERTEVENTURA", "city:EINDHOVEN", "airport:OSR", "city:GRAN_CANARIA", "city:MILAN", "airport:AGP", "airport:BIQ", "airport:OSL", "city:BERLIN", "city:SZCZECIN", "airport:PDV", "city:BRNO", "city:LAMEZIA", "city:KAUNAS", "city:NAPLES", "country:pt", "airport:TLS", "airport:AGA", "airport:RHO", "airport:PDL", "country:pl", "airport:SZZ", "airport:TLL", "airport:WRO", "city:ANCONA", "city:TOURS", "airport:SZY", "city:KERRY", "city:PISA", "city:GLASGOW", "city:LUBLIN", "city:ZADAR", "airport:OTP", "city:DINARD", "airport:NRN", "airport:DNR", "airport:AHO", "city:THESSALONIKI", "airport:RIX", "city:LINZ", "city:CHANIA", "city:GRENOBLE", "city:BIARRITZ", "airport:RZE", "airport:NAP", "country:mt", "city:MARSEILLE", "airport:BZR", "airport:FRA", "city:TRIESTE", "airport:PUY", "city:PAPHOS", "airport:FAO", "city:LISBON", "region:TUSCANY", "airport:PEG", "airport:BZG", "airport:PED", "airport:SKG", "city:ALMERIA", "city:OSTRAVA", "city:BRATISLAVA", "city:SANTIAGO", "airport:PFO", "city:KNOCK", "city:PRAGUE", "airport:LNZ", "country:nl", "city:PESCARA", "airport:RJK", "airport:GDN", "airport:VRN", "country:no", "country:cy", "airport:VLC", "country:cz", "city:PERPIGNAN", "airport:SVQ", "city:TOULOUSE", "airport:BTS", "airport:CFE", "city:BRIVE", "city:AALBORG", "airport:GNB", "airport:POZ", "country:ch", "region:CANARY_ISLES", "airport:WMI", "airport:TGD", "airport:AAR", "city:KRAKOW", "city:LOURDES", "airport:GOT", "city:CORK", "airport:CGN", "airport:LIG", "airport:FMM", "city:WARSAW", "city:PALERMO", "country:ua", "airport:ACE", "city:AARHUS", "airport:IBZ", "city:BARCELONA", "region:COSTA_DE_SOL", "city:COMISO", "country:dk", "airport:MJV", "airport:GOA", "region:COSTA_BRAVA", "airport:BUD", "airport:BDS", "airport:CFU", "region:SCOTLAND", "country:de", "airport:OPO", "airport:CHQ", "city:PONTA_DELGADA", "city:CORFU", "city:PORTO", "airport:PRG", "airport:SXF", "airport:FNI", "country:at", "airport:MLA", "airport:REU", "airport:SXB", "city:LANZAROTE", "city:MALAGA", "city:ALICANTE", "city:FEZ", "city:PLOVDIV", "airport:ATH", "airport:LIS", "airport:HAM", "airport:BVE", "region:NORTHERN_IRELAND", "country:sk", "city:NIMES", "city:KARLSRUHE", "city:NANTES", "country:se", "airport:NOC", "airport:XRY", "city:DUBLIN", "city:LEIPZIG", "airport:PSA", "airport:CIA", "region:CRETE", "city:ATHENS", "city:COPENHAGEN", "country:bg", "city:DORTMUND", "city:LUXEMBOURG", "airport:VNO", "city:RIGA", "city:NICE", "country:ro", "city:LODZ", "city:GIRONA", "city:GOTHENBURG", "airport:BFS", "city:POZNAN"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 51.885,
      "lng": 0.235
    },
    "priority": 1,
    "seasonalRoutes": [],
    "aliases": ["Stansted", "London Stansted", "Stanstead", "England", "Great Britain", "UK", "GB"],
    "weight": 1
  }, {
    "id": "airport:LRT",
    "name": "Lorient",
    "categories": ["FAM", "SPR", "FST", "NIT", "OUT"],
    "iataCode": "LRT",
    "seoName": "lorient",
    "cityCode": "LORIENT",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:OPO", "country:pt", "city:PORTO"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 47.7588,
      "lng": -3.4378
    },
    "priority": 186,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LDE",
    "name": "Lourdes",
    "categories": ["SKI", "FAM", "SPR", "FST", "CUL"],
    "iataCode": "LDE",
    "seoName": "lourdes",
    "cityCode": "LOURDES",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["city:KRAKOW", "airport:STN", "airport:MLA|Air Malta", "city:MILAN", "country:gb", "airport:KRK", "city:DUBLIN", "city:MALTA", "country:mt", "airport:CIA", "city:ROME", "country:it", "region:ENGLAND", "country:ie", "country:pl", "airport:BGY", "airport:DUB", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.1787,
      "lng": -0.006439
    },
    "priority": 151,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LUZ",
    "name": "Lublin",
    "categories": ["FAM", "CTY", "CUL"],
    "iataCode": "LUZ",
    "seoName": "lublin",
    "cityCode": "LUBLIN",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:STN", "country:gb", "region:ENGLAND", "country:ie", "airport:DUB", "city:LONDON", "city:DUBLIN"],
    "countryCode": "pl",
    "base": false,
    "coords": {
      "lat": 51.2319,
      "lng": 22.6903
    },
    "priority": 143,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LUX",
    "name": "Luxembourg",
    "categories": [],
    "iataCode": "LUX",
    "seoName": "luxembourg",
    "cityCode": "LUXEMBOURG",
    "country": "Luxembourg",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:SVQ", "airport:OPO", "airport:EDI", "city:PORTO", "country:es", "airport:MLA", "city:PALMA", "country:mt", "country:it", "region:ENGLAND", "airport:LIS", "country:ie", "airport:BGY", "city:LISBON", "airport:MAD", "city:LONDON", "airport:BCN", "airport:PMI", "country:gb", "city:MILAN", "city:EDINBURGH", "city:BARCELONA", "city:MADRID", "city:DUBLIN", "city:MALTA", "country:pt", "city:SEVILLE", "region:COSTA_BRAVA", "airport:DUB", "region:SCOTLAND"],
    "countryCode": "lu",
    "base": false,
    "coords": {
      "lat": 49.6233,
      "lng": 6.2044
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LWO",
    "name": "Lviv",
    "categories": [],
    "iataCode": "LWO",
    "seoName": "lviv",
    "cityCode": "LVIV",
    "country": "Ukraine",
    "currencyCode": "EUR",
    "routes": ["city:KRAKOW", "airport:STN", "city:DUSSELDORF", "airport:NRN", "country:gb", "airport:FMM", "city:WARSAW", "airport:KRK", "city:MEMMINGEN", "region:ENGLAND", "country:pl", "airport:WMI", "country:de", "city:LONDON"],
    "countryCode": "ua",
    "base": false,
    "coords": {
      "lat": 49.4845,
      "lng": 23.5722
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LYS",
    "name": "Lyon",
    "categories": [],
    "iataCode": "LYS",
    "seoName": "lyon",
    "cityCode": "LYON",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["city:MALTA", "country:mt", "airport:MLA|Air Malta"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 45.7256,
      "lng": 5.0811
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:MST",
    "name": "Maastricht",
    "categories": ["FAM", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "MST",
    "seoName": "maastricht",
    "cityCode": "MAASTRICHT",
    "country": "Netherlands",
    "currencyCode": "EUR",
    "routes": ["country:es", "city:BARI", "airport:GRO", "airport:MLA", "city:MALTA", "country:mt", "airport:BRI", "region:PUGLIA", "country:it", "city:ALICANTE", "airport:ALC", "region:COSTA_BRAVA", "city:GIRONA"],
    "countryCode": "nl",
    "base": false,
    "coords": {
      "lat": 50.9117,
      "lng": 5.77014
    },
    "priority": 147,
    "seasonalRoutes": [],
    "aliases": ["Holland"]
  }, {
    "id": "airport:MAD",
    "name": "Madrid",
    "categories": ["HEN", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "MAD",
    "seoName": "madrid",
    "cityCode": "MADRID",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:TANGIER", "city:NUREMBERG", "airport:KRK", "airport:CRL", "city:VERONA", "city:FRANKFURT", "city:TENERIFE", "country:gr", "region:ENGLAND", "airport:BGY", "city:FUERTEVENTURA", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "country:hu", "city:BERLIN", "city:VIENNA", "city:LAMEZIA", "city:NAPLES", "city:SOFIA", "airport:TLS", "country:pt", "city:TRAPANI", "city:BOLOGNA", "country:pl", "airport:WRO", "airport:DUB", "airport:BHX", "airport:OZZ", "city:PISA", "city:GLASGOW", "airport:TNG", "airport:STN", "airport:OTP", "country:es", "airport:BRU", "airport:SCQ", "city:PARIS", "airport:NAP", "country:mt", "city:PALMA", "city:MARSEILLE", "airport:GLA", "airport:RAK", "airport:BRI", "airport:FRA", "city:LISBON", "region:TUSCANY", "airport:PMO", "connectingFlight:LIS:OPO", "airport:VIE", "city:MANCHESTER", "airport:LUX", "airport:CTA", "city:LONDON", "city:VILNIUS", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:SUF", "airport:TFS", "city:BRATISLAVA", "city:SANTIAGO", "city:MALTA", "airport:TFN", "city:PRAGUE", "country:nl", "city:RABAT", "city:PESCARA", "airport:RBA", "airport:VRN", "country:cz", "airport:MRS", "airport:BLQ", "city:BRUSSELS", "city:TOULOUSE", "city:BARI", "region:SARDINIA", "airport:BTS", "airport:LPA", "airport:POZ", "region:CANARY_ISLES", "airport:MAN", "airport:NCL", "connectingFlight:PSR:BGY", "airport:WMI", "airport:MAH", "city:KRAKOW", "airport:BVA", "country:ma", "city:CATANIA", "airport:SOF", "airport:CGN", "city:PALERMO", "city:WARSAW", "airport:ACE", "airport:IBZ", "city:MARRAKESH", "city:BUCHAREST", "airport:NUE", "country:dk", "city:ROME", "country:lt", "connectingFlight:ATH:BGY", "country:lu", "airport:FUE", "city:MENORCA", "airport:BUD", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "airport:OPO", "city:IBIZA", "city:PORTO", "airport:PRG", "airport:SXF", "airport:MLA", "country:at", "city:LANZAROTE", "airport:FEZ", "airport:CPH", "country:it", "city:FEZ", "country:ie", "airport:HAM", "city:OUARZAZATE", "region:SICILY", "airport:CAG", "country:sk", "city:BIRMINGHAM", "city:WROCLAW", "city:DUBLIN", "airport:PSA", "airport:CIA", "city:ATHENS", "country:bg", "city:COPENHAGEN", "region:PUGLIA", "city:LUXEMBOURG", "connectingFlight:TPS:BGY", "airport:VNO", "city:BUDAPEST", "country:ro", "city:CAGLIARI", "country:be", "city:POZNAN"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 40.4936,
      "lng": -3.56676
    },
    "priority": 6,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:AGP",
    "name": "Malaga",
    "categories": ["GLF", "HEN", "FAM", "SPR", "NIT", "CTY", "SEA", "OUT"],
    "iataCode": "AGP",
    "seoName": "malaga",
    "cityCode": "MALAGA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:BOURNEMOUTH", "airport:ORK", "city:NUREMBERG", "airport:LTN", "airport:KRK", "city:SANTANDER", "airport:CRL", "airport:DTM", "city:FRANKFURT", "country:gr", "city:HAUGESUND", "region:ENGLAND", "airport:BGY", "city:STOCKHOLM", "city:EINDHOVEN", "city:AMSTERDAM", "airport:PMI", "city:MILAN", "city:EDINBURGH", "airport:NYO", "country:hu", "city:BERLIN", "airport:DUS", "city:VIENNA", "city:LAMEZIA", "city:BILLUND", "city:NAPLES", "city:LEEDS", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:WRO", "airport:DUB", "airport:BHX", "city:GLASGOW", "airport:STN", "city:SHANNON", "airport:NRN", "country:es", "airport:BRU", "airport:BRS", "airport:SCQ", "airport:EXT", "connectingFlight:CTA:BGY", "airport:NAP", "city:PALMA", "country:mt", "city:MARSEILLE", "airport:GLA", "airport:FRA", "airport:BRE", "airport:VIE", "city:MANCHESTER", "city:EXETER", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:SDR", "city:BRATISLAVA", "city:SANTIAGO", "airport:FKB", "city:MALTA", "city:KNOCK", "city:PRAGUE", "country:nl", "airport:STR", "country:no", "airport:HHN", "airport:MRS", "country:cz", "airport:BLQ", "airport:TXL", "airport:LPL", "city:BRUSSELS", "region:SARDINIA", "airport:BTS", "airport:BLL", "airport:SEN", "airport:MAN", "airport:NCL", "airport:VST", "airport:WMI", "airport:FCO", "city:KRAKOW", "airport:GOT", "city:CATANIA", "city:CORK", "airport:MLA|Air Malta", "airport:CGN", "city:VENICE", "airport:FMM", "city:WARSAW", "city:PALERMO", "airport:IBZ", "connectingFlight:CAG:BGY", "city:BARCELONA", "city:LIVERPOOL", "country:dk", "airport:NUE", "city:ROME", "airport:ABZ", "city:MEMMINGEN", "connectingFlight:ATH:BGY", "airport:SNN", "region:COSTA_BRAVA", "city:STUTTGART", "city:BELFAST", "airport:BUD", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "airport:LBA", "connectingFlight:PMO:BGY", "connectingFlight:CTA:FCO", "airport:EDI", "city:IBIZA", "airport:TRF", "airport:PRG", "airport:SXF", "country:at", "airport:CPH", "airport:HAU", "country:it", "country:ie", "airport:HAM", "airport:PIK", "region:SICILY", "city:OSLO", "region:NORTHERN_IRELAND", "airport:AMS", "airport:TSF", "country:sk", "city:BIRMINGHAM", "city:KARLSRUHE", "country:se", "city:WROCLAW", "city:ABERDEEN", "airport:NOC", "city:DUBLIN", "city:BRISTOL", "city:ATHENS", "airport:BOH", "city:COPENHAGEN", "airport:EMA", "city:DORTMUND", "city:BUDAPEST", "city:SOUTHEND_ON_SEA", "city:CAGLIARI", "city:GOTHENBURG", "country:be", "airport:BFS", "city:BREMEN"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 36.6749,
      "lng": -4.49911
    },
    "priority": 8,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:MMX",
    "name": "Malmo",
    "categories": [],
    "iataCode": "MMX",
    "seoName": "malmo",
    "cityCode": "MALMO",
    "country": "Sweden",
    "currencyCode": "SEK",
    "routes": ["city:KRAKOW", "country:pl", "airport:KRK"],
    "countryCode": "se",
    "base": false,
    "coords": {
      "lat": 55.5363,
      "lng": 13.3762
    },
    "priority": 170,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:MLA",
    "name": "Malta",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CUL", "SEA", "OUT"],
    "iataCode": "MLA",
    "seoName": "malta",
    "cityCode": "MALTA",
    "country": "Malta",
    "currencyCode": "EUR",
    "routes": ["city:TALLINN", "airport:AGP|Air Malta", "city:NUREMBERG", "airport:LTN", "airport:KRK", "airport:CRL", "city:FRANKFURT", "city:ZURICH", "country:gr", "city:PERUGIA", "city:TUNIS", "city:STOCKHOLM", "city:EDINBURGH", "airport:CIY|Air Malta", "airport:PMO|Air Malta", "airport:NYO", "country:hu", "city:VIENNA", "city:BILLUND", "city:LEEDS", "city:BOLOGNA", "airport:DUB", "city:VALENCIA", "airport:STN", "country:es", "airport:BRS", "airport:EXT", "city:PARIS", "city:TEL_AVIV", "airport:LYS|Air Malta", "airport:BRI", "country:ee", "airport:LED|Air Malta", "airport:LUX", "airport:CTA", "city:LONDON", "city:EXETER", "airport:BCN", "city:DUSSELDORF", "city:VILNIUS", "country:gb", "airport:EIN", "connectingFlight:SKG:BGY", "city:COLOGNE", "country:fr", "airport:SUF", "airport:FKB", "city:SEVILLE", "airport:PRG|Air Malta", "airport:CMN|Air Malta", "airport:MRS", "airport:BLQ", "airport:LPL", "city:BARI", "region:SARDINIA", "airport:BLL", "airport:NTE", "region:WALES", "airport:KBP|Air Malta", "airport:MAN", "city:MUNICH", "airport:TLV|Air Malta", "airport:FCO", "airport:MAD", "airport:MST", "airport:TUN|Air Malta", "country:ma", "city:VENICE", "connectingFlight:CAG:BGY", "connectingFlight:BCN:FCO", "airport:NUE", "city:ROME", "country:lv", "country:lt", "country:lu", "city:BELFAST", "city:AMMAN", "city:GDANSK", "airport:LBA", "airport:EDI", "city:MOSCOW", "airport:TRF", "city:KIEV", "airport:CAG|Air Malta", "country:it", "country:ie", "airport:PIK", "country:il", "region:SICILY", "city:OSLO", "airport:TSF", "city:MAASTRICHT", "city:BIRMINGHAM", "airport:AMM", "city:WROCLAW", "city:MADRID", "airport:BOH", "country:jo", "region:PUGLIA", "airport:SVO|Air Malta", "city:BUDAPEST", "city:CAGLIARI", "airport:TRN", "city:BOURNEMOUTH", "city:CHARLEROI", "airport:ORK", "airport:GRO", "city:TURIN", "region:ENGLAND", "airport:BGY", "airport:PSR", "city:EINDHOVEN", "city:AMSTERDAM", "city:MILAN", "city:BERLIN", "city:GENEVA", "city:LYON", "city:LAMEZIA", "city:NAPLES", "country:pt", "airport:TLS", "connectingFlight:BCN:BGY", "airport:GVA|Air Malta", "country:pl", "airport:TLL", "airport:WRO", "airport:DUS|Air Malta", "airport:BHX", "city:PISA", "city:GLASGOW", "city:THESSALONIKI", "airport:RIX", "airport:VIE|Air Malta", "airport:NAP", "city:MARSEILLE", "city:LISBON", "region:TUSCANY", "airport:PEG", "city:MANCHESTER", "airport:SKG", "city:CARDIFF", "airport:LIS|Air Malta", "city:BRATISLAVA", "city:PRAGUE", "country:nl", "city:PESCARA", "airport:GDN", "country:no", "airport:VLC", "country:cz", "airport:SVQ", "country:tn", "city:TOULOUSE", "airport:BTS", "airport:FRA|Air Malta", "airport:POZ", "country:ch", "airport:ZRH|Air Malta", "city:KRAKOW", "airport:BVA", "city:CATANIA", "airport:GOT", "city:LOURDES", "city:CORK", "airport:CGN", "city:PALERMO", "country:ua", "city:BARCELONA", "region:COSTA_DE_SOL", "city:COMISO", "airport:AMS|Air Malta", "city:LIVERPOOL", "country:dk", "airport:ABZ", "airport:LDE|Air Malta", "airport:CWL", "region:COSTA_BRAVA", "airport:BUD", "region:SCOTLAND", "country:de", "airport:OPO", "city:CASABLANCA", "city:PORTO", "airport:SXF", "country:at", "city:MALAGA", "airport:ATH", "region:NORTHERN_IRELAND", "country:sk", "city:SAINT_PETERSBURG", "city:KARLSRUHE", "city:NANTES", "country:se", "city:ABERDEEN", "city:DUBLIN", "city:BRISTOL", "airport:PSA", "city:ATHENS", "airport:CIA", "airport:EMA", "airport:MUC|Air Malta", "city:LUXEMBOURG", "airport:VNO", "city:RIGA", "city:GIRONA", "country:ru", "city:GOTHENBURG", "country:be", "city:POZNAN", "airport:BFS"],
    "countryCode": "mt",
    "base": true,
    "coords": {
      "lat": 35.8575,
      "lng": 14.4775
    },
    "priority": 47,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:MAN",
    "name": "Manchester",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "MAN",
    "seoName": "manchester",
    "cityCode": "MANCHESTER",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:CARCASSONNE", "city:NUREMBERG", "airport:GRO", "airport:KRK", "airport:CRL", "city:BEZIERS", "city:FRANKFURT", "city:TENERIFE", "country:gr", "city:FARO", "airport:BGY", "city:FUERTEVENTURA", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "airport:AGP", "airport:CCF", "country:hu", "city:BERLIN", "city:LAMEZIA", "city:NAPLES", "country:pt", "airport:AGA", "airport:RHO", "airport:KBP", "country:hr", "airport:PDL", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "city:ZADAR", "city:SHANNON", "country:es", "city:THESSALONIKI", "airport:RIX", "city:CHANIA", "airport:RZE", "airport:ZAD", "airport:NAP", "city:PALMA", "country:mt", "city:MARSEILLE", "airport:RAK", "airport:BZR", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "connectingFlight:BRI:BGY", "airport:FRA", "city:RHODES", "airport:FAO", "city:LISBON", "airport:PMO", "airport:SKG", "airport:LEI", "city:ALMERIA", "airport:BCN", "airport:EIN", "country:gb", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:TFS", "city:BRATISLAVA", "city:MALTA", "city:SEVILLE", "country:nl", "city:PESCARA", "airport:GDN", "airport:STR", "country:no", "airport:VLC", "airport:MRS", "airport:SVQ", "airport:BLQ", "city:BARI", "region:SARDINIA", "airport:BTS", "airport:NTE", "airport:LPA", "region:CANARY_ISLES", "city:BRINDISI", "connectingFlight:PSR:BGY", "city:LIMOGES", "city:RZESZOW", "airport:WMI", "airport:MAD", "city:KRAKOW", "country:ma", "airport:GOT", "airport:LIG", "airport:CGN", "city:VENICE", "city:WARSAW", "city:PALERMO", "country:ua", "airport:ACE", "connectingFlight:CAG:BGY", "airport:IBZ", "city:BARCELONA", "region:COSTA_DE_SOL", "city:MARRAKESH", "airport:NUE", "city:ROME", "airport:MJV", "country:lv", "connectingFlight:ATH:BGY", "airport:FUE", "region:COSTA_BRAVA", "airport:SNN", "city:STUTTGART", "city:BELFAST", "airport:BDS", "airport:BUD", "airport:CFU", "city:AGADIR", "city:GDANSK", "country:de", "airport:OPO", "airport:CHQ", "city:MURCIA", "connectingFlight:PMO:BGY", "city:PONTA_DELGADA", "city:CORFU", "airport:TRF", "city:IBIZA", "city:PORTO", "city:KIEV", "airport:SXF", "airport:MLA", "airport:REU", "city:LANZAROTE", "country:it", "airport:RMU", "city:ALICANTE", "city:MALAGA", "airport:ALC", "airport:LIS", "country:ie", "airport:HAM", "city:OSLO", "region:SICILY", "airport:CAG", "region:NORTHERN_IRELAND", "airport:TSF", "country:sk", "city:NANTES", "country:se", "city:WROCLAW", "city:MADRID", "city:DUBLIN", "region:CRETE", "airport:CIA", "city:ATHENS", "region:PUGLIA", "airport:BOD", "city:BUDAPEST", "city:RIGA", "city:CAGLIARI", "city:GIRONA", "city:GOTHENBURG", "region:AZORES", "country:be", "airport:BFS"],
    "countryCode": "gb",
    "base": true,
    "coords": {
      "lat": 53.3537,
      "lng": -2.27495
    },
    "priority": 20,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB"]
  }, {
    "id": "airport:RAK",
    "name": "Marrakesh",
    "categories": ["GLF", "FAM", "SPR", "CTY", "CUL"],
    "iataCode": "RAK",
    "seoName": "marrakesh",
    "cityCode": "MARRAKESH",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["city:HAMBURG", "city:DOLE", "city:CHARLEROI", "airport:XCR", "city:NUREMBERG", "airport:LTN", "airport:KRK", "city:SANTANDER", "airport:DLE", "airport:CRL", "city:FRANKFURT", "country:gr", "region:ENGLAND", "airport:BGY", "city:STOCKHOLM", "city:EINDHOVEN", "city:MILAN", "airport:TUF", "airport:NYO", "country:hu", "city:BERLIN", "airport:DUS", "city:VIENNA", "city:NAPLES", "country:pt", "country:pl", "city:TOURS", "airport:DUB", "city:VALENCIA", "city:PISA", "airport:STN", "airport:NRN", "country:es", "airport:BRU", "city:PARIS", "airport:NAP", "city:MARSEILLE", "airport:VIE", "region:TUSCANY", "city:MANCHESTER", "airport:CTA", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:SDR", "city:BRATISLAVA", "airport:FKB", "city:SEVILLE", "city:PRAGUE", "country:nl", "airport:STR", "country:no", "airport:VLC", "airport:SVQ", "country:cz", "airport:MRS", "city:PERPIGNAN", "airport:HHN", "airport:TXL", "city:BRUSSELS", "airport:LPL", "airport:BTS", "airport:MAN", "airport:PGF", "airport:MAD", "city:KRAKOW", "airport:BVA", "city:CATANIA", "airport:CGN", "city:VENICE", "airport:FMM", "city:BARCELONA", "city:LIVERPOOL", "airport:NUE", "city:ROME", "city:MEMMINGEN", "region:COSTA_BRAVA", "city:STUTTGART", "airport:BUD", "country:de", "airport:OPO", "city:PORTO", "airport:TRF", "airport:PRG", "airport:FNI", "airport:SXF", "country:at", "country:it", "airport:PIS", "airport:ATH", "country:ie", "airport:HAM", "region:SICILY", "city:OSLO", "country:sk", "airport:TSF", "city:POITIERS", "city:NIMES", "city:KARLSRUHE", "country:se", "city:DUBLIN", "city:MADRID", "airport:PSA", "city:ATHENS", "airport:CIA", "city:BUDAPEST", "airport:BOD", "country:be"],
    "countryCode": "ma",
    "base": true,
    "coords": {
      "lat": 31.6069,
      "lng": -8.0363
    },
    "priority": 41,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:MRS",
    "name": "Marseille",
    "categories": ["SKI", "ROM", "FAM", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "MRS",
    "seoName": "marseille",
    "cityCode": "MARSEILLE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["city:CHARLEROI", "city:TANGIER", "airport:KRK", "airport:CRL", "city:FRANKFURT", "city:FARO", "region:ENGLAND", "city:OUJDA", "city:EINDHOVEN", "airport:PMI", "airport:AGP", "city:EDINBURGH", "airport:TUF", "country:hu", "city:NAPLES", "country:pt", "airport:AGA", "country:hr", "city:BOLOGNA", "country:pl", "city:VALENCIA", "city:TOURS", "airport:OZZ", "airport:TNG", "airport:STN", "city:ZADAR", "airport:OTP", "country:es", "airport:ZAD", "airport:NAP", "city:PALMA", "country:mt", "airport:RAK", "city:BREST", "airport:FRA", "airport:FAO", "city:LISBON", "airport:PMO", "city:MANCHESTER", "airport:CTA", "city:LONDON", "airport:EIN", "country:gb", "country:fr", "city:BORDEAUX", "city:NADOR", "airport:OUD", "city:MALTA", "city:SEVILLE", "city:PRAGUE", "country:nl", "city:RABAT", "airport:STR", "airport:RBA", "airport:VLC", "country:cz", "airport:SVQ", "airport:BLQ", "airport:NTE", "region:BRITTANY", "airport:MAN", "airport:WMI", "airport:FCO", "airport:MAD", "city:KRAKOW", "country:ma", "city:CATANIA", "city:WARSAW", "city:PALERMO", "airport:IBZ", "region:COSTA_DE_SOL", "city:MARRAKESH", "city:BUCHAREST", "city:ROME", "airport:NDR", "region:COSTA_BRAVA", "city:STUTTGART", "airport:BUD", "city:AGADIR", "region:SCOTLAND", "country:de", "airport:OPO", "city:LILLE", "airport:EDI", "city:IBIZA", "city:PORTO", "airport:PRG", "airport:MLA", "airport:FEZ", "country:it", "city:FEZ", "city:ALICANTE", "airport:PIS", "city:MALAGA", "airport:ALC", "airport:LIS", "city:OUARZAZATE", "airport:LIL", "airport:BES", "region:SICILY", "city:POITIERS", "city:NANTES", "city:MADRID", "airport:CIA", "airport:BOD", "city:BUDAPEST", "country:ro", "country:be"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.4393,
      "lng": 5.22142
    },
    "priority": 34,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:FMM",
    "name": "Memmingen",
    "categories": ["SKI", "FAM", "SPR", "FST", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "FMM",
    "seoName": "munich-memmingen",
    "cityCode": "MEMMINGEN",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:SVQ", "region:SARDINIA", "airport:GRO", "city:LVIV", "city:TENERIFE", "region:CANARY_ISLES", "country:gr", "city:BRINDISI", "city:FARO", "region:ENGLAND", "airport:WMI", "airport:OMR", "city:STOCKHOLM", "country:ma", "airport:PMI", "airport:AGP", "airport:SOF", "city:EDINBURGH", "city:PALERMO", "city:WARSAW", "country:ua", "airport:NYO", "region:COSTA_DE_SOL", "city:MARRAKESH", "airport:TLV", "city:SOFIA", "country:pt", "country:hr", "city:ALGHERO", "region:COSTA_BRAVA", "country:pl", "airport:BDS", "airport:DUB", "region:SCOTLAND", "airport:STN", "city:ZADAR", "airport:OPO", "airport:BNX", "airport:EDI", "city:PORTO", "airport:AHO", "country:es", "city:ORADEA", "city:THESSALONIKI", "city:TEL_AVIV", "airport:ZAD", "city:PALMA", "airport:FEZ", "airport:RAK", "country:it", "city:FEZ", "city:ALICANTE", "city:MALAGA", "airport:ALC", "airport:ATH", "country:ie", "airport:FAO", "city:LISBON", "airport:PMO", "country:il", "connectingFlight:LIS:OPO", "airport:SKG", "city:LONDON", "region:SICILY", "country:gb", "airport:LWO", "airport:TFS", "country:se", "city:DUBLIN", "airport:BOJ", "city:ATHENS", "country:bg", "city:SEVILLE", "region:PUGLIA", "city:BURGAS", "country:ba", "country:ro", "city:GIRONA", "city:BANJA_LUKA"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 47.9888,
      "lng": 10.2395
    },
    "priority": 84,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:MAH",
    "name": "Menorca",
    "categories": ["FAM", "SEA"],
    "iataCode": "MAH",
    "seoName": "mahon-menorca",
    "cityCode": "MENORCA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "airport:BCN", "airport:EMA", "country:gb", "region:ENGLAND", "country:es", "city:BIRMINGHAM", "region:COSTA_BRAVA", "city:VALENCIA", "city:BARCELONA", "airport:MAD", "city:MADRID"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 39.8626,
      "lng": 4.21865
    },
    "priority": 116,
    "seasonalRoutes": [],
    "aliases": ["Mahon"]
  }, {
    "id": "airport:BGY",
    "name": "Milan Bergamo",
    "categories": ["SKI", "ROM", "FAM", "CTY", "CUL", "OUT"],
    "iataCode": "BGY",
    "seoName": "milan-bergamo",
    "cityCode": "MILAN",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:TALLINN", "airport:LDE", "airport:EFL", "city:TANGIER", "airport:CRV", "city:NUREMBERG", "airport:KRK", "airport:INI", "city:SANTANDER", "connectingFlight:PDL:OPO", "airport:CRL", "city:FRANKFURT", "city:KEFALONIA", "airport:VGO", "country:gr", "connectingFlight:FAO:OPO", "airport:TSR", "city:STOCKHOLM", "airport:PMI", "city:EDINBURGH", "city:VITORIA-GASTEIZ", "airport:NYO", "country:hu", "city:VIENNA", "city:SOFIA", "city:BILLUND", "city:ALGHERO", "city:VALENCIA", "airport:DUB", "airport:STN", "country:es", "airport:BRS", "airport:SCQ", "airport:BRQ", "airport:VIT", "city:PARIS", "city:TEL_AVIV", "city:NIS", "city:PALMA", "airport:RAK", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:BRE", "city:RHODES", "airport:VIE", "airport:PMO", "country:ee", "airport:LUX", "city:LONDON", "airport:CTA", "airport:BCN", "city:DUSSELDORF", "city:VILNIUS", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:SUF", "city:TERCEIRA", "airport:SDR", "airport:TFS", "city:MALTA", "city:VIGO", "city:SEVILLE", "city:ZARAGOZA", "city:BURGAS", "airport:ZAZ", "airport:STR", "country:fi", "airport:LPP", "city:BARI", "region:SARDINIA", "airport:BLL", "airport:LPA", "city:BRINDISI", "airport:MAN", "airport:MAD", "country:ma", "airport:SOF", "city:MARRAKESH", "city:BUCHAREST", "city:HERAKLION", "airport:NUE", "country:lv", "airport:TPS", "city:LAPPEENRANTA", "country:lt", "country:lu", "airport:FUE", "airport:VDA", "city:STUTTGART", "city:BELFAST", "city:AMMAN", "city:GDANSK", "airport:EDI", "airport:TRF", "city:IBIZA", "airport:FEZ", "airport:CPH", "country:it", "airport:ALC", "country:ie", "country:il", "region:SICILY", "city:OSLO", "airport:CAG", "city:BIRMINGHAM", "airport:AMM", "city:WROCLAW", "city:MADRID", "city:CROTONE", "airport:BOJ", "country:jo", "region:PUGLIA", "airport:BOD", "city:BUDAPEST", "city:CAGLIARI", "region:AZORES", "city:BREMEN", "city:HAMBURG", "city:CHARLEROI", "airport:ORK", "city:TENERIFE", "city:FARO", "region:ENGLAND", "airport:CIY", "airport:PSR", "city:EINDHOVEN", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "airport:OSR", "city:TIMISOARA", "airport:AGP", "city:BERLIN", "airport:PDV", "city:BRNO", "city:LAMEZIA", "city:NAPLES", "airport:TLV", "country:pt", "airport:RHO", "connectingFlight:TER:OPO", "city:TRAPANI", "country:pl", "airport:TLL", "airport:WRO", "airport:TNG", "airport:OTP", "airport:NRN", "airport:AHO", "city:THESSALONIKI", "airport:RIX", "city:CHANIA", "airport:NAP", "country:mt", "airport:FRA", "airport:HER", "city:PAPHOS", "airport:FAO", "city:LISBON", "airport:SKG", "city:MANCHESTER", "city:OSTRAVA", "city:BRATISLAVA", "city:SANTIAGO", "airport:PFO", "city:KNOCK", "city:PRAGUE", "country:nl", "city:PESCARA", "airport:GDN", "country:no", "airport:VLC", "country:cy", "country:cz", "airport:SVQ", "airport:BTS", "airport:POZ", "region:CANARY_ISLES", "airport:SEN", "airport:WMI", "airport:OMR", "city:KRAKOW", "airport:BVA", "airport:GOT", "city:CATANIA", "city:LOURDES", "city:CORK", "airport:CGN", "city:WARSAW", "airport:ACE", "city:PALERMO", "airport:IBZ", "region:COSTA_DE_SOL", "city:BARCELONA", "city:COMISO", "country:dk", "city:EILAT", "region:COSTA_BRAVA", "airport:BDS", "airport:BUD", "airport:CFU", "region:SCOTLAND", "country:de", "airport:OPO", "airport:CHQ", "city:PONTA_DELGADA", "city:CORFU", "city:PORTO", "airport:PRG", "city:ORADEA", "airport:SXF", "airport:MLA", "country:at", "city:LANZAROTE", "city:FEZ", "city:MALAGA", "city:ALICANTE", "city:PLOVDIV", "airport:ATH", "airport:LIS", "airport:HAM", "region:NORTHERN_IRELAND", "country:sk", "country:se", "airport:NOC", "city:DUBLIN", "city:BRISTOL", "region:CRETE", "city:ATHENS", "country:bg", "city:COPENHAGEN", "airport:EMA", "city:LUXEMBOURG", "airport:VNO", "city:RIGA", "city:SOUTHEND_ON_SEA", "country:ro", "country:be", "city:GOTHENBURG", "city:POZNAN", "airport:BFS", "country:rs"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 45.6739,
      "lng": 9.70417
    },
    "priority": 3,
    "seasonalRoutes": [],
    "aliases": ["Bergamo"],
    "weight": 1
  }, {
    "id": "airport:MXP",
    "name": "Milan Malpensa",
    "categories": [],
    "iataCode": "MXP",
    "seoName": "milan-malpensa",
    "cityCode": "MILAN",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "airport:SVQ", "city:BRUSSELS", "airport:LPL", "airport:TXL", "airport:LPA", "region:CANARY_ISLES", "city:TENERIFE", "city:KATOWICE", "country:gr", "region:ENGLAND", "airport:CIY", "city:EINDHOVEN", "city:GRAN_CANARIA", "city:CATANIA", "airport:SOF", "city:PALERMO", "city:BERLIN", "city:COMISO", "city:BUCHAREST", "city:LIVERPOOL", "city:LAMEZIA", "city:HERAKLION", "city:KAUNAS", "city:SOFIA", "country:pt", "country:lt", "region:COSTA_BRAVA", "country:pl", "city:VALENCIA", "country:de", "airport:STN", "airport:OPO", "airport:KTW", "airport:OTP", "city:PORTO", "country:es", "airport:BRU", "country:it", "city:ALICANTE", "airport:ALC", "airport:HER", "city:LISBON", "connectingFlight:LIS:OPO", "airport:PMO", "airport:CTA", "city:LONDON", "region:SICILY", "country:gb", "airport:EIN", "airport:KUN", "airport:SUF", "airport:TFS", "region:CRETE", "country:bg", "city:SEVILLE", "country:nl", "country:ro", "country:be"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 45.63,
      "lng": 8.7231
    },
    "priority": 224,
    "seasonalRoutes": [],
    "aliases": ["Malpensa"],
    "weight": 2
  }, {
    "id": "airport:MPL",
    "name": "Montpellier",
    "categories": ["SKI", "FAM", "SPR", "CTY", "SEA"],
    "iataCode": "MPL",
    "seoName": "montpellier",
    "cityCode": "MONTPELLIER",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:CRL", "airport:HHN", "city:FRANKFURT", "city:CHARLEROI", "country:be", "country:de"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.5762,
      "lng": 3.96301
    },
    "priority": 119,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SVO",
    "name": "Moscow Sheremetyevo",
    "categories": [],
    "iataCode": "SVO",
    "seoName": "moscow-sheremetyevo",
    "cityCode": "MOSCOW",
    "country": "Russia",
    "currencyCode": "EUR",
    "routes": ["city:MALTA", "country:mt", "airport:MLA|Air Malta"],
    "countryCode": "ru",
    "base": false,
    "coords": {
      "lat": 55.9728,
      "lng": 37.4147
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": ["Sheremetyevo"]
  }, {
    "id": "airport:MUC",
    "name": "Munich",
    "categories": [],
    "iataCode": "MUC",
    "seoName": "munich",
    "cityCode": "MUNICH",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["city:MALTA", "country:mt", "city:PALMA", "airport:PMI", "airport:MLA|Air Malta", "country:es", "country:ie", "airport:DUB", "city:DUBLIN"],
    "countryCode": "de",
    "base": false,
    "coords": {
      "lat": 48.3539,
      "lng": 11.7861
    },
    "priority": 223,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:MJV",
    "name": "Murcia",
    "categories": ["GLF", "FAM", "CTY", "SEA", "OUT"],
    "iataCode": "MJV",
    "seoName": "murcia",
    "cityCode": "MURCIA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:GLASGOW", "airport:LBA", "city:BOURNEMOUTH", "airport:LTN", "city:FRANKFURT", "airport:MAN", "region:ENGLAND", "airport:FRA", "country:ie", "airport:PIK", "city:MANCHESTER", "city:LONDON", "city:EINDHOVEN", "country:gb", "airport:EIN", "city:BIRMINGHAM", "city:DUBLIN", "airport:BOH", "airport:EMA", "city:LEEDS", "country:nl", "airport:DUB", "airport:BHX", "region:SCOTLAND", "country:de"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 37.775,
      "lng": -0.812389
    },
    "priority": 67,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:RMU",
    "name": "Murcia International",
    "categories": [],
    "iataCode": "RMU",
    "seoName": "murcia-international",
    "cityCode": "MURCIA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:GLASGOW", "airport:STN", "airport:LBA", "city:BOURNEMOUTH", "country:gb", "airport:LTN", "city:BIRMINGHAM", "city:DUBLIN", "airport:BOH", "airport:EMA", "airport:MAN", "region:ENGLAND", "city:LEEDS", "country:ie", "airport:DUB", "airport:PIK", "airport:BHX", "region:SCOTLAND", "city:MANCHESTER", "city:LONDON"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 37.7903,
      "lng": -1.1418
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:JMK",
    "name": "Mykonos",
    "categories": [],
    "iataCode": "JMK",
    "seoName": "mykonos",
    "cityCode": "MYKONOS",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:BLQ", "country:fr", "city:BORDEAUX", "city:FRANKFURT", "city:ATHENS", "airport:PFO", "country:it", "country:gr", "airport:BOD", "airport:FRA", "airport:ATH", "city:BOLOGNA", "city:PAPHOS", "country:de"],
    "countryCode": "gr",
    "base": false,
    "coords": {
      "lat": 37.4351,
      "lng": 25.3481
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:FMO",
    "name": "Münster",
    "categories": ["FAM", "FST"],
    "iataCode": "FMO",
    "seoName": "munster",
    "cityCode": "MUNSTER",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["city:PALMA", "airport:PMI", "country:es"],
    "countryCode": "de",
    "base": false,
    "coords": {
      "lat": 52.1346,
      "lng": 7.68483
    },
    "priority": 158,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:NDR",
    "name": "Nador",
    "categories": ["FAM", "SPR", "FST", "CTY", "OUT"],
    "iataCode": "NDR",
    "seoName": "nador",
    "cityCode": "NADOR",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["airport:BCN", "airport:BVA", "city:DUSSELDORF", "airport:MRS", "airport:HHN", "city:CHARLEROI", "airport:NRN", "country:es", "country:fr", "city:PARIS", "city:BARCELONA", "airport:CRL", "city:FRANKFURT", "city:MARSEILLE", "region:COSTA_BRAVA", "country:be", "country:de"],
    "countryCode": "ma",
    "base": false,
    "coords": {
      "lat": 34.9888,
      "lng": -3.02821
    },
    "priority": 87,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:NTE",
    "name": "Nantes",
    "categories": ["FAM", "CTY", "CUL", "OUT"],
    "iataCode": "NTE",
    "seoName": "nantes",
    "cityCode": "NANTES",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:VLC", "airport:MRS", "airport:SVQ", "airport:EDI", "country:es", "airport:MLA", "airport:NAP", "country:mt", "airport:FEZ", "city:MARSEILLE", "city:FEZ", "country:it", "airport:MAN", "region:ENGLAND", "country:ie", "city:MANCHESTER", "city:LONDON", "country:ma", "country:gb", "city:EDINBURGH", "country:fr", "city:BORDEAUX", "city:DUBLIN", "city:NAPLES", "city:MALTA", "city:SEVILLE", "airport:BOD", "airport:DUB", "city:VALENCIA", "region:SCOTLAND"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 47.1532,
      "lng": -1.61073
    },
    "priority": 111,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:NAP",
    "name": "Naples",
    "categories": [],
    "iataCode": "NAP",
    "seoName": "naples",
    "cityCode": "NAPLES",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "airport:ORK", "airport:KRK", "connectingFlight:HAM:BGY", "airport:CRL", "connectingFlight:PMI:BGY", "city:FRANKFURT", "city:TENERIFE", "country:gr", "region:ENGLAND", "airport:BGY", "city:STOCKHOLM", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:AGP", "city:MILAN", "city:EDINBURGH", "connectingFlight:IBZ:BGY", "country:hu", "airport:NYO", "city:BERLIN", "airport:DUS", "city:KAUNAS", "airport:TLS", "country:pt", "airport:RHO", "connectingFlight:EDI:BGY", "city:BOLOGNA", "country:pl", "connectingFlight:SXF:BGY", "airport:WRO", "city:VALENCIA", "airport:DUB", "connectingFlight:LPA:BGY", "airport:STN", "country:es", "city:THESSALONIKI", "connectingFlight:VNO:BGY", "airport:EXT", "city:CHANIA", "connectingFlight:CGN:BGY", "city:PALMA", "country:mt", "city:MARSEILLE", "airport:RAK", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:BRE", "city:RHODES", "connectingFlight:PRG:BGY", "city:LISBON", "city:MANCHESTER", "airport:SKG", "city:EXETER", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "city:VILNIUS", "airport:EIN", "country:gb", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:KUN", "city:MALTA", "city:SEVILLE", "city:ZARAGOZA", "city:PRAGUE", "country:nl", "airport:GDN", "airport:STR", "airport:VLC", "country:cz", "airport:SVQ", "airport:MRS", "airport:HHN", "airport:BLQ", "airport:TXL", "city:TOULOUSE", "airport:NTE", "region:CANARY_ISLES", "airport:MAN", "airport:WMI", "airport:MAD", "city:KRAKOW", "country:ma", "connectingFlight:CRL:BGY", "city:CORK", "city:VENICE", "city:WARSAW", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "connectingFlight:TFS:BGY", "country:dk", "connectingFlight:CFU:BGY", "country:lt", "connectingFlight:ATH:BGY", "region:COSTA_BRAVA", "city:STUTTGART", "airport:BUD", "region:SCOTLAND", "city:GDANSK", "country:de", "airport:OPO", "airport:CHQ", "connectingFlight:ZAZ:BGY", "city:CORFU", "city:IBIZA", "city:PORTO", "airport:MLA", "airport:CPH", "city:ALICANTE", "city:MALAGA", "country:it", "airport:LIS", "country:ie", "connectingFlight:ALC:BGY", "airport:TSF", "connectingFlight:BRS:BGY", "city:BIRMINGHAM", "city:NANTES", "city:WROCLAW", "country:se", "city:MADRID", "city:DUBLIN", "city:BRISTOL", "region:CRETE", "city:ATHENS", "city:COPENHAGEN", "airport:EMA", "city:BUDAPEST", "airport:BOD", "country:be", "city:BREMEN"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 40.5304,
      "lng": 14.1727
    },
    "priority": 104,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:NCL",
    "name": "Newcastle",
    "categories": ["GLF", "HEN", "FAM", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "NCL",
    "seoName": "newcastle",
    "cityCode": "NEWCASTLE",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["country:es", "airport:GRO", "city:LANZAROTE", "city:PALMA", "region:CANARY_ISLES", "city:TENERIFE", "city:ALICANTE", "city:MALAGA", "city:FARO", "airport:ALC", "country:ie", "airport:WMI", "airport:FAO", "airport:MAD", "airport:PMI", "airport:AGP", "airport:ACE", "city:WARSAW", "city:WROCLAW", "airport:TFS", "region:COSTA_DE_SOL", "city:MADRID", "city:DUBLIN", "country:pt", "region:COSTA_BRAVA", "country:pl", "airport:WRO", "airport:DUB", "airport:GDN", "city:GIRONA", "city:GDANSK"],
    "countryCode": "gb",
    "base": false,
    "coords": {
      "lat": 55.0375,
      "lng": -1.69167
    },
    "priority": 132,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB"]
  }, {
    "id": "airport:NQY",
    "name": "Newquay Cornwall",
    "categories": [],
    "iataCode": "NQY",
    "seoName": "newquay",
    "cityCode": "NEWQUAY",
    "country": "United Kingdom",
    "currencyCode": "GBP",
    "routes": ["airport:HHN", "city:FRANKFURT", "country:pt", "city:ALICANTE", "city:FARO", "airport:ALC", "country:es", "region:COSTA_BRAVA", "airport:FAO", "country:de"],
    "countryCode": "gb",
    "base": false,
    "coords": {
      "lat": 50.4406,
      "lng": -4.99541
    },
    "priority": 225,
    "seasonalRoutes": [],
    "aliases": ["England", "Great Britain", "UK", "GB", "Cornwall"]
  }, {
    "id": "airport:NCE",
    "name": "Nice",
    "categories": ["SKI", "FAM", "SPR", "FST", "CTY", "CUL", "SEA", "XMS"],
    "iataCode": "NCE",
    "seoName": "nice",
    "cityCode": "NICE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "country:gb", "region:ENGLAND", "country:ie", "city:STUTTGART", "airport:DUB", "airport:STR", "city:LONDON", "city:DUBLIN", "country:de"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.6584,
      "lng": 7.21587
    },
    "priority": 127,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:FNI",
    "name": "Nimes",
    "categories": ["FAM", "CTY", "CUL", "OUT"],
    "iataCode": "FNI",
    "seoName": "nimes",
    "cityCode": "NIMES",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "country:ma", "city:CHARLEROI", "country:gb", "airport:LTN", "city:MARRAKESH", "airport:CRL", "airport:FEZ", "airport:RAK", "city:FEZ", "region:ENGLAND", "country:be", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.7574,
      "lng": 4.41635
    },
    "priority": 103,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:INI",
    "name": "Nis",
    "categories": [],
    "iataCode": "INI",
    "seoName": "nis",
    "cityCode": "NIS",
    "country": "Serbia",
    "currencyCode": "EUR",
    "routes": ["city:DUSSELDORF", "city:MILAN", "airport:NRN", "country:sk", "airport:NYO", "airport:BTS", "airport:SXF", "city:BERLIN", "country:se", "city:BRATISLAVA", "country:it", "airport:BGY", "city:STOCKHOLM", "country:de"],
    "countryCode": "rs",
    "base": false,
    "coords": {
      "lat": 43.3372,
      "lng": 21.8536
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:NUE",
    "name": "Nuremberg",
    "categories": ["FAM", "CTY", "CUL", "XMS"],
    "iataCode": "NUE",
    "seoName": "nuremberg",
    "cityCode": "NUREMBERG",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:CRV", "city:BARI", "airport:KRK", "region:SARDINIA", "airport:MAN", "country:gr", "city:FARO", "connectingFlight:FAO:OPO", "region:ENGLAND", "airport:BGY", "airport:MAD", "city:KRAKOW", "country:ma", "airport:PMI", "airport:AGP", "city:MILAN", "city:PALERMO", "country:hu", "connectingFlight:CAG:BGY", "region:COSTA_DE_SOL", "city:MARRAKESH", "country:pt", "city:ROME", "country:hr", "country:lt", "country:pl", "region:COSTA_BRAVA", "airport:BUD", "airport:STN", "airport:OPO", "city:ZADAR", "city:PORTO", "country:es", "city:THESSALONIKI", "airport:MLA", "airport:ZAD", "country:mt", "city:PALMA", "airport:RAK", "airport:BRI", "country:it", "city:MALAGA", "city:ALICANTE", "airport:ALC", "airport:PMO", "city:MANCHESTER", "airport:SKG", "city:LONDON", "region:SICILY", "city:VILNIUS", "country:gb", "city:MADRID", "city:CROTONE", "city:MALTA", "airport:CIA", "region:PUGLIA", "city:BUDAPEST", "airport:VNO", "city:CAGLIARI"],
    "countryCode": "de",
    "base": true,
    "coords": {
      "lat": 49.4987,
      "lng": 11.0669
    },
    "priority": 122,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SZY",
    "name": "Olsztyn - Mazury",
    "categories": [],
    "iataCode": "SZY",
    "seoName": "olsztyn-mazury",
    "cityCode": "OLSZTYN",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:STN", "country:gb", "region:ENGLAND", "city:LONDON"],
    "countryCode": "pl",
    "base": false,
    "coords": {
      "lat": 53.4819,
      "lng": 20.9378
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": ["Mazury"]
  }, {
    "id": "airport:OMR",
    "name": "Oradea",
    "categories": [],
    "iataCode": "OMR",
    "seoName": "oradea",
    "cityCode": "ORADEA",
    "country": "Romania",
    "currencyCode": "EUR",
    "routes": ["city:MILAN", "airport:EIN", "country:es", "airport:FMM", "airport:GRO", "country:it", "city:MEMMINGEN", "country:nl", "region:COSTA_BRAVA", "airport:BGY", "city:GIRONA", "city:EINDHOVEN", "country:de"],
    "countryCode": "ro",
    "base": false,
    "coords": {
      "lat": 47.0252991,
      "lng": 21.9025002
    },
    "priority": 194,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:OSL",
    "name": "Oslo",
    "categories": [],
    "iataCode": "OSL",
    "seoName": "oslo",
    "cityCode": "OSLO",
    "country": "Norway",
    "currencyCode": "NOK",
    "routes": ["airport:STN", "city:VILNIUS", "country:gb", "airport:VNO", "country:lt", "region:ENGLAND", "city:LONDON"],
    "countryCode": "no",
    "base": false,
    "coords": {
      "lat": 60.2028,
      "lng": 11.0839
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TRF",
    "name": "Oslo Torp",
    "categories": ["FAM", "FST", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "TRF",
    "seoName": "oslo-torp",
    "cityCode": "OSLO",
    "country": "Norway",
    "currencyCode": "NOK",
    "routes": ["airport:STN", "city:HAMBURG", "country:es", "airport:KRK", "airport:MLA", "airport:LPA", "country:mt", "airport:POZ", "airport:RAK", "city:TENERIFE", "region:CANARY_ISLES", "city:MALAGA", "airport:MAN", "city:ALICANTE", "country:it", "airport:ALC", "region:ENGLAND", "airport:WMI", "airport:HAM", "airport:BGY", "city:MANCHESTER", "city:LONDON", "city:KRAKOW", "city:GRAN_CANARIA", "country:ma", "airport:AGP", "country:gb", "city:MILAN", "city:WARSAW", "city:WROCLAW", "airport:TFS", "region:COSTA_DE_SOL", "city:MARRAKESH", "city:MALTA", "country:pl", "region:COSTA_BRAVA", "airport:WRO", "airport:GDN", "city:GDANSK", "city:POZNAN", "country:de"],
    "countryCode": "no",
    "base": false,
    "coords": {
      "lat": 59.1867,
      "lng": 10.2586
    },
    "priority": 131,
    "seasonalRoutes": [],
    "aliases": ["Torp", "Oslo Torp"],
    "weight": 2
  }, {
    "id": "airport:OSR",
    "name": "Ostrava",
    "categories": ["FAM", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "OSR",
    "seoName": "ostrava",
    "cityCode": "OSTRAVA",
    "country": "Czech Republic",
    "currencyCode": "CZK",
    "routes": ["airport:STN", "country:gb", "city:MILAN", "country:it", "region:ENGLAND", "airport:BGY", "city:LONDON"],
    "countryCode": "cz",
    "base": false,
    "coords": {
      "lat": 49.6963,
      "lng": 18.1111
    },
    "priority": 144,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:OZZ",
    "name": "Ouarzazate",
    "categories": [],
    "iataCode": "OZZ",
    "seoName": "ouarzazate",
    "cityCode": "OUARZAZATE",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["airport:MRS", "city:MARSEILLE", "airport:BOD", "country:es", "country:fr", "city:BORDEAUX", "airport:MAD", "city:MADRID"],
    "countryCode": "ma",
    "base": false,
    "coords": {
      "lat": 30.9392,
      "lng": -6.9094
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:OUD",
    "name": "Oujda",
    "categories": ["FAM", "CTY", "CUL"],
    "iataCode": "OUD",
    "seoName": "oujda",
    "cityCode": "OUJDA",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["airport:CRL", "airport:BVA", "city:DUSSELDORF", "airport:MRS", "city:MARSEILLE", "city:CHARLEROI", "airport:NRN", "country:fr", "country:be", "city:PARIS", "country:de"],
    "countryCode": "ma",
    "base": false,
    "coords": {
      "lat": 34.7872,
      "lng": -1.92399
    },
    "priority": 110,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PAD",
    "name": "Paderborn",
    "categories": [],
    "iataCode": "PAD",
    "seoName": "paderborn",
    "cityCode": "PADERBORN",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["city:PALMA", "airport:PMI", "country:es"],
    "countryCode": "de",
    "base": false,
    "coords": {
      "lat": 51.3655,
      "lng": 8.3702
    },
    "priority": 198,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PLQ",
    "name": "Palanga",
    "categories": [],
    "iataCode": "PLQ",
    "seoName": "palanga",
    "cityCode": "PALANGA",
    "country": "Lithuania",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:GLASGOW", "airport:GLA", "country:gb", "region:ENGLAND", "region:SCOTLAND", "city:LONDON"],
    "countryCode": "lt",
    "base": false,
    "coords": {
      "lat": 55.9733,
      "lng": 21.0939
    },
    "priority": 300,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PMO",
    "name": "Palermo",
    "categories": ["FAM", "CTY", "CUL", "SEA"],
    "iataCode": "PMO",
    "seoName": "palermo",
    "cityCode": "PALERMO",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:NUREMBERG", "connectingFlight:HAM:BGY", "city:VERONA", "airport:CRL", "city:TENERIFE", "city:TURIN", "country:gr", "region:ENGLAND", "airport:BGY", "city:GRAN_CANARIA", "city:MILAN", "city:EDINBURGH", "connectingFlight:BRI:FCO", "connectingFlight:IBZ:BGY", "country:hu", "city:BERLIN", "airport:DUS", "country:pt", "connectingFlight:EDI:BGY", "connectingFlight:BCN:BGY", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "connectingFlight:LPA:BGY", "city:PISA", "airport:STN", "airport:OTP", "airport:NRN", "country:es", "airport:MXP", "city:THESSALONIKI", "connectingFlight:VNO:BGY", "city:PARIS", "connectingFlight:CGN:BGY", "country:mt", "city:MARSEILLE", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "connectingFlight:PRG:BGY", "city:LISBON", "region:TUSCANY", "city:MANCHESTER", "city:LONDON", "city:DUSSELDORF", "city:VILNIUS", "country:gb", "connectingFlight:SKG:BGY", "city:COLOGNE", "country:fr", "city:MALTA", "connectingFlight:BRU:FCO", "city:PRAGUE", "connectingFlight:LIS:BGY", "airport:VRN", "connectingFlight:AGP:BGY", "airport:VLC", "country:cz", "airport:MRS", "airport:BLQ", "city:BRUSSELS", "city:BARI", "region:CANARY_ISLES", "airport:MAN", "airport:FCO", "airport:MAD", "airport:BVA", "city:KRAKOW", "connectingFlight:ALC:FCO", "connectingFlight:CRL:BGY", "airport:MLA|Air Malta", "airport:CGN", "city:VENICE", "airport:FMM", "region:COSTA_DE_SOL", "city:BARCELONA", "connectingFlight:EMA:BGY", "connectingFlight:TFS:BGY", "connectingFlight:BCN:FCO", "city:BUCHAREST", "airport:NUE", "connectingFlight:CFU:BGY", "city:ROME", "connectingFlight:ATH:BGY", "city:MEMMINGEN", "country:lt", "region:COSTA_BRAVA", "connectingFlight:MAN:BGY", "airport:BUD", "region:SCOTLAND", "country:de", "connectingFlight:KRK:BGY", "city:CORFU", "city:IBIZA", "city:PORTO", "airport:SXF", "city:LANZAROTE", "city:MALAGA", "city:ALICANTE", "country:it", "airport:ATH", "country:ie", "connectingFlight:ALC:BGY", "connectingFlight:BRE:BGY", "connectingFlight:OPO:BGY", "airport:TSF", "connectingFlight:BRS:BGY", "city:BIRMINGHAM", "city:WROCLAW", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "airport:PSA", "city:ATHENS", "region:PUGLIA", "connectingFlight:ACE:BGY", "city:BUDAPEST", "country:ro", "country:be", "city:BREMEN", "airport:TRN"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 38.176,
      "lng": 13.091
    },
    "priority": 19,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PMI",
    "name": "Palma de Mallorca",
    "categories": ["HEN", "FAM", "CTY", "SEA", "OUT"],
    "iataCode": "PMI",
    "seoName": "palma-mallorca",
    "cityCode": "PALMA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:BOURNEMOUTH", "airport:INN", "airport:ORK", "city:NUREMBERG", "airport:KRK", "city:SANTANDER", "airport:SZG", "airport:DTM", "airport:CRL", "city:FRANKFURT", "city:STRASBOURG", "region:ENGLAND", "city:INNSBRUCK", "city:STOCKHOLM", "airport:BGY", "city:EINDHOVEN", "airport:AGP", "city:MILAN", "city:EDINBURGH", "city:VITORIA-GASTEIZ", "airport:NYO", "city:BERLIN", "airport:DUS", "city:VIENNA", "city:LAMEZIA", "city:NAPLES", "city:KAUNAS", "city:BILLUND", "country:pt", "city:LEEDS", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "airport:BHX", "airport:GRZ", "airport:STN", "city:GLASGOW", "city:SHANNON", "airport:NRN", "airport:BRU", "country:es", "city:HANNOVER", "airport:BRS", "city:LINZ", "airport:VIT", "airport:SCQ", "connectingFlight:CTA:BGY", "city:PARIS", "city:MARSEILLE", "airport:BRE", "airport:FRA", "city:LISBON", "connectingFlight:LIS:OPO", "airport:VIE", "city:MANCHESTER", "airport:LUX", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:KUN", "airport:SDR", "city:BRATISLAVA", "city:SANTIAGO", "airport:FKB", "airport:BSL", "city:SEVILLE", "city:ZARAGOZA", "airport:LNZ", "country:nl", "airport:ZAZ", "airport:STR", "airport:VLC", "airport:MRS", "airport:SVQ", "airport:HHN", "connectingFlight:NAP:BGY", "airport:BLQ", "city:BRUSSELS", "airport:LPL", "city:MUNSTER", "airport:TXL", "airport:BTS", "airport:BLL", "city:PADERBORN", "country:ch", "airport:SEN", "airport:MAN", "city:MUNICH", "airport:NCL", "airport:WMI", "airport:MAD", "city:KRAKOW", "airport:BVA", "city:CATANIA", "airport:GOT", "city:CORK", "airport:CGN", "airport:FMO", "airport:FMM", "city:WARSAW", "region:COSTA_DE_SOL", "city:BARCELONA", "city:LIVERPOOL", "airport:NUE", "country:dk", "city:ROME", "city:MEMMINGEN", "country:lt", "country:lu", "airport:VLL", "airport:SNN", "region:COSTA_BRAVA", "city:STUTTGART", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "city:BASEL", "airport:OPO", "airport:LBA", "airport:EDI", "city:PORTO", "city:SALZBURG", "airport:SXF", "country:at", "airport:SXB", "country:it", "city:MALAGA", "airport:PAD", "country:ie", "airport:HAM", "airport:HAJ", "airport:PIK", "region:SICILY", "city:GRAZ", "country:sk", "city:BIRMINGHAM", "city:KARLSRUHE", "country:se", "city:WROCLAW", "city:MADRID", "city:DUBLIN", "city:VALLADOLID", "city:BRISTOL", "airport:MUC", "airport:CIA", "airport:BOH", "city:DORTMUND", "airport:EMA", "city:LUXEMBOURG", "city:SOUTHEND_ON_SEA", "country:be", "city:GOTHENBURG", "city:BREMEN"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 39.5517,
      "lng": 2.73881
    },
    "priority": 12,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PFO",
    "name": "Paphos",
    "categories": ["HEN", "FAM", "NIT", "CTY", "CUL", "SEA", "OUT"],
    "iataCode": "PFO",
    "seoName": "paphos",
    "cityCode": "PAPHOS",
    "country": "Cyprus",
    "currencyCode": "EUR",
    "routes": ["city:TALLINN", "city:BOURNEMOUTH", "airport:TXL", "airport:LPL", "airport:KRK", "airport:BTS", "country:gr", "region:ENGLAND", "city:MYKONOS", "airport:BGY", "city:STOCKHOLM", "city:KRAKOW", "city:MILAN", "airport:SOF", "airport:JMK", "country:ua", "country:hu", "airport:NYO", "city:BERLIN", "city:VIENNA", "city:BUCHAREST", "city:LIVERPOOL", "city:KAUNAS", "airport:TLV", "city:SOFIA", "city:ROME", "airport:KBP", "country:lv", "country:lt", "country:pl", "airport:TLL", "airport:BUD", "city:AMMAN", "airport:DUB", "country:de", "airport:STN", "airport:OTP", "airport:CHQ", "city:KIEV", "city:THESSALONIKI", "airport:RIX", "country:at", "city:CHANIA", "city:TEL_AVIV", "country:it", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "country:ie", "airport:VIE", "country:il", "airport:SKG", "country:ee", "city:LONDON", "country:gb", "country:sk", "airport:KUN", "airport:AMM", "country:se", "city:BRATISLAVA", "city:DUBLIN", "airport:BOH", "airport:CIA", "region:CRETE", "country:jo", "country:bg", "city:BUDAPEST", "city:RIGA", "country:ro"],
    "countryCode": "cy",
    "base": true,
    "coords": {
      "lat": 34.718,
      "lng": 32.4857
    },
    "priority": 77,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PED",
    "name": "Pardubice",
    "categories": ["SKI"],
    "iataCode": "PED",
    "seoName": "pardubice",
    "cityCode": "PARDUBICE",
    "country": "Czech Republic",
    "currencyCode": "CZK",
    "routes": ["airport:STN", "city:ALICANTE", "country:gb", "airport:ALC", "region:ENGLAND", "country:es", "region:COSTA_BRAVA", "city:LONDON"],
    "countryCode": "cz",
    "base": false,
    "coords": {
      "lat": 50.0048,
      "lng": 15.4419
    },
    "priority": 93,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:BVA",
    "name": "Paris Beauvais",
    "categories": ["HEN", "ROM", "FAM", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "BVA",
    "seoName": "paris-beauvais",
    "cityCode": "PARIS",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["city:FIGARI", "city:TANGIER", "airport:KRK", "airport:GRO", "city:BEZIERS", "city:TENERIFE", "country:gr", "city:FARO", "airport:BGY", "city:STOCKHOLM", "city:OUJDA", "airport:PMI", "city:MILAN", "country:hu", "airport:NYO", "city:VIENNA", "country:pt", "country:hr", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "airport:TNG", "city:PISA", "city:ZADAR", "country:es", "city:THESSALONIKI", "airport:ZAD", "country:mt", "city:PALMA", "airport:RAK", "airport:BRI", "airport:BZR", "airport:FAO", "city:LISBON", "airport:PMO", "airport:VIE", "region:TUSCANY", "airport:SKG", "airport:BCN", "city:VILNIUS", "country:fr", "airport:TFS", "city:BRATISLAVA", "city:NADOR", "city:MALTA", "airport:OUD", "city:SEVILLE", "city:ZARAGOZA", "city:PRAGUE", "airport:FSC", "city:RABAT", "airport:ZAZ", "airport:RBA", "airport:VLC", "airport:SVQ", "country:cz", "airport:BLQ", "city:BARI", "region:SARDINIA", "airport:BTS", "region:CANARY_ISLES", "city:BRINDISI", "airport:WMI", "airport:MAD", "city:KRAKOW", "country:ma", "city:VENICE", "city:PALERMO", "city:WARSAW", "city:BARCELONA", "region:CORSICA", "city:MARRAKESH", "airport:NDR", "city:ROME", "country:lt", "region:COSTA_BRAVA", "airport:BUD", "airport:BDS", "airport:OPO", "city:PORTO", "airport:PRG", "airport:MLA", "country:at", "airport:FEZ", "country:it", "city:ALICANTE", "city:FEZ", "airport:ALC", "airport:LIS", "country:ie", "region:SICILY", "airport:CAG", "country:sk", "airport:TSF", "city:WROCLAW", "country:se", "city:DUBLIN", "city:MADRID", "airport:PSA", "airport:CIA", "region:PUGLIA", "city:BUDAPEST", "airport:VNO", "city:CAGLIARI", "city:GIRONA"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 49.4544,
      "lng": 2.11278
    },
    "priority": 10,
    "seasonalRoutes": [],
    "aliases": ["Beauvais", "Paris Beauvais"],
    "weight": 1
  }, {
    "id": "airport:XCR",
    "name": "Paris Vatry",
    "categories": ["HEN", "ROM", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "XCR",
    "seoName": "paris-vatry",
    "cityCode": "PARIS",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:OPO", "country:ma", "airport:FEZ", "country:pt", "airport:RAK", "city:FEZ", "city:PORTO", "city:MARRAKESH"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 48.7761,
      "lng": 4.18449
    },
    "priority": 157,
    "seasonalRoutes": [],
    "aliases": ["Vatry"],
    "weight": 2
  }, {
    "id": "airport:PMF",
    "name": "Parma",
    "categories": ["FAM", "SPR", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "PMF",
    "seoName": "parma",
    "cityCode": "PARMA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:CAG", "country:it", "region:SARDINIA", "city:CAGLIARI"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 44.8245,
      "lng": 10.2964
    },
    "priority": 115,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PGF",
    "name": "Perpignan",
    "categories": ["SKI", "FAM", "CTY", "CUL", "OUT"],
    "iataCode": "PGF",
    "seoName": "perpignan",
    "cityCode": "PERPIGNAN",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "country:ma", "city:CHARLEROI", "country:gb", "city:BIRMINGHAM", "city:MARRAKESH", "airport:CRL", "city:FRANKFURT", "airport:RAK", "region:ENGLAND", "airport:FRA", "airport:BHX", "country:be", "country:de", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 42.7404,
      "lng": 2.87067
    },
    "priority": 118,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PEG",
    "name": "Perugia",
    "categories": ["SKI", "FAM", "CTY", "CUL"],
    "iataCode": "PEG",
    "seoName": "perugia",
    "cityCode": "PERUGIA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["region:SICILY", "airport:STN", "city:CHARLEROI", "city:CATANIA", "country:gb", "airport:MLA", "airport:CRL", "city:MALTA", "country:mt", "city:FRANKFURT", "country:it", "region:ENGLAND", "airport:FRA", "country:be", "country:de", "airport:CTA", "city:LONDON"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 43.0959,
      "lng": 12.5132
    },
    "priority": 114,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PSR",
    "name": "Pescara",
    "categories": ["FAM", "CTY", "CUL", "SEA"],
    "iataCode": "PSR",
    "seoName": "pescara",
    "cityCode": "PESCARA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:HHN", "country:cz", "airport:OTP", "city:CHARLEROI", "airport:NRN", "city:IBIZA", "country:es", "airport:PRG", "connectingFlight:MAD:BGY", "airport:KRK", "airport:GRO", "airport:MLA", "airport:CRL", "city:FRANKFURT", "country:mt", "country:gr", "country:it", "region:ENGLAND", "airport:WMI", "airport:BGY", "city:MANCHESTER", "city:LONDON", "city:KRAKOW", "city:DUSSELDORF", "country:gb", "city:MILAN", "connectingFlight:IBZ:BGY", "city:WARSAW", "country:hu", "city:BERLIN", "city:MADRID", "city:BUCHAREST", "city:MALTA", "city:ATHENS", "connectingFlight:ATH:BGY", "city:BUDAPEST", "connectingFlight:BUD:BGY", "city:PRAGUE", "country:pl", "region:COSTA_BRAVA", "country:ro", "connectingFlight:SXF:BGY", "city:GIRONA", "connectingFlight:MAN:BGY", "country:be", "country:de"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 42.4317,
      "lng": 14.1811
    },
    "priority": 75,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PSA",
    "name": "Pisa",
    "categories": ["ROM", "FAM", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "PSA",
    "seoName": "pisa",
    "cityCode": "PISA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:EFL", "city:CHARLEROI", "airport:CRV", "airport:GRO", "airport:KRK", "airport:CRL", "city:FRANKFURT", "city:KEFALONIA", "city:TENERIFE", "country:gr", "region:ENGLAND", "airport:CIY", "city:STOCKHOLM", "city:FUERTEVENTURA", "city:EINDHOVEN", "city:GRAN_CANARIA", "city:EDINBURGH", "airport:NYO", "country:hu", "city:BERLIN", "city:VIENNA", "city:LAMEZIA", "city:SOFIA", "city:BILLUND", "country:pt", "city:ALGHERO", "airport:RHO", "city:TRAPANI", "city:LEEDS", "country:pl", "city:VALENCIA", "airport:DUB", "city:GLASGOW", "airport:STN", "airport:NRN", "airport:AHO", "country:es", "airport:BRU", "city:PARIS", "city:CHANIA", "country:mt", "airport:RAK", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:FRA", "city:RHODES", "city:LISBON", "airport:VIE", "airport:PMO", "airport:CTA", "city:LONDON", "city:DUSSELDORF", "country:gb", "airport:EIN", "country:fr", "airport:SUF", "airport:TFS", "city:MALTA", "city:SEVILLE", "city:PRAGUE", "country:nl", "airport:GDN", "airport:VLC", "airport:SVQ", "country:cz", "airport:HHN", "city:BRUSSELS", "airport:LPL", "city:BARI", "region:SARDINIA", "airport:BLL", "airport:LPA", "region:CANARY_ISLES", "city:BRINDISI", "airport:WMI", "airport:MAD", "airport:BVA", "city:KRAKOW", "country:ma", "city:CATANIA", "airport:GOT", "airport:SOF", "city:WARSAW", "city:PALERMO", "airport:IBZ", "city:COMISO", "city:MARRAKESH", "city:LIVERPOOL", "country:dk", "airport:TPS", "airport:FUE", "region:COSTA_BRAVA", "airport:BDS", "airport:BUD", "airport:CFU", "region:SCOTLAND", "city:GDANSK", "country:de", "airport:LBA", "airport:CHQ", "airport:EDI", "city:CORFU", "city:IBIZA", "airport:PRG", "airport:SXF", "country:at", "airport:MLA", "airport:FEZ", "country:it", "city:FEZ", "airport:LIS", "country:ie", "airport:PIK", "region:SICILY", "airport:CAG", "city:BIRMINGHAM", "country:se", "city:MADRID", "city:DUBLIN", "city:CROTONE", "region:CRETE", "country:bg", "region:PUGLIA", "airport:EMA", "city:BUDAPEST", "city:GIRONA", "city:CAGLIARI", "country:be", "city:GOTHENBURG"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 43.6839,
      "lng": 10.3927
    },
    "priority": 13,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PDV",
    "name": "Plovdiv",
    "categories": ["SKI", "FAM", "FST", "CTY", "CUL"],
    "iataCode": "PDV",
    "seoName": "plovdiv",
    "cityCode": "PLOVDIV",
    "country": "Bulgaria",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:CRL", "city:CHARLEROI", "country:gb", "city:MILAN", "country:it", "region:ENGLAND", "airport:BGY", "country:be", "city:LONDON"],
    "countryCode": "bg",
    "base": false,
    "coords": {
      "lat": 42.0678,
      "lng": 24.8508
    },
    "priority": 133,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TGD",
    "name": "Podgorica",
    "categories": ["FAM", "SPR", "CTY", "CUL", "OUT"],
    "iataCode": "TGD",
    "seoName": "podgorica-montenegro",
    "cityCode": "PODGORICA",
    "country": "Montenegro",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:CHARLEROI", "country:gb", "airport:NYO", "city:WROCLAW", "country:se", "airport:SXF", "city:BERLIN", "airport:CRL", "region:ENGLAND", "country:pl", "airport:WRO", "city:STOCKHOLM", "city:STUTTGART", "airport:STR", "country:be", "country:de", "city:LONDON"],
    "countryCode": "me",
    "base": false,
    "coords": {
      "lat": 42.3594,
      "lng": 19.2519
    },
    "priority": 150,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PIS",
    "name": "Poitiers",
    "categories": ["FAM", "CTY", "CUL"],
    "iataCode": "PIS",
    "seoName": "poitiers",
    "cityCode": "POITIERS",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:OPO", "airport:MRS", "country:ma", "country:gb", "airport:EDI", "city:PORTO", "city:EDINBURGH", "country:fr", "city:DUBLIN", "city:MARRAKESH", "country:pt", "city:MARSEILLE", "airport:RAK", "region:ENGLAND", "country:ie", "airport:DUB", "region:SCOTLAND", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 46.5877,
      "lng": 0.306666
    },
    "priority": 148,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PDL",
    "name": "Ponta Delgada",
    "categories": ["GLF", "HEN", "FAM", "NIT", "SEA"],
    "iataCode": "PDL",
    "seoName": "ponta-delgada",
    "cityCode": "PONTA_DELGADA",
    "country": "Portugal",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:HHN", "airport:OPO", "city:BRUSSELS", "city:PORTO", "country:es", "connectingFlight:BCN:OPO", "connectingFlight:NRN:OPO", "city:FRANKFURT", "country:it", "airport:MAN", "region:ENGLAND", "connectingFlight:BRU:OPO", "airport:LIS", "city:LISBON", "city:MANCHESTER", "city:LONDON", "city:DUSSELDORF", "connectingFlight:BGY:OPO", "city:MILAN", "country:gb", "city:BARCELONA", "country:pt", "region:COSTA_BRAVA", "country:be", "country:de"],
    "countryCode": "pt",
    "base": true,
    "coords": {
      "lat": 37.74194,
      "lng": -25.69778
    },
    "priority": 187,
    "seasonalRoutes": [],
    "aliases": ["Delgada"]
  }, {
    "id": "airport:OPO",
    "name": "Porto",
    "categories": ["GLF", "HEN", "FAM", "NIT", "CTY", "CUL", "SEA", "OUT"],
    "iataCode": "OPO",
    "seoName": "porto",
    "cityCode": "PORTO",
    "country": "Portugal",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:DOLE", "city:CHARLEROI", "city:CARCASSONNE", "connectingFlight:BTS:BGY", "airport:XCR", "city:NUREMBERG", "airport:KRK", "airport:DTM", "airport:DLE", "airport:CRL", "city:FRANKFURT", "city:STRASBOURG", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "airport:BGY", "city:EINDHOVEN", "city:LA_ROCHELLE", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "city:EDINBURGH", "airport:TUF", "airport:CCF", "country:hu", "city:BERLIN", "city:NAPLES", "country:pt", "airport:PDL", "city:CLERMONT_FERRAND", "city:BOLOGNA", "country:pl", "airport:DUB", "city:VALENCIA", "city:TOURS", "airport:BHX", "airport:STN", "airport:NRN", "country:es", "airport:BRU", "airport:MXP", "city:THESSALONIKI", "airport:TER", "city:PARIS", "airport:NAP", "country:mt", "city:PALMA", "city:MARSEILLE", "airport:RAK", "connectingFlight:BRI:BGY", "airport:BRE", "airport:FRA", "airport:FAO", "connectingFlight:PRG:BGY", "city:LISBON", "airport:LUX", "city:MANCHESTER", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:EIN", "connectingFlight:SKG:BGY", "city:COLOGNE", "country:fr", "city:BORDEAUX", "city:TERCEIRA", "airport:TFS", "city:BRATISLAVA", "city:LORIENT", "airport:FKB", "city:MALTA", "city:SEVILLE", "city:PRAGUE", "connectingFlight:BUD:BGY", "country:nl", "airport:VLC", "country:cz", "airport:SVQ", "airport:MRS", "airport:BLQ", "airport:LPL", "city:BRUSSELS", "city:BARI", "region:SARDINIA", "airport:CFE", "city:BRIVE", "airport:LPA", "region:BRITTANY", "region:CANARY_ISLES", "city:BRINDISI", "airport:MAN", "airport:WMI", "airport:MAD", "airport:BVA", "city:KRAKOW", "country:ma", "airport:CGN", "connectingFlight:BDS:BGY", "city:VENICE", "airport:FMM", "city:PALERMO", "city:WARSAW", "city:BARCELONA", "city:MARRAKESH", "city:LIVERPOOL", "country:dk", "airport:NUE", "city:ROME", "city:MEMMINGEN", "country:lu", "region:COSTA_BRAVA", "region:SCOTLAND", "country:de", "airport:LRT", "connectingFlight:PMO:BGY", "city:LILLE", "city:PONTA_DELGADA", "airport:EDI", "airport:SXF", "airport:MLA", "airport:LRH", "airport:SXB", "airport:CPH", "country:it", "city:ALICANTE", "airport:PIS", "airport:ALC", "airport:LIS", "country:ie", "airport:HAM", "airport:BVE", "airport:LIL", "region:SICILY", "airport:CAG", "country:sk", "airport:TSF", "city:POITIERS", "city:BIRMINGHAM", "city:KARLSRUHE", "city:MADRID", "city:DUBLIN", "airport:CIA", "city:COPENHAGEN", "region:PUGLIA", "city:DORTMUND", "city:LUXEMBOURG", "airport:BOD", "city:BUDAPEST", "city:CAGLIARI", "region:AZORES", "country:be", "city:BREMEN"],
    "countryCode": "pt",
    "base": true,
    "coords": {
      "lat": 41.2481,
      "lng": -8.68139
    },
    "priority": 9,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:POZ",
    "name": "Poznan",
    "categories": ["FAM", "SPR", "CTY", "CUL"],
    "iataCode": "POZ",
    "seoName": "poznan",
    "cityCode": "POZNAN",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:LPL", "airport:ORK", "airport:GRO", "airport:BLL", "country:gr", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "airport:MAD", "city:CORK", "city:MILAN", "city:EDINBURGH", "country:ua", "airport:NYO", "city:LIVERPOOL", "airport:TLV", "city:BILLUND", "country:dk", "city:ROME", "airport:KBP", "city:EILAT", "region:COSTA_BRAVA", "airport:VDA", "airport:DUB", "airport:CFU", "region:SCOTLAND", "airport:STN", "airport:EDI", "city:CORFU", "airport:TRF", "country:es", "city:CASTELLON", "airport:BRS", "city:KIEV", "airport:MLA", "city:TEL_AVIV", "country:mt", "country:it", "city:ALICANTE", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ALC", "airport:ATH", "country:ie", "country:il", "city:LONDON", "city:OSLO", "country:gb", "country:se", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "city:MALTA", "city:ATHENS", "airport:CIA", "airport:CDT", "city:GIRONA", "country:no"],
    "countryCode": "pl",
    "base": true,
    "coords": {
      "lat": 52.421,
      "lng": 16.8263
    },
    "priority": 78,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PRG",
    "name": "Prague",
    "categories": ["SKI", "HEN", "ROM", "FAM", "NIT", "CTY", "CUL", "XMS"],
    "iataCode": "PRG",
    "seoName": "prague",
    "cityCode": "PRAGUE",
    "country": "Czech Republic",
    "currencyCode": "CZK",
    "routes": ["city:BOURNEMOUTH", "city:CHARLEROI", "airport:KRK", "airport:CRL", "country:gr", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "airport:PSR", "city:EINDHOVEN", "airport:AGP", "city:MILAN", "city:EDINBURGH", "airport:NYO", "country:hu", "city:LAMEZIA", "city:NAPLES", "city:BILLUND", "country:pt", "country:hr", "city:TRAPANI", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:DUB", "city:VALENCIA", "airport:STN", "city:PISA", "city:ZADAR", "country:es", "airport:RIX", "connectingFlight:CTA:BGY", "city:PARIS", "airport:ZAD", "country:mt", "city:MARSEILLE", "airport:RAK", "airport:BRI", "connectingFlight:BRI:BGY", "region:TUSCANY", "city:LONDON", "airport:BCN", "country:gb", "airport:EIN", "country:fr", "city:MALTA", "country:nl", "city:PESCARA", "airport:MRS", "connectingFlight:NAP:BGY", "airport:BLQ", "airport:LPL", "city:BARI", "region:SARDINIA", "airport:BLL", "connectingFlight:VLC:BGY", "city:BRINDISI", "airport:MAD", "city:KRAKOW", "airport:BVA", "country:ma", "airport:GOT", "city:CATANIA", "airport:MLA|Air Malta", "connectingFlight:BDS:BGY", "city:VENICE", "city:PALERMO", "connectingFlight:CAG:BGY", "city:BARCELONA", "region:COSTA_DE_SOL", "city:MARRAKESH", "city:LIVERPOOL", "country:dk", "city:ROME", "country:lv", "airport:TPS", "city:EILAT", "connectingFlight:ATH:BGY", "region:COSTA_BRAVA", "airport:VDA", "city:AMMAN", "airport:BUD", "region:SCOTLAND", "connectingFlight:PMO:BGY", "airport:EDI", "city:PORTO", "airport:CPH", "country:it", "city:MALAGA", "country:ie", "country:il", "region:SICILY", "connectingFlight:OPO:BGY", "airport:TSF", "country:se", "airport:AMM", "city:MADRID", "city:DUBLIN", "airport:PSA", "airport:CIA", "airport:BOH", "city:ATHENS", "country:jo", "city:COPENHAGEN", "region:PUGLIA", "city:BUDAPEST", "city:RIGA", "city:CAGLIARI", "city:GOTHENBURG", "country:be"],
    "countryCode": "cz",
    "base": true,
    "coords": {
      "lat": 50.1008,
      "lng": 14.26
    },
    "priority": 93,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:PUY",
    "name": "Pula",
    "categories": ["FAM", "FST", "CTY", "CUL"],
    "iataCode": "PUY",
    "seoName": "pula",
    "cityCode": "PULA",
    "country": "Croatia",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:HHN", "city:CHARLEROI", "country:gb", "airport:TXL", "city:BERLIN", "airport:CRL", "city:FRANKFURT", "region:ENGLAND", "airport:FRA", "city:STUTTGART", "airport:STR", "country:be", "city:LONDON", "country:de"],
    "countryCode": "hr",
    "base": false,
    "coords": {
      "lat": 44.8935,
      "lng": 13.9222
    },
    "priority": 141,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:RBA",
    "name": "Rabat",
    "categories": ["GLF", "FAM", "SPR", "FST", "CTY", "CUL", "SEA", "OUT"],
    "iataCode": "RBA",
    "seoName": "rabat",
    "cityCode": "RABAT",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["airport:STN", "airport:SVQ", "airport:MRS", "city:CHARLEROI", "airport:NRN", "country:es", "airport:GRO", "city:PARIS", "airport:CRL", "city:MARSEILLE", "country:it", "region:ENGLAND", "city:EINDHOVEN", "city:LONDON", "airport:MAD", "airport:BVA", "city:DUSSELDORF", "airport:EIN", "country:gb", "country:fr", "city:MADRID", "airport:CIA", "city:ROME", "city:SEVILLE", "country:nl", "region:COSTA_BRAVA", "city:GIRONA", "country:be", "country:de"],
    "countryCode": "ma",
    "base": false,
    "coords": {
      "lat": 34.0515,
      "lng": -6.75152
    },
    "priority": 79,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:RHO",
    "name": "Rhodes",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CUL", "SEA", "OUT"],
    "iataCode": "RHO",
    "seoName": "rhodes",
    "cityCode": "RHODES",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:PISA", "city:CHARLEROI", "airport:BLQ", "airport:TXL", "airport:NAP", "airport:CRL", "country:it", "airport:MAN", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "airport:FCO", "region:TUSCANY", "city:MANCHESTER", "city:LONDON", "city:DUSSELDORF", "city:MILAN", "country:gb", "city:BIRMINGHAM", "airport:NYO", "airport:KUN", "city:BERLIN", "country:se", "airport:DUS", "city:NAPLES", "airport:PSA", "city:KAUNAS", "city:ROME", "airport:EMA", "country:lt", "city:BOLOGNA", "country:be", "country:de"],
    "countryCode": "gr",
    "base": false,
    "coords": {
      "lat": 36.4054,
      "lng": 28.0862
    },
    "priority": 99,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:RIX",
    "name": "Riga",
    "categories": ["FAM", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "RIX",
    "seoName": "riga",
    "cityCode": "RIGA",
    "country": "Latvia",
    "currencyCode": "EUR",
    "routes": ["country:cy", "country:cz", "airport:HHN", "city:CHARLEROI", "airport:GRO", "airport:CRL", "city:FRANKFURT", "airport:MAN", "region:ENGLAND", "airport:BGY", "city:EINDHOVEN", "airport:CGN", "city:MILAN", "city:EDINBURGH", "city:BERLIN", "city:LEEDS", "region:COSTA_BRAVA", "airport:DUB", "region:SCOTLAND", "country:de", "city:GLASGOW", "airport:STN", "airport:LBA", "airport:EDI", "airport:PRG", "country:es", "airport:SXF", "airport:MLA", "country:mt", "airport:GLA", "country:it", "airport:BRE", "country:ie", "city:PAPHOS", "city:MANCHESTER", "city:LONDON", "country:gb", "airport:EIN", "city:COLOGNE", "city:BIRMINGHAM", "city:DUBLIN", "airport:BOJ", "city:MALTA", "country:bg", "airport:EMA", "airport:PFO", "city:PRAGUE", "city:BURGAS", "country:nl", "city:GIRONA", "country:be", "city:BREMEN"],
    "countryCode": "lv",
    "base": false,
    "coords": {
      "lat": 56.9236,
      "lng": 23.9711
    },
    "priority": 49,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:RJK",
    "name": "Rijeka",
    "categories": ["HEN", "FAM", "SPR", "NIT", "CTY"],
    "iataCode": "RJK",
    "seoName": "rijeka",
    "cityCode": "RIJEKA",
    "country": "Croatia",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:CHARLEROI", "country:gb", "airport:TXL", "airport:NYO", "country:se", "city:BERLIN", "airport:CRL", "city:FRANKFURT", "region:ENGLAND", "airport:FRA", "city:STOCKHOLM", "country:be", "city:LONDON", "country:de"],
    "countryCode": "hr",
    "base": false,
    "coords": {
      "lat": 45.2169,
      "lng": 14.5703
    },
    "priority": 159,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:RMI",
    "name": "Rimini",
    "categories": [],
    "iataCode": "RMI",
    "seoName": "rimini",
    "cityCode": "RIMINI",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:KAUNAS", "country:gb", "country:lt", "region:ENGLAND", "airport:WMI", "city:WARSAW", "country:pl", "airport:KUN", "city:LONDON"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 44.0203,
      "lng": 12.6117
    },
    "priority": 232,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:RDZ",
    "name": "Rodez",
    "categories": ["FAM", "CUL"],
    "iataCode": "RDZ",
    "seoName": "rodez",
    "cityCode": "RODEZ",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:CRL", "city:CHARLEROI", "country:ie", "airport:DUB", "country:be", "city:DUBLIN"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 44.4079,
      "lng": 2.48267
    },
    "priority": 154,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:CIA",
    "name": "Rome Ciampino",
    "categories": ["ROM", "FAM", "SPR", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "CIA",
    "seoName": "rome-ciampino",
    "cityCode": "ROME",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:LDE", "city:CHARLEROI", "city:NUREMBERG", "airport:KRK", "city:SANTANDER", "airport:CRL", "city:FRANKFURT", "country:gr", "region:ENGLAND", "airport:CIY", "city:STOCKHOLM", "city:EINDHOVEN", "airport:PMI", "city:EDINBURGH", "airport:NYO", "country:hu", "city:BERLIN", "city:SOFIA", "city:BILLUND", "country:pt", "country:pl", "airport:WRO", "airport:DUB", "city:VALENCIA", "airport:STN", "city:GLASGOW", "airport:OTP", "city:AQABA", "airport:NRN", "country:es", "city:THESSALONIKI", "city:PARIS", "country:mt", "city:PALMA", "city:MARSEILLE", "airport:RAK", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "city:TRIESTE", "city:PAPHOS", "city:LISBON", "airport:SKG", "city:MANCHESTER", "city:LONDON", "city:DUSSELDORF", "city:VILNIUS", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:SDR", "city:BRATISLAVA", "airport:FKB", "city:MALTA", "city:SEVILLE", "airport:PFO", "airport:AQJ", "city:PRAGUE", "country:nl", "city:RABAT", "airport:RBA", "airport:VLC", "country:cy", "airport:MRS", "airport:SVQ", "airport:HHN", "country:cz", "region:SARDINIA", "airport:BTS", "airport:BLL", "airport:POZ", "airport:MAN", "airport:WMI", "airport:MAD", "airport:BVA", "city:KRAKOW", "country:ma", "airport:GOT", "city:LOURDES", "airport:SOF", "airport:CGN", "city:WARSAW", "city:MARRAKESH", "city:COMISO", "city:BUCHAREST", "country:dk", "airport:NUE", "country:lt", "airport:BUD", "airport:CFU", "region:SCOTLAND", "country:de", "airport:OPO", "airport:EDI", "city:CORFU", "city:PORTO", "airport:PRG", "airport:SXF", "airport:MLA", "airport:CPH", "country:it", "airport:ATH", "airport:LIS", "country:ie", "airport:PIK", "region:SICILY", "airport:CAG", "country:sk", "city:KARLSRUHE", "city:BIRMINGHAM", "country:se", "city:WROCLAW", "city:MADRID", "city:DUBLIN", "city:ATHENS", "country:bg", "country:jo", "city:COPENHAGEN", "airport:EMA", "airport:BOD", "city:BUDAPEST", "airport:VNO", "airport:TRS", "country:ro", "city:CAGLIARI", "country:be", "city:GOTHENBURG", "city:POZNAN"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 41.7994,
      "lng": 12.5949
    },
    "priority": 5,
    "seasonalRoutes": [],
    "aliases": ["Ciampino", "Rome Ciampino"],
    "weight": 3
  }, {
    "id": "airport:FCO",
    "name": "Rome Fiumicino",
    "categories": ["ROM", "FAM", "SPR", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "FCO",
    "seoName": "rome-fiumicino",
    "cityCode": "ROME",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:MRS", "airport:SVQ", "city:BRUSSELS", "city:BARI", "region:CANARY_ISLES", "country:gr", "city:BRINDISI", "airport:CIY", "city:CATANIA", "airport:AGP", "airport:ACE", "city:PALERMO", "airport:IBZ", "city:VIENNA", "city:BARCELONA", "region:COSTA_DE_SOL", "city:COMISO", "airport:TLV", "airport:RHO", "airport:SNN", "region:COSTA_BRAVA", "airport:BDS", "airport:CFU", "city:SHANNON", "airport:CHQ", "city:CORFU", "city:IBIZA", "country:es", "airport:BRU", "country:at", "airport:MLA", "city:CHANIA", "city:TEL_AVIV", "city:LANZAROTE", "country:mt", "city:MARSEILLE", "airport:BRI", "city:ALICANTE", "country:it", "city:MALAGA", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:ALC", "country:ie", "city:RHODES", "airport:VIE", "airport:PMO", "country:il", "airport:CTA", "region:SICILY", "airport:BCN", "country:fr", "city:MALTA", "region:CRETE", "region:PUGLIA", "city:SEVILLE", "country:be"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 41.8045,
      "lng": 12.2508
    },
    "priority": 15,
    "seasonalRoutes": [],
    "aliases": ["Fiumicino", "Rome Fiumicino"],
    "weight": 4
  }, {
    "id": "airport:RZE",
    "name": "Rzeszow",
    "categories": ["FAM", "SPR", "FST", "CUL", "OUT"],
    "iataCode": "RZE",
    "seoName": "rzeszow",
    "cityCode": "RZESZOW",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:STN", "city:GLASGOW", "city:CORFU", "airport:LTN", "airport:BRS", "country:gr", "airport:MAN", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "region:ENGLAND", "airport:ATH", "country:ie", "airport:PIK", "city:MANCHESTER", "city:LONDON", "country:gb", "city:BIRMINGHAM", "city:DUBLIN", "airport:BOJ", "city:BRISTOL", "city:ATHENS", "country:bg", "airport:EMA", "city:BURGAS", "airport:DUB", "airport:CFU", "region:SCOTLAND"],
    "countryCode": "pl",
    "base": false,
    "coords": {
      "lat": 50.11,
      "lng": 22.019
    },
    "priority": 72,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SZG",
    "name": "Salzburg",
    "categories": ["SKI", "ROM", "FAM", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "SZG",
    "seoName": "salzburg",
    "cityCode": "SALZBURG",
    "country": "Austria",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:PALMA", "airport:PMI", "country:gb", "region:ENGLAND", "country:es", "country:ie", "airport:DUB", "city:LONDON", "city:DUBLIN"],
    "countryCode": "at",
    "base": false,
    "coords": {
      "lat": 47.7933,
      "lng": 13.0043
    },
    "priority": 137,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SDR",
    "name": "Santander",
    "categories": ["FAM", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "SDR",
    "seoName": "santander",
    "cityCode": "SANTANDER",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "city:CHARLEROI", "airport:ORK", "airport:CRL", "region:CANARY_ISLES", "city:TENERIFE", "region:ENGLAND", "airport:BGY", "country:ma", "airport:PMI", "city:CORK", "airport:AGP", "city:MILAN", "city:EDINBURGH", "airport:ACE", "country:hu", "city:BERLIN", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "city:ROME", "airport:SNN", "region:COSTA_BRAVA", "city:VALENCIA", "airport:BUD", "airport:DUB", "region:SCOTLAND", "country:de", "airport:STN", "city:SHANNON", "airport:EDI", "airport:NRN", "country:es", "airport:SXF", "city:LANZAROTE", "city:PALMA", "airport:RAK", "country:it", "city:MALAGA", "country:ie", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:TFS", "city:DUBLIN", "airport:CIA", "city:BUDAPEST", "country:be"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 43.4271,
      "lng": -3.82001
    },
    "priority": 76,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SCQ",
    "name": "Santiago",
    "categories": ["FAM", "SPR", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "SCQ",
    "seoName": "santiago-de-compostela",
    "cityCode": "SANTIAGO",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:VLC", "airport:SVQ", "airport:HHN", "country:es", "city:BARI", "region:SARDINIA", "city:LANZAROTE", "airport:LPA", "city:PALMA", "city:FRANKFURT", "city:TENERIFE", "region:CANARY_ISLES", "country:it", "city:MALAGA", "city:BRINDISI", "city:ALICANTE", "connectingFlight:BRI:BGY", "region:ENGLAND", "airport:ALC", "airport:BGY", "city:LONDON", "airport:MAD", "airport:BCN", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "airport:AGP", "country:gb", "connectingFlight:BDS:BGY", "airport:ACE", "airport:TFS", "connectingFlight:CAG:BGY", "city:BARCELONA", "region:COSTA_DE_SOL", "city:MADRID", "city:SEVILLE", "region:PUGLIA", "region:COSTA_BRAVA", "city:CAGLIARI", "city:VALENCIA", "country:de"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 42.8963,
      "lng": -8.41514
    },
    "priority": 61,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:JTR",
    "name": "Santorini",
    "categories": ["ROM", "FAM", "SPR", "NIT", "CUL", "SEA", "OUT"],
    "iataCode": "JTR",
    "seoName": "santorini",
    "cityCode": "SANTORINI",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["city:FRANKFURT", "city:ATHENS", "country:gr", "airport:FRA", "airport:ATH", "airport:VIE", "country:at", "city:VIENNA", "country:de"],
    "countryCode": "gr",
    "base": false,
    "coords": {
      "lat": 36.3992,
      "lng": 25.4793
    },
    "priority": 184,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SVQ",
    "name": "Seville",
    "categories": ["GLF", "ROM", "FAM", "SPR", "FST", "CTY", "CUL"],
    "iataCode": "SVQ",
    "seoName": "seville",
    "cityCode": "SEVILLE",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:TANGIER", "airport:KRK", "city:VERONA", "airport:CRL", "city:FRANKFURT", "city:TENERIFE", "region:ENGLAND", "airport:BGY", "city:FUERTEVENTURA", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "city:EDINBURGH", "city:VITORIA-GASTEIZ", "country:hu", "city:BERLIN", "city:VIENNA", "city:NAPLES", "country:pt", "airport:TLS", "city:BOLOGNA", "country:pl", "city:VALENCIA", "airport:DUB", "city:PISA", "airport:STN", "airport:TNG", "country:es", "airport:MXP", "airport:BRS", "airport:SCQ", "airport:VIT", "city:PARIS", "airport:NAP", "country:mt", "city:PALMA", "city:MARSEILLE", "airport:RAK", "airport:BRI", "airport:FRA", "airport:VIE", "region:TUSCANY", "airport:LUX", "city:MANCHESTER", "city:LONDON", "airport:CTA", "airport:BCN", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:TFS", "airport:FKB", "city:SANTIAGO", "city:MALTA", "country:nl", "city:RABAT", "airport:RBA", "airport:VRN", "airport:VLC", "airport:MRS", "airport:BLQ", "city:TOULOUSE", "city:BARI", "region:SARDINIA", "airport:NTE", "airport:LPA", "region:CANARY_ISLES", "airport:MAN", "airport:WMI", "airport:FCO", "airport:BVA", "city:KRAKOW", "country:ma", "city:CATANIA", "airport:CGN", "city:VENICE", "airport:FMM", "city:WARSAW", "airport:ACE", "airport:IBZ", "city:BARCELONA", "city:MARRAKESH", "country:dk", "city:ROME", "city:MEMMINGEN", "country:lu", "airport:FUE", "airport:VLL", "region:COSTA_BRAVA", "airport:BUD", "region:SCOTLAND", "country:de", "airport:OPO", "airport:EDI", "city:IBIZA", "city:PORTO", "airport:SXF", "country:at", "airport:MLA", "city:LANZAROTE", "airport:FEZ", "airport:CPH", "city:FEZ", "city:ALICANTE", "country:it", "airport:ALC", "country:ie", "airport:HAM", "region:SICILY", "airport:CAG", "airport:TSF", "city:KARLSRUHE", "city:BIRMINGHAM", "city:NANTES", "city:DUBLIN", "city:BRISTOL", "city:VALLADOLID", "airport:PSA", "airport:CIA", "city:COPENHAGEN", "region:PUGLIA", "airport:EMA", "city:LUXEMBOURG", "airport:BOD", "city:BUDAPEST", "city:CAGLIARI", "country:be"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 37.418,
      "lng": -5.89311
    },
    "priority": 38,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SNN",
    "name": "Shannon",
    "categories": ["GLF", "FAM", "SPR"],
    "iataCode": "SNN",
    "seoName": "shannon",
    "cityCode": "SHANNON",
    "country": "Ireland",
    "currencyCode": "EUR",
    "routes": ["airport:LPL", "airport:KRK", "city:SANTANDER", "region:CANARY_ISLES", "city:TENERIFE", "airport:LGW", "airport:MAN", "city:FARO", "region:ENGLAND", "airport:WMI", "airport:FCO", "city:FUERTEVENTURA", "city:KRAKOW", "airport:PMI", "airport:AGP", "city:WARSAW", "airport:ACE", "airport:IBZ", "region:COSTA_DE_SOL", "city:BARCELONA", "city:LIVERPOOL", "city:KAUNAS", "country:pt", "city:ROME", "country:lt", "airport:FUE", "country:pl", "region:COSTA_BRAVA", "airport:WRO", "airport:STN", "city:IBIZA", "country:es", "airport:BRS", "airport:REU", "city:LANZAROTE", "city:PALMA", "city:MALAGA", "country:it", "city:ALICANTE", "airport:ALC", "airport:FAO", "city:MANCHESTER", "city:LONDON", "country:gb", "city:BIRMINGHAM", "airport:KUN", "airport:SDR", "city:WROCLAW", "airport:TFS", "city:BRISTOL", "airport:EMA"],
    "countryCode": "ie",
    "base": true,
    "coords": {
      "lat": 52.702,
      "lng": -8.92482
    },
    "priority": 68,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SOF",
    "name": "Sofia",
    "categories": [],
    "iataCode": "SOF",
    "seoName": "sofia",
    "cityCode": "SOFIA",
    "country": "Bulgaria",
    "currencyCode": "EUR",
    "routes": ["country:cy", "city:HAMBURG", "city:CHARLEROI", "airport:LPL", "airport:CRL", "country:gr", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "airport:MAD", "city:EINDHOVEN", "airport:CGN", "city:MILAN", "city:EDINBURGH", "city:VENICE", "airport:FMM", "country:ua", "airport:NYO", "city:BERLIN", "city:BARCELONA", "city:LIVERPOOL", "city:ROME", "airport:KBP", "city:MEMMINGEN", "region:COSTA_BRAVA", "airport:DUB", "airport:BHX", "region:SCOTLAND", "country:de", "city:GLASGOW", "city:PISA", "airport:STN", "airport:CHQ", "city:AQABA", "airport:EDI", "country:es", "airport:MXP", "city:CASTELLON", "airport:BRS", "city:KIEV", "airport:SXF", "city:CHANIA", "airport:GLA", "country:it", "airport:ATH", "country:ie", "airport:HAM", "city:PAPHOS", "region:TUSCANY", "city:LONDON", "airport:BCN", "country:gb", "airport:EIN", "airport:TSF", "city:COLOGNE", "city:KARLSRUHE", "city:BIRMINGHAM", "country:se", "city:DUBLIN", "city:MADRID", "airport:FKB", "city:BRISTOL", "airport:PSA", "airport:CIA", "city:ATHENS", "region:CRETE", "country:jo", "airport:PFO", "airport:AQJ", "country:nl", "airport:CDT", "country:be"],
    "countryCode": "bg",
    "base": true,
    "coords": {
      "lat": 42.67,
      "lng": 23.35
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SPU",
    "name": "Split",
    "categories": [],
    "iataCode": "SPU",
    "seoName": "split",
    "cityCode": "SPLIT",
    "country": "Croatia",
    "currencyCode": "EUR",
    "routes": ["city:STUTTGART", "airport:STR", "country:de"],
    "countryCode": "hr",
    "base": false,
    "coords": {
      "lat": 43.5389,
      "lng": 16.2981
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:LED",
    "name": "St. Petersburg",
    "categories": [],
    "iataCode": "LED",
    "seoName": "saint-petersburg",
    "cityCode": "SAINT_PETERSBURG",
    "country": "Russia",
    "currencyCode": "EUR",
    "routes": ["city:MALTA", "country:mt", "airport:MLA|Air Malta"],
    "countryCode": "ru",
    "base": false,
    "coords": {
      "lat": 59.8003,
      "lng": 30.2625
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:NYO",
    "name": "Stockholm Skavsta",
    "categories": ["HEN", "FAM", "SPR", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "NYO",
    "seoName": "stockholm-skavsta",
    "cityCode": "STOCKHOLM",
    "country": "Sweden",
    "currencyCode": "SEK",
    "routes": ["city:CHARLEROI", "airport:INI", "airport:KRK", "airport:CRL", "city:BEZIERS", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "airport:BGY", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "airport:AGP", "city:EDINBURGH", "city:SOFIA", "city:NAPLES", "country:pt", "airport:KBP", "country:hr", "airport:RHO", "country:pl", "city:PISA", "airport:STN", "city:ZADAR", "airport:NRN", "country:es", "city:RIJEKA", "city:THESSALONIKI", "city:PARIS", "airport:NAP", "city:NIS", "airport:ZAD", "city:PALMA", "country:mt", "airport:RAK", "airport:BZR", "airport:BRE", "city:PAPHOS", "city:RHODES", "airport:FAO", "region:TUSCANY", "airport:SKG", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "airport:EIN", "country:gb", "country:fr", "airport:TFS", "city:MALTA", "airport:PFO", "city:PRAGUE", "country:nl", "airport:RJK", "airport:GDN", "country:cy", "country:cz", "airport:LPA", "airport:POZ", "region:CANARY_ISLES", "airport:WMI", "airport:TGD", "airport:BVA", "city:KRAKOW", "country:ma", "airport:SOF", "country:me", "city:VENICE", "airport:FMM", "city:WARSAW", "country:ua", "region:COSTA_DE_SOL", "city:BARCELONA", "city:MARRAKESH", "city:ROME", "city:MEMMINGEN", "region:COSTA_BRAVA", "city:GDANSK", "region:SCOTLAND", "city:PODGORICA", "country:de", "airport:BNX", "airport:EDI", "airport:PRG", "city:KIEV", "airport:MLA", "country:it", "city:ALICANTE", "city:MALAGA", "airport:ALC", "airport:TSF", "airport:PSA", "airport:CIA", "country:bg", "country:ba", "country:be", "city:BANJA_LUKA", "city:POZNAN", "city:BREMEN", "country:rs"],
    "countryCode": "se",
    "base": true,
    "coords": {
      "lat": 58.7886,
      "lng": 16.9122
    },
    "priority": 63,
    "seasonalRoutes": [],
    "aliases": ["Skavsta", "Stockholm Skavsta"],
    "weight": 1
  }, {
    "id": "airport:VST",
    "name": "Stockholm Västerås",
    "categories": ["HEN", "FAM", "FST", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "VST",
    "seoName": "stockholm-vasteras",
    "cityCode": "STOCKHOLM",
    "country": "Sweden",
    "currencyCode": "SEK",
    "routes": ["airport:STN", "country:gb", "airport:AGP", "city:MALAGA", "city:ALICANTE", "region:ENGLAND", "airport:ALC", "country:es", "region:COSTA_BRAVA", "region:COSTA_DE_SOL", "city:LONDON"],
    "countryCode": "se",
    "base": false,
    "coords": {
      "lat": 59.5894,
      "lng": 16.6336
    },
    "priority": 152,
    "seasonalRoutes": [],
    "aliases": ["Vasteras", "Stockholm Vasteras"],
    "weight": 2
  }, {
    "id": "airport:SXB",
    "name": "Strasbourg",
    "categories": ["SKI", "FAM", "FST", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "SXB",
    "seoName": "strasbourg",
    "cityCode": "STRASBOURG",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:OPO", "city:PALMA", "country:pt", "airport:PMI", "country:gb", "city:PORTO", "region:ENGLAND", "country:es", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 48.5383,
      "lng": 7.62823
    },
    "priority": 155,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:STR",
    "name": "Stuttgart",
    "categories": ["FAM", "FST", "CTY", "CUL"],
    "iataCode": "STR",
    "seoName": "stuttgart",
    "cityCode": "STUTTGART",
    "country": "Germany",
    "currencyCode": "EUR",
    "routes": ["airport:MRS", "airport:BLQ", "airport:KRK", "region:SARDINIA", "city:VERONA", "airport:MAN", "airport:BGY", "airport:TGD", "city:PULA", "airport:NCE", "city:KRAKOW", "country:ma", "airport:PMI", "airport:GOT", "airport:AGP", "city:MILAN", "country:me", "city:VENICE", "city:SPLIT", "country:hu", "region:COSTA_DE_SOL", "city:MARRAKESH", "country:dk", "city:NAPLES", "country:hr", "city:ALGHERO", "city:BOLOGNA", "country:pl", "airport:DUB", "airport:BUD", "city:PODGORICA", "city:ZADAR", "airport:AHO", "country:es", "airport:NAP", "airport:ZAD", "city:PALMA", "city:MARSEILLE", "airport:CPH", "airport:RAK", "country:it", "city:MALAGA", "country:ie", "airport:PUY", "city:MANCHESTER", "country:gb", "airport:TSF", "country:fr", "country:se", "city:DUBLIN", "city:COPENHAGEN", "city:BUDAPEST", "airport:SPU", "city:NICE", "airport:VRN", "city:GOTHENBURG"],
    "countryCode": "de",
    "base": false,
    "coords": {
      "lat": 48.69,
      "lng": 9.2219
    },
    "priority": 188,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:SZZ",
    "name": "Szczecin",
    "categories": ["FAM", "SPR", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "SZZ",
    "seoName": "szczecin",
    "cityCode": "SZCZECIN",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:WAW", "city:KRAKOW", "airport:STN", "country:gb", "airport:EDI", "city:EDINBURGH", "airport:LPL", "city:WARSAW", "airport:KRK", "city:DUBLIN", "city:LIVERPOOL", "region:ENGLAND", "country:ie", "country:pl", "airport:DUB", "region:SCOTLAND", "city:LONDON"],
    "countryCode": "pl",
    "base": false,
    "coords": {
      "lat": 53.5847,
      "lng": 14.9022
    },
    "priority": 112,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TLL",
    "name": "Tallinn",
    "categories": ["FAM", "CTY", "CUL", "XMS"],
    "iataCode": "TLL",
    "seoName": "tallinn",
    "cityCode": "TALLINN",
    "country": "Estonia",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:STN", "airport:EDI", "airport:NRN", "country:es", "airport:GRO", "airport:MLA", "country:mt", "country:it", "region:ENGLAND", "airport:BRE", "country:ie", "city:PAPHOS", "airport:BGY", "city:LONDON", "city:DUSSELDORF", "country:gb", "city:MILAN", "city:EDINBURGH", "city:DUBLIN", "city:MALTA", "airport:PFO", "region:COSTA_BRAVA", "city:GIRONA", "airport:DUB", "region:SCOTLAND", "city:BREMEN", "country:de"],
    "countryCode": "ee",
    "base": false,
    "coords": {
      "lat": 59.4133,
      "lng": 24.8328
    },
    "priority": 94,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TMP",
    "name": "Tampere",
    "categories": ["FAM", "FST", "CTY", "CUL", "XMS"],
    "iataCode": "TMP",
    "seoName": "tampere",
    "cityCode": "TAMPERE",
    "country": "Finland",
    "currencyCode": "EUR",
    "routes": ["city:BUDAPEST", "airport:BRE", "country:hu", "airport:BUD", "city:BREMEN", "country:de"],
    "countryCode": "fi",
    "base": false,
    "coords": {
      "lat": 61.4141,
      "lng": 23.6044
    },
    "priority": 130,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TNG",
    "name": "Tangier",
    "categories": ["GLF", "FAM", "SPR", "CTY", "SEA"],
    "iataCode": "TNG",
    "seoName": "tangier",
    "cityCode": "TANGIER",
    "country": "Morocco",
    "currencyCode": "MAD",
    "routes": ["airport:VLC", "airport:HHN", "airport:SVQ", "airport:MRS", "city:CHARLEROI", "airport:NRN", "country:es", "city:PARIS", "airport:CRL", "city:FRANKFURT", "city:MARSEILLE", "country:it", "airport:BGY", "airport:MAD", "city:EINDHOVEN", "airport:BVA", "city:DUSSELDORF", "city:MILAN", "airport:EIN", "country:fr", "city:BORDEAUX", "city:MADRID", "city:SEVILLE", "airport:BOD", "country:nl", "city:VALENCIA", "country:be", "country:de"],
    "countryCode": "ma",
    "base": false,
    "coords": {
      "lat": 35.7269,
      "lng": -5.91689
    },
    "priority": 88,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TLV",
    "name": "Tel Aviv",
    "categories": [],
    "iataCode": "TLV",
    "seoName": "tel-aviv",
    "cityCode": "TEL_AVIV",
    "country": "Israel",
    "currencyCode": "EUR",
    "routes": ["country:cy", "city:THESSALONIKI", "airport:KRK", "country:mt", "airport:POZ", "country:it", "country:gr", "city:PAPHOS", "airport:BGY", "airport:FCO", "airport:SKG", "city:KRAKOW", "airport:MLA|Air Malta", "city:MILAN", "airport:FMM", "city:KARLSRUHE", "airport:KUN", "city:WROCLAW", "airport:BOJ", "airport:FKB", "city:KAUNAS", "city:MALTA", "city:ROME", "country:bg", "airport:PFO", "country:lt", "city:MEMMINGEN", "city:BURGAS", "country:pl", "airport:WRO", "airport:GDN", "city:POZNAN", "city:GDANSK", "country:de"],
    "countryCode": "il",
    "base": false,
    "coords": {
      "lat": 32.0034,
      "lng": 34.5258
    },
    "priority": 189,
    "seasonalRoutes": [],
    "aliases": ["Aviv"]
  }, {
    "id": "airport:TFN",
    "name": "Tenerife North",
    "categories": ["GLF", "FAM", "SPR", "CUL", "SEA"],
    "iataCode": "TFN",
    "seoName": "tenerife-north",
    "cityCode": "TENERIFE",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:BCN", "country:es", "region:COSTA_BRAVA", "city:BARCELONA", "airport:MAD", "city:MADRID"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 28.4827,
      "lng": -16.3415
    },
    "priority": 117,
    "seasonalRoutes": [],
    "aliases": [],
    "weight": 2
  }, {
    "id": "airport:TFS",
    "name": "Tenerife South",
    "categories": ["GLF", "FAM", "FST", "CUL", "SEA", "OUT"],
    "iataCode": "TFS",
    "seoName": "tenerife-south",
    "cityCode": "TENERIFE",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:CHARLEROI", "city:BOURNEMOUTH", "airport:ORK", "airport:LTN", "airport:KRK", "city:SANTANDER", "airport:CRL", "city:FRANKFURT", "region:ENGLAND", "airport:BGY", "city:STOCKHOLM", "city:EINDHOVEN", "city:MILAN", "city:EDINBURGH", "city:VITORIA-GASTEIZ", "airport:NYO", "city:BERLIN", "airport:DUS", "city:VIENNA", "city:LAMEZIA", "city:NAPLES", "country:pt", "city:LEEDS", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:WRO", "city:VALENCIA", "airport:DUB", "airport:BHX", "city:GLASGOW", "airport:STN", "city:PISA", "city:SHANNON", "airport:NRN", "country:es", "airport:MXP", "airport:BRS", "airport:VIT", "airport:SCQ", "connectingFlight:CTA:BGY", "city:PARIS", "connectingFlight:BRI:BGY", "airport:FRA", "airport:BRE", "region:TUSCANY", "airport:VIE", "city:CARDIFF", "city:MANCHESTER", "city:LONDON", "airport:BCN", "city:DUSSELDORF", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:SDR", "city:SANTIAGO", "city:SEVILLE", "city:KNOCK", "country:nl", "country:no", "airport:VLC", "airport:SVQ", "airport:HHN", "connectingFlight:NAP:BGY", "airport:BLQ", "airport:LPL", "airport:TXL", "city:BARI", "region:SARDINIA", "region:WALES", "city:BRINDISI", "airport:MAN", "airport:NCL", "airport:WMI", "airport:MAD", "city:KRAKOW", "airport:BVA", "city:CATANIA", "city:CORK", "airport:CGN", "connectingFlight:BDS:BGY", "city:VENICE", "airport:FMM", "city:WARSAW", "city:PALERMO", "connectingFlight:CAG:BGY", "city:BARCELONA", "city:LIVERPOOL", "country:dk", "city:MEMMINGEN", "airport:CWL", "region:COSTA_BRAVA", "airport:SNN", "city:BELFAST", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "airport:OPO", "airport:LBA", "connectingFlight:PMO:BGY", "airport:EDI", "city:PORTO", "airport:TRF", "airport:SXF", "country:at", "airport:CPH", "country:it", "country:ie", "airport:PIK", "city:OSLO", "region:SICILY", "region:NORTHERN_IRELAND", "airport:TSF", "city:BIRMINGHAM", "country:se", "city:WROCLAW", "airport:NOC", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "airport:PSA", "airport:BOH", "city:COPENHAGEN", "region:PUGLIA", "airport:EMA", "city:CAGLIARI", "country:be", "airport:BFS", "city:BREMEN"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 28.0445,
      "lng": -16.5725
    },
    "priority": 28,
    "seasonalRoutes": [],
    "aliases": [],
    "weight": 1
  }, {
    "id": "airport:TER",
    "name": "Terceira Lajes",
    "categories": [],
    "iataCode": "TER",
    "seoName": "terceira-lajes",
    "cityCode": "TERCEIRA",
    "country": "Portugal",
    "currencyCode": "EUR",
    "routes": ["airport:OPO", "connectingFlight:BGY:OPO", "connectingFlight:FKB:OPO", "city:MILAN", "city:PORTO", "country:es", "city:KARLSRUHE", "connectingFlight:BCN:OPO", "city:BARCELONA", "country:pt", "country:it", "airport:LIS", "region:COSTA_BRAVA", "city:LISBON", "country:de"],
    "countryCode": "pt",
    "base": false,
    "coords": {
      "lat": 38.761944,
      "lng": -27.090833
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": ["Lajes"]
  }, {
    "id": "airport:SKG",
    "name": "Thessaloniki",
    "categories": ["HEN", "FAM", "FST", "NIT", "CTY", "CUL", "SEA", "OUT"],
    "iataCode": "SKG",
    "seoName": "thessaloniki",
    "cityCode": "THESSALONIKI",
    "country": "Greece",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "city:NUREMBERG", "airport:GRO", "airport:DTM", "airport:CRL", "city:FRANKFURT", "country:gr", "region:ENGLAND", "city:STOCKHOLM", "airport:BGY", "city:EINDHOVEN", "city:MILAN", "airport:NYO", "country:hu", "city:BERLIN", "city:LAMEZIA", "city:NAPLES", "airport:TLV", "country:pt", "connectingFlight:BCN:BGY", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:DUB", "airport:STN", "airport:NRN", "country:es", "city:PARIS", "city:CHANIA", "city:TEL_AVIV", "airport:NAP", "country:mt", "connectingFlight:BRI:BGY", "airport:BRE", "city:PAPHOS", "city:MANCHESTER", "city:LONDON", "city:DUSSELDORF", "country:gb", "airport:EIN", "country:fr", "city:BRATISLAVA", "airport:FKB", "city:MALTA", "airport:PFO", "country:nl", "country:fi", "country:cy", "airport:HHN", "airport:LPP", "airport:BLQ", "connectingFlight:MLA:BGY", "city:BARI", "airport:BTS", "airport:MAN", "airport:WMI", "airport:BVA", "airport:GOT", "airport:FMM", "city:WARSAW", "city:PALERMO", "city:BARCELONA", "airport:NUE", "country:dk", "city:ROME", "city:LAPPEENRANTA", "city:MEMMINGEN", "region:COSTA_BRAVA", "airport:BUD", "country:de", "airport:CHQ", "connectingFlight:PMO:BGY", "city:PORTO", "airport:SXF", "airport:MLA", "airport:CPH", "country:it", "city:ALICANTE", "airport:ATH", "country:ie", "airport:HAM", "country:il", "connectingFlight:ALC:BGY", "region:SICILY", "connectingFlight:OPO:BGY", "country:sk", "city:KARLSRUHE", "country:se", "city:DUBLIN", "city:ATHENS", "airport:CIA", "region:CRETE", "city:COPENHAGEN", "city:DORTMUND", "region:PUGLIA", "city:BUDAPEST", "city:GIRONA", "city:GOTHENBURG", "country:be", "city:BREMEN"],
    "countryCode": "gr",
    "base": true,
    "coords": {
      "lat": 40.5197,
      "lng": 22.9709
    },
    "priority": 29,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TSR",
    "name": "Timisoara",
    "categories": [],
    "iataCode": "TSR",
    "seoName": "timisoara",
    "cityCode": "TIMISOARA",
    "country": "Romania",
    "currencyCode": "EUR",
    "routes": ["city:BUCHAREST", "airport:OTP", "city:MILAN", "country:it", "country:ro", "airport:BGY"],
    "countryCode": "ro",
    "base": true,
    "coords": {
      "lat": 45.81,
      "lng": 21.3381
    },
    "priority": 300,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TLS",
    "name": "Toulouse",
    "categories": [],
    "iataCode": "TLS",
    "seoName": "toulouse",
    "cityCode": "TOULOUSE",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:SVQ", "city:CHARLEROI", "airport:EDI", "country:es", "airport:SXF", "airport:MLA", "airport:CRL", "airport:NAP", "country:mt", "airport:FEZ", "city:FEZ", "country:it", "region:ENGLAND", "airport:LIS", "airport:WMI", "city:LISBON", "city:LONDON", "airport:MAD", "country:ma", "country:gb", "city:EDINBURGH", "city:WARSAW", "city:BERLIN", "city:MADRID", "city:MALTA", "city:NAPLES", "country:pt", "city:SEVILLE", "country:pl", "country:be", "region:SCOTLAND", "country:de"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 43.6044,
      "lng": 1.4439
    },
    "priority": 300,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TUF",
    "name": "Tours Loire Valley",
    "categories": ["FAM", "FST", "CTY"],
    "iataCode": "TUF",
    "seoName": "tours",
    "cityCode": "TOURS",
    "country": "France",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:OPO", "airport:MRS", "country:ma", "country:gb", "city:PORTO", "country:fr", "city:DUBLIN", "city:MARRAKESH", "country:pt", "city:MARSEILLE", "airport:RAK", "region:ENGLAND", "country:ie", "airport:DUB", "city:LONDON"],
    "countryCode": "fr",
    "base": false,
    "coords": {
      "lat": 47.4322,
      "lng": 0.727606
    },
    "priority": 123,
    "seasonalRoutes": [],
    "aliases": ["Loire", "Valley", "Loire Valley"]
  }, {
    "id": "airport:TPS",
    "name": "Trapani",
    "categories": ["FAM", "CTY", "CUL", "SEA"],
    "iataCode": "TPS",
    "seoName": "trapani",
    "cityCode": "TRAPANI",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:PISA", "airport:HHN", "country:cz", "airport:BLQ", "country:es", "airport:PRG", "connectingFlight:MAD:BGY", "region:SARDINIA", "connectingFlight:VNO:BGY", "city:FRANKFURT", "country:gr", "country:it", "airport:BGY", "region:TUSCANY", "connectingFlight:BRE:BGY", "city:VILNIUS", "airport:CAG", "city:MILAN", "city:KARLSRUHE", "city:MADRID", "airport:FKB", "airport:PSA", "city:ATHENS", "connectingFlight:ATH:BGY", "country:lt", "city:PRAGUE", "city:BOLOGNA", "city:CAGLIARI", "city:BREMEN", "country:de"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 37.9114,
      "lng": 12.488
    },
    "priority": 25,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TRS",
    "name": "Trieste",
    "categories": ["FAM", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "TRS",
    "seoName": "trieste",
    "cityCode": "TRIESTE",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["region:SICILY", "airport:VLC", "airport:STN", "city:CATANIA", "country:gb", "country:es", "city:BARI", "airport:CIA", "city:ROME", "airport:BRI", "region:PUGLIA", "country:it", "region:ENGLAND", "city:VALENCIA", "airport:CTA", "city:LONDON"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 45.8275,
      "lng": 13.4722
    },
    "priority": 105,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TUN",
    "name": "Tunis",
    "categories": [],
    "iataCode": "TUN",
    "seoName": "tunis",
    "cityCode": "TUNIS",
    "country": "Tunisia",
    "currencyCode": "EUR",
    "routes": ["city:MALTA", "country:mt", "airport:MLA|Air Malta"],
    "countryCode": "tn",
    "base": false,
    "coords": {
      "lat": 36.8064,
      "lng": 10.1817
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:TRN",
    "name": "Turin",
    "categories": ["SKI", "FAM", "SPR", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "TRN",
    "seoName": "turin",
    "cityCode": "TURIN",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:VLC", "city:CHARLEROI", "city:IBIZA", "country:es", "city:BARI", "airport:MLA", "airport:CRL", "country:mt", "airport:FEZ", "airport:BRI", "country:it", "city:FEZ", "city:BRINDISI", "region:ENGLAND", "country:ie", "airport:CIY", "airport:PMO", "city:LONDON", "airport:CTA", "region:SICILY", "airport:BCN", "country:ma", "city:CATANIA", "country:gb", "city:PALERMO", "airport:IBZ", "city:BARCELONA", "city:DUBLIN", "city:COMISO", "city:MALTA", "region:PUGLIA", "region:COSTA_BRAVA", "airport:DUB", "airport:BDS", "city:VALENCIA", "country:be"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 45.2008,
      "lng": 7.64963
    },
    "priority": 64,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:VLC",
    "name": "Valencia",
    "categories": ["FAM", "SPR", "CTY", "CUL", "SEA"],
    "iataCode": "VLC",
    "seoName": "valencia",
    "cityCode": "VALENCIA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "connectingFlight:BTS:BGY", "city:TANGIER", "airport:KRK", "city:SANTANDER", "airport:CRL", "city:FRANKFURT", "city:TENERIFE", "city:TURIN", "country:gr", "city:FARO", "region:ENGLAND", "connectingFlight:FAO:OPO", "airport:BGY", "airport:CRA", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:PMI", "city:MILAN", "city:EDINBURGH", "country:hu", "city:BERLIN", "city:VIENNA", "city:LAMEZIA", "city:NAPLES", "country:pt", "country:hr", "connectingFlight:SUF:BGY", "city:BOLOGNA", "country:pl", "airport:DUB", "airport:TNG", "airport:STN", "city:PISA", "city:GLASGOW", "city:ZADAR", "airport:NRN", "country:es", "airport:BRU", "airport:MXP", "airport:BRS", "connectingFlight:VNO:BGY", "airport:SCQ", "connectingFlight:CTA:BGY", "city:PARIS", "airport:ZAD", "airport:NAP", "country:mt", "city:PALMA", "city:MARSEILLE", "airport:RAK", "airport:GLA", "airport:BRI", "airport:FRA", "city:TRIESTE", "connectingFlight:PRG:BGY", "city:LISBON", "connectingFlight:LIS:OPO", "region:TUSCANY", "airport:VIE", "airport:PMO", "city:MANCHESTER", "city:LONDON", "city:DUSSELDORF", "city:VILNIUS", "airport:EIN", "country:gb", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:SDR", "airport:TFS", "city:BRATISLAVA", "city:SANTIAGO", "city:MALTA", "city:SEVILLE", "city:PRAGUE", "country:nl", "country:cz", "airport:MRS", "airport:SVQ", "airport:BLQ", "city:BRUSSELS", "city:BARI", "region:SARDINIA", "airport:NTE", "airport:LPA", "region:CANARY_ISLES", "airport:MAN", "airport:WMI", "airport:MAH", "city:KRAKOW", "airport:BVA", "country:ma", "city:CATANIA", "airport:CGN", "city:VENICE", "airport:ACE", "city:WARSAW", "city:PALERMO", "airport:IBZ", "city:MARRAKESH", "country:dk", "city:ROME", "country:lt", "connectingFlight:ATH:BGY", "city:MENORCA", "airport:BUD", "region:SCOTLAND", "country:de", "airport:OPO", "airport:EDI", "city:IBIZA", "city:PORTO", "airport:SXF", "airport:MLA", "country:at", "city:LANZAROTE", "airport:FEZ", "airport:CPH", "country:it", "city:FEZ", "country:ie", "airport:HAM", "connectingFlight:BRE:BGY", "region:SICILY", "airport:CAG", "country:sk", "airport:TSF", "city:BIRMINGHAM", "city:NANTES", "city:DUBLIN", "city:BRISTOL", "airport:PSA", "airport:CIA", "city:ATHENS", "city:COPENHAGEN", "region:PUGLIA", "airport:EMA", "airport:BOD", "city:BUDAPEST", "airport:TRS", "country:ro", "city:CAGLIARI", "country:be", "city:CRAIOVA", "city:BREMEN", "airport:TRN"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 39.4893,
      "lng": -0.481625
    },
    "priority": 30,
    "seasonalRoutes": [],
    "aliases": [],
    "weight": 1
  }, {
    "id": "airport:VLL",
    "name": "Valladolid",
    "categories": ["FAM", "SPR", "CTY", "OUT"],
    "iataCode": "VLL",
    "seoName": "valladolid",
    "cityCode": "VALLADOLID",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:BCN", "airport:SVQ", "city:PALMA", "airport:PMI", "city:SEVILLE", "country:es", "region:COSTA_BRAVA", "city:BARCELONA"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 41.7061,
      "lng": -4.85194
    },
    "priority": 138,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:VAR",
    "name": "Varna",
    "categories": [],
    "iataCode": "VAR",
    "seoName": "varna",
    "cityCode": "VARNA",
    "country": "Bulgaria",
    "currencyCode": "EUR",
    "routes": ["airport:CRL", "city:CHARLEROI", "country:be"],
    "countryCode": "bg",
    "base": false,
    "coords": {
      "lat": 43.1355,
      "lng": 27.4931
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:VCE",
    "name": "Venice M.Polo",
    "categories": [],
    "iataCode": "VCE",
    "seoName": "venice",
    "cityCode": "VENICE",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:BCN", "city:BRISTOL", "airport:SEN", "country:gb", "city:SOUTHEND_ON_SEA", "region:ENGLAND", "country:es", "region:COSTA_BRAVA", "airport:BRS", "city:BARCELONA"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 45.5053,
      "lng": 12.3519
    },
    "priority": 238,
    "seasonalRoutes": [],
    "aliases": ["Marco Polo", "Marco", "Polo"]
  }, {
    "id": "airport:TSF",
    "name": "Venice Treviso",
    "categories": ["SKI", "ROM", "FAM", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "TSF",
    "seoName": "venice-treviso",
    "cityCode": "VENICE",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:HAMBURG", "city:CHARLEROI", "airport:KRK", "airport:CRL", "city:FRANKFURT", "city:TENERIFE", "country:gr", "region:ENGLAND", "city:STOCKHOLM", "city:EINDHOVEN", "city:GRAN_CANARIA", "airport:AGP", "city:EDINBURGH", "country:hu", "airport:NYO", "city:BERLIN", "city:LAMEZIA", "city:NAPLES", "city:SOFIA", "country:pt", "city:LEEDS", "country:pl", "city:VALENCIA", "airport:DUB", "airport:STN", "country:es", "airport:BRU", "city:PARIS", "airport:NAP", "country:mt", "airport:RAK", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:BRE", "airport:FRA", "airport:PMO", "city:MANCHESTER", "airport:CTA", "city:LONDON", "city:VILNIUS", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:SUF", "city:BORDEAUX", "airport:TFS", "city:MALTA", "city:SEVILLE", "city:PRAGUE", "country:nl", "airport:STR", "airport:VLC", "country:cz", "airport:SVQ", "city:BRUSSELS", "city:BARI", "region:SARDINIA", "airport:LPA", "region:CANARY_ISLES", "airport:MAN", "city:BRINDISI", "airport:WMI", "airport:BVA", "city:KRAKOW", "country:ma", "city:CATANIA", "airport:CGN", "airport:SOF", "city:PALERMO", "city:WARSAW", "airport:IBZ", "region:COSTA_DE_SOL", "city:MARRAKESH", "country:lt", "city:STUTTGART", "airport:BUD", "airport:BDS", "airport:CFU", "region:SCOTLAND", "country:de", "airport:OPO", "airport:LBA", "airport:EDI", "city:CORFU", "city:PORTO", "city:IBIZA", "airport:PRG", "airport:SXF", "airport:MLA", "airport:FEZ", "country:it", "city:FEZ", "city:MALAGA", "country:ie", "airport:HAM", "region:SICILY", "airport:CAG", "city:BIRMINGHAM", "country:se", "city:DUBLIN", "country:bg", "airport:EMA", "region:PUGLIA", "airport:VNO", "city:BUDAPEST", "airport:BOD", "city:CAGLIARI", "country:be", "city:BREMEN"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 45.6484,
      "lng": 12.1944
    },
    "priority": 21,
    "seasonalRoutes": [],
    "aliases": ["Treviso", "Venice Treviso"]
  }, {
    "id": "airport:VRN",
    "name": "Verona",
    "categories": ["SKI", "ROM", "FAM", "FST", "CTY", "CUL"],
    "iataCode": "VRN",
    "seoName": "verona",
    "cityCode": "VERONA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "airport:SVQ", "city:HAMBURG", "city:CHARLEROI", "country:es", "region:SARDINIA", "airport:SXF", "airport:CRL", "country:it", "city:BRINDISI", "region:ENGLAND", "airport:HAM", "airport:PMO", "airport:MAD", "city:LONDON", "region:SICILY", "airport:CAG", "country:gb", "city:PALERMO", "city:BIRMINGHAM", "city:BERLIN", "city:MADRID", "city:SEVILLE", "region:PUGLIA", "city:STUTTGART", "airport:STR", "city:CAGLIARI", "airport:BDS", "country:be", "airport:BHX", "country:de"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 45.3957,
      "lng": 10.8885
    },
    "priority": 163,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:VIE",
    "name": "Vienna",
    "categories": ["CUL"],
    "iataCode": "VIE",
    "seoName": "vienna",
    "cityCode": "VIENNA",
    "country": "Austria",
    "currencyCode": "EUR",
    "routes": ["country:cy", "airport:VLC", "airport:SVQ", "airport:BLQ", "airport:JTR", "city:SANTORINI", "airport:KRK", "airport:LPA", "region:CANARY_ISLES", "city:TENERIFE", "country:gr", "city:BRINDISI", "city:FARO", "region:ENGLAND", "airport:BGY", "airport:FCO", "city:FUERTEVENTURA", "airport:MAD", "airport:BVA", "city:KRAKOW", "city:GRAN_CANARIA", "country:ma", "city:CATANIA", "airport:PMI", "airport:MLA|Air Malta", "city:MILAN", "airport:AGP", "airport:ACE", "airport:IBZ", "city:BARCELONA", "region:COSTA_DE_SOL", "city:LARNACA", "city:MARRAKESH", "city:BUCHAREST", "country:dk", "country:pt", "city:ROME", "airport:FUE", "city:BOLOGNA", "region:COSTA_BRAVA", "country:pl", "airport:DUB", "city:AMMAN", "airport:BDS", "city:VALENCIA", "city:PISA", "airport:STN", "airport:OTP", "airport:CHQ", "city:IBIZA", "country:es", "city:PARIS", "city:CHANIA", "city:KALAMATA", "city:LANZAROTE", "country:mt", "city:PALMA", "airport:CPH", "airport:RAK", "country:it", "city:MALAGA", "country:ie", "airport:FAO", "city:PAPHOS", "region:TUSCANY", "city:LONDON", "region:SICILY", "airport:BCN", "airport:LCA", "airport:CTA|Air Malta", "country:gb", "country:fr", "airport:AMM", "airport:TFS", "city:DUBLIN", "city:MADRID", "airport:PSA", "city:MALTA", "region:CRETE", "city:COPENHAGEN", "country:jo", "region:PUGLIA", "city:SEVILLE", "airport:PFO", "airport:KLX", "country:ro"],
    "countryCode": "at",
    "base": false,
    "coords": {
      "lat": 48.0639,
      "lng": 16.3415
    },
    "priority": 150,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:VGO",
    "name": "Vigo",
    "categories": [],
    "iataCode": "VGO",
    "seoName": "vigo",
    "cityCode": "VIGO",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:BCN", "city:MILAN", "airport:EDI", "country:gb", "airport:BLQ", "city:EDINBURGH", "country:es", "city:BARCELONA", "city:DUBLIN", "country:it", "city:BOLOGNA", "region:COSTA_BRAVA", "country:ie", "airport:BGY", "airport:DUB", "region:SCOTLAND"],
    "countryCode": "es",
    "base": true,
    "coords": {
      "lat": 42.23,
      "lng": -8.63
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:VNO",
    "name": "Vilnius",
    "categories": ["FAM", "CTY", "CUL", "XMS"],
    "iataCode": "VNO",
    "seoName": "vilnius",
    "cityCode": "VILNIUS",
    "country": "Lithuania",
    "currencyCode": "EUR",
    "routes": ["airport:HHN", "city:CHARLEROI", "connectingFlight:NAP:BGY", "airport:LPL", "city:NUREMBERG", "airport:LTN", "city:BARI", "region:SARDINIA", "airport:CRL", "city:FRANKFURT", "connectingFlight:VLC:BGY", "country:gr", "city:BRINDISI", "region:ENGLAND", "airport:BGY", "airport:MAD", "airport:BVA", "city:CATANIA", "airport:CGN", "city:MILAN", "connectingFlight:BDS:BGY", "airport:OSL", "city:VENICE", "country:ua", "city:PALERMO", "connectingFlight:CAG:BGY", "city:BERLIN", "city:BARCELONA", "city:LIVERPOOL", "airport:NUE", "city:NAPLES", "city:ROME", "airport:KBP", "city:TRAPANI", "city:LEEDS", "region:COSTA_BRAVA", "city:VALENCIA", "airport:DUB", "city:AMMAN", "airport:CFU", "airport:BHX", "country:de", "airport:STN", "airport:LBA", "connectingFlight:PMO:BGY", "city:CORFU", "country:es", "city:KIEV", "airport:SXF", "airport:MLA", "connectingFlight:CTA:BGY", "city:PARIS", "country:mt", "country:it", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "connectingFlight:BRI:BGY", "airport:BRE", "airport:ATH", "country:ie", "city:LONDON", "city:OSLO", "region:SICILY", "airport:BCN", "country:gb", "airport:TSF", "city:COLOGNE", "city:BIRMINGHAM", "country:fr", "airport:AMM", "city:DUBLIN", "city:MADRID", "city:MALTA", "airport:CIA", "city:ATHENS", "country:jo", "region:PUGLIA", "connectingFlight:TPS:BGY", "city:CAGLIARI", "country:be", "city:BREMEN", "country:no"],
    "countryCode": "lt",
    "base": true,
    "coords": {
      "lat": 54.6341,
      "lng": 25.2858
    },
    "priority": 70,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:VIT",
    "name": "Vitoria (Basque Country)",
    "categories": [],
    "iataCode": "VIT",
    "seoName": "vitoria",
    "cityCode": "VITORIA-GASTEIZ",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:SVQ", "airport:PMI", "city:MILAN", "airport:CGN", "country:es", "city:COLOGNE", "airport:TFS", "city:PALMA", "city:TENERIFE", "region:CANARY_ISLES", "city:SEVILLE", "country:it", "airport:BGY", "country:de"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 42.8828,
      "lng": -2.7244
    },
    "priority": 1000,
    "seasonalRoutes": [],
    "aliases": ["Vasco", "Basque", "Euskadi"]
  }, {
    "id": "airport:VXO",
    "name": "Växjö Småland",
    "categories": ["SKI", "FAM", "FST", "CTY"],
    "iataCode": "VXO",
    "seoName": "vaxjo",
    "cityCode": "VAXJO",
    "country": "Sweden",
    "currencyCode": "SEK",
    "routes": ["city:ALICANTE", "airport:ALC", "country:es", "region:COSTA_BRAVA", "country:pl", "airport:GDN", "city:GDANSK"],
    "countryCode": "se",
    "base": false,
    "coords": {
      "lat": 56.9291,
      "lng": 14.728
    },
    "priority": 167,
    "seasonalRoutes": [],
    "aliases": ["Vaxjo", "Smaland Vaxjo"]
  }, {
    "id": "airport:WAW",
    "name": "Warsaw Chopin",
    "categories": [],
    "iataCode": "WAW",
    "seoName": "warsaw-chopin",
    "cityCode": "WARSAW",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["airport:SZZ", "country:pl", "city:SZCZECIN"],
    "countryCode": "pl",
    "base": true,
    "coords": {
      "lat": 52.1657,
      "lng": 20.9671
    },
    "priority": 240,
    "seasonalRoutes": [],
    "aliases": ["Chopin", "Okecie"],
    "weight": 2
  }, {
    "id": "airport:WMI",
    "name": "Warsaw Modlin",
    "categories": ["HEN", "FAM", "NIT", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "WMI",
    "seoName": "warsaw-modlin",
    "cityCode": "WARSAW",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["city:CHARLEROI", "airport:CRL", "city:LVIV", "city:TENERIFE", "country:gr", "city:FARO", "region:ENGLAND", "airport:BGY", "city:STOCKHOLM", "airport:PSR", "city:EINDHOVEN", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "airport:PMI", "airport:AGP", "city:MILAN", "city:EDINBURGH", "airport:NYO", "city:NAPLES", "country:pt", "airport:TLS", "airport:KBP", "city:LEEDS", "city:BOLOGNA", "airport:DUB", "city:VALENCIA", "airport:BHX", "city:PISA", "airport:STN", "city:GLASGOW", "city:SHANNON", "country:es", "airport:BRS", "city:THESSALONIKI", "city:PARIS", "city:CHANIA", "airport:NAP", "city:PALMA", "city:MARSEILLE", "airport:GLA", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:FAO", "city:LISBON", "region:TUSCANY", "city:MANCHESTER", "airport:SKG", "city:LONDON", "airport:BCN", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "airport:LWO", "airport:TFS", "airport:FKB", "city:SEVILLE", "city:BURGAS", "country:nl", "city:PESCARA", "country:no", "airport:VLC", "airport:SVQ", "airport:MRS", "airport:BLQ", "airport:LPL", "city:TOULOUSE", "region:SARDINIA", "airport:LPA", "region:CANARY_ISLES", "airport:MAN", "airport:NCL", "airport:MAD", "airport:BVA", "airport:RMI", "airport:GOT", "airport:CGN", "city:VENICE", "airport:FMM", "country:ua", "region:COSTA_DE_SOL", "city:BARCELONA", "city:LIVERPOOL", "city:ROME", "city:EILAT", "city:MEMMINGEN", "airport:FUE", "airport:SNN", "airport:VDA", "region:COSTA_BRAVA", "city:BELFAST", "city:AMMAN", "city:RIMINI", "airport:CFU", "region:SCOTLAND", "country:de", "city:NEWCASTLE", "airport:OPO", "airport:LBA", "airport:CHQ", "airport:EDI", "city:CORFU", "airport:TRF", "city:PORTO", "city:KIEV", "country:it", "city:MALAGA", "city:ALICANTE", "airport:ALC", "airport:ATH", "airport:LIS", "country:ie", "country:il", "city:OSLO", "airport:CAG", "region:NORTHERN_IRELAND", "airport:TSF", "city:BIRMINGHAM", "city:KARLSRUHE", "country:se", "airport:AMM", "city:DUBLIN", "city:MADRID", "city:BRISTOL", "airport:BOJ", "airport:PSA", "airport:CIA", "city:ATHENS", "region:CRETE", "country:jo", "country:bg", "airport:EMA", "city:CAGLIARI", "city:GOTHENBURG", "country:be", "airport:BFS"],
    "countryCode": "pl",
    "base": true,
    "coords": {
      "lat": 52.4511,
      "lng": 20.6517
    },
    "priority": 16,
    "seasonalRoutes": [],
    "aliases": ["Modlin", "Warsaw Modlin"],
    "weight": 1
  }, {
    "id": "airport:WRO",
    "name": "Wroclaw",
    "categories": ["FAM", "CTY", "CUL", "OUT", "XMS"],
    "iataCode": "WRO",
    "seoName": "wroclaw",
    "cityCode": "WROCLAW",
    "country": "Poland",
    "currencyCode": "PLN",
    "routes": ["city:CHARLEROI", "airport:BLQ", "airport:LPL", "airport:ORK", "airport:GRO", "airport:CRL", "city:TENERIFE", "region:CANARY_ISLES", "country:gr", "airport:MAN", "city:FARO", "airport:NCL", "region:ENGLAND", "airport:BGY", "airport:TGD", "airport:MAD", "airport:BVA", "airport:PMI", "city:CORK", "city:MILAN", "airport:AGP", "country:me", "city:EDINBURGH", "country:ua", "city:PALERMO", "region:COSTA_DE_SOL", "city:LIVERPOOL", "airport:TLV", "city:NAPLES", "country:pt", "city:ROME", "airport:KBP", "city:LEEDS", "city:BOLOGNA", "country:pl", "airport:SNN", "region:COSTA_BRAVA", "city:BELFAST", "airport:DUB", "city:GDANSK", "region:SCOTLAND", "city:PODGORICA", "city:NEWCASTLE", "airport:STN", "city:GLASGOW", "airport:LBA", "city:SHANNON", "airport:CHQ", "airport:EDI", "airport:TRF", "country:es", "city:KIEV", "airport:BRS", "airport:MLA", "city:PARIS", "city:CHANIA", "city:TEL_AVIV", "airport:NAP", "country:mt", "city:PALMA", "airport:GLA", "country:it", "city:MALAGA", "city:ALICANTE", "airport:ALC", "airport:ATH", "airport:LIS", "country:ie", "airport:FAO", "city:LISBON", "country:il", "airport:PMO", "city:MANCHESTER", "city:LONDON", "city:OSLO", "region:SICILY", "country:gb", "region:NORTHERN_IRELAND", "city:BIRMINGHAM", "country:fr", "airport:TFS", "city:MADRID", "city:DUBLIN", "city:BRISTOL", "city:MALTA", "airport:CIA", "city:ATHENS", "region:CRETE", "airport:EMA", "airport:GDN", "city:GIRONA", "country:be", "airport:BFS", "country:no"],
    "countryCode": "pl",
    "base": true,
    "coords": {
      "lat": 51.1027,
      "lng": 16.8858
    },
    "priority": 45,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:ZAD",
    "name": "Zadar",
    "categories": ["HEN", "FAM", "SPR", "FST", "NIT", "CTY", "CUL", "OUT"],
    "iataCode": "ZAD",
    "seoName": "zadar",
    "cityCode": "ZADAR",
    "country": "Croatia",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:HAMBURG", "country:cz", "airport:MRS", "city:CHARLEROI", "airport:NRN", "airport:PRG", "city:NUREMBERG", "airport:SXF", "city:PARIS", "airport:CRL", "city:FRANKFURT", "city:MARSEILLE", "airport:MAN", "region:ENGLAND", "airport:BRE", "airport:FRA", "country:ie", "airport:HAM", "city:STOCKHOLM", "city:MANCHESTER", "city:LONDON", "airport:BVA", "city:DUSSELDORF", "airport:GOT", "country:gb", "airport:CGN", "city:COLOGNE", "airport:FMM", "city:KARLSRUHE", "country:fr", "airport:NYO", "country:se", "city:BERLIN", "city:DUBLIN", "airport:FKB", "airport:NUE", "city:MEMMINGEN", "city:PRAGUE", "city:STUTTGART", "airport:STR", "airport:DUB", "city:GOTHENBURG", "country:be", "city:BREMEN", "country:de"],
    "countryCode": "hr",
    "base": true,
    "coords": {
      "lat": 44.1083,
      "lng": 15.3467
    },
    "priority": 82,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:ZAZ",
    "name": "Zaragoza",
    "categories": ["SKI", "FAM", "FST", "CTY", "OUT"],
    "iataCode": "ZAZ",
    "seoName": "zaragoza",
    "cityCode": "ZARAGOZA",
    "country": "Spain",
    "currencyCode": "EUR",
    "routes": ["airport:STN", "city:CHARLEROI", "connectingFlight:NAP:BGY", "country:es", "city:PARIS", "city:LANZAROTE", "airport:CRL", "city:PALMA", "region:CANARY_ISLES", "country:it", "country:gr", "region:ENGLAND", "airport:BGY", "city:LONDON", "airport:BVA", "airport:PMI", "country:gb", "city:MILAN", "airport:ACE", "country:fr", "city:LAMEZIA", "city:NAPLES", "city:ATHENS", "connectingFlight:ATH:BGY", "connectingFlight:SUF:BGY", "country:be"],
    "countryCode": "es",
    "base": false,
    "coords": {
      "lat": 41.6662,
      "lng": -1.04155
    },
    "priority": 108,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:ZRH",
    "name": "Zurich",
    "categories": [],
    "iataCode": "ZRH",
    "seoName": "zurich",
    "cityCode": "ZURICH",
    "country": "Switzerland",
    "currencyCode": "CHF",
    "routes": ["city:MALTA", "country:mt", "airport:MLA|Air Malta"],
    "countryCode": "ch",
    "base": false,
    "coords": {
      "lat": 47.4647,
      "lng": 8.5492
    },
    "priority": 100,
    "seasonalRoutes": [],
    "aliases": []
  }, {
    "id": "airport:MXP",
    "name": "Milan Malpensa",
    "categories": [],
    "iataCode": "MXP",
    "seoName": "milan-malpensa",
    "cityCode": "MILAN",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:VLC", "airport:SVQ", "city:BRUSSELS", "airport:LPL", "airport:TXL", "airport:LPA", "region:CANARY_ISLES", "city:TENERIFE", "city:KATOWICE", "country:gr", "region:ENGLAND", "airport:CIY", "city:EINDHOVEN", "city:GRAN_CANARIA", "city:CATANIA", "airport:SOF", "city:PALERMO", "city:BERLIN", "city:COMISO", "city:BUCHAREST", "city:LIVERPOOL", "city:LAMEZIA", "city:HERAKLION", "city:KAUNAS", "city:SOFIA", "country:pt", "country:lt", "region:COSTA_BRAVA", "country:pl", "city:VALENCIA", "country:de", "airport:STN", "airport:OPO", "airport:KTW", "airport:OTP", "city:PORTO", "country:es", "airport:BRU", "country:it", "city:ALICANTE", "airport:ALC", "airport:HER", "city:LISBON", "connectingFlight:LIS:OPO", "airport:PMO", "airport:CTA", "city:LONDON", "region:SICILY", "country:gb", "airport:EIN", "airport:KUN", "airport:SUF", "airport:TFS", "region:CRETE", "country:bg", "city:SEVILLE", "country:nl", "country:ro", "country:be"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 45.63,
      "lng": 8.7231
    },
    "priority": 224,
    "seasonalRoutes": [],
    "aliases": ["Malpensa"],
    "weight": 2
  }, {
    "id": "airport:BGY",
    "name": "Milan Bergamo",
    "categories": ["SKI", "ROM", "FAM", "CTY", "CUL", "OUT"],
    "iataCode": "BGY",
    "seoName": "milan-bergamo",
    "cityCode": "MILAN",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["city:TALLINN", "airport:LDE", "airport:EFL", "city:TANGIER", "airport:CRV", "city:NUREMBERG", "airport:KRK", "airport:INI", "city:SANTANDER", "connectingFlight:PDL:OPO", "airport:CRL", "city:FRANKFURT", "city:KEFALONIA", "airport:VGO", "country:gr", "connectingFlight:FAO:OPO", "airport:TSR", "city:STOCKHOLM", "airport:PMI", "city:EDINBURGH", "city:VITORIA-GASTEIZ", "airport:NYO", "country:hu", "city:VIENNA", "city:SOFIA", "city:BILLUND", "city:ALGHERO", "city:VALENCIA", "airport:DUB", "airport:STN", "country:es", "airport:BRS", "airport:SCQ", "airport:BRQ", "airport:VIT", "city:PARIS", "city:TEL_AVIV", "city:NIS", "city:PALMA", "airport:RAK", "airport:BRI", "region:IONIAN_ISLANDS_GREEK_ISLANDS", "airport:BRE", "city:RHODES", "airport:VIE", "airport:PMO", "country:ee", "airport:LUX", "city:LONDON", "airport:CTA", "airport:BCN", "city:DUSSELDORF", "city:VILNIUS", "country:gb", "airport:EIN", "city:COLOGNE", "country:fr", "city:BORDEAUX", "airport:SUF", "city:TERCEIRA", "airport:SDR", "airport:TFS", "city:MALTA", "city:VIGO", "city:SEVILLE", "city:ZARAGOZA", "city:BURGAS", "airport:ZAZ", "airport:STR", "country:fi", "airport:LPP", "city:BARI", "region:SARDINIA", "airport:BLL", "airport:LPA", "city:BRINDISI", "airport:MAN", "airport:MAD", "country:ma", "airport:SOF", "city:MARRAKESH", "city:BUCHAREST", "city:HERAKLION", "airport:NUE", "country:lv", "airport:TPS", "city:LAPPEENRANTA", "country:lt", "country:lu", "airport:FUE", "airport:VDA", "city:STUTTGART", "city:BELFAST", "city:AMMAN", "city:GDANSK", "airport:EDI", "airport:TRF", "city:IBIZA", "airport:FEZ", "airport:CPH", "country:it", "airport:ALC", "country:ie", "country:il", "region:SICILY", "city:OSLO", "airport:CAG", "city:BIRMINGHAM", "airport:AMM", "city:WROCLAW", "city:MADRID", "city:CROTONE", "airport:BOJ", "country:jo", "region:PUGLIA", "airport:BOD", "city:BUDAPEST", "city:CAGLIARI", "region:AZORES", "city:BREMEN", "city:HAMBURG", "city:CHARLEROI", "airport:ORK", "city:TENERIFE", "city:FARO", "region:ENGLAND", "airport:CIY", "airport:PSR", "city:EINDHOVEN", "city:FUERTEVENTURA", "city:GRAN_CANARIA", "airport:OSR", "city:TIMISOARA", "airport:AGP", "city:BERLIN", "airport:PDV", "city:BRNO", "city:LAMEZIA", "city:NAPLES", "airport:TLV", "country:pt", "airport:RHO", "connectingFlight:TER:OPO", "city:TRAPANI", "country:pl", "airport:TLL", "airport:WRO", "airport:TNG", "airport:OTP", "airport:NRN", "airport:AHO", "city:THESSALONIKI", "airport:RIX", "city:CHANIA", "airport:NAP", "country:mt", "airport:FRA", "airport:HER", "city:PAPHOS", "airport:FAO", "city:LISBON", "airport:SKG", "city:MANCHESTER", "city:OSTRAVA", "city:BRATISLAVA", "city:SANTIAGO", "airport:PFO", "city:KNOCK", "city:PRAGUE", "country:nl", "city:PESCARA", "airport:GDN", "country:no", "airport:VLC", "country:cy", "country:cz", "airport:SVQ", "airport:BTS", "airport:POZ", "region:CANARY_ISLES", "airport:SEN", "airport:WMI", "airport:OMR", "city:KRAKOW", "airport:BVA", "airport:GOT", "city:CATANIA", "city:LOURDES", "city:CORK", "airport:CGN", "city:WARSAW", "airport:ACE", "city:PALERMO", "airport:IBZ", "region:COSTA_DE_SOL", "city:BARCELONA", "city:COMISO", "country:dk", "city:EILAT", "region:COSTA_BRAVA", "airport:BDS", "airport:BUD", "airport:CFU", "region:SCOTLAND", "country:de", "airport:OPO", "airport:CHQ", "city:PONTA_DELGADA", "city:CORFU", "city:PORTO", "airport:PRG", "city:ORADEA", "airport:SXF", "airport:MLA", "country:at", "city:LANZAROTE", "city:FEZ", "city:MALAGA", "city:ALICANTE", "city:PLOVDIV", "airport:ATH", "airport:LIS", "airport:HAM", "region:NORTHERN_IRELAND", "country:sk", "country:se", "airport:NOC", "city:DUBLIN", "city:BRISTOL", "region:CRETE", "city:ATHENS", "country:bg", "city:COPENHAGEN", "airport:EMA", "city:LUXEMBOURG", "airport:VNO", "city:RIGA", "city:SOUTHEND_ON_SEA", "country:ro", "country:be", "city:GOTHENBURG", "city:POZNAN", "airport:BFS", "country:rs"],
    "countryCode": "it",
    "base": true,
    "coords": {
      "lat": 45.6739,
      "lng": 9.70417
    },
    "priority": 3,
    "seasonalRoutes": [],
    "aliases": ["Bergamo"],
    "weight": 1
  }, {
    "id": "airport:PMF",
    "name": "Parma",
    "categories": ["FAM", "SPR", "FST", "CTY", "CUL", "OUT"],
    "iataCode": "PMF",
    "seoName": "parma",
    "cityCode": "PARMA",
    "country": "Italy",
    "currencyCode": "EUR",
    "routes": ["airport:CAG", "country:it", "region:SARDINIA", "city:CAGLIARI"],
    "countryCode": "it",
    "base": false,
    "coords": {
      "lat": 44.8245,
      "lng": 10.2964
    },
    "priority": 115,
    "seasonalRoutes": [],
    "aliases": []
  }]
};

let started = false;
let mappings = {};
let airportCodes = [];

function start() {
  if (started) {
    return;
  }
  started = true;
  $(".blacked-background").removeAttr('disabled');
  $(".blacked-background").removeClass('blacked-background');
  for (const airport of airports.allAirportsList) {
    let id = airport.id; //format airport:XYZ
    let ryanairId = id.split(":");
    if (ryanairId[0] === "airport") {
      let iata = ryanairId[1];
      airportCodes.push(iata);
      if (!mappings.hasOwnProperty(iata)) {
        mappings[iata] = new Set();
      }
      let routes = airport.routes.filter(entry => {
        return entry.startsWith('airport');
      });

      routes = routes.map(entry => entry.split(":")[1]);
      routes = routes.map(entry => entry.split("|")[0]);
      for (const route of routes) {
        mappings[iata].add(route);
      }
    }
  }
  airportCodes.sort();
  let options = "";
  for (const iataCode of airportCodes) {
    options += "<option>" + iataCode + "</option>";
  }
  $(".dropdown-options").html(options);

// Code used to originally construct Cytoscape graph
// let nodes = [];
// let numNodes = 0;
// for (const iataCode of airportCodes) {
//   nodes.push({
//     group: "nodes",
//     data: {id: iataCode}
//   });
//   for (const route of mappings[iataCode]) {
//     nodes.push({
//       group: "edges",
//       data: {
//         id: `e${numNodes++}`,
//         source: iataCode,
//         target: route
//       }
//     });
//   }
// }
  $.ajax({
    method: 'GET',
    url: "/js/ryanair-cytoscape-state.json",
    type: 'json',
    success: function (data, textStatus, jqXHR) {
      //Handle data and status code here
      loadElems(data);
    }
  });

  function loadElems(data) {

    const nodeStyle = {
      'content': 'data(id)',
      'border-style': 'solid',
      'border-color': 'black',
      'border-width': '1px',
      'background-color': 'grey',
      'color': 'red'
    };
    const edgeStyle = {
      'curve-style': 'bezier',
      'width': 1,
      'line-color': 'grey'
    };
    let allAirportGraph = cytoscape({
      container: document.getElementById("all-airports"), // container to render in
      elements: data,
      userZoomingEnabled: true,
      minZoom: 0.1,
      maxZoom: 3,
      style: cytoscape.stylesheet()
        .selector('node')
        .css(nodeStyle)
        .selector('edge')
        .css(edgeStyle)
    });
    allAirportGraph.fit();
    allAirportGraph.layout({name: 'concentric'}).run();
    window.allAirportGraph = allAirportGraph;

    let collection = allAirportGraph.collection();
    collection = collection.add(allAirportGraph.getElementById("SXF"));

    for (const airport of mappings["SXF"]) {
      collection = collection.add(allAirportGraph.getElementById(airport));
      collection = collection.add(allAirportGraph.getElementById(airport).connectedEdges());
    }

    collection = collection.filter(function (ele, i, coll) {
      return ele.isNode() || (coll.getElementById(ele.data().source).length !== 0 && coll.getElementById(ele.data().target).length !== 0);
    });

    let difference = allAirportGraph.elements().intersection(collection);

    let onlyBerlinGraph = cytoscape({
      container: document.getElementById("only-ber-connections"), // container to render in
      elements: difference.jsons(),
      userZoomingEnabled: true,
      minZoom: 0.1,
      maxZoom: 3,
      style: cytoscape.stylesheet()
        .selector('node')
        .css(nodeStyle)
        .selector('edge')
        .css(edgeStyle)
    });
    onlyBerlinGraph.fit();
    onlyBerlinGraph.layout({
      name: 'circle',
      spacingFactor: 3
    }).run();
    window.onlyBerlinGraph = onlyBerlinGraph;

    let berlinNodes = onlyBerlinGraph.nodes();
    let invalidNodes = [];
    berlinNodes.forEach(node => {
      let id = node.data().id;
      if (!mappings[id].has("TSF")) {
        invalidNodes.push(id);
      }
    });
    let allValidRoutes = cytoscape({
      container: document.getElementById("only-valid-connections"), // container to render in
      elements: onlyBerlinGraph.elements().jsons(),
      userZoomingEnabled: true,
      minZoom: 0.2,
      maxZoom: 3,
      style: cytoscape.stylesheet()
        .selector('node')
        .css(nodeStyle)
        .selector('edge')
        .css(edgeStyle)
        .selector('.highlighted')
        .css({
          'background-color': 'red',
          'line-color': 'red',
          'target-arrow-color': '#61bffc',
          'transition-property': 'background-color, line-color, target-arrow-color',
          'transition-duration': '0.5s'
        })
    });
    for (const node of invalidNodes) {
      allValidRoutes.remove(allValidRoutes.getElementById(node));
    }
    allValidRoutes.fit();
    allValidRoutes.layout({
      name: 'circle',
      spacingFactor: 3
    }).run();
    window.allValidRoutes = allValidRoutes;

  }
}

let didAnimate = false;

function animateDFS() {
  if (didAnimate || !started) {
    return;
  }
  didAnimate = true;
  $("#path-header").show();

  let dfs = window.allValidRoutes.elements().dfs('#SXF', function () {
  }, true);
  for (let j = 0; j < dfs.path.length; j++) {
    dfs.path[j].removeClass('highlighted');
  }
  $("#dfsPath").html("");
  let i = 0;
  let highlightNextEle = function () {
    if (i < dfs.path.length) {
      dfs.path[i].addClass('highlighted');
      if (dfs.path[i].isNode()) {
        $("#dfsPath").append(`<li>${dfs.path[i].id()}</li>`);
      } else { // it's an edge, make it wider
        dfs.path[i].style('width', '8px');
      }
      i++;
      setTimeout(highlightNextEle, 250);
    } else {
      didAnimate = false;
    }
  };

  // kick off first highlight
  highlightNextEle();
}

$("#plus").on('click', e => {
  let lastStop = $(".stop:last");
  let next = 1;
  let selected = $("#start").val();
  if (lastStop.length) {
    next = parseInt($(lastStop).attr('stop'));
    selected = $("#stop" + next).val();
    next++;
  }

  let html = `<p><span>Stop ${next}</span>
<span stop="${next}" class="custom-dropdown big">
    <select stop="${next}" onchange="checkValidStops()" id="stop${next}" class="dropdown-options stop">`;
  if (selected) {
    let valid = Array.from(mappings[selected]);
    valid.sort();
    for (const iataCode of valid) {
      html += "<option>" + iataCode + "</option>";
    }
  } else {
    for (const iataCode of airportCodes) {
      html += "<option>" + iataCode + "</option>";
    }
  }

  html += `</select>
</span></p>`;
  $("#plus").before(html);
});

function checkValidStops() {
  $(".stop").each((ind, e) => {
    let prev = $("#start").val();
    let curr = $(e).val();
    if ($(e).attr('stop') != 1) {
      let prevStop = parseInt($(e).attr("stop")) - 1;
      prev = $("#stop" + prevStop).val();
    }
    let valid = Array.from(mappings[prev]);
    valid.sort();
    let html = "";
    for (const iataCode of valid) {
      html += "<option>" + iataCode + "</option>";
    }
    $(e).html(html);
    if (valid.indexOf(curr) !== -1) {
      $(e).val(curr);
    }
  });
}

function routeHelper(start, goal, depth) {
  if (depth == 0) {
    return [];
  }
  let airports = Array.from(mappings[start]);
  let valid = [];
  for (const airport of airports) {
    if (mappings[airport].has(goal)) {
      valid.push(`${airport} => ${goal}`);
    }
    let recursiveValid = routeHelper(airport, goal, depth - 1);
    for (const entry of recursiveValid) {
      valid.push(`${entry}`);
    }
  }
  valid = valid.map(entry => `${start} => ${entry}`);
  return valid;
}

function getPreRoute() {
  let start = $("#start").val();
  let pre = start;
  $(".stop:not(:last)").each(e => {
    pre += " => " + $(e).val();
  });
  return pre;
}

function findRoute() {
  let goal = $("#end").val();
  let start = $(".stop:last").val();
  if (!start) {
    start = $("#start").val();
  }
  let numStops = parseInt($("#stops").val());
  let valid = routeHelper(start, goal, numStops);
  // Sort by string length since we know IATA codes are all going to be 3 letters long
  valid.sort(function (a, b) {
    return b.length - a.length;
  });
  let pre = getPreRoute();
  valid = valid.map(e => {
    return pre + " => " + e;
  });
  let html = `<div id="valid-routes-found"><h3>Valid Routes</h3>`;
  for (const entry of valid) {
    html += `<p>${entry}</p>`;
  }
  html += `</div>`;

  $("#valid-routes-found").remove();
  $("#route-finder").after(html);
}