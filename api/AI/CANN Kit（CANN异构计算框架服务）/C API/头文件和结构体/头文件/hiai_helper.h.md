# hiai_helper.h

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `cannkit-hiai-helper-8h`

**DocID**: `dcd24d4799834f889070ce93aa77af42`

**NodeID**: `000201775795857640779354305509e0`

---

hiai_helper.h

概述

查询CANN Kit版本以及检查模型支持情况的接口。

库：
 libhiai_foundation.so

系统能力：
 SystemCapability.AI.HiAIFoundation

起始版本：
 4.1.0(11)

相关模块：

CANN

汇总

[h2]枚举

名称

描述

HiAI_Compatibility
 {

HIAI_COMPATIBILITY_COMPATIBLE = 0,

HIAI_COMPATIBILITY_INCOMPATIBLE = 1

}

编译后模型兼容性结果。

[h2]函数

名称

描述

const char * 
HMS_HiAI_GetVersion
 (void)

获取CANN Kit版本号，并通过返回模板hiaiversion A
1
A
2
A
3
.X
1
X
2
X
3
.Y
1
Y
2
Y
3
.Z
1
Z
2
Z
3
指定X
1
是否为0来区分是否支持NPU。若X
1
为0，则表示不支持NPU；若X
1
为非0，则表示支持NPU。

HiAI_Compatibility

HMS_HiAICompatibility_CheckFromFile
 (const char *file)

查询编译后储存在文件中的模型的兼容性。 若发生不兼容情况，建议重新编译模型。

HiAI_Compatibility

HMS_HiAICompatibility_CheckFromBuffer
 (const void *data, size_t size)

查询编译后储存在内存中的模型的兼容性。 若发生不兼容情况，建议重新编译模型。

---
*2026-04-22T15:55:04.473Z*