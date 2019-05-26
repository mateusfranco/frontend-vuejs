<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo right">Logo</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <div v-if="$store.getters.login">
            <li><router-link to="/"><h5>Home</h5></router-link></li>
            <li><router-link to="/tipsta"><h5>Tipsta</h5></router-link></li>
            <li><router-link to="/sisco"><h5>Sisco</h5></router-link></li>
            <li><router-link to="/about"><h5>about</h5></router-link></li>
          </div>
          <div v-else>
            <li><router-link to="/"><h5>Home</h5></router-link></li>
            <li><router-link to="/login"><h5>Login</h5></router-link></li>
            <li><router-link to="/about"><h5>about</h5></router-link></li>
          </div>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {

    }
  }
}
</script>
