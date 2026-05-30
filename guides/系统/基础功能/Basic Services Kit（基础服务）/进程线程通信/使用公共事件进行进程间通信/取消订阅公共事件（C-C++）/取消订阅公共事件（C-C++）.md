# 取消订阅公共事件（C/C++）

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `native-common-event-unsubscription`  |  **DocID**: `d338f2f5823148ad8bd715cc83102acf`  |  **NodeID**: `000201775795852716496a195135c7a0`

---

# 取消订阅公共事件（C/C++）

                 #### 场景介绍

     订阅者在完成业务需求之后，需要取消订阅公共事件。

                  #### 接口说明

     详细的API说明请参考[oh_commonevent.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h)。

           
                        | 接口名          | 描述         
                               | [CommonEvent_ErrCode OH_CommonEvent_UnSubscribe(const CommonEvent_Subscriber* subscriber)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_unsubscribe)          | 取消订阅公共事件。         
             

                       #### 开发步骤

     
             引用头文件。

       ```
#include "hilog/log.h"
#include "BasicServicesKit/oh_commonevent.h"
```
             在CMake脚本中添加动态链接库。

       ```
target_link_libraries(entry PUBLIC
    libace_napi.z.so
    libhilog_ndk.z.so
    libohcommonevent.so
)
```
             取消订阅公共事件。

       订阅者订阅公共事件并完成业务需求后，可以通过[OH_CommonEvent_UnSubscribe](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_unsubscribe)主动取消订阅事件。

       ```
void Unsubscribe(CommonEvent_Subscriber *subscriber)
{
    // 通过传入订阅者来退订事件
    int32_t ret = OH_CommonEvent_UnSubscribe(subscriber);
    OH_LOG_Print(LOG_APP, LOG_INFO, 1, "CES_TEST", "OH_CommonEvent_UnSubscribe ret <%{public}d>.", ret);
}
```

---
*Updated: 2026-04-20 01:46:58*
