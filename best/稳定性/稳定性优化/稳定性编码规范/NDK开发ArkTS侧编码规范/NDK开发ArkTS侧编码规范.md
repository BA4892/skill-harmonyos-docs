# NDK开发ArkTS侧编码规范

> **分区**: 最佳实践  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `bpta-stability-coding-standard-ndk-arkts`  |  **DocID**: `62fe736b237f4475ba060d951357e462`  |  **NodeID**: `000201775547135509406d237debc985`

---

# NDK开发ArkTS侧编码规范

 ArkTS通过引用编译好的so文件来调用native方法。为避免不规范引用导致的运行时异常和故障排查成本，开发者应按照本文的标准进行引用。

 NDK工程创建步骤及目录结构可参考：[创建NDK工程](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-with-ndk)。

 #### import本模块的so

**配置依赖**：

 模块根目录 > oh-package.json5

 ```
{
  "name": "entry",
  "version": "1.0.0",
  "description": "Please describe the basic information.",
  "main": "",
  "author": "",
  "license": "",
  "dependencies": {
    // 依赖的so
    "libentry.so": "file:./src/main/cpp/types/libentry"
  }
}
```
 依赖文件中的so名称要与CMakeLists.txt文件中的模块名称一致。

 模块根目录 > src > main > cpp > CMakeLists.txt

 ```
# the minimum version of CMake.
cmake_minimum_required(VERSION 3.4.1)
project(MyApplication14)
set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})
if(DEFINED PACKAGE_FIND_FILE)
    include(${PACKAGE_FIND_FILE})
endif()
include_directories(${NATIVERENDER_ROOT_PATH}
                    ${NATIVERENDER_ROOT_PATH}/include)

# 声明一个产物libentry.so，SHARED表示产物为动态库，napi_init.cpp为产物的源代码              
add_library(entry SHARED napi_init.cpp)

# 声明产物entry链接时需要的三方库libace_napi.z.so
target_link_libraries(entry PUBLIC libace_napi.z.so)
```
 **引用native方法**：

 引用的so文件名称必须与oh-package.json5中定义的一致。

 ```
import { hilog } from '@kit.PerformanceAnalysisKit';
// Reference napi in dependent modules
import { testNapi } from 'library';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';
  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            // Call methods in Napi
            hilog.info(0x0000, 'testTag', 'Test NAPI 2 + 3 = %{public}d', testNapi.add(1, 2));
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
 调用的方法名称必须与.d.ts文件中导出的方法名一致。

 模块根目录 > src > main > cpp > types > libentry > index.d.ts

 ```
export const add: (a: number, b: number) => number;
```
  #### import其它模块的so

开发者可以在har/hsp中编写公共的so，供其他模块调用。

  #### [h2]引用方模块

**本地依赖**：

 模块根目录 > oh-package.json5

 ```
{
  "name": "entry",
  "version": "1.0.0",
  "description": "Please describe the basic information.",
  "main": "",
  "author": "",
  "license": "",
  "dependencies": {
    // 依赖当前工程下的其它模块
    "library": "file:../library"
  }
}
```
  **远程依赖**：

 运行命令```
ohpm install library --registry http://localhost:8088/repos/ohpm
```
  工程根目录 > oh-package.json5 中会自动配置依赖。```
{
  "name": "depend_othermodule_so",
  "version": "1.0.0",
  "description": "Please describe the basic information.",
  "main": "",
  "author": "",
  "license": "",
  "dependencies": {
    // 名称必须与远程模块名称相同
    "library": "^2.0.0"
  },
  "devDependencies": {
    "@ohos/hypium": "1.0.17",
    "@ohos/hamock": "1.0.1-rc2"
  }
}
```
  **引用native方法**：```
import { hilog } from '@kit.PerformanceAnalysisKit';
// Reference napi in dependent modules
import { testNapi } from 'library';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';
  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            // Call methods in Napi
            hilog.info(0x0000, 'testTag', 'Test NAPI 2 + 3 = %{public}d', testNapi.add(1, 2));
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
  #### [h2]导出方模块

 通过统一出口将napi导出。

 模块根目录 > index.ets

 ```
import testNapi from 'liblibrary.so';
export {testNapi}
```

---
*Updated: 2026-04-10 09:44:43*
