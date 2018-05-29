const parse = require('./index')

const testData = [{
  input: "The suspect shot himself in the foot when trying to unjam his AK-47",
  expected: [{
    "ngram": "AK-47",
    "value": {
      "id": "AK-47",
      "label": {
        "en": "AK-47"
      },
      "description": {
        "en": "Union of Soviet Socialist Republics - Mikhail Kalashnikov - 1946-1948 - Assault Rifle - 7.62×39mm: Considered to be the first assault rifle ever mass-produced."
      },
      "aliases": {
        "en": [
          "AK-47"
        ]
      },
      "category": "assault rifle"
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 12,
      "begin": 62,
      "end": 67
    }
  }]
}, {
  input: "Le HK G36, capable de tirer 750 balles à la minute et jusqu'à 500 mètres, fabriqué par la société allemande Heckler & Koch, deviendrait imprécis en cas de surchauffe.",
  expected: [{
    "ngram": "HK G36",
    "value": {
      "id": "HK G36",
      "label": {
        "en": "HK G36"
      },
      "description": {
        "en": "Germany - Assault Rifle - 5.56×45mm NATO"
      },
      "aliases": {
        "en": [
          "HK G36"
        ]
      },
      "category": "assault rifle"
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 1,
      "begin": 3,
      "end": 9
    }
  }]
}]


test('extract weapons', () => Promise.all(
  testData.map(async ({ input, expected }) => expect(await parse(input)).toEqual(expected))
))
