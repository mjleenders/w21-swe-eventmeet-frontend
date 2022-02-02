<template>
<div class="row">
    <div class="col-md-6 offset-md-3">
        <div class="p-4 rounded shadow-lg">
        <div>
            <div>
                <h3>Registration</h3>
                <hr/>
            </div>
            <form @submit.prevent="submitRegistration">
                <div class="from-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="username" placeholder="Username" required/>
                    <span class="placeholder"></span>
                </div>
                <div class="from-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="email" placeholder="Email" required/>
                    <span class="placeholder"></span>
                </div>
                <div class="from-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="password" placeholder="Password" required/>
                    <span class="placeholder"></span>
                </div>
                <div class="from-group">
                    <label>Confirm Password</label>
                    <input type="password" class="form-control" v-model="confirm_password" placeholder="Confirm Password" required/>
                    <span class="placeholder"></span>
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-warning">Sign up</button>
                </div>
            </form>
        </div>
        </div>
    </div>
</div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'Register',
    components:{
    },
    data(){
        return {
            username: '',
            email: '',
            password: '',
            confirm_password: ''
        }
    },
    methods:{
        async submitRegistration(){
            if(this.password==this.confirm_password){
                await axios.post('/register', {
                username: this.username,
                email: this.email,
                password: this.password
            });
                this.$router.push('/login');
            }else {
                alert("Password does not match");
            }

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