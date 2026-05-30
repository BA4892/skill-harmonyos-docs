# stack

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-service-widget-container-stack`

**DocID**: `8de91bb632df44d3a7fd1ea4fbe9328b`

**NodeID**: `0002017757962161976005047908ea5d`

---

stack

堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。

从API version 8 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

子组件

支持。

属性

支持
通用属性
。

样式

支持
通用样式
。

事件

支持
通用事件
。

示例

<!-- xxx.hml -->
<stack class="stack-parent">
 <div class="back-child bd-radius"></div>
 <div class="positioned-child bd-radius"></div>
 <div class="front-child bd-radius"></div>
</stack>

/* xxx.css */
.stack-parent {
 width: 400px;
 height: 400px;
 margin: 50px;
 background-color: #ffffff;
 border-width: 1px;
 border-style: solid;
}
.back-child {
 width: 300px;
 height: 300px;
 background-color: #3f56ea;
}
.front-child {
 width: 100px;
 height: 100px;
 background-color: #00bfc9;
}
.positioned-child {
 width: 100px;
 height: 100px;
 left: 50px;
 top: 50px;
 background-color: #47cc47;
}
.bd-radius {
 border-radius: 16px;
}

4×4卡片

---
*2026-04-22T15:55:02.168Z*