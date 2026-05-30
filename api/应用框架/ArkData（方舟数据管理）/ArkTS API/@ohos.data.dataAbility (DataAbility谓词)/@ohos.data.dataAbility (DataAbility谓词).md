# @ohos.data.dataAbility (DataAbility谓词)

> **分区**: API参考  |  **Slug**: `js-apis-data-ability`  |  **DocID**: `e4432b0732fe4ae692930a2d91ec819c`

---

# @ohos.data.dataAbility (DataAbility谓词)

 DataAbility谓词用于构造关系型数据库的谓词，提供用于实现不同查询方法的谓词。

   本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

    #### 导入模块

```
import { dataAbility } from '@kit.ArkData';
```
   #### dataAbility.createRdbPredicates

createRdbPredicates(name: string, dataAbilityPredicates: DataAbilityPredicates): rdb.RdbPredicates

 通过表名和DataAbility谓词对象创建Rdb谓词对象。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   name string 是 数据库表中的表名。  dataAbilityPredicates [DataAbilityPredicates](#dataabilitypredicates) 是 DataAbility谓词。     **返回值：**

  类型 说明   rdb.[RdbPredicates](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-rdb#rdbpredicates) 返回RdbPredicates对象。     **示例：**

 ```
let dataAbilityPredicates = new dataAbility.DataAbilityPredicates()
dataAbilityPredicates.equalTo("NAME", "Rose")
// EMPLOYEE是使用关系型数据库创建的表。
let predicates = dataAbility.createRdbPredicates("EMPLOYEE", dataAbilityPredicates)
```
   #### DataAbilityPredicates

提供用于实现不同查询方法的谓词。

 **初始化：**

 ```
let dataAbilityPredicates = new dataAbility.DataAbilityPredicates()
```
   #### [h2]equalTo

equalTo(field: string, value: ValueType): DataAbilityPredicates

 配置谓词以匹配数据，数据的指定字段数据类型为ValueType且值等于指定值。

 此方法类似于SQL语句的“=”。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。  value [ValueType](#valuetype) 是 指示要与谓词匹配的值。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.equalTo("NAME", "lisi")
```
   #### [h2]notEqualTo

notEqualTo(field: string, value: ValueType): DataAbilityPredicates

 配置谓词以匹配数据，数据的指定字段数据类型为ValueType且不等于指定值。

 此方法类似于SQL语句的“!=”。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。  value [ValueType](#valuetype) 是 指示要与谓词匹配的值。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.notEqualTo("NAME", "lisi")
```
   #### [h2]beginWrap

beginWrap(): DataAbilityPredicates

 在谓词中添加左括号。此方法类似于SQL语句的“(”，需要与endWrap一起使用。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回带有左括号的DataAbility谓词。     **示例：**

 ```
dataAbilityPredicates.equalTo("NAME", "lisi")
    .beginWrap()
    .equalTo("AGE", 18)
    .or()
    .equalTo("SALARY", 200.5)
    .endWrap()
```
   #### [h2]endWrap

endWrap(): DataAbilityPredicates

 在谓词中添加右括号。此方法类似于SQL语句的“)”，需要和beginWrap一起使用。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回带有右括号的DataAbility谓词。     **示例：**

 ```
dataAbilityPredicates.equalTo("NAME", "lisi")
    .beginWrap()
    .equalTo("AGE", 18)
    .or()
    .equalTo("SALARY", 200.5)
    .endWrap()
```
   #### [h2]or

or(): DataAbilityPredicates

 将或条件添加到谓词中。

 此方法类似于SQL语句“or”。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回带有或条件的DataAbility谓词。     **示例：**

 ```
dataAbilityPredicates.equalTo("NAME", "Lisa")
    .or()
    .equalTo("NAME", "Rose")
```
   #### [h2]and

and(): DataAbilityPredicates

 将和条件添加到谓词中。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回带有和条件的DataAbility谓词。     **示例：**

 ```
dataAbilityPredicates.equalTo("NAME", "Lisa")
    .and()
    .equalTo("SALARY", 200.5)
```
   #### [h2]contains

contains(field: string, value: string): DataAbilityPredicates

 配置谓词以匹配数据类型为string且value包含指定值的字段。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。  value string 是 指示要与谓词匹配的值。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.contains("NAME", "os")
```
   #### [h2]beginsWith

beginsWith(field: string, value: string): DataAbilityPredicates

 配置谓词以匹配数据类型为string且值以指定字符串开头的字段。

 此方法类似于SQL语句的“%”。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。  value string 是 指示要与谓词匹配的值。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.beginsWith("NAME", "os")
```
   #### [h2]endsWith

endsWith(field: string, value: string): DataAbilityPredicates

 配置谓词以匹配数据类型为string且值以指定字符串结尾的字段。

 此方法类似于SQL语句的“%”。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。  value string 是 指示要与谓词匹配的值。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.endsWith("NAME", "se")
```
   #### [h2]isNull

isNull(field: string): DataAbilityPredicates

 配置谓词以匹配值为null的字段。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.isNull("NAME")
```
   #### [h2]isNotNull

isNotNull(field: string): DataAbilityPredicates

 配置谓词以匹配值不为null的指定字段。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.isNotNull("NAME")
```
   #### [h2]like

like(field: string, value: string): DataAbilityPredicates

 配置谓词以匹配数据类型为string且值类似于指定字符串的字段。

 此方法类似于SQL语句“like”。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。  value string 是 指示要与谓词匹配的值。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.like("NAME", "%os%")
```
   #### [h2]glob

glob(field: string, value: string): DataAbilityPredicates

 配置谓词以匹配数据类型为string的指定字段。与like方法不同，该方法的输入参数区分大小写。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。  value string 是 指示要与谓词匹配的值。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.glob("NAME", "?h*g")

// 仅可匹配到"name"字段值为“Lisa”
dataAbilityPredicates.glob("NAME", "Lisa")

// 仅可以匹配到"name"字段值为“lisa”
dataAbilityPredicates.glob("NAME", "lisa")
```
   #### [h2]between

between(field: string, low: ValueType, high: ValueType): DataAbilityPredicates

 配置谓词以匹配数据类型为ValueType且value在指定范围内的指定字段。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。  low [ValueType](#valuetype) 是 指示与谓词匹配的最小值。  high [ValueType](#valuetype) 是 指示与谓词匹配的最大值。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.between("AGE", 10, 50)
```
   #### [h2]notBetween

notBetween(field: string, low: ValueType, high: ValueType): DataAbilityPredicates

 配置谓词以匹配数据类型为ValueType且value超出给定范围的指定字段。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。  low [ValueType](#valuetype) 是 指示与谓词匹配的最小值。  high [ValueType](#valuetype) 是 指示与谓词匹配的最大值。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.notBetween("AGE", 10, 50)
```
   #### [h2]greaterThan

greaterThan(field: string, value: ValueType): DataAbilityPredicates

 配置谓词以匹配数据类型为ValueType且值大于指定值的字段。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。  value [ValueType](#valuetype) 是 指示要与谓词匹配的值。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.greaterThan("AGE", 18)
```
   #### [h2]lessThan

lessThan(field: string, value: ValueType): DataAbilityPredicates

 配置谓词以匹配数据类型为valueType且value小于指定值的字段。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。  value [ValueType](#valuetype) 是 指示要与谓词匹配的值。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.lessThan("AGE", 20)
```
   #### [h2]greaterThanOrEqualTo

greaterThanOrEqualTo(field: string, value: ValueType): DataAbilityPredicates

 配置谓词以匹配数据类型为ValueType且value大于或等于指定值的字段。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。  value [ValueType](#valuetype) 是 指示要与谓词匹配的值。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.greaterThanOrEqualTo("AGE", 18)
```
   #### [h2]lessThanOrEqualTo

lessThanOrEqualTo(field: string, value: ValueType): DataAbilityPredicates

 配置谓词以匹配数据类型为ValueType且value小于或等于指定值的字段。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。  value [ValueType](#valuetype) 是 指示要与谓词匹配的值。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.lessThanOrEqualTo("AGE", 20)
```
   #### [h2]orderByAsc

orderByAsc(field: string): DataAbilityPredicates

 配置谓词以匹配其值按升序排序的列。当有多个orderByAsc使用时，最先使用的具有最高优先级。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
// 先按“name”字段排序，相同时按“AGE”字段排序，其次按“SALARY”排序
dataAbilityPredicates.orderByAsc("NAME").orderByAsc("AGE").orderByAsc("SALARY")
```
   #### [h2]orderByDesc

orderByDesc(field: string): DataAbilityPredicates

 配置谓词以匹配其值按降序排序的列。当有多个orderByDesc使用时，最先使用的具有最高优先级。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
// 优先按“AGE”排序，相同时按“SALARY”排序
dataAbilityPredicates.orderByDesc("AGE").orderByDesc("SALARY")
```
   #### [h2]distinct

distinct(): DataAbilityPredicates

 配置谓词以过滤重复记录并仅保留其中一个。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回可用于过滤重复记录的谓词。     **示例：**

 ```
dataAbilityPredicates.equalTo("NAME", "Rose").distinct()
```
   #### [h2]limitAs

limitAs(value: number): DataAbilityPredicates

 设置谓词的最大数据记录数量。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   value number 是 最大数据记录数，取值为正整数。传入值小于等于0时，不会限制记录数量。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回可用于设置最大数据记录数的谓词。     **示例：**

 ```
dataAbilityPredicates.equalTo("NAME", "Rose").limitAs(3)
```
   #### [h2]offsetAs

offsetAs(rowOffset: number): DataAbilityPredicates

 设置谓词查询结果的起始位置。需要同步调用limitAs接口指定查询数量，否则无查询结果。查询指定偏移位置后的所有行时，limitAs接口需传入参数-1。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   rowOffset number 是 返回结果的起始位置，取值为正整数。传入值小于等于0时，查询结果将从第一个元素位置返回。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回具有指定返回结果起始位置的谓词。     **示例：**

 ```
// 跳过前三条数据，显示后续三条数据
dataAbilityPredicates.equalTo("NAME", "Rose").offsetAs(3).limitAs(3)
```
   #### [h2]groupBy

groupBy(fields: Array<string>): DataAbilityPredicates

 配置谓词按指定列分组查询结果。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   fields Array<string> 是 指定分组依赖的列名。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回分组查询列的谓词。     **示例：**

 ```
dataAbilityPredicates.groupBy(["AGE", "NAME"])
```
   #### [h2]indexedBy

indexedBy(field: string): DataAbilityPredicates

 配置谓词以指定索引列。在使用此方法之前，您需要创建一个索引列。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 创建的索引列名称。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回具有指定索引列的谓词。     **示例：**

 ```
import { UIAbility } from '@kit.AbilityKit';
import { dataAbility, relationalStore } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  async onCreate(): Promise<void> {
    let store: relationalStore.RdbStore | undefined = undefined;
    let context = this.context;

    try {
      const STORE_CONFIG: relationalStore.StoreConfig = {
        name: 'RdbTest.db', // 数据库文件名
        securityLevel: relationalStore.SecurityLevel.S3,
      };
      // 表结构：EMPLOYEE (NAME, AGE, SALARY, CODES)
      const SQL_CREATE_TABLE =
        'CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, AGE INTEGER, SALARY REAL, CODES BLOB)'; // 建表Sql语句
      store = await relationalStore.getRdbStore(context, STORE_CONFIG);
      console.info('Succeeded in getting RdbStore.');
      await store.executeSql(SQL_CREATE_TABLE); // 创建数据表
    } catch (e) {
      const err = e as BusinessError;
      console.error(`Failed to get RdbStore. Code:${err.code}, message:${err.message}`);
    }

    if (!store) {
      return;
    }

    // 创建索引
    const SQL_CREATE_INDEX = 'CREATE INDEX SALARY_INDEX ON EMPLOYEE(SALARY)'
    await store.executeSql(SQL_CREATE_INDEX);
    // ...

    let dataAbilityPredicates = new dataAbility.DataAbilityPredicates()
    dataAbilityPredicates.indexedBy("SALARY_INDEX")

    //  ...
  }
}
```
   #### [h2]in

in(field: string, value: Array<ValueType>): DataAbilityPredicates

 配置谓词以匹配数据类型为ValueType数组且值在给定范围内的指定字段。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。  value Array<[ValueType](#valuetype)> 是 以ValueType类型数组形式指定的要匹配的值。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.in("AGE", [18, 20])
```
   #### [h2]notIn

notIn(field: string, value: Array<ValueType>): DataAbilityPredicates

 配置谓词以匹配数据类型为ValueType数组且值不在给定范围内的指定字段。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

 **参数：**

  参数名 类型 必填 说明   field string 是 数据库表中的列名。  value Array<[ValueType](#valuetype)> 是 以ValueType类型数组形式指定的要匹配的值。     **返回值：**

  类型 说明   [DataAbilityPredicates](#dataabilitypredicates) 返回与指定字段匹配的谓词。     **示例：**

 ```
dataAbilityPredicates.notIn("NAME", ["Lisa", "Rose"])
```
   #### ValueType

type ValueType = number | string | boolean

 用于表示允许的数据字段类型。

 **系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

  类型 说明   number 表示值类型为数字。  string 表示值类型为字符。  boolean 表示值类型为布尔值。

---
*Updated: 2026-04-22 06:42:13*
