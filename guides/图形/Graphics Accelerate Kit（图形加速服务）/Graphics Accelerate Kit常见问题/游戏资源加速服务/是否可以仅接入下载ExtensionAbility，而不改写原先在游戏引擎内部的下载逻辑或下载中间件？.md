# 是否可以仅接入下载ExtensionAbility，而不改写原先在游戏引擎内部的下载逻辑或下载中间件？

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `graphics-accelerate-assetdownload-faq-6`  |  **DocID**: `9f3c2ea0627840508a9c290ec9c0f578`  |  **NodeID**: `00020177579549197504709e52b7fe67`

---

# 是否可以仅接入下载ExtensionAbility，而不改写原先在游戏引擎内部的下载逻辑或下载中间件？

       可以，支持仅接入下载ExtensionAbility。

    但建议在应用进入前台时，通过[removeAllAssetDownloadTasks](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/graphics-accelerate-assetdownloadmanager#assetdownloadmanagerremoveallassetdownloadtasks)移除系统中的所有下载任务，对于已完成下载的任务可以复用，避免重复下载。对于未完成下载的任务建议使用应用自身下载器进行重新下载。

---
*Updated: 2026-04-20 01:45:00*
