---
tags:
  - osrs
---

osrs-db is a data collection project for Old School Runescape. the goal of the project is to create a low maintenance and machine readable database of all items, monsters, and other data in the game.

it should consist of two types of data:

- static data: data that does not change over time, such as item names, item ids, etc.
- dynamic data: data that changes over time, such as item prices, player stats, etc.

personal note: you already have some code written for this its called `runegraph` there is also a potential repo at <https://github.com/wvanderp/runegraph>
    there is also code in a folder called `osrs-db` currently not on github.

## static data

static data should be stored in the github repository in a machine readable format, such as json. this data should be updated whenever a new item is added to the game, or an existing item is changed.

the source of the data should be multifaceted, and include:

- the game's cache
- runelite client
- the osrs wiki
- personal experience

a specific example of static data is the navigation mesh for the game.

## dynamic data

dynamic data should be stored in a database. this data is automatically collected by a runelite plugin, and stored in a database. 
intreating data points include:

- player stats
- gear setups
- player locations

a secondary goal for the dynamic data is to fact check the static data. for example, if the static data says that a certain item is only obtainable after a certain quest, but the dynamic data shows that a player has that item, then the static data is incorrect.

### posable setup

the runelite plugin collects the data and sends it to a serverless function. that serverless function then stores the data in a database.

then there are workers that run the dynamic data against the static data, and update the static data if it is incorrect.

### side projects

the data collected by the runelite plugin could be used to create a web app that shows intreating stats about the game.

for example,

- the most popular gear setups
- the most popular locations
- average combat level of players in a certain area
- most popular items per level
