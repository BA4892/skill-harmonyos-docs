# @ohos.rpc (RPC通信)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-rpc`

**DocID**: `0ce7ddaebe9d47fa94f255610f5f1702`

**NodeID**: `000201775796216196269a5f2ac5e046`

---

@ohos.rpc (RPC通信)

本模块提供进程间通信能力，包括设备内的进程间通信（IPC）和设备间的进程间通信（RPC），前者基于Binder驱动，后者基于软总线驱动。

本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块从API version 9开始支持异常返回功能。

导入模块

import { rpc } from '@kit.IPCKit';

ErrorCode
9+

从API version 9起，IPC支持异常返回功能。错误码对应数值及含义如下。

系统能力：
 SystemCapability.Communication.IPC.Core

名称

值

说明

CHECK_PARAM_ERROR

401

检查参数失败。

OS_MMAP_ERROR

1900001

执行系统调用mmap失败。

OS_IOCTL_ERROR

1900002

在共享内存文件描述符上执行系统调用ioctl失败。

WRITE_TO_ASHMEM_ERROR

1900003

向共享内存写数据失败。

READ_FROM_ASHMEM_ERROR

1900004

从共享内存读数据失败。

ONLY_PROXY_OBJECT_PERMITTED_ERROR

1900005

只有proxy对象允许该操作。

ONLY_REMOTE_OBJECT_PERMITTED_ERROR

1900006

只有remote对象允许该操作。

COMMUNICATION_ERROR

1900007

和远端对象进行进程间通信失败。

PROXY_OR_REMOTE_OBJECT_INVALID_ERROR

1900008

非法的代理对象或者远端对象。

WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR

1900009

向MessageSequence写数据失败。

READ_DATA_FROM_MESSAGE_SEQUENCE_ERROR

1900010

读取MessageSequence数据失败。

PARCEL_MEMORY_ALLOC_ERROR

1900011

序列化过程中内存分配失败。

CALL_JS_METHOD_ERROR

1900012

执行JS回调方法失败。

OS_DUP_ERROR

1900013

执行系统调用dup失败。

TypeCode
12+

从API version 12起，IPC新增
writeArrayBuffer
和
readArrayBuffer
方法传递ArrayBuffer数据，传递数据时通过具体类型值来分辨业务是以哪一种TypedArray去进行数据的读写。类型码对应数值及含义如下。

系统能力：
 SystemCapability.Communication.IPC.Core

名称

值

说明

INT8_ARRAY

0

TypedArray类型为INT8_ARRAY。

UINT8_ARRAY

1

TypedArray类型为UINT8_ARRAY。

INT16_ARRAY

2

TypedArray类型为INT16_ARRAY。

UINT16_ARRAY

3

TypedArray类型为UINT16_ARRAY。

INT32_ARRAY

4

TypedArray类型为INT32_ARRAY。

UINT32_ARRAY

5

TypedArray类型为UINT32_ARRAY。

FLOAT32_ARRAY

6

TypedArray类型为FLOAT32_ARRAY。

FLOAT64_ARRAY

7

TypedArray类型为FLOAT64_ARRAY。

BIGINT64_ARRAY

8

TypedArray类型为BIGINT64_ARRAY。

BIGUINT64_ARRAY

9

TypedArray类型为BIGUINT64_ARRAY。

MessageSequence
9+

在RPC或IPC过程中，发送方可以使用MessageSequence提供的写方法，将待发送的数据以特定格式写入该对象。接收方可以使用MessageSequence提供的读方法从该对象中读取特定格式的数据。数据格式包括：基础类型及数组、IPC对象、接口描述符和自定义序列化对象。

[h2]create
9+

static create(): MessageSequence

静态方法，创建MessageSequence对象。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

MessageSequence

返回创建的MessageSequence对象。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 hilog.info(0x0000, 'testTag', 'data is ' + data);

 // 当MessageSequence对象不再使用，由业务主动调用reclaim方法去释放资源。
 data.reclaim();
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]reclaim
9+

reclaim(): void

释放不再使用的MessageSequence对象。

系统能力：
 SystemCapability.Communication.IPC.Core

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let reply = rpc.MessageSequence.create();
 reply.reclaim();
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeRemoteObject
9+

writeRemoteObject(obj: IRemoteObject): void

序列化远程对象并将其写入
MessageSequence
对象。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

obj

IRemoteObject

是

要序列化并写入MessageSequence的远程对象。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900008

The proxy or remote object is invalid.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}

try {
 let data = rpc.MessageSequence.create();
 let testRemoteObject = new TestRemoteObject("testObject");
 data.writeRemoteObject(testRemoteObject);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readRemoteObject
9+

readRemoteObject(): IRemoteObject

从MessageSequence读取远程对象。此方法用于反序列化MessageSequence对象以生成IRemoteObject。远程对象按写入MessageSequence的顺序读取。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

IRemoteObject

读取到的远程对象。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900008

The proxy or remote object is invalid.

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}

try {
 let data = rpc.MessageSequence.create();
 let testRemoteObject = new TestRemoteObject("testObject");
 data.writeRemoteObject(testRemoteObject);
 let proxy = data.readRemoteObject();
 hilog.info(0x0000, 'testTag', 'readRemoteObject is ' + proxy);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeInterfaceToken
9+

writeInterfaceToken(token: string): void

将接口描述符写入MessageSequence对象，远端对象可使用该信息校验本次通信。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

token

string

是

字符串类型描述符，其长度应小于40960字节。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.The string length is greater than or equal to 40960 bytes;

4.The number of bytes copied to the buffer is different from the length of the obtained string.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeInterfaceToken("aaa");
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readInterfaceToken
9+

readInterfaceToken(): string

从MessageSequence对象中读取接口描述符，接口描述符按写入MessageSequence的顺序读取，本地对象可使用该信息检验本次通信。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

string

返回读取到的接口描述符。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeInterfaceToken("aaa");
 let interfaceToken = data.readInterfaceToken();
 hilog.info(0x0000, 'testTag', 'RpcServer: interfaceToken is ' + interfaceToken);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]getSize
9+

getSize(): number

获取当前创建的MessageSequence对象的数据大小。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

获取的MessageSequence实例的数据大小。以字节为单位。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 let size = data.getSize();
 hilog.info(0x0000, 'testTag', 'size is ' + size);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]getCapacity
9+

getCapacity(): number

获取当前MessageSequence对象的容量大小。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

获取的MessageSequence实例的容量大小。以字节为单位。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 let result = data.getCapacity();
 hilog.info(0x0000, 'testTag', 'capacity is ' + result);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]setSize
9+

setSize(size: number): void

设置MessageSequence对象中包含的数据大小。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

size

number

是

MessageSequence实例的数据大小。以字节为单位。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeString('Hello World');
 data.setSize(16);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]setCapacity
9+

setCapacity(size: number): void

设置MessageSequence对象的存储容量。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

size

number

是

MessageSequence实例的存储容量。以字节为单位。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900009

Failed to write data to the message sequence.

1900011

Memory allocation failed.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.setCapacity(100);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]getWritableBytes
9+

getWritableBytes(): number

获取MessageSequence的可写字节空间大小。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

获取到的MessageSequence实例的可写字节空间。以字节为单位。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.setCapacity(100);
 let getWritableBytes = data.getWritableBytes();
 hilog.info(0x0000, 'testTag', 'RpcServer: getWritableBytes is ' + getWritableBytes);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]getReadableBytes
9+

getReadableBytes(): number

获取MessageSequence的可读字节空间。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

获取到的MessageSequence实例的可读字节空间。以字节为单位。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeString("hello world");
 let result = data.getReadableBytes();
 hilog.info(0x0000, 'testTag', 'RpcServer: getReadableBytes is ' + result);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]getReadPosition
9+

getReadPosition(): number

获取MessageSequence的读位置。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回MessageSequence实例中的当前读取位置。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeString("hello world");
 let readPos = data.getReadPosition();
 hilog.info(0x0000, 'testTag', 'readPos is ' + readPos);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]getWritePosition
9+

getWritePosition(): number

获取MessageSequence的写位置。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回MessageSequence实例中的当前写入位置。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeInt(10);
 let bwPos = data.getWritePosition();
 hilog.info(0x0000, 'testTag', 'bwPos is ' + bwPos);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]rewindRead
9+

rewindRead(pos: number): void

重新偏移读取位置到指定的位置。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

pos

number

是

开始读取数据的目标位置。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeInt(12);
 data.writeString("sequence");
 let number = data.readInt();
 hilog.info(0x0000, 'testTag', 'number is ' + number);
 data.rewindRead(0);
 let number2 = data.readInt();
 hilog.info(0x0000, 'testTag', 'rewindRead is ' + number2);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]rewindWrite
9+

rewindWrite(pos: number): void

重新偏移写位置到指定的位置。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

pos

number

是

开始写入数据的目标位置。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeInt(4);
 data.rewindWrite(0);
 data.writeInt(5);
 let number = data.readInt();
 hilog.info(0x0000, 'testTag', 'rewindWrite is: ' + number);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeByte
9+

writeByte(val: number): void

将字节值写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

number

是

要写入的字节值。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeByte(2);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readByte
9+

readByte(): number

从MessageSequence实例中读取字节值。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回字节值。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeByte(2);
 let ret = data.readByte();
 hilog.info(0x0000, 'testTag', 'readByte is: ' + ret);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeShort
9+

writeShort(val: number): void

将短整数值写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

number

是

要写入的短整数值。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeShort(8);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readShort
9+

readShort(): number

从MessageSequence实例中读取短整数值。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回短整数值。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeShort(8);
 let ret = data.readShort();
 hilog.info(0x0000, 'testTag', 'readShort is ' + ret);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeInt
9+

writeInt(val: number): void

将整数值写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

number

是

要写入的整数值。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeInt(10);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readInt
9+

readInt(): number

从MessageSequence实例中读取整数值。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回整数值。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeInt(10);
 let ret = data.readInt();
 hilog.info(0x0000, 'testTag', 'readInt is ' + ret);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeLong
9+

writeLong(val: number): void

将长整数值写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

number

是

要写入的长整数值。

错误码：

以下错���码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeLong(10000);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readLong
9+

readLong(): number

从MessageSequence实例中读取长整数值。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回长整数值。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeLong(10000);
 let ret = data.readLong();
 hilog.info(0x0000, 'testTag', 'readLong is ' + ret);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeFloat
9+

writeFloat(val: number): void

将双精度浮点值写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

number

是

要写入的双精度浮点值。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeFloat(1.2);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readFloat
9+

readFloat(): number

从MessageSequence实例中读取双精度浮点值。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回双精度浮点值。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeFloat(1.2);
 let ret = data.readFloat();
 hilog.info(0x0000, 'testTag', 'readFloat is ' + ret);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeDouble
9+

writeDouble(val: number): void

将双精度浮点值写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

number

是

要写入的双精度浮点值。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeDouble(10.2);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readDouble
9+

readDouble(): number

从MessageSequence实例中读取双精度浮点值。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回双精度浮点值。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeDouble(10.2);
 let ret = data.readDouble();
 hilog.info(0x0000, 'testTag', 'readDouble is ' + ret);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeBoolean
9+

writeBoolean(val: boolean): void

将布尔值写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

boolean

是

要写入的布尔值。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeBoolean(false);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readBoolean
9+

readBoolean(): boolean

从MessageSequence实例中读取布尔值。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

boolean

返回读取到的布尔值。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeBoolean(false);
 let ret = data.readBoolean();
 hilog.info(0x0000, 'testTag', 'readBoolean is ' + ret);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeChar
9+

writeChar(val: number): void

将单个字符值写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

number

是

要写入的单个字符值。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeChar(97);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readChar
9+

readChar(): number

从MessageSequence实例中读取单个字符值。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回单个字符值。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeChar(97);
 let ret = data.readChar();
 hilog.info(0x0000, 'testTag', 'readChar is ' + ret);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeString
9+

writeString(val: string): void

将字符串值写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

string

是

要写入的字符串值，其长度应小于40960字节。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.The string length is greater than or equal to 40960 bytes;

4.The number of bytes copied to the buffer is different from the length of the obtained string.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeString('abc');
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readString
9+

readString(): string

从MessageSequence实例中读取字符串值。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

string

返回字符串值。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeString('abc');
 let ret = data.readString();
 hilog.info(0x0000, 'testTag', 'readString is ' + ret);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeParcelable
9+

writeParcelable(val: Parcelable): void

将自定义序列化对象写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

Parcelable

是

要写入的可序列对象。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class MyParcelable implements rpc.Parcelable {
 num: number = 0;
 str: string = '';
 constructor( num: number, str: string) {
 this.num = num;
 this.str = str;
 }
 marshalling(messageSequence: rpc.MessageSequence): boolean {
 messageSequence.writeInt(this.num);
 messageSequence.writeString(this.str);
 return true;
 }
 unmarshalling(messageSequence: rpc.MessageSequence): boolean {
 this.num = messageSequence.readInt();
 this.str = messageSequence.readString();
 return true;
 }
}

