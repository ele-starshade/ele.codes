<template>
  <va-layout
    :top="{ order: 1 }"
    :bottom="{ order: 1 }"
    class="layout-wrapper"
  >
    <template #content>
      <main>
        <router-view />
      </main>
    </template>
  </va-layout>
</template>

<script setup>
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    box-sizing: border-box;
  }

  .layout-wrapper {
    width: 100vw;
    min-height: 100vh;
  }
</style>
