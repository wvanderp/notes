---
tags:
  - concert
---
To add new conecrts to this list add a new conecrt note to the concerts forlder
use the following template: [[Concert]]

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

