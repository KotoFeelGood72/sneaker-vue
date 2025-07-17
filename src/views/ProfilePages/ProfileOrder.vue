<template>
  <div class="container">
    <div>
      <div>
        <SearchInputs v-model="searchQuery" placeholder="Введите номер посылки" />
        <div v-if="isEmpty">Здесь будут расположены ваши будущие покупки</div>
        <div v-else>
          <div v-for="(item, i) in ordersListPreview" :key="'all-order-row-' + i">
            <OrdersList :orders="item" />
          </div>
        </div>
      </div>
      <ProfileListMenu />
    </div>
    <div>
      <div class="divider"></div>
      <SectionHead
        title="Вас может заинтересовать"
        button-link="/"
        button-title="Все"
        class="lg:mb-10 mb-5"
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
