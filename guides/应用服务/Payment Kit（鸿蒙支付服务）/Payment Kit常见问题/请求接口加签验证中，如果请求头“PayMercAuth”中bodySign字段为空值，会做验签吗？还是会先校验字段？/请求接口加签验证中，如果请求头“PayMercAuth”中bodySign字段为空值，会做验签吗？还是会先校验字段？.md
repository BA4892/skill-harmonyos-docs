# 请求接口加签验证中，如果请求头“PayMercAuth”中bodySign字段为空值，会做验签吗？还是会先校验字段？

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `payment-faq-21`  |  **DocID**: `48d182db64a64ea58f5355e1225060a4`  |  **NodeID**: `000201775795649086255c67f99ce57a`

---

# 请求接口加签验证中，如果请求头“PayMercAuth”中bodySign字段为空值，会做验签吗？还是会先校验字段？

 鉴权请求头“PayMercAuth”会先校验相关字段再做验签。bodySign字段设置为空值，Payment Kit服务器不会做验签，直接响应异常给商户。

---
*Updated: 2026-04-20 01:52:19*
