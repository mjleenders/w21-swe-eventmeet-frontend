<template>

<div class="row">
    <div class="col-md-6 offset-md-3">
        <div class="p-4 rounded shadow-lg">
        <div>
            <div>
                <h3>Login</h3>
                <hr/>
            </div>
            <form @submit.prevent="submitLogin">
                <div class="from-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="email" placeholder="Email"/>
                    <span class="placeholder"></span>
                </div>
                <div class="from-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="password" placeholder="Password"/>
                    <span class="placeholder"></span>
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-warning">Login</button>
                </div>
            </form>
             <div class="form-inline my-2">
                <p>Sie haben noch keinen Account?</p><router-link class="link-warning" to="/register">Hier können Sie sich registrieren.</router-link>
            </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    components:{
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async submitLogin(){
            const response = await axios.post('/login', {
                username: this.email,
                password: this.password
            });
            console.log(response.data);
            localStorage.setItem('token',response.data);
            localStorage.setItem('user',this.email);
            this.$router.push('/Home');
        }
    }
}
</script>

<style scoped>
    .row{
        margin-top: 5em;
    }

    .rounded{
        background-color: #272727;
    }

</style>
