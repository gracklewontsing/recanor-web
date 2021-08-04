<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-6 mt-5 mx-auto">
                <form v-on:submit.prevent="login">
                    <h1 class="h3 mb-3 font-weight-normal">Iniciar Sesión</h1>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" v-model="email" class="form-control" name="email" placeholder="Enter Email">
                    </div>
                    <div class="form-group">
                        <label for="username">Usuario</label>
                        <input type="text" v-model="username" class="form-control" name="username" placeholder="Nombre de usuario">
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" v-model="password" class="form-control" name="password" placeholder="Contraseña">
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'
export default {
  data () {
    return {
      email: '',
      password: '',
      username: ''
    }
  },
  methods: {
    login () {
      axios.post('http://localhost:8081/users/login', {
        email: this.email,
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data.error) {
          console.log(res.data.error);
          return ;
        }
        localStorage.setItem('usertoken', res.data);
        this.username = '';
        this.password = '';
        this.emitMethod()
        //send to news manager instead
        router.push({ name: 'Home' });
      }).catch(err => {
        console.log(err);
      })
    },
    emitMethod () {
      EventBus.$emit('logged-in', 'loggedin');
    }
  }
}
</script>