<template>
  <div>
    <b-navbar class="mx-5 my-3">
      <b-navbar-brand href="#">[[LOGO]]</b-navbar-brand>
      <div class="ml-auto border-bottom my-3 py-2">
        <b-navbar-nav class="mx-3">                
          <b-nav-item class="mx-3">Inicio</b-nav-item>        
          <b-nav-item class="mx-3">Sobre Nosotros</b-nav-item>        
          <b-nav-item-dropdown text="Productos" class="mx-3">
            <b-dropdown-item></b-dropdown-item>
            <b-dropdown-item></b-dropdown-item>
            <b-dropdown-item></b-dropdown-item>
          </b-nav-item-dropdown>      
          <b-nav-item class="mx-3">Contacto</b-nav-item>        
          <b-nav-item class="mx-3">Noticias</b-nav-item>        
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>

export default {
  components:{
    
  }
}
</script>

<style>
.nav-link {  
  /*not accurate, will do, also avoid important*/
  color: mediumturquoise !important
}
</style>