<template>
  <label 
    :for="content.htmlFor"
    :class="labelClasses"
  >
    <span v-if="content.text">{{ content.text }}</span>
    <slot v-else />
    <span v-if="content.required" class="text-destructive ml-1">*</span>
  </label>
</template>

<script>
import { computed } from 'vue'
import { cn } from './cn.js'

export default {
  name: 'WewebLabel',
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        text: '',
        htmlFor: '',
        required: false,
        customClasses: ''
      })
    }
  },
  setup(props) {
    const labelClasses = computed(() => cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      props.content.customClasses
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