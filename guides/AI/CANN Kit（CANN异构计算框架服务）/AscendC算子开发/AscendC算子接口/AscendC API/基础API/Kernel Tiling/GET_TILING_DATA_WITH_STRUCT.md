# GET_TILING_DATA_WITH_STRUCT

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-get-tiling-data-with-struct`  |  **DocID**: `a8932a9de05045f9aa3e709b73b2d5c3`  |  **NodeID**: `0002017757954498006793813281101d`

---

# GET_TILING_DATA_WITH_STRUCT

  #### 函数功能

使用该接口指定结构体名称，可获取指定的tiling信息，并填入对应的Tiling结构体中，此函数会以宏展开的方式进行编译。与[GET_TILING_DATA](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-get-tiling-data)的区别是：只能获取默认注册的结构体，该接口可以根据指定的结构体名称获取对应的结构体，常用于针对不同的TilingKey注册了不同结构体的情况下。

   #### 函数原型

```
GET_TILING_DATA_WITH_STRUCT(struct_name, tiling_data, tiling_arg)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | struct_name  | 输入  | 指定的结构体名称。  
 | tiling_data  | 输出  | 返回指定Tiling结构体变量。  
 | tiling_arg  | 输入  | 此参数为算子入口函数处传入的tiling参数。  
  

    #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 约束说明

本函数需在算子kernel代码处使用，并且传入的tiling_data参数不需要声明类型。

  暂不支持kernel直调工程。

  
   #### 调用示例

```
extern "C" __global__ __aicore__ void add_custom(__gm__ uint8_t *x, __gm__ uint8_t *y, __gm__ uint8_t *z, __gm__ uint8_t *tiling)
{
    KernelAdd op;
    if (TILING_KEY_IS(1)) {
        GET_TILING_DATA_WITH_STRUCT(Add_Struct_Special, tilingData, tiling); // 使用算子指定注册的结构体
    op.Init(x, y, z, tilingData.totalLengthSpecial, tilingData.tileNumSpecial);
    } else {
        GET_TILING_DATA(tilingData, tiling);   // 使用算子默认注册的结构体
    op.Init(x, y, z, tilingData.totalLength, tilingData.tileNum);
    }
    if (TILING_KEY_IS(1)) {
        op.Process();
    }  else  if (TILING_KEY_IS(2)) {
        op.Process();
    } else  if (TILING_KEY_IS(3)) {
        op.Process();
    }
}
```

---
*Updated: 2026-04-20 01:43:53*
