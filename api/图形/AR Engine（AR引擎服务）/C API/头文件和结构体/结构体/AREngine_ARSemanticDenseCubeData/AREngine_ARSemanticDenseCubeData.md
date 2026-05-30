# AREngine_ARSemanticDenseCubeData

> **分区**: API参考  |  **Slug**: `arengine-struct-arsemanticdensecubedata`  |  **DocID**: `c1cab5e344aa4e548798925d8427feac`

---

# AREngine_ARSemanticDenseCubeData

  #### 概述

高精几何重建对象的立方体数据。

 作为[HMS_AREngine_ARSemanticDense_AcquireCubeData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirecubedata)接口输入。

 **起始版本：** 6.0.0(20)

 **相关模块：** [AR Engine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine)

 **所在头文件：** [ar_engine_core.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-header-file)

   #### 汇总

  #### [h2]成员变量

 名称 描述   int32_t [id](#id) 当前立方体的ID。  int32_t [vertexSize](#vertexsize) 当前立方体的顶点大小。  float* [vertexData](#vertexdata) 当前立方体的顶点数据。

 对应立方体的8个顶点。索引从立方体后表面开始，按逆时针方向排列。

   float [confidence](#confidence) 当前立方体的置信度。  AREngine_ARSemanticPlaneLabel [label](#label) 当前立方体的语义标签。

 参见[AREngine_ARSemanticPlaneLabel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arsemanticplanelabel)。

        #### 结构体成员变量说明

  #### [h2]id

int32_t AREngine_ARSemanticDenseCubeData::id **描述**

 当前立方体的ID。

   #### [h2]vertexSize

int32_t AREngine_ARSemanticDenseCubeData::vertexSize **描述**

 当前立方体的顶点大小。

   #### [h2]vertexData

float* AREngine_ARSemanticDenseCubeData::vertexData **描述**

 当前立方体的顶点数据。

   #### [h2]confidence

float AREngine_ARSemanticDenseCubeData::confidence **描述**

 当前立方体的置信度。

   #### [h2]label

AREngine_ARSemanticPlaneLabel AREngine_ARSemanticDenseCubeData::label **描述**

 当前立方体的语义标签。

---
*Updated: 2026-04-22 06:40:37*
