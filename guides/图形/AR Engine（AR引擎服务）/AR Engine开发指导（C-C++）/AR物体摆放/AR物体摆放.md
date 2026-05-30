# AR物体摆放

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `arengine-c-arworld`  |  **DocID**: `b8a9b3d5307c4b4abdf1fa197053ce6a`  |  **NodeID**: `0002017757954919759864639e9e8199`

---

# AR物体摆放

                 #### 概要

     从5.0.0(12)开始，AR Engine支持物体摆放能力。

     本章节通过AR Engine识别设备周围的平面，并允许用户在平面上放置虚拟物体，实现虚拟和现实的融合。AR物体摆放可用于虚拟家具、数字展厅等应用，给用户提供虚实结合的新体验。

     本章节给出了关键开发步骤，完整代码可以参考[示例代码](https://gitcode.com/harmonyos_samples/arengine_-sample-code_-clientdemo_cpp)。

     **图1** AR物体摆放示意图

     

     本章节涉及的AR Engine能力如下：

     
             运动跟踪能力

             环境跟踪能力（平面检测）

             命中检测能力

     
                  #### 约束与限制

     物体摆放能力支持部分Phone、Tablet设备。请参考[硬件要求](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-preparations#硬件要求)判断设备是否支持。

                  #### 接口说明

     以下接口为AR物体摆放相关接口。详细接口和说明，请参考[AR Engine API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine)。

           
                        | 接口名          | 描述         
                               | [HMS_AREngine_ARSession_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_create)          | 创建一个新的[AREngine_ARSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arsession)会话。         
                 | [HMS_AREngine_ARSession_Update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_update)          | 更新AR Engine的计算结果。         
                 | [HMS_AREngine_ARSession_Configure](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_configure)          | 配置[AREngine_ARSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arsession)会话。         
                 | [HMS_AREngine_ARFrame_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arframe_create)          | 创建一个新的[AREngine_ARFrame](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arframe)对象，将指针存储到中*outFrame。         
                 | [HMS_AREngine_ARSession_SetDisplayGeometry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_setdisplaygeometry)          | 设置显示的高和宽（以Pixel为单位）。该高度和宽度是显示视图的高度和宽度，如果不一致，会导致显示相机预览出错。         
                 | [HMS_AREngine_ARSession_SetCameraGLTexture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_setcameragltexture)          | 设置可用于存储相机预览流数据的openGL纹理。         
                 | [HMS_AREngine_ARSession_GetAllTrackables](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_getalltrackables)          | 获取所有指定类型的可跟踪对象集合。         
                 | [HMS_AREngine_ARTrackableList_AcquireItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_artrackablelist_acquireitem)          | 从可跟踪列表中获取指定index的对象。         
                 | [HMS_AREngine_ARPlane_GetCenterPose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arplane_getcenterpose)          | 获取从平面的局部坐标系到世界坐标系转换的位姿信息。         
                 | [HMS_AREngine_ARFrame_HitTest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arframe_hittest)          | 根据屏幕上兴趣点位置获取命中检测结果。         
                 | [HMS_AREngine_ARHitResultList_GetSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arhitresultlist_getsize)          | 获取命中检测结果对象列表中包含的对象数。         
                 | [HMS_AREngine_ARHitResultList_GetItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arhitresultlist_getitem)          | 在命中检测结果列表中获取指定索引的命中检测结果对象。         
                 | [HMS_AREngine_ARHitResult_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arhitresult_create)          | 创建一个空的命中检测结果对象。         
                 | [HMS_AREngine_ARHitResult_AcquireNewAnchor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arhitresult_acquirenewanchor)          | 在碰撞命中位置创建一个新的锚点。         
                 | [HMS_AREngine_ARHitResult_AcquireTrackable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arhitresult_acquiretrackable)          | 获取被命中的可追踪对象。         
                 | [HMS_AREngine_ARFrame_AcquireCamera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arframe_acquirecamera)          | 获取当前帧的相机参数对象。         
                 | [HMS_AREngine_ARPose_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arpose_create)          | 分配并初始化一个新的位姿对象。         
                 | [HMS_AREngine_ARCamera_GetPose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arcamera_getpose)          | 获取当前相机对象在AR世界空间中的位姿。         
             

                       #### 开发步骤

                  #### [h2]声明Native接口

     ArkTS接口声明。

     ```
import { resourceManager } from '@kit.LocalizationKit';

export const start: (id: string, params: Int32Array) => void;
export const show: (id: string) => void;
export const hide: (id: string) => void;
export const update: (id: string) => number;
export const stop: (id: string) => void;
export const init: (resmgr: resourceManager.ResourceManager) => void;
export const getDistance: (id: string) => string;
export const initImage: (id: string, width: number, height: number, buffer: ArrayBuffer) => number;
export const setPath: (id: string, path: string) => void;
export const saveImageDataBaseToLocal: (id: string, path: string) => void;
export const getImageCount: (id: string) => number;
export const getVolume: (id: string) => string;
```
     建立ArkTS接口与C++接口之间的映射。

     ```
napi_property_descriptor desc[] = {
    {"init", nullptr, Global::Init, nullptr, nullptr, nullptr, napi_default, nullptr},
    {"start", nullptr, NapiManager::NapiOnPageAppear, nullptr, nullptr, nullptr, napi_default, nullptr},
    {"show", nullptr, NapiManager::NapiOnPageShow, nullptr, nullptr, nullptr, napi_default, nullptr},
    {"hide", nullptr, NapiManager::NapiOnPageHide, nullptr, nullptr, nullptr, napi_default, nullptr},
    {"update", nullptr, NapiManager::NapiOnPageUpdate, nullptr, nullptr, nullptr, napi_default, nullptr},
    {"stop", nullptr, NapiManager::NapiOnPageDisappear, nullptr, nullptr, nullptr, napi_default, nullptr},
    {"getDistance", nullptr, NapiManager::NapiGetDistance, nullptr, nullptr, nullptr, napi_default, nullptr},
    {"initImage", nullptr, NapiManager::NapiInitImage, nullptr, nullptr, nullptr, napi_default, nullptr},
    {"setPath", nullptr, NapiManager::NapiSetPath, nullptr, nullptr, nullptr, napi_default, nullptr},
    {"saveImageDataBaseToLocal", nullptr, NapiManager::NapiSaveImageDataBaseToLocal, nullptr, nullptr, nullptr,
     napi_default, nullptr},
    {"getImageCount", nullptr, NapiManager::NapiGetImageCount, nullptr, nullptr, nullptr, napi_default, nullptr},
    {"getVolume", nullptr, NapiManager::NapiGetVolume, nullptr, nullptr, nullptr, napi_default, nullptr}
};
```
                  #### [h2]创建UI界面

     创建一个UI界面，使用[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)组件用于显示相机预览画面，并定时触发每一帧绘制。

     ```
// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARWorld.ets。
import { PromptAction } from '@kit.ArkUI';
import { deviceInfo } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';
import arEngineDemo from 'libentry.so';

@Builder
export function ARWorldBuilder() {
  ARWorld();
}

@Component
struct ARWorld {
  pageInfo: NavPathStack = new NavPathStack();
  private currentMillisecond: number = 0;
  private interval: number = -1;
  private isUpdate: boolean = true;
  private xComponentId: string = 'ARWorld';
  @State context: Context = this.getUIContext().getHostContext() as Context;
  private resMgr: resourceManager.ResourceManager = this.context.resourceManager;
  @State numberOfPlans: number = 0;
  @State rotation: number = deviceInfo.deviceType === 'tablet' ? 3 : 0;

  build(): void {
    NavDestination() {
      RelativeContainer() {
        XComponent({ id: this.xComponentId, type: XComponentType.SURFACE, libraryname: 'entry' })
          .width('100%')
          .height('100%')
          .alignRules({
            center: { anchor: '__container__', align: VerticalAlign.Center },
            middle: { anchor: '__container__', align: HorizontalAlign.Center }
          })
          .onLoad(() => {
            this.interval = setInterval(() => {
              if (this.isUpdate) {
                // 每一帧通过调用AR Engine的Native API update来更新计算结果
                this.numberOfPlans = arEngineDemo.update(this.xComponentId);
                this.planeNum();
              }
            }, 33) // 将帧速率设置为30fps（每33ms刷新一次帧）
          })
          .onDestroy(() => {
            clearInterval(this.interval);
          })
      }
    }
    .onAppear(() => {
      arEngineDemo.init(this.resMgr);
      let config: Int32Array = new Int32Array([1, this.rotation]);
      arEngineDemo.start(this.xComponentId, config);
    })
    .onWillDisappear(() => {
      arEngineDemo.stop(this.xComponentId);
    })
    .onShown(() => {
      this.isUpdate = true;
      arEngineDemo.show(this.xComponentId);
    })
    .onHidden(() => {
      this.isUpdate = false;
      arEngineDemo.hide(this.xComponentId);
    })
    .onReady((context: NavDestinationContext) => {
      this.pageInfo = context.pathStack;
    })
    .hideTitleBar(true)
    .hideBackButton(true)
    .hideToolBar(true)
  }

  private messageNotification(): void {
    let promptAction: PromptAction = this.getUIContext().getPromptAction();
    promptAction.showToast({
      message: '当前特征点较少，无法识别平面，请移动相机。',
      bottom: 300
    })
  }

  private planeNum(): void {
    if (this.numberOfPlans < 1) {
      // 平面数量少于1
      let tempMillisecond: number = new Date().getTime();
      // 为首次启动的时间分配一个值
      if (this.currentMillisecond === 0) {
        this.currentMillisecond = tempMillisecond;
        return;
      }
      // 当识别平面时间超过10s，则展示一个弹窗
      if (tempMillisecond - this.currentMillisecond > 10000) {
        this.messageNotification();
        this.currentMillisecond = 0;
      }
    } else {
      this.currentMillisecond = 0;
    }
  }
}
```
                  #### [h2]引入AR Engine

     开发者在开发前可参考AR特性检查章节的[使用特性检查接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-arsession#使用特性检查接口)。若当前设备支持，则可参考管理AR会话章节的[引入AR Engine](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-arsession#引入ar-engine)。

                  #### [h2]创建AR场景

     
             调用[HMS_AREngine_ARSession_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_create)函数创建[AREngine_ARSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arsession)会话。您可以参考[管理AR会话](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-arsession)创建ARSession。

             配置AR会话及预览尺寸。

       ```
// 【可选】创建一个拥有合理默认配置的配置对象。
AREngine_ARConfig *arConfig = nullptr;
HMS_AREngine_ARConfig_Create(arSession, &arConfig);
// 【可选】配置AREngine_ARSession会话。
HMS_AREngine_ARSession_Configure(arSession, arConfig);
// 【可选】释放指定的配置对象的内存空间。
HMS_AREngine_ARConfig_Destroy(arConfig);

// 创建一个新的AREngine_ARFrame对象。
AREngine_ARFrame *arFrame = nullptr;
HMS_AREngine_ARFrame_Create(arSession, &arFrame);
// 预览区域的实际宽高，如使用xComponent组件显示，则该宽和高是xComponent的宽和高，如果不一致，会导致显示相机预览出错。
int32_t width = 1440;
int32_t height = 1080;
// 显示旋转常量，值为AREngine_ARPoseType中定义的枚举值。
AREngine_ARPoseType displayRotation = ARENGINE_POSE_TYPE_IDENTITY;
// 设置显示的宽和高（以Pixel为单位）。
HMS_AREngine_ARSession_SetDisplayGeometry(arSession, displayRotation, width, height);
```
             通过OpenGL接口获取纹理ID。

       ```
// 通过openGL接口获取纹理ID。
GLuint textureId = 0;
glGenTextures(1, &textureId);
```
             设置OpenGL纹理，存储相机预览流数据。

       ```
// 设置可用于存储相机预览流数据的openGL纹理。
HMS_AREngine_ARSession_SetCameraGLTexture(arSession, textureId );
```
     
                  #### [h2]获取平面

     
             调用[HMS_AREngine_ARSession_Update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_update)函数更新当前[AREngine_ARFrame](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arframe)对象。

       ```
// 获取帧数据AREngine_ARFrame。
HMS_AREngine_ARSession_Update(arSession, arFrame);
```
             获取相机的视图矩阵和相机的投影矩阵，用于后续渲染。

       ```
// 根据AREngine_ARFrame对象可以获取相机对象AREngine_ARCamera。
AREngine_ARCamera *arCamera = nullptr;
HMS_AREngine_ARFrame_AcquireCamera(arSession, arFrame, &arCamera);
// 获取最新帧中相机的视图矩阵。
HMS_AREngine_ARCamera_GetViewMatrix(arSession, arCamera, glm::value_ptr(*viewMat), 16);
// 获取用于在相机图像上层渲染虚拟内容的投影矩阵，可用于相机坐标系到裁剪坐标系转换。Near (0.1) Far (100)。
HMS_AREngine_ARCamera_GetProjectionMatrix(arSession, arCamera, {0.1f, 100.f}, glm::value_ptr(*projectionMat), 16);
```
                                 这里直接获取相机的视图矩阵和相机的投影矩阵，是为了便于渲染。获取相机运动中的位姿变化，还可以调用[HMS_AREngine_ARCamera_GetPose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arcamera_getpose)函数配合[HMS_AREngine_ARPose_GetPoseRaw](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arpose_getposeraw)函数进行获取。详细可参考[获取设备当前位姿](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-get-pose#获取设备当前位姿)。

                            调用[HMS_AREngine_ARSession_GetAllTrackables](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_getalltrackables)函数获取平面列表。详细可参考[检测环境中的平面](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-get-plane)章节。

       ```
// 获取当前检测到的平面列表。
AREngine_ARTrackableList *planeList = nullptr;
// 创建一个可跟踪对象列表。
HMS_AREngine_ARTrackableList_Create(arSession, &planeList);
// 获取所有指定类型为ARENGINE_TRACKABLE_PLANE的可跟踪对象集合。
AREngine_ARTrackableType planeTrackedType = ARENGINE_TRACKABLE_PLANE;
HMS_AREngine_ARSession_GetAllTrackables(arSession, planeTrackedType, planeList);
int32_t planeListSize = 0;
// 获取此列表中的可跟踪对象的数量。
HMS_AREngine_ARTrackableList_GetSize(arSession, planeList, &planeListSize);
for (int i = 0; i < planeListSize; ++i) {
    AREngine_ARTrackable *arTrackable = nullptr;
    // 从可跟踪列表中获取指定index的对象。
    HMS_AREngine_ARTrackableList_AcquireItem(arSession, planeList, i, &arTrackable);
    AREngine_ARPlane *arPlane = reinterpret_cast<AREngine_ARPlane*>(arTrackable);
    // 获取当前可跟踪对象的跟踪状态。如果状态为：ARENGINE_TRACKING_STATE_TRACKING（可跟踪状态）才进行绘制。
    AREngine_ARTrackingState outTrackingState;
    HMS_AREngine_ARTrackable_GetTrackingState(arSession, arTrackable, &outTrackingState);
    AREngine_ARPlane *subsumePlane = nullptr;
    // 获取平面的父平面（一个平面被另一个平面合并时，会产生父平面），如果无父平面返回为NULL。
     HMS_AREngine_ARPlane_AcquireSubsumedBy(arSession, arPlane, &subsumePlane);
    if (subsumePlane != nullptr) {
        HMS_AREngine_ARTrackable_Release(reinterpret_cast<AREngine_ARTrackable*>(subsumePlane));
        // 如果当前平面有父平面，则当前平面不进行展示。否则会出现双平面。
        continue;
    }
    // 跟踪状态为：ARENGINE_TRACKING_STATE_TRACKING时才进行绘制。
    if (AREngine_ARTrackingState::ARENGINE_TRACKING_STATE_TRACKING != outTrackingState) {
        continue;
    }
    // 进行平面绘制。
}
HMS_AREngine_ARTrackableList_Destroy(planeList);
planeList = nullptr;
```
             调用[HMS_AREngine_ARPlane_GetPolygon](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arplane_getpolygon)函数获取平面的二维顶点坐标数组，用于绘制平面边界。

       ```
// 获取检测到平面的二维顶点数组大小。
int32_t polygonLength = 0;
HMS_AREngine_ARPlane_GetPolygonSize(arSession, arPlane, &polygonLength);

// 获取检测到平面的二维顶点数组，格式为[x1，z1，x2，z2，...]。
const int32_t verticesSize = polygonLength / 2;
std::vector<glm::vec2> raw_vertices(verticesSize);
HMS_AREngine_ARPlane_GetPolygon(arSession, arPlane, glm::value_ptr(raw_vertices.front()), polygonLength);

// 局部坐标系顶点坐标。
for (int32_t i = 0; i < verticesSize; ++i) {
    vertices.emplace_back(raw_vertices[i].x, raw_vertices[i].y, 0.75f);
}
```
                                 调用[HMS_AREngine_ARPlane_GetPolygon](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arplane_getpolygon)函数获取平面的二维顶点坐标数组格式为[x1，z1，x2，z2，...]。这些值均在平面局部坐标系的x-z平面中定义，须先调用[HMS_AREngine_ARPlane_GetCenterPose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arplane_getcenterpose)函数获取从平面的局部坐标系到世界坐标系转换的位姿数据，然后调用[HMS_AREngine_ARPose_GetMatrix](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arpose_getmatrix)函数将位姿数据转换成4X4的矩阵，该矩阵与局部坐标系的坐标点做乘法，可以得到局部坐标系到世界坐标系的转换。

                            将平面的二维顶点坐标转换到世界坐标系，并绘制平面。

       ```
// 获取从平面的局部坐标系到世界坐标系转换的位姿信息。
AREngine_ARPose *scopedArPose = nullptr;
HMS_AREngine_ARPose_Create(arSession, nullptr, 0, &scopedArPose);
HMS_AREngine_ARPlane_GetCenterPose(arSession, arPlane, scopedArPose);

// 将位姿数据转换成4X4的矩阵，outMatrixColMajor4x4为存放数组，其中的数据按照列优先存储。
// 该矩阵与局部坐标系的坐标点做乘法，可以得到局部坐标系到世界坐标系的转换。
HMS_AREngine_ARPose_GetMatrix(arSession, scopedArPose, glm::value_ptr(modelMat), 16);
HMS_AREngine_ARPose_Destroy(scopedArPose);

// 构筑绘制渲染平面所需的数据。
// 生成三角形。
for (int i = 1; i < verticesSize - 1; ++i) {
    triangles.push_back(0);
    triangles.push_back(i);
    triangles.push_back(i + 1);
}
// 生成平面包围线。
for (int i = 0; i < verticesSize; ++i) {
    lines.push_back(i);
}
```
     
                  #### [h2]点击屏幕

     
             用户点击屏幕后，基于点击事件获取屏幕坐标。可参考[Native XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent)。

       添加头文件：native_interface_xcomponent.h。

       #include <ace/xcomponent/native_interface_xcomponent.h>       通过点击事件获取屏幕点击坐标。

       ```
float pixelX= 0.0f;
float pixelY= 0.0f;
int32_t ret = OH_NativeXComponent_GetTouchEvent(component, window, &mTouchEvent);

if (ret == OH_NATIVEXCOMPONENT_RESULT_SUCCESS) {
    if (mTouchEvent.type == OH_NATIVEXCOMPONENT_DOWN) {
        pixelX= mTouchEvent.touchPoints[0].x;
        pixelY= mTouchEvent.touchPoints[0].y;
    } else {
        return;
    }
}
```
             调用[HMS_AREngine_ARFrame_HitTest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arframe_hittest)函数进行碰撞检测，结果存放在碰撞检测结果列表中。

       ```
// 创建一个命中检测结果对象列表，arSession为创建AR场景步骤中创建的会话对象。
AREngine_ARHitResultList *hitResultList = nullptr;
HMS_AREngine_ARHitResultList_Create(arSession, &hitResultList);

// 获取命中检测结果对象列表，arFrame为创建AR场景步骤中创建的帧对象，pixelX/pixelY为屏幕点坐标。
HMS_AREngine_ARFrame_HitTest(arSession, arFrame, pixelX, pixelY, hitResultList);
```
                                 碰撞结果按照交点与设备的距离从近到远进行排序，存放在碰撞结果列表中。

                    
                  #### [h2]放置虚拟物体

     
             调用[HMS_AREngine_ARHitResultList_GetItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arhitresultlist_getitem)函数遍历碰撞检测结果列表，获取命中的可跟踪对象。

       ```
// 创建命中检测结果对象。
AREngine_ARHitResult *arHit = nullptr;
HMS_AREngine_ARHitResult_Create(arSession, &arHit);

// 获取第一个命中检测结果对象。
HMS_AREngine_ARHitResultList_GetItem(arSession, hitResultList, 0, arHit);

// 获取被命中的可追踪对象。
AREngine_ARTrackable *arHitTrackable = nullptr;
HMS_AREngine_ARHitResult_AcquireTrackable(arSession, arHit, &arHitTrackable);
```
             判断碰撞结果是否存在于平面内部。

       ```
AREngine_ARTrackableType ar_trackable_type = ARENGINE_TRACKABLE_INVALID;
HMS_AREngine_ARTrackable_GetType(arSession, arTrackable, &ar_trackable_type);
if (ARENGINE_TRACKABLE_PLANE == ar_trackable_type) {
    AREngine_ARPose *arPose = nullptr;
    HMS_AREngine_ARPose_Create(arSession, nullptr, 0, &arPose);
    HMS_AREngine_ARHitResult_GetHitPose(arSession, arHit, arPose);
    // 判断位姿是否位于平面的多边形范围内。0表示不在范围内，非0表示在范围内。
    HMS_AREngine_ARPlane_IsPoseInPolygon(arSession, arPlane, arPose, &inPolygon);
    HMS_AREngine_ARPose_Destroy(arPose);
    if (!inPolygon) {
        // 不在平面内，就跳过当前平面。
        continue;
    }
}
```
             在碰撞结果位置创建一个新的锚点，并基于此锚点放置虚拟模型。

       ```
// 在碰撞命中位置创建一个新的锚点。
AREngine_ARAnchor *anchor = nullptr;
HMS_AREngine_ARHitResult_AcquireNewAnchor(arSession, arHitResult, &anchor);

// 判断锚点的可跟踪状态
AREngine_ARTrackingState trackingState = ARENGINE_TRACKING_STATE_STOPPED;
HMS_AREngine_ARAnchor_GetTrackingState(arSession, anchor, &trackingState);
if (trackingState != ARENGINE_TRACKING_STATE_TRACKING) {
    HMS_AREngine_ARAnchor_Release(anchor);
    return;
}
```
             绘制模型。

       调用[HMS_AREngine_ARAnchor_GetPose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_aranchor_getpose)函数获取锚点位姿，并基于该位姿绘制虚拟模型。

       ```
// 获取锚点的位姿。
AREngine_ARPose *pose = nullptr;
HMS_AREngine_ARPose_Create(arSession, nullptr, 0, &pose);
HMS_AREngine_ARAnchor_GetPose(arSession, anchor, pose);
// 将位姿数据转换成4X4的矩阵modelMat。
HMS_AREngine_ARPose_GetMatrix(arSession, pose, glm::value_ptr(modelMat), 16);
HMS_AREngine_ARPose_Destroy(pose);
// 绘制虚拟模型。
// 开发者可以使用OpenGL进行模型绘制，可参考示例代码：world_render_manager.cpp及world_object_renderer.cpp。
```

---
*Updated: 2026-04-20 01:44:43*
