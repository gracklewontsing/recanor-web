<template>
 <v-app-bar app dark hide-on-scroll class="homepage-toolbar">
    <v-img src="https://images.vexels.com/media/users/3/142812/isolated/preview/992801ae3182fa95353e941cfcac9293-dise-ntilde-o-de-escudo-logo-emblema-by-vexels.png"
      max-height="80"
      max-width="80"
      absolute
    ></v-img>    
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-tabs
          v-model="currentItem"
          slider-color="#2A89B1"
          background-color="transparent"
        ><v-tab 
          class="ma-1"
          to="/"
          small
          plain>Inicio</v-tab>
        <v-tab 
          class="ma-1"
          to="/about"
          small
          plain>Sobre nosotros</v-tab>

        <v-menu offset-y transition="slide-y-transition" open-on-hover origin="center center" bottom>
        <template v-slot:activator="{ on }">
          <v-tab
            color="primary"
            dark
            v-on="on"
          >
            Productos
          </v-tab>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"                                    
          >
            <router-link :to="item.url"> 
              <v-list-item-title class="black--text">{{ item.title }}</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>
          
      </v-menu>

   
        <v-tab
          class="ma-1"
          small
          plain>Contacto</v-tab>
        <v-tab
          class="ma-1"
          small
          plain>Noticias</v-tab>
        </v-tabs>
      </v-toolbar-items>
      <v-spacer></v-spacer>
</v-app-bar>
</template>

<style lang="css">
  .homepage-toolbar {
  background: rgba(222,222,222,0.8) !important;
  background: transparent !important;
  -webkit-box-shadow: none!important;
  box-shadow: none !important;
  padding-top: 2vh;
  }

  a { 
    text-decoration: none; 
  }

  .v-tab{
    color: #2A89B1 !important;
    background: transparent !important;
  }

    .v-select{
    color: #2A89B1 !important;
    background: transparent !important;
  }
</style>

<script>
export default {
  name: "NavBar",
    data: () => ({
    items: [
      { title: 'Servicio Renovado' , url: '/renovado' },
      { title: 'Servicio OTR' , url: '/otr' },
      { title: 'Llantas Nuevas' , url: '/venta' },
    ],
    }),

    methods: {
      addItem (item) {
        const removed = this.items.splice(0, 1)
        this.items.push(
          ...this.more.splice(this.more.indexOf(item), 1),
        )
        this.more.push(...removed)
        this.$nextTick(() => { this.currentItem = 'tab-' + item })
      },
    },

}
</script>

