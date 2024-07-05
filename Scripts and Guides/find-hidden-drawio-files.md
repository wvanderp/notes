---
tags:
  - Script
  - Guide
---

# find hidden draw.io files

SVG and PNG files can include draw.io metadata that allows them to be edited in draw.io. but if the extension is not changed to `.drawio.svg` or `.drawio.png` its not obvious that the file can be edited.

The following command will find all files that contain the string `draw.io` or `diagrams.net` but are not `.drawio` or `.drawio.*` files.

```bash
grep -r -l -E 'draw.io|diagrams.net' --exclude={*.drawio,*.drawio.*} .
```
