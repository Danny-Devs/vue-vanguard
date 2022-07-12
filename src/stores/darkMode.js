import { defineStore } from 'pinia'
import { useDark } from '@vueuse/core'

export const useDarkMode = defineStore({
  id: 'darkMode',
  state: () => ({
    // global darkMode value
    isDark: useDark(),
  }),
  getters: {},
  actions: {
    // set to 'light' or 'dark' or 'cyberpunk'
    setDarkMode(isDark) {
      this.isDark = isDark
      console.log('setDarkMode action fired. isDark: ', isDark)
    },
  },
})
