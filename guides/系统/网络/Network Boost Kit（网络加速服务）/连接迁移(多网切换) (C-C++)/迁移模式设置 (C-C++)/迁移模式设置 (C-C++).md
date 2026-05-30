# 迁移模式设置 (C/C++)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `networkboost-reporthandovermode-c`  |  **DocID**: `1083907f71b743e6a0cf080588efaa98`  |  **NodeID**: `000201775795852716147203e0b05d94`

---

# 迁移模式设置 (C/C++)

                 #### 场景介绍

     应用可通过迁移模式设置接口变更连接迁移模式，包括委托模式（由系统发起连接迁移）和自主模式（由应用发起连接迁移）。应用未调用SetHandoverMode则默认为委托模式，应用可以通过该接口禁止系统发起连接迁移。在某些场景下，比如该应用切换到后台时，依旧有可能由系统触发切换。

                  #### 接口说明

     具体API说明详见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview)。

           
                        | 接口名          | 描述         
                               | int32_t HMS_NetworkBoost_SetHandoverMode(NetworkBoost_HandoverMode mode)          | 应用设置迁移模式，默认为委托模式。         
             

                       #### 开发步骤

     
             导入Network Boost Kit模块。

       ```
#include "NetworkBoostKit/network_boost_handover.h"
#include <cstdio>
```
             CMakeLists.txt中添加以下lib，具体请见[C API开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-preparations#c-api开发准备)。

       libnetwork_boost.so             调用SetHandoverMode接口，设置为自主模式，禁止系统发起连接迁移。

       ```
int32_t SetHandoverMode()
{
    NetworkBoost_HandoverMode mode = NB_MODE_DISCRETION;
    int32_t ret = HMS_NetworkBoost_SetHandoverMode(mode);
    printf("设置连接迁移模式结果: %d\n", ret);
    return ret;
}
```

---
*Updated: 2026-04-20 01:46:28*
