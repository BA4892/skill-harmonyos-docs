# 使用HiSmartPerf采集jsvm trace

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `use-jsvm-about-v8-trace`  |  **DocID**: `103ff3fd5e92423ba5befc3f99bb5f28`  |  **NodeID**: `000201775795460123330f91f2e80874`

---

# 使用HiSmartPerf采集jsvm trace

                 #### 简介

     jsvm的trace是jsvm引擎提供的一种用于分析和调试JavaScript代码执行过程的工具。它可以记录并输出关于代码执行的详细信息，包括函数调用、执行时间、内存使用情况等，帮助开发者了解代码的性能、诊断潜在问题，进行优化。

     HiSmartPerf目前已经对接了jsvm的compile、runtime、builtin、JS_Execution类别的trace点，可以在HiSmartPerf中直接看到这些类别event的相关信息。

                  #### 使用方法

                  #### [h2]默认状态

     jsvm是否采集trace由运行时开关“web.debug.rcs”控制，默认状态下该开关为关闭状态。启动web场景，在hilog中可以观察到有“RCS is off”日志打印输出。

                  #### [h2]采集jsvm trace

     
             要采集jsvm的trace，需要在启动web场景前，打开“web.debug.rcs”开关。在启动web场景前，执行以下命令：

       ```
hdc shell setenforce 0
hdc shell param set web.debug.rcs true
```
             启动web场景，可以看到hilog中有“RCS is on”的日志打印输出

             使用hitrace工具抓取对应场景的trace，hitrace使用方法可参考[hitrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitrace)使用指导文档。

             使用HiSmartPerf工具解析抓取到的trace，可以看到有“RCS_”前缀的trace点，即为jsvm对接到HiSmartPerf中的trace点。

             要查看compile、runtime、builtin、JS_Execution不同类别的trace数据，可使用以下关键字进行过滤：

       
        - compile：RCS_v8.compile
        - runtime：RCS_V8.Runtime
        - builtin：RCS_v8.runtime_V8.Builtin
        - JS_Execution：RCS_JS_Execution

---
*Updated: 2026-04-20 01:44:22*
