<template>
  <SectionShell id="ch13" num="13" title="Holding the State: Pinia + reconnect">
    <p>
      <strong>State</strong> is just "data the app needs to remember." As the robot streams data in,
      many different parts of the UI need the same values (battery, online status, position). Passing
      it around via props gets messy fast — that's called <strong>prop drilling</strong>.
    </p>

    <Callout type="analogy">
      <strong>Pinia</strong> is a <strong>shared whiteboard</strong> in the middle of the room. Every
      component reads from it and writes to it, so there's one single, reactive source of truth —
      no more handing values from component to component by hand.
    </Callout>

    <CodeBlock lang="javascript" filename="stores/robot.js" :code="store" />
    <CodeBlock lang="javascript" filename="BatteryWidget.vue" :code="consume" />

    <MermaidDiagram :code="diagram" />

    <p>
      Sockets drop — Wi-Fi blips, the robot reboots, the server restarts. So we <strong>reconnect with
      exponential backoff</strong>: retry, and wait a little longer each time.
    </p>
    <Callout type="analogy">
      Like redialing a dropped call: try again right away, then after a second, then two, then four —
      so you don't hammer a device that's still waking up.
    </Callout>
    <CodeBlock lang="javascript" filename="connect.js" :code="reconnect" />

    <DemoBox label="Live demo — Pinia store holds the robot state">
      <div>
        <p>
          Status:
          <strong :class="online ? 'text-green-600' : 'text-red-600'">
            {{ online ? 'ONLINE' : 'OFFLINE' }}
          </strong>
        </p>
        <p>Battery: <strong>{{ battery }}%</strong></p>
        <button
          class="mt-2 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-white"
          @click="simulate"
        >
          Simulate incoming message
        </button>
      </div>
    </DemoBox>
  </SectionShell>
</template>

<script setup>
import { defineStore, storeToRefs } from 'pinia'
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import Callout from '../components/Callout.vue'
import DemoBox from '../components/DemoBox.vue'
import MermaidDiagram from '../components/MermaidDiagram.vue'

const useRobot = defineStore('robot-demo', {
  state: () => ({ battery: 87, online: true }),
  actions: {
    onMessage(msg) {
      this.battery = msg.percentage
      this.online = msg.online ?? true
    },
  },
})

const robot = useRobot()
const { battery, online } = storeToRefs(robot)

function simulate() {
  robot.onMessage({ percentage: Math.max(20, battery.value - 7), online: true })
}

const store = `// stores/robot.js
export const useRobot = defineStore('robot', {
  state: () => ({ battery: 0, online: false }),
  actions: {
    onMessage(msg) {
      this.battery = msg.battery
      this.online = true
    },
  },
})`

const consume = `// any component can read/write the shared state
import { useRobot } from '@/stores/robot'
const robot = useRobot()

// robot.battery updates everywhere when a message arrives`

const reconnect = `function connect() {
  const ws = new WebSocket('ws://robot:9090')
  let backoff = 1000

  ws.onclose = () => {
    setTimeout(connect, backoff) // retry, doubling each time
    backoff *= 2
  }
}`

const diagram = `flowchart TD
  WS[WebSocket messages] --> Store["Pinia store (battery, online)"]
  Store --> C1[BatteryWidget]
  Store --> C2[StatusBadge]
  Store --> C3[ControlPanel]`
</script>
