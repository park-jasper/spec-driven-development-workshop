<!--
A simple wrapper for embeded Stackblitz 

! This Component doesn't work in Firefox! Use Chrome based browsers instead.

Usage:

<Stackblitz id="angular-druxxd" file="src%2Fmain.ts" theme="light"/>
-->


<script setup lang="ts">
withDefaults(defineProps<{
  id: string
  file: string
  theme: string
  width?: string | number
  height?: string | number
}>(), {
  width: '100%',
  height: '400',
})
</script>

<template>
  <iframe class="youtube" :width="width" :height="height"
    :src="`https://stackblitz.com/edit/${id}?embed=1&file=${file}&hideNavigation=1&theme=${theme}`"
    allowfullscreen="true" allowpaymentrequest
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameborder="0" />

</template>