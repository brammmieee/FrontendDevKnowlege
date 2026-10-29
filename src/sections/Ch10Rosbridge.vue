<template>
  <SectionShell id="ch10" num="10" title="Talking to the Robot: rosbridge_suite">
    <p>
      <strong>ROS</strong> (Robot Operating System) is the framework running on our robot. Despite the
      name, it's not a normal OS — it's <em>middleware</em>: programs called <strong>nodes</strong>
      talk to each other by publishing/subscribing to <strong>topics</strong> and calling
      <strong>services</strong>, exchanging <strong>typed messages</strong>.
    </p>

    <Callout type="warn">
      The problem: ROS nodes speak ROS's own wire protocol, which <strong>browsers can't understand</strong>.
      A web page can't just join the ROS network — it needs a <strong>translator</strong>. That
      translator is <strong>rosbridge</strong>.
    </Callout>

    <Callout type="analogy">
      rosbridge is the <strong>interpreter</strong> standing between the robot (which speaks ROS) and
      your web app (which speaks WebSockets + JSON). It listens for the robot's messages and relays
      them to the browser, and forwards your browser's commands back to the robot.
    </Callout>

    <p><strong>rosbridge_suite</strong> has three parts:</p>
    <ul class="list-disc space-y-1 pl-5">
      <li><strong>rosbridge_server</strong> — the WebSocket server the browser connects to.</li>
      <li><strong>rosbridge_library</strong> — the protocol: <code>subscribe</code>, <code>publish</code>, <code>call</code>.</li>
      <li><strong>rosapi</strong> — lets the browser ask about ROS itself (list topics, get message types).</li>
    </ul>

    <MermaidDiagram :code="diagram" />

    <p>Everything you do is a small JSON message with an <code>op</code> field:</p>
    <CodeBlock lang="json" filename="subscribe.json" :code="subscribe" />
    <CodeBlock lang="json" filename="publish.json" :code="publish" />
    <CodeBlock lang="json" filename="call_service.json" :code="call" />

    <div class="overflow-x-auto">
      <table class="w-full min-w-[440px] border-collapse text-sm">
        <thead>
          <tr class="border-b border-zinc-200 text-left text-zinc-500">
            <th class="py-2 pr-4 font-semibold">ROS concept</th>
            <th class="py-2 pr-4 font-semibold">rosbridge JSON</th>
          </tr>
        </thead>
        <tbody class="text-zinc-700">
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Topic (publish/subscribe)</td>
            <td class="py-2 pr-4 font-mono">{"op": "subscribe" | "publish", ...}</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Service (call)</td>
            <td class="py-2 pr-4 font-mono">{"op": "call_service", ...}</td>
          </tr>
          <tr>
            <td class="py-2 pr-4 font-medium">Message</td>
            <td class="py-2 pr-4 font-mono">"msg": { ...typed fields... }</td>
          </tr>
        </tbody>
      </table>
    </div>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import Callout from '../components/Callout.vue'
import MermaidDiagram from '../components/MermaidDiagram.vue'

const diagram = `flowchart LR
  Vue[Vue web app] -->|WebSocket + JSON| RB[rosbridge_server]
  RB -->|subscribe / publish| T["/battery_state (topic)"]
  T --> ROS[ROS nodes / robot]
  RB -->|call_service| S["/dock_robot (service)"]`

const subscribe = `{
  "op": "subscribe",
  "topic": "/battery_state",
  "type": "sensor_msgs/BatteryState"
}`

const publish = `{
  "op": "publish",
  "topic": "/cmd_vel",
  "msg": {
    "linear":  { "x": 0.5 },
    "angular": { "z": 0.0 }
  }
}`

const call = `{
  "op": "call_service",
  "service": "/dock_robot",
  "args": {}
}`
</script>
