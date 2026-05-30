# 集成了游戏资源加速ExtensionAbility方法，未配置网络权限，导致功能未生效。

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `graphics-accelerate-assetdownload-faq-3`  |  **DocID**: `626879329b57419a926ab1751662f455`  |  **NodeID**: `0002017757954919750172437328d848`

---

# 集成了游戏资源加速ExtensionAbility方法，未配置网络权限，导致功能未生效。

 未配置网络权限将出现如下异常日志：

 ohos.permission.INTERNET check failed 请开发者在“src/main/module.json5”的requestPermissions层级中添加网络权限。

 ```
{
  "module": {
    // ...
    "requestPermissions": [
      {
        "name": "ohos.permission.INTERNET"
      }
    ]
  }
}
```

---
*Updated: 2026-04-20 01:44:52*
