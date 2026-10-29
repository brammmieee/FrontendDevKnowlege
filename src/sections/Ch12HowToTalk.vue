<template>
  <SectionShell id="ch12" num="12" title="How to Talk: HTTP vs WebSocket vs SSE">
    <p>
      Three ways to move data between front and back, each with a different "shape" of conversation.
      The choice comes down to <strong>direction</strong> and <strong>how often</strong> data flows.
    </p>

    <Callout type="analogy">
      <strong>HTTP</strong> = a phone call you <strong>hang up</strong> after each answer. <strong>WebSocket</strong>
      = keeping the <strong>line open</strong> so either side can talk anytime. <strong>SSE</strong> = a
      <strong>radio broadcast</strong> — the server talks, you just listen.
    </Callout>

    <MermaidDiagram :code="diagram" />

    <CodeBlock lang="javascript" filename="http.js" :code="http" />
    <CodeBlock lang="javascript" filename="websocket.js" :code="ws" />
    <CodeBlock lang="javascript" filename="sse.js" :code="sse" />

    <div class="overflow-x-auto">
      <table class="w-full min-w-[480px] border-collapse text-sm">
        <thead>
          <tr class="border-b border-zinc-200 text-left text-zinc-500">
            <th class="py-2 pr-4 font-semibold">Criterion</th>
            <th class="py-2 pr-4 font-semibold">HTTP</th>
            <th class="py-2 pr-4 font-semibold">WebSocket</th>
            <th class="py-2 pr-4 font-semibold">SSE</th>
          </tr>
        </thead>
        <tbody class="text-zinc-700">
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Direction</td>
            <td class="py-2 pr-4">request → response</td>
            <td class="py-2 pr-4">two-way</td>
            <td class="py-2 pr-4">one-way (server → client)</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Connection</td>
            <td class="py-2 pr-4">Closed each time</td>
            <td class="py-2 pr-4">Stays open</td>
            <td class="py-2 pr-4">Stays open</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Best for</td>
            <td class="py-2 pr-4">One-shot calls</td>
            <td class="py-2 pr-4">Real-time, two-way</td>
            <td class="py-2 pr-4">Live feeds</td>
          </tr>
          <tr>
            <td class="py-2 pr-4 font-medium">In our stack</td>
            <td class="py-2 pr-4">REST API calls</td>
            <td class="py-2 pr-4 font-semibold text-accent">rosbridge (the main pipe)</td>
            <td class="py-2 pr-4">Optional</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Callout type="tip">
      A robot streams telemetry <strong>continuously</strong> (battery, position, sensor data) and needs
      <strong>instant commands</strong> back (drive, stop). That's a two-way, always-on conversation —
      exactly what <strong>WebSocket</strong> is for. HTTP's "call and hang up" would be too slow and
      clunky for that.
    </Callout>

    <DemoBox label="Live demo — simulated rosbridge WebSocket (no real robot attached)">
      <div class="mb-3 flex items-center gap-3">
        <span class="inline-flex items-center gap-1.5 text-sm font-semibold">
          <span
            class="inline-block h-2.5 w-2.5 rounded-full"
            :class="connected ? 'bg-green-500' : 'bg-zinc-400'"
          ></span>
          {{ connected ? 'Connected' : 'Disconnected' }}
        </span>
        <button
          class="rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-50"
          :disabled="connected"
          @click="connect"
        >
          Connect
        </button>
        <button
          class="rounded-md border border-zinc-300 px-3 py-1.5 text-xs font-semibold text-zinc-600"
          @click="disconnect"
        >
          Disconnect
        </button>
      </div>
      <pre class="min-h-[120px] overflow-x-auto rounded-md bg-ink p-3 text-xs leading-relaxed text-green-300">{{ logText }}</pre>
    </DemoBox>
  </SectionShell>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import Callout from '../components/Callout.vue'
import DemoBox from '../components/DemoBox.vue'
import MermaidDiagram from '../components/MermaidDiagram.vue'

const connected = ref(false)
const log = ref([])
let timer = null

const logText = computed(() =>
  log.value.length ? log.value.join('\n') : '// messages will appear here'
)

function connect() {
  if (connected.value) return
  connected.value = true
  push({ op: 'subscribe', topic: '/battery_state', type: 'sensor_msgs/BatteryState' })
  let battery = 87
  timer = setInterval(() => {
    battery -= Math.floor(Math.random() * 3)
    if (battery < 40) battery = 87
    push({ op: 'publish', topic: '/battery_state', msg: { percentage: battery, voltage: 24.1 } })
  }, 1200)
}

function disconnect() {
  connected.value = false
  clearInterval(timer)
  timer = null
}

function push(msg) {
  log.value.push(JSON.stringify(msg))
  if (log.value.length > 6) log.value.shift()
}

onUnmounted(() => clearInterval(timer))

const http = `// one-shot: ask, get an answer, hang up
const res = await fetch('/api/status')
const data = await res.json()`

const ws = `// persistent, two-way pipe
const ws = new WebSocket('ws://robot:9090')
ws.onmessage = (e) => console.log(JSON.parse(e.data))

ws.send(JSON.stringify({ op: 'subscribe', topic: '/battery_state' }))`

const sse = `// one-way server push (no send-back)
const es = new EventSource('/events')
es.onmessage = (e) => console.log(e.data)`

const diagram = `sequenceDiagram
  participant C as Client
  participant S as Server
  Note over C,S: HTTP - request, response, done
  C->>S: GET /status
  S-->>C: JSON response
  Note over C,S: WebSocket - the line stays open
  C->>S: connect
  S-->>C: message 1
  S-->>C: message 2
  C->>S: command`
</script>
