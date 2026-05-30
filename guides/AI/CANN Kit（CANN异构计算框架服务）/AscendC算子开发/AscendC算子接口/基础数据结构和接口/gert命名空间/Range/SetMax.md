# SetMax

> **分区**: Guides  |  **Slug**: `cannkit-setmax`  |  **DocID**: `2c7e90d89a384550802eb1a122ec7786`

---

# SetMax

  #### 函数功能

设置最大的T对象指针。

   #### 函数原型

```
void SetMax(T *max)
```
   #### 参数说明

 参数 输入/输出 说明   max 输入 最大的T对象指针。       #### 返回值

无

   #### 约束说明

无

   #### 调用示例

```
Range<int> range;
int max = 1024;
range.SetMax(&max);
```

---
*Updated: 2026-04-22 06:33:42*
