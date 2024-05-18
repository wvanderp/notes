# military installations in the Netherlands

All military installations can be found in the following law:

[Artikel 2.41 Omgevingsregeling](https://wetten.overheid.nl/jci1.3:c:BWBR0045528&hoofdstuk=2&afdeling=2.6&artikel=2.41&z=2024-01-01&g=2024-01-01)


This was previously [Regeling algemene regels ruimtelijke ordening](https://wetten.overheid.nl/BWBR0031018/2021-07-01) but got replaced by the new law.

This new law does include [machine-readable geometry](https://zoek.officielebekendmakingen.nl/dc-2019-141/1/html) for the bases so that nice
The GML file is in the `Rijksdriehoekscoördinaten` projection, so use the following command to convert it. [Source](https://gis.stackexchange.com/questions/292769/ogr2ogr-reprojection-issues)

```bash
ogr2ogr -s_srs EPSG:28992 -t_srs EPSG:4326 -f "geojson" defensie.geojson dc-2019-141.gml
```


The old law has been copied, but the new law can be imported, so I should look into that.
OSM has copied this document to their database, which is currently at Bijlage 1.33.
