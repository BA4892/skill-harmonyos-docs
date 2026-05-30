# GetPlacement

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getplacement`  |  **DocID**: `bd0bad9e5b674fe0ace5181200b373de`  |  **NodeID**: `0002017757954498008109852e80bc13`

---

# GetPlacement

  #### 函数功能

获取tensor的placement，tensor数据所在的设备位置。

 ```
// tensor数据所在的设备位置
enum TensorPlacement {
  kOnDeviceHbm,  // < Tensor位于Device上的HBM内存
  kOnHost,       // < Tensor位于Host
  kFollowing,    // < Tensor位于Host，且数据紧跟在结构体后面
  kTensorPlacementEnd
};
```
   #### 函数原型

```
TensorPlacement GetPlacement() const
```
   #### 参数说明

无

   #### 返回值

tensor的placement。

 关于TensorPlacement类型的定义，请参见[TensorPlacement](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensorplacement)。

   #### 约束说明

无

   #### 调用示例

```
std::vector<int> a = {10};
auto addr = reinterpret_cast<void *>(a.data());
TensorData td(addr, HostAddrManager, 100U, kOnHost);
auto td_place = td.GetPlacement(); // kOnHost
```

---
*Updated: 2026-04-20 01:43:58*
