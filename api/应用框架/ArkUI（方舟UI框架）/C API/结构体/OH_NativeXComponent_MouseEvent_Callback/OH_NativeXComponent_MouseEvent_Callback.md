# OH_NativeXComponent_MouseEvent_Callback

> **分区**: API参考  |  **Slug**: `xcomponent-oh-nativexcomponent-mouseevent-callback`  |  **DocID**: `82cb8e20856f4c33958e3ce00c4df34a`

---

# OH_NativeXComponent_MouseEvent_Callback

 ```
typedef struct OH_NativeXComponent_MouseEvent_Callback {...} OH_NativeXComponent_MouseEvent_Callback
```
  #### 概述

注册鼠标事件的回调。

 **起始版本：** 9

 **相关模块：** [OH_NativeXComponent Native XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent)

 **所在头文件：** [native_interface_xcomponent.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-xcomponent-h)

   #### 汇总

  #### [h2]成员函数

 名称 描述   [void (*DispatchMouseEvent)(OH_NativeXComponent* component, void* window)](#dispatchmouseevent) 当鼠标事件被触发时调用。  [void (*DispatchHoverEvent)(OH_NativeXComponent* component, bool isHover)](#dispatchhoverevent) 当悬停事件被触发时调用。       #### 成员函数说明

  #### [h2]DispatchMouseEvent()

void (*DispatchMouseEvent)(OH_NativeXComponent* component, void* window) **描述：**

 当鼠标事件被触发时调用。

 **起始版本：** 9

 **参数：**

  参数项 描述   [OH_NativeXComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vexcomponent-native-xcomponent-oh-nativexcomponent)* component 表示指向[OH_NativeXComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vexcomponent-native-xcomponent-oh-nativexcomponent)实例的指针。  void* window 表示NativeWindow句柄。       #### [h2]DispatchHoverEvent()

void (*DispatchHoverEvent)(OH_NativeXComponent* component, bool isHover) **描述：**

 当悬停事件被触发时调用。

 **起始版本：** 9

 **参数：**

  参数项 描述   [OH_NativeXComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vexcomponent-native-xcomponent-oh-nativexcomponent)* component 表示指向[OH_NativeXComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vexcomponent-native-xcomponent-oh-nativexcomponent)实例的指针。  bool isHover 表示鼠标或手写笔是否悬浮在组件上，进入时为true，离开时为false。

---
*Updated: 2026-04-22 06:45:18*
