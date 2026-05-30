# Node-API常见问题

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `use-napi-faqs`  |  **DocID**: `3b996b76445045c6a5cf058589cdc794`  |  **NodeID**: `00020177579546012332809f389e409c`

---

# Node-API常见问题

  #### 稳定性

- [应用运行过程中出现高概率闪退，出现cppcrash栈，栈顶为系统库libark_jsruntime.so，崩溃栈前几帧也有libace_napi.z.so，怎么进行定位解决](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-stability#应用运行过程中出现高概率闪退怎么进行定位解决)
- [c++线程池中并发调用ArkTS方法（c++多线程调用ArkTS方法），如何处理线程安全问题？](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-stability#线程池中并发调用arkts方法如何处理线程安全问题)
- [napi_value非预期，napi_value创建时类型是napi_function，保存一段时间后napi_value类型发生变化](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-stability#napi_value内容产生变化)
- [是否存在获取最新napi_env的方法？](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-stability#是否存在获取最新napi_env的方法)
- [napi_add_env_cleanup_hook/napi_remove_env_cleanup_hook调用报错，该如何处理？](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-stability#napi_add_env_cleanup_hook调用报错该如何处理)

   #### 内存泄漏

- [napi_create_reference可以创建对js对象的引用，保持js对象不释放，正常来说使用完需要使用napi_delete_reference进行释放，但怕漏delete导致js对象内存泄漏，当前是否有机制来检查/测试是否有泄漏的napi_reference？](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-memory-leak#当前是否有机制来检查是否有泄漏的napi_ref)
- [Node-API开发过程中，遇见内存泄漏问题，要怎么定位解决？](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-memory-leak#napi开发过程中遇见内存泄漏问题要怎么定位解决)
- [参数泄漏问题参考napi_open_handle_scope、napi_close_handle_scope](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-life-cycle)
- [napi_threadsafe_function内存泄漏，应该如何处理？](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-memory-leak#napi_threadsafe_function内存泄漏应该如何处理)

   #### 常见基本功能问题

- [模块加载失败，Error message: is not callable NativeModule调用报错？](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic)
- [是否有保序的线程通信推荐写法？](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic#在大量需要调用arkts方法进行通信的场景中如何保证异步任务的有序性)
- [是否存在便捷的NAPI回调ArkTS的方式？](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic#是否存在便捷的回调arkts的方式)
- [如何在C++调用从ArkTS传递过来的function？](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ndk-26)
- [如何在遵循 Node-API 单一返回值约束的前提下，安全、高效地将多个返回值（包括结构化数据和指针信息）传递给 ArkTS 运行时环境，并确保数据类型的正确映射与内存管理的安全性？](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic#如何确保数据类型的正确映射与内存管理的安全性)
- [Node-API调用三方so](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-dynamic-link-library)
- [napi_get_uv_event_loop接口错误码说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic#napi_get_uv_event_loop接口错误码说明)
- [Node-API中，native层调用ArkTS层对象方法，必须传入一个function给native层吗？](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic#native层调用arkts层对象方法必须传入一个function给native层吗)
- [在c++通过pthread或std::thread创建的线程，是否能调用ArkTS的方法并获取到结果？](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic#是否能调用arkts的方法并获取到结果)
- [当前napi的napi_get_value_string_utf8每次调用的时候都要进行拷贝，是否有nocopy、不拷贝的napi_get_value_string_utf8接口或者能力？ ](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic#是否有不拷贝的napi_get_value_string_utf8接口或者能力)
- [多线程下napi_env的使用注意事项是什么？是否存在napi_env切换导致的异常问题？是否必须在主线程?](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic#多线程下napi_env的使用注意事项)
- [napi_call_threadsafe_function执行顺序是怎样的？](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic#napi_call_threadsafe_function执行顺序不符合预期)
- [ArkTS侧import xxx from libxxx.so后，使用xxx报错显示undefined/not callable或明确的Error message](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic#arkts侧报错显示undefined)
- [接口执行结果非预期，日志显示occur exception need return](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic#接口执行结果非预期)
- [napi_value和napi_ref的生命周期有何区别](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic#napi_value和napi_ref的生命周期有何区别)
- [Node-API接口返回值不是napi_ok时，如何排查定位](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic#node-api接口返回值不是napi_ok时如何排查定位)
- [napi_wrap如何保证被wrap的对象按期望顺序析构？](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic#napi_wrap如何保证被wrap的对象按期望顺序析构)
- [napi_call_threadsafe_function回调任务不执行](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic#napi_call_threadsafe_function回调任务不执行)

---
*Updated: 2026-04-20 01:44:21*
