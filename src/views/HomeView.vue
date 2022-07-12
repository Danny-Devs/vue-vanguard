<script setup>
import { useDarkMode } from '../stores/darkMode'
import NavBar from '../components/layout/NavBar.vue'

const isDark = useDarkMode()

const toggleDarkMode = () => {
  isDark.setDarkMode(!isDark.isDark)
}
</script>

<template>
  <NavBar />
  <div class="dark:bg-slate-600 bg-white h-full">
    <h1>Home</h1>

    
  </div>
</template>
