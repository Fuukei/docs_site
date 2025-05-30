---
title: 全局设置
---
# 全局设置 <Badge type="tip" text="v3.0" />

## 外观设置

### 主题色

设置站点的主题色（就是整体主色调）

### 主题色搭配色

设置站点的主题搭配色（基于主色调的下的辅助展示的相关色调）

### 从封面随机图片中提取主题颜色

跟描述一样，从封面中提取

### 从特色图片中提取文章注目色

同理，从文章封面中提取  
开启后首页文章卡片相关元素也会使用特色图或者随机封面图片的主题色作为高亮色  
设置了随机图的文章页相关元素会使用特色图的主题色（链接、短引用等）

## 深色模式

![](/global/dark_mode.png)

本主题支持深色模式，在页面的右下角可以开启深色模式。

### 深色模式主题色

设置站点的深色模式的主题色（另一种说法也就是夜间模式，就是夜间模式你的主题色是什么）

### 深色模式自动切换

设置站点的深色模式自动切换

#### 深色模式自动切换策略

> 开启自动切换后 会出现的选项

- 选择客户端当地时间：
  深色模式会在`22:00-7:00`自动切换
- 跟随客户端设置:
  跟随客户端浏览器的设置
- 永远开启：
  永远开启，除非客户端另有配置

### 深色模式图像亮度

设置站点的深色模式的图像亮度

> 滑动滑块调节设置，推荐数值范围为 0.6-0.8

![0.4](/global/04.png) 数值`0.4` ![1](/global/1.png)数值`1`

### 深色模式部件透明度

设置站点的深色模式部件透明度

> 滑动滑块调节设置，推荐数值范围为 0.6-0.8

![0.2](/global/d02.png) 数值`0.2` ![1](/global/d1.png)数值`1`

### 深色模式背景透明度

设置站点的深色模式背景透明度

> 滑动滑块调节设置，推荐数值范围为 0.6-0.8
> ![0.2](/global/b02.png) 数值`0.2` ![1](/global/b1.png)数值`1`

## 其他外观相关

### 纪念模式

设置之后网站全局将默认增加黑白滤镜，适合用于纪念日网站临时着色等。

### 加载控件单元占位 SVG

设置站点的加载控件单元占位 SVG（说白了就是加载 loading 图）

![](/global/loading.gif)

## 字体设置

### 全局设置

#### 非强调文本字重

设置站点的非强调文本字重

> 滑动滑块设置，推荐数值范围为 300-500

#### 文本字体大小

设置站点的文本字体大小

> 滑动滑块设置，推荐数值范围为 15-18px

![10](/global/10px.png)数值`10` ![20](/global/20px.png)数值`20`

> 反正别太大，除非你专门为老年人设计

### 外部字体

#### 引用外部字体

填写需要引用的外部字体文件的URL

> 首先要有字体文件，`ttf`、`woff`、`woff2`等格式即可，建议使用工具转换为`woff2`格式后再使用。

> 然后在设置项的字体链接中填写一个可以访问到该字体文件的url链接。

> 最后在`字体名称`里填写字体名称即可在主题其他字体设置处填写该字体名称应用该字体样式。

