# NativeChildProcess_Args

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-nativechildprocess-args`

**DocID**: `fb14ad9a7f074529bc9dfada7f50d0b8`

**NodeID**: `0002017757962161979110321e04e3d6`

---

NativeChildProcess_Args

typedef struct {...} NativeChildProcess_Args

概述

传递给子进程的参数。

起始版本：
 13

相关模块：

ChildProcess

所在头文件：

native_child_process.h

汇总

[h2]成员变量

名称

描述

char* entryParams

入口参数，大小不能超过150KB。

struct 
NativeChildProcess_FdList
 fdList

传递给子进程的文件描述符信息列表。

---
*2026-04-22T15:53:57.969Z*