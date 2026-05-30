# hiai_tensor.h

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `cannkit-hiai-tensor-8h`

**DocID**: `2bfed07fefed4f92b79e542352ac6dad`

**NodeID**: `000201775795857640784a564ba216d2`

---

hiai_tensor.h

概述

模型推理时使用的输入输出内存相关的辅助接口。

通过以下接口，可以关联AippParam到tensor中，也可计算图片格式需要申请的tensor内存大小。

库：
 libhiai_foundation.so

系统能力：
 SystemCapability.AI.HiAIFoundation

起始版本：
 4.1.0(11)

相关模块：

CANN

汇总

[h2]函数

名称

描述

size_t 
HMS_HiAITensor_GetSizeWithImageFormat
 (NN_TensorDesc *desc, 
HiAI_ImageFormat
 format)

根据NN_TensorDesc和HiAI_ImageFormat计算申请tensor的大小。

OH_NN_ReturnCode 
HMS_HiAITensor_SetAippParams
 (NN_Tensor *tensor, 
HiAI_AippParam
 *aippParams[], size_t aippNum)

给NN_Tensor设置AippParams。

---
*2026-04-22T15:55:04.476Z*