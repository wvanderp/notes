# Downloading from Instagram: The weird way

if you know what you want to download then you can just use [gallery-dl](https://github.com/mikf/gallery-dl) to download it. you can even do a [Instagram takeout](https://help.instagram.com/181231772500920) to get all your followed accounts and then download them all at once.

but if you want to just download what hits your feed then you need to do some weird stuff.

## Scroll to get the har

In the Chrome developer tools there is a option to download a [HAR file](https://en.wikipedia.org/wiki/HAR_(file_format)). This is a file that contains all the requests that the browser made to get the page. this includes the requests to get the images.

You can open the developer tools with `ctrl+shift+i` or `F12` or `ctrl+shift+c` and then click on the network tab. then you can scroll on your feed and when you feel like you have enough images you can right click on the download HAR button. its highlighted in the image below.

## Convert the HAR to images

then the next step is to extract the images from the HAR file. use a script like [this](https://gist.github.com/FurloSK/0477e01024f701db42341fc3223a5d8c) originally developed by [FurloSK](https://gist.github.com/FurloSK) to do that. you can run it with `python3 har2img.py <har file> <output folder>`

then you have a folder full of images that you can do whatever you want with.

## filtering the images

the one downside of this method is that it captures all images. so also all small profile pictures and layout images come through. you can filter with your favorite tools. I just use the windows file explorer and sort by size. then I can just select all the small images and delete them.
