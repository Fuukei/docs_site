---
title: 主页设置
---
# 主页设置 <Badge type="tip" text="v3.0" />

## 封面设置

### 封面开关

设置封面是否开启显示

> 如果关闭，这个 封面设置 版块的设置都不会有效(默认开启)

- 关闭状态则直接显示展示区域/文章：![](/homepage/cover_close.png)

- 开启状态则会同时展示封面区域/展示区域/文章区域：![](/homepage/cover_enable.png)

### 封面全屏显示

设置封面是否封面全屏显示(默认开启)

> 如果关闭主页封面将不会全屏显示

- 全屏显示关闭状态
![](/homepage/fulls_close.png)

- 全屏显示开启状态
![](/homepage/fulls_on.png)  

### 封面弧形遮挡  

![](/homepage/curve.png)  

### 封面动画

封面动画时间
设置封面动画时间

- 开启封面动画
![](/homepage/anime_on.gif)

- 关闭封面动画
![](/homepage/anime_off.gif)

> 滑动滑块设置，推荐数值范围为 1-2

### 封面信息栏

设置封面是否开启显示封面信息栏(默认开启)

> 如果关闭主页封面`头像、白猫特效文字、签名栏、社交区域`将不会显示(就只会显示封面)
![](/homepage/cover_off.png)

### 封面信息栏样式

设置封面信息栏样式

- 分离

