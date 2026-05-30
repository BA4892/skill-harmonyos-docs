# Free

> **分区**: Guides  |  **Slug**: `cannkit-allocator-free`  |  **DocID**: `675ecb61a8344a4a975ac6e0cc7dacaf`

---

# Free

  #### 函数功能

根据指定的MemBlock释放内存到内存池。

   #### 函数原型

```
virtual void Free(MemBlock *block) = 0;
```
   #### 参数说明

 参数名 输入/输出 描述   block 输入 内存block指针。       #### 返回值

无

   #### 异常处理

无

   #### 约束说明

虚函数开发者必须实现。

---
*Updated: 2026-04-22 06:33:40*
