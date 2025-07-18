<template>
  <div class="default">
    <Header />
    <div class="container mb-6 mt-5" v-if="!isHome">
      <Breadcrumbs />
    </div>
    <RouterView />
    <div
      class="bg fixed top-0 left-0 w-full h-full bg-dark opacity-30 z-10"
      v-if="activeModal"
    ></div>
    <AuthModal v-if="activeModal == 'auth'" />
    <QaranteeModal v-if="activeModal == 'qarantee'" />
    <PoizonModal v-if="activeModal == 'poizon'" />
    <CreateLinkModals v-if="activeModal == 'createLink'" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Shared/Header.vue";
import Footer from "@/components/Shared/Footer.vue";
import { useModalStoreRefs } from "@/stores/useModalStore";
import { computed } from "vue";
import AuthModal from "@/components/modals/AuthModal.vue";
import Breadcrumbs from "@/components/Shared/Breadcrumbs.vue";
import { useRoute } from "vue-router";
import QaranteeModal from "@/components/modals/QaranteeModal.vue";
import PoizonModal from "@/components/modals/PoizonModal.vue";
import CreateLinkModals from "@/components/modals/CreateLinkModals.vue";

const { modals } = useModalStoreRefs();
const route = useRoute();

const isHome = computed(() => {
  return route.name === "home";
});

const activeModal = computed(() => {
  return Object.entries(modals.value).find(([_, isActive]) => isActive)?.[0] || null;
});
</script>

<style scoped lang="scss"></style>
