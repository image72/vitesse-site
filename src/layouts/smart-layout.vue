<script>
import { markRaw, watch } from "vue";
import { useRoute } from "vue-router";
import AppLayoutDefault from "./normal.vue";

export default {
  name: "AppLayout",
  setup() {
    const layout = markRaw(AppLayoutDefault);
    const route = useRoute();
    watch(
      () => route.meta,
      async (meta) => {
        try {
          const component = await import(`@/layouts/${meta.layout}.vue`);
          layout.value = component?.default || AppLayoutDefault;
        } catch (e) {
          layout.value = AppLayoutDefault;
        }
      },
      { immediate: true }
    );
    return { layout };
  },
};
</script>

<template>
  <component :is="layout">
    <slot />
  </component>
</template>
