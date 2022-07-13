<template>
  <div class="home">
    <img src="@/assets/home.jpg" alt="">
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data(){
    return{
      vistas:[],
      imagen:"../assets/logo.png"
    }
  }
}
</script>
