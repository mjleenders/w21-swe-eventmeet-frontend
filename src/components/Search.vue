<template>

<div class="container">
    <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                <label class="form-check-label" for="inlineRadio1">Action</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                <label class="form-check-label" for="inlineRadio2">Science-Fiction</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
                <label class="form-check-label" for="inlineRadio3">Anime</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4">
                <label class="form-check-label" for="inlineRadio4">Thriller</label>
            </div>
        </div>
    </div>
    <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-12">
            <div class="search input-group"><input type="text" class="form-control" placeholder="Have a question? Ask Now" v-model="input"><form @submit.prevent="onSearch"><button class="btn btn-primary">Search</button></form></div>
        </div>
    </div>
</div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'Search',
    props: ['type'],
    components:{
    },
    data() {
        return {
            results: null,
        }
    },
    methods:{
        onSearch(){
            var search = ''

            if(this.input != undefined) search = "?name="+ this.input;

            axios.get('/events/'+this.type+'/search'+search).then(response=>this.results=response.data);

            this.$emit("setParentComponentDetails",this.results);
            this.results = [];
        }
    }
}
</script>

<style scoped>

</style>
