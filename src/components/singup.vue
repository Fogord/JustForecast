<template>
    <v-toolbar-items>
        <v-btn v-if="!isAuthorizated" flat class="pa-2" @click="singup()"><span >{{ $t('buttons.singUp') }}</span></v-btn>
        <v-btn v-else-if="isAuthorizated" flat class="pa-2" @click="getPersonalInfo()"><span >{{ userEmail }}</span></v-btn>
        <v-btn v-if="!isAuthorizated" flat class="pa-2" @click="login()"><span >{{ $t('buttons.logIn') }}</span></v-btn>
        <v-btn v-else-if="isAuthorizated" flat class="pa-2" @click="cancelAutorisation()"><span >{{ $t('buttons.logOut') }}</span></v-btn>
    </v-toolbar-items>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        isAuthorizated() {
            return this.$store.getters.isAuthorizated
        },
        userEmail() {
            return this.$store.getters.userEmail
        },
    },
    methods: {
        singup() {           
            this.$store.dispatch('singup', true)
            this.$store.dispatch('login', false)
        },
        login() {
            this.$store.dispatch('login', true)
            this.$store.dispatch('singup', false)
        },
        async cancelAutorisation() {
            this.$store.dispatch('setValueOf', {key: 'errors', value: null})
            try {
                await this.$store.dispatch('cancelAutorisation', {})
                this.$store.dispatch('setValueOf', {key: 'isAuthorizated', value: false})
                this.$router.push({ path: "/home" })
            } catch (err) {
                this.$store.dispatch('setValueOf', {key: 'isAuthorizated', value: false})
                this.$store.dispatch('setValueOf', {key: 'errors',  value: {
                                                                    message: (err),
                                                                    routeTo: "/home"
                                                                } 
                })
            }
        },
        async getPersonalInfo() {
            this.$router.push({ path: "/aboutuser" })
        }
    }
}

</script>

<style>
</style>