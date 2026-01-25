<script setup lang="ts">
import { computed, useSlots } from 'vue'

import type { QSelectProps } from 'quasar'

import { checkRequired } from '../utils/form'

interface SelectComponentProps extends QSelectProps {
  required?: boolean
}

const props = withDefaults(defineProps<SelectComponentProps>(), {
  required: false
})

const rulesFromProp = props.rules || []
const rules = props.required ? rulesFromProp.concat([checkRequired]) : rulesFromProp
const slots = useSlots()

const qSelectProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { required, standout, ...rest } = props
  return rest
})
</script>

<template>
  <q-select v-bind="qSelectProps" :rules standout>
    <template v-for="(_, name) in slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </q-select>
</template>
