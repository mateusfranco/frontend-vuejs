<template>
  <div>
    <div class="card">
      <div class="card-content teal-text">
        <h3 class="card-title">LOGIN</h3>
        <p>esta e a pagina de login para entrar com os dados</p>
      </div>
      <div class="card-action">
        <form action="">
          <div class="row">
            <div class="input-field ">
              <input id="email" type="email" v-model="email" class="validate">
              <label for="email">Email</label>
            </div>
            <div class="input-field ">
              <input id="password" type="password" v-model="password" class="validate">
              <label for="password">Password</label>   
            </div>
            <a class="padding-button waves-effect waves-light btn" v-on:click="loginuser()">Login</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import autenticate from '@/services/user'
import { store } from '@/store'

export default {
  name: 'Login',
  data () {
    return{
      email:undefined,
      password:undefined,
    }
  },
  methods: {
    loginuser: function () {
      autenticate.login('user/login',this.email,this.password).then(response => {
        this.$store.commit('setEmail',this.email)
        this.$store.commit('setToken',response.data.token)
        this.$store.commit('modifyLogin', true)
      })
    }
  }
}
</script>

<style>

.padding-button{
  margin: 20px !important;
}
</style>
