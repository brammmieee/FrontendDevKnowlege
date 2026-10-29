<template>
  <header class="sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur">
    <div class="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
      <router-link to="/" class="flex items-center gap-2 text-[15px] font-bold text-zinc-900">
        <span class="text-lg">🤖</span>
        <span class="hidden sm:inline">Frontend Story</span>
      </router-link>
      <nav class="ml-auto flex items-center gap-1">
        <router-link
          to="/"
          class="rounded-md px-3 py-1.5 text-sm font-medium text-zinc-600 hover:bg-zinc-100"
          :class="route.path === '/' ? 'bg-accent/10 font-semibold !text-accent' : ''"
        >
          The Story
        </router-link>
        <router-link
          to="/vue"
          class="rounded-md px-3 py-1.5 text-sm font-medium text-zinc-600 hover:bg-zinc-100"
          :class="route.path === '/vue' ? 'bg-accent/10 font-semibold !text-accent' : ''"
        >
          Vue Speed Course
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
