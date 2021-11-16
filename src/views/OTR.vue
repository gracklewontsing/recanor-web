<template>
  <div style="padding-top: 5%;">
    <br />

          <v-layout id="otr" column justify-center align-left>
            <h2 id="title1">Llantas OTR</h2>
            <br />
            <p id="text1" class="text-justify">
            Recanor tiene una alianza comercial para la distribución de llanta OTR e Industrial marca Bridgestone.  
            Por lo que brindamos las siguientes soluciones.     </p>
            <ul class="text-justify">         
            <li class="my-1">Suministro de llanta OTR marca Bridgestone.  </li>
            <li class="my-1">Analisis de carga del equipo y de la operación  para la selección de la llanta adecuada. </li>
            <li class="my-1">Seguimientos mensuales en sitio sin costo.</li>
            <li class="my-1">Reportes de rendimiento sobre las llantas sin costo. </li>
            <li class="my-1">Capacitaciones constantes sobre el uso correcto, seguridad, montaje y desmontaje. </li>
            <li class="my-1">Suministramos consumibles y herramienta para el cuidado y manejo adecuado.  </li>
            <li>¿Lo nuestro? Al ser una planta renovadora, conocemos la estuctura de las llantas a la perfeccion 
              y por esto ofrecemos el servicio de reparación de neumáticos OTR mediante el uso de tecnología 
              de punta para garantizar que sigan operando bajo las condiciones mas severas. </li>
            </ul>
          </v-layout>

    <br /><br />

    <div class="d-flex flex-column justify-center align-center">
      <v-img src="http://212.1.214.191:8081/static/Productos2.jpg" max-width="1100">
      </v-img>
    </div>

    <br /><br />

    <div align=center justify=center>
      <v-img :src="require('../assets/images/Infografía.png')" class="ml-8" max-width="1100"></v-img>          
    </div>  
  </div>
</template>


<style lang="css">

#otr{
    padding: 0% 20% 0% 20%;
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