<template>
  <div class="about">
    <br /><br /><br /><br />
    <v-parallax
      dark       
      height=600                     
      src="https://recanorassets.s3.us-east-2.amazonaws.com/Sobre Nosotros1.jpg"      
    >
      <v-layout id="txt0" column justify-center>
        <h1 id="title0">Talento humano capacitado</h1>
        <p>
          Gracias a la materia prima y talento humano capacitado, RECANOR ofrece
          servicios y productos de calidad
        </p>
      </v-layout>
    </v-parallax>
    <v-row class="my-10" column>      
      <v-col class="mx-auto text-justify" cols="8" justify-center>        
        <h3 id="title1" class="mb-5">Sobre nosotros</h3>
        <h4 id="text1" class="text-justify">Empresa Chihuahuense fundada en 2018, dedicada al recauchutado y comercialización de 
neumáticos. </h4>
<hr class="my-2" color="white">
        <h4 id="text1" class="text-justify">
          En RECANOR nos interesamos por la calidad del producto que fabricamos, es por eso que ofrecemos  
  servicio de asesoría  para satisfacer las necesidades de nuestros clientes. </h4>      
        <hr class="my-2" color="white">
        <h4 id="text1" class="text-justify">
          Nuestro producto es fabricado bajo estrictas normas de calidad y tecnología avanzada en el  
  proceso, contribuyendo además a preservar el medio ambiente ya que reciclamos neumáticos 
  usados.  </h4>
        <hr class="my-2" color="white">
        <h4 id="text1" class="text-justify">        
  Ayudamos en la optimización de costos de nuestros clientes ofreciendo un producto de calidad. 
        </h4>
      </v-col>
    </v-row>    

    <!--div class="d-flex flex-column justify-center align-center">
      <v-img src="https://recanorassets.s3.us-east-2.amazonaws.com/Sobre Nosotros2.jpg" width="90%">
      </v-img>
    </div-->
    
    <v-container class="">
      <v-row>
        <v-col>
          <v-img
            id="img2"
            src="https://recanorassets.s3.us-east-2.amazonaws.com/Sobre Nosotros3.jpg"
            max-width="600"
          >
          </v-img>
        </v-col>
        <v-col>
          <v-layout id="txt2" column justify-center align-left>
            <h2 id="title1" class="text-justify">Misión</h2>
            <p class="text-justify">
              Ser una empresa socialmente comprometida enfocada en la seguridad de nuestros trabajadores y en un 
profundo respeto por el medioambiente. Nos esforzamos por satisfacer la necesidad de nuestros clientes 
ofreciendo un producto fabricado con altos estándares de calidad. 
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
            <p class="text-justify" >
              Ser una empresa que contribuya al cuidado del medioambiente introduciendo la filosofía del renovado y 
consumo responsable de neumáticos. 
            </p>
          </v-layout>
        </v-col>
        <v-col>
          <v-img
            id=""
            style="margin-right: 20%"
            src="https://recanorassets.s3.us-east-2.amazonaws.com/Sobre Nosotros.jpg"
            max-width="600"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-container>
    <br /><br />
    <v-layout id="txt3" align-center column justify-center>
      <h1 id="title1">Valores</h1>
      <p class="text-justify">
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
      <v-col class="d-flex flex-wrap child-flex"
       cols="9">
        <!-- <v-img contain :src="require(`@/assets/images/val${n}.png`)" height="180"></v-img> -->
         <v-img :src="require('@/assets/images/values.png')" width="800"></v-img> 
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
