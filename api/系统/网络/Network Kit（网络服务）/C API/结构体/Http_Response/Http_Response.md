# Http_Response

> **分区**: API参考  |  **Slug**: `capi-netstack-http-response`  |  **DocID**: `c1d8a5833156489eba60edc01e7a2929`

---

# Http_Response

 ```
typedef struct Http_Response {...} Http_Response
```
  #### 概述

定义HTTP响应的结构体。

 **起始版本：** 20

 **相关模块：** [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

 **所在头文件：** [net_http_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Http_Buffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-buffer) body HTTP请求响应的数据，参考[Http_Buffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-buffer)。  [Http_ResponseCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_responsecode) responseCode HTTP请求响应码，参考[Http_ResponseCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_responsecode)。  [Http_Headers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-headers) *headers HTTP响应的头，指向Http_Headers的指针，参考[Http_Headers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-headers)。  char *cookies HTTP响应Cookies。  [Http_PerformanceTiming](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-performancetiming) *performanceTiming HTTP响应时间信息，指向Http_PerformanceTiming的指针，参考[Http_PerformanceTiming](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-performancetiming)。       #### [h2]成员函数

 名称 描述   [void (*destroyResponse)(struct Http_Response **response)](#destroyresponse) 销毁HTTP响应的回调函数       #### 成员函数说明

  #### [h2]destroyResponse()

void (*destroyResponse)(struct Http_Response **response) **描述**

 销毁HTTP响应的回调函数

 **起始版本：** 20

 **参数：**

  参数项 描述   struct [Http_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-response) **response 要销毁的HTTP响应，指向Http_Response的指针，参考[Http_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-response)。

---
*Updated: 2026-04-22 06:49:05*
