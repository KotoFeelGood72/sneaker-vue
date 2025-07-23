<template>
  <!-- <RouterLink :to="product.link"> -->
  <RouterLink to="/shop/clothes/products-sneak">
    <div class="cardProducts flex flex-col gap-2">
      <div class="bg-light rounded-[8px] lg:py-16 px-4 relative">
        <div>
          <!-- <ul
            class="sale-list absolute top-4 left-4 flex flex-wrap gap-1"
            v-if="product.sales?.length > 0"
          >
            <li
              v-for="item in product.sales"
              :class="
                'bg-' +
                isColorSheme(item) +
                ' text-white text-14 py-[2px] px-[10px] rounded-[10px]'
              "
            >
              {{ item }}
            </li>
          </ul> -->
          <img :src="product.img" class="h-[135px] w-full object-contain" />
        </div>
        <div
          class="attr absolute lg:bottom-4 lg:left-6 bottom-2 left-2 lg:text-12 text-10 flex items-center opacity-40 gap-1"
        >
          <span>EU:</span>
          <span>41.5</span>
        </div>
      </div>
      <div class="content flex flex-col lg:gap-2 gap-0">
        <h3 class="lg:text-26 font-semibold text-dark text-14">New Balance</h3>
        <p class="lg:text-14 opacity-40 text-[9px]">4205 Sandal 'Black'</p>
        <span class="lg:text-18 text-dark font-medium text-16">14 500 р.</span>
        <div class="split flex items-center gap-1 -mt-2" v-if="product.fit">
          <span class="bg-[#222222CC] px-[4px] py-[1px] text-white text-12 rounded-md">{{
            product.fit
          }}</span>
          <span class="text-dark opacity-50 text-12">Сплит</span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  product: any;
}>();

const isColorSheme = (text: string) => {
  switch (text) {
    case "Быстро разбирают":
      return "orange";
    case "Новинка":
      return "dark";
    default:
      return "dark";
  }
};
</script>

<style scoped lang="scss"></style>
