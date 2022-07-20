<script>
import { mapActions } from 'pinia'
import { useRequestStore } from '../stores/request'
export default {
    name:'Card2',
    props:['request'],
    methods:{
        ...mapActions(useRequestStore,['finishRequest']),
        finished(){
            this.finishRequest(this.request.id)
        }
    }
}
</script>

<template>
<div class="container">
<div class="row">
    <div class="col-lg-9 col-md-9">
        <div class="news-link">
            <span v-if="request.status === 'Taken'" v-on:click="finished" class="hot-news">DONE</span>
            <span v-if="request.status === 'Done'"  class="new-news">FINISHED</span>
            <h3 class="news-log">{{request.title}}</h3>
            <p class="description">
            {{request.description}}
            </p>
            <a href="#" class="btn-view"><span class="ic-sx24"></span> View Detail</a>
        </div>
    </div>
</div>
</div>
</template>