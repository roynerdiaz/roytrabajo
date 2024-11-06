<template>
  <div class="verde" :class="{ 'onverde': isOn }"></div>
</template>

<script>
export default {
  props: ['isOn']
}
</script>

<style>
.verde {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 10px;
  background-color: lime;
}

.onverde {
  background-color: rgba(0, 255, 0, 0.2);
}
</style>