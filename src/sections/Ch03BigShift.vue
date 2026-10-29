<template>
  <SectionShell id="ch3" num="03" title="The Big Shift: components & state">
    <p>
      The mindset flip: <strong>stop telling the DOM what to change</strong>, and instead
      <strong>declare the state</strong>, letting the UI follow automatically. This is called
      <strong>declarative</strong> programming — you describe the <em>result</em>, not every step.
    </p>

    <Callout type="analogy">
      <strong>Imperative</strong> = turn-by-turn directions: "take three steps, turn left, pick up the
      spoon." <strong>Declarative</strong> = the address: "make me coffee." You say <em>what</em> you
      want, not <em>how</em> to do it.
    </Callout>

    <p>The same counter, side by side:</p>
    <CodeBlock lang="javascript" filename="imperative.js" :code="imperative" />
    <CodeBlock lang="vue" filename="Declarative.vue" :code="declarative" />

    <p>
      The loop that makes this work is <strong>reactivity</strong>: when state changes, Vue re-renders
      just the parts of the UI that depend on it. You never touch the DOM.
    </p>
    <MermaidDiagram :code="loop" />

    <CodeBlock lang="vue" filename="RobotStatus.vue" :code="component" />

    <DemoBox label="Live demo — state is the source of truth (Vue)">
      <div>
        <p>
          Status:
          <strong :class="online ? 'text-green-600' : 'text-red-600'">
            {{ online ? 'ONLINE' : 'OFFLINE' }}
          </strong>
        </p>
        <button class="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white" @click="online = !online">
          Toggle status
        </button>
        <p class="mt-2 text-xs text-zinc-500">You only changed <code>online</code> — the text, color and label all updated themselves.</p>
      </div>
    </DemoBox>
  </SectionShell>
</template>

<script setup>
import { ref } from 'vue'
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import DemoBox from '../components/DemoBox.vue'
import Callout from '../components/Callout.vue'
import MermaidDiagram from '../components/MermaidDiagram.vue'

const online = ref(true)

const imperative = `// YOU do the work:
let n = 0
btn.addEventListener('click', () => {
  n++
  count.textContent = n   // find the element, write to it
})`

const declarative = `<script setup>
import { ref } from 'vue'
const count = ref(0)
<\/script>

<template>
  <button @click="count++">{{ count }}</button>
<\/template>`

const loop = `flowchart LR
  State["state: online = true"] -->|Vue renders| UI["shows: ONLINE (green)"]
  UI -->|user clicks| Change["online = false"]
  Change --> State`

const component = `<script setup>
import { ref } from 'vue'
const online = ref(true)
<\/script>

<template>
  <p>
    Status:
    <strong :class="online ? 'green' : 'red'">
      {{ online ? 'ONLINE' : 'OFFLINE' }}
    </strong>
  </p>
  <button @click="online = !online">Toggle</button>
<\/template>`
</script>
