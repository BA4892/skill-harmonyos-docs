# GetData

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getdata`  |  **DocID**: `ae4c02a3bbb9481ab80472d97808161d`  |  **NodeID**: `00020177579544980071925fc2878210`

---

# GetData

  #### 函数功能

获取Tensor的数据地址。

   #### 函数原型

```
template<class T>  const T *GetData() const
template<class T>  T *GetData()
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | T  | 输入  | 数据类型。  
  

    #### 返回值

数据地址。

   #### 约束说明

无

   #### 调用示例

```
Tensor tensor{{{8, 3, 224, 224}, {16, 3, 224, 224}},       // shape
              {ge::FORMAT_ND, ge::FORMAT_FRACTAL_NZ, {}},  // format
              kFollowing,                                  // placement
              ge::DT_FLOAT16,                              // dt
              nullptr};
auto addr = tensor.GetData<int64_t>();
```

---
*Updated: 2026-04-20 01:43:55*
