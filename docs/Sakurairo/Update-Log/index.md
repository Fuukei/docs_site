---
title: 更新日志
---
# 更新日志 <Badge type="tip" text="By Kanochan"/>

## 2.6.3.1

**发布日期**：[2023年11月1日](https://github.com/mirai-mamori/Sakurairo/releases/tag/2.6.3.1)

![img](https://image.kanochan.net/2023/05/15/2023051515095264f5fa4589cc8d7bf.png)

### 问题修复

* 首次安装启用时意外的报错 [#801](https://github.com/mirai-mamori/Sakurairo/issues/801)
* 说说模板文字重叠 [#799](https://github.com/mirai-mamori/Sakurairo/issues/799)
* 从公共 CDN 提供第三方库时，Typed.js不生效 [#803](https://github.com/mirai-mamori/Sakurairo/issues/803)

### 新增功能

* 没有新功能噢  φ(゜▽゜*)♪

### 优化项目

* 图片SEO优化

------

## 2.6.3

**发布日期**：[2023年10月11日](https://github.com/mirai-mamori/Sakurairo/releases/tag/2.6.3)

![img](https://image.kanochan.net/2023/05/15/2023051515095264f5fa4589cc8d7bf.png)

### 问题修复

* 上/下一篇文章区域样式错误
* 说说模板样式错误
* 评论无法获取QQ信息
* PHP Deprecated Warning [#760](https://github.com/mirai-mamori/Sakurairo/issues/760)
* 添加和WP安全插件的兼容性
* 登录页面重载时概率性导致文本框无法输入 [#773](https://github.com/mirai-mamori/Sakurairo/issues/773)
* 博客找回密码界面验证码无效 [#777](https://github.com/mirai-mamori/Sakurairo/issues/777)

### 新增功能

* 评论区添加自定义表情包功能 [（查看使用方法）](https://docs.fuukei.org/Sakurairo/Pages/#%E8%AF%84%E8%AE%BA%E7%9B%B8%E5%85%B3%E8%AE%BE%E7%BD%AE)

### 优化项目

* 设置面板选项优化
* 评论区样式优化
* 给上传图片增加时间戳
* 避免不填写vaptcha_vid&key时使用vaptcha方式验证

------

##  2.6.2

**发布日期**：[2023年6月13日](https://github.com/mirai-mamori/Sakurairo/releases/tag/2.6.2)

[![img](https://image.kanochan.net/2023/05/15/2023051515095264f5fa4589cc8d7bf.png)](https://image.kanochan.net/2023/05/15/2023051515095264f5fa4589cc8d7bf.png)

### 问题修复

- 文章内多级列表样式错误 [#729](https://github.com/mirai-mamori/Sakurairo/issues/729)
- 哔哩哔哩收藏模板报错 [#699](https://github.com/mirai-mamori/Sakurairo/issues/699)
- 哔哩哔哩收藏模板页样式错误 [#700](https://github.com/mirai-mamori/Sakurairo/issues/700)
- 404页面资源路径错误
- WordPress搜索结果为空时返回200状态码（[这是什么？](https://ivampiresp.com/2023/05/31/fix-the-issue-of-wordpress-returning-200-when-no-content)）
- 从公共 CDN 提供第三方库时typed.js加载失败 [#741](https://github.com/mirai-mamori/Sakurairo/issues/741)

### 新增功能

- 说说页面分页功能，可选每页显示说说数量

### 优化项目

- 说说模板内容套用文章正文样式，统一视觉效果
- 移除冗余设置项，细化分区
- 默认 Google Fonts API 改为由 [Tianli](https://tianli-blog.club/) 提供
- 默认 Gravatar 头像代理改为由 [WeAvatar](https://weavatar.com/) 提供

------

##  2.6.1.1

**发布日期**：[2023年5月15日](https://github.com/mirai-mamori/Sakurairo/tree/2.6.1.1)

[![img](https://image.kanochan.net/2023/05/15/2023051515095264f5fa4589cc8d7bf.png)](https://image.kanochan.net/2023/05/15/2023051515095264f5fa4589cc8d7bf.png)

### 问题修复

- 行内代码与代码块背景颜色冲突，[#722](https://github.com/mirai-mamori/Sakurairo/issues/722)
- 说说内容`<a>`标签解析异常
- 判断上/下一篇文章是否存在时未排除已设置隐藏的分类致使上/下一篇文章区域样式异常
- 文章为空时`check_title_tags()`函数执行异常（间接影响友链模板）
- 部分小组件功能缺少用途提示
- 某些情况下导航栏宽度溢出

### 新增功能

- 友情链接支持自定义排序方式（支持的排序方式：名称、评级、更新时间、随机）

------

##  2.6.1

**发布日期**：[2023年5月12日](https://github.com/mirai-mamori/Sakurairo/tree/2.6.1)

[![img](https://image.kanochan.net/2023/05/15/2023051515095264f5fa4589cc8d7bf.png)](https://image.kanochan.net/2023/05/15/2023051515095264f5fa4589cc8d7bf.png)

### 问题修复

- 友情链接页面在没有目录的情况下目录常驻显示
- 正文`<a>`链接内容溢出
- 视觉资源路径缺失
- 自定义统计数据显示格式未生效
- 已经设置隐藏的分类里的文章错误显示在了“上/下一篇文章”中
- 主题移动端菜单难以点中

### 新增功能

- 重构页面右下角小组件
- 说说支持评论并显示评论数量
- 启用新的Gravatar头像代理服务商，移除极客族Gravatar头像代理，移除Gravatar官方中国区地址
- ChatGPT 功能全局开关
- 自定义排除不需要 ChatGPT 生成摘要的文章
- 重构展开收缩功能，国际化语言支持
- 文章正文不显示被`<!--more-->`标记的内容（[这是什么？](https://codex.wordpress.org/Customizing_the_Read_More)）
- 优化后台设置面板用户体验，取消隐藏选项改用遮罩替代（[看看效果？](https://github.com/mirai-mamori/Sakurairo/pull/705)）
- 自动更新视觉资源路径
- 自定义Gravatar头像代理地址
- 自定义深/浅色模式下行内代码的背景颜色
- 自定义谷歌字体API地址