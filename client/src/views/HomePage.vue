<script>
import SearchBar from "../components/SearchBar.vue";
import WriteStatus from "../components/WriteStatus.vue";
import HomeCard from "../components/HomeCard.vue";
import News from "../components/News.vue";
import { mapActions, mapState } from "pinia";
import { useMainStore } from "../stores/main";
export default{
    name: "HomePage",
    components: { SearchBar, WriteStatus, HomeCard, News },
    computed:{
        ...mapState(useMainStore, ["news", "isLogIn", "allStatus"])
    },
    methods:{
        ...mapActions(useMainStore, ["checkLogin", "changePage", "getAll"])
    },

    created(){
        this.checkLogin()
        this.getAll()
        console.log(this.isLogIn)
    },

    mounted(){
        this.checkLogin()
        this.getAll()
    }
}
</script>

<template>
            
            
            <WriteStatus v-if="isLogIn" />

            <HomeCard v-for="status in allStatus" :status="status" />

</template>