# GetIrInputInstanceInfo

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getirinputinstanceinfo`  |  **DocID**: `78abc21a31894e0e9831900cba6a8102`  |  **NodeID**: `0002017757954498008211fcbd3b9c48`

---

# GetIrInputInstanceInfo

  #### 函数功能

根据算子原型定义中的输入索引获取对应输入的实例化信息。

   #### 函数原型

```
const AnchorInstanceInfo * GetIrInputInstanceInfo (const size_t ir_index) const
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | ir_index  | 输入  | 算子IR原型定义中的输入索引，从0开始计数。  
  

    #### 返回值

指定输入的实例化信息。

 关于AnchorInstanceInfo的定义，请参见[AnchorInstanceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-anchorinstanceinfo-introduction)。

   #### 约束说明

无

   #### 调用示例

```
// 假设已存在KernelContext *context
auto extend_context = reinterpret_cast<ExtendedKernelContext *>(context);
for (size_t idx = 0; idx < extend_context->GetComputeNodeInfo()->GetIrInputsNum(); ++idx) {
  auto input_td = extend_context->GetIrInputInstanceInfo(idx);
  // ...
}
```

---
*Updated: 2026-04-20 01:43:57*
