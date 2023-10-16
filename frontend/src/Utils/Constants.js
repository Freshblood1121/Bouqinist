import { useMediaQuery } from "@mui/material";

export const API_URL = {
  BOOKS: "http://bouqinist/api/v1/books",
  BOOK: "http://bouqinist/api/v1/books/show/",
  CREATE_BOOK: "http://bouqinist/api/v1/books/create",
  CATEGORIES: "http://bouqinist/api/v1/categories",
  CATEGORY_BOOKS: "http://bouqinist/api/v1/categories/has",
  REGISTER: "http://bouqinist:80/api/v1/register",
  LOGIN: "http://bouqinist:80/api/v1/login",
  USER: "http://bouqinist:80/api/v1/me",
  SET_USER_DATA: "http://bouqinist:80/api/v1/me/update",
  VERIFICATE: "http://bouqinist:80/api/v1/email-verification",
};

// export const API_URL = {
//   BOOKS: "http://127.0.0.1:8000/api/v1/books",
//   BOOK: "http://127.0.0.1:8000/api/v1/books/show/",
//   CREATE_BOOK: "http://127.0.0.1:8000/api/v1/books/create",
//   CATEGORIES: "http://127.0.0.1:8000/api/v1/categories",
//   CATEGORY_BOOKS: "http://127.0.0.1:8000/api/v1/categories/has",
//   REGISTER: "http://127.0.0.1:8000/api/v1/register",
//   LOGIN: "http://127.0.0.1:8000/api/v1/login",
//   USER: "http://127.0.0.1:8000/api/v1/me",
//   SET_USER_DATA: "http://127.0.0.1:8000/api/v1/me/update",
//   VERIFICATE: "http://127.0.0.1:8000/api/v1/email-verification",
// };

export const REQUEST_STATUS = {
  IDLE: 1,
  SUCCESS: 2,
  PENDING: 3,
  FAILURE: 4,
};

export const palette = {
  basic: "#3D3C3C",
  light: "#676767",
  lighter: "#C5C5C5",
  gray500: "#989797",
  gray400: "#B8B6B6",
  gray300: "#DBDADA",
  gray100: "#EBE9E9",
  gray000: "#F3F3F3",
  hover: "#FDBF0F",
  active: "#3AB8EB",
  activeLight: "#DFF3Fc",
  activeDark: "#008FD7",
  success: "#00A878",
  green400: "#47C397",
  green300: "#6DCEA9",
  buttonHover: "#FC9D09",
  categoryBG: "#F9784B",
  warning: "#D32F2F",
  error300: "#E57373",
};

