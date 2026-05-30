# HiAI_SingleOpExecutorFusedConvolutionActivationParam

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `cannkit-sopexec-fusedconv-actparam`

**DocID**: `4a8f2588f3b1490aa508ce3359c4be5f`

**NodeID**: `0002017757958576407823c682aa6e77`

---

HiAI_SingleOpExecutorFusedConvolutionActivationParam

概述

HMS_HiAISingleOpExecutor_CreateFusedConvolutionActivation
输入参数。

起始版本：
 5.0.0(12)

相关模块：

CANN

所在头文件：

hiai_single_op.h

汇总

[h2]成员变量

名称

描述

HiAI_SingleOpOptions
 * 
options

指向
HiAI_SingleOpOptions
对象的指针。该值不能为空指针，否则接口调用失败。

HiAI_SingleOpDescriptor
 * 
convOpDesc

指向卷积算子对应的
HiAI_SingleOpDescriptor
对象的指针。该值不能为空指针，否则接口调用失败。

HiAI_SingleOpDescriptor
 * 
actOpDesc

指向激活算子对应的
HiAI_SingleOpDescriptor
对象的指针。该值不能为空指针，否则接口调用失败。

HiAI_SingleOpTensorDesc
 * 
input

指向输入Tensor描述的指针。该值不能为空指针，否则接口调用失败。

HiAI_SingleOpTensorDesc
 * 
output

指向输出Tensor描述的指针。该值不能为空指针，否则接口调用失败。

HiAI_SingleOpTensor
 * 
filter

指向卷积核Tensor的指针。该值不能为空指针，否则接口调用失败。

HiAI_SingleOpTensor
 * 
bias

指向偏置Tensor的指针。如果卷积没有偏置，则该值可以是空指针。

结构体成员变量说明

[h2]actOpDesc

HiAI_SingleOpDescriptor* HiAI_SingleOpExecutorFusedConvolutionActivationParam::actOpDesc

描述

指向激活算子对应的
HiAI_SingleOpDescriptor
对象的指针。该值不能为空指针，否则接口调用失败。

[h2]bias

HiAI_SingleOpTensor* HiAI_SingleOpExecutorFusedConvolutionActivationParam::bias

描述

指向偏置Tensor的指针。如果卷积没有偏置，则该值可以是空指针。

[h2]convOpDesc

HiAI_SingleOpDescriptor* HiAI_SingleOpExecutorFusedConvolutionActivationParam::convOpDesc

描述

指向卷积算子对应的
HiAI_SingleOpDescriptor
对象的指针。该值不能为空指针，否则接口调用失败。

[h2]filter

HiAI_SingleOpTensor* HiAI_SingleOpExecutorFusedConvolutionActivationParam::filter

描述

指向卷积核Tensor的指针。该值不能为空指针，否则接口调用失败。

[h2]input

HiAI_SingleOpTensorDesc* HiAI_SingleOpExecutorFusedConvolutionActivationParam::input

描述

指向输入Tensor描述的指针。该值不能为空指针，否则接口调用失败。

[h2]options

HiAI_SingleOpOptions* HiAI_SingleOpExecutorFusedConvolutionActivationParam::options

描述

指向
HiAI_SingleOpOptions
对象的指针。该值不能为空指针，否则接口调用失败。

[h2]output

HiAI_SingleOpTensorDesc* HiAI_SingleOpExecutorFusedConvolutionActivationParam::output

描述

指向输出Tensor描述的指针。该值不能为空指针，否则接口调用失败。

---
*2026-04-22T15:55:04.479Z*