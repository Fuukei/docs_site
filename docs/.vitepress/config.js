import { defineConfig } from 'vitepress';


export default defineConfig({
  title: 'Fuukei 周边文档',
    themeConfig: {
      logo: 'https://s.nmxc.ltd/sakurairo_wiki/icon.png',
      siteTitle: 'Theme-Sakurairo',
      algolia: {
        appId: '6T4BKN737M',
        apiKey: '19cccccfe35e443cd756a202837b1819',
        indexName: 'Sakurairo_Wiki',
        searchParameters: {
          faeFilters: ['']
        }
      },
      sidebar: [
        {text: '准备工作',
          items: [
            { text: '安装 WordPress', link: '/Guide/' },
            { text: '安装主题', link: '/Guide-Install/'},
            { text: '常见问题', link: '/Q&A/'}
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
        ]}
      ],
      nav: [
          { text: '主页', link: '/'},
          { text: '准备工作', link: '/Guide/'},
          { text: '主题设置', link: '/Sakurairo/Preliminary/'},
          { text: '使用博客', link: '/demo/'},
          { text: '又拍云', link: 'https://www.upyun.com/'}
        ],
      socialLinks: [
          { icon: 'github', link: 'https://github.com/mirai-mamori/Sakurairo' },
          {
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Upyun</title><path d="M282.639,281.223L282.639,281.223L282.639,281.223L282.639,281.223L282.639,281.223c-2.473-1.861-5.034-3.52-7.664-4.983c-1.904-1.059-4.295-0.564-5.604,1.177l-16.492,21.912l-1.176,1.563c-1.786,2.373-4.638,3.665-7.605,3.529c-1.082-0.049-2.164-0.039-3.242,0.029c-8.289,0.525-16.308,4.525-21.694,11.681c-4.33,5.753-6.229,12.576-5.879,19.245c0.063,1.201,0.757,2.298,1.851,2.796c2.27,1.032,4.017,3.137,4.454,5.83c0.618,3.809-1.722,7.551-5.418,8.659c-4.357,1.306-8.832-1.363-9.814-5.724c-0.532-2.362,0.079-4.711,1.463-6.48c0.768-0.981,1.154-2.203,1.044-3.444c-0.758-8.552,1.52-17.402,7.09-24.802c7.026-9.334,17.717-14.274,28.562-14.337c2.09-0.012,4.052-1.011,5.309-2.681l15.188-20.178c1.189-1.579,0.421-3.848-1.476-4.405c-25.43-7.46-53.905,0.934-70.96,23.146c-22.099,28.781-16.729,70.279,11.987,92.462c2.687,2.076,5.482,3.909,8.36,5.508c1.893,1.052,4.274,0.537,5.577-1.193l16.492-21.911l1.176-1.563c1.786-2.373,4.638-3.665,7.605-3.529c1.082,0.049,2.164,0.039,3.242-0.029c8.289-0.525,16.308-4.525,21.694-11.681c4.33-5.753,6.229-12.576,5.879-19.245c-0.063-1.201-0.757-2.298-1.851-2.796c-2.27-1.032-4.017-3.137-4.454-5.83c-0.618-3.809,1.722-7.551,5.418-8.658c4.357-1.306,8.832,1.363,9.814,5.724c0.532,2.362-0.079,4.711-1.463,6.48c-0.768,0.981-1.154,2.203-1.044,3.444c0.758,8.552-1.52,17.402-7.09,24.802c-7.026,9.334-17.717,14.274-28.562,14.337c-2.09,0.012-4.052,1.011-5.309,2.681l-15.187,20.177c-1.18,1.568-0.439,3.842,1.444,4.396c25.633,7.534,54.368-1.045,71.384-23.652C317.614,344.545,311.773,303.151,282.639,281.223z "/></svg>'
            },
            link: 'https://www.upyun.com/'
          }
        ],
      footer: {
          copyright: 'MIT Licensed | Copyright © 2020-2023 Fuukei™',
        }
      }
});
