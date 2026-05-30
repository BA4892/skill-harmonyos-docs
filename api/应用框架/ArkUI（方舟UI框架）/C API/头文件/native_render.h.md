# native_render.h

> **分区**: API参考  |  **Slug**: `capi-native-render-h`  |  **DocID**: `cc4388659e1d4c0995d150c22a07a44f`

---

# native_render.h

                 #### 概述

     提供NativeRender接口的类型定义。更多详细介绍请参考[构建渲染节点](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-embed-render-components)。

     **引用文件：** <arkui/native_render.h>

     **库：** libace_ndk.z.so

     **系统能力：** SystemCapability.ArkUI.ArkUI.Full

     **起始版本：** 20

     **相关模块：** [ArkUI_RenderNodeUtils](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-rendernodeutils)

     **相关示例：** [NativeRenderNodeSample](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeRenderNodeSample)

                  #### 汇总

                  #### [h2]结构体

                                   名称         typedef关键字         描述                                       [ArkUI_RenderNode*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle)         ArkUI_RenderNodeHandle         渲染节点指针。                         [ArkUI_RenderContentModifier*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/kui-nativemodule-arkui-rendercontentmodifierhandle)         ArkUI_RenderContentModifierHandle         内容修改器指针。                         [ArkUI_FloatProperty*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-floatpropertyhandle)         ArkUI_FloatPropertyHandle         浮点数属性指针。                         [ArkUI_Vector2Property*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-vector2propertyhandle)         ArkUI_Vector2PropertyHandle         二维向量属性指针。                         [ArkUI_ColorProperty*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-colorpropertyhandle)         ArkUI_ColorPropertyHandle         颜色属性指针。                         [ArkUI_FloatAnimatableProperty*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-nativemodule-arkui-floatanimatablepropertyhandle)         ArkUI_FloatAnimatablePropertyHandle         可动画的浮点数属性指针。                         [ArkUI_Vector2AnimatableProperty*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nativemodule-arkui-vector2animatablepropertyhandle)         ArkUI_Vector2AnimatablePropertyHandle         可动画的二维向量属性指针。                         [ArkUI_ColorAnimatableProperty*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-nativemodule-arkui-coloranimatablepropertyhandle)         ArkUI_ColorAnimatablePropertyHandle         可动画的颜色属性指针。                         [ArkUI_RectShape](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rectshapeoption)         ArkUI_RectShapeOption         范围形状结构体。                         [ArkUI_NodeBorderStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodeborderstyleoption)         ArkUI_NodeBorderStyleOption         边框样式配置项。                         [ArkUI_NodeBorderWidth](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodeborderwidthoption)         ArkUI_NodeBorderWidthOption         边框宽度配置项。                         [ArkUI_NodeBorderColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodebordercoloroption)         ArkUI_NodeBorderColorOption         边框颜色配置项。                         [ArkUI_NodeBorderRadius](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pi-arkui-nativemodule-arkui-nodeborderradiusoption)         ArkUI_NodeBorderRadiusOption         边框弧度配置项。                         [ArkUI_CircleShape](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-circleshapeoption)         ArkUI_CircleShapeOption         圆形形状配置项。                         [ArkUI_RoundRectShape](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-roundrectshapeoption)         ArkUI_RoundRectShapeOption         圆角矩形形状配置项。                         [ArkUI_CommandPath](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-commandpathoption)         ArkUI_CommandPathOption         自定义路径配置项。                         [ArkUI_RenderNodeMaskOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodemaskoption)         ArkUI_RenderNodeMaskOption         节点遮罩配置项。                         [ArkUI_RenderNodeClipOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodeclipoption)         ArkUI_RenderNodeClipOption         节点裁剪配置项。                                            #### [h2]函数

                                   名称         typedef关键字         描述                                       [int32_t OH_ArkUI_RenderNodeUtils_AddRenderNode(ArkUI_NodeHandle node, ArkUI_RenderNodeHandle child)](#oh_arkui_rendernodeutils_addrendernode)         -         向父自定义节点添加子渲染节点。                         [int32_t OH_ArkUI_RenderNodeUtils_RemoveRenderNode(ArkUI_NodeHandle node, ArkUI_RenderNodeHandle child)](#oh_arkui_rendernodeutils_removerendernode)         -         从父节点移除指定的子渲染节点。                         [int32_t OH_ArkUI_RenderNodeUtils_ClearRenderNodeChildren(ArkUI_NodeHandle node)](#oh_arkui_rendernodeutils_clearrendernodechildren)         -         清除父节点内的子渲染节点。                         [int32_t OH_ArkUI_RenderNodeUtils_Invalidate(ArkUI_NodeHandle node)](#oh_arkui_rendernodeutils_invalidate)         -         标记目标节点，触发其生命周期和子节点的重新渲染。                         [ArkUI_RenderNodeHandle OH_ArkUI_RenderNodeUtils_CreateNode()](#oh_arkui_rendernodeutils_createnode)         -         创建渲染节点。                         [int32_t OH_ArkUI_RenderNodeUtils_DisposeNode(ArkUI_RenderNodeHandle node)](#oh_arkui_rendernodeutils_disposenode)         -         销毁渲染节点。                         [int32_t OH_ArkUI_RenderNodeUtils_AddChild(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle child)](#oh_arkui_rendernodeutils_addchild)         -         向目标父渲染节点上添加子节点。                         [int32_t OH_ArkUI_RenderNodeUtils_InsertChildAfter(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle child, ArkUI_RenderNodeHandle sibling)](#oh_arkui_rendernodeutils_insertchildafter)         -         向父节点的目标子节点后添加子节点。                         [int32_t OH_ArkUI_RenderNodeUtils_RemoveChild(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle child)](#oh_arkui_rendernodeutils_removechild)         -         从指定渲染节点中移除子节点。                         [int32_t OH_ArkUI_RenderNodeUtils_ClearChildren(ArkUI_RenderNodeHandle node)](#oh_arkui_rendernodeutils_clearchildren)         -         清空指定渲染节点的所有子节点。                         [int32_t OH_ArkUI_RenderNodeUtils_GetChild(ArkUI_RenderNodeHandle node, int32_t index, ArkUI_RenderNodeHandle* child)](#oh_arkui_rendernodeutils_getchild)         -         获取指定索引位置的子节点。                         [int32_t OH_ArkUI_RenderNodeUtils_GetFirstChild(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle* child)](#oh_arkui_rendernodeutils_getfirstchild)         -         获取指定渲染节点的第一个子节点。                         [int32_t OH_ArkUI_RenderNodeUtils_GetNextSibling(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle* sibling)](#oh_arkui_rendernodeutils_getnextsibling)         -         获取指定节点的下一个兄弟节点。                         [int32_t OH_ArkUI_RenderNodeUtils_GetPreviousSibling(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle* sibling)](#oh_arkui_rendernodeutils_getprevioussibling)         -         获取指定节点的上一个兄弟节点。                         [int32_t OH_ArkUI_RenderNodeUtils_GetChildren(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle** children, int32_t* count)](#oh_arkui_rendernodeutils_getchildren)         -         获取父渲染节点的所有子渲染节点。                         [int32_t OH_ArkUI_RenderNodeUtils_GetChildrenCount(ArkUI_RenderNodeHandle node, int32_t* count)](#oh_arkui_rendernodeutils_getchildrencount)         -         获取指定渲染节点的子渲染节点数量。                         [int32_t OH_ArkUI_RenderNodeUtils_SetBackgroundColor(ArkUI_RenderNodeHandle node, uint32_t color)](#oh_arkui_rendernodeutils_setbackgroundcolor)         -         为渲染节点设置背景颜色。                         [int32_t OH_ArkUI_RenderNodeUtils_GetBackgroundColor(ArkUI_RenderNodeHandle node, uint32_t* color)](#oh_arkui_rendernodeutils_getbackgroundcolor)         -         获取渲染节点的背景颜色。                         [int32_t OH_ArkUI_RenderNodeUtils_SetClipToFrame(ArkUI_RenderNodeHandle node, int32_t clipToFrame)](#oh_arkui_rendernodeutils_setcliptoframe)         -         设置是否对当前渲染节点裁剪。                         [int32_t OH_ArkUI_RenderNodeUtils_GetClipToFrame(ArkUI_RenderNodeHandle node, int32_t* clipToFrame)](#oh_arkui_rendernodeutils_getcliptoframe)         -         获取是否对当前渲染节点裁剪。                         [int32_t OH_ArkUI_RenderNodeUtils_SetClipToBounds(ArkUI_RenderNodeHandle node, int32_t clipToBounds)](#oh_arkui_rendernodeutils_setcliptobounds)         -         设置是否对当前渲染节点边界裁剪。                         [int32_t OH_ArkUI_RenderNodeUtils_GetClipToBounds(ArkUI_RenderNodeHandle node, int32_t* clipToBounds)](#oh_arkui_rendernodeutils_getcliptobounds)         -         获取是否对当前渲染节点边界裁剪。                         [int32_t OH_ArkUI_RenderNodeUtils_SetOpacity(ArkUI_RenderNodeHandle node, float opacity)](#oh_arkui_rendernodeutils_setopacity)         -         为渲染节点设置不透明度值。                         [int32_t OH_ArkUI_RenderNodeUtils_GetOpacity(ArkUI_RenderNodeHandle node, float* opacity)](#oh_arkui_rendernodeutils_getopacity)         -         获取渲染节点的不透明度值。                         [int32_t OH_ArkUI_RenderNodeUtils_SetSize(ArkUI_RenderNodeHandle node, int32_t width, int32_t height)](#oh_arkui_rendernodeutils_setsize)         -         为渲染节点设置尺寸。                         [int32_t OH_ArkUI_RenderNodeUtils_GetSize(ArkUI_RenderNodeHandle node, int32_t* width, int32_t* height)](#oh_arkui_rendernodeutils_getsize)         -         获取渲染节点的尺寸。                         [int32_t OH_ArkUI_RenderNodeUtils_SetPosition(ArkUI_RenderNodeHandle node, int32_t x, int32_t y)](#oh_arkui_rendernodeutils_setposition)         -         为渲染节点设置位置坐标。                         [int32_t OH_ArkUI_RenderNodeUtils_GetPosition(ArkUI_RenderNodeHandle node, int32_t* x, int32_t* y)](#oh_arkui_rendernodeutils_getposition)         -         获取渲染节点的位置坐标。该坐标是渲染节点布局后相对父节点的位置偏移，单位为px。该坐标是父节点对该节点进行布局之后的结果，因此布局之后生效的offset属性和不参与布局的position属性不影响该坐标。                         [int32_t OH_ArkUI_RenderNodeUtils_SetPivot(ArkUI_RenderNodeHandle node, float x, float y)](#oh_arkui_rendernodeutils_setpivot)         -         为渲染节点的变换设置中心点。                         [int32_t OH_ArkUI_RenderNodeUtils_GetPivot(ArkUI_RenderNodeHandle node, float* x, float* y)](#oh_arkui_rendernodeutils_getpivot)         -         获取渲染节点的中心点坐标。                         [int32_t OH_ArkUI_RenderNodeUtils_SetScale(ArkUI_RenderNodeHandle node, float x, float y)](#oh_arkui_rendernodeutils_setscale)         -         为渲染节点设置缩放因子。                         [int32_t OH_ArkUI_RenderNodeUtils_GetScale(ArkUI_RenderNodeHandle node, float* x, float* y)](#oh_arkui_rendernodeutils_getscale)         -         获取渲染节点的缩放因子。                         [int32_t OH_ArkUI_RenderNodeUtils_SetTranslation(ArkUI_RenderNodeHandle node, float x, float y)](#oh_arkui_rendernodeutils_settranslation)         -         为渲染节点设置平移偏移量。                         [int32_t OH_ArkUI_RenderNodeUtils_GetTranslation(ArkUI_RenderNodeHandle node, float* x, float* y)](#oh_arkui_rendernodeutils_gettranslation)         -         获取渲染节点的平移偏移量。                         [int32_t OH_ArkUI_RenderNodeUtils_SetRotation(ArkUI_RenderNodeHandle node, float x, float y, float z)](#oh_arkui_rendernodeutils_setrotation)         -         为渲染节点设置旋转角度。                         [int32_t OH_ArkUI_RenderNodeUtils_GetRotation(ArkUI_RenderNodeHandle node, float* x, float* y, float* z)](#oh_arkui_rendernodeutils_getrotation)         -         获取渲染节点的旋转角度。                         [int32_t OH_ArkUI_RenderNodeUtils_SetTransform(ArkUI_RenderNodeHandle node, float* matrix)](#oh_arkui_rendernodeutils_settransform)         -         为渲染节点设置变换矩阵。                         [int32_t OH_ArkUI_RenderNodeUtils_SetShadowColor(ArkUI_RenderNodeHandle node, uint32_t color)](#oh_arkui_rendernodeutils_setshadowcolor)         -         为渲染节点设置阴影颜色。                         [int32_t OH_ArkUI_RenderNodeUtils_GetShadowColor(ArkUI_RenderNodeHandle node, uint32_t* color)](#oh_arkui_rendernodeutils_getshadowcolor)         -         获取渲染节点的阴影颜色。                         [int32_t OH_ArkUI_RenderNodeUtils_SetShadowOffset(ArkUI_RenderNodeHandle node, int32_t x, int32_t y)](#oh_arkui_rendernodeutils_setshadowoffset)         -         为渲染节点设置阴影偏移量。                         [int32_t OH_ArkUI_RenderNodeUtils_GetShadowOffset(ArkUI_RenderNodeHandle node, int32_t* x, int32_t* y)](#oh_arkui_rendernodeutils_getshadowoffset)         -         获取渲染节点的阴影偏移量。                         [int32_t OH_ArkUI_RenderNodeUtils_SetShadowAlpha(ArkUI_RenderNodeHandle node, float alpha)](#oh_arkui_rendernodeutils_setshadowalpha)         -         为渲染节点设置阴影透明度。                         [int32_t OH_ArkUI_RenderNodeUtils_GetShadowAlpha(ArkUI_RenderNodeHandle node, float* alpha)](#oh_arkui_rendernodeutils_getshadowalpha)         -         获取渲染节点的阴影透明度。                         [int32_t OH_ArkUI_RenderNodeUtils_SetShadowElevation(ArkUI_RenderNodeHandle node, float elevation)](#oh_arkui_rendernodeutils_setshadowelevation)         -         为渲染节点设置阴影高度。                         [int32_t OH_ArkUI_RenderNodeUtils_GetShadowElevation(ArkUI_RenderNodeHandle node, float* elevation)](#oh_arkui_rendernodeutils_getshadowelevation)         -         获取渲染节点的阴影高度。                         [int32_t OH_ArkUI_RenderNodeUtils_SetShadowRadius(ArkUI_RenderNodeHandle node, float radius)](#oh_arkui_rendernodeutils_setshadowradius)         -         为渲染节点设置阴影半径。                         [int32_t OH_ArkUI_RenderNodeUtils_GetShadowRadius(ArkUI_RenderNodeHandle node, float* radius)](#oh_arkui_rendernodeutils_getshadowradius)         -         获取渲染节点的阴影半径。                         [int32_t OH_ArkUI_RenderNodeUtils_SetBorderStyle(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderStyleOption* borderStyle)](#oh_arkui_rendernodeutils_setborderstyle)         -         为渲染节点设置边框样式。                         [int32_t OH_ArkUI_RenderNodeUtils_GetBorderStyle(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderStyleOption** borderStyle)](#oh_arkui_rendernodeutils_getborderstyle)         -         获取渲染节点的边框样式。                         [int32_t OH_ArkUI_RenderNodeUtils_SetBorderWidth(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderWidthOption* borderWidth)](#oh_arkui_rendernodeutils_setborderwidth)         -         为渲染节点设置边框宽度。                         [int32_t OH_ArkUI_RenderNodeUtils_GetBorderWidth(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderWidthOption** borderWidth)](#oh_arkui_rendernodeutils_getborderwidth)         -         获取渲染节点的边框宽度。                         [int32_t OH_ArkUI_RenderNodeUtils_SetBorderColor(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderColorOption* borderColor)](#oh_arkui_rendernodeutils_setbordercolor)         -         为渲染节点设置边框颜色。                         [int32_t OH_ArkUI_RenderNodeUtils_GetBorderColor(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderColorOption** borderColor)](#oh_arkui_rendernodeutils_getbordercolor)         -         获取渲染节点的边框颜色。                         [int32_t OH_ArkUI_RenderNodeUtils_SetBorderRadius(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderRadiusOption* borderRadius)](#oh_arkui_rendernodeutils_setborderradius)         -         为渲染节点设置边框角半径。                         [int32_t OH_ArkUI_RenderNodeUtils_GetBorderRadius(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderRadiusOption** borderRadius)](#oh_arkui_rendernodeutils_getborderradius)         -         获取渲染节点的边框角半径。                         [int32_t OH_ArkUI_RenderNodeUtils_SetMask(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeMaskOption* mask)](#oh_arkui_rendernodeutils_setmask)         -         使用遮罩配置为渲染节点应用遮罩。                         [int32_t OH_ArkUI_RenderNodeUtils_SetClip(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeClipOption* clip)](#oh_arkui_rendernodeutils_setclip)         -         使用裁剪配置为渲染节点应用裁剪。                         [int32_t OH_ArkUI_RenderNodeUtils_SetMarkNodeGroup(ArkUI_RenderNodeHandle node, bool markNodeGroup)](#oh_arkui_rendernodeutils_setmarknodegroup)         -         标记是否优先绘制该节点及其子节点。                         [int32_t OH_ArkUI_RenderNodeUtils_SetBounds(ArkUI_RenderNodeHandle node, int32_t x, int32_t y, int32_t width, int32_t height)](#oh_arkui_rendernodeutils_setbounds)         -         为渲染节点设置边界。                         [int32_t OH_ArkUI_RenderNodeUtils_GetBounds(ArkUI_RenderNodeHandle node, int32_t* x, int32_t* y, int32_t* width, int32_t* height)](#oh_arkui_rendernodeutils_getbounds)         -         获取渲染节点的边界。                         [int32_t OH_ArkUI_RenderNodeUtils_SetDrawRegion(ArkUI_RenderNodeHandle node, float x, float y, float w, float h)](#oh_arkui_rendernodeutils_setdrawregion)         -         为渲染节点设置绘制区域。                         [int32_t OH_ArkUI_RenderNodeUtils_AttachContentModifier(ArkUI_RenderNodeHandle node, ArkUI_RenderContentModifierHandle modifier)](#oh_arkui_rendernodeutils_attachcontentmodifier)         -         为渲染节点添加内容修改器。                         [ArkUI_RenderContentModifierHandle OH_ArkUI_RenderNodeUtils_CreateContentModifier()](#oh_arkui_rendernodeutils_createcontentmodifier)         -         创建内容修改器。                         [void OH_ArkUI_RenderNodeUtils_DisposeContentModifier(ArkUI_RenderContentModifierHandle modifier)](#oh_arkui_rendernodeutils_disposecontentmodifier)         -         释放内容修改器。                         [int32_t OH_ArkUI_RenderNodeUtils_AttachFloatProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_FloatPropertyHandle property)](#oh_arkui_rendernodeutils_attachfloatproperty)         -         为目标内容修改器附加浮点属性。                         [int32_t OH_ArkUI_RenderNodeUtils_AttachVector2Property(ArkUI_RenderContentModifierHandle modifier, ArkUI_Vector2PropertyHandle property)](#oh_arkui_rendernodeutils_attachvector2property)         -         为目标内容修改器附加二维向量属性。                         [int32_t OH_ArkUI_RenderNodeUtils_AttachColorProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_ColorPropertyHandle property)](#oh_arkui_rendernodeutils_attachcolorproperty)         -         为目标内容修改器附加颜色属性。                         [int32_t OH_ArkUI_RenderNodeUtils_AttachFloatAnimatableProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_FloatAnimatablePropertyHandle property)](#oh_arkui_rendernodeutils_attachfloatanimatableproperty)         -         为目标内容修改器附加可动画的浮点属性。                         [int32_t OH_ArkUI_RenderNodeUtils_AttachVector2AnimatableProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_Vector2AnimatablePropertyHandle property)](#oh_arkui_rendernodeutils_attachvector2animatableproperty)         -         为目标内容修改器附加可动画的二维向量属性。                         [int32_t OH_ArkUI_RenderNodeUtils_AttachColorAnimatableProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_ColorAnimatablePropertyHandle property)](#oh_arkui_rendernodeutils_attachcoloranimatableproperty)         -         为目标内容修改器附加可动画的颜色属性。                         [ArkUI_FloatPropertyHandle OH_ArkUI_RenderNodeUtils_CreateFloatProperty(float value)](#oh_arkui_rendernodeutils_createfloatproperty)         -         创建浮点属性。                         [int32_t OH_ArkUI_RenderNodeUtils_SetFloatPropertyValue(ArkUI_FloatPropertyHandle property, float value)](#oh_arkui_rendernodeutils_setfloatpropertyvalue)         -         设置浮点属性的值。                         [int32_t OH_ArkUI_RenderNodeUtils_GetFloatPropertyValue(ArkUI_FloatPropertyHandle property, float* value)](#oh_arkui_rendernodeutils_getfloatpropertyvalue)         -         获取浮点属性的值。                         [void OH_ArkUI_RenderNodeUtils_DisposeFloatProperty(ArkUI_FloatPropertyHandle property)](#oh_arkui_rendernodeutils_disposefloatproperty)         -         释放浮点属性。                         [ArkUI_Vector2PropertyHandle OH_ArkUI_RenderNodeUtils_CreateVector2Property(float x, float y)](#oh_arkui_rendernodeutils_createvector2property)         -         创建二维向量属性。                         [int32_t OH_ArkUI_RenderNodeUtils_SetVector2PropertyValue(ArkUI_Vector2PropertyHandle property, float x, float y)](#oh_arkui_rendernodeutils_setvector2propertyvalue)         -         设置二维向量属性的值。                         [int32_t OH_ArkUI_RenderNodeUtils_GetVector2PropertyValue(ArkUI_Vector2PropertyHandle property, float* x, float* y)](#oh_arkui_rendernodeutils_getvector2propertyvalue)         -         获取二维向量属性的值。                         [void OH_ArkUI_RenderNodeUtils_DisposeVector2Property(ArkUI_Vector2PropertyHandle property)](#oh_arkui_rendernodeutils_disposevector2property)         -         释放二维向量属性。                         [ArkUI_ColorPropertyHandle OH_ArkUI_RenderNodeUtils_CreateColorProperty(uint32_t value)](#oh_arkui_rendernodeutils_createcolorproperty)         -         创建颜色属性。                         [int32_t OH_ArkUI_RenderNodeUtils_SetColorPropertyValue(ArkUI_ColorPropertyHandle property, uint32_t value)](#oh_arkui_rendernodeutils_setcolorpropertyvalue)         -         设置颜色属性的值。                         [int32_t OH_ArkUI_RenderNodeUtils_GetColorPropertyValue(ArkUI_ColorPropertyHandle property, uint32_t* value)](#oh_arkui_rendernodeutils_getcolorpropertyvalue)         -         获取颜色属性的值。                         [void OH_ArkUI_RenderNodeUtils_DisposeColorProperty(ArkUI_ColorPropertyHandle property)](#oh_arkui_rendernodeutils_disposecolorproperty)         -         释放颜色属性。                         [ArkUI_FloatAnimatablePropertyHandle OH_ArkUI_RenderNodeUtils_CreateFloatAnimatableProperty(float value)](#oh_arkui_rendernodeutils_createfloatanimatableproperty)         -         创建可动画的浮点属性。                         [int32_t OH_ArkUI_RenderNodeUtils_SetFloatAnimatablePropertyValue(ArkUI_FloatAnimatablePropertyHandle property, float value)](#oh_arkui_rendernodeutils_setfloatanimatablepropertyvalue)         -         设置可动画的浮点属性的值。                         [int32_t OH_ArkUI_RenderNodeUtils_GetFloatAnimatablePropertyValue(ArkUI_FloatAnimatablePropertyHandle property, float* value)](#oh_arkui_rendernodeutils_getfloatanimatablepropertyvalue)         -         获取可动画的浮点属性的值。                         [void OH_ArkUI_RenderNodeUtils_DisposeFloatAnimatableProperty(ArkUI_FloatAnimatablePropertyHandle property)](#oh_arkui_rendernodeutils_disposefloatanimatableproperty)         -         释放可动画的浮点属性。                         [ArkUI_Vector2AnimatablePropertyHandle OH_ArkUI_RenderNodeUtils_CreateVector2AnimatableProperty(float x, float y)](#oh_arkui_rendernodeutils_createvector2animatableproperty)         -         创建可动画的二维向量属性。                         [int32_t OH_ArkUI_RenderNodeUtils_SetVector2AnimatablePropertyValue(ArkUI_Vector2AnimatablePropertyHandle property, float x, float y)](#oh_arkui_rendernodeutils_setvector2animatablepropertyvalue)         -         设置可动画的二维向量属性的值。                         [int32_t OH_ArkUI_RenderNodeUtils_GetVector2AnimatablePropertyValue(ArkUI_Vector2AnimatablePropertyHandle property, float* x, float* y)](#oh_arkui_rendernodeutils_getvector2animatablepropertyvalue)         -         获取可动画的二维向量属性的值。                         [void OH_ArkUI_RenderNodeUtils_DisposeVector2AnimatableProperty(ArkUI_Vector2AnimatablePropertyHandle property)](#oh_arkui_rendernodeutils_disposevector2animatableproperty)         -         释放可动画的二维向量属性。                         [ArkUI_ColorAnimatablePropertyHandle OH_ArkUI_RenderNodeUtils_CreateColorAnimatableProperty(uint32_t value)](#oh_arkui_rendernodeutils_createcoloranimatableproperty)         -         创建可动画的颜色属性。                         [int32_t OH_ArkUI_RenderNodeUtils_SetColorAnimatablePropertyValue(ArkUI_ColorAnimatablePropertyHandle property, uint32_t value)](#oh_arkui_rendernodeutils_setcoloranimatablepropertyvalue)         -         设置可动画的颜色属性的值。                         [int32_t OH_ArkUI_RenderNodeUtils_GetColorAnimatablePropertyValue(ArkUI_ColorAnimatablePropertyHandle property, uint32_t* value)](#oh_arkui_rendernodeutils_getcoloranimatablepropertyvalue)         -         获取可动画的颜色属性的值。                         [void OH_ArkUI_RenderNodeUtils_DisposeColorAnimatableProperty(ArkUI_ColorAnimatablePropertyHandle property)](#oh_arkui_rendernodeutils_disposecoloranimatableproperty)         -         释放可动画的颜色属性。                         [int32_t OH_ArkUI_RenderNodeUtils_SetContentModifierOnDraw(ArkUI_RenderContentModifierHandle modifier, void* userData, void (callback)(ArkUI_DrawContext* context, void userData))](#oh_arkui_rendernodeutils_setcontentmodifierondraw)         -         设置内容修改器的onDraw函数。                         [ArkUI_RectShapeOption* OH_ArkUI_RenderNodeUtils_CreateRectShapeOption()](#oh_arkui_rendernodeutils_createrectshapeoption)         -         创建矩形形状。                         [void OH_ArkUI_RenderNodeUtils_DisposeRectShapeOption(ArkUI_RectShapeOption* option)](#oh_arkui_rendernodeutils_disposerectshapeoption)         -         释放矩形形状。                         [void OH_ArkUI_RenderNodeUtils_SetRectShapeOptionEdgeValue(ArkUI_RectShapeOption* option, float edgeValue, ArkUI_EdgeDirection direction)](#oh_arkui_rendernodeutils_setrectshapeoptionedgevalue)         -         设置矩形形状的边缘值。                         [ArkUI_NodeBorderStyleOption* OH_ArkUI_RenderNodeUtils_CreateNodeBorderStyleOption()](#oh_arkui_rendernodeutils_createnodeborderstyleoption)         -         创建节点边框样式。                         [void OH_ArkUI_RenderNodeUtils_DisposeNodeBorderStyleOption(ArkUI_NodeBorderStyleOption* option)](#oh_arkui_rendernodeutils_disposenodeborderstyleoption)         -         释放节点边框样式。                         [void OH_ArkUI_RenderNodeUtils_SetNodeBorderStyleOptionEdgeStyle(ArkUI_NodeBorderStyleOption* option, ArkUI_BorderStyle edgeStyle, ArkUI_EdgeDirection direction)](#oh_arkui_rendernodeutils_setnodeborderstyleoptionedgestyle)         -         设置节点边框样式的边缘值。                         [ArkUI_NodeBorderWidthOption* OH_ArkUI_RenderNodeUtils_CreateNodeBorderWidthOption()](#oh_arkui_rendernodeutils_createnodeborderwidthoption)         -         创建节点边框宽度。                         [void OH_ArkUI_RenderNodeUtils_DisposeNodeBorderWidthOption(ArkUI_NodeBorderWidthOption* option)](#oh_arkui_rendernodeutils_disposenodeborderwidthoption)         -         释放节点边框宽度。                         [void OH_ArkUI_RenderNodeUtils_SetNodeBorderWidthOptionEdgeWidth(ArkUI_NodeBorderWidthOption* option, float edgeWidth, ArkUI_EdgeDirection direction)](#oh_arkui_rendernodeutils_setnodeborderwidthoptionedgewidth)         -         设置节点边框宽度的边缘值。                         [ArkUI_NodeBorderColorOption* OH_ArkUI_RenderNodeUtils_CreateNodeBorderColorOption()](#oh_arkui_rendernodeutils_createnodebordercoloroption)         -         创建节点边框颜色。                         [void OH_ArkUI_RenderNodeUtils_DisposeNodeBorderColorOption(ArkUI_NodeBorderColorOption* option)](#oh_arkui_rendernodeutils_disposenodebordercoloroption)         -         释放节点边框颜色。                         [void OH_ArkUI_RenderNodeUtils_SetNodeBorderColorOptionEdgeColor(ArkUI_NodeBorderColorOption* option, uint32_t edgeColor, ArkUI_EdgeDirection direction)](#oh_arkui_rendernodeutils_setnodebordercoloroptionedgecolor)         -         设置节点边框颜色的边缘值。                         [ArkUI_NodeBorderRadiusOption* OH_ArkUI_RenderNodeUtils_CreateNodeBorderRadiusOption()](#oh_arkui_rendernodeutils_createnodeborderradiusoption)         -         创建节点边框半径。                         [void OH_ArkUI_RenderNodeUtils_DisposeNodeBorderRadiusOption(ArkUI_NodeBorderRadiusOption* option)](#oh_arkui_rendernodeutils_disposenodeborderradiusoption)         -         释放节点边框半径。                         [void OH_ArkUI_RenderNodeUtils_SetNodeBorderRadiusOptionCornerRadius(ArkUI_NodeBorderRadiusOption* option, uint32_t cornerRadius, ArkUI_CornerDirection direction)](#oh_arkui_rendernodeutils_setnodeborderradiusoptioncornerradius)         -         设置节点边框半径的边缘值。                         [ArkUI_CircleShapeOption* OH_ArkUI_RenderNodeUtils_CreateCircleShapeOption()](#oh_arkui_rendernodeutils_createcircleshapeoption)         -         创建圆形形状。                         [void OH_ArkUI_RenderNodeUtils_DisposeCircleShapeOption(ArkUI_CircleShapeOption* option)](#oh_arkui_rendernodeutils_disposecircleshapeoption)         -         释放圆形形状。                         [void OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionCenterX(ArkUI_CircleShapeOption* option, float centerX)](#oh_arkui_rendernodeutils_setcircleshapeoptioncenterx)         -         设置圆形形状的圆心x轴坐标值。                         [void OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionCenterY(ArkUI_CircleShapeOption* option, float centerY)](#oh_arkui_rendernodeutils_setcircleshapeoptioncentery)         -         设置圆形形状的圆心y轴坐标值。                         [void OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionRadius(ArkUI_CircleShapeOption* option, float radius)](#oh_arkui_rendernodeutils_setcircleshapeoptionradius)         -         设置圆形形状的半径值。                         [ArkUI_RoundRectShapeOption* OH_ArkUI_RenderNodeUtils_CreateRoundRectShapeOption()](#oh_arkui_rendernodeutils_createroundrectshapeoption)         -         创建圆角矩形形状。                         [void OH_ArkUI_RenderNodeUtils_DisposeRoundRectShapeOption(ArkUI_RoundRectShapeOption* option)](#oh_arkui_rendernodeutils_disposeroundrectshapeoption)         -         释放圆角矩形形状。                         [void OH_ArkUI_RenderNodeUtils_SetRoundRectShapeOptionEdgeValue(ArkUI_RoundRectShapeOption* option, float edgeValue, ArkUI_EdgeDirection direction)](#oh_arkui_rendernodeutils_setroundrectshapeoptionedgevalue)         -         设置圆角矩形形状的边缘值。                         [void OH_ArkUI_RenderNodeUtils_SetRoundRectShapeOptionCornerXY(ArkUI_RoundRectShapeOption* option, float x, float y, ArkUI_CornerDirection direction)](#oh_arkui_rendernodeutils_setroundrectshapeoptioncornerxy)         -         设置目标角的坐标值。                         [ArkUI_CommandPathOption* OH_ArkUI_RenderNodeUtils_CreateCommandPathOption()](#oh_arkui_rendernodeutils_createcommandpathoption)         -         创建自定义绘制路径。                         [void OH_ArkUI_RenderNodeUtils_DisposeCommandPathOption(ArkUI_CommandPathOption* option)](#oh_arkui_rendernodeutils_disposecommandpathoption)         -         释放自定义绘制路径。                         [void OH_ArkUI_RenderNodeUtils_SetCommandPathOptionCommands(ArkUI_CommandPathOption* option, char* commands)](#oh_arkui_rendernodeutils_setcommandpathoptioncommands)         -         设置自定义绘制路径的命令值。                         [ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromRectShape(ArkUI_RectShapeOption* shape)](#oh_arkui_rendernodeutils_createrendernodemaskoptionfromrectshape)         -         从矩形形状创建遮罩。                         [ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromRoundRectShape(ArkUI_RoundRectShapeOption* shape)](#oh_arkui_rendernodeutils_createrendernodemaskoptionfromroundrectshape)         -         从圆角矩形形状创建遮罩。                         [ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromCircleShape(ArkUI_CircleShapeOption* shape)](#oh_arkui_rendernodeutils_createrendernodemaskoptionfromcircleshape)         -         从圆形形状创建遮罩。                         [ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromOvalShape(ArkUI_RectShapeOption* shape)](#oh_arkui_rendernodeutils_createrendernodemaskoptionfromovalshape)         -         从椭圆形形状创建遮罩。                         [ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromCommandPath(ArkUI_CommandPathOption* path)](#oh_arkui_rendernodeutils_createrendernodemaskoptionfromcommandpath)         -         从自定义绘制路径创建遮罩。                         [void OH_ArkUI_RenderNodeUtils_DisposeRenderNodeMaskOption(ArkUI_RenderNodeMaskOption* option)](#oh_arkui_rendernodeutils_disposerendernodemaskoption)         -         释放渲染节点遮罩。                         [void OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionFillColor(ArkUI_RenderNodeMaskOption* mask, uint32_t fillColor)](#oh_arkui_rendernodeutils_setrendernodemaskoptionfillcolor)         -         设置渲染节点遮罩的填充颜色。                         [void OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionStrokeColor(ArkUI_RenderNodeMaskOption* mask, uint32_t strokeColor)](#oh_arkui_rendernodeutils_setrendernodemaskoptionstrokecolor)         -         设置渲染节点遮罩的描边颜色。                         [void OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionStrokeWidth(ArkUI_RenderNodeMaskOption* mask, float strokeWidth)](#oh_arkui_rendernodeutils_setrendernodemaskoptionstrokewidth)         -         设置渲染节点遮罩的描边宽度。                         [ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromRectShape(ArkUI_RectShapeOption* shape)](#oh_arkui_rendernodeutils_createrendernodeclipoptionfromrectshape)         -         从矩形形状创建裁剪。                         [ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromRoundRectShape(ArkUI_RoundRectShapeOption* shape)](#oh_arkui_rendernodeutils_createrendernodeclipoptionfromroundrectshape)         -         从圆角矩形形状创建裁剪。                         [ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromCircleShape(ArkUI_CircleShapeOption* shape)](#oh_arkui_rendernodeutils_createrendernodeclipoptionfromcircleshape)         -         从圆形形状创建裁剪。                         [ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromOvalShape(ArkUI_RectShapeOption* shape)](#oh_arkui_rendernodeutils_createrendernodeclipoptionfromovalshape)         -         从椭圆形形状创建裁剪。                         [ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromCommandPath(ArkUI_CommandPathOption* path)](#oh_arkui_rendernodeutils_createrendernodeclipoptionfromcommandpath)         -         从自定义绘制路径创建裁剪。                         [void OH_ArkUI_RenderNodeUtils_DisposeRenderNodeClipOption(ArkUI_RenderNodeClipOption* option)](#oh_arkui_rendernodeutils_disposerendernodeclipoption)         -         释放渲染节点裁剪。                                            #### 函数说明

                  #### [h2]OH_ArkUI_RenderNodeUtils_AddRenderNode()

     int32_t OH_ArkUI_RenderNodeUtils_AddRenderNode(ArkUI_NodeHandle node, ArkUI_RenderNodeHandle child)     **描述：**

     向父自定义节点添加子渲染节点。

     父节点仅支持[ArkUI_NodeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodetype)中ARKUI_NODE_CUSTOM类型的节点，每个自定义节点只能挂载一个ArkUI_RenderNodeHandle，customNode无法挂载其他ArkUI_NodeHandle。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h) node         目标父节点。                         [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) child         待添加的子渲染节点。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_NOT_CUSTOM_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点非自定义节点。

          [ARKUI_ERROR_CODE_CHILD_EXISTED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点已存在子节点。

          [ARKUI_ERROR_CODE_RENDER_PARENT_EXISTED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标渲染节点存在父节点。

          [ARKUI_ERROR_CODE_RENDER_HAS_INVALID_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 当前渲染节点从FrameNode中获取且该FrameNode已被取消接纳为附属节点或销毁。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_RemoveRenderNode()

     int32_t OH_ArkUI_RenderNodeUtils_RemoveRenderNode(ArkUI_NodeHandle node, ArkUI_RenderNodeHandle child)     **描述：**

     从父节点移除指定的子渲染节点。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h) node         目标父节点。                         [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) child         移除的目标子渲染节点。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_NOT_CUSTOM_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点非自定义节点。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_ClearRenderNodeChildren()

     int32_t OH_ArkUI_RenderNodeUtils_ClearRenderNodeChildren(ArkUI_NodeHandle node)     **描述：**

     清除父节点内的子渲染节点。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h) node         目标父节点。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_NOT_CUSTOM_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点非自定义节点。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_Invalidate()

     int32_t OH_ArkUI_RenderNodeUtils_Invalidate(ArkUI_NodeHandle node)     **描述：**

     标记目标节点，触发其生命周期和子节点的重新渲染。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h) node         目标节点。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateNode()

     ArkUI_RenderNodeHandle OH_ArkUI_RenderNodeUtils_CreateNode()     **描述：**

     创建渲染节点。

     **起始版本：** 20

     **返回：**

                                   类型         说明                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle)         目标渲染节点。                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeNode()

     int32_t OH_ArkUI_RenderNodeUtils_DisposeNode(ArkUI_RenderNodeHandle node)     **描述：**

     销毁渲染节点。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_AddChild()

     int32_t OH_ArkUI_RenderNodeUtils_AddChild(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle child)     **描述：**

     向目标父渲染节点上添加子节点。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标父渲染节点。                         [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) child         目标添加子渲染节点。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

          [ARKUI_ERROR_CODE_RENDER_HAS_INVALID_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 当前渲染节点从FrameNode中获取且该FrameNode已被取消接纳为附属节点或销毁。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_InsertChildAfter()

     int32_t OH_ArkUI_RenderNodeUtils_InsertChildAfter(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle child, ArkUI_RenderNodeHandle sibling)     **描述：**

     向父节点的目标子节点后添加子节点。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标父渲染节点。                         [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) child         待添加的子渲染节点。                         [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) sibling         目标子节点，用于确定插入位置的参考兄弟渲染节点。若该节点不在node的当前子节点列表中，则将child追加到末尾。                         **返回：**                                                                      类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

          [ARKUI_ERROR_CODE_RENDER_HAS_INVALID_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 当前渲染节点从FrameNode中获取且该FrameNode已被取消接纳为附属节点或销毁。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_RemoveChild()

     int32_t OH_ArkUI_RenderNodeUtils_RemoveChild(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle child)     **描述：**

     从指定渲染节点中移除子节点。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标父渲染节点。                         [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) child         目标被移除子渲染节点。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_ClearChildren()

     int32_t OH_ArkUI_RenderNodeUtils_ClearChildren(ArkUI_RenderNodeHandle node)     **描述：**

     清空指定渲染节点的所有子节点。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetChild()

     int32_t OH_ArkUI_RenderNodeUtils_GetChild(ArkUI_RenderNodeHandle node, int32_t index, ArkUI_RenderNodeHandle* child)     **描述：**

     获取指定索引位置的子节点。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标父渲染节点。                         int32_t index         子节点的从零开始的索引。                         [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle)* child         用于接收子节点的渲染节点指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_CHILD_NOT_EXIST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 未找到对应的渲染子节点。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetFirstChild()

     int32_t OH_ArkUI_RenderNodeUtils_GetFirstChild(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle* child)     **描述：**

     获取指定渲染节点的第一个子节点。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle)* child         用于接收第一个子节点的渲染节点指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_CHILD_NOT_EXIST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 未找到对应的渲染子节点。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetNextSibling()

     int32_t OH_ArkUI_RenderNodeUtils_GetNextSibling(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle* sibling)     **描述：**

     获取指定节点的下一个兄弟节点。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         参考节点。                         [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle)* sibling         用于接收下一个兄弟节点的渲染节点指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_CHILD_NOT_EXIST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 未找到对应的渲染子节点。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetPreviousSibling()

     int32_t OH_ArkUI_RenderNodeUtils_GetPreviousSibling(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle* sibling)     **描述：**

     获取指定节点的上一个兄弟节点。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         参考节点。                         [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle)* sibling         用于接收上一个兄弟节点的渲染节点指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_CHILD_NOT_EXIST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 未找到对应的渲染子节点。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetChildren()

     int32_t OH_ArkUI_RenderNodeUtils_GetChildren(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle** children, int32_t* count)     **描述：**

     获取父渲染节点的所有子渲染节点，调用者负责释放返回的子节点数组。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标父渲染节点。                         [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle)** children         用于存储所有子渲染节点的指针数组。                         int32_t* count         用于存储获取到的子节点数量的指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetChildrenCount()

     int32_t OH_ArkUI_RenderNodeUtils_GetChildrenCount(ArkUI_RenderNodeHandle node, int32_t* count)     **描述：**

     获取指定渲染节点的子渲染节点数量。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标父渲染节点。                         int32_t* count         用于存储子节点数量的指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetBackgroundColor()

     int32_t OH_ArkUI_RenderNodeUtils_SetBackgroundColor(ArkUI_RenderNodeHandle node, uint32_t color)     **描述：**

     为渲染节点设置背景颜色。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         uint32_t color                   ARGB 颜色值（32 位无符号整数）。

          默认值：0x00000000。

          **颜色字节布局说明：**

          - 位24-31：Alpha通道（0x00完全透明，0xFF完全不透明）。

          - 位16-23：红色通道。

          - 位8-15：绿色通道。

          - 位0-7：蓝色通道。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetBackgroundColor()

     int32_t OH_ArkUI_RenderNodeUtils_GetBackgroundColor(ArkUI_RenderNodeHandle node, uint32_t* color)     **描述：**

     获取渲染节点的背景颜色。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         uint32_t* color                   用于存储获取到的 RGBA 颜色值的整数指针。

          默认值：0x00000000。

          **颜色字节布局说明：**

          - 位24-31：Alpha通道（0x00完全透明，0xFF完全不透明）。

          - 位16-23：红色通道。

          - 位8-15：绿色通道。

          - 位0-7：蓝色通道。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetClipToFrame()

     int32_t OH_ArkUI_RenderNodeUtils_SetClipToFrame(ArkUI_RenderNodeHandle node, int32_t clipToFrame)     **描述：**

     设置是否对当前渲染节点裁剪。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         int32_t clipToFrame                   整数（1 = 裁剪到框架，0 = 不裁剪）。

          默认值：0。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 参数值超出范围。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetClipToFrame()

     int32_t OH_ArkUI_RenderNodeUtils_GetClipToFrame(ArkUI_RenderNodeHandle node, int32_t* clipToFrame)     **描述：**

     获取是否对当前渲染节点裁剪。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         int32_t* clipToFrame                   用于接收裁剪状态（1 或 0）的整数指针。

          默认值：0。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetClipToBounds()

     int32_t OH_ArkUI_RenderNodeUtils_SetClipToBounds(ArkUI_RenderNodeHandle node, int32_t clipToBounds)     **描述：**

     设置是否对当前渲染节点边界裁剪。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         int32_t clipToBounds                   裁剪标志（1：裁剪到边界，0：不裁剪）。

          默认值：0。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 参数值超出范围。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetClipToBounds()

     int32_t OH_ArkUI_RenderNodeUtils_GetClipToBounds(ArkUI_RenderNodeHandle node, int32_t* clipToBounds)     **描述：**

     获取是否对当前渲染节点边界裁剪。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         int32_t* clipToBounds                   整数指针（1 = 根据边界裁剪，0 = 不裁剪）。

          默认值：0。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetOpacity()

     int32_t OH_ArkUI_RenderNodeUtils_SetOpacity(ArkUI_RenderNodeHandle node, float opacity)     **描述：**

     为渲染节点设置不透明度值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float opacity                   不透明度值（0.0-1.0）。

          默认值：1。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 参数值超出范围。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetOpacity()

     int32_t OH_ArkUI_RenderNodeUtils_GetOpacity(ArkUI_RenderNodeHandle node, float* opacity)     **描述：**

     获取渲染节点的不透明度值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float* opacity                   用于接收不透明度值（0.0-1.0）的指针。

          默认值：1。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetSize()

     int32_t OH_ArkUI_RenderNodeUtils_SetSize(ArkUI_RenderNodeHandle node, int32_t width, int32_t height)     **描述：**

     为渲染节点设置尺寸。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         int32_t width                   宽度值（以像素为单位）。

          默认值：0，单位：px。取值大于等于0，传入负值时返回[ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode)。

                         int32_t height                   高度值（以像素为单位）。

          默认值：0，单位：px。取值大于等于0，传入负值时返回[ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode)。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 参数值超出范围。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetSize()

     int32_t OH_ArkUI_RenderNodeUtils_GetSize(ArkUI_RenderNodeHandle node, int32_t* width, int32_t* height)     **描述：**

     获取渲染节点的尺寸。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         int32_t* width                   用于接收宽度值（以像素为单位）的指针。

          默认值：0，单位：px。

                         int32_t* height                   用于接收高度值（以像素为单位）的指针。

          默认值：0，单位：px。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetPosition()

     int32_t OH_ArkUI_RenderNodeUtils_SetPosition(ArkUI_RenderNodeHandle node, int32_t x, int32_t y)     **描述：**

     为渲染节点设置位置坐标。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         int32_t x                   X坐标值（以像素为单位）。

          默认值：0，单位：px。

                         int32_t y                   Y坐标值（以像素为单位）。

          默认值：0，单位：px。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetPosition()

     int32_t OH_ArkUI_RenderNodeUtils_GetPosition(ArkUI_RenderNodeHandle node, int32_t* x, int32_t* y)     **描述：**

     获取渲染节点的位置坐标。该坐标是渲染节点布局后相对父节点的位置偏移，单位为px。该坐标是父节点对该节点进行布局之后的结果，因此布局之后生效的offset属性和不参与布局的position属性不影响该坐标。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         int32_t* x                   用于接收X坐标值（以像素为单位）的指针。

          默认值：0，单位：px。

                         int32_t* y                   用于接收Y坐标值（以像素为单位）的指针。

          默认值：0，单位：px。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetPivot()

     int32_t OH_ArkUI_RenderNodeUtils_SetPivot(ArkUI_RenderNodeHandle node, float x, float y)     **描述：**

     为渲染节点的变换设置中心点。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float x                   中心点的X坐标（标准取值范围：0.0-1.0）。

          默认值：0.5。

                         float y                   中心点的Y坐标（标准取值范围：0.0-1.0）。

          默认值：0.5。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetPivot()

     int32_t OH_ArkUI_RenderNodeUtils_GetPivot(ArkUI_RenderNodeHandle node, float* x, float* y)     **描述：**

     获取渲染节点的中心点坐标。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float* x                   用于接收中心点X坐标的指针。

          默认值：0.5。

                         float* y                   用于接收中心点Y坐标的指针。

          默认值：0.5。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetScale()

     int32_t OH_ArkUI_RenderNodeUtils_SetScale(ArkUI_RenderNodeHandle node, float x, float y)     **描述：**

     为渲染节点设置缩放因子。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float x                   水平缩放因子。

          默认值：1。

                         float y                   垂直缩放因子。

          默认值：1。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetScale()

     int32_t OH_ArkUI_RenderNodeUtils_GetScale(ArkUI_RenderNodeHandle node, float* x, float* y)     **描述：**

     获取渲染节点的缩放因子。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float* x                   用于接收水平缩放因子的指针。

          默认值：1。

                         float* y                   用于接收垂直缩放因子的指针。

          默认值：1。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetTranslation()

     int32_t OH_ArkUI_RenderNodeUtils_SetTranslation(ArkUI_RenderNodeHandle node, float x, float y)     **描述：**

     为渲染节点设置平移偏移量。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float x                   水平平移量（以像素为单位）。

          默认值：0。

                         float y                   垂直平移量（以像素为单位）。

          默认值：0。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetTranslation()

     int32_t OH_ArkUI_RenderNodeUtils_GetTranslation(ArkUI_RenderNodeHandle node, float* x, float* y)     **描述：**

     获取渲染节点的平移偏移量。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float* x                   用于接收水平平移量的指针。

          默认值：0。

                         float* y                   用于接收垂直平移量的指针。

          默认值：0。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetRotation()

     int32_t OH_ArkUI_RenderNodeUtils_SetRotation(ArkUI_RenderNodeHandle node, float x, float y, float z)     **描述：**

     为渲染节点设置旋转角度。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float x                   绕X轴的旋转角度（以度为单位）。

          默认值：0。

                         float y                   绕Y轴的旋转角度（以度为单位）。

          默认值：0。

                         float z                   绕Z轴的旋转角度（以度为单位）。

          默认值：0。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetRotation()

     int32_t OH_ArkUI_RenderNodeUtils_GetRotation(ArkUI_RenderNodeHandle node, float* x, float* y, float* z)     **描述：**

     获取渲染节点的旋转角度。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float* x                   用于接收绕X轴旋转角度（以度为单位）的指针。

          默认值：0。

                         float* y                   用于接收绕Y轴旋转角度（以度为单位）的指针。

          默认值：0。

                         float* z                   用于接收绕Z轴旋转角度（以度为单位）的指针。

          默认值：0。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetTransform()

     int32_t OH_ArkUI_RenderNodeUtils_SetTransform(ArkUI_RenderNodeHandle node, float* matrix)     **描述：**

     为渲染节点设置变换矩阵。

     **起始版本：** 20

     **��数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float* matrix         4x4 变换矩阵的浮点数数组（16 个连续值）。                               变换矩阵应作为 16 个连续的浮点值以行优先顺序提供：

     [m00, m01, m02, m03,

     m10, m11, m12, m13,

     m20, m21, m22, m23,

     m30, m31, m32, m33]

     其中矩阵表示为：

     | m00 m01 m02 m03 |

     | m10 m11 m12 m13 |

     | m20 m21 m22 m23 |

     | m30 m31 m32 m33 |

     矩阵组件：

                                   矩阵单元         描述                                       m00         x轴的缩放值。单位矩阵的默认值为1。                         m01         第二个值，受 x、y、z 轴的旋转或倾斜影响。                         m02         第三个值，受 x、y、z 轴的旋转影响。                         m03         第四个值，受透视投影影响。                         m10         第五个值，受 x、y、z 轴的旋转或倾斜影响。                         m11         y轴的缩放值。单位矩阵的默认值为1。                         m12         第七个值，受 x、y、z 轴的旋转影响。                         m13         第八个值，受透视投影影响。                         m20         第九个值，受 x、y、z 轴的旋转影响。                         m21         第十个值，受 x、y、z 轴的旋转影响。                         m22         z轴的缩放值。单位矩阵的默认值为1。                         m23         第 12 个值，受透视投影影响。                         m30         x轴的平移值（以 px 为单位）。单位矩阵的默认值为0。                         m31         y轴的平移值（以 px 为单位）。单位矩阵的默认值为0。                         m32         z轴的平移值（以 px 为单位）。单位矩阵的默认值为0。                         m33         在齐次坐标中有效，呈现透视投影效果。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 参数超出范围。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetShadowColor()

     int32_t OH_ArkUI_RenderNodeUtils_SetShadowColor(ArkUI_RenderNodeHandle node, uint32_t color)     **描述：**

     为渲染节点设置阴影颜色。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         uint32_t color                   ARGB 颜色值（32位无符号整数）。

          默认值：0x00000000。

          **颜色字节布局说明：**

          - 位24-31：Alpha通道（0x00完全透明，0xFF完全不透明）。

          - 位16-23：红色通道。

          - 位8-15：绿色通道。

          - 位0-7：蓝色通道。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetShadowColor()

     int32_t OH_ArkUI_RenderNodeUtils_GetShadowColor(ArkUI_RenderNodeHandle node, uint32_t* color)     **描述：**

     获取渲染节点的阴影颜色。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         uint32_t* color                   用于存储获取到的RGBA颜色值的整数指针。

          默认值：0xFF000000。

          **颜色字节布局说明：**

          - 位24-31：Alpha通道（0x00完全透明，0xFF完全不透明）。

          - 位16-23：红色通道。

          - 位8-15：绿色通道。

          - 位0-7：蓝色通道。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetShadowOffset()

     int32_t OH_ArkUI_RenderNodeUtils_SetShadowOffset(ArkUI_RenderNodeHandle node, int32_t x, int32_t y)     **描述：**

     为渲染节点设置阴影偏移量。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         int32_t x                   水平偏移值（以像素为单位）。

          默认值：0。

                         int32_t y                   垂直偏移值（以像素为单位）。

          默认值：0。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetShadowOffset()

     int32_t OH_ArkUI_RenderNodeUtils_GetShadowOffset(ArkUI_RenderNodeHandle node, int32_t* x, int32_t* y)     **描述：**

     获取渲染节点的阴影偏移量。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         int32_t* x                   用于接收水平偏移值的指针。

          默认值：0，单位：px。

                         int32_t* y                   用于接收垂直偏移值的指针。

          默认值：0，单位：px。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetShadowAlpha()

     int32_t OH_ArkUI_RenderNodeUtils_SetShadowAlpha(ArkUI_RenderNodeHandle node, float alpha)     **描述：**

     为渲染节点设置阴影透明度。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float alpha                   阴影 Alpha 值（0.0-1.0）。

          默认值：0。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 参数超出范围。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetShadowAlpha()

     int32_t OH_ArkUI_RenderNodeUtils_GetShadowAlpha(ArkUI_RenderNodeHandle node, float* alpha)     **描述：**

     获取渲染节点的阴影透明度。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float* alpha                   用于接收阴影 Alpha 值的指针。

          默认值：1。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetShadowElevation()

     int32_t OH_ArkUI_RenderNodeUtils_SetShadowElevation(ArkUI_RenderNodeHandle node, float elevation)     **描述：**

     为渲染节点设置阴影高度。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float elevation                   高度值。

          默认值：0。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 参数超出范围。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetShadowElevation()

     int32_t OH_ArkUI_RenderNodeUtils_GetShadowElevation(ArkUI_RenderNodeHandle node, float* elevation)     **描述：**

     获取渲染节点的阴影高度。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float* elevation                   用于接收高度值的指针。

          默认值：0。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetShadowRadius()

     int32_t OH_ArkUI_RenderNodeUtils_SetShadowRadius(ArkUI_RenderNodeHandle node, float radius)     **描述：**

     为渲染节点设置阴影半径。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float radius                   半径值。

          默认值：0。取值大于等于0，传入负值时返回[ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode)。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 参数超出范围。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetShadowRadius()

     int32_t OH_ArkUI_RenderNodeUtils_GetShadowRadius(ArkUI_RenderNodeHandle node, float* radius)     **描述：**

     获取渲染节点的阴影半径。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float* radius                   用于接收半径值的指针。

          默认值：0。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetBorderStyle()

     int32_t OH_ArkUI_RenderNodeUtils_SetBorderStyle(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderStyleOption* borderStyle)     **描述：**

     为渲染节点设置边框样式。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         [ArkUI_NodeBorderStyleOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodeborderstyleoption)* borderStyle                   边框样式的指针。

          结构体指针内默认值：[ARKUI_BORDER_STYLE_SOLID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_borderstyle)。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetBorderStyle()

     int32_t OH_ArkUI_RenderNodeUtils_GetBorderStyle(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderStyleOption** borderStyle)     **描述：**

     获取渲染节点的边框样式。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         [ArkUI_NodeBorderStyleOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodeborderstyleoption)** borderStyle                   用于接收边框样式的指针。

          结构体指针内默认值：[ARKUI_BORDER_STYLE_SOLID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_borderstyle)。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetBorderWidth()

     int32_t OH_ArkUI_RenderNodeUtils_SetBorderWidth(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderWidthOption* borderWidth)     **描述：**

     为渲染节点设置边框宽度，边框宽度需小于节点尺寸。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         [ArkUI_NodeBorderWidthOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodeborderwidthoption)* borderWidth                   边框宽度的指针。

          结构体指针内默认值：0。单位：px。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetBorderWidth()

     int32_t OH_ArkUI_RenderNodeUtils_GetBorderWidth(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderWidthOption** borderWidth)     **描述：**

     获取渲染节点的边框宽度。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         [ArkUI_NodeBorderWidthOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodeborderwidthoption)** borderWidth                   用于接收边框宽度的指针。

          结构体指针内默认值：0。单位：px。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetBorderColor()

     int32_t OH_ArkUI_RenderNodeUtils_SetBorderColor(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderColorOption* borderColor)     **描述：**

     为渲染节点设置边框颜色。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         [ArkUI_NodeBorderColorOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodebordercoloroption)* borderColor                   边框颜色的指针。

          结构体指针内默认值：0x00000000。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetBorderColor()

     int32_t OH_ArkUI_RenderNodeUtils_GetBorderColor(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderColorOption** borderColor)     **描述：**

     获取渲染节点的边框颜色。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         [ArkUI_NodeBorderColorOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodebordercoloroption)** borderColor                   用于接收边框颜色的指针。

          结构体指针内默认值：0x00000000。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetBorderRadius()

     int32_t OH_ArkUI_RenderNodeUtils_SetBorderRadius(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderRadiusOption* borderRadius)     **描述：**

     为渲染节点设置边框角半径。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         [ArkUI_NodeBorderRadiusOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pi-arkui-nativemodule-arkui-nodeborderradiusoption)* borderRadius                   边框半径的指针。

          结构体指针内默认值：0。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetBorderRadius()

     int32_t OH_ArkUI_RenderNodeUtils_GetBorderRadius(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderRadiusOption** borderRadius)     **描述：**

     获取渲染节点的边框角半径。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         [ArkUI_NodeBorderRadiusOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pi-arkui-nativemodule-arkui-nodeborderradiusoption)** borderRadius                   用于接收边框半径的指针。

          结构体指针内默认值：0。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetMask()

     int32_t OH_ArkUI_RenderNodeUtils_SetMask(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeMaskOption* mask)     **描述：**

     使用遮罩配置为渲染节点应用遮罩。

     遮罩创建方式如下：

     
      - 给遮罩图层增加亮度和线性颜色滤镜。
      - 在该滤镜下绘制遮罩图形。
      - 将原节点图像作为源颜色，遮罩图形为目标颜色，通过[BlendMode.SRC_IN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-graphics-drawing-e#blendmode)方式混合成Mask图像。
     
     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         [ArkUI_RenderNodeMaskOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodemaskoption)* mask         遮罩配置的指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetClip()

     int32_t OH_ArkUI_RenderNodeUtils_SetClip(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeClipOption* clip)     **描述：**

     使用裁剪配置为渲染节点应用裁剪。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         [ArkUI_RenderNodeClipOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodeclipoption)* clip         裁剪配置的指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetMarkNodeGroup()

     int32_t OH_ArkUI_RenderNodeUtils_SetMarkNodeGroup(ArkUI_RenderNodeHandle node, bool markNodeGroup)     **描述：**

     标记是否优先绘制该节点及其子节点。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         bool markNodeGroup                   布尔值，是否优先绘制该节点及其子节点。

          true：优先绘制节点及其子节点；false：不优先绘制节点及其子节点。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetBounds()

     int32_t OH_ArkUI_RenderNodeUtils_SetBounds(ArkUI_RenderNodeHandle node, int32_t x, int32_t y, int32_t width, int32_t height)     **描述：**

     为渲染节点设置边界。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         int32_t x                   边界左上角的X坐标（以像素为单位）。

          默认值：0。

                         int32_t y                   边界左上角的Y坐标（以像素为单位）。

          默认值：0。

                         int32_t width                   边界的宽度（以像素为单位）。

          默认值：0。取值大于等于0，传入负值时返回[ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode)。

                         int32_t height                   边界的高度（以像素为单位）。

          默认值：0。取值大于等于0，传入负值时返回[ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode)。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 参数超出范围。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetBounds()

     int32_t OH_ArkUI_RenderNodeUtils_GetBounds(ArkUI_RenderNodeHandle node, int32_t* x, int32_t* y, int32_t* width, int32_t* height)     **描述：**

     获取渲染节点的边界。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         int32_t* x                   用于接收边界左上角X坐标（以像素为单位）的指针。

          默认值：0。

                         int32_t* y                   用于接收边界左上角Y坐标（以像素为单位）的指针。

          默认值：0。

                         int32_t* width                   用于接收边界宽度（以像素为单位）的指针。

          默认值：0。

                         int32_t* height                   用于接收边界高度（以像素为单位）的指针。

          默认值：0。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetDrawRegion()

     int32_t OH_ArkUI_RenderNodeUtils_SetDrawRegion(ArkUI_RenderNodeHandle node, float x, float y, float w, float h)     **描述：**

     为渲染节点设置绘制区域，该绘制区域主要用于超出边界导致的绘制问题，建议根据实际绘制范围设置大小。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         float x         边界左上角的X坐标（以像素为单位）。                         float y         边界左上角的Y坐标（以像素为单位）。                         float w         边界的宽度（以像素为单位）。                         float h         边界的高度（以像素为单位）。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_AttachContentModifier()

     int32_t OH_ArkUI_RenderNodeUtils_AttachContentModifier(ArkUI_RenderNodeHandle node, ArkUI_RenderContentModifierHandle modifier)     **描述：**

     为渲染节点添加内容修改器。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle) node         目标渲染节点。                         [ArkUI_RenderContentModifierHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/kui-nativemodule-arkui-rendercontentmodifierhandle) modifier         内容修改器。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 目标节点是从一个FrameNode获取的。从API version 22开始支持。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateContentModifier()

     ArkUI_RenderContentModifierHandle OH_ArkUI_RenderNodeUtils_CreateContentModifier()     **描述：**

     创建内容修改器。

     **起始版本：** 20

     **返回：**

                                   类型         说明                                       [ArkUI_RenderContentModifierHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/kui-nativemodule-arkui-rendercontentmodifierhandle)         内容修改器。                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeContentModifier()

     void OH_ArkUI_RenderNodeUtils_DisposeContentModifier(ArkUI_RenderContentModifierHandle modifier)     **描述：**

     释放内容修改器。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderContentModifierHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/kui-nativemodule-arkui-rendercontentmodifierhandle) modifier         内容修改器。                                            #### [h2]OH_ArkUI_RenderNodeUtils_AttachFloatProperty()

     int32_t OH_ArkUI_RenderNodeUtils_AttachFloatProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_FloatPropertyHandle property)     **描述：**

     为目标内容修改器附加浮点属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderContentModifierHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/kui-nativemodule-arkui-rendercontentmodifierhandle) modifier         为目标内容修改器设置浮点属性。                         [ArkUI_FloatPropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-floatpropertyhandle) property         浮点属性。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_AttachVector2Property()

     int32_t OH_ArkUI_RenderNodeUtils_AttachVector2Property(ArkUI_RenderContentModifierHandle modifier, ArkUI_Vector2PropertyHandle property)     **描述：**

     为目标内容修改器附加二维向量属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderContentModifierHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/kui-nativemodule-arkui-rendercontentmodifierhandle) modifier         为目标内容修改器设置二维向量属性。                         [ArkUI_Vector2PropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-vector2propertyhandle) property         二维向量属性。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_AttachColorProperty()

     int32_t OH_ArkUI_RenderNodeUtils_AttachColorProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_ColorPropertyHandle property)     **描述：**

     为目标内容修改器附加颜色属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderContentModifierHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/kui-nativemodule-arkui-rendercontentmodifierhandle) modifier         为目标内容修改器设置颜色属性。                         [ArkUI_ColorPropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-colorpropertyhandle) property         颜色属性。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_AttachFloatAnimatableProperty()

     int32_t OH_ArkUI_RenderNodeUtils_AttachFloatAnimatableProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_FloatAnimatablePropertyHandle property)     **描述：**

     为目标内容修改器附加可动画的浮点属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderContentModifierHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/kui-nativemodule-arkui-rendercontentmodifierhandle) modifier         为目标内容修改器设置可动画的浮点属性。                         [ArkUI_FloatAnimatablePropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-nativemodule-arkui-floatanimatablepropertyhandle) property         可动画的浮点属性。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_AttachVector2AnimatableProperty()

     int32_t OH_ArkUI_RenderNodeUtils_AttachVector2AnimatableProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_Vector2AnimatablePropertyHandle property)     **描述：**

     为目标内容修改器附加可动画的二维向量属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderContentModifierHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/kui-nativemodule-arkui-rendercontentmodifierhandle) modifier         为目标内容修改器设置可动画的二维向量属性。                         [ArkUI_Vector2AnimatablePropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nativemodule-arkui-vector2animatablepropertyhandle) property         可动画的二维向量属性。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_AttachColorAnimatableProperty()

     int32_t OH_ArkUI_RenderNodeUtils_AttachColorAnimatableProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_ColorAnimatablePropertyHandle property)     **描述：**

     为目标内容修改器附加可动画的颜色属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderContentModifierHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/kui-nativemodule-arkui-rendercontentmodifierhandle) modifier         为目标内容修改器设置可动画的颜色属性。                         [ArkUI_ColorAnimatablePropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-nativemodule-arkui-coloranimatablepropertyhandle) property         可动画的颜色属性。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateFloatProperty()

     ArkUI_FloatPropertyHandle OH_ArkUI_RenderNodeUtils_CreateFloatProperty(float value)     **描述：**

     创建浮点属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       float value         属性值。                               **返回：**

                                   类型         说明                                       [ArkUI_FloatPropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-floatpropertyhandle)         浮点属性。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetFloatPropertyValue()

     int32_t OH_ArkUI_RenderNodeUtils_SetFloatPropertyValue(ArkUI_FloatPropertyHandle property, float value)     **描述：**

     设置浮点属性的值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_FloatPropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-floatpropertyhandle) property         浮点属性。                         float value         属性值。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetFloatPropertyValue()

     int32_t OH_ArkUI_RenderNodeUtils_GetFloatPropertyValue(ArkUI_FloatPropertyHandle property, float* value)     **描述：**

     获取浮点属性的值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_FloatPropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-floatpropertyhandle) property         浮点属性。                         float* value         用于接收属性值的指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeFloatProperty()

     void OH_ArkUI_RenderNodeUtils_DisposeFloatProperty(ArkUI_FloatPropertyHandle property)     **描述：**

     释放浮点属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_FloatPropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-floatpropertyhandle) property         浮点属性。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateVector2Property()

     ArkUI_Vector2PropertyHandle OH_ArkUI_RenderNodeUtils_CreateVector2Property(float x, float y)     **描述：**

     创建二维向量属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       float x         属性的X坐标值。                         float y         属性的Y坐标值。                               **返回：**

                                   类型         说明                                       [ArkUI_Vector2PropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-vector2propertyhandle)         二维向量属性。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetVector2PropertyValue()

     int32_t OH_ArkUI_RenderNodeUtils_SetVector2PropertyValue(ArkUI_Vector2PropertyHandle property, float x, float y)     **描述：**

     设置二维向量属性的值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_Vector2PropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-vector2propertyhandle) property         二维向量属性。                         float x         属性的X坐标值。                         float y         属性的Y坐标值。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetVector2PropertyValue()

     int32_t OH_ArkUI_RenderNodeUtils_GetVector2PropertyValue(ArkUI_Vector2PropertyHandle property, float* x, float* y)     **描述：**

     获取二维向量属性的值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_Vector2PropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-vector2propertyhandle) property         二维向量属性。                         float* x         用于接收属性X坐标值的指针。                         float* y         用于接收属性Y坐标值的指针。                               **返回：**

                                   类型         说明                                       int32_t                   ���误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeVector2Property()

     void OH_ArkUI_RenderNodeUtils_DisposeVector2Property(ArkUI_Vector2PropertyHandle property)     **描述：**

     释放二维向量属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_Vector2PropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-vector2propertyhandle) property         二维向量属性。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateColorProperty()

     ArkUI_ColorPropertyHandle OH_ArkUI_RenderNodeUtils_CreateColorProperty(uint32_t value)     **描述：**

     创建颜色属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       uint32_t value         属性值。                               **返回：**

                                   类型         说明                                       [ArkUI_ColorPropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-colorpropertyhandle)         颜色属性。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetColorPropertyValue()

     int32_t OH_ArkUI_RenderNodeUtils_SetColorPropertyValue(ArkUI_ColorPropertyHandle property, uint32_t value)     **描述：**

     设置颜色属性的值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_ColorPropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-colorpropertyhandle) property         颜色属性。                         uint32_t value         属性值。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetColorPropertyValue()

     int32_t OH_ArkUI_RenderNodeUtils_GetColorPropertyValue(ArkUI_ColorPropertyHandle property, uint32_t* value)     **描述：**

     获取颜色属性的值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_ColorPropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-colorpropertyhandle) property         颜色属性。                         uint32_t* value         用于接收属性值的指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeColorProperty()

     void OH_ArkUI_RenderNodeUtils_DisposeColorProperty(ArkUI_ColorPropertyHandle property)     **描述：**

     释放颜色属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_ColorPropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-colorpropertyhandle) property         颜色属性。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateFloatAnimatableProperty()

     ArkUI_FloatAnimatablePropertyHandle OH_ArkUI_RenderNodeUtils_CreateFloatAnimatableProperty(float value)     **描述：**

     创建可动画的浮点属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       float value         属性值。                               **返回：**

                                   类型         说明                                       [ArkUI_FloatAnimatablePropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-nativemodule-arkui-floatanimatablepropertyhandle)         可动画的浮点属性。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetFloatAnimatablePropertyValue()

     int32_t OH_ArkUI_RenderNodeUtils_SetFloatAnimatablePropertyValue(ArkUI_FloatAnimatablePropertyHandle property, float value)     **描述：**

     设置可动画的浮点属性的值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_FloatAnimatablePropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-nativemodule-arkui-floatanimatablepropertyhandle) property         可动画的浮点属性。                         float value         属性值。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetFloatAnimatablePropertyValue()

     int32_t OH_ArkUI_RenderNodeUtils_GetFloatAnimatablePropertyValue(ArkUI_FloatAnimatablePropertyHandle property, float* value)     **描述：**

     获取可动画的浮点属性的值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_FloatAnimatablePropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-nativemodule-arkui-floatanimatablepropertyhandle) property         可动画的浮点属性。                         float* value         用于接收属性值的指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeFloatAnimatableProperty()

     void OH_ArkUI_RenderNodeUtils_DisposeFloatAnimatableProperty(ArkUI_FloatAnimatablePropertyHandle property)     **描述：**

     释放可动画的浮点属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_FloatAnimatablePropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-nativemodule-arkui-floatanimatablepropertyhandle) property         可动画的浮点属性。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateVector2AnimatableProperty()

     ArkUI_Vector2AnimatablePropertyHandle OH_ArkUI_RenderNodeUtils_CreateVector2AnimatableProperty(float x, float y)     **描述：**

     创建可动画的二维向量属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       float x         属性的X坐标值。                         float y         属性的Y坐标值。                               **返回：**

                                   类型         说明                                       [ArkUI_Vector2AnimatablePropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nativemodule-arkui-vector2animatablepropertyhandle)         可动画的二维向量属性。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetVector2AnimatablePropertyValue()

     int32_t OH_ArkUI_RenderNodeUtils_SetVector2AnimatablePropertyValue(ArkUI_Vector2AnimatablePropertyHandle property, float x, float y)     **描述：**

     设置可动画的二维向量属性的值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_Vector2AnimatablePropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nativemodule-arkui-vector2animatablepropertyhandle) property         可动画的二维向量属性。                         float x         属性的X坐标值。                         float y         属性的Y坐标值。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetVector2AnimatablePropertyValue()

     int32_t OH_ArkUI_RenderNodeUtils_GetVector2AnimatablePropertyValue(ArkUI_Vector2AnimatablePropertyHandle property, float* x, float* y)     **描述：**

     获取可动画的二维向量属性的值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_Vector2AnimatablePropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nativemodule-arkui-vector2animatablepropertyhandle) property         可动画的二维向量属性。                         float* x         用于接收属性X坐标值的指针。                         float* y         用于接收属性Y坐标值的指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeVector2AnimatableProperty()

     void OH_ArkUI_RenderNodeUtils_DisposeVector2AnimatableProperty(ArkUI_Vector2AnimatablePropertyHandle property)     **描述：**

     释放可动画的二维向量属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_Vector2AnimatablePropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nativemodule-arkui-vector2animatablepropertyhandle) property         可动画的二维向量属性。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateColorAnimatableProperty()

     ArkUI_ColorAnimatablePropertyHandle OH_ArkUI_RenderNodeUtils_CreateColorAnimatableProperty(uint32_t value)     **描述：**

     创建可动画的颜色属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       uint32_t value         属性值。                               **返回：**

                                   类型         说明                                       [ArkUI_ColorAnimatablePropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-nativemodule-arkui-coloranimatablepropertyhandle)         可动画的颜色属性。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetColorAnimatablePropertyValue()

     int32_t OH_ArkUI_RenderNodeUtils_SetColorAnimatablePropertyValue(ArkUI_ColorAnimatablePropertyHandle property, uint32_t value)     **描述：**

     设置可动画的颜色属性的值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_ColorAnimatablePropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-nativemodule-arkui-coloranimatablepropertyhandle) property         可动画的颜色属性。                         uint32_t value         属性值。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetColorAnimatablePropertyValue()

     int32_t OH_ArkUI_RenderNodeUtils_GetColorAnimatablePropertyValue(ArkUI_ColorAnimatablePropertyHandle property, uint32_t* value)     **描述：**

     获取可动画的颜色属性的值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_ColorAnimatablePropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-nativemodule-arkui-coloranimatablepropertyhandle) property         可动画的颜色属性。                         uint32_t* value         用于接收属性值的指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeColorAnimatableProperty()

     void OH_ArkUI_RenderNodeUtils_DisposeColorAnimatableProperty(ArkUI_ColorAnimatablePropertyHandle property)     **描述：**

     释放可动画的颜色属性。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_ColorAnimatablePropertyHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-nativemodule-arkui-coloranimatablepropertyhandle) property         可动画的颜色属性。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetContentModifierOnDraw()

     int32_t OH_ArkUI_RenderNodeUtils_SetContentModifierOnDraw(ArkUI_RenderContentModifierHandle modifier, void* userData, void (*callback)(ArkUI_DrawContext* context, void* userData))     **描述：**

     设置内容修改器的onDraw函数。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderContentModifierHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/kui-nativemodule-arkui-rendercontentmodifierhandle) modifier         目标内容修改器。                         void* userData         要传递给回调的自定义数据。                         void (callback)([ArkUI_DrawContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawcontext) context, void* userData)         绘制事件接收回调。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateRectShapeOption()

     ArkUI_RectShapeOption* OH_ArkUI_RenderNodeUtils_CreateRectShapeOption()     **描述：**

     创建矩形形状。

     **起始版本：** 20

     **返回：**

                                   类型         说明                                       [ArkUI_RectShapeOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rectshapeoption)*         指向矩形形状的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeRectShapeOption()

     void OH_ArkUI_RenderNodeUtils_DisposeRectShapeOption(ArkUI_RectShapeOption* option)     **描述：**

     释放矩形形状。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RectShapeOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rectshapeoption)* option         指向矩形形状的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetRectShapeOptionEdgeValue()

     void OH_ArkUI_RenderNodeUtils_SetRectShapeOptionEdgeValue(ArkUI_RectShapeOption* option, float edgeValue, ArkUI_EdgeDirection direction)     **描述：**

     设置矩形形状的边缘值。当设置左边界和上边界为负数时，因显示涉及到图层叠加效果，会导致部分超出节点内容部分无法绘制。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RectShapeOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rectshapeoption)* option         指向矩形形状的指针。                         float edgeValue         矩形形状的边缘值。                         [ArkUI_EdgeDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_edgedirection) direction         要设置边缘值的矩形方向。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateNodeBorderStyleOption()

     ArkUI_NodeBorderStyleOption* OH_ArkUI_RenderNodeUtils_CreateNodeBorderStyleOption()     **描述：**

     创建节点边框样式。

     **起始版本：** 20

     **返回：**

                                   类型         说明                                       [ArkUI_NodeBorderStyleOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodeborderstyleoption)*         指向节点边框样式的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeNodeBorderStyleOption()

     void OH_ArkUI_RenderNodeUtils_DisposeNodeBorderStyleOption(ArkUI_NodeBorderStyleOption* option)     **描述：**

     释放节点边框样式。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_NodeBorderStyleOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodeborderstyleoption)* option         指向节点边框样式的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetNodeBorderStyleOptionEdgeStyle()

     void OH_ArkUI_RenderNodeUtils_SetNodeBorderStyleOptionEdgeStyle(ArkUI_NodeBorderStyleOption* option, ArkUI_BorderStyle edgeStyle, ArkUI_EdgeDirection direction)     **描述：**

     设置节点边框样式的边缘值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_NodeBorderStyleOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodeborderstyleoption)* option         指向节点边框样式的指针。                         [ArkUI_BorderStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_borderstyle) edgeStyle         节点边框样式的边缘边框样式值。                         [ArkUI_EdgeDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_edgedirection) direction         边缘的方向。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateNodeBorderWidthOption()

     ArkUI_NodeBorderWidthOption* OH_ArkUI_RenderNodeUtils_CreateNodeBorderWidthOption()     **描述：**

     创建节点边框宽度。

     **起始版本：** 20

     **返回：**

                                   类型         说明                                       [ArkUI_NodeBorderWidthOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodeborderwidthoption)*         指向节点边框宽度的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeNodeBorderWidthOption()

     void OH_ArkUI_RenderNodeUtils_DisposeNodeBorderWidthOption(ArkUI_NodeBorderWidthOption* option)     **描述：**

     释放节点边框宽度。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_NodeBorderWidthOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodeborderwidthoption)* option         指向节点边框宽度的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetNodeBorderWidthOptionEdgeWidth()

     void OH_ArkUI_RenderNodeUtils_SetNodeBorderWidthOptionEdgeWidth(ArkUI_NodeBorderWidthOption* option, float edgeWidth, ArkUI_EdgeDirection direction)     **描述：**

     设置节点边框宽度的边缘值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_NodeBorderWidthOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodeborderwidthoption)* option         指向节点边框宽度的指针。                         float edgeWidth                   节点边框宽度的边缘宽度值。

          取值范围：[0, +∞)

                         [ArkUI_EdgeDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_edgedirection) direction         边缘的方向。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateNodeBorderColorOption()

     ArkUI_NodeBorderColorOption* OH_ArkUI_RenderNodeUtils_CreateNodeBorderColorOption()     **描述：**

     创建节点边框颜色。

     **起始版本：** 20

     **返回：**

                                   类型         说明                                       [ArkUI_NodeBorderColorOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodebordercoloroption)*         指向节点边框颜色的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeNodeBorderColorOption()

     void OH_ArkUI_RenderNodeUtils_DisposeNodeBorderColorOption(ArkUI_NodeBorderColorOption* option)     **描述：**

     释放节点边框颜色。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_NodeBorderColorOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodebordercoloroption)* option         指向节点边框颜色的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetNodeBorderColorOptionEdgeColor()

     void OH_ArkUI_RenderNodeUtils_SetNodeBorderColorOptionEdgeColor(ArkUI_NodeBorderColorOption* option, uint32_t edgeColor, ArkUI_EdgeDirection direction)     **描述：**

     设置节点边框颜色的边缘值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_NodeBorderColorOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-nodebordercoloroption)* option         指向节点边框颜色的指针。                         uint32_t edgeColor         节点边框颜色的边缘颜色值。                         [ArkUI_EdgeDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_edgedirection) direction         边缘的方向。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateNodeBorderRadiusOption()

     ArkUI_NodeBorderRadiusOption* OH_ArkUI_RenderNodeUtils_CreateNodeBorderRadiusOption()     **描述：**

     创建节点边框半径。

     **起始版本：** 20

     **返回：**

                                   类型         说明                                       [ArkUI_NodeBorderRadiusOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pi-arkui-nativemodule-arkui-nodeborderradiusoption)*         指向节点边框半径的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeNodeBorderRadiusOption()

     void OH_ArkUI_RenderNodeUtils_DisposeNodeBorderRadiusOption(ArkUI_NodeBorderRadiusOption* option)     **描述：**

     释放节点边框半径。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_NodeBorderRadiusOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pi-arkui-nativemodule-arkui-nodeborderradiusoption)* option         指向节点边框半径的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetNodeBorderRadiusOptionCornerRadius()

     void OH_ArkUI_RenderNodeUtils_SetNodeBorderRadiusOptionCornerRadius(ArkUI_NodeBorderRadiusOption* option, uint32_t cornerRadius, ArkUI_CornerDirection direction)     **描述：**

     设置节点边框半径的边缘值。请注意，入参cornerRadius为uint32_t，仅支持传入正整数。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_NodeBorderRadiusOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pi-arkui-nativemodule-arkui-nodeborderradiusoption)* option         指向节点边框半径的指针。                         uint32_t cornerRadius         节点边框半径的边缘半径值。                         [ArkUI_CornerDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_cornerdirection) direction         边缘的方向。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateCircleShapeOption()

     ArkUI_CircleShapeOption* OH_ArkUI_RenderNodeUtils_CreateCircleShapeOption()     **描述：**

     创建圆形形状。

     **起始版本：** 20

     **返回：**

                                   类型         说明                                       [ArkUI_CircleShapeOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-circleshapeoption)*         指向圆形形状的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeCircleShapeOption()

     void OH_ArkUI_RenderNodeUtils_DisposeCircleShapeOption(ArkUI_CircleShapeOption* option)     **描述：**

     释放圆形形状。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_CircleShapeOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-circleshapeoption)* option         指向圆形形状的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionCenterX()

     void OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionCenterX(ArkUI_CircleShapeOption* option, float centerX)     **描述：**

     设置圆形形状的圆心x轴坐标值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_CircleShapeOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-circleshapeoption)* option         指向圆形形状的指针。                         float centerX         圆心x轴坐标值。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionCenterY()

     void OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionCenterY(ArkUI_CircleShapeOption* option, float centerY)     **描述：**

     设置圆形形状的圆心y轴坐标值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_CircleShapeOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-circleshapeoption)* option         指向圆形形状的指针。                         float centerY         圆心y轴坐标值。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionRadius()

     void OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionRadius(ArkUI_CircleShapeOption* option, float radius)     **描述：**

     设置圆形形状的半径值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_CircleShapeOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-circleshapeoption)* option         指向圆形形状的指针。                         float radius         半径值（以像素为单位）。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateRoundRectShapeOption()

     ArkUI_RoundRectShapeOption* OH_ArkUI_RenderNodeUtils_CreateRoundRectShapeOption()     **描述：**

     创建圆角矩形形状。

     **起始版本：** 20

     **返回：**

                                   类型         说明                                       [ArkUI_RoundRectShapeOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-roundrectshapeoption)*         指向圆角矩形形状的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeRoundRectShapeOption()

     void OH_ArkUI_RenderNodeUtils_DisposeRoundRectShapeOption(ArkUI_RoundRectShapeOption* option)     **描述：**

     释放圆角矩形形状。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RoundRectShapeOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-roundrectshapeoption)* option         指向圆角矩形形状的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetRoundRectShapeOptionEdgeValue()

     void OH_ArkUI_RenderNodeUtils_SetRoundRectShapeOptionEdgeValue(ArkUI_RoundRectShapeOption* option, float edgeValue, ArkUI_EdgeDirection direction)     **描述：**

     设置圆角矩形形状的边缘值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RoundRectShapeOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-roundrectshapeoption)* option         指向圆角矩形形状的指针。                         float edgeValue         圆角矩形形状的边缘值。                         [ArkUI_EdgeDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_edgedirection) direction         要设置边缘值的矩形方向。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetRoundRectShapeOptionCornerXY()

     void OH_ArkUI_RenderNodeUtils_SetRoundRectShapeOptionCornerXY(ArkUI_RoundRectShapeOption* option, float x, float y, ArkUI_CornerDirection direction)     **描述：**

     设置目标角的坐标值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RoundRectShapeOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-roundrectshapeoption)* option         指向圆角矩形形状的指针。                         float x         目标角的X坐标（以像素为单位）。                         float y         目标角的Y坐标（以像素为单位）。                         [ArkUI_CornerDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_cornerdirection) direction         角的方向。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateCommandPathOption()

     ArkUI_CommandPathOption* OH_ArkUI_RenderNodeUtils_CreateCommandPathOption()     **描述：**

     创建自定义绘制路径。

     **起始版本：** 20

     **返回：**

                                   类型         说明                                       [ArkUI_CommandPathOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-commandpathoption)*         指向自定义绘制路径的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeCommandPathOption()

     void OH_ArkUI_RenderNodeUtils_DisposeCommandPathOption(ArkUI_CommandPathOption* option)     **描述：**

     释放自定义绘制路径。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_CommandPathOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-commandpathoption)* option         指向自定义绘制路径的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetCommandPathOptionCommands()

     void OH_ArkUI_RenderNodeUtils_SetCommandPathOptionCommands(ArkUI_CommandPathOption* option, char* commands)     **描述：**

     设置自定义绘制路径的命令值。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_CommandPathOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-commandpathoption)* option         指向自定义绘制路径的指针。                         char* commands         命令值。入参格式为SVG的[<path>形状标签](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-svg#基础形状)。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromRectShape()

     ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromRectShape(ArkUI_RectShapeOption* shape)     **描述：**

     从矩形形状创建遮罩。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RectShapeOption*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rectshapeoption) shape         指向矩形形状的指针。                               **返回：**

                                   类型         说明                                       [ArkUI_RenderNodeMaskOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodemaskoption)         指向渲染节点遮罩的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromRoundRectShape()

     ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromRoundRectShape(ArkUI_RoundRectShapeOption* shape)     **描述：**

     从圆角矩形形状创建遮罩。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RoundRectShapeOption*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-roundrectshapeoption) shape         指向圆角矩形形状的指针。                               **返回：**

                                   类型         说明                                       [ArkUI_RenderNodeMaskOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodemaskoption)         指向渲染节点遮罩的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromCircleShape()

     ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromCircleShape(ArkUI_CircleShapeOption* shape)     **描述：**

     从圆形形状创建遮罩。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_CircleShapeOption*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-circleshapeoption) shape         指向圆形形状的指针。                               **返回：**

                                   类型         说明                                       [ArkUI_RenderNodeMaskOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodemaskoption)         指向渲染节点遮罩的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromOvalShape()

     ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromOvalShape(ArkUI_RectShapeOption* shape)     **描述：**

     从椭圆形形状创建遮罩。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RectShapeOption*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rectshapeoption) shape         指向椭圆形形状的指针。                               **返回：**

                                   类型         说明                                       [ArkUI_RenderNodeMaskOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodemaskoption)         指向渲染节点遮罩的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromCommandPath()

     ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromCommandPath(ArkUI_CommandPathOption* path)     **描述：**

     从自定义绘制路径创建遮罩。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_CommandPathOption*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-commandpathoption) path         指向自定义绘制路径的指针。                               **返回：**

                                   类型         说明                                       [ArkUI_RenderNodeMaskOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodemaskoption)         指向渲染节点遮罩的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeRenderNodeMaskOption()

     void OH_ArkUI_RenderNodeUtils_DisposeRenderNodeMaskOption(ArkUI_RenderNodeMaskOption* option)     **描述：**

     释放渲染节点遮罩。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeMaskOption*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodemaskoption) option         指向渲染节点遮罩的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionFillColor()

     void OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionFillColor(ArkUI_RenderNodeMaskOption* mask, uint32_t fillColor)     **描述：**

     设置渲染节点遮罩的填充颜色。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeMaskOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodemaskoption)* mask         指向渲染节点遮罩的指针。                         uint32_t fillColor         遮罩的填充颜色。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionStrokeColor()

     void OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionStrokeColor(ArkUI_RenderNodeMaskOption* mask, uint32_t strokeColor)     **描述：**

     设置渲染节点遮罩的描边颜色。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeMaskOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodemaskoption)* mask         指向渲染节点遮罩的指针。                         uint32_t strokeColor         遮罩的描边颜色。                                            #### [h2]OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionStrokeWidth()

     void OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionStrokeWidth(ArkUI_RenderNodeMaskOption* mask, float strokeWidth)     **描述：**

     设置渲染节点遮罩的描边宽度。以边框路径为中心进行相应宽度的绘制。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeMaskOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodemaskoption)* mask         指向渲染节点遮罩的指针。                         float strokeWidth                   遮罩的描边宽度。

          取值范围：(0, +∞)，当取值为负数或0时，绘制时会被设定成1像素。

                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromRectShape()

     ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromRectShape(ArkUI_RectShapeOption* shape)     **描述：**

     从矩形形状创建裁剪。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RectShapeOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rectshapeoption)* shape         指向矩形形状的指针。                               **返回：**

                                   类型         说明                                       [ArkUI_RenderNodeClipOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodeclipoption)*         指向渲染节点裁剪的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromRoundRectShape()

     ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromRoundRectShape(ArkUI_RoundRectShapeOption* shape)     **描述：**

     从圆角矩形形状创建裁剪。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RoundRectShapeOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-roundrectshapeoption)* shape         指向圆角矩形形状的指针。                               **返回：**

                                   类型         说明                                       [ArkUI_RenderNodeClipOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodeclipoption)*         指向渲染节点裁剪的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromCircleShape()

     ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromCircleShape(ArkUI_CircleShapeOption* shape)     **描述：**

     从圆形形状创建裁剪。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_CircleShapeOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-circleshapeoption)* shape         指向圆形形状的指针。                               **返回：**

                                   类型         说明                                       [ArkUI_RenderNodeClipOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodeclipoption)*         指向渲染节点裁剪的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromOvalShape()

     ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromOvalShape(ArkUI_RectShapeOption* shape)     **描述：**

     从椭圆形形状创建裁剪。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RectShapeOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rectshapeoption)* shape         指向椭圆形形状的指针。                               **返回：**

                                   类型         说明                                       [ArkUI_RenderNodeClipOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodeclipoption)*         指向渲染节点裁剪的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromCommandPath()

     ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromCommandPath(ArkUI_CommandPathOption* path)     **描述：**

     从自定义绘制路径创建裁剪。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_CommandPathOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-commandpathoption)* path         指向自定义绘制路径的指针。                               **返回：**

                                   类型         说明                                       [ArkUI_RenderNodeClipOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodeclipoption)*         指向渲染节点裁剪的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_DisposeRenderNodeClipOption()

     void OH_ArkUI_RenderNodeUtils_DisposeRenderNodeClipOption(ArkUI_RenderNodeClipOption* option)     **描述：**

     释放渲染节点裁剪。

     **起始版本：** 20

     **参数：**

                                   参数项         描述                                       [ArkUI_RenderNodeClipOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodeclipoption)* option         指向渲染节点裁剪的指针。                                            #### [h2]OH_ArkUI_RenderNodeUtils_GetRenderNode()

     int32_t OH_ArkUI_RenderNodeUtils_GetRenderNode(ArkUI_NodeHandle node, ArkUI_RenderNodeHandle* renderNode);     **描述：**

     获取已被接纳为附属节点的目标节点的RenderNode。如果一个RenderNode是通过该接口获取的，调用[ArkUI_NativeNodeAPI_1](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativenodeapi-1)的[disposeNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativenodeapi-1#disposenode)接口主动销毁FrameNode时，需要额外调用[OH_ArkUI_RenderNodeUtils_DisposeNode](#oh_arkui_rendernodeutils_disposenode)释放该RenderNode。

     **起始版本：** 22

     **参数：**

                                   参数项         描述                                       [ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h) node         ArkUI_NodeHandle指针，指定目标节点。                         [ArkUI_RenderNodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rendernodehandle)* renderNode         ArkUI_RenderNodeHandle*指针，目标节点的RenderNode。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

          [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) CAPI初始化失败。

          [ARKUI_ERROR_CODE_RENDER_NOT_ADOPTED_NODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 该节点未被接纳为附属节点。

---
*Updated: 2026-04-22 06:44:46*
