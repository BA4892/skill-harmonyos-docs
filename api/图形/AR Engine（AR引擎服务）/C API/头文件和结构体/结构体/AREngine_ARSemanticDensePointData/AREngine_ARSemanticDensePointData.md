# AREngine_ARSemanticDensePointData

> **分区**: API参考  |  **Slug**: `arengine-struct-arsemanticdensepointdata`  |  **DocID**: `d161f6054eed4b4bbd8d8f08fe93e263`

---

# AREngine_ARSemanticDensePointData

  #### 概述

高精几何重建对象的稠密点云数据。

 作为[HMS_AREngine_ARSemanticDense_AcquirePointData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirepointdata)接口输入。

 **起始版本：** 6.0.0(20)

 **相关模块：** [AR Engine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine)

 **所在头文件：** [ar_engine_core.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-header-file)

   #### 汇总

  #### [h2]成员变量

 名称 描述   int32_t [id](#id) 当前点的ID。  float [x](#x) 当前点的X坐标。  float [y](#y) 当前点的Y坐标。  float [z](#z) 当前点的Z坐标。  int32_t [r](#r) 当前点的颜色，RGBA表示，这里是R的值。  int32_t [g](#g) 当前点的颜色，RGBA表示，这里是G的值。  int32_t [b](#b) 当前点的颜色，RGBA表示，这里是B的值。  int32_t [a](#a) 当前点的颜色，RGBA表示，这里是A的值。  float [confidence](#confidence) 当前点的置信度。       #### 结构体成员变量说明

  #### [h2]id

int32_t AREngine_ARSemanticDensePointData::id **描述**

 当前点的ID。

   #### [h2]x

float AREngine_ARSemanticDensePointData::x **描述**

 当前点的X坐标。

   #### [h2]y

float AREngine_ARSemanticDensePointData::y **描述**

 当前点的Y坐标。

   #### [h2]z

float AREngine_ARSemanticDensePointData::z **描述**

 当前点的Z坐标。

   #### [h2]r

int32_t AREngine_ARSemanticDensePointData::r **描述**

 当前点的颜色，RGBA表示，这里是R的值。

   #### [h2]g

int32_t AREngine_ARSemanticDensePointData::g **描述**

 当前点的颜色，RGBA表示，这里是G的值。

   #### [h2]b

int32_t AREngine_ARSemanticDensePointData::b **描述**

 当前点的颜色，RGBA表示，这里是B的值。

   #### [h2]a

int32_t AREngine_ARSemanticDensePointData::a **描述**

 当前点的颜色，RGBA表示，这里是A的值。

   #### [h2]confidence

float AREngine_ARSemanticDensePointData::confidence **描述**

 当前点的置信度。

---
*Updated: 2026-04-22 06:40:37*
