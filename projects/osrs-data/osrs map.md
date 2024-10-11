---
tags:
  - Osrs
---

# OSRS Map

The idea here is to recreate the map view from old school Runescape from scratch and then integrate other features into it.

The steps are:

- Parse the osrs cache to get the map and position of entities
- Render the base map
- Find the add the positions of the entries to the map
- Make a web app to show it

## Current problems

How the hell do we work the the caches

## Useful links

<https://archive.openrs2.org/>
To find cashes

<https://docs.rs/rs2-cache/latest/rs2cache/all.html>
For cache reading

<https://oldschool.runescape.wiki/w/RuneScape:Map>
Documentation from osrs wiki

<https://docs.google.com/document/d/1xv7iVBkG6eWDrXFhIYi77AVodJc0D-4Aqn0ncZXKJfw/edit#heading=h.kk1966kbedef>
A doc describing the process of creating the map in general and some other ideas

**shortest path plugin**
the shortest path plugin has a easy way of generating the collision map
https://github.com/Skretzo/shortest-path/issues/15