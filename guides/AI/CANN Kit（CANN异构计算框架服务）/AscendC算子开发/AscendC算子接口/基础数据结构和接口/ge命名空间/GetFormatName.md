# GetFormatName

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getformatname`  |  **DocID**: `3d2be7e0ec23420284600fb7f9fc944f`  |  **NodeID**: `000201775795449800567611ffdfe81a`

---

# GetFormatName

  #### 函数功能

根据传入的format类型，获取format的字符串描述。

   #### 函数原型

```
const char_t *GetFormatName(Format format)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | format  | 输入  | format枚举值。  
  

    #### 返回值

该format所对应的字符串描述，若format不合法或不被识别，则返回nullptr。

   #### 异常处理

无

   #### 约束说明

返回的字符串不可被修改。

---
*Updated: 2026-04-20 01:43:50*
