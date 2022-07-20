<script >
import {RouterView} from 'vue-router'
import {mapState,mapActions} from 'pinia'
import { useUserStore } from './stores/user'

export default {
    components:{
        RouterView
    },
    computed:{
        ...mapState((useUserStore),["isLogin"])
    },
    methods:{
        ...mapActions((useUserStore),["loginStatus"])
    },
    created(){
        this.loginStatus()
    }
}
</script>

<template>
<RouterView />

</template>

<style>
</style>
