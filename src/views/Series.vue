<template>

<div class="row mt-4">
    <Search :type="'shows'" @setParentComponentDetails="setDetailsForSerie"/>
</div>

<div class="row mt-4">
    <h1>Alle Serien</h1>
    <div class="col-md-3" v-for="serie in series" :key="serie">
        <SeriePoster :serie="serie"/>
    </div>
</div>


</template>

<script>
import axios from 'axios'
import SeriePoster from '@/components/SeriePoster.vue'
import Search from '@/components/Search.vue'

export default {
    name: 'Series',
    components:{
        SeriePoster,
        Search
    },
    data() {
        return {
            series: null
        }
    },
    async created(){
        const response = await axios.get('/events/shows');
        this.series = response.data;
    },
    methods: {
        setDetailsForSerie(param1){
            this.series = param1;
        },
    }
}
</script>

<style scoped>

</style>
