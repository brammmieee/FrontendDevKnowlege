<template>
  <SectionShell id="ch15" num="15" title="CORS: the browser's bouncer">
    <p>
      An <strong>origin</strong> is a combination of scheme + host + port. The browser's
      <strong>same-origin policy</strong> says: a page from one origin can't read data from another
      origin unless that other origin <em>explicitly allows</em> it. That rule is <strong>CORS</strong>
      (Cross-Origin Resource Sharing).
    </p>

    <Callout type="analogy">
      CORS is the <strong>bouncer at a club</strong>: your page (the guest) asks to talk to another
      server (the club), and the server decides whether your name is on the <strong>guest list</strong>.
      If not, the browser blocks you at the door.
    </Callout>

    <p>
      The classic case: our Vue app runs on <code>localhost:5173</code> and calls the API on
      <code>localhost:8000</code>. Different ports = different origins, so the browser blocks it by
      default — and the error looks like this:
    </p>
    <CodeBlock lang="text" filename="console error" :code="error" />

    <p>
      The fix is always <strong>on the server</strong>: it sends back an
      <code>Access-Control-Allow-Origin</code> header naming the allowed origin.
    </p>
    <CodeBlock lang="python" filename="main.py" :code="python" />

    <MermaidDiagram :code="diagram" />

    <Callout type="tip">
      <strong>Remember:</strong> CORS is a <em>browser</em> security rule, not a server rule — a
      non-browser client (like <code>curl</code> or Node) isn't affected. And for non-simple requests
      (e.g. <code>PUT</code>, custom headers) the browser first sends a <strong>preflight</strong>
      <code>OPTIONS</code> request to ask permission before the real one.
    </Callout>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import Callout from '../components/Callout.vue'
import MermaidDiagram from '../components/MermaidDiagram.vue'

const error = `Access to fetch at 'http://localhost:8000/status' from origin
'http://localhost:5173' has been blocked by CORS policy:
No 'Access-Control-Allow-Origin' header is present on the requested resource.`

const python = `from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # the Vue app
    allow_methods=["*"],
    allow_headers=["*"],
)`

const diagram = `flowchart LR
  App["Vue app (localhost:5173)"] -->|"GET /status"| API["FastAPI (localhost:8000)"]
  API -->|"Access-Control-Allow-Origin: localhost:5173"| App`
</script>
