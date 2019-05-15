<template>
  <div class="tipsta">
    <Lists></Lists>
    <router-link to="/registerevent"><a class="padding-button waves-effect waves-light btn"> perdir um novo evento </a></router-link>
  </div>
</template>

<script>

import Lists from '@/components/Lists.vue'
// import Calendar from '@/components/Calendar.vue'

export default {
  name: 'tipsta',
  components: {
    Lists
  }
}
</script>
