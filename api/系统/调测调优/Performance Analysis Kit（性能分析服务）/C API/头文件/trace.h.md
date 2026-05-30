# trace.h

> **分区**: API参考  |  **Slug**: `capi-trace-h`  |  **DocID**: `892b7e7214cb4950ae066d4a69f0059f`

---

# trace.h

  #### 概述

HiTraceMeter和HiTraceChain模块接口定义，通过这些接口实现性能打点和分布式跟踪功能。

  用户态trace格式使用竖线字符作为分隔符，所以通过HiTraceMeter接口传递的字符串类型参数应避免包含该字符，防止trace解析异常。

  用户态trace总长度限制512字符，超过的部分将会被截断。

 **引用文件：** <hitrace/trace.h>

 **库：** libhitrace_ndk.z.so

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 10

 **相关模块：** [Hitrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) HiTraceId HiTraceId定义。       #### [h2]枚举

 名称 typedef关键字 描述   [HiTraceId_Valid](#hitraceid_valid) HiTraceId_Valid HiTraceId是否有效标志。  [HiTrace_Version](#hitrace_version) HiTrace_Version HiTrace版本号。  [HiTrace_Flag](#hitrace_flag) HiTrace_Flag HiTrace跟踪标志。  [HiTrace_Tracepoint_Type](#hitrace_tracepoint_type) HiTrace_Tracepoint_Type 跟踪埋点类型枚举。  [HiTrace_Communication_Mode](#hitrace_communication_mode) HiTrace_Communication_Mode 跟踪通信类型枚举。  [HiTrace_Output_Level](#hitrace_output_level) HiTrace_Output_Level HiTrace输出级别。低于系统跟踪输出级别阈值的打点将不会生效。log版本阈值为[HITRACE_LEVEL_INFO](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_output_level)；nolog版本阈值为[HITRACE_LEVEL_COMMERCIAL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_output_level)。       #### [h2]函数

 名称 typedef关键字 描述   [typedef void (*OH_HiTrace_TraceEventListener)(bool traceStatus)](#oh_hitrace_traceeventlistener) OH_HiTrace_TraceEventListener 定义应用trace捕获开关状态切换时的回调函数类型。  [HiTraceId OH_HiTrace_BeginChain(const char *name, int flags)](#oh_hitrace_beginchain) - 开始跟踪。

  当前线程TLS（Thread Local Storage，线程本地存储）中不存在有效的HiTraceId时，生成有效的HiTraceId并设置到当前线程TLS中，返回该HiTraceId。

  当前线程TLS中已存在有效的HiTraceId时，不会开始新的跟踪，返回各属性值均为0的无效HiTraceId。

   [void OH_HiTrace_EndChain()](#oh_hitrace_endchain) - 结束跟踪。

  结束跟踪并将当前线程TLS中的HiTraceId设置为无效。

   [HiTraceId OH_HiTrace_GetId()](#oh_hitrace_getid) - 获取跟踪标识。

  获取当前线程TLS中的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。

   [void OH_HiTrace_SetId(const HiTraceId *id)](#oh_hitrace_setid) - 设置跟踪标识。

  将给定的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)设置到当前线程TLS中。若传入的参数无效，则不执行任何操作。

   [void OH_HiTrace_ClearId(void)](#oh_hitrace_clearid) - 清除跟踪标识。

  将当前线程TLS中的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)设置为无效。

   [HiTraceId OH_HiTrace_CreateSpan(void)](#oh_hitrace_createspan) - 创建跟踪分支。

  创建一个[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)，使用当前线程TLS中的chainId、spanId初始化其chainId、parentSpanId，并为其生成一个新的spanId。

   [void OH_HiTrace_Tracepoint(HiTrace_Communication_Mode mode, HiTrace_Tracepoint_Type type, const HiTraceId *id, const char *fmt, ...)](#oh_hitrace_tracepoint) - HiTraceMeter跟踪信息埋点。

  type为客户端发送[HITRACE_TP_CS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)和服务端接收[HITRACE_TP_SR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)时，进行同步HiTraceMeter开始打点；type为客户端接收[HITRACE_TP_CR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)和服务端发送[HITRACE_TP_SS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)时，进行同步HiTraceMeter结束打点；type为通用类型[HITRACE_TP_GENERAL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)时，不会进行HiTraceMeter打点。

  type为客户端发送[HITRACE_TP_CS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)和客户端接收[HITRACE_TP_CR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)的信息埋点需配套使用；type为服务端接收[HITRACE_TP_SR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)和服务端发送[HITRACE_TP_SS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)的信息埋点需配套使用。否则，HiTraceMeter开始与结束打点无法正常匹配。

   [void OH_HiTrace_InitId(HiTraceId *id)](#oh_hitrace_initid) - 初始化[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。  [void OH_HiTrace_IdFromBytes(HiTraceId *id, const uint8_t *pIdArray, int len)](#oh_hitrace_idfrombytes) - 根据字节数组创建[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。  [bool OH_HiTrace_IsIdValid(const HiTraceId *id)](#oh_hitrace_isidvalid) - 判断[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)是否有效。  [bool OH_HiTrace_IsFlagEnabled(const HiTraceId *id, HiTrace_Flag flag)](#oh_hitrace_isflagenabled) - 判断[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)是否启用了跟踪标志flag。  [void OH_HiTrace_EnableFlag(const HiTraceId *id, HiTrace_Flag flag)](#oh_hitrace_enableflag) - 启用[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中指定的跟踪标志。  [int OH_HiTrace_GetFlags(const HiTraceId *id)](#oh_hitrace_getflags) - 获取[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中设置的跟踪标志位。  [void OH_HiTrace_SetFlags(HiTraceId *id, int flags)](#oh_hitrace_setflags) - 设置跟踪标志位到[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中。  [uint64_t OH_HiTrace_GetChainId(const HiTraceId *id)](#oh_hitrace_getchainid) - 获取[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中的跟踪链ID。  [void OH_HiTrace_SetChainId(HiTraceId *id, uint64_t chainId)](#oh_hitrace_setchainid) - 设置跟踪链ID到[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中。  [uint64_t OH_HiTrace_GetSpanId(const HiTraceId *id)](#oh_hitrace_getspanid) - 获取当前[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中的分支ID。  [void OH_HiTrace_SetSpanId(HiTraceId *id, uint64_t spanId)](#oh_hitrace_setspanid) - 设置分支ID到[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中。  [uint64_t OH_HiTrace_GetParentSpanId(const HiTraceId *id)](#oh_hitrace_getparentspanid) - 获取当前[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中的父分支ID。  [void OH_HiTrace_SetParentSpanId(HiTraceId *id, uint64_t parentSpanId)](#oh_hitrace_setparentspanid) - 设置[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)结构的parentSpanId字段。  [int OH_HiTrace_IdToBytes(const HiTraceId* id, uint8_t* pIdArray, int len)](#oh_hitrace_idtobytes) - 将[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)转换为字节数组，用于缓存或者通信传递。  [void OH_HiTrace_StartTrace(const char *name)](#oh_hitrace_starttrace) - 标记一个同步跟踪耗时任务的开始。

  同步跟踪打点接口[OH_HiTrace_StartTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttrace)和[OH_HiTrace_FinishTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_finishtrace)必须配对使用。

  [OH_HiTrace_StartTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttrace)和[OH_HiTrace_FinishTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_finishtrace)函数对可以嵌套使用，跟踪解析时使用栈式数据结构进行匹配。

  从API version 19开始，建议使用[OH_HiTrace_StartTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttraceex)接口，以便分级控制跟踪输出。

   [void OH_HiTrace_FinishTrace(void)](#oh_hitrace_finishtrace) - 标记一个同步跟踪耗时任务的结束。

  必须和[OH_HiTrace_StartTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttrace)配对使用。跟踪解析时，和其前执行流程中最近的[OH_HiTrace_StartTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttrace)进行匹配。

  从API version 19开始，建议使用[OH_HiTrace_FinishTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_finishtraceex)接口，以便分级控制跟踪输出。

   [void OH_HiTrace_StartAsyncTrace(const char *name, int32_t taskId)](#oh_hitrace_startasynctrace) - 标记一个异步跟踪耗时任务的开始。

  用于在异步操作前调用进行开始打点，异步跟踪开始和结束数据由于不是顺序发生的，所以解析时需要通过一个唯一的taskId进行识别。

  必须和[OH_HiTrace_FinishAsyncTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_finishasynctrace)配对使用，参数name和taskId相同的开始与结束打点相匹配，构成一个异步跟踪耗时任务。

  如果有多个相同name的任务需要跟踪或者对同一个任务跟踪多次，并且任务同时被执行，则每次调用的taskId需不相同。

  如果具有相同name的任务是串行执行的，则taskId可以相同。

  从API version 19开始，建议使用[OH_HiTrace_StartAsyncTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_startasynctraceex)接口，以便分级控制跟���输出与跟踪聚类。

   [void OH_HiTrace_FinishAsyncTrace(const char *name, int32_t taskId)](#oh_hitrace_finishasynctrace) - 标记一个异步跟踪耗时任务的结束。

  在异步操作完成后如回调函数中调用，进行结束打点。

  和[OH_HiTrace_StartAsyncTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_startasynctrace)配对使用，参数name和taskId必须与异步跟踪的开始打点接口的对应参数值保持一致。

  从API version 19开始，建议使用[OH_HiTrace_FinishAsyncTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_finishasynctraceex)接口，以便分级控制跟踪输出。

   [void OH_HiTrace_CountTrace(const char *name, int64_t count)](#oh_hitrace_counttrace) - 用于跟踪给定整数变量名和整数值。

  多次执行该接口可以跟踪给定整数变量在不同时刻的数值变化。

  从API version 19开始，建议使用[OH_HiTrace_CountTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_counttraceex)接口，以便分级控制跟踪输出。

   [void OH_HiTrace_StartTraceEx(HiTrace_Output_Level level, const char *name, const char *customArgs)](#oh_hitrace_starttraceex) - 标记一个同步跟踪耗时任务的开始，分级控制跟踪输出。

  同步跟踪打点接口[OH_HiTrace_StartTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttraceex)和[OH_HiTrace_FinishTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_finishtraceex)必须配对使用。

  [OH_HiTrace_StartTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttraceex)和[OH_HiTrace_FinishTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_finishtraceex)函数对可以嵌套使用，跟踪解析时使用栈式数据结构进行匹配。

   [void OH_HiTrace_FinishTraceEx(HiTrace_Output_Level level)](#oh_hitrace_finishtraceex) - 标记一个同步跟踪耗时任务的结束，分级控制跟踪输出。

  必须和[OH_HiTrace_StartTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttraceex)配对使用，参数level必须与同步跟踪的开始打点接口[OH_HiTrace_StartTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttraceex)的对应参数值一致。

  跟踪数据解析时，和其前执行流程中最近的[OH_HiTrace_StartTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttraceex)进行匹配。

   [void OH_HiTrace_StartAsyncTraceEx(HiTrace_Output_Level level, const char *name, int32_t taskId, const char *customCategory, const char *customArgs)](#oh_hitrace_startasynctraceex) - 标记一个异步跟踪耗时任务的开始，分级控制跟踪输出。

  用于在异步操作执行前进行开始打点，异步跟踪开始和结束数据由于不是顺序发生的，所以解析时需要通过一个唯一的taskId进行识别。

  和[OH_HiTrace_FinishAsyncTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_finishasynctraceex)配对使用，参数name和taskId相同的开始与结束打点相匹配，构成一个异步跟踪耗时任务。

  如果有多个相同name的任务需要跟踪或者对同一个任务跟踪多次，并且任务同时被执行，则每次调用的taskId需不相同。

  如果具有相同name的任务是串行执行的，则taskId可以相同。

  不同进程的taskId不会相互干扰。

   [void OH_HiTrace_FinishAsyncTraceEx(HiTrace_Output_Level level, const char *name, int32_t taskId)](#oh_hitrace_finishasynctraceex) - 标记一个异步跟踪耗时任务的结束，分级控制跟踪输出。

  用于在异步操作完成后进行结束打点，例如在回调函数中调用。

  和[OH_HiTrace_StartAsyncTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_startasynctraceex)配对使用，参数level、name和taskId必须与异步跟踪开始打点接口的对应参数值保持一致。

   [void OH_HiTrace_CountTraceEx(HiTrace_Output_Level level, const char *name, int64_t count)](#oh_hitrace_counttraceex) - 标记一个跟踪的整数变量，分级控制跟踪输出。  [bool OH_HiTrace_IsTraceEnabled(void)](#oh_hitrace_istraceenabled) - 判断当前是否开启应用trace捕获。  [int32_t OH_HiTrace_RegisterTraceListener(OH_HiTrace_TraceEventListener callback)](#oh_hitrace_registertracelistener) - 注册应用trace捕获开关通知回调，使用callback异步回调。

  注册成功后，立即执行一次回调函数，后续回调函数由应用trace捕获开关状态变化触发执行。

  回调函数保存在应用进程内，一个进程最多可以注册10个回调函数。

  若注册的回调包含耗时操作，当回调被执行时，注册或注销行为会被阻塞（等待回调执行完成）。

  因此，建议不要在应用主线程中注册或注销包含耗时操作的回调，避免发生应用冻屏。

   [int32_t OH_HiTrace_UnregisterTraceListener(int32_t index)](#oh_hitrace_unregistertracelistener) - 注销应用trace捕获开关通知回调。

  使用[OH_HiTrace_RegisterTraceListener](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_registertracelistener)返回的回调索引，注销该索引关联的回调函数。

        #### 枚举类型说明

  #### [h2]HiTraceId_Valid

enum HiTraceId_Valid **描述**

 HiTraceId是否有效标志。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

  枚举项 描述   HITRACE_ID_INVALID = 0 无效HiTraceId。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

   HITRACE_ID_VALID = 1 有效HiTraceId。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

        #### [h2]HiTrace_Version

enum HiTrace_Version **描述**

 HiTrace版本号。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

  枚举项 描述   HITRACE_VER_1 = 0 版本1。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

        #### [h2]HiTrace_Flag

enum HiTrace_Flag **描述**

 HiTrace跟踪标志。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

  枚举项 描述   HITRACE_FLAG_DEFAULT = 0 缺省标志。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

   HITRACE_FLAG_INCLUDE_ASYNC = 1 << 0 异步调用标志。

  设置该标志，同时跟踪同步和异步调用；缺省只跟踪同步调用。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

   HITRACE_FLAG_DONOT_CREATE_SPAN = 1 << 1 无分支标志。

  设置该标志，不创建分支信息；缺省创建分支信息。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

   HITRACE_FLAG_TP_INFO = 1 << 2 埋点标志。

  调试场景下设置该标志，调用信息埋点接口[OH_HiTrace_Tracepoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_tracepoint)时，会打印埋点信息hilog日志；缺省不打印埋点信息hilog日志。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

   HITRACE_FLAG_NO_BE_INFO = 1 << 3 无开始结束信息标志。

  调试场景下设置该标志，调用开始跟踪接口[OH_HiTrace_BeginChain](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_beginchain)和结束跟踪接口[OH_HiTrace_EndChain](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_endchain)时，分别会打印开始、结束跟踪信息hilog日志；缺省不打印开始、结束跟踪信息hilog日志。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

   HITRACE_FLAG_DONOT_ENABLE_LOG = 1 << 4 日志关联标志。

  设置该标志，不会在hilog日志中附加HiTraceId信息；缺省会在hilog日志中附加HiTraceId信息。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

   HITRACE_FLAG_FAULT_TRIGGER = 1 << 5 故障触发标志。预置标志，暂未启用。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

   HITRACE_FLAG_D2D_TP_INFO = 1 << 6 设备间埋点标志。[HITRACE_FLAG_TP_INFO](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_flag)的一个子集，调试场景下使用。

  当已设置[HITRACE_FLAG_TP_INFO](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_flag)标志时，[HITRACE_FLAG_D2D_TP_INFO](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_flag)标志不生效；

  当未设置[HITRACE_FLAG_TP_INFO](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_flag)标志时，设置[HITRACE_FLAG_D2D_TP_INFO](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_flag)标志，���时调用信息埋点接口[OH_HiTrace_Tracepoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_tracepoint)，仅当mode参数为设备间通信[HITRACE_CM_DEVICE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_communication_mode)的情况下，会打印埋点信息hilog日志。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

        #### [h2]HiTrace_Tracepoint_Type

enum HiTrace_Tracepoint_Type **描述**

 跟踪埋点类型枚举。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

  枚举项 描述   HITRACE_TP_CS = 0 客户端发送。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

   HITRACE_TP_CR = 1 客户端接收。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

   HITRACE_TP_SS = 2 服务端发送。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

   HITRACE_TP_SR = 3 服务端接收。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

   HITRACE_TP_GENERAL = 4 通用类型，标识HITRACE_TP_CS、HITRACE_TP_CR、HITRACE_TP_SS、HITRACE_TP_SR四种场景之外的埋点。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

        #### [h2]HiTrace_Communication_Mode

enum HiTrace_Communication_Mode **描述**

 跟踪通信类型枚举。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

  枚举项 描述   HITRACE_CM_DEFAULT = 0 缺省通信类型。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

   HITRACE_CM_THREAD = 1 线程间通信。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

   HITRACE_CM_PROCESS = 2 进程间通信。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

   HITRACE_CM_DEVICE = 3 设备间通信。

 **起始版本：** 12

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

        #### [h2]HiTrace_Output_Level

enum HiTrace_Output_Level **描述**

 HiTrace输出级别。低于系统跟踪输出级别阈值的打点将不会生效。log版本阈值为[HITRACE_LEVEL_INFO](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_output_level)；nolog版本阈值为[HITRACE_LEVEL_COMMERCIAL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_output_level)。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 19

  枚举项 描述   HITRACE_LEVEL_DEBUG = 0 仅用于调试的输出级别，优先级最低。

 **起始版本：** 19

   HITRACE_LEVEL_INFO = 1 用于log版本的输出级别。

 **起始版本：** 19

   HITRACE_LEVEL_CRITICAL = 2 用于log版本的输出级别，优先级高于HITRACE_LEVEL_INFO。

 **起始版本：** 19

   HITRACE_LEVEL_COMMERCIAL = 3 用于nolog版本的输出级别，优先级最高。

 **起始版本：** 19

   HITRACE_LEVEL_MAX = HITRACE_LEVEL_COMMERCIAL 输出级别范围限制。

 **起始版本：** 19

        #### 函数说明

  #### [h2]OH_HiTrace_TraceEventListener()

typedef void (*OH_HiTrace_TraceEventListener)(bool traceStatus) **描述**

 定义应用trace捕获开关状态切换时的回调函数类型。

 **起始版本：** 22

 **参数：**

  参数项 描述   bool traceStatus 当前应用trace捕获开关状态。

  true：开启；false：关闭。

        #### [h2]OH_HiTrace_BeginChain()

HiTraceId OH_HiTrace_BeginChain(const char *name, int flags) **描述**

 开始跟踪。

  当前线程TLS（Thread Local Storage，线程本地存储）中不存在有效的HiTraceId时，生成有效的HiTraceId并设置到当前线程TLS中，返回该HiTraceId。

  当前线程TLS中已存在有效的HiTraceId时，不会开始新的跟踪，返回各属性值均为0的无效HiTraceId。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   const char *name 跟踪业务名。  int flags 跟踪标志组合，见[HiTrace_Flag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_flag)。     **返回：**

  类型 说明   [HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) [HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)结构体。       #### [h2]OH_HiTrace_EndChain()

void OH_HiTrace_EndChain() **描述**

 结束跟踪。

  结束跟踪并将当前线程TLS中的HiTraceId设置为无效。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

   #### [h2]OH_HiTrace_GetId()

HiTraceId OH_HiTrace_GetId() **描述**

 获取跟踪标识。

  获取当前线程TLS中的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **返回：**

  类型 说明   [HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) [HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)结构体。       #### [h2]OH_HiTrace_SetId()

void OH_HiTrace_SetId(const HiTraceId *id) **描述**

 设置跟踪标识。

  将给定的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)设置到当前线程TLS中。若传入的参数无效，则不执行任何操作。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   [const HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) *id 要设置的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。       #### [h2]OH_HiTrace_ClearId()

void OH_HiTrace_ClearId(void) **描述**

 清除跟踪标识。

  将当前线程TLS中的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)设置为无效。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

   #### [h2]OH_HiTrace_CreateSpan()

HiTraceId OH_HiTrace_CreateSpan(void) **描述**

 创建跟踪分支。

  创建一个[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)，使用当前线程TLS中的chainId、spanId初始化其chainId、parentSpanId，并为其生成一个新的spanId。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **返回：**

  类型 说明   [HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) [HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)结构体。       #### [h2]OH_HiTrace_Tracepoint()

void OH_HiTrace_Tracepoint(HiTrace_Communication_Mode mode, HiTrace_Tracepoint_Type type, const HiTraceId *id, const char *fmt, ...) **描述**

 HiTraceMeter跟踪信息埋点。

  type为客户端发送[HITRACE_TP_CS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)和服务端接收[HITRACE_TP_SR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)时，进行同步HiTraceMeter开始打点；type为客户端接收[HITRACE_TP_CR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)和服务端发送[HITRACE_TP_SS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)时，进行同步HiTraceMeter结束打点；type为通用类型[HITRACE_TP_GENERAL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)时，不会进行HiTraceMeter打点。

  type为客户端发送[HITRACE_TP_CS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)和客户端接收[HITRACE_TP_CR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)的信息埋点需配套使用；type为服务端接收[HITRACE_TP_SR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)和服务端发送[HITRACE_TP_SS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)的信息埋点需配套使用。否则，HiTraceMeter开始与结束打点无法正常匹配。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   [HiTrace_Communication_Mode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_communication_mode) mode 跟踪通信模式，见[HiTrace_Communication_Mode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_communication_mode)。  [HiTrace_Tracepoint_Type](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type) type 跟踪信息类型，见[HiTrace_Tracepoint_Type](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_tracepoint_type)。  [const HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) *id 实施信息埋点操作的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。  const char *fmt HiTraceMeter打点操作传入的trace说明信息的格式化字符串。       #### [h2]OH_HiTrace_InitId()

void OH_HiTrace_InitId(HiTraceId *id) **描述**

 初始化[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   [HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) *id 需要初始化的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。       #### [h2]OH_HiTrace_IdFromBytes()

void OH_HiTrace_IdFromBytes(HiTraceId *id, const uint8_t *pIdArray, int len) **描述**

 根据字节数组创建[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   [HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) *id 需要创建的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。  const uint8_t *pIdArray 字节数组。  int len 字节数组长度。       #### [h2]OH_HiTrace_IsIdValid()

bool OH_HiTrace_IsIdValid(const HiTraceId *id) **描述**

 判断[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)是否有效。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   [const HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) *id 需要判断是否有效的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。     **返回：**

  类型 说明   bool true：[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)有效；false：[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)无效。       #### [h2]OH_HiTrace_IsFlagEnabled()

bool OH_HiTrace_IsFlagEnabled(const HiTraceId *id, HiTrace_Flag flag) **描述**

 判断[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)是否启用了跟踪标志flag。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   [const HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) *id 需要判断指定跟踪标志是否启用的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。  [HiTrace_Flag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_flag) flag 指定的跟踪标志，见[HiTrace_Flag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_flag)。     **返回：**

  类型 说明   bool true：[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)已启用flag；false：[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)未启用flag。       #### [h2]OH_HiTrace_EnableFlag()

void OH_HiTrace_EnableFlag(const HiTraceId *id, HiTrace_Flag flag) **描述**

 启用[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中指定的跟踪标志。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   [const HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) *id 需要启用指定跟踪标志的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。  [HiTrace_Flag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_flag) flag 指定的跟踪标志，见[HiTrace_Flag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_flag)。       #### [h2]OH_HiTrace_GetFlags()

int OH_HiTrace_GetFlags(const HiTraceId *id) **描述**

 获取[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中设置的跟踪标志位。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   [const HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) *id 需要获取跟踪标志位的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。     **返回：**

  类型 说明   int [HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中设置的跟踪标志位。       #### [h2]OH_HiTrace_SetFlags()

void OH_HiTrace_SetFlags(HiTraceId *id, int flags) **描述**

 设置跟踪标志位到[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   [HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) *id 需要设置跟踪标志位的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。  int flags 指定的跟踪标志位，见[HiTrace_Flag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_flag)。       #### [h2]OH_HiTrace_GetChainId()

uint64_t OH_HiTrace_GetChainId(const HiTraceId *id) **描述**

 获取[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中的跟踪链ID。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   [const HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) *id 需要获取跟踪链ID的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。     **返回：**

  类型 说明   uint64_t 跟踪链ID。       #### [h2]OH_HiTrace_SetChainId()

void OH_HiTrace_SetChainId(HiTraceId *id, uint64_t chainId) **描述**

 设置跟踪链ID到[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   [HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) *id 需要设置跟踪链ID的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。  uint64_t chainId 需要设置的跟踪链ID。       #### [h2]OH_HiTrace_GetSpanId()

uint64_t OH_HiTrace_GetSpanId(const HiTraceId *id) **描述**

 获取当前[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中的分支ID。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   [const HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) *id 需要获取分支ID的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。     **返回：**

  类型 说明   uint64_t [HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中设置的分支ID。       #### [h2]OH_HiTrace_SetSpanId()

void OH_HiTrace_SetSpanId(HiTraceId *id, uint64_t spanId) **描述**

 设置分支ID到[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   [HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) *id 需要设置分支ID的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。  uint64_t spanId 需要设置的分支ID。       #### [h2]OH_HiTrace_GetParentSpanId()

uint64_t OH_HiTrace_GetParentSpanId(const HiTraceId *id) **描述**

 获取当前[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中的父分支ID。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   [const HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) *id 需要获取父分支ID的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。     **返回：**

  类型 说明   uint64_t [HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)中设置的父分支ID。       #### [h2]OH_HiTrace_SetParentSpanId()

void OH_HiTrace_SetParentSpanId(HiTraceId *id, uint64_t parentSpanId) **描述**

 设置[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)结构的parentSpanId字段。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   [HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid) *id 需要设置父分支ID的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。  uint64_t parentSpanId 需要设置的父分支ID。       #### [h2]OH_HiTrace_IdToBytes()

int OH_HiTrace_IdToBytes(const HiTraceId* id, uint8_t* pIdArray, int len) **描述**

 将[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)转换为字节数组，用于缓存或者通信传递。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 12

 **参数：**

  参数项 描述   [const HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)* id 需要转换的[HiTraceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid)。  uint8_t* pIdArray 字节数组。  int len 字节数组长度。     **返回：**

  类型 说明   int 转换后的字节数组长度。       #### [h2]OH_HiTrace_StartTrace()

void OH_HiTrace_StartTrace(const char *name) **描述**

 标记一个同步跟踪耗时任务的开始。

  同步跟踪打点接口[OH_HiTrace_StartTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttrace)和[OH_HiTrace_FinishTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_finishtrace)必须配对使用。

  [OH_HiTrace_StartTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttrace)和[OH_HiTrace_FinishTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_finishtrace)函数对可以嵌套使用，跟踪解析时使用栈式数据结构进行匹配。

  从API version 19开始，建议使用[OH_HiTrace_StartTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttraceex)接口，以便分级控制跟踪输出。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 10

 **参数：**

  参数项 描述   const char *name 跟踪的名字。       #### [h2]OH_HiTrace_FinishTrace()

void OH_HiTrace_FinishTrace(void) **描述**

 标记一个同步跟踪耗时任务的结束。

  必须和[OH_HiTrace_StartTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttrace)配对使用。跟踪解析时，和其前执行流程中最近的[OH_HiTrace_StartTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttrace)进行匹配。

  从API version 19开始，建议使用[OH_HiTrace_FinishTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_finishtraceex)接口，以便分级控制跟踪输出。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 10

   #### [h2]OH_HiTrace_StartAsyncTrace()

void OH_HiTrace_StartAsyncTrace(const char *name, int32_t taskId) **描述**

 标记一个异步跟踪耗时任务的开始。

  用于在异步操作前调用进行开始打点，异步跟踪开始和结束数据由于不是顺序发生的，所以解析时需要通过一个唯一的taskId进行识别。

  必须和[OH_HiTrace_FinishAsyncTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_finishasynctrace)配对使用，参数name和taskId相同的开始与结束打点相匹配，构成一个异步跟踪耗时任务。

  如果有多个相同name的任务需要跟踪或者对同一个任务跟踪多次，并且任务同时被执行，则每次调用的taskId需不相同。

  如果具有相同name的任务是串行执行的，则taskId可以相同。

  从API version 19开始，建议使用[OH_HiTrace_StartAsyncTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_startasynctraceex)接口，以便分级控制跟踪输出与跟踪聚类。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 10

 **参数：**

  参数项 描述   const char *name 异步跟踪的名字。  int32_t taskId 异步跟踪的ID。 异步跟踪开始和结束由于不是顺序发生的，所以需要通过name和每次执行唯一的taskId进行开始和结束的匹配。       #### [h2]OH_HiTrace_FinishAsyncTrace()

void OH_HiTrace_FinishAsyncTrace(const char *name, int32_t taskId) **描述**

 标记一个异步跟踪耗时任务的结束。

  在异步操作完成后如回调函数中调用，进行结束打点。

  和[OH_HiTrace_StartAsyncTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_startasynctrace)配对使用，参数name和taskId必须与异步跟踪的开始打点接口的对应参数值保持一致。

  从API version 19开始，建议使用[OH_HiTrace_FinishAsyncTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_finishasynctraceex)接口，以便分级控制跟踪输出。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 10

 **参数：**

  参数项 描述   const char *name 异步跟踪的名字。  int32_t taskId 异步跟踪的ID。异步跟踪开始和结束由于不是顺序发生的，所以需要通过name和每次执行唯一的taskId进行开始和结束的匹配。       #### [h2]OH_HiTrace_CountTrace()

void OH_HiTrace_CountTrace(const char *name, int64_t count) **描述**

 用于跟踪给定整数变量名和整数值。

  多次执行该接口可以跟踪给定整数变量在不同时刻的数值变化。

  从API version 19开始，建议使用[OH_HiTrace_CountTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_counttraceex)接口，以便分级控制跟踪输出。

 **系统能力：** SystemCapability.HiviewDFX.HiTrace

 **起始版本：** 10

 **参数：**

  参数项 描述   const char *name 整数变量跟踪的名字，不必与真实变量名相同。  int64_t count 整数值。       #### [h2]OH_HiTrace_StartTraceEx()

void OH_HiTrace_StartTraceEx(HiTrace_Output_Level level, const char *name, const char *customArgs) **描述**

 标记一个同步跟踪耗时任务的开始，分级控制跟踪输出。

  同步跟踪打点接口[OH_HiTrace_StartTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttraceex)和[OH_HiTrace_FinishTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_finishtraceex)必须配对使用。

  [OH_HiTrace_StartTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttraceex)和[OH_HiTrace_FinishTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_finishtraceex)函数对可以嵌套使用，跟踪解析时使用栈式数据结构进行匹配。

 **起始版本：** 19

 **参数：**

  参数项 描述   [HiTrace_Output_Level](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_output_level) level 跟踪输出优先级。  const char *name 同步跟踪的名字。  const char *customArgs 键值对，多个键值对使用逗号分隔，例"key1=value1,key2=value2"。       #### [h2]OH_HiTrace_FinishTraceEx()

void OH_HiTrace_FinishTraceEx(HiTrace_Output_Level level) **描述**

 标记一个同步跟踪耗时任务的结束，分级控制跟踪输出。

  必须和[OH_HiTrace_StartTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttraceex)配对使用，参数level必须与同步跟踪的开始打点接口[OH_HiTrace_StartTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttraceex)的对应参数值一致。

  跟踪数据解析时，和其前执行流程中最近的[OH_HiTrace_StartTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_starttraceex)进行匹配。

 **起始版本：** 19

 **参数：**

  参数项 描述   [HiTrace_Output_Level](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_output_level) level 跟踪输出优先级。       #### [h2]OH_HiTrace_StartAsyncTraceEx()

void OH_HiTrace_StartAsyncTraceEx(HiTrace_Output_Level level, const char *name, int32_t taskId, const char *customCategory, const char *customArgs) **描述**

 标记一个异步跟踪耗时任务的开始，分级控制跟踪输出。

  用于在异步操作执行前进行开始打点，异步跟踪开始和结束数据由于不是顺序发生的，所以解析时需要通过一个唯一的taskId进行识别。

  和[OH_HiTrace_FinishAsyncTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_finishasynctraceex)配对使用，参数name和taskId相同的开始与结束打点相匹配，构成一个异步跟踪耗时任务。

  如果有多个相同name的任务需要跟踪或者对同一个任务跟踪多次，并且任务同时被执行，则每次调用的taskId需不相同。

  如果具有相同name的任务是串行执行的，则taskId可以相同。

  不同进程的taskId不会相互干扰。

 **起始版本：** 19

 **参数：**

  参数项 描述   [HiTrace_Output_Level](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_output_level) level 跟踪输出优先级。  const char *name 异步跟踪的名字。  int32_t taskId 异步跟踪的ID。  const char *customCategory 自定义聚类名称，用于聚合同一类异步跟踪打点。  const char *customArgs 键值对，多个键值对使用逗号分隔，例"key1=value1,key2=value2"。       #### [h2]OH_HiTrace_FinishAsyncTraceEx()

void OH_HiTrace_FinishAsyncTraceEx(HiTrace_Output_Level level, const char *name, int32_t taskId) **描述**

 标记一个异步跟踪耗时任务的结束，分级控制跟踪输出。

  用于在异步操作完成后进行结束打点，例如在回调函数中调用。

  和[OH_HiTrace_StartAsyncTraceEx](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_startasynctraceex)配对使用，参数level、name和taskId必须与异步跟踪开始打点接口的对应参数值保持一致。

 **起始版本：** 19

 **参数：**

  参数项 描述   [HiTrace_Output_Level](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_output_level) level 跟踪输出优先级。  const char *name 异步跟踪的名字。  int32_t taskId 异步跟踪的ID。       #### [h2]OH_HiTrace_CountTraceEx()

void OH_HiTrace_CountTraceEx(HiTrace_Output_Level level, const char *name, int64_t count) **描述**

 标记一个跟踪的整数变量，分级控制跟踪输出。

 **起始版本：** 19

 **参数：**

  参数项 描述   [HiTrace_Output_Level](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#hitrace_output_level) level 跟踪输出优先级。  const char *name 整数变量的名称，不必与实际变量名相同。  int64_t count 整数值。       #### [h2]OH_HiTrace_IsTraceEnabled()

bool OH_HiTrace_IsTraceEnabled(void) **描述**

 判断当前是否开启应用trace捕获。

 **起始版本：** 19

 **返回：**

  类型 说明   bool 使用hitrace命令行工具等方式开启采集时返回true。

  未开启采集或停止采集后返回false，此时调用HiTraceMeter性能跟踪打点接口无效。

        #### [h2]OH_HiTrace_RegisterTraceListener()

int32_t OH_HiTrace_RegisterTraceListener(OH_HiTrace_TraceEventListener callback) **描述**

 注册应用trace捕获开关通知回调，使用callback异步回调。

 注册成功后，立即执行一次回调函数，后续回调函数由应用trace捕获开关状态变化触发执行。

 回调函数保存在应用进程内，一个进程最多可以注册10个回调函数。

 若注册的回调包含耗时操作，当回调被执行时，注册或注销行为会被阻塞（等待回调执行完成）。

 因此，建议不要在应用主线程中注册或注销包含耗时操作的回调，避免发生应用冻屏。

 **起始版本：** 22

 **参数：**

  参数项 描述   [OH_HiTrace_TraceEventListener](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_traceeventlistener) callback 注册的回调函数。     **返回：**

  类型 说明   int32_t 回调注册状态。

  >= 0：注册成功，返回用于注销的回调索引，索引范围0到9；

  -1：已达到最大回调函数注册数量；

  -2：无效参数，参数非[OH_HiTrace_TraceEventListener](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_traceeventlistener)类型。

        #### [h2]OH_HiTrace_UnregisterTraceListener()

int32_t OH_HiTrace_UnregisterTraceListener(int32_t index) **描述**

 注销应用trace捕获开关通知回调。

  使用[OH_HiTrace_RegisterTraceListener](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h#oh_hitrace_registertracelistener)返回的回调索引，注销该索引关联的回调函数。

 **起始版本：** 22

 **参数：**

  参数项 描述   int32_t index 已注册回调函数索引。     **返回：**

  类型 说明   int32_t 回调注销状态。

  0：注销成功；

  -1：目标索引的回调函数未注册；

  -2：无效索引，参数index值不在0到9的范围内。

---
*Updated: 2026-04-22 06:49:02*
