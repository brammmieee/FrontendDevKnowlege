<template>
  <SectionShell id="v9" num="09" title="Lifecycle hooks">
    <p>
      Run code at key moments: <code>onMounted</code> (after first render),
      <code>onUpdated</code>, <code>onUnmounted</code> (cleanup).
    </p>
    <CodeBlock lang="vue" :code="code" />
    <DemoBox label="Live demo — mounted + cleanup">
      <div>
        <p>Seconds since mount: <strong>{{ seconds }}</strong></p>
      </div>
    </DemoBox>
  </SectionShell>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import DemoBox from '../components/DemoBox.vue'

const seconds = ref(0)
let timer = null

onMounted(() => {
  timer = setInterval(() => seconds.value++, 1000)
})

onUnmounted(() => clearInterval(timer))

const code = `import { onMounted, onUnmounted, ref } from 'vue'

const seconds = ref(0)
let timer

onMounted(() => {
  timer = setInterval(() => seconds.value++, 1000)
})

onUnmounted(() => clearInterval(timer))  // always clean up`
</script>
