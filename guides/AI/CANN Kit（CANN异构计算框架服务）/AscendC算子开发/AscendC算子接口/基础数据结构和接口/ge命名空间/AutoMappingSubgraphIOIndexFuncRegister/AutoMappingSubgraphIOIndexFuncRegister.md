# AutoMappingSubgraphIOIndexFuncRegister

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-automappingsubgraphioindexfuncregister`  |  **DocID**: `3a935aaf05b84f79ab446c7c4db4af32`  |  **NodeID**: `000201775795449800502d66bfbb1e02`

---

# AutoMappingSubgraphIOIndexFuncRegister

  #### 函数功能

FrameworkRegistry类的封装，通过类的构造函数调用FrameworkRegistry类的AddAutoMappingSubgraphIOIndexFunc函数完成映射函数的注册。

   #### 函数原型

```
AutoMappingSubgraphIOIndexFuncRegister(domi::FrameworkType framework, AutoMappingSubgraphIOIndexFunc fun)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | framework  | 输入  | 网络类型，FrameworkType类型定义请参考[FrameworkType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-frameworktype)。  
 | fun  | 输入  | 自动映射输入输出函数，函数类型详见[AutoMappingSubgraphIndex](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-automappingsubgraphindex)。  
  

    #### 返回值

无

   #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:43:49*
