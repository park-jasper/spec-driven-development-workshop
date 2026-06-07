<script setup lang="ts">
import { computed } from 'vue'
import { useNav, configs } from '@slidev/client'
import type { SlideInfo } from '@slidev/types'

const { currentPage, total, currentLayout, slides, currentSlideRoute } = useNav()

const currentSection = computed(() => {
  const idx = currentSlideRoute.value.no - 1
  for (let i = idx; i >= 0; i--) {
    const slide = slides.value[i]
    if ((slide.meta?.layout ?? (i === 0 ? 'cover' : 'default')) === 'section') {
      return (slide.meta?.slide as SlideInfo | undefined)?.title ?? null
    }
  }
  return null
})
</script>

<template>
  <footer v-if="currentPage !== 1 && currentLayout !== 'section'" class="bh-footer">
    <span class="bh-footer-topic">{{ currentSection ?? configs.title }}</span>
    <span class="bh-footer-pager">{{ currentPage }} / {{ total }}</span>
    <img src="./assets/bluehands-logo-basic.svg" alt="bluehands logo" class="bh-footer-logo" />
  </footer>
</template>

<style>
.bh-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--bh-footer-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  background-color: white;
  z-index: 100;
  font-size: 0.72rem;
  color: var(--bh-dark-blue);
  font-family: "Roboto", sans-serif;
}

.bh-footer-topic {
  font-weight: 500;
  color: var(--bh-primary-blue);
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bh-footer-pager {
  flex: 0 0 auto;
  padding: 0 1.25rem;
  opacity: 0.6;
  font-size: 0.68rem;
}

.bh-footer-logo {
  flex: 0 0 auto;
  height: 100%;
  width: auto;
}
</style>
