<script>
import { mapActions } from 'pinia'
import { useRequestStore } from '../stores/request'
export default {
    name:'Card',
    props:['request'],
    methods:{
        ...mapActions(useRequestStore,['assignPic','detailRequest']),
        getTask(){
            this.assignPic(this.request.id)
        },
        viewDetail(){
            this.detailRequest(this.request.id)
        }
        
    }
}
</script>

<template>
<div class="container">
<div class="row">
    <div class="col-lg-9 col-md-9">
        <div class="news-link">
            <span v-if="request.status === 'Taken'" class="hot-news">TAKEN</span>
            <span v-else-if="request.status === 'New'" v-on:click="getTask" class="new-news">NEW</span>
            <span v-else class="new-news">FINISHED</span>
            <h3 class="news-log">{{request.title}}</h3>
            <p class="description">
            {{request.description}}
            </p>
            <a href="#" v-on:click="viewDetail" class="btn-view"><span class="ic-sx24"></span> View Detail</a>
        </div>
    </div>
</div>
</div>
</template>