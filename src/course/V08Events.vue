<template>
  <SectionShell id="v8" num="08" title="Events & v-model">
    <p>
      Children talk back with <strong>emits</strong>. <code>v-model</code> is sugar for
      a prop plus an <code>update:</code> event.
    </p>
    <CodeBlock lang="vue" :code="code" />
    <DemoBox label="Live demo — two-way v-model">
      <div>
        <input
          v-model="text"
          class="rounded-md border border-zinc-300 px-3 py-1.5 text-sm"
          placeholder="Type here"
        />
        <p class="mt-2">You typed: <strong>{{ text }}</strong></p>
      </div>
    </DemoBox>
  </SectionShell>
</template>

<script setup>
import { ref } from 'vue'
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import DemoBox from '../components/DemoBox.vue'

const text = ref('')

const code = `<script setup>
const emit = defineEmits(['update:modelValue'])
<\/script>

<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
<\/template>`
</script>
