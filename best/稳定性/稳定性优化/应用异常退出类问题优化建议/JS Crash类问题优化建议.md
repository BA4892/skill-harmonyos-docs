# JS Crash类问题优化建议

> **分区**: 最佳实践  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `bpta-stability-js-crash-opt`  |  **DocID**: `a125d536217f4fd5a5504f88b5a836d6`  |  **NodeID**: `000201775547135509417a6e3bc73a43`

---

# JS Crash类问题优化建议

 #### 优化建议1：Source Maps归档保存

生产环境归档SourceMap便于后续源码还原，遇到JS Crash应先进行[堆栈轨迹分析](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-release-app-stack-analysis-V5)。

  编译时SourceMap的获取位置详见：[sourceMap归档位置介绍](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-exception-stack-parsing-principle#section666114451518)。

   #### 优化建议2：崩溃预防机制

可使用errorManager注册错误观测器。注册后可以捕获到应用产生的JS Crash，应用崩溃时进程不会退出。详见[errorManager使用指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/errormanager-guidelines)。

---
*Updated: 2026-04-10 09:44:46*
