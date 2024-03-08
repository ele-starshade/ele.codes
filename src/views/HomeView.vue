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
    <p>
      <a
        href="https://twitch.tv/fabo_bluebun"
        target="_blank"
      >
        Watch on Twitch
      </a>
    </p>
  </div>
</template>

<style lang="scss">
  .carousel {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    pointer-events: none;
    user-select: none;
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
    flex-direction: column;
    pointer-events: none;
    user-select: none;

    * {
      opacity: 1;
    }

    img {
      width: 75%;
      pointer-events: none;
      user-select: none;
    }

    a {
      color: #34a2fc;
      border: 1px solid #34a2fc;
      font-size: 32px;
      padding: 10px;
      pointer-events: all;

      &:hover {
        color: #cecece;
        border: 1px solid #34a2fc;
      }
    }
  }
</style>
