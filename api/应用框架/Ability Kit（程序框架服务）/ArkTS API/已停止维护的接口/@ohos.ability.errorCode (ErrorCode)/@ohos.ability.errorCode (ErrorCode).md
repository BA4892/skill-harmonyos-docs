# @ohos.ability.errorCode (ErrorCode)

> **分区**: API参考  |  **Slug**: `js-apis-ability-errorcode`  |  **DocID**: `d0ec99df3ee0446eb8001f64edf8ca4c`

---

# @ohos.ability.errorCode (ErrorCode)

 ErrorCode定义启动Ability时返回的错误码，包括无效的参数、权限拒绝等。

   本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

    #### 导入模块

```
import { ErrorCode } from '@kit.AbilityKit';
```
   #### ErrorCode

定义启动Ability时返回的错误码。

 **系统能力**：SystemCapability.Ability.AbilityRuntime.Core

  名称 值 说明   NO_ERROR 0 启动成功，无错误。  INVALID_PARAMETER -1 无效的参数。  ABILITY_NOT_FOUND -2 找不到Ability。  PERMISSION_DENY -3 权限拒绝。

---
*Updated: 2026-04-22 06:42:59*
