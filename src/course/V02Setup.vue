<template>
  <SectionShell id="v2" num="02" title="Getting started">
    <p>
      Two ways in: a full <strong>Vite</strong> scaffold, or a one-line <strong>CDN</strong>
      for quick experiments.
    </p>
    <CodeBlock lang="bash" :code="bash" />
    <CodeBlock lang="html" filename="index.html" :code="cdn" />
  </SectionShell>
</template>

<script setup>
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'

const bash = `npm create vite@latest my-app -- --template vue
cd my-app
npm install
npm run dev`

const cdn = `<div id="app">{{ message }}</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
<script>
  Vue.createApp({ data: () => ({ message: 'Hello Vue!' }) }).mount('#app')
<\/script>`
</script>
