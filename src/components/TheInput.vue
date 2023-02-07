<script setup lang="ts">
const { modelValue } = defineModel<{
  modelValue: string;
}>();
</script>

<template>
  <input
    id="input"
    v-model="modelValue"
    type="text"
    v-bind="$attrs"
    class="px-4 py-2 w-250px text-center bg-transparent outline-none active:outline-none rounded gray-200 dark:gray-700"
    border="~"
  />
</template>
