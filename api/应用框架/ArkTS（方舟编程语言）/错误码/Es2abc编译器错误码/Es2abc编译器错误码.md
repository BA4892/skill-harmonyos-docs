# Es2abc编译器错误码

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `errorcode-es2abc`

**DocID**: `1ebb5cc4174448c88b547739bb7766c5`

**NodeID**: `00020177579621619637284198cc28ff`

---

Es2abc编译器错误码

本节列出 es2abc 编译器模块的专有错误码说明。通用错误码请参考
通用错误码说明文档
。

10705000 语法错误

错误信息

示例

ERROR: 10705000 Syntax Error
SyntaxError: Concurrent function should only use import variable or local variable, 'a' is not one of them [/path/to/wrong/file.ts:9:4]

错误描述

出现语法错误，编译器无法解析源文件中的某个语法结构，通常伴随具体的文件名与位置信息（行号与列号）

可能原因

代码中存在非法或不完整的语法，例如缺失括号、拼写错误、结构嵌套不正确等；

使用了当前版本不支持的语言特性；

拼写错误导致关键字或语法结构不被识别；

排查开发环境中是否存在加密软件，加密软件可能会修改文件编码格式。

处理步骤

根据错误提示中的文件名和具体行列号，定位到出错位置；

修复语法错误，如添加缺失的括号或关键字；

使用 DevEco Studio 的语法检查工具协助发现语法错误；

若使用新语法特性，确保当前编译器版本支持该特性；

如果存在使用加密软件，请关闭加密软件后重新编译。

10706001 规格错误

错误信息

示例

ERROR: 10706001 Found unsupported change in file, failed to generate patch abc!
[Patch] Found lexical variable added or removed in .a, not supported!
[Patch] Found unsupported change in file, will not generate patch!
Error: [base_mod.js:0:0]

错误描述

编译器检测到源文件存在不符合增量编译（patch 模式）支持范围的变更，因而终止补丁生成。此类变更通常涉及作用域、变量声明、导入结构等对语义有显著影响的代码修改。

可能原因

在补丁构建流程中，修改了模块的词法变量，例如新增或删除了声明；

删除了关键函数或重新声明了已有变量；

对导入结构（import/export）或模块边界进行了破坏性修改；

文件的改动超出了 es2abc 增量补丁机制的支持范围。

处理步骤

检查错误信息中所指文件及代码变更内容；

避免对模块中定义的变量进行添加、删除、重命名等操作；

若确需进行语义变更，请选择完整编译而非增量编译。

---
*2026-04-22T15:53:58.112Z*