<template>

    <div class="video-block my-1">
    <div class="video-thumb position-relative thumb-overlay">
        <a href="#"><img alt="" class="img-fluid" :src="movie.event.logos[0].ref"></a>
        <!-- Box Content End -->
    </div>
    <!-- Video Thumb End -->
    <div class="video-content">
        <h4 class="video-title"><a class="link-light" href="" v-on:click="clickMovie">{{movie.event.title}}</a></h4>
        <div class="video-info d-flex align-items-center">
            <span class="video-year pr-2">{{movie.event.released}}</span> 
            <span class="video-age px-2">+{{movie.event.fsk}}</span> 
            <span class="video-type px-2">{{movie.event.length}}min</span>
        </div>
    </div>
    <!-- video Content End -->
</div>

</template>

<script>
    export default{
        name: 'MoviePoster',
        props:['movie'],
        methods: {
            clickMovie(){
                console.log("Method");
                this.$router.push("/Movies/"+this.movie.event.id);
            },
        }
    }
</script>

<style scoped>

.video-block{
    width: 230px;
    height: auto;
    object-fit: cover;
}

</style>