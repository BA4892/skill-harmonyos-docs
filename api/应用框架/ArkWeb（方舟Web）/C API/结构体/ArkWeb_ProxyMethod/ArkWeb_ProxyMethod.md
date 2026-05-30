# ArkWeb_ProxyMethod

> **分区**: API参考  |  **Slug**: `capi-web-arkweb-proxymethod`  |  **DocID**: `22ed436e59c348f78a72e9b945d53551`

---

# ArkWeb_ProxyMethod

 ```
typedef struct {...} ArkWeb_ProxyMethod
```
  #### 概述

注入的Proxy方法通用结构体。

 **起始版本：** 12

 **相关模块：** [Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web)

 **所在头文件：** [arkweb_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   const char* methodName 注入的方法名。  [ArkWeb_OnJavaScriptProxyCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h#arkweb_onjavascriptproxycallback) callback Proxy方法执行的回调。  void* userData 需要在回调中携带的自定义数据。

---
*Updated: 2026-04-22 06:44:49*
