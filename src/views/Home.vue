<template>
  <v-parallax
    dark
    height="800"
    src="http://212.1.214.191:8081/static/HOME1.jpg"
  >
    <v-row 
      align="center"            
    >
      <v-col   
        class="text-left" 
        style="margin-top: 2.5em; margin-left: 3em"
        cols="7"
      >
        <h3 id="hometitle" class="text-justify">Mantenemos tu negocio en movimiento</h3>
        <h4 id="hometext" class="text-justify">
          Somos una empresa comprometida con la calidad de nuestros productos y servicios, es por eso que 
ofrecemos nuestros clientes una gama de soluciones enfocadas a los neumáticos para brindarles el 
mayor rendimiento posible. 
        </h4>   
        <v-dialog v-model="dialog" width="800">
          <template v-slot:activator ="{on, attrs}">
            <v-btn color="#2a89b1" v-bind="attrs" v-on="on" width="250" class="text-left mx-auto my-5 white--text">Ver video</v-btn>      
          </template>          
            <iframe width="800" 
                    height="500" 
                    src="https://www.youtube.com/embed/vxa-A5QxM7I" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>          
        </v-dialog>   
      </v-col>
    </v-row>
  </v-parallax>
</template>

<style lang="css">
#hometitle {
  font-size: 40px;
  font-weight: lighter;
  color: #2a89b1;
}

#hometext {
  font-size: 15px;
  font-weight: lighter;
}
</style>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
