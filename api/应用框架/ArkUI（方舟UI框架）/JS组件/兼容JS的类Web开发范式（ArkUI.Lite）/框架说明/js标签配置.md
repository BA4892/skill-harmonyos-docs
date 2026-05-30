# js标签配置

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-lite-framework-js-tag`

**DocID**: `abd86886f4b84feb969e15df519f06ac`

**NodeID**: `00020177579621619748256ebc406373`

---

js标签配置

js标签中包含了实例名称、页面路由信息。

标签

类型

默认值

必填

描述

name

string

default

是

标识JS实例的名字。

pages

Array

-

是

路由信息，详见“
pages
”。

 name、pages标签配置需在配置文件中的“js”标签中完成设置。

pages

定义每个页面的路由信息，每个页面由页面路径和页面名组成，页面的文件名即为页面名，例如：

{
 // ...
 "pages": [
 "pages/index/index",
 "pages/detail/detail"
 ]
 // ...
}

应用首页固定为"pages/index/index"。

页面文件名不能使用组件名称，比如：text.hml、button.hml等。

示例

{
 "app": {
 "bundleName": "com.example.player",
 "version": {
 "code": 1,
 "name": "1.0"
 },
 "vendor": "example"
 },
 "module": {
 // ...
 "js": [
 {
 "name": "default",
 "pages": [
 "pages/index/index",
 "pages/detail/detail"
 ]
 }
 ],
 "abilities": [
 {
 // ...
 }
 ]
 }
}

---
*2026-04-22T15:55:02.129Z*