# Ukey PIN码认证介绍及规格

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `huks-ukey-pin-authentication-management-overview`  |  **DocID**: `4af106b7dc8d4079b2f97b8e3875f0d2`  |  **NodeID**: `00020177579585271639105ccf1d8729`

---

# Ukey PIN码认证介绍及规格

 PIN（Personal Identification Number）码是Ukey设备的安全访问凭证，采用“硬件设备+PIN码”的双因子认证模式。用户必须同时拥有物理Ukey设备和正确的PIN码才能访问设备内的密钥材料。

 PIN码作用如下：

 
防暴力破解：连续错误输入达到一定次数（与驱动应用实现的外部密钥管理扩展能力相关）后自动锁定。

  硬件级安全：PIN码验证在Ukey硬件内完成，敏感信息不出硬件。

  
 Ukey使用resourceId标识Ukey资源，生态应用打开资源之后，如需要操作resourceId对应的私钥执行签名操作，则需要先验证PIN码。

   HUKS提供PIN码认证能力和认证状态查询能力。应用PIN码认证之前，可以先查询认证状态。如果需要PIN码认证，则需要拉起[证书管理应用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/certmanager-overview)，完成PIN码认证。

---
*Updated: 2026-04-20 01:46:47*
