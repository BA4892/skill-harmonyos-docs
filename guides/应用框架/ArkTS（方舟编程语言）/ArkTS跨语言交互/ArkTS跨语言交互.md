# ArkTS跨语言交互

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `arkts-cross-language-interaction`  |  **DocID**: `be0b575ce405489bb2e3565b94369b86`  |  **NodeID**: `000201775795788884048cc5996ca48e`

---

# ArkTS跨语言交互

       除了支持使用ArkTS开发外，开发者还可以通过Node-API实现ArkTS与C/C++(Native)的跨语言交互能力。

    HarmonyOS的Node-API是基于Node.js社区版本的扩展实现，但与原生Node-API并不完全兼容。

    开发者可参考[使用Node-API进行跨语言开发流程](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-process)，基于[Node-API支持的数据类型](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-data-types-interfaces#node-api的数据类型)和[Node-API接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/napi)进行Native能力的开发和封装，并通过在ArkTS侧导入Native模块的方式实现跨语言调用。

    [Node-API扩展能力接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-extension)提供了增强功能，支持更灵活的ArkTS交互和自定义对象创建。开发者可结合Node-API的扩展能力进行功能扩展，并参考[Node-API开发规范](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-guidelines)和[Node-API常见问题](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-faqs)进行跨语言功能开发。

---
*Updated: 2026-04-20 01:47:15*
