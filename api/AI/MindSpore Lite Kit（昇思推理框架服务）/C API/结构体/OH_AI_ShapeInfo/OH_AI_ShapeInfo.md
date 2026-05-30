# OH_AI_ShapeInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-mindspore-oh-ai-shapeinfo`

**DocID**: `2e49cf3abb2443c7bcaf38b29bbf2b88`

**NodeID**: `000201775795857640754524130d15f7`

---

OH_AI_ShapeInfo

typedef struct OH_AI_ShapeInfo {...} OH_AI_ShapeInfo

概述

形状维度大小，预留最大维度是32，当前实际支持的最大维度是8。

起始版本：
 9

相关模块：

MindSpore

所在头文件：

model.h

汇总

[h2]成员变量

名称

描述

size_t shape_num

维度数组长度。

int64_t shape[OH_AI_MAX_SHAPE_NUM]

维度数组。

---
*2026-04-22T15:54:00.597Z*