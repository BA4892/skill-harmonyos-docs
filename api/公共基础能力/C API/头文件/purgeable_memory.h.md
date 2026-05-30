# purgeable_memory.h

> **分区**: API参考  |  **Slug**: `capi-purgeable-memory-h`  |  **DocID**: `f339662b82684ebb8550f2d8a3b7ad06`

---

# purgeable_memory.h

  #### 概述

提供可丢弃内存的内存管理功能。

 提供的功能包括创建、开始读取、结束读取、开始写入、结束写入、重建等。

 使用时需要链接libpurgeable_memory_ndk.z.so。

 **引用文件：** <purgeable_memory/purgeable_memory.h>

 **库：** libpurgeable_memory_ndk.z.so

 **系统能力：** SystemCapability.Kernel.Memory

 **起始版本：** 10

 **相关模块：** [memory](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem) OH_PurgeableMemory 可清除的内存结构。       #### [h2]函数

 名称 typedef关键字 描述   [typedef bool (*OH_PurgeableMemory_ModifyFunc)(void *, size_t, void *)](#oh_purgeablememory_modifyfunc) OH_PurgeableMemory_ModifyFunc 函数指针，它指向一个用于构建可丢弃内存对象的内容的函数。  [OH_PurgeableMemory *OH_PurgeableMemory_Create(size_t size, OH_PurgeableMemory_ModifyFunc func, void *funcPara)](#oh_purgeablememory_create) - 创建一个[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)对象。  [bool OH_PurgeableMemory_Destroy(OH_PurgeableMemory *purgObj)](#oh_purgeablememory_destroy) - 销毁[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)对象。  [bool OH_PurgeableMemory_BeginRead(OH_PurgeableMemory *purgObj)](#oh_purgeablememory_beginread) - 开始读取[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)。  [void OH_PurgeableMemory_EndRead(OH_PurgeableMemory *purgObj)](#oh_purgeablememory_endread) - 结束读取[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)。  [bool OH_PurgeableMemory_BeginWrite(OH_PurgeableMemory *purgObj)](#oh_purgeablememory_beginwrite) - 开始修改[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)。  [void OH_PurgeableMemory_EndWrite(OH_PurgeableMemory *purgObj)](#oh_purgeablememory_endwrite) - 结束修改[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)。  [void *OH_PurgeableMemory_GetContent(OH_PurgeableMemory *purgObj)](#oh_purgeablememory_getcontent) - 获取[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)的内容的指针。  [size_t OH_PurgeableMemory_ContentSize(OH_PurgeableMemory *purgObj)](#oh_purgeablememory_contentsize) - 获取[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)对象的内容大小。  [bool OH_PurgeableMemory_AppendModify(OH_PurgeableMemory *purgObj, OH_PurgeableMemory_ModifyFunc func, void *funcPara)](#oh_purgeablememory_appendmodify) - 将修改附加到[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)。       #### 函数说明

  #### [h2]OH_PurgeableMemory_ModifyFunc()

typedef bool (*OH_PurgeableMemory_ModifyFunc)(void *, size_t, void *) **描述**

 函数指针，它指向一个用于构建可丢弃内存对象的内容的函数。

 **起始版本：** 10

 **参数：**

  参数项 描述   void * 数据指针，指向可丢弃内存对象的内容的起始地址。  size_t 内容的数据大小。  void * 其他私有参数。     **返回：**

  类型 说明   bool 返回构建内容是否成功。true表示成功；false表示失败。       #### [h2]OH_PurgeableMemory_Create()

OH_PurgeableMemory *OH_PurgeableMemory_Create(size_t size, OH_PurgeableMemory_ModifyFunc func, void *funcPara) **描述**

 创建一个[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)对象。

 **起始版本：** 10

 **参数：**

  参数项 描述   size_t size 可丢弃内存对象内容的数据大小。  [OH_PurgeableMemory_ModifyFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-purgeable-memory-h#oh_purgeablememory_modifyfunc) func 函数指针，用于在可丢弃内存对象的内容被清除时恢复数据。  void *funcPara @func 使用的参数。     **返回：**

  类型 说明   [OH_PurgeableMemory *](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem) 可丢弃内存对象。       #### [h2]OH_PurgeableMemory_Destroy()

bool OH_PurgeableMemory_Destroy(OH_PurgeableMemory *purgObj) **描述**

 销毁[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)对象。

 **起始版本：** 10

 **参数：**

  参数项 描述   [OH_PurgeableMemory](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem) *purgObj 待销毁的可丢弃内存对象。     **返回：**

  类型 说明   bool 返回销毁是否成功，true表示成功，false表示失败。如果可丢弃内存对象为NULL，则返回true。

  如果销毁成功，返回true，可丢弃内存对象将被设置为NULL以避免Use-After-Free。

        #### [h2]OH_PurgeableMemory_BeginRead()

bool OH_PurgeableMemory_BeginRead(OH_PurgeableMemory *purgObj) **描述**

 开始读取[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)。

 **起始版本：** 10

 **参数：**

  参数项 描述   [OH_PurgeableMemory](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem) *purgObj 可丢弃内存对象。     **返回：**

  类型 说明   bool 返回读取是否成功，如果可丢弃内存对象的内容存在则返回true。

  如果内容被清除（即不存在），系统将尝试恢复其数据。

  如果恢复失败，则返回false。

  如果恢复成功，则返回true。

  当此函数返回true时，系统无法回收可丢弃内存对象的内容的内存，直到调用[OH_PurgeableMemory_EndRead()](#oh_purgeablememory_endread)

        #### [h2]OH_PurgeableMemory_EndRead()

void OH_PurgeableMemory_EndRead(OH_PurgeableMemory *purgObj) **描述**

 结束读取[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)。

 **起始版本：** 10

 **参数：**

  参数项 描述   [OH_PurgeableMemory](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem) *purgObj 可丢弃内存对象。当此函数执行结束，操作系统可能会稍后回收可丢弃内存对象的内容的内存。       #### [h2]OH_PurgeableMemory_BeginWrite()

bool OH_PurgeableMemory_BeginWrite(OH_PurgeableMemory *purgObj) **描述**

 开始修改[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)。

 **起始版本：** 10

 **参数：**

  参数项 描述   [OH_PurgeableMemory](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem) *purgObj 可丢弃内存对象。     **返回：**

  类型 说明   bool 表示可丢弃内存对象的内容是否存在，如果可丢弃内存对象的内容存在则返回 true。

  如果内容被清除（不存在），系统将恢复其数据，

  如果内容被清除并且恢复失败，则返回 false。

  如果内容恢复成功则返回 true。

  当此函数返回true时，操作系统无法回收可丢弃内存对象的内容的内存，直到调用 [OH_PurgeableMemory_EndWrite()](#oh_purgeablememory_endwrite)。

        #### [h2]OH_PurgeableMemory_EndWrite()

void OH_PurgeableMemory_EndWrite(OH_PurgeableMemory *purgObj) **描述**

 结束修改[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)。

 **起始版本：** 10

 **参数：**

  参数项 描述   [OH_PurgeableMemory](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem) *purgObj 可丢弃内存对象。当此函数执行结束时，操作系统可能会稍后回收可丢弃内存对象的内容的内存。       #### [h2]OH_PurgeableMemory_GetContent()

void *OH_PurgeableMemory_GetContent(OH_PurgeableMemory *purgObj) **描述**

 获取[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)的内容的指针。

 **起始版本：** 10

 **参数：**

  参数项 描述   [OH_PurgeableMemory](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem) *purgObj 可丢弃内存对象。     **返回：**

  类型 说明   void * 返回可丢弃内存对象的内容的起始地址。

  如果可丢弃内存对象为NULL，则返回NULL。

  此函数应受[OH_PurgeableMemory_BeginRead()](#oh_purgeablememory_beginread)/[OH_PurgeableMemory_EndRead()](#oh_purgeablememory_endread)或者[OH_PurgeableMemory_BeginWrite()](#oh_purgeablememory_beginwrite)/[OH_PurgeableMemory_EndWrite()](#oh_purgeablememory_endwrite)保护

        #### [h2]OH_PurgeableMemory_ContentSize()

size_t OH_PurgeableMemory_ContentSize(OH_PurgeableMemory *purgObj) **描述**

 获取[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)对象的内容大小。

 **起始版本：** 10

 **参数：**

  参数项 描述   [OH_PurgeableMemory](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem) *purgObj 可丢弃内存对象。     **返回：**

  类型 说明   size_t 返回可丢弃内存对象的内容的大小。

  如果可丢弃内存对象为NULL，则返回0。

        #### [h2]OH_PurgeableMemory_AppendModify()

bool OH_PurgeableMemory_AppendModify(OH_PurgeableMemory *purgObj, OH_PurgeableMemory_ModifyFunc func, void *funcPara) **描述**

 将修改附加到[PurgMem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem)。

 **起始版本：** 10

 **参数：**

  参数项 描述   [OH_PurgeableMemory](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-memory-purgmem) *purgObj 可丢弃内存对象。  [OH_PurgeableMemory_ModifyFunc](#oh_purgeablememory_modifyfunc) func 函数指针，用于修改可丢弃内存对象的内容。  void *funcPara @func 使用的参数。     **返回：**

  类型 说明   bool 返回追加结果。true表示成功；false表示失败。

---
*Updated: 2026-04-22 06:40:22*
