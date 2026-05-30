# NativeChildProcess_FdList

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-nativechildprocess-fdlist`

**DocID**: `437dd304fec543fbada410f270e864fb`

**NodeID**: `00020177579621619782199781bfb501`

---

NativeChildProcess_FdList

typedef struct NativeChildProcess_FdList {...} NativeChildProcess_FdList

概述

传递给子进程的文件描述符信息列表，文件描述符记录个数不能超过16个。

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

struct 
NativeChildProcess_Fd
* head

子进程文件描述符记录链表中的第一个记录。

---
*2026-04-22T15:55:01.455Z*