# GetOutputAttr

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getoutputattr`  |  **DocID**: `9f79bc6c292149b6a08fb3b95c8cb27a`  |  **NodeID**: `000201775795449801063e9f9f82ce86`

---

# GetOutputAttr

  #### 函数功能

根据属性名称获取算子输出Tensor对应的属性值。

   #### 函数原型

```
graphStatus GetOutputAttr(const int32_t index, const char_t *name, AscendString &attr_value) const;
graphStatus GetOutputAttr(const char_t *dst_name, const char_t *name, AscendString &attr_value) const;
graphStatus GetOutputAttr(const int32_t index, const char_t *name, int64_t &attr_value) const;
graphStatus GetOutputAttr(const char_t *dst_name, const char_t *name, int64_t &attr_value) const;
graphStatus GetOutputAttr(const int32_t index, const char_t *name, int32_t &attr_value) const;
graphStatus GetOutputAttr(const char_t *dst_name, const char_t *name, int32_t &attr_value) const;
graphStatus GetOutputAttr(const int32_t index, const char_t *name, uint32_t &attr_value) const;
graphStatus GetOutputAttr(const char_t *dst_name, const char_t *name, uint32_t &attr_value) const;
graphStatus GetOutputAttr(const int32_t index, const char_t *name, bool &attr_value) const;
graphStatus GetOutputAttr(const char_t *dst_name, const char_t *name, bool &attr_value) const;
graphStatus GetOutputAttr(const int32_t index, const char_t *name, float32_t &attr_value) const;
graphStatus GetOutputAttr(const char_t *dst_name, const char_t *name, float32_t &attr_value) const;
graphStatus GetOutputAttr(const int32_t index, const char_t *name, std::vector<AscendString> &attr_value) const;
graphStatus GetOutputAttr(const char_t *dst_name, const char_t *name, std::vector<AscendString> &attr_value) const;
graphStatus GetOutputAttr(const int32_t index, const char_t *name, std::vector<int64_t> &attr_value) const;
graphStatus GetOutputAttr(const char_t *dst_name, const char_t *name, std::vector<int64_t> &attr_value) const;
graphStatus GetOutputAttr(const int32_t index, const char_t *name, std::vector<int32_t> &attr_value) const;
graphStatus GetOutputAttr(const char_t *dst_name, const char_t *name, std::vector<int32_t> &attr_value) const;
graphStatus GetOutputAttr(const int32_t index, const char_t *name, std::vector<uint32_t> &attr_value) const;
graphStatus GetOutputAttr(const char_t *dst_name, const char_t *name, std::vector<uint32_t> &attr_value) const;
graphStatus GetOutputAttr(const int32_t index, const char_t *name, std::vector<bool> &attr_value) const;
graphStatus GetOutputAttr(const char_t *dst_name, const char_t *name, std::vector<bool> &attr_value) const;
graphStatus GetOutputAttr(const int32_t index, const char_t *name, std::vector<float32_t> &attr_value) const;
graphStatus GetOutputAttr(const char_t *dst_name, const char_t *name, std::vector<float32_t> &attr_value) const;
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | name  | 输入  | 属性名称。  
 | index  | 输入  | 输出索引。  
 | dst_name  | 输入  | 输出边名称。  
 | attr_value  | 输出  | 获取到的int64_t表示的整型类型属性值。  
 | attr_value  | 输出  | 获取到的int32_t表示的整型类型属性值。  
 | attr_value  | 输出  | 获取到的uint32_t表示的整型类型属性值。  
 | attr_value  | 输出  | 获取到的vector<int64_t>表示的整型列表类型属性值。  
 | attr_value  | 输出  | 获取到的vector<int32_t>表示的整型列表类型属性值。  
 | attr_value  | 输出  | 获取到的vector<uint32_t>表示的整型列表类型属性值。  
 | attr_value  | 输出  | 获取到的浮点类型的属性值。  
 | attr_value  | 输出  | 获取到的浮点列表类型的属性值。  
 | attr_value  | 输出  | 获取到的布尔类型的属性值。  
 | attr_value  | 输出  | 获取到的布尔列表类型的属性值。  
 | attr_value  | 输出  | 获取到的字符串类型的属性值。  
 | attr_value  | 输出  | 获取到的字符串列表类型的属性值。  
  

    #### 返回值

 
| 类型  | 描述  
  | graphStatus  | 找到对应属性，返回GRAPH_SUCCESS，否则返回GRAPH_FAILED。  
  

    #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:04*
