<template>
  <div class="my-4 overflow-x-auto rounded-lg border border-zinc-200 bg-white p-4">
    <div ref="el" class="mermaid flex justify-center"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import mermaid from 'mermaid'

const props = defineProps({
  code: { type: String, required: true },
})

const el = ref(null)

onMounted(async () => {
  mermaid.initialize({
    startOnLoad: false,
    theme: 'neutral',
    themeVariables: {
      primaryColor: '#fef3e9',
      primaryTextColor: '#1a1d23',
      primaryBorderColor: '#f36f21',
      lineColor: '#6b7280',
      fontSize: '14px',
    },
  })
  const id = 'mmd-' + Math.random().toString(36).slice(2, 8)
  try {
    const { svg } = await mermaid.render(id, props.code)
    el.value.innerHTML = svg
  } catch (e) {
    el.value.innerHTML =
      '<span class="text-sm text-red-600">Diagram error: ' + e.message + '</span>'
  }
})
</script>
