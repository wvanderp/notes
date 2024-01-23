---
tags:
  - media-manager
---


# possible derivations

## saving data

* creator of the photo

## info getting

* Detect faces and group similar faces
* Find camera/lens
* Parse Exif data
* Find locations in photos
  * by looking at the location tag
  * by matching to known locations with, for example, sift
  * machine learning tagging
* Machine learning for tags
  * YOLO network
* Extract time
  * also check if the time is plausible
    * by checking locations
    * are those people in earlier photos
  * extracting the time by ocr for embedded timestamps
* Get the original name
* Get file format
* Ocr the image to get the text
  * use special license plate OCR software
* Extract social data
  * File names can indicate social networks
  * Tag photos as WhatsApp or Facebook photos
* Find similar images
  * Implement a top shot to find the best photo
* Extract embedded files
* Use the stable diffusion tagging algorithm to find tags
  * extract keywords with clip
  * extract keywords with the Danbooru tagger
* Match photos that are taken at the same location
* extract the stable diffusion prompt and settings from the photo
* Solving the camera for a video providing a path and direction for a video
* check for embedded files in the file
  * drawio files

## Transformations

* Making a jpg preview for raw files
* Make a thumbnail
* Look for an HDR pair and make an HDR image
* Stitch into panoramas
* Extract the live video from a live photo
