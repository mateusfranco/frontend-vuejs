<template>
  <div class="tipsta">
    <Lists></Lists>
    <router-link to="/registerevent"><a class="padding-button waves-effect waves-light btn"> perdir um novo evento </a></router-link>
  </div>
</template>

<script>

import Event from '@/services/event.js'
import { store } from '@/store'

// import Calendar from '@/components/Calendar.vue'

export default {
  name: 'tipsta',
  components: {
  },
  mounted() {
    alert("executou ao entrar")
    Event.listForUser(this.$store.getters.email,this.$store.getters.token).then(response => {
      console.log(response)
      // Lists.addEvent()  
    })
    
  },
}
</script>
