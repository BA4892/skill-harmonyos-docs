# 人体跟踪与骨骼关键点识别（C/C++）

> **分区**: Guides  |  **Slug**: `arengine-c-body`  |  **DocID**: `34d7718b0dea42a18f97777b8c87f7bb`  |  **NodeID**: `000201776839666534225f258db7a205`

---

# 人体跟踪与骨骼关键点识别（C/C++）

                 #### 约束与限制

     人体跟踪与骨骼关键点识别能力支持部分Phone、部分Tablet设备、TV设备。请参考[硬件要求](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-preparations#硬件要求)判断设备是否支持运动跟踪及平面识别特性（[ARENGINE_FEATURE_TYPE_BODY](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_featuretype)）。

                  #### 接口说明

     人体跟踪与骨骼关键点识别主要依赖ARBody，以下接口为AR Engine人体跟踪与骨骼关键点识别相关接口，详细接口和说明，请参考[AR Engine API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine)。

           
                        | 接口名          | 描述         
                               | [HMS_AREngine_ARBody_GetSkeletonConfidence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arbody_getskeletonconfidence)          | 获取人体对象每个骨骼点检测的置信度。         
                 | [HMS_AREngine_ARBody_GetSkeletonConnection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arbody_getskeletonconnection)          | 获取人体对象骨骼点之间的链接关系数据。         
                 | [HMS_AREngine_ARBody_GetSkeletonConnectionSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arbody_getskeletonconnectionsize)          | 获取人体对象骨骼点之间的链接关系总数。         
                 | [HMS_AREngine_ARBody_GetSkeletonTypes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arbody_getskeletontypes)          | 获取识别出的人体对象骨骼点类型。         
                 | [HMS_AREngine_ARBody_GetSkeletonPointCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arbody_getskeletonpointcount)          | 获取人体对象的骨骼点个数。         
                 | [HMS_AREngine_ARBody_GetSkeletonPointData2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arbody_getskeletonpointdata2d)          | 当运行2D骨骼跟踪算法时，返回人体骨骼点的坐标数据。         
                 | [HMS_AREngine_ARBody_GetSkeletonPointIsValid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arbody_getskeletonpointisvalid)          | 获取人体对象骨骼点的坐标是否有效，返回有效性数组。         
                 | [HMS_AREngine_ARBody_GetBodyTrackId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arbody_getbodytrackid)          | 获取指定人体对象的标识。         
                 | [HMS_AREngine_ARBody_GetBodyTimeStamp](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arbody_getbodytimestamp)          | 获取人体对象的检测时间点，表示触发检测人体对象距离启动相机的时间间隔，单位为ns。         
                 | [HMS_AREngine_ARConfig_SetBodyDetectedNum](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arconfig_setbodydetectednum)          | 设置追踪人数。         
             

                       #### 开发步骤

                  #### [h2]引入AR Engine

     开发者可参考管理AR会话章节的[引入AR Engine](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-arsession#引入ar-engine)。

                  #### [h2]检查设备是否支持人体骨骼特性

     调用[HMS_AREngine_CheckSupported](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_checksupported)方法，检查设备是否支持[ARENGINE_FEATURE_TYPE_BODY](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_featuretype)人体骨骼特性。

                  #### [h2]创建UI界面

     创建一个UI界面，使用[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)组件显示相机预览画面，定时触发每一帧绘制。

     ```
// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARBody.ets。
import { Landmark } from '../body/ArBodyInterface';
import { arEngine, arViewController } from '@kit.AREngine';
import { resourceManager } from '@kit.LocalizationKit';
import { ARConfig } from '../utils/Utils';
import { display } from '@kit.ArkUI';
import { systemDateTime } from '@kit.BasicServicesKit';
import arEngineDemo from 'libarenginedemo.so';

@Builder
export function ARBodyBuilder() {
  ARBody();
}

interface ARBodyBoneLine {
  start: arEngine.ARBodyLandmarkType,
  end: arEngine.ARBodyLandmarkType,
}

@Entry
@ComponentV2
struct ARBody {
  private interval: number = -1;
  @Local context: Context = this.getUIContext().getHostContext() as Context;
  private idStr: string = systemDateTime.getTime(false).toString() + 'ARBody';
  private resMgr: resourceManager.ResourceManager = this.context.resourceManager;
  private params: ARConfig = new ARConfig();
  private isUpdate: boolean = false;
  private DEFAULT_CONVERT_FACTOR: number = 4 / 3;
  private boneLineNum: number = 26;
  private landMarkNum: number = 20;
  @Local displayWidth: number = display.getDefaultDisplaySync().width;
  @Local displayHeight: number = display.getDefaultDisplaySync().height;
  @Local rotation: number = display.getDefaultDisplaySync().rotation;
  @Local arContext?: arViewController.ARViewContext = undefined;
  @Local landmarks: Landmark[][] = [];
  @Local boneLines: ARBodyBoneLine[][] = [];
  @Local showPage: boolean = true;
  private uiContext: UIContext = this.getUIContext();

  @Builder
  drawBodyPerception() {
    Shape() {
      ForEach(this.landmarks, (landmarks: Landmark[], index: number) => {
        this.drawBodyLandmarks(index);
        this.drawBodyBones(index);
      })
    }
    .width(this.uiContext.px2vp(this.displayWidth))
    .height(this.uiContext.px2vp(this.displayHeight))
  }

  @Builder
  drawBodyLandmarks(bodyIndex: number) {
    ForEach(this.landmarks[bodyIndex], (landmark: Landmark, index: number) => {
      Circle({ width: 4, height: 4 })
        .position({
          x: this.uiContext.px2vp(landmark.x),
          y: this.uiContext.px2vp(landmark.y)
        })
        .fill(Color.White)
    })
  }

  @Builder
  drawBodyBones(bodyIndex: number) {
    if (this.boneLines.length > bodyIndex && this.landmarks[bodyIndex].length > 0) {
      ForEach(this.boneLines[bodyIndex], (bone: ARBodyBoneLine, index: number) => {
        this.drawBodyBoneLine(bone.start, bone.end, this.getLineColorByLineEnd(bone.end), bodyIndex);
      })
    }
  }

  @Builder
  drawBodyBoneLine(start: arEngine.ARBodyLandmarkType, end: arEngine.ARBodyLandmarkType, color: Color, index: number) {
    Line()
      .startPoint([this.uiContext.px2vp(this.landmarks[index][start - 1]?.x),
        this.uiContext.px2vp(this.landmarks[index][start - 1]?.y)])
      .endPoint([this.uiContext.px2vp(this.landmarks[index][end - 1]?.x),
        this.uiContext.px2vp(this.landmarks[index][end - 1]?.y)])
      .stroke(color)
      .strokeWidth(3)
  }

  private processLandMarks(res: Landmark[]): Landmark[][] {
    if (display.getDefaultDisplaySync().width * 3 < display.getDefaultDisplaySync().height * 4) {
      this.displayWidth = display.getDefaultDisplaySync().width;
      this.displayHeight = this.displayWidth * this.DEFAULT_CONVERT_FACTOR;
    } else {
      this.displayHeight = display.getDefaultDisplaySync().height;
      this.displayWidth = this.displayHeight * this.DEFAULT_CONVERT_FACTOR;
    }

    let ret: Landmark[][] = [];
    let num = 0;
    for (let i = 0; i < Math.min(this.params.maxDetectedBodyNum, res.length / this.landMarkNum); i++) {
      ret.push([]);
      for (let j = 0; j < this.landMarkNum; j++) {
        ret[i].push({
          x: res[num].x * this.displayWidth,
          y: res[num].y * this.displayHeight
        })
        num++;
      }
    }
    return ret;
  }

  private getBoneLines(res: number[]): ARBodyBoneLine[][] {
    let ret: ARBodyBoneLine[][] = [];
    let num = 0;
    for (let i = 0; i < Math.min(this.params.maxDetectedBodyNum, res.length / this.boneLineNum); ++i) {
      ret.push([]);
      for (let j = 0; j < this.boneLineNum; j += 2) {
        ret[i].push({
          start: res[num],
          end: res[num + 1]
        });
        num += 2;
      }
    }
    return ret;
  }

  private runArBodyCheck(): void {
    let config =
      new Int32Array([0, this.params.powerMode, 1, this.params.previewMode, 2, this.rotation, 9,
        this.params.cameraLensFacing, 10, this.params.maxDetectedBodyNum]);
    arEngineDemo.init(this.resMgr);
    arEngineDemo.start(this.idStr, config);
    this.interval = setInterval(() => {
      if (!this.isUpdate) {
        return;
      }
      this.rotation = display.getDefaultDisplaySync().rotation;
      arEngineDemo.update(this.idStr, this.rotation);
      this.landmarks = this.processLandMarks(arEngineDemo.getLandmark(this.idStr));
      const boneLines: number[] = arEngineDemo.getBoneLine(this.idStr).skeletonConnections;
      this.boneLines = this.getBoneLines(boneLines)
    }, 66);
  }

  private getLineColorByLineEnd(lineEnd: arEngine.ARBodyLandmarkType): Color {
    switch (lineEnd) {
      case arEngine.ARBodyLandmarkType.LEFT_ELBOW:
      case arEngine.ARBodyLandmarkType.LEFT_WRIST:
      case arEngine.ARBodyLandmarkType.LEFT_KNEE:
      case arEngine.ARBodyLandmarkType.LEFT_ANKLE:
        return Color.Green;
      case arEngine.ARBodyLandmarkType.RIGHT_ELBOW:
      case arEngine.ARBodyLandmarkType.RIGHT_WRIST:
      case arEngine.ARBodyLandmarkType.RIGHT_KNEE:
      case arEngine.ARBodyLandmarkType.RIGHT_ANKLE:
        return Color.Blue;
      case arEngine.ARBodyLandmarkType.RIGHT_SHOULDER:
      case arEngine.ARBodyLandmarkType.RIGHT_HIP:
      case arEngine.ARBodyLandmarkType.LEFT_SHOULDER:
      case arEngine.ARBodyLandmarkType.LEFT_HIP:
      default:
        return Color.Orange;
    }
  }

  build() {
    NavDestination() {
      RelativeContainer() {
        Stack() {
          XComponent({ id: this.idStr, type: XComponentType.SURFACE, libraryname: 'arenginedemo' })
            .width(this.uiContext.px2vp(this.displayWidth))
            .height(this.uiContext.px2vp(this.displayHeight))
            .visibility(this.showPage ? Visibility.Visible : Visibility.None)
            .alignRules({
              center: { anchor: "__container__", align: VerticalAlign.Center },
              middle: { anchor: "__container__", align: HorizontalAlign.Center }
            })
          this.drawBodyPerception()
        }
        .width('100%')
        .height('100%')
      }
    }
    .onAppear(async () => {
      this.runArBodyCheck();
    })
    .onWillDisappear(() => {
      clearInterval(this.interval);
      arEngineDemo.stop(this.idStr);
    })
    .onShown(() => {
      this.isUpdate = true;
      arEngineDemo.show(this.idStr);
    })
    .onHidden(() => {
      this.isUpdate = false;
      arEngineDemo.hide(this.idStr);
    })
    .onReady(ctx => {
      this.params = ctx.pathInfo.param as ARConfig;
    })
    .hideTitleBar(true)
    .hideBackButton(true)
    .hideToolBar(true)
    .width('100%')
    .height('100%')
  }
}
```
                  #### [h2]创建AR会话

     创建AR会话，配置人体跟踪模式。使用人体跟踪与骨骼关键点识别能力时请使用[HMS_AREngine_ARSession_Create_Human_Perception](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_create_human_perception)创建AR会话。

     ```
AREngine_ARSession *arSession = nullptr;
// 创建AR会话。
HMS_AREngine_ARSession_Create_Human_Perception(nullptr, nullptr, &arSession);
AREngine_ARConfig *arConfig = nullptr;
// 创建AR会话配置器。
HMS_AREngine_ARConfig_Create(arSession, &arConfig);
// 设置人体跟踪模式的AR类型。
HMS_AREngine_ARConfig_SetARType(arSession, arConfig, ARENGINE_TYPE_BODY);
// 设置追踪人数，当前支持1或2
HMS_AREngine_ARConfig_SetBodyDetectedNum(arSession, arConfig, 1);
// 配置器设置给AR会话。
HMS_AREngine_ARSession_Configure(arSession, arConfig);
```
                  #### [h2]创建可跟踪对象列表

     创建一个可跟踪对象列表targetList，用于存放AR Engine运行过程中检测到的所有可跟踪对象。

     ```
AREngine_ARTrackableList *targetList = nullptr;
HMS_AREngine_ARTrackableList_Create(arSession, &targetList);
```
                  #### [h2]获取人体追踪对象

     调用[HMS_AREngine_ARSession_GetAllTrackables](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_getalltrackables)函数，检测当前环境中的所有人体追踪对象，并将结果存放在targetList中。

     ```
HMS_AREngine_ARSession_GetAllTrackables(arSession, ARENGINE_TRACKABLE_BODY, targetList);
```
                  #### [h2]获取可跟踪对象数量

     调用[HMS_AREngine_ARTrackableList_GetSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_artrackablelist_getsize)函数获取当前可跟踪对象数量，结果存放在targetSize中。

     ```
int32_t targetSize = 0;
HMS_AREngine_ARTrackableList_GetSize(arSession, targetList, &targetSize);
```
                  #### [h2]获取骨骼点相关信息

     ```
for (int i = 0; i < targetSize; i++) {
    AREngine_ARTrackable *arTrackable = nullptr;
    // 从可跟踪列表中获取指定index的对象。
    HMS_AREngine_ARTrackableList_AcquireItem(arSession, targetList, i, &arTrackable);
    // 转换为人体对象AREngine_ARBody。
    AREngine_ARBody *arBody = reinterpret_cast<AREngine_ARBody *>(arTrackable);
    int32_t pointCnt = 0;
    // 获取人体对象的骨骼点个数。
    HMS_AREngine_ARBody_GetSkeletonPointCount(arSession, arBody, &pointCnt);
    const float *skeletonPoints2D = nullptr;
    // 获取人体骨骼点的2D坐标数据。
    HMS_AREngine_ARBody_GetSkeletonPointData2D(arSession, arBody, &skeletonPoints2D);
    std::vector<float> skeletonPoints2Ds;
    for (int j = 0; j < pointCnt * 2; j++) {
        skeletonPoints2Ds.push_back(skeletonPoints2D[j]);
    }
    coord.push_back(skeletonPoints2Ds);
    const float *skeletonConfidences = nullptr;
    // 获取人体对象每个骨骼点检测的置信度。
    HMS_AREngine_ARBody_GetSkeletonConfidence(arSession, arBody, &skeletonConfidences);
    std::vector<float> skeletonConfidence2Ds;
    for (int j = 0; j < pointCnt; j++) {
        skeletonConfidence2Ds.push_back(skeletonConfidences[j]);
    }
    confidence.push_back(skeletonConfidence2Ds);
    const int32_t *isValids = nullptr;
    // 获取人体对象骨骼点的坐标是否有效。
    HMS_AREngine_ARBody_GetSkeletonPointIsValid(arSession, arBody, &isValids);
    std::vector<int32_t> skeletonValid2Ds;
    for (int j = 0; j < pointCnt; j++) {
        skeletonValid2Ds.push_back(isValids[j]);
    }
    valid.push_back(skeletonValid2Ds);
    int32_t outBodyTrackId = 0;
    // 获取指定人体对象的标识。
    HMS_AREngine_ARBody_GetBodyTrackId(arSession, arBody, &outBodyTrackId);
    int64_t timeStampNanoSec = 0;
    // 获取人体对象的检测时间点，表示触发检测人体对象距离启动相机的时间间隔，单位为ns。
    HMS_AREngine_ARBody_GetBodyTimeStamp(arSession, arBody, &timeStampNanoSec);
    int32_t connectionSize = 0;
    // 获取人体对象骨骼点之间的链接关系总数。
    HMS_AREngine_ARBody_GetSkeletonConnectionSize(arSession, arBody, &connectionSize);
    const AREngine_ARBodySkeletonType *skeletonConnections2D = nullptr;
    // 获取人体对象骨骼点之间的链接关系数据。
    HMS_AREngine_ARBody_GetSkeletonConnection(arSession, arBody, &skeletonConnections2D);
    const AREngine_ARBodySkeletonType *skeletonTypes = nullptr;
    // 获取识别出的人体对象骨骼点类型。
    HMS_AREngine_ARBody_GetSkeletonTypes(arSession, arBody, &skeletonTypes);
    std::vector<int32_t> skeletonValid2Ds;
    for (int j = 0; j < connectionSize * 2; j++) {
        skeletonValid2Ds.push_back(skeletonConnections2D[j]);
    }
    std::vector<int32_t> skeletonTypesVec;
    for (int j = 0; j < sizeof(std::underlying_type_t<AREngine_ARBodySkeletonType>); j++) {
        skeletonTypesVec.push_back(skeletonConnections2D[j]);
    }
    connections.push_back(skeletonValid2Ds);
    types.push_back(skeletonTypesVec);
}
```
                  #### [h2]销毁可跟踪对象列表

     可跟踪对象列表targetList不再使用后需销毁：

     ```
HMS_AREngine_ARTrackableList_Destroy(targetList);
```

---
*Updated: 2026-04-22 06:34:11*
