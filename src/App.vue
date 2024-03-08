<template>
  <va-layout
    :top="{ order: 1 }"
    :bottom="{ order: 1 }"
    class="layout-wrapper"
  >
    <!-- <template #top>
      <app-navigation />
    </template> -->

    <template #content>
      <main>
        <router-view />
      </main>
    </template>

    <!-- <template #bottom>
      <footer class="pa-4 va-border-top va-text-right">
        &copy; Copyright fabo.live {{ year }}
      </footer>
    </template> -->
  </va-layout>
</template>

<script setup>
import { ref } from 'vue'
import AppNavigation from '@/components/AppNavigation.vue'

const date = new Date()
const year = ref(date.getFullYear())
</script>

<style>
  html, body {
    width: 100%;
    min-height: 100%;
  }

  .layout-wrapper {
    width: 100vw;
    min-height: 100vh;
  }
</style>
