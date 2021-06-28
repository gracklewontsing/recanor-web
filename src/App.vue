<<<<<<< HEAD
<template>  
  <v-app id="application">
    <NavBar />
     
      <section>
      
        <router-view></router-view>        
      
      </section>
=======
<template>
  <div id="app">
    <NavBar/>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components:{    
    NavBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
>>>>>>> 9d8572627e0efd4bcd6a671167eacc58eb421207


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
