# OH_PackingOptionsForSequence

> **分区**: API参考  |  **Slug**: `pi-image-nativemodule-oh-packingoptionsforsequence`  |  **DocID**: `c841d139e7f84d0fbed06a4fcb73386c`

---

# OH_PackingOptionsForSequence

 ```
typedef struct OH_PackingOptionsForSequence OH_PackingOptionsForSequence
```
  #### 概述

OH_PackingOptionsForSequence是native层封装的图像序列编码选项结构体，不可直接操作，而是采用函数调用方式创建、释放结构体以及操作具体字段。

 创建OH_PackingOptionsForSequence结构体的对象使用[OH_PackingOptionsForSequence_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h#oh_packingoptionsforsequence_create)函数。

 释放OH_PackingOptionsForSequence对象使用[OH_PackingOptionsForSequence_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h#oh_packingoptionsforsequence_release)函数。

  字段类型 字段名称 字段描述 操作函数 函数描述   uint32_t frameCount 帧数 [OH_PackingOptionsForSequence_GetFrameCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h#oh_packingoptionsforsequence_getframecount) 获取编码时指定的帧数。  uint32_t frameCount 帧数 [OH_PackingOptionsForSequence_SetFrameCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h#oh_packingoptionsforsequence_setframecount) 设置编码时指定的帧数。  int32_t * delayTimeList 延迟时间数组 [OH_PackingOptionsForSequence_GetDelayTimeList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h#oh_packingoptionsforsequence_getdelaytimelist) 获取编码时图片的延迟时间数组。  int32_t * delayTimeList 延迟时间数组 [OH_PackingOptionsForSequence_SetDelayTimeList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h#oh_packingoptionsforsequence_setdelaytimelist) 设置编码时图片的延迟时间数组。  uint32_t * disposalTypes 帧数 [OH_PackingOptionsForSequence_GetDisposalTypes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h#oh_packingoptionsforsequence_getdisposaltypes) 获取编码时图片的过渡帧模式数组。  uint32_t * disposalTypes 帧数 [OH_PackingOptionsForSequence_SetDisposalTypes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h#oh_packingoptionsforsequence_setdisposaltypes) 设置编码时图片的过渡帧模式数组。  uint32_t loopCount 帧数 [OH_PackingOptionsForSequence_GetLoopCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h#oh_packingoptionsforsequence_getloopcount) 获取编码时图片循环播放次数。  uint32_t loopCount 帧数 [OH_PackingOptionsForSequence_SetLoopCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h#oh_packingoptionsforsequence_setloopcount) 设置编码时图片循环播放次数，取值范围为[0，65535]，0表示无限循环；若无此字段，则表示不循环播放。     **起始版本：** 18

 **相关模块：** [Image_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule)

 **所在头文件：** [image_packer_native.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h)

---
*Updated: 2026-04-22 06:41:15*
