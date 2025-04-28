import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Fuukei Documentation',
  head: [
    ['link', { rel: 'icon', href: 'https://s.nmxc.ltd/sakurairo_vision/@3.0/series/login_logo.webp' }],
    ["script", { src: '/js/main.js'}],
    //['script', { src: 'https://cdn.kusu.moe/KFC-Crazy-Thursday/KFC-crazy-thursday-NO-INSERT.js'}]
  ],
  themeConfig: {
    logo: 'https://s.nmxc.ltd/sakurairo_vision/@3.0/series/login_logo.webp',
    siteTitle: 'Theme-Sakurairo',

    sidebar: [
      { text: 'Getting Started',
        items: [
          { text: 'Install WordPress', link: '/first-step/wp-install/' },
          { text: 'Install Theme', link: '/first-step/theme-install/' },
          { text: 'FAQ', link: '/first-step/q&a/' }
      ]},
      { text: 'Theme Settings',
        items: [
          { text: 'Preliminary Setup', link: '/Sakurairo/Preliminary/' },
          { text: 'Global Settings', link: '/Sakurairo/Global/' },
          { text: 'Homepage Settings', link: '/Sakurairo/Homepage/' },
          { text: 'Page Settings', link: '/Sakurairo/Pages/' },
          { text: 'Other Settings', link: '/Sakurairo/Others/' },
          { text: 'Backup and Recovery', link: '/Sakurairo/Bac-Rec/' },
          { text: 'About the Theme', link: '/Sakurairo/About-Theme/' },
          { text: 'Templates', link: '/Sakurairo/Templates/' },
      ]},
      { text: 'Additional Features',
        items: [
          { text: 'Shortcodes', link: '/Sakurairo/Short-Code/' },
          { text: 'Article Annotations', link: '/Sakurairo/AI-Annotations/' },
          { text: 'Link Management', link: '/Sakurairo/Link-Manager/' },
          { text: 'Built-in Random Images', link: '/Sakurairo/Gallery/' }
      ]},
      { text: 'Changelog', link: '/Sakurairo/Update-Log/' }
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', 
        items: [
          { text: 'Install WordPress', link: '/first-step/wp-install/' },
          { text: 'Install Theme', link: '/first-step/theme-install/' },
          { text: 'FAQ', link: '/first-step/q&a/' }
      ]},
      { text: 'Theme Settings', 
        items: [
          { text: 'Preliminary Setup', link: '/Sakurairo/Preliminary/' },
          { text: 'Global Settings', link: '/Sakurairo/Global/' },
          { text: 'Homepage Settings', link: '/Sakurairo/Homepage/' },
          { text: 'Page Settings', link: '/Sakurairo/Pages/' },
          { text: 'Other Settings', link: '/Sakurairo/Others/' },
          { text: 'Backup and Recovery', link: '/Sakurairo/Bac-Rec/' },
          { text: 'About the Theme', link: '/Sakurairo/About-Theme/' },
          { text: 'Templates', link: '/Sakurairo/Templates/' },
      ]},
      { text: 'Additional Features',
        items: [
          { text: 'Shortcodes', link: '/Sakurairo/Short-Code/' },
          { text: 'Article Annotations', link: '/Sakurairo/AI-Annotations/' },
          { text: 'Link Management', link: '/Sakurairo/Link-Manager/' },
          { text: 'Built-in Random Images', link: '/Sakurairo/Gallery/' }
      ]},
      { text: 'Use Blog', link: '/demo/' },
      { text: 'UPYUN', link: 'https://www.upyun.com/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mirai-mamori/Sakurairo' },
    ],
    footer: {
      copyright: "Fuukei Sponsored by <a href='https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral' target='_blank'> <img alt='upyun-logo' src='https://s.nmxc.ltd/sakurairo_vision/@2.6/options/upyun_logo.webp'  style='display:inline-block;vertical-align:middle;width:60px;height:30px;'/></a> | This Page Uses MIT License | Copyright © 2020-2025 Fuukei™",
      message: ""
    },
    search: {
      provider: 'local'
    }
  }
});
