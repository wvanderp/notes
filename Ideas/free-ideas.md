# Free Ideas

These are free ideas. You can have them till I want them back.

## The war a year ago

A podcast or blog that follows the Ukraine war as it happened a year ago. It is especially interesting to see what the pundits said and if they were right.

In general, following wars in real time is fascinating.

## Popcorn Time on the BlockChain

It can't be taken down if you store the information that Popcorn Time uses on the blockchain or in the DHT.

The big problem with this idea is that preventing people from poisoning the database is hard.

We can use a dht crawler to find the actual torrents and then use the blockchain to store the metadata of what torrent contains what.

[worked out in "Recreating popcorn time using DHT and Proof of Seed"](Popcorntime-with-DHT.md)

## Blurry photo finder

An app that separates all the blurry photos from the sharp ones. There doesn't seem to be an app for this.

Use an FFT or machine learning.

## Play chess against old engines

It would be fun to see old chess engines play against each other.

Then, we can compare the different old implementations.

See also: <https://github.com/wvanderp/Accent-Chess>

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

- Ten past a quarter to two
- Four o'clock in London
- The exact moment of death of Archduke Ferdinand
- In thirty-five minutes till five past one
- 4 minutes till the whole hour
- 982 minutes since midnight
- Just shy of two-thirds into the journey from sunrise to sunset.
- The hands on the clock are pointing down
- The time in another timezone

Another way is to show the time visually. Like:

- A binary clock
- Hex clock
- A clock that shows the time in Roman numerals
- A sundial
- A clock that only contains half of the day
- A clock that has the numbers in the wrong order
- Just the sun in the sky
- Percentage of the cock
- Ange of the hands
- Foreign language

- Live of clock
- Google Street view of a clock
- Links to songs
- Analog 24 hour clock

### Implementation

We need a definition file to define the times and how to tell them. We can have functions that extend a time to include some time before or after it. Like `if it were 1945 now, it would be 5 minutes till the fat man was dropped on Nagasaki`.

We also need a little linting program that checks the clock coverage. It should be possible to tell the time in every minute of the day and that we have a few options for each minute.

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
Chatgpt is mostly correct, but not always, so a human must verify the address. (maybe nominatum can be used to check if it's even close.)  
It is still not machine-readable, so a human still needs to be in the loop.

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

## Old-time NTP servers

NTP servers are made to provide the most accurate time from the best sources like GPS and atomic clocks.

But wouldn't it be fun to turn your grandfather's clock into a ntp server? Or have a portable one based on a pocket watch.

So the current ideas are:

- Grandfather clock
- Pocket watch
- Sundial
- Hourglass
- Water clock
- Candle clock
- Clock tower
- Church bell

## An art installation where we digitize the whole museum

We ask visitors to take pictures of the whole museum. Then, we stitch them together into a 3D model of the museum. Then, we can use this to create a virtual museum tour.

The fancy idea is to create a virtual tour of the museum so that the people who can't visit the museum can still see my art installation.

The exhibition starts with instructions on downloading the app and taking pictures that are the most useful for photogrammetry. Then, we ask them to take photos of the whole museum. Then, we stitch them together into a 3D model of the museum. In another room, we have a VR headset that allows you to walk through the museum.

## Lifelog

A life database that tracks everything about you: it's like a combination of Google Timeline and Google My Activity.

It tracks your location, media consumption, visited pages, sleep pattern, whom you have met, and heart rate, and it's recording audio.

It's like the ultimate surveillance service, but you are surveilling yourself.

There should be room to add text like a journal for the day where the events can trigger stories like Apple's journaling apps.

## Tourism collection log

A list of what you must visit and do to complete an area.

This would be an app where you either say where you are going, and the app creates a log, or save the things you do.

They can be on a country scale or very local, like a town.

Examples include

- Hold up the leaning tower of Pisa
- Buy a 1$ slice in New York
- Visit the Louvre

The app will show you the best spots to complete the actions.

## LLM dyslexia benchmark

Benchmarks help models improve in certain areas. One of the ways this could be done is by helping people with dyslexia.

Some of the tests could be.

- Check against spell check / Grammar check.
  - Because LLMs learn from the internet, and their spelling is wrong
- Don't propagate spelling errors from the prompt to the response
- Don't use long words when asked
- Generate fluffy text with a lot of space
- Use the LLM as a spell and Grammar checker

## Realtime game data capture


During games it might be interesting to capture you gold and have a graph on you second screen.
with this data you can make tactical disccions with this data.

the implementation would be in python with a description file to instruct what to capture and what to display.

see [[screen-reader]] 