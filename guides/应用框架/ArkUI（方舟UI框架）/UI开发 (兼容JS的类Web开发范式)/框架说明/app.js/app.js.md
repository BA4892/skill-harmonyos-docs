# app.js

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `js-framework-js-file`  |  **DocID**: `abc2cef8d8c94148a4b5793cafb25908`  |  **NodeID**: `00020177579578888451642add154710`

---

# app.js

  #### 应用生命周期

每个应用可以在app.js自定义应用级[生命周期](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-lifecycle)的实现逻辑，以下示例仅在生命周期函数中打印对应日志：

 ```
// app.js
export default {
    onCreate() {
        console.info('Application onCreate');
    },

    onDestroy() {
        console.info('Application onDestroy');
    },
}
```
   #### 应用对象6+

 
| 属性  | 类型  | 描述  
  | getApp  | Function  | 提供getApp()全局方法，可以在自定义js文件中获取app.js中暴露的对象。  
  

  示例如下：

 ```
// app.js
export default {
    data: {
        test: "by getApp"
    },
    onCreate() {
        console.info('AceApplication onCreate');
    },
    onDestroy() {
        console.info('AceApplication onDestroy');
    },
}
```
 ```
// test.js 自定义逻辑代码
export var appData = getApp().data;
```

---
*Updated: 2026-04-20 01:48:31*
