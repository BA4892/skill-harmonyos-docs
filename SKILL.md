---
name: harmonyos-docs
description: |-
  HarmonyOS 开发文档快速检索技能。当开发 ArkTS/HarmonyOS 应用时激活，
  提供API参考、开发指南、最佳实践的快速定位能力。通过分类目录+子索引
  两步检索实现高效定位，避免一次性加载大文件。
license: MIT
tags:
  - harmonyos
  - arkts
  - api-reference
  - development-guide
  - best-practices
---

# HarmonyOS 开发文档快速检索

---

## 概述

本技能包含 HarmonyOS 6.0 (API 23) 的完整开发文档，涵盖 API 参考、开发指南、最佳实践三大分区。核心设计：**分类目录 + 子索引两步检索**，AI 先读极小的分类目录确定分类，再按需读取对应子索引，避免一次性加载大文件。

---

## 技能根目录定位（重要）

本技能可能被安装在不同位置，**禁止硬编码绝对路径**。AI 应通过以下方式动态定位技能根目录：

### 方法1：通过 SKILL.md 文件定位（推荐）

AI 激活技能时，系统会加载本 SKILL.md 文件。从本文件所在目录即为技能根目录：

```
技能根目录 = SKILL.md 文件所在目录
```

### 方法2：通过特征文件定位

若方法1不可用，通过搜索特征文件组合定位：

```
包含 SKILL.md + INDEX.md + api/ + guides/ + best/ 的目录 = 技能根目录
```

### 路径拼接规则

所有索引中的路径均为**相对于技能根目录的相对路径**（如 `api/应用框架/...`、`guides/应用框架/...`、`best/性能/...`）。读取文档时：

```
完整路径 = 技能根目录 + "/" + 相对路径
```

**示例**：若技能根目录为 `/home/user/.codeartsdoer/skills/skill-harmonyos-docs`，索引中路径为 `api/应用框架/ArkUI（方舟UI框架）/ArkTS组件/按钮与选择/Button/Button.md`，则完整路径为 `/home/user/.codeartsdoer/skills/skill-harmonyos-docs/api/应用框架/ArkUI（方舟UI框架）/ArkTS组件/按钮与选择/Button/Button.md`

---

## 激活条件

当以下任一条件满足时激活本技能：
- 用户询问 HarmonyOS/OpenHarmony API 用法
- 用户提及 `@ohos.*` 包名（如 `@ohos.router`、`@ohos.hilog`）
- 用户询问 ArkUI 组件用法（如 Text、List、Navigation）
- 用户询问 ArkTS 状态管理装饰器（如 @State、@Prop、@Link）
- 用户询问 HarmonyOS 系统能力（如网络、存储、相机、位置）
- 用户询问 HarmonyOS 开发指南或最佳实践
- 当前编辑文件为 `.ets` 或 `.ts`（HarmonyOS 项目）

---

## 快速检索工作流（两步检索法）
### 快速入口法（推荐用于已知具体 API）

对于已知具体 API 名称的情况，可直接使用 api/QUICK_ENTRY.md 获取路径：

| 检索类型 | 文件 | 优势 |
|----------|------|------|
| 直接 API 路径查找 | api/QUICK_ENTRY.md | ~10KB，一次加载，关键词直接映射到路径 |
| 分类浏览 | api/QUICK_INDEX.md | 按 Kit 分组，适合探索 |
| 精确子索引 | api/_index/分类名.md | 获取完整条目列表 |

**推荐工作流**：已知具体需求 → QUICK_ENTRY.md → 直接读取文档


### 第一步：读取分类目录

根据检索类型读取对应的分类目录文件（极小，约1-2KB）：

| 检索类型 | 分类目录文件 | 大小 |
|----------|-------------|------|
| api/组件接口定义 | `api/QUICK_INDEX.md` | ~2KB |
| 开发方法/指南 | `guides/QUICK_INDEX.md` | ~2KB |
| 最佳实践 | `best/QUICK_INDEX.md` | ~3KB（分类目录，已拆分子索引） |

### 第二步：确定分类并读取子索引

根据分类目录中的"快速分类判断"规则，确定目标所属分类，然后读取对应子索引文件：

**API参考子索引**（路径：`api/_index/分类名.md`）：

