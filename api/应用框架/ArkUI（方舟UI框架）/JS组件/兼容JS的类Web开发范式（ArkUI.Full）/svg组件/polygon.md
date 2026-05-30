# polygon

> **分区**: API参考  |  **Slug**: `js-components-svg-polygon`  |  **DocID**: `0a84f77b788a4555962480b345c1590e`

---

# polygon

   该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

   绘制多边形。

  #### 权限列表

无

   #### 子组件

支持[animate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-animate)、[animateMotion](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-animatemotion)、[animateTransform](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-animatetransform)。

   #### 属性

支持Svg组件[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-common-attributes)和以下属性。

  名称 类型 默认值 必填 描述   id string - 否 组件的唯一标识。  points string - 否 设置多边形的多个坐标点。

 格式为[x1,y1 x2,y2 x3,y3]。

 支持属性动画，如果属性动画里设置的动效变化值的坐标个数与原始points的格式不一样，则无效。

        #### 示例

```
<!-- xxx.hml -->
<div class="container">
  <svg fill="white" stroke="blue" width="400" height="400">
    <polygon points="10,110 60,35 60,85 110,10" fill="red"></polygon>
    <polygon points="10,200 60,125 60,175 110,100" stroke-dasharray="10 5" stroke-dashoffset="3"></polygon>
  </svg>
</div>
```

---
*Updated: 2026-04-22 06:46:24*
