import { defineConfig } from 'vitepress';


export default defineConfig({
  title: 'Fuukei 周边文档',
  head:[
    ['link', { rel: 'icon', href: 'https://s.nmxc.ltd/sakurairo_vision/@2.7/series/login_logo.webp' }],
    ["script", { src: '/js/main.js'}],
    //['script', { src: 'https://cdn.kusu.moe/KFC-Crazy-Thursday/KFC-crazy-thursday-NO-INSERT.js'}]
    ],
    themeConfig: {
      logo: 'https://s.nmxc.ltd/sakurairo_vision/@2.7/series/login_logo.webp',
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
            { text: '短代码', link: '/Sakurairo/Short-Code/' }
        ]},
        {text: '更新日志',
          items: [
            { text: '更新日志', link: '/Sakurairo/Update-Log/' }
        ]}
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
            { text: '短代码', link: '/Sakurairo/Short-Code/' }
        ]},
          { text: '使用博客', link: '/demo/'},
          { text: '又拍云', link: 'https://www.upyun.com/'}
        ],
      socialLinks: [
          { icon: 'github', link: 'https://github.com/mirai-mamori/Sakurairo' },
        ],
      footer: {
          copyright: "Fuukei Sponsored by <a href='https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral' target='_blank'> <img alt='upyun-logo' src='https://s.nmxc.ltd/sakurairo_vision/@2.6/options/upyun_logo.webp'  style='display:inline-block;vertical-align:middle;width:60px;height:30px;'/></a> | This Page Use MIT Licensed | Copyright © 2020-2023 Fuukei™",
          message: ""
        },
        search: {
          provider: 'local'
        }
      }
});
