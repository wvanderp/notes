
Algemeen hoogtebestand Nederland (AHN) is a dataset that contains elevation data of the Netherlands. The data is collected by the Dutch government and is available for free. The data is available in different formats, raster images and point clouds.

I want to use the AHN data in RealityCapture to create 3D models of the terrain. This will allow me add more detail to my models and make them more realistic.

## The problems with loading AHN files into RealityCapture

there are two main problems with loading AHN files into RealityCapture:

- RealityCapture does not support LAZ files, which is the format that the AHN data is provided in.
- the projection system used in the AHN data is RD New(rijksdriehoekstelsel), which is not supported by RealityCapture.

## The solution

I tried two software packages to convert the AHN data into a format that RealityCapture can read:

- lastools
- QGIS

### Using lastools

this was a long time ago. but what I did not figgure out back then was that the point cloud was not in the right projection system. I did not know how to change the projection system of the point cloud.

### Using QGIS

QGIS is one of the most dense software packages I have ever used. I requires and assumes that you know a lot about GIS.

But I managed to load the AHN data into QGIS and set the projection system to WGS84. Exporting the data was dead slow. so I wanted to crop the data to only the area I needed.

the tools that were provided resulted in an empty file. I did not know how to fix this.
that is where I failed.

## Conclusion

I did not jet manage to load AHN data into RealityCapture.

If I try again in the future, I will try to use the lastools software package again. I will also try to find a way to crop the data in QGIS.
