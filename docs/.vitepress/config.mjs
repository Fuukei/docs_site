import { defineConfig } from 'vitepress';

const DEFAULT_LOCALE = 'zh';
const LOGO = 'https://s.nmxc.ltd/sakurairo_vision/@3.0/series/login_logo.webp';

const sharedHead = [
  ['link', { rel: 'icon', href: LOGO }],
  // ['script', { src: 'https://cdn.kusu.moe/KFC-Crazy-Thursday/KFC-crazy-thursday-NO-INSERT.js' }]
];

const sectionSchema = [
  {
    id: 'gettingStarted',
    items: [
      { id: 'wpInstall', slug: 'first-step/wp-install/' },
      { id: 'themeInstall', slug: 'first-step/theme-install/' },
      { id: 'faq', slug: 'first-step/q&a/' }
    ]
  },
  {
    id: 'themeOptions',
    items: [
      { id: 'preliminary', slug: 'Sakurairo/Preliminary/' },
      { id: 'global', slug: 'Sakurairo/Global/' },
      { id: 'homepage', slug: 'Sakurairo/Homepage/' },
      { id: 'pages', slug: 'Sakurairo/Pages/' },
      { id: 'others', slug: 'Sakurairo/Others/' },
      { id: 'bacRec', slug: 'Sakurairo/Bac-Rec/' },
      { id: 'aboutTheme', slug: 'Sakurairo/About-Theme/' },
      { id: 'templates', slug: 'Sakurairo/Templates/' }
    ]
  },
  {
    id: 'additionalFeatures',
    items: [
      { id: 'shortCode', slug: 'Sakurairo/Short-Code/' },
      { id: 'aiAnnotations', slug: 'Sakurairo/AI-Annotations/' },
      { id: 'linkManager', slug: 'Sakurairo/Link-Manager/' },
      { id: 'gallery', slug: 'Sakurairo/Gallery/' }
    ]
  }
];

const localeMessages = {
  zh: {
    label: '简体中文',
    lang: 'zh',
    title: 'Fuukei 周边文档',
    nav: {
      home: '主页',
      demo: '使用博客'
    },
    sections: {
      gettingStarted: '准备工作',
      themeOptions: '主题设置',
      additionalFeatures: '附加功能'
    },
    pages: {
      wpInstall: '安装 WordPress',
      themeInstall: '安装主题',
      faq: '常见问题',
      preliminary: '初步设置',
      global: '全局设置',
      homepage: '主页设置',
      pages: '页面设置',
      others: '其他设置',
      bacRec: '备份恢复',
      aboutTheme: '关于主题',
      templates: '模版',
      shortCode: '短代码',
      aiAnnotations: '文章注释',
      linkManager: '友链管理',
      gallery: '内建随机图',
      changelog: '更新日志'
    },
    socialLink: 'https://github.com/mirai-mamori/Sakurairo'
  },
  en: {
    label: 'English',
    lang: 'en',
    title: 'Fuukei Documentation',
    nav: {
      home: 'Home',
      demo: 'Use Blog'
    },
    sections: {
      gettingStarted: 'Getting Started',
      themeOptions: 'Theme Options',
      additionalFeatures: 'Additional Features'
    },
    pages: {
      wpInstall: 'Install WordPress',
      themeInstall: 'Install Theme',
      faq: 'FAQ',
      preliminary: 'Preliminary Setup',
      global: 'Global Options',
      homepage: 'Homepage Options',
      pages: 'Page Options',
      others: 'Other Options',
      bacRec: 'Backup and Recovery',
      aboutTheme: 'About the Theme',
      templates: 'Templates',
      shortCode: 'Shortcodes',
      aiAnnotations: 'Article Annotations',
      linkManager: 'Link Management',
      gallery: 'Built-in Random Images',
      changelog: 'Changelog'
    },
    socialLink: 'https://github.com/mirai-mamori/Sakurairo/blob/main/README_en.md'
  }
};

const sharedThemeConfig = {
  logo: LOGO,
  siteTitle: 'Theme-Sakurairo',
  footer: {
    copyright: 'This Page Use WTFPL Licensed | Copyright © 2020-2026 Fuukei™',
    message: ''
  },
  search: {
    provider: 'local'
  }
};

function withLocale(locale, slug = '') {
  const normalizedSlug = slug.replace(/^\/+/, '');

  if (!normalizedSlug) {
    return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
  }

  return locale === DEFAULT_LOCALE ? `/${normalizedSlug}` : `/${locale}/${normalizedSlug}`;
}

function createSectionItems(locale, section) {
  const messages = localeMessages[locale];

  return section.items.map((item) => ({
    text: messages.pages[item.id],
    link: withLocale(locale, item.slug)
  }));
}

function createSidebar(locale) {
  const messages = localeMessages[locale];
  const sections = sectionSchema.map((section) => ({
    text: messages.sections[section.id],
    items: createSectionItems(locale, section)
  }));

  return [
    ...sections,
    {
      text: messages.pages.changelog,
      link: withLocale(locale, 'Sakurairo/Update-Log/')
    }
  ];
}

function createNav(locale) {
  const messages = localeMessages[locale];
  const sections = sectionSchema.map((section) => ({
    text: messages.sections[section.id],
    items: createSectionItems(locale, section)
  }));

  return [
    {
      text: messages.nav.home,
      link: withLocale(locale)
    },
    ...sections,
    {
      text: messages.nav.demo,
      link: withLocale(locale, 'demo/')
    }
  ];
}

function createThemeConfig(locale) {
  return {
    ...sharedThemeConfig,
    nav: createNav(locale),
    sidebar: createSidebar(locale),
    socialLinks: [
      {
        icon: 'github',
        link: localeMessages[locale].socialLink
      }
    ]
  };
}

export default defineConfig({
  title: localeMessages.zh.title,
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  head: sharedHead,
  themeConfig: createThemeConfig('zh'),
  locales: {
    root: {
      label: localeMessages.zh.label,
      lang: localeMessages.zh.lang
    },
    en: {
      label: localeMessages.en.label,
      lang: localeMessages.en.lang,
      link: '/en/',
      title: localeMessages.en.title,
      themeConfig: createThemeConfig('en')
    }
  }
});
