<script setup lang="ts">
import LightBlueSquare from '../components/LightBlueSquare.vue';
</script>

<template>
    <div class="slidev-layout section w-full h-full grid">
        <div class="bg-squares">
            <LightBlueSquare
                style="position: absolute; opacity: 70%; top: calc(6rem - var(--bh-footer-height)); right: -2rem; transform: rotate(-15deg);" />
            <LightBlueSquare
                style="position: absolute; opacity: 70%; bottom: calc(10rem + var(--bh-footer-height)); left: -2rem; transform: rotate(60deg);" />
            <LightBlueSquare
                style="position: absolute; opacity: 70%; bottom: -2rem; left: 20rem; transform: rotate(20deg);" />
        </div>
        <div class="my-auto text-center">
            <slot />
        </div>
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