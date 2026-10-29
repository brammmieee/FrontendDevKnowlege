<template>
  <SectionShell id="ch9" num="09" title="The Full Picture: meta-frameworks & Python backends">
    <p>
      The frontend is only half the story. Two more pieces complete it: <strong>meta-frameworks</strong>
      (which add routing, server-rendering and API routes on top of Vue/React) and the
      <strong>back end</strong> (which serves data the frontend fetches).
    </p>

    <Callout type="info">
      <strong>Meta-frameworks</strong> = a framework on top of a framework. <strong>Nuxt</strong> (for
      Vue) and <strong>Next.js</strong> (for React) give you server-side rendering, SEO, routing and
      API endpoints out of the box — the "best of both worlds" from chapter 04. Given we chose Vue,
      that means <strong>Nuxt</strong> for us.
    </Callout>

    <MermaidDiagram :code="diagram" />
    <CodeBlock lang="vue" filename="nuxt/index.vue" :code="nuxt" />

    <p>On the back end, Python gives us three flavors — each with a different trade-off:</p>
    <CodeBlock lang="python" filename="flask_app.py" :code="flask" />
    <CodeBlock lang="python" filename="fastapi_app.py" :code="fastapi" />
    <CodeBlock lang="python" filename="django_views.py" :code="django" />

    <div class="overflow-x-auto">
      <table class="w-full min-w-[460px] border-collapse text-sm">
        <thead>
          <tr class="border-b border-zinc-200 text-left text-zinc-500">
            <th class="py-2 pr-4 font-semibold">Framework</th>
            <th class="py-2 pr-4 font-semibold">Best for</th>
            <th class="py-2 pr-4 font-semibold">Notable</th>
          </tr>
        </thead>
        <tbody class="text-zinc-700">
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Flask</td>
            <td class="py-2 pr-4">Small apps, prototypes</td>
            <td class="py-2 pr-4">Minimal, flexible</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">FastAPI</td>
            <td class="py-2 pr-4">Modern APIs</td>
            <td class="py-2 pr-4">Async + auto-generated docs</td>
          </tr>
          <tr>
            <td class="py-2 pr-4 font-medium">Django</td>
            <td class="py-2 pr-4">Full websites</td>
            <td class="py-2 pr-4">Batteries-included (admin, ORM)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Callout type="tip">
      The frontend and back end talk over <strong>JSON</strong>: the browser sends a request, the
      Python app answers with JSON, and the frontend renders it. That one fact — "everything is JSON" —
      deserves its own chapter (chapter 11).
    </Callout>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import Callout from '../components/Callout.vue'
import MermaidDiagram from '../components/MermaidDiagram.vue'

const diagram = `flowchart LR
  U[Vue SPA] -->|JSON over WebSocket| A[FastAPI]
  A --> B[ROS / robot]
  U -->|server-rendered| N[Nuxt / Next.js]`

const nuxt = `<template>
  <p>Rendered on the server, hydrated in the browser</p>
<\/template>`

const flask = `from flask import Flask
app = Flask(__name__)

@app.get("/status")
def status():
    return {"online": True, "battery": 87}`

const fastapi = `from fastapi import FastAPI

app = FastAPI()

@app.get("/status")
def status():
    return {"online": True, "battery": 87}`

const django = `# views.py
def status(request):
    return JsonResponse({"online": True, "battery": 87})`
</script>
