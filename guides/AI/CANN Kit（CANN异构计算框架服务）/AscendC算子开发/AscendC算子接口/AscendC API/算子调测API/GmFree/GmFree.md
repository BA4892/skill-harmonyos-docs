# GmFree

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-gmfree`  |  **DocID**: `5e6bbd621b664cda894dfe304df4273b`  |  **NodeID**: `00020177579544980047151145fc4574`

---

# GmFree

  #### 函数功能

进行核函数的CPU侧运行验证时，用于释放通过[GmAlloc](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-gmalloc)申请的共享内存。

   #### 函数原型

```
void GmFree(void *ptr)
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | ptr  | 输入  | 需要释放的共享内存的指针。  
  

    #### 返回值

无

   #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 约束说明

传入的指针必须是之前通过GmAlloc申请过的共享内存的指针。

   #### 调用示例

```
AscendC::GmFree((void*)x);
```

---
*Updated: 2026-04-20 01:43:47*
