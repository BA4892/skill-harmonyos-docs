# game_controller_type.h

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-game-controller-type`

**DocID**: `cca2fe9a509b468ba5d5c6372b4b081c`

**NodeID**: `000201775795946267366670c6c973ca`

---

game_controller_type.h

概述

定义GameController模块的通用枚举类型。

引用文件：
 <GameControllerKit/game_controller_type.h>

库：
 libohgame_controller.z.so

系统能力：
 SystemCapability.Game.GameController

起始版本：
 21

相关模块：

GameController

汇总

[h2]类型定义

名称

描述

typedef enum 
GameController_ErrorCode

GameController_ErrorCode

此枚举定义游戏控制器的错误码。

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

---
*2026-04-22T15:54:00.277Z*