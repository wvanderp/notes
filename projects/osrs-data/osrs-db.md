---
tags:
  - Osrs
---

# OSRS DB

OSRS-DB is a data collection project for Old School Runescape. The goal is to create a low-maintenance, machine-readable database of all items, monsters, and other data in the game.

It should consist of two types of data:

- Static data: data that does not change over time, such as item names and IDs.
- Dynamic data: data that changes over time, such as item prices, player stats, etc.

**Personal note**: You already have some code written for this. It's called `runegraph`. There is also a potential repo at <https://github.com/wvanderp/runegraph>.

There is also code in a folder called `osrs-db,` which is currently not on Git Hub.

## Static data

Static data should be stored in the GitHub repository in a machine-readable format, such as JSON. This data should be updated whenever a new item is added to the game or an existing item is changed.

The source of the data should be multifaceted, and include:

- The game's cache
- Runelite client
- The osrs wiki
- Personal experience

A specific example of static data is the navigation mesh for the game.

## Dynamic data

Dynamic data should be stored in a database. A Runelite plugin automatically collects this data and stores it in a database.
Intreating data points include:

- Player stats
- Gear setups
- Player locations

A secondary goal for the dynamic data is to fact-check the static data. For example, suppose the static data says that a particular item is only obtainable after a specific quest, but the dynamic data shows that a player has that item. In that case, the static data is incorrect.

### Possible setup

The Runelite plugin collects the data and sends it to a serverless function, which stores it in a database.

Then, some workers run the dynamic data against the static data and update the static data if it is incorrect.

### Side projects

The data collected by the Runelite plugin could be used to create a web app that shows interesting stats about the game.

For example,

- The most popular gear setups
- The most popular locations
- Average combat level of players in a particular area
- Most popular items per level
