# GameController

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-game-controller`

**DocID**: `043a5ce687354b8e8b7d6f365df948c9`

**NodeID**: `000201775795946267255d907c24b972`

---

GameController

概述

GameController模块提供游戏控制器功能的API接口。

系统能力：
 SystemCapability.Game.GameController

起始版本：
 21

汇总

[h2]文件

名称

描述

game_controller_type.h

定义GameController模块的通用枚举类型。

game_device.h

定义游戏设备的接口。

game_device_event.h

定义游戏设备事件的接口。

game_pad.h

定义游戏手柄的接口。

game_pad_event.h

定义游戏手柄事件的接口。

[h2]类型定义

名称

描述

typedef enum 
GameController_ErrorCode

GameController_ErrorCode

此枚举定义游戏控制器的错误码。

typedef struct 
GameDevice_AllDeviceInfos

GameDevice_AllDeviceInfos

定义
OH_GameDevice_GetAllDeviceInfos
接口的调用结果。

typedef enum 
GameDevice_StatusChangedType

GameDevice_StatusChangedType

此枚举定义设备的状态变化类型。

typedef enum 
GameDevice_DeviceType

GameDevice_DeviceType

此枚举定义设备类型。

typedef struct 
GameDevice_DeviceInfo

GameDevice_DeviceInfo

定义设备信息。

typedef struct 
GameDevice_DeviceEvent

GameDevice_DeviceEvent

定义设备状态变化事件。

typedef void(*
GameDevice_DeviceMonitorCallback
) (const struct 
GameDevice_DeviceEvent
 *deviceEvent)

定义
OH_GameDevice_RegisterDeviceMonitor
中使用的回调函数。当设备上线或下线时，该回调函数将被调用。

typedef enum 
GamePad_AxisSourceType

GamePad_AxisSourceType

此枚举定义手柄轴事件来源类型。

typedef enum 
GamePad_Button_ActionType

GamePad_Button_ActionType

此枚举定义手柄按键动作类型。

typedef struct 
GamePad_ButtonEvent

GamePad_ButtonEvent

定义手柄按键事件。

typedef struct 
GamePad_AxisEvent

GamePad_AxisEvent

定义手柄轴事件。

typedef struct 
GamePad_PressedButton

GamePad_PressedButton

定义手柄按下的按键。

typedef void(*
GamePad_ButtonInputMonitorCallback
) (const struct 
GamePad_ButtonEvent
 *buttonEvent)

定义在按键事件注册监听接口中使用的回调函数。当玩家按下按键时，该回调函数将被调用。

typedef void(*
GamePad_AxisInputMonitorCallback
) (const struct 
GamePad_AxisEvent
 *axisEvent)

定义在轴事件注册监听接口中使用的回调函数。当玩家操作摇杆时，该回调函数将被调用。

[h2]枚举

名称

描述

GameController_ErrorCode
 {

GAME_CONTROLLER_SUCCESS = 0,

GAME_CONTROLLER_PARAM_ERROR = 401,

GAME_CONTROLLER_MULTIMODAL_INPUT_ERROR = 32200001,

GAME_CONTROLLER_NO_MEMORY = 32200002

}

游戏控制器错误码。

GameDevice_StatusChangedType
 {

OFFLINE = 0,

ONLINE = 1

}

设备的状态变化类型。

GameDevice_DeviceType
 {

UNKNOWN = 0,

GAME_PAD = 1

}

设备类型。

GamePad_AxisSourceType
 {

DPAD = 0,

LEFT_THUMBSTICK = 1,

RIGHT_THUMBSTICK = 2,

LEFT_TRIGGER = 3,

RIGHT_TRIGGER = 4

}

手柄轴事件来源类型。

GamePad_Button_ActionType
 {

DOWN = 0,

UP = 1

}

手柄按键动作类型。

[h2]函数

名称

描述

GameController_ErrorCode

OH_GameDevice_GetAllDeviceInfos
 (
GameDevice_AllDeviceInfos
 **allDeviceInfos)

获取所有在线设备的信息。

GameController_ErrorCode

OH_GameDevice_RegisterDeviceMonitor
 (
GameDevice_DeviceMonitorCallback
 deviceMonitorCallback)

注册设备状态变化事件的监听回调。

GameController_ErrorCode

OH_GameDevice_UnregisterDeviceMonitor
 (void)

取消注册设备状态变化事件的监听回调。

GameController_ErrorCode

OH_GameDevice_DestroyAllDeviceInfos
 (
GameDevice_AllDeviceInfos
 **allDeviceInfos)

当
GameDevice_AllDeviceInfos
实例不再使用，销毁该实例。

GameController_ErrorCode

OH_GameDevice_AllDeviceInfos_GetCount
 (const struct 
GameDevice_AllDeviceInfos
 *allDeviceInfos, int32_t *count)

获取设备数量。

GameController_ErrorCode

OH_GameDevice_AllDeviceInfos_GetDeviceInfo
 (const struct 
GameDevice_AllDeviceInfos
 *allDeviceInfos, const int32_t index, 
GameDevice_DeviceInfo
 **deviceInfo)

从所有设备信息中获取指定序号的设备信息。

GameController_ErrorCode

OH_GameDevice_DeviceEvent_GetChangedType
 (const struct 
GameDevice_DeviceEvent
 *deviceEvent, 
GameDevice_StatusChangedType
 *statusChangedType)

从设备状态变化事件中获取状态变化类型。

GameController_ErrorCode

OH_GameDevice_DeviceEvent_GetDeviceInfo
 (const struct 
GameDevice_DeviceEvent
 *deviceEvent, 
GameDevice_DeviceInfo
 **deviceInfo)

从设备状态变化事件中获取设备信息。

GameController_ErrorCode

OH_GameDevice_DestroyDeviceInfo
 (
GameDevice_DeviceInfo
 **deviceInfo)

当
GameDevice_DeviceInfo
实例不再使用，销毁该实例。

GameController_ErrorCode

OH_GameDevice_DeviceInfo_GetDeviceId
 (const struct 
GameDevice_DeviceInfo
 *deviceInfo, char **deviceId)

从设备信息
GameDevice_DeviceInfo
中获取设备ID。

GameController_ErrorCode

OH_GameDevice_DeviceInfo_GetName
 (const struct 
GameDevice_DeviceInfo
 *deviceInfo, char **name)

从设备信息
GameDevice_DeviceInfo
中获取设备名称。

GameController_ErrorCode

OH_GameDevice_DeviceInfo_GetProduct
 (const struct 
GameDevice_DeviceInfo
 *deviceInfo, int32_t *product)

从设备信息
GameDevice_DeviceInfo
中获取产品信息。

GameController_ErrorCode

OH_GameDevice_DeviceInfo_GetVersion
 (const struct 
GameDevice_DeviceInfo
 *deviceInfo, int32_t *version)

从设备信息
GameDevice_DeviceInfo
中获取版本信息。

GameController_ErrorCode

OH_GameDevice_DeviceInfo_GetPhysicalAddress
 (const struct 
GameDevice_DeviceInfo
 *deviceInfo, char **physicalAddress)

从设备信息
GameDevice_DeviceInfo
中获取物理地址。

GameController_ErrorCode

OH_GameDevice_DeviceInfo_GetDeviceType
 (const struct 
GameDevice_DeviceInfo
 *deviceInfo, 
GameDevice_DeviceType
 *deviceType)

从设备信息
GameDevice_DeviceInfo
中获取设备类型。

GameController_ErrorCode

OH_GamePad_LeftShoulder_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册LeftShoulder按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_LeftShoulder_UnregisterButtonInputMonitor
 (void)

取消注册LeftShoulder按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_RightShoulder_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册RightShoulder按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_RightShoulder_UnregisterButtonInputMonitor
 (void)

取消注册RightShoulder按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_LeftTrigger_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册LeftTrigger按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_LeftTrigger_UnregisterButtonInputMonitor
 (void)

取消注册LeftTrigger按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_LeftTrigger_RegisterAxisInputMonitor
 (
GamePad_AxisInputMonitorCallback
 inputMonitorCallback)

注册LeftTrigger轴事件的监听回调。

GameController_ErrorCode

OH_GamePad_LeftTrigger_UnregisterAxisInputMonitor
 (void)

取消注册LeftTrigger轴事件的监听回调。

GameController_ErrorCode

OH_GamePad_RightTrigger_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册RightTrigger按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_RightTrigger_UnregisterButtonInputMonitor
 (void)

取消注册RightTrigger按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_RightTrigger_RegisterAxisInputMonitor
 (
GamePad_AxisInputMonitorCallback
 inputMonitorCallback)

注册RightTrigger轴事件的监听回调。

GameController_ErrorCode

OH_GamePad_RightTrigger_UnregisterAxisInputMonitor
 (void)

取消注册RightTrigger轴事件的监听回调。

GameController_ErrorCode

OH_GamePad_ButtonMenu_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册Menu按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_ButtonMenu_UnregisterButtonInputMonitor
 (void)

取消注册Menu按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_ButtonHome_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册Home按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_ButtonHome_UnregisterButtonInputMonitor
 (void)

取消注册Home按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_ButtonA_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册A按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_ButtonA_UnregisterButtonInputMonitor
 (void)

取消注册A按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_ButtonB_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册B按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_ButtonB_UnregisterButtonInputMonitor
 (void)

取消注册B按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_ButtonX_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册X按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_ButtonX_UnregisterButtonInputMonitor
 (void)

取消注册X按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_ButtonY_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册Y按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_ButtonY_UnregisterButtonInputMonitor
 (void)

取消注册Y按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_ButtonC_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册C按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_ButtonC_UnregisterButtonInputMonitor
 (void)

取消注册C按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_Dpad_LeftButton_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册方向按键的向左按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_Dpad_LeftButton_UnregisterButtonInputMonitor
 (void)

取消注册方向按键的向左按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_Dpad_RightButton_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册方向按键的向右按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_Dpad_RightButton_UnregisterButtonInputMonitor
 (void)

取消注册方向按键的向右按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_Dpad_UpButton_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册方向按键的向上按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_Dpad_UpButton_UnregisterButtonInputMonitor
 (void)

取消注册方向按键的向上按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_Dpad_DownButton_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册方向按键的向下按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_Dpad_DownButton_UnregisterButtonInputMonitor
 (void)

取消注册方向按键的向下按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_Dpad_RegisterAxisInputMonitor
 (
GamePad_AxisInputMonitorCallback
 inputMonitorCallback)

注册方向按键轴事件的监听回调。

GameController_ErrorCode

OH_GamePad_Dpad_UnregisterAxisInputMonitor
 (void)

取消注册方向按键轴事件的监听回调。

GameController_ErrorCode

OH_GamePad_LeftThumbstick_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册LeftThumbstick按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_LeftThumbstick_UnregisterButtonInputMonitor
 (void)

取消注册LeftThumbstick按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_LeftThumbstick_RegisterAxisInputMonitor
 (
GamePad_AxisInputMonitorCallback
 inputMonitorCallback)

注册LeftThumbstick轴事件的监听回调。

GameController_ErrorCode

OH_GamePad_LeftThumbstick_UnregisterAxisInputMonitor
 (void)

取消注册LeftThumbstick轴事件的监听回调。

GameController_ErrorCode

OH_GamePad_RightThumbstick_RegisterButtonInputMonitor
 (
GamePad_ButtonInputMonitorCallback
 inputMonitorCallback)

注册RightThumbstick按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_RightThumbstick_UnregisterButtonInputMonitor
 (void)

取消注册RightThumbstick按键事件的监听回调。

GameController_ErrorCode

OH_GamePad_RightThumbstick_RegisterAxisInputMonitor
 (
GamePad_AxisInputMonitorCallback
 inputMonitorCallback)

注册RightThumbstick轴事件的监听回调。

GameController_ErrorCode

OH_GamePad_RightThumbstick_UnregisterAxisInputMonitor
 (void)

取消注册RightThumbstick轴事件的监听回调。

GameController_ErrorCode

OH_GamePad_ButtonEvent_GetDeviceId
 (const struct 
GamePad_ButtonEvent
 *buttonEvent, char **deviceId)

从按键事件
GamePad_ButtonEvent
中获取设备ID。

GameController_ErrorCode

OH_GamePad_ButtonEvent_GetButtonAction
 (const struct 
GamePad_ButtonEvent
 *buttonEvent, 
GamePad_Button_ActionType
 *actionType)

从按键事件
GamePad_ButtonEvent
中获取按键动作类型。

GameController_ErrorCode

OH_GamePad_ButtonEvent_GetButtonCode
 (const struct 
GamePad_ButtonEvent
 *buttonEvent, int32_t *code)

从按键事件
GamePad_ButtonEvent
中获取按键编码。

GameController_ErrorCode

OH_GamePad_ButtonEvent_GetButtonCodeName
 (const struct 
GamePad_ButtonEvent
 *buttonEvent, char **codeName)

从按键事件
GamePad_ButtonEvent
中获取按键的名称。

GameController_ErrorCode

OH_GamePad_PressedButtons_GetCount
 (const struct 
GamePad_ButtonEvent
 *buttonEvent, int32_t *count)

从按键事件
GamePad_ButtonEvent
中获取按下的按键数量。

GameController_ErrorCode

OH_GamePad_PressedButtons_GetButtonInfo
 (const struct 
GamePad_ButtonEvent
 *buttonEvent, const int32_t index, 
GamePad_PressedButton
 **pressedButton)

从按键事件
GamePad_ButtonEvent
中获取指定序号的按下的按键。

GameController_ErrorCode

OH_GamePad_DestroyPressedButton
 (
GamePad_PressedButton
 **pressedButton)

当
GamePad_PressedButton
实例不再使用， 销毁该实例。

GameController_ErrorCode

OH_GamePad_PressedButton_GetButtonCode
 (const struct 
GamePad_PressedButton
 *pressedButton, int32_t *code)

从按下的按键
GamePad_PressedButton
中获取按键编码。

GameController_ErrorCode

OH_GamePad_PressedButton_GetButtonCodeName
 (const struct 
GamePad_PressedButton
 *pressedButton, char **codeName)

从按下的按键
GamePad_PressedButton
中获取按键的名称。

GameController_ErrorCode

OH_GamePad_ButtonEvent_GetActionTime
 (const struct 
GamePad_ButtonEvent
 *buttonEvent, int64_t *actionTime)

从按键事件
GamePad_ButtonEvent
中获取按键动作的时间。

GameController_ErrorCode

OH_GamePad_AxisEvent_GetDeviceId
 (const struct 
GamePad_AxisEvent
 *axisEvent, char **deviceId)

从轴事件
GamePad_AxisEvent
中获取设备ID。

GameController_ErrorCode

OH_GamePad_AxisEvent_GetAxisSourceType
 (const struct 
GamePad_AxisEvent
 *axisEvent, 
GamePad_AxisSourceType
 *axisSourceType)

从轴事件
GamePad_AxisEvent
中获取轴事件来源类型。

GameController_ErrorCode

OH_GamePad_AxisEvent_GetXAxisValue
 (const struct 
GamePad_AxisEvent
 *axisEvent, double *axisValue)

从轴事件
GamePad_AxisEvent
中获取X轴的轴值。

GameController_ErrorCode

OH_GamePad_AxisEvent_GetYAxisValue
 (const struct 
GamePad_AxisEvent
 *axisEvent, double *axisValue)

从轴事件
GamePad_AxisEvent
中获取Y轴的轴值。

GameController_ErrorCode

OH_GamePad_AxisEvent_GetZAxisValue
 (const struct 
GamePad_AxisEvent
 *axisEvent, double *axisValue)

从轴事件
GamePad_AxisEvent
中获取Z轴的轴值。

GameController_ErrorCode

OH_GamePad_AxisEvent_GetRZAxisValue
 (const struct 
GamePad_AxisEvent
 *axisEvent, double *axisValue)

从轴事件
GamePad_AxisEvent
中获取RZ轴的轴值。

GameController_ErrorCode

OH_GamePad_AxisEvent_GetHatXAxisValue
 (const struct 
GamePad_AxisEvent
 *axisEvent, double *axisValue)

从轴事件
GamePad_AxisEvent
中获取HatX轴的轴值。

GameController_ErrorCode

OH_GamePad_AxisEvent_GetHatYAxisValue
 (const struct 
GamePad_AxisEvent
 *axisEvent, double *axisValue)

从轴事件
GamePad_AxisEvent
中获取HatY轴的轴值。

GameController_ErrorCode

OH_GamePad_AxisEvent_GetBrakeAxisValue
 (const struct 
GamePad_AxisEvent
 *axisEvent, double *axisValue)

从轴事件
GamePad_AxisEvent
中获取Brake轴的轴值。

GameController_ErrorCode

OH_GamePad_AxisEvent_GetGasAxisValue
 (const struct 
GamePad_AxisEvent
 *axisEvent, double *axisValue)

从轴事件
GamePad_AxisEvent
中获取Gas轴的轴值。

GameController_ErrorCode

OH_GamePad_AxisEvent_GetActionTime
 (const struct 
GamePad_AxisEvent
 *axisEvent, int64_t *actionTime)

从轴事件
GamePad_AxisEvent
中获取动作时间。

类型定义说明

[h2]GameController_ErrorCode

typedef enum GameController_ErrorCode GameController_ErrorCode

描述

此枚举定义游戏控制器的错误码。

起始版本：
 21

[h2]GameDevice_AllDeviceInfos

typedef struct GameDevice_AllDeviceInfos GameDevice_AllDeviceInfos

描述

定义
OH_GameDevice_GetAllDeviceInfos
接口的调用结果。

起始版本：
 21

[h2]GameDevice_DeviceEvent

typedef struct GameDevice_DeviceEvent GameDevice_DeviceEvent

描述

定义设备状态变化事件。

起始版本：
 21

[h2]GameDevice_DeviceInfo

typedef struct GameDevice_DeviceInfo GameDevice_DeviceInfo

描述

定义设备信息。

起始版本：
 21

[h2]GameDevice_DeviceMonitorCallback

typedef void(*GameDevice_DeviceMonitorCallback) (const struct GameDevice_DeviceEvent *deviceEvent)

描述

定义
OH_GameDevice_RegisterDeviceMonitor
中使用的回调函数。当设备上线或下线时，该回调函数将被调用。

起始版本：
 21

参数:

名称

描述

deviceEvent

输出参数。设备状态变化事件
GameDevice_DeviceEvent
。

[h2]GameDevice_DeviceType

typedef enum GameDevice_DeviceType GameDevice_DeviceType

描述

此枚举定义设备类型。

起始版本：
 21

[h2]GameDevice_StatusChangedType

typedef enum GameDevice_StatusChangedType GameDevice_StatusChangedType

描述

此枚举定义设备的状态变化类型。

起始版本：
 21

[h2]GamePad_AxisEvent

typedef struct GamePad_AxisEvent GamePad_AxisEvent

描述

定义手柄轴事件。

起始版本：
 21

[h2]GamePad_AxisInputMonitorCallback

typedef void(*GamePad_AxisInputMonitorCallback) (const struct GamePad_AxisEvent *axisEvent)

描述

定义在轴事件注册监听接口中使用的回调函数。当玩家操作摇杆时，该回调函数将被调用。

起始版本：
 21

参数:

名称

描述

axisEvent

输出参数，手柄轴事件
GamePad_AxisEvent
。

[h2]GamePad_AxisSourceType

typedef enum GamePad_AxisSourceType GamePad_AxisSourceType

描述

此枚举定义手柄轴事件来源类型。

起始版本：
 21

[h2]GamePad_Button_ActionType

typedef enum GamePad_Button_ActionType GamePad_Button_ActionType

描述

此枚举定义手柄按键动作类型。

起始版本：
 21

[h2]GamePad_ButtonEvent

typedef struct GamePad_ButtonEvent GamePad_ButtonEvent

描述

定义手柄按键事件。

起始版本：
 21

[h2]GamePad_ButtonInputMonitorCallback

typedef void(*GamePad_ButtonInputMonitorCallback) (const struct GamePad_ButtonEvent *buttonEvent)

描述

定义在按键事件注册监听接口中使用的回调函数。当玩家按下按键时，该回调函数将被调用。

起始版本：
 21

参数:

名称

描述

buttonEvent

输出参数，手柄按键事件
GamePad_ButtonEvent
。

[h2]GamePad_PressedButton

typedef struct GamePad_PressedButton GamePad_PressedButton

描述

定义手柄按下的按键。

起始版本：
 21

枚举类型说明

[h2]GameController_ErrorCode

enum GameController_ErrorCode

描述

此枚举定义游戏控制器的错误码。

起始版本：
 21

枚举值

描述

GAME_CONTROLLER_SUCCESS

成功。

GAME_CONTROLLER_PARAM_ERROR

参数非法。

GAME_CONTROLLER_MULTIMODAL_INPUT_ERROR

查询多模输入中所有设备信息失败。

GAME_CONTROLLER_NO_MEMORY

设备内存不足。

[h2]GameDevice_DeviceType

enum GameDevice_DeviceType

描述

此枚举定义设备类型。

起始版本：
 21

枚举值

描述

UNKNOWN

未知。

GAME_PAD

游戏手柄。

[h2]GameDevice_StatusChangedType

enum GameDevice_StatusChangedType

描述

此枚举定义设备的状态变化类型。

起始版本：
 21

枚举值

描述

OFFLINE

设备下线。

ONLINE

设备上线。

[h2]GamePad_AxisSourceType

enum GamePad_AxisSourceType

描述

此枚举定义手柄轴事件来源类型。

起始版本：
 21

枚举值

描述

DPAD

轴事件来源于方向按键DPAD。

LEFT_THUMBSTICK

轴事件来源于LeftThumbstick。

RIGHT_THUMBSTICK

轴事件来源于RightThumbstick。

LEFT_TRIGGER

轴事件来源于LeftTrigger。

RIGHT_TRIGGER

轴事件来源于RightTrigger。

[h2]GamePad_Button_ActionType

enum GamePad_Button_ActionType

描述

此枚举定义手柄按键动作类型。

起始版本：
 21

枚举值

描述

DOWN

按键按下。

UP

按键抬起。

函数说明

[h2]OH_GameDevice_AllDeviceInfos_GetCount()

GameController_ErrorCode OH_GameDevice_AllDeviceInfos_GetCount (const struct GameDevice_AllDeviceInfos *allDeviceInfos, int32_t *count)

描述

获取设备数量。

起始版本：
 21

参数:

名称

描述

allDeviceInfos

指针指向
GameDevice_AllDeviceInfos
实例，不能为空，否则将返回错误码。

count

输出参数，设备数量。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数allDeviceInfos为null。

[h2]OH_GameDevice_AllDeviceInfos_GetDeviceInfo()

GameController_ErrorCode OH_GameDevice_AllDeviceInfos_GetDeviceInfo (const struct GameDevice_AllDeviceInfos *allDeviceInfos, const int32_t index, GameDevice_DeviceInfo **deviceInfo)

描述

从所有设备信息中获取指定序号的设备信息。

起始版本：
 21

参数:

名称

描述

allDeviceInfos

指针指向
GameDevice_AllDeviceInfos
实例，不能为空，否则将返回错误码。

index

指定查询的设备序号。

deviceInfo

输出参数，二级指针指向
GameDevice_DeviceInfo
设备信息实例。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：allDeviceInfos为null或者index小于0或者index大于等于所有设备数。

[h2]OH_GameDevice_DestroyAllDeviceInfos()

GameController_ErrorCode OH_GameDevice_DestroyAllDeviceInfos (GameDevice_AllDeviceInfos **allDeviceInfos)

描述

当
GameDevice_AllDeviceInfos
实例不再使用，销毁该实例。

起始版本：
 21

参数:

名称

描述

allDeviceInfos

二级指针指向
GameDevice_AllDeviceInfos
实例，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数allDeviceInfos为null。

[h2]OH_GameDevice_DestroyDeviceInfo()

GameController_ErrorCode OH_GameDevice_DestroyDeviceInfo (GameDevice_DeviceInfo **deviceInfo)

描述

当
GameDevice_DeviceInfo
实例不再使用，销毁该实例。

起始版本：
 21

参数:

名称

描述

deviceInfo

二级指针指向
GameDevice_DeviceInfo
实例，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数deviceInfo为null。

[h2]OH_GameDevice_DeviceEvent_GetChangedType()

GameController_ErrorCode OH_GameDevice_DeviceEvent_GetChangedType (const struct GameDevice_DeviceEvent *deviceEvent, GameDevice_StatusChangedType *statusChangedType)

描述

从设备状态变化事件
GameDevice_DeviceEvent
中获取状态变化类型。

起始版本：
 21

参数:

名称

描述

deviceEvent

指针指向
GameDevice_DeviceEvent
实例，不能为空，否则将返回错误码。

statusChangedType

输出参数，设备状态变化类型。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数deviceEvent为null。

[h2]OH_GameDevice_DeviceEvent_GetDeviceInfo()

GameController_ErrorCode OH_GameDevice_DeviceEvent_GetDeviceInfo (const struct GameDevice_DeviceEvent *deviceEvent, GameDevice_DeviceInfo **deviceInfo)

描述

从设备状态变化事件
GameDevice_DeviceEvent
中获取设备信息。

起始版本：
 21

参数:

名称

描述

deviceEvent

指针指向
GameDevice_DeviceEvent
实例，不能为空，否则将返回错误码。

deviceInfo

输出参数，二级指针指向
GameDevice_DeviceInfo
设备信息实例。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数deviceEvent为null。

[h2]OH_GameDevice_DeviceInfo_GetDeviceId()

GameController_ErrorCode OH_GameDevice_DeviceInfo_GetDeviceId (const struct GameDevice_DeviceInfo *deviceInfo, char **deviceId)

描述

从设备信息
GameDevice_DeviceInfo
中获取设备ID。

起始版本：
 21

参数:

名称

描述

deviceInfo

指针指向
GameDevice_DeviceInfo
实例，不能为空，否则将返回错误码。

deviceId

输出参数，二级指针指向设备ID。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数deviceInfo或deviceId为null。

GAME_CONTROLLER_NO_MEMORY：设备内存不足。

[h2]OH_GameDevice_DeviceInfo_GetDeviceType()

GameController_ErrorCode OH_GameDevice_DeviceInfo_GetDeviceType (const struct GameDevice_DeviceInfo *deviceInfo, GameDevice_DeviceType *deviceType)

描述

从设备信息
GameDevice_DeviceInfo
中获取设备类型。

起始版本：
 21

参数:

名称

描述

deviceInfo

指针指向
GameDevice_DeviceInfo
实例，不能为空，否则将返回错误码。

deviceType

输出参数，设备类型。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数deviceInfo为null。

[h2]OH_GameDevice_DeviceInfo_GetName()

GameController_ErrorCode OH_GameDevice_DeviceInfo_GetName (const struct GameDevice_DeviceInfo *deviceInfo, char **name)

描述

从设备信息
GameDevice_DeviceInfo
中获取设备名称。

起始版本：
 21

参数:

名称

描述

deviceInfo

指针指向
GameDevice_DeviceInfo
实例，不能为空，否则将返回错误码。

name

输出参数，二级指针指向设备名称。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数deviceInfo或name为null。

GAME_CONTROLLER_NO_MEMORY：设备内存不足。

[h2]OH_GameDevice_DeviceInfo_GetPhysicalAddress()

GameController_ErrorCode OH_GameDevice_DeviceInfo_GetPhysicalAddress (const struct GameDevice_DeviceInfo *deviceInfo, char **physicalAddress)

描述

从设备信息
GameDevice_DeviceInfo
中获取物理地址。

起始版本：
 21

参数:

名称

描述

deviceInfo

指针指向
GameDevice_DeviceInfo
实例，不能为空，否则将返回错误码。

physicalAddress

输出参数，二级指针指向物理地址。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数deviceInfo或physicalAddress为null。

GAME_CONTROLLER_NO_MEMORY：设备内存不足。

[h2]OH_GameDevice_DeviceInfo_GetProduct()

GameController_ErrorCode OH_GameDevice_DeviceInfo_GetProduct (const struct GameDevice_DeviceInfo *deviceInfo, int32_t *product)

描述

从设备信息
GameDevice_DeviceInfo
中获取产品信息。

起始版本：
 21

参数:

名称

描述

deviceInfo

指针指向
GameDevice_DeviceInfo
实例，不能为空，否则将返回错误码。

product

输出参数，产品信息。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数deviceInfo为null。

[h2]OH_GameDevice_DeviceInfo_GetVersion()

GameController_ErrorCode OH_GameDevice_DeviceInfo_GetVersion (const struct GameDevice_DeviceInfo *deviceInfo, int32_t *version)

描述

从设备信息
GameDevice_DeviceInfo
中获取版本信息。

起始版本：
 21

参数:

名称

描述

deviceInfo

指针指向
GameDevice_DeviceInfo
实例，不能为空，否则将返回错误码。

version

输出参数，版本信息。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数deviceInfo为null。

[h2]OH_GameDevice_GetAllDeviceInfos()

GameController_ErrorCode OH_GameDevice_GetAllDeviceInfos (GameDevice_AllDeviceInfos **allDeviceInfos)

描述

获取所有在线设备的信息。

起始版本：
 21

参数:

名称

描述

allDeviceInfos

输出参数。二级指针指向
GameDevice_AllDeviceInfos
实例，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_MULTIMODAL_INPUT_ERROR：查询多模输入中所有设备信息失败。

[h2]OH_GameDevice_RegisterDeviceMonitor()

GameController_ErrorCode OH_GameDevice_RegisterDeviceMonitor (GameDevice_DeviceMonitorCallback deviceMonitorCallback)

描述

注册设备状态变化事件的监听回调。

起始版本：
 21

参数:

名称

描述

deviceMonitorCallback

回调函数
GameDevice_DeviceMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数deviceMonitorCallback为null。

[h2]OH_GameDevice_UnregisterDeviceMonitor()

GameController_ErrorCode OH_GameDevice_UnregisterDeviceMonitor (void)

描述

取消注册设备状态变化事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_AxisEvent_GetActionTime()

GameController_ErrorCode OH_GamePad_AxisEvent_GetActionTime (const struct GamePad_AxisEvent *axisEvent, int64_t *actionTime)

描述

从轴事件
GamePad_AxisEvent
中获取动作时间。

起始版本：
 21

参数:

名称

描述

axisEvent

指针指向
GamePad_AxisEvent
实例，不能为空，否则将返回错误码。

actionTime

输出参数，动作时间。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。

[h2]OH_GamePad_AxisEvent_GetAxisSourceType()

GameController_ErrorCode OH_GamePad_AxisEvent_GetAxisSourceType (const struct GamePad_AxisEvent *axisEvent, GamePad_AxisSourceType *axisSourceType)

描述

从轴事件
GamePad_AxisEvent
中获取轴事件来源类型。

起始版本：
 21

参数:

名称

描述

axisEvent

指针指向
GamePad_AxisEvent
实例，不能为空，否则将返回错误码。

axisSourceType

输出参数，轴事件来源类型
GamePad_AxisSourceType
。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。

[h2]OH_GamePad_AxisEvent_GetBrakeAxisValue()

GameController_ErrorCode OH_GamePad_AxisEvent_GetBrakeAxisValue (const struct GamePad_AxisEvent *axisEvent, double *axisValue)

描述

从轴事件
GamePad_AxisEvent
中获取Brake轴的轴值。

起始版本：
 21

参数:

名称

描述

axisEvent

指针指向
GamePad_AxisEvent
实例，不能为空，否则将返回错误码。

axisValue

输出参数，轴值。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。

[h2]OH_GamePad_AxisEvent_GetDeviceId()

GameController_ErrorCode OH_GamePad_AxisEvent_GetDeviceId (const struct GamePad_AxisEvent *axisEvent, char **deviceId)

描述

从轴事件
GamePad_AxisEvent
中获取设备ID。

起始版本：
 21

参数:

名称

描述

axisEvent

指针指向
GamePad_AxisEvent
实例，不能为空，否则将返回错误码。

deviceId

输出参数，二级指针指向设备ID。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数axisEvent或deviceId为null。

GAME_CONTROLLER_NO_MEMORY：设备内存不足。

[h2]OH_GamePad_AxisEvent_GetGasAxisValue()

GameController_ErrorCode OH_GamePad_AxisEvent_GetGasAxisValue (const struct GamePad_AxisEvent *axisEvent, double *axisValue)

描述

从轴事件
GamePad_AxisEvent
中获取Gas轴的轴值。

起始版本：
 21

参数:

名称

描述

axisEvent

指针指向
GamePad_AxisEvent
实例，不能为空，否则将返回错误码。

axisValue

输出参数，轴值。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。

[h2]OH_GamePad_AxisEvent_GetHatXAxisValue()

GameController_ErrorCode OH_GamePad_AxisEvent_GetHatXAxisValue (const struct GamePad_AxisEvent *axisEvent, double *axisValue)

描述

从轴事件
GamePad_AxisEvent
中获取HatX轴的轴值。

起始版本：
 21

参数:

名称

描述

axisEvent

指针指向
GamePad_AxisEvent
实例，不能为空，否则将返回错误码。

axisValue

输出参数，轴值。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。

[h2]OH_GamePad_AxisEvent_GetHatYAxisValue()

GameController_ErrorCode OH_GamePad_AxisEvent_GetHatYAxisValue (const struct GamePad_AxisEvent *axisEvent, double *axisValue)

描述

从轴事件
GamePad_AxisEvent
中获取HatY轴的轴值。

起始版本：
 21

参数:

名称

描述

axisEvent

指针指向
GamePad_AxisEvent
实例，不能为空，否则将返回错误码。

axisValue

输出参数，轴值。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。

[h2]OH_GamePad_AxisEvent_GetRZAxisValue()

GameController_ErrorCode OH_GamePad_AxisEvent_GetRZAxisValue (const struct GamePad_AxisEvent *axisEvent, double *axisValue)

描述

从轴事件
GamePad_AxisEvent
中获取RZ轴的轴值。

起始版本：
 21

参数:

名称

描述

axisEvent

指针指向
GamePad_AxisEvent
实例，不能为空，否则将返回错误码。

axisValue

输出参数，轴值。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。

[h2]OH_GamePad_AxisEvent_GetXAxisValue()

GameController_ErrorCode OH_GamePad_AxisEvent_GetXAxisValue (const struct GamePad_AxisEvent *axisEvent, double *axisValue)

描述

从轴事件
GamePad_AxisEvent
中获取X轴的轴值。

起始版本：
 21

参数:

名称

描述

axisEvent

指针指向
GamePad_AxisEvent
实例，不能为空，否则将返回错误码。

axisValue

输出参数，轴值。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。

[h2]OH_GamePad_AxisEvent_GetYAxisValue()

GameController_ErrorCode OH_GamePad_AxisEvent_GetYAxisValue (const struct GamePad_AxisEvent *axisEvent, double *axisValue)

描述

从轴事件
GamePad_AxisEvent
中获取Y轴的轴值。

起始版本：
 21

参数:

名称

描述

axisEvent

指针指向
GamePad_AxisEvent
实例，不能为空，否则将返回错误码。

axisValue

输出参数，轴值。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。

[h2]OH_GamePad_AxisEvent_GetZAxisValue()

GameController_ErrorCode OH_GamePad_AxisEvent_GetZAxisValue (const struct GamePad_AxisEvent *axisEvent, double *axisValue)

描述

从轴事件
GamePad_AxisEvent
中获取Z轴的轴值。

起始版本：
 21

参数:

名称

描述

axisEvent

指针指向
GamePad_AxisEvent
实例，不能为空，否则将返回错误码。

axisValue

输出参数，轴值。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。

[h2]OH_GamePad_ButtonA_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_ButtonA_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册A按键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_ButtonA_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_ButtonA_UnregisterButtonInputMonitor (void)

描述

取消注册A按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_ButtonB_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_ButtonB_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册B按键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

输出参数，回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_ButtonB_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_ButtonB_UnregisterButtonInputMonitor (void)

描述

取消注册B按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_ButtonC_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_ButtonC_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册C按键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

输出参数，回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_ButtonC_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_ButtonC_UnregisterButtonInputMonitor (void)

描述

取消注册C按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_ButtonEvent_GetActionTime()

GameController_ErrorCode OH_GamePad_ButtonEvent_GetActionTime (const struct GamePad_ButtonEvent *buttonEvent, int64_t *actionTime)

描述

从按键事件
GamePad_ButtonEvent
中获取按键动作的时间。

起始版本：
 21

参数:

名称

描述

buttonEvent

指针指向
GamePad_ButtonEvent
实例，不能为空，否则将返回错误码。

actionTime

输出参数，按键动作的时间。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数buttonEvent为null。

[h2]OH_GamePad_ButtonEvent_GetButtonAction()

GameController_ErrorCode OH_GamePad_ButtonEvent_GetButtonAction (const struct GamePad_ButtonEvent *buttonEvent, GamePad_Button_ActionType *actionType)

描述

从按键事件
GamePad_ButtonEvent
中获取按键动作类型。

起始版本：
 21

参数:

名称

描述

buttonEvent

指针指向
GamePad_ButtonEvent
实例，不能为空，否则将返回错误码。

actionType

输出参数，按键动作类型。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数buttonEvent为null。

[h2]OH_GamePad_ButtonEvent_GetButtonCode()

GameController_ErrorCode OH_GamePad_ButtonEvent_GetButtonCode (const struct GamePad_ButtonEvent *buttonEvent, int32_t *code)

描述

从按键事件
GamePad_ButtonEvent
中获取按键编码。

起始版本：
 21

参数:

名称

描述

buttonEvent

指针指向
GamePad_ButtonEvent
实例，不能为空，否则将返回错误码。

code

输出参数，按键编码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数buttonEvent为null。

[h2]OH_GamePad_ButtonEvent_GetButtonCodeName()

GameController_ErrorCode OH_GamePad_ButtonEvent_GetButtonCodeName (const struct GamePad_ButtonEvent *buttonEvent, char **codeName)

描述

从按键事件
GamePad_ButtonEvent
中获取按键的名称。

起始版本：
 21

参数:

名称

描述

buttonEvent

指针指向
GamePad_ButtonEvent
实例，不能为空，否则将返回错误码。

codeName

输出参数，二级指针指向按键的名称。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数buttonEvent或codeName为null。

GAME_CONTROLLER_NO_MEMORY：设备内存不足。

[h2]OH_GamePad_ButtonEvent_GetDeviceId()

GameController_ErrorCode OH_GamePad_ButtonEvent_GetDeviceId (const struct GamePad_ButtonEvent *buttonEvent, char **deviceId)

描述

从按键事件
GamePad_ButtonEvent
中获取设备ID。

起始版本：
 21

参数:

名称

描述

buttonEvent

指针指向
GamePad_ButtonEvent
实例，不能为空，否则将返回错误码。

deviceId

输出参数，二级指针指向设备ID。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数buttonEvent或deviceId为null。

GAME_CONTROLLER_NO_MEMORY：设备内存不足。

[h2]OH_GamePad_ButtonHome_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_ButtonHome_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册Home按键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_ButtonHome_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_ButtonHome_UnregisterButtonInputMonitor (void)

描述

取消注册Home按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_ButtonMenu_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_ButtonMenu_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册Menu按键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_ButtonMenu_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_ButtonMenu_UnregisterButtonInputMonitor (void)

描述

取消注册Menu按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_ButtonX_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_ButtonX_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册X按键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

输出参数，回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_ButtonX_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_ButtonX_UnregisterButtonInputMonitor (void)

描述

取消注册X按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_ButtonY_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_ButtonY_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册Y按键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

输出参数，回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_ButtonY_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_ButtonY_UnregisterButtonInputMonitor (void)

描述

取消注册Y按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_DestroyPressedButton()

GameController_ErrorCode OH_GamePad_DestroyPressedButton (GamePad_PressedButton **pressedButton)

描述

当
GamePad_PressedButton
实例不再使用， 销毁该实例。

起始版本：
 21

参数:

名称

描述

pressedButton

二级指针指向
GamePad_PressedButton
实例，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数pressedButton为null。

[h2]OH_GamePad_Dpad_DownButton_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_Dpad_DownButton_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册方向按键的向下按键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_Dpad_DownButton_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_Dpad_DownButton_UnregisterButtonInputMonitor (void)

描述

取消注册方向按键的向下按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_Dpad_LeftButton_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_Dpad_LeftButton_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册方向按键的向左按键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_Dpad_LeftButton_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_Dpad_LeftButton_UnregisterButtonInputMonitor (void)

描述

取消注册方向按键的向左按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_Dpad_RegisterAxisInputMonitor()

GameController_ErrorCode OH_GamePad_Dpad_RegisterAxisInputMonitor (GamePad_AxisInputMonitorCallback inputMonitorCallback)

描述

注册方向按键轴事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_AxisInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_Dpad_RightButton_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_Dpad_RightButton_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册方向按键的向右按键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_Dpad_RightButton_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_Dpad_RightButton_UnregisterButtonInputMonitor (void)

描述

取消注册方向按键的向右按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_Dpad_UnregisterAxisInputMonitor()

GameController_ErrorCode OH_GamePad_Dpad_UnregisterAxisInputMonitor (void)

描述

取消注册方向按键轴事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_Dpad_UpButton_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_Dpad_UpButton_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册方向按键的向上��键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_Dpad_UpButton_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_Dpad_UpButton_UnregisterButtonInputMonitor (void)

描述

取消注册方向按键的向上按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_LeftShoulder_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_LeftShoulder_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册LeftShoulder按键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_LeftShoulder_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_LeftShoulder_UnregisterButtonInputMonitor (void)

描述

取消注册LeftShoulder按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_LeftThumbstick_RegisterAxisInputMonitor()

GameController_ErrorCode OH_GamePad_LeftThumbstick_RegisterAxisInputMonitor (GamePad_AxisInputMonitorCallback inputMonitorCallback)

描述

注册LeftThumbstick轴事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_AxisInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_LeftThumbstick_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_LeftThumbstick_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册LeftThumbstick按键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_LeftThumbstick_UnregisterAxisInputMonitor()

GameController_ErrorCode OH_GamePad_LeftThumbstick_UnregisterAxisInputMonitor (void)

描述

取消注册LeftThumbstick轴事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_LeftThumbstick_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_LeftThumbstick_UnregisterButtonInputMonitor (void)

描述

取消注册LeftThumbstick按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_LeftTrigger_RegisterAxisInputMonitor()

GameController_ErrorCode OH_GamePad_LeftTrigger_RegisterAxisInputMonitor (GamePad_AxisInputMonitorCallback inputMonitorCallback)

描述

注册LeftTrigger轴事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_AxisInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_LeftTrigger_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_LeftTrigger_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册LeftTrigger按键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_LeftTrigger_UnregisterAxisInputMonitor()

GameController_ErrorCode OH_GamePad_LeftTrigger_UnregisterAxisInputMonitor (void)

描述

取消注册LeftTrigger轴事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_LeftTrigger_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_LeftTrigger_UnregisterButtonInputMonitor (void)

描述

取消注册LeftTrigger按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_PressedButton_GetButtonCode()

GameController_ErrorCode OH_GamePad_PressedButton_GetButtonCode (const struct GamePad_PressedButton *pressedButton, int32_t *code)

描述

从按下的按键
GamePad_PressedButton
中获取按键编码。

起始版本：
 21

参数:

名称

描述

pressedButton

指针指向
GamePad_PressedButton
实例，不能为空，否则将返回错误码。

code

输出参数，按键编码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数pressedButton为null。

[h2]OH_GamePad_PressedButton_GetButtonCodeName()

GameController_ErrorCode OH_GamePad_PressedButton_GetButtonCodeName (const struct GamePad_PressedButton *pressedButton, char **codeName)

描述

从按下的按键
GamePad_PressedButton
中获取按键的名称。

起始版本：
 21

参数:

名称

描述

pressedButton

指针指向
GamePad_PressedButton
实例，不能为空，否则将返回错误码。

codeName

输出参数，二级指针指向按键的名称。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数pressedButton或codeName为null。

GAME_CONTROLLER_NO_MEMORY：设备内存不足。

[h2]OH_GamePad_PressedButtons_GetButtonInfo()

GameController_ErrorCode OH_GamePad_PressedButtons_GetButtonInfo (const struct GamePad_ButtonEvent *buttonEvent, const int32_t index, GamePad_PressedButton **pressedButton)

描述

从按键事件
GamePad_ButtonEvent
中获取指定序号的按下的按键。

起始版本：
 21

参数:

名称

描述

buttonEvent

指针指向
GamePad_ButtonEvent
实例，不能为空，否则将返回错误码。

index

指定按键序号。

pressedButton

输出参数，二级指针指向按下的键。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：buttonEvent为null或index小于0或index大于等于所有按键数。

[h2]OH_GamePad_PressedButtons_GetCount()

GameController_ErrorCode OH_GamePad_PressedButtons_GetCount (const struct GamePad_ButtonEvent *buttonEvent, int32_t *count)

描述

从按键事件
GamePad_ButtonEvent
中获取按下的按键数量。

起始版本：
 21

参数:

名称

描述

buttonEvent

指针指向
GamePad_ButtonEvent
实例，不能为空，否则将返回错误码。

count

输出参数，按下的按键数量。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数buttonEvent为null。

[h2]OH_GamePad_RightShoulder_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_RightShoulder_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册RightShoulder按键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_RightShoulder_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_RightShoulder_UnregisterButtonInputMonitor (void)

描述

取消注册RightShoulder按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_RightThumbstick_RegisterAxisInputMonitor()

GameController_ErrorCode OH_GamePad_RightThumbstick_RegisterAxisInputMonitor (GamePad_AxisInputMonitorCallback inputMonitorCallback)

描述

注册RightThumbstick轴事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_AxisInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_RightThumbstick_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_RightThumbstick_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册RightThumbstick按键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_RightThumbstick_UnregisterAxisInputMonitor()

GameController_ErrorCode OH_GamePad_RightThumbstick_UnregisterAxisInputMonitor (void)

描述

取消注册RightThumbstick轴事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_RightThumbstick_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_RightThumbstick_UnregisterButtonInputMonitor (void)

描述

取消注册RightThumbstick按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_RightTrigger_RegisterAxisInputMonitor()

GameController_ErrorCode OH_GamePad_RightTrigger_RegisterAxisInputMonitor (GamePad_AxisInputMonitorCallback inputMonitorCallback)

描述

注册RightTrigger轴事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_AxisInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_RightTrigger_RegisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_RightTrigger_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)

描述

注册RightTrigger按键事件的监听回调。

起始版本：
 21

参数:

名称

描述

inputMonitorCallback

回调函数
GamePad_ButtonInputMonitorCallback
，不能为空，否则将返回错误码。

返回：

函数的执行结果，错误码
GameController_ErrorCode
：

GAME_CONTROLLER_SUCCESS：成功。

GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。

[h2]OH_GamePad_RightTrigger_UnregisterAxisInputMonitor()

GameController_ErrorCode OH_GamePad_RightTrigger_UnregisterAxisInputMonitor (void)

描述

取消注册RightTrigger轴事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

[h2]OH_GamePad_RightTrigger_UnregisterButtonInputMonitor()

GameController_ErrorCode OH_GamePad_RightTrigger_UnregisterButtonInputMonitor (void)

描述

取消注册RightTrigger按键事件的监听回调。

起始版本：
 21

返回：

函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。

---
*2026-04-22T15:54:00.275Z*