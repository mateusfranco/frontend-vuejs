<template>
  <div>
    <div v-if="this.permission">
    </div>

    
    <div v-else>
        <iframe class="iframegraph" src="http://cmtechdev.000webhostapp.com/apps/sisco/api/graph.php?categoryName=Pesquisa&conqueredHours=12&needHours=20"  scrolling="no"></iframe>    
        <iframe class="iframegraph" src="http://cmtechdev.000webhostapp.com/apps/sisco/api/graph.php?categoryName=Pesquisa&conqueredHours=12&needHours=20"  scrolling="no"></iframe>    
      <div class="row">
        <button class="btn waves-effect waves-light" type="submit" name="action" v-on:click="submite()">Enviar arquivo 
          <i class="material-icons right"></i>
        </button>
      </div>
    </div>
    

    
  </div>
</template>

<script>

import CardG from '@/components/Card.vue' 
import graph from '@/services/graph.js'


export default {
  name: 'siscohome',
  components:{
    CardG
  },
  mounted() {
    graph.graphShow('Pesquisa',14,16).then((response) => {
      console.log(response.data)
    })
    // console.log(html)
    var div = document.getElementById('teste')
    div.innerHTML = html

  },
  data() {
    return {
      permission: false
    }
  },
  methods: {
    submite(){
      this.$router.push('/submission')
    }
  },
  
}
</script>

<style>

.iframegraph{
  width: 50%;
  height: 500px;
  border: none;
  overflow: hidden;
}

</style>

