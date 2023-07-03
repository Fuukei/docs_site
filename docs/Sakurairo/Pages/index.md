---
title: 页面设置
---

# 页面设置 <Badge type="tip" text="更新至 2.6.2" />

## <i class="csf-tab-icon fa fa-compass"></i> 综合设置

### 页面样式

- 圆角样式


  ![圆角样式](https://s.nmxc.ltd/sakurairo_vision/@2.6/options/page_style_iro.webp)
- 直角样式
  ![直角样式](https://s.nmxc.ltd/sakurairo_vision/@2.6/options/page_style_sakura.webp)

### 页面排版样式

设置页面排版样式

- 默认样式
- Github 样式

### 页面装饰图片

特色图片将显示在：文章页面、独立页面和分类页

### 页面标题动画

开启之后页面标题将有浮入动画

### 页面标题动画时间

滑动滑块设置，推荐数值范围为 1-2

### 页面剪切板版权提示

开启之后用户在复制文字内容超过 30 字节时，会有版权提示文本

### 页面 LazyLoad

设置页面 LazyLoad 加载加载是否开启显示，开启后页面图片会有 LazyLoad 加载效果

**警告：WordPress 区块编辑器自带图像 LazyLoad，非必要不用开启；其他插件若启用 LazyLoad 可能会造成冲突，如 EWWW Image Optimizer.**

- 页面 LazyLoad 加载占位 SVG：填写 SVG 链接

- 页面图像加载占位 SVG：填写 SVG 链接

## <i class="csf-tab-icon fa fa-archive"></i> 文章页面设置

### 文章页面标题字体大小

滑动滑块设置，推荐数值范围为 28-36

### 文章页面标题下划线动画

开启且文章设置了特色图片之后，文章标题将有从左至右延伸的下划线动画

### 文章页面自动显示菜单

默认开启，文章页面会自动显示 TOC 菜单，导航文章标题（仅在浏览窗口宽度足够时显示）

### 内联代码背景色（深色模式内联代码背景色）

定义浅色 / 深色模式下段落中内联代码的背景色；代码块背景色由高亮 JS 定义（其他设置 > 低使用设置）

## 文章扩展区 

### 文章页面功能栏

关闭后图片中功能栏将在页面中隐藏

![功能栏](https://pic.aiccrop.com/origin/2023/07/64a254deabc2e.png)

### 文章知识共享协议

![版权提示](https://pic.aiccrop.com/origin/2023/07/64a23315c3245.png)

### 文章页面赞赏功能（支付宝/微信二维码）

- 文章页面赞赏按钮支付宝二维码：填写收款码 URL

- 文章页面赞赏按钮微信二维码：填写收款码 URL

### 文章页面作者头像

![作者头像](https://pic.aiccrop.com/origin/2023/07/64a23325411dd.png)

### 文章页面作者名字

![作者名字](https://pic.aiccrop.com/origin/2023/07/64a254d81353a.png)

### 文章页面作者签名

![作者签名](https://pic.aiccrop.com/origin/2023/07/64a254d18fca7.png)

### 文章最后更新时间

![更新时间](https://pic.aiccrop.com/origin/2023/07/64a24cf1a195e.png)

### 文章标签

![文章标签](https://pic.aiccrop.com/origin/2023/07/64a254ca555a7.png)

### 文章页面上下文章切换

开启之后文章页面将出现上下文章切换，位于功能区下方

## 模板页面设置

## Public Settings 

### 模板页面标题字体大小

设置模板页面标题字体大小，如模板中“时光轴 Timeline”等

## ShuoShuo Template Settings 

### 说说模板说说背景颜色 I/II

说说气泡背景色，I/II 交错显示。

### 说说模板说说提示箭头

设置说说模板说说提示箭头

### 说说模板说说字体

填写说说字体名称，接收多个字体，含空格的字体名称请加英文双引号。
<br>例如："Source Han Sans", "Noto Sans SC", sans-serif

### Number Of ShuoShuo

说说模板分页时每页显示的数量

## Bangumi Template Settings 

### 追番模板源

支持 [Bilibili](https://bilibili.com/) 和 [MyAnimeList](https://myanimelist.net/) 。

### My Anime List 配置

用户名：右上角的用户名称，也可在个人资料的 URL 找到（例如 https://myanimelist.net/profile/xxx）

顺序：略

### 哔哩哔哩追番模板

- 哔哩哔哩 UID：略
- 哔哩哔哩帐号 cookies：请求标头中的 cookies（开发者工具 > “网络”选项卡）可[查看教程](https://blog.ukenn.top/sakura5/#toc-head-3)了解如何获取帐号 cookies

添加模板页面后在 `iro 主题设置` 中的 `页面设置 > 文章页面设置 > 哔哩哔哩追番模板帐号 cookies` 中设置。

::: warning 提示：“哔哩哔哩 cookies”在 Bilibili 被选为追番模板源时不添加 cookies 可能会报错。
:::

## Friend Link Template Settings 

友情链接模板启用之后，请在 wordpress 自带的“链接”版块中添加链接。

### 友情链接模板单元对齐方向


<div style="display:block">
  <img src="https://s.nmxc.ltd/sakurairo_vision/@2.6/options/friend_link_left.webp" alt="friend_link_left" style="margin:0px 1%;display:inline-block;width:31%">
  <img src="https://s.nmxc.ltd/sakurairo_vision/@2.6/options/friend_link_right.webp" alt="friend_link_right" style="margin:0px 1%;display:inline-block;width:31%">
  <img src="https://s.nmxc.ltd/sakurairo_vision/@2.6/options/friend_link_center.webp" alt="friend_link_center" style="margin:0px 1%;display:inline-block;width:31%">
</div>


### 友情链接模板单元搭配色

友情链接头像卡片中头像图片和说明文字分隔波浪线的颜色。

### 友情链接模板单元边框阴影颜色

### Friend Link Sorting Mode
- Name：按名称排序。
- Rating：按标注星级排序。
- Updated：按链接更新时间顺序排序。
- Rand：每次生成时随机排序，若存在页面缓存插件则每次重新生成缓存时随机排序；可将模板页面列入缓存排除列表以获得每次加载随机排序。

### Ascending OR Descending

控制排序为升序 / 降序。

## Login Template Settings 

### 登录模板注册功能

开启之后登录模板将允许注册

::: warning 提示：“友情链接模板”在后台左侧“链接”添加；“时光轴”模板页面建设后自动获取内容。
:::

## 评论相关设置

### 页面评论区域显示

展开 / 收缩

### 页面评论区域搭配色

Markdown 图标颜色、Commmets 标题下划线颜色等

### 页面评论区域阴影颜色

### 页面评论区域哔哩哔哩表情包

设置页面评论区域哔哩哔哩表情包是否开启显示

### 页面评论区域右下背景图片

评论框背景图

### 页面评论区域 UA 信息

显示用户的浏览器，操作系统信息（桌面端显示图标 + 信息；手机端仅显示图标）

### 页面评论区域位置信息

调用 API 查询评论用户 IP 地理位置信息，若 API 可用性降低可能会导致页面加载时间过长。

### 私人评论功能

开启之后将允许用户设置自己的评论对其他人不可见，仅博客主可见

### 页面评论区域机器人验证

开启后评论需要勾选“我不是机器人”

### QQ 头像链接加密

- 重定向
- 后端获取头像数据
- 后端解析头像接口

### 页面评论区域上传图片接口

支持图床列表：
- Imgur
- SM. MS
- Chevereto（可自建）
- Lsky Pro（可自建）

### Imgur Client ID
### SM. MS Token
### Chevereto Key
### Lsky Pro v1 Token
以上详见图床平台支持信息。

### 评论图片代理

已弃用。

### 邮件模板特色图片

![邮件模板特色图片](https://cdn.kusu.icu/Sakurairo_Vision-2.5/series/mail_head.webp)

设置你的回复邮件上方背景图片

### 邮件模板发件地址前缀

用于发送系统邮件，在用户的邮箱中显示的发件人地址，不要使用中文，默认系统邮件地址为 bibi@你的域名

### 用户邮件回复通知

WordPress 默认会使用邮件通知用户评论收到回复，开启之后允许用户设置自己的评论收到回复时是否使用邮件通知

### 管理员邮件回复通知

开启之后当管理员评论收到回复时使用邮件通知