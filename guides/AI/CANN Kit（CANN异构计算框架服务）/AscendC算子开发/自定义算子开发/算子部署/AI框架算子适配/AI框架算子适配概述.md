# AI框架算子适配概述

> **分区**: 指南  |  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  |  **Slug**: `cannkit-overview-of-ai-framework-operator`  |  **DocID**: `8225185245aa41afadec843270f772b3`  |  **NodeID**: `00020177579544980044396303e3b8a6`

---

# AI框架算子适配概述

 本章节内容介绍AI框架调用自定义算子的方法。如下图所示，PyTorch和TensorFlow仅支持图模式。

 AI框架调用时，除了需要提供DDK框架调用时需要的代码实现文件，还需要对插件进行适配开发。下文仅展示通过ONNX框架进行算子适配，TensorFlow框架开发流程与ONNX框架开发流程一致。

---
*Updated: 2026-04-20 01:43:45*
