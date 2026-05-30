# FusionParseParamsFn（Overload）

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-fusionparseparamsfn-overload`  |  **DocID**: `a10176a87d194f9db66dd4dfe5977383`  |  **NodeID**: `000201775795449800906f1f3470c9bd`

---

# FusionParseParamsFn（Overload）

  #### 函数功能

注册解析融合算子属性的函数，为[FusionParseParamsFn](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-fusionparseparamsfn)的重载函数。

   #### 函数原型

```
OpRegistrationData &FusionParseParamsFn(const FusionParseParamByOpFunc &fusion_parse_param_fn)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | **fusion_parse_param_fn**  | 输入  | 解析融合算子属性的函数，请参见[回调函数FusionParseParamByOpFunc](#回调函数fusionparseparambyopfunc)。  
  

    #### 回调函数FusionParseParamByOpFunc

开发者自定义并实现FusionParseParamByOpFunc类函数，完成原始模型中属性到适配AI处理器的模型中的属性映射，将结果填入Operator类中。

 Status FusionParseParamByOpFunc(const std::vector<ge::Operator> &op_src,  ge::Operator &op_dest); **表1** 参数说明

  
| 参数  | 输入/输出  | 说明  
  | op_src  | 输入  一组scope内存储原始模型中算子属性的融合算子数据结构，

 关于Operator类，请参见[Operator](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-construction-and-destructor)。

  
 | op_dest  | 输出  融合算子数据结构，保存融合算子信息。

 关于Operator类，请参见[Operator](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-construction-and-destructor)。

  
  

    #### 调用示例

```
REGISTER_CUSTOM_OP(XXXXXX)
.FrameworkType(TENSORFLOW)
.FusionParseParamsFn(FusionParseParamsFn)
.OriginOpType(XXXXX)
.ImplyType(XXXXX);
```

---
*Updated: 2026-04-20 01:43:59*
