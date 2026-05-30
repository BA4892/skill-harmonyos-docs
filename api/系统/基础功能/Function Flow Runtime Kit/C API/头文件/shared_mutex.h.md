# shared_mutex.h

> **分区**: API参考  |  **Slug**: `capi-shared-mutex-h`  |  **DocID**: `ecba27f0a40a43f7938e193f2389d2a4`

---

# shared_mutex.h

  #### 概述

声明rwlock的C接口。

 **引用文件：** <ffrt/shared_mutex.h>

 **库：** libffrt.z.so

 **系统能力：** SystemCapability.Resourceschedule.Ffrt.Core

 **起始版本：** 18

 **相关模块：** [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

   #### 汇总

  #### [h2]函数

 名称 描述   [FFRT_C_API int ffrt_rwlock_init(ffrt_rwlock_t* rwlock, const ffrt_rwlockattr_t* attr)](#ffrt_rwlock_init) 初始化rwlock。  [FFRT_C_API int ffrt_rwlock_wrlock(ffrt_rwlock_t* rwlock)](#ffrt_rwlock_wrlock) 获取写锁。  [FFRT_C_API int ffrt_rwlock_trywrlock(ffrt_rwlock_t* rwlock)](#ffrt_rwlock_trywrlock) 尝试获取写锁。  [FFRT_C_API int ffrt_rwlock_rdlock(ffrt_rwlock_t* rwlock)](#ffrt_rwlock_rdlock) 获取读锁。  [FFRT_C_API int ffrt_rwlock_tryrdlock(ffrt_rwlock_t* rwlock)](#ffrt_rwlock_tryrdlock) 尝试获取读锁。  [FFRT_C_API int ffrt_rwlock_unlock(ffrt_rwlock_t* rwlock)](#ffrt_rwlock_unlock) 释放rwlock。  [FFRT_C_API int ffrt_rwlock_destroy(ffrt_rwlock_t* rwlock)](#ffrt_rwlock_destroy) 销毁rwlock。       #### 函数说明

  #### [h2]ffrt_rwlock_init()

FFRT_C_API int ffrt_rwlock_init(ffrt_rwlock_t* rwlock, const ffrt_rwlockattr_t* attr) **描述**

 初始化rwlock。

 **起始版本：** 18

 **参数：**

  参数项 描述   [ffrt_rwlock_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-rwlock-t)* rwlock rwlock指针。  [const ffrt_rwlockattr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-rwlockattr-t)* attr rwlock属性指针，仅支持默认，即设定为空指针。     **返回：**

  类型 说明   FFRT_C_API int rwlock不为空，且attr为空则初始化成功，返回ffrt_success，

  反之初始化rwlock失败，返回ffrt_error_inval。

        #### [h2]ffrt_rwlock_wrlock()

FFRT_C_API int ffrt_rwlock_wrlock(ffrt_rwlock_t* rwlock) **描述**

 获取写锁。

 **起始版本：** 18

 **参数：**

  参数项 描述   [ffrt_rwlock_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-rwlock-t)* rwlock rwlock指针。     **返回：**

  类型 说明   FFRT_C_API int 获取写锁成功返回ffrt_success，

  获取写锁失败返回ffrt_error_inval或者阻塞当前任务。

        #### [h2]ffrt_rwlock_trywrlock()

FFRT_C_API int ffrt_rwlock_trywrlock(ffrt_rwlock_t* rwlock) **描述**

 尝试获取写锁。

 **起始版本：** 18

 **参数：**

  参数项 描述   [ffrt_rwlock_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-rwlock-t)* rwlock rwlock指针。     **返回：**

  类型 说明   FFRT_C_API int 获取写锁成功返回ffrt_success，

  获取写锁失败返回ffrt_error_inval或ffrt_error_busy。

        #### [h2]ffrt_rwlock_rdlock()

FFRT_C_API int ffrt_rwlock_rdlock(ffrt_rwlock_t* rwlock) **描述**

 获取读锁。

 **起始版本：** 18

 **参数：**

  参数项 描述   [ffrt_rwlock_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-rwlock-t)* rwlock rwlock指针。     **返回：**

  类型 说明   FFRT_C_API int 获取读锁成功返回ffrt_success，

  获取读锁失败返回ffrt_error_inval或者阻塞当前任务。

        #### [h2]ffrt_rwlock_tryrdlock()

FFRT_C_API int ffrt_rwlock_tryrdlock(ffrt_rwlock_t* rwlock) **描述**

 尝试获取读锁。

 **起始版本：** 18

 **参数：**

  参数项 描述   [ffrt_rwlock_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-rwlock-t)* rwlock rwlock指针。     **返回：**

  类型 说明   FFRT_C_API int 获取读锁成功返回ffrt_success，

  获取读锁失败返回ffrt_error_inval或ffrt_error_busy。

        #### [h2]ffrt_rwlock_unlock()

FFRT_C_API int ffrt_rwlock_unlock(ffrt_rwlock_t* rwlock) **描述**

 释放rwlock。

 **起始版本：** 18

 **参数：**

  参数项 描述   [ffrt_rwlock_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-rwlock-t)* rwlock rwlock指针。     **返回：**

  类型 说明   FFRT_C_API int 释放rwlock成功返回ffrt_success，

  释放rwlock失败返回ffrt_error_inval。

        #### [h2]ffrt_rwlock_destroy()

FFRT_C_API int ffrt_rwlock_destroy(ffrt_rwlock_t* rwlock) **描述**

 销毁rwlock。

 **起始版本：** 18

 **参数：**

  参数项 描述   [ffrt_rwlock_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-rwlock-t)* rwlock rwlock指针。     **返回：**

  类型 说明   FFRT_C_API int 销毁rwlock成功返回ffrt_success，

 销毁rwlock失败返回ffrt_error_inval。

---
*Updated: 2026-04-22 06:48:54*
