# 算子json配置模板获取

> **分区**: 指南  |  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  |  **Slug**: `cannkit-obtaining-the-json-configuration`  |  **DocID**: `4840899ddaad4baaab4fdb2d3a5d7ada`  |  **NodeID**: `000201775795449800474202de9935e1`

---

# 算子json配置模板获取

  #### 标准自定义算子工程场景

本场景一般通过工具一键生成对应的算子json配置模板，命令行示例如下。

 ascendebug json convert --binary-op-json ${custom_code_path}/build_out/op_kernel/binary/${chip_version}/gen/${op_type}_${hash}_param.json --converted-json ${op_config_json_file} 
--binary-op-json：指标准自定义算子工程中的算子信息库json文件。其中${custom_code_path} 表示标准自定义算子工程代码根目录，${chip_version}表示芯片类型，${op_type}表示算子名，${hash}表示根据算子定义生成的hash值。

  --converted-json：指生成的算子信息json配置模板。

  
 该算子json配置模板默认采用**固定输入/输出顺序**格式，具体格式和参数的介绍请参见[固定输入/输出顺序的算子json配置](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-json-configuration)。

---
*Updated: 2026-04-20 01:43:46*
