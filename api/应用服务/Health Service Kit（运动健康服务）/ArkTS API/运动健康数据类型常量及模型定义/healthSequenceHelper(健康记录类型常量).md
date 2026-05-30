# healthSequenceHelper(健康记录类型常量)

> **分区**: API参考  |  **Slug**: `health-api-healthsequencehelper`  |  **DocID**: `1c04cee7a8cd48478796aa34f3e6ab3d`

---

# healthSequenceHelper(健康记录类型常量)

 本模块提供健康记录数据类型常量及数据模型。

 **起始版本：** 5.0.0(12)

  #### 导入模块

import { healthStore } from '@kit.HealthServiceKit';   此模块为healthStore子模块，需通过healthStore.healthSequenceHelper方式使用。

     #### sleepRecord

夜间睡眠数据类型常量及数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

   #### [h2]常量

**系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  名称 类型 说明   DATA_TYPE [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#datatype) 夜间睡眠数据类型。       #### [h2]Model

type Model = healthModels.SleepRecord

 夜间睡眠健康记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.SleepRecord](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#sleeprecord) 夜间睡眠健康记录数据模型。       #### [h2]Fields

type Fields = healthFields.Sleep

 夜间睡眠健康记录数据字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.Sleep](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sleep) 夜间睡眠健康记录数据字段列表。       #### [h2]DetailFields

type DetailFields = healthFields.SleepDetail

 睡眠详情数据字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.SleepDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sleepdetail) 睡眠详情数据字段列表。       #### sleepNapRecord

零星小睡数据类型常量及数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

   #### [h2]常量

**系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  名称 类型 说明   DATA_TYPE [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#datatype) 零星小睡数据类型。       #### [h2]Model

type Model = healthModels.SleepNapRecord

 零星小睡健康记录数据模型。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthModels.SleepNapRecord](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels#sleepnaprecord) 零星小睡健康记录数据模型。       #### [h2]Fields

type Fields = healthFields.SleepNap

 零星小睡健康记录数据字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.SleepNap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sleepnap) 零星小睡健康记录数据字段列表。       #### [h2]DetailFields

type DetailFields = healthFields.SleepDetail

 睡眠详情数据字段列表。

 **系统能力：** SystemCapability.Health.HealthStore

 **起始版本：** 5.0.0(12)

  类型 **说明**   [healthFields.SleepDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sleepdetail) 睡眠详情数据字段列表。

---
*Updated: 2026-04-22 06:41:53*
