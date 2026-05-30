# ArkUI_AttributeItem

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-arkui-nativemodule-arkui-attributeitem`

**DocID**: `9228680dafd149fb991d603c61269341`

**NodeID**: `0002017757962161973105c6a10de612`

---

ArkUI_AttributeItem

typedef struct {...} ArkUI_AttributeItem

概述

定义
setAttribute
函数通用入参结构。各个属性设置接口可选择使用其中的成员变量来存储特定类型的参数数据。

起始版本：
 12

相关模块：

ArkUI_NativeModule

所在头文件：

native_node.h

汇总

[h2]成员变量

名称

描述

const 
ArkUI_NumberValue
* value

数字类型数组，用于存储数字数组类型的参数。

int32_t size

数字类型数组大小，配合变量value使用，value数组的长度。

const char* string

字符串类型，用于存储字符串类型的参数。

void* object

对象类型，用于存储对象类型的参数。

---
*2026-04-22T15:53:58.628Z*