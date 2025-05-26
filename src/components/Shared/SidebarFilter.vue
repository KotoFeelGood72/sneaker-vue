<template>
  <div class="sidebar max-w-[362px]">
    <div class="text-16 text-dark font-semibold mb-6 w-full">Фильтры</div>
    <RangeSlider
      v-model:modelValue="priceRange"
      :min="1"
      :max="36900"
      :step="100"
      class="mb-6"
    />
    <Dropdown title="Размер" class="mb-6">
      <Tabs :tabs="['EU', 'RU', 'US', 'UK', 'MM']">
        <template #default="{ activeIndex }">
          <div v-if="activeIndex === 0">
            <div class="grid-cols-2 grid gap-2">
              <Checkbox
                v-model="selectedSize"
                :id="'sz35' + item"
                title="35"
                value="35"
                v-for="item in 12"
                :key="'item-check-' + item"
              />
            </div>
          </div>
          <div v-if="activeIndex === 1">
            <div class="grid-cols-2 grid gap-2">
              <Checkbox
                v-model="selectedSize"
                :id="'sz345' + item"
                title="35"
                value="35"
                v-for="item in 5"
                :key="'item-check-' + item"
              />
            </div>
          </div>
          <div v-if="activeIndex === 2">
            <div class="grid-cols-2 grid gap-2">
              <Checkbox
                v-model="selectedSize"
                :id="'sz353' + item"
                title="35"
                value="35"
                v-for="item in 18"
                :key="'item-check-' + item"
              />
            </div>
          </div>
          <div v-if="activeIndex === 3">
            <div class="grid-cols-2 grid gap-2">
              <Checkbox
                v-model="selectedSize"
                :id="'sz352' + item"
                title="35"
                value="35"
                v-for="item in 12"
                :key="'item-check-' + item"
              />
            </div>
          </div>
          <div v-if="activeIndex === 4">
            <div class="grid-cols-2 grid gap-2">
              <Checkbox
                v-model="selectedSize"
                :id="'sz351' + item"
                title="35"
                value="35"
                v-for="item in 5"
                :key="'item-check-' + item"
              />
            </div>
          </div>
        </template>
      </Tabs>
    </Dropdown>
    <Dropdown title="Бренд">
      <div>
        <SearchInputs v-model="searchBrand" placeholder="Введите бренд" class="mb-4" />
        <Checkboxes
          v-model="chosenBrands"
          :brands="[
            { name: 'ANKI', count: 0 },
            { name: 'Adidas', count: 8 },
            { name: 'Aime Leon Dore', count: 1 },
            { name: 'Air Kicks', count: 1 },
            { name: 'Andrey Kim', count: 4 },
            { name: 'Asics', count: 1 },
            { name: 'Birkenstock', count: 2 },
            { name: 'Crocs', count: 1 },
            { name: 'Dr.Matrens', count: 1 },
          ]"
        />
      </div>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import RangeSlider from "../Inputs/RangeSlider.vue";
import Dropdown from "./Dropdown.vue";
import Tabs from "./Tabs.vue";
import Checkbox from "../Inputs/Checkbox.vue";
import Checkboxes from "../Inputs/Checkboxes.vue";
import SearchInputs from "../Inputs/SearchInputs.vue";

const priceRange = ref<[number, number]>([1, 23900]);
const selectedSize = ref<string>("");
const searchBrand = ref<string>("");
const chosenBrands = ref<string[]>([]);
</script>

<style scoped lang="scss"></style>
