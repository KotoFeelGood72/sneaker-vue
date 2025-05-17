<template>
  <div class="default">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Shared/Header.vue";
import Footer from "@/components/Shared/Footer.vue";
</script>

<style scoped lang="scss"></style>