try {
 let parcelable = new MyParcelable(1, "aaa");
 let data = rpc.MessageSequence.create();
 data.writeParcelable(parcelable);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readParcelable
9+

readParcelable(dataIn: Parcelable): void

从MessageSequence实例中读取成员变量到指定的对象（dataIn）。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

Parcelable

是

需要从MessageSequence读取成员变量的对象。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect.

1900010

Failed to read data from the message sequence.

1900012

Failed to call the JS callback function.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class MyParcelable implements rpc.Parcelable {
 num: number = 0;
 str: string = '';
 constructor( num: number, str: string) {
 this.num = num;
 this.str = str;
 }
 marshalling(messageSequence: rpc.MessageSequence): boolean {
 messageSequence.writeInt(this.num);
 messageSequence.writeString(this.str);
 return true;
 }
 unmarshalling(messageSequence: rpc.MessageSequence): boolean {
 this.num = messageSequence.readInt();
 this.str = messageSequence.readString();
 return true;
 }
}

try {
 let parcelable = new MyParcelable(1, "aaa");
 let data = rpc.MessageSequence.create();
 data.writeParcelable(parcelable);
 let ret = new MyParcelable(0, "");
 data.readParcelable(ret);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeByteArray
9+

writeByteArray(byteArray: number[]): void

将字节数组写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

byteArray

number[]

是

要写入的字节数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match;

4.The element does not exist in the array.

5.The type of the element in the array is incorrect.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 let ByteArrayVar = [1, 2, 3, 4, 5];
 data.writeByteArray(ByteArrayVar);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readByteArray
9+

readByteArray(dataIn: number[]): void

从MessageSequence实例中读取字节数组，并将其写入到创建的空数组中。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

number[]

是

要读取的字节数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match.

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 let ByteArrayVar = [1, 2, 3, 4, 5];
 data.writeByteArray(ByteArrayVar);
 let array: Array<number> = new Array(5);
 data.readByteArray(array);
 hilog.info(0x0000, 'testTag', 'readByteArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readByteArray
9+

readByteArray(): number[]

从MessageSequence实例中读取字节数组。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number[]

返回字节数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 let ByteArrayVar = [1, 2, 3, 4, 5];
 data.writeByteArray(ByteArrayVar);
 let array = data.readByteArray();
 hilog.info(0x0000, 'testTag', 'readByteArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeShortArray
9+

writeShortArray(shortArray: number[]): void

将短整数数组写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

shortArray

number[]

是

要写入的短整数数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match;

4.The element does not exist in the array;

5.The type of the element in the array is incorrect.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeShortArray([11, 12, 13]);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readShortArray
9+

readShortArray(dataIn: number[]): void

从MessageSequence实例中读取短整数数组，并将其写入到创建的空数组中。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

number[]

是

要读取的短整数数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match.

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeShortArray([11, 12, 13]);
 let array: Array<number> = new Array(3);
 data.readShortArray(array);
 hilog.info(0x0000, 'testTag', 'readShortArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readShortArray
9+

readShortArray(): number[]

从MessageSequence实例中读取短整数数组。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number[]

返回短整数数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeShortArray([11, 12, 13]);
 let array = data.readShortArray();
 hilog.info(0x0000, 'testTag', 'readShortArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeIntArray
9+

writeIntArray(intArray: number[]): void

将整数数组写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

intArray

number[]

是

要写入的整数数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match;

4.The element does not exist in the array;

5.The type of the element in the array is incorrect.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeIntArray([100, 111, 112]);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readIntArray
9+

readIntArray(dataIn: number[]): void

从MessageSequence实例中读取整数数组，并将其写入到创建的空数组中。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

number[]

是

要读取的整数数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match.

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeIntArray([100, 111, 112]);
 let array: Array<number> = new Array(3);
 data.readIntArray(array);
 hilog.info(0x0000, 'testTag', 'readIntArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readIntArray
9+

readIntArray(): number[]

从MessageSequence实例中读取整数数组。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number[]

返回整数数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeIntArray([100, 111, 112]);
 let array = data.readIntArray();
 hilog.info(0x0000, 'testTag', 'readIntArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeLongArray
9+

writeLongArray(longArray: number[]): void

将长整数数组写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

longArray

number[]

是

要写入的长整数数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match;

4.The element does not exist in the array;

5.The type of the element in the array is incorrect.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeLongArray([1111, 1112, 1113]);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readLongArray
9+

readLongArray(dataIn: number[]): void

从MessageSequence实例中读取的长整数数组，并将其写入到创建的空数组中。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

number[]

是

要读取的长整数数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match.

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeLongArray([1111, 1112, 1113]);
 let array: Array<number> = new Array(3);
 data.readLongArray(array);
 hilog.info(0x0000, 'testTag', 'readLongArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readLongArray
9+

readLongArray(): number[]

从MessageSequence实例中读取所有的长整数数组。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number[]

返回长整数数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeLongArray([1111, 1112, 1113]);
 let array = data.readLongArray();
 hilog.info(0x0000, 'testTag', 'readLongArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeFloatArray
9+

writeFloatArray(floatArray: number[]): void

将双精度浮点数组写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

floatArray

number[]

是

要写入的双精度浮点数组。由于系统内部对float类型的数据是按照double处理的，使用时对于数组所占的总字节数应按照double类型来计算。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match;

4.The element does not exist in the array;

5.The type of the element in the array is incorrect.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeFloatArray([1.2, 1.3, 1.4]);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readFloatArray
9+

readFloatArray(dataIn: number[]): void

从MessageSequence实例中读取双精度浮点数组，并将其写入到创建的空数组中。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

number[]

是

要读取的双精度浮点数组。由于系统内部对float类型的数据是按照double处理的，使用时对于数组所占的总字节数应按照double类型来计算。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match.

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeFloatArray([1.2, 1.3, 1.4]);
 let array: Array<number> = new Array(3);
 data.readFloatArray(array);
 hilog.info(0x0000, 'testTag', 'readFloatArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readFloatArray
9+

readFloatArray(): number[]

从MessageSequence实例中读取双精度浮点数组。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number[]

返回双精度浮点数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeFloatArray([1.2, 1.3, 1.4]);
 let array = data.readFloatArray();
 hilog.info(0x0000, 'testTag', 'readFloatArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeDoubleArray
9+

writeDoubleArray(doubleArray: number[]): void

将双精度浮点数组写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

doubleArray

number[]

是

要写入的双精度浮点数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match;

4.The element does not exist in the array;

5.The type of the element in the array is incorrect.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeDoubleArray([11.1, 12.2, 13.3]);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readDoubleArray
9+

readDoubleArray(dataIn: number[]): void

从MessageSequence实例中读取双精度浮点数组，并将其写入到创建的空数组中。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

number[]

是

要读取的双精度浮点数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match.

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeDoubleArray([11.1, 12.2, 13.3]);
 let array: Array<number> = new Array(3);
 data.readDoubleArray(array);
 hilog.info(0x0000, 'testTag', 'readDoubleArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readDoubleArray
9+

readDoubleArray(): number[]

从MessageSequence实例中读取所有双精度浮点数组。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number[]

返回双精度浮点数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeDoubleArray([11.1, 12.2, 13.3]);
 let array = data.readDoubleArray();
 hilog.info(0x0000, 'testTag', 'readDoubleArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeBooleanArray
9+

writeBooleanArray(booleanArray: boolean[]): void

将布尔数组写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

booleanArray

boolean[]

是

要写入的布尔数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match;

4.The element does not exist in the array.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeBooleanArray([false, true, false]);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readBooleanArray
9+

readBooleanArray(dataIn: boolean[]): void

从MessageSequence实例中读取布尔数组，并将其写入到创建的空数组中。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

boolean[]

是

要读取的布尔数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match.

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeBooleanArray([false, true, false]);
 let array: Array<boolean> = new Array(3);
 data.readBooleanArray(array);
 hilog.info(0x0000, 'testTag', 'readBooleanArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readBooleanArray
9+

readBooleanArray(): boolean[]

从MessageSequence实例中读取所有布尔数组。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

boolean[]

返回布尔数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeBooleanArray([false, true, false]);
 let array = data.readBooleanArray();
 hilog.info(0x0000, 'testTag', 'readBooleanArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeCharArray
9+

writeCharArray(charArray: number[]): void

将单个字符数组写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

charArray

number[]

是

要写入的单个字符数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match;

4.The element does not exist in the array.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeCharArray([97, 98, 88]);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readCharArray
9+

readCharArray(dataIn: number[]): void

从MessageSequence实例中读取单个字符数组，并将其写入到创建的空数组中。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

number[]

是

要读取的单个字符数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match.

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeCharArray([97, 98, 88]);
 let array: Array<number> = new Array(3);
 data.readCharArray(array);
 hilog.info(0x0000, 'testTag', 'readCharArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readCharArray
9+

readCharArray(): number[]

从MessageSequence实例中读取单个字符数组。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number[]

返回单个字符数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeCharArray([97, 98, 88]);
 let array = data.readCharArray();
 hilog.info(0x0000, 'testTag', 'readCharArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeStringArray
9+

writeStringArray(stringArray: string[]): void

将字符串数组写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

stringArray

string[]

是

要写入的字符串数组，数组单个元素的长度应小于40960字节。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match;

4.The string length is greater than or equal to 40960 bytes;

5.The number of bytes copied to the buffer is different from the length of the obtained string.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeStringArray(["abc", "def"]);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readStringArray
9+

readStringArray(dataIn: string[]): void

从MessageSequence实例中读取字符串数组，并将其写入到创建的空数组中。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

string[]

是

要读取的字符串数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match.

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeStringArray(["abc", "def"]);
 let array: Array<string> = new Array(2);
 data.readStringArray(array);
 hilog.info(0x0000, 'testTag', 'readStringArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readStringArray
9+

readStringArray(): string[]

从MessageSequence实例中读取字符串数组。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

string[]

返回字符串数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 data.writeStringArray(["abc", "def"]);
 let array = data.readStringArray();
 hilog.info(0x0000, 'testTag', 'readStringArray is ' + array);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeNoException
9+

writeNoException(): void

向MessageSequence写入“指示未发生异常”的信息。

系统能力：
 SystemCapability.Communication.IPC.Core

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 if (code === 1) {
 hilog.info(0x0000, 'testTag', 'RpcServer: onRemoteMessageRequest called');
 try {
 reply.writeNoException();
 } catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'rpc write no exception fail, errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'rpc write no exception fail, errorMessage ' + e.message);
 }
 return true;
 } else {
 hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
 return false;
 }
 }
}

[h2]readException
9+

readException(): void

从MessageSequence中读取异常。

系统能力：
 SystemCapability.Communication.IPC.Core

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

在本文档的示例中，通过this.getUIContext().getHostContext()来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见
获取UIAbility的上下文信息
。

// FA模型需要从@kit.AbilityKit导入featureAbility
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
 onConnect: (elementName, remoteProxy) => {
 hilog.info(0x0000, 'testTag', 'js onConnect called');
 proxy = remoteProxy;
 },
 onDisconnect: (elementName) => {
 hilog.info(0x0000, 'testTag', 'onDisconnect');
 },
 onFailed: () => {
 hilog.info(0x0000, 'testTag', 'onFailed');
 }
};
let want: Want = {
 // 获取服务端包名和ability名称
 bundleName: "com.ohos.server",
 abilityName: "com.ohos.server.EntryAbility",
};

// FA模型使用此方法连接服务
// FA.connectAbility(want,connect);

// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let connectionId = context.connectServiceExtensionAbility(want, connect);

上述onConnect回调函数中的proxy对象需要等ability异步连接成功后才会被赋值，然后才可调用proxy对象的sendMessageRequest接口方法发送消息

import { rpc } from '@kit.IPCKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let option = new rpc.MessageOption();
 let data = rpc.MessageSequence.create();
 let reply = rpc.MessageSequence.create();
 data.writeNoException();
 data.writeInt(6);
 if (proxy != undefined) {
 proxy.sendMessageRequest(1, data, reply, option)
 .then((result: rpc.RequestResult) => {
 if (result.errCode === 0) {
 hilog.info(0x0000, 'testTag', 'sendMessageRequest got result');
 result.reply.readException();
 let num = result.reply.readInt();
 hilog.info(0x0000, 'testTag', 'reply num: ' + num);
 } else {
 hilog.error(0x0000, 'testTag', 'sendMessageRequest failed, errCode: ' + result.errCode);
 }
 }).catch((e: Error) => {
 hilog.error(0x0000, 'testTag', 'sendMessageRequest got exception: ' + JSON.stringify(e));
 }).finally (() => {
 hilog.info(0x0000, 'testTag', 'sendMessageRequest ends, reclaim parcel');
 data.reclaim();
 reply.reclaim();
 });
 }
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeParcelableArray
9+

writeParcelableArray(parcelableArray: Parcelable[]): void

将可序列化对象数组写入MessageSequence实例。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

parcelableArray

Parcelable
[]

是

要写入的可序列化对象数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match;

4.The element does not exist in the array.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class MyParcelable implements rpc.Parcelable {
 num: number = 0;
 str: string = '';
 constructor(num: number, str: string) {
 this.num = num;
 this.str = str;
 }
 marshalling(messageSequence: rpc.MessageSequence): boolean {
 messageSequence.writeInt(this.num);
 messageSequence.writeString(this.str);
 return true;
 }
 unmarshalling(messageSequence: rpc.MessageSequence): boolean {
 this.num = messageSequence.readInt();
 this.str = messageSequence.readString();
 return true;
 }
}

try {
 let parcelable = new MyParcelable(1, "aaa");
 let parcelable2 = new MyParcelable(2, "bbb");
 let parcelable3 = new MyParcelable(3, "ccc");
 let a = [parcelable, parcelable2, parcelable3];
 let data = rpc.MessageSequence.create();
 data.writeParcelableArray(a);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'rpc write parcelable array fail, errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'rpc write parcelable array fail, errorMessage ' + e.message);
}

[h2]readParcelableArray
9+

readParcelableArray(parcelableArray: Parcelable[]): void

从MessageSequence实例中读取可序列化对象数组。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

parcelableArray

Parcelable
[]

是

要读取的可序列化对象数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match;

4.The length of the array passed when reading is not equal to the length passed when writing to the array;

5.The element does not exist in the array.

1900010

Failed to read data from the message sequence.

1900012

Failed to call the JS callback function.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class MyParcelable implements rpc.Parcelable {
 num: number = 0;
 str: string = '';
 constructor(num: number, str: string) {
 this.num = num;
 this.str = str;
 }
 marshalling(messageSequence: rpc.MessageSequence): boolean {
 messageSequence.writeInt(this.num);
 messageSequence.writeString(this.str);
 return true;
 }
 unmarshalling(messageSequence: rpc.MessageSequence): boolean {
 this.num = messageSequence.readInt();
 this.str = messageSequence.readString();
 return true;
 }
}

try {
 let parcelable = new MyParcelable(1, "aaa");
 let parcelable2 = new MyParcelable(2, "bbb");
 let parcelable3 = new MyParcelable(3, "ccc");
 let a = [parcelable, parcelable2, parcelable3];
 let data = rpc.MessageSequence.create();
 data.writeParcelableArray(a);
 let b = [new MyParcelable(0, ""), new MyParcelable(0, ""), new MyParcelable(0, "")];
 data.readParcelableArray(b);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'rpc write parcelable array fail, errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'rpc write parcelable array fail, errorMessage ' + e.message);
}

[h2]writeRemoteObjectArray
9+

writeRemoteObjectArray(objectArray: IRemoteObject[]): void

将IRemoteObject对象数组写入MessageSequence。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

objectArray

IRemoteObject
[]

是

要写入MessageSequence的IRemoteObject对象数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match;

4.The element does not exist in the array;

5.The obtained remoteObject is null.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}

try {
 let a = [new TestRemoteObject("testObject1"), new TestRemoteObject("testObject2"), new TestRemoteObject("testObject3")];
 let data = rpc.MessageSequence.create();
 data.writeRemoteObjectArray(a);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readRemoteObjectArray
9+

readRemoteObjectArray(objects: IRemoteObject[]): void

从MessageSequence读取IRemoteObject对象数组，并将其写入到创建的空数组中。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

objects

IRemoteObject
[]

是

从MessageSequence读取的IRemoteObject对象数组。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match;

4.The length of the array passed when reading is not equal to the length passed when writing to the array.

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}

try {
 let a = [new TestRemoteObject("testObject1"), new TestRemoteObject("testObject2"), new TestRemoteObject("testObject3")];
 let data = rpc.MessageSequence.create();
 data.writeRemoteObjectArray(a);
 let b: Array<rpc.IRemoteObject> = new Array(3);
 data.readRemoteObjectArray(b);
 hilog.info(0x0000, 'testTag', 'readRemoteObjectArray is ' + b);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readRemoteObjectArray
9+

readRemoteObjectArray(): IRemoteObject[]

从MessageSequence读取IRemoteObject对象数组。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

IRemoteObject
[]

返回IRemoteObject对象数组；当写入的是空数组时，返回的是null。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}

try {
 let a = [new TestRemoteObject("testObject1"), new TestRemoteObject("testObject2"), new TestRemoteObject("testObject3")];
 let data = rpc.MessageSequence.create();
 let b = data.readRemoteObjectArray();
 hilog.info(0x0000, 'testTag', 'readRemoteObjectArray is ' + b);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]closeFileDescriptor
9+

static closeFileDescriptor(fd: number): void

静态方法，关闭给定的文件描述符。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

fd

number

是

要关闭的文件描述符。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

示例：

import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let filePath = "path/to/file";
 let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
 rpc.MessageSequence.closeFileDescriptor(file.fd);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]dupFileDescriptor
9+

static dupFileDescriptor(fd: number): number

静态方法，复制给定的文件描述符。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

fd

number

是

表示已存在的文件描述符。

返回值：

类型

说明

number

返回新的文件描述符。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900013

Failed to call dup.

示例：

import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let filePath = "path/to/file";
 let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
 rpc.MessageSequence.dupFileDescriptor(file.fd);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]containFileDescriptors
9+

containFileDescriptors(): boolean

检查此MessageSequence对象是否包含文件描述符。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

boolean

true：包含文件描述符，false：不包含文件描述符。

示例：

import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let sequence = rpc.MessageSequence.create();
 let filePath = "path/to/file";
 let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
 let containFD = sequence.containFileDescriptors();
 hilog.info(0x0000, 'testTag', 'sequence after write fd containFd result is ' + containFD);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeFileDescriptor
9+

writeFileDescriptor(fd: number): void

写入文件描述符到MessageSequence。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

fd

number

是

文件描述符。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let sequence = rpc.MessageSequence.create();
 let filePath = "path/to/file";
 let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
 sequence.writeFileDescriptor(file.fd);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readFileDescriptor
9+

readFileDescriptor(): number

从MessageSequence中读取文件描述符。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回文件描述符。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let sequence = rpc.MessageSequence.create();
 let filePath = "path/to/file";
 let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
 sequence.writeFileDescriptor(file.fd);
 let readFD = sequence.readFileDescriptor();
 hilog.info(0x0000, 'testTag', 'readFileDescriptor is ' + readFD);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeAshmem
9+

writeAshmem(ashmem: Ashmem): void

将指定的匿名共享对象写入此MessageSequence。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

ashmem

Ashmem

是

要写入MessageSequence的匿名共享对象。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter is not an instance of the Ashmem object.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let sequence = rpc.MessageSequence.create();
 let ashmem = rpc.Ashmem.create("ashmem", 1024);
 // ashmem里写入数据
 let buffer = new ArrayBuffer(1024);
 let int32View = new Int32Array(buffer);
 for (let i = 0; i < int32View.length; i++) {
 int32View[i] = i * 2 + 1;
 }
 let size = buffer.byteLength;
 ashmem.mapReadWriteAshmem();
 ashmem.writeDataToAshmem(buffer, size, 0);
 // 将ashmem对象写入messageSequence对象中
 sequence.writeAshmem(ashmem);
 // 将传递的数据大小写入messageSequence对象中
 sequence.writeInt(size);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readAshmem
9+

readAshmem(): Ashmem

从MessageSequence读取匿名共享对象。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

Ashmem

返回匿名共享对象。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let sequence = rpc.MessageSequence.create();
 let ashmem = rpc.Ashmem.create("ashmem", 1024);
 // ashmem里写入数据
 let buffer = new ArrayBuffer(1024);
 let int32View = new Int32Array(buffer);
 for (let i = 0; i < int32View.length; i++) {
 int32View[i] = i * 2 + 1;
 }
 let size = buffer.byteLength;
 ashmem.mapReadWriteAshmem();
 ashmem.writeDataToAshmem(buffer, size, 0);
 // 将传递的数据大小写入messageSequence对象中
 sequence.writeInt(size);
 // 将ashmem对象写入messageSequence对象中
 sequence.writeAshmem(ashmem);

 // 读取传递的数据大小
 let dataSize = sequence.readInt();
 // 从messageSequence对象中读取ashmem对象
 let ashmem1 = sequence.readAshmem();
 // 从ashmem对象中读取数据
 ashmem1.mapReadWriteAshmem();
 let readResult = ashmem1.readDataFromAshmem(dataSize, 0);
 let readInt32View = new Int32Array(readResult);
 hilog.info(0x0000, 'testTag', 'read from Ashmem result is ' + readInt32View);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]getRawDataCapacity
9+

getRawDataCapacity(): number

获取MessageSequence可以容纳的最大原始数据量。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回MessageSequence可以容纳的最大原始数据量，即128MB。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let sequence = rpc.MessageSequence.create();
 let result = sequence.getRawDataCapacity();
 hilog.info(0x0000, 'testTag', 'sequence get RawDataCapacity result is ' + result);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeRawData
(deprecated)

writeRawData(rawData: number[], size: number): void

将原始数据写入MessageSequence对象。

从API version 9 开始支持，API version 11 开始废弃，建议使用
writeRawDataBuffer
替代。

该接口是一次性接口，不允许在一次parcel通信中多次调用该接口。

该接口在传输数据时，当数据量较大时（超过32KB），会使用共享内存传输数据，此时需注意selinux配置。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

rawData

number[]

是

要写入的原始数据，大小不能超过128MB。

size

number

是

发送的原始数据大小，以字节为单位。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match;

4.The transferred size cannot be obtained;

5.The transferred size is less than or equal to 0;

6.The element does not exist in the array;

7.Failed to obtain typedArray information;

8.The array is not of type int32;

9.The length of typedarray is smaller than the size of the original data sent.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let sequence = rpc.MessageSequence.create();
 let arr = [1, 2, 3, 4, 5];
 sequence.writeRawData(arr, arr.length);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeRawDataBuffer
11+

writeRawDataBuffer(rawData: ArrayBuffer, size: number): void

将原始数据写入MessageSequence对象。

该接口是一次性接口，不允许在一次parcel通信中多次调用该接口。

该接口在传输数据时，当数据量较大时（超过32KB），会使用共享内存传输数据，此时需注意selinux配置。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

rawData

ArrayBuffer

是

要写入的原始数据，大小不能超过128MB。

size

number

是

发送的原始数据大小，以字节为单位。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.Failed to obtain arrayBuffer information;

4.The transferred size cannot be obtained;

5.The transferred size is less than or equal to 0;

6.The transferred size is greater than the byte length of ArrayBuffer.

1900009

Failed to write data to the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let buffer = new ArrayBuffer(64 * 1024);
 let int32View = new Int32Array(buffer);
 for (let i = 0; i < int32View.length; i++) {
 int32View[i] = i * 2 + 1;
 }
 let size = buffer.byteLength;
 let sequence = rpc.MessageSequence.create();
 sequence.writeRawDataBuffer(buffer, size);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readRawData
(deprecated)

readRawData(size: number): number[]

从MessageSequence读取原始数据。

从API version 9 开始支持，API version 11 开始废弃，建议使用
readRawDataBuffer
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

size

number

是

要读取的原始数据的大小。

返回值：

类型

说明

number[]

返回原始数据（以字节为单位）。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let sequence = rpc.MessageSequence.create();
 let arr = [1, 2, 3, 4, 5];
 sequence.writeRawData(arr, arr.length);
 let size = arr.length;
 let result = sequence.readRawData(size);
 hilog.info(0x0000, 'testTag', 'sequence read raw data result is ' + result);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readRawDataBuffer
11+

readRawDataBuffer(size: number): ArrayBuffer

从MessageSequence读取原始数据。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

size

number

是

要读取的原始数据的大小。

返回值：

类型

说明

ArrayBuffer

返回原始数据（以字节为单位）。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900010

Failed to read data from the message sequence.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let buffer = new ArrayBuffer(64 * 1024);
 let int32View = new Int32Array(buffer);
 for (let i = 0; i < int32View.length; i++) {
 int32View[i] = i * 2 + 1;
 }
 let size = buffer.byteLength;
 let sequence = rpc.MessageSequence.create();
 sequence.writeRawDataBuffer(buffer, size);
 let result = sequence.readRawDataBuffer(size);
 let readInt32View = new Int32Array(result);
 hilog.info(0x0000, 'testTag', 'sequence read raw data result is ' + readInt32View);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeArrayBuffer
12+

writeArrayBuffer(buf: ArrayBuffer, typeCode: TypeCode): void

将ArrayBuffer类型数据写入MessageSequence对象。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

buf

ArrayBuffer

是

要写入的ArrayBuffer数据。

typeCode

TypeCode

是

ArrayBuffer数据具体是以哪一种TypedArray来访问和操作(会根据业务传递的类型枚举值去决定底层的写入方式，需要业务正确传递枚举值。)

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The parameter is an empty array;

2.The number of parameters is incorrect;

3.The parameter type does not match;

4.The obtained value of typeCode is incorrect;

5.Failed to obtain arrayBuffer information.

1900009

Failed to write data to the message sequence.

示例：

// TypeCode 类型枚举较多，示例代码以Int16Array为例
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 let buffer = new ArrayBuffer(10);
 let int16View = new Int16Array(buffer);
 for (let i = 0; i < int16View.length; i++) {
 int16View[i] = i * 2 + 1;
 }
 data.writeArrayBuffer(buffer, rpc.TypeCode.INT16_ARRAY);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readArrayBuffer
12+

readArrayBuffer(typeCode: TypeCode): ArrayBuffer

从MessageSequence读取ArrayBuffer类型数据。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

typeCode

TypeCode

是

ArrayBuffer数据具体是以哪一种TypedArray来访问和操作(会根据业务传递的类型枚举值去决定底层的读取方式，需要业务正确传递枚举值，读写枚举值不匹配会导致数据异常。)

返回值：

类型

说明

ArrayBuffer

返回ArrayBuffer类型数据（以字节为单位）。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.The obtained value of typeCode is incorrect;

1900010

Failed to read data from the message sequence.

示例：

// TypeCode 类型枚举较多，示例代码以Int16Array为例
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data = rpc.MessageSequence.create();
 let buffer = new ArrayBuffer(10);
 let int16View = new Int16Array(buffer);
 for (let i = 0; i < int16View.length; i++) {
 int16View[i] = i * 2 + 1;
 }
 data.writeArrayBuffer(buffer, rpc.TypeCode.INT16_ARRAY);
 let result = data.readArrayBuffer(rpc.TypeCode.INT16_ARRAY);
 let readInt16View = new Int16Array(result);
 hilog.info(0x0000, 'testTag', 'read ArrayBuffer result is ' + readInt16View);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

MessageParcel
(deprecated)

在RPC过程中，发送方可以使用MessageParcel提供的写方法，将待发送的数据以特定格式写入该对象。接收方可以使用MessageParcel提供的读方法从该对象中读取特定格式的数据。数据格式包括：基础类型及数组、IPC对象、接口描述符和自定义序列化对象。

从API version 7 开始支持，API version 9 开始废弃，建议使用
MessageSequence
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

[h2]create
(deprecated)

static create(): MessageParcel

静态方法，创建MessageParcel对象。

从API version 7 开始支持，API version 9 开始废弃，建议使用
create
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

MessageParcel

返回创建的MessageParcel对象。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 hilog.info(0x0000, 'testTag', 'data is ' + data);

 // 当MessageParcel对象不再使用，由业务主动调用reclaim方法去释放资源。
 data.reclaim();
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]reclaim
(deprecated)

reclaim(): void

释放不再使用的MessageParcel对象。

从API version 7 开始支持，API version 9 开始废弃，建议使用
reclaim
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let reply = rpc.MessageParcel.create();
 reply.reclaim();
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeRemoteObject
(deprecated)

writeRemoteObject(object: IRemoteObject): boolean

序列化远程对象并将其写入MessageParcel对象。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeRemoteObject
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

object

IRemoteObject

是

要序列化并写入MessageParcel的远程对象。

返回值：

类型

说明

boolean

true：操作成功，false：操作失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel, option: rpc.MessageOption): boolean {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}

try {
 let data = rpc.MessageParcel.create();
 let testRemoteObject = new TestRemoteObject("testObject");
 data.writeRemoteObject(testRemoteObject);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readRemoteObject
(deprecated)

readRemoteObject(): IRemoteObject

从MessageParcel读取远程对象。此方法用于反序列化MessageParcel对象以生成IRemoteObject。远程对象按写入MessageParcel的顺序读取。

从API version 7 开��支持，API version 9 开始废弃，建议使用
readRemoteObject
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

IRemoteObject

读取到的远程对象。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel,
 option: rpc.MessageOption): boolean {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}

try {
 let data = rpc.MessageParcel.create();
 let testRemoteObject = new TestRemoteObject("testObject");
 data.writeRemoteObject(testRemoteObject);
 let proxy = data.readRemoteObject();
 hilog.info(0x0000, 'testTag', 'readRemoteObject is ' + proxy);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeInterfaceToken
(deprecated)

writeInterfaceToken(token: string): boolean

将接口描述符写入MessageParcel对象，远端对象可使用该信息校验本次通信。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeInterfaceToken
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

token

string

是

字符串类型描述符，其长度应小于40960字节。

返回值：

类型

说明

boolean

true：操作成功，false：操作失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeInterfaceToken("aaa");
 hilog.info(0x0000, 'testTag', 'RpcServer: writeInterfaceToken is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readInterfaceToken
(deprecated)

readInterfaceToken(): string

从MessageParcel中读取接口描述符，接口描述符按写入MessageParcel的顺序读取，本地对象可使用该信息检验本次通信。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readInterfaceToken
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

string

返回读取到的接口描述符。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeInterfaceToken("aaa");
 let interfaceToken = data.readInterfaceToken();
 hilog.info(0x0000, 'testTag', 'RpcServer: interfaceToken is ' + interfaceToken);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]getSize
(deprecated)

getSize(): number

获取当前MessageParcel的数据大小。

从API version 7 开始支持，API version 9 开始废弃，建议使用
getSize
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

获取的MessageParcel的数据大小。以字节为单位。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 data.writeInt(1);
 let size = data.getSize();
 hilog.info(0x0000, 'testTag', 'size is ' + size);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]getCapacity
(deprecated)

getCapacity(): number

获取当前MessageParcel的容量。

从API version 7 开始支持，API version 9 开始废弃，建议使用
getCapacity
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

获取的MessageParcel的容量大小。以字节为单位。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.getCapacity();
 hilog.info(0x0000, 'testTag', 'capacity is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]setSize
(deprecated)

setSize(size: number): boolean

设置MessageParcel实例中包含的数据大小。

从API version 7 开始支持，API version 9 开始废弃，建议使用
setSize
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

size

number

是

MessageParcel实例的数据大小。以字节为单位。

返回值：

类型

说明

boolean

true：设置成功，false：设置失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let setSize = data.setSize(16);
 hilog.info(0x0000, 'testTag', 'setSize is ' + setSize);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]setCapacity
(deprecated)

setCapacity(size: number): boolean

设置MessageParcel实例的存储容量。

从API version 7 开始支持，API version 9 开始废弃，建议使用
setCapacity
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

size

number

是

MessageParcel实例的存储容量。以字节为单位。

返回值：

类型

说明

boolean

true：设置成功，false：设置失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.setCapacity(100);
 hilog.info(0x0000, 'testTag', 'setCapacity is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]getWritableBytes
(deprecated)

getWritableBytes(): number

获取MessageParcel的可写字节空间。

从API version 7 开始支持，API version 9 开始废弃，建议使用
getWritableBytes
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

获取到的MessageParcel的可写字节空间。以字节为单位。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 data.writeInt(1);
 let getWritableBytes = data.getWritableBytes();
 hilog.info(0x0000, 'testTag', 'RpcServer: getWritableBytes is ' + getWritableBytes);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]getReadableBytes
(deprecated)

getReadableBytes(): number

获取MessageParcel的可读字节空间。

从API version 7 开始支持，API version 9 开始废弃，建议使用
getReadableBytes
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

获取到的MessageParcel的可读字节空间。以字节为单位。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 data.writeInt(1);
 let result = data.getReadableBytes();
 hilog.info(0x0000, 'testTag', 'RpcServer: getReadableBytes is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]getReadPosition
(deprecated)

getReadPosition(): number

获取MessageParcel的读位置。

从API version 7 开始支持，API version 9 开始废弃，建议使用
getReadPosition
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回MessageParcel实例中的当前读取位置。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let readPos = data.getReadPosition();
 hilog.info(0x0000, 'testTag', 'readPos is ' + readPos);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]getWritePosition
(deprecated)

getWritePosition(): number

获取MessageParcel的写位置。

从API version 7 开始支持，API version 9 开始废弃，建议使用
getWritePosition
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回MessageParcel实例中的当前写入位置。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 data.writeInt(10);
 let bwPos = data.getWritePosition();
 hilog.info(0x0000, 'testTag', 'bwPos is ' + bwPos);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]rewindRead
(deprecated)

rewindRead(pos: number): boolean

重新偏移读取位置到指定的位置。

从API version 7 开始支持，API version 9 开始废弃，建议使用
rewindRead
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

pos

number

是

开始读取数据的目标位置。

返回值：

类型

说明

boolean

true：读取位置发生更改，false：读取位置未发生更改。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 data.writeInt(12);
 data.writeString("parcel");
 let number = data.readInt();
 hilog.info(0x0000, 'testTag', 'number is ' + number);
 data.rewindRead(0);
 let number2 = data.readInt();
 hilog.info(0x0000, 'testTag', 'rewindRead is ' + number2);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]rewindWrite
(deprecated)

rewindWrite(pos: number): boolean

重新偏移写位置到指定的位置。

从API version 7 开始支持，API version 9 开始废弃，建议使用
rewindWrite
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

pos

number

是

开始写入数据的目标位置。

返回值：

类型

说明

boolean

true：写入位置发生更改，false：写入位置未发生更改。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 data.writeInt(4);
 data.rewindWrite(0);
 data.writeInt(5);
 let number = data.readInt();
 hilog.info(0x0000, 'testTag', 'rewindWrite is ' + number);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeByte
(deprecated)

writeByte(val: number): boolean

将字节值写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeByte
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

number

是

要写入的字节值。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeByte(2);
 hilog.info(0x0000, 'testTag', 'writeByte is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readByte
(deprecated)

readByte(): number

从MessageParcel实例中读取字节值。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readByte
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回字节值。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeByte(2);
 hilog.info(0x0000, 'testTag', 'writeByte is ' + result);
 let ret = data.readByte();
 hilog.info(0x0000, 'testTag', 'readByte is ' + ret);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeShort
(deprecated)

writeShort(val: number): boolean

将短整数值写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeShort
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

number

是

要写入的短整数值。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeShort(8);
 hilog.info(0x0000, 'testTag', 'writeShort is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readShort
(deprecated)

readShort(): number

从MessageParcel实例中读取短整数值。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readShort
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回短整数值。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeShort(8);
 hilog.info(0x0000, 'testTag', 'writeShort is ' + result);
 let ret = data.readShort();
 hilog.info(0x0000, 'testTag', 'readShort is ' + ret);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeInt
(deprecated)

writeInt(val: number): boolean

将整数值写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeInt
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

number

是

要写入的整数值。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeInt(10);
 hilog.info(0x0000, 'testTag', 'writeInt is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readInt
(deprecated)

readInt(): number

从MessageParcel实例中读取整数值。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readInt
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回整数值。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeInt(10);
 hilog.info(0x0000, 'testTag', 'writeInt is ' + result);
 let ret = data.readInt();
 hilog.info(0x0000, 'testTag', 'readInt is ' + ret);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeLong
(deprecated)

writeLong(val: number): boolean

将长整数值写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeLong
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

number

是

要写入的长整数值

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeLong(10000);
 hilog.info(0x0000, 'testTag', 'writeLong is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readLong
(deprecated)

readLong(): number

从MessageParcel实例中读取长整数值。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readLong
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回长整数值。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeLong(10000);
 hilog.info(0x0000, 'testTag', 'writeLong is ' + result);
 let ret = data.readLong();
 hilog.info(0x0000, 'testTag', 'readLong is ' + ret);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeFloat
(deprecated)

writeFloat(val: number): boolean

将双精度浮点值写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeFloat
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

number

是

要写入的双精度浮点值。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeFloat(1.2);
 hilog.info(0x0000, 'testTag', 'writeFloat is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readFloat
(deprecated)

readFloat(): number

从MessageParcel实例中读取双精度浮点值。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readFloat
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回双精度浮点值。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeFloat(1.2);
 hilog.info(0x0000, 'testTag', 'writeFloat is ' + result);
 let ret = data.readFloat();
 hilog.info(0x0000, 'testTag', 'readFloat is ' + ret);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeDouble
(deprecated)

writeDouble(val: number): boolean

将双精度浮点值写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeDouble
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

number

是

要写入的双精度浮点值。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeDouble(10.2);
 hilog.info(0x0000, 'testTag', 'writeDouble is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readDouble
(deprecated)

readDouble(): number

从MessageParcel实例中读取双精度浮点值。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readDouble
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回双精度浮点值。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeDouble(10.2);
 hilog.info(0x0000, 'testTag', 'writeDouble is ' + result);
 let ret = data.readDouble();
 hilog.info(0x0000, 'testTag', 'readDouble is ' + ret);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeBoolean
(deprecated)

writeBoolean(val: boolean): boolean

将布尔值写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeBoolean
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

boolean

是

要写入的布尔值。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeBoolean(false);
 hilog.info(0x0000, 'testTag', 'writeBoolean is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readBoolean
(deprecated)

readBoolean(): boolean

从MessageParcel实例中读取布尔值。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readBoolean
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

boolean

返回读取到的布尔值。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeBoolean(false);
 hilog.info(0x0000, 'testTag', 'writeBoolean is ' + result);
 let ret = data.readBoolean();
 hilog.info(0x0000, 'testTag', 'readBoolean is ' + ret);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeChar
(deprecated)

writeChar(val: number): boolean

将单个字符值写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeChar
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

number

是

要写入的单个字符值。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeChar(97);
 hilog.info(0x0000, 'testTag', 'writeChar is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readChar
(deprecated)

readChar(): number

从MessageParcel实例中读取单个字符值。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readChar
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回单个字符值。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeChar(97);
 hilog.info(0x0000, 'testTag', 'writeChar is ' + result);
 let ret = data.readChar();
 hilog.info(0x0000, 'testTag', 'readChar is ' + ret);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeString
(deprecated)

writeString(val: string): boolean

将字符串值写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeString
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

string

是

要写入的字符串值，其长度应小于40960字节。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeString('abc');
 hilog.info(0x0000, 'testTag', 'writeString is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readString
(deprecated)

readString(): string

从MessageParcel实例中读取字符串值。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readString
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

string

返回字符串值。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeString('abc');
 hilog.info(0x0000, 'testTag', 'writeString is ' + result);
 let ret = data.readString();
 hilog.info(0x0000, 'testTag', 'readString is ' + ret);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeSequenceable
(deprecated)

writeSequenceable(val: Sequenceable): boolean

将自定义序列化对象写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeParcelable
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

val

Sequenceable

是

要写入的可序列对象。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MySequenceable implements rpc.Sequenceable {
 num: number = 0;
 str: string = '';
 constructor(num: number, str: string) {
 this.num = num;
 this.str = str;
 }
 marshalling(messageParcel: rpc.MessageParcel): boolean {
 messageParcel.writeInt(this.num);
 messageParcel.writeString(this.str);
 return true;
 }
 unmarshalling(messageParcel: rpc.MessageParcel): boolean {
 this.num = messageParcel.readInt();
 this.str = messageParcel.readString();
 return true;
 }
}

try {
 let sequenceable = new MySequenceable(1, "aaa");
 let data = rpc.MessageParcel.create();
 let result = data.writeSequenceable(sequenceable);
 hilog.info(0x0000, 'testTag', 'writeSequenceable is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readSequenceable
(deprecated)

readSequenceable(dataIn: Sequenceable): boolean

从MessageParcel实例中读取成员变量到指定的对象（dataIn）。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readParcelable
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

Sequenceable

是

需要从MessageParcel读取成员变量的对象。

返回值：

类型

说明

boolean

true：反序列化成功，false：反序列化失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MySequenceable implements rpc.Sequenceable {
 num: number = 0;
 str: string = '';
 constructor(num: number, str: string) {
 this.num = num;
 this.str = str;
 }
 marshalling(messageParcel: rpc.MessageParcel): boolean {
 messageParcel.writeInt(this.num);
 messageParcel.writeString(this.str);
 return true;
 }
 unmarshalling(messageParcel: rpc.MessageParcel): boolean {
 this.num = messageParcel.readInt();
 this.str = messageParcel.readString();
 return true;
 }
}

try {
 let sequenceable = new MySequenceable(1, "aaa");
 let data = rpc.MessageParcel.create();
 let result = data.writeSequenceable(sequenceable);
 hilog.info(0x0000, 'testTag', 'writeSequenceable is ' + result);
 let ret = new MySequenceable(0, "");
 let result2 = data.readSequenceable(ret);
 hilog.info(0x0000, 'testTag', 'readSequenceable is ' + result2);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeByteArray
(deprecated)

writeByteArray(byteArray: number[]): boolean

将字节数组写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeByteArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

byteArray

number[]

是

要写入的字节数组。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let ByteArrayVar = [1, 2, 3, 4, 5];
 let result = data.writeByteArray(ByteArrayVar);
 hilog.info(0x0000, 'testTag', 'writeByteArray is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readByteArray
(deprecated)

readByteArray(dataIn: number[]): void

从MessageParcel实例中读取字节数组，并将其写入到创建的空数组中。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readByteArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

number[]

是

要读取的字节数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let ByteArrayVar = [1, 2, 3, 4, 5];
 let result = data.writeByteArray(ByteArrayVar);
 let array: Array<number> = new Array(5);
 data.readByteArray(array);
 hilog.info(0x0000, 'testTag', 'readByteArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readByteArray
(deprecated)

readByteArray(): number[]

从MessageParcel实例中读取字节数组。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readByteArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number[]

返回字节数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let ByteArrayVar = [1, 2, 3, 4, 5];
 let result = data.writeByteArray(ByteArrayVar);
 hilog.info(0x0000, 'testTag', 'writeByteArray is ' + result);
 let array = data.readByteArray();
 hilog.info(0x0000, 'testTag', 'readByteArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeShortArray
(deprecated)

writeShortArray(shortArray: number[]): boolean

将短整数数组写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeShortArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

shortArray

number[]

是

要写入的短整数数组。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeShortArray([11, 12, 13]);
 hilog.info(0x0000, 'testTag', 'writeShortArray is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readShortArray
(deprecated)

readShortArray(dataIn: number[]): void

从MessageParcel实例中读取短整数数组，并将其写入到创建的空数组中。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readShortArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

number[]

是

要读取的短整数数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeShortArray([11, 12, 13]);
 hilog.info(0x0000, 'testTag', 'writeShortArray is ' + result);
 let array: Array<number> = new Array(3);
 data.readShortArray(array);
 hilog.info(0x0000, 'testTag', 'readShortArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readShortArray
(deprecated)

readShortArray(): number[]

从MessageParcel实例中读取短整数数组。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readShortArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number[]

返回短整数数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeShortArray([11, 12, 13]);
 hilog.info(0x0000, 'testTag', 'writeShortArray is ' + result);
 let array = data.readShortArray();
 hilog.info(0x0000, 'testTag', 'readShortArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeIntArray
(deprecated)

writeIntArray(intArray: number[]): boolean

将整数数组写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeIntArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

intArray

number[]

是

要写入的整数数组。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeIntArray([100, 111, 112]);
 hilog.info(0x0000, 'testTag', 'writeIntArray is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readIntArray
(deprecated)

readIntArray(dataIn: number[]): void

从MessageParcel实例中读取整数数组，并将其写入到创建的空数组中。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readIntArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

number[]

是

要读取的整数数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeIntArray([100, 111, 112]);
 hilog.info(0x0000, 'testTag', 'writeIntArray is ' + result);
 let array: Array<number> = new Array(3);
 data.readIntArray(array);
 hilog.info(0x0000, 'testTag', 'readIntArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readIntArray
(deprecated)

readIntArray(): number[]

从MessageParcel实例中读取整数数组。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readIntArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number[]

返回整数数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeIntArray([100, 111, 112]);
 hilog.info(0x0000, 'testTag', 'writeIntArray is ' + result);
 let array = data.readIntArray();
 hilog.info(0x0000, 'testTag', 'readIntArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeLongArray
(deprecated)

writeLongArray(longArray: number[]): boolean

将长整数数组写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeLongArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

longArray

number[]

是

要写入的长整数数组。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeLongArray([1111, 1112, 1113]);
 hilog.info(0x0000, 'testTag', 'writeLongArray is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readLongArray
(deprecated)

readLongArray(dataIn: number[]): void

从MessageParcel实例中读取长整数数组，并将其写入到创建的空数组中。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readLongArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

number[]

是

要读取的长整数数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeLongArray([1111, 1112, 1113]);
 hilog.info(0x0000, 'testTag', 'writeLongArray is ' + result);
 let array: Array<number> = new Array(3);
 data.readLongArray(array);
 hilog.info(0x0000, 'testTag', 'readLongArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readLongArray
(deprecated)

readLongArray(): number[]

从MessageParcel实例中读取长整数数组。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readLongArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number[]

返回长整数数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeLongArray([1111, 1112, 1113]);
 hilog.info(0x0000, 'testTag', 'writeLongArray is ' + result);
 let array = data.readLongArray();
 hilog.info(0x0000, 'testTag', 'readLongArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeFloatArray
(deprecated)

writeFloatArray(floatArray: number[]): boolean

将双精度浮点数组写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeFloatArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

floatArray

number[]

是

要写入的双精度浮点数组。由于系统内部对float类型的数据是按照double处理的，使用时对于数组所占的总字节数应按照double类型来计算。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeFloatArray([1.2, 1.3, 1.4]);
 hilog.info(0x0000, 'testTag', 'writeFloatArray is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readFloatArray
(deprecated)

readFloatArray(dataIn: number[]): void

从MessageParcel实例中读取双精度浮点数组，并将其写入到创建的空数组中。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readFloatArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

number[]

是

要读取的双精度浮点数组。由于系统内部对float类型的数据是按照double处理的，使用时对于数组所占的总字节数应按照double类型来计算。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeFloatArray([1.2, 1.3, 1.4]);
 hilog.info(0x0000, 'testTag', 'writeFloatArray is ' + result);
 let array: Array<number> = new Array(3);
 data.readFloatArray(array);
 hilog.info(0x0000, 'testTag', 'readFloatArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readFloatArray
(deprecated)

readFloatArray(): number[]

从MessageParcel实例中读取双精度浮点数组。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readFloatArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number[]

返回双精度浮点数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeFloatArray([1.2, 1.3, 1.4]);
 hilog.info(0x0000, 'testTag', 'writeFloatArray is ' + result);
 let array = data.readFloatArray();
 hilog.info(0x0000, 'testTag', 'readFloatArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeDoubleArray
(deprecated)

writeDoubleArray(doubleArray: number[]): boolean

将双精度浮点数组写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeDoubleArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

doubleArray

number[]

是

要写入的双精度浮点数组。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeDoubleArray([11.1, 12.2, 13.3]);
 hilog.info(0x0000, 'testTag', 'writeDoubleArray is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readDoubleArray
(deprecated)

readDoubleArray(dataIn: number[]): void

从MessageParcel实例中读取双精度浮点数组，并将其写入到创建的空数组中。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readDoubleArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

number[]

是

要读取的双精度浮点数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeDoubleArray([11.1, 12.2, 13.3]);
 hilog.info(0x0000, 'testTag', 'writeDoubleArray is ' + result);
 let array: Array<number> = new Array(3);
 data.readDoubleArray(array);
 hilog.info(0x0000, 'testTag', 'readDoubleArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readDoubleArray
(deprecated)

readDoubleArray(): number[]

从MessageParcel实例中读取双精度浮点数组。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readDoubleArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number[]

返回双精度浮点数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeDoubleArray([11.1, 12.2, 13.3]);
 hilog.info(0x0000, 'testTag', 'writeDoubleArray is ' + result);
 let array = data.readDoubleArray();
 hilog.info(0x0000, 'testTag', 'readDoubleArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeBooleanArray
(deprecated)

writeBooleanArray(booleanArray: boolean[]): boolean

将布尔数组写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeBooleanArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

booleanArray

boolean[]

是

要写入的布尔数组。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeBooleanArray([false, true, false]);
 hilog.info(0x0000, 'testTag', 'writeBooleanArray is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readBooleanArray
(deprecated)

readBooleanArray(dataIn: boolean[]): void

从MessageParcel实例中读取布尔数组，并将其写入到创建的空数组中。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readBooleanArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

boolean[]

是

要读取的布尔数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeBooleanArray([false, true, false]);
 hilog.info(0x0000, 'testTag', 'writeBooleanArray is ' + result);
 let array: Array<boolean> = new Array(3);
 data.readBooleanArray(array);
 hilog.info(0x0000, 'testTag', 'readBooleanArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readBooleanArray
(deprecated)

readBooleanArray(): boolean[]

从MessageParcel实例中读取布尔数组。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readBooleanArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

boolean[]

返回布尔数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeBooleanArray([false, true, false]);
 hilog.info(0x0000, 'testTag', 'writeBooleanArray is ' + result);
 let array = data.readBooleanArray();
 hilog.info(0x0000, 'testTag', 'readBooleanArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeCharArray
(deprecated)

writeCharArray(charArray: number[]): boolean

将单个字符数组写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeCharArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

charArray

number[]

是

要写入的单个字符数组。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeCharArray([97, 98, 88]);
 hilog.info(0x0000, 'testTag', 'writeCharArray is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readCharArray
(deprecated)

readCharArray(dataIn: number[]): void

从MessageParcel实例中读取单个字符数组，并将其写入到创建的空数组中。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readCharArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

number[]

是

要读取的单个字符数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeCharArray([97, 98, 99]);
 hilog.info(0x0000, 'testTag', 'writeCharArray is ' + result);
 let array: Array<number> = new Array(3);
 data.readCharArray(array);
 hilog.info(0x0000, 'testTag', 'writeCharArray is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readCharArray
(deprecated)

readCharArray(): number[]

从MessageParcel实例中读取单个字符数组。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readCharArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number[]

返回单个字符数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeCharArray([97, 98, 99]);
 hilog.info(0x0000, 'testTag', 'writeCharArray is ' + result);
 let array = data.readCharArray();
 hilog.info(0x0000, 'testTag', 'readCharArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeStringArray
(deprecated)

writeStringArray(stringArray: string[]): boolean

将字符串数组写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeStringArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

stringArray

string[]

是

要写入的字符串数组，数组单个元素的长度应小于40960字节。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeStringArray(["abc", "def"]);
 hilog.info(0x0000, 'testTag', 'writeStringArray is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readStringArray
(deprecated)

readStringArray(dataIn: string[]): void

从MessageParcel实例中读取字符串数组，并将其写入到创建的空数组中。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readStringArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

string[]

是

要读取的字符串数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeStringArray(["abc", "def"]);
 hilog.info(0x0000, 'testTag', 'writeStringArray is ' + result);
 let array: Array<string> = new Array(2);
 data.readStringArray(array);
 hilog.info(0x0000, 'testTag', 'readStringArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readStringArray
(deprecated)

readStringArray(): string[]

从MessageParcel实例中读取字符串数组。

从API version 7 开始支持，API version 9 开始废弃，建议使用
readStringArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

string[]

返回字符串数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let data = rpc.MessageParcel.create();
 let result = data.writeStringArray(["abc", "def"]);
 hilog.info(0x0000, 'testTag', 'writeStringArray is ' + result);
 let array = data.readStringArray();
 hilog.info(0x0000, 'testTag', 'readStringArray is ' + array);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeNoException
(deprecated)

writeNoException(): void

向MessageParcel写入“指示未发生异常”的信息。

从API version 8 开始支持，API version 9 开始废弃，建议使用
writeNoException
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyDeathRecipient implements rpc.DeathRecipient {
 onRemoteDied() {
 hilog.info(0x0000, 'testTag', 'server died');
 }
}
class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }

onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel, option: rpc.MessageOption): boolean {
 if (code === 1) {
 hilog.info(0x0000, 'testTag', 'RpcServer: onRemoteRequest called');
 reply.writeNoException();
 return true;
 } else {
 hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
 return false;
 }
 }
}

[h2]readException
(deprecated)

readException(): void

从MessageParcel中读取异常。

从API version 8 开始支持，API version 9 开始废弃，建议使用
readException
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

示例：

在本文档的示例中，通过this.getUIContext().getHostContext()来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见
获取UIAbility的上下文信息
。

// FA模型需要从@kit.AbilityKit导入featureAbility
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
 onConnect: (elementName, remoteProxy) => {
 hilog.info(0x0000, 'testTag', 'js onConnect called');
 proxy = remoteProxy;
 },
 onDisconnect: (elementName) => {
 hilog.info(0x0000, 'testTag', 'onDisconnect');
 },
 onFailed: () => {
 hilog.info(0x0000, 'testTag', 'onFailed');
 }
};
let want: Want = {
 // 获取服务端包名和ability名称
 bundleName: "com.ohos.server",
 abilityName: "com.ohos.server.EntryAbility",
};

// FA模型使用此方法连接服务
// FA.connectAbility(want,connect);

// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let connectionId = context.connectServiceExtensionAbility(want, connect);

上述onConnect回调函数中的proxy对象需要等ability异步连接成功后才会被赋值，然后才可调用proxy对象的sendRequest接口方法发送消息

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let option = new rpc.MessageOption();
 let data = rpc.MessageParcel.create();
 let reply = rpc.MessageParcel.create();
 data.writeNoException();
 data.writeString('hello');
 if (proxy != undefined) {
 let a = proxy.sendRequest(1, data, reply, option) as Object;
 let b = a as Promise<rpc.SendRequestResult>;
 b.then((result: rpc.SendRequestResult) => {
 if (result.errCode === 0) {
 hilog.info(0x0000, 'testTag', 'sendRequest got result');
 result.reply.readException();
 let msg = result.reply.readString();
 hilog.info(0x0000, 'testTag', 'reply msg: ' + msg);
 } else {
 hilog.error(0x0000, 'testTag', 'sendRequest failed, errCode: ' + result.errCode);
 }
 }).catch((e: Error) => {
 hilog.error(0x0000, 'testTag', 'sendRequest got exception: ' + JSON.stringify(e));
 }).finally (() => {
 hilog.info(0x0000, 'testTag', 'sendRequest ends, reclaim parcel');
 data.reclaim();
 reply.reclaim();
 });
 }
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeSequenceableArray
(deprecated)

writeSequenceableArray(sequenceableArray: Sequenceable[]): boolean

将可序列化对象数组写入MessageParcel实例。

从API version 7 开始支持，API version 9 开始废弃，建议使用
writeParcelableArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

sequenceableArray

Sequenceable
[]

是

要写入的可序列化对象数组。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MySequenceable implements rpc.Sequenceable {
 num: number = 0;
 str: string = '';
 constructor(num: number, str: string) {
 this.num = num;
 this.str = str;
 }
 marshalling(messageParcel: rpc.MessageParcel): boolean {
 messageParcel.writeInt(this.num);
 messageParcel.writeString(this.str);
 return true;
 }
 unmarshalling(messageParcel: rpc.MessageParcel): boolean {
 this.num = messageParcel.readInt();
 this.str = messageParcel.readString();
 return true;
 }
}

try {
 let sequenceable = new MySequenceable(1, "aaa");
 let sequenceable2 = new MySequenceable(2, "bbb");
 let sequenceable3 = new MySequenceable(3, "ccc");
 let a = [sequenceable, sequenceable2, sequenceable3];
 let data = rpc.MessageParcel.create();
 let result = data.writeSequenceableArray(a);
 hilog.info(0x0000, 'testTag', 'writeSequenceableArray is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readSequenceableArray
(deprecated)

readSequenceableArray(sequenceableArray: Sequenceable[]): void

从MessageParcel实例中读取可序列化对象数组。

从API version 8 开始支持，API version 9 开始废弃，建议使用
readParcelableArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

sequenceableArray

Sequenceable
[]

是

要读取的可序列化对象数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MySequenceable implements rpc.Sequenceable {
 num: number = 0;
 str: string = '';
 constructor(num: number, str: string) {
 this.num = num;
 this.str = str;
 }
 marshalling(messageParcel: rpc.MessageParcel): boolean {
 messageParcel.writeInt(this.num);
 messageParcel.writeString(this.str);
 return true;
 }
 unmarshalling(messageParcel: rpc.MessageParcel): boolean {
 this.num = messageParcel.readInt();
 this.str = messageParcel.readString();
 return true;
 }
}

try {
 let sequenceable = new MySequenceable(1, "aaa");
 let sequenceable2 = new MySequenceable(2, "bbb");
 let sequenceable3 = new MySequenceable(3, "ccc");
 let a = [sequenceable, sequenceable2, sequenceable3];
 let data = rpc.MessageParcel.create();
 let result = data.writeSequenceableArray(a);
 hilog.info(0x0000, 'testTag', 'writeSequenceableArray is ' + result);
 let b = [new MySequenceable(0, ""), new MySequenceable(0, ""), new MySequenceable(0, "")];
 data.readSequenceableArray(b);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeRemoteObjectArray
(deprecated)

writeRemoteObjectArray(objectArray: IRemoteObject[]): boolean

将IRemoteObject对象数组写入MessageParcel。

从API version 8 开始支持，API version 9 开始废弃，建议使用
writeRemoteObjectArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

objectArray

IRemoteObject
[]

是

要写入MessageParcel的IRemoteObject对象数组。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel,
 option: rpc.MessageOption): boolean {
 // 具体处理由业务决定
 return true;
 }
}

try {
 let a = [new TestRemoteObject("testObject1"), new TestRemoteObject("testObject2"), new TestRemoteObject("testObject3")];
 let data = rpc.MessageParcel.create();
 let result = data.writeRemoteObjectArray(a);
 hilog.info(0x0000, 'testTag', 'writeRemoteObjectArray is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readRemoteObjectArray
(deprecated)

readRemoteObjectArray(objects: IRemoteObject[]): void

从MessageParcel读取IRemoteObject对象数组，并将其写入到创建的空数组中。

从API version 8 开始支持，API version 9 开始废弃，建议使用
readRemoteObjectArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

objects

IRemoteObject
[]

是

从MessageParcel读取的IRemoteObject对象数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel,
 option: rpc.MessageOption): boolean {
 // 具体处理由业务决定
 return true;
 }
}

try {
 let a = [new TestRemoteObject("testObject1"), new TestRemoteObject("testObject2"),
 new TestRemoteObject("testObject3")];
 let data = rpc.MessageParcel.create();
 data.writeRemoteObjectArray(a);
 let b: Array<rpc.IRemoteObject> = new Array(3);
 data.readRemoteObjectArray(b);
 hilog.info(0x0000, 'testTag', 'readRemoteObjectArray is ' + b);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readRemoteObjectArray
(deprecated)

readRemoteObjectArray(): IRemoteObject[]

从MessageParcel读取IRemoteObject对象数组。

从API version 8 开始支持，API version 9 开始废弃，建议使用
readRemoteObjectArray
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

IRemoteObject
[]

返回IRemoteObject对象数组。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel,
 option: rpc.MessageOption): boolean {
 // 具体处理由业务决定
 return true;
 }
}

try {
 let a = [new TestRemoteObject("testObject1"), new TestRemoteObject("testObject2"),
 new TestRemoteObject("testObject3")];
 let data = rpc.MessageParcel.create();
 let result = data.writeRemoteObjectArray(a);
 hilog.info(0x0000, 'testTag', 'readRemoteObjectArray is ' + result);
 let b = data.readRemoteObjectArray();
 hilog.info(0x0000, 'testTag', 'readRemoteObjectArray is ' + b);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]closeFileDescriptor
(deprecated)

static closeFileDescriptor(fd: number): void

静态方法，关闭给定的文件描述符。

从API version 8 开始支持，API version 9 开始废弃，建议使用
closeFileDescriptor
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

fd

number

是

要关闭的文件描述符。

示例：

import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let filePath = "path/to/file";
 let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
 rpc.MessageParcel.closeFileDescriptor(file.fd);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]dupFileDescriptor
(deprecated)

static dupFileDescriptor(fd: number) :number

静态方法，复制给定的文件描述符。

从API version 8 开始支持，API version 9 开始废弃，建议使用
dupFileDescriptor
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

fd

number

是

表示已存在的文件描述符。

返回值：

类型

说明

number

返回新的文件描述符。

示例：

import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let filePath = "path/to/file";
 let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
 rpc.MessageParcel.dupFileDescriptor(file.fd);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]containFileDescriptors
(deprecated)

containFileDescriptors(): boolean

检查此MessageParcel对象是否包含文件描述符。

从API version 8 开始支持，API version 9 开始废弃，建议使用
containFileDescriptors
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

boolean

true：包含文件描述符，false：未包含文件描述符。

示例：

import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let parcel = new rpc.MessageParcel();
 let filePath = "path/to/file";
 let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
 let writeResult = parcel.writeFileDescriptor(file.fd);
 hilog.info(0x0000, 'testTag', 'parcel writeFd result is ' + writeResult);
 let containFD = parcel.containFileDescriptors();
 hilog.info(0x0000, 'testTag', 'parcel after write fd containFd result is ' + containFD);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeFileDescriptor
(deprecated)

writeFileDescriptor(fd: number): boolean

写入文件描述符到MessageParcel。

从API version 8 开始支持，API version 9 开始废弃，建议使用
writeFileDescriptor
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

fd

number

是

文件描述符。

返回值：

类型

说明

boolean

true：操作成功，false：操作失败。

示例：

import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let parcel = new rpc.MessageParcel();
 let filePath = "path/to/file";
 let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
 let writeResult = parcel.writeFileDescriptor(file.fd);
 hilog.info(0x0000, 'testTag', 'parcel writeFd result is ' + writeResult);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readFileDescriptor
(deprecated)

readFileDescriptor(): number

从MessageParcel中读取文件描述符。

从API version 8 开始支持，API version 9 开始废弃，建议使用
readFileDescriptor
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回文件描述符。

示例：

import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let parcel = new rpc.MessageParcel();
 let filePath = "path/to/file";
 let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
 parcel.writeFileDescriptor(file.fd);
 let readFD = parcel.readFileDescriptor();
 hilog.info(0x0000, 'testTag', 'parcel read fd is ' + readFD);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeAshmem
(deprecated)

writeAshmem(ashmem: Ashmem): boolean

将指定的匿名共享对象写入此MessageParcel。

从API version 8 开始支持，API version 9 开始废弃，建议使用
writeAshmem
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

ashmem

Ashmem

是

要写入MessageParcel的匿名共享对象。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let parcel = new rpc.MessageParcel();
 let ashmem = rpc.Ashmem.createAshmem("ashmem", 1024);
 let isWriteSuccess = parcel.writeAshmem(ashmem);
 hilog.info(0x0000, 'testTag', 'write ashmem to result is ' + isWriteSuccess);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readAshmem
(deprecated)

readAshmem(): Ashmem

从MessageParcel读取匿名共享对象。

从API version 8 开始支持，API version 9 开始废弃，建议使用
readAshmem
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

Ashmem

返回匿名共享对象。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let parcel = new rpc.MessageParcel();
 let ashmem = rpc.Ashmem.createAshmem("ashmem", 1024);
 let isWriteSuccess = parcel.writeAshmem(ashmem);
 hilog.info(0x0000, 'testTag', 'write ashmem to result is ' + isWriteSuccess);
 let readAshmem = parcel.readAshmem();
 hilog.info(0x0000, 'testTag', 'read ashmem to result is ' + readAshmem);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]getRawDataCapacity
(deprecated)

getRawDataCapacity(): number

获取MessageParcel可以容纳的最大原始数据量。

从API version 8 开始支持，API version 9 开始废弃，建议使用
getRawDataCapacity
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回MessageParcel可以容纳的最大原始数据量，即128MB。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let parcel = new rpc.MessageParcel();
 let result = parcel.getRawDataCapacity();
 hilog.info(0x0000, 'testTag', 'parcel get RawDataCapacity result is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeRawData
(deprecated)

writeRawData(rawData: number[], size: number): boolean

将原始数据写入MessageParcel对象。

从API version 8 开始支持，API version 9 开始废弃，建议使用
writeRawDataBuffer
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

rawData

number[]

是

要写入的原始数据，大小不能超过128MB。

size

number

是

发送的原始数据大小，以字节为单位。

返回值：

类型

说明

boolean

true：写入成功，false：写入失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let parcel = new rpc.MessageParcel();
 let arr = [1, 2, 3, 4, 5];
 let isWriteSuccess = parcel.writeRawData(arr, arr.length);
 hilog.info(0x0000, 'testTag', 'parcel write raw data result is ' + isWriteSuccess);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]readRawData
(deprecated)

readRawData(size: number): number[]

从MessageParcel读取原始数据。

从API version 8 开始支持，API version 9 开始废弃，建议使用
readRawDataBuffer
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

size

number

是

要读取的原始数据的大小。

返回值：

类型

说明

number[]

返回原始数据（以字节为单位）。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let parcel = new rpc.MessageParcel();
 let arr = [1, 2, 3, 4, 5];
 let isWriteSuccess = parcel.writeRawData(arr, arr.length);
 hilog.info(0x0000, 'testTag', 'parcel write raw data result is ' + isWriteSuccess);
 let result = parcel.readRawData(5);
 hilog.info(0x0000, 'testTag', 'parcel read raw data result is ' + result);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

Parcelable
9+

在进程间通信（IPC）期间，将类的对象写入MessageSequence并从MessageSequence中恢复它们。

系统能力：
 SystemCapability.Communication.IPC.Core

[h2]marshalling
9+

marshalling(dataOut: MessageSequence): boolean

将此可序列对象封送到MessageSequence中。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataOut

MessageSequence

是

可序列对象将被封送到的MessageSequence对象。

返回值：

类型

说明

boolean

true：封送成功，false：封送失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyParcelable implements rpc.Parcelable {
 num: number = 0;
 str: string = '';
 constructor(num: number, str: string) {
 this.num = num;
 this.str = str;
 }
 marshalling(messageSequence: rpc.MessageSequence): boolean {
 messageSequence.writeInt(this.num);
 messageSequence.writeString(this.str);
 return true;
 }
 unmarshalling(messageSequence: rpc.MessageSequence): boolean {
 this.num = messageSequence.readInt();
 this.str = messageSequence.readString();
 hilog.info(0x0000, 'testTag', 'readInt is ' + this.num + ' readString is ' + this.str);
 return true;
 }
}

try {
 let parcelable = new MyParcelable(1, "aaa");
 let data = rpc.MessageSequence.create();
 data.writeParcelable(parcelable);
 let ret = new MyParcelable(0, "");
 data.readParcelable(ret);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]unmarshalling
9+

unmarshalling(dataIn: MessageSequence): boolean

从MessageSequence中解封此可序列对象。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

MessageSequence

是

已将可序列对象封送到其中的MessageSequence对象。

返回值：

类型

说明

boolean

true：反序列化成功，false：反序列化失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyParcelable implements rpc.Parcelable {
 num: number = 0;
 str: string = '';
 constructor(num: number, str: string) {
 this.num = num;
 this.str = str;
 }
 marshalling(messageSequence: rpc.MessageSequence): boolean {
 messageSequence.writeInt(this.num);
 messageSequence.writeString(this.str);
 return true;
 }
 unmarshalling(messageSequence: rpc.MessageSequence): boolean {
 this.num = messageSequence.readInt();
 this.str = messageSequence.readString();
 hilog.info(0x0000, 'testTag', 'readInt is ' + this.num + ' readString is ' + this.str);
 return true;
 }
}

try {
 let parcelable = new MyParcelable(1, "aaa");
 let data = rpc.MessageSequence.create();
 data.writeParcelable(parcelable);
 let ret = new MyParcelable(0, "");
 data.readParcelable(ret);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

Sequenceable
(deprecated)

在进程间通信（IPC）期间，将类的对象写入MessageParcel并从MessageParcel中恢复它们。

从API version 7 开始支持，API version 9 开始废弃，建议使用
Parcelable
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

[h2]marshalling
(deprecated)

marshalling(dataOut: MessageParcel): boolean

将此可序列对象封送到MessageParcel中。

从API version 7 开始支持，API version 9 开始废弃，建议使用
marshalling
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataOut

MessageParcel

是

可序列对象将被封送到的MessageParcel对象。

返回值：

类型

说明

boolean

true：封送成功，false：封送失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MySequenceable implements rpc.Sequenceable {
 num: number = 0;
 str: string = '';
 constructor(num: number, str: string) {
 this.num = num;
 this.str = str;
 }
 marshalling(messageParcel: rpc.MessageParcel): boolean {
 messageParcel.writeInt(this.num);
 messageParcel.writeString(this.str);
 return true;
 }
 unmarshalling(messageParcel: rpc.MessageParcel): boolean {
 this.num = messageParcel.readInt();
 this.str = messageParcel.readString();
 return true;
 }
}

try {
 let sequenceable = new MySequenceable(1, "aaa");
 let data = rpc.MessageParcel.create();
 let result = data.writeSequenceable(sequenceable);
 hilog.info(0x0000, 'testTag', 'writeSequenceable is ' + result);
 let ret = new MySequenceable(0, "");
 let result2 = data.readSequenceable(ret);
 hilog.info(0x0000, 'testTag', 'readSequenceable is ' + result2);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]unmarshalling
(deprecated)

unmarshalling(dataIn: MessageParcel): boolean

从MessageParcel中解封此可序列对象。

从API version 7 开始支持，API version 9 开始废弃，建议使用
unmarshalling
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

dataIn

MessageParcel

是

已将可序列对象封送到其中的MessageParcel对象。

返回值：

类型

说明

boolean

true：反序列化成功，false：反序列化失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MySequenceable implements rpc.Sequenceable {
 num: number = 0;
 str: string = '';
 constructor(num: number, str: string) {
 this.num = num;
 this.str = str;
 }
 marshalling(messageParcel: rpc.MessageParcel): boolean {
 messageParcel.writeInt(this.num);
 messageParcel.writeString(this.str);
 return true;
 }
 unmarshalling(messageParcel: rpc.MessageParcel): boolean {
 this.num = messageParcel.readInt();
 this.str = messageParcel.readString();
 return true;
 }
}

try {
 let sequenceable = new MySequenceable(1, "aaa");
 let data = rpc.MessageParcel.create();
 let result = data.writeSequenceable(sequenceable);
 hilog.info(0x0000, 'testTag', 'writeSequenceable is ' + result);
 let ret = new MySequenceable(0, "");
 let result2 = data.readSequenceable(ret);
 hilog.info(0x0000, 'testTag', 'readSequenceable is ' + result2);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

IRemoteBroker

远端对象的代理持有者。用于获取代理对象。

系统能力：
 SystemCapability.Communication.IPC.Core

[h2]asObject

asObject(): IRemoteObject

需派生类实现，获取代理或远端对象。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

IRemoteObject

如果调用者是RemoteObject对象，则直接返回本身；如果调用者是
RemoteProxy
对象，则返回它的持有者
IRemoteObject
。

示例：

import { rpc } from '@kit.IPCKit';

class TestAbility extends rpc.RemoteObject {
 asObject() {
 return this;
 }
}
let remoteObject = new TestAbility("testObject").asObject();

示例：

在本文档的示例中，通过this.getUIContext().getHostContext()来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见
获取UIAbility的上下文信息
。

// FA模型需要从@kit.AbilityKit导入featureAbility
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
 onConnect: (elementName, remoteProxy) => {
 hilog.info(0x0000, 'testTag', 'js onConnect called');
 proxy = remoteProxy;
 },
 onDisconnect: (elementName) => {
 hilog.info(0x0000, 'testTag', 'onDisconnect');
 },
 onFailed: () => {
 hilog.info(0x0000, 'testTag', 'onFailed');
 }
};
let want: Want = {
 // 获取服务端包名和ability名称
 bundleName: "com.ohos.server",
 abilityName: "com.ohos.server.EntryAbility",
};

// FA模型使用此方法连接服务
// FA.connectAbility(want,connect);

// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let connectionId = context.connectServiceExtensionAbility(want, connect);

上述onConnect回调函数中的proxy对象需要等ability异步连接成功后才会被赋值，然后才可调用proxy对象的asObject接口方法获取代理或远端对象

import { rpc } from '@kit.IPCKit';

class TestProxy {
 remote: rpc.IRemoteObject;
 constructor(remote: rpc.IRemoteObject) {
 this.remote = remote;
 }
 asObject() {
 return this.remote;
 }
}
if (proxy != undefined) {
 let iRemoteObject = new TestProxy(proxy).asObject();
}

DeathRecipient

用于订阅远端对象的死亡通知。当被订阅该通知的远端对象死亡时，本端可收到消息，调用
onRemoteDied
接口。远端对象死亡可以为远端对象所在进程死亡，远端对象所在设备关机或重启，当远端对象与本端对象属于不同设备时，也可为远端对象离开组网时。

系统能力：
 SystemCapability.Communication.IPC.Core

[h2]onRemoteDied

onRemoteDied(): void

在成功添加死亡通知订阅后，当远端对象死亡时，将自动调用本方法。

系统能力：
 SystemCapability.Communication.IPC.Core

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyDeathRecipient implements rpc.DeathRecipient {
 onRemoteDied() {
 hilog.info(0x0000, 'testTag', 'server died');
 }
}

RequestResult
9+

发送请求的响应结果。

系统能力：
 以下各项对应的系统能力均为SystemCapability.Communication.IPC.Core。

名称

类型

只读

可选

说明

errCode

number

否

否

错误码。

code

number

否

否

消息代码。

data

MessageSequence

否

否

发送给对端进程的MessageSequence对象。

reply

MessageSequence

否

否

对端进程返回的MessageSequence对象。

SendRequestResult
(deprecated)

发送请求的响应结果。

从API version 8 开始支持，API version 9 开始废弃，建议使用
RequestResult
替代。

系统能力：
 以下各项对应的系统能力均为SystemCapability.Communication.IPC.Core。

名称

类型

只读

可选

说明

errCode

number

否

否

错误码。

code

number

否

否

消息代码。

data

MessageParcel

否

否

发送给对端进程的MessageParcel对象。

reply

MessageParcel

否

否

对端进程返回的MessageParcel对象。

IRemoteObject

该接口可用于查询或获取接口描述符、添加或删除死亡通知、转储对象状态到特定文件、发送消息。

系统能力：
 SystemCapability.Communication.IPC.Core

[h2]getLocalInterface
9+

getLocalInterface(descriptor: string): IRemoteBroker

查询接口描述符的字符串。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

descriptor

string

是

接口描述符的字符串。

返回值：

类型

说明

IRemoteBroker

返回绑定到指定接口描述符的IRemoteBroker对象。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.The string length is greater than or equal to 40960 bytes;

4.The number of bytes copied to the buffer is different from the length of the obtained string.

[h2]queryLocalInterface
(deprecated)

queryLocalInterface(descriptor: string): IRemoteBroker

查询接口描述符的字符串。

从API version 7 开始支持，API version 9 开始废弃，建议使用
getLocalInterface
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

descriptor

string

是

接口描述符的字符串。

返回值：

类型

说明

IRemoteBroker

返回绑定到指定接口描述符的IRemoteBroker对象。

[h2]sendRequest
(deprecated)

sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean

以同步或异步方式向对端进程发送MessageParcel消息。如果为选项设置了异步模式，则期约立即兑现，reply报文里没有内容。如果为选项设置了同步模式，则期约将在sendRequest返回时兑现，回复内容在reply报文里。

从API version 7 开始支持，API version 9 开始废弃，建议使用
sendMessageRequest
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。

data

MessageParcel

是

保存待发送数据的MessageParcel对象。

reply

MessageParcel

是

接收应答数据的MessageParcel对象。

options

MessageOption

是

本次请求的同异步模式，默认同步调用。

返回值：

类型

说明

boolean

true：发送成功，false：发送失败。

[h2]sendMessageRequest
9+

sendMessageRequest(code: number, data: MessageSequence, reply: MessageSequence, options: MessageOption): Promise<RequestResult>

以同步或异步方式向对端进程发送MessageSequence消息。如果为选项设置了异步模式，则期约立即兑现，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则期约将在sendMessageRequest返回时兑现，回复内容在reply报文里。使用Promise异步回调。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。

data

MessageSequence

是

保存待发送数据的MessageSequence对象。

reply

MessageSequence

是

接收应答数据的MessageSequence对象。

options

MessageOption

是

本次请求的同异步模式，默认同步调用。

返回值：

类型

说明

Promise<
RequestResult
>

Promise对象，Promise对象，返回一个期约，兑现值是requestResult实例。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.Failed to obtain the passed object instance.

[h2]sendRequest
(deprecated)

sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): Promise<SendRequestResult>

以同步或异步方式向对端进程发送MessageParcel消息。如果为选项设置了异步模式，则期约立即兑现，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则期约将在sendRequest返回时兑现，回复内容在reply报文里。使用Promise异步回调。

从API version 8 开始支持，API version 9 开始废弃，建议使用
sendMessageRequest
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。

data

MessageParcel

是

保存待发送数据的MessageParcel对象。

reply

MessageParcel

是

接收应答数据的MessageParcel对象。

options

MessageOption

是

本次请求的同异步模式，默认同步调用。

返回值：

类型

说明

Promise<
SendRequestResult
>

Promise对象，返回一个期约，兑现值是sendRequestResult实例。

[h2]sendMessageRequest
9+

sendMessageRequest(code: number, data: MessageSequence, reply: MessageSequence, options: MessageOption, callback: AsyncCallback<RequestResult>): void

以同步或异步方式向对端进程发送MessageSequence消息。如果为选项设置了异步模式，则立即收到回调，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则将在sendRequest返回时收到回调，回复内容在reply报文里。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。

data

MessageSequence

是

保存待发送数据的MessageSequence对象。

reply

MessageSequence

是

接收应答数据的MessageSequence对象。

options

MessageOption

是

本次请求的同异步模式，默认同步调用。

callback

AsyncCallback<
RequestResult
>

是

回调函数。当消息发送成功时，可从RequestResult中读取服务端返回的数据。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.Failed to obtain the passed object instance.

[h2]sendRequest
(deprecated)

sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption, callback: AsyncCallback<SendRequestResult>): void

以同步或异步方式向对端进程发送MessageParcel消息。如果为选项设置了异步模式，则立即收到回调，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则将在sendRequest返回时收到回调，回复内容在reply报文里。

从API version 8 开始支持，API version 9 开始废弃，建议使用
sendMessageRequest
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。

data

MessageParcel

是

保存待发送数据的MessageParcel对象。

reply

MessageParcel

是

接收应答数据的MessageParcel对象。

options

MessageOption

是

本次请求的同异步模式，默认同步调用。

callback

AsyncCallback<
SendRequestResult
>

是

接收发送结果的回调。

[h2]registerDeathRecipient
9+

registerDeathRecipient(recipient: DeathRecipient, flags: number): void

注册用于接收远程对象死亡通知的回调。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

recipient

DeathRecipient

是

要注册的回调。

flags

number

是

死亡通知标志。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.The callback used to receive remote object death notifications is empty.

1900005

Operation allowed only for the proxy object.

1900008

The proxy or remote object is invalid.

[h2]addDeathRecipient
(deprecated)

addDeathRecipient(recipient: DeathRecipient, flags: number): boolean

注册用于接收远程对象死亡通知的回调。

从API version 7 开始支持，API version 9 开始废弃，建议使用
registerDeathRecipient
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

recipient

DeathRecipient

是

要注册的回调。

flags

number

是

死亡通知标志。

返回值：

类型

说明

boolean

true：回调注册成功，false：回调注册失败。

[h2]unregisterDeathRecipient
9+

unregisterDeathRecipient(recipient: DeathRecipient, flags: number): void

注销用于接收远程对象死亡通知的回调。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

recipient

DeathRecipient

是

要注销的回调。

flags

number

是

死亡通知标志。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.The callback used to receive remote object death notifications is empty.

1900005

Operation allowed only for the proxy object.

1900008

The proxy or remote object is invalid.

[h2]removeDeathRecipient
(deprecated)

removeDeathRecipient(recipient: DeathRecipient, flags: number): boolean

注销用于接收远程对象死亡通知的回调。

从API version 7 开始支持，API version 9 开始废弃，建议使用
unregisterDeathRecipient
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

recipient

DeathRecipient

是

要注销的回调。

flags

number

是

死亡通知标志。

返回值：

类型

说明

boolean

true：回调注销成功，false：回调注销失败。

[h2]getDescriptor
9+

getDescriptor(): string

获取对象的接口描述符，接口描述符为字符串。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

string

返回接口描述符。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900008

The proxy or remote object is invalid.

[h2]getInterfaceDescriptor
(deprecated)

getInterfaceDescriptor(): string

获取对象的接口描述符，接口描述符为字符串。

从API version 7 开始支持，API version 9 开始废弃，建议使用
getDescriptor
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

string

返回接口描述符。

[h2]isObjectDead

isObjectDead(): boolean

检查当前对象是否死亡。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

boolean

true：对象死亡，false：对象未死亡。

RemoteProxy

实现IRemoteObject代理对象。

系统能力：
 SystemCapability.Communication.IPC.Core

[h2]属性

系统能力：
 以下各项对应的系统能力均为SystemCapability.Communication.IPC.Core。

名称

类型

只读

可选

说明

PING_TRANSACTION

number

是

否

内部指令码，用于测试IPC服务是否正常。

DUMP_TRANSACTION

number

是

否

内部指令码，获取IPC服务相关的状态信息。

INTERFACE_TRANSACTION

number

是

否

内部指令码，获取对端接口描述符。

MIN_TRANSACTION_ID

number

是

否

最小有效指令码。

MAX_TRANSACTION_ID

number

是

否

最大有效指令码。

[h2]sendRequest
(deprecated)

sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean

以同步或异步方式向对端进程发送MessageParcel消息。如果为选项设置了异步模式，则期约立即兑现，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则期约将在sendRequest返回时兑现，回复内容在reply报文里。

从API version 7 开始支持，API version 8 开始废弃，建议使用
sendMessageRequest
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。

data

MessageParcel

是

保存待发送数据的MessageParcel对象。

reply

MessageParcel

是

接收应答数据的MessageParcel对象。

options

MessageOption

是

本次请求的同异步模式，默认同步调用。

返回值：

类型

说明

boolean

true：发送成功，false：发送失败。

示例：

在本文档的示例中，通过this.getUIContext().getHostContext()来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见
获取UIAbility的上下文信息
。

// FA模型需要从@kit.AbilityKit导入featureAbility
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
 onConnect: (elementName, remoteProxy) => {
 hilog.info(0x0000, 'testTag', 'js onConnect called');
 proxy = remoteProxy;
 },
 onDisconnect: (elementName) => {
 hilog.info(0x0000, 'testTag', 'onDisconnect');
 },
 onFailed: () => {
 hilog.info(0x0000, 'testTag', 'onFailed');
 }
};
let want: Want = {
 // 获取服务端包名和ability名称
 bundleName: "com.ohos.server",
 abilityName: "com.ohos.server.EntryAbility",
};

// FA模型使用此方法连接服务
// FA.connectAbility(want,connect);

// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let connectionId = context.connectServiceExtensionAbility(want, connect);

上述onConnect回调函数中的proxy对象需要等ability异步连接成功后才会被赋值，然后才可调用proxy对象的sendRequest接口方法发送消息

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let option = new rpc.MessageOption();
 let data = rpc.MessageParcel.create();
 let reply = rpc.MessageParcel.create();
 data.writeInt(1);
 data.writeString("hello");
 if (proxy != undefined) {
 let ret: boolean = proxy.sendRequest(1, data, reply, option);
 if (ret) {
 hilog.info(0x0000, 'testTag', 'sendRequest got result');
 let msg = reply.readString();
 hilog.info(0x0000, 'testTag', 'reply msg: ' + msg);
 } else {
 hilog.error(0x0000, 'testTag', 'sendRequest failed');
 }
 hilog.info(0x0000, 'testTag', 'sendRequest ends, reclaim parcel');
 data.reclaim();
 reply.reclaim();
 }
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error: ' + error);
}

[h2]sendMessageRequest
9+

sendMessageRequest(code: number, data: MessageSequence, reply: MessageSequence, options: MessageOption): Promise<RequestResult>

以同步或异步方式向对端进程发送MessageSequence消息。如果为选项设置了异步模式，则期约立即兑现，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则期约将在sendMessageRequest返回时兑现，回复内容在reply报文里。使用Promise异步回调。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。

data

MessageSequence

是

保存待发送数据的MessageSequence对象。

reply

MessageSequence

是

接收应答数据的MessageSequence对象。

options

MessageOption

是

本次请求的同异步模式，默认同步调用。

返回值：

类型

说明

Promise<
RequestResult
>

Promise对象，返回一个期约，兑现值是requestResult实例。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.Failed to obtain the passed object instance.

示例：

在本文档的示例中，通过this.getUIContext().getHostContext()来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见
获取UIAbility的上下文信息
。

// FA模型需要从@kit.AbilityKit导入featureAbility
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
 onConnect: (elementName, remoteProxy) => {
 hilog.info(0x0000, 'testTag', 'js onConnect called');
 proxy = remoteProxy;
 },
 onDisconnect: (elementName) => {
 hilog.info(0x0000, 'testTag', 'onDisconnect');
 },
 onFailed: () => {
 hilog.info(0x0000, 'testTag', 'onFailed');
 }
};
let want: Want = {
 // 获取服务端包名和ability名称
 bundleName: "com.ohos.server",
 abilityName: "com.ohos.server.EntryAbility",
};

// FA模型使用此方法连接服务
// FA.connectAbility(want,connect);

// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let connectionId = context.connectServiceExtensionAbility(want, connect);

上述onConnect回调函数中的proxy对象需要等ability异步连接成功后才会被赋值，然后才可调用proxy对象的sendMessageRequest接口方法发送消息

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let option = new rpc.MessageOption();
 let data = rpc.MessageSequence.create();
 let reply = rpc.MessageSequence.create();
 data.writeInt(1);
 data.writeString("hello");
 if (proxy != undefined) {
 proxy.sendMessageRequest(1, data, reply, option)
 .then((result: rpc.RequestResult) => {
 if (result.errCode === 0) {
 hilog.info(0x0000, 'testTag', 'sendMessageRequest got result');
 let num = result.reply.readInt();
 let msg = result.reply.readString();
 hilog.info(0x0000, 'testTag', 'reply num: ' + num);
 hilog.info(0x0000, 'testTag', 'reply msg: ' + msg);
 } else {
 hilog.error(0x0000, 'testTag', 'sendMessageRequest failed, errCode: ' + result.errCode);
 }
 }).catch((e: Error) => {
 hilog.error(0x0000, 'testTag', 'sendMessageRequest failed, error: ' + JSON.stringify(e));
 }).finally (() => {
 hilog.info(0x0000, 'testTag', 'sendMessageRequest ends, reclaim parcel');
 data.reclaim();
 reply.reclaim();
 });
 }
} catch (error) {
 hilog.error(0x0000, 'testTag', 'sendMessageRequest failed, error: ' + error);
}

[h2]sendRequest
(deprecated)

sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): Promise<SendRequestResult>

以同步或异步方式向对端进程发送MessageParcel消息。如果为选项设置了异步模式，则期约立即兑现，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则期约将在sendRequest返回时兑现，回复内容在reply报文里。使用Promise异步回调。

从API version 8 开始支持，API version 9 开始废弃，建议使用
sendMessageRequest
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。

data

MessageParcel

是

保存待发送数据的MessageParcel对象。

reply

MessageParcel

是

接收应答数据的MessageParcel对象。

options

MessageOption

是

本次请求的同异步模式，默认同步调用。

返回值：

类型

说明

Promise<
SendRequestResult
>

Promise对象，返回一个期约，兑现值是sendRequestResult实例。

示例：

在本文档的示例中，通过this.getUIContext().getHostContext()来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见
获取UIAbility的上下文信息
。

// FA模型需要从@kit.AbilityKit导入featureAbility
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
 onConnect: (elementName, remoteProxy) => {
 hilog.info(0x0000, 'testTag', 'js onConnect called');
 proxy = remoteProxy;
 },
 onDisconnect: (elementName) => {
 hilog.info(0x0000, 'testTag', 'onDisconnect');
 },
 onFailed: () => {
 hilog.info(0x0000, 'testTag', 'onFailed');
 }
};
let want: Want = {
 // 获取服务端包名和ability名称
 bundleName: "com.ohos.server",
 abilityName: "com.ohos.server.EntryAbility",
};

// FA模型使用此方法连接服务
// FA.connectAbility(want,connect);

// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let connectionId = context.connectServiceExtensionAbility(want, connect);

上述onConnect回调函数中的proxy对象需要等ability异步连接成功后才会被赋值，然后才可调用proxy对象的sendRequest接口方法发送消息

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let option = new rpc.MessageOption();
 let data = rpc.MessageParcel.create();
 let reply = rpc.MessageParcel.create();
 data.writeInt(1);
 data.writeString("hello");
 if (proxy != undefined) {
 let a = proxy.sendRequest(1, data, reply, option) as Object;
 let b = a as Promise<rpc.SendRequestResult>;
 b.then((result: rpc.SendRequestResult) => {
 if (result.errCode === 0) {
 hilog.info(0x0000, 'testTag', 'sendRequest got result');
 let num = result.reply.readInt();
 let msg = result.reply.readString();
 hilog.info(0x0000, 'testTag', 'reply num: ' + num);
 hilog.info(0x0000, 'testTag', 'reply msg: ' + msg);
 } else {
 hilog.error(0x0000, 'testTag', 'sendRequest failed, errCode: ' + result.errCode);
 }
 }).catch((e: Error) => {
 hilog.error(0x0000, 'testTag', 'sendRequest failed, error: ' + JSON.stringify(e));
 }).finally (() => {
 hilog.info(0x0000, 'testTag', 'sendRequest ends, reclaim parcel');
 data.reclaim();
 reply.reclaim();
 });
 }
} catch (error) {
 hilog.error(0x0000, 'testTag', 'sendRequest failed, error: ' + error);
}

[h2]sendMessageRequest
9+

sendMessageRequest(code: number, data: MessageSequence, reply: MessageSequence, options: MessageOption, callback: AsyncCallback<RequestResult>): void

以同步或异步方式向对端进程发送MessageSequence消息。如果为选项设置了异步模式，则立即收到回调，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则将在sendMessageRequest返回后的某个时机执行回调，回复内容在RequestResult的reply报文里。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。

data

MessageSequence

是

保存待发送数据的MessageSequence对象。

reply

MessageSequence

是

接收应答数据的MessageSequence对象。

options

MessageOption

是

本次请求的同异步模式，默认同步调用。

callback

AsyncCallback<
RequestResult
>

是

回调函数。当消息发送成功时，可从RequestResult中读取服务端返回的数据。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.Failed to obtain the passed object instance.

[h2]sendRequest
(deprecated)

sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption, callback: AsyncCallback<SendRequestResult>): void

以同步或异步方式向对端进程发送MessageParcel消息。如果为选项设置了异步模式，则立即收到回调，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则将在sendRequest返回时收到回调，回复内容在reply报文里。

从API version 8 开始支持，API version 9 开始废弃，建议使用
sendMessageRequest
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。

data

MessageParcel

是

保存待发送数据的MessageParcel对象。

reply

MessageParcel

是

接收应答数据的MessageParcel对象。

options

MessageOption

是

本次请求的同异步模式，默认同步调用。

callback

AsyncCallback<
SendRequestResult
>

是

接收发送结果的回调。

[h2]getLocalInterface
9+

getLocalInterface(interface: string): IRemoteBroker

查询并获取当前接口描述符对应的本地接口对象。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

interface

string

是

需要查询的接口描述符。

返回值：

类型

说明

IRemoteBroker

默认返回Null，标识该接口是一个代理侧接口。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

check param failed

1900006

Operation allowed only for the remote object.

示例：

在本文档的示例中，通过this.getUIContext().getHostContext()来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见
获取UIAbility的上下文信息
。

// FA模型需要从@kit.AbilityKit导入featureAbility
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
 onConnect: (elementName, remoteProxy) => {
 hilog.info(0x0000, 'testTag', 'js onConnect called');
 proxy = remoteProxy;
 },
 onDisconnect: (elementName) => {
 hilog.info(0x0000, 'testTag', 'onDisconnect');
 },
 onFailed: () => {
 hilog.info(0x0000, 'testTag', 'onFailed');
 }
};
let want: Want = {
 // 获取服务端包名和ability名称
 bundleName: "com.ohos.server",
 abilityName: "com.ohos.server.EntryAbility",
};

// FA模型使用此方法连接服务
// FA.connectAbility(want,connect);

// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let connectionId = context.connectServiceExtensionAbility(want, connect);

上述onConnect回调函数中的proxy对象需要等ability异步连接成功后才会被赋值，然后才可调用proxy对象的getLocalInterface接口方法查询接口对象

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

if (proxy != undefined) {
 try {
 let broker: rpc.IRemoteBroker = proxy.getLocalInterface("testObject");
 hilog.info(0x0000, 'testTag', 'getLocalInterface is ' + broker);
 } catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'rpc get local interface fail, errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'rpc get local interface fail, errorMessage ' + e.message);
 }
}

[h2]queryLocalInterface
(deprecated)

queryLocalInterface(interface: string): IRemoteBroker

查询并获取当前接口描述符对应的本地接口对象。

从API version 7 开始支持，API version 9 开始废弃，建议使用
getLocalInterface
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

interface

string

是

需要查询的接口描述符。

返回值：

类型

说明

IRemoteBroker

默认返回Null，标识该接口是一个代理侧接口。

示例：

在本文档的示例中，通过this.getUIContext().getHostContext()来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见
获取UIAbility的上下文信息
。

// FA模型需要从@kit.AbilityKit导入featureAbility
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
 onConnect: (elementName, remoteProxy) => {
 hilog.info(0x0000, 'testTag', 'js onConnect called');
 proxy = remoteProxy;
 },
 onDisconnect: (elementName) => {
 hilog.info(0x0000, 'testTag', 'onDisconnect');
 },
 onFailed: () => {
 hilog.info(0x0000, 'testTag', 'onFailed');
 }
};
let want: Want = {
 // 获取服务端包名和ability名称
 bundleName: "com.ohos.server",
 abilityName: "com.ohos.server.EntryAbility",
};

// FA模型使用此方法连接服务
// FA.connectAbility(want,connect);

// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let connectionId = context.connectServiceExtensionAbility(want, connect);

上述onConnect回调函数中的proxy对象需要等ability异步连接成功后才会被赋值，然后才可调用proxy对象的queryLocalInterface接口获取接口对象

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

if (proxy != undefined) {
 let broker: rpc.IRemoteBroker = proxy.queryLocalInterface("testObject");
 hilog.info(0x0000, 'testTag', 'queryLocalInterface is ' + broker);
}

[h2]registerDeathRecipient
9+

registerDeathRecipient(recipient: DeathRecipient, flags: number): void

注册用于接收远程对象死亡通知的回调。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

recipient

DeathRecipient

是

要注册的回调。

flags

number

是

死亡通知标志。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.The callback used to receive remote object death notifications is empty.

1900008

The proxy or remote object is invalid.

示例：

在本文档的示例中，通过this.getUIContext().getHostContext()来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见
获取UIAbility的上下文信息
。

// FA模型需要从@kit.AbilityKit导入featureAbility
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
 onConnect: (elementName, remoteProxy) => {
 hilog.info(0x0000, 'testTag', 'js onConnect called');
 proxy = remoteProxy;
 },
 onDisconnect: (elementName) => {
 hilog.info(0x0000, 'testTag', 'onDisconnect');
 },
 onFailed: () => {
 hilog.info(0x0000, 'testTag', 'onFailed');
 }
};
let want: Want = {
 // 获取服务端包名和ability名称
 bundleName: "com.ohos.server",
 abilityName: "com.ohos.server.EntryAbility",
};

// FA模型使用此方法连接服务
// FA.connectAbility(want,connect);

// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let connectionId = context.connectServiceExtensionAbility(want, connect);

上述onConnect回调函数中的proxy对象需要等ability异步连接成功后才会被赋值，然后才可调用proxy对象的registerDeathRecipient接口注册死亡回调

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class MyDeathRecipient implements rpc.DeathRecipient {
 onRemoteDied() {
 hilog.info(0x0000, 'testTag', 'server died');
 }
}
if (proxy != undefined) {
 try {
 let deathRecipient = new MyDeathRecipient();
 proxy.registerDeathRecipient(deathRecipient, 0);
 } catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'proxy register deathRecipient fail, errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'proxy register deathRecipient fail, errorMessage ' + e.message);
 }
}

[h2]addDeathRecipient
(deprecated)

addDeathRecipient(recipient: DeathRecipient, flags: number): boolean

注册用于接收远程对象死亡通知的回调。

从API version 7 开始支持，API version 9 开始废弃，建议使用
registerDeathRecipient
类替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

recipient

DeathRecipient

是

收件人表示要注册的回调。

flags

number

是

死亡通知标志。保留参数。设置为0。

返回值：

类型

说明

boolean

true：回调注册成功，false：回调注册失败。

示例：

在本文档的示例中，通过this.getUIContext().getHostContext()来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见
获取UIAbility的上下文信息
。

// FA模型需要从@kit.AbilityKit导入featureAbility
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
 onConnect: (elementName, remoteProxy) => {
 hilog.info(0x0000, 'testTag', 'js onConnect called');
 proxy = remoteProxy;
 },
 onDisconnect: (elementName) => {
 hilog.info(0x0000, 'testTag', 'onDisconnect');
 },
 onFailed: () => {
 hilog.info(0x0000, 'testTag', 'onFailed');
 }
};
let want: Want = {
 // 获取服务端包名和ability名称
 bundleName: "com.ohos.server",
 abilityName: "com.ohos.server.EntryAbility",
};

// FA模型使用此方法连接服务
// FA.connectAbility(want,connect);

// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let connectionId = context.connectServiceExtensionAbility(want, connect);

上述onConnect回调函数中的proxy对象需要等ability异步连接成功后才会被赋值，然后才可调用proxy对象的addDeathRecipient接口方法新增死亡回调

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyDeathRecipient implements rpc.DeathRecipient {
 onRemoteDied() {
 hilog.info(0x0000, 'testTag', 'server died');
 }
}
if (proxy != undefined) {
 let deathRecipient = new MyDeathRecipient();
 proxy.addDeathRecipient(deathRecipient, 0);
}

[h2]unregisterDeathRecipient
9+

unregisterDeathRecipient(recipient: DeathRecipient, flags: number): void

注销用于接收远程对象死亡通知的回调。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

recipient

DeathRecipient

是

要注销的回调。

flags

number

是

死亡通知标志。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.The callback used to receive remote object death notifications is empty.

1900008

The proxy or remote object is invalid.

示例：

在本文档的示例中，通过this.getUIContext().getHostContext()来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见
获取UIAbility的上下文信息
。

// FA模型需要从@kit.AbilityKit导入featureAbility
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
 onConnect: (elementName, remoteProxy) => {
 hilog.info(0x0000, 'testTag', 'js onConnect called');
 proxy = remoteProxy;
 },
 onDisconnect: (elementName) => {
 hilog.info(0x0000, 'testTag', 'onDisconnect');
 },
 onFailed: () => {
 hilog.info(0x0000, 'testTag', 'onFailed');
 }
};
let want: Want = {
 // 获取服务端包名和ability名称
 bundleName: "com.ohos.server",
 abilityName: "com.ohos.server.EntryAbility",
};

// FA模型使用此方法连接服务
// FA.connectAbility(want,connect);

// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let connectionId = context.connectServiceExtensionAbility(want, connect);

上述onConnect回调函数中的proxy对象需要等ability异步连接成功后才会被赋值，然后才可调用proxy对象的unregisterDeathRecipient接口方法注销死亡回调

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class MyDeathRecipient implements rpc.DeathRecipient {
 onRemoteDied() {
 hilog.info(0x0000, 'testTag', 'server died');
 }
}
if (proxy != undefined) {
 try {
 let deathRecipient = new MyDeathRecipient();
 proxy.registerDeathRecipient(deathRecipient, 0);
 proxy.unregisterDeathRecipient(deathRecipient, 0);
 } catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'proxy unregister deathRecipient fail, errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'proxy unregister deathRecipient fail, errorMessage ' + e.message);
 }
}

[h2]removeDeathRecipient
(deprecated)

removeDeathRecipient(recipient: DeathRecipient, flags: number): boolean

注销用于接收远程对象死亡通知的回调。

从API version 7 开始支持，API version 9 开始废弃，建议使用
unregisterDeathRecipient
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

recipient

DeathRecipient

是

要注销的死亡回调。

flags

number

是

死亡通知标志。保留参数。设置为0。

返回值：

类型

说明

boolean

true：回调注销成功，false：回调注销失败。

示例：

在本文档的示例中，通过this.getUIContext().getHostContext()来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见
获取UIAbility的上下文信息
。

// FA模型需要从@kit.AbilityKit导入featureAbility
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
 onConnect: (elementName, remoteProxy) => {
 hilog.info(0x0000, 'testTag', 'js onConnect called');
 proxy = remoteProxy;
 },
 onDisconnect: (elementName) => {
 hilog.info(0x0000, 'testTag', 'onDisconnect');
 },
 onFailed: () => {
 hilog.info(0x0000, 'testTag', 'onFailed');
 }
};
let want: Want = {
 // 获取服务端包名和ability名称
 bundleName: "com.ohos.server",
 abilityName: "com.ohos.server.EntryAbility",
};

// FA模型使用此方法连接服务
// FA.connectAbility(want,connect);

// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let connectionId = context.connectServiceExtensionAbility(want, connect);

上述onConnect回调函数中的proxy对象需要等ability异步连接成功后才会被赋值，然后才可调用proxy对象的removeDeathRecipient接口方法去注册死亡回调

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyDeathRecipient implements rpc.DeathRecipient {
 onRemoteDied() {
 hilog.info(0x0000, 'testTag', 'server died');
 }
}
if (proxy != undefined) {
 let deathRecipient = new MyDeathRecipient();
 proxy.addDeathRecipient(deathRecipient, 0);
 proxy.removeDeathRecipient(deathRecipient, 0);
}

[h2]getDescriptor
9+

getDescriptor(): string

获取对象的接口描述符，接口描述符为字符串。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

string

返回接口描述符。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900007

communication failed.

1900008

The proxy or remote object is invalid.

示例：

在本文档的示例中，通过this.getUIContext().getHostContext()来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见
获取UIAbility的上下文信息
。

// FA模型需要从@kit.AbilityKit导入featureAbility
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
 onConnect: (elementName, remoteProxy) => {
 hilog.info(0x0000, 'testTag', 'js onConnect called');
 proxy = remoteProxy;
 },
 onDisconnect: (elementName) => {
 hilog.info(0x0000, 'testTag', 'onDisconnect');
 },
 onFailed: () => {
 hilog.info(0x0000, 'testTag', 'onFailed');
 }
};
let want: Want = {
 // 获取服务端包名和ability名称
 bundleName: "com.ohos.server",
 abilityName: "com.ohos.server.EntryAbility",
};

// FA模型使用此方法连接服务
// FA.connectAbility(want,connect);

// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let connectionId = context.connectServiceExtensionAbility(want, connect);

上述onConnect回调函数中的proxy对象需要等ability异步连接成功后才会被赋值，然后才可调用proxy对象的getDescriptor接口方法获取对象的接口描述符

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

if (proxy != undefined) {
 try {
 let descriptor: string = proxy.getDescriptor();
 hilog.info(0x0000, 'testTag', 'descriptor is ' + descriptor);
 } catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'rpc get interface descriptor fail, errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'rpc get interface descriptor fail, errorMessage ' + e.message);
 }
}

[h2]getInterfaceDescriptor
(deprecated)

getInterfaceDescriptor(): string

查询当前代理对象接口的描述符。

从API version 7 开始支持，API version 9 开始废弃，建议使用
getDescriptor
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

string

当前的接口描述符。

示例：

在本文档的示例中，通过this.getUIContext().getHostContext()来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见
获取UIAbility的上下文信息
。

// FA模型需要从@kit.AbilityKit导入featureAbility
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
 onConnect: (elementName, remoteProxy) => {
 hilog.info(0x0000, 'testTag', 'js onConnect called');
 proxy = remoteProxy;
 },
 onDisconnect: (elementName) => {
 hilog.info(0x0000, 'testTag', 'onDisconnect');
 },
 onFailed: () => {
 hilog.info(0x0000, 'testTag', 'onFailed');
 }
};
let want: Want = {
 // 获取服务端包名和ability名称
 bundleName: "com.ohos.server",
 abilityName: "com.ohos.server.EntryAbility",
};

// FA模型使用此方法连接服务
// FA.connectAbility(want,connect);

// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let connectionId = context.connectServiceExtensionAbility(want, connect);

上述onConnect回调函数中的proxy对象需要等ability异步连接成功后才会被赋值，然后才可调用proxy对象的getInterfaceDescriptor接口方法查询当前代理对象接口的描述符

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

if (proxy != undefined) {
 let descriptor: string = proxy.getInterfaceDescriptor();
 hilog.info(0x0000, 'testTag', 'descriptor is ' + descriptor);
}

[h2]isObjectDead

isObjectDead(): boolean

指示对应的RemoteObject是否死亡。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

boolean

true：对应的对象已经死亡，false：对应的对象未死亡。

示例：

在本文档的示例中，通过this.getUIContext().getHostContext()来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见
获取UIAbility的上下文信息
。

// FA模型需要从@kit.AbilityKit导入featureAbility
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
 onConnect: (elementName, remoteProxy) => {
 hilog.info(0x0000, 'testTag', 'js onConnect called');
 proxy = remoteProxy;
 },
 onDisconnect: (elementName) => {
 hilog.info(0x0000, 'testTag', 'onDisconnect');
 },
 onFailed: () => {
 hilog.info(0x0000, 'testTag', 'onFailed');
 }
};
let want: Want = {
 // 获取服务端包名和ability名称
 bundleName: "com.ohos.server",
 abilityName: "com.ohos.server.EntryAbility",
};

// FA模型使用此方法连接服务
// FA.connectAbility(want,connect);

// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let connectionId = context.connectServiceExtensionAbility(want, connect);

上述onConnect回调函数中的proxy对象需要等ability异步连接成功后才会被赋值，然后才可调用proxy对象的isObjectDead接口方法判断当前对象是否已经死亡

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

if (proxy != undefined) {
 let isDead: boolean = proxy.isObjectDead();
 hilog.info(0x0000, 'testTag', 'isObjectDead is ' + isDead);
}

MessageOption

公共消息选项，使用指定的标志类型，构造指定的MessageOption对象。

系统能力：
 SystemCapability.Communication.IPC.Core

[h2]属性

系统能力：
 以下各项对应的系统能力均为SystemCapability.Communication.IPC.Core。

名称

类型

只读

可选

说明

TF_SYNC

number

是

否

同步调用标识。

TF_ASYNC

number

是

否

异步调用标识。

TF_ACCEPT_FDS

number

是

否

指示sendMessageRequest
9+
接口可以传递文件描述符。

TF_WAIT_TIME

number

是

否

RPC等待时间(单位/秒)，IPC场景下无效。默认等待为8秒（不建议修改等待时间）。

[h2]constructor
9+

constructor(async?: boolean)

MessageOption构造函数。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

async

boolean

否

true：表示异步调用标志，false：表示同步调用标志。默认同步调用。

示例：

import { rpc } from '@kit.IPCKit';

class TestRemoteObject extends rpc.MessageOption {
 constructor(async: boolean) {
 super(async);
 }
}

[h2]constructor

constructor(syncFlags?: number, waitTime?: number)

MessageOption构造函数。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

syncFlags

number

否

同步调用或异步调用标志，同步调用标志：0；异步调用标志：1。默认同步调用。

waitTime

number

否

调用rpc最长等待时间。默认TF_WAIT_TIME。

示例：

import { rpc } from '@kit.IPCKit';

class TestRemoteObject extends rpc.MessageOption {
 constructor(syncFlags?: number,waitTime?: number) {
 super(syncFlags,waitTime);
 }
}

[h2]isAsync
9+

isAsync(): boolean

获取
sendMessageRequest
调用中确定同步或是异步的标志。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

boolean

true：异步调用成功，false：同步调用成功。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let option = new rpc.MessageOption();
 let result = option.isAsync();
} catch (error) {
 hilog.info(0x0000, 'testTag', 'error ' + error);
}

[h2]setAsync
9+

setAsync(isAsync: boolean): void

设置
sendMessageRequest
调用中确定同步或是异步的标志。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

isAsync

boolean

是

true：表示异步调用标志，false：表示同步调用标志。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let option = new rpc.MessageOption();
 option.setAsync(true);
} catch (error) {
 hilog.info(0x0000, 'testTag', 'error ' + error);
}

[h2]getFlags

getFlags(): number

获取同步调用或异步调用标志。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

调用成功返回同步调用或异步调用标志。同步调用标志：0，异步调用标志：1。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let option = new rpc.MessageOption();
 hilog.info(0x0000, 'testTag', 'create object successfully');
 let flag = option.getFlags();
 hilog.info(0x0000, 'testTag', 'run getFlags success, flag is ' + flag);
 option.setFlags(rpc.MessageOption.TF_ASYNC);
 hilog.info(0x0000, 'testTag', 'run setFlags success');
 let flag2 = option.getFlags();
 hilog.info(0x0000, 'testTag', 'run getFlags success, flag2 is ' + flag2);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]setFlags

setFlags(flags: number): void

设置同步调用或异步调用标志。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

flags

number

是

同步调用或异步调用标志。同步调用标志：0；异步调用标志：1

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let option = new rpc.MessageOption();
 option.setFlags(rpc.MessageOption.TF_ASYNC);
 hilog.info(0x0000, 'testTag', 'run setFlags success');
 let flag = option.getFlags();
 hilog.info(0x0000, 'testTag', 'run getFlags success, flag is ' + flag);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]getWaitTime

getWaitTime(): number

获取rpc调用的最长等待时间。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

rpc最长等待时间。默认TF_WAIT_TIME。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let option = new rpc.MessageOption();
 let time = option.getWaitTime();
 hilog.info(0x0000, 'testTag', 'run getWaitTime success, time is ' + time);
 option.setWaitTime(16);
 let time2 = option.getWaitTime();
 hilog.info(0x0000, 'testTag', 'run getWaitTime success, time is ' + time2);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]setWaitTime

setWaitTime(waitTime: number): void

设置rpc调用最长等待时间。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

waitTime

number

是

rpc调用最长等待时间，上限为3000秒。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let option = new rpc.MessageOption();
 option.setWaitTime(16);
 let time = option.getWaitTime();
 hilog.info(0x0000, 'testTag', 'run getWaitTime success, time is ' + time);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

IPCSkeleton

用于获取IPC上下文信息，包括获取UID和PID、获取本端和对端设备ID、检查接口调用是否在同一设备上。

系统能力：
 SystemCapability.Communication.IPC.Core

[h2]getContextObject

static getContextObject(): IRemoteObject

静态方法，获取系统能力的管理者。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

IRemoteObject

返回系统能力管理者。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let samgr = rpc.IPCSkeleton.getContextObject();
 hilog.info(0x0000, 'testTag', 'RpcServer: getContextObject result: ' + samgr);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]getCallingPid

static getCallingPid(): number

静态方法，获取调用者的PID。此方法由
RemoteObject
对象在IPC上下文环境（
onRemoteMessageRequest
）中调用，不在则返回本进程的PID。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回调用者的PID。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 try {
 let callerPid = rpc.IPCSkeleton.getCallingPid();
 hilog.info(0x0000, 'testTag', 'RpcServer: getCallingPid result: ' + callerPid);
 } catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
 }
 return true;
 }
}

[h2]getCallingUid

static getCallingUid(): number

静态方法，获取调用者的UID。此方法由
RemoteObject
对象在IPC上下文环境（
onRemoteMessageRequest
）中调用，不在则返回本进程的UID。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回调用者的UID。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 try {
 let callerUid = rpc.IPCSkeleton.getCallingUid();
 hilog.info(0x0000, 'testTag', 'RpcServer: getCallingUid result: ' + callerUid);
 } catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
 }
 return true;
 }
}

[h2]getCallingTokenId
8+

static getCallingTokenId(): number

静态方法，获取调用者的TokenId，用于被调用方对调用方的身份校验。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回调用者的TokenId。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 try {
 let callerTokenId = rpc.IPCSkeleton.getCallingTokenId();
 hilog.info(0x0000, 'testTag', 'RpcServer: getCallingTokenId result: ' + callerTokenId);
 } catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
 }
 return true;
 }
}

[h2]getCallingDeviceID

static getCallingDeviceID(): string

静态方法，获取调用者进程所在的设备ID。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

string

返回调用者进程所在的设备ID。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 try {
 let callerDeviceID = rpc.IPCSkeleton.getCallingDeviceID();
 hilog.info(0x0000, 'testTag', 'RpcServer: callerDeviceID is ' + callerDeviceID);
 } catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
 }
 return true;
 }
}

