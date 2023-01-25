# airport codes

there are many diffrent way of indentifieng airports with codes this page keeps a list of them

## IATA

[wikipedia](https://en.wikipedia.org/wiki/IATA_airport_code)

## ICAO

[wikipedia](https://en.wikipedia.org/wiki/ICAO_airport_code)

## WMO codes

[wikipedia](https://en.wikipedia.org/wiki/Location_identifier#WMO_station_identifiers)

## FAA LID

[wikipedia](https://en.wikipedia.org/wiki/Location_identifier#FAA_identifier)

these codes can be found here: <https://www.faa.gov/documentLibrary/media/Order/7350.9_w_Change_1_Loc_Id.pdf>

### FAA's Landing Facility Site Number

alias: FAA SITE NR  
[source](https://wiki.openstreetmap.org/wiki/Tag:aeroway%3Daerodrome)

this other number given to facitities.

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

## Transport Canada identifier

[wikipedia](https://en.wikipedia.org/wiki/Location_identifier#Transport_Canada_identifier)  
[wikidata](https://www.wikidata.org/wiki/Q55773856)  
alias: TC LID

seems to only be pressent if there is no ICAO indentifier

## Direction General of Civil Aeronautics Code

[wikipedia](https://en.wikipedia.org/wiki/Location_identifier#Direction_General_of_Civil_Aeronautics_Code)  
[wikidata](https://www.wikidata.org/wiki/Q18222825)

not much is known about these codes because it is all in spanish

## Russian location identifier

[wikipedia](https://en.wikipedia.org/wiki/Location_identifier#Russian_location_identifier)  

## Hellenic Civil Aviation Authority airport code

[wikidata](https://www.wikidata.org/wiki/Property:P7667)  

## Argentinean NCAA Airport code

[wikidata](https://www.wikidata.org/wiki/Q5796779)

## CIAD

[wikidata](https://www.wikidata.org/wiki/Q113950896)  
full name: code de l'administration nationale civile du Brésil

## our airports

[website](https://ourairports.com/)
[wikidata](https://www.wikidata.org/wiki/Q19801308)

our airports has three identifiers that are different from the ones listed above

### id

first they have the `id` witch is a numeric id for every airport in there database.
this will stay the same even as the codes change

### ident

then they have `ident` witch will be the ICAO if its avalibol. if the airport does not have a ICAO code then it will be a internaly generated code.
this code will be build from the country code and the incrementd four digit number seperated by a dash `-`.  
so the format is `xx-xxxx`. and the regex is `[A-Za-z]{2}-[0-9]{4}`

this same format is also used by [https://metar-taf.com](https://metar-taf.com/) altough they wrongly state that this is the icao code of the airport

### gps code

the last indentifier they have is the `gps_code` this is a random collection of all the above mentioned codes.
