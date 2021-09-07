<template>
  <div style="padding-top: 10%; padding-left: 10%" class="mt-10 hidden-sm-and-down">
    <div class="text-h5 tealfont">Sección de Noticias</div>
    <div class="title1 mt-5">{{article.title}}</div>
    <p>{{article.author}} - {{date}}</p>
    <v-spacer></v-spacer>
    <p>{{article.content}}</p>
    <v-spacer></v-spacer>
    <v-img :src="article.image" max-width="600"></v-img>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name:"Article",
data(){
  return{
    article:'',
    date:''
  }
},
methods:{
    initialize(){
      let url = this.$router.currentRoute.path   
      let id = url.replace("/articulo/",'')
      const months = {
        0: 'Enero',
        1: 'Febrero',
        2: 'Marzo',
        3: 'Abril',
        4: 'Mayo',
        5: 'Junio',
        6: 'Julio',
        7: 'Agosto',
        8: 'Septiembre',
        9: 'Octubre',
        10: 'Noviembre',
        11: 'Diciembre'
      }      
      axios.get(`http://212.1.214.191:8081/news/${id}`)
        .then(res => {
          if (res.data.error) {
            console.log(res.data.error);
            return;
          }            
          else {
            this.article = res.data[0]       
            let rawDate = new Date(parseInt(res.data[0].date))
            this.date = rawDate.getDate() + ' de ' + months[rawDate.getMonth()] + ' de ' + rawDate.getFullYear()
            console.log(rawDate,    this.date)
            console.log(this.article)
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
.tealfont {
  color: #2a89b1;
}
</style>