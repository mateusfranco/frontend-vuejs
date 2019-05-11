<template>
  <div class="home">
    <Welcome></Welcome>
    <Lists></Lists>
  </div>
</template>

<script>

import Welcome from '@/components/Welcome.vue'
import Lists from '@/components/Lists.vue'

export default {
  name: 'home',
  components: {
    Welcome,
    Lists
  }
}
</script>
