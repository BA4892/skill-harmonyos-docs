# 基础API

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-programmingapi-basic-apis`  |  **DocID**: `6dbd7a8e4a6e444dac2eea29d82db46e`  |  **NodeID**: `0002017757954498004702396c4e38bb`

---

# 基础API

  #### 数据搬运

数据搬运接口，包括[普通数据搬运](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-common-data-movement)、[随路格式转换](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-channel-associated-format-conversion)。

 
普通数据搬运接口，适用于连续和不连续数据搬运。

  随路格式转换接口，适用于在搬运时进行格式转换。

  
   #### 内存管理与同步控制

AscendC编程范式，把算子核内的处理程序，分成多个流水任务，通过队列(Queue)完成**任务间通信和同步**，并通过统一的**资源管理**模块(Pipe)来统一管理内存、事件等资源。

 AscendC提供一组内存管理与同步控制API，开发者使用这一组API即可完成任务间同步和内存管理。

 核心的API包括：

 
AllocTensor：从Queue中分配Tensor，Tensor所占大小为InitBuffer时设置的每块内存长度。

  FreeTensor：释放Queue中的指定Tensor，供Queue后续使用。

  EnQue：将Tensor push到队列Queue。

  DeQue：将Tensor从队列Queue中取出，用于后续处理。

---
*Updated: 2026-04-20 01:43:46*
