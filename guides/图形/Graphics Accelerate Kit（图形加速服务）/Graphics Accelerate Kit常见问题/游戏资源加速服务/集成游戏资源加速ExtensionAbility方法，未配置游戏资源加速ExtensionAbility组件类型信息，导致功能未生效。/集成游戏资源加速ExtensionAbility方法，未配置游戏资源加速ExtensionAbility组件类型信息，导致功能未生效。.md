# 集成游戏资源加速ExtensionAbility方法，未配置游戏资源加速ExtensionAbility组件类型信息，导致功能未生效。

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `graphics-accelerate-assetdownload-faq-2`  |  **DocID**: `711efe04be3d494ba3433cb0251ac4cb`  |  **NodeID**: `000201775795491975006055705b0923`

---

# 集成游戏资源加速ExtensionAbility方法，未配置游戏资源加速ExtensionAbility组件类型信息，导致功能未生效。

 未配置游戏资源加速ExtensionAbility组件类型信息将出现如下异常日志：

 bundle[xxx] do not have Asset Acceleration Extension Ability. 请开发者在“src/main/module.json5”的extensionAbilities层级中添加资源加速ExtensionAbility信息。

 ```
"extensionAbilities": [
  {
    "name": "AssetAccelExtAbility", // 游戏资源加速ExtensionAbility组件的名称。
    "srcEntry": "./ets/extensionability/AssetAccelExtAbility.ets", // 游戏资源加速ExtensionAbility组件所对应的代码路径。
    "type": "assetAcceleration"
  }
]
```

---
*Updated: 2026-04-20 01:44:49*
