# ohpm run

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-run`  |  **DocID**: `c39b1016e2844681881d00792064e78b`  |  **NodeID**: `0002017757901610455176c303ddc4d7`

---

# ohpm run

 执行用户自定义脚本。

 #### 命令格式

```
ohpm run [options] <script_name> [-- <args...>]
```
  #### 功能描述

指定运行定义在模块的 oh-package.json5 文件中 scripts 对象内的脚本。scripts对象内部支持"key":"value"方式配置多个待执行脚本。如以下示例所示，scriptName1、scriptName2、scriptName3为脚本别名（scriptName）；“echo hello”等为脚本内容（scriptContent），后续内容均参考此说明。

 oh-package.json5中scripts配置示例：```
{               
  "scripts": {
    "scriptName1": "echo hello",
    "scriptName2": "ohpm run scriptName1",
    // 标识符"--"后可以通过'-p'或'--p'形式指定参数key, 可以通过' '或'='连接参数值
    "scriptName3": "node test.js -- -paramKey1 paramValue1 -paramKey2=paramValue2 --paramKey3 paramValue3"
  }
}
```
  - 脚本内容中可以用ohpm run引用同一个 oh-package.json5 文件中其它脚本别名，如scriptName2；ohpm run 引用关系是一个有向无环图，不支持递归或循环引用。
- 在解析脚本内容出错时，ohpm run命令将直接提示相应错误。比如，脚本内容中引用了一个在同一oh-package.json5文件中不存在的脚本别名；或在执行ohpm run时，发现脚本别名引用关系存在环的情况。

  #### [h2]传递参数

ohpm run命令可以通过标识符“--”覆盖被引用脚本的参数或为被引用脚本传递额外的参数，如：ohpm run scriptName3 -- -paramKey1 newValue -paramKey4 paramValue4 该示例表明，脚本scriptName3的参数paramKey1会被替换为newValue, 并新增一个参数paramKey4。

 - 如果脚本内容为ohpm run scriptName且使用了标识符“--”，则该scriptName对应的脚本内容不能再包含ohpm run相关的描述，避免嵌套引用。

  #### [h2]支持多命令

支持 && 和 || 两种命令连接符 （&& 和 || 没有优先级区分，命令从左到右执行，不支持用括号来改变各个子命令的优先级），详细请参见下方[示例](#section157898418348)。

  #### [h2]约束

 
约束项

  说明

  
  scriptKey 命名约束

  合法的 scriptKey 的名字可以包含字母（包含大小写），数字，ASCII 冒号 :，ASCII下划线 _ ，ASCII链接符 -，首字母必须是小写字母

  
 scriptContent 约束

  合法的scriptContent不能引用除ohpm run以外的其它ohpm命令

  
 scriptContent 中使用 ohpm run 的约束

  1、ohpm run 依赖的其它script别名必须在同一 oh-package.json5 中存在

 2、ohpm run 引用关系是一个有向无环图，不支持递归或循环引用

  
  

   #### Options

 #### [h2]prefix

可以通过 --prefix 指定包的根目录，该目录下必须存在 oh-package.json5 文件。不支持通过这种方式调用依赖包中的脚本别名。

 ```
ohpm run --prefix <path> <脚本别名>  
```
  #### [h2]log_level

- 默认值：无
- 类型： String

 从ohpm 6.0.2.636版本开始，可以在命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。

  #### [h2]debug

- 默认值：false
- 类型： Boolean

 从ohpm 6.0.2.636版本开始，可以在命令后配置--debug参数，指定执行当前命令的日志级别为debug，该配置仅在当前命令行生效，不修改.ohpmrc中的日志级别，如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。

  #### 示例

下列所有示例的scripts配置均来自如下oh-package.json5：

 ```
{
  "name": "example",
  "version": "1.0.0",
  "description": "this is an example for ohpm run.",
  "main": "./src/index.ets",
  "author": "oh",
  "license": "ISC",
  "scripts": {
    "testLogic": "ohpm run testFail || ohpm run testSuc && ohpm run testSuc",
    "testFail": "test1",
    "testSuc": "echo hello"
  }
  ...
}
```
  #### [h2]参数传递的使用示例

ohpm run script_name -- -arg1=1 --arg2=2 -arg3 3 --arg4 4 运行 script_name 的脚本，并指定脚本中参数arg1，arg2，arg3，arg4，取值分别为1，2，3，4，以上四种参数传递的方法均可生效。

  #### [h2]成功示例

执行脚本testSuc，如下所示：

 ohpm run testSuc 执行结果：

 

  #### [h2]失败示例

执行脚本testFail，如下所示：

 ohpm run testFail 执行结果：

 

  #### [h2]逻辑符(&&、||)使用示例

执行脚本testLogic，如下所示：

 ohpm run testLogic 执行结果：

---
*Updated: 2026-04-22 01:09:20*