[字体设置无效？](/first-step/q&a/#%E6%88%91%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%9B%BE%E7%89%87%E3%80%81%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AD%97%E4%BD%93%E7%AD%89%E8%B5%84%E6%BA%90%E6%B2%A1%E6%9C%89%E7%94%9F%E6%95%88%E6%80%8E%E4%B9%88%E5%8A%9E)
#### Google 字体 API 地址

就是你觉得谷歌自带的/主题自带的谷歌字体地址不满足你的需要，你可以更换。

#### Google 字体名称

填写谷歌字体名称，在`iro主题设置`中的`全局设置-字体设置-谷歌字体名称`中设置

> 请确保添加的字体在[谷歌字体库](http://www.googlefonts.cn/)内可被引用，填写字体名称。添加的字体前面必须有“|”。如果引用多个字体，请使用“|”作为分割符，如果字体名称有空格，请用加号替代。

> 例如：|ZCOOL+XiaoWei|Ma+Shan+Zheng

## 导航菜单设置

> [!NOTE]  
> 你可以在wordpress后台——外观——菜单中编辑导航栏展示的选项  
> 设置中的选项块可以拖动摆放，附属于其他选项的即是子选项  
> 本主题最多支持二级菜单。
>

> [!NOTE]  
> 你需要先再`外观——菜单——编辑菜单`中新建菜单，  
> 接着在`外观——菜单——管理位置`（新建后出现）中指派你新建的菜单，  
> 否则导航栏将可能无法正常显示！  

### 导航菜单样式

#### 灵动岛（支持圆角）：

- ![](/options/nav_menu_style_iro.webp)

  - 示例：  
    居中
    ![](/global/iro_nav.png)
  
  - 宽松
    ![](/global/iro_nav_dist.png)


#### Sakura：

- ![Sakura](https://s.nmxc.ltd/sakurairo_wiki/help/sz20.png)
  
  - 示例：  
    宽松（不支持圆角）
    ![](/global/sakura_nav.png)
  
  - 标准（支持圆角）：
    ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz18.png)

### 灵动岛样式

自定义iro导航栏的布局，居中还是宽松，默认居中，样式示例见上。

### 导航菜单圆角

本质就是在导航的模块四周给你部署一个圆角处理，部分人会觉得喜欢（因人而异）

> 默认值为 50，根据个人喜好增减

### 导航栏样式设置（仅适用于于Sakura样式）  

#### 导航栏外观

宽松或标准，示例样式见上。

#### 导航栏选项分布方式

导航菜单项目在导航栏中的分布位置，可选靠左、靠右或者居中，默认靠右。

#### 菜单选项左右间距

如果你觉得选项过于紧凑或者松散，可以自己调一下它们之间的间距。

### 导航菜单字体

可以用于设置导航菜单字体样式，可以在字体设置中引入外部字体在此处填写以应用样式。

### 导航菜单文字logo选项

编写后将显示在导航菜单左侧，在选择分散显示时无效。

![](/global/word_logo.png)

### 随机图片切换按钮

默认开启，仅在封面开启的时候在导航栏显示封面随机图片切换按钮（骰子🎲图标）。  
允许用户通过点击切换随机封面。

### 导航菜单用户菜单

开启后会在导航栏显示用户头像，鼠标悬停会显示用户栏。  
移动端会在非文章页的书签栏显示用户栏。

### 导航菜单用户未登录头像

就是设置这个个头像显示个啥

> 是正方形啊姐妹，不然会怪起来的  

## 小组件面板和前台背景相关设置

#### 小组件面板按钮圆角

设置站点的小组件按钮圆角（知道啥是按钮的话，这个就能理解了）

> 滑动滑块设置，推荐数值为 10

#### 小组件面板组件圆角

设置站点小组件面板圆角，您可以点击页面右下角圆规图案呼出面板查看当前效果。

> 滑动滑块设置，推荐数值为 10

#### 小组件面板字体

填写字体名称以应用字体样式，您可以在全局设置——字体设置中引入外部字体。

#### 小组件WP小工具区&深色/浅色切换/字体切换

![widgets](/global/widgets.jpg)

此图片展示的是小组件面板，从上到下，从左到右依次为  
`WP小工具区、字体切换区、前台背景切换区和深色、浅色切换区`  
您可以根据需要决定是否关闭，前台背景切换区可以设置前台背景图片，  
你可以在接下来的前台背景设置中设置相关按钮对应的图片  

你可以在WordPress`外观设置——小工具`中自定义小工具区的内容。

### 前台背景

#### 前台背景缩放方式

设置样式菜单前台背景缩放方式

分为：覆盖、包含、自动，默认选择自动。  

覆盖的处理方式为缩放至铺满全屏，包含的处理方式为从屏幕中心开始，类似铺地砖的方式铺满屏幕为止。  

::: warning
如您选择了前端封面一体化，请将选项选择为覆盖。
:::

#### 前台背景模糊

开启后前台背景将模糊显示

#### 前台背景设置

设置样式菜单点击对应的图案时前台背景（问就是右下角的那个玩意儿切换背景里面的）

#### 前台背景透明度

设置样式菜单前台背景透明度

> 滑动滑块设置，推荐数值范围为 0.6-0.8

### 前台字体

这里可以决定小组件面板字体切换按钮可以切换的字体样式，  
你可以在字体设置中引入外部字体以供使用。

#### 默认字体/样式菜单字体 A

设置默认字体/样式菜单点击对应的菜单字体 A

#### 样式菜单字体 B

样式菜单点击对应的菜单字体 B

## 页尾设置

### 页尾在线播放器

选择页尾在线播放器，在`iro主题设置`中的`全局设置-页尾设置-页尾在线播放器`中设置

支持在线音乐有

- 网易云音乐
- 酷狗音乐
- QQ 音乐

::: warning
受到网易云的限制，对于无法显示播放器的请自行获取账号 cookies 并保持 cookies 生效，QQ 音乐国外服务器或用户可能无法使用。<br>
网易云有 cookies 的情况下，可以显示更多的歌曲（否则可能只有 10 首）
:::

### 使用自定义 MetingAPI 或者歌单文件

不指定默认使用主题内建的MetingAPI，使用海外服务器可能会被拦截，  
使用自定义MetingAPI可以解决此问题。
如何搭建MetingAPI？   
项目地址：https://github.com/metowolf/Meting-API ，建议参考网上教程使用容器化部署。

或者直接填写静态歌单文件，手动指定各个资源的url，保存为.json文件后将其url填入设置项即可。  
但是只有填写歌单id后才会生效，随便填一个就行  
虽然前端代码访问时仍然会带歌单id等查询参数，但是访问静态文件的话一般情况下会被服务器无视。  
示例（一块块复制粘贴填写即可，最后一块 `}`后不要留 `,`）：


```
[
    {
      "name": "歌名",
      "artist": "歌手",
      "url": "歌曲资源位置.mp3/.wav/.flac",
      "cover": "封面位置",
      "lrc": "歌词文件位置"
    },
    {
      "name": "歌名",
      "artist": "歌手",
      "url": "歌曲资源位置",
      "cover": "封面位置",
      "lrc": "歌词文件位置"
    }
]
```
懒得从0开始编写？  
您也可以从网上公开的公益api获取一份后进行删改（获取格式：apiurl?server=运营商&type=playlist&id=歌单id）  
网易为netease，QQ音乐为tencent，  
如有更多疑问请参考官方说明文档，其他运营商可能未适配。

### 页尾在线音乐播放器代理

设置页尾在线音乐播放器代理（这个功能是提升功能，详情可以参考 https://curl.se/libcurl/CURLOPT_PROXY.html 的相关文档。）

### 页尾在线播放器歌单 ID

设置页尾在线播放器歌单 ID，就是告诉你的播放器放啥。

### 页尾在线音乐播放器模式

可以给设置播放的方式，可以按照顺序列表播放，也可以随机（歌多的可以随机，还可用自己挂着听歌）

### 页尾在线音乐播放器预加载

可以根据你的需要进行预加载相关内容，比如歌曲的歌词、歌曲的文件

::: warning
设置了预加载可能会降低你的网站打开速度，如果您的网站开启了加载动画但网站加载缓慢，不建议再开启预加载。
:::

### 页尾在线播放器默认音量

设置页尾在线播放器默认音量，选取一个合适的音量来默认听歌，推荐 0.4-0.6，除非你想让 TA 变成聋子。

### 页尾在线播放器网易云音乐 cookies

给播放器一个 cookies，这样可以让你播放器播放更顺利。

获取方式：
1.PC 端
打开网易云音乐，打开控制台 →network（中文翻译网络），登录状态下 CTRL+F5，首个加载的 music.163.com 点击，查看 HEAD（头部）内容，找到 cookies：xxxx，除去 cookies 和冒号，其余后面内容一起复制就是你需要的内容。 2.手机端
因操作麻烦，请自行查询。（但该方式的 cookies 有效期更长） 3.白嫖党
因为看上去都很复杂，所以去 PY 大佬的 cookies 吧，但是 cookies 一般会赋予一定账号权限，不正当的使用极有可能造成你的账号财产损失，切记切记。

### 页尾动态樱花图标

开启之后，页面底部会有个转啊转的樱花哦

![](https://s.nmxc.ltd/sakurairo_wiki/help/sz26.png)

### 页尾内容排布

- 居中
  - ![footer](/global/footer_center.png)
  
- 两栏
  - ![footer](/global/footer_coloumn.png)

### 页尾信息

设置页尾信息显示，你可以在这里设置很多花哨的东西，也可以用来插入备案信息等。

> 页尾说明文字，支持 HTML 代码

### 页尾文本字体

设置页尾文本字体

> 填写字体名称。例如：Noto Serif SC

### 页尾负载占用查询

显示页面加载和负载信息

![](/global/query.png)

### 页尾又拍云联盟Logo

开始之后将显示又拍云联盟Logo及信息

### 页尾附加代码

可以添加一个附加代码，一般用于添加网站备案信息，
也可以通过编写Javascript实现全局的特定内容增删（但是这类脚本在启用pjax后会失效，需要在pjax启用的设置后面补充保活），
你可以用来加点 JavaScript（比如你可以插入一个 js 来让控制台显示更多好玩的东西）

### 一言

#### 脚页一言（随机话语 API）

本主题自带脚页一言（随机话语 API），可在您可以整点一言展示

![](/global/yiyan.png)

#### 一言 API 地址

设置一言 API 地址，开源公共的 API 还是不少，可以去试试。

## 站内搜索设置

这些选项可以帮助你决定站内搜索引擎如何工作。

#### 导航菜单搜索

开启显示导航菜单搜索（有个搜索按钮就是这么来的）  
移动端会在导航菜单显示搜索栏  

#### 搜索区域背景图片

这里是设置当你点击搜索按钮弹出来的搜索框的背景，根据自己的喜好设置

> 设置你的搜索区域背景图片，此选项留空则显示白色背景

![](/global/search-space-image.png)

### 搜索过滤器

开启后会在搜索页添加一个搜素过滤器，允许访客自行筛选符合类型条件的相关内容，默认开启。  
只有在搜索结果中展示说说和在搜索结果中展示页面开启后才会显示相关过滤选项。  

![filter](/global/filter.jpg)

### 在搜索结果中显示说说

开启后会在搜索结果中展示说说，默认开启。

### 在搜索结果中显示页面

开启后会在搜索结果中展示页面，默认开启。

### 只有管理员可以搜索页面

开启后只有管理员才可以搜索页面，默认关闭。

### 置顶内容在搜索结果中优先展示

开启后置顶的文章在搜素结果中仍然置顶，关闭则全部按和关键词的相关性排序。默认开启。

### 在搜索结果中排除特定内容

在文本框中填入相关内容的id后搜索结果中将会自动排除这些内容。  
比如填入“12,34”后，id为12和34的文章或页面、说说将不会再出现在搜索结果中。  
建议填入一些特别的功能页id，比如自定义登录页的id和调查问卷等的页面id。

> #### 如何获取内容id？
> 你可以在相关内容的编辑器页的url中获取，
> 进入一篇文章的编辑页后，浏览器url可能为：
> `http://docs.fuukei.org/wp-admin/post.php?post=1105&action=edit`  
> 其中`post=1105`说明这篇文章的id为1105，在设置项中加入这个id后它将不会再展示在搜索结果中。

### 实时搜索

开启后菜单栏呼出的搜索页面将会显示相关内容，使用缓存机制，缓存内容每小时刷新一次。默认关闭 
> 该功能调用 Rest API，每小时更新一次缓存，可在 api.php 里手动设置缓存时间 

![实时搜索](/global/front_search.jpg)

### 实时搜索评论支援

开启后将在实时搜索中显示相关的评论，默认关闭。  
当全站评论过多时不建议开启。

## 额外设置

### 特效及动画

#### 预加载动画

本主题自带预加载动画，默认关闭。

同时，预加载的动画颜色也支持自定义颜色。
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz29.png)

#### 预加载模糊过渡效果

模糊过渡持续时间，单位毫秒ms，为0时关闭。

#### 樱花飘落特效

本主题自带樱花飘落特效，默认关闭。

同时，支持多种飘落特效。（原生、1/4、1/2、少量）

![](/global/sakura.png)

### 粒子特效

可以给网站背景整点粒子特效

粒子特效将会出现在全局背景，请打开封面与前台背景一体化选项以获取最佳体验

> 当然我们也给予了超人性化的设置，你可以通过自定义 JSON 来设置富有个性的粒子特效。

### 功能

#### PJAX 局部刷新

设置 PJAX 局部刷新，可以减少网站加载项目，提高网站内使用速度

> 开启之后点击新内容将不需要重新加载

### 启用PJAX后仍需要每页加载的资源

正如设置项描述所说，启用PJAX后，您在页尾设置的自定义代码在页面跳转后将不再被刷新。
如果您的脚本在启用pjax后遇到了问题，比如全局自定义内容增删类型的，
你便可以在此处填写需要每页都加载的 JavaScript 和 CSS 资源的路径，这些资源将在 PJAX 完成加载后被重新加载。
可以是相对路径或者绝对路径，一行一个，系统可以自动识别自动识别，在pjax完成页面加载后它们会被分类并重新载入一次。

#### NProgress 加载进度条

设置 NProgress 加载进度条是否开启，算是美化项目。

> 加载页面将有进度条提示

### 全局平滑滚动

设置全局平滑滚动是否开启，可以一定程度上增加滑动的丝滑性质。

#### 验证码选项

设置登录验证码，用在登录和后台。

::: warning
开启之后验证码将出现在后台登录页及登录模板，此功能与其他验证码相关插件冲突，请勿同时开启。
:::

#### 分页模式

设置主页【首页】内容展示分页模式

- Ajax 加载

  - 下一页自动加载：设置自动加载等待时长
- 上下页

### 下一页加载占位 SVG

设置下一页加载占位 SVG URL
![](https://s.nmxc.ltd/sakurairo_vision/@3.0/basic/puff-load.svg)

### 丢失头像占位

头像加载不出来时会使用的替代图片（评论区、导航栏、友链页等）  

### 丢失图片占位

图片加载不出来时会使用的替代图片  
