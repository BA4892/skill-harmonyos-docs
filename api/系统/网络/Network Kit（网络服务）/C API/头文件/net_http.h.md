# net_http.h

> **分区**: API参考  |  **Slug**: `capi-net-http-h`  |  **DocID**: `eb1015cdaf064686a6f109c1b6432225`

---

# net_http.h

  #### 概述

定义HTTP请求模块的接口。

 **引用文件：** <network/netstack/net_http.h>

 **库：** libnet_http.so

 **系统能力：** SystemCapability.Communication.NetStack

 **起始版本：** 20

 **相关模块：** [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

   #### 汇总

  #### [h2]函数

 名称 描述   [Http_Headers *OH_Http_CreateHeaders(void)](#oh_http_createheaders) 创建HTTP请求或者响应的头。  [void OH_Http_DestroyHeaders(Http_Headers **headers)](#oh_http_destroyheaders) 销毁HTTP请求或者响应的头。  [uint32_t OH_Http_SetHeaderValue(struct Http_Headers *headers, const char *name, const char *value)](#oh_http_setheadervalue) 设置HTTP请求或者响应的头的键值对。  [Http_HeaderValue *OH_Http_GetHeaderValue(Http_Headers *headers, const char *name)](#oh_http_getheadervalue) 通过键获取请求或响应头的值。  [Http_HeaderEntry *OH_Http_GetHeaderEntries(Http_Headers *headers)](#oh_http_getheaderentries) 获取请求或响应头的所有键值对。  [void OH_Http_DestroyHeaderEntries(Http_HeaderEntry **headerEntry)](#oh_http_destroyheaderentries) 销毁OH_Http_GetHeaderEntries中获取的所有键值对。  [Http_Request *OH_Http_CreateRequest(const char *url)](#oh_http_createrequest) 创建HTTP请求。  [int OH_Http_Request(Http_Request *request, Http_ResponseCallback callback, Http_EventsHandler handler)](#oh_http_request) 发起HTTP请求。  [void OH_Http_Destroy(struct Http_Request **request)](#oh_http_destroy) 销毁HTTP请求。       #### 函数说明

  #### [h2]OH_Http_CreateHeaders()

Http_Headers *OH_Http_CreateHeaders(void) **描述**

 创建HTTP请求或者响应的头。

   建议在本次HTTP请求结束后，及时调用[OH_Http_DestroyHeaders](#oh_http_destroyheaders)销毁HTTP请求或者响应的头，执行资源清理等操作。

   **系统能力：** SystemCapability.Communication.NetStack

 **起始版本：** 20

 **返回：**

  类型 说明   [Http_Headers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-headers) * Http_Headers 返回HTTP请求或者响应的头，指向Http_Headers。       #### [h2]OH_Http_DestroyHeaders()

void OH_Http_DestroyHeaders(Http_Headers **headers) **描述**

 销毁HTTP请求或者响应的头。

 **系统能力：** SystemCapability.Communication.NetStack

 **起始版本：** 20

 **参数：**

  参数项 描述   [Http_Headers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-headers) **headers 要被销毁的HTTP请求或响应的头，是通过OH_Http_CreateHeaders生成的数据。       #### [h2]OH_Http_SetHeaderValue()

uint32_t OH_Http_SetHeaderValue(struct Http_Headers *headers, const char *name, const char *value) **描述**

 设置HTTP请求或者响应的头的键值对。

 **系统能力：** SystemCapability.Communication.NetStack

 **起始版本：** 20

 **参数：**

  参数项 描述   [struct Http_Headers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-headers) *headers 指向要设置的Http_Headers的指针。  const char *name 键值。  const char *value 键值对应的值。     **返回：**

  类型 说明   uint32_t uint32_t 0 - 成功。 401 - 参数错误。 2300027 - 内存不足。       #### [h2]OH_Http_GetHeaderValue()

Http_HeaderValue *OH_Http_GetHeaderValue(Http_Headers *headers, const char *name) **描述**

 通过键获取请求或响应头的值。

 **系统能力：** SystemCapability.Communication.NetStack

 **起始版本：** 20

 **参数：**

  参数项 描述   [Http_Headers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-headers) *headers 指向要获取值的Http_Headers的指针。  const char *name 键值。     **返回：**

  类型 说明   [Http_HeaderValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-headervalue) * Http_HeaderValue 指向获取的Http_HeaderValue的指针。       #### [h2]OH_Http_GetHeaderEntries()

Http_HeaderEntry *OH_Http_GetHeaderEntries(Http_Headers *headers) **描述**

 获取请求或响应头的所有键值对。

 **系统能力：** SystemCapability.Communication.NetStack

 **起始版本：** 20

 **参数：**

  参数项 描述   [Http_Headers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-headers) *headers 指向要获取值的Http_Headers的指针。     **返回：**

  类型 说明   [Http_HeaderEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-headerentry) * Http_HeaderEntry 指向获取的Http_HeaderEntry的指针。       #### [h2]OH_Http_DestroyHeaderEntries()

void OH_Http_DestroyHeaderEntries(Http_HeaderEntry **headerEntry) **描述**

 销毁OH_Http_GetHeaderEntries中获取的所有键值对。

 **系统能力：** SystemCapability.Communication.NetStack

 **起始版本：** 20

 **参数：**

  参数项 描述   [Http_HeaderEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-headerentry) **headerEntry 指向要销毁的Http_HeaderEntry的指针，是通过OH_Http_GetHeaderEntries获取的数据。       #### [h2]OH_Http_CreateRequest()

Http_Request *OH_Http_CreateRequest(const char *url) **描述**

 创建HTTP请求。

 **系统能力：** SystemCapability.Communication.NetStack

 **起始版本：** 20

 **参数：**

  参数项 描述   const char *url 请求URL。     **返回：**

  类型 说明   [Http_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-request) * 返回创建的请求，指向Http_Request的指针。       #### [h2]OH_Http_Request()

int OH_Http_Request(Http_Request *request, Http_ResponseCallback callback, Http_EventsHandler handler) **描述**

 发起HTTP请求。

   建议在本次HTTP请求收到响应并处理完毕后，及时调用[OH_Http_Destroy](#oh_http_destroy)中断HTTP请求。

   **系统能力：** SystemCapability.Communication.NetStack

 **需要权限：** ohos.permission.INTERNET

 **起始版本：** 20

 **参数：**

  参数项 描述   [Http_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-request) *request 发送的请求，指向Http_Request的指针。  [Http_ResponseCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_responsecallback) callback 请求的响应，指向Http_ResponseCallback。  [Http_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-eventshandler) handler 监听不同HTTP事件的回调函数，指向Http_EventsHandler。     **返回：**

  类型 说明   int 请求发起成功返回0，非0表示请求发起失败，错误码的具体描述，可以参考Http_ErrCode。

  在Http_ResponseCallback中也会携带errCode信息，表示请求发起成功，但是因为一些原因，和服务器的交互异常，具体异常原因，同步参考Http_ErrCode。

        #### [h2]OH_Http_Destroy()

void OH_Http_Destroy(struct Http_Request **request) **描述**

 中断HTTP请求。

 **系统能力：** SystemCapability.Communication.NetStack

 **起始版本：** 20

 **参数：**

  参数项 描述   [struct Http_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-request) **request 要中断的请求，指向Http_Request的指针，参考[Http_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-request)。

---
*Updated: 2026-04-22 06:48:56*
