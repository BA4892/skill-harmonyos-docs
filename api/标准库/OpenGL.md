# OpenGL

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `opengl`

**DocID**: `7a69c0e1b7cf4866b2f57c46167827c7`

**NodeID**: `0002017757962197387821318bb4fd98`

---

OpenGL

OpenGL
是一种跨平台的图形API，用于为3D图形处理硬件指定标准的软件接口。HarmonyOS现已支持OpenGL 4.2。

支持的能力及设备

支持能力：

从API version 20开始，支持使用OpenGL 3.0。

从API version 22开始，支持使用OpenGL 4.2。

支持设备：

从API version 20开始，支持在PC设备上使用OpenGL能力；从API version 22开始，新增支持在部分Tablet设备上使用OpenGL能力，具体Tablet设备是否支持可通过OH_Graphics_QueryGL接口判断。

查询当前设备是否支持OpenGL

从API version 22开始，支持使用OH_Graphics_QueryGL接口判断设备是否支持使用OpenGL功能以及是否需要回退使用OpenGL ES 。

设备行为差异：
 OH_Graphics_QueryGL接口在PC、Tablet设备上可正常调用，在其他设备上返回为空。

具体示例如下：

typedef EGLBoolean(*OH_Graphics_QueryGL_FUNC)(void);
static napi_value QueryGL(napi_env env, napi_callback_info info)
{
 const char &r0 = u8"OH_Graphics_QueryGL不存在，使用GLES";
 const char &r1 = u8"OH_Graphics_QueryGL存在，返回0，使用GLES";
 const char &r2 = u8"OH_Graphics_QueryGL存在，返回1，使用GL";
 napi_value result = nullptr;
 napi_status status = napi_invalid_arg;
 OH_Graphics_QueryGL_FUNC OH_Graphics_QueryGL = (OH_Graphics_QueryGL_FUNC)eglGetProcAddress("OH_Graphics_QueryGL");
 if (OH_Graphics_QueryGL) {
 if (OH_Graphics_QueryGL()) {
 status = napi_create_string_utf8(env, r2, (size_t)strlen(r2), &result);
 } else {
 status = napi_create_string_utf8(env, r1, (size_t)strlen(r1), &result);
 }
 } else {
 status = napi_create_string_utf8(env, r0, (size_t)strlen(r0), &result);
 }
 if (status != napi_ok) {
 napi_throw_error(env, nullptr, "Failed to create UTF-8 string");
 }
 return result;
}

标准库中导出的符号列表

native api中导出的OpenGL符号列表

OpenGL扩展接口及示例

OpenGL扩展接口及使用，可参考
OpenGL ES扩展接口
。

相关接口使用示例，可参考
OpenGL ES简单示例
。

引入OpenGL能力

如果开发者需要使用OpenGL的相关能力，需要添加相关动态链接库和头文件。

添加动态链接库

CMakeLists.txt中添加以下lib。

libace_ndk.z.so
libace_napi.z.so
libGLv4.so
libEGL.so

头文件

#include <ace/xcomponent/native_interface_xcomponent.h>
#include <EGL/egl.h>
#include <EGL/eglext.h>
#include <EGL/eglplatform.h>
#include <GL/gl.h>
#include <GL/glcorearb.h>

修改app.json5配置文件

"appEnvironments": [
 {
 "name":"NEED_OPENGL",
 "value": "1"
 }
],

相关参考

针对OpenGL的使用和相关开发，需要同步了解NDK的开发过程，以及XComponent组件等的使用。具体可参考:

NDK开发参考

Node-API参考

XComponentNode参考

XComponent参考

---
*2026-04-22T15:55:04.585Z*