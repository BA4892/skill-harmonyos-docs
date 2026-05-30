# oh_rdb_types.h

> **分区**: API参考  |  **Slug**: `capi-oh-rdb-types-h`  |  **DocID**: `69dc6287053e4a48967de2cfbfc0f4f0`

---

# oh_rdb_types.h

  #### 概述

提供与数据值相关的类型定义。

 **引用文件：** <database/rdb/oh_rdb_types.h>

 **库：** libnative_rdb_ndk.z.so

 **系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

 **起始版本：** 18

 **相关模块：** [RDB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [OH_RDB_ReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext) OH_RDB_ReturningContext returning相关接口的上下文。       #### [h2]枚举

 名称 typedef关键字 描述   [Rdb_ConflictResolution](#rdb_conflictresolution) Rdb_ConflictResolution 表示冲突解决策略的枚举。       #### [h2]函数

 名称 描述   [OH_RDB_ReturningContext *OH_RDB_CreateReturningContext(void)](#oh_rdb_createreturningcontext) 创建[OH_RDB_ReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext)的实例对象。  [void OH_RDB_DestroyReturningContext(OH_RDB_ReturningContext *context)](#oh_rdb_destroyreturningcontext) 销毁[OH_RDB_ReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext)实例对象。  [int OH_RDB_SetReturningFields(OH_RDB_ReturningContext *context, const char *const fields[], int32_t len)](#oh_rdb_setreturningfields) 设置结果集中返回的字段。  [int OH_RDB_SetMaxReturningCount(OH_RDB_ReturningContext *context, int32_t count)](#oh_rdb_setmaxreturningcount) 设置返回结果集的最大行数量。  [OH_Cursor *OH_RDB_GetReturningValues(OH_RDB_ReturningContext *context)](#oh_rdb_getreturningvalues) 获取数据变化的游标，默认包含1024条。  [int64_t OH_RDB_GetChangedCount(OH_RDB_ReturningContext *context)](#oh_rdb_getchangedcount) 获取受此操作影响的数据行的数量。       #### 枚举类型说明

  #### [h2]Rdb_ConflictResolution

enum Rdb_ConflictResolution **描述**

 表示冲突解决策略的枚举。

 **起始版本：** 18

  枚举项 描述   RDB_CONFLICT_NONE = 1 发生冲突时不执行任何操作。  RDB_CONFLICT_ROLLBACK 发生冲突时抛错误码，同时回滚本次事务。  RDB_CONFLICT_ABORT 发生冲突时抛错误码，同时回滚本次修改。  RDB_CONFLICT_FAIL 发生冲突时抛错误码，不回滚冲突前的修改同时终止本次修改。  RDB_CONFLICT_IGNORE 发生冲突时忽略冲突的数据，继续执行后续修改。  RDB_CONFLICT_REPLACE 发生冲突时，尝试删除后插入，如果还是冲突则等同于RDB_CONFLICT_ABORT。       #### 函数说明

  #### [h2]OH_RDB_CreateReturningContext()

OH_RDB_ReturningContext *OH_RDB_CreateReturningContext(void) **描述**

 创建[OH_RDB_ReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext)的实例对象。

 **起始版本：** 23

 **返回：**

  类型 说明   [OH_RDB_ReturningContext *](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext) 执行成功时返回指向[OH_RDB_ReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext)实例的指针。

 否则返回nullptr。使用完成后必须通过[OH_RDB_DestroyReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-rdb-types-h#oh_rdb_destroyreturningcontext)接口释放内存。

        #### [h2]OH_RDB_DestroyReturningContext()

void OH_RDB_DestroyReturningContext(OH_RDB_ReturningContext *context) **描述**

 销毁[OH_RDB_ReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext)实例对象。

 **起始版本：** 23

 **参数：**

  参数项 描述   [OH_RDB_ReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext) *context 指向[OH_RDB_ReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext)实例的指针。       #### [h2]OH_RDB_SetReturningFields()

int OH_RDB_SetReturningFields(OH_RDB_ReturningContext *context, const char *const fields[], int32_t len) **描述**

 设置结果集中返回的字段。

 **起始版本：** 23

 **参数：**

  参数项 描述   [OH_RDB_ReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext) *context 指向[OH_RDB_ReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext)实例的指针。  const char *const fields[] 要返回的列名。  int32_t len 字段长度。     **返回：**

  类型 说明   int 返回执行结果。

 执行成功返回RDB_OK。

 输入参数无效返回RDB_E_INVALID_ARGS。

        #### [h2]OH_RDB_SetMaxReturningCount()

int OH_RDB_SetMaxReturningCount(OH_RDB_ReturningContext *context, int32_t count) **描述**

 设置返回结果集的最大行数量。

 **起始版本：** 23

 **参数：**

  参数项 描述   [OH_RDB_ReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext) *context 指向[OH_RDB_ReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext)实例的指针。  int32_t count 表示返回结果集的最大条目数。     **返回：**

  类型 说明   int 返回执行结果。

 执行成功返回RDB_OK。

 输入参数无效返回RDB_E_INVALID_ARGS。

        #### [h2]OH_RDB_GetReturningValues()

OH_Cursor *OH_RDB_GetReturningValues(OH_RDB_ReturningContext *context) **描述**

 获取数据变化的游标，默认包含1024条。

 **起始版本：** 23

 **参数：**

  参数项 描述   [OH_RDB_ReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext) *context 指向[OH_RDB_ReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext)实例的指针。     **返回：**

  类型 说明   OH_Cursor * 返回指向[OH_Cursor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-cursor)结构体实例的指针。

 如果获取游标失败，则返回nullptr。使用[OH_RDB_DestroyReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-rdb-types-h#oh_rdb_destroyreturningcontext)接口释放内存时会销毁游标，无需单独释放。

        #### [h2]OH_RDB_GetChangedCount()

int64_t OH_RDB_GetChangedCount(OH_RDB_ReturningContext *context) **描述**

 获取受此操作影响的数据行的数量。

 **起始版本：** 23

 **参数：**

  参数项 描述   [OH_RDB_ReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext) *context 指向[OH_RDB_ReturningContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-returningcontext)实例的指针。     **返回：**

  类型 说明   int64_t 返回已更改的条目数，如果获取变更失败则返回-1。

---
*Updated: 2026-04-22 06:44:44*
