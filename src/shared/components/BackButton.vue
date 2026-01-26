<script setup lang="ts">
import { useRouter } from 'vue-router'

import type { QBtnProps } from 'quasar'

const router = useRouter()
const props = defineProps<QBtnProps>()
</script>

<template>
  <q-btn
    class="back-button q-pa-none"
    v-bind="props"
    icon="keyboard_arrow_left"
    @click="router.back()"
    flat
  />
</template>
