<template>
  <SectionShell id="ch1" num="01" title="The Humble Beginning: static HTML + CSS">
    <p>
      A web page is made of two languages working together:
      <strong>HTML</strong> is the <em>structure</em> (the skeleton — headings, paragraphs, buttons),
      and <strong>CSS</strong> is the <em>presentation</em> (the skin — colors, spacing, fonts).
      "Static" means everyone gets the exact same page, with nothing to interact with or change.
    </p>

    <Callout type="analogy">
      HTML is the <strong>frame of a house</strong> (the walls, rooms and doors). CSS is the
      <strong>paint, wallpaper and furniture</strong>. Same frame, totally different look — that's
      why the two are kept in separate files.
    </Callout>

    <CodeBlock lang="html" filename="index.html" :code="html" />

    <p>
      CSS works by <strong>selecting</strong> an element and giving it <strong>properties</strong>:
      a rule is <code>selector { property: value; }</code>.
    </p>
    <CodeBlock lang="css" filename="style.css" :code="css" />

    <p>
      The browser reads your HTML and builds a tree of elements (this tree later becomes important —
      it's what JavaScript will manipulate). Visually, the page above is just this:
    </p>
    <MermaidDiagram :code="tree" />

    <DemoBox label="Live demo — the page, rendered">
      <div style="font-family: sans-serif; max-width: 320px">
        <h3 style="font-weight: 700; margin: 0 0 0.25rem; color: #f36f21">Robot Control Panel</h3>
        <p style="margin: 0 0 0.5rem">
          Welcome. The robot is <span style="color: #16a34a; font-weight: 700">online</span>.
        </p>
        <ul style="margin: 0 0 0.5rem; padding-left: 1.25rem">
          <li>Start motor</li>
          <li>Stop motor</li>
        </ul>
        <button
          style="
            padding: 0.5rem 1rem;
            background: #f36f21;
            color: #fff;
            border: none;
            border-radius: 0.375rem;
            cursor: pointer;
          "
        >
          Start motor
        </button>
      </div>
    </DemoBox>

    <Callout type="tip">
      Notice the button does <strong>nothing</strong> when clicked. Static pages can show content,
      but they can't <em>react</em> to you. That limitation is exactly what the next chapter is about.
    </Callout>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import DemoBox from '../components/DemoBox.vue'
import Callout from '../components/Callout.vue'
import MermaidDiagram from '../components/MermaidDiagram.vue'

const html = `<h1>Robot Control Panel</h1>
<p>Welcome. The robot is <span class="ok">online</span>.</p>

<h2>Actions</h2>
<ul>
  <li>Start motor</li>
  <li>Stop motor</li>
</ul>

<button>Start motor</button>`

const css = `body { font-family: sans-serif; }   /* "body" selects every element */
.ok  { color: green; font-weight: bold; }  /* ".ok" selects class="ok" */
h1   { color: #f36f21; }                   /* "h1" selects the heading */`

const tree = `flowchart TD
  html[html] --> body[body]
  body --> h1[h1 - heading]
  body --> p[p - paragraph]
  body --> ul[ul - list]
  body --> button[button]
  ul --> li1[li - Start motor]
  ul --> li2[li - Stop motor]`
</script>
