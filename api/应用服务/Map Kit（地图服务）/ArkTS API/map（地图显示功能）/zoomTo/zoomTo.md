# zoomTo

> **分区**: API参考  |  **Slug**: `map-map-zoomto`  |  **DocID**: `fea63bfb4379479d894384e92e7a9168`

---

# zoomTo

  #### 导入模块

```
import { map } from '@kit.MapKit';
```
   #### zoomTo

zoomTo(zoom: number): CameraUpdate

 设置地图缩放级别。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **元服务API：** 从版本4.1.0(11)开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.Map.Core

 **起始版本：** 4.1.0(11)

 **参数：**

  **参数名** **类型** 必填 **说明**   zoom number 是 地图缩放级别，取值范围为[2, 20]，超出按边界值处理。     **返回值：**

  类型 说明   [CameraUpdate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-cameraupdate) 描述地图状态将要发生的变化。     **错误码：**

 以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-map)。

  错误码ID 错误信息   401 Invalid input parameter.     **示例：**

 ```
let cameraUpdate: map.CameraUpdate = map.zoomTo(10);
```

---
*Updated: 2026-04-22 06:41:55*
