# 60180007 服务端通过Authorization Code无法获取到华为账号一键登录手机号如何解决

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `account-faq-21`  |  **DocID**: `d22d3b82380042ffabd14261447900bf`  |  **NodeID**: `000201775795649086248b21f10d0ab6`

---

# 60180007 服务端通过Authorization Code无法获取到华为账号一键登录手机号如何解决

 **问题现象**

 调用服务器接口/oauth2/v6/quickLogin/getPhoneNumber时出现错误60180007，无法获取华为账号的一键登录手机号。

 **可能原因**

 调用服务器接口/oauth2/v6/quickLogin/getPhoneNumber的入参code，不是通过调用华为账号的一键登录组件获取到的。

 **解决措施**

 请参考[客户端开发](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-phone-unionid-login#客户端开发)的展示一键登录页面并获取Authorization Code，获取调用服务器接口/oauth2/v6/quickLogin/getPhoneNumber需要的入参code。

---
*Updated: 2026-04-20 01:52:18*
