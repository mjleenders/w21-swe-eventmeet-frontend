<template>

    <div class="video-block my-1">
    <div class="video-thumb position-relative thumb-overlay">
        <a href="#"><img alt="" class="img-fluid" :src="serie.event.logos[0].ref"></a>
        <!-- Box Content End -->
    </div>
    <!-- Video Thumb End -->
    <div class="video-content">
        <h4 class="video-title"><a class="link-light" href="" v-on:click="clickSerie">{{serie.event.title}}</a></h4>
        <div class="video-info d-flex align-items-center">
            <span class="video-year pr-2">{{serie.event.released}}</span> 
            <span class="video-age px-2">+{{serie.event.usk}}</span> 
        </div>
    </div>
    <!-- video Content End -->
</div>

</template>

<script>
    export default{
        name: 'SeriePoster',
        props:['serie'],
        methods: {
            clickSerie(){
                this.$router.push("/Series/"+this.serie.event.id);
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