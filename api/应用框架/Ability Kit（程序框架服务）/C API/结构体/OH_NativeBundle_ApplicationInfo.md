# OH_NativeBundle_ApplicationInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-native-bundle-oh-nativebundle-applicationinfo`

**DocID**: `48f8b474a75f48f78f17315e8042871e`

**NodeID**: `000201775796216197945179267d9ebe`

---

OH_NativeBundle_ApplicationInfo

typedef struct {...} OH_NativeBundle_ApplicationInfo

概述

应用包信息数据结构，包含应用包名和应用指纹信息。

起始版本：
 9

相关模块：

Native_Bundle

所在头文件：

native_interface_bundle.h

汇总

[h2]成员变量

名称

描述

char* bundleName

应用包名。

char* fingerprint

应用的指纹信息，由签名证书通过SHA-256算法计算哈希值生成。使用的签名证书发生变化时，该字段也会发生变化。

---
*2026-04-22T15:55:01.457Z*