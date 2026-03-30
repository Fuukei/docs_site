<script setup lang="ts">
import { computed } from 'vue'
import { demoSites, type DemoLocale } from '../data/demo-sites'

const props = withDefaults(defineProps<{ locale?: DemoLocale }>(), {
  locale: 'zh'
})

const copy = computed(() => {
  if (props.locale === 'en') {
    return {
      kicker: 'Sakurairo Showcase',
      title: 'Blogs Using This Theme',
      description:
        'A curated gallery of sites running Sakurairo. If you are already using the theme, you can submit your site on the discussion board and it will be reviewed before joining the showcase.',
      ctaLabel: 'Submit Your Site',
      ctaHref: 'https://github.com/Fuukei/docs_site/discussions/1',
      countLabel: 'sites featured',
      noteLabel: 'How It Works',
      noteTitle: 'The list stays compact, but the visual quality should feel complete.',
      points: [
        'Submissions are reviewed manually before they appear here.',
        'Sites should be accessible and clearly built on Sakurairo.',
        'The showcase is updated as new submissions pass review.'
      ],
      sectionLabel: 'Showcase List',
      visitLabel: 'Visit Site'
    }
  }

  return {
    kicker: 'Sakurairo Showcase',
    title: '使用本主题的博客',
    description:
      '这里收录了持续使用 Sakurairo 的站点示例。如果你已经在使用本主题，可以前往讨论区提交站点，经过审核后会加入这个展示页。',
    ctaLabel: '前往讨论区提交站点',
    ctaHref: 'https://github.com/Fuukei/docs_site/discussions/1',
    countLabel: '个已展示站点',
    noteLabel: '收录方式',
    noteTitle: '列表不会追求数量堆积，而是尽量保持站点完成度与风格辨识度。',
    points: [
      '提交后会经过人工审核，不是自动收录。',
      '站点需要能正常访问，并且明显基于 Sakurairo。',
      '展示页会随着审核结果持续补充与更新。'
    ],
    sectionLabel: '展示列表',
    visitLabel: '访问站点'
  }
})

const resolvedSites = computed(() =>
  demoSites.map((site) => {
    const href = site.localizedUrl?.[props.locale] ?? site.url
    const image = site.localizedImage?.[props.locale] ?? site.image

    return {
      ...site,
      href,
      image,
      hostname: toHostname(href)
    }
  })
)

function toHostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}
</script>

<template>
  <section class="demo-showcase">
    <header class="demo-showcase__hero">
      <div class="demo-showcase__hero-copy">
        <p class="demo-showcase__kicker">{{ copy.kicker }}</p>
        <h1>{{ copy.title }}</h1>
        <p class="demo-showcase__description">{{ copy.description }}</p>

        <div class="demo-showcase__actions">
          <a
            class="demo-showcase__primary"
            :href="copy.ctaHref"
            target="_blank"
            rel="noreferrer"
          >
            {{ copy.ctaLabel }}
          </a>

          <span class="demo-showcase__count">
            {{ resolvedSites.length }} {{ copy.countLabel }}
          </span>
        </div>
      </div>

      <aside class="demo-showcase__hero-note">
        <p class="demo-showcase__note-label">{{ copy.noteLabel }}</p>
        <h2>{{ copy.noteTitle }}</h2>
        <ul>
          <li v-for="point in copy.points" :key="point">{{ point }}</li>
        </ul>
      </aside>
    </header>

    <div class="demo-showcase__section-head">
      <p>{{ copy.sectionLabel }}</p>
      <span>{{ resolvedSites.length.toString().padStart(2, '0') }}</span>
    </div>

    <div class="demo-showcase__grid">
      <a
        v-for="site in resolvedSites"
        :key="site.name"
        class="demo-showcase__card"
        :href="site.href"
        target="_blank"
        rel="noreferrer"
      >
        <img
          class="demo-showcase__avatar"
          :src="site.image"
          :alt="site.name"
          loading="lazy"
          decoding="async"
          referrerpolicy="no-referrer"
        >

        <div class="demo-showcase__card-body">
          <div class="demo-showcase__card-head">
            <strong>{{ site.name }}</strong>
            <span>{{ site.hostname }}</span>
          </div>

          <p>{{ site.tagline }}</p>
        </div>

        <span class="demo-showcase__visit">{{ copy.visitLabel }}</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.demo-showcase {
  margin: 24px 32px 96px;
}

.demo-showcase__hero {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.85fr);
  gap: 20px;
  margin-bottom: 28px;
}

.demo-showcase__hero-copy,
.demo-showcase__hero-note,
.demo-showcase__card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(60, 85, 113, 0.16);
  border-radius: 24px;
  /* background:
    radial-gradient(circle at top left, rgba(172, 156, 145, 0.24), transparent 38%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(244, 246, 250, 0.98)); */
  box-shadow: 0 20px 46px rgba(24, 35, 46, 0.08);
}

.demo-showcase__hero-copy {
  padding: 32px;
}

