<template>
  <div class="home-page">
    <div class="hero-section">
      <img src="https://cinturonesfreedom.com/cdn/shop/files/Banner-Fredom-tactico_1500x.png?v=1692721458" alt="Imagen de fondo de la tienda de cinturones" class="hero-image">
      <h1 class="hero-title">Tu Tienda de Correas y Cinturones</h1>
      <p class="hero-text">Descubre nuestra colección de cinturones para cada ocasión y estilo.</p>
      <NuxtLink to="/dashboard/">
        <v-btn color="primary" outlined>Explora nuestros productos</v-btn>
      </NuxtLink>
    </div>

    <div class="counter-section">
      <h2>Visita nuestra tienda {{ this.$store.state.count }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>

<style>
.home-page {
  text-align: center;
  padding: 50px;
}

.hero-section {
  background-color: #f5f5f5;
}

.hero-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #333;
}

.hero-text {
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #666;
}

.counter-section {
  margin-top: 50px;
}
</style>
