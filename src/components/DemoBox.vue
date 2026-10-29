<template>
  <div class="my-5 overflow-hidden rounded-xl border border-dashed border-accent/40 bg-white shadow-sm">
    <div class="flex items-center gap-2 border-b border-dashed border-accent/30 bg-accent/5 px-3 py-1.5">
      <span class="text-xs">🟢</span>
      <span class="text-xs font-semibold uppercase tracking-wide text-accent">{{ label }}</span>
    </div>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, default: 'Live demo' },
})
</script>