.demo-showcase__hero-copy::after,
.demo-showcase__hero-note::after {
  content: '';
  position: absolute;
  inset: auto -40px -40px auto;
  width: 180px;
  height: 180px;
  border-radius: 999px;
  /* background: radial-gradient(circle, rgba(60, 85, 113, 0.14), transparent 68%); */
  pointer-events: none;
}

.demo-showcase__kicker,
.demo-showcase__note-label,
.demo-showcase__section-head span,
.demo-showcase__card-head span {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.demo-showcase__kicker,
.demo-showcase__note-label,
.demo-showcase__section-head span {
  color: var(--vp-c-brand);
}

.demo-showcase__hero-copy h1 {
  margin: 12px 0 0;
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
}

.demo-showcase__description {
  margin: 16px 0 0;
  max-width: 44rem;
  color: var(--vp-c-text-2);
  line-height: 1.8;
  font-size: 1rem;
}

.demo-showcase__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.demo-showcase__primary,
.demo-showcase__count {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 16px;
  border-radius: 999px;
  font-weight: 600;
}

.demo-showcase__primary {
  background: linear-gradient(135deg, var(--vp-c-brand), #ac9c91);
  color: #fff;
  box-shadow: 0 12px 26px rgba(60, 85, 113, 0.22);
}

.demo-showcase__primary:hover {
  text-decoration: none;
  filter: brightness(1.04);
}

.demo-showcase__count {
  border: 1px solid rgba(60, 85, 113, 0.16);
  color: var(--vp-c-text-2);
  background: rgba(255, 255, 255, 0.72);
}

.demo-showcase__hero-note {
  padding: 28px;
}

.demo-showcase__hero-note h2 {
  margin: 12px 0 0;
  font-size: 1.15rem;
  line-height: 1.55;
}

.demo-showcase__hero-note ul {
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
}

.demo-showcase__hero-note li {
  position: relative;
  padding-left: 18px;
  color: var(--vp-c-text-2);
  line-height: 1.7;
}

.demo-showcase__hero-note li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.72em;
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: var(--vp-c-brand);
  transform: translateY(-50%);
}

.demo-showcase__section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 28px 2px 14px;
}

.demo-showcase__section-head p {
  margin: 0;
  font-size: 0.98rem;
  font-weight: 600;
}

.demo-showcase__section-head span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  height: 34px;
  padding: 0 10px;
  border-radius: 999px;
  background: rgba(60, 85, 113, 0.08);
}

.demo-showcase__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.demo-showcase__card {
  display: flex;
  flex-direction: column;
  min-height: 240px;
  padding: 18px;
  transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
}

.demo-showcase__card:hover {
  text-decoration: none;
  transform: translateY(-6px);
  border-color: rgba(60, 85, 113, 0.28);
  box-shadow: 0 22px 40px rgba(24, 35, 46, 0.12);
}

.demo-showcase__avatar {
  width: 72px;
  height: 72px;
  border-radius: 20px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.74);
  box-shadow: 0 12px 24px rgba(24, 35, 46, 0.12);
}

.demo-showcase__card-body {
  margin-top: 16px;
}

.demo-showcase__card-head {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.demo-showcase__card-head strong {
  font-size: 1.05rem;
  color: var(--vp-c-text-1);
  line-height: 1.35;
}

.demo-showcase__card-head span {
  color: var(--vp-c-text-3);
}

.demo-showcase__card-body p {
  margin: 12px 0 0;
  color: var(--vp-c-text-2);
  line-height: 1.75;
}

.demo-showcase__visit {
  margin-top: auto;
  padding-top: 18px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--vp-c-brand);
  font-weight: 600;
}

.demo-showcase__visit::after {
  content: '↗';
  font-size: 1rem;
}

:global(.dark) .demo-showcase__hero-copy,
:global(.dark) .demo-showcase__hero-note,
:global(.dark) .demo-showcase__card {
  border-color: rgba(207, 195, 175, 0.12);
  /* background:
    radial-gradient(circle at top left, rgba(207, 195, 175, 0.1), transparent 38%),
    linear-gradient(180deg, rgba(20, 24, 31, 0.96), rgba(15, 19, 25, 0.98)); */
  box-shadow: none;
}

:global(.dark) .demo-showcase__count {
  border-color: rgba(207, 195, 175, 0.12);
  background: rgba(255, 255, 255, 0.03);
}

:global(.dark) .demo-showcase__section-head span {
  background: rgba(255, 255, 255, 0.04);
}

:global(.dark) .demo-showcase__avatar {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: none;
}

@media (max-width: 960px) {
  .demo-showcase__hero {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .demo-showcase {
    margin: 8px 0 72px;
  }

  .demo-showcase__hero-copy,
  .demo-showcase__hero-note {
    padding: 24px 20px;
  }

  .demo-showcase__hero-copy h1 {
    font-size: 2rem;
  }

  .demo-showcase__grid {
    grid-template-columns: 1fr;
  }
}
</style>