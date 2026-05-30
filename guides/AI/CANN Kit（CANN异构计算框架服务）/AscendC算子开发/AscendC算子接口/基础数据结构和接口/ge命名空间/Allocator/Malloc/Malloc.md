# Malloc

> **分区**: Guides  |  **Slug**: `cannkit-malloc`  |  **DocID**: `95f414589b6a4469972dca300cc80c73`

---

# Malloc

  #### 函数功能

在开发者内存池中根据指定size大小申请device内存。

   #### 函数原型

```
virtual MemBlock *Malloc(size_t size) = 0
```
   #### 参数说明

 参数名 输入/输出 描述   size 输入 指定需要申请内存大小。       #### 返回值

 类型 描述   MemBlock* 返回[MemBlock](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-memblock-construction-and-destructor)指针。       #### 异常处理

无

   #### 约束说明

纯虚函数开发者必须实现。

---
*Updated: 2026-04-22 06:33:39*
