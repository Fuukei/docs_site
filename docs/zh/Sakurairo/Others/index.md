---
title: 其他设置
---
# 其他设置 <Badge type="tip" text="v3.0" />

## 登录界面和仪表盘相关设置

### ⭐登录页面

#### 定制登录界面

开启后，将启用主题特色设计的登录界面样式。
![image](/others/login.png)

#### 登录界面 Logo

> 设置登录界面 Logo 图片 URL（登录表单顶部的logo）

#### 登录后跳转

设置登录后跳转是否开启

> 开启之后管理员跳转至后台，用户跳转至主页

#### 登录界面语言选项

开启之后登录界面下方将显示语言选项


### ⭐仪表盘

设置仪表盘背景图片

> 设置你的仪表盘背景图片，此选项留空则显示白色背景

![image](/others/iro_color.png)
⚠ 注意：需要个人资料中“管理界面配色方案”选择Sakurairo🌸，否则不生效

### 仪表板设置菜单样式

- ![](https://s.nmxc.ltd/sakurairo_vision/@3.0/options/admin_left_style_v1.webp)
- ![](https://s.nmxc.ltd/sakurairo_vision/@3.0/options/admin_left_style_v2.webp)
### 仪表盘一级菜单颜色

设置仪表盘一级菜单颜色

### 仪表盘二级菜单颜色

设置仪表盘二级菜单颜色

### 仪表盘强调颜色

设置仪表盘强调颜色

### 仪表盘按钮颜色

设置仪表盘按钮颜色

### 仪表盘文本颜色

设置仪表盘文本颜色

⚠ 注意：上述颜色设置只对图中Sakurairo🌸界面配色方案生效

## ChatGPT设置

⚠ 注意：如果不了解本功能请勿开启，相关问题不予解答

### ChatGPT 访问地址

> 填写ChatGPT访问地址，默认使用 https://api.openai.com/v1/chat/completions

⚠ 注意：其他地址请自行确认连通性  

::: tip
示例（来自已知的issues解决方案）：  
deepseek: `https://api.deepseek.com/chat/completions`  
tencent cloud: `https://api.lkeap.cloud.tencent.com/v1`  
google gemini: `https://generativelanguage.googleapis.com/v1beta/openai/chat/completions/`  
:::

> [!CAUTION]
> 使用相关功能前你需要确保服务器的网络环境可以访问到相关服务，且php安装了curl和openssl模块  
> 否则相关功能将无法正常运作  
> 使用的接口端点应当兼容openai的请求格式  

### ChatGPT API密钥

> 填写您的 ChatGPT API 密钥，您可以访问  [OpenAI 网站](https://platform.openai.com/account/api-keys) 获取您的 API 密钥（获取方式请自行百度）

### ChatGPT Tokens 上限 

将决定文章摘要、AI注释每分段最大发送的字数上限，请根据您自己的接口规格酌情调整。  

### ChatGPT 文章摘要

> 开启之后 ChatGPT 会自动生成文章摘要

![image](/others/ai_sum.png)  

你的每次文章更新都会触发生成摘要请求。由于目前API限制，如果你的文章超过了你设定的字数限制，系统将会只发送未超出部分以生成摘要  

### ChatGPT 文章摘要初始化提示

> 填写初始化提示，请你在知道如何正确配置的情况下进行修改，初始化提示将作为“系统”角色设定传递给 ChatGPT

![image](/others/important.png)
⚠ 注意，画圈部分如果缺失则摘要显示为英文

### ChatGPT 文章注解初始化提示  

> 填写初始化提示，请你在知道如何正确配置的情况下进行修改，初始化提示将作为“系统”角色设定传递给 ChatGPT

## 低使用设置

### 统计接口

> 你可以选择 WP-Statistics 插件统计或者主题内建统计作为统计结果

- 主题内建统计：精度较低，基本上每次点击一遍文章就会计算
- WP-Statistics 插件统计：统计精度较高

### 统计数据显示格式

设置统计数据显示格式

- 23333 次访问
- 23,333 次访问
- 23 333 次访问
- 23k 次访问

⚠ 注意：该统计为文章访问量

### 谷歌统计ID

设置谷歌统计代码

### 自定义 CSS 样式

设置自定义 CSS 样式

> 填写 CSS 代码，不需要写 style 标签

### 自定义插入 Header 代码
​
在全局Header插入HTML代码

⚠ 注意：自定义代码请斟酌，出现问题自行处理

### 时区修正

设置时区修正

> 滑动滑块，如果评论出现时差问题在这里调整，填入一个整数，计算方法：实际时间=显示错误的时间-你输入的整数（单位：小时）

### Gravatar 服务代理

设置 Gravatar 服务代理

你可以选择多种代理作为 Gravatar 服务代理(Tianli、Weavatar服务、Cravatar 服务、极兔族、loli net、官方、官方中国镜像)。

默认使用 Tianli 服务作为 Gravatar 服务代理。

![image](/others/gravatar.png)

### ⭐灯箱

#### BaguetteBox 灯箱效果  

> BaguetteBox 灯箱使用方法`[![图片标题](../example.th.png)](../example.png)`

> 或者在可视化编辑器中手动将图像链接至图像本身：
> ![usage](/others/lightbox_usage.png)

#### FancyBox 灯箱效果

`!{alt}(url)[th_url] 或者 !{alt}(url)`

- alt：图片标题；
- url：原图链接；
- th_url：缩略图链接。在指定了缩略图链接的时候，页面上优先显示缩略图，点击查看原图。

例：

```
!{image 1}(https://s.nmxc.ltd/sakurairo_wiki/TVKDX147_006.png)[https://s.nmxc.ltd/sakurairo_wiki/TVKDX147_006.th.png]

!{image 2}(https://s.nmxc.ltd/sakurairo_wiki/PID50489279by.jpg)
```

**注意：** 这不是标准的 Markdown 语法，如果为了文章将来的兼容性，你很介意这一点，那么可以改用 `fancybox` 定义的标准 html 标签：

```
<a data-fancybox="gallery" href="big_1.jpg"><img src="small_1.jpg"></a>
<a data-fancybox="gallery" href="big_2.jpg"><img src="small_2.jpg"></a>
```
#### LightGallery灯箱效果

> 开启之后将使用LightGallery作为图片灯箱效果

### ⭐代码高亮

代码高亮程序

**Highlight.js**： 默认值，自动识别语言。

**Prism.js**： 需要指定语言，使用方法请参阅 [基本用法](https://prismjs.com/#basic-usage) 和 [如何代码高亮动态载入的文件](https://prismjs.com/%20plugins/file-highlight/)。

**自定义**： 适用于另有配置的情况。

::: warning
⚠注意：以下设置不推荐盲目进行修改，请在他人的指导下使用！  
↓↓↓↓
:::

### 图片 CDN

使用图片 CDN

> 注意：填写格式为 http(s)://你的 CDN 域名/。也就是说，原路径为 http://your.domain/wp-content/uploads/2018/05/xx.png 的图片将从 http://你的CDN域名/2018/05/xx.png 加载

### 文章分类（不显示）

设置不显示的文章分类

> 填写分类 ID，多个用英文“ , ”分开

### 图片展示分类

设置图片展示分类

> 填写分类 ID，多个用英文“ , ”分开

### 版本控制

设置版本控制

> 用于更新前端 Cookie 和浏览器缓存，可使用任意字符串

### 隐藏登录入口

如果你使用了类似隐藏登录入口的插件，可以开启这个选项，将默认关闭未登录状态下的用户栏，并尽可能隐藏可能暴漏的登录地址。

### Fontawesome加载源

主题图标使用Fontawesome，默认从`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css`加载，  
如果您有更好更快的来源，可以填写自定义来源，不稳定的来源可能造成相关图标显示异常。

### 开发者模式

启用后将禁用样式压缩和预加载优化，便于自定义或排查部分错误。

### PHP日志过滤

部分情况下某些运行错误、提示可能会将Deprecated、Warn等日志信息渲染到页面中，  
这个选项可以尝试覆盖你的PHP默认设置，阻止部分日志信息渲染到页面中。  
默认只允许显示影响功能的严重错误。