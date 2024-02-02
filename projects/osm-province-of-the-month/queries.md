# queries

`Flevoland`

```markdown
This is a project for [Provincie van de Maand - Flevoland](https://community.openstreetmap.org/t/provincie-van-de-maand-flevoland/108781/1)
```

## Unmarked crossings

```overpassql
[out:json][timeout:25];

area(id:3600047407)->.searchArea;

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

## Roof without a layer

```overpassql
[out:json][timeout:25];

area(id:3600047407)->.searchArea;

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

## Geldmaat

```overpassql
[out:json][timeout:25];

area(id:3600047407)->.searchArea;

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

## No wikidata for brand or opperator

```overpassql
[out:json]
[timeout:25000];
area(id:3600047407)->.searchArea;
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