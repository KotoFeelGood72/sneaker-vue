<template>
  <div class="container">
    <div class="flex flex-wrap lg:gap-[60px] gap-5">
      <div class="max-w-[904px] lg:mb-12 mb-0 max-lg:space-y-5">
        <h1 class="lg:text-40 text-22 font-semibold lg:mb-[85px] max-lg:text-center">
          Подарочный сертификат Sneaker Team
        </h1>
        <div class="space-y-4">
          <p class="max-lg:text-14">
            Идеальный выбор на любой праздник, с поводом и без! Радуйте друзей, удивляйте
            родных, поздравляйте коллег!
          </p>
          <ul class="space-y-4 list-disc pl-4 max-lg:text-14">
            <li>
              <b>Нет ограничений.</b> Для покупки подарочной картой доступно 100% каталога
              Sneaker Team. Можете покупать любую обувь, одежду и аксессуары любых
              брендов.
            </li>
            <li>
              <b>Подарочная карта бессрочная.</b> Можете использовать хоть через год, хоть
              через 5 лет.
            </li>
            <li>
              <b>Остаток не сгорает.</b> Оставшиеся деньги после покупки можно
              использовать для оплаты следующих покупок.
            </li>
            <li>
              <b>Возможность доплаты. </b>Если цена товара выше – можно доплатить
              недостающую часть суммы, и купить что-то подороже
            </li>
          </ul>
          <p class="max-lg:text-14">Подарочный сертификат Sneaker Team – лучший выбор!</p>
          <div class="flex items-center justify-start lg:gap-4 gap-2">
            <div class="lg:max-w-[393px] max-w-[220px] w-full">
              <Buttons style="width: 100%" size="large" color="bg-orange"
                >Купить сертификат</Buttons
              >
            </div>
            <Select
              class="max-lg:flex-grow"
              v-model="selectedPrice"
              :options="[
                { label: `5'000 ₽`, value: 5000 },
                { label: `10'000 ₽`, value: 10000 },
                { label: `15'000 ₽`, value: 15000 },
                { label: `20'000 ₽`, value: 20000 },
                { label: `30'000 ₽`, value: 30000 },
                { label: `50'000 ₽`, value: 50000 },
                { label: `100'000 ₽`, value: 100000 },
              ]"
            />
          </div>
          <p class="max-lg:text-14">
            Вы можете выбрать любой номинал: 5'000₽, 10'000₽, 15'000₽, 20'000₽, 30'000₽,
            50'000₽, 100'000₽
          </p>
        </div>
      </div>
      <div class="max-lg:mb-10">
        <img src="/assets/img/certificate.png" />
      </div>
    </div>
    <div class="max-lg:flex max-lg:flex-col">
      <div class="mb-14 max-lg:order-2">
        <picture>
          <source
            srcset="/assets/img/certificate-group-desktop.png"
            type="image/webp"
            media="(min-width: 1024px)"
          />
          <source
            srcset="/assets/img/certificate-group-mobile.png"
            type="image/webp"
            media="(max-width: 639px)"
          />
          <img src="/assets/img/certificate-group-mobile.png" />
        </picture>
      </div>
      <div
        class="lg:space-y-6 space-y-5 text-center max-w-[654px] mx-auto lg:mb-[60px] max-lg:order-1 mb-5"
      >
        <h3 class="lg:text-26 font-semibold text-18">
          Сэкономьте время на поиск презента
        </h3>
        <p class="max-lg:text-14">
          На сумму подарочного сертификата получатель сможет выбрать брендовую обувь,
          одежду и аксессуары из каталога Sneaker Team
        </p>
        <div class="grid grid-cols-2 lg:gap-6 gap-[6px] max-w-[556px] mx-auto">
          <Buttons color="bg-orange" class="!text-12 !px-5">Купить сертификат</Buttons>
          <Buttons color="bg-light" textColor="!text-dark" class="!text-12 !px-5"
            >Каталог Sneaker Team</Buttons
          >
        </div>
      </div>
    </div>
    <StagesNumber class="lg:mb-[60px] mb-10" />
    <div class="max-w-[1000px] mx-auto mb-10">
      <h2 class="lg:text-40 font-semibold lg:mb-[60px] text-22 text-center mb-5">
        Часто задаваемые вопросы
      </h2>
      <ul class="max-w-[1000px] flex flex-col lg:gap-8 gap-4">
        <li
          v-for="(item, i) in faqs"
          :key="'faq-' + i"
          class="border-b border-[#E8E8E8] pb-4"
        >
          <button
            @click="toggle(i)"
            class="w-full flex justify-between items-center text-left"
          >
            <span class="lg:text-26 font-semibold text-18"
              >{{ i + 1 }}. {{ item.question }}</span
            >
            <span class="lg:text-26">{{ openIndex === i ? "−" : "+" }}</span>
          </button>

          <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div
              v-if="openIndex === i"
              class="overflow-hidden lg:text-16 text-14 text-dark"
            >
              <ul v-if="Array.isArray(item.answer)" class="my-4">
                <li v-for="(line, j) in item.answer" :key="j">• {{ line }}</li>
              </ul>
              <p v-else class="mt-2">{{ item.answer }}</p>
            </div>
          </transition>
        </li>
      </ul>
    </div>
    <AnswerCard />
  </div>
</template>

<script setup lang="ts">
import Buttons from "@/components/Buttons/Buttons.vue";
import Select from "@/components/Inputs/Select.vue";
import StagesNumber from "@/components/list/StagesNumber.vue";
import AnswerCard from "@/components/Cards/AnswerCard.vue";
import { ref } from "vue";

const selectedPrice = ref<any>();

import { useAccordion } from "@/composables/useAccordion";

const { openIndex, toggle, beforeEnter, enter, leave } = useAccordion();

const faqs = [
  {
    question: "В каких случаях возможен возврат?",
    answer: [
      "Вы получили бракованный товар (порезы, невидимые пятна).",
      "Товар не соответствует заказу (неверный размер, артикул или выбор расцветки товара).",
      "Отмена заказа в день оформления.",
    ],
  },
  {
    question: "Можно ли вернуть товар, если он не подошел по размеру?",
    answer: "Да, возврат возможен при сохранении товарного вида и упаковки.",
  },
  {
    question: "Какие условия возврата?",
    answer: "Возврат осуществляется в течение 14 дней с момента получения заказа.",
  },
  {
    question: "Можно ли изменить размер или цвет после оформления заказа?",
    answer: "Вы можете изменить параметры заказа, пока он не передан в доставку.",
  },
  {
    question: "Какой размер выбрать?",
    answer: "Рекомендуем использовать таблицу размеров на странице товара.",
  },
  {
    question: "Какой порядок доставки?",
    answer:
      "После оформления заказа он передаётся на упаковку и отправку в течение 1–2 дней.",
  },
  {
    question: "Почему цена зависит от размера?",
    answer: "Некоторые размеры могут отличаться по себестоимости и наличию.",
  },
  {
    question: "Обувь оригинальная?",
    answer: "Да, мы продаём только оригинальную продукцию от официальных поставщиков.",
  },
];
</script>

<style scoped lang="scss"></style>
