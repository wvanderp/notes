---
tags:
  - Guide
  - Script
---

Keywords: extract frames

In its most basic from is the following command.

```shell
ffmpeg -i input.mp4 -vf "fps=1" frame%04d.png
```

`-i input.mp4` is the selecting the input file.

`-vf "fps=1"` set the amount of frames to be saved. with:

- `1` => 1 every second
- `30` => 30 every second
- `1/2` => 1 every 2 seconds
- `1/4` => 1 every 4 seconds
- `1/30` => 1 every 30 seconds

`frame%04d.png` is the name of the output file. with `%04d` being replaced by a counter from `0000` to `9999`.

For a more comparative guide go to: [`Extract Frames using FFmpeg: A Comprehensive Guide` by  OTTVerse](https://ottverse.com/extract-frames-using-ffmpeg-a-comprehensive-guide/https://ottverse.com/extract-frames-using-ffmpeg-a-comprehensive-guide/)

## bat script

This is a script that will collects all `mp4` and `webm` videos and extracts every second frame with `ffmpeg`.

```bash
@echo off
setlocal enabledelayedexpansion

:: Initialize a counter for folder naming
set counter=1

:: Loop through all mp4 and webm files in the current directory
for %%f in (*.mp4 *.webm *.mkv) do (
    :: Create a directory named after the counter
    mkdir "!counter!"
    
    :: Extract every second frame from the video file
    ffmpeg -i "%%f" -vf "fps=2" -vsync vfr "!counter!\!counter!_%%04d.png"
    
    :: Increment the counter
    set /a counter+=1
)

echo All frames extracted.
pause
```
