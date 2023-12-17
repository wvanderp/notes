# Recreating popcorn time using DHT and Proof of Seed

I have had that idea for a long time because popcorn time was the favorite way to pirate our favorite movies and TV shows. The big problem with Popcorn Time was that it relied on a central database that all kinds of authorities could take down. because of that, there was never a reliable source of popcorn time because they were popping
up and going down all over the place.

So, we already have a distributed way of gathering our torrent gathering peers for our torrents. So why
don't we collect this movie and TV show database in a distributed way?

We can use the DHT to write down which torrents contain what TV shows. We use an external identifier to identify the TV shows, and then we have a JSON blob with information about the TV show and the torrents.

This could work because the DHT is freely writable. The only big problem with this is that it's freely writable by everybody, so malicious actors can just insert any movie in there, bad quality torrents, torrents with viruses, and so we need some kind of way to control the quality of the submissions we get or to verify the quality of the submitters.

In Bitcoin, we have something called the proof of work, in which the client first needs to prove that he did a certain amount of work, and only after that does his block get accepted into the blockchain. I envision a similar way in BitTorrent but not in a distributed way because you have the same problem: Who can assert the truth on a distributed hash table?

We expect these submitters to be part of the community, and part of being part of the community is also seeding the torrents that they provide or that they like.
So, what each client can do is keep note of how many gigabytes they downloaded from specific IP addresses. If you then include the public key in the torrent or the protocol, then you can assert which submitter of information is uploading how much data, and that gives you an idea about how trustworthy somebody is because if you put in the work to upload data, then you might care more about the community than somebody who publishes much information and does not work with torrents that they have uploaded.

Some problems with this ID. We still need a shared repository of movies and TV shows to have a stable identifier for each TV show. And also information like the title, episode titles, and artwork because it's nice to have a search engine, but if there is no UI for it, that's a problem. The problem is that you still have a centralized point where the system can fail. Although a bit of trust is given to the system, only the UI is a problem.

Another thing is that you also need to have an initial state. At first, you trust nobody in the network because nobody has earned your trust, and this means that you can't look anything up or have trust in the system. If you have torrented before, you can gain that trust
by already having a database of people who have uploaded stuff to you. But if you are completely clean, then you can either do a throw in the dark and get something, or maybe we can have a way of reading out what other people think about the submissions, and this way, you can
trust somebody else like a blog or a Reddit post to send you a list of
good clients or good people to get the information from, and then you can do it that way.
