# Provider管理介绍及规格

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `huks-provider-management-overview`  |  **DocID**: `cfa8088ea22b42e3ac16dbc6dd5ec1e7`  |  **NodeID**: `0002017757958527163952b4a927b7c0`

---

# Provider管理介绍及规格

 HUKS提供外部密钥管理扩展能力（简称Ukey Extension）注册和注销接口。三方驱动HAP检测到Ukey存在时，调用Provider注册接口，将驱动HAP应用提供的外部密钥管理能力注册到系统中来。当检测到所有Ukey被拔出时，通过调用Provider注销接口，将其提供的外部密钥管理能力从系统中注销。

   
- Provider名称建议包含厂商信息，全局唯一。
- Provider名称长度最大为128字节。
- Provider注册和注销有权限管控，需申请[ohos.permission.CRYPTO_EXTENSION_REGISTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissioncrypto_extension_register)权限。
- 一个Provider可以关联到多个Ability。一般来说，Provider是厂商驱动名称，Ability是厂商针对其名下的各个业务定制扩展能力的名称，也可以由厂商自行决定Provider和Ability的名称。

   **支持功能规格：**

  
| 功能  | 说明  | API级别  
  | Provider注册  | 注册外部密钥管理扩展能力提供者到系统。  | 22+  
 | Provider注销  | 从系统中注销外部密钥管理扩展能力提供者。  | 22+

---
*Updated: 2026-04-20 01:46:47*
