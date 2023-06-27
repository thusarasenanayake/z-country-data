const e=[{name:"Jordan",flag:"🇯🇴",currency:"JOD"},{name:"Northern Mariana Islands",flag:"🇲🇵",currency:"USD"},{name:"Serbia",flag:"🇷🇸",currency:"RSD"},{name:"Andorra",flag:"🇦🇩",currency:"EUR"},{name:"Turks and Caicos Islands",flag:"🇹🇨",currency:"USD"},{name:"Bermuda",flag:"🇧🇲",currency:"BMD"},{name:"Antarctica",flag:"🇦🇶",currency:""},{name:"Bolivia",flag:"🇧🇴",currency:"BOB"},{name:"Libya",flag:"🇱🇾",currency:"LYD"},{name:"Mali",flag:"🇲🇱",currency:"XOF"},{name:"Armenia",flag:"🇦🇲",currency:"AMD"},{name:"Mauritius",flag:"🇲🇺",currency:"MUR"},{name:"Maldives",flag:"🇲🇻",currency:"MVR"},{name:"American Samoa",flag:"🇦🇸",currency:"USD"},{name:"North Macedonia",flag:"🇲🇰",currency:"MKD"},{name:"Ethiopia",flag:"🇪🇹",currency:"ETB"},{name:"Greenland",flag:"🇬🇱",currency:"DKK"},{name:"Iraq",flag:"🇮🇶",currency:"IQD"},{name:"Guatemala",flag:"🇬🇹",currency:"GTQ"},{name:"Trinidad and Tobago",flag:"🇹🇹",currency:"TTD"},{name:"Peru",flag:"🇵🇪",currency:"PEN"},{name:"Suriname",flag:"🇸🇷",currency:"SRD"},{name:"Sweden",flag:"🇸🇪",currency:"SEK"},{name:"New Caledonia",flag:"🇳🇨",currency:"XPF"},{name:"French Polynesia",flag:"🇵🇫",currency:"XPF"},{name:"Benin",flag:"🇧🇯",currency:"XOF"},{name:"Estonia",flag:"🇪🇪",currency:"EUR"},{name:"Falkland Islands",flag:"🇫🇰",currency:"FKP"},{name:"Guam",flag:"🇬🇺",currency:"USD"},{name:"Zimbabwe",flag:"🇿🇼",currency:"ZWL"},{name:"Slovakia",flag:"🇸🇰",currency:"EUR"},{name:"Netherlands",flag:"🇳🇱",currency:"EUR"},{name:"Ecuador",flag:"🇪🇨",currency:"USD"},{name:"Saudi Arabia",flag:"🇸🇦",currency:"SAR"},{name:"United Arab Emirates",flag:"🇦🇪",currency:"AED"},{name:"Afghanistan",flag:"🇦🇫",currency:"AFN"},{name:"United States Minor Outlying Islands",flag:"🇺🇲",currency:"USD"},{name:"Central African Republic",flag:"🇨🇫",currency:"XAF"},{name:"Panama",flag:"🇵🇦",currency:"PAB"},{name:"Vatican City",flag:"🇻🇦",currency:"EUR"},{name:"Syria",flag:"🇸🇾",currency:"SYP"},{name:"Vanuatu",flag:"🇻🇺",currency:"VUV"},{name:"Honduras",flag:"🇭🇳",currency:"HNL"},{name:"Kiribati",flag:"🇰🇮",currency:"AUD"},{name:"Chile",flag:"🇨🇱",currency:"CLP"},{name:"Burkina Faso",flag:"🇧🇫",currency:"XOF"},{name:"Saint Kitts and Nevis",flag:"🇰🇳",currency:"XCD"},{name:"Saint Barthélemy",flag:"🇧🇱",currency:"EUR"},{name:"Mexico",flag:"🇲🇽",currency:"MXN"},{name:"China",flag:"🇨🇳",currency:"CNY"},{name:"Timor-Leste",flag:"🇹🇱",currency:"USD"},{name:"British Indian Ocean Territory",flag:"🇮🇴",currency:"USD"},{name:"South Sudan",flag:"🇸🇸",currency:"SSP"},{name:"Eswatini",flag:"🇸🇿",currency:"SZL"},{name:"Uzbekistan",flag:"🇺🇿",currency:"UZS"},{name:"Indonesia",flag:"🇮🇩",currency:"IDR"},{name:"Paraguay",flag:"🇵🇾",currency:"PYG"},{name:"Monaco",flag:"🇲🇨",currency:"EUR"},{name:"Grenada",flag:"🇬🇩",currency:"XCD"},{name:"Croatia",flag:"🇭🇷",currency:"EUR"},{name:"Poland",flag:"🇵🇱",currency:"PLN"},{name:"Bosnia and Herzegovina",flag:"🇧🇦",currency:"BAM"},{name:"Canada",flag:"🇨🇦",currency:"CAD"},{name:"Portugal",flag:"🇵🇹",currency:"EUR"},{name:"Brazil",flag:"🇧🇷",currency:"BRL"},{name:"Mauritania",flag:"🇲🇷",currency:"MRU"},{name:"Israel",flag:"🇮🇱",currency:"ILS"},{name:"Curaçao",flag:"🇨🇼",currency:"ANG"},{name:"Brunei",flag:"🇧🇳",currency:"BND"},{name:"Angola",flag:"🇦🇴",currency:"AOA"},{name:"Malta",flag:"🇲🇹",currency:"EUR"},{name:"Belarus",flag:"🇧🇾",currency:"BYN"},{name:"Turkey",flag:"🇹🇷",currency:"TRY"},{name:"Finland",flag:"🇫🇮",currency:"EUR"},{name:"Gibraltar",flag:"🇬🇮",currency:"GIP"},{name:"Bhutan",flag:"🇧🇹",currency:"BTN"},{name:"Spain",flag:"🇪🇸",currency:"EUR"},{name:"Venezuela",flag:"🇻🇪",currency:"VES"},{name:"Qatar",flag:"🇶🇦",currency:"QAR"},{name:"Czechia",flag:"🇨🇿",currency:"CZK"},{name:"Kuwait",flag:"🇰🇼",currency:"KWD"},{name:"Montenegro",flag:"🇲🇪",currency:"EUR"},{name:"Bouvet Island",flag:"🇧🇻",currency:""},{name:"India",flag:"🇮🇳",currency:"INR"},{name:"New Zealand",flag:"🇳🇿",currency:"NZD"},{name:"Jamaica",flag:"🇯🇲",currency:"JMD"},{name:"Cayman Islands",flag:"🇰🇾",currency:"KYD"},{name:"San Marino",flag:"🇸🇲",currency:"EUR"},{name:"Republic of the Congo",flag:"🇨🇬",currency:"XAF"},{name:"Pakistan",flag:"🇵🇰",currency:"PKR"},{name:"France",flag:"🇫🇷",currency:"EUR"},{name:"Kazakhstan",flag:"🇰🇿",currency:"KZT"},{name:"Bahrain",flag:"🇧🇭",currency:"BHD"},{name:"Fiji",flag:"🇫🇯",currency:"FJD"},{name:"Iceland",flag:"🇮🇸",currency:"ISK"},{name:"Myanmar",flag:"🇲🇲",currency:"MMK"},{name:"Bangladesh",flag:"🇧🇩",currency:"BDT"},{name:"Philippines",flag:"🇵🇭",currency:"PHP"},{name:"Equatorial Guinea",flag:"🇬🇶",currency:"XAF"},{name:"Ireland",flag:"🇮🇪",currency:"EUR"},{name:"Nepal",flag:"🇳🇵",currency:"NPR"},{name:"Yemen",flag:"🇾🇪",currency:"YER"},{name:"South Korea",flag:"🇰🇷",currency:"KRW"},{name:"Denmark",flag:"🇩🇰",currency:"DKK"},{name:"Oman",flag:"🇴🇲",currency:"OMR"},{name:"Saint Vincent and the Grenadines",flag:"🇻🇨",currency:"XCD"},{name:"Eritrea",flag:"🇪🇷",currency:"ERN"},{name:"Australia",flag:"🇦🇺",currency:"AUD"},{name:"Iran",flag:"🇮🇷",currency:"IRR"},{name:"El Salvador",flag:"🇸🇻",currency:"USD"},{name:"Tanzania",flag:"🇹🇿",currency:"TZS"},{name:"Guadeloupe",flag:"🇬🇵",currency:"EUR"},{name:"Solomon Islands",flag:"🇸🇧",currency:"SBD"},{name:"Kenya",flag:"🇰🇪",currency:"KES"},{name:"Dominican Republic",flag:"🇩🇴",currency:"DOP"},{name:"Greece",flag:"🇬🇷",currency:"EUR"},{name:"Guernsey",flag:"🇬🇬",currency:"GBP"},{name:"Rwanda",flag:"🇷🇼",currency:"RWF"},{name:"Saint Pierre and Miquelon",flag:"🇵🇲",currency:"EUR"},{name:"Tuvalu",flag:"🇹🇻",currency:"AUD"},{name:"Taiwan",flag:"🇹🇼",currency:"TWD"},{name:"Guyana",flag:"🇬🇾",currency:"GYD"},{name:"Seychelles",flag:"🇸🇨",currency:"SCR"},{name:"North Korea",flag:"🇰🇵",currency:"KPW"},{name:"Botswana",flag:"🇧🇼",currency:"BWP"},{name:"Cambodia",flag:"🇰🇭",currency:"KHR"},{name:"Barbados",flag:"🇧🇧",currency:"BBD"},{name:"Colombia",flag:"🇨🇴",currency:"COP"},{name:"Ukraine",flag:"🇺🇦",currency:"UAH"},{name:"Ivory Coast",flag:"🇨🇮",currency:"XOF"},{name:"Nauru",flag:"🇳🇷",currency:"AUD"},{name:"Namibia",flag:"🇳🇦",currency:"NAD"},{name:"Chad",flag:"🇹🇩",currency:"XAF"},{name:"Tonga",flag:"🇹🇴",currency:"TOP"},{name:"Argentina",flag:"🇦🇷",currency:"ARS"},{name:"Christmas Island",flag:"🇨🇽",currency:"AUD"},{name:"Niger",flag:"🇳🇪",currency:"XOF"},{name:"Marshall Islands",flag:"🇲🇭",currency:"USD"},{name:"Costa Rica",flag:"🇨🇷",currency:"CRC"},{name:"Ghana",flag:"🇬🇭",currency:"GHS"},{name:"Austria",flag:"🇦🇹",currency:"EUR"},{name:"Saint Helena, Ascension and Tristan da Cunha",flag:"🇸🇭",currency:"GBP"},{name:"Palestine",flag:"🇵🇸",currency:"EGP"},{name:"Cuba",flag:"🇨🇺",currency:"CUC"},{name:"Hungary",flag:"🇭🇺",currency:"HUF"},{name:"Micronesia",flag:"🇫🇲",currency:"USD"},{name:"Belize",flag:"🇧🇿",currency:"BZD"},{name:"Bahamas",flag:"🇧🇸",currency:"BSD"},{name:"Aruba",flag:"🇦🇼",currency:"AWG"},{name:"São Tomé and Príncipe",flag:"🇸🇹",currency:"STN"},{name:"Russia",flag:"🇷🇺",currency:"RUB"},{name:"Luxembourg",flag:"🇱🇺",currency:"EUR"},{name:"Faroe Islands",flag:"🇫🇴",currency:"DKK"},{name:"Nicaragua",flag:"🇳🇮",currency:"NIO"},{name:"Tunisia",flag:"🇹🇳",currency:"TND"},{name:"DR Congo",flag:"🇨🇩",currency:"CDF"},{name:"Svalbard and Jan Mayen",flag:"🇸🇯",currency:"NOK"},{name:"South Africa",flag:"🇿🇦",currency:"ZAR"},{name:"Sierra Leone",flag:"🇸🇱",currency:"SLL"},{name:"Lesotho",flag:"🇱🇸",currency:"LSL"},{name:"South Georgia",flag:"🇬🇸",currency:"SHP"},{name:"Italy",flag:"🇮🇹",currency:"EUR"},{name:"Djibouti",flag:"🇩🇯",currency:"DJF"},{name:"Heard Island and McDonald Islands",flag:"🇭🇲",currency:""},{name:"Sri Lanka",flag:"🇱🇰",currency:"LKR"},{name:"Saint Lucia",flag:"🇱🇨",currency:"XCD"},{name:"Samoa",flag:"🇼🇸",currency:"WST"},{name:"Cocos (Keeling) Islands",flag:"🇨🇨",currency:"AUD"},{name:"Puerto Rico",flag:"🇵🇷",currency:"USD"},{name:"Gabon",flag:"🇬🇦",currency:"XAF"},{name:"Turkmenistan",flag:"🇹🇲",currency:"TMT"},{name:"Latvia",flag:"🇱🇻",currency:"EUR"},{name:"Senegal",flag:"🇸🇳",currency:"XOF"},{name:"Belgium",flag:"🇧🇪",currency:"EUR"},{name:"Moldova",flag:"🇲🇩",currency:"MDL"},{name:"Liechtenstein",flag:"🇱🇮",currency:"CHF"},{name:"Malawi",flag:"🇲🇼",currency:"MWK"},{name:"Lebanon",flag:"🇱🇧",currency:"LBP"},{name:"Mongolia",flag:"🇲🇳",currency:"MNT"},{name:"Norway",flag:"🇳🇴",currency:"NOK"},{name:"British Virgin Islands",flag:"🇻🇬",currency:"USD"},{name:"Cameroon",flag:"🇨🇲",currency:"XAF"},{name:"Thailand",flag:"🇹🇭",currency:"THB"},{name:"Nigeria",flag:"🇳🇬",currency:"NGN"},{name:"Réunion",flag:"🇷🇪",currency:"EUR"},{name:"Cape Verde",flag:"🇨🇻",currency:"CVE"},{name:"Jersey",flag:"🇯🇪",currency:"GBP"},{name:"Algeria",flag:"🇩🇿",currency:"DZD"},{name:"Laos",flag:"🇱🇦",currency:"LAK"},{name:"Caribbean Netherlands",flag:"🇧🇶",currency:"USD"},{name:"Azerbaijan",flag:"🇦🇿",currency:"AZN"},{name:"Sint Maarten",flag:"🇸🇽",currency:"ANG"},{name:"Morocco",flag:"🇲🇦",currency:"MAD"},{name:"Åland Islands",flag:"🇦🇽",currency:"EUR"},{name:"Bulgaria",flag:"🇧🇬",currency:"BGN"},{name:"Burundi",flag:"🇧🇮",currency:"BIF"},{name:"Uganda",flag:"🇺🇬",currency:"UGX"},{name:"Kosovo",flag:"🇽🇰",currency:"EUR"},{name:"Mozambique",flag:"🇲🇿",currency:"MZN"},{name:"Georgia",flag:"🇬🇪",currency:"GEL"},{name:"United Kingdom",flag:"🇬🇧",currency:"GBP"},{name:"Wallis and Futuna",flag:"🇼🇫",currency:"XPF"},{name:"Pitcairn Islands",flag:"🇵🇳",currency:"NZD"},{name:"Romania",flag:"🇷🇴",currency:"RON"},{name:"Vietnam",flag:"🇻🇳",currency:"VND"},{name:"French Southern and Antarctic Lands",flag:"🇹🇫",currency:"EUR"},{name:"Western Sahara",flag:"🇪🇭",currency:"DZD"},{name:"Japan",flag:"🇯🇵",currency:"JPY"},{name:"Egypt",flag:"🇪🇬",currency:"EGP"},{name:"Liberia",flag:"🇱🇷",currency:"LRD"},{name:"Lithuania",flag:"🇱🇹",currency:"EUR"},{name:"Haiti",flag:"🇭🇹",currency:"HTG"},{name:"United States Virgin Islands",flag:"🇻🇮",currency:"USD"},{name:"Papua New Guinea",flag:"🇵🇬",currency:"PGK"},{name:"Hong Kong",flag:"🇭🇰",currency:"HKD"},{name:"Kyrgyzstan",flag:"🇰🇬",currency:"KGS"},{name:"Palau",flag:"🇵🇼",currency:"USD"},{name:"Madagascar",flag:"🇲🇬",currency:"MGA"},{name:"Gambia",flag:"🇬🇲",currency:"GMD"},{name:"Togo",flag:"🇹🇬",currency:"XOF"},{name:"Tokelau",flag:"🇹🇰",currency:"NZD"},{name:"Slovenia",flag:"🇸🇮",currency:"EUR"},{name:"Singapore",flag:"🇸🇬",currency:"SGD"},{name:"French Guiana",flag:"🇬🇫",currency:"EUR"},{name:"United States",flag:"🇺🇸",currency:"USD"},{name:"Montserrat",flag:"🇲🇸",currency:"XCD"},{name:"Malaysia",flag:"🇲🇾",currency:"MYR"},{name:"Germany",flag:"🇩🇪",currency:"EUR"},{name:"Antigua and Barbuda",flag:"🇦🇬",currency:"XCD"},{name:"Saint Martin",flag:"🇲🇫",currency:"EUR"},{name:"Somalia",flag:"🇸🇴",currency:"SOS"},{name:"Macau",flag:"🇲🇴",currency:"MOP"},{name:"Albania",flag:"🇦🇱",currency:"ALL"},{name:"Mayotte",flag:"🇾🇹",currency:"EUR"},{name:"Dominica",flag:"🇩🇲",currency:"XCD"},{name:"Zambia",flag:"🇿🇲",currency:"ZMW"},{name:"Anguilla",flag:"🇦🇮",currency:"XCD"},{name:"Cook Islands",flag:"🇨🇰",currency:"CKD"},{name:"Martinique",flag:"🇲🇶",currency:"EUR"},{name:"Guinea",flag:"🇬🇳",currency:"GNF"},{name:"Comoros",flag:"🇰🇲",currency:"KMF"},{name:"Niue",flag:"🇳🇺",currency:"NZD"},{name:"Switzerland",flag:"🇨🇭",currency:"CHF"},{name:"Norfolk Island",flag:"🇳🇫",currency:"AUD"},{name:"Isle of Man",flag:"🇮🇲",currency:"GBP"},{name:"Sudan",flag:"🇸🇩",currency:"SDG"},{name:"Tajikistan",flag:"🇹🇯",currency:"TJS"},{name:"Uruguay",flag:"🇺🇾",currency:"UYU"},{name:"Cyprus",flag:"🇨🇾",currency:"EUR"},{name:"Guinea-Bissau",flag:"🇬🇼",currency:"XOF"}],c=()=>e.map((a=>a.name)),u=()=>{const a=new Set;return e.forEach((n=>{n.currency&&a.add(n.currency)})),Array.from(a)},l=a=>{const n=e.find((r=>r.name===a));return n||null},m={getCountries:c,getCountryData:l,getCurrencyCodes:u};export{m as default};