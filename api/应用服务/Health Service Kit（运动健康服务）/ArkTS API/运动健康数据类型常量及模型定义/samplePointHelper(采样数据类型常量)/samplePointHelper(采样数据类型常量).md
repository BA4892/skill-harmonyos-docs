# samplePointHelper(采样数据类型常量)

> **分区**: API参考  |  **Slug**: `health-api-samplepointhelper`  |  **DocID**: `1a1ce870c795408f95efd34eb163c109`

---

# samplePointHelper(采样数据类型常量)

 本模块提供采样数据类型常量及数据模型。

 **起始版本：** 5.0.0(12)

  #### 导入模块

import { healthStore } from '@kit.HealthServiceKit';   此模块为healthStore子模块，需通过healthStore.samplePointHelper方式使用。

     #### bloodOxygenSaturation

血氧数据类型常量及数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

   #### [h2]常量

**系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  名称 类型 说明   DATA_TYPE [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#datatype) 血氧数据类型。       #### [h2]Model

type Model = healthModels.BloodOxygenSaturation

 血氧采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本���** 5.0.0(12)

  类型 **说明**   [healthModels.BloodOxygenSaturation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#bloodoxygensaturation) 血氧采样数据模型。       #### [h2]Fields

type Fields = healthFields.BloodOxygenSaturation

 血氧采样数据字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.BloodOxygenSaturation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bloodoxygensaturation) 血氧采样数据字段列表。       #### [h2]AggregateResult

type AggregateResult = healthModels.BloodOxygenSaturationAggregateResult

 血氧采样数据聚合统计结果模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.BloodOxygenSaturationAggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#bloodoxygensaturationaggregateresult) 血氧采样数据聚合统计结果模型       #### [h2]AggregateRequest

type AggregateRequest = healthModels.BloodOxygenSaturationAggregateRequest

 血氧采样数据聚合统计请求模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.BloodOxygenSaturationAggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#bloodoxygensaturationaggregaterequest) 血氧采样数据聚合统计请求模型       #### [h2]AggregateFields

type AggregateFields = healthFields.BloodOxygenSaturationAggregation

 血氧采样数据支持的聚合统计字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.BloodOxygenSaturationAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bloodoxygensaturationaggregation) 血氧采样数据支持的聚合统计字段列表。       #### bloodPressure

血压数据类型常量及数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

   #### [h2]常量

**系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  名称 类型 说明   DATA_TYPE [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#datatype) 血压数据类型。       #### [h2]Model

type Model = healthModels.BloodPressure

 血压采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.BloodPressure](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#bloodpressure) 血压采样数据模型。       #### [h2]Fields

type Fields = healthFields.BloodPressure

 血压采样数据字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.BloodPressure](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bloodpressure) 血压采样数据字段列表。       #### bodyTemperature

体温数据类型常量及数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

   #### [h2]常量

**系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  名称 类型 说明   DATA_TYPE [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#datatype) 体温数据类型。       #### [h2]Model

type Model = healthModels.BodyTemperature

 体温采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.BodyTemperature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#bodytemperature) 体温采样数据模型。       #### [h2]Fields

type Fields = healthFields.BodyTemperature

 体温采样数据字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.BodyTemperature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bodytemperature) 体温采样数据字段列表。       #### [h2]AggregateResult

type AggregateResult = healthModels.BodyTemperatureAggregateResult

 体温采样数据聚合统计结果模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.BodyTemperatureAggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#bodytemperatureaggregateresult) 体温采样数据聚合统计结果模型。       #### [h2]AggregateRequest

type AggregateRequest = healthModels.BodyTemperatureAggregateRequest

 体温采样数据聚合统计请求模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.BodyTemperatureAggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#bodytemperatureaggregaterequest) 体温采样数据聚合统计请求模型。       #### [h2]AggregateFields

type AggregateFields = healthFields.BodyTemperatureAggregation

 体温采样数据支持的聚合统计字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.BodyTemperatureAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bodytemperatureaggregation) 体温采样数据支持的聚合统计字段列表。       #### dailyActivities

日常活动数据类型常量及数据模型。

 **元服务API：** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

   #### [h2]常量

