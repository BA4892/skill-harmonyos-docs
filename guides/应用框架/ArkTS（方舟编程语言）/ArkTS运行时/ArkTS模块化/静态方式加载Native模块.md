# 静态方式加载Native模块

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `arkts-import-native-module`  |  **DocID**: `ced1e6d2954743889e97c8628e296b75`  |  **NodeID**: `00020177579578888457553ba90b6858`

---

# 静态方式加载Native模块

 在ES6(ECMAScript 6.0)模块设计中，使用import语法加载其他文件导出的内容是ECMA规范所定义的语法规则。为支持开发者使用该功能导入Native模块（so）导出的内容，ArkTS进行了相关适配，并提供了以下几种支持写法。

  #### 直接导入

在Native模块的index.d.ts文件中导出，并在文件内直接导入。

   #### [h2]具名导入

```
// libentry.so对应的index.d.ts。
export const add: (a: number, b: number) => number;
```
 ```
// NameImport.ets
import { add } from 'libentry.so'
add(2, 3);
```
   #### [h2]默认导入

```
// libentry.so对应的index.d.ts。
export const add: (a: number, b: number) => number;
```
 ```
// DefaultImport.ets
import entry from 'libentry.so'
entry.add(2, 3);
```
   #### [h2]命名空间导入

```
// libentry.so对应的index.d.ts。
export const add: (a: number, b: number) => number;
```
 ```
// NamespaceImport.ets
import * as entry from 'libentry.so'
entry.add(2, 3);
```
   #### 间接导入

  #### [h2]转为具名变量导出再导入

```
// libentry.so对应的index.d.ts。
export const add: (a: number, b: number) => number;
```
 ```
// NameExport.ets
// 将libentry.so的API封装后导出
import { add } from 'libentry.so';
export { add };
```
 ```
// NameImportFromExport.ets
// 从中间模块导入API
import { add } from './NameExport';
const result = add(2, 3);
```
   #### [h2]转为命名空间导出再导入

```
// libentry.so对应的index.d.ts。
export const add: (a: number, b: number) => number;
```
 ```
// NamespaceExport.ets
export * from 'libentry.so'
```
 ```
// NamespaceImportFromExport.ets
import { add } from './NamespaceExport'
add(2, 3);
```
   不支持Native模块导出和导入同时使用命名空间。

   **反例：**

 ```
// test1.ets
export * from 'libentry.so'
```
 ```
// test2.ets
import * as add from './test1'
// 无法获取add对象
```
   #### 动态导入

  #### [h2]直接导入

```
// libentry.so对应的index.d.ts。
export const add: (a: number, b: number) => number;
```
 ```
// DynamicImport.ets
import('libentry.so').then((entry:ESObject) => {
  entry.default.add(2, 3);
})
```
   #### [h2]间接导入

```
// DynamicExport.ets
import entry from 'libentry.so'
export { entry }
```
 ```
// DynamicImportFromExport.ets
import('./DynamicExport').then((ns:ESObject) => {
  ns.entry.add(2, 3);
})
```
   不支持动态加载时，导出文件使用命名空间。

   **反例：**

 ```
// test1.ets
export * from 'libentry.so'
```
 ```
// test2.ets
import('./test1').then((ns:ESObject) => {
    // 无法获取ns对象
})
```

---
*Updated: 2026-04-20 01:48:39*
