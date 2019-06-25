<template>
  <v-app id="justforecast" :dark="dark">
    
    <canvas id="canvas" v-show="false" height="0" />
    
    <toolbar/>

    <drawer/>

    <process/>

    <footerbar/>
  </v-app>
</template>

<script>
import Toolbar      from './components/toolbar.vue'
import Drawer       from './components/drawer.vue'
import Message      from './components/message.vue'
import Process      from './components/process.vue'
import Register     from './components/registeration.vue'
import Autorisation from './components/autorisation.vue'
import Footerbar    from './components/footerbar.vue'

export default {
  name: 'app',
  created(){
    if (!navigator.cookieEnabled) {
      this.$store.dispatch('setValueOf', {key: 'errors', value: ("Enable cookie for convenient site usage") })
    }
  },
  data () {
    return {
    }
  },
  computed: {
    dark(){
      return this.$store.getters.getDarkMode
    }
  },
  components: { Toolbar, Drawer, Message, Process, Register, Autorisation, Footerbar }
}
</script>

<style>
.application {
  font-family: 'Alegreya Sans', sans-serif;
}
.subheading {
  font-size: 18px!important;
  font-weight: 400;
}
.display-1, .headline {
    font-weight: 400;
    letter-spacing: normal!important;
    font-family: 'Alegreya Sans', sans-serif!important;
}
.display-2, .display-3 {
    font-weight: 400;
    font-family: 'Alegreya Sans', sans-serif!important;
}
/* table */
table.v-table thead th {
  font-size: 18px!important;
}
table.v-table tbody td {
  font-size: 18px!important;
  font-family: 'Roboto', sans-serif;
}
.theme--light.v-table thead th {
  color: rgba(0, 0, 0, 1);
}
/* charts */
#line-chart {
  color: rgba(0, 0, 0, 1);
}

/* lable */
.theme--light.v-label {
    color: rgba(0,0,0,1);
}
</style>

