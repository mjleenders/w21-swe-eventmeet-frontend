<template>

<div class="row mt-4">
    <Search :type="'podcasts'" @setParentComponentDetails="setDetailsForMovies"/>
</div>

<div class="row mt-4">
    <h1>Alle Podcasts</h1>
    <div class="col-md-3" v-for="podcast in podcasts" :key="podcast">
        <PodcastPoster :podcast="podcast"/>
    </div>
</div>


</template>

<script>
import axios from 'axios'
import PodcastPoster from '@/components/PodcastPoster.vue'
import Search from '@/components/Search.vue'

export default {
    name: 'Podcasts',
    components:{
        PodcastPoster,
        Search
    },
    data() {
        return {
            podcasts: null,
        }
    },
    async created(){
        const response = await axios.get('/events/podcasts');
        this.podcasts = response.data;
    },
    methods: {
        setDetailsForMovies(param1){
            this.podcasts = param1;
        },
    }
}
</script>

<style scoped>


</style>
