<template>  
  <div class="my-10">
    <v-parallax    
    
    class="mt-16"
    src="http://212.1.214.191:8081/static/Contacto.jpg"/> 
    <v-row class="my-5 mt-16 mx-auto d-flex justify-center">
      
      <v-col class="px-16">
        <GmapMap
          :center="{lat:28.7480754, lng:-106.154994}"
          :zoom="16"
          map-type-id="terrain"
          style="width: 500px; height: 600px"
          class="mx-auto"
        >
          <GmapMarker                        
            :position="{lat:28.74808, lng:-106.15280}"
            :clickable="true"
            :draggable="true"
            @click="openInfoWindowTemplate({lat:28.74808, lng:-106.15280})"
          />
          <gmap-info-window :options="{maxWidth: 300}" :position="infoWindow.position" :opened="infoWindow.open" @closeclick="infoWindow.open = false">
        <div id="thediv">Oficinas Recanor</div>
      </gmap-info-window>
        </GmapMap>
      </v-col>
      <v-col class="px-16">
        <div class="text-h4 primary--text mb-1">Escríbenos</div>
        <div class="text-body-1 mb-5">Mándanos un mensaje para más información</div>
        <v-form
          ref="form"
          id="contactForm"
          v-model="valid"          
          lazy-validation
        >
          <v-text-field
            v-model="name"            
            :rules="nameRules"
            label="Nombre"            
            outlined
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Correo electrónico"
            outlined
            required
          ></v-text-field>

          <v-textarea
            v-model="message"
            :rules="messageRules"
            label="Mensaje"      
            outlined  
            auto-grow            
            required
          ></v-textarea>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="No soy un robot."
            required
          ></v-checkbox>
          
          <vue-recaptcha sitekey="Your key here">
            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="sendEmail"              
            >
              Enviar
            </v-btn>
          </vue-recaptcha>
        </v-form>        
      </v-col>
    </v-row>
    <div class="mx-auto text-h4 primary--text my-10 text-center">Estamos para servirte</div>
    <v-row align="stretch" class="mx-16 d-md-flex d-sm-inline justify-center">
      <v-col>
        <v-card flat class="grey lighten-3 mx-auto">
          <v-card-title>
            <v-icon large color="primary">mdi-map-marker</v-icon>            
            <div class="primary--text text--subtitle-1">Visitanos</div>
          </v-card-title>
          <v-card-text style="overflow-y: auto; height:225px" class="mx-3">
            <div class="text-body-1">Av. Innovacion 1800</div>
            <div class="text-body-1">Complejo Industrial</div>
            <div class="text-body-1">Impulso, 31183</div>
            <div class="text-body-1">Chihuahua, Chih</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card flat class="grey lighten-3 mx-auto">
          <v-card-title>
            <v-icon large color="primary">mdi-clock-time-four-outline</v-icon>            
            <div class="primary--text text--subtitle-1">Horario</div>
          </v-card-title>
          <v-card-text style="overflow-y: auto; height:225px" class="mx-3">
            <div class="text-body-1">Lunes a Viernes</div>
            <div class="text-body-1">8:30AM a 5:00PM</div>
            <br>
            <div class="text-body-1">Sábado</div>
            <div class="text-body-1">8:30AM a 1:00PM</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card flat class="grey lighten-3 mx-auto">
          <v-card-title>
            <v-icon large color="primary">mdi-phone</v-icon>            
            <div class="primary--text text--subtitle-1">Teléfonos</div>
          </v-card-title>
          <v-card-text style="overflow-y: auto; height:225px" class="mx-3">
            <div class="text-body-1">Ing. Edgar Luján</div>
            <div class="text-body-1">(614) 125 0761</div>
            <br>
            <div class="text-body-1">Lic. Eduardo Luján</div>
            <div class="text-body-1">(614) 196 1959</div>
            <br>
            <div class="text-body-1">Lic. Ruth Hernández</div>
            <div class="text-body-1">(614) 278 2096</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card flat class="grey lighten-3 mx-auto">
          <v-card-title>
            <v-icon large color="primary">mdi-email</v-icon>            
            <div class="primary--text text--subtitle-1">Correo</div>
          </v-card-title>
          <v-card-text style="overflow-y: auto; height:225px" class="mx-3">
            <div class="text-body-1">recanor@outlook.com</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-img
    dark    
    class="mt-16"
    src="http://212.1.214.191:8081/static/Contacto1.jpg" /> 
  </div>      
</template>

<script>
/* eslint-disable no-mixed-spaces-and-tabs */
  import VueRecaptcha from 'vue-recaptcha';
  import emailjs from 'emailjs-com';
  export default {    
    components: { VueRecaptcha },
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Se requiere el nombre',        
      ],
      email: '',
      emailRules: [
        v => !!v || 'Se requiere un correo electrónico',
        v => /.+@.+\..+/.test(v) || 'El correo electrónico es inválido',
      ],
      message:'',
      messageRules: [
        v => !!v || 'Se requiere un mensaje'
      ],
      checkbox: false,
      infoWindow: {
              position: {
                lat: 28.74808,
                lng: -106.15280
              },
              open: false,
              template: ''
            },
            clicked: false
          
    }),

    methods: {
      sendEmail(){
        if (this.name && this.message && this.email) {
          this.disableSubmit = true;
          this.$recaptcha("contactus").then((token) =>{
            if(token){
              emailjs.send("","");
              emailjs.sendForm('service_z3gjx1m', 'template_pk2e7i8', 'contactForm', "user_wTvdMgOWbeUGQhdiJqB8u",{
                name: this.name,
                email: this.email,
                message: this.message
              })
              .then((result) => {
                alert("Mensaje enviado correctamente.")
                console.log('SUCCESS!', result.status, result.text);
              }, (error) => {
                alert("Ocurrió un error, por favor intente más tarde.")
                console.log('FAILED...', error);
              });
            }
          })          
        }
	      else { alert("Se requieren todos los datos") }
      },
      openInfoWindowTemplate (pos) {
            this.infoWindow.position = pos
            this.infoWindow.open = true

            this.clicked = true
          }
    },
  }
</script>

<style scoped>
.text-h4{
  font-family: 'Montserrat', !important;
}
</style>
