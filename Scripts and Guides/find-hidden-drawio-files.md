---
tags:
  - Script
  - Guide
---

# find hidden drawio files

Svg and png files can include drawio metadata that allows them to be edited in drawio. but if the extension is not changed to `.drawio.svg` or `.drawio.png` its not obvious that the file can be edited.

The following command will find all files that contain the string `draw.io` or `diagrams.net` but are not `.drawio` or `.drawio.*` files.

```bash
grep -r -l -E 'draw.io|diagrams.net' --exclude={*.drawio,*.drawio.*} .
```
