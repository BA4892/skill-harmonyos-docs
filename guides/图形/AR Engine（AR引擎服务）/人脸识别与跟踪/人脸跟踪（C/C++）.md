# 人脸跟踪（C/C++）

> **分区**: Guides  |  **Slug**: `arengine-c-face`  |  **DocID**: `7c88610aa2884b34b3e07b9619fab6be`  |  **NodeID**: `000201776839666534226a74c5b50509`

---

# 人脸跟踪（C/C++）

                 #### 约束与限制

     人脸识别与跟踪能力支持部分Phone、部分Tablet设备、TV设备。请参考[硬件要求](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-preparations#硬件要求)判断设备是否支持运动跟踪及平面识别特性（[ARENGINE_FEATURE_TYPE_FACE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_featuretype)）。

                  #### 接口说明

     以下接口为AR Engine人脸跟踪相关接口，详细接口和说明，请参考[AR Engine API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine)。

           
                        | 接口名          | 描述         
                               | [HMS_AREngine_ARConfig_GetCameraLensFacing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arconfig_getcameralensfacing)          | 获取相机镜头朝向。         
                 | [HMS_AREngine_ARConfig_GetMultiFaceMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arconfig_getmultifacemode)          | 获取多人脸检测模式。         
                 | [HMS_AREngine_ARConfig_SetCameraLensFacing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arconfig_setcameralensfacing)          | 设置相机镜头朝向。         
                 | [HMS_AREngine_ARConfig_SetMultiFaceMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arconfig_setmultifacemode)          | 设置多人脸检测模式。         
                 | [HMS_AREngine_ARFace_AcquireBlendShapes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arface_acquireblendshapes)          | 获取人脸表情信息。         
                 | [HMS_AREngine_ARFace_AcquireGeometry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arface_acquiregeometry)          | 获取人脸几何信息。         
                 | [HMS_AREngine_ARFace_AcquireViewMatrix](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arface_acquireviewmatrix)          | 获取当前人脸的面视图矩阵。         
                 | [HMS_AREngine_ARFace_GetCenterPose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arface_getcenterpose)          | 获取从人脸中心点位姿信息。         
                 | [HMS_AREngine_ARFaceBlendShapes_AcquireData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arfaceblendshapes_acquiredata)          | 获取微表情数据的集合。         
                 | [HMS_AREngine_ARFaceBlendShapes_AcquireTypes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arfaceblendshapes_acquiretypes)          | 获取所有微表情参数类型数组。         
                 | [HMS_AREngine_ARFaceBlendShapes_GetCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arfaceblendshapes_getcount)          | 获取人脸微表情数据的个数。         
                 | [HMS_AREngine_ARFaceBlendShapes_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arfaceblendshapes_release)          | 释放当前人脸的blendShapes对象，即由[HMS_AREngine_ARFace_AcquireBlendShapes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arface_acquireblendshapes)创建的对象。         
                 | [HMS_AREngine_ARFaceGeometry_AcquireIndices](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arfacegeometry_acquireindices)          | 获取人脸Mesh中的三角形索引集合。         
                 | [HMS_AREngine_ARFaceGeometry_AcquireTexCoord](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arfacegeometry_acquiretexcoord)          | 获取人脸Mesh中的纹理坐标集。         
                 | [HMS_AREngine_ARFaceGeometry_AcquireTriangleLabels](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arfacegeometry_acquiretrianglelabels)          | 获取人脸Mesh中的三角形标签集合。         
                 | [HMS_AREngine_ARFaceGeometry_AcquireVertices](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arfacegeometry_acquirevertices)          | 获取人脸Mesh中的顶点集合。         
                 | [HMS_AREngine_ARFaceGeometry_GetIndicesSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arfacegeometry_getindicessize)          | 获取人脸Mesh中三角形索引的大小。         
                 | [HMS_AREngine_ARFaceGeometry_GetTexCoordSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arfacegeometry_gettexcoordsize)          | 获取人脸Mesh中纹理坐标的大小。         
                 | [HMS_AREngine_ARFaceGeometry_GetTriangleCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arfacegeometry_gettrianglecount)          | 获取人脸Mesh中三角形的大小。         
                 | [HMS_AREngine_ARFaceGeometry_GetTriangleLabelsSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arfacegeometry_gettrianglelabelssize)          | 获取人脸Mesh中三角形标签的大小。         
                 | [HMS_AREngine_ARFaceGeometry_GetVerticesSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arfacegeometry_getverticessize)          | 获取人脸Mesh中顶点的大小。         
                 | [HMS_AREngine_ARFaceGeometry_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arfacegeometry_release)          | 释放当前人脸Mesh对象，即由[HMS_AREngine_ARFace_AcquireBlendShapes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arface_acquireblendshapes)创建的对象。         
             

                       #### 开发步骤

     开发者可参考管理AR会话章节的[引入AR Engine](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-arsession#引入ar-engine)。

                  #### [h2]创建UI界面

     创建一个UI界面，使用XComponent组件用于显示相机预览画面，并定时触发每一帧绘制。

     ```
// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARFace.ets
import { display } from '@kit.ArkUI';
import { resourceManager } from '@kit.LocalizationKit';
import { systemDateTime } from '@kit.BasicServicesKit';
import arEngineDemo from 'libentry.so';

@Builder
export function ARFaceBuilder() {
  ARFace();
}

@Component
struct ARFace {
  pageInfos: NavPathStack = new NavPathStack();
  @State context: Context = this.getUIContext().getHostContext() as Context;
  private xComponentId = 'ARFace';
  private resMgr: resourceManager.ResourceManager = this.context.resourceManager;
  private interval: number = -1;
  @State rotation: number = display.getDefaultDisplaySync().rotation;

  build() {
    NavDestination() {
      RelativeContainer() {
        XComponent({ id: this.xComponentId, type: XComponentType.SURFACE, libraryname: 'entry' })
          .width('100%')
          .height('100%')
          .alignRules({
            center: { anchor: "__container__", align: VerticalAlign.Center },
            middle: { anchor: "__container__", align: HorizontalAlign.Center }
          })
          .onLoad(() => {
            this.interval = setInterval(() => {
              // Call the update Native API to update the calculation result of each frame by AR Engine.
              arEngineDemo.update(this.xComponentId);
            }, 33) // Set the frame rate to 30 fps (with the frame refreshed every 33 ms).
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
      arEngineDemo.show(this.xComponentId);
    })
    .onHidden(() => {
      arEngineDemo.hide(this.xComponentId);
    })
    .onReady((context: NavDestinationContext) => {
      this.pageInfos = context.pathStack;
    })
    .hideTitleBar(true)
    .hideBackButton(true)
    .hideToolBar(true)
  }
}
```
                  #### [h2]引入AR Engine

     开发者可参考AR物体摆放章节的[引入AR Engine](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-arworld#引入ar-engine)。

                  #### [h2]创建AR会话并配置为开启人脸跟踪模式

     使用人脸识别与跟踪能力时请使用[HMS_AREngine_ARSession_Create_Human_Perception](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_create_human_perception)创建AR会话。

     ```
AREngine_ARSession *arSession = nullptr;
// 创建AR会话。
HMS_AREngine_ARSession_Create_Human_Perception(nullptr, nullptr, &arSession);
AREngine_ARConfig *arConfig = nullptr;
// 创建AR会话配置器。
HMS_AREngine_ARConfig_Create(arSession, &arConfig);
// 设置ARType为FACE开启人脸跟踪模式。
HMS_AREngine_ARConfig_SetARType(arSession, arConfig, ARENGINE_TYPE_FACE)；
// （可选）设置为前置相机
HMS_AREngine_ARConfig_SetCameraLensFacing(arSession, arConfig, ARENGINE_CAMERA_FACING_FRONT);
// （可选）设置为多人脸模式
HMS_AREngine_ARConfig_SetMultiFaceMode(arSession, arConfig, ARENGINE_MULTIFACE_ENABLE);
// 配置器设置给AR会话。
HMS_AREngine_ARSession_Configure(arSession, arConfig);
```
                  #### [h2]获取当前环境中的人脸信息

     
             创建一个可追踪对象列表trackableList，用于存放人脸跟踪模式下AR Engine运行过程中检测到的所有人脸。

       ```
AREngine_ARTrackableList *trackableList = nullptr;
HMS_AREngine_ARTrackableList_Create(arSession, &trackableList);
// 调用HMS_AREngine_ARSession_GetAllTrackables函数，检测当前环境中的所有人脸，并将结果存放在trackableList中。
HMS_AREngine_ARSession_GetAllTrackables(arSession, planeTrackedType, planeList);
```
             获取平面数量调用[HMS_AREngine_ARTrackableList_GetSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_artrackablelist_getsize)函数获取可追踪对象数量，结果存放在trackableListSize中。

       ```
int32_t trackableListSize = 0;
HMS_AREngine_ARTrackableList_GetSize(arSession, trackableList, &trackableListSize);
// 未设置多人脸模式时，最多同时跟踪1个人脸信息，设置后最多同时跟踪3个人脸信息
```
             转化为人脸信息对象[AREngine_ARFace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arface)。

       ```
for (int i = 0; i < trackableListSize; ++i) {
    // 遍历所有人脸信息对象，根据您的应用进行处理。
    AREngine_ARTrackable *arTrackable = nullptr;
    HMS_AREngine_ARTrackableList_AcquireItem(arSession, trackableList, i, &arTrackable);
    AREngine_ARFace *arFace = reinterpret_cast<AREngine_ARFace*>(arTrackable);
}
```
     
                  #### 获取当前人脸的位姿信息

     
             先通过[HMS_AREngine_ARPose_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arpose_create)接口创建一个[ARPose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arpose)对象，然后调用[HMS_AREngine_ARFace_GetCenterPose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arface_getcenterpose)，获取当前人脸的位姿信息。

       ```
AREngine_ARPose *facePose = nullptr;
HMS_AREngine_ARPose_Create(arSession, nullptr, 0, &facePose);
HMS_AREngine_ARFace_GetCenterPose(arSession, arFace, facePose);
```
             获取当前人脸的视图矩阵。

       调用[HMS_AREngine_ARFace_AcquireViewMatrix](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arface_acquireviewmatrix)函数，获取当前人脸的视图矩阵，该矩阵用于后续生成MVP矩阵实现渲染。

       ```
float *viewMatrix = new float[16];
int size = 16;
auto result = HMS_AREngine_ARFace_AcquireViewMatrix(arSession, arFace, viewMatrix, size);
```
             获取当前人脸的几何信息。

       调用[HMS_AREngine_ARFace_AcquireGeometry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arface_acquiregeometry)，获取当前人脸的几何信息，并将结果存放在arFaceGeometry中。

       ```
AREngine_ARFaceGeometry* arFaceGeometry = nullptr;
HMS_AREngine_ARFace_AcquireGeometry(arSession, arFace, &arFaceGeometry);
```
             获取人脸的几何信息中的三角形顶点。

       ```
// 调用HMS_AREngine_ARFaceGeometry_GetTriangleCount函数，获取人脸几何信息中的三角形数量
int triangleCount = 0;
HMS_AREngine_ARFaceGeometry_GetTriangleCount(arSession, arFaceGeometry, &triangleCount);
// 调用HMS_AREngine_ARFaceGeometry_GetVerticesSize函数，获取人脸几何信息中的三角形顶点数量
int verticesSize = 0;
HMS_AREngine_ARFaceGeometry_GetVerticesSize(arSession, arFaceGeometry, &verticesSize);
// 调用HMS_AREngine_ARFaceGeometry_AcquireVertices函数，获取人脸几何信息中的三角形顶点集合
const float *meshVertices = nullptr;
HMS_AREngine_ARFaceGeometry_AcquireVertices(arSession, arFaceGeometry, &meshVertices);
```
             获取人脸的几何信息中的三角形面片。

       ```
// 调用HMS_AREngine_ARFaceGeometry_GetIndicesSize函数，获取三角形面片对应顶点的索引个数，每三个顶点索引表示一个三角形面片
int indicesSize = 0;
HMS_AREngine_ARFaceGeometry_GetIndicesSize(arSession, arFaceGeometry, &indicesSize);
// 调用HMS_AREngine_ARFaceGeometry_AcquireIndices函数，获取三角形面片对应顶点的索引列表
int32_t *meshTriangleIndices = nullptr;
HMS_AREngine_ARFaceGeometry_AcquireIndices(arSession, arFaceGeometry, &meshTriangleIndices);
```
             获取人脸的几何信息中的三角形面片的语义标签。

       ```
// 调用HMS_AREngine_ARFaceGeometry_GetTriangleLabelsSize函数，获取三角形面片语义标签数量
int triangleLabelsSize = 0;
HMS_AREngine_ARFaceGeometry_GetTriangleLabelsSize(arSession, arFaceGeometry, &triangleLabelsSize);
// 调用HMS_AREngine_ARFaceGeometry_AcquireTriangleLabels函数，获取三角形面片语义标签集合
const AREngine_ARAnimojiTriangleLabel* triangleLabels = nullptr;
HMS_AREngine_ARFaceGeometry_AcquireTriangleLabels(arSession, arFaceGeometry, &triangleLabels);
```
             获取人脸几何信息中的UV纹理坐标。

       ```
// 调用HMS_AREngine_ARFaceGeometry_GetTexCoordSize函数，获取UV纹理坐标数量
int texCoordSize = 0;
HMS_AREngine_ARFaceGeometry_GetTexCoordSize(arSession, arFaceGeometry, &texCoordSize);
// 调用HMS_AREngine_ARFaceGeometry_AcquireTexCoord函数，获取UV纹理坐标集合
const float* texCoords = nullptr;
HMS_AREngine_ARFaceGeometry_AcquireTexCoord(arSession, arFaceGeometry, &texCoords);
```
             获取当前人脸的微表情信息。

       ```
// 调用HMS_AREngine_ARFace_AcquireBlendShapes，获取当前人脸的微表情信息，并将结果存放在arFaceBlendShapes中。
AREngine_ARFaceBlendShapes* arFaceBlendShapes = nullptr;
HMS_AREngine_ARFace_AcquireBlendShapes(arSession, arFace, &arFaceBlendShapes);
// 调用HMS_AREngine_ARFace_AcquireBlendShapes，获取当前人脸的微表情的数量
int count = 0;
HMS_AREngine_ARFaceBlendShapes_GetCount(arSession, arFaceBlendShapes, &count);
// 调用HMS_AREngine_ARFaceBlendShapes_AcquireTypes，获取当前人脸的微表情的标签集合
const AREngine_ARAnimojiBlendShape* blendShapesTypes = nullptr;
HMS_AREngine_ARFaceBlendShapes_AcquireTypes(arSession, arFaceBlendShapes, &blendShapesTypes);
// 调用HMS_AREngine_ARFaceBlendShapes_AcquireData，获取当前人脸的微表情的数据集合，集合中的元素表示该位置在标签集合中表示的微表情的变化程度
const float *blendShapesData = nullptr;
HMS_AREngine_ARFaceBlendShapes_AcquireData(arSession, arFaceBlendShapes, &blendShapesData);
```

---
*Updated: 2026-04-22 06:34:11*
