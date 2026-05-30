# DECLARE_ERRORNO

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-declare-errorno`  |  **DocID**: `551b31652aaa4dc985549e939f0fdad2`  |  **NodeID**: `000201775795449800579570298300f2`

---

# DECLARE_ERRORNO

 错误码及描述注册宏，该宏对外提供如下四个错误码供开发者使用：

 
SUCCESS：成功。

  FAILED：失败。

  PARAM_INVALID：参数不合法。

  SCOPE_NOT_CHANGED：Scope融合规则未匹配到，忽略当前pass。

  
 声明如下所示：

 ```
DECLARE_ERRORNO(0, 0, SUCCESS, 0);
DECLARE_ERRORNO(0xFF, 0xFF, FAILED, 0xFFFFFFFF);
DECLARE_ERRORNO_COMMON(PARAM_INVALID, 1);  // 50331649
DECLARE_ERRORNO(SYSID_FWK, 1, SCOPE_NOT_CHANGED, 201);
```
 开发者可以在“compiler安装目录/latest/compiler/include/register/register_error_codes.h”下查看错误码定义。

---
*Updated: 2026-04-20 01:43:50*
