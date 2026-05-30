# Output

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-output`  |  **DocID**: `313e1a6cf76f4107963d594e4050855b`  |  **NodeID**: `0002017757954498011001dfbed176c3`

---

# Output

  #### 函数功能

注册算子输出，调用该接口后会返回一个OpParamDef结构，后续可通过该结构配置算子输出信息。

   #### 函数原型

```
OpParamDef &Output(const char *name);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | name  | 输入  | 算子输出名称。  
  

    #### 返回值

[OpParamDef](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-paramtype)算子参数定义。

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:09*
