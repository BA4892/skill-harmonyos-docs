# 代码检查工具（codelinter）

> **分区**: Guides  |  **Slug**: `ide-command-line-codelinter`  |  **DocID**: `b102ee7b1f964bd28e93361380cdc98c`

---

# 代码检查工具（codelinter）

 codelinter同时支持使用命令行执行代码检查与修复，可将codelinter工具集成到门禁或持续集成环境中。

 codelinter命令行格式为：

 codelinter [options] [dir]  options：可选配置，请参考[表1](#table25697717185)。

 dir：待检查的工程根目录；为可选参数，如不指定，默认为当前上下文目录。

  **表1 **codelinter命令行配置指令

  说明

    --config/-c *<filepath>*

  指定执行codelinter检查的规则配置文件，*<filepath>*指定执行检查的规则配置文件位置。

   --fix

  设置codelinter检查同时执行QuickFix。

   --format/-f

  设置检查结果的输出格式。目前支持default/json/xml/html四种格式；不指定时，默认是default格式（文本格式）。

   --output/-o *<filepath>*

  指定检查结果保存位置，且命令行窗口不展示检查结果。*<filepath>*指定存放代码检查结果的文件路径，支持使用相对/绝对路径。不使用--output指令时，检查结果默认会显示在命令行窗口中。

   --version/-v

  查看codelinter版本。

   --product/-p *<productName>*

  指定当前生效的product。 <productName> 为生效的product名称。

   --incremental/-i

  对Git工程中的增量文件（包含新增/修改/重命名的文件）执行Code Linter检查。

   --help/-h

  查询codelinter命令行帮助。

   --exit-on/-e <levels>

  指定哪些告警级别需要返回非零退出码，告警级别包括：error、warn和suggestion。若需要指定多个告警级别，级别间需要用英文逗号分开。

 退出码的计算方式为：用一个3位的二进制数从高到低分别表示error、warn、suggestion告警级别。若在命令行中配置告警级别，并且代码检查结果中也包含该告警级别，则该二进制值为1，否则均为0。将二进制数转换为十进制数，则是退出码。

 例如：

 
- 命令配置为--exit-on error，代码检查结果包括error、warn、suggestion三类告警，则退出码的二进制数为100，十进制数为4。
- 命令配置为--exit-on error，代码检查结果包括warn、suggestion两类告警，则退出码的二进制数为000，十进制数为0。

      
进行codelinter代码检查与修复。若您的工程存在多个product，请使用--product/-p指令，指定生效的product和执行检查的工程根目录。

在工程根目录下使用命令行工具：
直接执行** codelinter **指令。此时根据默认codelinter检查规则，对该工程中的TS/ArkTS文件进行代码检查。默认的规则清单可在检查完成后，根据命令行提示，查看相应位置的code-linter.json5文件。codelinter // 进行codelinter检查 

 执行如下命令，指定codelinter检查所使用的code-linter.json5规则配置文件，并进行代码检查。codelinter -c *filepath* // 指定执行检查的规则配置文件位置 

 执行如下命令，对指定工程将根据指定的规则配置文件执行codelinter检查，并对部分支持修复的告警信息进行自动修复。*codelinter -c filepath* --fix // 对工程中的告警进行修复 

 
 在非工程根目录下使用命令行工具：
执行如下命令，指定需要进行检查的工程目录或文件路径。此时根据默认codelinter检查规则，对该工程中的TS/ArkTS文件进行代码检查。默认的规则清单可在检查完成后，根据命令行提示，查看相应位置的code-linter.json5文件。codelinter dir [filepath] [dir1] // 指定执行检查的工程目录或文件路径。支持同时配置多个文件/文件夹路径。 filepath为待检查的文件所在位置，dir、dir1指定待检查的工程目录 

 - 在指定的工程目录下，根据指定的codelinter规则配置文件进行代码检查。codelinter -c *filepath* dir // filepath为指定的规则配置文件所在位置，dir指定执行检查的工程根目录 
执行如下命令，对指定工程重新执行codelinter检查，并对部分支持修复的告警进行自动修复。```
*codelinter -c filepath dir* --fix // 对指定工程中的告警进行修复。支持配置同时多个工程路径
```
 

 
 
  

如需指定检查结果输出格式（以json格式为例），执行如下指令。检查结果将在命令行窗口展示。

codelinter [dir] -f json  //[dir]为待检查的工程根目录              

 

执行如下指令，指定代码检查输出格式及结果保存位置。此时将不在命令行窗口中打印检查结果，可在指定的文件存放路径下查看。

codelinter [dir] -f json -o *filepath*2     // [dir]为待检查的工程根目录，*filepath*2为指定存放代码检查结果的文件路径

---
*Updated: 2026-04-24 01:29:01*
