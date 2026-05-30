# GetMarks

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getmarks`  |  **DocID**: `ae4b79a3d4794a7ca9a864368a40c439`  |  **NodeID**: `0002017757954498008629ab4d4d0b1d`

---

# GetMarks

  #### 函数功能

在资源类算子推理的上下文中，获取成对资源算子的标记。

   #### 函数原型

  数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

   ```
const std::vector<std::string> &GetMarks() const
void GetMarks(std::vector<AscendString> &marks) const
```
   #### 参数说明

无

   #### 返回值

 
| 类型  | 描述  
  | const std::vector<std::string>  | 资源类算子的标记。  
  

    #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:43:58*
