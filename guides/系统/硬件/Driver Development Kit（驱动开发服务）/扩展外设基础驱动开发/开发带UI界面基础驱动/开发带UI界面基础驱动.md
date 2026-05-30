# 开发带UI界面基础驱动

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `externaldevice-guidelines`  |  **DocID**: `8d904a22d9c94e6dba670ed22ef3492b`  |  **NodeID**: `0002017757958527161891b553851eda`

---

# 开发带UI界面基础驱动

                 #### 场景介绍

     开发者开发带UI界面的基础驱动，适用于各种复合设备，需要通过UI界面设置对应的独特驱动能力或者通过UI界面展示从设备侧获取的信息，例如带有侧键的鼠标，手写板，身份证读卡器等设备。

                  #### 环境搭建

     请参考[环境准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/environmental-preparation)完成开发前的准备工作。

                  #### 接口说明

     扩展外设管理基本能力如下，更多详情请查阅[@ohos.driver.deviceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-driver-devicemanager)。

     **表1** 扩展外设管理基本能力接口

           
                        | 接口名          | 描述         
                               | queryDevices(busType?: number): Array<Readonly<Device>>          | 查询扩展外设列表。         
                 | bindDriverWithDeviceId(deviceId: number, onDisconnect: AsyncCallback<number>): Promise<RemoteDeviceDriver>;          | 绑定设备的Promise形式，API18开始支持。         
                 | unbindDriverWithDeviceId(deviceId: number): Promise<number>          | 解绑设备的Promise形式，API18开始支持。         
             

                       #### 开发步骤

     应用可通过查询绑定扩展外设，从而使用扩展外设的定制驱动能力。

     开发示例如下（仅供参考）：为开发者提供的示例代码为同时开发客户端和服务端的Demo，并实现IPC通信。

     
             创建新工程，请参考[创建一个新的工程](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-create-new-project)，创建一个HarmonyOS工程。

                                 
          - 开发驱动客户端，请选择Empty Ability模板。
          - 开发驱动服务端，请选择Native C++模板。
          - 同时开发驱动客户端和服务端，请选择Native C++模板。
         
                            在文件中导入相关Kit，并声明想要绑定的USB设备的productId、vendorId以及与驱动通信的Code。

                                 以下示例代码均写在entry/src/main/ets/pages/Index.ets文件中。

                      ```
import { hilog } from '@kit.PerformanceAnalysisKit';
import { deviceManager } from '@kit.DriverDevelopmentKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { rpc } from '@kit.IPCKit';

const REQUEST_CODE: number = 99; // 自定义通信Code，此处仅供参考
const productId: number = 4258;  // 请声明连接的USB设备的productId
const vendorId: number = 4817;   // 请声明连接的USB设备的vendorId
const DOMAIN = 0x0000;
```
             定义message变量和远程对象变量，后续与驱动通信使用。

                                 第3步开始，以下接口均在struct Index{}中定义。

                      ```
@State message: string = 'Hello';
private remote: rpc.IRemoteObject | null = null;
```
             定义查询设备接口，通过queryDevices获取目标设备ID。

       ```
private async queryTargetDeviceId(): Promise<number> {
  try {
    const devices: deviceManager.Device[] = deviceManager.queryDevices(deviceManager.BusType.USB);
    const index = devices.findIndex((item: deviceManager.Device) => {
      let usbDevice = item as deviceManager.USBDevice;
      // 如果不知道设备productId和vendorId，可以通过该日志查看连接的usb设备的相关信息
      hilog.info(DOMAIN, 'testTag', `usbDevice.productId = ${usbDevice.productId}, usbDevice.vendorId = ${usbDevice.vendorId}`);
      return usbDevice.productId === productId && usbDevice.vendorId === vendorId;
    });
    hilog.info(DOMAIN, 'testTag', `queryTargetDeviceId index = ${index}, deviceId = ${devices[index].deviceId}`);
    if (index < 0) {
      hilog.error(DOMAIN, 'testTag', 'can not find device');
      return -1;
    }
    return devices[index].deviceId;
  } catch (error) {
    hilog.error(DOMAIN, 'testTag', `queryDevice failed, err: ${JSON.stringify(error)}`);
  }
  return -1;
}
```
             定义获取对应驱动远程对象的接口，通过bindDeviceDriver获取远程对象。

       ```
private async getDriverRemote(deviceId: number): Promise<rpc.IRemoteObject | null> {
  try {
    let remoteDeviceDriver: deviceManager.RemoteDeviceDriver = await deviceManager.bindDeviceDriver(deviceId,
      (err: BusinessError, id: number) => {
        hilog.info(DOMAIN, 'testTag', `device[${id}] id disconnect, err: ${JSON.stringify(err)}`);
      });
    return remoteDeviceDriver.remote;
  } catch (error) {
    hilog.error(DOMAIN, 'testTag', `bindDriverWithDeviceId failed, err: ${JSON.stringify(error)}`);
  }
  return null;
}
```
             定义与远程对象通信接口，通过sendMessageRequest与远程对象进行IPC通信。

       ```
private async communicateWithRemote(): Promise<void> {
  const deviceId: number = await this.queryTargetDeviceId();
  hilog.info(DOMAIN, 'testTag', `queryTargetDeviceId, deviceId=${deviceId}`);
  if (deviceId < 0) {
    hilog.error(DOMAIN, 'testTag', 'can not find target device');
    return;
  }
  this.remote = await this.getDriverRemote(deviceId);
  if (this.remote === null) {
    hilog.error(DOMAIN, 'testTag', `getDriverRemote failed`);
    return;
  }

  let option = new rpc.MessageOption();
  let data = new rpc.MessageSequence();
  let reply = new rpc.MessageSequence();

  // 向驱动发送信息"Hello"
  hilog.info(DOMAIN, 'testTag', `communicateWithRemote, message=${this.message}`);
  data.writeString(this.message);

  try {
    await this.remote.sendMessageRequest(REQUEST_CODE, data, reply, option);
    // 获取驱动返回信息"Hello world"
    this.message = reply.readString();
    hilog.info(DOMAIN, 'testTag', `sendMessageRequest, message: ${this.message}`);
  } catch (error) {
    hilog.error(DOMAIN, 'testTag', `sendMessageRequest failed, err: ${JSON.stringify(error)}`);
  }
}
```
             渲染UI界面，更多UI界面开发请参考[UI开发](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-development)。

       ```
build() {
  Row() {
    Column() {
      Text(this.message)
        .fontSize($r('app.float.page_text_font_size'))
        .fontWeight(FontWeight.Bold)
        .onClick(() => {
          // 点击"Hello"，与远程对象通信，显示"Hello World"
          this.communicateWithRemote();
        })
    }
    .width('100%')
  }
  .height('100%')
}
```
             接下来请参考[开发无UI界面基础驱动](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/driverextensionability)，进行对应驱动的示例代码开发。

     
                  #### 应用签名

     **注意：** 先配置权限，再自动签名。

     应用需要配置签名文件才能在设备上运行，并且扩展外设管理客户端开发，需要配置扩展外设的权限：ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER及ohos.permission.ACCESS_DDK_DRIVERS。

     
             ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER

       在module.json5配置文件的requestPermissions标签中[声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)后，即可获得授权。

             ohos.permission.ACCESS_DDK_DRIVERS

       
        - 在module.json5配置文件的requestPermissions标签中[声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)。
        - HarmonyAppProvision配置文件中，修改acls字段，跨级别申请权限，可参考[申请使用受限权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions-in-acl)。
        - 在[AGC网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)菜单“证书、APP ID和Profile”->“Profile”中申请profile文件时，申请权限选择受限权限“ohos.permission.ACCESS_DDK_DRIVERS”，在该权限的输入框内填写你客户端需要连接的服务端的bundleName，多个服务端的bundleName以逗号分隔。
       
     
     完成权限配置后，可参考[自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)对应用进行签名。

---
*Updated: 2026-04-20 01:46:29*
