# FG_Mat4x4

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `_f_g___mat4x4`

**DocID**: `cbd7a0755e68420f9693b81e71a88b90`

**NodeID**: `000201775795874920312c3404f3e7dd`

---

FG_Mat4x4

概述

此结构体描述列主序4x4矩阵。

起始版本：
 5.0.0(12)

相关模块：

GraphicsAccelerate

汇总

[h2]成员变量

名称

描述

float 
data
 [16U]

4x4列主序矩阵元素值组成的一维数组：

 | a11 a12 a13 a14 |
A = | a21 a22 a23 a24 |
 | a31 a32 a33 a34 |
 | a41 a42 a43 a44 |
data[16] = {a11, a21, a31, a41, a12, a22, a32, a42, a13, a23, a33, a43, a14, a24, a34, a44}

结构体成员变量说明

[h2]data

float FG_Mat4x4::data[16U]

描述

4x4列主序矩阵元素值组成的一维数组：

 | a11 a12 a13 a14 |
A = | a21 a22 a23 a24 |
 | a31 a32 a33 a34 |
 | a41 a42 a43 a44 |
data[16] = {a11, a21, a31, a41, a12, a22, a32, a42, a13, a23, a33, a43, a14, a24, a34, a44}

---
*2026-04-22T15:55:03.994Z*