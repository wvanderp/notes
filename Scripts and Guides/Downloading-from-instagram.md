---
tags:
  - Guide
---

# Downloading from Instagram: The weird way

If you know what you want to download then you can just use [gallery-dl](https://github.com/mikf/gallery-dl) to download it. you can even do a [Instagram takeout](https://help.instagram.com/181231772500920) to get all your followed accounts and then download them all at once.

But if you want to just download what hits your feed then you need to do some weird stuff.

## Scroll to get the har

In the Chrome developer tools there is a option to download a [HAR file](https://en.wikipedia.org/wiki/HAR_(file_format)). This is a file that contains all the requests that the browser made to get the page. this includes the requests to get the images.

You can open the developer tools with `ctrl+shift+i` or `F12` or `ctrl+shift+c` and then click on the network tab. then you can scroll on your feed and when you feel like you have enough images you can right click on the download HAR button. its highlighted in the image below.

## Convert the HAR to images

Then the next step is to extract the images from the HAR file. use a script like [this](https://gist.github.com/FurloSK/0477e01024f701db42341fc3223a5d8c) originally developed by [FurloSK](https://gist.github.com/FurloSK) to do that. you can run it with `python3 har2img.py <har file> <output folder>`

Then you have a folder full of images that you can do whatever you want with.

```python
#!/usr/bin/env python3


import json
import base64
import os
import sys


mimetypes = {
    "image/webp": ".webp",
    "image/jpeg": ".jpeg", # *.jpg files have two possible extensions
    "image/jpeg": ".jpg",  #   (but .jpeg is official and thus preferred)
    "image/png": ".png",
    "image/svg+xml": ".svg"
}


outputDomain = True
outputPath = True
outputPathDepth = 0 # 0=all, 2=first two path parts , -2=last two path parts

# END config part

#=============================================================================
# Start program
#=============================================================================

# check cmd arguments
if len(sys.argv) < 2 or len(sys.argv) > 3:
    print('extract_har: A simple script to extract all picture files from *.har file.')
    print('Usage: extract_har.py <input.har> [<output_dir>]')
    sys.exit(0)

# get *.har file to work with
if not os.path.exists(sys.argv[1]):
    print('Specified *.har file (' + sys.argv[1] + ') does not exist, exiting...')
    sys.exit(1)
with open(sys.argv[1], "r" ,encoding="utf8") as f:
    print('Loading *.har file: ' + sys.argv[1])
    har = json.loads(f.read())

# get base directory for extraction
if len(sys.argv) == 3:
    folder = sys.argv[2]
else:
    folder = os.path.join(os.getcwd(), sys.argv[1] + '_extract')

baseFolder = os.path.basename(os.path.normpath(folder))

print('Destination folder: ' + baseFolder)
if not os.path.isdir(baseFolder):
    print('  Creating folder structure for extraction...')
    os.makedirs(baseFolder)

# save extensions list from allowed mimetypes
extensions = tuple(mimetypes.values())

# start parsing the individual entries
print('\nStarting extraction...')
entries = har["log"]["entries"]
count_total = 0
count_extracted = 0
for entry in entries:
    count_total += 1

    if not entry["response"]["content"].get("mimeType"):
        continue
    
    # only parse the entry if it is one of the wanted extensions
    mimetype = entry["response"]["content"]["mimeType"]
    if mimetype in mimetypes:
        count_extracted += 1
        
        # if content or text does not exist, skip this entry
        if(not entry["response"]["content"].get("text")):
            continue

        # parse raw data to image data
        image64 = entry["response"]["content"]["text"]
        
        try:
            image = base64.b64decode(image64)
        except:
            print('Error decoding image data, skipping...')
            continue
              
        
        # save data to extracted file
        with open(baseFolder + "/" + str(count_extracted) + ".jpg", "wb") as f:
            f.write(image)

print('\nFinished extracting ' + str(count_extracted) + ' (out of total ' + str(count_total) + ') files.')


```

## filtering the images

The one downside of this method is that it captures all images. so also all small profile pictures and layout images come through. you can filter with your favourite tools. I just use the windows file explorer and sort by size. then I can just select all the small images and delete them.

## other sites

this same trick also works for other sites like:

**mapilary**: when you auto play images they will automagicly download them when you download a har file.
