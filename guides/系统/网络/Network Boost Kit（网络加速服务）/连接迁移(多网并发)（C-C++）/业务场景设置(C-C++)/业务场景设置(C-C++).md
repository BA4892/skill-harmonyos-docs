# 业务场景设置(C/C++)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `networkboost-netmultipath-setscenedesc-c`  |  **DocID**: `6adb258d135d414c9759c37d4a98daa2`  |  **NodeID**: `0002017757958527161136731b213b0b`

---

# 业务场景设置(C/C++)

       从6.0.2(22)开始，支持业务场景设置。

              #### 场景介绍

     应用在请求多网并发之前，通过设置业务场景，可以帮助系统进行多网并发管控和业务时长分析。

                  #### 接口说明

     具体API说明详见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview)。

           
                        | 接口名          | 描述         
                               | int32_t HMS_NetworkBoost_SetSceneDesc(NetworkBoost_SceneDesc sceneDesc)          | 设置业务场景。         
             

                       #### 开发步骤

     
             导入Network Boost Kit模块。

       ```
#include "NetworkBoostKit/network_boost.h"
#include <cstdio>
```
             CMakeLists.txt中添加以下lib，具体请见[C API开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-preparations#c-api开发准备)。

       libnetwork_boost.so             调用SetSceneDesc接口。

       ```
int32_t SetSceneDesc()
{
    NetworkBoost_SceneDesc sceneDesc;
    sceneDesc.duration = 0;
    sceneDesc.startTime = 0;
    sceneDesc.scene = NB_SERVICE_LOGIN;
    sceneDesc.sceneEvent = SCENE_EVENT_ENTER;
    int32_t ret = HMS_NetworkBoost_SetSceneDesc(sceneDesc);
    printf("业务场景设置结果: %d\n", ret);
    return ret;
}
```

---
*Updated: 2026-04-20 01:46:17*
