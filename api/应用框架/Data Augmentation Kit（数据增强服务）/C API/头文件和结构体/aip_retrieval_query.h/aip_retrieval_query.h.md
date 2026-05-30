# aip_retrieval_query.h

> **分区**: API参考  |  **Slug**: `dataaugmentation-aip-retrieval-query`  |  **DocID**: `5f101d8e52e04a369ae1597a4760c3c7`

---

# aip_retrieval_query.h

  #### 概述

提供与检索查询相关的接口。

 **引用文件：** #include "dataaugmentation/retrieval/aip_retrieval_query.h"

 **库：** libretrieval_ndk.so

 **系统能力：** SystemCapability.DataAugmentation.Retrieval

 **起始版本：** 6.0.0(20)

 **相关模块：** [Retrieval](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval)

   #### 汇总

  #### [h2]类型定义

 名称 描述   typedef struct [OH_Retrieval_Query](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_query) [OH_Retrieval_Query](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_query) 定义检索词，当前只支持纯文本检索。       #### [h2]函数

 名称 描述   [OH_Retrieval_Query](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_query) * [OH_Retrieval_CreateQuery](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_createquery) () 创建检索词，作为检索接口的入参。  int [OH_Retrieval_DestroyQuery](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_destroyquery) ([OH_Retrieval_Query](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_query) *query) 销毁通过[OH_Retrieval_CreateQuery](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_createquery)获得的检索词。  int [OH_Retrieval_SetOriginalQuestion](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_setoriginalquestion) ([OH_Retrieval_Query](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_query) *query, const char *question) 设置[OH_Retrieval_Query](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_query)中的检索词。

---
*Updated: 2026-04-22 06:43:51*
