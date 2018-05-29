# Parse Weapons

*Extracts weapons from a text*

Example:

```
Le HK G36, capable de tirer 750 balles à la minute et jusqu'à 500 mètres
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
