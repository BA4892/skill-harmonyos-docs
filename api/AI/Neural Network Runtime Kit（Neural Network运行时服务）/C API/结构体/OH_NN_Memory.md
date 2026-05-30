# OH_NN_Memory

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-neuralnetworkruntime-oh-nn-memory`

**DocID**: `0edffb52372347aeadf1c81f31788bca`

**NodeID**: `00020177579585764076181b1e719874`

---

OH_NN_Memory

typedef struct OH_NN_Memory {...} OH_NN_Memory

概述

内存结构体。

起始版本：
 9

废弃版本：
 11

替代接口：

NN_Tensor

相关模块：

NeuralNetworkRuntime

所在头文件：

neural_network_runtime_type.h

汇总

[h2]成员变量

名称

描述

void * const data

指向共享内存的指针，该共享内存通常由底层硬件驱动申请。

const size_t length

记录共享内存的字节长度。

---
*2026-04-22T15:55:04.525Z*