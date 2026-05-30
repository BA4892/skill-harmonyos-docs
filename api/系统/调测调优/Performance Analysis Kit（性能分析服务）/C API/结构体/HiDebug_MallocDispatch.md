# HiDebug_MallocDispatch

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-hidebug-hidebug-mallocdispatch`

**DocID**: `44a8f683671e4f0e930340341d658f8e`

**NodeID**: `000201775796341685059878fbf295a7`

---

HiDebug_MallocDispatch

typedef struct HiDebug_MallocDispatch {...} HiDebug_MallocDispatch

概述

应用程序进程可替换/恢复的HiDebug_MallocDispatch表结构类型定义。

起始版本：
 20

相关模块：

HiDebug

所在头文件：

hidebug_type.h

汇总

[h2]成员函数

名称

描述

void* (*malloc)(size_t)

开发者自定义malloc函数指针。

void* (*calloc)(size_t, size_t)

开发者自定义calloc函数指针。

void* (*realloc)(void*, size_t)

开发者自定义realloc函数指针。

void (*free)(void*)

开发者自定义free函数指针。

void* (*mmap)(void*, size_t, int, int, int, off_t)

开发者自定义mmap函数指针。

int (*munmap)(void*, size_t)

开发者自定义munmap函数指针。

成员函数说明

[h2]malloc()

void* (*malloc)(size_t)

描述

开发者自定义malloc函数指针。

[h2]calloc()

void* (*calloc)(size_t, size_t)

描述

开发者自定义calloc函数指针。

[h2]realloc()

void* (*realloc)(void*, size_t)

描述

开发者自定义realloc函数指针。

[h2]free()

void (*free)(void*)

描述

开发者自定义free函数指针。

[h2]mmap()

void* (*mmap)(void*, size_t, int, int, int, off_t)

描述

开发者自定义mmap函数指针。

[h2]munmap()

int (*munmap)(void*, size_t)

描述

开发者自定义munmap函数指针。

---
*2026-04-22T15:55:03.369Z*