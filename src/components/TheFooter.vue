<script setup lang="ts"></script>

<template>
  <nav class="text-xl mt-6">
    <RouterLink class="icon-btn mx-2" to="/" title="home">
      <div i-carbon-campsite />
    </RouterLink>

    <RouterLink class="icon-btn mx-2" to="/about" title="about">
      <div i-carbon-dicom-overlay />
    </RouterLink>

    <a
      class="icon-btn mx-2"
      rel="noreferrer"
      href="https://github.com/antfu/vitesse"
      target="_blank"
      title="GitHub"
    >
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
