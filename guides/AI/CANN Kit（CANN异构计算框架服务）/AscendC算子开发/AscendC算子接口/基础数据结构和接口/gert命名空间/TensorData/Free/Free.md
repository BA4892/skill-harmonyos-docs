# Free

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-free`  |  **DocID**: `1f9029cea86f4b1db0461a6466f1ef61`  |  **NodeID**: `00020177579544980087999be1d68d84`

---

# Free

  #### 函数功能

释放tensor。

   #### 函数原型

```
ge::graphStatus Free()
```
   #### 参数说明

无

   #### 返回值

成功时返回：ge::GRAPH_SUCCESS。

 失败时返回manager函数返回的状态码。

 关于ge::graphStatus类型的定义，请参见[ge::graphStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-gegraphstatus)。

   #### 约束说明

无

   #### 调用示例

```
std::vector<int> a = {10};
auto addr = reinterpret_cast<void *>(a.data());
TensorData td(addr, nullptr);
td.Free();
```

---
*Updated: 2026-04-20 01:43:59*
