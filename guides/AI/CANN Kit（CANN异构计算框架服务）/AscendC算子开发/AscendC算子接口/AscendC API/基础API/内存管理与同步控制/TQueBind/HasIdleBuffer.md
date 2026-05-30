# HasIdleBuffer

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-hasidlebuffer`  |  **DocID**: `76d0fe9d01be4e168dcce02b07b9e469`  |  **NodeID**: `00020177579544980117695c94d0cc4f`

---

# HasIdleBuffer

  #### 功能说明

查询队列中是否有空闲的内存块。

   #### 函数原型

```
__aicore__ inline bool HasIdleBuffer()
```
   #### 参数说明

无

   #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 注意事项

无

   #### 返回值

true：表示Queue中存在空闲内存。

  false：表示Queue中不存在空闲内存。

  
   #### 调用示例

```
// 当前Queue中已经分配了4块内存
AscendC::TPipe pipe;
AscendC::TQueBind<AscendC::TPosition::VECOUT, AscendC::TPosition::GM, 4> que;
int num = 4;
int len = 1024;
pipe.InitBuffer(que, num, len);
bool ret = que.HasIdleBuffer(); // 没有AllocTensor的操作，返回值为true
AscendC::LocalTensor<half> tensor1 = que.AllocTensor<half>();
ret = que.HasIdleBuffer(); // AllocTensor了一块内存，返回值为true
AscendC::LocalTensor<half> tensor2 = que.AllocTensor<half>();
AscendC::LocalTensor<half> tensor3 = que.AllocTensor<half>();
AscendC::LocalTensor<half> tensor4 = que.AllocTensor<half>();
ret = que.HasIdleBuffer(); // AllocTensor了四块内存，当前无空闲内存，返回值为false，继续AllocTensor会报错
```

---
*Updated: 2026-04-20 01:44:14*
