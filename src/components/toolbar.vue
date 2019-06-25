<template>
  <v-toolbar id="toolbar" :clipped-left="clipped" app fixed>
    <v-toolbar-side-icon
      v-if="permanent"
      @click.stop="showDrawer()"
    ></v-toolbar-side-icon>

  
    <v-toolbar-items bottom @click="goHome()">
      <v-btn flat class="cyan--text accent-2 text--left">
      <h1 >Just Forecast</h1>
      </v-btn>
    </v-toolbar-items>


    <!-- <v-toolbar-title>{{ title }}</v-toolbar-title> -->
    
    <v-spacer />

    <v-toolbar-items>
      <v-flex align-center layout >
        <!-- <v-text-field v-if="responsiveInput" class="mr-4 mb-2 purple-input" label="Search..." hide-details color="secondary" /> -->

        <v-card-title >
          <v-menu bottom left v-for="(entry, i) in languages" :key="i">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on" v-show="entry.language == $i18n.locale" >
                    <flag :iso="entry.flag" />
                </v-btn>
            </template>
            <v-list>    
                <v-list-tile v-for="(entry, i) in languages" :key="i">
                      <v-list-tile-content>
                          <v-btn class="pa-2" @click="changeLocale(entry.language)" flat>{{ entry.name }}</v-btn>
                        </v-list-tile-content>
                </v-list-tile>
            </v-list>
          </v-menu>
        </v-card-title>
        
        <!-- <singup/> -->

      </v-flex>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Singup       from './singup.vue'

export default {
  data: () => ({
    process: null,
    responsive: false,
    responsiveInput: false
  }),
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  computed: {
    languages() {
      return this.$i18n.t('availableLanguage')
    },
    title(val) {
      return this.$i18n.t('processes.' + this.$route.name)
    },
    permanent() {
      return this.$store.getters.getStyle.permanent
    },
    clipped() {
      return this.$store.getters.getStyle.clipped
    }
  },
  methods: { 
    goHome(){
      this.$router.push({ path: '/home' })
    },
    showDrawer() {
      this.$store.dispatch('setValueOf', {key: 'drawer', value: !this.$store.getters.getDrawer })
    },
    changeLocale(locale){
        this.$store.dispatch('setValueOf', {key: 'locale', value: locale, needCookie: true })
        this.$i18n.locale = locale;
    },
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
        this.responsiveInput = false
      } else {
        this.responsive = false
        this.responsiveInput = true
      }
    }
  },
  components: { Singup }
}
</script>

