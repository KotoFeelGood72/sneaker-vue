<template>
  <RouterLink :to="product.link">
    <div class="cardProducts flex flex-col gap-2">
      <div class="bg-light rounded-[8px] lg:py-16 px-4 relative">
        <div>
          <ul
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
          </ul>
          <img :src="product.img" />
        </div>
        <div class="attr absolute bottom-4 left-6 flex items-center gap-4 opacity-40">
          <span>EU:</span>
          <span>{{ product.size }}</span>
        </div>
      </div>
      <div class="content flex flex-col gap-2">
        <h3 class="text-26 font-semibold text-dark">{{ product.title }}</h3>
        <p class="text-14 opacity-40">{{ product.art }}</p>
        <span class="text-18 text-dark font-medium">{{ product.price }}</span>
        <div class="split flex items-center gap-1 -mt-2" v-if="product.split">
          <span class="bg-[#222222CC] px-[4px] py-[1px] text-white text-12 rounded-md">{{
            product.split
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
