<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <q-btn
    class="back-button q-pa-none"
    icon="keyboard_arrow_left"
    text-color="dark-text"
    @click="router.back()"
    flat
  />
</template>

<style lang="scss" scoped></style>
