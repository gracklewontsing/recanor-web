<template>  
  <v-app id="application">
    <NavBar />
     
      <section>
      
        <router-view></router-view>        
      
      </section>


  </v-app>
</template>

<style>
  #application{
    font-family:"Montserrat";
  }

  .homepage-toolbar {
  background: rgba(222,222,222,0.8) !important;
  background: transparent !important;
  -webkit-box-shadow: none!important;
  box-shadow: none !important;
  padding-top: 2vh;
}

    .v-tab{
    color: #2A89B1 !important;
    background: transparent !important;
  }
</style>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "Home",

  components: {
    NavBar,
  },
};
</script>