[h2]getLocalDeviceID

static getLocalDeviceID(): string

静态方法，获取本端设备ID。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

string

返回本地设备的ID。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 try {
 let localDeviceID = rpc.IPCSkeleton.getLocalDeviceID();
 hilog.info(0x0000, 'testTag', 'RpcServer: localDeviceID is ' + localDeviceID);
 } catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
 }
 return true;
 }
}

[h2]isLocalCalling

static isLocalCalling(): boolean

静态方法，检查当前通信对端是否是本设备的进程。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

boolean

true：调用在同一台设备，false：调用未在同一台设备。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 try {
 let isLocalCalling = rpc.IPCSkeleton.isLocalCalling();
 hilog.info(0x0000, 'testTag', 'RpcServer: isLocalCalling is ' + isLocalCalling);
 } catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
 }
 return true;
 }
}

[h2]flushCmdBuffer
9+

static flushCmdBuffer(object: IRemoteObject): void

静态方法，将所有挂起的命令从指定的RemoteProxy刷新到相应的RemoteObject。建议在任何时间执行敏感操作之前调用此方法。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

object

IRemoteObject

是

指定的RemoteProxy。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}
try {
 let remoteObject = new TestRemoteObject("aaa");
 rpc.IPCSkeleton.flushCmdBuffer(remoteObject);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'proxy flushCmdBuffer fail, errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'proxy flushCmdBuffer fail, errorMessage ' + e.message);
}

