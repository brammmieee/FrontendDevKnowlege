<template>
  <SectionShell id="ch7" num="07" title="The AI Era: workflows & tooling">
    <p>
      AI has changed how the UI gets built. Instead of hand-coding every screen, we feed the AI our
      design sources and let it generate consistent, on-brand code. The pipeline:
      <strong>design → tokens → code → review</strong>.
    </p>

    <Callout type="info">
      <strong>What's an MCP?</strong> MCP (Model Context Protocol) is a standard way to give an AI tool
      access to outside tools and data — like a <strong>USB port for AI</strong>. Plug in a Figma MCP
      and the AI can read your designs; plug in Mobbin and it can search real app screens.
    </Callout>

    <MermaidDiagram :code="diagram" />

    <p>A concrete example: your design system lives as plain Markdown, and the AI turns it straight into code.</p>
    <CodeBlock lang="markdown" filename="design-system.md" :code="tokens" />
    <CodeBlock lang="html" filename="generated.html" :code="generated" />

    <Callout type="tip">
      The difference between <strong>generic AI</strong> and <strong>on-brand AI</strong> is the
      references you give it. Without sources, it invents generic "AI slop"; with a design system and
      real references, it ships UI that actually looks like yours.
    </Callout>

    <p>The tools in the loop:</p>
    <div class="flex flex-wrap gap-2">
      <span v-for="t in tools" :key="t" class="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
        {{ t }}
      </span>
    </div>
    <ul class="list-disc space-y-1 pl-5">
      <li><strong>Stitch MCP</strong> — design-to-code straight from the design file.</li>
      <li><strong>Figma / Penpot</strong> — the design handoff as the source of truth.</li>
      <li><strong>Design system (Markdown)</strong> — tokens and components as versioned text.</li>
      <li><strong>Mobbin</strong> (mobbin.com) — 600k+ real app screens to reference, plus the <strong>Mobbin MCP</strong> (mobbin.com/mcp) to search them from inside the AI tool.</li>
    </ul>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import Callout from '../components/Callout.vue'
import MermaidDiagram from '../components/MermaidDiagram.vue'

const tools = [
  'Stitch MCP',
  'Figma MCP',
  'Penpot',
  'Design system (Markdown)',
  'Mobbin + Mobbin MCP',
  'Design-token MCP',
]

const diagram = `flowchart TD
  A[Figma / Penpot design] --> B[Extract design tokens]
  B --> C[Design system in Markdown]
  C --> D[AI coding agent]
  D --> E[Vue components + styles]
  E --> F[Human review]
  Mobbin[Mobbin + Mobbin MCP] --> D
  Stitch[Stitch MCP] --> D`

const tokens = `# design-system.md
colors:
  accent: "#f36f21"
  ink:    "#1a1d23"

button:
  radius:  0.375rem
  padding: 0.5rem 1rem`

const generated = `<!-- the AI turns the tokens above into: -->
<button class="rounded-md bg-accent px-4 py-2 text-white font-semibold">
  Start motor
</button>`
</script>
