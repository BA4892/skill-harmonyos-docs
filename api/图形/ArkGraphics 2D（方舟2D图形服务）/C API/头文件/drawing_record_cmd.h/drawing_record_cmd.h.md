# drawing_record_cmd.h

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drawing-record-cmd-h`

**DocID**: `57dc7bd0385742a690600e80354e8d8a`

**NodeID**: `0002017757958749201706e4f45f1382`

---

drawing_record_cmd.h

概述

文件中定义了与录制指令对象相关的功能函数。

引用文件：
 <native_drawing/drawing_record_cmd.h>

库：
 libnative_drawing.so

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 13

相关模块：

Drawing

汇总

[h2]函数

名称

描述

OH_Drawing_RecordCmdUtils* OH_Drawing_RecordCmdUtilsCreate(void)

创建一个录制指令工具对象。

OH_Drawing_ErrorCode OH_Drawing_RecordCmdUtilsDestroy(OH_Drawing_RecordCmdUtils* recordCmdUtils)

销毁一个录制指令工具对象，并回收该对象占用的内存。

OH_Drawing_ErrorCode OH_Drawing_RecordCmdUtilsBeginRecording(OH_Drawing_RecordCmdUtils* recordCmdUtils,int32_t width, int32_t height, OH_Drawing_Canvas** canvas)

开始录制。此接口需要与
OH_Drawing_RecordCmdUtilsFinishRecording
接口成对使用。

指令录制工具生成录制类型的画布对象，可调用drawing的绘制接口，记录接下来所有的绘制指令。

OH_Drawing_ErrorCode OH_Drawing_RecordCmdUtilsFinishRecording(OH_Drawing_RecordCmdUtils* recordCmdUtils,OH_Drawing_RecordCmd** recordCmd)

结束录制。在调用此接口前，需要先调用
OH_Drawing_RecordCmdUtilsBeginRecording
接口。

指令录制工具结束录制指令，将录制类型画布对象记录的绘制指令存入生成的录制指令对象。

OH_Drawing_ErrorCode OH_Drawing_RecordCmdDestroy(OH_Drawing_RecordCmd* recordCmd)

销毁录制指令对象，并回收该对象占用的内存。

函数说明

[h2]OH_Drawing_RecordCmdUtilsCreate()

OH_Drawing_RecordCmdUtils* OH_Drawing_RecordCmdUtilsCreate(void)

描述

创建一个录制指令工具对象。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 13

返回：

类型

说明

OH_Drawing_RecordCmdUtils
*

返回用于录制指令的工具对象。

[h2]OH_Drawing_RecordCmdUtilsDestroy()

OH_Drawing_ErrorCode OH_Drawing_RecordCmdUtilsDestroy(OH_Drawing_RecordCmdUtils* recordCmdUtils)

描述

销毁一个录制指令工具对象，并回收该对象占用的内存。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 13

参数：

参数项

描述

OH_Drawing_RecordCmdUtils
* recordCmdUtils

指向录制指令工具对象
OH_Drawing_RecordCmdUtils
的指针。

返回：

类型

说明

OH_Drawing_ErrorCode

函数返回执行错误码。

 返回OH_DRAWING_SUCCESS，表示执行成功。

 返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数recordCmdUtils为空。

[h2]OH_Drawing_RecordCmdUtilsBeginRecording()

OH_Drawing_ErrorCode OH_Drawing_RecordCmdUtilsBeginRecording(OH_Drawing_RecordCmdUtils* recordCmdUtils,int32_t width, int32_t height, OH_Drawing_Canvas** canvas)

描述

开始录制。此接口需要与
OH_Drawing_RecordCmdUtilsFinishRecording
接口成对使用。

指令录制工具生成录制类型的画布对象，可调用drawing的绘制接口，记录接下来所有的绘制指令。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 13

参数：

参数项

描述

OH_Drawing_RecordCmdUtils
* recordCmdUtils

指向录制工具对象
OH_Drawing_RecordCmdUtils
的指针。

int32_t width

画布的宽度。

int32_t height

画布的高度。

OH_Drawing_Canvas
** canvas

指向画布对象
OH_Drawing_Canvas
的二级指针，作为出参，开发者无需释放。

该画布对象不支持嵌套调用
OH_Drawing_CanvasDrawRecordCmd
接口。

返回：

类型

说明

OH_Drawing_ErrorCode

函数返回执行错误码。

 返回OH_DRAWING_SUCCESS, 表示执行成功。

 返回OH_DRAWING_ERROR_INVALID_PARAMETER, 表示参数recordCmdUtils或者canvas为空。

 当width和height小于等于0的时，也会返回OH_DRAWING_ERROR_INVALID_PARAMETER。

 返回OH_DRAWING_ERROR_ALLOCATION_FAILED，表示系统内存不足。

[h2]OH_Drawing_RecordCmdUtilsFinishRecording()

OH_Drawing_ErrorCode OH_Drawing_RecordCmdUtilsFinishRecording(OH_Drawing_RecordCmdUtils* recordCmdUtils,OH_Drawing_RecordCmd** recordCmd)

描述

结束录制。在调用此接口前，需要先调用
OH_Drawing_RecordCmdUtilsBeginRecording
接口。

指令录制工具结束录制指令，将录制类型画布对象记录的绘制指令存入生成的录制指令对象。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 13

参数：

参数项

描述

OH_Drawing_RecordCmdUtils
* recordCmdUtils

指向录制指令工具对象
OH_Drawing_RecordCmdUtils
的指针。

OH_Drawing_RecordCmd
** recordCmd

指向录制指令对象
OH_Drawing_RecordCmd
的二级指针，作为出参，开发者调用
OH_Drawing_CanvasDrawRecordCmd
接口绘制该对象。需要调用
OH_Drawing_RecordCmdDestroy
接口释放。

返回：

类型

说明

OH_Drawing_ErrorCode

函数返回执行错误码。

 返回OH_DRAWING_SUCCESS，表示执行成功。

 返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数recordCmdUtils或者recordCmd为空。

 返回OH_DRAWING_ERROR_ALLOCATION_FAILED，表示系统内存不足。

[h2]OH_Drawing_RecordCmdDestroy()

OH_Drawing_ErrorCode OH_Drawing_RecordCmdDestroy(OH_Drawing_RecordCmd* recordCmd)

描述

销毁录制指令对象，并回收该对象占用的内存。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 13

参数：

参数项

描述

OH_Drawing_RecordCmd
* recordCmd

指向对象
OH_Drawing_RecordCmd
的指针。

返回：

类型

说明

OH_Drawing_ErrorCode

函数返回执行错误码。

 返回OH_DRAWING_SUCCESS，表示执行成功。

 返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数recordCmd为空。

---
*2026-04-22T15:54:00.047Z*