export const countries = [
  {
    label: "Абхазия",
    code: "AB",
    phone: 7840,
  },
  {
    label: "Австралия",
    code: "AU",
    phone: 61,
  },
  {
    label: "Австрия",
    code: "AT",
    phone: 43,
  },
  {
    label: "Азербайджан",
    code: "AZ",
    phone: 994,
  },
  {
    label: "Албания",
    code: "AL",
    phone: 355,
  },
  {
    label: "Алжир",
    code: "DZ",
    phone: 213,
  },
  {
    label: "Ангола",
    code: "AO",
    phone: 244,
  },
  {
    label: "Андорра",
    code: "AD",
    phone: 376,
  },
  {
    label: "Антигуа и Барбуда",
    code: "AG",
    phone: 1268,
  },
  {
    label: "Аргентина",
    code: "AR",
    phone: 54,
  },
  {
    label: "Армения",
    code: "AM",
    phone: 374,
  },
  {
    label: "Афганистан",
    code: "AF",
    phone: 93,
  },
  {
    label: "Багамские Острова",
    code: "BS",
    phone: 1242,
  },
  {
    label: "Бангладеш",
    code: "BD",
    phone: 880,
  },
  {
    label: "Барбадос",
    code: "BB",
    phone: 1246,
  },
  {
    label: "Бахрейн",
    code: "BH",
    phone: 973,
  },
  {
    label: "Белиз",
    code: "BZ",
    phone: 501,
  },
  {
    label: "Белоруссия",
    code: "BY",
    phone: 375,
  },
  {
    label: "Бельгия",
    code: "BE",
    phone: 32,
  },
  {
    label: "Бенин",
    code: "BJ",
    phone: 229,
  },
  {
    label: "Болгария",
    code: "BG",
    phone: 359,
  },
  {
    label: "Боливия",
    code: "BO",
    phone: 591,
  },
  {
    label: "Босния и Герцеговина",
    code: "BA",
    phone: 387,
  },
  {
    label: "Ботсвана",
    code: "BW",
    phone: 267,
  },
  {
    label: "Бразилия",
    code: "BR",
    phone: 55,
  },
  {
    label: "Бруней",
    code: "BN",
    phone: 673,
  },
  {
    label: "Буркина-Фасо",
    code: "BF",
    phone: 226,
  },
  {
    label: "Бурунди",
    code: "BI",
    phone: 257,
  },
  {
    label: "Бутан",
    code: "BT",
    phone: 975,
  },
  {
    label: "Вануату",
    code: "VU",
    phone: 678,
  },
  {
    label: "Ватикан",
    code: "VA",
    phone: 379,
  },
  {
    label: "Великобритания",
    code: "GB",
    phone: 44,
  },
  {
    label: "Венгрия",
    code: "HU",
    phone: 36,
  },
  {
    label: "Венесуэла",
    code: "VE",
    phone: 58,
  },
  {
    label: "Восточный Тимор",
    code: "TL",
    phone: 670,
  },
  {
    label: "Вьетнам",
    code: "VN",
    phone: 84,
  },
  {
    label: "Габон",
    code: "GA",
    phone: 241,
  },
  {
    label: "Гаити",
    code: "HT",
    phone: 509,
  },
  {
    label: "Гайана",
    code: "GY",
    phone: 592,
  },
  {
    label: "Гамбия",
    code: "GM",
    phone: 220,
  },
  {
    label: "Гана",
    code: "GH",
    phone: 233,
  },
  {
    label: "Гватемала",
    code: "GT",
    phone: 502,
  },
  {
    label: "Гвинея",
    code: "GN",
    phone: 224,
  },
  {
    label: "Гвинея-Бисау",
    code: "GW",
    phone: 245,
  },
  {
    label: "Германия",
    code: "DE",
    phone: 49,
  },
  {
    label: "Гондурас",
    code: "HN",
    phone: 504,
  },
  {
    label: "Государство Палестина",
    code: "PS",
    phone: 970,
  },
  {
    label: "Гренада",
    code: "GD",
    phone: 1473,
  },
  {
    label: "Греция",
    code: "GR",
    phone: 30,
  },
  {
    label: "Грузия",
    code: "GE",
    phone: 995,
  },
  {
    label: "Дания",
    code: "DK",
    phone: 45,
  },
  {
    label: "Джибути",
    code: "DJ",
    phone: 253,
  },
  {
    label: "Доминика",
    code: "DM",
    phone: 1767,
  },
  {
    label: "Доминиканская Республика",
    code: "DO",
    phone: 1809,
  },
  {
    label: "ДР Конго",
    code: "CD",
    phone: 243,
  },
  {
    label: "Египет",
    code: "EG",
    phone: 20,
  },
  {
    label: "Замбия",
    code: "ZM",
    phone: 260,
  },
  {
    label: "Зимбабве",
    code: "ZW",
    phone: 263,
  },
  {
    label: "Израиль",
    code: "IL",
    phone: 972,
  },
  {
    label: "Индия",
    code: "IN",
    phone: 91,
  },
  {
    label: "Индонезия",
    code: "ID",
    phone: 62,
  },
  {
    label: "Иордания",
    code: "JO",
    phone: 962,
  },
  {
    label: "Ирак",
    code: "IQ",
    phone: 964,
  },
  {
    label: "Иран",
    code: "IR",
    phone: 98,
  },
  {
    label: "Ирландия",
    code: "IE",
    phone: 353,
  },
  {
    label: "Исландия",
    code: "IS",
    phone: 354,
  },
  {
    label: "Испания",
    code: "ES",
    phone: 34,
  },
  {
    label: "Италия",
    code: "IT",
    phone: 39,
  },
  {
    label: "Йемен",
    code: "YE",
    phone: 967,
  },
  {
    label: "Кабо-Верде",
    code: "CV",
    phone: 238,
  },
  {
    label: "Казахстан",
    code: "KZ",
    phone: 7,
  },
  {
    label: "Камбоджа",
    code: "KH",
    phone: 855,
  },
  {
    label: "Камерун",
    code: "CM",
    phone: 237,
  },
  {
    label: "Канада",
    code: "CA",
    phone: 1,
  },
  {
    label: "Катар",
    code: "QA",
    phone: 974,
  },
  {
    label: "Кения",
    code: "KE",
    phone: 254,
  },
  {
    label: "Кипр",
    code: "CY",
    phone: 357,
  },
  {
    label: "Киргизия",
    code: "KG",
    phone: 996,
  },
  {
    label: "Кирибати",
    code: "KI",
    phone: 686,
  },
  {
    label: "Китай",
    code: "CN",
    phone: 86,
  },
  {
    label: "КНДР",
    code: "KP",
    phone: 850,
  },
  {
    label: "Колумбия",
    code: "CO",
    phone: 57,
  },
  {
    label: "Коморские Острова",
    code: "KM",
    phone: 269,
  },
  {
    label: "Коста-Рика",
    code: "CR",
    phone: 506,
  },
  {
    label: "Кот-д'Ивуар",
    code: "CI",
    phone: 225,
  },
  {
    label: "Куба",
    code: "CU",
    phone: 53,
  },
  {
    label: "Кувейт",
    code: "KW",
    phone: 965,
  },
  {
    label: "Лаос",
    code: "LA",
    phone: 856,
  },
  {
    label: "Латвия",
    code: "LV",
    phone: 371,
  },
  {
    label: "Лесото",
    code: "LS",
    phone: 266,
  },
  {
    label: "Либерия",
    code: "LR",
    phone: 231,
  },
  {
    label: "Ливан",
    code: "LB",
    phone: 961,
  },
  {
    label: "Ливия",
    code: "LY",
    phone: 218,
  },
  {
    label: "Литва",
    code: "LT",
    phone: 370,
  },
  {
    label: "Лихтенштейн",
    code: "LI",
    phone: 423,
  },
  {
    label: "Люксембург",
    code: "LU",
    phone: 352,
  },
  {
    label: "Маврикий",
    code: "MU",
    phone: 230,
  },
  {
    label: "Мавритания",
    code: "MR",
    phone: 222,
  },
  {
    label: "Мадагаскар",
    code: "MG",
    phone: 261,
  },
  {
    label: "Малави",
    code: "MW",
    phone: 265,
  },
  {
    label: "Малайзия",
    code: "MY",
    phone: 60,
  },
  {
    label: "Мали",
    code: "ML",
    phone: 223,
  },
  {
    label: "Мальдивские Острова",
    code: "MV",
    phone: 960,
  },
  {
    label: "Мальта",
    code: "MT",
    phone: 356,
  },
  {
    label: "Марокко",
    code: "MA",
    phone: 212,
  },
  {
    label: "Маршалловы Острова",
    code: "MH",
    phone: 692,
  },
  {
    label: "Мексика",
    code: "MX",
    phone: 52,
  },
  {
    label: "Мозамбик",
    code: "MZ",
    phone: 258,
  },
  {
    label: "Молдавия",
    code: "MD",
    phone: 373,
  },
  {
    label: "Монако",
    code: "MC",
    phone: 377,
  },
  {
    label: "Монголия",
    code: "MN",
    phone: 976,
  },
  {
    label: "Мьянма",
    code: "MM",
    phone: 95,
  },
  {
    label: "Намибия",
    code: "NA",
    phone: 264,
  },
  {
    label: "Науру",
    code: "NR",
    phone: 674,
  },
  {
    label: "Непал",
    code: "NP",
    phone: 977,
  },
  {
    label: "Нигер",
    code: "NE",
    phone: 227,
  },
  {
    label: "Нигерия",
    code: "NG",
    phone: 234,
  },
  {
    label: "Нидерланды",
    code: "NL",
    phone: 31,
  },
  {
    label: "Никарагуа",
    code: "NI",
    phone: 505,
  },
  {
    label: "Новая Зеландия",
    code: "NZ",
    phone: 64,
  },
  {
    label: "Норвегия",
    code: "NO",
    phone: 47,
  },
  {
    label: "ОАЭ",
    code: "AE",
    phone: 971,
  },
  {
    label: "Оман",
    code: "OM",
    phone: 968,
  },
  {
    label: "Пакистан",
    code: "PK",
    phone: 92,
  },
  {
    label: "Палау",
    code: "PW",
    phone: 680,
  },
  {
    label: "Панама",
    code: "PA",
    phone: 507,
  },
  {
    label: "Папуа - Новая Гвинея",
    code: "PG",
    phone: 675,
  },
  {
    label: "Парагвай",
    code: "PY",
    phone: 595,
  },
  {
    label: "Перу",
    code: "PE",
    phone: 51,
  },
  {
    label: "Польша",
    code: "PL",
    phone: 48,
  },
  {
    label: "Португалия",
    code: "PT",
    phone: 351,
  },
  {
    label: "Республика Конго",
    code: "CG",
    phone: 242,
  },
  {
    label: "Республика Корея",
    code: "KR",
    phone: 82,
  },
  {
    label: "Россия",
    code: "RU",
    phone: 7,
  },
  {
    label: "Руанда",
    code: "RW",
    phone: 250,
  },
  {
    label: "Румыния",
    code: "RO",
    phone: 40,
  },
  {
    label: "Сальвадор",
    code: "SV",
    phone: 503,
  },
  {
    label: "Самоа",
    code: "WS",
    phone: 685,
  },
  {
    label: "Сан-Марино",
    code: "SM",
    phone: 378,
  },
  {
    label: "Сан-Томе и Принсипи",
    code: "ST",
    phone: 239,
  },
  {
    label: "Саудовская Аравия",
    code: "SA",
    phone: 966,
  },
  {
    label: "Северная Македония",
    code: "MK",
    phone: 389,
  },
  {
    label: "Сейшельские Острова",
    code: "SC",
    phone: 248,
  },
  {
    label: "Сенегал",
    code: "SN",
    phone: 221,
  },
  {
    label: "Сент-Винсент и Гренадины",
    code: "VC",
    phone: 1784,
  },
  {
    label: "Сент-Китс и Невис",
    code: "KN",
    phone: 1869,
  },
  {
    label: "Сент-Люсия",
    code: "LC",
    phone: 1758,
  },
  {
    label: "Сербия",
    code: "RS",
    phone: 381,
  },
  {
    label: "Сингапур",
    code: "SG",
    phone: 65,
  },
  {
    label: "Сирия",
    code: "SY",
    phone: 963,
  },
  {
    label: "Словакия",
    code: "SK",
    phone: 421,
  },
  {
    label: "Словения",
    code: "SI",
    phone: 386,
  },
  {
    label: "Соломоновы Острова",
    code: "SB",
    phone: 677,
  },
  {
    label: "Сомали",
    code: "SO",
    phone: 252,
  },
  {
    label: "Судан",
    code: "SD",
    phone: 249,
  },
  {
    label: "Суринам",
    code: "SR",
    phone: 597,
  },
  {
    label: "США",
    code: "US",
    phone: "+1 xxx",
  },
  {
    label: "Сьерра-Леоне",
    code: "SL",
    phone: 232,
  },
  {
    label: "Таджикистан",
    code: "TJ",
    phone: 992,
  },
  {
    label: "Таиланд",
    code: "TH",
    phone: 66,
  },
  {
    label: "Танзания",
    code: "TZ",
    phone: 255,
  },
  {
    label: "Того",
    code: "TG",
    phone: 228,
  },
  {
    label: "Тонга",
    code: "TO",
    phone: 676,
  },
  {
    label: "Тринидад и Тобаго",
    code: "TT",
    phone: 1868,
  },
  {
    label: "Тувалу",
    code: "TV",
    phone: 688,
  },
  {
    label: "Тунис",
    code: "TN",
    phone: 216,
  },
  {
    label: "Туркмения",
    code: "TM",
    phone: 993,
  },
  {
    label: "Турция",
    code: "TR",
    phone: 90,
  },
  {
    label: "Уганда",
    code: "UG",
    phone: 256,
  },
  {
    label: "Узбекистан",
    code: "UZ",
    phone: 998,
  },
  {
    label: "Украина",
    code: "UA",
    phone: 380,
  },
  {
    label: "Уругвай",
    code: "UY",
    phone: 598,
  },
  {
    label: "Федеративные Штаты Микронезии",
    code: "FM",
    phone: 691,
  },
  {
    label: "Фиджи",
    code: "FJ",
    phone: 679,
  },
  {
    label: "Филиппины",
    code: "PH",
    phone: 63,
  },
  {
    label: "Финляндия",
    code: "FI",
    phone: 358,
  },
  {
    label: "Франция",
    code: "FR",
    phone: 33,
  },
  {
    label: "Хорватия",
    code: "HR",
    phone: 385,
  },
  {
    label: "ЦАР",
    code: "CF",
    phone: 236,
  },
  {
    label: "Чад",
    code: "TD",
    phone: 235,
  },
  {
    label: "Черногория",
    code: "ME",
    phone: 382,
  },
  {
    label: "Чехия",
    code: "CZ",
    phone: 420,
  },
  {
    label: "Чили",
    code: "CL",
    phone: 56,
  },
  {
    label: "Швейцария",
    code: "CH",
    phone: 41,
  },
  {
    label: "Швеция",
    code: "SE",
    phone: 46,
  },
  {
    label: "Шри-Ланка",
    code: "LK",
    phone: 94,
  },
  {
    label: "Эквадор",
    code: "EC",
    phone: 593,
  },
  {
    label: "Экваториальная Гвинея",
    code: "GQ",
    phone: 240,
  },
  {
    label: "Эритрея",
    code: "ER",
    phone: 291,
  },
  {
    label: "Эсватини",
    code: "SZ",
    phone: 268,
  },
  {
    label: "Эстония",
    code: "EE",
    phone: 372,
  },
  {
    label: "Эфиопия",
    code: "ET",
    phone: 251,
  },
  {
    label: "ЮАР",
    code: "ZA",
    phone: 27,
  },
  {
    label: "Южная Осетия",
    code: "OS",
    phone: 7,
  },
  {
    label: "Южный Судан",
    code: "SS",
    phone: 211,
  },
  {
    label: "Ямайка",
    code: "JM",
    phone: 1876,
  },
  {
    label: "Япония",
    code: "JP",
    phone: 81,
  },
];
