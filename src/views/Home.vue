
<template>

<div class="row justify-content-start my-4">
    <div class="col-md-auto">

       <div class="row">
        <div>
            <h3>Aktuelle Filme</h3>
            <hr/>
        </div>
       </div>
       <div class="row">
           <div class="col-md-3" v-for="movie in movies" :key="movie">
                <MoviePoster :movie="movie"/>
            </div>
       </div>  
    </div>
</div>

<div class="row justify-content-start my-4">
    <div class="col-md-auto">
       <div class="row">
        <div>
            <h3>Aktuelle Serien</h3>
            <hr/>
        </div>
       </div>
       <div class="row">
            <div class="col-md-3" v-for="serie in series" :key="serie">
                <SeriePoster :serie="serie"/>
            </div>
       </div>  
    </div>
</div>





</template>

<script>
import axios from 'axios'
import MoviePoster from '@/components/MoviePoster.vue'
import SeriePoster from '@/components/SeriePoster.vue'

export default {
    name: 'Home',
    data(){
        return{
            movieids: null,
            serieids: null,
            movies: [],
            series: [],
        }
    },
    components:{
        MoviePoster,
        SeriePoster,
    },
    async created(){
        const movieresponse = await axios.get('/events/movies/ranking?by=date&limit=4');
        //const serieresponse = await axios.get('/events/series/ranking?by=date&limit=4');

        movieresponse.data.forEach(element => {
            axios.get('/events/movies/'+element.event.id)
                .then(response=>this.movies.push(response.data));
        });


        console.log(this.movies);
    }
}
</script>

<style scoped>
</style>
