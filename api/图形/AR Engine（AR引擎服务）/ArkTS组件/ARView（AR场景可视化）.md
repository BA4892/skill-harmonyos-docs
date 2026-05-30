# ARView（AR场景可视化）

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arengine-api-component-arview`

**DocID**: `3870a05561584d4d8f2792b5942a031c`

**NodeID**: `000201775795874920040cc5816ea719`

---

ARView（AR场景可视化）

用于承载ARViewContext，实现AR场景可视化呈现。

需要与
arViewController
配合一起使用，完成AR场景的可视化呈现。

系统能力：
SystemCapability.AREngine.Core

起始版本：
5.1.0(18)

导入模块

import { ARView, arViewController } from '@kit.AREngine';

ARView

该类为AR场景可视化呈现组件。

装饰器类型：
@Component

系统能力：
SystemCapability.AREngine.Core

起始版本：
5.1.0(18)

参数：

名称

类型

必填

装饰器类型

说明

context

arViewController
.
ARViewContext

是

@Require

@State

ARView上下文、AR会话和场景的状态管理。

[h2]build

build(): void

用于创建ARView对象的构造函数。

系统能力：
SystemCapability.AREngine.Core

起始版本：
5.1.0(18)

示例

：

import { ARView, arViewController } from '@kit.AREngine';

let arContext: arViewController.ARViewContext = new arViewController.ARViewContext();

@Entry
@Component
struct ARWorld {
 // context配置及初始化
 build() {
 RelativeContainer() {
 if (arContext) {
 ARView({ context: arContext })
 .height('100%')
 .width('100%')
 }
 }
 }
}

---
*2026-04-22T15:55:03.802Z*