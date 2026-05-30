# 游戏资源加速ExtensionAbility方法中使用static静态变量为什么不生效？

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `graphics-accelerate-assetdownload-faq-4`  |  **DocID**: `e94615f61134465a8a5e3259e03a07e3`  |  **NodeID**: `00020177579549197502984cd9ff8437`

---

# 游戏资源加速ExtensionAbility方法中使用static静态变量为什么不生效？

 资源加速ExtensionAbility的进程可能会切换，避免在ExtensionAbility方法使用应用自身的上下文变量，例如类成员变量、全局static静态变量。

 若想在资源加速ExtensionAbility方法中共享变量，应使用[数据持久化技术](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-data-persistence-overview)，在不同方法中共享变量。

---
*Updated: 2026-04-20 01:44:54*
