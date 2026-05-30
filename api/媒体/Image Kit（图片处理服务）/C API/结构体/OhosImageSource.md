# OhosImageSource

> **分区**: API参考  |  **Slug**: `capi-image-ohosimagesource`  |  **DocID**: `2ca91df326c64f588eb613129c629d86`

---

# OhosImageSource

 ```
struct OhosImageSource {...}
```
  #### 概述

定义图像源输入资源，每次仅接收一种类型。由[OH_ImageSource_CreateFromUri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_createfromuri)、[OH_ImageSource_CreateFromFd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_createfromfd)和[OH_ImageSource_CreateFromData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_createfromdata)获取。

 **起始版本：** 10

 **废弃版本：** 11

 **相关模块：** [Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image)

 **所在头文件：** [image_source_mdk.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   char* uri = nullptr 图像源资源标识符，接受文件资源或者base64资源。  size_t uriSize = 0 图像源资源长度。  int32_t fd = - 1 图像源文件资源描述符。  uint8_t* buffer = nullptr 图像源缓冲区资源，接受格式化包缓冲区或者base64缓冲区。  size_t bufferSize = 0 图像源缓冲区资源大小。

---
*Updated: 2026-04-22 06:41:20*
