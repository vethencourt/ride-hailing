<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="row justify-center items-center">
      <q-card class="bg-accent" flat>
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

  @media (max-width: $breakpoint-xs-max) {
    padding: 1rem;
  }

  .q-card {
    width: 25%;

    @media (max-width: $breakpoint-md-max) {
      width: 50%;
    }

    @media (max-width: $breakpoint-xs-max) {
      width: 100%;
    }
  }
}
</style>
