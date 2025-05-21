<template>
  <div class="default">
    <Header />
    <RouterView />
    <div
      class="bg fixed top-0 left-0 w-full h-full bg-dark opacity-30 z-10"
      v-if="activeModal"
    ></div>
    <AuthModal v-if="activeModal == 'auth'" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Shared/Header.vue";
import Footer from "@/components/Shared/Footer.vue";
import { useModalStoreRefs } from "@/stores/useModalStore";
import { computed } from "vue";
import AuthModal from "@/components/modals/AuthModal.vue";

const { modals } = useModalStoreRefs();

const activeModal = computed(() => {
  return Object.entries(modals.value).find(([_, isActive]) => isActive)?.[0] || null;
});
</script>

<style scoped lang="scss"></style>
