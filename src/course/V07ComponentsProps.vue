<template>
  <SectionShell id="v7" num="07" title="Components & props">
    <p>
      Components are reusable, self-contained pieces. Data flows down via <strong>props</strong>.
    </p>
    <CodeBlock lang="vue" filename="Child.vue" :code="code" />
    <DemoBox label="Live demo — a prop passed down to a child component">
      <StatusBadge label="battery" :value="battery" />
    </DemoBox>
  </SectionShell>
</template>

<script setup>
import { ref } from 'vue'
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import DemoBox from '../components/DemoBox.vue'
import StatusBadge from './demos/StatusBadge.vue'

const battery = ref(87)

const code = `<script setup>
defineProps({ label: String, value: Number })
<\/script>

<template>
  <span>{{ label }}: {{ value }}%</span>
<\/template>

<!-- Parent.vue -->
<StatusBadge label="battery" :value="battery" />`
</script>
