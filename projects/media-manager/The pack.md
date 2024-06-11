---
tags:
  - Media-manager
---


# the pack

The pack is the name of how we store media in media manager.

In its most basic form, the pack is

- A folder with the od as its id
- A `pack.json` describing the contents of the pack
- And at least one file being the content of the pack

- All additional files and metadata get registered in the pack.json

  The ID of the pack is unique and can be randomly generated.

  Files in the pack can be referenced by `Packid/filename`.
