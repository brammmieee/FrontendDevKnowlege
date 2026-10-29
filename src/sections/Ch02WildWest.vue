<template>
  <SectionShell id="ch2" num="02" title="The Wild West: vanilla JS & jQuery">
    <p>
      To make pages <strong>react</strong>, we added JavaScript. The browser turns your HTML into a
      live tree of objects called the <strong>DOM</strong> (Document Object Model), and JavaScript
      can read and change it. Early JavaScript was <strong>imperative</strong>: you personally find
      the element, personally change it, and personally remember the current value.
    </p>

    <Callout type="analogy">
      The DOM is a <strong>dollhouse</strong>, and imperative JS means <em>moving every piece of
      furniture by hand</em>: "walk to the counter, read the number, add one, write the number back."
      It works, but you have to track everything yourself.
    </Callout>

    <p>Here's the same counter written two ways — first plain JavaScript, then with <strong>jQuery</strong> (a library that made the DOM less painful to work with):</p>
    <CodeBlock lang="javascript" filename="vanilla.js" :code="vanilla" />
    <CodeBlock lang="javascript" filename="jquery.js" :code="jquery" />

    <Callout type="warn">
      The core problem: the <strong>current value lives inside the DOM</strong> (in the text of a
      <code>&lt;span&gt;</code>), not in a variable you control. As the app grows, state gets
      scattered across the page and becomes very hard to reason about — this is the "callback soup"
      every old-school frontend dev remembers.
    </Callout>

    <p>The DOM you're juggling looks like this under the hood:</p>
    <MermaidDiagram :code="tree" />

    <DemoBox label="Live demo — find the element, update it yourself (vanilla)">
      <div>
        <p>Count: <span id="vanilla-count">0</span></p>
        <button
          id="vanilla-btn"
          class="mt-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white"
        >
          Increment
        </button>
        <p class="mt-2 text-xs text-zinc-500">
          This button was wired up by hand with <code>addEventListener</code> + <code>textContent</code>.
        </p>
      </div>
    </DemoBox>
  </SectionShell>
</template>

<script setup>
import { onMounted } from 'vue'
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import DemoBox from '../components/DemoBox.vue'
import Callout from '../components/Callout.vue'
import MermaidDiagram from '../components/MermaidDiagram.vue'

onMounted(() => {
  const btn = document.getElementById('vanilla-btn')
  const count = document.getElementById('vanilla-count')
  let n = 0
  btn.addEventListener('click', () => {
    n++
    count.textContent = n
  })
})

const vanilla = `// 1. find the elements
const btn = document.getElementById('btn')
const count = document.getElementById('count')

// 2. keep the value somewhere yourself
let n = 0

// 3. on click, update both the variable AND the DOM
btn.addEventListener('click', () => {
  n++
  count.textContent = n   // write back to the page by hand
})`

const jquery = `// jQuery made selecting and updating shorter:
$('#btn').on('click', function () {
  $('#count').text(parseInt($('#count').text()) + 1)
})`

const tree = `flowchart TD
  Browser[browser] --> DOM[DOM - live tree of objects]
  DOM --> Btn["button (id: btn)"]
  DOM --> Count["span (id: count) - holds the value"]
  JS[JavaScript] -->|reads & writes| DOM`
</script>
