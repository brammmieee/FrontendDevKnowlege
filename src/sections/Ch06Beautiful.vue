<template>
  <SectionShell id="ch6" num="06" title="Making It Beautiful: CSS vs Tailwind">
    <p>
      Plain CSS is powerful but has a notorious trap: the <strong>cascade</strong>. Rules combine and
      override each other based on <strong>specificity</strong>, so in a big file you get surprises —
      a style you wrote wins or loses for non-obvious reasons.
    </p>

    <Callout type="warn">
      A classic cascade surprise: both rules target the same button, but the more <em>specific</em>
      selector wins, even though you wrote the other one first.
      <CodeBlock lang="css" filename="specificity.css" :code="specificity" />
    </Callout>

    <p>
      <strong>Tailwind</strong> sidesteps this by styling <em>inline</em> with tiny utility classes.
      There's no cascade to fight and no class names to invent — you compose the look from a fixed
      palette of tokens.
    </p>

    <p>The same button, both ways:</p>
    <CodeBlock lang="css" filename="button.css" :code="css" />
    <CodeBlock lang="html" filename="button.html" :code="tailwind" />

    <DemoBox label="Live demo — the Tailwind button, rendered">
      <button class="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm">
        Start motor
      </button>
    </DemoBox>

    <div class="overflow-x-auto">
      <table class="w-full min-w-[440px] border-collapse text-sm">
        <thead>
          <tr class="border-b border-zinc-200 text-left text-zinc-500">
            <th class="py-2 pr-4 font-semibold">Criterion</th>
            <th class="py-2 pr-4 font-semibold">Plain CSS</th>
            <th class="py-2 pr-4 font-semibold">Tailwind</th>
          </tr>
        </thead>
        <tbody class="text-zinc-700">
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Control</td>
            <td class="py-2 pr-4">Total</td>
            <td class="py-2 pr-4">Fixed token palette</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Naming</td>
            <td class="py-2 pr-4">You invent class names</td>
            <td class="py-2 pr-4">None needed</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Cascade risk</td>
            <td class="py-2 pr-4">High (specificity bugs)</td>
            <td class="py-2 pr-4">None</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Consistency</td>
            <td class="py-2 pr-4">Up to you</td>
            <td class="py-2 pr-4">Built in (tokens)</td>
          </tr>
          <tr>
            <td class="py-2 pr-4 font-medium">AI-friendliness</td>
            <td class="py-2 pr-4">Harder to predict</td>
            <td class="py-2 pr-4 font-semibold text-accent">Excellent ✓</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Callout type="info">
      <strong>What AI prefers:</strong> utility classes are <em>predictable</em> — a model can compose
      <code>rounded-md bg-accent px-4</code> reliably, without having to guess what you named a class
      or how your cascade resolves. That predictability is exactly why AI coding tools are so much
      better with Tailwind than with sprawling custom stylesheets.
    </Callout>

    <Callout type="tip">
      <strong>Component libraries:</strong> we started with <strong>Bootstrap</strong> (a classic,
      jQuery-era toolkit), then swapped it for free, Vue-native UI libraries —
      <em>Vuetify, Quasar, PrimeVue, Element Plus, Naive UI</em>. These integrate with Vue's
      reactivity, are tree-shakable, and pair cleanly with Tailwind.
    </Callout>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import DemoBox from '../components/DemoBox.vue'
import Callout from '../components/Callout.vue'

const specificity = `.btn      { color: red; }   /* specificity 0,1,0 */
.card .btn { color: blue; }  /* specificity 0,2,0 → WINS */`

const css = `.btn {
  background: #f36f21;
  color: #fff;
  padding: .5rem 1rem;
  border-radius: .375rem;
  font-weight: 600;
}`

const tailwind = `<!-- the same button, no stylesheet, no class names to invent -->
<button class="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm">
  Start motor
</button>`
</script>
