# LatLngBoundsUtils

> **分区**: API参考  |  **Slug**: `map-map-latlngboundsutils`  |  **DocID**: `efcce8c9635d4f69923f174b972e2516`

---

# LatLngBoundsUtils

  #### 导入模块

```
import { map, mapCommon } from '@kit.MapKit';
```
   #### LatLngBoundsUtils

LatLngBounds工具类。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **元服务API：** 从版本4.1.0(11)开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.Map.Core

 **起始版本：** 4.1.0(11)

   #### [h2]contains

static contains(bounds: mapCommon.LatLngBounds, position: mapCommon.LatLng): boolean

 判断LatLngBounds是否包含某位置坐标。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **元服务API：** 从版本4.1.0(11)开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.Map.Core

 **起始版本：** 4.1.0(11)

 **参数：**

  **参数名** **类型** 必填 **说明**   bounds [mapCommon.LatLngBounds](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#latlngbounds) 是 LatLngBounds对象。  position [mapCommon.LatLng](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#latlng) 是 用于判断的位置坐标。     **返回值：**

  类型 说明   boolean true：包含该位置点。

 false：不包含该位置点。

      **错误码：**

 以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-map)。

  错误码ID 错误信息   401 Invalid input parameter.     **示例：**

 ```
let bounds: mapCommon.LatLngBounds = {
  southwest: {
    latitude: 31.98,
    longitude: 118.766
  },
  northeast: {
    latitude: 32.08,
    longitude: 118.066
  }
};
let result: boolean = map.LatLngBoundsUtils.contains(bounds, {
  latitude: 15,
  longitude: 15
});
```
   #### [h2]contains

static contains(src: mapCommon.LatLngBounds, target: mapCommon.LatLngBounds): boolean

 判断LatLngBounds是否包含目标区域。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **元服务API：** 从版本4.1.0(11)开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.Map.Core

 **起始版本：** 4.1.0(11)

 **参数：**

  **参数名** **类型** 必填 **说明**   src [mapCommon.LatLngBounds](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#latlngbounds) 是 LatLngBounds对象。  target [mapCommon.LatLngBounds](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#latlngbounds) 是 目标区域。     **返回值：**

  类型 说明   boolean true：包含该区域。

 false：不包含该区域。

      **错误码：**

 以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-map)。

  错误码ID 错误信息   401 Invalid input parameter.     **示例：**

 ```
let src: mapCommon.LatLngBounds = {
  southwest: {
    latitude: 31.98,
    longitude: 118
  },
  northeast: {
    latitude: 31.08,
    longitude: 119
  }
};
let target: mapCommon.LatLngBounds = {
  southwest: {
    latitude: 33,
    longitude: 120
  },
  northeast: {
    latitude: 34,
    longitude: 121
  }
};

let result: boolean = map.LatLngBoundsUtils.contains(src, target);
```
   #### [h2]getCenter

static getCenter(bounds: mapCommon.LatLngBounds): mapCommon.LatLng

 获取LatLngBounds的中心经纬度坐标。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **元服务API：** 从版本4.1.0(11)开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.Map.Core

 **起始版本：** 4.1.0(11)

 **参数：**

  **参数名** **类型** 必填 **说明**   bounds [mapCommon.LatLngBounds](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#latlngbounds) 是 LatLngBounds对象。     **返回值：**

  类型 说明   [mapCommon.LatLng](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#latlng) 中心经纬度坐标。     **错误码：**

 以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-map)。

  错误码ID 错误信息   401 Invalid input parameter.     **示例：**

 ```
let bounds: mapCommon.LatLngBounds = {
  southwest: {
    latitude: 31,
    longitude: 118
  },
  northeast: {
    latitude: 33,
    longitude: 119
  }
};
let center: mapCommon.LatLng = map.LatLngBoundsUtils.getCenter(bounds);
```
   #### [h2]include

static include(position: mapCommon.LatLng, bounds?: mapCommon.LatLngBounds): mapCommon.LatLngBounds

 获取一个包含指定位置的LatLngBounds对象。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **元服务API：** 从版本4.1.0(11)开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.Map.Core

 **起始版本：** 4.1.0(11)

 **参数：**

  **参数名** **类型** 必填 **说明**   position [mapCommon.LatLng](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#latlng) 是 位置坐标。  bounds [mapCommon.LatLngBounds](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#latlngbounds) 否 LatLngBounds对象。     **返回值：**

  类型 说明   [mapCommon.LatLngBounds](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#latlngbounds) 包含指定位置的LatLngBounds对象。     **错误码：**

 以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-map)。

  错误码ID 错误信息   401 Invalid input parameter.     **示例：**

 ```
let resultBounds: mapCommon.LatLngBounds = map.LatLngBoundsUtils.include({
  latitude: 31,
  longitude: 118
});
```

---
*Updated: 2026-04-22 06:41:54*
