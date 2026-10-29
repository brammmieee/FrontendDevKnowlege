<template>
  <header class="relative overflow-hidden bg-ink text-white">
    <div class="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <p class="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-accent">
        A frontend story, told live
      </p>
      <h1 class="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
        Frontend Development —<br />The Story So Far
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
        How we went from static HTML pages to a
        <strong class="text-white">live Vue web UI that drives a robot</strong>
        over WebSockets and JSON — and every tool we picked along the way.
      </p>
      <div class="mt-8 flex flex-wrap gap-2">
        <span
          v-for="t in stack"
          :key="t"
          class="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200"
        >
          {{ t }}
        </span>
      </div>
    </div>
  </header>
</template>

<script setup>
const stack = [
  'HTML',
  'CSS',
  'JavaScript',
  'Vue 3',
  'Tailwind',
  'Vite',
  'Pinia',
  'rosbridge',
  'WebSockets',
  'JSON',
  'FastAPI',
  'ROS',
]
</script>
