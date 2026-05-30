# SSAP客户端

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `nearlink-ssap-client-connect`  |  **DocID**: `96950fc243c14f468116a2df71b0bc98`  |  **NodeID**: `000201775795852716141af7f52dbb71`

---

# SSAP客户端

                        提供SSAP（SparkLink Service Access Protocol）客户端相关的连接、数据传输和服务操作功能。

                       #### 场景介绍

     提供设备作为客户端的能力，客户端可连接服务端进行数据传输。

                  #### 接口说明

           
                        | 接口名          | 描述         
                               | [createClient](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#createclient)(address: string): Client          | 创建ssap客户端实例。         
                 | [connect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#connect)(): Promise<void>          | 向服务端发起连接。         
                 | [getServices](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#getservices)(): Promise<Array<Service>>;          | 获取服务端支持的服务列表。         
                 | [readProperty](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#readproperty)(property: Property): Promise<Property>          | 读取服务端property。         
                 | [writeProperty](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#writeproperty)(property: Property, writeType: PropertyWriteType): Promise<void>          | 写入服务端property。         
                 | [setPropertyNotification](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#setpropertynotification)(property: Property, enable: boolean): Promise<void>          | 启用/禁用某个property变化的通知。         
                 | [on](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#on-propertychange)(type: 'propertyChange', callback: Callback<Property>): void          | 订阅property变化事件。         
                 | [on](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#on-connectionstatechange)(type: 'connectionStateChange', callback: Callback<ConnectionChangeState>): void          | 订阅连接状态变化事件。         
             

                       #### 开发步骤

     
             导入相关模块。

       ```
import { ssap } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';
```
             创建ssap客户端实例。其中参数addr是通过[扫描流程](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-start-scan)获取的远端设备地址。

       ```
let addr: string = '00:11:22:33:AA:FF'; // 扫描获取到的远端设备地址
let client: ssap.Client;
try {
  client = ssap.createClient(addr);
  console.info('client: ' + JSON.stringify(client));
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
             订阅连接状态变化事件。其中client对象在步骤2创建，后续步骤中使用的client对象也是一样，不再赘述。

       ```
let onReceiveConnectionChangeEvent:(data: ssap.ConnectionChangeState) => void = (data: ssap.ConnectionChangeState) => {
  console.info('data:'+ JSON.stringify(data));
}
try {
  client.on('connectionStateChange', onReceiveConnectionChangeEvent);
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
             订阅Property变化事件。

       ```
let onReceivePropertyChangeEvent:(data: ssap.Property) => void = (data: ssap.Property) => {
  console.info('data:'+ JSON.stringify(data));
}
try {
  client.on('propertyChange', onReceivePropertyChangeEvent);
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
             向服务端发起连接。连接成功后会收到步骤3中订阅的连接状态变化的回调，之后可以进行数据交互。

       ```
try {
  client.connect().then(() => {
    console.info("connect success");
  }).catch ((err: BusinessError) => {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
  });
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
             获取服务端支持的服务列表。

       ```
try {
  client.getServices().then((result: Array<ssap.Service>) => {
    console.info('getServices successfully:' + JSON.stringify(result));
  }).catch ((err: BusinessError) => {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
  });
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
             读取指定服务的Property值，参数property中的[serviceUuid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#property)以及[propertyUuid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#property)通过步骤6获取。

       ```
try {
  // 创建property,实际开发时需要通过getServices接口从服务端获取
  let arrayBufferC = new ArrayBuffer(1);
  let properV = new Uint8Array(arrayBufferC);
  properV[0] = 1;
  let property: ssap.Property = {
    serviceUuid:'37bea880-fc70-11ea-b720-000000004386',
    propertyUuid: '37bea880-fc70-11ea-b720-000000001234',
    value: arrayBufferC
  };
  client.readProperty(property).then((result: ssap.Property) => {
    console.info('readProperty successfully:' + JSON.stringify(result));
  }).catch ((err: BusinessError) => {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
  });
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
             写入指定服务的Property值，参数property中的[serviceUuid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#property)以及[propertyUuid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#property)通过步骤6获取。

       ```
try {
  let arrayBufferC = new ArrayBuffer(1);
  // 期望写入的property值
  let properV = new Uint8Array(arrayBufferC);
  properV[0] = 1;
  let property: ssap.Property = {
    serviceUuid:'37bea880-fc70-11ea-b720-000000004386',
    propertyUuid: '37bea880-fc70-11ea-b720-000000001234',
    value: arrayBufferC
  };
  client.writeProperty(property, ssap.PropertyWriteType.WRITE_NO_RESPONSE).then(() => {
    console.info('writeProperty success');
  }).catch ((err: BusinessError) => {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
  });
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
             设置支持Property变化通知，参数property中的[serviceUuid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#property)以及[propertyUuid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap#property)通过步骤6获取。

       之后如果服务端Property值发生变化，则客户端通过步骤4订阅的事件接收新数据。

       ```
try {
  let arrayBufferC = new ArrayBuffer(1);
  let properV = new Uint8Array(arrayBufferC);
  properV[0] = 1;
  let property: ssap.Property = {
    serviceUuid:'37bea880-fc70-11ea-b720-000000004386',
    propertyUuid: '37bea880-fc70-11ea-b720-000000001234',
    value: arrayBufferC
  };
  client.setPropertyNotification(property, true).then(() => {
    console.info('setPropertyNotification success');
  }).catch ((err: BusinessError) => {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
  });
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
     
                  #### 示例代码

     SSAP客户端功能可参考[星闪示例代码](https://gitcode.com/harmonyos_samples/nearlink-kit_-sample-code)，entry/src/main/ets/pages/SsapClientPage.ets中的实现方法。

---
*Updated: 2026-04-20 01:46:27*
