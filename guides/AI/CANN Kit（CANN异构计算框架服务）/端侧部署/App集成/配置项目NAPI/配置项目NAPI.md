# 配置项目NAPI

> **分区**: 指南  |  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  |  **Slug**: `cannkit-compiling-the-napi`  |  **DocID**: `9f0b5dc2f5b7427daf08cfca4514d189`  |  **NodeID**: `000201775795449800377c162073f74d`

---

# 配置项目NAPI

 编译HAP时，NAPI层的so需要编译依赖NDK中的libneural_network_core.so和libhiai_foundation.so。

  #### 头文件引用

按需引用[NNCore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neuralnetworkruntime)和[CANN Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit-hiai-aipp-param-8h)的头文件。

 ```
#include "neural_network_runtime/neural_network_core.h"
#include "CANNKit/hiai_options.h"
```
   #### 编写CMakeLists.txt

CMakeLists.txt示例代码如下。

 ```
# the minimum version of CMake.
cmake_minimum_required(VERSION 3.4.1)
project(CANNDemo)

set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})

include_directories(${NATIVERENDER_ROOT_PATH}
                    ${NATIVERENDER_ROOT_PATH}/include)

include_directories(${HMOS_SDK_NATIVE}/sysroot/usr/lib)
FIND_LIBRARY(cann-lib hiai_foundation)

add_library(entry SHARED Classification.cpp HIAIModelManager.cpp)

target_link_libraries(entry PUBLIC libace_napi.z.so
    libhilog_ndk.z.so
    librawfile.z.so
    ${cann-lib}
    libneural_network_core.so
    )
```

---
*Updated: 2026-04-20 01:43:37*
