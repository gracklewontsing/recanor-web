<template>
  <div style="padding-top: 5%;">
    <br />

  <v-parallax
    dark    
    src="http://212.1.214.191:8081/static/Productos1.jpg">
  </v-parallax>


   <v-container class="">
      <v-row
      class="mb-6"
      justify="center"
      no-gutters>
        <v-col
        cols="6">
          <v-img
            id="img2"
            class="py-16"
            style="margin-top:32%"
            src="http://212.1.214.191:8081/static/Productos3.jpg"            
            max-width="600"
        >
        </v-img>
        <br />
        </v-col>
        <v-col>
          <v-layout id="llantaslayout" column justify-center align-left>
            <h2 id="title1">Venta de llantas nuevas</h2>
            <br />
            <p id="text1" class="text-justify">
            Recanor ha establecido alianzas comerciales para la distribución de llanta nueva.  <br>
Como la política de Recanor es brindar productos de calidad, dichas alianzas comerciales se han 
realizado con marcas de primer nivel para brindar una confiabilidad de nuestros productos a nuestros 
clientes. Contacta a nuestro agente de ventas para una cotización sin compromiso sobre tus 
necesidades. 
            </p>
            <hr color="white" class="my-3">
            <p id="text1" class="text-justify">
            El esquema de venta de llanta nueva entra en nuestra filosofía de economía circular ya que ayudamos a 
nuestros clientes a obtener el mayor rendimiento de sus llantas originales brindándoles una nueva vida.  <br>
Ademas podemos proporcionar cualquier tipo de llanta nueva asi sea para usos epecializados. 
            </p>
          </v-layout>
        </v-col>
      </v-row>
    </v-container>

    <br /><br />

    <div align=center justify=center>       
      <v-img :src="require('../assets/images/Infografía.png')" class="ml-8" max-width="1100"></v-img>    
    </div>

  </div>
</template>


<style lang="css">

#llantaslayout{
    padding: 10% 30% 0% 5%;
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

</style>

<script>


export default {
  name: "Renovado",
  components: {

  },
};
</script>