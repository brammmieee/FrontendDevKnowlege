<template>
  <section :id="id" class="scroll-mt-24 border-b border-zinc-100 py-12 first:pt-0 last:border-0">
    <div class="mb-6 flex items-start gap-3">
      <span
        class="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-bold text-accent"
      >
        {{ num }}
      </span>
      <h2 class="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">{{ title }}</h2>
    </div>
    <div class="space-y-4 text-[15px] leading-relaxed text-zinc-700">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: { type: String, required: true },
  num: { type: String, required: true },
  title: { type: String, required: true },
})
</script>
