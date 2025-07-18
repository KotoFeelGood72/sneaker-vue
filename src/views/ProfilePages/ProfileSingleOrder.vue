<template>
  <div class="container lg:space-y-[60px] space-y-5">
    <div class="flex lg:gap-24 gap-10 flex-wrap justify-between">
      <div class="max-w-[754px] w-full">
        <SearchInputs
          v-model="searchQuery"
          placeholder="Введите номер посылки"
          class="lg:mb-10 mb-4"
        />
        <div class="flex items-center justify-between gap-10 lg:-mt-5 lg:mb-10 mb-5">
          <div
            class="inline-flex items-center gap-1 bg-light rounded-full text-dark py-1 px-4 cursor-pointer max-lg:hidden"
          >
            <div class="w-3 h-3 flex items-center justify-center arrow-btn rotate-180">
              <Icons icon="meteor-icons:chevron-right" color="black" />
            </div>
            <p class="max-lg:text-12">Вернуться ко всем заказам</p>
          </div>
          <div class="lg:text-20 text-10">Ожидается: {{ singleOrder.gettingDate }}</div>
          <div class="lg:text-20 text-10">Дней в пути: {{ singleOrder.wait }}</div>
        </div>
        <OrdergalleryList :gallery="gallery" />
        <StageOrderList :orders="singleOrder" />
      </div>
      <ProfileListMenu />
    </div>
    <div>
      <div class="divider max-lg:hidden"></div>
      <SectionHead
        title="Вас может заинтересовать"
        button-link="/"
        button-title="Все"
        class="lg:mb-10 mb-5 lg:pt-[65px] max-lg:hidden"
      />
      <ProductGrid :products="clothesProducts" :cutToThree="false" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SearchInputs from "@/components/Inputs/SearchInputs.vue";
import ProfileListMenu from "@/components/list/ProfileListMenu.vue";
import SectionHead from "@/components/Shared/SectionHead.vue";
import ProductGrid from "@/components/list/ProductGrid.vue";
import StageOrderList from "@/components/list/StageOrderList.vue";
import OrdergalleryList from "@/components/list/OrderGalleryList.vue";
import { singleOrder } from "@/data/Orders";
import { clothesProducts } from "@/data/ProductsList";
import { ref } from "vue";

const searchQuery = ref<any>();

const gallery = [
  { img: "/assets/img/post.png" },
  { img: "/assets/img/post.png" },
  { img: "/assets/img/post.png" },
  { img: "/assets/img/post.png" },
  { img: "/assets/img/post.png" },
];
</script>

<style scoped></style>
