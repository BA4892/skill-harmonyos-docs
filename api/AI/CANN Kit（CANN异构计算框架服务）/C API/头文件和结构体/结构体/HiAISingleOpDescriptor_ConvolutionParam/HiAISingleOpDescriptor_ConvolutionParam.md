# HiAISingleOpDescriptor_ConvolutionParam

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `cannkit-sopdesc-convparam`

**DocID**: `a7fa80eef01945bba27740ec3a753e16`

**NodeID**: `00020177579585764077763faa64d838`

---

HiAISingleOpDescriptor_ConvolutionParam

概述

HMS_HiAISingleOpDescriptor_CreateConvolution
输入参数。

起始版本：
 5.0.0(12)

相关模块：

CANN

所在头文件：

hiai_single_op.h

汇总

[h2]成员变量

名称

描述

HiAI_SingleOpConvMode

convMode

卷积模式。

int64_t 
strides
 [2]

卷积核在高度和宽度上的移动步幅，是一个长度为2的int数组[strideHeight, strideWidth]。

int64_t 
dilations
 [2]

卷积核在高度和宽度上的扩张率，是一个长度为2的int数组[dilationHeight, dilationWidth]。

int64_t 
pads
 [4]

各个轴起始和末尾的填充长度，是一个长度为4的int数组[h_begin, h_end, w_begin, w_end]。该值仅在
padMode
为
HIAI_SINGLEOP_PAD_MODE_SPECIFIC
时生效。

int64_t 
groups

输入通道被划分成的组数。若
convMode
为
HIAI_SINGLEOP_CONV_MODE_DEPTHWISE
，
groups
不生效。

HiAI_SingleOpPadMode

padMode

输入的填充方式。对于
HIAI_SINGLEOP_CONV_MODE_COMMON
和
HIAI_SINGLEOP_CONV_MODE_DEPTHWISE
， 支持
0
 (SPECIFIC)，
1
 (SAME)，
2
 (SAME_UPPER)，
3
 (SAME_LOWER)和
4
 (VALID)。对于 
HIAI_SINGLEOP_CONV_MODE_TRANSPOSED
, 支持
0
 (SPECIFIC)，
1
 (SAME)和
4
 (VALID)。

结构体成员变量说明

[h2]convMode

HiAI_SingleOpConvMode HiAISingleOpDescriptor_ConvolutionParam::convMode

描述

卷积模式。

[h2]dilations

int64_t HiAISingleOpDescriptor_ConvolutionParam::dilations[2]

描述

卷积核在高度和宽度上的扩张率，是一个长度为2的int数组[dilationHeight, dilationWidth]。

[h2]groups

int64_t HiAISingleOpDescriptor_ConvolutionParam::groups

描述

输入通道被划分成的组数。若
convMode
为
HIAI_SINGLEOP_CONV_MODE_DEPTHWISE
，
groups
不生效。

[h2]padMode

HiAI_SingleOpPadMode HiAISingleOpDescriptor_ConvolutionParam::padMode

描述

输入的填充方式。对于
HIAI_SINGLEOP_CONV_MODE_COMMON
和
HIAI_SINGLEOP_CONV_MODE_DEPTHWISE
， 支持
0
 (SPECIFIC)，
1
 (SAME)，
2
 (SAME_UPPER)，
3
 (SAME_LOWER)和
4
 (VALID)。对于 
HIAI_SINGLEOP_CONV_MODE_TRANSPOSED
, 支持
0
 (SPECIFIC)，
1
 (SAME)和
4
 (VALID)。

[h2]pads

int64_t HiAISingleOpDescriptor_ConvolutionParam::pads[4]

描述

各个轴起始和末尾的填充长度，是一个长度为4的int数组[h_begin, h_end, w_begin, w_end]。该值仅在
padMode
为
HIAI_SINGLEOP_PAD_MODE_SPECIFIC
时生效。

[h2]strides

int64_t HiAISingleOpDescriptor_ConvolutionParam::strides[2]

描述

卷积核在高度和宽度上的移动步幅，是一个长度为2的int数组[strideHeight, strideWidth]。

---
*2026-04-22T15:54:00.565Z*