<template>
  <v-footer app :inset="inset">
      <v-spacer/>
      <span class="px-3"><v-switch v-model="dark" primary label="Dark"></v-switch></span>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
</template>

<script>
export default {
  name: 'footerbar',
  data: () => ({
    
  }),
  computed: {
    inset() {
      return this.$store.getters.getStyle.inset
    },
    dark: {
      get(){
        return this.$store.getters.getDarkMode
      },
      set(val) {
        this.$store.dispatch('setValueOf', {key: 'dark', value: val?1:0, needCookie: true})
      }
    },
  }
}
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
