<script setup lang="ts">
import BackButton from '@/shared/components/BackButton.vue'

const props = withDefaults(defineProps<{ isBack?: boolean }>(), {
  isBack: false
})
</script>

<template>
  <!-- TODO: add logo here -->
  <div class="header-container row items-center justify-center">
    <back-button class="q-mr-xs" v-if="props.isBack" color="dark" />
    <h3 class="text-dark text-weight-bolder">Ride Hailing</h3>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  h5 {
    width: fit-content;
    margin: auto;
  }
}
</style>
