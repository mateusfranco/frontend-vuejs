<template>
  <div>
    <NavBar></NavBar>
    <div v-if="this.permission">
    </div>

    <div v-else>
      <div class="row">
        <div class="col s12 m6 l2"><p>s12 m6 l2</p></div>
        <div class="col s12 m6 l2"><p>s12 m6 l2</p></div>
        <div class="col s12 m6 l2"><p>s12 m6 l2</p></div>
        <div class="col s12 m6 l2"><p>s12 m6 l2</p></div>
        <div class="col s12 m6 l2"><p>s12 m6 l2</p></div>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/NavBar.vue'

export default {
  name: 'siscohome',
  components:{
    Navbar
  },
  data() {
    return {
      
      permission: false
    }
  },
  mounted() {
    
  },
}
</script>

