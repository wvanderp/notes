---
tags:
  - Concert
---
To add new concerts to this list add a new concert note to the concerts folder.
Use the following template: [[Concert]]

---

```dataview
TABLE
length(rows) as "#"
from "Concerts"
GROUP BY location
SORT length(rows) DESC
```

```dataview
TABLE
length(rows) as "count"
from "Concerts"
FLATTEN artist
GROUP BY artist
SORT length(rows) DESC
```
