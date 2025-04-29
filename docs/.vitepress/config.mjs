import { defineConfig } from 'vitepress';


export default defineConfig({
  title: 'Fuukei 周边文档',
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  head:[
    ['link', { rel: 'icon', href: 'https://s.nmxc.ltd/sakurairo_vision/@3.0/series/login_logo.webp' }],
    ["script", { src: '/js/main.js'}],
    //['script', { src: 'https://cdn.kusu.moe/KFC-Crazy-Thursday/KFC-crazy-thursday-NO-INSERT.js'}]
    ],
    themeConfig: {
      logo: 'https://s.nmxc.ltd/sakurairo_vision/@3.0/series/login_logo.webp',
      siteTitle: 'Theme-Sakurairo',
      sidebar: [
        {text: '准备工作',
          items: [
            { text: '安装 WordPress', link: '/first-step/wp-install/' },
            { text: '安装主题', link: '/first-step/theme-install/'},
            { text: '常见问题', link: '/first-step/q&a/'}
        ]},
        {text: '主题设置',
          items: [
            { text: '初步设置', link: '/Sakurairo/Preliminary/' },
            { text: '全局设置', link: '/Sakurairo/Global/' },
            { text: '主页设置', link: '/Sakurairo/Homepage/' },
            { text: '页面设置', link: '/Sakurairo/Pages/' },
            { text: '其他设置', link: '/Sakurairo/Others/' },
            { text: '备份恢复', link: '/Sakurairo/Bac-Rec/' },
            { text: '关于主题', link: '/Sakurairo/About-Theme/' },
            { text: '模版', link: '/Sakurairo/Templates/' },
        ]},
        {text: '附加功能',
          items: [
            { text: '短代码', link: '/Sakurairo/Short-Code/' },
            { text: '文章注释', link: '/Sakurairo/AI-Annotations/' },
            { text: '友链管理', link: '/Sakurairo/Link-Manager/' },
            { text: '内建随机图', link: '/Sakurairo/Gallery/' }
        ]},
          { text: '更新日志', link: '/Sakurairo/Update-Log/' }
      ],
      nav: [
          { text: '主页', link: '/'},
          { text: '准备工作', 
          items: [
            { text: '安装 WordPress', link: '/first-step/wp-install/' },
            { text: '安装主题', link: '/first-step/theme-install/'},
            { text: '常见问题', link: '/first-step/q&a/'}
        ]},
          { text: '主题设置', 
          items: [
            { text: '初步设置', link: '/Sakurairo/Preliminary/' },
            { text: '全局设置', link: '/Sakurairo/Global/' },
            { text: '主页设置', link: '/Sakurairo/Homepage/' },
            { text: '页面设置', link: '/Sakurairo/Pages/' },
            { text: '其他设置', link: '/Sakurairo/Others/' },
            { text: '备份恢复', link: '/Sakurairo/Bac-Rec/' },
            { text: '关于主题', link: '/Sakurairo/About-Theme/' },
            { text: '模版', link: '/Sakurairo/Templates/' },
        ]},
        {text: '附加功能',
          items: [
            { text: '短代码', link: '/Sakurairo/Short-Code/' },
            { text: '文章注释', link: '/Sakurairo/AI-Annotations/' },
            { text: '友链管理', link: '/Sakurairo/Link-Manager/' },
            { text: '内建随机图', link: '/Sakurairo/Gallery/' }
        ]},
          { text: '使用博客', link: '/demo/'}
        ],
      socialLinks: [
          { icon: 'github', link: 'https://github.com/mirai-mamori/Sakurairo' },
        ],
      footer: {
          copyright: "This Page Use WTFPL Licensed | Copyright © 2020-2025 Fuukei™",
          message: ""
        },
        search: {
          provider: 'local'
        }
      },

      locales: {
        root: {
          label: '简体中文',
          lang: 'zh'
        },
        en: {
          label: 'English',
          lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
          link: '/en',
          title: 'Fuukei Documentation',
          head: [
            ['link', { rel: 'icon', href: 'https://s.nmxc.ltd/sakurairo_vision/@3.0/series/login_logo.webp' }],
            ["script", { src: '/js/main.js'}],
            //['script', { src: 'https://cdn.kusu.moe/KFC-Crazy-Thursday/KFC-crazy-thursday-NO-INSERT.js'}]
          ],
          themeConfig: {
            logo: 'https://s.nmxc.ltd/Sakurairo_vision/@3.0/series/login_logo.webp',
            siteTitle: 'Theme-Sakurairo',
        
            sidebar: [
              { text: 'Getting Started',
                items: [
                  { text: 'Install WordPress', link: '/en/first-step/wp-install/' },
                  { text: 'Install Theme', link: '/en/first-step/theme-install/' },
                  { text: 'FAQ', link: '/en/first-step/q&a/' }
              ]},
              { text: 'Theme Settings',
                items: [
                  { text: 'Preliminary Setup', link: '/en/Sakurairo/Preliminary/' },
                  { text: 'Global Settings', link: '/en/Sakurairo/Global/' },
                  { text: 'Homepage Settings', link: '/en/Sakurairo/Homepage/' },
                  { text: 'Page Settings', link: '/en/Sakurairo/Pages/' },
                  { text: 'Other Settings', link: '/en/Sakurairo/Others/' },
                  { text: 'Backup and Recovery', link: '/en/Sakurairo/Bac-Rec/' },
                  { text: 'About the Theme', link: '/en/Sakurairo/About-Theme/' },
                  { text: 'Templates', link: '/en/Sakurairo/Templates/' },
              ]},
              { text: 'Additional Features',
                items: [
                  { text: 'Shortcodes', link: '/en/Sakurairo/Short-Code/' },
                  { text: 'Article Annotations', link: '/en/Sakurairo/AI-Annotations/' },
                  { text: 'Link Management', link: '/en/Sakurairo/Link-Manager/' },
                  { text: 'Built-in Random Images', link: '/en/Sakurairo/Gallery/' }
              ]},
              { text: 'Changelog', link: '/en/Sakurairo/Update-Log/' }
            ],
            nav: [
              { text: 'Home', link: '/' },
              { text: 'Getting Started', 
                items: [
                  { text: 'Install WordPress', link: '/en/first-step/wp-install/' },
                  { text: 'Install Theme', link: '/en/first-step/theme-install/' },
                  { text: 'FAQ', link: '/en/first-step/q&a/' }
              ]},
              { text: 'Theme Settings', 
                items: [
                  { text: 'Preliminary Setup', link: '/en/Sakurairo/Preliminary/' },
                  { text: 'Global Settings', link: '/en/Sakurairo/Global/' },
                  { text: 'Homepage Settings', link: '/en/Sakurairo/Homepage/' },
                  { text: 'Page Settings', link: '/en/Sakurairo/Pages/' },
                  { text: 'Other Settings', link: '/en/Sakurairo/Others/' },
                  { text: 'Backup and Recovery', link: '/en/Sakurairo/Bac-Rec/' },
                  { text: 'About the Theme', link: '/en/Sakurairo/About-Theme/' },
                  { text: 'Templates', link: '/en/Sakurairo/Templates/' },
              ]},
              { text: 'Additional Features',
                items: [
                  { text: 'Shortcodes', link: '/en/Sakurairo/Short-Code/' },
                  { text: 'Article Annotations', link: '/en/Sakurairo/AI-Annotations/' },
                  { text: 'Link Management', link: '/en/Sakurairo/Link-Manager/' },
                  { text: 'Built-in Random Images', link: '/en/Sakurairo/Gallery/' }
              ]},
              { text: 'Use Blog', link: '/en/demo/' }
            ],
            socialLinks: [
              { icon: 'github', link: 'https://github.com/mirai-mamori/en/Sakurairo' },
            ],
            footer: {
              copyright: "This Page Use WTFPL Licensed | Copyright © 2020-2025 Fuukei™",
              message: ""
            },
            search: {
              provider: 'local'
            }
          }
        }
      }
});
