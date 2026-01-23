<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template><RouterView /></template>

<style lang="scss">
body.body--dark,
.q-layout__section--marginal {
  color: $dark-text;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

.notify-dark-text {
  color: $dark !important;
}
</style>
