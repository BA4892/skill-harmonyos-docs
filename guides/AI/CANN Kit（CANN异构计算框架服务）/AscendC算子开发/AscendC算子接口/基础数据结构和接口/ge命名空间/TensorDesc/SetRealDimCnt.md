# SetRealDimCnt

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setrealdimcnt`  |  **DocID**: `3f56d90de4ff4d5ba8fd34229626a410`  |  **NodeID**: `000201775795449801024bbac8a9c031`

---

# SetRealDimCnt

  #### 函数功能

向TensorDesc中设置Tensor的实际维度数目。

 通过[GetShape](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensordesc-getshape)接口返回的Shape的维度可能存在补1的场景，因此可以通过该接口设置Shape的实际维度个数。

   #### 函数原型

```
void SetRealDimCnt(const int64_t real_dim_cnt);
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | real_dim_cnt  | 输入  | 需设置的TensorDesc的实际数据维度数目信息。  
  

    #### 返回值

无

   #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:02*
