<template>
  <figure class="my-4 overflow-hidden rounded-lg border border-zinc-200 bg-[#282c34]">
    <figcaption class="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-1.5 text-xs">
      <span class="font-mono uppercase tracking-wider text-zinc-400">{{ lang }}</span>
      <span v-if="filename" class="ml-auto truncate font-mono text-zinc-500">{{ filename }}</span>
    </figcaption>
    <pre class="hljs !m-0 !rounded-none !p-4"><code v-html="highlighted"></code></pre>
  </figure>
</template>

<script setup>
import { computed } from 'vue'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import json from 'highlight.js/lib/languages/json'
import python from 'highlight.js/lib/languages/python'
import bash from 'highlight.js/lib/languages/bash'
import markdown from 'highlight.js/lib/languages/markdown'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('js', javascript)
hljs.registerLanguage('jsx', javascript)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('vue', xml)
hljs.registerLanguage('css', css)
hljs.registerLanguage('json', json)
hljs.registerLanguage('python', python)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('shell', bash)
hljs.registerLanguage('markdown', markdown)

const props = defineProps({
  code: { type: String, required: true },
  lang: { type: String, default: 'text' },
  filename: { type: String, default: '' },
})

const highlighted = computed(() => {
  const lang = props.lang
  if (lang && hljs.getLanguage(lang)) {
    return hljs.highlight(props.code, { language: lang }).value
  }
  // no matching language — render as escaped plain text
  return props.code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
})
</script>
