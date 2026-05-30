# path

> **分区**: API参考  |  **Slug**: `js-components-svg-path`  |  **DocID**: `ab68b7ae9d914db6b493ac307b1d12e8`

---

# path

   该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

   绘制路径。

  #### 权限列表

无

   #### 子组件

支持[animate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-animate)、[animateMotion](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-animatemotion)、[animateTransform](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-animatetransform)。

   #### 属性

支持Svg组件[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-common-attributes)和以下属性，设置的通用属性会传递给子组件。

  名称 类型 默认值 必填 描述   id string - 否 组件的唯一标识。  d string - 否 设置路径的形状。包含一组字符指令，大写字母为绝对路径，小写字符为相对路径。

 字母指令表示的意义如下：

 - M/m = moveto

 - L/l = lineto

 - H/h = horizontal lineto

 - V/v = vertical lineto

 - C/c = curveto

 - S/s = smooth curveto

 - Q/q = quadratic Bezier curve

 - T/t = smooth quadratic Bezier curveto

 - A/a = elliptical Arc

 - Z/z = closepath

        #### 示例

```
<!-- xxx.hml -->
<div class="container">
    <svg width="400" height="400">
        <path d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"
          stroke="blue" stroke-width="3" fill="red">
        </path>
    </svg>
</div>
```

---
*Updated: 2026-04-22 06:46:17*
