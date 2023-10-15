# Free Ideas

These are free ideas. You can have them till I want them back.

## The war a year ago

A podcast or blog that follows the Ukraine war as it happened a year ago. It is especially interesting to see what the pundits said and if they were right.

In general, following wars in real time is fascinating.

## Popcorn Time on the BlockChain

It can't be taken down if you store the information that Popcorn Time uses on the blockchain or in the DHT.

The big problem with this idea is that preventing people from poisoning the database is hard.

We can use a dht crawler to find the actual torrents and then use the blockchain to store the metadata of what torrent contains what.

## Blurry photo finder

An app that separates all the blurry photos from the sharp ones. There doesn't seem to be an app for this.

Use an FFT or machine learning.

## Play chess against old engines

It would be fun to see old chess engines play against each other.

Then, we can compare the different old implementations.

see also: <https://github.com/wvanderp/Accent-Chess>

## flat photo stitcher

No app stitches photos of a flat service like a whiteboard, newspaper, or graffiti.

Match the cameras, position them in 3D space, and then project the views onto a flat surface.

## Photogrammetry where you can help

With most photogrammetry programs, you can't help the program. But what if you could block off areas for points or cameras? That would limit the possibilities and thus reduce the computation requirements and increase accuracy.

## A Twitter bot that summarizes Parliament

It's important to be informed. But parliamentary documents are boring. So let's use chatgpt to summarize them and spice them up.

A potential problem is that Twitter needs to be paid for the bot access. And that chatgpt does not allow big inputs.

I suggest making it a mastodon bot.

## A clock that tells time but is also difficult

A regular or speaking clock tells the time in a difficult way.

Like:

- ten past a quarter to two
- Four o'clock in London
- The exact moment of death of Archduke Ferdinand
- In thirty-five minutes till five past one
- 4 minutes till the whole hour
- 982 minutes since midnight
- Just shy of two-thirds into the journey from sunrise to sunset.
- the hands on the clock are pointing down
- the time in another timezone

Another way is to show the time visually. Like:

- a binary clock
- a clock that shows the time in Roman numerals
- a sundial
- a clock that only contains half of the day
- a clock that has the numbers in the wrong order
- just the sun in the sky

### Implementation

We need a definition file to define the times and how to tell them. We can have functions that extend a time to include some time before or after it. Like `if it were 1945 now, it would be 5 minutes till the fat man was dropped on Nagasaki`.

We also need a little linting program that checks the coverage of the clock. It should be possible to tell the time in every minute of the day and that we have a few options for each minute.

## Picnic prediction integration

When you use Picnic to order groceries, you must know what items you need, but if you analyze your past orders, you can predict what you need.

This is handy because now you never have to think about what you need to buy.

## A dating app based on latent space

A dating app based on latent spaces uses complex algorithms to analyze user preferences and create matches based on shared interests and qualities. This app takes a data-driven approach to matchmaking and aims to increase the likelihood of successful matches.

## Open source Akinator

The Celebrity guessing genie is based on closed data.

I believe that it is possible to make an alternative based on wikidata.

This has two advantages:

First, it is an already existing dataset.

Secondly, it is a fun way to contribute to wikidata through the wisdom of the crowd.

Two disadvantages

You need to preprocess the data into a model like a decision tree. However, a decision tree is not flexible enough to recover from wrong answers.

And secondly, it is easy to poison wikidata with the wrong data. If most people answer a question incorrectly, we accept it as accurate. However, there might be a verifiable source for the data.

## Use chatgpt to extract information for osm

```chatgpt
You will be provided with the text of a website of a restaurant. Please find the address of the restaurant, the opening hours, and the phone number.

Provide them in the following format.

House number:
Street:
City:
Phone number:
Opening hours:

Are these instructions clear?
```

This is the magic incantation to make chatgpt extract information from websites. Then, you pass all text from the website into chatgpt, which will spit out some useful information.

There are only two problems with this:  
chatgpt is mostly correct, but not always, so A human still needed to verify the address. (maybe nominatum can be used to check if it's even close.)  
it is still not machine-readable, so a human still needs to be in the loop.

Some minimal research concludes that it works on websites with limited text. But when the website includes a restaurant's history or a menu, chatgpt goes off on its own and just summarizes that. So, some more work in crafting the instructions is needed.

## Credit crawl stitching

A program that stitches together the credit crawls of movies. You would see how long the credits are and how they are formatted.

Secondly, these images can be OCR'd to get the names of those who worked on the movie. This can be used to create a database of people who worked on movies.

Lastly, there are many badges at the end of the credits, and I need help reading them. If they stand still, I can read them.

### methods

Take screenshots of the credits and stitch them together. This might need to only be done based on the white parts of the image. But this takes much calculating power.

You can also install a scan line that saves that line every frame, but then it needs to move at least 1 px per frame.

## Alert as a service

It is surprisingly difficult to create a URL that will generate an HTML alert box.

So, I propose a service that will generate a URL that will generate an alert box. I call it alert as a service. (or aaas for short).

This site has two parts: a landing page where you can enter the alert text and generate the URL. And an API endpoint that will serve the alert box.

The URL will be something like this: `wvanderp.github.io/alert-as-a-service?text=hello%20world`, generating an alert box with the text "hello world".

## old time NTP servers

NTP servers are made to provide the most accurate time from the best sources like GPS and atomic clocks.

But wouldn't it be fun to turn your grandfather's clock into a ntp server? Or have a portable one based on a pocket watch.

so the current ideas are:

- grandfather clock
- pocket watch
- sundial
- hourglass
- water clock
- candle clock
- a clock tower
- a church bell

## a art installation where we digitize the whole museum

We ask visitors to take pictures of the whole museum. Then, we stitch them together into a 3D model of the museum. Then, we can use this to create a virtual tour of the museum.

the fancy idea is: we create a virtual tour of the museum, so that the people that cant come to the museum can still visit my art installation.

the exhibition starts with a instructions on how to download the app and how to take pictures that are the most useful for photogrammetry. Then, we ask them to take pictures of the whole museum. Then, we stitch them together into a 3D model of the museum. and in a other room we have a VR headset where you can walk through the museum.

