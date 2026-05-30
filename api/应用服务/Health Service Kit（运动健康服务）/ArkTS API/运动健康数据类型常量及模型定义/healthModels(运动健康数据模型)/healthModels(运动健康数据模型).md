# healthModels(运动健康数据模型)

> **分区**: API参考  |  **Slug**: `health-api-healthmodels`  |  **DocID**: `5b88ded5709348edaf526862e7e4582b`

---

# healthModels(运动健康数据模型)

 本模块提供运动健康数据模型。

 **起始版本：** 5.0.0(12)

  #### 导入模块

import { healthStore } from '@kit.HealthServiceKit';   此模块为healthStore子模块，需通过healthStore.healthModels方式使用。

     #### Adventures

type Adventures = healthStore.ExerciseSequence<healthFields.AdventuresSummary, healthFields.AdventuresDetail>

 户外探险锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.AdventuresSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#adventuressummary), [healthFields.AdventuresDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#adventuresdetail)> 户外探险锻炼记录数据模型。       #### Basketball

type Basketball = healthStore.ExerciseSequence<healthFields.BasketballSummary, healthFields.BasketballDetail>

 篮球锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.BasketballSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#basketballsummary), [healthFields.BasketballDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#basketballdetail)> 篮球锻炼记录数据模型。       #### Biathlon

type Biathlon = healthStore.ExerciseSequence<healthFields.BiathlonSummary, healthFields.BiathlonDetail>

 冬季两项锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.BiathlonSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#biathlonsummary), [healthFields.BiathlonDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#biathlondetail)> 冬季两项锻炼记录数据模型。       #### BloodOxygenSaturation

type BloodOxygenSaturation = healthStore.SamplePoint<healthFields.BloodOxygenSaturation>

 血氧采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.BloodOxygenSaturation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bloodoxygensaturation)> 血氧采样数据模型。       #### BloodOxygenSaturationAggregateRequest

type BloodOxygenSaturationAggregateRequest = healthStore.AggregateRequest<healthFields.BloodOxygenSaturationAggregation>

 血氧采样数据聚合统计请求模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest)<[healthFields.BloodOxygenSaturationAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bloodoxygensaturationaggregation)> 血氧采样数据聚合统计请求模型。       #### BloodOxygenSaturationAggregateResult

type BloodOxygenSaturationAggregateResult = healthStore.AggregateResult<healthFields.BloodOxygenSaturationAggregation>

 血氧聚合结果数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult)<[healthFields.BloodOxygenSaturationAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bloodoxygensaturationaggregation)> 血氧聚合结果数据模型。       #### BloodPressure

type BloodPressure = healthStore.SamplePoint<healthFields.BloodPressure>

 血压采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.BloodPressure](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bloodpressure)> 血压采样数据模型。       #### Bmx

type Bmx = healthStore.ExerciseSequence<healthFields.CyclingSummary, healthFields.CyclingDetail>

 BMX自行车锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.CyclingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#cyclingsummary), [healthFields.CyclingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#cyclingdetail)> BMX自行车锻炼记录数据模型。       #### BodyTemperature

type BodyTemperature = healthStore.SamplePoint<healthFields.BodyTemperature>

 体温采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.BodyTemperature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bodytemperature)> 体温采样数据模型。       #### BodyTemperatureAggregateRequest

type BodyTemperatureAggregateRequest = healthStore.AggregateRequest<healthFields.BodyTemperatureAggregation>

 体温采样数据聚合统计请求模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest)<[healthFields.BodyTemperatureAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bodytemperatureaggregation)> 体温采样数据聚合统计请求模型。       #### BodyTemperatureAggregateResult

type BodyTemperatureAggregateResult = healthStore.AggregateResult<healthFields.BodyTemperatureAggregation>

 体温聚合结果数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult)<[healthFields.BodyTemperatureAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bodytemperatureaggregation)> 体温聚合结果数据模型。       #### BreathHoldingTest

type BreathHoldingTest = healthStore.ExerciseSequence<healthFields.BreathHoldingTestSummary, healthFields.BreathHoldingTestDetail>

 闭气测试锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.BreathHoldingTestSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#breathholdingtestsummary), [healthFields.BreathHoldingTestDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#breathholdingtestdetail)> 闭气测试锻炼记录数据模型。       #### BreathHoldingTrain

