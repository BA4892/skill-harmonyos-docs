# Trap

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-trap`  |  **DocID**: `756b1b7093b44372a292b147e02038a2`  |  **NodeID**: `0002017757954498008047298b235915`

---

# Trap

  #### 函数功能

当软件产生异常后，使用该指令使kernel中止运行。

   #### 函数原型

```
__aicore__ inline void Trap()
```
   #### 参数说明

无

   #### 返回值

无

   #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 注意事项

该接口在kernel需要调试时使用。

   #### 调用示例

```
AscendC::Trap();
```

---
*Updated: 2026-04-20 01:43:56*
