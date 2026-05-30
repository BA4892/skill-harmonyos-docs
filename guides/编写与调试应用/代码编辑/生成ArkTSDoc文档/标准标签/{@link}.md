# {@link}

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-arktsdoc-link`  |  **DocID**: `566e7f6b7dcd4c3487e3a920261bb9f4`  |  **NodeID**: `000201775790122558368e5d32f361f6`

---

# {@link}

 {@link} 用于创建指向指定namepath或网页的链接。使用 {@link} 标记时，可以使用不同格式提供链接文本。

 #### 语法

- {@link namepathOrURL}
- [link text]{@link namepathOrURL}
- {@link namepathOrURL|link text}
- {@link namepathOrURL link text (after the first space)}

  #### 示例

提供链接文本：

 ```
/**
 * See {@link MyClass}.
 * Also, check out {@link https://www.example.com/cn/ | Example} and
 * {@link https://www.example.com/cn/ Example}.
 */
export function myFunction() {}
```
  若namepath是类名，如例子中的MyClass，用户需要在当前模块中定义该类才能进行正确的跳转。暂不支持对类中属性和方法的跳转。

---
*Updated: 2026-04-22 01:08:39*
