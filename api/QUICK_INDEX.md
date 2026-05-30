# API参考快速索引

> **版本**: API 23 (HarmonyOS 6.0) | **条目数**: 1219 | **范围**: 仅含ArkTS API（已排除C API、JS组件、已停止维护、错误码）

## 使用方法

1. 根据下方分类表，确定目标API所属分类
2. 读取对应分类的子索引文件（路径：`api/_index/分类名.md`）
3. 在子索引中查找API名称，获取文档相对路径
4. 拼接完整路径读取文档：`技能根目录/相对路径`（技能根目录 = SKILL.md 所在目录）

## 分类目录

| 分类 | 条目数 | 索引文件 |
|------|--------|----------|
| ArkUI组件 | 329 | [_index/ArkUI组件.md](_index/ArkUI组件.md) |
| ArkUI API | 72 | [_index/ArkUI_API.md](_index/ArkUI_API.md) |
| Ability Kit | 73 | [_index/Ability_Kit.md](_index/Ability_Kit.md) |
| ArkData | 25 | [_index/ArkData.md](_index/ArkData.md) |
| ArkWeb | 64 | [_index/ArkWeb.md](_index/ArkWeb.md) |
| 网络服务 | 16 | [_index/网络服务.md](_index/网络服务.md) |
| 基础服务 | 31 | [_index/基础服务.md](_index/基础服务.md) |
| 媒体服务 | 130 | [_index/媒体服务.md](_index/媒体服务.md) |
| 图形服务 | 52 | [_index/图形服务.md](_index/图形服务.md) |
| AI服务 | 20 | [_index/AI服务.md](_index/AI服务.md) |
| 安全服务 | 28 | [_index/安全服务.md](_index/安全服务.md) |
| 硬件服务 | 23 | [_index/硬件服务.md](_index/硬件服务.md) |
| 应用服务 | 159 | [_index/应用服务.md](_index/应用服务.md) |
| ArkTS语言 | 47 | [_index/ArkTS语言.md](_index/ArkTS语言.md) |
| 其他 | 156 | [_index/其他.md](_index/其他.md) |

## 快速分类判断

- **UI组件**（Text/Button/List/Image/Column/Row...）→ ArkUI组件
- **状态装饰器**（@State/@Prop/@Link/@Provide/@Consume/@Watch/@Observed/@ObjectLink...）→ ArkUI组件
- **UI框架API**（@ohos.router/@ohos.promptAction/@ohos.window/@ohos.display...）→ ArkUI API
- **@ohos.app.ability.*** / **@ohos.bundle.*** / **@ohos.abilityAccessCtrl** → Ability Kit
- **@ohos.data.*** → ArkData
- **@ohos.web.*** / Web组件 → ArkWeb
- **@ohos.net.*** → 网络服务
- **@ohos.account.*** / @ohos.pasteboard / @ohos.print / @ohos.inputMethod... → 基础服务
- **@ohos.multimedia.*** → 媒体服务
- **@ohos.graphics.*** → 图形服务
- **@arkts.*** / @ohos.util.*** / @ohos.worker... → ArkTS语言
- **@ohos.security.*** / @ohos.userIAM.*** → 安全服务
- **@ohos.sensor.*** / @ohos.vibrator... → 硬件服务
- **以上均不匹配** → 其他（兜底分类，含inputMethod/backgroundTaskManager/deviceInfo等）
