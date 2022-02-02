<template>

<div class="row my-3">
    <h2>Meine Gruppen</h2>
</div>

<div class="row ">
    <div class="col-md-3 border-bottom scrollarea">
        <ChatCard  v-for="group in groups" :key="group" :group="group" @setParentComponentDetails="setSelected" />
    </div>
    <div class="col-md-8">
        <div v-if="groupChat">
            <Chat :allmessages="allmessages" :GroupID="groupChat" :EventID="EventID"/>
        </div>
    </div>
</div>



</template>

<script>
import axios from 'axios'
import ChatCard from '@/components/ChatCard.vue'
import Chat from '@/components/Chat.vue'

export default {
    name: 'Groups',
    components:{
        ChatCard,
        Chat
    },
    data(){
        return{
            groups: null,
            EventID: null,
            groupChat: null,
            allmessages: null,
        }
    },
    async created(){
        const response = await axios.get("/groups",{
            headers: {
            Authorization: localStorage.getItem('token')
            }
        });
        this.groups = response.data;
    },
    methods: {
        async setSelected(GroupID, EventID){
            this.groupChat = GroupID;
            this.EventID = EventID;

            const response = await axios.get('/events/*/'+EventID+'/groups/'+GroupID+'/chat',{
                headers: {
                Authorization: localStorage.getItem('token')
                }
            });
            this.allmessages = response.data;
        },
    }
}
</script>

<style scoped>
.scrollarea{
        min-height: 600px;
        max-height: 600px;
        overflow: auto;
    }
</style>
