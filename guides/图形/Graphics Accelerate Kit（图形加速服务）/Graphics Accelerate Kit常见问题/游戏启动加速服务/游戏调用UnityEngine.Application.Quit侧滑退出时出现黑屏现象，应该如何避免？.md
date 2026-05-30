# 游戏调用UnityEngine.Application.Quit侧滑退出时出现黑屏现象，应该如何避免？

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `graphics-accelerate-launch-faq-4`  |  **DocID**: `ae30c1dc2fbe4215a4d692d4d57a224d`  |  **NodeID**: `000201775795491975033f004ed999b4`

---

# 游戏调用UnityEngine.Application.Quit侧滑退出时出现黑屏现象，应该如何避免？

 需根据“退出后是否希望继续使用**秒级启动**能力”选择不同的退出策略：

 
**希望下次启动仍支持秒级启动**

  在侧滑退出场景下，应调用[terminateSelf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#terminateself)实现退出，确保进程状态可被系统正确保留，避免出现黑屏问题。

  **不希望下次启动使用秒级启动**

  在侧滑退出场景下，应调用[killAllProcesses](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-applicationcontext#applicationcontextkillallprocesses)实现强制退出，彻底清理进程，避免残留状态引发异常。

---
*Updated: 2026-04-20 01:44:54*
