# DeQue

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tque-deque`  |  **DocID**: `c76a7d44ae6a4339beec0240f03d5b22`  |  **NodeID**: `0002017757954498011361c44877beed`

---

# DeQue

  #### 功能说明

将Tensor从队列中取出，用于后续处理。

   #### 函数原型

无需指定源和目的位置

  ```
template <typename T> 
__aicore__ inline LocalTensor<T> DeQue()
```
  需要指定源和目的位置

  通过[TQueBind](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-overview)绑定VECIN和VECOUT可实现VECIN和VECOUT内存复用，如下接口用于存在Vector计算的场景下实现复用，在出队时需要指定源和目的位置，不存在Vector计算的场景下可直接调用LocalTensor<T> DeQue()出队接口。

  ```
template <TPosition srcUserPos, TPosition dstUserPos, typename T> 
__aicore__ inline LocalTensor<T> DeQue()
```
  
 **图1** 将LocalTensor通过EnQue放入A1/B1的Queue中后再通过DeQue搬出

 

   #### 参数说明

无

   #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 注意事项

无

   #### 返回值

从队列中取出的[LocalTensor](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-localtensor)。

   #### 调用示例

```
// 接口: DeQue Tensor
AscendC::TPipe pipe;
AscendC::TQue<AscendC::TPosition::VECOUT, 4> que;
int num = 4;
int len = 1024;
pipe.InitBuffer(que, num, len);
AscendC::LocalTensor<half> tensor1 = que.AllocTensor<half>();
que.EnQue(tensor1);
AscendC::LocalTensor<half> tensor2 = que.DeQue<half>(); // 将tensor从VECOUT的Queue中搬出
```
 ```
// 接口: DeQue Tensor，指定特定的Src/Dst position
AscendC::TPipe pipe;
AscendC::TQueBind<AscendC::QuePosition::VECIN, AscendC::QuePosition::VECOUT, 1> que;
int num = 4;
int len = 1024;
pipe.InitBuffer(que, num, len);
AscendC::LocalTensor<half> tensor1 = que.AllocTensor<half>();
que.EnQue<AscendC::QuePosition::GM, AscendC::QuePosition::VECIN, half>(tensor1);
// 将tensor从VECIN的Queue中搬出
AscendC::LocalTensor<half> tensor2 = que.DeQue<AscendC::QuePosition::GM, AscendC::QuePosition::VECIN, half>();
```

---
*Updated: 2026-04-20 01:44:11*
