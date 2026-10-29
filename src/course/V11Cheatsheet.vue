<template>
  <SectionShell id="v11" num="11" title="Cheat sheet">
    <p>The essentials in one table — plus where to go next.</p>
    <div class="overflow-x-auto">
      <table class="w-full min-w-[420px] border-collapse text-sm">
        <thead>
          <tr class="border-b border-zinc-200 text-left text-zinc-500">
            <th class="py-2 pr-4 font-semibold">Syntax</th>
            <th class="py-2 pr-4 font-semibold">What it does</th>
          </tr>
        </thead>
        <tbody class="text-zinc-700">
          <tr v-for="row in rows" :key="row[0]" class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-mono text-accent">{{ row[0] }}</td>
            <td class="py-2 pr-4">{{ row[1] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      <strong>Next:</strong> read the official
      <a href="https://vuejs.org/guide/introduction" target="_blank" rel="noopener" class="text-accent underline">Vue docs</a>,
      build a small app, and check out the rest of this story (Pinia, routing, rosbridge).
    </p>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../components/SectionShell.vue'

const rows = [
  ['{{ }}', 'text interpolation'],
  [':attr', 'bind an attribute (v-bind)'],
  ['@event', 'listen to an event (v-on)'],
  ['v-if / v-for', 'conditional / loop'],
  ['v-model', 'two-way binding'],
  ['ref() / reactive()', 'make state reactive'],
  ['computed() / watch()', 'derive / react to changes'],
  ['defineProps / defineEmits', 'component in / out'],
  ['onMounted / onUnmounted', 'lifecycle + cleanup'],
  ['useXxx() composable', 'reuse logic'],
  ['Pinia store', 'shared global state'],
]
</script>
