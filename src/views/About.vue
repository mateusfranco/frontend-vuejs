<template>
  <div class="about">
    <h1>who we are?</h1>
    <h5></h5>
    <div class="margin">
      <Contacts></Contacts>
    </div>
    
  </div>
</template>

<script>

import Contacts from '@/components/Contacts.vue'

export default {
  name: 'about',
  components:{
    Contacts
  },
  data () {
    return {
      name: undefined,
      phone: undefined
    }
  }
}
</script>

<style>
.margin{
  margin-top: 20% !important;
}
</style>
