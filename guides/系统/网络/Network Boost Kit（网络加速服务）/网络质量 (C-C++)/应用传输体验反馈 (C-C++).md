# 应用传输体验反馈 (C/C++)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `networkboost-appreportqoe-c`  |  **DocID**: `98913edd6c6b48e1a1bff5aa3338f0e9`  |  **NodeID**: `00020177579585271621484532ac18a0`

---

# 应用传输体验反馈 (C/C++)

                 #### 场景介绍

     当应用传输体验发生变化时，应用将传输体验和传输的业务类型信息通过实时反馈接口传输给系统网络业务模块，系统网络业务模块进行精细化调度，实现网络加速。

     例如：视频类App播放过程中卡顿，将卡顿信息上报后，Network Boost Kit将信息反馈给系统网络加速模块，该模块会记录播放卡顿信息，并根据当前网络情况，启用网络加速能力。

                  #### 接口说明

     具体API说明详见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview)。

           
                        | 接口名          | 描述         
                               | int32_t HMS_NetworkBoost_ReportQoe(NetworkBoost_ServiceType serviceType, NetworkBoost_QoeType qoeType)          | 应用反馈传输体验信息。         
             

                       #### 开发步骤

     
             导入Network Boost Kit模块。

       ```
#include "NetworkBoostKit/network_boost_quality.h"
#include <cstdio>
```
             CMakeLists.txt中添加以下lib，具体请见[C API开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-preparations#c-api开发准备)。

       libnetwork_boost.so             调用ReportQoe接口将应用传输体验信息通知给系统。

       ```
int32_t ReportQoe()
{
    NetworkBoost_ServiceType serviceType = NB_SERVICE_SHORT_VIDEO;
    NetworkBoost_QoeType qoeType = NB_QOE_BAD_SERVER_ERROR;
    int32_t ret = HMS_NetworkBoost_ReportQoe(serviceType, qoeType);
    printf("传输体验反馈结果: %d\n", ret);
    return ret;
}
```

---
*Updated: 2026-04-20 01:46:35*
