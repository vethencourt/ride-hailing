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

  h6 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
