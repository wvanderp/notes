# Recreating popcorn time using DHT and Proof of Seed

I have had that idea for a long time because popcorn time was the favorite way to pirate our favorite movies and TV shows. The big problem with Popcorn Time was that it relied on a central database that all kinds of authorities could take down. because of that, there was never a reliable source of popcorn time because they were popping up and going down all over the place.

So, we already have a distributed way of gathering our torrent gathering peers for our torrents. So why don't we collect this movie and TV show database in a distributed way?

We can use the DHT to write down which torrents contain what TV shows. We use an external identifier to identify the TV shows, and then we have a JSON blob with information about the TV show and the torrents.

This could work because the DHT is freely writable. The only big problem with this is that it's freely writable by everybody, so malicious actors can just insert any movie, bad-quality torrents, or torrents with viruses. So, we need some way to control the quality of the submissions we get or to verify the quality of the submitters.

In Bitcoin, we have something called the proof of work, in which the client first needs to prove that he did a certain amount of work, and only after that does his block get accepted into the blockchain. I envision a similar way in BitTorrent, where a client would need to demonstrate a certain level of contribution to the network, such as seeding a specific amount of data, before their submissions are accepted. This would help ensure the quality and trustworthiness of the submissions.

In our vision, the submitters are not just contributors, but integral members of our community. We expect them to not only provide torrents but also seed the ones they like. This collaborative effort is what will make our decentralized system thrive.
So, what each client can do is keep note of how many gigabytes they downloaded from specific IP addresses. If you then include the public key in the torrent or the protocol, then you can assert which submitter of information is uploading how much data, and that gives you an idea about how trustworthy somebody is because if you put in the work to upload data, then you might care more about the community than somebody who publishes much information and does not work with torrents that they have uploaded.

There are some problems with this ID. We still need a shared repository of movies and TV shows to have a stable identifier for each TV show. Also, information like the title, episode titles, and artwork is important because having a search engine is nice, but if there is no UI for it, that's a problem. The problem is that you still have a centralized point where the system can fail. Although a bit of trust is given to the system, only the UI is a problem.

Another thing is that you also need to have an initial state. At first, you trust nobody in the network because nobody has earned your trust, and this means that you can't look anything up or have trust in the system.
If you have torrented before, you can gain that trust by already having a database of people who have uploaded stuff to you. But if you are completely clean, then you can either do a throw in the dark and get something, or maybe we can have a way of reading out what other people think about the submissions and this way, you can trust somebody else like a blog or a Reddit post to send you a list of good clients or good people to get the information from, and then you can do it that way.
