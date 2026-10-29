<template>
  <SectionShell id="v3" num="03" title="Template syntax">
    <p>
      Use <code v-pre>{{ }}</code> (mustaches) to output text, and <code>:</code> to bind attributes.
    </p>
    <CodeBlock lang="vue" :code="code" />
    <DemoBox label="Live demo — a bound title attribute">
      <div>
        <button
          :title="tip"
          class="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white"
        >
          Hover me
        </button>
        <p class="mt-2 text-sm text-zinc-600">Message: {{ tip }}</p>
      </div>
    </DemoBox>
  </SectionShell>
</template>

<script setup>
import { ref } from 'vue'
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import DemoBox from '../components/DemoBox.vue'

const tip = ref('This title was bound with :title')

const code = `<template>
  <p>{{ message }}</p>                 <!-- text -->
  <button :title="message">Hi</button> <!-- bind attribute -->
  <img :src="imageUrl" />              <!-- bind any attr -->
<\/template>`
</script>
