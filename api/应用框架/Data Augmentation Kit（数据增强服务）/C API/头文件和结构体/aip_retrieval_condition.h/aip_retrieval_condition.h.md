# aip_retrieval_condition.h

> **分区**: API参考  |  **Slug**: `dataaugmentation-aip-retrieval-condition`  |  **DocID**: `ea478bc4377e4900bb38e57c68eba543`

---

# aip_retrieval_condition.h

  #### 概述

提供与检索条件相关的接口。

 **引用文件：** #include "dataaugmentation/retrieval/aip_retrieval_condition.h"

 **库：** libretrieval_ndk.so

 **系统能力：** SystemCapability.DataAugmentation.Retrieval

 **起始版本：** 6.0.0(20)

 **相关模块：** [Retrieval](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval)

   #### 汇总

  #### [h2]类型定义

 名称 描述   typedef struct [OH_Retrieval_Condition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_condition) [OH_Retrieval_Condition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_condition) 定义检索条件，可包含多个子检索条件等。  typedef struct [OH_Retrieval_SubCondition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_subcondition) [OH_Retrieval_SubCondition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_subcondition) 定义子检索条件，可以是向量检索。       #### [h2]函数

 名称 描述   [OH_Retrieval_Condition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_condition) * [OH_Retrieval_CreateCondition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_createcondition) () 创建检索条件，作为检索接口的入参。  int [OH_Retrieval_DestroyCondition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_destroycondition) ([OH_Retrieval_Condition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_condition) *condition) 销毁通过[OH_Retrieval_CreateCondition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_createcondition)获得的检索条件。  int [OH_Retrieval_DestroySubCondition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_destroysubcondition) ([OH_Retrieval_SubCondition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_subcondition) *condition) 销毁通过[OH_Retrieval_SubCondition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_subcondition)创建的条件。  int [OH_Retrieval_AddSubCondition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_addsubcondition) ([OH_Retrieval_Condition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_condition) *condition, [OH_Retrieval_SubCondition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_subcondition) *subCondition) 在检索条件中，增加子检索条件。

---
*Updated: 2026-04-22 06:43:31*
