<template>
  <div
    class="flex-grow lg:p-6 lg:bg-light rounded-[20px] lg:gap-7 flex flex-col max-w-[506px] p-0 gap-3"
  >
    <div class="link_review flex items-center gap-2 cursor-pointer">
      <Icons icon="ei:star" :size="24" class="-mb-[2px]" />
      <p class="lg:text-20 text-14 text-dark opacity-60">Оставить отзыв</p>
    </div>
    <h3 class="lg:text-26 text-dark font-semibold text-22">New Balance</h3>
    <div class="flex items-center gap-4">
      <p class="text-dark lg:text-28 font-semibold text-22">6 800 р.</p>
      <div class="bg-[#DEDEDE] p-[10px] rounded-md flex items-center gap-[10px]">
        <div class="icon"><img src="/assets/img/s.png" /></div>
        <p class="text-14 text-dark">+500 за покупку</p>
      </div>
    </div>
    <Tabs :tabs="['EU', 'RU', 'US', 'UK', 'MM']" class="mb-[30px]">
      <template #default="{ activeIndex }">
        <div v-if="activeIndex === 0">
          <ButtonSizeList @update:size="onSizeSelected" />
        </div>
        <div v-if="activeIndex === 1">
          <ButtonSizeList @update:size="onSizeSelected" />
        </div>
        <div v-if="activeIndex === 2">
          <ButtonSizeList @update:size="onSizeSelected" />
        </div>
        <div v-if="activeIndex === 3">
          <ButtonSizeList @update:size="onSizeSelected" />
        </div>
        <div v-if="activeIndex === 4">
          <ButtonSizeList @update:size="onSizeSelected" />
        </div>
      </template>
    </Tabs>
    <div
      class="text-20 opacity-60 underline underline-offset-2 [text-underline-position:from-font] [text-decoration-skip-ink:none]"
    >
      Как выбрать размер?
    </div>
    <div class="divider bg-[#E8E8E8] h-[1px]"></div>
    <div class="text-26 font-semibold">Доставка</div>
    <DeliveryCard
      :delivery="{
        datetime: '25–30 дней',
        price: '6 800',
        txt: 'Доставим до Москвы за 25–30 дней, по России — чуть дольше',
      }"
      :selected="false"
    />

    <DeliveryCard
      :delivery="{
        datetime: '~13–15 дней',
        price: '9 800',
        txt: 'Экспресс-доставка в Москву ~13–15 дней, по России — чуть дольше',
      }"
      :selected="true"
    />
    <Buttons size="large">Добавить в корзину</Buttons>
    <div
      class="split flex items-center justify-between text-18 font-semibold text-dark border border-dark px-[30px] py-[10px] rounded-md gap-7 cursor-pointer"
    >
      <div>СПЛИТ</div>
      <div>по 3 400 р х 2 платежа</div>
      <div><Icons icon="qlementine-icons:question-32" :size="30" /></div>
    </div>
    <div class="divider bg-[#E8E8E8] h-[1px]"></div>
    <div>
      <div class="mb-6 flex items-center justify-between">
        <h3 class="text-26 font-semibold text-dark">Расцветки</h3>
        <button
          class="flex items-center gap-1 bg-[#DEDEDE] rounded-full py-2 px-4 text-16 text-dark leading-4"
        >
          <p>Показать все</p>
          <div class="icon flex items-center justify-center -mb-[2px]">
            <Icons icon="meteor-icons:chevron-right" :size="12" />
          </div>
        </button>
      </div>
      <div class="relative">
        <div
          class="prev-color-btn w-6 h-6 flex items-center justify-center cursor-pointer absolute top-[50%] -translate-y-[50%] left-0 z-10"
        >
          <Icons icon="tabler:chevron-left" :size="24" />
        </div>
        <Swiper
          class="w-full max-w-[362px] mx-auto"
          :slides-per-view="2.5"
          :breakpoints="{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
          }"
          :centered-slides="true"
          :centered-slides-bounds="true"
          :space-between="8"
          :navigation="{ prevEl: '.prev-color-btn', nextEl: '.next-color-btn' }"
          :modules="[Navigation]"
        >
          <SwiperSlide v-for="i in 10" :key="i">
            <div
              class="h-[104px] color-slide border border-[#00000033] flex items-center justify-center rounded-md cursor-pointer"
            >
              <img
                src="/assets/img/products/1.png"
                class="w-full object-contain h-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          class="next-color-btn w-6 h-6 flex items-center justify-center cursor-pointer absolute top-[50%] -translate-y-[50%] right-0 z-10 bg-light"
        >
          <Icons icon="tabler:chevron-right" :size="24" />
        </div>
      </div>
    </div>
    <div class="divider bg-[#E8E8E8] h-[1px]"></div>
    <div class="flex items-center justify-between">
      <div class="flex flex-col gap-1">
        <p class="text-20 text-dark">Артикул</p>
        <span class="text-dark text-26 font-semibold">743798209</span>
      </div>
      <div class="flex items-center justify-center">
        <Icons icon="mdi-light:check" :size="40" />
      </div>
    </div>
    <div class="divider bg-[#E8E8E8] h-[1px]"></div>
    <SingleAccordion :index="0" title="Описание">
      <div class="text-16 text-dark leading-[1.4]">
        New Balance 574 — лаконичная классика, которая отлично впишется в любой гардероб.
        Узнаваемый дизайн с прочной подошвой EVA и мягкой вставкой ENCAP. Дополнительную
        фиксацию стопы обеспечивает полиуретановый кант, а антибактериальная стелька
        гарантирует комфорт в течение всего дня.
      </div>
    </SingleAccordion>
    <div class="divider bg-[#E8E8E8] h-[1px]"></div>
    <SingleAccordion :index="0" title="Характеристики">
      <div class="text-16 text-dark">
        <ul class="flex flex-col gap-3">
          <li v-for="item in list" :key="item.title" class="flex items-center gap-2">
            <p>{{ item.title }}:</p>
            <span>{{ item.value }}</span>
          </li>
        </ul>
      </div>
    </SingleAccordion>
    <div class="divider bg-[#E8E8E8] h-[1px]"></div>
    <SingleAccordion :index="0" title="Доставка и оплата">
      <div class="text-16 text-dark">
        <ul class="flex flex-col gap-3">
          <li v-for="item in list" :key="item.title" class="flex items-center gap-2">
            <p>{{ item.title }}:</p>
            <span>{{ item.value }}</span>
          </li>
        </ul>
      </div>
    </SingleAccordion>
    <OriginalCardProduct />
  </div>
</template>

<script setup lang="ts">
import Tabs from "./Tabs.vue";
import ButtonSizeList from "./ButtonSizeList.vue";
import DeliveryCard from "../Cards/DeliveryCard.vue";
import Buttons from "../Buttons/Buttons.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import SingleAccordion from "./SingleAccordion.vue";
import OriginalCardProduct from "../Cards/OriginalCardProduct.vue";

import "swiper/css";
import "swiper/css/navigation";

function onSizeSelected(size: string) {
  console.log("Выбран размер:", size);
}

const list = [
  { title: "Производитель", value: "Китай" },
  { title: "Материал", value: "Замша, Кожа, Сетка" },
  { title: "Сезон", value: " Демисезон, Лето" },
  { title: "Цвет", value: "Синий" },
  { title: "Область применения", value: "Городские" },
  { title: "Полнота стопы", value: "Узкая, Средняя, Широкая" },
  { title: "Технологии", value: "ENCAP" },
];
</script>

<style scoped lang="scss"></style>
