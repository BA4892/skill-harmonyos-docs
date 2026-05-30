# openPreview打开显示预览失败

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `preview-faq-1`  |  **DocID**: `4997fa099345487588649d604a7b9568`  |  **NodeID**: `000201775795649086824805801dcc7a`

---

# openPreview打开显示预览失败

       Preview Kit的[openPreview](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/preview-arkts#openpreview)接口在传入文件预览信息时，当前仅支持传入文件的[uri](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/user-file-uri-intro)，不支持传入文件的沙箱路径。

    如果调用openPreview接口后，显示预览失败，请检查传入的是否为uri并且检查传入的uri是否存在。

---
*Updated: 2026-04-20 01:51:09*
