# GetTensorCountInQue

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tque-gettensorcountinque`  |  **DocID**: `f768d51324d34dee93f47d05c97da145`  |  **NodeID**: `0002017757954498011662b26411b488`

---

# GetTensorCountInQue

  #### 功能说明

查询队列中已入队的Tensor数量。

   #### 函数原型

```
__aicore__ inline int32_t GetTensorCountInQue()
```
   #### 参数说明

无

   #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 注意事项

无

   #### 返回值

队列中已入队的Tensor数量。

   #### 调用示例

```
// 通过GetTensorCountInQue查询Queue中已入队的Tensor数量，当前通过AllocTensor接口分配了内存，并加入Queue中，num为1。
AscendC::TPipe pipe;
AscendC::TQue<AscendC::TPosition::VECOUT, 4> que;
int num = 4;
int len = 1024;
pipe.InitBuffer(que, num, len);
AscendC::LocalTensor<half> tensor1 = que.AllocTensor<half>();
que.EnQue(tensor1);// 将tensor加入VECOUT的Queue中
int32_t numb = que.GetTensorCountInQue();
```

---
*Updated: 2026-04-20 01:44:14*
