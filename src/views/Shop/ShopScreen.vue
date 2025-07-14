<template>
  <div class="container flex gap-6">
    <SidebarFilter class="lg:block hidden" />
    <div class="list flex-grow flex flex-col gap-4">
      <Sortering class="lg:block hidden" />
      <FilterBtn />
      <ProductGrid :products="products" :cutToThree="false" />
      <div ref="sentinel" class="h-1"></div>

      <div class="py-6 text-center">Загружаю ещё…</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarFilter from "@/components/Shared/SidebarFilter.vue";
import Sortering from "@/components/Shared/Sortering.vue";
import FilterBtn from "@/components/Buttons/FilterBtn.vue";
import ProductGrid from "@/components/list/ProductGrid.vue";
import { products } from "@/data/ProductsList";
</script>

<style scoped lang="scss"></style>
