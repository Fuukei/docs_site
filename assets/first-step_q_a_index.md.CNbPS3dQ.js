import{_ as s,c as e,a2 as t,o as l}from"./chunks/framework.DPuwY6B9.js";const o="/shots/article_image.png",b=JSON.parse('{"title":"常见问题","description":"","frontmatter":{"title":"常见问题"},"headers":[],"relativePath":"first-step/q&a/index.md","filePath":"first-step/q&a/index.md"}'),i={name:"first-step/q&a/index.md"};function n(p,a,c,r,d,h){return l(),e("div",null,a[0]||(a[0]=[t(`<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><p>对于您遇到的问题，建议优先通过查找历史issues寻找可能的解决方案 <a href="https://github.com/mirai-mamori/Sakurairo/issues?q=is%3Aissue+is%3Aclosed" target="_blank" rel="noreferrer">点击前往查找</a><br> 如果本文档没能解决您的问题，可以尝试使用搜索引擎搜索 “关键字 + site:docs.fuukei.org”<br> 看看是不是哪里没能引起你的注意</p><p>如果还是没能解决你的问题，可以 <a href="https://github.com/mirai-mamori/Sakurairo/issues/new/choose" target="_blank" rel="noreferrer">在此处</a> 参考模版提出您遇到的问题</p><h2 id="主题设置保存不生效怎么办" tabindex="-1">主题设置保存不生效怎么办？ <a class="header-anchor" href="#主题设置保存不生效怎么办" aria-label="Permalink to &quot;主题设置保存不生效怎么办？&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果您使用了优化类（静态缓存等）插件，请在保存主题设置后清理插件缓存。如果仍然无法生效，请提交 issue</p></div><h2 id="主题有些图片没加载出来怎么办" tabindex="-1">主题有些图片没加载出来怎么办？ <a class="header-anchor" href="#主题有些图片没加载出来怎么办" aria-label="Permalink to &quot;主题有些图片没加载出来怎么办？&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>首先检查你的网络环境及缓存，确认上述无问题后，请在主题设置中选择“关于主题” --&gt; “资源控制” --&gt; “视觉资源路径” 修改地址！<a href="/Sakurairo/About-Theme/#视觉资源路径">- &gt; &gt; &gt; 点我去看看视觉资源设置！&lt; &lt; &lt; -</a></p></div><h2 id="主题升级以后我会丢失什么吗" tabindex="-1">主题升级以后我会丢失什么吗？ <a class="header-anchor" href="#主题升级以后我会丢失什么吗" aria-label="Permalink to &quot;主题升级以后我会丢失什么吗？&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在主题设置及WP内置的主题自定义CSS功能内进行的任何设置均不会丢失，而对主题本体文件的修改将会丢失<br> 因为wordpress本身的特性，使用主题内建的的随机图片（gallary目录）在wordpress后台更新主题后会被清空，<br> 如果你使用主题内建随机图片，请手动上传主题更新文件到wp-content/themes目录完全覆盖进行手动更新</p></div><h2 id="我的服务器在国内-默认更新源无法检测更新怎么办" tabindex="-1">我的服务器在国内，默认更新源无法检测更新怎么办？ <a class="header-anchor" href="#我的服务器在国内-默认更新源无法检测更新怎么办" aria-label="Permalink to &quot;我的服务器在国内，默认更新源无法检测更新怎么办？&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在使用升级功能前，请手动前往主题设置，关于主题中切换更新源为除Github以外的其他选项即可</p></div><h2 id="我使用的浏览器访问启用本主题的网站-出现了问题-按钮失效-无法正常显示等-是主题问题吗" tabindex="-1">我使用的浏览器访问启用本主题的网站 出现了问题（按钮失效/无法正常显示等） 是主题问题吗？ <a class="header-anchor" href="#我使用的浏览器访问启用本主题的网站-出现了问题-按钮失效-无法正常显示等-是主题问题吗" aria-label="Permalink to &quot;我使用的浏览器访问启用本主题的网站 出现了问题（按钮失效/无法正常显示等） 是主题问题吗？&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在移动端，以下浏览器不支持：UC浏览器、夸克浏览器、QQ浏览器、安卓QQ内置浏览器、安卓微信内置浏览器。 在桌面端：不支持IE浏览器，对Edge Html引擎支援不佳。 如果你使用的浏览器不在上文范围内，请前往 Github 发送 issue 获取帮助</p></div><h2 id="我的网站怎么打开xx页面都是404" tabindex="-1">我的网站怎么打开XX页面都是404？ <a class="header-anchor" href="#我的网站怎么打开xx页面都是404" aria-label="Permalink to &quot;我的网站怎么打开XX页面都是404？&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><blockquote><p>1.请检查点击后跳转的链接是不是类似于这种：<code>.../xxx.php/xxx/...</code>，<br> 如果是，那么就是你没有正确配置伪静态，请根据你使用的服务器应用（apache、nginx等）自行寻找配置教程。<br> 配置完成后建议备份重要数据后清空wordpress数据库重新安装以清除已生成的错误链接。</p></blockquote><blockquote><p>2.如果不是，请确保你这个链接确指向一个真实存在的文章/页面/分类，并且它已发布。</p></blockquote></div><h2 id="我设置的图片、自定义字体等资源没有生效怎么办" tabindex="-1">我设置的图片、自定义字体等资源没有生效怎么办？ <a class="header-anchor" href="#我设置的图片、自定义字体等资源没有生效怎么办" aria-label="Permalink to &quot;我设置的图片、自定义字体等资源没有生效怎么办？&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>遇到这类问题，请先在PC端浏览器按F12，切换到网络面板（network）使用ctrl+F5清除缓存强制刷新，<br> 在页面停止载入后浏览所有已拉取的资源，检查资源是否被正常载入，<br> 如果资源条目底色为红色，建议右键在新标签页打开，看看浏览器能否正常访问，<br> 如果浏览器不能正常访问，请检查相关资源路径设置是否正确</p><p>对于手机端用到的资源请将页面宽度调到860px以下，建议额外使用插件将UA设置为安卓手机，然后按上方操作进行调试。</p><p>浏览器可以正常访问： 切换到控制台（console），检查蓝色链接条目，找到你设置的资源路径，<br> 如果该条目含有关键词<code>“Access-Control-Allow-Origin”</code>，请参照以下配置更新你的资源所在网站服务器配置然后重启：<br> Nginx/Openresty</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80 ; </span></span>
<span class="line"><span>    listen [::]:80 ; </span></span>
<span class="line"><span>    listen 443 ssl http2 ; </span></span>
<span class="line"><span>    listen [::]:443 ssl http2 ; </span></span>
<span class="line"><span>    server_name docs.fuukei.org; </span></span>
<span class="line"><span>    index index.php index.html index.htm default.php default.htm default.html; </span></span>
<span class="line"><span>    add_header Access-Control-Allow-Origin &#39;*&#39; always;      |&lt;&lt;&lt;主要就是参考这三项所在位置添加这三项即可</span></span>
<span class="line"><span>    add_header Access-Control-Allow-Methods &#39;*&#39; always;     |   套了cdn的域名请自行参考网上教程进行相关配置</span></span>
<span class="line"><span>    add_header Access-Control-Allow-Headers &#39;*&#39; always;     |   关键词“CORS报错”</span></span>
<span class="line"><span>    if ($request_method = &#39;OPTIONS&#39;) {</span></span>
<span class="line"><span>	    return 200;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ......</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果你的网站启用了https（htst、ssl证书），请同样引用https的资源，http的资源会被视为不安全进而被拦截。</p></div><h2 id="我的主页为什么有奇怪的声音" tabindex="-1">我的主页为什么有奇怪的声音？ <a class="header-anchor" href="#我的主页为什么有奇怪的声音" aria-label="Permalink to &quot;我的主页为什么有奇怪的声音？&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>查看浏览器网页标签是否有🔊图标可以判断是否是您的网页发出的声音，<br> 如果是，可以尝试关闭“全局设置——额外设置——音符触动特效”后刷新检查</p></div><h2 id="怎么配置cdn-图片cdn怎么使用" tabindex="-1">怎么配置cdn？图片cdn怎么使用？ <a class="header-anchor" href="#怎么配置cdn-图片cdn怎么使用" aria-label="Permalink to &quot;怎么配置cdn？图片cdn怎么使用？&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在“其他设置——低使用设置——图片cdn”,<br> 该功能可以修改全局上传到媒体库的文件的链接，其实不只是图片，<br> 为你的uploads目录单独建立一个服务器，分配一个二级域名即可，</p><p>举个例子：<br> 比如你的博客是<code>fuukei.org</code>，可以为<code>files.fuukei.org</code>配置cdn<br> fuukei.org的网站目录/文件夹在<code>/opt/openresty/openresty/www/sites/fuukei.org/index</code><br> 那么为需要代理的目录/文件夹就是<code>/opt/openresty/openresty/www/sites/fuukei.org/index/wp-content/uploads</code><br> 你可以创建一个新的站点，为其分配二级域名<code>files.fuukei.org</code>，然后创建index软链接或者硬链接指向需要代理的目录/文件夹即可<br> 如果你是使用docker部署的web服务器，在挂载卷中将wordpress目录挂载为本地目录， 然后将uploads目录挂载为cdn域名网站的index目录即可</p><p>那么你在图片CDN设置项应该填写的就是“<code>https://files.fuukei.org</code>”</p><p>同样，不一定必须指派index目录，如果您多个网站共用这一个资源站，<br> 目录映射对了，设置填写对了同样可以生效</p><h2 id="我设置的前台-背景图片-怎么没有生效" tabindex="-1">我设置的前台（背景图片）怎么没有生效？ <a class="header-anchor" href="#我设置的前台-背景图片-怎么没有生效" aria-label="Permalink to &quot;我设置的前台（背景图片）怎么没有生效？&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>主题默认开启自动切换暗色模式，在北京时间22:00到次日7:00会全局变为暗色，如果你发现网站变黑了应该就是这个原因。<br> 如果不是，请检查是不是误触小工具面板变成其他样式了。<br> 如果不是，是不是设置随机图片api但是出现问题了。<br> 如果不是，是不是图片跨域资源调用出现问题了。<br> 如果不是，请提交issue，我们会尽快回复您的问题。</p></div></div><h2 id="文章卡片的预览图片怎么设置-为什么都是随机图片" tabindex="-1">文章卡片的预览图片怎么设置，为什么都是随机图片？ <a class="header-anchor" href="#文章卡片的预览图片怎么设置-为什么都是随机图片" aria-label="Permalink to &quot;文章卡片的预览图片怎么设置，为什么都是随机图片？&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在文章的编辑页面这边可以进行更改。 <img src="`+o+'" alt="image"></p></div><h2 id="我无法更新文章、无法发布文章、无法更改设置怎么办" tabindex="-1">我无法更新文章、无法发布文章、无法更改设置怎么办？ <a class="header-anchor" href="#我无法更新文章、无法发布文章、无法更改设置怎么办" aria-label="Permalink to &quot;我无法更新文章、无法发布文章、无法更改设置怎么办？&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>尝试关闭网站防护、关闭WAF、关闭网站放篡改、关闭防XSS攻击、关闭防SQL注入后重试</p></div>',25)]))}const m=s(i,[["render",n]]);export{b as __pageData,m as default};