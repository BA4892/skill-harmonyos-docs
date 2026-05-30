# ArkWeb_WebMessagePortAPI

> **分区**: API参考  |  **Slug**: `capi-web-arkweb-webmessageportapi`  |  **DocID**: `f40e303e930a47fd8c0a3e8fbe67e760`

---

# ArkWeb_WebMessagePortAPI

 ```
typedef struct {...} ArkWeb_WebMessagePortAPI
```
  #### 概述

Post Message相关的Native API结构体。在调用接口前建议通过[ARKWEB_MEMBER_MISSING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h#宏定义)校验该函数结构体是否有对应函数指针，避免SDK与设备ROM不匹配导致crash问题。WebMessagePort相关接口需在UI线程中调用OH_ArkWeb_GetNativeAPI方法获取。

 **起始版本：** 12

 **相关模块：** [Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web)

 **所在头文件：** [arkweb_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   size_t size 结构体的大小。       #### [h2]成员函数

 名称 描述   [ArkWeb_ErrorCode (*postMessage)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag, const ArkWeb_WebMessagePtr webMessage)](#postmessage) 发送消息到HTML。  [void (*close)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag)](#close) 关闭消息端口。  [void (*setMessageEventHandler)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag, ArkWeb_OnMessageEventHandler messageEventHandler, void* userData)](#setmessageeventhandler) 设置接收HTML消息的回调。       #### 成员函数说明

  #### [h2]postMessage()

ArkWeb_ErrorCode (*postMessage)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag, const ArkWeb_WebMessagePtr webMessage) **描述：**

 发送消息到HTML。

 **参数：**

  参数项 描述   const [ArkWeb_WebMessagePortPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-webmessageport8h) webMessagePort Post Message端口结构体指针。  const char* webTag Web组件名称。  const [ArkWeb_WebMessagePtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-webmessage8h) webMessage 需要发送的消息。     **返回：**

  类型 说明   [ArkWeb_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-error-code-h#arkweb_errorcode) [ARKWEB_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-error-code-h#arkweb_errorcode) 执行成功。

 [ARKWEB_INVALID_PARAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-error-code-h#arkweb_errorcode) 参数无效。

 [ARKWEB_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-error-code-h#arkweb_errorcode) 初始化失败，没有找到与webTag绑定的Web组件。

        #### [h2]close()

void (*close)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag) **描述：**

 关闭消息端口。

 **参数：**

  参数项 描述   const [ArkWeb_WebMessagePortPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-webmessageport8h) webMessagePort Post Message端口结构体指针。  const char* webTag Web组件名称。       #### [h2]setMessageEventHandler()

```
void (*setMessageEventHandler)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag,
        ArkWeb_OnMessageEventHandler messageEventHandler, void* userData)
```
 **描述：**

 设置接收HTML消息的回调。

 **参数：**

  参数项 描述   const [ArkWeb_WebMessagePortPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-webmessageport8h) webMessagePort Post Message端口结构体指针。  const char* webTag Web组件名称。  [ArkWeb_OnMessageEventHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h#arkweb_onmessageeventhandler) messageEventHandler 处理消息的回调。  void* userData 用户自定义数据。

---
*Updated: 2026-04-22 06:44:59*
