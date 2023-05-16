<script setup lang="ts">
defineOptions({
  name: "IndexPage",
});
const user = useUserStore();
const name = $ref(user.savedName);

const router = useRouter();
const go = () => {
  if (name) router.push(`/hi/${encodeURIComponent(name)}`);
};
</script>

<template>
  <div>
    <div class="text-4xl">
      <div class="i-carbon-campsite inline-block" />
    </div>
    <p>
      <a
        rel="noreferrer"
        href="https://github.com/antfu/vitesse"
        target="_blank"
      >
        Vitesse
      </a>
    </p>
    <p>
      <em class="text-sm opacity-75">desc</em>
    </p>

    <div py-4 />

    <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">what your name</label>

    <div>
      <button class="btn m-3 text-sm" :disabled="!name" @click="go">go</button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
/* route name: home meta: layout: default requiresAuth: false id: 1234 string:
"1234" */