![](https://s.nmxc.ltd/sakurairo_vision/@3.0/options/nav_menu_style_Island.webp)

- 合并

![](https://s.nmxc.ltd/sakurairo_vision/@3.0/options/infor_bar_style_v2.webp)


### 封面部件透明度

设置封面信息栏底色透明度

### 封面信息栏头像圆角

设置封面信息栏头像圆角

> 滑动滑块设置，推荐数值为 100

- 修改为0时
![](/homepage/avatar0.png)

- 修改为100时
![](/homepage/avatar100.png)

### 封面签名栏文本

设置封面签名栏文本

![](/homepage/signature.png)

### 封面签名栏文本字体

设置封面签名栏文本字体

> 填写字体名称。例如：Ma Shan Zheng

### 封面签名栏文本字体大小

设置封面签名栏文本字体大小

> 滑动滑块设置，推荐数值范围为 15-18

### 封面签名栏打字特效

本主题自带封面签名栏打字特效，可以整点花梨细姑的

![](/homepage/typedjs.gif)

- 封面签名栏打字特效双引号：开启之后打字特效首尾两边将追加双引号

- 封面签名栏打字特效占位符，设置后，在没开始 打字特效 的时候，就会显示这个

- typed.js 初始化选项，在这里，进行 typed.js 打字特效的相关参数设置（不会就默认的，去改里面的字就行）

### 封面说说栏
开启之后最新发布的说说将和签名栏循环显示

## 随机图设置

本主题默认采用外部随机图 API，需要本地随机库图片，请更换为 `内建API`。
相关使用说明、帮助请参考 [主题内建随机图API](/Sakurairo/Gallery/)。

- 外部随机图：填写随机图地址。
  - 如使用外部 API 您可以选择一下几种
    - [搏天 api](https://api.btstu.cn/doc/sjbz.php)
    - [墨天逸](https://api.mtyqx.cn/)
    - [黑子 API](https://api.kuroko.cn/rand/ecy-img/pc.php)

- 封面随机图片多终端分离：开启后桌面端和移动端会分别使用不同的随机图 API 地址

- 外部 API 手机端随机图片地址：填写随机图地址。
  - 如使用外部 API 您可以选择一下几种
    - [搏天 api](https://api.btstu.cn/doc/sjbz.php)
    - [墨天逸](https://api.mtyqx.cn/)
    - [黑子 API](https://api.kuroko.cn/rand/ecy-img/pe.php)

### 封面随机背景图片缓存

设置封面随机背景图片缓存，默认开启，此功能会在本地缓存一份封面图片，可提升进入主页后第一张封面的加载速度。

::: warning
此功能需要封面 API 能接受跨域请求。
:::

### 封面与前台背景一体化

设置封面与前台背景一体化

开启之后，封面的背景将设置为透明，同时前台背景将使用封面的随机图 API

### 文章特色图背景  

开启后在设置了特色图的页面会使用其特色图作为背景，如果中途未使用小部件切换背景，回到主页后会自动恢复。

### 封面随机图片滤镜
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz37.png)无（默认）
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz38.png)浅色
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz39.png)暗淡
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz40.png)网格
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz41.png)点点

### 封面波浪特效

本主题自带波浪特效，默认关闭

![](https://s.nmxc.ltd/sakurairo_wiki/help/sz42.png)

::: warning
深色模式默认强制隐藏。
:::

### 封面下拉箭头

本主题自带首页下拉按钮

![](/homepage/pull_down.png)

### 封面下拉箭头移动端显示

设置封面下拉箭头移动端是否显示

> 开启之后移动端首页封面底部将出现下拉箭头

### 封面下拉箭头颜色

设置封面下拉按钮颜色

> 建议使用浅色系颜色

### 封面下拉箭头深色模式颜色

设置封面下拉按钮深色模式颜色

> 建议使用深色系颜色

## 封面视频设置

设置封面视频是否开启显示

- 封面视频循环：开启之后视频将自动循环，需要开启 Pjax 功能

- 封面视频自动恢复：开启之后返回首页时视频将恢复播放，需要开启Pjax功能

- 封面视频URL根路径：只填写地址，该地址拼接下面的视频名，地址尾部不需要加斜杠，如果视频在站点根目录则填写`./`

- 封面视频文件名称：例如：abc.mp4，只需要填写视频文件名 abc 即可，多个用英文逗号隔开如 abc,efg，默认随机播放

::: warning
在 2.2.1.1 版本及以后，封面视频地址需要包含结尾的"/"，封面视频名称也需要包含后缀".mp4"
:::

:::
封面视频不会自动播放，应用成功后会在封面右下角显示播放按钮
:::

## 封面社交区域设置

### 选项

#### 封面社交区域

设置封面社交区域是否开启显示

> 开启显示封面随机图片切换按钮和社交网络图标

#### 社交网络图标

社交网络的图标风格

![](/homepage/icons.png)

提供 3 组全局定制图标，每一组都充满个性。

#### 封面社交区域圆角

设置封面社交区域圆角（就是辣个圆角啊）

> 滑动滑块设置，推荐数值范围为 10-20

- 设置为0时

![](/homepage/icons0.png)

- 设置为30时

![](/homepage/icons30.png)

#### 封面随机图片切换按钮

设置封面随机图片切换按钮是否开启显示

> 开启显示显示封面随机图切换按钮

### 社交网络

>url获取教程：🪧  
bilibili、网易云、github等：  
登录网站，访问自己的个人主页，直接复制浏览器的url
>>抖音：可以使用网页版在“未登录”的情况下搜索自己发过的作品，或者评论过的视频，  
从自己的头像可以点进自己的网页版空间，然后复制url即可  
跟b站不同，登录后复制的是self链接，分享出去的是打不开的！  
>
>>QQ好友链接等：通过相应的软件获取链接或生成二维码后获取链接  
>>>如何从二维码获取链接？  
使用可以解析二维码的应用获取二维码对应的链接  
比如QQ的加好友二维码可以通过微信扫描后在右上角点击在浏览器中打开，  
然后就可以获取加好友的url了。

- 支持填写：
  - 微信
  - QQ
  - 哔哩哔哩
  - 网易云音乐
  - 微博
  - GitHub
  - Telegram
  - Steam
  - Youtube
  - Instgram
  - 抖音
  - 小红书
  - Discord
  - 知乎
  - 领英
  - Twitter
  - Facebook
  - 电子邮件用户名
  - 电子邮件域
  - 自定义社交网络图标及链接

## 首页布局

### 主页布局

在这里添加公告板、展示区域后相关内容才会在首页显示，默认只包含文章区域。  
这个设置项可以控制主页相关区域的展示顺序。

### 区域标题

#### 展示区域图标

设置一下展示版块的图标

> 默认为“fa-solid fa-laptop”，你可以前往 [FontAwesome 网站](https://fontawesome.com.cn/faicons/) 查看可以填写的图标
#### 展示区域标题

设置一下展示版块的标题

![](/homepage/exh_title.png)

> 默认为“Display”，你可以修改为其他，当然不能当广告用！不允许！！

#### 文章区域图标

设置一下文章区域的图标

> 默认为“fa-regular fa-bookmark”，你可以前往 [FontAwesome 网站](https://fontawesome.com.cn/faicons/) 查看可以填写的图标
#### 文章区域标题

设置一下文章区域的标题

![](/homepage/art_title.png)

> 默认为“Article”，你可以修改为其他，当然不能当广告用！不允许！！

#### 区域标题字体

设置区域标题字体

> 填写字体名称。例如：Ma Shan Zheng

#### 区域标题对齐方向

设置区域标题对齐方向

![](https://s.nmxc.ltd/sakurairo_vision/@3.0/options/area_title_text_left.webp)

- 左对齐

![](https://s.nmxc.ltd/sakurairo_vision/@3.0/options/area_title_text_center.webp)

- 居中对齐

![](https://s.nmxc.ltd/sakurairo_vision/@3.0/options/area_title_text_right.webp)

- 靠右对齐  

## 展示区域设置

### 展示区域

### 胶囊组件  

在选框中添加胶囊组件，并拖拽排列展示顺序，它们将如期展现在展示区中。  

### 展示徽章胶囊  

开启之后将为里程碑显示铜牌/银牌/金牌徽章，站点运行天数、博文浏览量、友链数量、码字数量达标后相关胶囊将替换为奖章展示。

### 展示区域设置

设置展示区域内容

- 需要填写的内容
  - 图片：填写 URL
  - 标题：
  - 描述：（上方选择`下往上样式`则无描述）
  - 地址：填写前往链接

觉得默认设置不够、多了可以点击设置项底部的 “+” 或设置栏右边的 “x” 自由增减。

## 文章区域设置

### 文章区域显示元素

![](/homepage/article_info.png)

就是文章卡片右上角的内容，可以展示所属文章的一些信息。

### 文章区域展示样式

设置文章区域展示样式

- 图文（默认）样式
  ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz55.png)

  - 文章区域装饰特色图片对齐方向： - 左右交替 （默认）
    ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz56.png) - 向左对齐
    ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz57.png) - 靠右
    ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz58.png)

- 标准样式
  ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz59.png)
  - 文章区域装饰特色图片展示形状 - 圆形（默认）
    ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz60.png) - 方形
    ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz61.png)

### 文章区域图标颜色

设置文章区域图标颜色

### 文章区域边框阴影颜色

设置一个文章的区域边框，可以显得有层次性，更美观


### 文章区域装饰特色图片选项

设置文章区域装饰特色图片

- 封面随机图片：跟随封面随机图片
- 外部 API 随机图片
  - 文章区域装饰特色图片外部 API 随机图片地址

> [!TIP]
> 要为文章卡片设置独立的装饰图片，请前往编辑文章属性的特色图片。  
> 简要教程：[设置文章特色图片](/first-step/q&a/#%E6%96%87%E7%AB%A0%E5%8D%A1%E7%89%87%E7%9A%84%E9%A2%84%E8%A7%88%E5%9B%BE%E7%89%87%E6%80%8E%E4%B9%88%E5%8D%95%E7%8B%AC%E8%AE%BE%E7%BD%AE-%E4%B8%BA%E4%BB%80%E4%B9%88%E9%83%BD%E6%98%AF%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87)

### 文章区域卡片圆角

设置文章区域文章卡片圆角

### 文章区域卡片信息元素可读性增强

开启之后卡片信息元素将变为黑底白字以增强可读性

### 文章区域卡片信息元素圆角&文章区域卡片标题元素圆角

![thumb_card](/homepage/thumb_card.jpg)

卡片上方是信息元素，显示文章的创建时间及置顶状态，下方是文章标题

### 文章区域标题字体大小

设置文章区域标题字体大小
推荐在 16-20 范围内

### 在首页显示说说

开启后将在首页显示说说类型的文章，默认开启