<template>

<div class="card my-3">
  <div class="card-header bg-dark">
    <p>{{group.created_by}}</p>
    <p>{{group.name}}</p>
  </div>
  <div class="card-body bg-dark">
    <div class="from-group" v-if="group.password">
        <form @submit.prevent="withPassword">
            <input class="col-md-12 my-1" type="password" placeholder="Passwort" v-model="password" required>
            <button type="submit" class="offset-md-3 col-md-6 btn-warning">Beitreten</button>
        </form>
    </div>
    <div class="from-group" v-if="!group.password">
        <form @submit.prevent="withoutPassword">
            <h5 class="card-title">Kein Passwort nötig</h5>
            <button type="submit" class="offset-md-3 col-md-6 btn-warning">Beitreten</button>
        </form>
    </div>
  </div>
</div>

</template>

<script>
import axios from 'axios'

export default{
    name: 'Card',
    props:['group'],
    methods: {
        withPassword(){
            axios.post('/events/*/'+this.group.event_id+'/groups/'+this.group.id+'?password='+this.password ,{
            },{
            headers: {
                Authorization: localStorage.getItem('token')
            }
            });
        },
        withoutPassword(){
            axios.post('/events/*/'+this.group.event_id+'/groups/'+this.group.id, {
            },{
            headers: {
                Authorization: localStorage.getItem('token')
            }
            });
        }
    }
}
</script>

<style scoped>

</style>
