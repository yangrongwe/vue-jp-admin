<template>
  <div class="tw-flex">
    <div
      v-if="item.label"
      class="tw-mr-6 tw-mt-[16px]"
      :style="{ width: item.labelWidth }"
    >
      {{ item.label }}
    </div>
    <v-switch
      v-bind="item.props"
      v-model="switchValue"
      :rules="rules"
    ></v-switch>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  rules: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['update:modelValue']);
const switchValue = ref(props.item.props.modelValue || false);

watch(switchValue, (newValue) => {
  emit('update:modelValue', { itemName: props.item.itemName, value: newValue });
});
</script>

<style scoped></style>
