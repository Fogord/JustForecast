<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="390">
      <v-card v-if="errors">
        <v-card-text :style="style">{{ message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-3" flat @click="ok(routeTo)">{{ $t('ok') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
    dsta() {
        return {
            style:{
                color: this.errors.color
            }
        }
    },
    computed: {
        dialog(){
            return !!this.$store.getters.dialog
        },
        errors(){
            return this.$store.getters.errors
        },
        message(){
            return this.errors.message || ""
        },
        routeTo(){
            return this.errors.routeTo || ""
        },
        style(){
            return { color: this.errors.color || "red" }
        }
    },
    methods:{
        ok(routeTo){
            this.$store.dispatch('setValueOf', {key: 'errors', value: null})
            this.$router.push({ path: routeTo })
        }
    }
}
</script>

