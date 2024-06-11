---
tags:
  - Guide
---

run a overpass query like so:

```overpass
[out:csv('brand', 'brand:wikidata', 'operator', 'operator:wikidata')]
[timeout:25];
{{geocodeArea:netherlands}}->.searchArea;
nwr["amenity"="charging_station"](area.searchArea);
out body;
```

you will get a csv file witch can be opened in excel and analysed