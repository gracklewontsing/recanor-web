<template>  
  <v-app id="application">
    <router-view></router-view>        
    <NavBar />    
    <Footer />                               
  </v-app>
</template>

<style>

@font-face {
    font-family: "Montserrat";
    src: url("./Montserrat-Regular.ttf") format("truetype");
  }

  #application,.v-application, html {
    font-family: "Montserrat" !important;
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
import Footer from "./components/Footer.vue"

export default {
  name: "Home",

  components: {
    NavBar, Footer
  },
};
</script>
