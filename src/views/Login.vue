<template>
  <div>
    <div class="row valign-wrapper">
      <div class="col s6 offset-s3 valign">
        <Login class="container col s12 center"></Login>
        <router-link to="/register"><a class="padding-button waves-effect waves-light btn"> ainda nao tenho uma conta </a></router-link>
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
    },
    data() {
      return {
        account: true
      }
    },
}
</script>
