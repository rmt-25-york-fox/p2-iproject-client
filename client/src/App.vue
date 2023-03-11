<script>
import { RouterLink, RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
import Footer from "./components/Footer.vue";
import News from "./components/News.vue";
import { mapActions, mapState } from "pinia";
import { useMainStore } from "./stores/main";

export default{
    components: { SideBar, Footer, News },
    methods:{
      ...mapActions(useMainStore, ["getNews", "checkLogin"])
    },
    computed:{
      ...mapState(useMainStore, ["news", "isLogIn"])
    },

    created(){
      this.checkLogin()
      this.getNews()
    }
}
</script>

<template>
    <!-- Main Menu -->
    <main class="flex flex-col">
        <div class="flex overflow-hidden">

        <!-- Sidebar -->
        <SideBar />

       
          
        <!-- Homepage -->
        <section class="p-5" style="width:900px">

          <router-view />
          


           
                
        </section>

        
        <section style="width: 30vw;">
          <News :news="news" />
        </section>

 
        
        </div>

        <!-- Footer -->
        <Footer />

      </main>
 
    
</template>

