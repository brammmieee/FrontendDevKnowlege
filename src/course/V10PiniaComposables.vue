<template>
  <SectionShell id="v10" num="10" title="Pinia & composables">
    <p>
      <strong>Pinia</strong> holds shared app state. <strong>Composables</strong> (functions starting
      with <code>use</code>) reuse logic across components.
    </p>
    <CodeBlock lang="javascript" filename="useCounter.js" :code="composable" />
    <CodeBlock lang="javascript" filename="stores/robot.js" :code="pinia" />
    <DemoBox label="Live demo — a composable counter">
      <div>
        <p>shared count = <strong>{{ count }}</strong></p>
        <button class="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white" @click="inc">
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

function useCounter() {
  const count = ref(0)
  const inc = () => count.value++
  return { count, inc }
}

const { count, inc } = useCounter()

const composable = `import { ref } from 'vue'

export function useCounter() {
  const count = ref(0)
  const inc = () => count.value++
  return { count, inc }
}`

const pinia = `import { defineStore } from 'pinia'

export const useRobot = defineStore('robot', {
  state: () => ({ battery: 87 }),
})`
</script>
