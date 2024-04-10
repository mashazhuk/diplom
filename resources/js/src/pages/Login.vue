<template>
    <v-sheet class="mx-auto" width="300">        
      <v-form @submit.prevent="submit" ref="form">
        <v-text-field
          v-model="email"
          :counter="10"
          :rules="emailRules"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          :counter="10"
          :rules="passwordRules"
          label="Пароль"
          required
        ></v-text-field>
  
        <div class="d-flex flex-column">
          <v-btn class="mt-4" color="success" block @click="validate">
            Validate
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </template>
  
  <script>
    export default {
      data: () => ({
        email: '',
        password: '',
        emailRules: [
        v => !!v || 'Email is required',
        v => (v && v.length <= 10) || 'Email must be less than 10 characters',
      ],
      }),
      methods: {
        async validate() {
            const { valid } = await this.$refs.form.validate()
        }
        }
    }
  </script>
  