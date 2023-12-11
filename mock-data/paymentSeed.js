const payments = [
  {
    method: 'venmo',
    ccNum: '5048378826291745',
    ccExpMonth: 2,
    ccExpYear: 2025,
    ccSecurityCode: 7171,
    isDefault: true,
    userId: 48,
  },
  {
    method: 'credit/debit card',
    ccNum: '5048376335146384',
    ccExpMonth: 7,
    ccExpYear: 2027,
    ccSecurityCode: 2411,
    isDefault: false,
    userId: 37,
  },
  {
    method: 'venmo',
    ccNum: '5048372277581829',
    ccExpMonth: 6,
    ccExpYear: 2027,
    ccSecurityCode: 3603,
    isDefault: true,
    userId: 34,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 2,
    ccExpYear: 2023,
    ccSecurityCode: 3765,
    isDefault: false,
    userId: 23,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 9,
    ccExpYear: 2026,
    ccSecurityCode: 508,
    isDefault: true,
    userId: 13,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 2,
    ccExpYear: 2025,
    ccSecurityCode: 1431,
    isDefault: false,
    userId: 26,
  },
  {
    method: 'credit/debit card',
    ccNum: '5108752239308899',
    ccExpMonth: 9,
    ccExpYear: 2026,
    ccSecurityCode: 7462,
    isDefault: false,
    userId: 25,
  },
  {
    method: 'credit/debit card',
    ccNum: '5108751885843456',
    ccExpMonth: 5,
    ccExpYear: 2027,
    ccSecurityCode: 8044,
    isDefault: false,
    userId: 5,
  },
  {
    method: 'stripe',
    ccNum: '5048372703707667',
    ccExpMonth: 1,
    ccExpYear: 2023,
    ccSecurityCode: 6324,
    isDefault: false,
    userId: 32,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 1,
    ccExpYear: 2025,
    ccSecurityCode: 8257,
    isDefault: false,
    userId: 33,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 1,
    ccExpYear: 2023,
    ccSecurityCode: 2683,
    isDefault: false,
    userId: 44,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 6,
    ccExpYear: 2023,
    ccSecurityCode: 1826,
    isDefault: false,
    userId: 22,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 1,
    ccExpYear: 2027,
    ccSecurityCode: 4599,
    isDefault: true,
    userId: 39,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 2,
    ccExpYear: 2027,
    ccSecurityCode: 6043,
    isDefault: true,
    userId: 50,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 3,
    ccExpYear: 2024,
    ccSecurityCode: 656,
    isDefault: false,
    userId: 44,
  },
  {
    method: 'credit/debit card',
    ccNum: '5108751678808302',
    ccExpMonth: 5,
    ccExpYear: 2024,
    ccSecurityCode: 9636,
    isDefault: false,
    userId: 44,
  },
  {
    method: 'credit/debit card',
    ccNum: '5048374399231986',
    ccExpMonth: 6,
    ccExpYear: 2026,
    ccSecurityCode: 2125,
    isDefault: true,
    userId: 11,
  },
  {
    method: 'credit/debit card',
    ccNum: '5108755921168554',
    ccExpMonth: 12,
    ccExpYear: 2027,
    ccSecurityCode: 2891,
    isDefault: false,
    userId: 11,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 11,
    ccExpYear: 2026,
    ccSecurityCode: 5898,
    isDefault: true,
    userId: 45,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 2,
    ccExpYear: 2024,
    ccSecurityCode: 4675,
    isDefault: true,
    userId: 26,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 8,
    ccExpYear: 2025,
    ccSecurityCode: 9150,
    isDefault: true,
    userId: 39,
  },
  {
    method: 'credit/debit card',
    ccNum: '5048371324038072',
    ccExpMonth: 9,
    ccExpYear: 2026,
    ccSecurityCode: 1085,
    isDefault: false,
    userId: 11,
  },
  {
    method: 'credit/debit card',
    ccNum: '5048379910700559',
    ccExpMonth: 3,
    ccExpYear: 2023,
    ccSecurityCode: 2352,
    isDefault: true,
    userId: 15,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 2,
    ccExpYear: 2023,
    ccSecurityCode: 2571,
    isDefault: false,
    userId: 42,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 2,
    ccExpYear: 2024,
    ccSecurityCode: 8939,
    isDefault: true,
    userId: 12,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 7,
    ccExpYear: 2025,
    ccSecurityCode: 3847,
    isDefault: false,
    userId: 24,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 2,
    ccExpYear: 2025,
    ccSecurityCode: 5662,
    isDefault: true,
    userId: 24,
  },
  {
    method: 'venmo',
    ccNum: '5048375312958316',
    ccExpMonth: 6,
    ccExpYear: 2024,
    ccSecurityCode: 6911,
    isDefault: true,
    userId: 46,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 11,
    ccExpYear: 2025,
    ccSecurityCode: 6327,
    isDefault: true,
    userId: 1,
  },
  {
    method: 'credit/debit card',
    ccNum: '5048376062487811',
    ccExpMonth: 9,
    ccExpYear: 2024,
    ccSecurityCode: 4665,
    isDefault: false,
    userId: 5,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 11,
    ccExpYear: 2023,
    ccSecurityCode: 926,
    isDefault: true,
    userId: 39,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 12,
    ccExpYear: 2027,
    ccSecurityCode: 7469,
    isDefault: true,
    userId: 36,
  },
  {
    method: 'credit/debit card',
    ccNum: '5108757564274970',
    ccExpMonth: 12,
    ccExpYear: 2025,
    ccSecurityCode: 8237,
    isDefault: true,
    userId: 3,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 2,
    ccExpYear: 2024,
    ccSecurityCode: 5439,
    isDefault: true,
    userId: 1,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 1,
    ccExpYear: 2026,
    ccSecurityCode: 6727,
    isDefault: true,
    userId: 17,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 5,
    ccExpYear: 2025,
    ccSecurityCode: 8346,
    isDefault: true,
    userId: 46,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 8,
    ccExpYear: 2023,
    ccSecurityCode: 1538,
    isDefault: false,
    userId: 26,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 11,
    ccExpYear: 2024,
    ccSecurityCode: 5607,
    isDefault: true,
    userId: 47,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 5,
    ccExpYear: 2027,
    ccSecurityCode: 3900,
    isDefault: false,
    userId: 12,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 4,
    ccExpYear: 2024,
    ccSecurityCode: 1313,
    isDefault: false,
    userId: 5,
  },
  {
    method: 'stripe',
    ccNum: '5108753386355923',
    ccExpMonth: 7,
    ccExpYear: 2026,
    ccSecurityCode: 2950,
    isDefault: false,
    userId: 49,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 2,
    ccExpYear: 2024,
    ccSecurityCode: 5927,
    isDefault: false,
    userId: 24,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 2,
    ccExpYear: 2024,
    ccSecurityCode: 8022,
    isDefault: true,
    userId: 5,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 11,
    ccExpYear: 2027,
    ccSecurityCode: 3998,
    isDefault: false,
    userId: 34,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 9,
    ccExpYear: 2027,
    ccSecurityCode: 6097,
    isDefault: false,
    userId: 29,
  },
  {
    method: 'credit/debit card',
    ccNum: '5048371596645125',
    ccExpMonth: 11,
    ccExpYear: 2025,
    ccSecurityCode: 1164,
    isDefault: false,
    userId: 22,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 10,
    ccExpYear: 2025,
    ccSecurityCode: 9438,
    isDefault: false,
    userId: 29,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 9,
    ccExpYear: 2026,
    ccSecurityCode: 9067,
    isDefault: false,
    userId: 26,
  },
  {
    method: 'stripe',
    ccNum: '5048374330235211',
    ccExpMonth: 9,
    ccExpYear: 2023,
    ccSecurityCode: 5123,
    isDefault: false,
    userId: 11,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 6,
    ccExpYear: 2024,
    ccSecurityCode: 4277,
    isDefault: true,
    userId: 43,
  },
  {
    method: 'venmo',
    ccNum: '5108755962185772',
    ccExpMonth: 3,
    ccExpYear: 2025,
    ccSecurityCode: 6244,
    isDefault: true,
    userId: 6,
  },
  {
    method: 'venmo',
    ccNum: '5048377452393601',
    ccExpMonth: 7,
    ccExpYear: 2026,
    ccSecurityCode: 9742,
    isDefault: false,
    userId: 6,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 6,
    ccExpYear: 2025,
    ccSecurityCode: 8770,
    isDefault: true,
    userId: 11,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 12,
    ccExpYear: 2026,
    ccSecurityCode: 3993,
    isDefault: false,
    userId: 36,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 6,
    ccExpYear: 2026,
    ccSecurityCode: 3571,
    isDefault: false,
    userId: 49,
  },
  {
    method: 'stripe',
    ccNum: '5048375461484528',
    ccExpMonth: 2,
    ccExpYear: 2023,
    ccSecurityCode: 2768,
    isDefault: true,
    userId: 13,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 3,
    ccExpYear: 2023,
    ccSecurityCode: 7737,
    isDefault: false,
    userId: 43,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 4,
    ccExpYear: 2024,
    ccSecurityCode: 2592,
    isDefault: false,
    userId: 37,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 6,
    ccExpYear: 2024,
    ccSecurityCode: 9777,
    isDefault: false,
    userId: 16,
  },
  {
    method: 'venmo',
    ccNum: '5108758323948508',
    ccExpMonth: 9,
    ccExpYear: 2023,
    ccSecurityCode: 4989,
    isDefault: false,
    userId: 4,
  },
  {
    method: 'venmo',
    ccNum: '5108755687348648',
    ccExpMonth: 8,
    ccExpYear: 2026,
    ccSecurityCode: 5339,
    isDefault: false,
    userId: 20,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 2,
    ccExpYear: 2026,
    ccSecurityCode: 8598,
    isDefault: true,
    userId: 29,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 9,
    ccExpYear: 2024,
    ccSecurityCode: 9360,
    isDefault: false,
    userId: 14,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 6,
    ccExpYear: 2025,
    ccSecurityCode: 887,
    isDefault: true,
    userId: 31,
  },
  {
    method: 'credit/debit card',
    ccNum: '5108759783781702',
    ccExpMonth: 5,
    ccExpYear: 2023,
    ccSecurityCode: 1770,
    isDefault: false,
    userId: 47,
  },
  {
    method: 'venmo',
    ccNum: '5048371775372095',
    ccExpMonth: 12,
    ccExpYear: 2025,
    ccSecurityCode: 4484,
    isDefault: true,
    userId: 8,
  },
  {
    method: 'credit/debit card',
    ccNum: '5108752310822685',
    ccExpMonth: 1,
    ccExpYear: 2026,
    ccSecurityCode: 5041,
    isDefault: false,
    userId: 42,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 4,
    ccExpYear: 2025,
    ccSecurityCode: 6850,
    isDefault: true,
    userId: 7,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 8,
    ccExpYear: 2023,
    ccSecurityCode: 6656,
    isDefault: true,
    userId: 35,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 4,
    ccExpYear: 2023,
    ccSecurityCode: 4471,
    isDefault: false,
    userId: 26,
  },
  {
    method: 'credit/debit card',
    ccNum: '5048371526459852',
    ccExpMonth: 11,
    ccExpYear: 2026,
    ccSecurityCode: 4634,
    isDefault: false,
    userId: 36,
  },
  {
    method: 'stripe',
    ccNum: '5048377227258899',
    ccExpMonth: 10,
    ccExpYear: 2026,
    ccSecurityCode: 6816,
    isDefault: false,
    userId: 47,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 10,
    ccExpYear: 2025,
    ccSecurityCode: 6393,
    isDefault: true,
    userId: 24,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 9,
    ccExpYear: 2023,
    ccSecurityCode: 575,
    isDefault: false,
    userId: 16,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 3,
    ccExpYear: 2025,
    ccSecurityCode: 1481,
    isDefault: false,
    userId: 2,
  },
  {
    method: 'credit/debit card',
    ccNum: '5048377049981546',
    ccExpMonth: 12,
    ccExpYear: 2026,
    ccSecurityCode: 6784,
    isDefault: false,
    userId: 43,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 9,
    ccExpYear: 2023,
    ccSecurityCode: 2775,
    isDefault: true,
    userId: 5,
  },
  {
    method: 'stripe',
    ccNum: '5108757028036718',
    ccExpMonth: 11,
    ccExpYear: 2024,
    ccSecurityCode: 7823,
    isDefault: false,
    userId: 11,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 8,
    ccExpYear: 2024,
    ccSecurityCode: 6371,
    isDefault: true,
    userId: 49,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 6,
    ccExpYear: 2026,
    ccSecurityCode: 6806,
    isDefault: false,
    userId: 36,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 8,
    ccExpYear: 2025,
    ccSecurityCode: 8638,
    isDefault: true,
    userId: 45,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 7,
    ccExpYear: 2026,
    ccSecurityCode: 3712,
    isDefault: false,
    userId: 14,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 9,
    ccExpYear: 2023,
    ccSecurityCode: 2145,
    isDefault: false,
    userId: 23,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 9,
    ccExpYear: 2025,
    ccSecurityCode: 2500,
    isDefault: true,
    userId: 36,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 1,
    ccExpYear: 2025,
    ccSecurityCode: 4705,
    isDefault: true,
    userId: 19,
  },
  {
    method: 'venmo',
    ccNum: '5108754468313251',
    ccExpMonth: 9,
    ccExpYear: 2025,
    ccSecurityCode: 8020,
    isDefault: false,
    userId: 29,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 9,
    ccExpYear: 2025,
    ccSecurityCode: 6661,
    isDefault: false,
    userId: 48,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 11,
    ccExpYear: 2025,
    ccSecurityCode: 8906,
    isDefault: true,
    userId: 18,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 1,
    ccExpYear: 2027,
    ccSecurityCode: 7619,
    isDefault: true,
    userId: 39,
  },
  {
    method: 'venmo',
    ccNum: '5048376180751338',
    ccExpMonth: 10,
    ccExpYear: 2027,
    ccSecurityCode: 3478,
    isDefault: true,
    userId: 26,
  },
  {
    method: 'venmo',
    ccNum: '5108750973753478',
    ccExpMonth: 7,
    ccExpYear: 2024,
    ccSecurityCode: 5144,
    isDefault: false,
    userId: 5,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 11,
    ccExpYear: 2024,
    ccSecurityCode: 1872,
    isDefault: false,
    userId: 42,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 4,
    ccExpYear: 2026,
    ccSecurityCode: 5504,
    isDefault: true,
    userId: 12,
  },
  {
    method: 'stripe',
    ccNum: '0001000200030004',
    ccExpMonth: 2,
    ccExpYear: 2025,
    ccSecurityCode: 5549,
    isDefault: false,
    userId: 34,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 10,
    ccExpYear: 2025,
    ccSecurityCode: 1229,
    isDefault: true,
    userId: 26,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 5,
    ccExpYear: 2023,
    ccSecurityCode: 4029,
    isDefault: true,
    userId: 23,
  },
  {
    method: 'venmo',
    ccNum: '0001000200030004',
    ccExpMonth: 7,
    ccExpYear: 2025,
    ccSecurityCode: 5679,
    isDefault: false,
    userId: 37,
  },
  {
    method: 'credit/debit card',
    ccNum: '0001000200030004',
    ccExpMonth: 5,
    ccExpYear: 2027,
    ccSecurityCode: 3008,
    isDefault: true,
    userId: 9,
  },
  {
    method: 'stripe',
    ccNum: '5048371214619874',
    ccExpMonth: 4,
    ccExpYear: 2027,
    ccSecurityCode: 6602,
    isDefault: true,
    userId: 28,
  },
  {
    method: 'credit/debit card',
    ccNum: '5048372999249259',
    ccExpMonth: 4,
    ccExpYear: 2026,
    ccSecurityCode: 9740,
    isDefault: false,
    userId: 40,
  },
];

module.exports = payments;