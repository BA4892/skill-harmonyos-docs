# drawing_gpu_context.h

> **分区**: API参考  |  **Slug**: `capi-drawing-gpu-context-h`  |  **DocID**: `f2086401fab8437d99ba54b9f699b531`

---

# drawing_gpu_context.h

  #### 概述

声明与绘图模块中的图形处理器上下文对象相关的函数。

 **引用文件：** <native_drawing/drawing_gpu_context.h>

 **库：** libnative_drawing.so

 **系统能力：** SystemCapability.Graphic.Graphic2D.NativeDrawing

 **起始版本：** 12

 **相关模块：** [Drawing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [OH_Drawing_GpuContextOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-gpucontextoptions) OH_Drawing_GpuContextOptions 定义有关图形处理器上下文的选项。       #### [h2]函数

 名称 描述   [OH_Drawing_GpuContext* OH_Drawing_GpuContextCreateFromGL(OH_Drawing_GpuContextOptions gpuContextOptions)](#oh_drawing_gpucontextcreatefromgl) 用于创建一个使用OpenGL作为后端接口的图形处理器上下文对象。  [OH_Drawing_GpuContext* OH_Drawing_GpuContextCreate(void)](#oh_drawing_gpucontextcreate) 用于创建一个图形处理器上下文对象, 使用的后端类型取决于运行设备。  [void OH_Drawing_GpuContextDestroy(OH_Drawing_GpuContext* gpuContext)](#oh_drawing_gpucontextdestroy) 用于销毁图形处理器上下文对象并回收该对象占用的内存。       #### 函数说明

  #### [h2]OH_Drawing_GpuContextCreateFromGL()

OH_Drawing_GpuContext* OH_Drawing_GpuContextCreateFromGL(OH_Drawing_GpuContextOptions gpuContextOptions) **描述**

 用于创建一个使用OpenGL作为后端接口的图形处理器上下文对象。

 **系统能力：** SystemCapability.Graphic.Graphic2D.NativeDrawing

 **起始版本：** 12

 **废弃版本：** 18

 **替代接口：** OH_Drawing_GpuContextCreate

 **参数：**

  参数项 描述   [OH_Drawing_GpuContextOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-gpucontextoptions) gpuContextOptions 图形处理器上下文选项[OH_Drawing_GpuContextOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-gpucontextoptions)。     **返回：**

  类型 说明   [OH_Drawing_GpuContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-gpucontext)* 返回一个指针，指针指向创建的图形处理器上下文对象[OH_Drawing_GpuContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-gpucontext)。       #### [h2]OH_Drawing_GpuContextCreate()

OH_Drawing_GpuContext* OH_Drawing_GpuContextCreate(void) **描述**

 用于创建一个图形处理器上下文对象, 使用的后端类型取决于运行设备。

 **系统能力：** SystemCapability.Graphic.Graphic2D.NativeDrawing

 **起始版本：** 16

 **返回：**

  类型 说明   [OH_Drawing_GpuContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-gpucontext)* 返回一个指针，指针指向创建的图形处理器上下文对象[OH_Drawing_GpuContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-gpucontext)。       #### [h2]OH_Drawing_GpuContextDestroy()

void OH_Drawing_GpuContextDestroy(OH_Drawing_GpuContext* gpuContext) **描述**

 用于销毁图形处理器上下文对象并回收该对象占用的内存。

 **系统能力：** SystemCapability.Graphic.Graphic2D.NativeDrawing

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_Drawing_GpuContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-gpucontext)* gpuContext 指向图形处理器上下文对象的指针[OH_Drawing_GpuContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-gpucontext)。

---
*Updated: 2026-04-22 06:40:31*
