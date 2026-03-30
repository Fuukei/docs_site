export type DemoLocale = 'zh' | 'en'

export type DemoSite = {
  name: string
  tagline: string
  url: string
  image: string
  localizedUrl?: Partial<Record<DemoLocale, string>>
  localizedImage?: Partial<Record<DemoLocale, string>>
}

export const demoSites: DemoSite[] = [
  {
    name: '明日が来ると',
    tagline: '信じてること自体が希望なんだ',
    url: 'https://kiseki.blog/',
    image: 'https://s.nmxc.ltd/sakurairo_vision/asuhe/furina.webp'
  },
  {
    name: '维安雨轩 の Blog',
    tagline: '寒蝉黎明之时，便是重生之日',
    url: 'https://blog.ukenn.top/',
    image: 'https://s.nmxc.ltd/fuukei_docs/sakurairo/demosite/blog.ukenn.top.webp'
  },
  {
    name: '不明のNetWorkOS',
    tagline: '五年代码，三年BUG',
    url: 'https://networkos.club/',
    image: 'https://s.nmxc.ltd/fuukei_docs/sakurairo/demosite/networkos.club.webp'
  },
  {
    name: 'Mashiro',
    tagline: '主题重构中（#滑稽）',
    url: 'https://2heng.xin/',
    image: 'https://s.nmxc.ltd/fuukei_docs/sakurairo/demosite/2heng.xin.webp'
  },
  {
    name: '楠ちゃん の Blog',
    tagline: 'Forgive me.',
    url: 'https://blog.nyat.icu/',
    image: 'https://s.nmxc.ltd/fuukei_docs/sakurairo/demosite/cmu.bwmc.live.webp'
  },
  {
    name: '猫猫王',
    tagline: '喵喵喵?',
    url: 'https://nicocat.cc/',
    image: 'https://avatars.githubusercontent.com/u/114812330'
  },
  {
    name: '雪猫社',
    tagline: '为梦想而生',
    url: 'https://www.yukicat.net/',
    image: 'https://s.nmxc.ltd/fuukei_docs/sakurairo/demosite/www.yukicat.net.webp'
  },
  {
    name: '吃土的小智',
    tagline: '我家还蛮大的.jpg',
    url: 'https://blog.chitudexiaozhi.com/',
    image: 'https://s.nmxc.ltd/fuukei_docs/sakurairo/demosite/blog.chitudexiaozhi.com.webp'
  },
  {
    name: '拿拿酱保护协会',
    tagline: 'Have Fun, Boom On',
    url: 'https://mtpa.live/',
    image: 'https://s.nmxc.ltd/fuukei_docs/sakurairo/demosite/mtpa.live.webp'
  },
  {
    name: 'JIPA233の小窝',
    tagline: 'Deed divides beings into lower and higher ones.',
    url: 'https://imjipa.top/',
    image: 'https://imjipa.top/static/avatar.jpg',
    localizedUrl: {
      zh: 'https://imjipa.top/'
    },
    localizedImage: {
      zh: 'https://imjipa.top/static/avatar.jpg'
    }
  },
  {
    name: 'Vincy云昔',
    tagline: '太阳出来了 雾就会散的.',
    url: 'https://blog.vincy1230.net/',
    image: 'https://s.nmxc.ltd/fuukei_docs/sakurairo/demosite/blog.vincent1230.top.webp'
  },
  {
    name: '紅楓樹下の石榴',
    tagline: '本当の声を響かせてよ',
    url: 'https://001666.xyz/',
    image: 'https://s.nmxc.ltd/fuukei_docs/sakurairo/demosite/001666.xyz.webp'
  },
  {
    name: 'Makoto',
    tagline: 'IN YOUR HEART',
    url: 'https://www.ylk.ink/',
    image: 'https://s.nmxc.ltd/fuukei_docs/sakurairo/demosite/www.ylk.cool.webp'
  },
  {
    name: '糖宝の小窝',
    tagline: '你可能不是最棒的，但你一定是最胖的！',
    url: 'https://blog.tangbao.ltd/',
    image: 'https://s.nmxc.ltd/fuukei_docs/sakurairo/demosite/blog.tangbao.ltd.webp'
  },
  {
    name: 'AkiDAY',
    tagline: '永恒秋日之星',
    url: 'https://blog.akiday.com/',
    image: 'https://blog.akiday.com/imgapi/profile.webp'
  },
  {
    name: 'MR_Blog',
    tagline: '只剩飘飘的清风，只剩悠悠的远钟',
    url: 'http://www.mroldl001.top/',
    image: 'https://www.mroldl001.top/wp-content/uploads/2024/07/1721901159-%E7%BE%8E%E6%B3%A2-%E8%99%9A%E7%A5%9E%E8%B5%A0-%E5%9C%86%E5%BD%A2%E5%8D%8A%E8%BA%AB.png'
  },
  {
    name: '梦落の小屋',
    tagline: '因为不可能，所以才值得相信',
    url: 'https://blog.dreamfall.cn/',
    image: 'https://img.mengluo.work/avatar.jpg'
  },
  {
    name: '梦の彼方',
    tagline: '我们所度过的每个平凡的日常，也许就是连续发生的奇迹',
    url: 'https://www.xgxdmx.com/',
    image: 'https://www.xgxdmx.com/wp-content/uploads/2018/12/cropped-illust_67136711_20180208_091521.png'
  },
  {
    name: '鸽子的小窝',
    tagline: '一只喜欢咕咕咕的老鸽子~',
    url: 'https://msoushi.xyz/',
    image: 'https://msoushi.xyz/wp-content/uploads/2023/12/20231205_040234.jpg'
  },
  {
    name: '白のBlog',
    tagline: '是一只只有一点点技术力的小白捏',
    url: 'https://blog.mashiro.pro/',
    image: 'https://blog.mashiro.pro/wp-content/uploads/myavatar.jpg'
  },
  {
    name: '瑶瑶的日记',
    tagline: '不许偷看哦~',
    url: 'https://www.luoshuitianyi.com/',
    image: 'http://www.luoshuitianyi.com/wp-content/uploads/2024/10/1728963195-illust_72888859_20200712_195916_compressed.jpg'
  },
  {
    name: '菊の学习小屋',
    tagline: 'なんで春日影やったの！',
    url: 'https://nailin.wisky.top/',
    image: 'https://nailin.wisky.top/wp-content/uploads/2025/03/1741017753-NV_@BUBHUWJ1J4WXZ_ZA.jpg'
  },
  {
    name: 'LovesAsunaの小窝',
    tagline: '迷失的人迷失了，相逢的人会再相逢',
    url: 'https://blog.hyosakura.com/',
    image: 'https://blog.hyosakura.com/avatar'
  }
]