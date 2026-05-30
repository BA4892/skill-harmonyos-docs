# Class (ArrayBuffer)

> **分区**: API参考  |  **Slug**: `arkts-apis-arkts-collections-arraybuffer`  |  **DocID**: `f9421dd5cda047fd9b6e52d8327354f9`

---

# Class (ArrayBuffer)

       ArkTS TypedArray（[Int8Array](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-collections-int8array)、[Uint8Array](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-collections-uint8array)、[Int16Array](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-collections-int16array)、[Uint16Array](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-collections-uint16array)、[Int32Array](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-collections-int32array)、[Uint32Array](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-collections-uint32array)、[Uint8ClampedArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-collections-uint8clampedarray)、[Float32Array](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-collections-float32array)）的底层数据结构。

                     本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

      此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。

             **装饰器类型：**@Sendable

              #### 导入模块

     ```
import { collections } from '@kit.ArkTS';
```
                  #### 属性

     **系统能力：** SystemCapability.Utils.Lang

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

                                   名称         类型         只读         可选         说明                                       byteLength         number         是         否         buffer所占的字节数。                                            #### constructor

     constructor(byteLength: number)

     构造函数，用于创建一个指定长度的ArkTS ArrayBuffer对象。

     **系统能力：** SystemCapability.Utils.Lang

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **参数：**

                                   参数名         类型         必填         说明                                       byteLength         number         是         buffer所占的字节数，取值范围是[0, 2147483647]，否则会抛出异常。0代表构造的ArrayBuffer的长度为0，2147483647表示构造的ArrayBuffer的长度为2147483647。                               **错误码：**

     以下错误码详细介绍请参考[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[语言基础类库错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-utils)。

                                   错误码ID         错误信息                                       401         Parameter error.                         10200012         The ArrayBuffer's constructor cannot be directly invoked.                               **示例：**

     ```
let arrayBuffer: collections.ArrayBuffer = new collections.ArrayBuffer(10);
console.info("byteLength: " + arrayBuffer.byteLength); // byteLength: 10
```
                  #### slice

     slice(begin: number, end?: number): ArrayBuffer

     返回一个新的ArkTS ArrayBuffer对象，其包含原ArkTS ArrayBuffer指定范围的内容。

     **系统能力：** SystemCapability.Utils.Lang

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **参数：**

                                   参数名         类型         必填         说明                                       begin         number         是         开始索引，如果begin < 0，则会从begin + arrayBuffer.byteLength位置开始。                         end         number         否         结束索引（不包括该元素），如果end < 0，则会到end + arrayBuffer.byteLength位置结束。默认为原ArkTS ArrayBuffer的长度。                               **返回值：**

                                   类型         说明                                       ArrayBuffer         新的ArkTS ArrayBuffer对象。                               **错误码：**

     以下错误码详细介绍请参考[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[语言基础类库错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-utils)。

                                   错误码ID         错误信息                                       401         Parameter error.                         10200011         The slice method cannot be bound.                         10200201         Concurrent modification error.                               **示例：**

     ```
let arrayBuffer: collections.ArrayBuffer = new collections.ArrayBuffer(10);
let slicedBuffer: collections.ArrayBuffer = arrayBuffer.slice(0, 4);
console.info("byteLength: " + slicedBuffer.byteLength); // byteLength: 4
```

---
*Updated: 2026-04-22 06:43:44*
