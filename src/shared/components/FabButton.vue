<script setup lang="ts">
import type { QBtnProps } from 'quasar'

const props = defineProps<QBtnProps>()
</script>

<template>
  <q-page-sticky class="fab-button" position="bottom-right">
    <q-btn v-bind="props" fab />
  </q-page-sticky>
</template>

<style lang="scss" scoped>
.fab-button {
  right: 10%;
  bottom: 10%;
}
</style>
