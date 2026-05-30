# 基于Node-API加载模块

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `load-module-base-nodeapi`  |  **DocID**: `e0f0e7f7c81c42439630ea399ded7cd1`  |  **NodeID**: `000201775795788884586d39dd551867`

---

# 基于Node-API加载模块

       Node-API中有多种方式支持开发者在C++侧加载工程内模块及文件。推荐使用napi_load_module_with_info接口。

              #### napi_load_module_with_info

     在主线程或子线程内加载hap/hsp/har/native模块，使用时必须标记所加载的包的信息，支持多种场景。

     具体参考：[napi_load_module_with_info](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-load-module-with-info)。

                  #### napi_load_module

     在主线程内加载hap/hsp/har/native模块，参数传递简便。加载场景有限制，例如无法在子线程中使用该接口。

     具体参考：[napi_load_module](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-load-module)。

---
*Updated: 2026-04-20 01:48:47*
