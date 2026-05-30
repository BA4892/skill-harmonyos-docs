# GetSubgraph

> **分区**: Guides  |  **Slug**: `cannkit-getsubgraph`  |  **DocID**: `55f509b478694b4881865ec72727e1b5`

---

# GetSubgraph

  #### 函数功能

根据子图名称获取算子对应的子图。

   #### 函数原型

  数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

   ```
Graph GetSubgraph(const std::string &name) const;
Graph GetSubgraph(const char_t *name) const;
```
   #### 参数说明

 参数名 输入/输出 描述   name 输入 子图名称。       #### 返回值

Graph对象。

   #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-22 06:33:47*
