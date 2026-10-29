<template>
  <div class="min-h-screen bg-zinc-50">
    <AppHeader />
    <router-view />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
</script>
