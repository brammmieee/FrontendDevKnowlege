<template>
  <div>
    <!-- Course intro -->
    <header class="border-b border-zinc-200 bg-white">
      <div class="mx-auto max-w-6xl px-6 py-10">
        <p class="mb-2 font-mono text-sm uppercase tracking-[0.2em] text-accent">Vue 3 in a hurry</p>
        <h1 class="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          The Vue Speed Course
        </h1>
        <p class="mt-3 max-w-2xl text-zinc-600">
          The core ideas of Vue 3 in eleven short sections — templates, reactivity, directives,
          components, and state. Read top to bottom, or jump around.
        </p>
      </div>
    </header>

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
        <p class="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">Course</p>
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

import V01 from '../course/V01What.vue'
import V02 from '../course/V02Setup.vue'
import V03 from '../course/V03Template.vue'
import V04 from '../course/V04Reactivity.vue'
import V05 from '../course/V05Directives.vue'
import V06 from '../course/V06ComputedWatch.vue'
import V07 from '../course/V07ComponentsProps.vue'
import V08 from '../course/V08Events.vue'
import V09 from '../course/V09Lifecycle.vue'
import V10 from '../course/V10PiniaComposables.vue'
import V11 from '../course/V11Cheatsheet.vue'

const sections = [
  { id: 'v1', num: '01', nav: 'What is Vue', component: V01 },
  { id: 'v2', num: '02', nav: 'Getting started', component: V02 },
  { id: 'v3', num: '03', nav: 'Template syntax', component: V03 },
  { id: 'v4', num: '04', nav: 'Reactivity', component: V04 },
  { id: 'v5', num: '05', nav: 'Directives', component: V05 },
  { id: 'v6', num: '06', nav: 'Computed & watch', component: V06 },
  { id: 'v7', num: '07', nav: 'Components & props', component: V07 },
  { id: 'v8', num: '08', nav: 'Events & v-model', component: V08 },
  { id: 'v9', num: '09', nav: 'Lifecycle', component: V09 },
  { id: 'v10', num: '10', nav: 'Pinia & composables', component: V10 },
  { id: 'v11', num: '11', nav: 'Cheat sheet', component: V11 },
]

const active = ref('v1')
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
