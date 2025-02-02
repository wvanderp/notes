---
tags:
  - OSM
aliases:
  - province of the month
---

# queries

Originally this was a collection of queries for the province of the month project.
I would manually edit these queries and create new projects for each province.
But now I switched to just creating one project for the whole of the Netherlands.

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

Use iD to check on the crossing and make the recommended changes.

In addition, you can look to mark how the crossing is actually marked.

`crossing:markings=no`  
`crossing:markings=zebra`  
`crossing:markings=dashes`  
`crossing:markings=dots`  
```

```markdown
Looking at unmarked crossings
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

Use iD to check on the roof and make the recommended changes.

In addition, you can fix any additional errors reported by iD.
```

```markdown
Looking at roofs without layer tags
```

## Netherlands - Geldmaat

```overpassql
[out:json][timeout:25];

area(id:3600047796)->.searchArea;

nwr["amenity"="atm"]["operator:wikidata"!="Q74051230"](area.searchArea);

out meta geom;
```

```markdown
In this challenge, we check on the ATMs in the Netherlands.
```

```markdown
In this challenge, we check on the ATMs in the Netherlands.

Check on the available image sources in iD, like Mapillary and Bing.

Geldmaat has a map available at:
https://www.locatiewijzer.geldmaat.nl/nl/

Geldmaat started replacing ATMs around 2019 and finished in 2022, so keep this in mind when researching.

It can also happen that the ATM is removed.
```

```markdown
Check on all non-Geldmaat ATMs
```

## Netherlands - No wikidata for brand or operator

```overpassql
[out:json][timeout:25000];
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
In this challenge, we check if all brands and operators have a wikidata tag.
```

```markdown
In this challenge, we look at objects that already have a brand or operator but no `brand:wikidata` or `operator:wikidata` tags. 

Use the features of the iD editor to your advantage.

If the brand does not exist in the Name Suggestion Index, it will not show in iD.
Please leave a comment if that is the case.

If there is no Wikidata item for the brand, mark the task as `no issue`.
```

```markdown
Add wikidata to brands and operators
```

## Netherlands - Parking spaces with a weird capacity

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
Or look at OpenStreetView images, like Mapillary or KartaView, to see if the street has a sign.

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

If it is, consider applying the `check_date` tag with the date of your source.

If the construction is finished, remove the `construction` tag and apply any appropriate tags.
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
In this challenge, we look at charging stations without an operator wikidata tag.
```

```markdown
In this challenge, we look at charging stations without an operator wikidata tag.

Use iD to check the charging station and make the recommended changes.

In addition, you can fix any additional errors reported by iD.

If the operator does not exist in the Name Suggestion Index, it will not show in iD.

If there is no Wikidata item for the operator, mark the task as `no issue`.
```

```markdown
Check on the chargers without an operator wikidata tag
```

## Netherlands - Playground with deprecated tags

```overpassql
[out:json][timeout:25];

area(id:3600047796)->.searchArea;

nwr["playground:theme"="playground"](area.searchArea);

out meta geom;
```

```markdown
In this challenge, we remove the deprecated tags from the playgrounds.
```

```markdown
In this challenge, we remove the deprecated tags from the playgrounds.

The `playground:theme=playground` tag is deprecated because it's implied by the `leisure=playground` tag.

Use iD to check on the playground and make the recommended changes.

In addition, you can fix any additional errors reported by iD.

If the playground does not exist in the Name Suggestion Index, then it will not show in iD.
```

```markdown
Check on the playgrounds with deprecated tags
```

## Netherlands - Old traffic enforcement cameras

```overpassql
[out:json][timeout:2500];
area(id:3600047796)->.searchArea;

nwr["highway"="speed_camera"](area.searchArea)->.all;
(.all; - nwr.all(newer:"2021-01-01T00:00:00Z"););

out geom meta;
```

```markdown
In this challenge, we examine whether old traffic enforcement cameras still exist.
```

```markdown
In this challenge, we examine whether old traffic enforcement cameras still exist.

According to the Dutch Prosecution Office, there are approximately 600 traffic enforcement cameras in the Netherlands.

However, OpenStreetMap has 800+ traffic enforcement cameras. We need to check if the old cameras are still in use.

This challenge shows cameras that were last updated before 2021-01-01. Check if they still exist and if they have the correct tags.

See [the OSM Wiki for highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) for the correct tags.
```

```markdown
Check on old traffic enforcement cameras in the Netherlands
```
