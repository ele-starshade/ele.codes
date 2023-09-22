<script setup>
import { ref } from "vue"
import { useBreakpoint } from "vuestic-ui/web-components"
import { RouterLink } from "vue-router"

const showSidebar = ref(true)
const breakpoints = useBreakpoint()
</script>

<template>
  <va-layout
    :left="{ absolute: breakpoints.smDown }"
  >
    <template #top>
      <va-navbar
        color="secondary"
        class="py-2"
      >
        <template #left>
          <va-button
            :icon="showSidebar ? 'menu_open' : 'menu'"
            color="secondary"
            @click="showSidebar = !showSidebar"
          />
        </template>
        <!-- <template #center>
          <va-navbar-item class="font-bold text-lg">
            ele.codes
          </va-navbar-item>
        </template> -->
      </va-navbar>
    </template>

    <template #left>
      <va-sidebar
        v-model="showSidebar"
        color="secondary"
      >
        <va-sidebar-item
          :active="$route.name === 'home'"
          @click="$router.push({ name: 'home' })"
        >
          <va-sidebar-item-content>
            <VaIcon name="home" /> 
            <va-sidebar-item-title>
              Home
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </va-sidebar>
    </template>

    <template #content>
      <main class="pa-4">
        <router-view />
      </main>
    </template>
  </va-layout>
</template>
