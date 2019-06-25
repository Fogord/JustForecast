<template>
<v-layout row justify-center >
    <v-dialog v-model="show" persistent max-width="600px">
      <v-card>
        <v-card-title v-if="!isForgotPassword">
          <span class="headline">{{ $t('logIn') }}</span>
        </v-card-title>
        <v-card-title v-else>
          <span class="headline">{{ $t('buttons.forgotPaswword') }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap v-if="!isForgotPassword">
              <v-flex xs12>
                <v-text-field label="Email*" required v-model="email"></v-text-field>
                <span v-if="required['email']" class="red--text">{{ required['email'] }}</span>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required v-model="pass"></v-text-field>
                <span v-if="required['pass']" class="red--text">{{ required['pass'] }}</span>
              </v-flex>
              <v-flex xs9>
              </v-flex >
              <v-flex xs3>
                <span @click="rememberPassword" class="blue--text">{{ $t('messages.forgotPass') }}</span>
              </v-flex>
            </v-layout>
            <v-layout wrap v-else>
              <v-flex xs12>
                <v-text-field label="Email*" required v-model="email"></v-text-field>
                <span v-if="required['email']" class="red--text">{{ required['email'] }}</span>
              </v-flex>
            </v-layout>
          </v-container>
          
        </v-card-text>
        <v-card-actions v-if="!isForgotPassword">
          <v-spacer></v-spacer>
          <small>*{{ $t('indicatedFormtext') }}</small>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-3" flat @click="cancel()">{{ $t('buttons.close') }}</v-btn>
          <v-btn color="blue darken-3" flat @click="accept()">{{ $t('buttons.accept') }}</v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-spacer></v-spacer>
          <small>*{{ $t('indicatedFormtext') }}</small>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-3" flat @click="cancel()">{{ $t('buttons.close') }}</v-btn>
          <v-btn color="blue darken-3" flat @click="forgotPassword()">{{ $t('buttons.send') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data() { 
      return {
        rerender: 0,
        email: null,
        pass : null,
        isForgotPassword: false,
        errorColor: "",
        required: {
          email: null,
          pass: null
        }
      }
    },
    computed: {
      isAuthorizated() {
        return this.$store.getters.isAuthorizated
      },
      show() {
        this.required = {}
        this.isForgotPassword = false

        let show = this.$store.getters.showAutorisationElement
        if(show) {
          this.$store.dispatch('setValueOf', {key: 'errors', value: null})
        }

        return this.$store.getters.showAutorisationElement
      },
      errors(){
        return this.$store.getters.errors
      }
    },
    methods:{
      cancel() {
        this.$store.dispatch('login', false)
      },
      rememberPassword() {
        this.$store.dispatch('setValueOf', {key: 'errors', value: null})
        this.isForgotPassword = true;
      },
      async accept() {
        this.$store.dispatch('setValueOf', {key: 'errors', value: null})
        this.required = {}

        if(this.email && this.pass) {
          try {
           await this.$store.dispatch('acceptAutorisation', {
              email: this.email,
              pass:  this.pass
            })

            this.$store.dispatch('setValueOf', {key: 'isAuthorizated', value: true})
            this.$store.dispatch('login', false)

            this.pass = null
          } catch(error) {
              this.$store.dispatch('setValueOf', {key: 'errors', value: {
                                                                    message: (this.$i18n.t('errors.error') + " " + error),
                                                                } 
              })
              this.$store.dispatch('login', false)
          };
        } else {
          if(!this.email) this.required["email"] = this.$i18n.t('errors.requiredEmail')
          if(!this.pass)  this.required["pass"]  = this.$i18n.t('errors.requiredPassword')
        }
      },
      async forgotPassword() {
        if(this.email){
          try {
            await this.$store.dispatch('acceptRemaidPassword', this.email)

            this.$store.dispatch('setValueOf', {key: 'errors', value: {
                                                                    message: this.$i18n.t('messages.emailSend'),
                                                                    color: "blue"
                                                                }  
            })
            this.$store.dispatch('login', false)
          } catch (error) {
            this.$store.dispatch('setValueOf', {key: 'errors', value: {
                                                                    message: (this.$i18n.t('messages.notSendEmail') + error),
                                                                } 
            })
            this.$store.dispatch('login', false)
          }
        } else {
          if(!this.email) this.required["email"] = this.$i18n.t('errors.requiredEmail')
        }
      }
    }
  }
</script>