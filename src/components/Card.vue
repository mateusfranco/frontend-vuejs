<template>
  <div>
    <div class="card {{}}">
      <div class="card-content teal-text">
        <span class="card-title">{{ title }}</span>
        <p>{{ texts }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: String,
    texts: String 
  } 
}

</script>
