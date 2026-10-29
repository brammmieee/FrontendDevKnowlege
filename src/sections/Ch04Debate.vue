<template>
  <SectionShell id="ch4" num="04" title="The Great Debate: server-rendered vs client-rendered">
    <p>
      "Rendering" just means <strong>turning code into HTML the browser can show</strong>. The big
      question is <em>where</em> that happens: on the <strong>server</strong> (before it reaches you),
      or in the <strong>browser</strong> (after you download a JavaScript bundle).
    </p>

    <Callout type="analogy">
      <strong>Server-rendered</strong> = a restaurant hands you a <strong>finished plate</strong>.
      <strong>Client-rendered (SPA)</strong> = they hand you <strong>ingredients and a kitchen</strong>
      and you cook it yourself. One is faster to start eating, the other gives you more control.
    </Callout>

    <p>The two round-trips, side by side:</p>
    <MermaidDiagram :code="diagram" />

    <p>Concrete examples of each end of the spectrum — <strong>HTMX</strong> (server-driven) and a <strong>React SPA</strong> (client-driven):</p>
    <CodeBlock lang="html" filename="htmx.html" :code="htmx" />
    <CodeBlock lang="javascript" filename="spa.jsx" :code="spa" />

    <div class="overflow-x-auto">
      <table class="w-full min-w-[480px] border-collapse text-sm">
        <thead>
          <tr class="border-b border-zinc-200 text-left text-zinc-500">
            <th class="py-2 pr-4 font-semibold">Criterion</th>
            <th class="py-2 pr-4 font-semibold">Server-rendered (SSR / HTMX)</th>
            <th class="py-2 pr-4 font-semibold">SPA / PWA</th>
          </tr>
        </thead>
        <tbody class="text-zinc-700">
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">First paint</td>
            <td class="py-2 pr-4">Fast (HTML ready)</td>
            <td class="py-2 pr-4">Slower (must load JS first)</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">SEO</td>
            <td class="py-2 pr-4">Excellent</td>
            <td class="py-2 pr-4">Needs extra work</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">App-like feel</td>
            <td class="py-2 pr-4">Page reloads</td>
            <td class="py-2 pr-4">Instant, no reloads</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Offline support</td>
            <td class="py-2 pr-4">No</td>
            <td class="py-2 pr-4">Yes (PWA + service worker)</td>
          </tr>
          <tr>
            <td class="py-2 pr-4 font-medium">State lives…</td>
            <td class="py-2 pr-4">On the server</td>
            <td class="py-2 pr-4">In the browser</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Callout type="tip">
      <strong>When to use what:</strong> content site, blog, SEO-critical, or simple UI →
      <strong>server-rendered / HTMX</strong>. Rich interactive app, real-time, offline, complex state →
      <strong>SPA / PWA</strong>. Want the best of both (SEO + app-like)? That's what meta-frameworks
      are for — chapter 09.
    </Callout>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import Callout from '../components/Callout.vue'
import MermaidDiagram from '../components/MermaidDiagram.vue'

const diagram = `sequenceDiagram
  participant B as Browser
  participant S as Server
  Note over B,S: Server-rendered (SSR / HTMX)
  B->>S: GET /page
  S-->>B: full HTML, ready to show
  Note over B,S: Client-rendered (SPA)
  B->>S: GET /app
  S-->>B: JavaScript bundle (no content yet)
  B->>B: runs JS, builds the page in the browser`

const htmx = `<!-- server returns HTML; HTMX swaps it in, no full reload -->
<button hx-get="/status" hx-target="#out">Refresh</button>
<div id="out"></div>

<!-- /status returns:  <p>Battery: 87%</p> -->`

const spa = `// the browser downloads a bundle, then builds the UI itself
import { useState, useEffect } from 'react'

function Status() {
  const [status, setStatus] = useState(null)

  useEffect(() => {
    fetch('/api/status').then(r => r.json()).then(setStatus)
  }, [])

  return <p>Battery: {status?.battery}%</p>
}`
</script>
