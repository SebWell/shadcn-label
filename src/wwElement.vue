<template>
  <label 
    :for="htmlFor"
    :class="labelClasses"
  >
    <span v-if="text">{{ text }}</span>
    <slot v-else />
    <span v-if="required" class="text-destructive ml-1">*</span>
  </label>
</template>

<script>
import { computed } from 'vue'
import { cn } from './cn.js'

export default {
  name: 'WewebLabel',
  props: {
        // Individual props will be auto-generated based on the component type
        // This is a placeholder that will be manually refined per component
    },
  setup(props) {
    const labelClasses = computed(() => cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      props.customClasses
    ))

    return {
      labelClasses
    }
  }
}
</script>

<style>
/* Import global shadcn/ui styles */
@import './globals.css';
</style> 