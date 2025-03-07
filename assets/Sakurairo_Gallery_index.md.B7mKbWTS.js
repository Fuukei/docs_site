import{_ as e,c as t,a2 as s,o as i}from"./chunks/framework.DPuwY6B9.js";const u=JSON.parse('{"title":"内建随机图API使用说明","description":"","frontmatter":{"title":"内建随机图API使用说明"},"headers":[],"relativePath":"Sakurairo/Gallery/index.md","filePath":"Sakurairo/Gallery/index.md"}'),o={name:"Sakurairo/Gallery/index.md"};function l(p,a,r,c,n,d){return i(),t("div",null,a[0]||(a[0]=[s(`<h1 id="内建随机图" tabindex="-1">内建随机图 <a class="header-anchor" href="#内建随机图" aria-label="Permalink to &quot;内建随机图&quot;">​</a></h1><p>主题内建随机图API，与主题设置自然集成，支持在线WebP图片体积优化</p><h2 id="功能说明" tabindex="-1">功能说明 <a class="header-anchor" href="#功能说明" aria-label="Permalink to &quot;功能说明&quot;">​</a></h2><p>首次使用请前往后台 <code>iro主题设置 &gt; 主页设置 &gt; 封面设置 &gt; 内建API控制器</code><br> 并点击初始化进行初始化</p><p>初始化后会在你网站的<code>wp-contents/uploads</code>下生成<code>iro_gallery</code>文件夹作为工作目录<br> 目录解释说明：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── iro_gallery       // 工作目录</span></span>
<span class="line"><span>│   ├── img           // 存放供访问的图片</span></span>
<span class="line"><span>│   ├── backup        // 用于备份原图的文件夹</span></span>
<span class="line"><span>|   ├── imglist.json  // 图片索引</span></span></code></pre></div><p>API使用文件索引代替每次都遍历目录进行性能优化，<br> 所以每次改变img内容后都需要重建索引，否则可能会返回无效图片链接。</p><p>backup目录为图片WebP优化原图备份目录，<br> 由于与超时断点恢复设置可能冲突，所以使用相关功能前请确保目录为空。</p><h2 id="使用方法" tabindex="-1">使用方法： <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法：&quot;">​</a></h2><h3 id="随机图片" tabindex="-1">随机图片 <a class="header-anchor" href="#随机图片" aria-label="Permalink to &quot;随机图片&quot;">​</a></h3><p>在<code>iro_gallery</code>下的<code>img</code>文件夹中存放你喜欢的图片，可以使用文件夹进行分类整理<br> 摆放完毕后返回后台点击重建索引即可<br> 然后切换封面随机图片选项为内建API就可以开始使用啦</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>API使用文件索引进行性能优化，<br> 所以每次更改内容后都需要重建索引！</p></div><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>内建API与主题CDN设置集成，具体参考<code>图片CDN</code>设置项，<br> 正确配置后相关图片即可从你的CDN链接加载。</p></div><h3 id="webp优化" tabindex="-1">WebP优化 <a class="header-anchor" href="#webp优化" aria-label="Permalink to &quot;WebP优化&quot;">​</a></h3><p>WebP是专为网络传输设计的文件格式，可以在尽量保证图片质量的前提下极大地减小文件的体积<br> 但部分旧版浏览器可能支持不佳</p><p>使用前请确保img文件夹内容可以被PHP写入，<br> 如果你使用的是管理员身份上传图片，请更改文件权限为可写（与程序创建的iro_gallery文件夹一致）</p><p>做好以上工作后，直接点击后台的<code>WebP优化</code>即可。<br> 转换完毕后记得<code>重建索引</code>！</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>转换过程页面持续加载、白屏、黑屏为正常现象，<br> 如果你没有更改过PHP的默认默认设置[max_execution_time]<br> 一般最长等待30~60秒即可（具体取决于你的文件数量）</p></div><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>页面显示后，请检查你的文件是否已全部转换完成。<br> 如果没有（受限于你服务器性能、PHP的允许时长配置），你可以尝试刷新页面以继续转换，直至全部转换完成。<br> API的断点恢复设计为直至backup目录内每个图片在img文件夹内均有对应WebP格式版本。<br> 你也可以自行本地使用工具转换后上传至img文件夹后点击重建索引。</p></div>`,19)]))}const h=e(o,[["render",l]]);export{u as __pageData,h as default};
