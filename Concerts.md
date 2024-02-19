
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

