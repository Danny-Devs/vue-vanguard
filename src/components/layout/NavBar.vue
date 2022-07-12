<script setup>
import { useDarkMode } from '../../stores/darkMode'

const isDark = useDarkMode()

const toggleDarkMode = () => {
  isDark.setDarkMode(!isDark.isDark)
}
</script>

<template>
  <div class="flex justify-between px-4 py-3 dark:bg-slate-800 bg-slate-300">
    <div>Logo</div>

    <div>
      <div>
        <!-- hamburger icon -->
        <div></div>
        <!-- Nav links -->
        <div></div>
      </div>
      <div @click="toggleDarkMode">
        <!-- light/dark mode dynamic icon button -->
        {{ `isDark: ${isDark.isDark}` }}
      </div>
    </div>
  </div>
</template>
<style scoped></style>
