# Free Ideas

These are free ideas. You can have them till I want them back.

## The war a year ago

A podcast or blog that follows the Ukraine war as it happened a year ago. It is especially interesting to see what the pundits said and if they were right.

In general, following wars in real time is fascinating.

## Popcorn Time on the BlockChain

It can't be taken down if you store the information that popcorn time uses on the Blockchain or in the DHT.

The big problem with this idea is that preventing people from poisoning the database is hard.

## blurry photo finder

An app that separates all the blurry photos from the sharp ones. There doesn't seem to be an app for this.

Use an FFT or machine learning.

## Play chess against old engines

It would be fun to see old chess engines play against each other.

Then we can compare the different old implementations.

## flat photo stitcher

No app stitches photos of a flat service like a whiteboard, newspaper, or graffiti.

Match the cameras, position them in 3d space, and then project the views onto a flat surface.

## Photogrammetry where you can help

With most photogrammetry programs, you can't help the program. But what if you could block off areas for points or cameras? That would limit the possibilities and thus reduce the computation requirements and increase accuracy.

## a Twitter bot that summarizes Parliament

It's important to be informed. But parliamentary documents are boring. So let's use chat gpt to summarize them and spice them up.

Potential problems are that Twitter needs to be paid for the bot access. And that chat gpt does not allow big inputs.

I suggest making it a mastodon bot.

## A clock that tells time but is also difficult

A regular or speaking clock tells the time in a difficult way.

Like

- ten past a quarter to two
- Four o'clock in London
- The exact moment of death of Archduke Ferdinand
- In thirty-five minutes till five past one
- 4 minutes till the whole hour

## Picnic prediction integration

When you use Picnic to order groceries, you must know what items you need, but if you analyze your past orders, you can predict what you need.

This is handy because now you never have to think about what you need to buy.

## A dating app based on latent space

A dating app based on latent spaces uses complex algorithms to analyze user preferences and create matches based on shared interests and qualities. This app takes a data-driven approach to matchmaking and aims to increase the likelihood of successful matches.

## open source Akinator

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

This is the magic incantation to make chat gpt extract information from websites. Then, you pass all text from the website into chatgpt, which will spit out some useful information.

There are only two problems with this:  
chatgpt is mostly correct, but not always, so A human still needed to verify the address. (maybe nominatum can be used to check if it's even close)  
it is still not machine-readable, so a human still needs to be in the loop.

Some minimal research concludes that it works on websites with limited text. But when the website includes a restaurant's history or a menu, chatgpt goes off on its own and just summarizes that. So some more work in crafting the instructions is needed.
