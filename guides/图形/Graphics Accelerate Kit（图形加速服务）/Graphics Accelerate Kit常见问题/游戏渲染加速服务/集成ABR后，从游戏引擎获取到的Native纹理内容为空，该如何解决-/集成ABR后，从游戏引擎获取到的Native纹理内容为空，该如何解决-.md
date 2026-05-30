# 集成ABR后，从游戏引擎获取到的Native纹理内容为空，该如何解决?

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `graphics-accelerate-faq-5`  |  **DocID**: `90e5cd0bdc1f431aab86652124f10824`  |  **NodeID**: `000201775795491975046e6f513a6085`

---

# 集成ABR后，从游戏引擎获取到的Native纹理内容为空，该如何解决?

       **现象描述**

    以团结引擎为例，游戏应用集成ABR，在游戏引擎中通过GetNativeTexturePtr获取Buffer关联的纹理，获取到的纹理内容为空。

    **原因分析**

    由于ABR对Buffer进行了自适应分辨率调整，并对ABR自适应缩放后的GLES纹理进行绘制，因而原始分辨率的GLES纹理中没有内容。

    **处理步骤**

    为解决此问题，需要通过[HMS_ABR_GetScaledTexture_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_abr_getscaledtexture_gles)接口获取到ABR自适应缩放后的GLES纹理索引。

    ```
// 在Buffer渲染后调用
GLuint originTexture;
GLuint scaledTexture;
errorCode = HMS_ABR_GetScaledTexture_GLES(context_, originTexture, &scaledTexture);
if (errorCode != ABR_SUCCESS) {
    GOLOGE("HMS_ABR_GetScaledTexture_GLES execution failed, error code: %d.", errorCode);
}
```

---
*Updated: 2026-04-20 01:45:00*
