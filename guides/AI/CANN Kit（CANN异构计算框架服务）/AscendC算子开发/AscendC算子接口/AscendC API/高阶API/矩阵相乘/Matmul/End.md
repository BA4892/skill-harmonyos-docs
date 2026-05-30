# End

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-end`  |  **DocID**: `18ed1b954308442fabf1b62c9eec6ed7`  |  **NodeID**: `000201775795449801177a4d80667885`

---

# End

  #### 功能说明

单核内Matmul矩阵相乘计算结束后必须调用一次End函数。

   #### 函数原型

```
__aicore__ inline void End()
```
   #### 参数说明

无

   #### 返回值

无

   #### 支持的型号

Kirin9020系列处理器

   #### 注意事项

无

   #### 调用示例

```
mm.IterateAll(gm_c);
mm.End();
```

---
*Updated: 2026-04-20 01:44:14*
