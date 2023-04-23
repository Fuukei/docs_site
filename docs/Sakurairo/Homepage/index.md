---
title: 主页设置
---
# 主页设置 <Badge type="tip" text="v2.6.0" />

## 封面设置

### 封面

设置封面是否开启显示

> 如果关闭，这个 封面设置 版块的设置都不会有效(默认开启)

- 关闭状态则直接显示展示区域/文章：![](https://temp-cdn.kusu.icu/103624556/233815619-8e6c7549-1ea2-456a-b162-bfa1fb78dfdf.png)

- 开启状态则会同时展示封面区域/展示区域/文章区域：![](https://temp-cdn.kusu.icu/103624556/233815622-ba7a455f-7d75-409d-9a99-17141611abbc.png)

### 封面全屏显示

设置封面是否封面全屏显示(默认开启)

> 如果关闭主页封面将不会全屏显示

- 全屏显示关闭状态
![](https://temp-cdn.kusu.icu/103624556/233815625-fa825dce-3eb8-4892-a82f-9e7227da5956.png)

- 全屏显示开启状态
![](https://temp-cdn.kusu.icu/103624556/233815623-4078a141-ee52-4d3f-b0ad-b3cb163bdc4c.pn)

### 封面圆角

设置封面圆角

### 封面动画

封面动画时间
设置封面动画时间

- 开启封面动画
![](https://temp-cdn.kusu.icu/103624556/233815626-ed38755d-94e3-4aee-b590-b12a0f8ec695.gif)

- 关闭封面动画
![](https://temp-cdn.kusu.icu/103624556/233815627-998a8177-a3dd-48e4-944f-dee8af168c73.gif)

> 滑动滑块设置，推荐数值范围为 1-2

### 封面信息栏

设置封面是否开启显示封面信息栏(默认开启)

> 如果关闭主页封面`头像、白猫特效文字、签名栏、社交区域`将不会显示(就只会显示封面)
![](https://temp-cdn.kusu.icu/103624556/233815631-2e0b25b8-d1c7-491f-b823-d82ff91c295b.png)

### 封面信息栏样式

设置封面信息栏样式

- 分离

![](https://s.nmxc.ltd/sakurairo_wiki/help/sz33.png)

- 合并

![](https://s.nmxc.ltd/sakurairo_wiki/help/sz34.png)


### 封面信息栏背景颜色

设置封面信息栏背景颜色
![](https://temp-cdn.kusu.icu/103624556/233815633-495b0955-7890-4d14-ae2f-062518d709ad.png)

> 建议使用浅色系颜色

### 封面信息栏头像圆角

设置封面信息栏头像圆角

> 滑动滑块设置，推荐数值为 100

- 修改为0时
![](https://temp-cdn.kusu.icu/103624556/233815634-e1e639b5-44b1-42a0-8197-29c05d3147ef.png)

- 修改为100时
![](https://temp-cdn.kusu.icu/103624556/233815635-d9fa717c-6c4d-42f0-ab14-a1f1413d8c30.png)

### 封面签名栏圆角

设置封面签名栏圆角
（当前设置为15）![](https://temp-cdn.kusu.icu/103624556/233815636-764ec98e-dbf2-4c2b-9229-33128207c16b.png)

> 滑动滑块设置，推荐数值范围为 10-20

### 封面签名栏文本

设置封面签名栏文本

![](https://s.nmxc.ltd/sakurairo_wiki/help/sz35.png)

### 封面签名栏文本字体

设置封面签名栏文本字体

> 填写字体名称。例如：Ma Shan Zheng

### 封面签名栏文本字体大小

设置封面签名栏文本字体大小

> 滑动滑块设置，推荐数值范围为 15-18

### 封面签名栏打字特效

本主题自带封面签名栏打字特效，可以整点花梨细姑的

![](https://s.nmxc.ltd/sakurairo_wiki/help/sz36.png)

- 封面签名栏打字特效双引号：开启之后打字特效首尾两边将追加双引号

- 封面签名栏打字特效占位符，设置后，在没开始 打字特效 的时候，就会显示这个

- typed.js 初始化选项，在这里，进行 typed.js 打字特效的相关参数设置（不会就默认的，去改里面的字就行）

### 封面说说栏
开启之后最新发布的说说将和签名栏循环显示

## 随机图设置

本主题默认采用外部随机图 API，需要本地随机库图片，请更换为 本地 /Webp 优化。

- 外部随机图：填写随机图地址。

  - 如使用本地图片这将图片放置`.\wp-content\themes\Sakurairo\manifest\gallary`
  - 如使用外部 API 您可以选择一下几种
    - [eee.dog](https://www.eee.dog/tech/rand-pic-api.html)
    - [小歪](https://api.ixiaowai.cn/)
    - [搏天 api](https://api.btstu.cn/doc/sjbz.php)
    - [墨天逸](https://api.mtyqx.cn/)
    - [黑子 API](https://api.kuroko.cn/rand/ecy-img/pc.php)

- Webp 优化随机图：选择后在下方填写 Manifest 路径，更多信息请参考[webp 优化随机图说明](/Sakurairo/Webp/)。

- 封面随机图片多终端分离：开启后桌面端和移动端会分别使用不同的随机图 API 地址

- 外部 API 手机端随机图片地址：填写随机图地址。
  - 如使用本地图片这将图片放置`.\wp-content\themes\Sakurairo\manifest\gallary`
  - 如使用外部 API 您可以选择一下几种
    - [eee.dog](https://www.eee.dog/tech/rand-pic-api.html)
    - [小歪](https://api.ixiaowai.cn/)
    - [搏天 api](https://api.btstu.cn/doc/sjbz.php)
    - [墨天逸](https://api.mtyqx.cn/)
    - [黑子 API](https://api.kuroko.cn/rand/ecy-img/pe.php)

### 封面随机背景图片缓存

设置封面随机背景图片缓存，默认开启，此功能会在本地缓存一份封面图片，可提升进入主页后第一张封面的加载速度。

::: warning 注意
此功能需要封面 API 能接受跨域请求。
:::

### 封面与前台背景一体化

设置封面与前台背景一体化

开启之后，封面的背景将设置为透明，同时前台背景将使用封面的随机图 API

### 封面随机图片滤镜
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz37.png)无（默认）
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz38.png)浅色
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz39.png)暗淡
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz40.png)网格
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz41.png)点点

### 封面波浪特效

本主题自带波浪特效，默认关闭

![](https://s.nmxc.ltd/sakurairo_wiki/help/sz42.png)

::: warning 注意
深色模式默认强制隐藏。
:::

### 封面下拉箭头

本主题自带首页下拉按钮

![](https://temp-cdn.kusu.icu/103624556/233821940-44a7c7f2-8e4f-4936-a452-018aaad84e6c.png)

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

::: warning 特别注意
在 2.2.1.1 版本及以后，封面视频地址需要包含结尾的"/"，封面视频名称也需要包含后缀".mp4"
:::

## 封面社交区域设置

### 选项

#### 封面社交区域

设置封面社交区域是否开启显示

> 开启显示封面随机图片切换按钮和社交网络图标

#### 社交网络图标

社交网络的图标风格

![](https://temp-cdn.kusu.icu/103624556/233821997-4223c60b-8c71-445b-9a59-c0e239d1634e.png)

提供 12 组全局定制图标，每一组都充满个性。

#### 封面社交区域圆角

设置封面社交区域圆角（就是辣个圆角啊）

> 滑动滑块设置，推荐数值范围为 10-20

- 设置为0时

![](https://temp-cdn.kusu.icu/103624556/233822051-9c79260a-ec65-4072-8ef6-eded9dceb855.png)

- 设置为30时

![](https://temp-cdn.kusu.icu/103624556/233822094-9fda2951-95f0-48db-bf6b-88b3767965cf.png)

#### 封面随机图片切换按钮

设置封面随机图片切换按钮是否开启显示

> 开启显示显示封面随机图切换按钮

### 社交网络

- 支持填写：
  - 微信
  - QQ
  - 哔哩哔哩
  - 网易云音乐
  - 微博
  - GitHub
  - Telegram
  - Steam
  - 知乎
  - QQ 空间
  - Lofter
  - 优酷
  - 领英
  - 推特
  - 脸书
  - CSDN
  - 简书
  - 自定义社交网络图标及链接
  - 电子邮件用户名
  - 电子邮件域

## 公告栏和区域标题设置

### 公告栏

#### 公告栏

整个公告，显示出来

![](https://temp-cdn.kusu.icu/103624556/233821790-6c45592f-1017-4382-b69e-f387a74acc48.png)

- 公告栏样式：
  - 图片背景
    - 公告栏背景：填写图片 URL
  - 纯色背景
    - 公告栏边框颜色：建议使用与主题色相同色系且属于浅色系的颜色

#### 公告板边框颜色

可以给公告板的边框赋予一个颜色。

#### 公告栏文本

设置公告栏中的文字

#### 公告文本对齐方向

![](https://s.nmxc.ltd/sakurairo_wiki/help/sz46.png)

左对齐

![](https://s.nmxc.ltd/sakurairo_wiki/help/sz47.png)

右对齐

![](https://s.nmxc.ltd/sakurairo_wiki/help/sz48.png)

居中对齐

#### 公告文本颜色

设置一下公告中的文本颜色

> 建议根据背景颜色搭配合适的颜色

### 区域标题
#### 展示区域图标

设置一下展示版块的图标

> 默认为“fa-solid fa-laptop”，你可以前往 [FontAwesome 网站](https://fontawesome.com.cn/faicons/) 查看可以填写的图标
#### 展示区域标题

设置一下展示版块的标题

![](https://temp-cdn.kusu.icu/103624556/233819838-db9e7dcc-2d4e-4bbf-a551-d64a3f724c72.png)

> 默认为“Display”，你可以修改为其他，当然不能当广告用！不允许！！

#### 文章区域图标

设置一下文章区域的图标

> 默认为“fa-regular fa-bookmark”，你可以前往 [FontAwesome 网站](https://fontawesome.com.cn/faicons/) 查看可以填写的图标
#### 文章区域标题

设置一下文章区域的标题

![](https://temp-cdn.kusu.icu/103624556/233821910-fb2d6040-96ad-466a-9a3f-4a887491f01e.png)

> 默认为“Article”，你可以修改为其他，当然不能当广告用！不允许！！

#### 区域标题字体

设置区域标题字体

> 填写字体名称。例如：Ma Shan Zheng

#### 区域标题对齐方向

设置区域标题对齐方向

![](https://s.nmxc.ltd/sakurairo_wiki/help/sz50.png)

- 左对齐

![](https://s.nmxc.ltd/sakurairo_wiki/help/sz52.png)

- 居中对齐

![](https://s.nmxc.ltd/sakurairo_wiki/help/sz51.png)

- 靠右对齐

#### 区域标题下分隔线颜色

设置区域标题下分隔线颜色

> 建议使用与主题色相同色系且属于浅色系的颜色

## 展示区域设置

### 展示区域

设置展示区域是否开启显示

### 展示区域搭配色

自定义颜色，建议根据背景颜色搭配合适的颜色

### 展示区域样式
  - 左右交替(默认)
    ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz53.png)
  - 从下往上
    ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz54.png)

### 展示区域兼容模式

设置展示区域兼容模式是否开启显示

> 此选项避免了展示区域错位的问题

### 展示区域背景颜色

设置展示区域背景颜色

> 建议使用浅色系颜色

### 展示区域圆角

设置展示区域圆角

> 滑动滑块设置，推荐数值为 15

### 展示区域设置

设置展示区域内容

- 第一展示区
  - 图片：填写 URL
  - 标题：
  - 描述：（上方选择`下往上样式`则无描述）
  - 地址：填写前往链接
- 第二展示区
  - （同上）
- 第三展示区
  - （同上）

## 文章区域设置

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

### 文章区域标题字体大小

设置文章区域标题字体大小
推荐在 16-20 范围内

### 文章区域时间提示区域字体大小

设置文章区域时间提示区域字体大小

### 文章区域“作者信息”

设置文章区域“作者信息”(开启之后，文章元数据部分将增加作者信息)
