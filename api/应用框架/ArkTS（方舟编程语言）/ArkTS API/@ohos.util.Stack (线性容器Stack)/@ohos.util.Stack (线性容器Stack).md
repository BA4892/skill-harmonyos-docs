# @ohos.util.Stack (线性容器Stack)

> **分区**: API参考  |  **Slug**: `js-apis-stack`  |  **DocID**: `e1652c9c70cf4a24b077a3f0510ddeb1`

---

# @ohos.util.Stack (线性容器Stack)

       Stack基于数组的数据结构实现，特点是先进后出，只能在一端进行数据的插入和删除。

    Stack和[Queue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-queue)相比，Queue基于循环队列实现，在尾部增加元素在头部删除元素；而Stack只在一端进行操作。

    **推荐使用场景：** 一般符合先进后出的场景可以使用Stack。

    文档中使用了泛型，涉及以下泛型标记符：

    
     - T：Type，类
    
                     本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

      容器类使用静态语言实现，限制了存储位置和属性，不支持自定义属性和方法。

                       #### 导入模块

     ```
import { Stack } from '@kit.ArkTS';
```
                  #### Stack

                  #### [h2]属性

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Utils.Lang

                                   名称         类型         只读         可选         说明                                       length         number         是         否         Stack的元素个数。                                            #### [h2]constructor

     constructor()

     Stack的构造函数。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Utils.Lang

     **错误码：**

     以下错误码的详细介绍请参见[语言基础类库错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-utils)。

                                   错误码ID         错误信息                                       10200012         The Stack's constructor cannot be directly invoked.                               **示例：**

     ```
let stack = new Stack<number | string | Object>();
```
                  #### [h2]push

     push(item: T): T

     在栈顶插入元素，并返回该元素。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Utils.Lang

     **参数：**

                                   参数名         类型         必填         说明                                       item         T         是         添加进去的元素。                               **返回值：**

                                   类型         说明                                       T         返回被添加进去的元素。                               **错误码：**

     以下错误码的详细介绍请参见[语言基础类库错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-utils)。

                                   错误码ID         错误信息                                       10200011         The push method cannot be bound.                               **示例：**

     ```
class C1 {
  name: string = ""
  age: string = ""
}
let stack = new Stack<number | string | C1>();
let result = stack.push("a");
let result1 = stack.push(1);
let c : C1  = {name : "Dylan", age : "13"};
let result2 = stack.push(c);
console.info("length:", stack.length);  // length: 3
```
                  #### [h2]pop

     pop(): T

     删除栈顶元素并返回，栈为空时返回undefined。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Utils.Lang

     **返回值：**

                                   类型         说明                                       T         返回栈顶元素，栈为空时返回undefined。                               **错误码：**

     以下错误码的详细介绍请参见[语言基础类库错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-utils)。

                                   错误码ID         错误信息                                       10200011         The pop method cannot be bound.                               **示例：**

     ```
let stack = new Stack<number>();
stack.push(2);
stack.push(4);
stack.push(5);
stack.push(2);
stack.push(4);
let result = stack.pop();
console.info("result = " + result); // result = 4
```
                  #### [h2]peek

     peek(): T

     返回栈顶元素，栈为空时返回undefined。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Utils.Lang

     **返回值：**

                                   类型         说明                                       T         返回栈顶元素，栈为空时返回undefined。                               **错误码：**

     以下错误码的详细介绍请参见[语言基础类库错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-utils)。

                                   错误码ID         错误信息                                       10200011         The peek method cannot be bound.                               **示例：**

     ```
let stack = new Stack<number>();
stack.push(2);
stack.push(4);
stack.push(5);
stack.push(2);
let result = stack.peek();
console.info("result:", result);  // result: 2
```
                  #### [h2]locate

     locate(element: T): number

     查找指定元素首次出现的下标值，查找失败则返回-1。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Utils.Lang

     **参数：**

                                   参数名         类型         必填         说明                                       element         T         是         指定元素。                               **返回值：**

                                   类型         说明                                       number         对应元素下标值，查找失败则返回-1。                               **错误码：**

     以下错误码的详细介绍请参见[语言基础类库错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-utils)。

                                   错误码ID         错误信息                                       10200011         The locate method cannot be bound.                               **示例：**

     ```
let stack = new Stack<number>();
stack.push(2);
stack.push(4);
stack.push(5);
stack.push(2);
let result = stack.locate(5);
console.info("result:", result);  // result: 2
```
                  #### [h2]forEach

     forEach(callbackFn: (value: T, index?: number, stack?: Stack<T>) => void, thisArg?: Object): void

     在遍历Stack实例对象中每一个元素的过程中，对每个元素执行回调函数。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Utils.Lang

     **参数：**

                                   参数名         类型         必填         说明                                       callbackFn         function         是         回调函数。                         thisArg         Object         否         callbackFn被调用时用作this值，默认值为当前实例对象。                               callbackFn的参数说明：

                                   参数名         类型         必填         说明                                       value         T         是         当前遍历到的元素。                         index         number         否         当前遍历到的下标值，默认值为0。                         stack         Stack<T>         否         当前调用forEach方法的实例对象，默认值为当前实例对象。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[语言基础类库错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-utils)。

                                   错误码ID         错误信息                                       401         Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.                         10200011         The forEach method cannot be bound.                               **示例：**

     ```
let stack = new Stack<number>();
stack.push(2);
stack.push(4);
stack.push(5);
stack.push(4);
stack.forEach((value : number, index: number) :void => {
  console.info("value:" + value, "index:" + index);
});
// value:2 index:0
// value:4 index:1
// value:5 index:2
// value:4 index:3
```
                  #### [h2]isEmpty

     isEmpty(): boolean

     判断栈是否为空。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Utils.Lang

     **返回值：**

                                   类型         说明                                       boolean         为空返回true，不为空返回false。                               **错误码：**

     以下错误码的详细介绍请参见[语言基础类库错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-utils)。

                                   错误码ID         错误信息                                       10200011         The isEmpty method cannot be bound.                               **示例：**

     ```
let stack = new Stack<number>();
stack.push(2);
stack.push(4);
stack.push(5);
stack.push(4);
let result = stack.isEmpty();
console.info("result:", result);  // result: false
```
                  #### [h2][Symbol.iterator]

     [Symbol.iterator](): IterableIterator<T>

     返回一个迭代器，迭代器的每一项都是一个JavaScript对象。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Utils.Lang

     **返回值：**

                                   类型         说明                                       IterableIterator<T>         返回一个迭代器。                               **错误码：**

     以下错误码的详细介绍请参见[语言基础类库错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-utils)。

                                   错误码ID         错误信息                                       10200011         The Symbol.iterator method cannot be bound.                               **示例：**

     ```
let stack = new Stack<number>();
stack.push(2);
stack.push(4);
stack.push(5);
stack.push(4);

// 使用方法一：
for (let value of stack) {
  console.info("value:", value);
}
// value: 2
// value: 4
// value: 5
// value: 4

// 使用方法二：
let iter = stack[Symbol.iterator]();
let temp: IteratorResult<number> = iter.next().value;
while(temp != undefined) {
  console.info("value: " + temp);
  temp = iter.next().value;
}
// value: 2
// value: 4
// value: 5
// value: 4
```

---
*Updated: 2026-04-22 06:42:39*
