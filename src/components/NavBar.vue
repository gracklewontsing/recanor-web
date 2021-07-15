<template>
  <v-layout>
    <v-app-bar
      app
      dark
      hide-on-scroll
      class="homepage-toolbar hidden-md-and-down"
    >
      <router-link to="/">
        <v-img
          :src="require('@/assets/Logo RECANOR.jpg')"
          class="mx-10"
          max-height="80"
          max-width="80"
          absolute
        ></v-img>
      </router-link>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-toolbar-items class="mr-10">
        <v-tabs
          v-model="currentItem"
          slider-color="#2A89B1"
          background-color="transparent"
          ><v-tab class="ma-1" to="/" small plain>Inicio</v-tab>
          <v-tab class="ma-1" to="/about" small plain>Sobre nosotros</v-tab>

          <v-menu
            offset-y
            transition="slide-y-transition"
            open-on-hover
            origin="center center"
            bottom
          >
            <template v-slot:activator="{ on }">
              <v-tab color="primary" dark v-on="on"> Productos </v-tab>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <router-link :to="item.url">
                  <v-list-item-title class="black--text">{{
                    item.title
                  }}</v-list-item-title>
                </router-link>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-tab class="ma-1" small to="/contacto" plain>Contacto</v-tab>
          <v-tab class="ma-1" small to="/noticias" plain>Noticias</v-tab>
        </v-tabs>
      </v-toolbar-items>
    </v-app-bar>
    <v-app-bar
      app
      height="100"
      color="white"
      class="hidden-lg-and-up"
      elevation="1"
      light
      fixed
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="ml-5 my-2"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="ml-n9">
        <router-link to="/">
          <v-img
            :src="require('@/assets/Logo RECANOR.jpg')"
            class="mx-n1"
            max-height="80"
            max-width="80"
            absolute
          ></v-img>
        </router-link>
      </v-toolbar-side-icon>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <router-link to="/about">
              <v-list-item-title>Sobre Nosotros</v-list-item-title>
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/contacto">
              <v-list-item-title>Contacto</v-list-item-title>
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/noticias">
              <v-list-item-title>Noticias</v-list-item-title>
            </router-link>
          </v-list-item>          
          <v-list-item>
            <router-link to="/renovado">
              <v-list-item-title>Renovado de Llantas</v-list-item-title>
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/venta">
              <v-list-item-title>Venta de Llantas</v-list-item-title>
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/otr">
              <v-list-item-title>Llantas OTR</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<style lang="css">
.homepage-toolbar {
  background: rgba(222, 222, 222, 0.8) !important;
  background: transparent !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  padding-top: 2vh;
}

a {
  text-decoration: none;
}

.v-tab {
  color: #2a89b1 !important;
  background: transparent !important;
}

.v-select {
  color: #2a89b1 !important;
  background: transparent !important;
}
</style>

<script>
export default {
  name: "NavBar",
  data: () => ({
    drawer: false,
    items: [
      { title: "Servicio Renovado", url: "/renovado" },
      { title: "Llantas Nuevas", url: "/venta" },
      { title: "Llanta OTR", url: "/otr" },
    ],
  }),

  methods: {
    addItem(item) {
      const removed = this.items.splice(0, 1);
      this.items.push(...this.more.splice(this.more.indexOf(item), 1));
      this.more.push(...removed);
      this.$nextTick(() => {
        this.currentItem = "tab-" + item;
      });
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

