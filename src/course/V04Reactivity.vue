<template>
  <SectionShell id="v4" num="04" title="Reactivity: ref & reactive">
    <p>
      <code>ref()</code> wraps a value (use <code>.value</code> in JS, auto-unwrapped in templates).
      <code>reactive()</code> wraps an object.
    </p>
    <CodeBlock lang="vue" :code="code" />
    <DemoBox label="Live demo — the counter is a ref">
      <div>
        <p>count = <strong>{{ count }}</strong></p>
        <button class="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white" @click="count++">
          +1
        </button>
      </div>
    </DemoBox>
  </SectionShell>
</template>

<script setup>
import { ref } from 'vue'
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import DemoBox from '../components/DemoBox.vue'

const count = ref(0)

const code = `<script setup>
import { ref, reactive } from 'vue'
const count = ref(0)                 // use .value in JS
const robot = reactive({ battery: 87, online: true })
<\/script>

<template>
  <button @click="count++">{{ count }}</button>  <!-- auto-unwrapped -->
<\/template>`
</script>
