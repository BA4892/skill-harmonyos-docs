# SSAP服务端

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `nearlink-ssap-server-connect`  |  **DocID**: `e5c5742fe2ee4122a5fdf998747e96ba`  |  **NodeID**: `0002017757958527160859e25473f466`

---

# SSAP服务端

       提供SSAP（SparkLink Service Access Protocol）服务端相关的连接、数据传输和服务管理功能。

                     建立SSAP连接后，SSAP服务端广播会自动停止。后续如果服务端期望被客户端发现，可参见[发送星闪广播](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-send-advertising)，重新发起广播。

                       #### 场景介绍

     支持应用基于Nearlink技术进行数据传输，设备作为服务端，客户端可连接该服务端进行数据传输。

                  #### 接口说明

           
                        | 接口名          | 描述         
                               | [createServer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#createserver)(): Server          | 创建ssap服务端实例。         
                 | [addService](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#addservice)(service: Service): void          | 服务端添加服务。         
                 | [on](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#onconnectionstatechange)(type: 'connectionStateChange', callback: Callback<ConnectionChangeState>): void          | 订阅连接状态变化事件。         
                 | [on](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#on-propertyread)(type: 'propertyRead', callback: Callback<PropertyReadRequest>): void          | 订阅客户端的读请求事件。         
                 | [sendResponse](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#sendresponse)(response: ServerResponse): void          | 回复客户端读/写请求。         
                 | [notifyPropertyChanged](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#notifypropertychanged)(address: string, property: Property): Promise<void>          | 通知客户端property值更新。         
             

                       #### 开发步骤

     
             导入相关模块。

       ```
import { ssap } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';
```
             创建ssap服务端实例。

       ```
let server: ssap.Server;
try {
  server = ssap.createServer();
  console.info('server: ' + JSON.stringify(server));
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
             添加服务端支持的服务，其中server对象在步骤2创建，后续步骤中使用的server对象也是一样，不再赘述。

       ```
// 构造descriptor
let descriptorsArray: Array<ssap.PropertyDescriptor> = [];
let arrayBuffer = new ArrayBuffer(2);
let descValue = new Uint8Array(arrayBuffer);
descValue[0] = 11;
descValue[1] = 22;
let descriptor: ssap.PropertyDescriptor = {
  serviceUuid:'37bea880-fc70-11ea-b720-000000004386',
  propertyUuid: '37bea880-fc70-11ea-b720-000000001234',
  value: arrayBuffer,
  descriptorType:ssap.PropertyDescriptorType.PROPERTY,
  isWriteable:true
};
descriptorsArray[0] = descriptor;
// 构造properties
let propertiesArray: Array<ssap.Property> = [];
let arrayBufferProperty = new ArrayBuffer(1);
let properValue = new Uint8Array(arrayBufferProperty);
properValue[0] = 1;
let property1: ssap.Property = {
  serviceUuid:'37bea880-fc70-11ea-b720-000000004386',
  propertyUuid: '37bea880-fc70-11ea-b720-000000001234',
  value: arrayBufferProperty,
  descriptors:descriptorsArray,
  operation:3 // 属性可读且可写
};
let property2: ssap.Property = {
  serviceUuid:'37bea880-fc70-11ea-b720-000000004386',
  propertyUuid: '37bea880-fc70-11ea-b720-000000003421',
  value: arrayBufferProperty,
  descriptors:descriptorsArray,
  operation:3 // 属性可读且可写
};
propertiesArray[0] = property1;
propertiesArray[1] = property2;
// 构造服务
let Service: ssap.Service = {
  serviceUuid:'37bea880-fc70-11ea-b720-000000004386',
  properties:propertiesArray
};
try {
  server.addService(Service);
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
             订阅连接状态变化事件。

       ```
let onReceiveConnectionChangeEvent:(data: ssap.ConnectionChangeState) => void = (data: ssap.ConnectionChangeState) => {
  console.info('data:'+ JSON.stringify(data));
}
try {
  server.on('connectionStateChange', onReceiveConnectionChangeEvent);
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
             订阅客户端读请求事件。

       ```
let onReceivePropertyReadEvent:(data: ssap.PropertyReadRequest) => void = (data: ssap.PropertyReadRequest) => {
  console.info('data:'+ JSON.stringify(data));
}
try {
  server.on('propertyRead', onReceivePropertyReadEvent);
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
             收到客户端读请求事件后，回复响应。读请求通过步骤5订阅。

       ```
// 订阅客户端的读写请求，收到请求后通过该接口回复
let arrayBuffer = new ArrayBuffer(2);
let descValue = new Uint8Array(arrayBuffer);
descValue[0] = 11;
descValue[1] = 22;
let resp: ssap.ServerResponse = {
  address: '00:11:22:33:AA:FF', // 请求方的客户端地址
  requestId: 1, // 请求方传入
  value: arrayBuffer // 回复的数据
};
try {
  // 地址是服务端缓存的已连接的客户端设备
  server.sendResponse(resp);
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
             通知客户端property值更新。其中参数address是步骤4中获取的已连接客户端设备地址。

       ```
// 构造properties
let arrayBufferProperty = new ArrayBuffer(8);
let properValue = new Uint8Array(arrayBufferProperty);
properValue[0] = 123; // 本次更新后的值
let property: ssap.Property = {
  serviceUuid:'37bea880-fc70-11ea-b720-000000004386',
  propertyUuid: '37bea880-fc70-11ea-b720-000000001234',
  value: arrayBufferProperty,
};
try {
  let address = '00:11:22:33:AA:FF'; // 已连接的设备地址
  server.notifyPropertyChanged(address, property).then(() => {
    console.info('notifyPropertyChanged success');
  }).catch ((err: BusinessError) => {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
  });
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
     
                  #### 示例代码

     SSAP服务端功能可参考[星闪示例代码](https://gitcode.com/harmonyos_samples/nearlink-kit_-sample-code)，entry/src/main/ets/pages/SsapServerPage.ets中的实现方法。

---
*Updated: 2026-04-20 01:46:17*