| 分类 | 条目数 | 子索引大小 |
|------|--------|-----------|
| ArkUI组件 | 329 | ~44KB |
| ArkUI API | 72 | ~12KB |
| Ability Kit | 73 | ~14KB |
| ArkData | 25 | ~5KB |
| ArkWeb | 64 | ~10KB |
| 网络服务 | 16 | ~3KB |
| 基础服务 | 31 | ~6KB |
| 媒体服务 | 130 | ~23KB |
| 图形服务 | 52 | ~9KB |
| AI服务 | 20 | ~3KB |
| 安全服务 | 28 | ~6KB |
| 硬件服务 | 23 | ~5KB |
| 应用服务 | 159 | ~27KB |
| ArkTS语言 | 47 | ~8KB |
| 其他 | 156 | ~31KB |

**开发指南子索引**（路径：`guides/_index/编号.md`）：

| 分类 | 条目数 | 子索引大小 |
|------|--------|-----------|
| AI | 504 | ~98KB |
| 应用框架 | 754 | ~143KB |
| 系统 | 633 | ~121KB |
| 应用服务 | 617 | ~113KB |
| 编写与调试应用 | 372 | ~76KB |
| 媒体 | 249 | ~42KB |
| 图形 | 132 | ~29KB |
| 开发环境搭建 | 97 | ~16KB |
| 其他小分类 | <50 | <6KB |

**最佳实践子索引**（路径：`best/_index/分类名.md`）：

| 分类 | 条目数 | 子索引大小 |
|------|--------|-----------|
| 稳定性 | 53 | ~9KB |
| 性能 | 51 | ~6KB |
| 媒体 | 41 | ~6KB |
| 一次开发，多端部署 | 37 | ~6KB |
| 功耗 | 34 | ~5KB |
| 应用框架 | 29 | ~3KB |
| 布局与弹窗 | 18 | ~2KB |
| 其他分类 | <16 | <2KB |

### 第三步：在子索引中查找并读取文档

1. 在子索引文件中搜索API名称/关键词
2. 获取文档相对路径
3. 拼接完整路径：`技能根目录/相对路径`（技能根目录定位方式见上方"技能根目录定位"章节）
4. 读取目标 `.md` 文件

### 第四步：补充上下文（按需）

- 如需开发指南配合API使用，再查 `guides/QUICK_INDEX.md`
- 如需最佳实践配合，再查 `best/QUICK_INDEX.md`

---

## 常用API速查（跳过索引直接定位）

以下是开发中最常用的API，可直接使用路径读取，跳过索引查找：

| API | 路径 |
|-----|------|
| Text | api/应用框架/ArkUI（方舟UI框架）/ArkTS组件/文本与输入/Text/Text.md |
| TextInput | api/应用框架/ArkUI（方舟UI框架）/ArkTS组件/文本与输入/TextInput/TextInput.md |
| Button | api/应用框架/ArkUI（方舟UI框架）/ArkTS组件/按钮与选择/Button/Button.md |
| List | api/应用框架/ArkUI（方舟UI框架）/ArkTS组件/滚动与滑动/List/List.md |
| Navigation | api/应用框架/ArkUI（方舟UI框架）/ArkTS组件/导航与切换/Navigation/Navigation.md |
| Column | api/应用框架/ArkUI（方舟UI框架）/ArkTS组件/行列与堆叠/Column/Column.md |
| Row | api/应用框架/ArkUI（方舟UI框架）/ArkTS组件/行列与堆叠/Row/Row.md |
| Stack | api/应用框架/ArkUI（方舟UI框架）/ArkTS组件/行列与堆叠/Stack/Stack.md |
| Image | api/应用框架/ArkUI（方舟UI框架）/ArkTS组件/图片与视频/Image/Image.md |
| Scroll | api/应用框架/ArkUI（方舟UI框架）/ArkTS组件/滚动与滑动/Scroll/Scroll.md |
| Tabs | api/应用框架/ArkUI（方舟UI框架）/ArkTS组件/导航与切换/Tabs/Tabs.md |
| @ohos.router | api/应用框架/ArkUI（方舟UI框架）/ArkTS api/UI界面/@ohos.router (页面路由)(不推荐)/@ohos.router (页面路由)(不推荐).md |
| @ohos.hilog | api/系统/调测调优/Performance Analysis Kit（性能分析服务）/ArkTS api/@ohos.hilog (HiLog日志打印)/@ohos.hilog (HiLog日志打印).md |
| @ohos.data.preferences | api/应用框架/ArkData（方舟数据管理）/ArkTS api/用户首选项/@ohos.data.preferences (用户首选项)/@ohos.data.preferences (用户首选项).md |
| @ohos.net.http | api/系统/网络/Network Kit（网络服务）/ArkTS API/@ohos.net.http (数据请求)/@ohos.net.http (数据请求).md |
| @ohos.file.fs | api/应用框架/Core File Kit（文件基础服务）/ArkTS api/@ohos.file.fs (文件管理)/@ohos.file.fs (文件管理).md |
| @ohos.arkui.UIContext | api/应用框架/ArkUI（方舟UI框架）/ArkTS api/UI界面/@ohos.arkui.UIContext (UIContext)/模块描述/模块描述.md |
| @State | guides/应用框架/ArkUI（方舟UI框架）/UI开发 (ArkTS声明式开发范式)/学习UI范式状态管理/状态管理（V1）/管理组件拥有的状态/@State装饰器：组件内状态/@State装饰器：组件内状态.md |
| @Prop | guides/应用框架/ArkUI（方舟UI框架）/UI开发 (ArkTS声明式开发范式)/学习UI范式状态管理/状态管理（V1）/管理组件拥有的状态/@Prop装饰器：父子单向同步/@Prop装饰器：父子单向同步.md |
| @Link | guides/应用框架/ArkUI（方舟UI框架）/UI开发 (ArkTS声明式开发范式)/学习UI范式状态管理/状态管理（V1）/管理组件拥有的状态/@Link装饰器：父子双向同步/@Link装饰器：父子双向同步.md |

