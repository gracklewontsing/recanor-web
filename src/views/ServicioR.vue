<template>
  <div>
    <br /><br />
    <v-container class="" style="padding-top: 10%">
      <v-row>
        <v-col>
          <v-layout id="txt4" column justify-center align-right>
            <h2 id="title1">Servicio de renovado</h2>
            <p>
              El servicio de Renovado de Llantas, consiste en retirar el hule
              remanente del piso de la llanta, reparar los daños infringidos
              durante la operación y reponer los componentes necesarios hasta
              dejarla en condiciones de nueva, en resumen, es la forma de
              alargar la vida útil de una llanta, mediante un proceso de
              renovación.
            </p>
          </v-layout>
        </v-col>
        <v-col>
          <v-img
            id=""
            style="margin-right: 20%"
            src="https://wallpapercave.com/wp/wp5569141.jpg"
            max-width="600"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-container>
    <br /><br />
    <v-container class="">
      <v-row>
        <v-col>
          <v-img
            id="img2"
            src="https://wallpapercave.com/wp/wp5569141.jpg"
            max-width="600"
          >
          </v-img>
        </v-col>
        <v-col>
          <v-layout id="txt2" column justify-center align-left>
            <h2 id="title1"></h2>
            <p>
              Las llantas renovadas por RECANOR, ofrecen las mismas
              características que una llanta nueva, es decir: Seguridad,
              calidad, rendimiento kilométrico, comportamiento en carretera y
              adherencia para cualquier tipo de superficie.
            </p>
          </v-layout>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="">
      <h2 id="title1">Características</h2>
      <v-row style="" no-gutters>
        <v-col lg="2">
          <v-img
            id="img2"
            src="https://wallpapercave.com/wp/wp5569141.jpg"
            max-width="200"
          >
          </v-img>
        </v-col>
        <v-col>
          <v-layout id="txt2" column justify-center align-left>
            <h2 id="title1">Seguridad</h2>
            <p>
              Al recibir una llanta para revisión, se realiza una inspección
              inicial, la cual nos asegura que la estructura de la llanta está
              en condiciones para el renovado, de no ser así, por NINGUN motivo,
              la llanta será aceptada, ya que eso pondría en riesgo la seguridad
              del usuario.
            </p>
          </v-layout>
        </v-col>
      </v-row>
    </v-container>

    <br />
    <hr />

    <Footer />
  </div>
</template>


<style lang="css">
</style>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "Renovado",
  components: {
    Footer,
  },
};
</script>