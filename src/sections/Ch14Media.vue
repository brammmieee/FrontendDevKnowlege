<template>
  <SectionShell id="ch14" num="14" title="Live Media: the camera feed">
    <p>
      To drive a robot you need to <em>see</em>. Two common ways to get video into the browser:
      <strong>MJPEG</strong> (a stream of JPEG images) and <strong>WebRTC</strong> (a real peer-to-peer
      video call).
    </p>

    <Callout type="analogy">
      <strong>MJPEG</strong> = the camera snaps a <strong>photo every moment</strong> and sends it —
      simple, but heavy. <strong>WebRTC</strong> = a proper <strong>video call</strong> — low latency
      and adaptive, but you have to set up the call first.
    </Callout>

    <CodeBlock lang="html" filename="mjpeg.html" :code="mjpeg" />
    <CodeBlock lang="javascript" filename="webrtc.js" :code="webrtc" />

    <div class="overflow-x-auto">
      <table class="w-full min-w-[460px] border-collapse text-sm">
        <thead>
          <tr class="border-b border-zinc-200 text-left text-zinc-500">
            <th class="py-2 pr-4 font-semibold">Criterion</th>
            <th class="py-2 pr-4 font-semibold">MJPEG</th>
            <th class="py-2 pr-4 font-semibold">WebRTC</th>
          </tr>
        </thead>
        <tbody class="text-zinc-700">
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Setup</td>
            <td class="py-2 pr-4">Trivial (an <code>&lt;img&gt;</code> tag)</td>
            <td class="py-2 pr-4">Needs signaling + STUN/TURN</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Latency</td>
            <td class="py-2 pr-4">Higher</td>
            <td class="py-2 pr-4">Low</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Bandwidth</td>
            <td class="py-2 pr-4">Heavy (full frames)</td>
            <td class="py-2 pr-4">Adaptive</td>
          </tr>
          <tr>
            <td class="py-2 pr-4 font-medium">Best for</td>
            <td class="py-2 pr-4">Quick dashboards</td>
            <td class="py-2 pr-4">Low-latency teleop</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Callout type="tip">
      Start with <strong>MJPEG</strong> — it's one line of HTML and works everywhere. Reach for
      <strong>WebRTC</strong> when latency or bandwidth actually matters.
    </Callout>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import Callout from '../components/Callout.vue'

const mjpeg = `<!-- MJPEG: a stream is just an image tag -->
<img src="http://robot:8080/stream" />`

const webrtc = `// WebRTC: peer-to-peer, low latency, needs signaling
const pc = new RTCPeerConnection()
pc.ontrack = (e) => (video.srcObject = e.streams[0])`
</script>
