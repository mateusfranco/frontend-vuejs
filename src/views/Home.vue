<template>
  <div class="home">
    <Welcome></Welcome>
    <div class="container">
      <div class="row space">
        <div class="col s12 m4 advertises">
          <div class="row">
            <i class="large material-icons">event_note</i>
          </div>
          <div class="row">
            <p>quer participar de eventos externos e 
              internos a universidade, o sistema tipsta te ajuda
              a participar dos melhores eventos que tem seu estilo
              e com aprendizados que voce procura</p>
          </div>
        </div>
        <div class="col s12 m4 advertises">
          <div class="row">
            <i class="large material-icons">assignment</i> 
          </div>
          <div class="row">
            <p>quer ganhar horas complementares o sisco te ajuda
              a organizar seus certificados para que voce nao se 
              perda e te ajuda a decidir as melhores atividades 
              para que voce contribua com a universidade e comunidade
            </p>
          
          </div>
          
        </div>
        <div class="col s12 m4 advertises">
          <div class="row">
              <i class="large material-icons">question_answer</i>
          </div>
          <div class="row">
            <p>
              futuras funcionalidades
              tem alguma ideia deixe seu comentario
            </p>
          </div>  
          
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

import Welcome from '@/components/Welcome.vue'

export default {
  name: 'home',
  components: {
    Welcome
  }
}
</script>

<style>
  .space{
    margin-top: 10%;
  }
  .advertises{
    padding-left: 5% !important;
    padding-right: 5% !important;
  }
</style>

