# NetworkBoost_WeakSignalPrediction

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `network-boost-c-struct-weak_signal_prediction`

**DocID**: `24b9179ec3f94f769f2681dea3c19211`

**NodeID**: `0002017757963416851702cad2bfefbb`

---

NetworkBoost_WeakSignalPrediction

概述

弱信号预测相关信息。

起始版本：
 5.1.0(18)

相关模块：

NetworkBoost

汇总

[h2]成员变量

名称

描述

bool 
isLastPredictionValid

最近一次的弱信号预测是否有效，true表示最近一次的弱信号预测依旧有效，false表示最近一次的弱信号预测失效，此时startTime和duration参数忽略。

uint32_t 
startTime

预计多长时间进入弱信号（单位：s），取值范围为0和任意正数。

uint32_t 
duration

预计在弱信号区域停留时长（单位：s），取任意正数。取值0，此次预测结果无效。

结构体成员变量说明

[h2]duration

uint32_t NetworkBoost_WeakSignalPrediction::duration

描述

预计在弱信号区域停留时长（单位：s），取任意正数。取值0，此次预测结果无效。

[h2]isLastPredictionValid

bool NetworkBoost_WeakSignalPrediction::isLastPredictionValid

描述

最近一次的弱信号预测是否有效，true表示最近一次的弱信号预测依旧有效，false表示最近一次的弱信号预测失效，此时startTime和duration参数忽略。

[h2]startTime

uint32_t NetworkBoost_WeakSignalPrediction::startTime

描述

预计多长时间进入弱信号（单位：s），取值范围为0和任意正数。

---
*2026-04-22T15:53:59.233Z*