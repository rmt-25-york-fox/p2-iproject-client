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
        ...mapState(useMainStore, ["news", "isLogIn"])
    },
    methods:{
        ...mapActions(useMainStore, ["checkLogin", "changePage"])
    },

    created(){
        this.checkLogin()
        console.log(this.isLogIn)
    },

    mounted(){
        this.checkLogin()
    }
}
</script>

<template>
            
            <SearchBar />
            <WriteStatus v-if="isLogIn" />

            <HomeCard />

</template>