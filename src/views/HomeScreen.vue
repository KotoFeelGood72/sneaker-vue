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
            v-for="(item, i) in categories"
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
          class="mb-10"
        />
        <ul class="flex items-center justify-start flex-wrap gap-6">
          <li
            v-for="(item, i) in products"
            :key="'products-item-' + i"
            class="lg:min-w-[15.35%] lg:max-w-[17%] max-w-[30%]"
          >
            <CardProducts :product="item" />
          </li>
        </ul>
      </div>
    </section>
    <section class="homeCat lg:mb-20 mb-10">
      <div class="container">
        <SectionHead
          title="Одежда"
          button-link="/"
          button-title="Все категории"
          class="mb-10"
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
          class="mb-10"
        />
        <ul class="flex items-center justify-start flex-wrap lg:gap-6 gap-2">
          <li
            v-for="(item, i) in clothesProducts"
            :key="'products-item-' + i"
            class="lg:min-w-[15.35%] lg:max-w-[17%] max-w-[30%]"
          >
            <CardProducts :product="item" />
          </li>
        </ul>
      </div>
    </section>
    <section class="homeCat lg:mb-20 mb-10">
      <div class="container">
        <SectionHead
          title="Аксессуары"
          button-link="/"
          button-title="Все категории"
          class="mb-10"
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
          class="mb-10"
        />
        <ul class="flex items-center justify-start flex-wrap gap-6">
          <li
            v-for="(item, i) in clothesProducts"
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
import { useProductStore, useProductStoreRefs } from "@/stores/useProductStore";
import { onMounted } from "vue";

const { loadNext, fetchProducts } = useProductStore();
const { products, loading, hasNext } = useProductStoreRefs();

onMounted(() => {
  fetchProducts();
});
const slides = [
  { link: "/", img: "/assets/img/slide.jpg" },
  { link: "/", img: "/assets/img/slide.jpg" },
  { link: "/", img: "/assets/img/slide.jpg" },
];

const categories = [
  {
    title: "Кроссовки и кеды",
    img: "/assets/img/categories/cat_1.png",
    mobile: "/assets/img/categories/cat_1_mobile.png",
    link: "/shop/clothes/products-sneak",
  },
  {
    title: "Кастомные кроссовки",
    img: "/assets/img/categories/cat_2.png",
    mobile: "/assets/img/categories/cat_2_mobile.png",
    link: "/shop/clothes/products-sneak",
  },
  {
    title: "Ботинки",
    img: "/assets/img/categories/cat_3.png",
    mobile: "/assets/img/categories/cat_3_mobile.png",
    link: "/shop/clothes/products-sneak",
  },
  {
    title: "Сланцы, сандалии, сабо, мюле",
    img: "/assets/img/categories/cat_4.png",
    mobile: "/assets/img/categories/cat_4_mobile.png",
    link: "/",
  },
  {
    title: "Обувь для спорта",
    img: "/assets/img/categories/cat_5.png",
    mobile: "/assets/img/categories/cat_5_mobile.png",
    link: "/shop/clothes/products-sneak",
  },
];

const clothesCategories = [
  {
    title: "Верхняя одежда",
    img: "/assets/img/categories/clothes_1.png",
    mobile: "/assets/img/categories/clothes_1_mobile.png",
    link: "/shop/clothes",
  },
  {
    title: "Свитшоты",
    img: "/assets/img/categories/clothes_2.png",
    mobile: "/assets/img/categories/clothes_2_mobile.png",
    link: "/shop/clothes",
  },
  {
    title: "Худи",
    img: "/assets/img/categories/clothes_3.png",
    mobile: "/assets/img/categories/clothes_3_mobile.png",
    link: "/shop/clothes",
  },
  {
    title: "Футболки",
    img: "/assets/img/categories/clothes_4.png",
    mobile: "/assets/img/categories/clothes_4_mobile.png",
    link: "/shop/clothes",
  },
  {
    title: "Кепки и шапки",
    img: "/assets/img/categories/clothes_5.png",
    mobile: "/assets/img/categories/clothes_5_mobile.png",
    link: "/shop/clothes",
  },
  {
    title: "Джинсы",
    img: "/assets/img/categories/clothes_6.png",
    mobile: "/assets/img/categories/clothes_6_mobile.png",
    link: "/shop/clothes",
  },
];
const accessCategories = [
  {
    title: "Сумки и рюкзаки",
    img: "/assets/img/categories/access_1.png",
    mobile: "/assets/img/categories/access_1-mobile.png",
    link: "/shop/clothes",
  },
  {
    title: "Часы",
    img: "/assets/img/categories/access_2.png",
    link: "/shop/clothes",
    mobile: "/assets/img/categories/access_2-mobile.png",
  },
  {
    title: "Очки",
    img: "/assets/img/categories/access_3.png",
    link: "/shop/clothes",
    mobile: "/assets/img/categories/access_3-mobile.png",
  },
  {
    title: "Кошельки",
    img: "/assets/img/categories/access_4.png",
    mobile: "/assets/img/categories/access_4-mobile.png",
    link: "/shop/clothes",
  },
  {
    title: "Карточницы",
    img: "/assets/img/categories/access_5.png",
    mobile: "/assets/img/categories/access_5-mobile.png",
    link: "/shop/clothes",
  },
];

// const products = [
//   {
//     title: "New Balance",
//     img: "/assets/img/products/1.png",
//     size: "41.5",
//     art: "4205 Sandal 'Black'",
//     price: "14 500 р.",
//   },
//   {
//     title: "New Balance",
//     img: "/assets/img/products/2.png",
//     size: "41.5",
//     art: "4205 Sandal 'Black'",
//     price: "14 500 р.",
//   },
//   {
//     title: "New Balance",
//     img: "/assets/img/products/3.png",
//     size: "41.5",
//     art: "4205 Sandal 'Black'",
//     price: "14 500 р.",
//   },
//   {
//     title: "New Balance",
//     img: "/assets/img/products/4.png",
//     size: "41.5",
//     art: "4205 Sandal 'Black'",
//     price: "14 500 р.",
//   },
//   {
//     title: "New Balance",
//     img: "/assets/img/products/5.png",
//     size: "41.5",
//     art: "4205 Sandal 'Black'",
//     price: "14 500 р.",
//   },
//   {
//     title: "New Balance",
//     img: "/assets/img/products/6.png",
//     size: "41.5",
//     art: "4205 Sandal 'Black'",
//     price: "14 500 р.",
//   },
// ];
const clothesProducts = [
  {
    title: "New Balance",
    first_image: "/assets/img/products/clothes_1.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
  {
    title: "New Balance",
    first_image: "/assets/img/products/clothes_2.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
  {
    title: "New Balance",
    first_image: "/assets/img/products/clothes_3.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
  {
    title: "New Balance",
    first_image: "/assets/img/products/clothes_4.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
  {
    title: "New Balance",
    first_image: "/assets/img/products/clothes_5.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
  {
    title: "New Balance",
    first_image: "/assets/img/products/clothes_6.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
];
</script>
