<template>
  <SectionShell id="ch5" num="05" title="Picking a Companion: Vue vs React vs Svelte">
    <p>
      All three solve the same problem — building reactive UIs — but with different philosophies.
      The same tiny counter exposes each one's ergonomics.
    </p>

    <CodeBlock lang="vue" filename="Counter.vue" :code="vue" />
    <CodeBlock lang="jsx" filename="Counter.jsx" :code="react" />
    <CodeBlock lang="html" filename="Counter.svelte" :code="svelte" />

    <Callout type="info">
      <strong>Read the differences in the code:</strong> Vue uses an HTML-like
      <strong>template</strong> with <code>@click</code>; React writes <strong>JSX</strong> (markup
      inside JavaScript) and needs a <strong>state hook</strong> (<code>useState</code>); Svelte looks
      almost like plain HTML but <strong>compiles away</strong> at build time so the browser runs less code.
    </Callout>

    <div class="overflow-x-auto">
      <table class="w-full min-w-[480px] border-collapse text-sm">
        <thead>
          <tr class="border-b border-zinc-200 text-left text-zinc-500">
            <th class="py-2 pr-4 font-semibold">Aspect</th>
            <th class="py-2 pr-4 font-semibold">Vue</th>
            <th class="py-2 pr-4 font-semibold">React</th>
            <th class="py-2 pr-4 font-semibold">Svelte</th>
          </tr>
        </thead>
        <tbody class="text-zinc-700">
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Learning curve</td>
            <td class="py-2 pr-4">Gentle</td>
            <td class="py-2 pr-4">Steeper (JSX, hooks, rules)</td>
            <td class="py-2 pr-4">Gentle</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Ecosystem / jobs</td>
            <td class="py-2 pr-4">Large</td>
            <td class="py-2 pr-4">Largest</td>
            <td class="py-2 pr-4">Smaller</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Batteries included</td>
            <td class="py-2 pr-4">Official router + store</td>
            <td class="py-2 pr-4">Pick your own</td>
            <td class="py-2 pr-4">Minimal</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">How it runs</td>
            <td class="py-2 pr-4">Runtime reactivity</td>
            <td class="py-2 pr-4">Runtime + virtual DOM</td>
            <td class="py-2 pr-4">Compiled away</td>
          </tr>
          <tr>
            <td class="py-2 pr-4 font-medium">Approachability</td>
            <td class="py-2 pr-4 font-semibold text-accent">High ✓</td>
            <td class="py-2 pr-4">Lower</td>
            <td class="py-2 pr-4">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Callout type="tip">
      <strong>Why we chose Vue:</strong> a large user base (plenty of libraries, answers and hires),
      but friendlier and more consistent than React. Single-file components keep template, script and
      style together, and the official router + store (Pinia) mean fewer decisions to fight over.
      It's the best balance of <em>power</em> and <em>approachability</em>.
    </Callout>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import Callout from '../components/Callout.vue'

const vue = `<script setup>
import { ref } from 'vue'
const count = ref(0)
<\/script>

<button @click="count++">{{ count }}</button>`

const react = `import { useState } from 'react'
const [count, setCount] = useState(0)
return <button onClick={() => setCount(count + 1)}>{count}</button>`

const svelte = `<script>
let count = 0
<\/script>

<button on:click={() => count++}>{count}</button>`
</script>
