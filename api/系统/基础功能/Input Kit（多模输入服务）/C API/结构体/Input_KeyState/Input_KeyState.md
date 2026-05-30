# Input_KeyState

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-input-input-keystate`

**DocID**: `c81b23fe515742a9b2cac17116069b7c`

**NodeID**: `00020177579634168488744f1455bf18`

---

Input_KeyState

typedef struct Input_KeyState Input_KeyState

概述

定义按键信息，用于标识按键行为。例如，“Ctrl”按键信息包含键值和键类型。

起始版本：
 12

相关模块：

input

所在头文件：

oh_input_manager.h

相关接口：

名称

描述

OH_Input_CreateKeyState

创建按键状态的枚举对象。通过调用
OH_Input_DestroyKeyState
销毁按键状态的枚举对象。

OH_Input_DestroyKeyState

销毁按键状态的枚举对象。

---
*2026-04-22T15:53:59.421Z*