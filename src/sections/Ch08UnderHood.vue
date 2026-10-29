<template>
  <SectionShell id="ch8" num="08" title="Under the Hood: runtimes, package managers & DevTools">
    <p>
      A <strong>runtime</strong> is the engine that actually <em>executes</em> your JavaScript.
      Your code is just text until a runtime runs it.
    </p>

    <Callout type="analogy">
      Your JS code is the <strong>fuel</strong>; the runtime is the <strong>engine</strong>. The
      browser has an engine inside it (that's how web pages run). <strong>Node</strong> took that
      engine and put it on a <strong>server</strong>, so the same language runs on both ends.
      <strong>Bun</strong> is a newer, faster engine + toolchain.
    </Callout>

    <div class="overflow-x-auto">
      <table class="w-full min-w-[460px] border-collapse text-sm">
        <thead>
          <tr class="border-b border-zinc-200 text-left text-zinc-500">
            <th class="py-2 pr-4 font-semibold">Runtime</th>
            <th class="py-2 pr-4 font-semibold">Runs where</th>
            <th class="py-2 pr-4 font-semibold">Used for</th>
          </tr>
        </thead>
        <tbody class="text-zinc-700">
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Browser</td>
            <td class="py-2 pr-4">In the tab</td>
            <td class="py-2 pr-4">Rendering the app</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-medium">Node</td>
            <td class="py-2 pr-4">Server / tooling</td>
            <td class="py-2 pr-4">Backends, build scripts</td>
          </tr>
          <tr>
            <td class="py-2 pr-4 font-medium">Bun</td>
            <td class="py-2 pr-4">Server / tooling</td>
            <td class="py-2 pr-4">Same, but faster</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      A <strong>package</strong> is someone else's code you download and reuse (a dependency).
      A <strong>package manager</strong> installs and tracks those dependencies.
    </p>
    <CodeBlock lang="bash" :code="commands" />

    <div class="overflow-x-auto">
      <table class="w-full min-w-[460px] border-collapse text-sm">
        <thead>
          <tr class="border-b border-zinc-200 text-left text-zinc-500">
            <th class="py-2 pr-4 font-semibold">Command</th>
            <th class="py-2 pr-4 font-semibold">What it does</th>
          </tr>
        </thead>
        <tbody class="text-zinc-700">
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-mono">npm install</td>
            <td class="py-2 pr-4">Install dependencies from <code>package.json</code></td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-mono">npx</td>
            <td class="py-2 pr-4">Run a package once, without installing it</td>
          </tr>
          <tr class="border-b border-zinc-100">
            <td class="py-2 pr-4 font-mono">bun install</td>
            <td class="py-2 pr-4">Same as <code>npm install</code>, much faster</td>
          </tr>
          <tr>
            <td class="py-2 pr-4 font-mono">bunx</td>
            <td class="py-2 pr-4">Bun's version of <code>npx</code></td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      <strong>DevTools</strong> (F12 in the browser) is your debugging cockpit. A concrete scenario —
      you click a button and nothing happens:
    </p>
    <ul class="list-disc space-y-1 pl-5">
      <li><strong>Console</strong> — see the JavaScript error that broke it.</li>
      <li><strong>Network</strong> — see the API request that failed (and its status code).</li>
      <li><strong>Sources</strong> — set a breakpoint and step through the code.</li>
      <li><strong>Elements</strong> — inspect and tweak the HTML/CSS live.</li>
      <li><strong>Application</strong> — storage, cookies, service workers.</li>
      <li><strong>Performance / Lighthouse</strong> — measure speed and catch slow parts.</li>
    </ul>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import Callout from '../components/Callout.vue'

const commands = `npm install vue       # install a dependency
npx create-vite app   # run a one-off command

bun install           # same as npm install, faster (Bun)
bunx vite             # run a one-off with Bun`
</script>
