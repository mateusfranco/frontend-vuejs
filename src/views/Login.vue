<template>
  <div>
    <div class="row valign-wrapper">
      <div class="col s6 offset-s3 valign">
        <Login class="container col s12 center"></Login> 
      </div>
    </div>
  </div>
</template>

<script>

import Login from '@/components/Login.vue'

export default {
    name: 'login',
    components: {
        Login
    }
}
</script>
