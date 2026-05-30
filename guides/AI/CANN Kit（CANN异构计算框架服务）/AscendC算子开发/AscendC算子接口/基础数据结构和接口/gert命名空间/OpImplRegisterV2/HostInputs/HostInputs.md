# HostInputs

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-hostinputs`  |  **DocID**: `a6c55dd3894749dc9c64330f384faa11`  |  **NodeID**: `00020177579544980095937317ca2519`

---

# HostInputs

  #### 函数功能

当算子输入中存在标量输入时，需要传入host侧地址。该接口用于标记算子的第几个输入的地址是host侧地址。

   #### 函数原型

```
OpImplRegisterV2 &HostInputs(std::initializer_list<int32_t> inputs);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | inputs  | 输入  | 指定输入index列表。举例来说，inputs={0, 3}，说明算子的第0、3个输入的地址是host侧地址。  
  

    #### 返回值

返回算子的OpImplRegisterV2对象，该对象新增注册了标记算子的第几个输入的地址是host侧地址。

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:00*
