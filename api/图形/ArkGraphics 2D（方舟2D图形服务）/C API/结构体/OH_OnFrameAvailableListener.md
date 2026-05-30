# OH_OnFrameAvailableListener

> **分区**: API参考  |  **Slug**: `capi-oh-nativeimage-oh-onframeavailablelistener`  |  **DocID**: `4049f4726430414fbbcd5fd782d31d34`

---

# OH_OnFrameAvailableListener

 ```
typedef struct OH_OnFrameAvailableListener {...} OH_OnFrameAvailableListener
```
  #### 概述

一个OH_NativeImage的监听者，通过[OH_NativeImage_SetOnFrameAvailableListener](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-image-h#oh_nativeimage_setonframeavailablelistener)接口注册该监听结构体，当有buffer可获取时，将触发回调给用户。

 **起始版本：** 11

 **相关模块：** [OH_NativeImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativeimage)

 **所在头文件：** [native_image.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-image-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   void* context 用户自定义的上下文信息，会在回调触发时返回给用户。  [OH_OnFrameAvailable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-image-h#oh_onframeavailable) onFrameAvailable 有buffer可获取时触发的回调函数。       #### [h2]成员函数

 名称 typedef关键字 描述   [typedef void (*OH_OnFrameAvailable)(void *context)](#oh_onframeavailable) OH_OnFrameAvailable() 有buffer可获取时触发的回调函数。

 **起始版本：** 11

 **系统能力：** SystemCapability.Graphic.Graphic2D.NativeImage

        #### 成员函数说明

  #### [h2]OH_OnFrameAvailable()

typedef void (*OH_OnFrameAvailable)(void *context) **描述**

 有buffer可获取时触发的回调函数。

 **系统能力：** SystemCapability.Graphic.Graphic2D.NativeImage

 **起始版本：** 11

 **参数：**

  参数项 描述   void *context 用户自定义的上下文信息，会在回调触发时返回给用户。

---
*Updated: 2026-04-22 06:40:35*
