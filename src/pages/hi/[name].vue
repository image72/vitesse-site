<script setup lang="ts">
const props = defineProps<{ name: string }>();
const router = useRouter();
const user = useUserStore();

watchEffect(() => {
  user.setNewName(props.name);
});
</script>

<template>
  <div>
    <div class="text-4xl">
      <div class="i-carbon-pedestrian inline-block" />
    </div>
    <p>hi, {{ props.name }}</p>

    <p class="text-sm opacity-75">
      <em>dynamic route</em>
    </p>

    <template v-if="user.otherNames.length">
      <div class="text-sm mt-4">
        <span class="opacity-75">also know as:</span>
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
      <button class="btn m-3 mt-6 text-sm" @click="router.back()">back</button>
    </div>
  </div>
</template>
