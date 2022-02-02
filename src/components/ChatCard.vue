<template>

<div class="card my-1">
  <div class="card-header bg-dark">
    <p>{{group.created_by}}</p>
    <p>{{group.name}}</p>
  </div>
  <div class="card-body bg-dark">
    <div class="from-group">
        <form @submit.prevent="submitChat">
            <button type="submit" class="offset-md-3 col-md-6 btn-warning">Chat</button>
        </form>
    </div>
  </div>
</div>

</template>

<script>

export default{
    name: 'Card',
    props:['group'],
    methods: {
        submitChat(){
            this.$emit("setParentComponentDetails",this.group.id,this.group.event_id);
        }
    }
}
</script>

<style scoped>

</style>
