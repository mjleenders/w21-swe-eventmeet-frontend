<template>

<div class="container shadow-lg rounded bg-white">
    <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" >
        <div class="list-group list-group-flush border-bottom scrollarea">
            <div class="list-group-item list-group-item-action py-3 lh-tight"
                v-for="ar in allratings" :key="ar"
            >
            <div class="d-flex w-100 align-items-center justify-content-between">
                <StarRating :show-rating="false" :star-size="20" :read-only="true" :rating="ar.value"/>
            </div>
            <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">{{ar.author}}</strong>
            </div>
            <div class="col-10 mb-1 small">{{ar.description}}</div>
            </div>
            <div class="list-group-item list-group-item-action py-3 lh-tight"
                v-for="message in messages" :key="message"
            >
            <div class="d-flex w-100 align-items-center justify-content-between">
                <StarRating :show-rating="false" :star-size="20" :read-only="true" :rating="message.value"/>
            </div>
            <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">{{message.user_id}}</strong>
            </div>
            <div class="col-10 mb-1 small">{{message.description}}</div>
            </div>
        </div>
    </div>
    <form @submit.prevent="submit">
        <div class="row">
            <div class="col-md-2">
                <StarRating  @update:rating="setRating" :show-rating="false" :star-size="25"/>
            </div>
            <div class="col-md-10">
                <input class="form-control" placeholder="Write a message" v-model="message">
            </div>        
        </div>
    </form>
</div>

</template>

<script>
import { ref, onMounted } from 'vue';
import StarRating from 'vue-star-rating'
import Pusher from 'pusher-js';
import axios from 'axios';

export default {

  name: 'Kommentare',
  props: ['allratings','EventID'],
  components:{
        StarRating,
    },
    setup(props){
        const messages = ref([]);
        const message = ref('');
        const stars = ref(Number);

        function setRating(rating){
            stars.value = rating;
        }

        onMounted(()=>{
            Pusher.logToConsole = true;

            const pusher = new Pusher('5b1faa9965c762c2bd65', {
            cluster: 'eu'
            });

            const channel = pusher.subscribe(props.EventID);
            channel.bind('rating', data => {
                messages.value.push(data);
            });
        });

        const submit = async() => {
            if(localStorage.getItem('user')){
            await axios.post('/events/*/'+props.EventID+'/ratings', {
                value: stars.value,
                description: message.value
            },{
                headers: {
                Authorization: localStorage.getItem('token')
                }
            });
            message.value = '';
            }
            else {
                alert("Nicht eingeloggt!");
            }
        }

        return{
            messages,
            message,
            setRating,
            submit
        }
    },

}
</script>

<style scoped>
    .scrollarea{
        min-height: 450px;
        max-height: 450px;
        overflow: auto;
        background-color: white;
    }
</style>