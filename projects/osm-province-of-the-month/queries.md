# queries

`Friesland`

```markdown
This is a project for [Provincie van de Maand - Friesland](https://community.openstreetmap.org/t/provincie-van-de-maand-friesland/109936/1)
```

## Netherlands - Unmarked crossings

```overpassql
[out:json][timeout:25];

area(id:3600047796)->.searchArea;

nwr["footway"="crossing"][!"crossing:markings"](area.searchArea);
nwr["highway"="crossing"][!"crossing:markings"](area.searchArea);

out meta geom;
```

```markdown
In this challenge, we look at unmarked crossings.
```

```markdown
In this challenge, we look at unmarked crossings.

Use ID to check on the crossing and make the recommended changes.

In addition, you can look to mark how crossing is actually marked.

`crossing:markings=no`  
`crossing:markings=zebra`  
`crossing:markings=dashes`  
`crossing:markings=dots`  
```

```markdown
looking at unmarked crossings
```

## Netherlands - Roof without a layer

```overpassql
[out:json][timeout:25];

area(id:3600047796)->.searchArea;

nwr["building"="roof"][!"layer"](area.searchArea);

out meta geom;
```

```markdown
In this challenge, we look at roofs without layer tags.
```

```markdown
In this challenge, we look at roofs without layer tags.

Use ID to check on the roof and make the recommended changes.

In addition, you can fix any additional errors reported by ID.
```

```markdown
Looking at roofs without layer tag
```

## Netherlands - Geldmaat

```overpassql
[out:json][timeout:25];

area(id:3600047796)->.searchArea;

nwr["amenity"="atm"]["operator:wikidata"!="Q74051230"](area.searchArea);

out meta geom;
```

```markdown
In this challenge, we check on the ATMs in Drenthe.
```

```markdown
In this challenge, we check on the ATMs in Drenthe.

Check on the available image sources in ID, like Mapillary and Bing.

Geldmaat has a map available at:
https://www.locatiewijzer.geldmaat.nl/nl/

Geldmaat started replacing ATMs around 2019 and finished in 2022. so keep this in mind when researching

It can also happen that the atm is removed.
```

```markdown
Check on all Not Geldmaat ATMs
```

## Netherlands - No wikidata for brand or operator

```overpassql
[out:json]
[timeout:25000];
area(id:3600047796)->.searchArea;
(
  node
    ["brand"]
    ["brand:wikidata"!~".*"]
    (area.searchArea);
  way
    ["brand"]
    ["brand:wikidata"!~".*"]
    (area.searchArea);
  relation
    ["brand"]
    ["brand:wikidata"!~".*"]
    (area.searchArea);
  node
    ["operator"]
    ["operator:wikidata"!~".*"]
    (area.searchArea);
  way
    ["operator"]
    ["operator:wikidata"!~".*"]
    (area.searchArea);
  relation
    ["operator"]
    ["operator:wikidata"!~".*"]
    (area.searchArea);
);
out meta geom;
```

```markdown
In this challenge, we if all the brands and operators have a wikidata tag
```

```markdown
In this challenge, we look at objects that already have a brand or operator but no `brand:wikidata` or `operator:wikidata` tags. 

Use the features of the ID editor to your advantage.

If the brand does not exist in the name suggestion index, then it will not show in the ID.
Please leave a comment if that is the case.

If there is no Wikidata item for the brand, then you can mark the task as `no issue`.
```

```markdown
add wikidata to brands and operators
```

## Netherlands - parking spaces with a weird capacity

```overpassql
[out:json][timeout:60];
area(id:3600047796)->.searchArea;
(
  way["amenity"="parking_space"](area.searchArea)(if: number(t["capacity"]) > 1);
  nwr["amenity"="parking_space"]["capacity"="0"](area.searchArea);
  nwr["amenity"="parking_space"]["capacity"~"[a-zA-Z]"](area.searchArea);
);
out geom;
```

```markdown
In this challenge, we look at parking spaces with a weird capacity.
```

```markdown
Check on the parking spaces with a weird capacity

- `capacity=0`
- `capacity>1`
- `capacity is not a number`

If necessary, split the parking space into multiple parking spaces with the correct capacity.
Or add a parking lot if the capacity is very high.
```

```markdown
Check on the parking spaces with a weird capacity
```

## Netherlands - Missing street names

```overpassql
[out:json][timeout:60];
area(id:3600047796)->.searchArea;
(
  way[highway~"(residential|tertiary)"][!name][junction!=roundabout][!"noname"](area.searchArea);
);
out geom;
```

```markdown
In this challenge, we look at missing street names.
```

```markdown
In this challenge, we look at missing street names.

Add the street name to the street.
The street can be a continuation of a street that already has a name.
Or look at Open streetview images, like Mapillary or KartaView, to see if the street has a sign.

If you can't find the street name, then mark the task as `Could not complete`.
If the street has no name, then think of applying the `noname=yes` tag.
```

```markdown
Check on the missing street names
```

## Netherlands - Ongoing construction

```overpassql
[out:json][timeout:60];
area(id:3600047796)->.searchArea;
(
  way[building][construction](area.searchArea)(if: number(t["start_date"]) < 2022);
);
out geom;
```

```markdown
In this challenge, we look at ongoing construction.
```

```markdown
In this challenge, we look at ongoing construction.

Check if the construction is still ongoing.

If the construction is still ongoing, think of applying the `check_date` with the date of the source.

If the construction is finished, then remove the `construction` tag and apply any appropriate tags.
```

```markdown
Check on the ongoing construction
```

## Netherlands - Charger missing operator wikidata tag

```overpassql
[out:json][timeout:25];

area(id:3600047796)->.searchArea;

nwr["amenity"="charging_station"]["operator"][!"operator:wikidata"](area.searchArea);

out meta geom;
```

```markdown
In this challenge, we look at chargers without an operator wikidata tag.
```

```markdown
In this challenge, we look at chargers without an operator wikidata tag.

Use ID to check on the charger and make the recommended changes.

In addition, you can fix any additional errors reported by ID.

If the operator does not exist in the name suggestion index, then it will not show in the ID.

If there is no Wikidata item for the operator, then you can mark the task as `no issue`.
```

```markdown
Check on the chargers without an operator wikidata tag
```
