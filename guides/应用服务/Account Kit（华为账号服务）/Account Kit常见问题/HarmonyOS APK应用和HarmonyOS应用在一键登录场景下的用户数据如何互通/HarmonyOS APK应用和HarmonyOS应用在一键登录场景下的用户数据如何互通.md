# HarmonyOS APK应用和HarmonyOS应用在一键登录场景下的用户数据如何互通

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `account-faq-7`  |  **DocID**: `28defe00ef6d4b0c88009f89119fb910`  |  **NodeID**: `00020177579564908615737b40763c18`

---

# HarmonyOS APK应用和HarmonyOS应用在一键登录场景下的用户数据如何互通

       终端设备从HarmonyOS 3.x/4.x（简称HarmonyOS）升级到HarmonyOS NEXT/5.0.x及之后版本（简称HarmonyOS NEXT）。

    
           HarmonyOS APK应用使用OpenID关联用户数据时，将用户数据关系切换成UnionID，具体切换指导可以参考：[通过OpenID获取UnionID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-unionid)。

           HarmonyOS APK应用使用UnionID关联用户数据时，在HarmonyOS NEXT/5.0.x上接入华为账号一键登录获取手机号后，应用需要同时将UnionID和手机号与用户信息进行关联，最终实现应用使用华为账号一键登录和手机号登录数据互通。详细流程可以参考：[用户场景设计](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-phone-unionid-login#用户场景设计)。

---
*Updated: 2026-04-20 01:52:11*
