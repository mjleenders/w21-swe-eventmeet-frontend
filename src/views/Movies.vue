<template>

<div class="row mt-4">
    <Search :type="'movies'" @setParentComponentDetails="setDetailsForMovies"/>
</div>

<div class="row mt-4">
    <h1>Alle Filme</h1>
    <div class="col-md-3" v-for="movie in movies" :key="movie">
        <MoviePoster :movie="movie"/>
    </div>
</div>


</template>

<script>
import axios from 'axios'
import MoviePoster from '@/components/MoviePoster.vue'
import Search from '@/components/Search.vue'

export default {
    name: 'Movies',
    components:{
        MoviePoster,
        Search
    },
    data() {
        return {
            movies: null,
        }
    },
    async created(){
        const response = await axios.get('/events/movies');
        this.movies = response.data;
    },
    methods: {
        setDetailsForMovies(param1){
            this.movies = param1;
        },
    }
}
</script>

<style scoped>


</style>
