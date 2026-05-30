# Interface (Photo)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-camera-photo`

**DocID**: `50ba74b9603e41bab080f2fdab158216`

**NodeID**: `000201775795910761330e3c1c03129d`

---

Interface (Photo)

全质量图对象。

本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本Interface首批接口从API version 11开始支持。

导入模块

import { camera } from '@kit.CameraKit';

属性

元服务API：
 从API version 19开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Camera.Core

名称

类型

只读

可选

说明

main
11+

image.Image

否

否

全质量图Image。

release
11+

release(): Promise<void>

释放输出资源。使用Promise异步回调。

元服务API：
 从API version 19开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Camera.Core

返回值：

类型

说明

Promise<void>

Promise对象，无返回结果。

示例：

async function releasePhoto(photo: camera.Photo): Promise<void> {
 await photo.release();
}

---
*2026-04-22T15:53:59.728Z*