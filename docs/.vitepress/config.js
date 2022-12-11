import { defineConfig } from 'vitepress';


export default defineConfig({
  title: 'Sakurairo',
    themeConfig: {
      logo: 'https://s.nmxc.ltd/sakurairo_wiki/icon.png',
      siteTitle: 'Sakurairo',
      algolia: {
        appId: '6T4BKN737M',
        apiKey: '19cccccfe35e443cd756a202837b1819',
        indexName: 'Sakurairo_Wiki',
        searchParameters: {
          faeFilters: ['']
        }
      },
      sidebar: [
        {text: '开始',
          items: [
            { text: '安装 WordPress', link: '/Guide/' },
            { text: '安装主题', link: '/Guide-Install/'}
        ]},
        {text: '主题设置',
          items: [
            { text: '前言', link: '/Settings/' },
            { text: '初步设置', link: '/Settings/First-Step/' },
            { text: '全局设置', link: '/Settings/Global/' },
            { text: '主页设置', link: '/Settings/Front-Page/' },
            { text: '页面设置', link: '/Settings/Pages/' },
            { text: '其他设置', link: '/Settings/Others/' },
            { text: '备份恢复', link: '/Settings/Backup/' },
            { text: '关于主题', link: '/Settings/About/' },
            { text: '模版', link: '/Settings/Templates/' },
            { text: '短代码', link: '/Settings/Short-Code/' }
        ]}
      ],
      nav: [
          { text: '主页', link: '/'},
          { text: '安装向导', link: '/Guide/'},
          { text: '配置', link: '/Settings/'},
          { text: '使用博客', link: '/demo/'},
          { text: '又拍云', link: 'https://www.upyun.com/'}
        ],
      footer: {
          copyright: 'MIT Licensed | Copyright © 2020-2023 Fuukei™',
        }
      }
});