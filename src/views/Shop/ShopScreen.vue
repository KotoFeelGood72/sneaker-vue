<template>
  <div class="container flex gap-6">
    <SidebarFilter />
    <div class="list flex-grow flex flex-col gap-4">
      <Sortering />
      <ul class="grid grid-cols-4 gap-6" v-if="products">
        <li v-for="(item, i) in products" :key="'products-item-' + i">
          <CardProducts :product="item" />
        </li>
      </ul>
      <div ref="sentinel" class="h-1"></div>

      <div v-if="loading" class="py-6 text-center">Загружаю ещё…</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarFilter from "@/components/Shared/SidebarFilter.vue";
import CardProducts from "@/components/Cards/CardProducts.vue";
import Sortering from "@/components/Shared/Sortering.vue";

import { useProductStore, useProductStoreRefs } from "@/stores/useProductStore";
import { onMounted, ref } from "vue";

const { loadNext, fetchProducts } = useProductStore();
const { products, loading, hasNext } = useProductStoreRefs();

const sentinel = ref<HTMLElement | null>(null);

onMounted(async () => {
  await fetchProducts();
  const observer = new IntersectionObserver(
    async ([entry]) => {
      if (entry.isIntersecting && hasNext.value && !loading.value) {
        await loadNext();
      }
    },
    { threshold: 1 }
  );

  sentinel.value && observer.observe(sentinel.value);
});
</script>

<style scoped lang="scss"></style>
