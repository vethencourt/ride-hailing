<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="row justify-center items-center">
      <q-card class="bg-primary">
        <q-card-section class="text-center">
          <router-view />
        </q-card-section>
      </q-card>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.q-page-container {
  height: 100vh;

  @media (min-width: $breakpoint-md-min) {
    .q-card {
      width: 25%;
    }
  }

  @media (min-width: $breakpoint-sm-min) {
    .q-card {
      width: 75%;
    }
  }

  @media (max-width: $breakpoint-xs-max) {
    padding: 0.5rem;
    .q-card {
      width: 100%;
    }
  }
}
</style>
