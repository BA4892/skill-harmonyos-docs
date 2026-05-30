# OH_AI_TensorHandleArray

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-mindspore-oh-ai-tensorhandlearray`

**DocID**: `f66482a917fd43f0bafbf0cf906bd20a`

**NodeID**: `0002017757958576407429677daf62d9`

---

OH_AI_TensorHandleArray

typedef struct OH_AI_TensorHandleArray {...} OH_AI_TensorHandleArray

概述

张量数组结构体，用于存储张量数组指针和张量数组长度。

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

size_t handle_num

张量数组长度。

OH_AI_TensorHandle
* handle_list

指向张量数组的指针。

---
*2026-04-22T15:54:00.596Z*