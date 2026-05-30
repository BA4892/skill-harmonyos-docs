# ImageProcessing_ColorSpaceInfo

> **分区**: API参考  |  **Slug**: `api-imageprocessing-imageprocessing-colorspaceinfo`  |  **DocID**: `a82f41adecbe4744b7d0a41aeb8f3e63`

---

# ImageProcessing_ColorSpaceInfo

       ```
typedef struct ImageProcessing_ColorSpaceInfo {...} ImageProcessing_ColorSpaceInfo
```
              #### 概述

     色彩空间信息，用于色彩空间转换能力查询。

     **参考：**

     [OH_ImageProcessing_IsColorSpaceConversionSupported](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-processing-h#oh_imageprocessing_iscolorspaceconversionsupported), [OH_ImageProcessing_IsCompositionSupported](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-processing-h#oh_imageprocessing_iscompositionsupported), [OH_ImageProcessing_IsDecompositionSupported](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-processing-h#oh_imageprocessing_isdecompositionsupported)

     **起始版本：** 13

     **相关模块：** [ImageProcessing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-imageprocessing)

     **所在头文件：** [image_processing_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-processing-types-h)

                  #### 汇总

                  #### [h2]成员变量

                                   名称         描述                                       int32_t metadataType         定义元数据类型，参考[OH_Pixelmap_HdrMetadataKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatakey)。                         int32_t colorSpace         定义色彩空间，参考[ColorSpaceName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-color-space-manager-h#colorspacename)。                         int32_t pixelFormat         定义像素格式，参考[PIXEL_FORMAT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#pixel_format)。

---
*Updated: 2026-04-22 06:41:21*
