<template>
  <div>
    <br />
    <v-container class="" style="padding-top: 10%">
      <v-row>
        <v-spacer></v-spacer>        
        <v-col cols=5>
          <v-layout id="txt4" column justify-center>
            <h2 id="title1" class="mb-4">Servicio de renovado</h2>
            <p class="text-justify">
              Consiste en la selección minuciosa de los cascos para determinar cuales son funcionables, 
repararlas y mediante un proceso de vulcanización obtener un producto de primer nivel. <br>
Gracias a la calidad de la materia prima que utilizamos y a nuestro proceso controlado, la fiabilidad y la 
durabilidad  de nuestro producto permite competir en términos de rendimiento con neumáticos nuevos 
de las primeras marcas. 
<br> Seleccionamos la banda de rodamiento que mas se adapte a sus necesidades y realizamos reparaciones 
profesionales en caso de ser necesarias. ¿El resultado?  Un producto que brinde el desempeño y la 
seguridad de un producto nuevo. 
            </p>
          </v-layout>
        </v-col>
        <v-col cols=7>
          <v-img
            class="py-12"
            style="margin-right: 20%; margin-top: 19%;"
            src="https://recanorassets.s3.us-east-2.amazonaws.com/Productos.jpg"
            max-width="500"
          >
          </v-img>
        </v-col>
        
      </v-row>
    </v-container>
    <br /><br />
    <v-container class="">
      <v-row>
        <v-col cols=7>
          <v-img
            id="img2"
            src="https://recanorassets.s3.us-east-2.amazonaws.com/Productos5.jpg"
            max-width="600"
          >
          </v-img>
        </v-col>
        <v-col cols=4>
          <v-layout id="txt2" class="" column justify-center>
            <h2 id="title1"></h2>
            <p class="text-justify">
              Las llantas renovadas por RECANOR, ofrecen las mismas características que una llanta nueva, es decir: 
Seguridad, calidad, rendimiento kilométrico, comportamiento en carretera y adherencia para cualquier 
tipo de superficie. 
            </p>
          </v-layout>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
    
    <br /><br />

    <h1 id="title1" style="padding-left: 20%;">Características</h1>

    <br />

    <v-container class="" >
    <v-row 
      class="mb-6"
      justify="center"
      no-gutters>
      <v-col
        cols="3"
        sm="6"
        md="1"
      >
          <v-img :src="require('@/assets/images/sec.png')"
            max-width="60"
            justify-center>
          </v-img>
      </v-col>
      <v-col
        cols="5"
        md="10"
        lg="7"
        
      >
          <v-layout id="txt2" column justify-center align-left>
            <h2 id="title1">Seguridad</h2>
            <p id="text1" class="text-justify">
              Al recibir una llanta para revisión, se realiza una inspección
              inicial, la cual nos asegura que la estructura de la llanta está
              en condiciones para el renovado, de no ser así, por NINGUN motivo,
              la llanta será aceptada, ya que eso pondría en riesgo la seguridad
              del usuario.
            </p>
          </v-layout>
      </v-col>
    </v-row>
    <v-row 
      class="mb-6"
      justify="center"
      no-gutters>
      <v-col
        cols="3"
        sm="6"
        md="1"
      >
          <v-img :src="require('@/assets/images/pri.png')"
            max-width="60"
            justify-center>
          </v-img>
      </v-col>
      <v-col
        cols="5"
        md="10"
        lg="7"
        
      >
          <v-layout id="txt2" column justify-center align-left>
            <h2 id="title1">Costo</h2>
            <p id="text1" class="text-justify">
              El “Servicio del Renovado de Llantas”, siempre será más económico que el adquirir una llanta nueva, 
              ya que al invertir tan solo un tercio del valor de una llanta nueva, se obtiene una vida igual a la original.
            </p>
          </v-layout>
      </v-col>
    </v-row>
    <v-row 
      class="mb-6"
      justify="center"
      no-gutters>
      <v-col
        cols="3"
        sm="6"
        md="1"
      >
          <v-img :src="require('@/assets/images/cap.png')"
            max-width="60"
            >
          </v-img>
      </v-col>
      <v-col
        cols="5"
        md="10"
        lg="7"
        
      >
          <v-layout id="txt2" column justify-center align-left>
            <h2 id="title1">Capacitación al cliente</h2>
            <p id="text1" class="text-justify">
              Una llanta nueva, podría ser renovada por estándares de calidad, hasta 3 veces, siempre y 
              cuando su estructura permanezca en buen estado, es por ello que “RECANOR”, ofrece a sus clientes, 
              asesoría y monitoreo de su flotilla vehicular, con la finalidad de disminuir o eliminar practicas 
              incorrectas en el uso de sus llantas, que pudieran provocar que una llanta no sea viable para ser
               renovada.
            </p>
          </v-layout>
      </v-col>
    </v-row>
    <v-row 
      class="mb-6"
      justify="center"
      no-gutters>
      <v-col
        cols="3"
        sm="6"
        md="1"
      >
          <v-img  :src="require('@/assets/images/prm.png')"
            max-width="60"
            justify-center>
          </v-img>
      </v-col>
      <v-col
        cols="5"
        md="10"
        lg="7"
        
      >
          <v-layout id="txt2" column justify-center align-left>
            <h2 id="title1">Materia prima RECANOR</h2>
            <p id="text1" class="text-justify">
              Se maneja materia prima y procedimientos de marcas como 
              MARANGONI y TECH, empresas líderes en su ramo y reconocidas 
              mundialmente por su calidad.
            </p>
          </v-layout>
      </v-col>
    </v-row>
    <v-row 
      class="mb-6"
      justify="center"
      no-gutters>
      <v-col
        cols="3"
        sm="0.5"
        md="1"
        align-self="right"
      >
          <v-img :src="require('@/assets/images/amb.png')"
            max-width="60"
            justify-center>
          </v-img>
      </v-col>
      <v-col
        cols="5"
        md="3.5"
        lg="7"
        
      >
          <v-layout id="txt2" column justify-center align-left>
            <h2 id="title1">Beneficio ambiental</h2>
            <p id="text1" class="text-justify">
              Sin lugar a dudas el Renovado de Llantas, genera un beneficio ambiental al utilizar una
               llanta renovada
            </p>
          </v-layout>
      </v-col>
    </v-row>
  </v-container>
  <v-img       
    contain    
    src="https://recanorassets.s3.us-east-2.amazonaws.com/Productos6.jpg">
  </v-img>
  <br />
    <div align=center justify=center>      
      <v-img :src="require('../assets/images/Infografía.png')" class="ml-8" max-width="1100"></v-img>
    </div>
  </div>
</template>


<style lang="css">
#text1 {
  font-size: 17px;
  font-weight: lighter;
}

#title1 {
  color: #2a89b1;
  font-weight: lighter;
  font-size: 35px;
}
</style>

<script>
export default {
  name: "Renovado",
  components: {
  },
};
</script>