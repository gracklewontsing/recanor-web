<template>
  <v-footer class="mt-10" id="bottom">        
    <v-container class="" style="" id="">
      <v-row class="pt-0 pb-6">
        <v-divider></v-divider>
      </v-row>
      <v-row>        
        <v-col>
          <v-img
            :src="require('@/assets/Logo-dark.png')"            
            class="my-n1"            
            max-width="90"
            justify-center
          ></v-img>
        </v-col>
        <v-col>
          <v-layout id="" align-center column justify-center>
            <p>© RECANOR 2021</p>
            <p>Todos los derechos</p>
            <p>reservados</p>
          </v-layout>
        </v-col>
        <v-col>
          <v-layout id="" align-center column justify-center>
            <router-link to="/" class="black--text" style="text-decoration: none;"><p>Inicio</p></router-link>
            <router-link to="/privacidad" class="black--text" style="text-decoration: none;"><p>Política de Privacidad</p></router-link>
            <router-link to="/login" class="black--text" style="text-decoration: none;"><p>Empleados</p></router-link>
            <router-link to="/sitemap.xml" class="black--text" style="text-decoration: none;"><p>Mapa de Sitio</p></router-link>
          </v-layout>
        </v-col>
        <v-col>
          <v-layout id="mimica" align-right column>
            <p>Powered by MIMICA</p>
          </v-layout>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="css">
#bottom {
  background: rgba(222, 222, 222, 0.8) !important;
  background: transparent !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  line-height: 50%;
}

#mimica {
  text-align: right;
  padding-top: 20%;
}
</style>