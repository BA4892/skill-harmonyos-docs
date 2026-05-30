# 接口调用时返回App has not applied for the Wear Engine service错误信息

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `wearengine_faq-3`  |  **DocID**: `5944c97f83954a04beb029fd3c1c671f`  |  **NodeID**: `000201775795852716290cd3d998913d`

---

# 接口调用时返回App has not applied for the Wear Engine service错误信息

 
请确保已在华为开发者联盟网站完成了[申请接入Wear Engine服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wearengine_apply)，并已审批通过。

  如果已申请了Wear Engine服务并且通过审批，仍返回App has not applied for the Wear Engine service错误信息，可能是您在华为联盟网站上申请Wear Engine服务前已经调用过相关接口，申请审核通过后，本地已缓存的未申请权限的记录未更新（每24小时自动刷新一次）。请在应用管理中清除华为运动健康App数据，或卸载重装华为运动健康App后重试。

  如仍无法解决，请通过华为开发者联盟的“[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)”获取人工帮助。

---
*Updated: 2026-04-20 01:46:39*
