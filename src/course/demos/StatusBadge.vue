<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm"
  >
    <span class="font-medium text-zinc-500">{{ label }}:</span>
    <span class="font-semibold text-accent">{{ value }}%</span>
  </span>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: Number, required: true },
})
</script>