**元服务API：** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  名称 类型 说明   DATA_TYPE [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#datatype) 日常活动数据类型。       #### [h2]Model

type Model = healthModels.DailyActivities

 日常活动采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.DailyActivities](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#dailyactivities) 日常活动采样数据模型。       #### [h2]Fields

type Fields = healthFields.DailyActivities

 日常活动采样数据字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.DailyActivities](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#dailyactivities) 日常活动采样数据字段列表。       #### [h2]AggregateResult

type AggregateResult = healthModels.DailyActivitiesAggregateResult

 日常活动采样数据聚合统计结果模型。

 **元服务API：** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.DailyActivitiesAggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#dailyactivitiesaggregateresult) 日常活动采样数据聚合结果模型。       #### [h2]AggregateRequest

type AggregateRequest = healthModels.DailyActivitiesAggregateRequest

 日常活动采样数据聚合统计请求模型。

 **元服务API：** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.DailyActivitiesAggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#dailyactivitiesaggregaterequest) 日常活动采样数据聚合请求模型。       #### [h2]AggregateFields

type AggregateFields = healthFields.DailyActivitiesAggregation

 日常活动采样数据支持的聚合统计字段列表。

 **元服务API：** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.DailyActivitiesAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#dailyactivitiesaggregation) 日常活动采样数据支持的聚合统计字段列表。       #### emotion

情绪数据类型常量及数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.1.0(18)

   #### [h2]常量

**系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.1.0(18)

  名称 类型 说明   DATA_TYPE [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#datatype) 情绪数据类型。       #### [h2]Model

type Model = healthModels.Emotion

 情绪采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.1.0(18)

  类型 **说明**   [healthModels.Emotion](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#emotion) 情绪采样数据模型。       #### [h2]Fields

type Fields = healthFields.Emotion

 情绪采样数据字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.1.0(18)

  类型 **说明**   [healthFields.Emotion](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#emotion) 情绪采样数据字段列表。       #### heartRate

动态心率数据类型常量及数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

   #### [h2]常量

**系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  名称 类型 说明   DATA_TYPE [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#datatype) 动态心率数据类型。       #### [h2]Model

type Model = healthModels.HeartRate

 动态心率采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.HeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#heartrate) 动态心率采样数据模型。       #### [h2]Fields

type Fields = healthFields.HeartRate

 动态心率采样数据字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.HeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#heartrate) 动态心率采样数据字段列表。       #### [h2]AggregateResult

type AggregateResult = healthModels.HeartRateAggregateResult

 动态心率采样数据聚合统计结果模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.HeartRateAggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#heartrateaggregateresult) 动态心率采样数据聚合统计结果模型。       #### [h2]AggregateRequest

type AggregateRequest = healthModels.HeartRateAggregateRequest

 动态心率采样数据聚合统计请求模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.HeartRateAggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#heartrateaggregaterequest) 动态心率采样数据聚合统计请求模型。       #### [h2]AggregateFields

type AggregateFields = healthFields.HeartRateAggregation

 动态心率采样数据支持的聚合统计字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.HeartRateAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#heartrateaggregation) 动态心率采样数据支持的聚合统计字段列表。       #### heartRateVariability

心率变异性数据类型常量及数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.1.0(18)

   #### [h2]常量

**系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.1.0(18)

  名称 类型 说明   DATA_TYPE [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#datatype) 心率变异性数据类型。       #### [h2]Model

type Model = healthModels.HeartRateVariability

 心率变异性采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.1.0(18)

  类型 **说明**   [healthModels.HeartRateVariability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#heartratevariability) 心率变异性采样数据模型。       #### [h2]Fields

type Fields = healthFields.HeartRateVariability

 心率变异性采样数据字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.1.0(18)

  类型 **说明**   [healthFields.HeartRateVariability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#heartratevariability) 心率变异性采样数据字段列表。       #### height

身高数据类型常量及数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

   #### [h2]常量

**系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  名称 类型 说明   DATA_TYPE [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#datatype) 身高数据类型。       #### [h2]Model

type Model = healthModels.Height

 身高采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.Height](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#height) 身高采样数据模型。       #### [h2]Fields

type Fields = healthFields.Height

 身高采样数据字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.Height](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#height) 身高采样数据字段列表。       #### restingHeartRate

静息心率数据类型常量及数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

   #### [h2]常量

**系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  名称 类型 说明   DATA_TYPE [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#datatype) 静息心率数据类型。       #### [h2]Model

type Model = healthModels.RestingHeartRate

 静息心率采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.RestingHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#restingheartrate) 静息心率采样数据模型。       #### [h2]Fields

type Fields = healthFields.RestingHeartRate

 静息心率采样数据字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.RestingHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#restingheartrate) 静息心率采样数据字段列表。       #### [h2]AggregateResult

type AggregateResult = healthModels.RestingHeartRateAggregateResult

 静息心率采样数据聚合统计结果模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.RestingHeartRateAggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#restingheartrateaggregateresult) 静息心率采样数据聚合统计结果模型。       #### [h2]AggregateRequest

type AggregateRequest = healthModels.RestingHeartRateAggregateRequest

 静息心率采样数据聚合统计请求模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.RestingHeartRateAggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#restingheartrateaggregaterequest) 静息心率采样数据聚合统计请求模型。       #### [h2]AggregateFields

type AggregateFields = healthFields.RestingHeartRateAggregation

 静息心率采样数据支持的聚合统计字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.RestingHeartRateAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#restingheartrateaggregation) 静息心率采样数据支持的聚合统计字段列表。       #### skinTemperature

皮肤体温数据类型常量及数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

   #### [h2]常量

**系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  名称 类型 说明   DATA_TYPE [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#datatype) 皮肤体温数据类型。       #### [h2]Model

type Model = healthModels.SkinTemperature

 皮肤体温采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.SkinTemperature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#skintemperature) 皮肤体温采样数据模型。       #### [h2]Fields

type Fields = healthFields.SkinTemperature

 皮肤体温采样数据字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.SkinTemperature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#skintemperature) 皮肤体温采样数据字段列表。       #### [h2]AggregateResult

type AggregateResult = healthModels.SkinTemperatureAggregateResult

 皮肤体温采样数据聚合统计结果模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.SkinTemperatureAggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#skintemperatureaggregateresult) 皮肤体温采样数据聚合统计结果模型。       #### [h2]AggregateRequest

type AggregateRequest = healthModels.SkinTemperatureAggregateRequest

 皮肤体温采样数据聚合统计请求模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.SkinTemperatureAggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#skintemperatureaggregaterequest) 皮肤体温采样数据聚合统计请求模型。       #### [h2]AggregateFields

type AggregateFields = healthFields.SkinTemperatureAggregation

 皮肤体温采样数据支持的聚合统计字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.SkinTemperatureAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#skintemperatureaggregation) 皮肤体温采样数据支持的聚合统计字段列表。       #### stress

压力数据类型常量及数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

   #### [h2]常量

**系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  名称 类型 说明   DATA_TYPE [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#datatype) 压力数据类型。       #### [h2]Model

type Model = healthModels.Stress

 压力采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.Stress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#stress) 压力采样数据模型。       #### [h2]Fields

type Fields = healthFields.Stress

 压力采样数据字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.Stress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#stress) 压力采样数据字段列表。       #### [h2]AggregateResult

type AggregateResult = healthModels.StressAggregateResult

 压力采样数据聚合统计结果模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.StressAggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#stressaggregateresult) 压力采样数据聚合统计结果模型。       #### [h2]AggregateRequest

type AggregateRequest = healthModels.StressAggregateRequest

 压力采样数据聚合统计请求模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.StressAggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#stressaggregaterequest) 压力采样数据聚合统计请求模型。       #### [h2]AggregateFields

type AggregateFields = healthFields.StressAggregation

 压力采样数据支持的聚合统计字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.StressAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#stressaggregation) 压力采样数据支持的聚合统计字段列表。       #### weight

体重数据类型常量及数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

   #### [h2]常量

**���统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  名称 类型 说明   DATA_TYPE [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#datatype) 体重数据类型。       #### [h2]Model

type Model = healthModels.Weight

 体重采样数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.Weight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#weight) 体重采样数据模型。       #### [h2]Fields

type Fields = healthFields.Weight

 体重采样数据字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.Weight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#weight) 体重采样数据字段列表。

---
*Updated: 2026-04-22 06:41:52*
