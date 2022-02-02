<template>

<div class="row">
<div class="col-sm-6 offset-md-3">

  <nav class="navbar navbar-expand-lg py-2 px-2">
    <h3><router-link class="nav-link link-light header" to="/Home">Eventmeet</router-link></h3>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent offset-md-1">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <h5><router-link class="nav-link link-light" to="/Movies">Filme</router-link></h5>
        </li>
        <li class="nav-item">
          <h5><router-link class="nav-link link-light" to="/Series">Serien</router-link></h5>
        </li>
        <li class="nav-item">
          <h5><router-link class="nav-link link-light" to="/Podcasts">Podcasts</router-link></h5>
        </li>
        <li class="nav-item">
          <h5><router-link class="nav-link link-light" to="/Groups">Gruppen</router-link></h5>
        </li>
      </ul>

    </div>
    <div v-if="!user">
    <form class="justify-content-end form-inline my-2 my-lg-0" @submit.prevent="submitAnmeldung">
        <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Anmelden</button>
      </form>
    </div>
    <div v-if="user">
      <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle btn-outline-warning" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="bi bi-person"></i>
      </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">{{user}}</a></li>
          <form @submit.prevent="handleLogout">
            <button type="submit" class="col-md-12 btn-warning">Logout</button>
          </form>
        </ul>
      </div>
    </div>

  </nav>

</div>
</div>

</template>

<script>
    export default{
        name: 'Nav',
        props: ['user'],
        methods: {
            submitAnmeldung(){
                this.$router.push('/login');
            },
            handleLogout(){
                console.log(this.user);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                this.$router.push('/Home');
                location.reload();
            }
        }
    }
</script>

<style scoped>


.row {
    background-image: linear-gradient(to right,#243743 20% ,#44adf3 30%, #243743 50%);
}

</style>