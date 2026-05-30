# TensorPlacement

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tensorplacement`  |  **DocID**: `5fb0093336d94fce808afb8c71fe2df4`  |  **NodeID**: `000201775795449800556150f26663a3`

---

# TensorPlacement

 ```
enum TensorPlacement {
    kOnDeviceHbm,  // < Tensor位于Device上的HBM内存
    kOnHost,       // < Tensor位于Host
    kFollowing,    // < Tensor位于Host，且数据紧跟在结构体后面
    kOnDeviceP2p,  // < Tensor位于Device上的P2p内存, 指的是HBM透到PCIE BAR空间上,可以让NPU跨PCIE能访问的地址空间
    kTensorPlacementEnd
};
```

---
*Updated: 2026-04-20 01:43:50*
