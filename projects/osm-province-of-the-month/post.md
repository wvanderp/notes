Ik denk dat we terug kunnen kijken op een succesvolle maand.

Ik heb ook wat statistiekjes voorbereid.

Als eerste een globale indicatie hoeveel data we hebben toegevoegd en het verschil met de maand ervoor.

Ik heb op geofabrik gekeken naar de `.pdf` extracts en de grootte vergeleken

2023-12-02: 56622593
2024-01-2: 56823952 (+201,359)  
2024-02-02: 57414159 (+590,207)

We kunnen zien dat er in vergelijking met december ongeveer 3 keer zoveel data is toegevoegd in Drenthe.

Ook heb ik aan omscha gevraagd hoeveel change sets er waren in Drenthe.

December: 897
Januari: 1593

Hier zien we ook dubbel zoveel activiteit.

Als laatste wil ik nog wat licht schijnen op mijn eigen projecten

```
Drenthe - unmarked crossings
Drenthe - unmarked crossings 2
Drenthe - roof no layer
Drenthe - geldmaat
no wikidata brand or opperator
```

Ik heb mijn ongenoegen over de grote hoeveelheid crossing warnings in ID al een keer uitgesproken. Dus ik heb er wat aan gedaan.

In eerste instantie leek heb best goed te doen er waren maar 192 plekken waar er iets moest gebeuren. Langzaam ze allemaal met ID afgegaan en voorzien van een tag. Hierbij ben ik verder gegaan dan `crossing:markings=no & yes` en heb ook echt opgeschreven wat de marking waren (`zebra`, `dashes` of `dots`)

Maar daarna kwam ik erachter dat naast `footway=crossing` ook `highway=crossing` bestond, dit leverde nogmaals 147 taken op.

Ook ben ik erachter gekomen dat het sneller is om josm uit te rusten met een filter op crossing en ze dan allemaal te fixen in een gebied dan gericht met maproulette te werken. Maproulette is goed om een gebied te kiezen en dan dat gebied te fixen. Een nadeel hiervan is dat het project wel vaak herbouwd moet worden.

No roof was 33 keer ID opstarten

De regelmaat was een veel meer werk dan gedacht. Je kan op de geldmaat site opzoeken of dat er een geldmaat zit maar dit kost tijd. Ook het verifiëren met open source Street view duurt lang en werkt vaak niet. Misschien moet ik dit in de toekomst omgekeerd doen. Beginnen op de geldmaat site en dan osm bijwerken.

In de laatste dagen heb ik `no wikidata brand or operator` toegevoegd. Dit is een uitbreiding en specificering van mijn `no wikidata brand` challenge. In deze challenge staan alle entities die wel een `brand` of `operator` hebben maar geen `brand:wikidata` of `operator:wikidata`.

Dit resulteren in een gigantische **5380** taken waar ik niet op gerekend had. Maar wat blijkt nu alle rijkswegen en rails hebben een operator tag `operator=Rijkswaterstaat` en `operator=ProRail` en deze hebben geen `operator:wikidata` gekregen.

Ook beschikt ID niet over een present voor deze entities. Dus ik moet op meerdere vlakken een discussie beginnen.

Als eerste hier ofdat we de operator wikidata op de items willen hebben. En dan bij Name suggestion index om ze toe te voegen. En als laatste weer hier of dat we een sprong naar voren willen nemen door de tags op grote schaal aan te passen

Ik ben al begonnen met de Name suggestion index. (https://github.com/osmlab/name-suggestion-index/issues/9211) want als de infrastructuur bestaat dan is het makkelijker toevoegen.

Dan kan nu hier de discussie losbarsten (ook al misschien wel in een andere post)

In conclusie, ik heb veel plezier gehad met deze challenge en we hebben een hoop werk verzet.
Zie jullie allemaal in Flevoland


