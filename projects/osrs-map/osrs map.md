---
tags:
  - osrs
---

# OSRS Map

The idea here is to recrate the map view from old school runescape from scratch and then integrate other features into it.

the steps are:

- parse the osrs cache to get the map and position of entities
- render the base map
- find the add the positions of the entries to the map
- make a web app to show it

**Current problems**

how the hell do we work the the caches

## useful links

<https://archive.openrs2.org/>
to find cashes

<https://docs.rs/rs2-cache/latest/rs2cache/all.html>
for cache reading

<https://oldschool.runescape.wiki/w/RuneScape:Map>
documentation from osrs wiki

<https://docs.google.com/document/d/1xv7iVBkG6eWDrXFhIYi77AVodJc0D-4Aqn0ncZXKJfw/edit#heading=h.kk1966kbedef>
a doc describing the process of creating the map in general and some other ideas
