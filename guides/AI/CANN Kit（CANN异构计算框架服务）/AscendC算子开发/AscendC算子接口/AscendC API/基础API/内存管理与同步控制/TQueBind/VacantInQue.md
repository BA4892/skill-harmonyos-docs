# VacantInQue

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-vacantinque`  |  **DocID**: `b19aadb46e54485ba2b0f3445017eb64`  |  **NodeID**: `00020177579544980115683fac82ad1b`

---

# VacantInQue

  #### 功能说明

查询队列是否已满。

   #### 函数原型

```
__aicore__ inline bool VacantInQue()
```
   #### 参数说明

无

   #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 注意事项

无

   #### 返回值

true：表示Queue未满，可以继续EnQue操作。

  false：表示Queue已满，不可以继续入队。

  
   #### 调用示例

```
// 根据VacantInQue判断当前Queue是否已满，设置当前队列深度为4
AscendC::TPipe pipe;
AscendC::TQueBind<AscendC::TPosition::VECOUT, AscendC::TPosition::GM, 4> que;
int num = 10;
int len = 1024;
pipe.InitBuffer(que, num, len);
bool ret = que.VacantInQue(); // 返回为true
AscendC::LocalTensor<half> tensor1 = que.AllocTensor<half>();
AscendC::LocalTensor<half> tensor2 = que.AllocTensor<half>();
AscendC::LocalTensor<half> tensor3 = que.AllocTensor<half>();
AscendC::LocalTensor<half> tensor4 = que.AllocTensor<half>();
AscendC::LocalTensor<half> tensor5 = que.AllocTensor<half>();
que.EnQue(tensor1);// 将tensor1加入VECOUT的Queue中
que.EnQue(tensor2);// 将tensor2加入VECOUT的Queue中
que.EnQue(tensor3);// 将tensor3加入VECOUT的Queue中
que.EnQue(tensor4);// 将tensor4加入VECOUT的Queue中
ret = que.VacantInQue(); // 返回为false, 继续入队操作（EnQue）将报错
```

---
*Updated: 2026-04-20 01:44:13*
