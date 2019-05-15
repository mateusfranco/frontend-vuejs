<template>
  <div class="row valign-wrapper">
    <div class="col s10 offset-s3 valign">
      <div class="card container">
        <div class="card-content teal-text">
          <div class="input-field col s12">
            <input  id="event_name" type="text" class="validate" v-model="name">
            <label for="event_name">Nome do evento</label>
          </div>
          <div class="input-field col s12">
            <input id="location" type="text" class="validate" v-model="location">
            <label for="location">Local do evento</label>
          </div>
          <div class="input-field col s12">
            <input id="coverage_area" type="text" class="validate" v-model="coverage_area">
            <label for="coverage_area">areas do evento</label>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="date_start" type="text" class="validate" v-model="dateStart">
              <label for="date_start">dia de inicio</label>
            </div>
            <div class="input-field col s6">
              <input id="date_end" type="text" class="validate" v-model="dateEnd">
              <label for="date_end">fim do evento</label>
            </div>
          </div>
          <div class="input-field col s12">
            <textarea id="description" class="materialize-textarea" v-model="description"></textarea>
            <label for="description">Descricao do evento</label>
          </div>
          <a class="padding-button waves-effect waves-light btn" v-on:click="register()">Registrar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import event from '@/services/event.js' 
import user from '@/services/user.js' 
import { store } from '@/store'

export default {
  name: 'registerEvent',
  data() {
    return {
      name: undefined,
      location: undefined,
      coverage_area: undefined,
      dateStart: undefined,
      dateEnd: undefined,
      description: undefined,
      coordinator: undefined,
    }
  },
  methods: {
    register () {
      user.information(this.$store.getters.email,this.$store.getters.token).then(response => {
        this.coordinator = response.data.id
        if(response.status == 200 && typeof(this.coordinator) == 'number'){
          event.add(this.name, this.location, this.coverage_area, this.dateStart,this.dateEnd,this.description,this.coordinator,this.$store.getters.email,this.$store.getters.token)
          .then(response => {
            this.$swal('OK!!!','evento registrado com sucesso' + response, 'success')
          })
          .catch(error => {
            alert(error)
          })
        }
      })
      
    }
  } 
}
</script>
