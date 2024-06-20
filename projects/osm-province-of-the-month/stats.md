# stats for province van de maand

## geofabrik size

Go to  <https://download.geofabrik.de/europe/netherlands.html> and select the provice of the month.

![Alt text](Projects/osm-province-of-the-month/image.png)

Click on `raw directory index` to see older download files

Write down the the size of the `.osm.pbf` file closest to the beginning of the month.

And then the one closest to the ending of the month.

Do the same for the month before that

Example for drenthe

2023-12-02: 56622593  
2024-01-2: 56823952 (+201,359)  
2024-01-12: 57261236 (+437,284)

## osmcha (changeset count)

Query osmcha for the amount of changesets.

Example for drenthe

[drenthe query pre](https://osmcha.org/filters?filters=%7B%22geometry%22%3A%5B%7B%22label%22%3A%7B%22type%22%3A%22Polygon%22%2C%22coordinates%22%3A%5B%5B%5B6.11982%2C52.854215%5D%2C%5B6.383902%2C52.612196%5D%2C%5B7.041733%2C52.63271%5D%2C%5B7.09274%2C52.838196%5D%2C%5B6.485458%2C53.203829%5D%2C%5B6.305274%2C53.08119%5D%2C%5B6.393436%2C52.932843%5D%2C%5B6.11982%2C52.854215%5D%5D%5D%7D%2C%22value%22%3A%7B%22type%22%3A%22Polygon%22%2C%22coordinates%22%3A%5B%5B%5B6.11982%2C52.854215%5D%2C%5B6.383902%2C52.612196%5D%2C%5B7.041733%2C52.63271%5D%2C%5B7.09274%2C52.838196%5D%2C%5B6.485458%2C53.203829%5D%2C%5B6.305274%2C53.08119%5D%2C%5B6.393436%2C52.932843%5D%2C%5B6.11982%2C52.854215%5D%5D%5D%7D%7D%5D%2C%22date__gte%22%3A%5B%7B%22label%22%3A%222023-12-01%22%2C%22value%22%3A%222023-12-01%22%7D%5D%2C%22date__lte%22%3A%5B%7B%22label%22%3A%222023-12-31%22%2C%22value%22%3A%222023-12-31%22%7D%5D%7D)

[drenthe query post](https://osmcha.org/changesets/146130898?filters=%7B%22geometry%22%3A%5B%7B%22label%22%3A%7B%22type%22%3A%22Polygon%22%2C%22coordinates%22%3A%5B%5B%5B6.11982%2C52.854215%5D%2C%5B6.383902%2C52.612196%5D%2C%5B7.041733%2C52.63271%5D%2C%5B7.09274%2C52.838196%5D%2C%5B6.485458%2C53.203829%5D%2C%5B6.305274%2C53.08119%5D%2C%5B6.393436%2C52.932843%5D%2C%5B6.11982%2C52.854215%5D%5D%5D%7D%2C%22value%22%3A%7B%22type%22%3A%22Polygon%22%2C%22coordinates%22%3A%5B%5B%5B6.11982%2C52.854215%5D%2C%5B6.383902%2C52.612196%5D%2C%5B7.041733%2C52.63271%5D%2C%5B7.09274%2C52.838196%5D%2C%5B6.485458%2C53.203829%5D%2C%5B6.305274%2C53.08119%5D%2C%5B6.393436%2C52.932843%5D%2C%5B6.11982%2C52.854215%5D%5D%5D%7D%7D%5D%2C%22date__gte%22%3A%5B%7B%22label%22%3A%222023-12-31%22%2C%22value%22%3A%222023-12-31%22%7D%5D%2C%22date__lte%22%3A%5B%7B%22label%22%3A%222024-01-12%22%2C%22value%22%3A%222024-01-12%22%7D%5D%7D)

Pre: 897  
Post: 547
