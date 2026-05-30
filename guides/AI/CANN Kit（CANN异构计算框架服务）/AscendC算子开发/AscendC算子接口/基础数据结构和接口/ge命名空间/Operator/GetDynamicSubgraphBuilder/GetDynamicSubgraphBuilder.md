# GetDynamicSubgraphBuilder

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getdynamicsubgraphbuilder`  |  **DocID**: `8fae69f858f84746bc68504e12c13c51`  |  **NodeID**: `000201775795449800970c6f5956552b`

---

# GetDynamicSubgraphBuilder

  #### 函数功能

根据子图名称和子图索引获取算子对应的动态输入子图的构建函数对象。

   #### 函数原型

  数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

   ```
SubgraphBuilder GetDynamicSubgraphBuilder(const std::string &name, uint32_t index) const;
SubgraphBuilder GetDynamicSubgraphBuilder(const char_t *name, uint32_t index) const;
```
   #### 参数说明

 
| 参数  | 输入/输出  | 描述  
  | name  | 输入  | 子图名。  
 | index  | 输入  | 同名子图的索引。  
  

    #### 返回值

SubgraphBuilder对象。

   #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:01*
