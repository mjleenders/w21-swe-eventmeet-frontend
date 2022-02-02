<template>

<div class="container shadow-lg rounded bg-white">
    <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" >
        <div class="list-group list-group-flush border-bottom scrollarea">
            <div class="list-group-item list-group-item-action py-3 lh-tight"
                v-for="am in allmessages" :key="am"
            >
            <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">{{am.sent_by}}</strong>
            </div>
            <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">{{am.sent_date}}</strong>
            </div>
            <div class="col-10 mb-1 small">{{am.text}}</div>
            </div>
            <div class="list-group-item list-group-item-action py-3 lh-tight"
                v-for="message in messages" :key="message"
            >
            <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">{{message.sent_by}}</strong>
            </div>
            <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">{{message.sent_date}}</strong>
            </div>
            <div class="col-10 mb-1 small">{{message.text}}</div>
            </div>
        </div>
    </div>
    <form @submit.prevent="submit">
        <div class="row">
            <div class="col-md-12">
                <input class="form-control" placeholder="Write a message" v-model="message">
            </div>        
        </div>
    </form>
</div>

</template>

<script>
import { ref, onMounted } from 'vue';
import Pusher from 'pusher-js';
import axios from 'axios';

export default {

  name: 'Chat',
  props: ['allmessages','EventID','GroupID'],
  components:{
    },
    setup(props){
        const messages = ref([]);
        const message = ref('');

        onMounted(()=>{
            Pusher.logToConsole = true;

            const pusher = new Pusher('5b1faa9965c762c2bd65', {
            cluster: 'eu'
            });

            const channel = pusher.subscribe(props.GroupID);
            channel.bind('message', data => {
                messages.value.push(data);
            });
        });

        const submit = async() => {
            await axios.post('/events/*/'+props.EventID+'/groups/'+props.GroupID+'/chat', {
                text: message.value
            },{
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            });
            message.value = '';
            
            
        }

        return{
            messages,
            message,
            submit
        }
    },

}
</script>

<style scoped>
    .scrollarea{
        min-height: 550px;
        max-height: 550px;
        overflow: auto;
        background-color: white;
    }
</style>