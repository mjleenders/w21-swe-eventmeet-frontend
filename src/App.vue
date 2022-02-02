<template>
<Navbar :user="user"/>

<div class="row">
  <div class="col-md-6 offset-md-3">

    <router-view/>
    
  </div>
</div>

</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data(){
    return{
      user: null
    }
  },
  async created(){
    this.user = localStorage.getItem('user');
  }
}
</script>

<style>

body{
  color: white;
  background-color: #121212;
}

hr{
  border: 2px solid #44adf3;
}

a{
  text-decoration: none;
}

</style>