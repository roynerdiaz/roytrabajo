<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />

  <div class="traffic-light-container">
    <div class="traffic-light">
      <rojo :isOn="isRedLightOn" />
      <amarillo :isOn="isYellowLightOn" />
      <verde :isOn="isGreenLightOn" />
    </div>
    <div class="traffic-conten"></div>

    <div class="button-container d-flex justify-content-center align-items-center flex-column">
      <button type="button" class="btn btn-dark mb-3" @click="Cambiar">ESPERE</button>
      <button type="button" class="btn btn-dark mb-3" @click="Cambiar2">LISTO</button>
      <button type="button" class="btn btn-dark mb-3" @click="Cambiar3">ADELANTE</button>
    </div>
  </div>
</template>

<script>
import rojo from './components/rojo.vue';
import amarillo from './components/amarillo.vue';
import verde from './components/verde.vue';

export default {
  components: {
    rojo,
    amarillo,
    verde,
  },
  data() {
    return {
      isRedLightOn: true,
      isYellowLightOn: true,
      isGreenLightOn: true,
    };
  },
  methods: {
    Cambiar() {
      this.isRedLightOn = false;
      this.isYellowLightOn = true;
      this.isGreenLightOn = true;
    },
    Cambiar2() {
      this.isYellowLightOn = false;
      this.isRedLightOn = true;
      this.isGreenLightOn = true;
    },
    Cambiar3() {
      this.isGreenLightOn = false;
      this.isYellowLightOn = true;
      this.isRedLightOn = true;
    },
  },
};
</script>

<style scoped>
.traffic-light-container {
  background-image: url('/public/fondo.jpg');
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.traffic-light {
  margin-top: 250px;
  width: 120px;
  height: 300px;
  background-color: #333;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  position: relative;
  margin-left: 900px;
}

.traffic-conten {
  width: 50px;
  height: 300px;
  margin-top: -20px;
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-left: 900px;
}

.button-container {
  margin-top: 0px;
}
</style>