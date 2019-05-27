<template>
  <div>
    <div v-if="this.permission">
    </div>

    <div v-else>
      <div class="row">
        <div class="col s12 m6 l3"></div>
        <div class="col s12 m6 l3"></div>
        <div class="col s12 m6 l3"></div>
        <div class="col s12 m6 l3"></div>
      </div>
      <div class="row">

      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'siscohome',
  components:{
  },
  mounted() {
    var div = document.getElementById('teste').innerHTML = '<h1>testando</h1>'

  },
  data() {
    return {
      permission: false
    }
  }
  
}
</script>

