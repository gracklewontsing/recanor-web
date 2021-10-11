<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-6 mt-5 mx-auto">
                <v-form v-on:submit.prevent="login">
                  <v-container class="my-15">
                    <h1 class="text-center">Iniciar Sesión</h1>     

                    <v-text-field
                      v-model="email"                      
                      label="E-mail"
                      required
                    ></v-text-field>                                       
                    <v-text-field
                      v-model="password"
                      type="password"
                      label="Password"
                      required
                    ></v-text-field>                   
                    <v-btn @click="login" depressed color="primary" block>ENTRAR</v-btn>
                  </v-container>
                </v-form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: '',      
    }
  },
  methods: {
    login () {
      console.log("logging...", this.email, this.password)
      //axios.post('http://localhost:8081/user/login', {
      axios.post('http://212.1.214.191:8081/user/login', {
        email: this.email,        
        password: this.password
      }).then(res => {
        if (res.data.error) {
          console.log(res.data.error);
          return ;
        }                                
        localStorage.setItem('jwt', res.data);
        if (localStorage.getItem('jwt') != null) {
          this.$emit('loggedin')
          this.$router.push(this.$route.params.nextUrl)
        }        
        //send to news manager instead
        this.$router.push({ name: 'manager' });
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>
