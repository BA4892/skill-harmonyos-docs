# GetParseSubgraphPostFn

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getparsesubgraphpostfn`  |  **DocID**: `7502d9cd98d04515987459285738c362`  |  **NodeID**: `000201775795449801030d084a3d74b8`

---

# GetParseSubgraphPostFn

  #### 函数功能

根据算子类型，获取算子注册的子图中输入输出节点跟算子的输入输出的对应关系实现的函数对象。

   #### 函数原型

  数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

   
**ParseSubgraphFunc GetParseSubgraphPostFn() const**

  该函数会返回ParseSubgraphFunc类型的函数对象，ParseSubgraphFunc函数的声明如下。

  using ParseSubgraphFunc = std::function<Status(const std::string &subgraph_name, const ge::Graph &graph)>  **Status GetParseSubgraphPostFn(ParseSubgraphFuncV2 &func) const**

  该函数会返回ParseSubgraphFuncV2类型的函数对象，ParseSubgraphFuncV2函数的声明如下。

  ```
using ParseSubgraphFuncV2 = std::function<Status(const ge::AscendString &subgraph_name, const ge::Graph &graph)>
```
  
   #### 参数说明

GetParseSubgraphPostFn()函数

  无

  GetParseSubgraphPostFn(ParseSubgraphFuncV2 &func)函数

   
| 参数  | 输入/输出  | 说明  
  | func  | 输出  | 实现算子注册的子图中输入输出节点跟算子的输入输出对应关系的函数对象。  
  

   
   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:03*
