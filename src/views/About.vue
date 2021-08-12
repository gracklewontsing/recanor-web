<template>
  <div class="about">
    <br /><br /><br /><br />
    <v-parallax
      dark       
      height=600                     
      src="http://212.1.214.191:8081/static/Sobre Nosotros1.jpg"      
    >
      <v-layout id="txt0" column justify-center>
        <h1 id="title0">Talento humano capacitado</h1>
        <p>
          Gracias a la materia prima y talento humano capacitado, RECANOR ofrece
          servicios y productos de calidad
        </p>
      </v-layout>
    </v-parallax>
    <v-layout id="txt1" column justify-center>
      <h3 id="title1" class="mb-5">Sobre nosotros</h3>
      <h4 id="text1">
        “RECANOR”, surge en el año 2015, gracias a sus dos socios fundadores
        “Alonso y Ruth”, pareja que residía en ese entonces en Huelva, un
        pequeño poblado ubicado en la comunidad de Andalucía en España, país, en
        donde por Ley un neumático debe ser renovado hasta 3 veces, o hasta que
        la vida de la estructura del neumático lo permita y lugar donde surge la
        idea que nos llevaría a lograr lo que hoy es “RECANOR”. </h4>      
      <hr class="my-2" color="white">
      <h4 id="text1">
        En 2016 la pareja cambia de residencia a su lugar de nacimiento, en
        Chihuahua, Chihuahua. Donde con el ideal de fundar un negocio que genere
        un beneficio a su Estado de Origen, inician con el proyecto de
        “RECANOR”, al lado de 6 socios más.</h4>
      <hr class="my-2" color="white">
      <h4 id="text1">
        Es así que, en octubre del 2018, “RECANOR” abre sus puertas al público
        en la Ciudad de Chihuahua, ofreciendo a sus clientes el “Servicio de
        Renovado y Venta de Neumáticos”.
      </h4>
    </v-layout>

    <br /><br />

    <div class="d-flex flex-column justify-center align-center">
      <v-img src="http://212.1.214.191:8081/static/Sobre Nosotros2.jpg" width="90%">
      </v-img>
    </div>

    <br /><br />
    <v-container class="">
      <v-row>
        <v-col>
          <v-img
            id="img2"
            src="http://212.1.214.191:8081/static/Sobre Nosotros3.jpg"
            max-width="600"
          >
          </v-img>
        </v-col>
        <v-col>
          <v-layout id="txt2" column justify-center align-left>
            <h2 id="title1">Misión</h2>
            <p>
              Hacer que su neumático usado adquiera el aspecto y las
              características físicas de un neumático nuevo.
            </p>
          </v-layout>
        </v-col>
      </v-row>
    </v-container>
    <br /><br />
    <v-container class="">
      <v-row>
        <v-col>
          <v-layout id="txt4" column justify-center align-right>
            <h2 id="title1">Visión</h2>
            <p>
              Incrementar y/o generar en los seres humanos conciencia sobre la
              importancia del uso de neumáticos renovados y la relevancia que
              esto puede tener en el cuidado medio ambiente.
            </p>
          </v-layout>
        </v-col>
        <v-col>
          <v-img
            id=""
            style="margin-right: 20%"
            src="http://212.1.214.191:8081/static/Sobre Nosotros.jpg"
            max-width="600"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-container>
    <br /><br />
    <v-layout id="txt3" align-center column justify-center>
      <h1 id="title1">Valores</h1>
      <p>
        RECANOR se compromete a conducirse en todos los aspectos, de una manera
        responsable, incluyendo el desarrollo de soluciones eficientes para
        satisfacer y SUPERAR las expectativas y los deseos de los clientes,
        respetando al medio ambiente. <br /><br />
        Cada decisión de RECANOR, está basada en cinco valores fundamentales,
        promoviendo el respeto a las personas y al medio ambiente.
      </p>
    </v-layout>
    <br /><br />

    <v-row justify="center">
      <v-col v-for="n in 5" :key="n" class="d-flex flex-wrap child-flex"
      cols="2">
        <v-img contain :src="require(`@/assets/images/val${n}.png`)" height="180"></v-img>
      </v-col>      
    </v-row>
  </div>
</template>


<style lang="css">
#txt0 {
  font-weight: lighter;
  color: white;
  text-align: center;
  padding: 30%;
}

#title0 {
  font-size: 30px;
  font-weight: lighter;
}

#text1 {
  font-size: 17px;
  font-weight: lighter;
}

#title1 {
  color: #2a89b1;
  font-weight: lighter;
  font-size: 35px;
}

#txt1 {
  padding-right: 50%;
  text-align: left;
  margin-left: 15%;
  margin-top: 5%;
}

#txt3 {
  padding-right: 25%;
  padding-left: 25%;
  text-align: center;
}

#txt2 {
  padding-right: 30%;
  text-align: left;
}

#img1 {
  margin-left: 20%;
  margin-top: 10%;
}

#img2 {
  background-color: black;
  margin-left: 20%;
}

#txt4 {
  padding-left: 30%;
  text-align: right;
}

#bigsquare {
  padding: 0rem 13rem;
}

#greysquare {
  background-color: lightgrey;
  width: 18vh;
  height: 18vh;
  padding: 10% 20%;
}

img {
   height: 125%   
 }
</style>

<script>

export default {
  name: "about",

  components: {
    
  },
};
</script>
