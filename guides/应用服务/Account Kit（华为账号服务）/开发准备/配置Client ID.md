# 配置Client ID

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `account-client-id`  |  **DocID**: `8eaa026eb93c461093c82fb150bfe804`  |  **NodeID**: `0002017757956490869989b43f901fa0`

---

# 配置Client ID

  #### 获取Client ID和APP ID

在 AppGallery Connect（简称AGC）的[开发与服务](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myProject)中，选择对应的项目和对应的应用，在“常规 > 应用 ”下，找到**应用**的Client ID和APP ID。

 

   #### 确认是否需要配置Client ID

如果上一步获取到的Client ID和APP ID相同，则无需配置Client ID，否则需要按下一步配置Client ID。

   #### 配置Client ID

在工程中**entry**模块的module.json5文件中，新增metadata，配置name为client_id，value为上一步获取的Client ID的值，如下所示：

   1.若工程中存在多个模块，需要在"type"为"entry"模块中的module.json5文件配置应用的Client ID。

  2.请确认获取的Client ID是**应用**Client ID，错配成项目Client ID将导致接口调用报错。

   ```
"module": {
  "name": "<name>",
  "type": "entry",
  "description": "<description>",
  "mainElement": "<mainElement>",
  "deviceTypes": [],
  "pages": "<pages>",
  "abilities": [],
  "metadata": [ // 配置信息如下
    {
      "name": "client_id",
      "value": "xxxxx" // 将上一步获取到的Client ID赋值给value，请注意不要使用其他方式设置value值
    }
  ]
 }
```

---
*Updated: 2026-04-20 01:51:29*
