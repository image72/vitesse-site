<script setup lang="ts">
const props = defineProps<{ name: string }>();
const router = useRouter();
const user = useUserStore();
const { t } = useI18n();

watchEffect(() => {
  user.setNewName(props.name);
});
</script>

<template>
  <div>
    <div class="text-4xl">
      <div class="i-carbon-pedestrian inline-block" />
    </div>
    <p>
      {{ t("intro.hi", { name: props.name }) }}
    </p>

    <p class="text-sm opacity-75">
      <em>{{ t("intro.dynamic-route") }}</em>
    </p>

    <template v-if="user.otherNames.length">
      <div class="text-sm mt-4">
        <span class="opacity-75">{{ t("intro.aka") }}:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <RouterLink :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </template>

    <div>
      <button class="btn m-3 mt-6 text-sm" @click="router.back()">
        {{ t("button.back") }}
      </button>
    </div>
  </div>
</template>
