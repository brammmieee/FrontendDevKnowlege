<template>
  <SectionShell id="ch16" num="16" title="The Moral of the Story">
    <p>Where we came from, where we are, and where we're heading.</p>

    <ul class="list-disc space-y-1 pl-5">
      <li><strong>Came from:</strong> static HTML pages and imperative DOM pain.</li>
      <li><strong>Now:</strong> declarative Vue apps, AI-assisted workflows, and a live robot UI over WebSockets + JSON.</li>
      <li><strong>Heading:</strong> design systems + AI doing the heavy lifting, while we focus on the product.</li>
    </ul>

    <p>The whole stack, in one picture:</p>
    <MermaidDiagram :code="diagram" />

    <div class="flex flex-wrap gap-2 pt-2">
      <span
        v-for="t in stack"
        :key="t"
        class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600"
      >
        {{ t }}
      </span>
    </div>

    <Callout type="tip">
      <strong>Next steps:</strong> try the <router-link to="/vue" class="text-accent underline">Vue Speed Course</router-link>,
      build a small app (counter → to-do list → robot dashboard), and read the
      <a href="https://vuejs.org/guide/introduction" target="_blank" rel="noopener" class="text-accent underline">Vue docs</a>.
      The best way to learn is to wire a real button to a real WebSocket and watch JSON stream in.
    </Callout>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../components/SectionShell.vue'
import Callout from '../components/Callout.vue'
import MermaidDiagram from '../components/MermaidDiagram.vue'

const stack = [
  'Vue 3',
  'Vite',
  'Tailwind',
  'Pinia',
  'rosbridge',
  'WebSockets',
  'JSON',
  'FastAPI',
  'ROS',
]

const diagram = `flowchart LR
  U["Vue 3 SPA (Vite + Tailwind + Pinia)"] -->|"WebSocket + JSON"| RB[rosbridge_server]
  RB -->|"topics / services"| ROS[ROS nodes / robot]
  U -->|"REST + JSON"| F[FastAPI]
  F --> ROS`
</script>
