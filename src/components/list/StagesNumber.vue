<template>
  <div class="space-y-10 text-center">
    <h3 class="lg:text-26 font-semibold text-18">Как работает электронный сертификат?</h3>
    <div class="self-stretch inline-flex lg:gap-[30px] gap-2 items-start lg:-ml-[170px]">
      <div class="flex flex-col lg:gap-[243px] gap-[195px] pt-[5px] max-lg:w-[50%]">
        <div
          v-for="(step, index) in steps.filter((_, i) => i % 2 === 0)"
          :key="`left-${index}`"
          class="max-w-[462px] inline-flex flex-col justify-start items-center overflow-hidden"
        >
          <div class="self-stretch text-right font-semibold max-lg:text-10">
            {{ step.title }}
          </div>
          <div class="self-stretch text-right whitespace-pre-line max-lg:text-10">
            {{ step.text }}
          </div>
        </div>
      </div>
      <div class="self-stretch flex flex-col justify-start items-center relative">
        <div
          v-for="(step, index) in steps"
          :key="`center-${index}`"
          class="flex flex-col justify-center items-center"
        >
          <div
            class="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] bg-[#272727] rounded-full flex items-center justify-center"
          >
            <span
              class="text-white text-[26px] font-medium leading-[10px] tracking-wide max-lg:text-16"
            >
              {{ index + 1 }}
            </span>
          </div>
          <div
            v-if="index !== steps.length - 1"
            class="w-0.5 lg:h-[123px] h-[97px] bg-[#272727]"
          ></div>
        </div>
      </div>
      <div
        class="flex flex-col lg:gap-[250px] gap-[150px] lg:pt-[183px] pt-[135px] max-lg:w-[50%]"
      >
        <div
          v-for="(step, index) in steps.filter((_, i) => i % 2 === 1)"
          :key="`right-${index}`"
          class="lg:w-[286px] inline-flex flex-col justify-start items-center gap-1 overflow-hidden"
        >
          <div class="self-stretch text-left font-semibold max-lg:text-10">
            {{ step.title }}
          </div>
          <div class="self-stretch text-left whitespace-pre-line max-lg:text-10">
            {{ step.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const steps = [
  {
    title: "Выбираете номинал",
    text:
      "Доступны номиналы 5'000₽,\n10'000₽, 15'000₽, 20'000₽,\n30'000₽, 50'000₽, 100'000₽",
  },
  {
    title: "Покупаете сертификат",
    text:
      "Оплата производится банковской картой.У нас полностью белый\nофициальный онлайн-эквайринг",
  },
  {
    title: "Получаете сертификат",
    text:
      "В течение 10 минут после оплаты\nмы пришлем вам электронный\nсертификат в формате PDF на\nуказанный вами Telegram-аккаунт",
  },
  {
    title: "Дарите сертификат как подарок",
    text:
      "Просто пересылаете PDF своему\nдругу, подруге, родственнику и\nколлеге вместе со своим\nпоздравлением",
  },
  {
    title: "Получатель может использовать сертификат",
    text:
      "Получатель увидит инструкции по активации внутри PDF \nдокумента. Также у него будет ссылка на каталог товаров Sneaker Team. Для активации ему нужно будет отправить\n этот сертификат в наш официальный чат заботы о\nклиентах. Мы начислим сумму номинала на баланс\n средств в личном кабинете Sneaker Team.",
  },
];
</script>
