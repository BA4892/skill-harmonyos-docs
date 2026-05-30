# ParseParamsFn

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-parseparamsfn`  |  **DocID**: `e215ef8dfcdf4562ae9589c64a8943fb`  |  **NodeID**: `0002017757954498008126c48e9ee52b`

---

# ParseParamsFn

  #### 函数功能

注册解析算子属性的函数。

   #### 函数原型

```
OpRegistrationData &ParseParamsFn(const ParseParamFunc &parseParamFn)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | parseParamFn  | 输入  解析算子属性的函数ParseParamFunc，请参见[回调函数ParseParamFunc](#回调函数parseparamfunc)。

 针对TensorFlow框架，若原始TensorFlow框架算子属性与适配AI处理器的模型中算子属性一一对应（属性个数与顺序一致），可直接使用[AutoMappingFn](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-automappingfn)函数自动实现映射。

  
  

    #### 约束说明

对于自定义算子插件，ParseParamsFn后续版本将会废弃，请使用[ParseParamsByOperatorFn](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-parseparamsbyoperatorfn)接口进行算子属性的解析。

 若开发者已使用ParseParamsFn接口进行了算子插件的开发，请执行如下操作进行新接口适配：

 
请重新使用[ParseParamsByOperatorFn](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-parseparamsbyoperatorfn)接口进行算子插件的开发。

  请基于新版本自定义算子样例工程的编译脚本重新进行自定义算子工程的编译。

  
   #### 回调函数ParseParamFunc

开发者自定义并实现FusionParseParamFunc类函数，完成原始模型中算子属性到适配AI处理器的模型中算子属性映射，将结果填入Operator类中。

 Status ParseParamFunc(const Message *op_origin, ge::Operator &op_dest) **表1** 参数说明

  
| 参数  | 输入/输出  | 说明  
  | op_origin  | 输入  | protobuf格式的数据结构（来源于原始模型的prototxt文件），包含算子属性信息。  
 | op_dest  | 输出  适配AI处理器的模型的算子数据结构，保存算子信息。

 关于Operator类，请参见[Operator](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-construction-and-destructor)。

---
*Updated: 2026-04-20 01:43:58*
