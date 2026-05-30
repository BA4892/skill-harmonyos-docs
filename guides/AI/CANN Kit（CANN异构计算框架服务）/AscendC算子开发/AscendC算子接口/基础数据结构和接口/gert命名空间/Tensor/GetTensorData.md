# GetTensorData

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-gettensordata`  |  **DocID**: `bcf54546edd14b9480f493e311de3535`  |  **NodeID**: `000201775795449801046abf6c0a9fb5`

---

# GetTensorData

  #### 函数功能

获取tensor中的数据，返回只读的TensorData类型对象。

   #### 函数原型

```
const TensorData &GetTensorData() const
```
   #### 参数说明

无

   #### 返回值

只读的tensor data引用。

 关于TensorData类型的定义，请参见[TensorData](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-construction-and-destructor-functions)。

   #### 约束说明

无

   #### 调用示例

```
Tensor t = {{}, {}, {}, {}, nullptr};
const Tensor &ct = t;
std::vector<int> a = {10};
t.MutableTensorData() = TensorData{reinterpret_cast<void *>(a.data()), nullptr}; // 设置新tensordata
auto td = t.GetTensorData(); // TensorData{a, nullptr}
```

---
*Updated: 2026-04-20 01:44:03*
