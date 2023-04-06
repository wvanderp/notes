# airport codes

There are many different ways of identifying airports with codes. This page keeps a list of them.

## IATA

IATA (International Air Transport Association) codes are three-letter codes used to identify airports worldwide. They are primarily used for airline ticketing and baggage handling purposes. IATA codes are often used by travelers when searching for flights, as they provide a quick and easy way to identify airports.

[wikipedia](https://en.wikipedia.org/wiki/IATA_airport_code)

## ICAO

ICAO (International Civil Aviation Organization) codes are four-letter codes used to identify airports worldwide. Air traffic controllers and pilots primarily use them for flight planning and navigation. ICAO codes are more precise than IATA codes and are required for filing flight plans.

Shoutout to the special `ZZZZ` location, also called a `Zulu location`. It is used when the location in the flight plan does not have an ICAO identifier.

[wikipedia](https://en.wikipedia.org/wiki/ICAO_airport_code)

## WMO codes

WMO (World Meteorological Organization) codes are five-digit codes used to identify weather reporting stations, including airports. Meteorologists and weather forecasters primarily use them for weather observation and forecasting purposes.

[wikipedia](https://en.wikipedia.org/wiki/Location_identifier#WMO_station_identifiers)

## FAA LID

FAA LID (Federal Aviation Administration Location Identifier) codes are three- to four-letter codes used to identify airports in the United States. They are assigned by the FAA and are used for air traffic control purposes, as well as by pilots and airlines for flight planning and navigation purposes.

[wikipedia](https://en.wikipedia.org/wiki/Location_identifier#FAA_identifier)

These codes can be found here: <https://www.faa.gov/documentLibrary/media/Order/7350.9_w_Change_1_Loc_Id.pdf>

### FAA's Landing Facility Site Number

FAA's Landing Facility Site Number is a unique numeric identifier assigned by the FAA to each landing facility in the United States. It is used primarily for internal FAA purposes and is not widely used by pilots or airlines.

from [this document](https://www.faa.gov/documentlibrary/media/advisory_circular/150-5200-35/150_5200_35.doc) we learn:

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

alias: FAA SITE NR  
[source](https://wiki.openstreetmap.org/wiki/Tag:aeroway%3Daerodrome)

## Transport Canada identifier

Transport Canada identifier is a two- to four-letter code used to identify airports in Canada. It is assigned by Transport Canada and is used for air traffic control and by pilots and airlines for flight planning and navigation purposes.

It seems only to be present if there is no ICAO identifier.

alias: TC LID
[wikipedia](https://en.wikipedia.org/wiki/Location_identifier#Transport_Canada_identifier)  
[wikidata](https://www.wikidata.org/wiki/Q55773856)  

## Direction General of Civil Aeronautics Code

[wikipedia](https://en.wikipedia.org/wiki/Location_identifier#Direction_General_of_Civil_Aeronautics_Code)  
[wikidata](https://www.wikidata.org/wiki/Q18222825)

Only a little is known about these codes because it is all in Spanish.

## Russian location identifier

[wikipedia](https://en.wikipedia.org/wiki/Location_identifier#Russian_location_identifier)  

## Hellenic Civil Aviation Authority airport code

[wikidata](https://www.wikidata.org/wiki/Property:P7667)  

## Argentinean NCAA Airport code

[wikidata](https://www.wikidata.org/wiki/Q5796779)

## CIAD

[wikidata](https://www.wikidata.org/wiki/Q113950896)  
full name: code de l'administration nationale civile du Brésil

## Our airports

[website](https://ourairports.com/)
[wikidata](https://www.wikidata.org/wiki/Q19801308)

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