[h2]flushCommands
(deprecated)

static flushCommands(object: IRemoteObject): number

静态方法，将所有挂起的命令从指定的RemoteProxy刷新到相应的RemoteObject。建议在任何时间执行敏感操作之前调用此方法。

从API version 7 开始支持，API version 9 开始废弃，建议使用
flushCmdBuffer
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

object

IRemoteObject

是

指定的RemoteProxy。

返回值：

类型

说明

number

如果操作成功，返回0；如果输入对象为空或RemoteObject，或者操作失败，返回错误代码。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}
try {
 let remoteObject = new TestRemoteObject("aaa");
 let ret = rpc.IPCSkeleton.flushCommands(remoteObject);
 hilog.info(0x0000, 'testTag', 'RpcServer: flushCommands result: ' + ret);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'proxy flushCmdBuffer fail, errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'proxy flushCmdBuffer fail, errorMessage ' + e.message);
}

[h2]resetCallingIdentity

static resetCallingIdentity(): string

静态方法，将远程用户的UID和PID替换为本地用户的UID和PID。它可以用于身份验证等场景。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

string

返回包含远程用户的UID和PID的字符串。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 try {
 let callingIdentity = rpc.IPCSkeleton.resetCallingIdentity();
 hilog.info(0x0000, 'testTag', 'RpcServer: callingIdentity is ' + callingIdentity);
 } catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
 }
 return true;
 }
}

