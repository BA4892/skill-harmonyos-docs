# 多网配额查询(C/C++)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `networkboost-netmultipath-getmultipathquota-c`  |  **DocID**: `c54ecc22339b4cc8a741abbc514c7581`  |  **NodeID**: `0002017757958527162730a0f6ec4ae4`

---

# 多网配额查询(C/C++)

       从6.0.2(22)开始，支持多网配额查询。

              #### 场景介绍

     由于多网络加速受到配额的管控，应用可以获取当前剩余的多网并发配额信息，合理分配使用多网络加速的次数和时长。应用配额以24小时的周期进行刷新。配额（次数或时长）耗尽会限制使用，此时请求多网会抛出错误码，24小时后会重新分配。

                  #### 接口说明

     具体API说明详见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview)。

           
                        | 接口名          | 描述         
                               | int32_t HMS_NetworkBoost_GetMultiPathQuotaStats(NetworkBoost_MultiPathQuota *quota)          | 获取当前应用多网使用的配额，包括已使用的配额信息和剩余配额信息。         
             

                       #### 开发步骤

     
             导入Network Boost Kit模块。

       ```
#include "NetworkBoostKit/network_boost_handover.h"
#include <cstdio>
```
             CMakeLists.txt中添加以下lib，具体请见[C API开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-preparations#c-api开发准备)。

       libnetwork_boost.so             调用GetMultiPathQuotaStats接口，获取多网配额信息。

       ```
int32_t GetMultiPathQuotaStats()
{
    NetworkBoost_MultiPathQuota quota = { 0 };
    int32_t ret = HMS_NetworkBoost_GetMultiPathQuotaStats(&quota);
    printf("获取多网配额信息结果: %d\n", ret);
    printf("获取多网配额信息已使用时长: %d\n", quota.used.duration);
    printf("获取多网配额信息已使用次数: %d\n", quota.used.count);
    printf("获取多网配额信息剩余总时长: %d\n", quota.remaining.duration);
    printf("获取多网配额信息剩余总次数: %d\n", quota.remaining.count);
    return ret;
}
```

---
*Updated: 2026-04-20 01:46:39*
