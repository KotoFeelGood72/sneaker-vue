<template>
  <div class="container lg:space-y-[60px] space-y-5">
    <div class="flex lg:gap-24 gap-10 flex-wrap justify-between">
      <div class="max-w-[754px] w-full">
        <SearchInputs
          v-model="searchQuery"
          placeholder="Введите номер посылки"
          class="lg:mb-10 mb-4"
        />
        <div v-if="isEmpty" class="lg:text-20 text-10">
          Здесь будут расположены ваши будущие покупки
        </div>
        <div v-else class="lg:space-y-10 space-y-5 max-lg:pt-6">
          <div v-for="(item, i) in ordersListPreview" :key="'all-order-row-' + i">
            <OrdersList
              :orders="item"
              :class="[
                'lg:pb-4 pb-2',
                i < ordersListPreview.length - 1 ? 'border-b border-gray' : '',
              ]"
            />
          </div>
        </div>
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
import OrdersList from "@/components/list/OrdersList.vue";
import { ordersListPreview } from "@/data/Orders";
import { clothesProducts } from "@/data/ProductsList";
import { ref } from "vue";

const searchQuery = ref<any>();
const isEmpty = ref<any>(false);
</script>

<style scoped></style>