[h2]restoreCallingIdentity
9+

static restoreCallingIdentity(identity: string): void

静态方法，将UID和PID恢复为远程用户的UID和PID。它通常在使用resetCallingIdentity后调用，需要resetCallingIdentity返回的远程用户的UID和PID。该接口仅支持在IPC上下文（
onRemoteMessageRequest
）中使用，否则直接返回。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

identity

string

是

标识表示包含远程用户UID和PID的字符串，其长度应小于40960字节。由resetCallingIdentity返回。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.The string length is greater than or equal to 40960 bytes;

4.The number of bytes copied to the buffer is different from the length of the obtained string.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 try {
 let callingIdentity = rpc.IPCSkeleton.resetCallingIdentity();
 hilog.info(0x0000, 'testTag', 'RpcServer: callingIdentity is ' + callingIdentity);
 rpc.IPCSkeleton.restoreCallingIdentity(callingIdentity);
 } catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
 }
 return true;
 }
}

[h2]setCallingIdentity
(deprecated)

static setCallingIdentity(identity: string): boolean

静态方法，将UID和PID恢复为远程用户的UID和PID。它通常在使用resetCallingIdentity后调用，需要resetCallingIdentity返回的远程用户的UID和PID。

从API version 7 开始支持，API version 9 开始废弃，建议使用
restoreCallingIdentity
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

