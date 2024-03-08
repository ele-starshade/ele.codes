<script setup>
import { ref } from "vue";

const items = ref([
  '/stream-screenshots/Twitch-Screenshot-4.png',
  '/stream-screenshots/Twitch-Screenshot-1.png',
  '/stream-screenshots/Twitch-Screenshot-2.png',
  '/stream-screenshots/Twitch-Screenshot-3.png'
])
const value = ref(0)
</script>

<template>
  <VaCarousel
    v-model="value"
    :items="items"
    :indicators="false"
    width="100vw"
    height="100vh"
    autoscroll
    :autoscroll-interval="10000"
    class="carousel"
    :arrows="false"
    fit="cover"
  />
  <div class="overlay-carousel">
    <img
      src="/logo.png"
      alt="logo"
    >
  </div>
</template>

<style lang="scss">
  .carousel {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }

  .overlay-carousel {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: black;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;

    * {
      opacity: 1;
    }

    img {
      width: 75%;
    }
  }
</style>
