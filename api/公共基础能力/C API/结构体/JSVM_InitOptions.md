# JSVM_InitOptions

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-jsvm-jsvm-initoptions`

**DocID**: `fce0a035a1644fb4b2c9512a42f64aec`

**NodeID**: `00020177579585958082028ed5df1b44`

---

JSVM_InitOptions

typedef struct {...} JSVM_InitOptions

概述

初始化选项，用于初始化JavaScript虚拟机。

起始版本：
 11

相关模块：

JSVM

所在头文件：

jsvm_types.h

汇总

[h2]成员变量

名称

描述

const intptr_t* externalReferences

可选。嵌入器中可选的、以nullptr结尾的原始地址数组，虚拟机可以在序列化期间与之匹配，并可用于反序列化。此数组及其内容必须在虚拟机实例的整个生命周期内保持有效。

int* argc

虚拟机的标志。如果removeFlags为true，则已识别的标志将从（argc, argv）中移除。请注意，这些标志当前仅限于V8虚拟机。它们主要用于开发。不要将它们用于生产环境，因为如果虚拟机与开发环境不同，它们可能不会生效。

char** argv

指向命令行参数字符串数组的指针，与argc配合传递虚拟机相关配置。

bool removeFlags

是否删除，为true，则已识别的标志将从（argc, argv）中移除，为false，则已识别的标志不会从（argc, argv）中移除。

---
*2026-04-22T15:55:04.555Z*