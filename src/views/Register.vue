<template>
  <div class="row valign-wrapper">
    <div class="col s10 offset-s3 valign">
      <div class="card container">
        <div class="card-content teal-text">
          <div class="row">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate" v-model="name">
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="cpf" type="text" class="validate" v-model="cpf">
              <label for="cpf">CPF</label>
            </div>
          </div>
          <div class="input-field col s12">
            <input id="email" type="email" class="validate" v-model="email">
            <label for="email">Email</label>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="password" type="password" class="validate" v-model="password">
              <label for="password">Password</label>
            </div>
            <div class="input-field col s6">
              <input id="password-validate" type="password" class="validate">
              <label for="password-validate">Password-validate</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="phone" type="text" class="validate" v-model="phone">
              <label for="phone">Phone number</label>
            </div>
            <div class="input-field col s6">
              <input id="date" type="text" class="validate" v-model="data">
              <label for="date">aqui vai ser o calendario de data de nascimento</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <h6>seu sexo</h6>
              <form action="#">
                <p>
                  <label>
                    <input name="group1" type="radio" value="M" checked v-model="sex" />
                    <span>Masculino</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="group1" type="radio" value="F" v-model="sex" />
                    <span>Feminino</span>
                  </label>
                </p>
              </form>
            </div>
            <div class="input-field col s6">
              <input id="instituition" type="text" class="validate" v-model="instituition" >
              <label for="instituition">instituicao</label>
            </div>
          </div>
          <a class="padding-button waves-effect waves-light btn" v-on:click="register()">Registrar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import userapi from '@/services/user'

export default {
  name: 'register',
  components:{},
  data() {
    return {
      name: undefined,
      cpf: undefined,
      email: undefined,
      password: undefined,
      phone: undefined,
      data: undefined,
      sex: undefined,
      instituition: undefined
    }
  },
  methods:{
    register () {
      userapi.register('user',this.name,this.email,this.password,this.cpf,
      this.instituition,this.phone,this.data,this.sex).then(response => {
        this.$swal('OK!!!','you re registered', 'success')
        this.$router.push('/login')
      }).catch(error => {
        this.$swal('ERROR!!!','you dont registered', 'error')
      })
      
    },
    alertswal(message){
      this.$swal(message)
    }
    
  }
  
}
</script>

<style>

</style>
