# Grid网格元素拖拽交换

> **分区**: 最佳实践  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `bpta-grid-drag-swap`  |  **DocID**: `47454bf6019143f78ddb199face308ce`  |  **NodeID**: `0002017755468196491656b243455277`

---

# Grid网格元素拖拽交换 

 #### 概述

Grid网格元素拖拽交换功能在应用中经常会被使用，如当编辑九宫格图片需要拖拽图片改变排序时，就会使用到该功能。当网格中图片进行拖拽交换时，元素排列会跟随图片拖拽的位置而发生变化，并且会有对应的动画效果，以达到良好的用户体验。

 Grid网格布局一般由[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)容器组件和子组件[GridItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-griditem)构建组成，Grid用于设置网格布局相关参数，GridItem定义子组件相关特征。网格布局中含有网格元素，当给Grid容器组件设置[editMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#editmode8)属性为true时，可开启Grid组件的编辑模式。首先，开启编辑模式。然后，给[GridItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-griditem)组件绑定[长按](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-longpressgesture)、[拖拽](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)等手势。最后，需要添加动画属性[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)，并设置相应的动画效果。最终，呈现出网格元素拖拽交换的动效过程，如下示意图。

 

 

  #### 实现原理

 #### [h2]关键技术

Grid网格元素拖拽交换功能实现是通过[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)容器组件、[组合手势](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-combined-gestures)、动画属性[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)结合来实现的。

 
- Grid组件可以构建网格元素布局。
- 组合手势可以实现元素拖拽交换的效果。
- 显式动画可以给元素拖拽交换的过程中，添加动画效果。

  Grid组件当前支持GridItem拖拽动画，通过给Grid容器组件设置[supportAnimation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#supportanimation8)为true，即可开启动画效果。但仅支持在滚动模式下（设置[rowsTemplate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#rowstemplate)、[columnsTemplate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#columnstemplate)其中一个）支持动画。且仅在大小规则的Grid中支持拖拽动画，跨行或跨列场景不支持。因此，在跨行或跨列场景下，需要通过自定义Grid布局、自定义手势和显式动画来实现拖拽交换的效果。

   #### [h2]开发流程

在需要拖拽交换的场景中：

 
- 实现Grid布局，启动[editMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#editmode8)编辑模式，进入编辑模式可以拖拽Grid组件内部[GridItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-griditem)。
- 给网格元素[GridItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-griditem)绑定相关手势，实现可拖拽操作。
- 使用显式动画[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)，实现[GridItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-griditem)拖拽过程中的动画效果。

  #### 相同大小网格元素，长按拖拽

 #### [h2]场景描述

 在编辑九宫格等多图的场景中，长按图片（网格元素）可以拖拽交换排序，拖拽图片的过程中，旁边的图片也会即时移动，以产生新的宫格排布。

 示意效果图如下。

 

 

 #### [h2]开发步骤

 
Grid布局及相同大小的GridItem界面开发。其中，[scrollBar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#scrollbar)可设置滚动条状态，值为BarState.Off时，表示不显示滚动条；[columnsTemplate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#columnstemplate)可设置当前网格布局列的数量、固定列宽或最小列宽值；[columnsGap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#columnsgap)可设置列与列的间距；[rowsGap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#rowsgap)可设置行与行的间距。```
Grid() {
  ForEach(this.numbers, (item: number) => {
    GridItem() {
      Image($r(`app.media.image${item}`))
        .width('100%')
        .height(this.curBp === 'md' ? 131 : 105)
        .draggable(false)
        .animation({ curve: Curve.Sharp, duration: 300 })
    }
  }, (item: number) => item.toString())
}
.width(this.curBp === 'md' ? '66%' : '100%')
.scrollBar(BarState.Off)
.columnsTemplate('1fr 1fr 1fr')
.columnsGap(this.curBp === 'md' ? 6 : 4)
.rowsGap(this.curBp === 'md' ? 6 : 4)
.height(this.curBp === 'md' ? 406 : 323)
```
 给Grid组件设置[editMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#editmode8)为true，即Grid进入编辑模式，进入编辑模式可以拖拽Grid组件内部[GridItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-griditem)。设置[supportAnimation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#supportanimation8)为true，即Grid拖拽元素时支持动画。```
.editMode(true)
.supportAnimation(true)
```
 定义拖拽过程中的数组交换逻辑。```
changeIndex(index1: number, index2: number) {
  let tmp = this.numbers.splice(index1, 1);
  this.numbers.splice(index2, 0, tmp[0])
}
```
 给Grid组件绑定[onItemDragStart](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#onitemdragstart8)和[onItemDrop](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#onitemdrop8)事件，在[onItemDragStart](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#onitemdragstart8)回调中设置拖拽过程中显示的图片，并在[onItemDrop](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#onitemdrop8)中完成交换数组位置的逻辑。[onItemDragStart](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#onitemdragstart8)回调在开始拖拽网格元素时触发，[onItemDrop](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#onitemdrop8)回调当在网格元素内停止拖拽时触发。```
.onItemDragStart((_, itemIndex: number) => {
  this.imageNum = this.numbers[itemIndex];
  return this.pixelMapBuilder();
})
.onItemDrop((_, itemIndex: number, insertIndex: number, isSuccess: boolean) => {
  if (!isSuccess || insertIndex >= this.numbers.length) {
    return;
  }
  this.changeIndex(itemIndex, insertIndex);
})
```
  
 #### 不同大小网格元素，长按拖拽

 #### [h2]场景描述

 在一些展示设备的场景中，会有大小不同的网格元素。当用户想改变设备排序时，可以长按设备图片（网格元素）拖拽交换排序，拖拽的过程中，也会改变排列顺序，以产生新的宫格排布。

 示意效果图如下。

 

  当前方案仅适用于页面包含一个较大网格元素的布局。

  #### [h2]开发步骤

 
Grid布局及不同大小的GridItem界面开发。```
Grid() {
  ForEach(this.numbers, (item: number) => {
    GridItem() {
      Stack({ alignContent: Alignment.TopEnd }) {
        Image(this.changeImage(item))
          .width('100%')
          .borderRadius(16)
          .objectFit(this.curBp === 'md' ? ImageFit.Fill : ImageFit.Cover)
          .draggable(false)
          .animation({ curve: Curve.Sharp, duration: 300 })
      }
    }
    .rowStart(0)
    .rowEnd(this.getRowEnd(item))
    .scale({ x: this.scaleItem === item ? 1.02 : 1, y: this.scaleItem === item ? 1.02 : 1 })
    .zIndex(this.dragItem === item ? 1 : 0)
    .translate(this.dragItem === item ? { x: this.offsetX, y: this.offsetY } : { x: 0, y: 0 })
    .hitTestBehavior(this.isDraggable(this.numbers.indexOf(item)) ? HitTestMode.Default : HitTestMode.None)
    // ...
  }, (item: number) => item.toString())
}
.width('100%')
.height('100%')
.editMode(true)
.scrollBar(BarState.Off)
.columnsTemplate('1fr 1fr')
.supportAnimation(true)
.columnsGap(12)
.rowsGap(12)
.enableScrollInteraction(true)
```
 定义网格元素移动过程中的相关计算函数，其中itemMove()方法是实现元素交换重新排序的方法。```
itemMove(index: number, newIndex: number): void {
  if (!this.isDraggable(newIndex)) {
    return;
  }
  let tmp = this.numbers.splice(index, 1);
  this.numbers.splice(newIndex, 0, tmp[0]);
  this.bigItemIndex = this.numbers.findIndex((item) => item === 0);
}

isInLeft(index: number) {
  if (index === this.bigItemIndex) {
    return index % 2 == 0;
  }
  if (this.bigItemIndex % 2 === 0) {
    if (index - this.bigItemIndex === 2 || index - this.bigItemIndex === 1) {
      return false;
    }
  } else {
    if (index - this.bigItemIndex === 1) {
      return false;
    }
  }
  if (index > this.bigItemIndex) {
    return index % 2 == 1;
  } else {
    return index % 2 == 0;
  }
}

down(index: number): void {
  if ([this.numbers.length - 1, this.numbers.length - 2].includes(index)) {
    return;
  }
  if (this.bigItemIndex - index === 1) {
    return;
  }
  if ([14, 15].includes(this.bigItemIndex) && this.bigItemIndex === index) {
    return;
  }
  this.offsetY -= this.FIX_VP_Y;
  this.dragRefOffSetY += this.FIX_VP_Y;
  if (index - 1 === this.bigItemIndex) {
    this.itemMove(index, index + 1);
  } else {
    this.itemMove(index, index + 2);
  }
}

up(index: number): void {
  if (!this.isDraggable(index - 2)) {
    return;
  }
  if (index - this.bigItemIndex === 3) {
    return;
  }
  this.offsetY += this.FIX_VP_Y;
  this.dragRefOffSetY -= this.FIX_VP_Y;
  if (this.bigItemIndex === index) {
    this.itemMove(index, index - 2);
  } else {
    if (index - 2 === this.bigItemIndex) {
      this.itemMove(index, index - 1);
    } else {
      this.itemMove(index, index - 2);
    }
  }
}

left(index: number): void {
  if (this.bigItemIndex % 2 === 0) {
    if (index - this.bigItemIndex === 2) {
      return;
    }
  }
  if (this.isInLeft(index)) {
    return;
  }
  if (!this.isDraggable(index - 1)) {
    return;
  }
  this.offsetX += this.FIX_VP_X;
  this.dragRefOffSetX -= this.FIX_VP_X;
  this.itemMove(index, index - 1)
}

right(index: number): void {
  if (this.bigItemIndex % 2 === 1) {
    if (index - this.bigItemIndex === 1) {
      return;
    }
  }
  if (!this.isInLeft(index)) {
    return;
  }
  if (!this.isDraggable(index + 1)) {
    return;
  }
  this.offsetX -= this.FIX_VP_X;
  this.dragRefOffSetX += this.FIX_VP_X;
  this.itemMove(index, index + 1)
}

isDraggable(index: number): boolean {
  return index >= 0;
}
```
 GridItem绑定组合手势：长按，拖拽。并在手势的回调函数中设置显式动画。```
.gesture(
  GestureGroup(GestureMode.Sequence,
    LongPressGesture({ repeat: true })
      .onAction(() => {
        this.getUIContext().animateTo({ curve: Curve.Friction, duration: 300 }, () => {
          this.scaleItem = item;
        })
      })
      .onActionEnd(() => {
        this.getUIContext().animateTo({ curve: Curve.Friction, duration: 300 }, () => {
          this.scaleItem = -1;
        })
      }),
    PanGesture({ fingers: 1, direction: null, distance: 0 })
      .onActionStart(() => {
        this.dragItem = item;
        this.dragRefOffSetX = 0;
        this.dragRefOffSetY = 0;
      })
      .onActionUpdate((event: GestureEvent) => {
        this.offsetX = event.offsetX - this.dragRefOffSetX;
        this.offsetY = event.offsetY - this.dragRefOffSetY;
        this.getUIContext().animateTo({ curve: curves.interpolatingSpring(0, 1, 400, 38) }, () => {
          let index = this.numbers.indexOf(this.dragItem);
          if (this.offsetY >= this.FIX_VP_Y / 2 && (this.offsetX <= 44 && this.offsetX >= -44)) {
            this.down(index);
          } else if (this.offsetY <= -this.FIX_VP_Y / 2 && (this.offsetX <= 44 && this.offsetX >= -44)) {
            this.up(index);
          } else if (this.offsetX >= this.FIX_VP_X / 2 && (this.offsetY <= 50 && this.offsetY >= -50)) {
            this.right(index);
          } else if (this.offsetX <= -this.FIX_VP_X / 2 && (this.offsetY <= 50 && this.offsetY >= -50)) {
            this.left(index);
          }
        })
      })
      .onActionEnd(() => {
        this.getUIContext().animateTo({ curve: curves.interpolatingSpring(0, 1, 400, 38) }, () => {
          this.dragItem = -1;
        })
        this.getUIContext().animateTo({ curve: curves.interpolatingSpring(14, 1, 170, 17), delay: 150 }, () => {
          this.scaleItem = -1;
        })
      })
  )
    .onCancel(() => {
      this.getUIContext().animateTo({ curve: curves.interpolatingSpring(0, 1, 400, 38) }, () => {
        this.dragItem = -1;
      })
      this.getUIContext().animateTo({ curve: curves.interpolatingSpring(14, 1, 170, 17), delay: 150 }, () => {
        this.scaleItem = -1;
      })
    })
)
```
 
 #### 两个Grid之间网格元素交换

 当场景涉及两个Grid之间的网格元素交换时，可使用[GridObjectSortComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-gridobjectsortcomponent)组件来实现。可以点击添加或者移除按钮，对网格元素进行交换。详细实现步骤请参见：[示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-gridobjectsortcomponent#示例)。开发者也可以在[GridObjectSortComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-gridobjectsortcomponent)组件的[源码](https://gitcode.com/openharmony/arkui_ace_engine/blob/master/advanced_ui_component/gridobjectsortcomponent/source/GridObjectSortComponent.ets)基础上进行相应修改，实现更加丰富的功能。

 #### 网格元素直接拖拽，不需长按

 #### [h2]场景描述

 在不需要长按拖拽的场景下，开发者可以将元素设置成直接拖拽，无需长按，即可完成元素的拖拽交换。

 示意效果图如下。

 

 #### [h2]开发步骤

 
使用Grid布局及GridItem界面开发。```
Grid() {
  ForEach(this.numbers, (item: number) => {
    GridItem() {
      Column() {
        Image($r(`app.media.space${item}`))
          .width(44)
          .height(44)
          .draggable(false)
        Image($r('app.media.space_bottom'))
          .width(16)
          .height(16)
          .draggable(false)
      }
      .width('100%')
      .height(73)
      .justifyContent(FlexAlign.Center)
      .borderRadius(10)
      .backgroundColor('#F1F3F5')
      .animation({ curve: Curve.Sharp, duration: 300 })
    }
    .scale({ x: this.scaleItem === item ? 1.05 : 1, y: this.scaleItem === item ? 1.05 : 1 })
    .zIndex(this.dragItem === item ? 1 : 0)
    .translate(this.dragItem === item ? { x: this.offsetX, y: this.offsetY } : { x: 0, y: 0 })
    // ...
  }, (item: number) => item.toString())
}
.width('100%')
.editMode(true)
.scrollBar(BarState.Off)
.columnsTemplate(this.curBp === 'md' ? '1fr 1fr 1fr 1fr 1fr' : '1fr 1fr 1fr 1fr')
.columnsGap(12)
.rowsGap(12)
.margin({ top: 5 })
```
 定义网格元素移动过程中的相关计算函数。```
itemMove(index: number, newIndex: number): void {
  if (!this.isDraggable(newIndex)) {
    return;
  }
  let tmp = this.numbers.splice(index, 1);
  this.numbers.splice(newIndex, 0, tmp[0]);
}

down(index: number): void {
  if (!this.isDraggable(index + 5)) {
    return;
  }
  this.offsetY -= this.FIX_VP_Y;
  this.dragRefOffSetY += this.FIX_VP_Y;
  this.itemMove(index, index + 5)
}

up(index: number): void {
  if (this.curBp === 'md') {
    if (!this.isDraggable(index - 5)) {
      return;
    }
    this.offsetY += this.FIX_VP_Y;
    this.dragRefOffSetY -= this.FIX_VP_Y;
    this.itemMove(index, index - 5)
  } else {
    if (!this.isDraggable(index - 4)) {
      return;
    }
    this.offsetY += this.FIX_VP_Y;
    this.dragRefOffSetY -= this.FIX_VP_Y;
    this.itemMove(index, index - 4)
  }
}

left(index: number): void {
  if (!this.isDraggable(index - 1)) {
    return;
  }
  this.offsetX += this.FIX_VP_X;
  this.dragRefOffSetX -= this.FIX_VP_X;
  this.itemMove(index, index - 1)
}

right(index: number): void {
  if (!this.isDraggable(index + 1)) {
    return;
  }
  this.offsetX -= this.FIX_VP_X;
  this.dragRefOffSetX += this.FIX_VP_X;
  this.itemMove(index, index + 1)
}

lowerRight(index: number): void {
  if (!this.isDraggable(index + 3)) {
    return;
  }
  this.offsetX -= this.FIX_VP_X;
  this.dragRefOffSetX += this.FIX_VP_X;
  this.offsetY -= this.FIX_VP_Y;
  this.dragRefOffSetY += this.FIX_VP_Y;
  this.itemMove(index, index + 3);
}

upperRight(index: number): void {
  if (!this.isDraggable(index - 3)) {
    return;
  }
  this.offsetX -= this.FIX_VP_X;
  this.dragRefOffSetX += this.FIX_VP_X;
  this.offsetY += this.FIX_VP_Y;
  this.dragRefOffSetY -= this.FIX_VP_Y;
  this.itemMove(index, index - 3);
}

lowerLeft(index: number): void {
  if (!this.isDraggable(index + 3)) {
    return;
  }
  this.offsetX += this.FIX_VP_X;
  this.dragRefOffSetX -= this.FIX_VP_X;
  this.offsetY -= this.FIX_VP_Y;
  this.dragRefOffSetY += this.FIX_VP_Y;
  this.itemMove(index, index + 3);
}

upperLeft(index: number): void {
  if (!this.isDraggable(index - 3)) {
    return;
  }
  this.offsetX += this.FIX_VP_X;
  this.dragRefOffSetX -= this.FIX_VP_X;
  this.offsetY += this.FIX_VP_Y;
  this.dragRefOffSetY -= this.FIX_VP_Y;
  this.itemMove(index, index - 3);
}

isDraggable(index: number): boolean {
  return index >= 0;
}
```
 GridItem绑定拖拽手势，并在手势的回调函数中设置显式动画。```
.gesture(
  PanGesture({ fingers: 1, direction: null, distance: 0 })
    .onActionStart(() => {
      this.dragItem = item;
      this.dragRefOffSetX = 0;
      this.dragRefOffSetY = 0;
    })
    .onActionUpdate((event: GestureEvent) => {
      this.offsetX = event.offsetX - this.dragRefOffSetX;
      this.offsetY = event.offsetY - this.dragRefOffSetY;
      this.getUIContext().animateTo({ curve: curves.interpolatingSpring(0, 1, 400, 38) }, () => {
        let index = this.numbers.indexOf(this.dragItem);
        if (this.curBp === 'md') {
          if (this.offsetX >= this.FIX_VP_X / 2 && (this.offsetY <= 50 && this.offsetY >= -50) &&
            ![4].includes(index)) {
            this.right(index);
          } else if (this.offsetX <= -this.FIX_VP_X / 2 && (this.offsetY <= 50 && this.offsetY >= -50)) {
            this.left(index);
          }
        } else {
          if (this.offsetY >= this.FIX_VP_Y / 2 && (this.offsetX <= 44 && this.offsetX >= -44) &&
            ![1, 2, 3, 4].includes(index)) {
            this.down(index);
          } else if (this.offsetY <= -this.FIX_VP_Y / 2 && (this.offsetX <= 44 && this.offsetX >= -44)) {
            this.up(index);
          } else if (this.offsetX >= this.FIX_VP_X / 2 && (this.offsetY <= 50 && this.offsetY >= -50) &&
            ![3, 4].includes(index)) {
            this.right(index);
          } else if (this.offsetX <= -this.FIX_VP_Y / 2 && (this.offsetY <= 50 && this.offsetY >= -50) &&
            ![4].includes(index)) {
            this.left(index);
          } else if (this.offsetX >= this.FIX_VP_X / 2 && this.offsetY >= this.FIX_VP_Y / 2) {
            this.lowerRight(index);
          } else if (this.offsetX >= this.FIX_VP_X / 2 && this.offsetY <= -this.FIX_VP_Y / 2) {
            this.upperRight(index);
          } else if (this.offsetX <= -this.FIX_VP_X / 2 && this.offsetY >= this.FIX_VP_Y / 2) {
            this.lowerLeft(index);
          } else if (this.offsetX <= -this.FIX_VP_X / 2 && this.offsetY <= -this.FIX_VP_Y / 2) {
            this.upperLeft(index);
          }
        }
      })
    })
    .onActionEnd(() => {
      this.getUIContext().animateTo({ curve: curves.interpolatingSpring(0, 1, 400, 38) }, () => {
        this.dragItem = -1;
      })
      this.getUIContext().animateTo({ curve: curves.interpolatingSpring(14, 1, 170, 17), delay: 150 }, () => {
        this.scaleItem = -1;
      })
    })
)
```
 
 #### 网格元素长按后，显示抖动动画

 #### [h2]场景描述

 在设备列表页面时，如果想要移除设备，在选中设备并长按后，可对网格元素进行编辑。此时，设备图片会有抖动的效果。

 示意效果图如下。

 

 #### [h2]开发步骤

 
使用Grid布局及GridItem界面开发。```
Grid() {
  ForEach(this.numbers, (item: number) => {
    GridItem() {
      Stack({ alignContent: Alignment.TopEnd }) {
        Column() {
          Image($r(`app.media.space${item}`))
            .width(44)
            .height(44)
            .draggable(false)
          Image($r('app.media.space_bottom'))
            .width(16)
            .height(16)
            .draggable(false)
        }
        .width('100%')
        .height(73)
        .justifyContent(FlexAlign.Center)
        .borderRadius(10)
        .backgroundColor('#F1F3F5')
        .animation({ curve: Curve.Sharp, duration: 300 })
        .onClick(() => {
          return;
        })

        if (this.isEdit) {
          Image($r('app.media.close'))
            .width(20)
            .height(20)
            .objectFit(ImageFit.Contain)
            .draggable(false)
            .position({
              x: this.isFoldAble && this.foldStatus === 2 ? 60 :
                this.isFoldAble && this.foldStatus === 1 ? 86 : 70,
              y: -8
            })
            .onClick(() => {
              this.getUIContext().animateTo({ duration: 300 }, () => {
                this.numbers = this.numbers.filter((element) => element !== item);
              })
            })
        }
      }
    }
    .rotate({
      z: this.rotateZ,
      angle: 1,
      centerX: '50%',
      centerY: '50%'
    })
    .width('100%')
    .zIndex(this.dragItem === item ? 1 : 0)
    .translate(this.dragItem === item ? { x: this.offsetX, y: this.offsetY } : { x: 0, y: 0 })
    // ...
  }, (item: number) => item.toString())
}
.width('100%')
.height('100%')
.editMode(true)
.clip(false)
.scrollBar(BarState.Off)
.columnsTemplate(this.curBp === 'md' ? '1fr 1fr 1fr 1fr 1fr' : '1fr 1fr 1fr 1fr')
.columnsGap(12)
.rowsGap(12)
.margin({ top: 5 })
```
 添加抖动动画。```
private jumpWithSpeed(speed: number) {
  if (this.isEdit) {
    this.rotateZ = -1;
    this.getUIContext().animateTo({
      delay: 0,
      tempo: speed,
      duration: 1000,
      curve: Curve.Smooth,
      playMode: PlayMode.Normal,
      iterations: -1
    }, () => {
      this.rotateZ = 1;
    })
  } else {
    this.stopJump();
  }
}
```
 定义stopJump()方法，执行后，能使网格元素停止抖动。```
private stopJump() {
  this.getUIContext().animateTo({
    delay: 0,
    tempo: 5,
    duration: 0,
    curve: Curve.Smooth,
    playMode: PlayMode.Normal,
    iterations: 1
  }, () => {
    this.rotateZ = 0;
  })
}
```
 GridItem绑定组合手势：长按、拖拽。并在手势的回调函数中设置显式动画。```
.gesture(
  GestureGroup(GestureMode.Sequence,
    LongPressGesture({ repeat: true })
      .onAction(() => {
        if (!this.isEdit) {
          this.isEdit = true;
          this.jumpWithSpeed(5);
        }
      }),
    PanGesture({ fingers: 1, direction: null, distance: 0 })
      .onActionStart(() => {
        this.dragItem = item;
        this.dragRefOffSetX = 0;
        this.dragRefOffSetY = 0;
      })
      .onActionUpdate((event: GestureEvent) => {
        this.offsetX = event.offsetX - this.dragRefOffSetX;
        this.offsetY = event.offsetY - this.dragRefOffSetY;
        this.getUIContext().animateTo({ curve: curves.interpolatingSpring(0, 1, 400, 38) }, () => {
          let index = this.numbers.indexOf(this.dragItem);
          if (this.curBp === 'md') {
            if (this.offsetX >= this.FIX_VP_X / 2 && (this.offsetY <= 50 && this.offsetY >= -50) &&
              ![4].includes(index)) {
              this.right(index);
              this.stopJump();
              this.jumpWithSpeed(5);
            } else if (this.offsetX <= -this.FIX_VP_X / 2 &&
              (this.offsetY <= 50 && this.offsetY >= -50)) {
              this.left(index);
              this.stopJump();
              this.jumpWithSpeed(5);
            }
          } else {
            if (this.offsetY >= this.FIX_VP_Y / 2 && (this.offsetX <= 44 && this.offsetX >= -44) &&
            [...this.downArr].includes(index)) {
              this.down(index);
              this.stopJump();
              this.jumpWithSpeed(5);
            } else if (this.offsetY <= -this.FIX_VP_Y / 2 &&
              (this.offsetX <= 44 && this.offsetX >= -44)) {
              this.up(index);
              this.stopJump();
              this.jumpWithSpeed(5);
            } else if (this.offsetX >= this.FIX_VP_X / 2 && (this.offsetY <= 50 && this.offsetY >= -50) &&
              ![...this.rightArr].includes(index)) {
              this.right(index);
              this.stopJump();
              this.jumpWithSpeed(5);
            } else if (this.offsetX <= -this.FIX_VP_Y / 2 &&
              (this.offsetY <= 50 && this.offsetY >= -50) &&
              ![...this.leftArr].includes(index)) {
              this.left(index);
              this.stopJump();
              this.jumpWithSpeed(5);
            }
          }
        })
      })
      .onActionEnd(() => {
        this.getUIContext().animateTo({ curve: curves.interpolatingSpring(0, 1, 400, 38) }, () => {
          this.dragItem = -1;
        })
      })
  )
)
```
 
 #### 示例代码

- [实现Grid网格元素拖拽交换排序能力](https://gitcode.com/harmonyos_samples/grid-drag-sort)

---
*Updated: 2026-04-10 09:38:21*
