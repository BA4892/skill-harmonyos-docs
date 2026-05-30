# OH_VBucket

> **分区**: API参考  |  **Slug**: `capi-rdb-oh-vbucket`  |  **DocID**: `7cdc45019f354595a647e5207981c8a6`

---

# OH_VBucket

 ```
typedef struct {...} OH_VBucket
```
  #### 概述

用于存储键值对的类型。

 **起始版本：** 10

 **相关模块：** [RDB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb)

 **所在头文件：** [oh_values_bucket.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-values-bucket-h)

   #### [h2]成员变量

 名称 描述   int64_t id OH_VBucket结构体的唯一标识符。  uint16_t capability 表示结构体的存储键值对的数量。       #### [h2]成员函数

 名称 描述   [int (*putText)(OH_VBucket *bucket, const char *field, const char *value)](#puttext) 将char*值放入给定列名的OH_VBucket对象中。  [int (*putInt64)(OH_VBucket *bucket, const char *field, int64_t value)](#putint64) 将int64_t值放入给定列名的OH_VBucket对象中。  [int (*putReal)(OH_VBucket *bucket, const char *field, double value)](#putreal) 将double值放入给定列名的OH_VBucket对象中。  [int (*putBlob)(OH_VBucket *bucket, const char *field, const uint8_t *value, uint32_t size)](#putblob) 将const uint8_t *值放入给定列名的OH_VBucket对象中。  [int (*putNull)(OH_VBucket *bucket, const char *field)](#putnull) 将NULL值放入给定列名的OH_VBucket对象中。  [int (*clear)(OH_VBucket *bucket)](#clear) 清空OH_VBucket对象。  [int (*destroy)(OH_VBucket *bucket)](#destroy) 销毁OH_VBucket对象，并回收该对象占用的内存。       #### [h2]成员函数说明

  #### [h2]putText()

int (*putText)(OH_VBucket *bucket, const char *field, const char *value) **描述**

 将char*值放入给定列名的OH_VBucket对象中。

 **起始版本：** 10

 **参数：**

  参数项 描述   OH_VBucket *bucket 表示指向OH_VBucket实例的指针。  const char *field 数据库表中的列名  const char *value 数据库表中指定列名对应的值。     **返回：**

  类型 说明   int 返回操作是否成功，出错时返回对应的错误码。       #### [h2]putInt64()

int (*putInt64)(OH_VBucket *bucket, const char *field, int64_t value) **描述**

 将int64_t值放入给定列名的OH_VBucket对象中。

 **起始版本：** 10

 **参数：**

  参数项 描述   OH_VBucket *bucket 表示指向OH_VBucket实例的指针。  const char *field 数据库表中的列名  int64_t value 数据库表中指定列名对应的值。     **返回：**

  类型 说明   int 返回操作是否成功，出错时返回对应的错误码。       #### [h2]putReal()

int (*putReal)(OH_VBucket *bucket, const char *field, double value) **描述**

 将double值放入给定列名的OH_VBucket对象中。

 **起始版本：** 10

 **参数：**

  参数项 描述   OH_VBucket *bucket 表示指向OH_VBucket实例的指针。  const char *field 数据库表中的列名  double value 数据库表中指定列名对应的值。     **返回：**

  类型 说明   int 返回操作是否成功，出错时返回对应的错误码。       #### [h2]putBlob()

int (*putBlob)(OH_VBucket *bucket, const char *field, const uint8_t *value, uint32_t size) **描述**

 将const uint8_t *值放入给定列名的OH_VBucket对象中。

 **起始版本：** 10

 **参数：**

  参数项 描述   OH_VBucket *bucket 表示指向OH_VBucket实例的指针。  const char *field 数据库表中的列名  const uint8_t *value 数据库表中指定列名对应的值。  uint32_t size 表示value的长度。     **返回：**

  类型 说明   int 返回操作是否成功，出错时返回对应的错误码。       #### [h2]putNull()

int (*putNull)(OH_VBucket *bucket, const char *field) **描述**

 将NULL值放入给定列名的OH_VBucket对象中。

 **起始版本：** 10

 **参数：**

  参数项 描述   OH_VBucket *bucket 表示指向OH_VBucket实例的指针。  const char *field 数据库表中的列名     **返���：**

  类型 说明   int 返回操作是否成功，出错时返回对应的错误码。       #### [h2]clear()

int (*clear)(OH_VBucket *bucket) **描述**

 清空[OH_VBucket](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-vbucket)对象。

 **起始版本：** 10

 **参数：**

  参数项 描述   OH_VBucket *bucket 表示指向OH_VBucket实例的指针。     **返回：**

  类型 说明   int 返回操作是否成功，出错时返回对应的错误码。       #### [h2]destroy()

int (*destroy)(OH_VBucket *bucket) **描述**

 销毁[OH_VBucket](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-vbucket)对象，并回收该对象占用的内存。

 **起始版本：** 10

 **参数：**

  参数项 描述   OH_VBucket *bucket 表示指向OH_VBucket实例的指针。     **返回：**

  类型 说明   int 返回操作是否成功，出错时返回对应的错误码。

---
*Updated: 2026-04-22 06:43:44*
