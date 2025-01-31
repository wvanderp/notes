---
tags:
  - Photogrammetry
  - Script
---

# Photogrammetry Mask

When creating a photogrammetry model, it is often useful to create a mask to remove static objects or logos from the images. This can be done using the following steps:

## Step 1: Create a mask

Create a mask image using a photo editing software such as GIMP or Photoshop. The mask should be a black and white image.

The black areas of the mask will be removed from the images, while the white areas will be kept.

## Step 2: Copy the mask to the images folder

Copy the mask image for every image in the photogrammetry dataset. The mask image should have the same name as the corresponding image, with the suffix `_mask` added to the file name.

```powershell
param (
    [string]$mask,
    [string]$imagesFolder
)

$images = Get-ChildItem -Path $imagesFolder -Filter "*.jpg"

foreach ($image in $images) {
    $maskName = $image.BaseName + "_mask" + $image.Extension
    Copy-Item -Path $mask -Destination $image.DirectoryName\$maskName
}
```

## See Also

<https://rchelp.capturingreality.com/en-US/tools/mask.htm>
<https://dev.epicgames.com/community/learning/tutorials/5wap/capturing-reality-scan-objects-using-masks-image-masking>
