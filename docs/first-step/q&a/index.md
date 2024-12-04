---
title: 常见问题
---

# 常见问题

对于您遇到的问题，建议优先通过查找历史issues寻找可能的解决方案 [点击前往查找](https://github.com/mirai-mamori/Sakurairo/issues?q=is%3Aissue+is%3Aclosed)  
如果本文档没能解决您的问题，可以尝试使用搜索引擎搜索 “关键字 + site:docs.fuukei.org”   
看看是不是哪里没能引起你的注意  

如果还是没能解决你的问题，可以 [在此处](https://github.com/mirai-mamori/Sakurairo/issues/new/choose) 参考模版提出您遇到的问题  

## 主题设置保存不生效怎么办？

::: tip 
如果您使用了优化类（静态缓存等）插件，请在保存主题设置后清理插件缓存。如果仍然无法生效，请提交 issue
:::

## 主题有些图片没加载出来怎么办？

::: tip 
首先检查你的网络环境及缓存，确认上述无问题后，请在主题设置中选择“关于主题” --> “资源控制” --> “视觉资源路径” 修改地址！[- > > > 点我去看看视觉资源设置！< < < -](/Sakurairo/About-Theme/#%E8%A7%86%E8%A7%89%E8%B5%84%E6%BA%90%E8%B7%AF%E5%BE%84)

:::

## 主题升级以后我会丢失什么吗？ 

::: tip 
在主题设置及WP内置的主题自定义CSS功能内进行的任何设置均不会丢失，而对主题本体文件的修改将会丢失  
因为wordpress本身的特性，使用主题内建的的随机图片（gallary目录）在wordpress后台更新主题后会被清空，  
如果你使用主题内建随机图片，请手动上传主题更新文件到wp-content/themes目录完全覆盖进行手动更新
:::

## 我的服务器在国内，默认更新源无法检测更新怎么办？ 

::: tip 
在使用升级功能前，请手动前往主题设置，关于主题中切换更新源为除Github以外的其他选项即可
:::

## 我使用的浏览器访问启用本主题的网站 出现了问题（按钮失效/无法正常显示等） 是主题问题吗？ 

::: tip 
在移动端，以下浏览器不支持：UC浏览器、夸克浏览器、QQ浏览器、安卓QQ内置浏览器、安卓微信内置浏览器。
在桌面端：不支持IE浏览器，对Edge Html引擎支援不佳。 如果你使用的浏览器不在上文范围内，请前往 Github 发送 issue 获取帮助
:::
## 我的网站怎么打开XX页面都是404？
::: tip 
>1.请检查点击后跳转的链接是不是类似于这种：`.../xxx.php/xxx/...`，  
如果是，那么就是你没有正确配置伪静态，请根据你使用的服务器应用（apache、nginx等）自行寻找配置教程。  
配置完成后建议备份重要数据后清空wordpress数据库重新安装以清除已生成的错误链接。

>2.如果不是，请确保你这个链接确指向一个真实存在的文章/页面/分类，并且它已发布。  
:::

## 我设置的图片、自定义字体等资源没有生效怎么办？

::: tip 
遇到这类问题，请先在PC端浏览器按F12，切换到网络面板（network）使用ctrl+F5清除缓存强制刷新，  
在页面停止载入后浏览所有已拉取的资源，检查资源是否被正常载入，  
如果资源条目底色为红色，建议右键在新标签页打开，看看浏览器能否正常访问，  
如果浏览器不能正常访问，请检查相关资源路径设置是否正确  

对于手机端用到的资源请将页面宽度调到860px以下，建议额外使用插件将UA设置为安卓手机，然后按上方操作进行调试。  

浏览器可以正常访问：
切换到控制台（console），检查蓝色链接条目，找到你设置的资源路径，  
如果该条目含有关键词`“Access-Control-Allow-Origin”`，请参照以下配置更新你的资源所在网站服务器配置然后重启：  
Nginx/Openresty
```
server {
    listen 80 ; 
    listen [::]:80 ; 
    listen 443 ssl http2 ; 
    listen [::]:443 ssl http2 ; 
    server_name docs.fuukei.org; 
    index index.php index.html index.htm default.php default.htm default.html; 
    add_header Access-Control-Allow-Origin '*' always;      |<<<主要就是参考这三项所在位置添加这三项即可
    add_header Access-Control-Allow-Methods '*' always;     |   套了cdn的域名请自行参考网上教程进行相关配置
    add_header Access-Control-Allow-Headers '*' always;     |   关键词“CORS报错”
    if ($request_method = 'OPTIONS') {
	    return 200;
    }
    ......
}
```  
如果你的网站启用了https（htst、ssl证书），请同样引用https的资源，http的资源会被视为不安全进而被拦截。
:::

## 我的主页为什么有奇怪的声音？

::: tip 
查看浏览器网页标签是否有🔊图标可以判断是否是您的网页发出的声音，  
如果是，可以尝试关闭“全局设置——额外设置——音符触动特效”后刷新检查
:::

## 怎么配置cdn？图片cdn怎么使用？

::: tip 
在“其他设置——低使用设置——图片cdn”,  
该功能可以修改全局上传到媒体库的文件的链接，其实不只是图片，  
为你的uploads目录单独建立一个服务器，分配一个二级域名即可，  

举个例子：  
比如你的博客是`fuukei.org`，可以为`files.fuukei.org`配置cdn  
fuukei.org的网站目录/文件夹在`/opt/openresty/openresty/www/sites/fuukei.org/index`  
那么为需要代理的目录/文件夹就是`/opt/openresty/openresty/www/sites/fuukei.org/index/wp-content/uploads`  
你可以创建一个新的站点，为其分配二级域名`files.fuukei.org`，然后创建index软链接或者硬链接指向需要代理的目录/文件夹即可  
如果你是使用docker部署的web服务器，在挂载卷中将wordpress目录挂载为本地目录，
然后将uploads目录挂载为cdn域名网站的index目录即可  

那么你在图片CDN设置项应该填写的就是“`https://files.fuukei.org`”  

同样，不一定必须指派index目录，如果您多个网站共用这一个资源站，  
目录映射对了，设置填写对了同样可以生效  

## 我设置的前台（背景图片）怎么没有生效？

::: tip
主题默认开启自动切换暗色模式，在北京时间22:00到次日7:00会全局变为暗色，如果你发现网站变黑了应该就是这个原因。  
如果不是，请检查是不是误触小工具面板变成其他样式了。  
如果不是，是不是设置随机图片api但是出现问题了。  
如果不是，是不是图片跨域资源调用出现问题了。  
如果不是，请提交issue，我们会尽快回复您的问题。
:::

## 文章卡片的预览图片怎么设置，为什么都是随机图片？

::: tip
在文章的编辑页面这边可以进行更改。
![image](/shots/article_image.png)
