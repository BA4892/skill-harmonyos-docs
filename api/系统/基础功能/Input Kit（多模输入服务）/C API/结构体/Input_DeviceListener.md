# Input_DeviceListener

> **分区**: API参考  |  **Slug**: `capi-input-input-devicelistener`  |  **DocID**: `cd5de18a39ec4c98863076fc42fdfcff`

---

# Input_DeviceListener

 ```
typedef struct Input_DeviceListener {...} Input_DeviceListener
```
  #### 概述

定义一个结构体用于监听设备热插拔。

 **起始版本：** 13

 **相关模块：** [input](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input)

 **所在头文件：** [oh_input_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Input_DeviceAddedCallback](#input_deviceaddedcallback) deviceAddedCallback 定义一个回调函数，用于接收设备热插事件。  [Input_DeviceRemovedCallback](#input_deviceremovedcallback) deviceRemovedCallback 定义一个回调函数，用于接收设备热拔事件。       #### [h2]成员函数

 名称 typedef关键字 描述   [typedef void (*Input_DeviceAddedCallback)(int32_t deviceId)](#input_deviceaddedcallback) Input_DeviceAddedCallback() 回调函数，用于接收输入设备的热插事件。  [typedef void (*Input_DeviceRemovedCallback)(int32_t deviceId)](#input_deviceremovedcallback) Input_DeviceRemovedCallback() 回调函数，用于接收输入设备的热拔事件。       #### 成员函数说明

  #### [h2]Input_DeviceAddedCallback()

typedef void (*Input_DeviceAddedCallback)(int32_t deviceId) **描述**

 回调函数，用于接收输入设备的热插事件。

 **起始版本：** 13

 **参数：**

  参数项 描述   int32_t deviceId 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。       #### [h2]Input_DeviceRemovedCallback()

typedef void (*Input_DeviceRemovedCallback)(int32_t deviceId) **描述**

 回调函数，用于接收输入设备的热拔事件。

 **起始版本：** 13

 **参数：**

  参数项 描述   int32_t deviceId 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。

---
*Updated: 2026-04-22 06:48:20*
