<template>
  <v-layout row justify-center>
    <v-dialog v-model="errorDialog" persistent max-width="390">
      <v-card >
        <v-card-text>!!!</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-3" flat @click="ok()">{{ $t('ok') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
    dsta() {
        return {
        }
    },
    computed: {
        errorDialog(){
            return !!this.$store.getters.errorDialog
        }
    },
    methods:{
        ok(){
            this.$store.dispatch('setValueOf', {key: 'errorDialog', value: false})
        }
    }
}
</script>

