<template>
  <v-parallax
    dark
    height="800"
    src="http://localhost:8081/static/HOME1.jpg"
  >
    <v-row 
      align="center"      
      justify="center" 
    >
      <v-col    
        style="margin-top: 2.5em; margin-left: 3em"
      >
        <h3 id="hometitle">Mantenemos tu negocio<br />en movimiento</h3>
        <h4 id="hometext">
          Hacemos que tu llanta usada adquiera el aspecto y las
          <br />caracteristicas fisicas de una llanta nueva
        </h4>      
        <v-btn color="#2a89b1" class="text-left mx-auto my-5 white--text">Ver video</v-btn>      
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

</script>
