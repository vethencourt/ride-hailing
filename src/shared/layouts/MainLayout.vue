<template>
  <!-- TODO: refactor header and footer -->
  <q-layout view="hhh lpr fFf">
    <q-header class="bg-primary" elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
            <!-- TODO: replace with some ai logo -->
          </q-avatar>
          Ride Hailing
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-secondary">
      <q-toolbar>
        <q-toolbar-title class="text-subtitle2 flex justify-end">
          <small>Ricardo Vethencourt 2026</small>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style lang="scss">
  .q-page {
    width: 100%;
    padding: 32px;

    h6 {
      text-align: center;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
</style>
