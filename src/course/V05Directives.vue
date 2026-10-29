<template>
  <SectionShell id="v5" num="05" title="Directives">
    <p>
      Directives are <code>v-</code> attributes: <code>v-if</code>, <code>v-for</code>,
      <code>v-on</code> (<code>@</code>), <code>v-bind</code> (<code>:</code>), <code>v-model</code>.
    </p>
    <CodeBlock lang="vue" :code="code" />
    <DemoBox label="Live demo — v-if + v-for">
      <div>
        <button class="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white" @click="show = !show">
          Toggle list
        </button>
        <ul v-if="show" class="mt-2 list-disc pl-5 text-sm">
          <li v-for="topic in topics" :key="topic">{{ topic }}</li>
        </ul>
      </div>
    </DemoBox>
  </SectionShell>
</template>

<script setup>
import { ref } from 'vue'
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import DemoBox from '../components/DemoBox.vue'

const show = ref(true)
const topics = ['ref', 'v-if', 'v-for', 'v-model']

const code = `<button @click="show = !show">Toggle</button>

<ul v-if="show">
  <li v-for="topic in topics" :key="topic">{{ topic }}</li>
</ul>`
</script>
