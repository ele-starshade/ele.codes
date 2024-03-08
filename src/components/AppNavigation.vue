<template>
  <VaNavbar
    color="backgroundElement"
    text-color="textPrimary"
  >
    <template #left>
      <VaNavbarItem class="logo">
        <img
          src="/logo.png"
          style="height: 50px;"
          alt="logo"
        >
      </VaNavbarItem>
    </template>
    <template #right>
      <VaNavbarItem class="hidden sm:block">
        Dashboard
      </VaNavbarItem>
      <VaNavbarItem class="hidden sm:block">
        Reports
      </VaNavbarItem>
      <VaNavbarItem class="hidden sm:block">
        Users
      </VaNavbarItem>
    </template>
  </VaNavbar>
</template>

<script setup>
</script>