type BreathHoldingTrain = healthStore.ExerciseSequence<healthFields.BreathHoldingTrainSummary, healthFields.BreathHoldingTrainDetail>

 闭气训练锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.BreathHoldingTrainSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#breathholdingtrainsummary), [healthFields.BreathHoldingTrainDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#breathholdingtraindetail)> 闭气训练锻炼记录数据模型。       #### Cycling

type Cycling = healthStore.ExerciseSequence<healthFields.CyclingSummary, healthFields.CyclingDetail>

 户外骑行锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.CyclingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#cyclingsummary), [healthFields.CyclingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#cyclingdetail)> 户外骑行锻炼记录数据模型。       #### DailyActivities

type DailyActivities = healthStore.SamplePoint<healthFields.DailyActivities>

 日常活动采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.DailyActivities](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#dailyactivities)> 日常活动采样数据模型。       #### DailyActivitiesAggregateRequest

type DailyActivitiesAggregateRequest = healthStore.AggregateRequest<healthFields.DailyActivitiesAggregation>

 日常活动采样数据聚合统计请求模型。

 **元服务API**：从版本5.0.0(12)开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest)<[healthFields.DailyActivitiesAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#dailyactivitiesaggregation)> 日常活动采样数据聚合统计请求模型。       #### DailyActivitiesAggregateResult

type DailyActivitiesAggregateResult = healthStore.AggregateResult<healthFields.DailyActivitiesAggregation>

 日常活动聚合结果数据模型。

 **元服务API：** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult)<[healthFields.DailyActivitiesAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#dailyactivitiesaggregation)> 日常活动聚合结果数据模型。       #### Diving

type Diving = healthStore.ExerciseSequence<healthFields.DivingSummary, healthFields.DivingDetail>

 自由潜水锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.DivingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#divingsummary), [healthFields.DivingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#divingdetail)> 自由潜水锻炼记录数据模型。       #### Elliptical

type Elliptical = healthStore.ExerciseSequence<healthFields.EllipticalSummary, healthFields.EllipticalDetail>

 椭圆机锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.EllipticalSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#ellipticalsummary), [healthFields.EllipticalDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#ellipticaldetail)> 椭圆机锻炼记录数据模型。       #### Emotion

type Emotion = healthStore.SamplePoint<healthFields.Emotion>

 情绪采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.1.0(18)

  类型 **说明**   [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.Emotion](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#emotion)> 情绪采样数据模型。       #### GolfCourseModel

type GolfCourseModel = healthStore.ExerciseSequence<healthFields.GolfCourseModelSummary, healthFields.GolfCourseModelDetail>

 高尔夫场地模式锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.GolfCourseModelSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#golfcoursemodelsummary), [healthFields.GolfCourseModelDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#golfcoursemodeldetail)> 高尔夫场地模式锻炼记录数据模型。       #### GolfPractice

type GolfPractice = healthStore.ExerciseSequence<healthFields.GolfPracticeSummary, healthFields.GolfPracticeDetail>

 高尔夫练习场模式锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.GolfPracticeSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#golfpracticesummary), [healthFields.GolfPracticeDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#golfpracticedetail)> 高尔夫练习场模式锻炼记录数据模型。       #### HeartRate

type HeartRate = healthStore.SamplePoint<healthFields.HeartRate>

 动态心率采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.HeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#heartrate)> 动态心率采样数据模型。       #### HeartRateAggregateRequest

type HeartRateAggregateRequest = healthStore.AggregateRequest<healthFields.HeartRateAggregation>

 动态心率采样数据聚合统计请求模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest)<[healthFields.HeartRateAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#heartrateaggregation)> 动态心率采样数据聚合统计请求模型。       #### HeartRateAggregateResult

type HeartRateAggregateResult = healthStore.AggregateResult<healthFields.HeartRateAggregation>

 动态心率聚合结果数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult)<[healthFields.HeartRateAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#heartrateaggregation)> 动态心率聚合结果数据模型。       #### HeartRateVariability

type HeartRateVariability = healthStore.SamplePoint<healthFields.HeartRateVariability>

 心率变异性采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.1.0(18)

  类型 **说明**   [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.HeartRateVariability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#heartratevariability)> 心率变异性采样数据模型。       #### Height

type Height = healthStore.SamplePoint<healthFields.Height>

 身高采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.Height](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#height)> 身高采样数据模型。       #### Hiking

type Hiking = healthStore.ExerciseSequence<healthFields.WalkingSummary, healthFields.WalkingDetail>

 徒步锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.WalkingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#walkingsummary), [healthFields.WalkingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#walkingdetail)> 徒步锻炼记录数据模型。       #### IndoorCycling

type IndoorCycling = healthStore.ExerciseSequence<healthFields.CyclingSummary, healthFields.CyclingDetail>

 室内单车锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.CyclingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#cyclingsummary), [healthFields.CyclingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#cyclingdetail)> 室内单车锻炼记录数据模型。       #### IndoorRunning

type IndoorRunning = healthStore.ExerciseSequence<healthFields.RunningSummary, healthFields.RunningDetail>

 室内跑步锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.RunningSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#runningsummary), [healthFields.RunningDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#runningdetail)> 室内跑步锻炼记录数据模型。       #### IndoorWalking

type IndoorWalking = healthStore.ExerciseSequence<healthFields.WalkingSummary, healthFields.WalkingDetail>

 室内步行锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.WalkingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#walkingsummary), [healthFields.WalkingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#walkingdetail)> 室内步行锻炼记录数据模型。       #### JumpingRope

type JumpingRope = healthStore.ExerciseSequence<healthFields.JumpingRopeSummary, healthFields.JumpingRopeDetail>

 跳绳锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.JumpingRopeSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#jumpingropesummary), [healthFields.JumpingRopeDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#jumpingropedetail)> 跳绳锻炼记录数据模型。       #### MountainHike

type MountainHike = healthStore.ExerciseSequence<healthFields.MountainHikeSummary, healthFields.MountainHikeDetail>

 登山锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.MountainHikeSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#mountainhikesummary), [healthFields.MountainHikeDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#mountainhikedetail)> 登山锻炼记录数据模型。       #### OpenWaterSwim

type OpenWaterSwim = healthStore.ExerciseSequence<healthFields.OpenWaterSwimSummary, healthFields.OpenWaterSwimDetail>

 开放水域游泳锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.OpenWaterSwimSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#openwaterswimsummary), [healthFields.OpenWaterSwimDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#openwaterswimdetail)> 开放水域游泳锻炼记录数据模型。       #### PoolSwim

type PoolSwim = healthStore.ExerciseSequence<healthFields.PoolSwimSummary, healthFields.PoolSwimDetail>

 泳池游泳锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.PoolSwimSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#poolswimsummary), [healthFields.PoolSwimDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#poolswimdetail)> 泳池游泳锻炼记录数据模型。       #### RestingHeartRate

type RestingHeartRate = healthStore.SamplePoint<healthFields.RestingHeartRate>

 静息心率采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.RestingHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#restingheartrate)> 静息心率采样数据模型。       #### RestingHeartRateAggregateRequest

type RestingHeartRateAggregateRequest = healthStore.AggregateRequest<healthFields.RestingHeartRateAggregation>

 静息心率采样数据聚合统计请求模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest)<[healthFields.RestingHeartRateAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#restingheartrateaggregation)> 静息心率采样数据聚合统计请求模型。       #### RestingHeartRateAggregateResult

type RestingHeartRateAggregateResult = healthStore.AggregateResult<healthFields.RestingHeartRateAggregation>

 静息心率聚合结果数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult)<[healthFields.RestingHeartRateAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#restingheartrateaggregation)> 静息心率聚合结果数据模型。       #### Rower

type Rower = healthStore.ExerciseSequence<healthFields.RowerSummary, healthFields.RowerDetail>

 划船机锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.RowerSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#rowersummary), [healthFields.RowerDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#rowerdetail)> 划船机锻炼记录数据模型。       #### Rowing

type Rowing = healthStore.ExerciseSequence<healthFields.RowingSummary, healthFields.RowingDetail>

 赛艇锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.RowingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#rowingsummary), [healthFields.RowingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#rowingdetail)> 赛艇锻炼记录数据模型。       #### Running

type Running = healthStore.ExerciseSequence<healthFields.RunningSummary, healthFields.RunningDetail>

 户外跑步锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.RunningSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#runningsummary), [healthFields.RunningDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#runningdetail)> 户外跑步锻炼记录数据模型。       #### ScubaDiving

type ScubaDiving = healthStore.ExerciseSequence<healthFields.ScubaDivingSummary, healthFields.ScubaDivingDetail>

 水肺潜水锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.ScubaDivingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#scubadivingsummary), [healthFields.ScubaDivingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#scubadivingdetail)> 水肺潜水锻炼记录数据模型。       #### Skiing

type Skiing = healthStore.ExerciseSequence<healthFields.SkiingSummary, healthFields.SkiingDetail>

 滑雪锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.SkiingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#skiingsummary), [healthFields.SkiingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#skiingdetail)> 滑雪锻炼记录数据模型。       #### SkinTemperature

type SkinTemperature = healthStore.SamplePoint<healthFields.SkinTemperature>

 皮肤体温采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.SkinTemperature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#skintemperature)> 皮肤体温采样数据模型。       #### SkinTemperatureAggregateRequest

type SkinTemperatureAggregateRequest = healthStore.AggregateRequest<healthFields.SkinTemperatureAggregation>

 皮肤体温采样数据聚合统计请求模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest)<[healthFields.SkinTemperatureAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#skintemperatureaggregation)> 皮肤体温采样数据聚合统计请求模型。       #### SkinTemperatureAggregateResult

type SkinTemperatureAggregateResult = healthStore.AggregateResult<healthFields.SkinTemperatureAggregation>

 皮肤体温聚合结果数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult)<[healthFields.SkinTemperatureAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#skintemperatureaggregation)> 皮肤体温聚合结果数据模型。       #### Sled

type Sled = healthStore.ExerciseSequence<healthFields.SledSummary, healthFields.SledDetail>

 滑雪橇锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.SledSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sledsummary), [healthFields.SledDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sleddetail)> 滑雪橇锻炼记录数据模型。       #### SleepNapRecord

type SleepNapRecord = healthStore.HealthSequence<healthFields.SleepNap, healthFields.SleepDetail>

 零星小睡健康记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence)<[healthFields.SleepNap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sleepnap), [healthFields.SleepDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sleepdetail)> 零星小睡健康记录数据模型。       #### SleepRecord

type SleepRecord = healthStore.HealthSequence<healthFields.Sleep, healthFields.SleepDetail>

 夜间睡眠健康记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence)<[healthFields.Sleep](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sleep), [healthFields.SleepDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sleepdetail)> 夜间睡眠健康记录数据模型。       #### Snowboarding