identity

string

是

标识表示包含远程用户UID和PID的字符串。由resetCallingIdentity返回。

返回值：

类型

说明

boolean

true：设置成功，false：设置失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 try {
 let callingIdentity = rpc.IPCSkeleton.resetCallingIdentity();
 hilog.info(0x0000, 'testTag', 'RpcServer: callingIdentity is ' + callingIdentity);
 let ret = rpc.IPCSkeleton.setCallingIdentity(callingIdentity);
 hilog.info(0x0000, 'testTag', 'RpcServer: setCallingIdentity is ' + ret);
 } catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
 }
 return true;
 }
}

RemoteObject

实现远程对象。服务提供者必须继承此类。

系统能力：
 SystemCapability.Communication.IPC.Core

[h2]constructor

constructor(descriptor: string)

RemoteObject构造函数。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

descriptor

string

是

接口描述符，其长度应小于40960字节。

示例：

import { rpc } from '@kit.IPCKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
}

[h2]sendRequest
(deprecated)

sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean

以同步或异步方式向对端进程发送MessageParcel消息。如果为选项设置了异步模式，则期约立即兑现，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则期约将在sendRequest返回时兑现，回复内容在reply报文里。

从API version 7 开始支持，API version 8 开始废弃，建议使用
sendMessageRequest
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。

