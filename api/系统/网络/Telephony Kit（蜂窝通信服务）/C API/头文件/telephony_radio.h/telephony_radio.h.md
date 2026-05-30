# telephony_radio.h

> **分区**: API参考  |  **Slug**: `capi-telephony-radio-h`  |  **DocID**: `803f6ae633b54154a65840b66df96585`

---

# telephony_radio.h

  #### 概述

为网络搜索模块定义C接口。

 **引用文件：** <telephony/core_service/telephony_radio.h>

 **库：** libtelephony_radio.so

 **系统能力：** SystemCapability.Telephony.CoreService

 **起始版本：** 13

 **相关模块：** [Telephony](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony)

   #### 汇总

  #### [h2]函数

 名称 描述   [Telephony_RadioResult OH_Telephony_GetNetworkState(Telephony_NetworkState *state)](#oh_telephony_getnetworkstate) 获取网络状态。  [Telephony_RadioResult OH_Telephony_GetNetworkStateForSlot(int32_t slotId, Telephony_NetworkState *state)](#oh_telephony_getnetworkstateforslot) 获取给定卡槽ID的网络状态。       #### 函数说明

  #### [h2]OH_Telephony_GetNetworkState()

Telephony_RadioResult OH_Telephony_GetNetworkState(Telephony_NetworkState *state) **描述**

 获取网络状态。

 **系统能力：** SystemCapability.Telephony.CoreService

 **需要权限：** ohos.permission.GET_NETWORK_INFO

 **起始版本：** 13

 **参数：**

  参数项 描述   [Telephony_NetworkState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-telephony-networkstate) *state 用户接收网络状态信息的结构体。     **返回：**

  类型 说明   [Telephony_RadioResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h#telephony_radioresult) 结果定义在 [Telephony_RadioResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h#telephony_radioresult)。

  [TEL_RADIO_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h#telephony_radioresult) 成功。

  [TEL_RADIO_PERMISSION_DENIED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h#telephony_radioresult) 权限错误。

  [TEL_RADIO_ERR_MARSHALLING_FAILED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h#telephony_radioresult) 编组错误。

  [TEL_RADIO_ERR_SERVICE_CONNECTION_FAILED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h#telephony_radioresult) 连接电话服务错误。

  [TEL_RADIO_ERR_OPERATION_FAILED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h#telephony_radioresult) 操作电话服务错误。

  [TEL_RADIO_ERR_INVALID_PARAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h#telephony_radioresult) 参数错误。

        #### [h2]OH_Telephony_GetNetworkStateForSlot()

Telephony_RadioResult OH_Telephony_GetNetworkStateForSlot(int32_t slotId, Telephony_NetworkState *state) **描述**

 获取给定卡槽ID的网络状态。

 **系统能力：** SystemCapability.Telephony.CoreService

 **需要权限：** ohos.permission.GET_NETWORK_INFO

 **起始版本：** 13

 **参数：**

  参数项 描述   int32_t slotId 卡槽ID。  [Telephony_NetworkState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-telephony-networkstate) *state 用户接收网络状态信息的结构体。     **返回：**

  类型 说明   [Telephony_RadioResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h#telephony_radioresult) 结果定义在 [Telephony_RadioResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h#telephony_radioresult)。

  [TEL_RADIO_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h#telephony_radioresult) 成功。

  [TEL_RADIO_PERMISSION_DENIED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h#telephony_radioresult) 权限错误。

  [TEL_RADIO_ERR_MARSHALLING_FAILED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h#telephony_radioresult) 编组错误。

  [TEL_RADIO_ERR_SERVICE_CONNECTION_FAILED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h#telephony_radioresult) 连接电话服务错误。

  [TEL_RADIO_ERR_OPERATION_FAILED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h#telephony_radioresult) 操作电话服务错误。

  [TEL_RADIO_ERR_INVALID_PARAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h#telephony_radioresult) 参数错误。

---
*Updated: 2026-04-22 06:48:18*
