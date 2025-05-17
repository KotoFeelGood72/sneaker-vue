<template>
  <div class="HomeScreen">
    <section class="HomeSlider">
      <OneSlider :slides="slides" id="home_sliders_hero" />
    </section>
  </div>
</template>

<script setup lang="ts">
import OneSlider from "@/components/sliders/OneSlider.vue";

const slides = [
  { link: "/", img: "/assets/img/slide.jpg" },
  { link: "/", img: "/assets/img/slide.jpg" },
  { link: "/", img: "/assets/img/slide.jpg" },
];
</script>

<style scoped lang="scss"></style>
