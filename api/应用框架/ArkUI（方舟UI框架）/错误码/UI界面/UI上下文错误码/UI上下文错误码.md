# UI上下文错误码

> **分区**: API参考  |  **Slug**: `errorcode-uicontext`  |  **DocID**: `88e8e062534d492c852b56e31cb21a6e`

---

# UI上下文错误码

                        以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

                       #### 190001 无效的UIContext对象

     **错误信息**

     The uiContext is invalid.

     **错误描述**

     无效的UIContext对象。

     **可能原因**

     传入的UIContext对象无效。

     **处理步骤**

     传入有效的UIContext对象。

                  #### 190002 无效的回调函数

     **错误信息**

     The callback function is invalid.

     **错误描述**

     无效的回调函数。

     **可能原因**

     传入的回调函数类型错误。

     **处理步骤**

     传入正确类型的回调函数。

                  #### 100101 小于0的非法值

     **错误信息**

     The parameter value cannot be less than 0.

     **错误描述**

     参数不能小于0。

     **可能原因**

     开发者传入了小于0的非法值。

     **处理步骤**

     传入正常范围的参数。

                  #### 100102 参数类型错误

     **错误信息**

     The parameter value cannot be a floating-point number.

     **错误描述**

     参数不能为浮点数。

     **可能原因**

     开发者传入了浮点数。

     **处理步骤**

     传入整数。

                  #### 100103 调用线程错误

     **错误信息**

     The function cannot be called from a non-main thread.

     **错误描述**

     不能在非主线程中调用该函数。

     **可能原因**

     开发者在非主线程中调用了该函数。

     **处理步骤**

     在主线程中调用该函数。

---
*Updated: 2026-04-22 06:44:46*
