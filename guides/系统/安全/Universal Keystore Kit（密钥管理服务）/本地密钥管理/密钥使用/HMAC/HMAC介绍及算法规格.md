# HMAC介绍及算法规格

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `huks-hmac-overview`  |  **DocID**: `ee510a6a93134ffa961648a42e420af4`  |  **NodeID**: `00020177579585271657039ecdc1fddb`

---

# HMAC介绍及算法规格

 MAC（Message Authentication Code）提供了一种在不可靠介质上检验传输或存储信息完整性的方法，HMAC是密钥相关的哈希运算消息认证码（Hash-based Message Authentication Code），是一种基于Hash函数和密钥进行消息认证的方法。HMAC可以与任何加密哈希函数（例如SHA256、SM3等）结合使用，HUKS支持了HMAC结合主流的摘要算法进行使用。

 从API 23开始支持[群组密钥](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-group-key-overview)特性。

  #### 支持的算法

以下为HMAC支持的规格说明。

  
| 摘要算法  | 支持的密钥长度  | API级别  
  | SHA256  | 192 - 1024  | 8+  
 | SHA384、SHA512  | 256 - 1024  | 8+  
 | SM3  | 80 - 1024  | 8+

---
*Updated: 2026-04-20 01:47:03*