---

## 目录结构

```
skill-harmonyos-docs/
├── INDEX.md                    # 总索引入口
├── SKILL.md                    # 本文件（技能定义）
├── api/                        # API参考
│   ├── QUICK_INDEX.md          # 分类目录（极小，~2KB）
│   ├── _index/                 # 分类子索引
│   │   ├── ArkUI组件.md        # ArkUI组件索引
│   │   ├── ArkUI_API.md        # ArkUI API索引
│   │   └── ...                 # 其他分类
│   ├── index.md                # 层级导航入口（备选）
│   └── ...                     # 按Kit/模块分层的原始文档
├── guides/                     # 开发指南
│   ├── QUICK_INDEX.md          # 分类目录（极小，~2KB）
│   ├── _index/                 # 分类子索引
│   │   ├── 01.md ~ 19.md      # 按编号的分类子索引
│   │   └── ...
│   ├── index.md                # 层级导航入口（备选）
│   └── ...                     # 按功能分层的原始文档
├── best/                       # 最佳实践
│   ├── QUICK_INDEX.md          # 分类目录（~3KB，已拆分子索引）
│   ├── _index/                 # 分类子索引
│   │   ├── 性能.md             # 性能优化索引
│   │   ├── 稳定性.md           # 稳定性索引
│   │   └── ...                 # 其他分类
│   ├── index.md                # 层级导航入口（备选）
│   └── ...                     # 按场景分层的原始文档
└── releases/                   # 版本发布说明
    └── 版本说明/               # 按版本分层
        └── HarmonyOS 6.1.0(23)/ # API 23 版本
            ├── OS新增和增强特性.md
            ├── OS平台行为变更说明/
            └── API变更清单/     # 按Kit分组的API变更
```

---

## 性能对比

| 操作 | 优化前（层级导航） | 优化后（两步检索） |
|------|-------------------|-------------------|
| 定位 Text 组件 | 读取6个index.md (~3000 tokens) | 读分类目录(~100 tokens) + 读ArkUI组件子索引(~22K tokens) |
| 定位 @ohos.net.http | 读取7个index.md (~4000 tokens) | 读分类目录(~100 tokens) + 读网络服务子索引(~1.5K tokens) |
| 定位 @ohos.hilog | 读取7个index.md (~4000 tokens) | 直接从常用API速查定位(~0 tokens) |

---

## 版本信息

- **API级别**: API 23 (HarmonyOS 6.0)
- **文档总数**: 17170（guides 9424 + api 6904 + best 750 + releases 92）
- **有效文档**: 17159（内容率 99.94%）
- **总内容量**: ~172 MB（api 95.0MB + guides 61.2MB + best 13.2MB + releases ~2.5MB）
- **空文档**: 11（华为服务器已删除，无法恢复）
- **ArkTS API数**: 1219（已排除C api/JS组件/已停止维护/错误码）
- **生成时间**: 2026-04-24
- **最后刷新**: 2026-04-25（全量内容刷新 + 新增 releases 分区：含API变更清单、版本发布说明等92个文档）
