<template>

<div class="row main my-4">

    <div class="row my-3 pr-3">
        <ul class="nav nav-tabs">
            <li class="active"><a data-bs-toggle="tab" href="#home" class="link-light"><h2>Infos</h2></a></li>
            <li><a data-bs-toggle="tab" href="#menu1" class="link-light"><h2>Gruppen</h2></a></li>
        </ul>
    </div>

<div class="row">
    <div class="tab-content">
        <div class="text row tab-pane fade show active" id="home">
            <div class="row justify-content-center py-3">
                <h1 class="text-center">{{podcast.event.title}}</h1>
                <div class="list-inline text-center">
                    <h5 class="list-inline-item" v-for="genre in podcast.event.genres" :key="genre">{{genre}}</h5>
                </div>
                <div class="col-md-auto">
                    <ul class="list-group list-group-flush list-group-horizontal">
                        <li class="list-group-item ">{{podcast.event.regisseur}}</li>
                        <li class="list-group-item">{{podcast.event.length}}min</li>
                    </ul>
                </div>
            </div>
            <div class="media d-flex">
                <img class="media-object border border-light" :src="podcast.event.logos[0].ref" alt="">
                <div class="media-body py-3 px-3 shadow-lg rounded bg-dark">
                    <h5 class="media-heading">Beschreibung:</h5>
                    <p>{{podcast.event.description}}</p>
                </div>
            </div>

            <div class="row my-4">
                <Kommentare :allratings="ratings" :EventID="$route.params.PodcastID"/>
            </div>
        </div>

        <div class="tab-pane fade" id="menu1">
            <h2>Alle Gruppen</h2>
            <div class="row">
                <div class="col-md-6" v-for="group in groups" :key="group">
                    <GroupCard :group="group"/>
                </div>
            </div>
            <div class="row justify-content-center">   
                <button type="submit" class="col-md-2 btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Gruppe erstellen</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLabel">Neue Gruppe erstellen</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="from-group">
                            <label>Name</label>
                            <input type="text" class="form-control" v-model="name" placeholder="Name der Gruppe"/>
                            <span class="placeholder"></span>
                         </div>
                        <div class="from-group">
                            <label>Password</label>
                            <input type="password" class="form-control" v-model="password" placeholder="Password"/>
                            <span class="placeholder"></span>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <form @submit.prevent="addGroup">
                        <button type="button" class="btn btn-primary" v-on:click="addGroup">Save changes</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div> 
        </div>

    </div>
</div>

</div>

</template>


<script>
import axios from 'axios'
import Kommentare from '@/components/Kommentare.vue'
import GroupCard from '@/components/GroupCard.vue'

export default {
    name: 'Podcast',
    props: [],
    components:{
        Kommentare,
        GroupCard,
    },
    data() {
        return {
            podcast: null,
            ratings: null,
            groups: null,
        }
    },
    async created(){
        const response = await axios.get('/events/podcasts/'+this.$route.params.MovieID);
        this.podcast = response.data;

        const aresponse = await axios.get(this.movie.links.ratings);
        this.ratings = aresponse.data;

        const bresponse = await axios.get(this.movie.links.groups,{
                headers: {
                Authorization: localStorage.getItem('token')
                }
            });
        this.groups = bresponse.data;
    },
    methods: {
        addGroup(){
            console.log("Hallo");
            axios.post('/events/podcasts/'+this.movie.event.id+'/groups',{
                name: this.name,
                password: this.password,
            },{
                headers: {
                Authorization: localStorage.getItem('token')
                }
            });
            location.reload();
        }
    }
}
</script>

<style>

.modal{
    color: black;
}

.main{
    background-color: #222222;
}

.text{
    padding-left: 3rem;
    padding-right: 3rem;
}

img{
    width: 250px;
    height: auto;
    object-fit: cover;
}


</style>
