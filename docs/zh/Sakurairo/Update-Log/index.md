---
title: 更新日志
---
# 更新日志 <Badge type="tip" text="By Kanochan, AstroNomen, nicocat"/>  

## 3.0.2  

**发布日期**：[2025年4月24日](https://github.com/mirai-mamori/Sakurairo/releases/tag/3.0.2)  

![img](https://s.nmxc.ltd/sakurairo_vision/@3.0/readme/banner-cn.webp)

### 问题修复  

* 修复文章列表传递最新文章封面的问题
* 修复导航岛未开启随机封面切换按钮时报错的问题（不影响浏览）
* 修复默认代码区块样式没有深色模式适配的问题
* 修复了ul、ol元素显示的问题
* 修复移动端搜索框不跟随设置项设置的问题
* 修复了分页元素错位的问题
* 解决当主页选择不显示任何主题组件会报错的问题
* 理论上修复了模版页same-origin限制的问题

### 优化项目  

* 重构了归档页模版
* github仓库卡片现在适配了深色模式

## 3.0.1  

**发布日期**：[2025年4月16日](https://github.com/mirai-mamori/Sakurairo/releases/tag/3.0.1)  

![img](https://s.nmxc.ltd/sakurairo_vision/@3.0/readme/banner-cn.webp)

### 新增功能

* 新的导航栏样式——“导航岛”
* 接入了WordPress Customizer可视化主题编辑器
* 添加了友链状态管理
* 添加了友链自助申请功能
* 添加文章注释功能
* 添加Steam库模版
* 添加steam状态卡片
* 搜索页允许搜索文章、页面、说说，允许排除搜索结果，允许在结果中置顶“置顶文章”
* 追番来源支持bangumi
* 新的主题内建随机图API，支持在线Webp图片优化，自动按长宽分拣，支持子目录管理
* 支持使用服务器代理获取仓库卡片
* 首页支持显示静态页面
* 添加bilibili外链播放器短代码`[vbilibili]BV号[/vbilibili]`

### 问题修复

* 修复了搜索功能异常的问题
* 修复首次安装启用主题时首页白屏的问题
* 当文章标题过多时目录可以滚动而不是直接截断
* 修复了深色模式下封面图片的对比度问题，现在封面图片亮度将会跟随深色模式下图像亮度的全局设置
* 修复首页说说开关的问题
* 修复子主题创建问题
* 提升了主题高版本兼容性
* 修复了时光轴在合并不同年份同一月份时的问题
* 修复切换上下篇，密码保护的文章在没输入密码之前就能看到文章内的图片的问题
* 修复了粒子特效在深色模式下图层问题导致不可见的问题

### 优化项目

* 极大地压缩了整体体积，废弃了大量无用函数、样式
* 基本重构了移动端导航栏
* 评论区部分重构，极大地改进了视觉和功能效果
* 重构了页脚
* 重构了404页
* 重构了后台管理界面美化功能
* 重构了注册页和登录页
* 添加样式压缩优化
* 优化主题色取色功能
* 优化了社交区域设置和显示，可以无限添加并且循环显示
* 添加自定义表情会显示日志，方便排除错误
* 优化内置PHP日志屏蔽功能，默认屏蔽不影响使用的信息渲染到前端
* 优化了票券风格的显示
* 优化了页内跳转行为
* 优化了大量区域鼠标的显示图标，更符合直觉
* 每页显示文章数量改为由 WordPress 设置决定
* 优化引用区块的显示样式
* 在使用"上下页"分页模式时, 添加页码
* 管理员在评论区的等级强制显示为lv6，更有排面
* 优化了展示区的第二种样式
* 灯箱效果不用再反复开关来切换了
* 展示区现在可以自由加减显示数量了
* 优化github仓库短代码的使用方式，支持“用户名/仓库名”或链接
* 根据登录用户个人偏好语言的设置自动切换站点语言
* 升级了主题内建验证码
* 优化了二级菜单的行为
* 优化了一些设置项说明
* 增加了主题安装目录检查，简化了安装步骤
* 优化了部分权限判断
* 优化了目录的显示表现
* 设置项图片选项现在也采用自定义前端资源路径
* 废弃了未说明的download和ip显示短代码
* 优化了部分滤镜表现

## 2.7.2

**发布日期**：[2024年11月3日](https://github.com/mirai-mamori/Sakurairo/releases/tag/2.7.2)  

![img](https://p.sda1.dev/19/8fb19c945f83abb12cdeecceeb5413ce/image.png)

### 新增功能

* 增加自定义歌单的功能，用户可以使用自定义MetingAPI或者直接指定歌单文件

### 问题修复

* 修复了站内搜索引擎

### 优化项目

* 增强对Alpine Linux的兼容性

## 2.7.1.1

**发布日期**：[2024年10月20日](https://github.com/mirai-mamori/Sakurairo/releases/tag/2.7.1.1)

![img](https://p.sda1.dev/19/8fb19c945f83abb12cdeecceeb5413ce/image.png)


### 问题修复

* 主页文章卡片重复排列

------

## 2.7.1

**发布日期**：[2024年10月20日](https://github.com/mirai-mamori/Sakurairo/releases/tag/2.7.1)

![img](https://p.sda1.dev/19/8fb19c945f83abb12cdeecceeb5413ce/image.png)

### 新增功能

* 说说可以在区块编辑器里更改心情表达
* 单篇文章的分享协议，可以在文章区块编辑器里单独更改
* 单篇文章标题的 CSS 样式可以在区块编辑器里单独指定
* 重构复制提示版权功能
### 问题修复

* 文章协议与页面剪切板版权提示方面不一致 [#934](https://github.com/mirai-mamori/Sakurairo/issues/934)
* 置顶文章并没有被置顶的错误 [#936](https://github.com/mirai-mamori/Sakurairo/issues/936)
* 封面波浪特效不能正常显示 [#942](https://github.com/mirai-mamori/Sakurairo/issues/942)
* 首页的文章展示区图片下方文字处被遮挡 [#942](https://github.com/mirai-mamori/Sakurairo/issues/942)
* 修复 bilibili 追番模板请求

### 优化项目

* 头像不再添加 lazyload
* 去除文章页背景的白边
* 列表第一项不再默认加载

------

## 2.7.0

**发布日期**：[2024年10月13日](https://github.com/mirai-mamori/Sakurairo/releases/tag/2.7.0)

![img](https://p.sda1.dev/19/8fb19c945f83abb12cdeecceeb5413ce/image.png)

### 新增功能

* 全新设计主页文章区域展示样式
* 全新社交网络图标
* 全新的说说与心情标签功能
* 作者页视觉更新
* AI 功能增加自我测试，且支持更换模型
* 重构文章版权功能，支持自定义 CC 协议
* 支持自定义文章 meta 数据

### 问题修复

* 修复大量 bug，并生产了一点新的 bug

### 优化项目

* 优化主题流畅度，提高稳定性

------

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