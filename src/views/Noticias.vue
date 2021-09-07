<template>
  <div style="padding-top: 5%;">
    <div class="title1 mb-3 ml-16">Noticias</div>
    <v-row v-for="n in news" v-bind:key="n" class="ml-16">
      <v-col>
        <v-spacer></v-spacer>
        <v-card class="mx-auto" flat>
          <v-list-item three-line>
            <v-list-item-avatar
              tile                            
              size="300"
            >
              <v-img :src="n.image">                
              </v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1 ml-4">
                {{n.title}}
              </v-list-item-title>
              <v-list-item-subtitle class="ml-5">
                {{n.content}}
              </v-list-item-subtitle>
              <v-list-item-footer>
                <v-btn              
                  text
                  color="teal accent-4"
                  plain
                  @click="$router.push(`articulo/${n._id}`)"                
                >
                  Ver más
                </v-btn>
              </v-list-item-footer>        
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-spacer></v-spacer>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:"News",
  data(){
    return{
      news: ''
    }
  },
  methods:{
    initialize(){
      axios.get(`http://212.1.214.191:8081/news/`)
        .then(res => {
          if (res.data.error) {
            console.log(res.data.error);
            return;
          }            
          else {
            this.news = res.data          
            console.log(this.news)
          }            
          }).catch(err => {
            console.log(err);
        }
      )                  
    },
  },
  mounted(){
    this.initialize();
  }
}
</script>

<style>
.title1 {
  color: #2a89b1;
  font-weight: lighter;
  font-size: 40px;
}
</style>