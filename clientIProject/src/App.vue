<script >
import Navbar from "./components/Navbar.vue";
import {RouterView} from 'vue-router'
import {mapState,mapActions} from 'pinia'
import { useUserStore } from './stores/user'

export default {
    components:{
        Navbar,RouterView
    },
    computed:{
    ...mapState((useUserStore),["isLogin"])
    }
}
</script>

<template>
<div v-if="isLogin">
<Navbar />
</div>
<RouterView />

</template>

<style scoped>
</style>
