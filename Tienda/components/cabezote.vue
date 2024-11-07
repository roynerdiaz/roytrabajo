<template>
  <div>
    <v-app-bar
      image="https://img.freepik.com/foto-gratis/solido-abstracto-fondo-amarillo-brillante-sitio-pared-estudio-pendiente_1258-70810.jpg"
      dark height="150">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <h2>DON CORREAS - ROYNER DIAZ</h2>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <carrito class="mr-5" :productos="productos">

      </carrito>
    </v-app-bar>

  </div>
</template>
<script>
export default {
  props: {
    productos: Array,
  }
}
</script>