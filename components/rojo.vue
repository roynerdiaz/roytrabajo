<template>
  <div class="rojo" :class="{ 'onrojo': isOn }"></div>
</template>

<script>
export default {
  props: ['isOn']
}
</script>

<style>
.rojo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 10px;
  background-color: red;
}

.onrojo {
  background-color: rgba(255, 0, 0, 0.2);
}
</style>