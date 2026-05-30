# SetFormat

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tensor-setformat`  |  **DocID**: `858d6a793a0643008450be888c8da8cc`  |  **NodeID**: `0002017757954498010099b0284d54eb`

---

# SetFormat

  #### 函数功能

设置Tensor的Format。

   #### 函数原型

```
graphStatus SetFormat(const ge::Format &format);
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | format  | 输入  需设置的Format值。

 关于Format类型，请参见[Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-format)。

  
  

    #### 返回值

 
| 类型  | 描述  
  | graphStatus  | 设置成功返回GRAPH_SUCCESS，否则，返回GRAPH_FAILED。  
  

    #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:02*
