<template>
  <div style="padding-top: 5%;">
    <br />

  <v-parallax
    dark
    height="600"
    src="https://wallpapercave.com/wp/wp5569141.jpg">
  </v-parallax>

   <br /><br />

   <v-container class="">
      <v-row
      class="mb-6"
      justify="center"
      no-gutters>
        <v-col
        cols="6">
          <v-img
            id="img2"
            src="https://wallpapercave.com/wp/wp5569141.jpg"
            max-width="600"
        >
        </v-img>
        <br />
        <v-img
            id="img2"
            src="https://wallpapercave.com/wp/wp5569141.jpg"
            max-width="600"
        >
        </v-img>
        </v-col>
        <v-col>
          <v-layout id="llantaslayout" column justify-center align-left>
            <h2 id="title1">Venta de llantas nuevas</h2>
            <br />
            <p id="text1">
            In mel saperet expetendis. Vitae urbanitas sadipscing nec ut, at vim quis lorem labitur. Exerci electram has 
            et, vidit solet tincidunt quo ad, moderatius contentiones nec no. Nam et puto abhorreant scripserit, et cum 
            inimicus accusamus.

            <br /><br />

            Wisi forensibus mnesarchum in cum. Per id impetus abhorreant, his no magna definiebas, inani rationibus 
            in quo. Ut vidisse dolores est, ut quis nominavi mel. Ad pri quod apeirian concludaturque, id timeam iudicabit
             rationibus pri. Erant putant luptatum ex sit,
            </p>
          </v-layout>
        </v-col>
      </v-row>
    </v-container>

    <br /><br />

    <div class="d-flex flex-column justify-center align-center">
      <v-img src="https://wallpapercave.com/wp/wp5569141.jpg" max-width="1100">
      </v-img>
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