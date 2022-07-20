<script>
export default {
    name:'Card3',
    props:['task'],
}
</script>

<template>
<div class="container">
<div class="row">
    <div class="col-lg-9 col-md-9">
        <div class="news-link">
            <span v-if="task.status === 'Taken'" class="hot-news">NOT FINISHED</span>
            <span v-if="task.status === 'Done'"  class="new-news">FINISHED</span>
            <h3 class="news-log">{{task.title}}</h3>
            <p class="description">
            {{task.description}}
            </p>
            <a href="#" class="btn-view"><span class="ic-sx24"></span> View Detail</a>
        </div>
    </div>
</div>
</div>
</template>