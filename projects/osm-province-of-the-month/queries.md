## unmarked crossings

```overpassql
[out:json][timeout:25];

area(id:3600047540)->.searchArea;

nwr["footway"="crossing"][!"crossing:markings"](area.searchArea);
nwr["highway"="crossing"][!"crossing:markings"](area.searchArea);

out meta geom;
```

```
In this challenge, we look at unmarked crossings.
```

```
In this challenge, we look at unmarked crossings.

Use ID to check on the crossing and make the recommended changes.

in addition, you can look to mark how crossing is actually marked
```

## roof no layer

```overpassql
[out:json][timeout:25];

area(id:3600047540)->.searchArea;

nwr["building"="roof"][!"layer"](area.searchArea);

out meta geom;
```

```
In this challenge, we look at roofs without layer tags.
```

```
In this challenge, we look at roofs without layer tags.

Use ID to check on the roof and make the recommended changes.

In addition, you can fix any additional errors reported by ID.
```

## geldmaat

```
[out:json][timeout:25];

area(id:3600047540)->.searchArea;

nwr["amenity"="atm"]["operator:wikidata"!="Q74051230"](area.searchArea);

out meta geom;
```

```
In this challenge, we check on the ATMs in Drenthe.
```

```
In this challenge, we check on the ATMs in Drenthe.

Check on the available image sources in ID, like Mapillary and Bing.

Geldmaat started replacing ATMs around 2019 and finished in 2022. so keep this in mind when researching

It can also happen that the atm is removed.
```