<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="bg-primary text-white">
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

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="flex justify-end">
          <small>Ricardo Vethencourt 2026</small>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
