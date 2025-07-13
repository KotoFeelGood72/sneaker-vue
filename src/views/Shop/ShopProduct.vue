<template>
  <div class="container flex lg:gap-10 flex-col lg:flex-row gap-5">
    <div class="max-w-[974px]">
      <ProductSlider :slides="slides" id="products-slider" />
    </div>
    <SidebarProduct />
  </div>
</template>

<script setup lang="ts">
import ProductSlider from "@/components/sliders/ProductSlider.vue";
import SidebarProduct from "@/components/Shared/SidebarProduct.vue";

const slides = [
  { img: "/assets/img/products/products-big.png", alt: "Shoe 1" },
  { img: "/assets/img/products/products-big.png", alt: "Shoe 2" },
  { img: "/assets/img/products/products-big.png", alt: "Shoe 3" },
  { img: "/assets/img/products/products-big.png", alt: "Shoe 3" },
  { img: "/assets/img/products/products-big.png", alt: "Shoe 3" },
  { img: "/assets/img/products/products-big.png", alt: "Shoe 3" },
  { img: "/assets/img/products/products-big.png", alt: "Shoe 3" },
];
</script>

<style scoped lang="scss"></style>
