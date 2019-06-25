<template>
  <v-layout row justify-center>
    <v-dialog v-model="show" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ $t('singUp') }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="User name*" required v-model="userName"></v-text-field>
                <span v-if="required['userName']" class="red--text">{{ required['userName'] }}</span>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required v-model="email"></v-text-field>
                <span v-if="required['email']" class="red--text">{{ required['email'] }}</span>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required v-model="pass"></v-text-field>
                <span v-if="required['pass']" class="red--text">{{ required['pass'] }}</span>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Confirm password*" type="password" required v-model="passwordConfirm"></v-text-field>
                <span v-if="required['passwordConfirm']" class="red--text">{{ required['passwordConfirm'] }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <small>*{{ $t('indicatedFormtext') }}</small>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-3" flat @click="cancel()">{{ $t('buttons.close') }}</v-btn>
          <v-btn color="blue darken-3" flat @click="accept()">{{ $t('buttons.save') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data() { 
      return {
        dialog: false,
        rerender: 0,
        userName: null,
        email: null,
        pass: null,
        passwordConfirm: null,
        required: {
          email: null,
          pass: null,
          passwordConfirm: null
        }
      }
    },
    computed: {
      show(){
        this.email = null;
        this.pass = null;
        this.passwordConfirm = null;
        this.required = {}

        let show = this.$store.getters.showRegisterationElement
        if(show) {
          this.$store.dispatch('setValueOf', {key: 'errors', value: null})
        }
        
        return this.$store.getters.showRegisterationElement
      },
      errors(){
        return this.$store.getters.errors
      }
    },
    methods:{
      cancel() {
        this.$store.dispatch('singup', false)
      },
      async accept() {
        this.$store.dispatch('setValueOf', {key: 'errors', value: null})
        this.required = {}

        if(this.userName && this.email && this.pass && this.passwordConfirm) {
          try {
            if (this.pass !== this.passwordConfirm) {
              throw this.$i18n.t('errors.notEqualPasswords')
            }

            await this.$store.dispatch('acceptRegistration', {
              userName:       this.userName,
              email:           this.email,
              pass:            this.pass,
              passwordConfirm: this.passwordConfirm
            })

            this.userName = null
            this.passwordConfirm = null
            this.pass = null

            this.$store.dispatch('setValueOf', {key: 'errors',  value: {
                                                                    message: this.$i18n.t('messages.registered'),
                                                                    color: "green",
                                                                    routeTo: "/home"
                                                                } 
            })
            this.$store.dispatch('singup', false)
          } catch(error) {
              this.$store.dispatch('setValueOf', {key: 'errors', value: {
                                                                    message: (this.$i18n.t('errors.error') + " " + error),
                                                                    routeTo: "/home"
                                                                } 
              })
              this.$store.dispatch('singup', false)
          };
        } else {
          if(!this.userName)         this.required["userName"]         = this.$i18n.t('errors.requiredUserName')
          if(!this.email)            this.required["email"]            = this.$i18n.t('errors.requiredEmail')
          if(!this.pass)             this.required["pass"]             = this.$i18n.t('errors.requiredPassword')
          if(!this.passwordConfirm)  this.required["passwordConfirm"]  = this.$i18n.t('errors.requiredConfirmPassword')
        }
      }
    }  
  }
</script>

<style>
</style>