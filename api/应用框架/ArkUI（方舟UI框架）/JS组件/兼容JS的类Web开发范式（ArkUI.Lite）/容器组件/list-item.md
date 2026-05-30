# list-item

> **分区**: API参考  |  **Slug**: `js-lite-components-container-list-item`  |  **DocID**: `87246c503bf3485fbfc492a6863ffad3`

---

# list-item

 <[list](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-lite-components-container-list)>的子组件，用来展示列表具体item。

   该组件从API version 4 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

    #### 子组件

支持。

   #### 属性

 名称 类型 默认值 必填 描述   id string - 否 组件的唯一标识。  style string - 否 组件的样式声明。  class string - 否 组件的样式类，用于引用样式表。  ref string - 否 用来指定指向子元素的引用信息，该引用将注册到父组件的$refs 属性对象上。       #### 事件

 名称 参数 描述   click - 点击动作触发该事件。  longpress - 长按动作触发该事件。  swipe5+ [SwipeEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-lite-common-events) 组件上快速滑动后触发。       #### 样式

 名称 类型 默认值 必填 描述   width <length> | <percentage>5+ - 否 设置组件自身的宽度。

 未设置时组件宽度默认为0。

   height <length> | <percentage>5+ - 否 设置组件自身的高度。

 未设置时组件高度默认为0。

   padding <length> 0 否 使用简写属性设置所有的内边距属性。

   该属性可以有1到4个值：

 - 指定一个值时，该值指定四个边的内边距。

 - 指定两个值时，第一个值指定上下两边的内边距，第二个指定左右两边的内边距。

 - 指定三个值时，第一个指定上边的内边距，第二个指定左右两边的内边距，第三个指定下边的内边距。

 - 指定四个值时分别为上、右、下、左边的内边距（顺时针顺序）。

   padding-[left|top|right|bottom] <length> 0 否 设置左、上、右、下内边距属性。  border-width <length> 0 否 使用简写属性设置元素的所有边框宽度。  border-color <color> black 否 使用简写属性设置元素的所有边框颜色。  border-radius <length> - 否 border-radius属性是设置元素的外边框圆角半径。  background-color <color> - 否 设置背景颜色。  opacity5+ number 1 否 元素的透明度，取值范围为0到1，1表示为不透明，0表示为完全透明。  display string flex 否 确定一个元素所产生的框的类型，可选值为：

 - flex：弹性布局。

 - none：不渲染此元素。

        #### 示例

参考 [list示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-lite-components-container-list#示例)。

---
*Updated: 2026-04-22 06:46:04*
