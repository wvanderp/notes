---
tags:
  - Media-manager
---

# Endpoints

This but than with Graphql

`get /photo/#id`  
Get all the info for a photo

`post /photo/#id/update`  
Overwrites the information of the album

`post /photo/new`  
Make an new container for photo information

`get /album/#id`  
Get all the info for a album (like what photos are in it)

`post /album/#id/update`  
Overwrites the information of the album

`post /album/new`  
Make a new album

`post /derive/#photo_id`  
Runs all the derivation scripts on a photo

`post /derive/#photo_id/#derive_id`  
Runs a singe derivation script
