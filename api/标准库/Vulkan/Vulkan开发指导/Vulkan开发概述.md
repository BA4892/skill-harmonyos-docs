# Vulkan开发概述

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `vulkan-overview`

**DocID**: `9c142dbfa3b047aa81e61d25d48324d3`

**NodeID**: `000201775796219738798fa77d41031d`

---

Vulkan开发概述

Vulkan是一套用来做2D和3D渲染的图形应用程序接口，在HarmonyOS中，新增两组扩展VK_OHOS_surface和VK_OHOS_external_memory。

其中通过扩展VK_OHOS_surface相关的API创建出来的VkSurfaceKHR会对接到本机窗口（OHNativeWindow）模块，实现本机缓冲区（OHNativeBuffer）的轮转，用于屏幕显示。

而扩展VK_OHOS_external_memory用于在GPU Vulkan环境下与HarmonyOS的OHNativeBuffer之间做零拷贝的内存共享，典型场景如下：

相机/摄像头流水线：Camera产出OHNativeBuffer后直接在Vulkan中采样或作为渲染目标。

视频解码器与渲染器零拷贝：解码器输出OHNativeBuffer，直接导入Vulkan做后处理或合成。

Surface/OHNativeWindow互操作：把OHNativeWindow/Surface的Buffer导入Vulkan，或把Vulkan的渲染结果导出成OHNativeBuffer供系统（例如RenderService）或其他客户端使用。

多API互操作：与OpenGL/EGL、Vulkan共用同一OHNativeBuffer做跨API资源共享（零拷贝）。

后续更多Vulkan的用法请参考
Vulkan官方网站
。

---
*2026-04-22T15:55:04.588Z*