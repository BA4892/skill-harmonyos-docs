# aip_error_code.h

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `dataaugmentation-aip-error-code`

**DocID**: `6ab8319b817f4f2f9063b10c9bac931d`

**NodeID**: `0002017757962161965096a51a7a2bf0`

---

aip_error_code.h

概述

提供与错误代码相关的接口。

引用文件：
 #include "dataaugmentation/aip_error_code.h"

库：
 libnative_aip_retrieval_ndk.so

系统能力：
 SystemCapability.DataAugmentation.Retrieval

起始版本：
 6.0.0(20)

相关模块：

AIP

汇总

[h2]类型定义

名称

描述

typedef enum 
OH_Aip_ErrCode

OH_Aip_ErrCode

错误码信息。

[h2]枚举

枚举值

描述

AIP_OK = 0

操作成功。

AIP_E_EXEC_ERR = 1021200005

执行报错。

AIP_E_OUT_OF_RANGE = 1021200006

下标越界。

AIP_E_NO_SUCH_FIELD = 1021200007

不存在该字段。

AIP_E_OVER_LIMIT = 1021200008

数组超过最大长度512字节。

AIP_E_CONDITION_OVER_LIMIT = 1021200009

条件数量超过上限1。

AIP_E_INVALID_ARGS = 1021200010

无效参数。

AIP_E_EMBEDDING_ERR = 1021200012

无法生成嵌入向量。

---
*2026-04-22T15:53:58.836Z*