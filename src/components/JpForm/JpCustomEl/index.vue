<!-- JpCustomEl.vue -->
<template>
  <div>
    <component :is="customContent" />
  </div>
</template>

<script setup lang="ts">
import { PropType, VNode } from 'vue';

const props = defineProps({
  customContent: {
    type: [Object, String, Function] as PropType<VNode | JSX.Element>,
    default: null,
  },
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
