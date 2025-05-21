<template>
  <div class="HomeScreen">
    <section class="HomeSlider mb-10">
      <div class="container">
        <OneSlider :slides="slides" id="home_sliders_hero" />
      </div>
    </section>
    <section class="homeProducts mb-20">
      <div class="container">
        <div class="flex items-center justify-between mb-10">
          <div class="flex items-center gap-[10px]">
            <Buttons variant="primary" size="medium"> Мужское </Buttons>
            <Buttons variant="primary" size="medium"> Женское </Buttons>
          </div>
          <PoizonButton />
        </div>
        <SectionHead
          title="Обувь"
          button-link="/"
          button-title="Все категории"
          class="mb-10"
        />
        <ul class="flex items-center flex-wrap gap-6">
          <li
            v-for="(item, i) in categories"
            :key="'cat-' + i"
            class="flex-grow inline-flex w-auto"
          >
            <CardCat
              :title="item.title"
              :img="item.img"
              :link="item.link"
              class="lg:h-[333px]"
            />
          </li>
        </ul>
      </div>
    </section>
    <section class="saleRealTime">
      <div class="container">
        <SectionHead
          title="Покупки в реальном времени"
          button-link="/"
          button-title="Все"
          class="mb-10"
        />
        <ul class="flex items-center justify-start flex-wrap gap-6">
          <li
            v-for="(item, i) in products"
            :key="'products-item-' + i"
            class="lg:min-w-[15.35%] lg:max-w-[17%]"
          >
            <CardProducts :product="item" />
          </li>
        </ul>
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
import CardProducts from "@/components/Cards/CardProducts.vue";

const slides = [
  { link: "/", img: "/assets/img/slide.jpg" },
  { link: "/", img: "/assets/img/slide.jpg" },
  { link: "/", img: "/assets/img/slide.jpg" },
];

const categories = [
  { title: "Кроссовки и кеды", img: "/assets/img/categories/cat_1.png", link: "/" },
  { title: "Кастомные кроссовки", img: "/assets/img/categories/cat_2.png", link: "/" },
  { title: "Ботинки", img: "/assets/img/categories/cat_3.png", link: "/" },
  {
    title: "Сланцы, сандалии, сабо, мюле",
    img: "/assets/img/categories/cat_4.png",
    link: "/",
  },
  { title: "Обувь для спорта", img: "/assets/img/categories/cat_5.png", link: "/" },
];

const products = [
  {
    title: "New Balance",
    img: "/assets/img/products/1.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
  {
    title: "New Balance",
    img: "/assets/img/products/2.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
  {
    title: "New Balance",
    img: "/assets/img/products/3.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
  {
    title: "New Balance",
    img: "/assets/img/products/4.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
  {
    title: "New Balance",
    img: "/assets/img/products/5.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
  {
    title: "New Balance",
    img: "/assets/img/products/6.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
];
</script>

<style scoped lang="scss"></style>
