# queue.h

> **分区**: API参考  |  **Slug**: `capi-queue-h`  |  **DocID**: `797c53c7e1064517a9238bce284ead52`

---

# queue.h

  #### 概述

声明队列的C接口。

 **引用文件：** <ffrt/queue.h>

 **库：** libffrt.z.so

 **系统能力：** SystemCapability.Resourceschedule.Ffrt.Core

 **起始版本：** 10

 **相关模块：** [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

   #### 汇总

  #### [h2]结构体

 名称 描述   [ffrt_queue_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-t) 队列句柄。       #### [h2]枚举

 名称 typedef关键字 描述   [ffrt_queue_type_t](#ffrt_queue_type_t) ffrt_queue_type_t 队列类型。       #### [h2]函数

 名称 描述   [FFRT_C_API int ffrt_queue_attr_init(ffrt_queue_attr_t* attr)](#ffrt_queue_attr_init) 初始化队列属性。  [FFRT_C_API void ffrt_queue_attr_destroy(ffrt_queue_attr_t* attr)](#ffrt_queue_attr_destroy) 销毁队列属性。  [FFRT_C_API void ffrt_queue_attr_set_qos(ffrt_queue_attr_t* attr, ffrt_qos_t qos)](#ffrt_queue_attr_set_qos) 设置队列QoS属性。  [FFRT_C_API ffrt_qos_t ffrt_queue_attr_get_qos(const ffrt_queue_attr_t* attr)](#ffrt_queue_attr_get_qos) 获取队列QoS属性。  [FFRT_C_API void ffrt_queue_attr_set_timeout(ffrt_queue_attr_t* attr, uint64_t timeout_us)](#ffrt_queue_attr_set_timeout) 设置串行队列timeout属性。超时时间的最小值是1ms，如果设置的值小于1ms，那么超时时间被设置为1ms。  [FFRT_C_API uint64_t ffrt_queue_attr_get_timeout(const ffrt_queue_attr_t* attr)](#ffrt_queue_attr_get_timeout) 获取串行队列任务执行的timeout时间。  [FFRT_C_API void ffrt_queue_attr_set_callback(ffrt_queue_attr_t* attr, ffrt_function_header_t* f)](#ffrt_queue_attr_set_callback) 设置串行队列超时回调方法。

  不建议在f中调用exit函数，可能导致未定义行为。

   [FFRT_C_API ffrt_function_header_t* ffrt_queue_attr_get_callback(const ffrt_queue_attr_t* attr)](#ffrt_queue_attr_get_callback) 获取串行队列超时回调方法。  [FFRT_C_API void ffrt_queue_attr_set_max_concurrency(ffrt_queue_attr_t* attr, const int max_concurrency)](#ffrt_queue_attr_set_max_concurrency) 设置并行队列最大并发度。  [FFRT_C_API int ffrt_queue_attr_get_max_concurrency(const ffrt_queue_attr_t* attr)](#ffrt_queue_attr_get_max_concurrency) 获取并行队列最大并发度。  [FFRT_C_API void ffrt_queue_attr_set_thread_mode(ffrt_queue_attr_t* attr, bool mode)](#ffrt_queue_attr_set_thread_mode) 设置队列中的任务是以协程模式还是以线程模式运行。默认以协程模式运行。  [FFRT_C_API bool ffrt_queue_attr_get_thread_mode(const ffrt_queue_attr_t* attr)](#ffrt_queue_attr_get_thread_mode) 获取队列中的任务是以协程模式还是以线程模式运行。  [FFRT_C_API ffrt_queue_t ffrt_queue_create(ffrt_queue_type_t type, const char* name, const ffrt_queue_attr_t* attr)](#ffrt_queue_create) 创建队列。  [FFRT_C_API void ffrt_queue_destroy(ffrt_queue_t queue)](#ffrt_queue_destroy) 销毁队列。  [FFRT_C_API void ffrt_queue_submit(ffrt_queue_t queue, ffrt_function_header_t* f, const ffrt_task_attr_t* attr)](#ffrt_queue_submit) 提交一个任务到队列中调度执行。  [FFRT_C_API ffrt_task_handle_t ffrt_queue_submit_h(ffrt_queue_t queue, ffrt_function_header_t* f, const ffrt_task_attr_t* attr)](#ffrt_queue_submit_h) 提交一个任务到队列中调度执行，并返回任务句柄。  [FFRT_C_API void ffrt_queue_submit_f(ffrt_queue_t queue, ffrt_function_t func, void* arg, const ffrt_task_attr_t* attr)](#ffrt_queue_submit_f) 提交一个任务到队列中调度执行，是ffrt_queue_submit接口的简化包装形式。该接口假定任务不需要销毁回调函数，给定的任务函数和参数被包装为队列任务结构，并将封装后的任务结构和其他参数传递给ffrt_queue_submit接口。  [FFRT_C_API ffrt_task_handle_t ffrt_queue_submit_h_f(ffrt_queue_t queue, ffrt_function_t func, void* arg, const ffrt_task_attr_t* attr)](#ffrt_queue_submit_h_f) 提交一个任务到队列中调度执行，并返回任务句柄，是ffrt_queue_submit_h接口的简化包装形式。该接口假定任务不需要销毁回调函数，给定的任务函数和参数被包装为队列任务结构，并将封装后的任务结构和其他参数传递给ffrt_queue_submit_h接口。  [FFRT_C_API void ffrt_queue_wait(ffrt_task_handle_t handle)](#ffrt_queue_wait) 等待队列中一个任务执行完成。  [FFRT_C_API int ffrt_queue_cancel(ffrt_task_handle_t handle)](#ffrt_queue_cancel) 取消队列中一个任务。  [FFRT_C_API ffrt_queue_t ffrt_get_main_queue(void)](#ffrt_get_main_queue) 获取主线程队列。  [FFRT_C_API ffrt_queue_t ffrt_get_current_queue(void)](#ffrt_get_current_queue) 获取应用Worker(ArkTs)线程队列。(API18废弃)       #### 枚举类型说明

  #### [h2]ffrt_queue_type_t

enum ffrt_queue_type_t **描述**

 队列类型。

 **起始版本：** 12

  枚举项 描述   ffrt_queue_serial 串行队列  ffrt_queue_concurrent 并行队列  ffrt_queue_max 无效队列类型       #### 函数说明

  #### [h2]ffrt_queue_attr_init()

FFRT_C_API int ffrt_queue_attr_init(ffrt_queue_attr_t* attr) **描述**

 初始化队列属性。

 **起始版本：** 10

 **参数：**

  参数项 描述   [ffrt_queue_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-attr-t)* attr 队列属性指针。     **返回：**

  类型 说明   FFRT_C_API int 执行成功时返回0，

  执行失败时返回-1。

        #### [h2]ffrt_queue_attr_destroy()

FFRT_C_API void ffrt_queue_attr_destroy(ffrt_queue_attr_t* attr) **描述**

 销毁队列属性。

 **起始版本：** 10

 **参数：**

  参数项 描述   [ffrt_queue_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-attr-t)* attr 队列属性指针。       #### [h2]ffrt_queue_attr_set_qos()

FFRT_C_API void ffrt_queue_attr_set_qos(ffrt_queue_attr_t* attr, ffrt_qos_t qos) **描述**

 设置队列QoS属性。

 **起始版本：** 10

 **参数：**

  参数项 描述   [ffrt_queue_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-attr-t)* attr 队列属性指针。  [ffrt_qos_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h#变量) qos QoS属性值。       #### [h2]ffrt_queue_attr_get_qos()

FFRT_C_API ffrt_qos_t ffrt_queue_attr_get_qos(const ffrt_queue_attr_t* attr) **描述**

 获取队列QoS属性。

 **起始版本：** 10

 **参数：**

  参数项 描述   [const ffrt_queue_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-attr-t)* attr 队列属性指针。     **返回：**

  类型 说明   FFRT_C_API [ffrt_qos_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h#变量) 返回队列的QoS属性。       #### [h2]ffrt_queue_attr_set_timeout()

FFRT_C_API void ffrt_queue_attr_set_timeout(ffrt_queue_attr_t* attr, uint64_t timeout_us) **描述**

 设置串行队列timeout属性。超时时间的最小值是1ms，如果设置的值小于1ms，那么超时时间被设置为1ms。

 **起始版本：** 10

 **参数：**

  参数项 描述   [ffrt_queue_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-attr-t)* attr 串行队列属性指针。  uint64_t timeout_us 串行队列任务执行的timeout时间(微秒)。       #### [h2]ffrt_queue_attr_get_timeout()

FFRT_C_API uint64_t ffrt_queue_attr_get_timeout(const ffrt_queue_attr_t* attr) **描述**

 获取串行队列任务执行的timeout时间。

 **起始版本：** 10

 **参数：**

  参数项 描述   [const ffrt_queue_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-attr-t)* attr 串行队列属性指针。     **返回：**

  类型 说明   FFRT_C_API uint64_t 返回串行队列任务执行的timeout时间。       #### [h2]ffrt_queue_attr_set_callback()

FFRT_C_API void ffrt_queue_attr_set_callback(ffrt_queue_attr_t* attr, ffrt_function_header_t* f) **描述**

 设置串行队列超时回调方法。

 不建议在f中调用exit函数，可能导致未定义行为。

 **起始版本：** 10

 **参数：**

  参数项 描述   [ffrt_queue_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-attr-t)* attr 串行队列属性指针。  [ffrt_function_header_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-function-header-t)* f 超时回调方法执行体。       #### [h2]ffrt_queue_attr_get_callback()

FFRT_C_API ffrt_function_header_t* ffrt_queue_attr_get_callback(const ffrt_queue_attr_t* attr) **描述**

 获取串行队列超时回调方法。

 **起始版本：** 10

 **参数：**

  参数项 描述   [const ffrt_queue_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-attr-t)* attr 串行队列属性指针。     **返回：**

  类型 说明   FFRT_C_API [ffrt_function_header_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-function-header-t)* 返回串行队列超时回调方法。       #### [h2]ffrt_queue_attr_set_max_concurrency()

FFRT_C_API void ffrt_queue_attr_set_max_concurrency(ffrt_queue_attr_t* attr, const int max_concurrency) **描述**

 设置并行队列最大并发度。

 **起始版本：** 12

 **参数：**

  参数项 描述   [ffrt_queue_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-attr-t)* attr 队列属性指针。  const int max_concurrency 最大并发度。       #### [h2]ffrt_queue_attr_get_max_concurrency()

FFRT_C_API int ffrt_queue_attr_get_max_concurrency(const ffrt_queue_attr_t* attr) **描述**

 获取并行队列最大并发度。

 **起始版本：** 12

 **参数：**

  参数项 描述   [const ffrt_queue_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-attr-t)* attr 队列属性指针。     **返回：**

  类型 说明   FFRT_C_API int 返回最大并发度。       #### [h2]ffrt_queue_attr_set_thread_mode()

FFRT_C_API void ffrt_queue_attr_set_thread_mode(ffrt_queue_attr_t* attr, bool mode) **描述**

 设置队列中的任务是以协程模式还是以线程模式运行。默认以协程模式运行。

 **起始版本：** 20

 **参数：**

  参数项 描述   [ffrt_queue_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-attr-t)* attr 队列属性指针。  bool mode 设置队列任务运行方式。true表示以线程模式运行, false表示以协程方式运行。       #### [h2]ffrt_queue_attr_get_thread_mode()

FFRT_C_API bool ffrt_queue_attr_get_thread_mode(const ffrt_queue_attr_t* attr) **描述**

 获取队列中的任务是以协程模式还是以线程模式运行。

 **起始版本：** 20

 **参数：**

  参数项 描述   [const ffrt_queue_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-attr-t)* attr 队列属性指针。     **返回：**

  类型 说明   FFRT_C_API bool true表示以线程模式运行，false表示以协程模式运行。       #### [h2]ffrt_queue_create()

FFRT_C_API ffrt_queue_t ffrt_queue_create(ffrt_queue_type_t type, const char* name, const ffrt_queue_attr_t* attr) **描述**

 创建队列。

 **起始版本：** 10

 **参数：**

  参数项 描述   [ffrt_queue_type_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-queue-h#ffrt_queue_type_t) type 队列类型。  const char* name 队列名字。  [const ffrt_queue_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-attr-t)* attr 队列属性。     **返回：**

  类型 说明   FFRT_C_API [ffrt_queue_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-t) 创建队列成功返回非空队列句柄，

  创建队列失败返回空指针。

        #### [h2]ffrt_queue_destroy()

FFRT_C_API void ffrt_queue_destroy(ffrt_queue_t queue) **描述**

 销毁队列。

 **起始版本：** 10

 **参数：**

  参数项 描述   [ffrt_queue_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-t) queue 队列句柄。       #### [h2]ffrt_queue_submit()

FFRT_C_API void ffrt_queue_submit(ffrt_queue_t queue, ffrt_function_header_t* f, const ffrt_task_attr_t* attr) **描述**

 提交一个任务到队列中调度执行。

 **起始版本：** 10

 **参数：**

  参数项 描述   [ffrt_queue_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-t) queue 队列句柄。  [ffrt_function_header_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-function-header-t)* f 任务的执行体。  [const ffrt_task_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-task-attr-t)* attr 任务属性。       #### [h2]ffrt_queue_submit_h()

FFRT_C_API ffrt_task_handle_t ffrt_queue_submit_h(ffrt_queue_t queue, ffrt_function_header_t* f, const ffrt_task_attr_t* attr) **描述**

 提交一个任务到队列中调度执行，并返回任务句柄。

 **起始版本：** 10

 **参数：**

  参数项 描述   [ffrt_queue_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-t) queue 队列句柄。  [ffrt_function_header_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-function-header-t)* f 任务的执行体。  [const ffrt_task_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-task-attr-t)* attr 任务属性。     **返回：**

  类型 说明   FFRT_C_API [ffrt_task_handle_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-task-handle-t) 提交成功返回非空任务句柄，

  提交失败返回空指针。

        #### [h2]ffrt_queue_submit_f()

FFRT_C_API void ffrt_queue_submit_f(ffrt_queue_t queue, ffrt_function_t func, void* arg, const ffrt_task_attr_t* attr) **描述**

 提交一个任务到队列中调度执行，是ffrt_queue_submit接口的简化包装形式。该接口假定任务不需要销毁回调函数，给定的任务函数和参数被包装为队列任务结构，并将封装后的任务结构和其他参数传递给ffrt_queue_submit接口。

 **起始版本：** 20

 **参数：**

  参数项 描述   [ffrt_queue_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-t) queue 队列句柄。  [ffrt_function_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h#ffrt_function_t) func 指定的任务函数。  void* arg 传递给任务函数的参数。  [const ffrt_task_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-task-attr-t)* attr 任务属性。     **参考：**

 [ffrt_queue_submit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-queue-h#ffrt_queue_submit)

   #### [h2]ffrt_queue_submit_h_f()

FFRT_C_API ffrt_task_handle_t ffrt_queue_submit_h_f(ffrt_queue_t queue, ffrt_function_t func, void* arg, const ffrt_task_attr_t* attr) **描述**

 提交一个任务到队列中调度执行，并返回任务句柄，是ffrt_queue_submit_h接口的简化包装形式。该接口假定任务不需要销毁回调函数，给定的任务函数和参数被包装为队列任务结构，并将封装后的任务结构和其他参数传递给ffrt_queue_submit_h接口。

 **起始版本：** 20

 **参数：**

  参数项 描述   [ffrt_queue_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-t) queue 队列句柄。  [ffrt_function_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h#ffrt_function_t) func 指定的任务函数。  void* arg 传递给任务函数的参数。  [const ffrt_task_attr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-task-attr-t)* attr 任务属性。     **返回：**

  类型 说明   FFRT_C_API [ffrt_task_handle_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-task-handle-t) 提交成功返回非空任务句柄，

  提交失败返回空指针。

      **参考：**

 [ffrt_queue_submit_h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-queue-h#ffrt_queue_submit_h)

   #### [h2]ffrt_queue_wait()

FFRT_C_API void ffrt_queue_wait(ffrt_task_handle_t handle) **描述**

 等待队列中一个任务执行完成。

 **起始版本：** 10

 **参数：**

  参数项 描述   [ffrt_task_handle_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-task-handle-t) handle 任务句柄。       #### [h2]ffrt_queue_cancel()

FFRT_C_API int ffrt_queue_cancel(ffrt_task_handle_t handle) **描述**

 取消队列中一个任务。

 **起始版本：** 10

 **参数：**

  参数项 描述   [ffrt_task_handle_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-task-handle-t) handle 任务句柄。     **返回：**

  类型 说明   FFRT_C_API int 取消任务成功返回0，

  取消任务失败返回-1。

        #### [h2]ffrt_get_main_queue()

FFRT_C_API ffrt_queue_t ffrt_get_main_queue(void) **描述**

 获取主线程队列。

 **起始版本：** 12

 **返回：**

  类型 说明   FFRT_C_API [ffrt_queue_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-t) 返回主线程队列句柄。       #### [h2]ffrt_get_current_queue()

FFRT_C_API ffrt_queue_t ffrt_get_current_queue(void) **描述**

 获取应用Worker(ArkTs)线程队列。

 **起始版本：** 12

 **废弃版本：** 18

 **返回：**

  类型 说明   FFRT_C_API ffrt_queue_t 返回当前线程队列句柄。

---
*Updated: 2026-04-22 06:48:48*
