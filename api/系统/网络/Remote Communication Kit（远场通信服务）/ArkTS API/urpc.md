# urpc

> **分区**: API参考  |  **Slug**: `remote-communication-urpcapi`  |  **DocID**: `576f820cbb1649aab5d74d7f0557e240`

---

# urpc

 本模块提供URPC功能。应用程序可通过URPC提供的生成代码接口发起RPC请求。常见的URPC方法包括[urpcStubCreate](#urpcstubcreate)、[UrpcCall](#urpccall)、[UrpcCancel](#urpccancel)、[UrpcDestroy](#urpcdestroy)。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.1(13)

  #### 导入模块

```
import { urpc } from "@kit.RemoteCommunicationKit";
```
   #### FlowbufType

type FlowbufType =

 'INT8' | 'UINT8' | 'INT16' | 'UINT16' | 'INT32' | 'UINT32' | 'INT64' | 'UINT64' | 'BOOL' | 'FLOAT' | 'DOUBLE' | 'STRING' | 'BYTES' | 'MESSAGE' | 'REPEATED_INT8' | 'REPEATED_UINT8' | 'REPEATED_INT16' | 'REPEATED_UINT16' | 'REPEATED_INT32' | 'REPEATED_UINT32' | 'REPEATED_INT64' | 'REPEATED_UINT64' | 'REPEATED_BOOL' | 'REPEATED_FLOAT' | 'REPEATED_DOUBLE' | 'REPEATED_STRING' | 'REPEATED_BYTES' | 'REPEATED_MESSAGE' | 'ARRAY_INT8' | 'ARRAY_UINT8' | 'ARRAY_INT16' | 'ARRAY_UINT16' | 'ARRAY_INT32' | 'ARRAY_UINT32' | 'ARRAY_INT64' | 'ARRAY_UINT64' | 'ARRAY_BOOL' | 'ARRAY_FLOAT' | 'ARRAY_DOUBLE';

 表示通过URPC通信允许传入和接收返回值的类型。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.1(13)

  类型 说明   'INT8' 表示参数类型为'INT8'。  'UINT8' 表示参数类型为'UINT8'。  'INT16' 表示参数类型为'INT16'。  'UINT16' 表示参数类型为'UINT16'。  'INT32' 表示参数类型为'INT32'。  'UINT32' 表示参数类型为'UINT32'。  'INT64' 表示参数类型为'INT64'。  'UINT64' 表示参数类型为'UINT64'。  'BOOL' 表示参数类型为'BOOL'。  'FLOAT' 表示参数类型为'FLOAT'。  'DOUBLE' 表示参数类型为'DOUBLE'。  'STRING' 表示参数类型为'STRING'。  'BYTES' 表示参数类型为'BYTES'。  'MESSAGE' 表示参数类型为自定义的'MESSAGE'。  'REPEATED_INT8' 表示参数类型为可变长度的'INT8'数组，该字段为预留字段，在当前版本不能使用。  'REPEATED_UINT8' 表示参数类型为可变长度的'UINT8'数组，该字段为预留字段，在当前版本不能使用。  'REPEATED_INT16' 表示参数类型为可变长度的'INT16'数组，该字段为预留字段，在当前版本不能使用。  'REPEATED_UINT16' 表示参数类型为可变长度的'UINT16'数组，该字段为预留字段，在当前版本不能使用。  'REPEATED_INT32' 表示参数类型为可变长度的'INT32'数组，该字段为预留字段，在当前版本不能使用。  'REPEATED_UINT32' 表示参数类型为可变长度的'UINT32'数组，该字段为预留字段，在当前版本不能使用。  'REPEATED_INT64' 表示参数类型为可变长度的'INT64'数组，该字段为预留字段，在当前版本不能使用。  'REPEATED_UINT64' 表示参数类型为可变长度的'UINT64'数组，该字段为预留字段，在当前版本不能使用。  'REPEATED_BOOL' 表示参数类型为可变长度的'BOOL'数组，该字段为预留字段，在当前版本不能使用。  'REPEATED_FLOAT' 表示参数类型为可变长度的'INT8'数组，该字段为预留字段，在当前版本不能使用。  'REPEATED_DOUBLE' 表示参数类型为可变长度的'DOUBLE'数组，该字段为预留字段，在当前版本不能使用。  'REPEATED_STRING' 表示参数类型为可变长度的'STRING'数组，该字段为预留字段，在当前版本不能使用。  'REPEATED_BYTES' 表示参数类型为可变长度的'BYTES'数组，该字段为预留字段，在当前版本不能使用。  'REPEATED_MESSAGE' 表示参数类型为可变长度的自定义'MESSAGE'数组，该字段为预留字段，在当前版本不能使用。  'ARRAY_INT8' 表示参数类型为固定长度的'INT8'数组，该字段为预留字段，在当前版本不能使用。  'ARRAY_UINT8' 表示参数类型为固定长度的'UINT8'数组，该字段为预留字段，在当前版本不能使用。  'ARRAY_INT16' 表示参数类型为固定长度的'INT16'数组，该字段为预留字段，在当前版本不能使用。  'ARRAY_UINT16' 表示参数类型为固定长度的'UINT16'数组，该字段为预留字段，在当前版本不能使用。  'ARRAY_INT32' 表示参数类型为固定长度的'INT32'数组，该字段为预留字段，在当前版本不能使用。  'ARRAY_UINT32' 表示参数类型为固定长度的'UINT32'数组，该字段为预留字段，在当前版本不能使用。  'ARRAY_INT64' 表示参数类型为固定长度的'INT64'数组，该字段为预留字段，在当前版本不能使用。  'ARRAY_UINT64' 表示参数类型为固定长度的'UINT64'数组，该字段为预留字段，在当前版本不能使用。  'ARRAY_BOOL' 表示参数类型为固定长度的'BOOL'数组，该字段为预留字段，在当前版本不能使用。  'ARRAY_FLOAT' 表示参数类型为固定长度的'FLOAT'数组，该字段为预留字段，在当前版本不能使用。  'ARRAY_DOUBLE' 表示参数类型为固定长度的'DOUBLE'数组，该字段为预留字段，在当前版本不能使用。       #### FlowbufElement<T>

FlowbufElement<T>用于定义非数组的URPC入参和返回值类型。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.1(13)

  名称 类型 只读 可选 说明   type [FlowbufType](#flowbuftype) 否 否 表示通过URPC通信允许传入和接收返回值的类型。  value T 否 否 表示该参数的具体数值。例如，如果type的值为'INT8'，则value为number类型，可配置0。  name string 否 否 表示该参数的名称。     **示例：**

 ```
import { urpc } from "@kit.RemoteCommunicationKit"

let version: urpc.FlowbufElement<number> = {type: 'INT8', value: 0, name: ""};
```
   #### FlowbufArrayElement<T>

FlowbufArrayElement<T>用于定义数组类型的URPC入参和返回值类型。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.1(13)

  名称 类型 只读 可选 说明   type [FlowbufType](#flowbuftype) 否 否 表示通过URPC通信允许传送和接收返回值的类型。  value T[] 否 否 表示该参数的具体数值。例如，如果type的值为'ARRAY_INT8'，则value为number[]类型，可配置[1,2,3]。  length number 否 否 表示该参数数组的长度，长度范围[0, 2147483647]。     **示例：**

 ```
import { urpc } from "@kit.RemoteCommunicationKit"

let version: urpc.FlowbufArrayElement<number> = {type: 'ARRAY_INT8', value: [1,2,3], length: 3};
```
   #### urpcStubCreate

urpcStubCreate(config: UrpcInitConfiguration, funcList: string | string[]): Promise<UrpcStub>

 创建UrpcStub，使用Promise异步回调。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **需要权限：** ohos.permission.INTERNET

 **起始版本：** 5.0.1(13)

 **参数：**

  参数名 类型 必填 说明   config [UrpcInitConfiguration](#urpcinitconfiguration) 是 stub配置。  funcList string | string[] 是 URPC函数调用列表。     **返回值：**

  类型 说明   Promise<[UrpcStub](#urpcstub)> Promise对象，返回可用于发出URPC请求的对象。     **错误码：**

 错误码的详细介绍请参见[API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code)。

  错误码ID 错误信息   201 Permission denied.  401 Parameter error.  10079100998 Function name error.     **示例：**

 ```
import { BusinessError } from '@kit.BasicServicesKit';
import { urpc } from "@kit.RemoteCommunicationKit";

let node: urpc.IpAndPort = {
  ip: '127.0.0.1',
  port: 8000
}
let connect: urpc.UrpcConnectConfiguration = {
  node: node,
  protocol: 'eat',
}
let config: urpc.UrpcInitConfiguration = {
  timeout: 3000,
  mode: 'client',
  connect: connect
}

const funcList:string[] = ["uploadFile"];
urpc.urpcStubCreate(config, funcList).then((urpcStub: urpc.UrpcStub) => {
  urpcStub.destroy();
}).catch((err: BusinessError<string>) => {
  console.error(`Failed to create urpc stub, error code ${err.code}, error info ${err.data}`);
})
```
   #### UrpcCall

type UrpcCall = (funcName: string, request: object, returnValue: object, config?: CallingOption) => UrpcPromise;

 用于发起一个URPC请求，并接收来自服务器的响应。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.1(13)

 **参数：**

  参数名 类型 必填 说明   funcName string 是 URPC请求函数名。  request object 是 URPC请求对象。对象体积最大值为1MB。如果超出最大值，抛出错误码[1007910001](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007910001-请求数据传输错误)。  returnValue object 是 URPC响应对象。对象体积最大值为100KB。如果超出最大值，抛出错误码[1007910006](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007910006-请求大小达到上限)。  config [CallingOption](#callingoption) 否 单次请求配置选项。该字段为预留字段，在当前版本并不生效。     **返回值：**

  类型 说明   [UrpcPromise](#urpcpromise) Promise对象，返回来自服务器的响应对象。     **错误码：** 错误码的详细介绍请参见[API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code)。

   #### UrpcCancel

type UrpcCancel = (callingId?: number | number[]) => void;

 用于取消指定或所有正在进行的URPC请求。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.1(13)

 **参数：**

  参数名 类型 必填 说明   callingId number | number[] 否 取消指定callingId的请求。如果不填该字段表示取消本次UrpcStub对应的所有请求，取值范围[0, 2147483647]。     **错误码：** 错误码的详细介绍请参见[API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code)。

   #### UrpcDestroy

type UrpcDestroy = () => void

 用于销毁[UrpcStub](#urpcstub)实例。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.1(13)

 **错误码：** 错误码的详细介绍请参见[API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code)。

   #### UrpcStub

表示可用于发出URPC请求的通信会话。它提供了各种远程调用方法（call、cancel、destroy）。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.1(13)

 **属性：**

  名称 类型 只读 可选 说明   id number 是 否 UrpcStub的唯一标识id。  call [UrpcCall](#urpccall) 否 否 表示调用URPC请求。  cancel [UrpcCancel](#urpccancel) 否 否 表示取消URPC请求。  destroy [UrpcDestroy](#urpcdestroy) 否 否 表示销毁UrpcStub。       #### UrpcInitConfiguration

SessionConfiguration接口定义了会话的配置参数，为开发者提供了对HTTP会话各个方面的详细控制。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.1(13)

  名称 类型 只读 可选 说明   mode [UrpcMode](#urpcmode) 否 是 URPC的运行模式，默认值为'client'，表示client模式。  connect [UrpcConnectConfiguration](#urpcconnectconfiguration) 否 否 指定与stub相关联的连接配置，包括ip地址和端口号、URPC连接协议、是否多径等配置项。  timeout number 否 否 设置URPC的连接超时时间，表示请求等待多久后超时返回，单位是毫秒（ms），取值范围[0, 4294967295]。该字段为预留字段，在当前版本并不生效。     **示例：**

 ```
import { urpc } from "@kit.RemoteCommunicationKit";

let node: urpc.IpAndPort = {
  ip: '127.0.0.1',
  port: 8000
}
let connect: urpc.UrpcConnectConfiguration = {
  node: node,
  protocol: 'eat',
}
let config: urpc.UrpcInitConfiguration = {
  timeout: 3000,
  mode: 'client',
  connect: connect
}
```
   #### UrpcMode

type UrpcMode = 'client';

 当前仅支持填写'client'，表示该URPC节点为client模式，可主动发起请求，等待服务器的响应。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.1(13)

  类型 说明   'client' 表示URPC节点的模式，值固定为'client'。       #### UrpcConnectConfiguration

UrpcConnectConfiguration配置URPC连接的关键信息，可以配置连接的ip和端口号，以及传输协议等可选参数。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.1(13)

  名称 类型 只读 可选 说明   node [IpAndPort](#ipandport) 否 否 连接的IP和端口配置。  protocol [UrpcProtocol](#urpcprotocol) 否 是 传输连接采用的协议类型，默认值为'eat'，表示采用eat协议。  multiPath boolean 否 是 是否支持多路径传输，true表示支持多路径传输，多路径包含蜂窝网络和Wi-Fi；false表示不支持多路径传输，默认值为false。该字段为预留字段，在当前版本并不生效。  flags number 否 是 证书标记位，非0表示开启证书校验。默认值为0，表示不开启证书校验。  host string 否 是 urpc服务的域名，默认值为空字符串。  caPath string 否 是 校验证书的路径名称，默认值为空字符串。     **示例：**

 ```
import { urpc } from "@kit.RemoteCommunicationKit"

let node: urpc.IpAndPort = {
  ip: '127.0.0.1',
  port: 8000
}
let connect: urpc.UrpcConnectConfiguration = {
  node: node,
  protocol: 'eat',
  multiPath: false,
  flags: 0,
  host: "127.0.0.1",
  caPath: "data/single_urpc/eat.pem"
}
```
   #### IpAndPort

IpAndPort用于配置URPC的连接IP和端口号。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.1(13)

  名称 类型 只读 可选 说明   ip string 否 否 指定URPC的IPv4或IPv6地址。  port number 否 否 指定URPC端口号，取值范围[0, 65535]。     **示例：**

 ```
import { urpc } from "@kit.RemoteCommunicationKit"

let node: urpc.IpAndPort = {
  ip: '127.0.0.1',
  port: 8000
}
```
   #### UrpcPromise

表示URPC请求的返回值

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.1(13)

  名称 类型 只读 可选 说明   promise Promise<Object> 否 否 URPC请求的响应对象。  callingId number 否 否 URPC请求的唯一标识Id，取值范围[0, 2147483647]。       #### UrpcProtocol

type UrpcProtocol = 'eat'

 当前仅支持填写'eat'，表示URPC的协议类型为eat。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.1(13)

  类型 说明   'eat' 表示URPC节点的协议类型，值固定为'eat'。       #### CallingOption

用于配置URPC请求的优先级。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.1(13)

  名称 类型 只读 可选 说明   priority number 否 是 配置URPC请求的优先级，默认为0，最大取值为3，表示优先级最高，优先级高的可以优先传输。该字段为预留字段，当前版本并不生效。

---
*Updated: 2026-04-22 06:47:15*
