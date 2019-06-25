<template>
  <v-navigation-drawer 
    v-model="showDrawer"
    :temporary="temporary"
    :clipped="clipped"
    :floating="floating"
    :mini-variant="miniVariant"
    fixed overflow app>
        <!-- <v-list-tile v-if="responsive" class="mt-4">
          <v-text-field class="purple-input search-input" label="Search..." :color="color" />
        </v-list-tile> -->

        <v-list-tile v-for="(process, i) in links" :key="i" :to="process.path" :active-class="color" avatar class="v-list-item" >
          <v-list-tile-title
            v-text="$t('processes.'+process.title)"
          />
        </v-list-tile>

  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    color: 'cyan accent-4',
    responsive: false
  }),
  computed: {
    showDrawer: {
        get(){ 
          return this.$store.getters.getDrawer
        },
        set(val) {
          this.$store.dispatch('setValueOf', {key: 'drawer', value: val })
        }
    },
    temporary() {
      return this.$store.getters.getStyle.temporary
    },
    clipped() {
      return this.$store.getters.getStyle.clipped
    },
    floating() {
      return this.$store.getters.getStyle.floating
    },
    miniVariant () {
      return this.$store.getters.getStyle.miniVariant
    },
    links() {
        var processes = [];
        for (var i in this.$router.options.routes) {
            if (!this.$router.options.routes.hasOwnProperty(i)) {
                continue
            }
            var process = this.$router.options.routes[i];
            if(process.hasOwnProperty('title')) {
                if(process.hasOwnProperty('meta')) {
                    if(process.meta.hasOwnProperty('requiresAuth')) { 
                        if(process.meta.requiresAuth !== this.$store.getters.isAuthorizated)
                            continue
                    }
                }
                processes.push(process);
            }
        }
        return processes;
    }
  },
  mounted () {
        this.onResponsiveInverted()
        window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
        window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    onResponsiveInverted () {
        if (window.innerWidth < 991) {
            this.responsive = true
        } else {
            this.responsive = false
        }
    },
    changeLocale(locale){
        this.$i18n.locale = locale;
    },
  }
}
</script>
