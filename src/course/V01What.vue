<template>
  <SectionShell id="v1" num="01" title="What is Vue?">
    <p>
      Vue is a <strong>progressive</strong> JavaScript framework for building
      <strong>reactive</strong> user interfaces. You write <strong>declarative</strong> templates,
      and Vue keeps the DOM in sync with your state.
    </p>
    <CodeBlock lang="vue" filename="Hello.vue" :code="code" />
    <DemoBox label="Live demo — type your name">
      <div>
        <input
          v-model="name"
          class="rounded-md border border-zinc-300 px-3 py-1.5 text-sm"
          placeholder="Your name"
        />
        <p class="mt-2">Hello, <strong>{{ name || 'world' }}</strong>!</p>
      </div>
    </DemoBox>
  </SectionShell>
</template>

<script setup>
import { ref } from 'vue'
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import DemoBox from '../components/DemoBox.vue'

const name = ref('')

const code = `<script setup>
import { ref } from 'vue'
const name = ref('')
<\/script>

<template>
  <input v-model="name" />
  <p>Hello, {{ name || 'world' }}!</p>
<\/template>`
</script>
