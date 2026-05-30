# Types

> **分区**: API参考  |  **Slug**: `arkts-apis-image-t`  |  **DocID**: `e0f9e4a13f8c48c083220750ec66d62d`

---

# Types

   本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

    #### HdrMetadataValue12+

type HdrMetadataValue = HdrMetadataType | HdrStaticMetadata | ArrayBuffer | HdrGainmapMetadata

 PixelMap使用的HDR元数据值类型，和[HdrMetadataKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-e#hdrmetadatakey12)关键字相对应。

 **系统能力：** SystemCapability.Multimedia.Image.Core

  类型 说明   [HdrMetadataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-e#hdrmetadatatype12) [HdrMetadataKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-e#hdrmetadatakey12)中HDR_METADATA_TYPE关键字对应的元数据值类型。  [HdrStaticMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-i#hdrstaticmetadata12) [HdrMetadataKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-e#hdrmetadatakey12)中HDR_STATIC_METADATA关键字对应的元数据值类型。  ArrayBuffer [HdrMetadataKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-e#hdrmetadatakey12)中HDR_DYNAMIC_METADATA关键字对应的元数据值类型。  [HdrGainmapMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-i#hdrgainmapmetadata12) [HdrMetadataKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-e#hdrmetadatakey12)中HDR_GAINMAP_METADATA关键字对应的元数据值类型。

---
*Updated: 2026-04-22 06:41:13*
