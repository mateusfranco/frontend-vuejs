<template>
  <div class="home">
    <Welcome></Welcome>
    <div class="card">
      <div class="card-content teal-text">
        <span class="card-title">Card Title</span>
        <ul class="collection">
          <template v-for="item in this.eventList">
            <li class="collection-item avatar" >
              {{ item.name }}
              {{ item.description }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <button v-on:click="aumentarlista()"> aumenta </button>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue' 
import Event from '@/services/event.js'

export default {
  name: 'home',
  components: {
    Welcome
  },
  data() {
    return {
      eventList: []
    }
  },
  mounted() {
    Event.list().then(response => {
      console.log(response.data)
      for(var i in response.data){
        var aux = {}
        aux["name"] = response.data[i]["name"]
        aux["description"] = response.data[i]["description"]
        this.eventList.push(aux)
      }  
    })
  },
  methods: {
      
  },
}
</script>
