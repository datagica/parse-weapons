# Parse Weapons

If a weapon, license or copyright is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-weapons

## Usage

Example:

```javascript
await parse('Le HK G36, capable de tirer 750 balles à la minute')
```

Output:

```json
[
  {
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
  }
]
```
