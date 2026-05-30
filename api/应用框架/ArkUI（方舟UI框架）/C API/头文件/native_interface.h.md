# native_interface.h

> **分区**: API参考  |  **Slug**: `capi-native-interface-h`  |  **DocID**: `41e3220518944314954fa2f1e82798a7`

---

# native_interface.h

  #### 概述

提供NativeModule接口的统一入口函数。

 **引用文件：** <arkui/native_interface.h>

 **库：** libace_ndk.z.so

 **系统能力：** SystemCapability.ArkUI.ArkUI.Full

 **起始版本：** 12

 **相关模块：** [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

 **相关示例：** [NativeNodeInterfaceSample](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeType/NativeNodeInterfaceSample)

   #### 汇总

  #### [h2]枚举

 名称 typedef关键字 描述   [ArkUI_NativeAPIVariantKind](#arkui_nativeapivariantkind) ArkUI_NativeAPIVariantKind 定义Native接口集合类型。       #### [h2]函数

 名称 描述   [void* OH_ArkUI_QueryModuleInterfaceByName(ArkUI_NativeAPIVariantKind type, const char* structName)](#oh_arkui_querymoduleinterfacebyname) 需调用该函数初始化C-API环境，并获取指定类型的Native模块接口集合。       #### [h2]宏定义

 名称 描述   [OH_ArkUI_GetModuleInterface(nativeAPIVariantKind, structType, structPtr)](#oh_arkui_getmoduleinterface) 基于结构体类型获取对应结构体指针的宏函数。       #### 枚举类型说明

  #### [h2]ArkUI_NativeAPIVariantKind

enum ArkUI_NativeAPIVariantKind **描述：**

 定义Native接口集合类型。

 **起始版本：** 12

  枚举项 描述   ARKUI_NATIVE_NODE = 0 UI组件相关接口类型，详见[native_node.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h)中的[结构体](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#结构体)类型定义。  ARKUI_NATIVE_DIALOG = 1 弹窗相关接口类型，详见[native_dialog.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-dialog-h)中的[结构体](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-dialog-h#结构体)类型定义。  ARKUI_NATIVE_GESTURE = 2 手势相关接口类型，详见[native_gesture.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-gesture-h)中的[结构体](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-gesture-h#结构体)类型定义。  ARKUI_NATIVE_ANIMATE = 3 动画相关接口类型。详见[native_animate.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-animate-h)中的[结构体](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-animate-h#结构体)类型定义。  ARKUI_MULTI_THREAD_NATIVE_NODE = 4 多线程UI组件相关接口类型，详见[native_node.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h)中的[结构体](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#结构体)类型定义。

 **起始版本：** 22

        #### 函数说明

  #### [h2]OH_ArkUI_QueryModuleInterfaceByName()

void* OH_ArkUI_QueryModuleInterfaceByName(ArkUI_NativeAPIVariantKind type, const char* structName) **描述：**

 需调用该函数初始化C-API环境，并获取指定类型的Native模块接口集合。

 **起始版本：** 12

 **参数：**

  参数项 描述   [ArkUI_NativeAPIVariantKind](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-h#arkui_nativeapivariantkind) type ArkUI提供的native接口集合大类，例如UI组件接口类：ARKUI_NATIVE_NODE, 手势类：ARKUI_NATIVE_GESTURE。  const char* structName native接口结构体的名称，通过查询对应头文件内结构体定义，例如位于[native_node.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h)中的"ArkUI_NativeNodeAPI_1"。     **返回：**

  类型 说明   void* 返回native接口抽象指针，在转换为具体类型后进行使用。       #### [h2]OH_ArkUI_GetModuleInterface()

```
#define OH_ArkUI_GetModuleInterface(nativeAPIVariantKind, structType, structPtr)                     \
do {                                                                                                 \
        void* anyNativeAPI = OH_ArkUI_QueryModuleInterfaceByName(nativeAPIVariantKind, #structType); \
        if (anyNativeAPI) {                                                                          \
            structPtr = (structType*)(anyNativeAPI);                                                 \
        }                                                                                            \
    } while (0)
```
 **描述：**

 基于结构体类型获取对应结构体指针的宏函数。此宏函数接收[ArkUI_NativeAPIVariantKind](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-h#arkui_nativeapivariantkind)类型枚举参数nativeAPIVariantKind、const char*类型参数structType、structType*类型参数structPtr，调用[OH_ArkUI_QueryModuleInterfaceByName](#oh_arkui_querymoduleinterfacebyname)获取native接口抽象指针，转换为structType*类型后赋值给structPtr。

 **起始版本：** 12

---
*Updated: 2026-04-22 06:44:08*
