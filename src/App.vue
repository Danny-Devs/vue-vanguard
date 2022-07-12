<script setup>
import { RouterView } from 'vue-router'
import { useDarkMode } from './stores/darkMode'

const isDark = useDarkMode()
</script>

<template>
  <div :class="isDark.isDark ? 'bg-slate-900' : 'bg-amber-50'" class="h-screen">
    <RouterView />
  </div>
</template>

<style></style>