data

MessageParcel

是

保存待发送数据的MessageParcel对象。

reply

MessageParcel

是

接收应答数据的MessageParcel对象。

options

MessageOption

是

本次请求的同异步模式，默认同步调用。

返回值：

类型

说明

boolean

true：发送成功，false：发送失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class testRemoteObject extends rpc.RemoteObject {
 onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel,
 option: rpc.MessageOption): boolean {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}
try {
 let testRemoteObject = new TestRemoteObject("testObject");
 let option = new rpc.MessageOption();
 let data = rpc.MessageParcel.create();
 let reply = rpc.MessageParcel.create();
 data.writeInt(1);
 data.writeString("hello");
 let ret: boolean = testRemoteObject.sendRequest(1, data, reply, option);
 if (ret) {
 hilog.info(0x0000, 'testTag', 'sendRequest got result');
 let msg = reply.readString();
 hilog.info(0x0000, 'testTag', 'reply msg: ' + msg);
 } else {
 hilog.error(0x0000, 'testTag', 'sendRequest failed');
 }
 hilog.info(0x0000, 'testTag', 'sendRequest ends, reclaim parcel');
 data.reclaim();
 reply.reclaim();
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]sendMessageRequest
9+

sendMessageRequest(code: number, data: MessageSequence, reply: MessageSequence, options: MessageOption): Promise<RequestResult>

以同步或异步方式向对端进程发送MessageSequence消息。如果为选项设置了异步模式，则期约立即兑现，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则期约将在sendMessageRequest返回时兑现，回复内容在reply报文里。使用Promise异步回调。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。

data

MessageSequence

是

保存待发送数据的MessageSequence对象。

reply

MessageSequence

是

接收应答数据的MessageSequence对象。

options

MessageOption

是

本次请求的同异步模式，默认同步调用。

返回值：

类型

说明

Promise<
RequestResult
>

Promise对象，返回一个期约，兑现值是RequestResult实例。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.Failed to obtain the passed object instance.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}
try {
 let testRemoteObject = new TestRemoteObject("testObject");
 let option = new rpc.MessageOption();
 let data = rpc.MessageSequence.create();
 let reply = rpc.MessageSequence.create();
 data.writeInt(1);
 data.writeString("hello");
 testRemoteObject.sendMessageRequest(1, data, reply, option)
 .then((result: rpc.RequestResult) => {
 if (result.errCode === 0) {
 hilog.info(0x0000, 'testTag', 'sendMessageRequest got result');
 let num = result.reply.readInt();
 let msg = result.reply.readString();
 hilog.info(0x0000, 'testTag', 'reply num: ' + num);
 hilog.info(0x0000, 'testTag', 'reply msg: ' + msg);
 } else {
 hilog.error(0x0000, 'testTag', 'sendMessageRequest failed, errCode: ' + result.errCode);
 }
 }).catch((e: Error) => {
 hilog.error(0x0000, 'testTag', 'sendMessageRequest failed, error: ' + JSON.stringify(e));
 }).finally (() => {
 hilog.info(0x0000, 'testTag', 'sendMessageRequest ends, reclaim parcel');
 data.reclaim();
 reply.reclaim();
 });
} catch (error) {
 hilog.error(0x0000, 'testTag', 'sendMessageRequest failed, error: ' + error);
}

[h2]sendRequest
(deprecated)

sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): Promise<SendRequestResult>

以同步或异步方式向对端进程发送MessageParcel消息。如果为选项设置了异步模式，则期约立即兑现，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则期约将在sendRequest返回时兑现，回复内容在reply报文里。使用Promise异步回调。

从API version 8 开始支持，API version 9 开始废弃，建议使用
sendMessageRequest
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。

data

MessageParcel

是

保存待发送数据的MessageParcel对象。

reply

MessageParcel

是

接收应答数据的MessageParcel对象。

options

MessageOption

是

本次请求的同异步模式，默认同步调用。

返回值：

类型

说明

Promise<
SendRequestResult
>

Promise对象，返回一个期约，兑现值是sendRequestResult实例。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel, option: rpc.MessageOption): boolean {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}
try {
 let testRemoteObject = new TestRemoteObject("testObject");
 let option = new rpc.MessageOption();
 let data = rpc.MessageParcel.create();
 let reply = rpc.MessageParcel.create();
 data.writeInt(1);
 data.writeString("hello");
 let a = testRemoteObject.sendRequest(1, data, reply, option) as Object;
 let b = a as Promise<rpc.SendRequestResult>;
 b.then((result: rpc.SendRequestResult) => {
 if (result.errCode === 0) {
 hilog.info(0x0000, 'testTag', 'sendRequest got result');
 let num = result.reply.readInt();
 let msg = result.reply.readString();
 hilog.info(0x0000, 'testTag', 'reply num: ' + num);
 hilog.info(0x0000, 'testTag', 'reply msg: ' + msg);
 } else {
 hilog.error(0x0000, 'testTag', 'sendRequest failed, errCode: ' + result.errCode);
 }
 }).catch((e: Error) => {
 hilog.error(0x0000, 'testTag', 'sendRequest failed, error: ' + JSON.stringify(e));
 }).finally (() => {
 hilog.info(0x0000, 'testTag', 'sendRequest ends, reclaim parcel');
 data.reclaim();
 reply.reclaim();
 });
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error: ' + error);
}

[h2]sendMessageRequest
9+

sendMessageRequest(code: number, data: MessageSequence, reply: MessageSequence, options: MessageOption, callback: AsyncCallback<RequestResult>): void

以同步或异步方式向对端进程发送MessageSequence消息。如果为选项设置了异步模式，则立即收到回调，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则将在sendMessageRequest返回时收到回调，回复内容在reply报文里。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。

data

MessageSequence

是

保存待发送数据的MessageSequence对象。

reply

MessageSequence

是

接收应答数据的MessageSequence对象。

options

MessageOption

是

本次请求的同异步模式，默认同步调用。

callback

AsyncCallback<
RequestResult
>

是

回调函数。当消息发送成功时，可从RequestResult中读取服务端返回的数据。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.Failed to obtain the passed object instance.

[h2]sendRequest
(deprecated)

sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption, callback: AsyncCallback<SendRequestResult>): void

以同步或异步方式向对端进程发送MessageParcel消息。如果为选项设置了异步模式，则立即收到回调，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则将在sendRequest返回时收到回调，回复内容在reply报文里。

从API version 8 开始支持，API version 9 开始废弃，建议使用
sendMessageRequest
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。

data

MessageParcel

是

保存待发送数据的MessageParcel对象。

reply

MessageParcel

是

接收应答数据的MessageParcel对象。

options

MessageOption

是

本次请求的同异步模式，默认同步调用。

callback

AsyncCallback<
SendRequestResult
>

是

接收发送结果的回调。

[h2]onRemoteMessageRequest
9+

onRemoteMessageRequest(code: number, data: MessageSequence, reply: MessageSequence, options: MessageOption): boolean | Promise<boolean>

sendMessageRequest请求的响应处理函数，服务端在该函数里同步或异步地处理请求，回复结果。

开发者应优先选择重写onRemoteMessageRequest方法，其中可以自由实现同步和异步的消息处理。

开发者同时重写onRemoteRequest和onRemoteMessageRequest方法��，仅onRemoteMessageRequest方法生效。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

对端发送的服务请求码。

data

MessageSequence

是

携带客户端调用参数的MessageSequence对象。

reply

MessageSequence

是

写入结果的MessageSequence对象。

options

MessageOption

是

指示操作是同步还是异步。

返回值：

类型

说明

boolean | Promise<boolean>

- 若在onRemoteMessageRequest中同步处理请求，则返回一个布尔值。返回true表示操作成功，返回false表示操作失败。

- 若在onRemoteMessageRequest中异步处理请求，则返回一个Promise对象。返回true表示操作成功，返回false表示操作失败。

示例：

// 重写onRemoteMessageRequest方法同步处理请求
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }

 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean {
 if (code === 1) {
 hilog.info(0x0000, 'testTag', 'RpcServer: sync onRemoteMessageRequest is called');
 return true;
 } else {
 hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
 return false;
 }
 }
}

示例：

// 重写onRemoteMessageRequest方法异步处理请求
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }

 async onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): Promise<boolean> {
 if (code === 1) {
 hilog.info(0x0000, 'testTag', 'RpcServer: async onRemoteMessageRequest is called');
 } else {
 hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
 return false;
 }
 await new Promise((resolve: (data: rpc.RequestResult) => void) => {
 setTimeout(resolve, 100);
 })
 return true;
 }
}

示例：

// 同时重写onRemoteMessageRequest和onRemoteRequest方法同步处理请求
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }

 onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel, option: rpc.MessageOption): boolean {
 if (code === 1) {
 hilog.info(0x0000, 'testTag', 'RpcServer: sync onRemoteMessageRequest is called');
 return true;
 } else {
 hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
 return false;
 }
 }
 // 同时调用仅会执行onRemoteMessageRequest
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 if (code === 1) {
 hilog.info(0x0000, 'testTag', 'RpcServer: async onRemoteMessageRequest is called');
 } else {
 hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
 return false;
 }
 return true;
 }
}

[h2]onRemoteRequest
(deprecated)

onRemoteRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean

sendRequest请求的响应处理函数，服务端在该函数里处理请求，回复结果。

从API version 7 开始支持，API version 9 开始废弃，建议使用
onRemoteMessageRequest
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

code

number

是

对端发送的服务请求码。

data

MessageParcel

是

携带客户端调用参数的MessageParcel对象。

reply

MessageParcel

是

写入结果的MessageParcel对象。

options

MessageOption

是

指示操作是同步还是异步。

返回值：

类型

说明

boolean

true：操作成功，false：操作失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel, option: rpc.MessageOption): boolean {
 if (code === 1) {
 hilog.info(0x0000, 'testTag', 'RpcServer: onRemoteRequest called');
 return true;
 } else {
 hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
 return false;
 }
 }
}

[h2]getCallingUid

getCallingUid(): number

获取通信对端的进程Uid。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回通信对端的进程Uid。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}
try {
 let testRemoteObject = new TestRemoteObject("testObject");
 hilog.info(0x0000, 'testTag', 'RpcServer: getCallingUid: ' + testRemoteObject.getCallingUid());
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error: ' + error);
}

[h2]getCallingPid

getCallingPid(): number

获取通信对端的进程Pid。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回通信对端的进程Pid。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}
try {
 let testRemoteObject = new TestRemoteObject("testObject");
 hilog.info(0x0000, 'testTag', 'RpcServer: getCallingPid: ' + testRemoteObject.getCallingPid());
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error: ' + error);
}

[h2]getLocalInterface
9+

getLocalInterface(descriptor: string): IRemoteBroker

查询接口描述符的字符串。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

descriptor

string

是

接口描述符的字符串，其长度应小于40960字节。

返回值：

类型

说明

IRemoteBroker

返回绑定到指定接口描述符的IRemoteBroker对象。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.The string length is greater than or equal to 40960 bytes;

4.The number of bytes copied to the buffer is different from the length of the obtained string.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}
try {
 let testRemoteObject = new TestRemoteObject("testObject");
 testRemoteObject.getLocalInterface("testObject");
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]queryLocalInterface
(deprecated)

queryLocalInterface(descriptor: string): IRemoteBroker

查询并获取当前接口描述符对应的远端对象是否已经存在。

从API version 7 开始支持，API version 9 开始废弃，建议使用
getLocalInterface
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

descriptor

string

是

需要查询的接口描述符。

返回值：

类型

说明

IRemoteBroker

如果接口描述符对应的远端对象存在，则返回该远端对象，否则返回Null。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}
try {
 let testRemoteObject = new TestRemoteObject("testObject");
 testRemoteObject.queryLocalInterface("testObject");
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error: ' + error);
}

[h2]getDescriptor
9+

getDescriptor(): string

获取对象的接口描述符。接口描述符为字符串。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

string

返回接口描述符。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900008

The proxy or remote object is invalid.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}
try {
 let testObject = new TestRemoteObject("ipcTest");
 let descriptor = testObject.getDescriptor();
 hilog.info(0x0000, 'testTag', 'RpcServer: descriptor is ' + descriptor);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]getInterfaceDescriptor
(deprecated)

getInterfaceDescriptor(): string

查询接口描述符。

从API version 7 开始支持，API version 9 开始废弃，建议使用
getDescriptor
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

string

返回接口描述符。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 }
 onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
 option: rpc.MessageOption): boolean | Promise<boolean> {
 // 根据业务实际逻辑，进行相应处理
 return true;
 }
}

try {
 let testRemoteObject = new TestRemoteObject("testObject");
 let descriptor = testRemoteObject.getInterfaceDescriptor();
 hilog.info(0x0000, 'testTag', 'RpcServer: descriptor is: ' + descriptor);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]modifyLocalInterface
9+

modifyLocalInterface(localInterface: IRemoteBroker, descriptor: string): void

此接口用于把接口描述符和IRemoteBroker对象绑定。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

localInterface

IRemoteBroker

是

将与描述符绑定的IRemoteBroker对象。

descriptor

string

是

用于与IRemoteBroker对象绑定的描述符，其长度应小于40960字节。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.The string length is greater than or equal to 40960 bytes;

4.The number of bytes copied to the buffer is different from the length of the obtained string.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class MyDeathRecipient implements rpc.DeathRecipient {
 onRemoteDied() {
 hilog.info(0x0000, 'testTag', 'server died');
 }
}
class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 try {
 this.modifyLocalInterface(this, descriptor);
 } catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
 }
 }
 registerDeathRecipient(recipient: MyDeathRecipient, flags: number) {
 // 方法逻辑需开发者根据业务需要实现
 }
 unregisterDeathRecipient(recipient: MyDeathRecipient, flags: number) {
 // 方法逻辑需开发者根据业务需要实现
 }
}
let testRemoteObject = new TestRemoteObject("testObject");

[h2]attachLocalInterface
(deprecated)

attachLocalInterface(localInterface: IRemoteBroker, descriptor: string): void

此接口用于把接口描述符和IRemoteBroker对象绑定。

从API version 7 开始支持，API version 9 开始废弃，建议使用
modifyLocalInterface
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

localInterface

IRemoteBroker

是

将与描述符绑定的IRemoteBroker对象。

descriptor

string

是

用于与IRemoteBroker对象绑定的描述符。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyDeathRecipient implements rpc.DeathRecipient {
 onRemoteDied() {
 hilog.info(0x0000, 'testTag', 'server died');
 }
}
class TestRemoteObject extends rpc.RemoteObject {
 constructor(descriptor: string) {
 super(descriptor);
 this.attachLocalInterface(this, descriptor);
 }
 addDeathRecipient(recipient: MyDeathRecipient, flags: number): boolean {
 // 方法逻辑需开发者根据业务需要实现
 return true;
 }
 removeDeathRecipient(recipient: MyDeathRecipient, flags: number): boolean {
 // 方法逻辑需开发者根据业务需要实现
 return true;
 }
}
let testRemoteObject = new TestRemoteObject("testObject");

Ashmem
8+

提供与匿名共享内存对象相关的方法，包括创建、关闭、映射和取消映射Ashmem、从Ashmem读取数据和写入数据、获取Ashmem大小、设置Ashmem保护。

共享内存只适用与本设备内跨进程通信。

系统能力：
 SystemCapability.Communication.IPC.Core

[h2]属性

系统能力：
 以下各项对应的系统能力均为SystemCapability.Communication.IPC.Core。

名称

类型

只读

可选

说明

PROT_EXEC

number

是

否

映射内存保护类型，代表映射的内存可执行。

PROT_NONE

number

是

否

映射内存保护类型，代表映射的内存不可访问。

PROT_READ

number

是

否

映射内存保护类型，代表映射的内存可读。

PROT_WRITE

number

是

否

映射内存保护类型，代表映射的内存可写。

[h2]create
9+

static create(name: string, size: number): Ashmem

静态方法，根据指定的名称和大小创建Ashmem对象。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

name

string

是

Ashmem名称，用于查询Ashmem信息，其长度不能为0。

size

number

是

Ashmem的大小，其大小应大于0，以字节为单位。

返回值：

类型

说明

Ashmem

返回创建的Ashmem对象；如果创建失败，返回null。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.The Ashmem name passed is empty;

4.The Ashmem size passed is less than or equal to 0.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 hilog.info(0x0000, 'testTag', 'create ashmem: ' + ashmem);
 let size = ashmem.getAshmemSize();
 hilog.info(0x0000, 'testTag', 'size is ' + size);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]createAshmem
(deprecated)

static createAshmem(name: string, size: number): Ashmem

静态方法，根据指定的名称和大小创建Ashmem对象。

从API version 8 开始支持，API version 9 开始废弃，建议使用
create
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

name

string

是

名称，用于查询Ashmem信息。

size

number

是

Ashmem的大小，以字节为单位。

返回值：

类型

说明

Ashmem

返回创建的Ashmem对象；如果创建失败，返回null。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let ashmem = rpc.Ashmem.createAshmem("ashmem", 1024*1024);
 hilog.info(0x0000, 'testTag', 'create ashmem: ' + ashmem);
 let size = ashmem.getAshmemSize();
 hilog.info(0x0000, 'testTag', 'size is ' + size);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]create
9+

static create(ashmem: Ashmem): Ashmem

静态方法，通过复制现有Ashmem对象的文件描述符(fd)来创建Ashmem对象。两个Ashmem对象指向同一个共享内存区域。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

ashmem

Ashmem

是

已存在的Ashmem对象。

返回值：

类型

说明

Ashmem

返回创建的Ashmem对象。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The passed parameter is not an Ashmem object;

3.The ashmem instance for obtaining packaging is empty.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 let ashmem2 = rpc.Ashmem.create(ashmem);
 let size = ashmem2.getAshmemSize();
 hilog.info(0x0000, 'testTag', 'size is ' + size);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]createAshmemFromExisting
(deprecated)

static createAshmemFromExisting(ashmem: Ashmem): Ashmem

静态方法，通过复制现有Ashmem对象的文件描述符(fd)来创建Ashmem对象。两个Ashmem对象指向同一个共享内存区域。

从API version 8 开始支持，API version 9 开始废弃，建议使用
create
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

ashmem

Ashmem

是

已存在的Ashmem对象。

返回值：

类型

说明

Ashmem

返回创建的Ashmem对象。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 let ashmem2 = rpc.Ashmem.createAshmemFromExisting(ashmem);
 let size = ashmem2.getAshmemSize();
 hilog.info(0x0000, 'testTag', 'size is ' + size);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error is ' + error);
}

[h2]closeAshmem
8+

closeAshmem(): void

关闭这个Ashmem。

关闭Ashmem对象前需要先解除地址映射。

系统能力：
 SystemCapability.Communication.IPC.Core

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 ashmem.closeAshmem();
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error is ' + error);
}

[h2]unmapAshmem
8+

unmapAshmem(): void

删除该Ashmem对象的地址映射。

系统能力：
 SystemCapability.Communication.IPC.Core

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 ashmem.unmapAshmem();
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error is ' + error);
}

[h2]getAshmemSize
8+

getAshmemSize(): number

获取Ashmem对象的内存大小。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

number

返回Ashmem对象的内存大小。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 let size = ashmem.getAshmemSize();
 hilog.info(0x0000, 'testTag', ' size is ' + size);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error is ' + error);
}

[h2]mapTypedAshmem
9+

mapTypedAshmem(mapType: number): void

在此进程的虚拟地址空间上创建共享文件映射，映射区域大小由此Ashmem对象指定。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

mapType

number

是

指定映射的内存区域的保护等级。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.The passed mapType exceeds the maximum protection level.

1900001

Failed to call mmap.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 ashmem.mapTypedAshmem(rpc.Ashmem.PROT_READ | rpc.Ashmem.PROT_WRITE);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]mapAshmem
(deprecated)

mapAshmem(mapType: number): boolean

在此进程的虚拟地址空间上创建共享文件映射，映射区域大小由此Ashmem对象指定。

从API version 8 开始支持，API version 9 开始废弃，建议使用
mapTypedAshmem
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

mapType

number

是

指定映射的内存区域的保护等级。

返回值：

类型

说明

boolean

true：映射成功，false：映射失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 let mapReadAndWrite = ashmem.mapAshmem(rpc.Ashmem.PROT_READ | rpc.Ashmem.PROT_WRITE);
 hilog.info(0x0000, 'testTag', 'map ashmem result is ' + mapReadAndWrite);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error is ' + error);
}

[h2]mapReadWriteAshmem
9+

mapReadWriteAshmem(): void

在此进程虚拟地址空间上创建可读写的共享文件映射。

系统能力：
 SystemCapability.Communication.IPC.Core

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900001

Failed to call mmap.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 ashmem.mapReadWriteAshmem();
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]mapReadAndWriteAshmem
(deprecated)

mapReadAndWriteAshmem(): boolean

在此进程虚拟地址空间上创建可读写的共享文件映射。

从API version 8 开始支持，API version 9 开始废弃，建议使用
mapReadWriteAshmem
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

boolean

true：映射成功，false：映射失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 let mapResult = ashmem.mapReadAndWriteAshmem();
 hilog.info(0x0000, 'testTag', 'map ashmem result is ' + mapResult);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error is ' + error);
}

[h2]mapReadonlyAshmem
9+

mapReadonlyAshmem(): void

在此进程虚拟地址空间上创建只读的共享文件映射。

系统能力：
 SystemCapability.Communication.IPC.Core

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

1900001

Failed to call mmap.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 ashmem.mapReadonlyAshmem();
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]mapReadOnlyAshmem
(deprecated)

mapReadOnlyAshmem(): boolean

在此进程虚拟地址空间上创建只读的共享文件映射。

从API version 8 开始支持，API version 9 开始废弃，建议使用
mapReadonlyAshmem
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

返回值：

类型

说明

boolean

true：映射成功，false：映射失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 let mapResult = ashmem.mapReadOnlyAshmem();
 hilog.info(0x0000, 'testTag', 'Ashmem mapReadOnlyAshmem result is ' + mapResult);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error is ' + error);
}

[h2]setProtectionType
9+

setProtectionType(protectionType: number): void

设置映射内存区域的保护等级。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

protectionType

number

是

要设置的保护类型。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900002

Failed to call ioctl.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 ashmem.setProtectionType(rpc.Ashmem.PROT_READ);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'Rpc set protection type fail, errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'Rpc set protection type fail, errorMessage ' + e.message);
}

[h2]setProtection
(deprecated)

setProtection(protectionType: number): boolean

设置映射内存区域的保护等级。

从API version 8 开始支持，API version 9 开始废弃，建议使用
setProtectionType
替代。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

protectionType

number

是

要设置的保护类型。

返回值：

类型

说明

boolean

true：设置成功，false：设置失败。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 let result = ashmem.setProtection(rpc.Ashmem.PROT_READ);
 hilog.info(0x0000, 'testTag', 'Ashmem setProtection result is ' + result);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'error ' + error);
}

[h2]writeDataToAshmem
11+

writeDataToAshmem(buf: ArrayBuffer, size: number, offset: number): void

将数据写入此Ashmem对象关联的共享文件。

对Ashmem对象进行写操作时，需要先调用
mapReadWriteAshmem
进行映射。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

buf

ArrayBuffer

是

写入Ashmem对象的数据。

size

number

是

要写入的数据大小。

offset

number

是

要写入的数据在此Ashmem对象关联的内存区间的起始位置。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.Failed to obtain arrayBuffer information.

1900003

Failed to write data to the shared memory.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let buffer = new ArrayBuffer(1024);
 let int32View = new Int32Array(buffer);
 for (let i = 0; i < int32View.length; i++) {
 int32View[i] = i * 2 + 1;
 }
 let size = buffer.byteLength;
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 ashmem.mapReadWriteAshmem();
 ashmem.writeDataToAshmem(buffer, size, 0);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]writeAshmem
(deprecated)

writeAshmem(buf: number[], size: number, offset: number): void

将数据写入此Ashmem对象关联的共享文件。

从API version 9 开始支持，API version 11 开始废弃，建议使用
writeDataToAshmem
替代。

对Ashmem对象进行写操作时，需要先调用
mapReadWriteAshmem
进行映射。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

buf

number[]

是

写入Ashmem对象的数据。

size

number

是

要写入的数据大小。

offset

number

是

要写入的数据在此Ashmem对象关联的内存区间的起始位置。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match;

3.The element does not exist in the array.

1900003

Failed to write data to the shared memory.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 ashmem.mapReadWriteAshmem();
 let ByteArrayVar = [1, 2, 3, 4, 5];
 ashmem.writeAshmem(ByteArrayVar, 5, 0);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'Rpc write to ashmem fail, errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'Rpc write to ashmem fail, errorMessage ' + e.message);
}

[h2]writeToAshmem
(deprecated)

writeToAshmem(buf: number[], size: number, offset: number): boolean

将数据写入此Ashmem对象关联的共享文件。

从API version 8 开始支持，API version 9 开始废弃，建议使用
writeDataToAshmem
替代。

对Ashmem对象进行写操作时，需要先调用
mapReadWriteAshmem
进行映射。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

buf

number[]

是

写入Ashmem对象的数据。

size

number

是

要写入的数据大小。

offset

number

是

要写入的数据在此Ashmem对象关联的内存区间的起始位置。

返回值：

类型

说明

boolean

true：如果数据写入成功，false：在其他情况下，如数据写入越界或未获得写入权限。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 let mapResult = ashmem.mapReadAndWriteAshmem();
 hilog.info(0x0000, 'testTag', 'RpcTest map ashmem result is ' + mapResult);
 let ByteArrayVar = [1, 2, 3, 4, 5];
 let writeResult = ashmem.writeToAshmem(ByteArrayVar, 5, 0);
 hilog.info(0x0000, 'testTag', 'write to Ashmem result is ' + writeResult);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error is ' + error);
}

[h2]readDataFromAshmem
11+

readDataFromAshmem(size: number, offset: number): ArrayBuffer

从此Ashmem对象关联的共享文件中读取数据。

对Ashmem对象进行写操作时，需要先调用
mapReadWriteAshmem
进行映射。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

size

number

是

要读取的数据的大小。

offset

number

是

要读取的数据在此Ashmem对象关联的内存区间的起始位置。

返回值：

类型

说明

ArrayBuffer

返回读取的数据。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900004

Failed to read data from the shared memory.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let buffer = new ArrayBuffer(1024);
 let int32View = new Int32Array(buffer);
 for (let i = 0; i < int32View.length; i++) {
 int32View[i] = i * 2 + 1;
 }
 let size = buffer.byteLength;
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 ashmem.mapReadWriteAshmem();
 ashmem.writeDataToAshmem(buffer, size, 0);
 let readResult = ashmem.readDataFromAshmem(size, 0);
 let readInt32View = new Int32Array(readResult);
 hilog.info(0x0000, 'testTag', 'read from Ashmem result is ' + readInt32View);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readAshmem
(deprecated)

readAshmem(size: number, offset: number): number[]

从此Ashmem对象关联的共享文件中读取数据。

从API version 9 开始支持，API version 11 开始废弃，建议使用
readDataFromAshmem
替代。

对Ashmem对象进行写操作时，需要先调用
mapReadWriteAshmem
进行映射。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

size

number

是

要读取的数据的大小。

offset

number

是

要读取的数据在此Ashmem对象关联的内存区间的起始位置。

返回值：

类型

说明

number[]

返回读取的数据。

错误码：

以下错误码的详细介绍请参见
ohos.rpc错误码

错误码ID

错误信息

401

Parameter error. Possible causes:

1.The number of parameters is incorrect;

2.The parameter type does not match.

1900004

Failed to read data from the shared memory.

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 ashmem.mapReadWriteAshmem();
 let ByteArrayVar = [1, 2, 3, 4, 5];
 ashmem.writeAshmem(ByteArrayVar, 5, 0);
 let readResult = ashmem.readAshmem(5, 0);
 hilog.info(0x0000, 'testTag', 'read from Ashmem result is ' + readResult);
} catch (error) {
 let e: BusinessError = error as BusinessError;
 hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
 hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

[h2]readFromAshmem
(deprecated)

readFromAshmem(size: number, offset: number): number[]

从此Ashmem对象关联的共享文件中读取数据。

从API version 8 开始支持，API version 9 开始废弃，建议使用
readDataFromAshmem
替代。

对Ashmem对象进行写操作时，需要先调用
mapReadWriteAshmem
进行映射。

系统能力：
 SystemCapability.Communication.IPC.Core

参数：

参数名

类型

必填

说明

size

number

是

要读取的数据的大小。

offset

number

是

要读取的数据在此Ashmem对象关联的内存区间的起始位置。

返回值：

类型

说明

number[]

返回读取的数据。

示例：

import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
 let mapResult = ashmem.mapReadAndWriteAshmem();
 hilog.info(0x0000, 'testTag', 'RpcTest map ashmem result is ' + mapResult);
 let ByteArrayVar = [1, 2, 3, 4, 5];
 let writeResult = ashmem.writeToAshmem(ByteArrayVar, 5, 0);
 hilog.info(0x0000, 'testTag', 'write to Ashmem result is ' + writeResult);
 let readResult = ashmem.readFromAshmem(5, 0);
 hilog.info(0x0000, 'testTag', 'read to Ashmem result is ' + readResult);
} catch (error) {
 hilog.error(0x0000, 'testTag', 'error is ' + error);
}

---
*2026-04-22T15:53:58.878Z*