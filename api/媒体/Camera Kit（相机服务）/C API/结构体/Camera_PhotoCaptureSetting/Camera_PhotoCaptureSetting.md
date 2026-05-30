# Camera_PhotoCaptureSetting

> **分区**: API参考  |  **Slug**: `capi-oh-camera-camera-photocapturesetting`  |  **DocID**: `946d7f1d520348f7b9c9e93be12377dc`

---

# Camera_PhotoCaptureSetting

 ```
typedef struct Camera_PhotoCaptureSetting {...} Camera_PhotoCaptureSetting
```
  #### 概述

要设置的拍照捕获选项。

 **起始版本：** 11

 **相关模块：** [OH_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)

 **所在头文件：** [camera.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Camera_QualityLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_qualitylevel) quality 拍照图像质量。  [Camera_ImageRotation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_imagerotation) rotation 拍照旋转角度。  [Camera_Location](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-location)* location 拍照位置。  bool mirror 设置镜像拍照功能开关。

  true为打开，false为关闭，默认为false。

---
*Updated: 2026-04-22 06:41:04*
