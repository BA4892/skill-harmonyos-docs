# richtext

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-components-basic-richtext`

**DocID**: `174bd63e3e0f4253856fe9c907353f34`

**NodeID**: `0002017757962161977221baf0b86c18`

---

richtext

该组件从API version 6开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

富文本内容需要写在元素标签内。

富文本组件，用于展示富文本信息。

权限列表

无

属性

仅支持
通用属性
中的id、style和class属性。

样式

仅支持
通用样式
中的display和visibility样式。

事件

除支持
通用事件
外，还支持如下事件：

名称

参数

描述

start

-

开始加载时触发。

complete

-

加载完成时触发。

不支持focus、blur、key事件。

不支持无障碍事件。

包含richtext的页面返回时richtext显示区域不会跟随页面的转场动效。

richtext内容不建议超过一个屏幕高度，超出部分不会显示。

不支持设置宽度，默认撑开全屏。

方法

不支持。

示例

<!-- xxx.hml -->
<div style="flex-direction: column;width: 100%;">
 <richtext @start="onLoadStart" @complete="onLoadEnd">{{content}}</richtext>
</div>

// xxx.js
export default {
 data: {
 content: `
 <div class="flex-direction: column; background-color: #ffffff; padding: 30px; margin-bottom: 30px;">
 <style>h1{color: yellow;}</style>
 <p class="item-title">h1</p>
 <h1>文本测试(h1测试)</h1>
 <p class="item-title">h2</p>
 <h2>文本测试(h2测试)</h2>
 </div>
 `,
 },
 onLoadStart() {
 console.error("start load rich text")
 },
 onLoadEnd() {
 console.error("end load rich text")
 }
}

---
*2026-04-22T15:55:02.090Z*