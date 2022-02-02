<template>

    <div class="video-block my-1">
    <div class="video-thumb position-relative thumb-overlay">
        <a href="#"><img alt="" class="img-fluid" :src="podcast.event.logos[0].ref"></a>
        <!-- Box Content End -->
    </div>
    <!-- Video Thumb End -->
    <div class="video-content">
        <h4 class="video-title"><a class="link-light" href="" v-on:click="clickSerie">{{podcast.event.title}}</a></h4>
        <div class="video-info d-flex align-items-center">
            <span class="video-year pr-2">{{podcast.event.released}}</span> 
        </div>
    </div>
    <!-- video Content End -->
</div>

</template>

<script>
    export default{
        name: 'PodcastPoster',
        props:['podcast'],
        methods: {
            clickSerie(){
                this.$router.push("/Podcasts/"+this.serie.event.id);
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