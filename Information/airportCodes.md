---
aliases:
  - aip
---

# Airport codes

There are many different ways of identifying airports with codes. This page keeps a list of them.

## IATA

IATA (International Air Transport Association) codes are three-letter codes used to identify airports worldwide. They are primarily used for airline ticketing and baggage handling purposes. Travelers often use IATA codes when searching for flights, as they provide a quick and easy way to identify airports.

[Wikipedia](https://en.wikipedia.org/wiki/IATA_airport_code)

## ICAO

ICAO codes (International Civil Aviation Organization) are four-letter codes used to identify airports worldwide. Air traffic controllers and pilots primarily use them for flight planning and navigation. ICAO codes are more precise than IATA codes and are required for filing flight plans.

Shoutout to the special `ZZZZ` location, also called a `Zulu location`. It is used when the area in the flight plan does not have an ICAO identifier.

All the ICAO codes are available in `Location Indicators (Doc 7910/189)`. The only problem is that this document is a cool 294$.
An illegal version is available on the internet archive: <https://archive.org/details/doc-7910-icao-location-indicator/>

[Wikipedia](https://en.wikipedia.org/wiki/ICAO_airport_code)

## WMO codes

`WMO codes` (`World Meteorological Organization`) are five-digit codes used to identify weather reporting stations, including airports. Meteorologists and weather forecasters primarily use them for weather observation and forecasting purposes.

[Wikipedia](https://en.wikipedia.org/wiki/Location_identifier#WMO_station_identifiers)

## FAA LID

`FAA LID` (`Federal Aviation Administration Location Identifier`) codes are three- to four-letter codes used to identify airports in the United States. They are assigned by the FAA and are used for air traffic control purposes, as well as by pilots and airlines for flight planning and navigation purposes.

[Wikipedia](https://en.wikipedia.org/wiki/Location_identifier#FAA_identifier)

These codes can be found here: <https://www.faa.gov/documentLibrary/media/Order/7350.9FF_LOCID_dtd_10_5_23.pdf> (found on <https://www.faa.gov/air_traffic/publications/>)

### FAA's Landing Facility Site Number

`FAA's Landing Facility Site Number` is a unique numeric identifier assigned by the FAA to each landing facility in the United States. It is used primarily for internal FAA purposes and is not widely used by pilots or airlines.

From [this document](https://www.faa.gov/documentlibrary/media/advisory_circular/150-5200-35/150_5200_35.doc) we learn:

```plain
This is a number that contains a one-letter suffix.
The number is assigned to the airport in ascending order depending on the state and the associated city.
The number is stored in a computer for the purpose of producing computer reports of airports in alphabetical order by state and associated city.
The suffix indicates the primary use of the facility.  

For example: FAA SITE NR: 10430.A

A = Airport
B = Balloonport
C = Seaplane Base
G = Gliderport
H = Heliport
S = Stolport
U = Ultralight Flightpark
```

Alias: `FAA SITE NR`  
[source](https://wiki.openstreetmap.org/wiki/Tag:aeroway%3Daerodrome)

## Transport Canada identifier

Alias: `TC LID`, `TCLID`
[Wikipedia](https://en.wikipedia.org/wiki/Location_identifier#Transport_Canada_identifier)  
[Wikidata](https://www.wikidata.org/wiki/Q55773856)

Transport Canada identifier is a two- to four-letter code used to identify airports in Canada. It is assigned by Transport Canada and is used for air traffic control and by pilots and airlines for flight planning and navigation purposes.

It seems only to be present if there is no ICAO identifier.

The TCLID can be looked up in the province-specific `CANADA FLIGHT SUPPLEMENT`

| link | province |
| ---- | ---- |
| <https://www.navcanada.ca/en/ecfs_01_en.pdf> | YUKON NORTHWEST TERRITORIES NUNAVUT |
| <https://www.navcanada.ca/en/ecfs_02_en.pdf> | BRITISH COLUMBIA |
| <https://www.navcanada.ca/en/ecfs_03_en.pdf> | ALBERTA SASKATCHEWAN MANITOBA |
| <https://www.navcanada.ca/en/ecfs_04_en.pdf> | ONTARIO |
| <https://www.navcanada.ca/en/ecfs_05_en.pdf> | QUEBEC |
| <https://www.navcanada.ca/en/ecfs_07_en.pdf> | ATLANTIC |

## Direction General of Civil Aeronautics Code

[Wikipedia](https://en.wikipedia.org/wiki/Location_identifier#Direction_General_of_Civil_Aeronautics_Code)  
[Wikidata](https://www.wikidata.org/wiki/Q18222825)

Only a little is known about these codes because they are all in Spanish.

## Russian location identifier

[Wikipedia](https://en.wikipedia.org/wiki/Location_identifier#Russian_location_identifier)  

## Hellenic Civil Aviation Authority airport code

[Wikidata](https://www.wikidata.org/wiki/Property:P7667)  

## Argentinean NCAA Airport code

[Wikidata](https://www.wikidata.org/wiki/Q5796779)

The national aerodrome code of the National Civil Aviation Administration (Argentina) is an airport designation code made up of three letters (AZ) that serve to identify the different aerodromes (legally authorized and enabled as such by the applicable aeronautical authority). (ANAC)) of Argentina.

[source for the codes](http://www.anac.gob.ar/anac/web/uploads/infraestructura_y_aerod/aerodromos/ad-publicos-octubre-2015.pdf)

## ARC

<https://en.wikipedia.org/wiki/List_of_airports_in_China>

China uses a code provided by  `Civil Aviation Administration of China`

TODO: expand

## CIAD

[Wikidata](https://www.wikidata.org/wiki/Q113950896)  
Full name: `code de l'administration nationale civile du Brésil`

## Our airports

[website](https://ourairports.com/)
[Wikidata](https://www.wikidata.org/wiki/Q19801308)

Ourairports has three identifiers that are different from the ones listed above.

### id

First, they have the `id`, a numeric id for every airport in their database.
This will stay the same even as the codes change.

### ident

Then they have `ident`. It will be the ICAO code if it's available. It will be an internally generated code if the airport does not have an ICAO code.
This code will be built from the country code and the incremented four-digit number separated by a dash `-`.  
So the format is `xx-xxxx`. and the regex is `[A-Za-z]{2}-[0-9]{4}`

This same format is also used by [https://metar-taf.com](https://metar-taf.com/), although they wrongly state that this is the ICAO code of the airport

### GPS code

The last identifier they have is the `gps_code`. This is a random collection of all the codes mentioned above.

## ALA code

aliases `AIRCRAFT LANDING AREAS` or `Y-CODE`

this might be a code use by the `Airservices Australia` for there airports but I cant verify that yet.

I might also be a subset of ICAO because the start of the ICAO code of Australia starts with Y.

[lookup document](https://www.airservicesaustralia.com/aip/current/ersa/LND__13JUN2024.pdf)