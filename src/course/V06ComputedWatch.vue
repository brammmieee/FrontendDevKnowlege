<template>
  <SectionShell id="v6" num="06" title="Computed & watchers">
    <p>
      <code>computed()</code> derives a cached value. <code>watch()</code> runs side effects
      when something changes.
    </p>
    <CodeBlock lang="vue" :code="code" />
    <DemoBox label="Live demo — computed">
      <div>
        <input
          v-model.number="n"
          type="number"
          class="rounded-md border border-zinc-300 px-3 py-1.5 text-sm"
        />
        <p class="mt-2">doubled = <strong>{{ double }}</strong></p>
      </div>
    </DemoBox>
  </SectionShell>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionShell from '../components/SectionShell.vue'
import CodeBlock from '../components/CodeBlock.vue'
import DemoBox from '../components/DemoBox.vue'

const n = ref(2)
const double = computed(() => n.value * 2)

const code = `import { ref, computed, watch } from 'vue'

const n = ref(2)
const double = computed(() => n.value * 2)  // cached

watch(n, (val, old) => {
  console.log(old, '->', val)
})`
</script>
