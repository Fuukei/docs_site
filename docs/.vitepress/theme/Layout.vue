<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { nextTick, onBeforeUnmount, onMounted, watch } from 'vue'
import { applySiteEffects, initializeSiteEffects, teardownSiteEffects } from './client/site-effects'

const { Layout: DefaultLayout } = DefaultTheme
const route = useRoute()

async function syncSiteEffects() {
  await nextTick()
  applySiteEffects()
}

onMounted(() => {
  initializeSiteEffects()
  void syncSiteEffects()
})

watch(
  () => route.path,
  () => {
    void syncSiteEffects()
  },
  { flush: 'post' }
)

onBeforeUnmount(() => {
  teardownSiteEffects()
})
</script>

<template>
  <DefaultLayout />
</template>