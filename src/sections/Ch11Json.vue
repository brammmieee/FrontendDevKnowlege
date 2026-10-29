<template>
  <SectionShell id="ch11" num="11" title="Why JSON Everywhere">
    <p>
      <strong>JSON</strong> (JavaScript Object Notation) is the format every message uses on the wire.
      It's just key-value pairs, arrays, and nesting — and it's the glue between the robot, the back
      end, and the frontend.
    </p>

    <Callout type="analogy">
      JSON is the <strong>lingua franca</strong> of the web — a simple shared language every system
      speaks. The older alternative, XML, was more like a <strong>verbose legal contract</strong>:
      technically precise, but heavy and wordy.
    </Callout>

    <p>Same data, two formats:</p>
    <CodeBlock lang="xml" filename="cmd_vel.xml" :code="xml" />
    <CodeBlock lang="json" filename="cmd_vel.json" :code="json" />

    <Callout type="info">
      <strong>Why JSON won:</strong> it's <strong>human-readable</strong> (you can eyeball it),
      <strong>language-agnostic</strong> (every language has JSON support), and — crucially for a web
      app — it maps <strong>one-to-one onto JavaScript objects</strong>. No parser or code-generation
      step needed.
    </Callout>

    <CodeBlock lang="javascript" filename="handle.js" :code="js" />

    <ul class="list-disc space-y-1 pl-5">
      <li><strong>Readable</strong> — inspect any message in DevTools instantly.</li>
      <li><strong>Universal</strong> — Python, ROS, JS, and every tool in between can read it.</li>
      <li><strong>Native to JS</strong> — <code>JSON.parse</code> returns real objects you can use directly.</li>
    </ul>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import Callout from '../components/Callout.vue'

const xml = `<cmd_vel>
  <linear>
    <x>0.5</x>
  </linear>
  <angular>
    <z>0.0</z>
  </angular>
</cmd_vel>`

const json = `{
  "linear":  { "x": 0.5 },
  "angular": { "z": 0.0 }
}`

const js = `const msg = JSON.parse(event.data)  // a real object, not a string

console.log(msg.topic)        // "/cmd_vel"
console.log(msg.msg.linear.x) // 0.5

JSON.stringify({ x: 0.5 })    // send the other way: object → text`
</script>
