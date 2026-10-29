<template>
  <div>
    <Hero />

    <!-- Mobile nav -->
    <div class="sticky top-14 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur lg:hidden">
      <nav class="flex gap-1 overflow-x-auto px-4 py-2">
        <a
          v-for="s in sections"
          :key="s.id"
          :href="'#' + s.id"
          class="shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-100"
        >
          {{ s.num }} · {{ s.nav }}
        </a>
      </nav>
    </div>

    <div class="mx-auto flex max-w-6xl">
      <!-- Sidebar -->
      <aside
        class="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-zinc-200 bg-white px-4 py-8 lg:block"
      >
        <p class="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">Chapters</p>
        <nav class="space-y-0.5">
          <a
            v-for="s in sections"
            :key="s.id"
            :href="'#' + s.id"
            class="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors"
            :class="
              active === s.id
                ? 'bg-accent/10 font-semibold text-accent'
                : 'text-zinc-600 hover:bg-zinc-100'
            "
          >
            <span class="font-mono text-xs text-zinc-400">{{ s.num }}</span>
            <span>{{ s.nav }}</span>
          </a>
        </nav>
      </aside>

      <!-- Content -->
      <main class="min-w-0 flex-1 px-6 py-10">
        <div class="mx-auto max-w-3xl">
          <component :is="s.component" v-for="s in sections" :key="s.id" />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import Hero from '../sections/Hero.vue'
import Ch01 from '../sections/Ch01HtmlCss.vue'
import Ch02 from '../sections/Ch02WildWest.vue'
import Ch03 from '../sections/Ch03BigShift.vue'
import Ch04 from '../sections/Ch04Debate.vue'
import Ch05 from '../sections/Ch05Companion.vue'
import Ch06 from '../sections/Ch06Beautiful.vue'
import Ch07 from '../sections/Ch07AiEra.vue'
import Ch08 from '../sections/Ch08UnderHood.vue'
import Ch09 from '../sections/Ch09FullPicture.vue'
import Ch10 from '../sections/Ch10Rosbridge.vue'
import Ch11 from '../sections/Ch11Json.vue'
import Ch12 from '../sections/Ch12HowToTalk.vue'
import Ch13 from '../sections/Ch13State.vue'
import Ch14 from '../sections/Ch14Media.vue'
import Ch15 from '../sections/Ch15Cors.vue'
import Ch16 from '../sections/Ch16Moral.vue'

const sections = [
  { id: 'ch1', num: '01', nav: 'HTML & CSS', component: Ch01 },
  { id: 'ch2', num: '02', nav: 'jQuery era', component: Ch02 },
  { id: 'ch3', num: '03', nav: 'Components', component: Ch03 },
  { id: 'ch4', num: '04', nav: 'SSR vs SPA', component: Ch04 },
  { id: 'ch5', num: '05', nav: 'Vue vs React', component: Ch05 },
  { id: 'ch6', num: '06', nav: 'Tailwind', component: Ch06 },
  { id: 'ch7', num: '07', nav: 'AI tooling', component: Ch07 },
  { id: 'ch8', num: '08', nav: 'Runtimes', component: Ch08 },
  { id: 'ch9', num: '09', nav: 'Full stack', component: Ch09 },
  { id: 'ch10', num: '10', nav: 'rosbridge', component: Ch10 },
  { id: 'ch11', num: '11', nav: 'Why JSON', component: Ch11 },
  { id: 'ch12', num: '12', nav: 'WebSockets', component: Ch12 },
  { id: 'ch13', num: '13', nav: 'Pinia', component: Ch13 },
  { id: 'ch14', num: '14', nav: 'Camera', component: Ch14 },
  { id: 'ch15', num: '15', nav: 'CORS', component: Ch15 },
  { id: 'ch16', num: '16', nav: 'The moral', component: Ch16 },
]

const active = ref('ch1')
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) active.value = e.target.id
      })
    },
    { rootMargin: '-40% 0px -55% 0px' }
  )
  sections.forEach((s) => {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => observer && observer.disconnect())
</script>
