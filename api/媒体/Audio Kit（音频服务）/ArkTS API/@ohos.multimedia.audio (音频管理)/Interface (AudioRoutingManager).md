# Interface (AudioRoutingManager)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-audio-audioroutingmanager`

**DocID**: `0a4056baab8e4f3a9e9f792772fd075b`

**NodeID**: `000201775795910761135bdb3aaa5d84`

---

Interface (AudioRoutingManager)

音频路由管理。

在使用AudioRoutingManager的接口之前，需先通过
getRoutingManager
获取AudioRoutingManager实例。

本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本Interface首批接口从API version 9开始支持。

导入模块

import { audio } from '@kit.AudioKit';

getDevices
9+

getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void

获取音频设备列表。使用callback异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

deviceFlag

DeviceFlag

是

音频设备类型。

callback

AsyncCallback<
AudioDeviceDescriptors
>

是

回调函数。当获取音频设备列表成功，err为undefined，data为获取到的音频设备列表；否则为错误对象。

示例：

import { BusinessError } from '@kit.BasicServicesKit';

audioRoutingManager.getDevices(audio.DeviceFlag.OUTPUT_DEVICES_FLAG, (err: BusinessError, audioDeviceDescriptors: audio.AudioDeviceDescriptors) => {
 if (err) {
 console.error(`Failed to get devices. Code: ${err.code}, message: ${err.message}`);
 } else {
 console.info(`Succeeded in getting devices, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
 }
});

getDevices
9+

getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>

获取音频设备列表。使用Promise异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

deviceFlag

DeviceFlag

是

音频设备类型。

返回值：

类型

说明

Promise<
AudioDeviceDescriptors
>

Promise对象，返回设备列表。

示例：

import { BusinessError } from '@kit.BasicServicesKit';

audioRoutingManager.getDevices(audio.DeviceFlag.OUTPUT_DEVICES_FLAG).then((audioDeviceDescriptors: audio.AudioDeviceDescriptors) => {
 console.info(`Succeeded in getting devices, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
}).catch((err: BusinessError) => {
 console.error(`Failed to get devices. Code: ${err.code}, message: ${err.message}`);
});

getDevicesSync
10+

getDevicesSync(deviceFlag: DeviceFlag): AudioDeviceDescriptors

获取音频设备列表。同步返回结果。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

deviceFlag

DeviceFlag

是

音频设备类型。

返回值：

类型

说明

AudioDeviceDescriptors

返回设备列表。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed.

示例：

import { BusinessError } from '@kit.BasicServicesKit';

try {
 let audioDeviceDescriptors = audioRoutingManager.getDevicesSync(audio.DeviceFlag.OUTPUT_DEVICES_FLAG);
 console.info(`Succeeded in getting devices, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
} catch (err) {
 let error = err as BusinessError;
 console.error(`Failed to get devices. Code: ${error.code}, message: ${error.message}`);
}

isMicBlockDetectionSupported
13+

isMicBlockDetectionSupported(): Promise<boolean>

获取当前设备是否支持麦克风状态检测。使用Promise异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Device

返回值：

类型

说明

Promise<boolean>

Promise对象。返回true表示支持；返回false表示不支持。

示例：

audioRoutingManager.isMicBlockDetectionSupported().then((value: boolean) => {
 console.info(`Query whether microphone block detection is supported on current device result is ${value}.`);
});

on('micBlockStatusChanged')
13+

on(type: 'micBlockStatusChanged', callback: Callback<DeviceBlockStatusInfo>): void

监听麦克风堵塞状态变化事件。使用callback异步回调。

使用此功能前，请查询设备是否支持检测。应用在使用麦克风录音时，若麦克风堵塞状态发生变化，将触发该事件。目前此检测功能仅支持麦克风位于本地设备上。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

type

string

是

事件回调类型，支持的事件为'micBlockStatusChanged'，当麦克风堵塞状态发生变化时，触发该事件。

callback

Callback<
DeviceBlockStatusInfo
>

是

回调函数，返回麦克风被堵塞状态和设备信息。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed.

示例：

// 在使用此功能之前，应先查询当前设备是否支持检测。
audioRoutingManager.isMicBlockDetectionSupported().then((value: boolean) => {
 console.info(`Query whether microphone block detection is supported on current device result is ${value}.`);
 if (value) {
 audioRoutingManager.on('micBlockStatusChanged', (micBlockStatusChanged: audio.DeviceBlockStatusInfo) => {
 console.info(`block status : ${micBlockStatusChanged.blockStatus} `);
 });
 }
});

off('micBlockStatusChanged')
13+

off(type: 'micBlockStatusChanged', callback?: Callback<DeviceBlockStatusInfo>): void

取消监听麦克风堵塞状态变化事件。使用callback异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

type

string

是

事件回调类型，支持的事件为'micBlockStatusChanged'，当取消监听音频麦克风是否被堵塞变化事件时，触发该事件。

callback

Callback<
DeviceBlockStatusInfo
>

否

回调函数，返回麦克风被堵塞状态和设备信息。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed.

示例：

// 取消该事件的所有监听。
audioRoutingManager.off('micBlockStatusChanged');

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let micBlockStatusCallback = (micBlockStatusChanged: audio.DeviceBlockStatusInfo) => {
 console.info(`block status : ${micBlockStatusChanged.blockStatus} `);
};

audioRoutingManager.on('micBlockStatusChanged', micBlockStatusCallback);

audioRoutingManager.off('micBlockStatusChanged', micBlockStatusCallback);

on('deviceChange')
9+

on(type: 'deviceChange', deviceFlag: DeviceFlag, callback: Callback<DeviceChangeAction>): void

监听音频设备连接状态变化事件（当音频设备连接状态发生变化时触发）。使用callback异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

type

string

是

事件回调类型，支持的事件为'deviceChange'，当音频设备连接状态发生变化时，触发该事件。

deviceFlag

DeviceFlag

是

音频设备类型。

callback

Callback<
DeviceChangeAction
>

是

回调函数，返回设备更新详情。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed.

示例：

audioRoutingManager.on('deviceChange', audio.DeviceFlag.OUTPUT_DEVICES_FLAG, (deviceChanged: audio.DeviceChangeAction) => {
 console.info('device change type : ' + deviceChanged.type);
 console.info('device descriptor size : ' + deviceChanged.deviceDescriptors.length);
 console.info('device change descriptor : ' + deviceChanged.deviceDescriptors[0].deviceRole);
 console.info('device change descriptor : ' + deviceChanged.deviceDescriptors[0].deviceType);
});

off('deviceChange')
9+

off(type: 'deviceChange', callback?: Callback<DeviceChangeAction>): void

取消监听音频设备连接状态变化事件。使用callback异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

type

string

是

事件回调类型，支持的事件为'deviceChange'，当取消监听音频设备连接变化事件时，触发该事件。

callback

Callback<
DeviceChangeAction
>

否

回调函数，返回设备更新详情。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed.

示例：

// 取消该事件的所有监听。
audioRoutingManager.off('deviceChange');

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let deviceChangeCallback = (deviceChanged: audio.DeviceChangeAction) => {
 console.info('device change type : ' + deviceChanged.type);
 console.info('device descriptor size : ' + deviceChanged.deviceDescriptors.length);
 console.info('device change descriptor : ' + deviceChanged.deviceDescriptors[0].deviceRole);
 console.info('device change descriptor : ' + deviceChanged.deviceDescriptors[0].deviceType);
};

audioRoutingManager.on('deviceChange', audio.DeviceFlag.OUTPUT_DEVICES_FLAG, deviceChangeCallback);

audioRoutingManager.off('deviceChange', deviceChangeCallback);

setCommunicationDevice
9+

setCommunicationDevice(deviceType: CommunicationDeviceType, active: boolean, callback: AsyncCallback<void>): void

设置通信设备激活状态。使用callback异步回调。

该接口由于功能设计变化，将在后续版本废弃，不建议开发者使用。

推荐使用AVSession提供的
设备切换组件
，实现通话设备切换。

系统能力：
 SystemCapability.Multimedia.Audio.Communication

参数：

参数名

类型

必填

说明

deviceType

CommunicationDeviceType

是

音频设备类型。

active

boolean

是

是否设置设备为激活状态。true表示激活，false表示未激活。

callback

AsyncCallback<void>

是

回调函数。当设置通信设备激活状态成功，err为undefined，否则为错误对象。

示例：

import { BusinessError } from '@kit.BasicServicesKit';

audioRoutingManager.setCommunicationDevice(audio.CommunicationDeviceType.SPEAKER, true, (err: BusinessError) => {
 if (err) {
 console.error(`Failed to set the active status of the device. ${err}`);
 return;
 }
 console.info('Callback invoked to indicate that the device is set to the active status.');
});

getAvailableDevices
12+

getAvailableDevices(deviceUsage: DeviceUsage): AudioDeviceDescriptors

获取音频可选设备列表。同步返回结果。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

deviceUsage

DeviceUsage

是

音频设备类型（根据用途分类）。

返回值：

类型

说明

AudioDeviceDescriptors

返回设备列表。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed.

示例：

import { BusinessError } from '@kit.BasicServicesKit';

try {
 let data: audio.AudioDeviceDescriptors = audioRoutingManager.getAvailableDevices(audio.DeviceUsage.MEDIA_OUTPUT_DEVICES);
 console.info('Succeeded in doing getAvailableDevices.');
} catch (err) {
 let error = err as BusinessError;
 console.error(`Failed to getAvailableDevices. Code: ${error.code}, message: ${error.message}`);
}

on('availableDeviceChange')
12+

on(type: 'availableDeviceChange', deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void

监听音频可选设备连接状态变化事件（当音频可选设备连接状态发生变化时触发）。使用callback异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

type

string

是

事件回调类型，支持的事件为'availableDeviceChange'，当音频可选设备连接状态发生变化时，触发该事件。

deviceUsage

DeviceUsage

是

音频设备类型（根据用途分类）。

callback

Callback<
DeviceChangeAction
>

是

回调函数，返回设备更新详情。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed.

示例：

audioRoutingManager.on('availableDeviceChange', audio.DeviceUsage.MEDIA_OUTPUT_DEVICES, (deviceChanged: audio.DeviceChangeAction) => {
 console.info('device change type : ' + deviceChanged.type);
 console.info('device descriptor size : ' + deviceChanged.deviceDescriptors.length);
 console.info('device change descriptor : ' + deviceChanged.deviceDescriptors[0].deviceRole);
 console.info('device change descriptor : ' + deviceChanged.deviceDescriptors[0].deviceType);
});

off('availableDeviceChange')
12+

off(type: 'availableDeviceChange', callback?: Callback<DeviceChangeAction>): void

取消监听音频可选设备连接状态变化事件。使用callback异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

type

string

是

事件回调类型，支持的事件为'availableDeviceChange'，当取消监听音频可选设备连接变化事件时，触发该事件。

callback

Callback<
DeviceChangeAction
>

否

回调函数，返回可选设备更新详情。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed.

示例：

// 取消该事件的所有监听。
audioRoutingManager.off('availableDeviceChange');

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let availableDeviceChangeCallback = (deviceChanged: audio.DeviceChangeAction) => {
 console.info('device change type : ' + deviceChanged.type);
 console.info('device descriptor size : ' + deviceChanged.deviceDescriptors.length);
 console.info('device change descriptor : ' + deviceChanged.deviceDescriptors[0].deviceRole);
 console.info('device change descriptor : ' + deviceChanged.deviceDescriptors[0].deviceType);
};

audioRoutingManager.on('availableDeviceChange', audio.DeviceUsage.MEDIA_OUTPUT_DEVICES, availableDeviceChangeCallback);

audioRoutingManager.off('availableDeviceChange', availableDeviceChangeCallback);

setCommunicationDevice
9+

setCommunicationDevice(deviceType: CommunicationDeviceType, active: boolean): Promise<void>

设置通信设备激活状态。使用Promise异步回调。

该接口由于功能设计变化，将在后续版本废弃，不建议开发者使用。

推荐开发者使用AVSession提供的
设备切换组件
，实现通话设备切换。

系统能力：
 SystemCapability.Multimedia.Audio.Communication

参数：

参数名

类型

必填

说明

deviceType

CommunicationDeviceType

是

活跃音频设备类型。

active

boolean

是

是否设置设备为激活状态。true表示激活，false表示未激活。

返回值：

类型

说明

Promise<void>

Promise对象。无返回结果的Promise对象。

示例：

audioRoutingManager.setCommunicationDevice(audio.CommunicationDeviceType.SPEAKER, true).then(() => {
 console.info('Promise returned to indicate that the device is set to the active status.');
});

isCommunicationDeviceActive
9+

isCommunicationDeviceActive(deviceType: CommunicationDeviceType, callback: AsyncCallback<boolean>): void

获取指定通信设备的激活状态。使用callback异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Communication

参数：

参数名

类型

必填

说明

deviceType

CommunicationDeviceType

是

活跃音频设备类型。

callback

AsyncCallback<boolean>

是

回调函数。当获取指定通信设备的激活状态成功，err为undefined，data为true表示激活，false表示未激活；否则为错误对象。

示例：

import { BusinessError } from '@kit.BasicServicesKit';

audioRoutingManager.isCommunicationDeviceActive(audio.CommunicationDeviceType.SPEAKER, (err: BusinessError, value: boolean) => {
 if (err) {
 console.error(`Failed to obtain the active status of the device. ${err}`);
 return;
 }
 console.info('Callback invoked to indicate that the active status of the device is obtained.');
});

isCommunicationDeviceActive
9+

isCommunicationDeviceActive(deviceType: CommunicationDeviceType): Promise<boolean>

获取指定通信设备的激活状态。使用Promise异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Communication

参数：

参数名

类型

必填

说明

deviceType

CommunicationDeviceType

是

活跃音频设备类型。

返回值：

类型

说明

Promise<boolean>

Promise对象。返回true表示设备已激活；返回false表示设备未激活。

示例：

audioRoutingManager.isCommunicationDeviceActive(audio.CommunicationDeviceType.SPEAKER).then((value: boolean) => {
 console.info(`Promise returned to indicate that the active status of the device is obtained ${value}.`);
});

isCommunicationDeviceActiveSync
10+

isCommunicationDeviceActiveSync(deviceType: CommunicationDeviceType): boolean

获取指定通信设备的激活状态。同步返回结果。

系统能力：
 SystemCapability.Multimedia.Audio.Communication

参数：

参数名

类型

必填

说明

deviceType

CommunicationDeviceType

是

活跃音频设备类型。

返回值：

类型

说明

boolean

设备是否处于激活状态。true表示处于激活状态，false表示处于未激活状态。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed.

示例：

import { BusinessError } from '@kit.BasicServicesKit';

try {
 let value: boolean = audioRoutingManager.isCommunicationDeviceActiveSync(audio.CommunicationDeviceType.SPEAKER);
 console.info(`Indicate that the active status of the device is obtained ${value}.`);
} catch (err) {
 let error = err as BusinessError;
 console.error(`Failed to obtain the active status of the device ${error}.`);
}

getPreferOutputDeviceForRendererInfo
10+

getPreferOutputDeviceForRendererInfo(rendererInfo: AudioRendererInfo, callback: AsyncCallback<AudioDeviceDescriptors>): void

根据音频信息，返回优先级最高的输出设备。使用callback异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

rendererInfo

AudioRendererInfo

是

音频渲染器信息。

callback

AsyncCallback<
AudioDeviceDescriptors
>

是

回调函数。当获取优先级最高的输出设备成功，err为undefined，data为获取到的优先级最高的输出设备信息；否则为错误对象。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed. Return by callback.

6800301

System error. Return by callback.

示例：

import { BusinessError } from '@kit.BasicServicesKit';

let rendererInfo: audio.AudioRendererInfo = {
 usage: audio.StreamUsage.STREAM_USAGE_MUSIC, // 音频流使用类型：音乐。根据业务场景配置，参考StreamUsage。
 rendererFlags: 0 // 音频渲染器标志。
};

audioRoutingManager.getPreferOutputDeviceForRendererInfo(rendererInfo, (err: BusinessError, audioDeviceDescriptors: audio.AudioDeviceDescriptors) => {
 if (err) {
 console.error(`Failed to get prefer output device for renderer info. Code: ${err.code}, message: ${err.message}`);
 } else {
 console.info(`Succeeded in getting prefer output device for renderer info, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
 }
});

getPreferOutputDeviceForRendererInfo
10+

getPreferOutputDeviceForRendererInfo(rendererInfo: AudioRendererInfo): Promise<AudioDeviceDescriptors>

根据音频信息，返回优先级最高的输出设备。使用Promise异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

rendererInfo

AudioRendererInfo

是

音频渲染器信息。

返回值：

类型

说明

Promise<
AudioDeviceDescriptors
>

Promise对象，返回优先级最高的输出设备信息。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed. Return by promise.

6800301

System error. Return by promise.

示例：

import { BusinessError } from '@kit.BasicServicesKit';

let rendererInfo: audio.AudioRendererInfo = {
 usage: audio.StreamUsage.STREAM_USAGE_MUSIC, // 音频流使用类型：音乐。根据业务场景配置，参考StreamUsage。
 rendererFlags: 0 // 音频渲染器标志。
};

audioRoutingManager.getPreferOutputDeviceForRendererInfo(rendererInfo).then((audioDeviceDescriptors: audio.AudioDeviceDescriptors) => {
 console.info(`Succeeded in getting prefer output device for renderer info, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
}).catch((err: BusinessError) => {
 console.error(`Failed to get prefer output device for renderer info. Code: ${err.code}, message: ${err.message}`);
})

getPreferredOutputDeviceForRendererInfoSync
10+

getPreferredOutputDeviceForRendererInfoSync(rendererInfo: AudioRendererInfo): AudioDeviceDescriptors

根据音频信息，返回优先级最高的输出设备。同步返回结果。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

rendererInfo

AudioRendererInfo

是

音频渲染器信息。

返回值：

类型

说明

AudioDeviceDescriptors

返回优先级最高的输出设备信息。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed.

示例：

import { BusinessError } from '@kit.BasicServicesKit';

let rendererInfo: audio.AudioRendererInfo = {
 usage: audio.StreamUsage.STREAM_USAGE_MUSIC, // 音频流使用类型：音乐。根据业务场景配置，参考StreamUsage。
 rendererFlags: 0 // 音频渲染器标志。
};

try {
 let audioDeviceDescriptors = audioRoutingManager.getPreferredOutputDeviceForRendererInfoSync(rendererInfo);
 console.info(`Succeeded in getting prefer output device for renderer info, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
} catch (err) {
 let error = err as BusinessError;
 console.error(`Failed to get prefer output device for renderer info. Code: ${error.code}, message: ${error.message}`);
}

on('preferOutputDeviceChangeForRendererInfo')
10+

on(type: 'preferOutputDeviceChangeForRendererInfo', rendererInfo: AudioRendererInfo, callback: Callback<AudioDeviceDescriptors>): void

监听最高优先级输出设备变化事件（当最高优先级输出设备发生变化时触发）。使用callback异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

type

string

是

事件回调类型，支持的事件为'preferOutputDeviceChangeForRendererInfo'，当最高优先级输出设备发生变化时，触发该事件。

rendererInfo

AudioRendererInfo

是

音频渲染器信息。

callback

Callback<
AudioDeviceDescriptors
>

是

回调函数，返回优先级最高的输出设备信息。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed.

示例：

let rendererInfo: audio.AudioRendererInfo = {
 usage: audio.StreamUsage.STREAM_USAGE_MUSIC, // 音频流使用类型：音乐。根据业务场景配置，参考StreamUsage。
 rendererFlags: 0 // 音频渲染器标志。
};

audioRoutingManager.on('preferOutputDeviceChangeForRendererInfo', rendererInfo, (audioDeviceDescriptors: audio.AudioDeviceDescriptors) => {
 console.info(`Succeeded in using on function, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
});

off('preferOutputDeviceChangeForRendererInfo')
10+

off(type: 'preferOutputDeviceChangeForRendererInfo', callback?: Callback<AudioDeviceDescriptors>): void

取消监听最高优先级输出音频设备变化事件。使用callback异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

type

string

是

事件回调类型，支持的事件为'preferOutputDeviceChangeForRendererInfo'，当取消监听最高优先级输出音频设备变化事件时，触发该事件。

callback

Callback<
AudioDeviceDescriptors
>

否

回调函数，返回优先级最高的输出设备信息。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed.

示例：

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
// 当订阅了多个该事件的监听时，可通过 audioRoutingManager.off('preferOutputDeviceChangeForRendererInfo'); 取消该事件的所有监听。
let preferOutputDeviceChangeForRendererInfoCallback = (audioDeviceDescriptors: audio.AudioDeviceDescriptors) => {
 console.info(`Succeeded in using on or off function, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
};
let rendererInfo: audio.AudioRendererInfo = {
 usage: audio.StreamUsage.STREAM_USAGE_MUSIC, // 音频流使用类型：音乐。根据业务场景配置，参考StreamUsage。
 rendererFlags: 0 // 音频渲染器标志。
};

audioRoutingManager.on('preferOutputDeviceChangeForRendererInfo', rendererInfo, preferOutputDeviceChangeForRendererInfoCallback);

audioRoutingManager.off('preferOutputDeviceChangeForRendererInfo', preferOutputDeviceChangeForRendererInfoCallback);

getPreferredInputDeviceForCapturerInfo
10+

getPreferredInputDeviceForCapturerInfo(capturerInfo: AudioCapturerInfo, callback: AsyncCallback<AudioDeviceDescriptors>): void

根据音频信息，返回优先级最高的输入设备。使用callback异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

capturerInfo

AudioCapturerInfo

是

音频采集器信息。

callback

AsyncCallback<
AudioDeviceDescriptors
>

是

回调函数。当获取优先级最高的输入设备成功，err为undefined，data为获取到的优先级最高的输入设备信息；否则为错误对象。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed. Return by callback.

6800301

System error. Return by callback.

示例：

import { BusinessError } from '@kit.BasicServicesKit';

let capturerInfo: audio.AudioCapturerInfo = {
 source: audio.SourceType.SOURCE_TYPE_MIC, // 音源类型：Mic音频源。根据业务场景配置，参考SourceType。
 capturerFlags: 0 // 音频采集器标志。
};

audioRoutingManager.getPreferredInputDeviceForCapturerInfo(capturerInfo, (err: BusinessError, audioDeviceDescriptors: audio.AudioDeviceDescriptors) => {
 if (err) {
 console.error(`Failed to get preferred input device for capturer info. Code: ${err.code}, message: ${err.message}`);
 } else {
 console.info(`Succeeded in getting preferred input device for capturer info, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
 }
});

getPreferredInputDeviceForCapturerInfo
10+

getPreferredInputDeviceForCapturerInfo(capturerInfo: AudioCapturerInfo): Promise<AudioDeviceDescriptors>

根据音频信息，返回优先级最高的输入设备。使用Promise异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

capturerInfo

AudioCapturerInfo

是

音频采集器信息。

返回值：

类型

说明

Promise<
AudioDeviceDescriptors
>

Promise对象，返回优先级最高的输入设备信息。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed. Return by promise.

6800301

System error. Return by promise.

示例：

import { BusinessError } from '@kit.BasicServicesKit';

let capturerInfo: audio.AudioCapturerInfo = {
 source: audio.SourceType.SOURCE_TYPE_MIC, // 音源类型：Mic音频源。根据业务场景配置，参考SourceType。
 capturerFlags: 0 // 音频采集器标志。
};

audioRoutingManager.getPreferredInputDeviceForCapturerInfo(capturerInfo).then((audioDeviceDescriptors: audio.AudioDeviceDescriptors) => {
 console.info(`Succeeded in getting preferred input device for capturer info, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
}).catch((err: BusinessError) => {
 console.error(`Failed to get preferred input device for capturer info. Code: ${err.code}, message: ${err.message}`);
});

getPreferredInputDeviceForCapturerInfoSync
10+

getPreferredInputDeviceForCapturerInfoSync(capturerInfo: AudioCapturerInfo): AudioDeviceDescriptors

根据音频信息，返回优先级最高的输入设备。同步返回结果。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

capturerInfo

AudioCapturerInfo

是

音频采集器信息。

返回值：

类型

说明

AudioDeviceDescriptors

返回优先级最高的输入设备信息。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed.

示例：

import { BusinessError } from '@kit.BasicServicesKit';

let capturerInfo: audio.AudioCapturerInfo = {
 source: audio.SourceType.SOURCE_TYPE_MIC, // 音源类型：Mic音频源。根据业务场景配置，参考SourceType。
 capturerFlags: 0 // 音频采集器标志。
};

try {
 let audioDeviceDescriptors = audioRoutingManager.getPreferredInputDeviceForCapturerInfoSync(capturerInfo);
 console.info(`Succeeded in getting preferred input device for capturer info, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
} catch (err) {
 let error = err as BusinessError;
 console.error(`Failed to get preferred input device for capturer info. Code: ${error.code}, message: ${error.message}`);
}

on('preferredInputDeviceChangeForCapturerInfo')
10+

on(type: 'preferredInputDeviceChangeForCapturerInfo', capturerInfo: AudioCapturerInfo, callback: Callback<AudioDeviceDescriptors>): void

监听最高优先级输入设备变化事件（当最高优先级输入设备发生变化时触发）。使用callback异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

type

string

是

事件回调类型，支持的事件为'preferredInputDeviceChangeForCapturerInfo'，当最高优先级输入设备发生变化时，触发该事件。

capturerInfo

AudioCapturerInfo

是

音频采集器信息。

callback

Callback<
AudioDeviceDescriptors
>

是

回调函数，返回优先级最高的输入设备信息。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed.

示例：

let capturerInfo: audio.AudioCapturerInfo = {
 source: audio.SourceType.SOURCE_TYPE_MIC, // 音源类型：Mic音频源。根据业务场景配置，参考SourceType。
 capturerFlags: 0 // 音频采集器标志。
};

audioRoutingManager.on('preferredInputDeviceChangeForCapturerInfo', capturerInfo, (audioDeviceDescriptors: audio.AudioDeviceDescriptors) => {
 console.info(`Succeeded in using on function, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
});

off('preferredInputDeviceChangeForCapturerInfo')
10+

off(type: 'preferredInputDeviceChangeForCapturerInfo', callback?: Callback<AudioDeviceDescriptors>): void

取消监听最高优先级输入音频设备变化事件。使用callback异步回调。

系统能力：
 SystemCapability.Multimedia.Audio.Device

参数：

参数名

类型

必填

说明

type

string

是

事件回调类型，支持的事件为'preferredInputDeviceChangeForCapturerInfo'，当取消监听最高优先级输入音频设备变化事件时，触发该事件。

callback

Callback<
AudioDeviceDescriptors
>

否

回调函数，返回优先级最高的输入设备信息。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Audio错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.

6800101

Parameter verification failed.

示例：

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
// 当订阅了多个该事件的监听时，可通过 audioRoutingManager.off('preferredInputDeviceChangeForCapturerInfo'); 取消该事件的所有监听。
let preferredInputDeviceChangeForCapturerInfoCallback = (audioDeviceDescriptors: audio.AudioDeviceDescriptors) => {
 console.info(`Succeeded in using on or off function, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
};
let capturerInfo: audio.AudioCapturerInfo = {
 source: audio.SourceType.SOURCE_TYPE_MIC, // 音源类型：Mic音频源。根据业务场景配置，参考SourceType。
 capturerFlags: 0 // 音频采集器标志。
};

audioRoutingManager.on('preferredInputDeviceChangeForCapturerInfo', capturerInfo, preferredInputDeviceChangeForCapturerInfoCallback);

audioRoutingManager.off('preferredInputDeviceChangeForCapturerInfo', preferredInputDeviceChangeForCapturerInfoCallback);

---
*2026-04-22T15:55:03.399Z*