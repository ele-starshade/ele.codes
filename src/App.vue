<script setup>
import { ref } from 'vue'

const date = new Date()
const year = ref(date.getFullYear())
</script>

<template>
  <va-layout
    :top="{ order: 1 }"
    :bottom="{ order: 1 }"
  >
    <template #top>
      <va-navbar
        color="shadow"
        class="py-2"
      >
        <template #center>
          <va-navbar-item class="pa-4">
            <img
              src="/logo.png"
              style="height: 30px;"
            >
          </va-navbar-item>
        </template>
      </va-navbar>
    </template>

    <template #content>
      <main class="pa-4">
        <router-view />
      </main>
    </template>

    <template #bottom>
      <footer class="pa-4 va-border-top va-text-right">
        &copy; Copyright ele.codes {{ year }}
      </footer>
    </template>
  </va-layout>
</template>
