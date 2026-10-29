<template>
  <div :class="'my-4 rounded-lg border p-4 ' + s.box">
    <div class="flex gap-2.5">
      <span class="mt-0.5 text-base leading-none">{{ s.icon }}</span>
      <div class="min-w-0 flex-1 text-sm leading-relaxed">
        <span v-if="label" class="mr-1.5 font-semibold">{{ label }}</span>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: { type: String, default: 'info' }, // info | tip | warn | analogy
  label: { type: String, default: '' },
})

const styles = {
  info: {
    box: 'border-blue-200 bg-blue-50 text-blue-900',
    icon: '💡',
    label: 'In plain English',
  },
  tip: {
    box: 'border-green-200 bg-green-50 text-green-900',
    icon: '✅',
    label: 'Good to know',
  },
  warn: {
    box: 'border-amber-200 bg-amber-50 text-amber-900',
    icon: '⚠️',
    label: 'Gotcha',
  },
  analogy: {
    box: 'border-purple-200 bg-purple-50 text-purple-900',
    icon: '🧩',
    label: 'Real-world analogy',
  },
}

const s = computed(() => styles[props.type] || styles.info)
const label = computed(() => props.label || s.value.label)
</script>
