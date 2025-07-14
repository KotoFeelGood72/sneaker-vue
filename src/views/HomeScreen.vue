<template>
  <div class="HomeScreen">
    <section class="HomeSlider mb-10">
      <div class="container">
        <OneSlider :slides="slides" id="home_sliders_hero" />
      </div>
    </section>
    <section class="homeProducts lg:mb-20 mb-10">
      <div class="container">
        <div class="flex items-center justify-between mb-10">
          <div class="flex items-center gap-[10px] flex-grow">
            <Buttons variant="primary" size="medium" :rounded="true"> Мужское </Buttons>
            <Buttons variant="secondary" size="medium" :rounded="true"> Женское </Buttons>
          </div>
          <PoizonButton class="lg:flex hidden" />
        </div>
        <SectionHead
          title="Обувь"
          button-link="/"
          button-title="Все категории"
          class="lg:mb-10 mb-5"
        />
        <ul class="flex items-center flex-wrap lg:gap-6 gap-1 custom-grid">
          <li
            v-for="(item, i) in defaultCategories"
            :key="'cat-' + i"
            class="flex-grow inline-flex w-auto"
          >
            <CardCat
              :title="item.title"
              :img="item.img"
              :link="item.link"
              :mobile="item.mobile"
              class="lg:h-[333px] h-[110px]"
            />
          </li>
        </ul>
      </div>
    </section>
    <section class="saleRealTime lg:mb-20 mb-10">
      <div class="container">
        <SectionHead
          title="Покупки в реальном времени"
          button-link="/"
          button-title="Все"
          class="lg:mb-10 mb-5"
        />
        <ProductGrid :products="products" :cutToThree="true" />
      </div>
    </section>
    <section class="homeCat lg:mb-20 mb-10">
      <div class="container">
        <SectionHead
          title="Одежда"
          button-link="/"
          button-title="Все категории"
          class="lg:mb-10 mb-5"
        />
        <ul class="flex items-center flex-wrap lg:gap-6 custom-grid gap-1">
          <li
            v-for="(item, i) in clothesCategories"
            :key="'cat-' + i"
            class="flex-grow inline-flex w-auto"
          >
            <CardCat
              :title="item.title"
              :img="item.img"
              :link="item.link"
              :mobile="item.mobile"
              class="lg:h-[333px] h-[110px]"
            />
          </li>
        </ul>
      </div>
    </section>
    <section class="saleRealTime lg:mb-20 mb-10">
      <div class="container">
        <SectionHead
          title="Покупки в реальном времени"
          button-link="/"
          button-title="Все"
          class="lg:mb-10 mb-5"
        />
        <ProductGrid :products="clothesProducts" :cutToThree="true" />
      </div>
    </section>
    <section class="homeCat lg:mb-20 mb-10">
      <div class="container">
        <SectionHead
          title="Аксессуары"
          button-link="/"
          button-title="Все категории"
          class="lg:mb-10 mb-5"
        />
        <ul class="flex items-center flex-wrap lg:gap-6 gap-1 custom-grid">
          <li
            v-for="(item, i) in accessCategories"
            :key="'cat-' + i"
            class="flex-grow inline-flex"
          >
            <CardCat
              :title="item.title"
              :img="item.img"
              :mobile="item.mobile"
              :link="item.link"
              class="lg:h-[333px] h-[110px]"
            />
          </li>
        </ul>
      </div>
    </section>
    <section class="saleRealTime lg:mb-20 mb-10">
      <div class="container">
        <SectionHead
          title="Покупки в реальном времени"
          button-link="/"
          button-title="Все"
          class="lg:mb-10 mb-5"
        />
        <ProductGrid :products="clothesProducts" :cutToThree="true" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import OneSlider from "@/components/sliders/OneSlider.vue";
import PoizonButton from "@/components/Buttons/PoizonButton.vue";
import Buttons from "@/components/Buttons/Buttons.vue";
import SectionHead from "@/components/Shared/SectionHead.vue";
import CardCat from "@/components/Cards/CardCat.vue";
import ProductGrid from "@/components/list/ProductGrid.vue";
import {
  defaultCategories,
  clothesCategories,
  accessCategories,
} from "@/data/CategoriesList";
import { products, clothesProducts } from "@/data/ProductsList";

const slides = [
  { link: "/", img: "/assets/img/slide.jpg" },
  { link: "/", img: "/assets/img/slide.jpg" },
  { link: "/", img: "/assets/img/slide.jpg" },
];
</script>
