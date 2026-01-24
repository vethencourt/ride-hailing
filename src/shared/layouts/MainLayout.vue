<script setup lang="ts">
import FooterComponent from '@/shared/components/FooterComponent.vue'
import HeaderComponent from '@/shared/components/HeaderComponent.vue'
</script>

<template>
  <q-layout view="hhh lpr fFf">
    <HeaderComponent />
    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterComponent />
  </q-layout>
</template>

<style lang="scss">
.q-page {
  width: 100%;
  padding: 4px 32px;
}

@media (min-width: $breakpoint-md-min) {
  .q-page {
    width: 75%;
    margin: auto;
  }
}

@media (max-width: $breakpoint-sm-max) {
  .q-page {
    width: 100% !important;
    padding: 4px;
  }
}
</style>
