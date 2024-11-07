<template>
  <div class="amarillo" :class="{ 'onamarillo': isOn }"></div>
</template>

<script>
export default {
  props: ['isOn']
}
</script>
  
<style>
.amarillo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 10px;
  background-color: yellow;
}

.onamarillo {
  background-color: rgba(255, 255, 0, 0.2);
}
</style>