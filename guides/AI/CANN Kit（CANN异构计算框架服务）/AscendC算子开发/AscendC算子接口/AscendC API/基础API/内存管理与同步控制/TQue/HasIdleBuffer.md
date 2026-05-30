# HasIdleBuffer

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tque-hasidlebuffer`  |  **DocID**: `4549cc4a5d4349b487c370f525f0ab96`  |  **NodeID**: `00020177579544980116806dc956a028`

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
// 当前Que中已经分配了4块内存
AscendC::TPipe pipe;
AscendC::TQue<AscendC::TPosition::VECOUT, 1> que;
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