type Snowboarding = healthStore.ExerciseSequence<healthFields.SnowboardingSummary, healthFields.SnowboardingDetail>

 单板滑雪锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.SnowboardingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#snowboardingsummary), [healthFields.SnowboardingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#snowboardingdetail)> 单板滑雪锻炼记录数据模型。       #### Spinning

type Spinning = healthStore.ExerciseSequence<healthFields.CyclingSummary, healthFields.CyclingDetail>

 动感单车锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.CyclingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#cyclingsummary), [healthFields.CyclingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#cyclingdetail)> 动感单车锻炼记录数据模型。       #### Sports

type Sports = healthStore.ExerciseSequence<healthFields.SportsSummary, healthFields.SportsDetail>

 通用锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.SportsSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sportssummary), [healthFields.SportsDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sportsdetail)> 通用锻炼记录数据模型。       #### Stress

type Stress = healthStore.SamplePoint<healthFields.Stress>

 压力采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.Stress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#stress)> 压力采样数据模型。       #### StressAggregateRequest

type StressAggregateRequest = healthStore.AggregateRequest<healthFields.StressAggregation>

 压力采样数据聚合统计请求模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest)<[healthFields.StressAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#stressaggregation)> 压力采样数据聚合统计请求模型。       #### StressAggregateResult

type StressAggregateResult = healthStore.AggregateResult<healthFields.StressAggregation>

 压力聚合结果数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult)<[healthFields.StressAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#stressaggregation)> 压力聚合结果数据模型。       #### TrailRunning

type TrailRunning = healthStore.ExerciseSequence<healthFields.RunningSummary, healthFields.RunningDetail>

 越野跑锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.RunningSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#runningsummary), [healthFields.RunningDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#runningdetail)> 越野跑锻炼记录数据模型。       #### Walking

type Walking = healthStore.ExerciseSequence<healthFields.WalkingSummary, healthFields.WalkingDetail>

 户外步行锻炼记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.WalkingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#walkingsummary), [healthFields.WalkingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#walkingdetail)> 户外步行锻炼数据模型记录。       #### Weight

type Weight = healthStore.SamplePoint<healthFields.Weight>

 体重采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.Weight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#weight)> 体重采样数据模型。

---
*Updated: 2026-04-22 06:41:51*
