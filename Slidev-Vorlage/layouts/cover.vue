<script setup lang="ts">
import DarkBlueSquare from '../components/DarkBlueSquare.vue';
import LightBlueSquare from '../components/LightBlueSquare.vue';

</script>

<template>
  <div class="slidev-layout cover">
    <div class="bg-squares">
      <LightBlueSquare style="position:absolute; opacity: 70%; bottom:-7%; left:8%; transform:rotate(13deg)" />
      <LightBlueSquare style="position:absolute; opacity: 70%; top:20%; left:-5%; transform:rotate(41deg);" />
      <LightBlueSquare style="position:absolute; opacity: 70%; bottom:24%; right:30%; transform:rotate(-29deg);" />
      <LightBlueSquare style="position:absolute; opacity: 70%; bottom:15%; right:8%; transform:rotate(22deg);" />
      <LightBlueSquare style="position:absolute; opacity: 70%; top:10%; right:4%; transform:rotate(-24deg);" />

      <DarkBlueSquare style="position:absolute; opacity: 100%; top:-6%; left:-4%; transform:rotate(-17deg);" />
      <DarkBlueSquare style="position:absolute; opacity: 100%; bottom:6%; left:-4%; transform:rotate(20deg);" />
      <DarkBlueSquare style="position:absolute; opacity: 100%; top:-7%; right:23%; transform:rotate(31deg);" />
      <DarkBlueSquare style="position:absolute; opacity: 100%; bottom:-8%; right:36%; transform:rotate(-12deg);" />
      <DarkBlueSquare style="position:absolute; opacity: 100%; bottom:15%; right:-5%; transform:rotate(47deg);" />
    </div>
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
  <div class="absolute bottom-0 right-5 z-50">
    <img src="../assets/bluehands-logo-basic.svg" alt="bluehands logo" class="h-11" />
  </div>
</template>

<style scoped>
.bg-squares {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.slidev-layout> :not(.bg-squares) {
  position: relative;
  z-index: 1;
}
</style>