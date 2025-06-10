<template>
  <div class="container">
    <h1 class="lg:text-40 font-semibold lg:mb-[60px]">Часто задаваемые вопросы</h1>
    <ul class="max-w-[1000px] flex flex-col gap-8">
      <li
        v-for="(item, i) in faqs"
        :key="'faq-' + i"
        class="border-b border-[#E8E8E8] pb-4"
      >
        <button
          @click="toggle(i)"
          class="w-full flex justify-between items-center text-left"
        >
          <span class="lg:text-26 font-semibold">{{ i + 1 }}. {{ item.question }}</span>
          <span class="lg:text-26">{{ openIndex === i ? "−" : "+" }}</span>
        </button>

        <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <div v-if="openIndex === i" class="overflow-hidden text-16 text-dark">
            <ul v-if="Array.isArray(item.answer)" class="my-4">
              <li v-for="(line, j) in item.answer" :key="j">• {{ line }}</li>
            </ul>
            <p v-else class="mt-2">{{ item.answer }}</p>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
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
