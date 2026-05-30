# ResetData

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-resetdata`  |  **DocID**: `a3436f4a98fa412bb5caed988b45a885`  |  **NodeID**: `0002017757954498010527cba2b36d05`

---

# ResetData

  #### 函数功能

释放Tensor中数据内存。

   #### 函数原型

```
std::unique_ptr<uint8_t[], Tensor::DeleteFunc> ResetData();
```
   #### 参数说明

无

   #### 返回值

返回释放后的内存地址和删除器。

   #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:03*
