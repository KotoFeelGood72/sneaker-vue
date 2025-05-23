<template>
  <div class="container">
    <h1 class="lg:text-40 font-semibold text-dark mb-10">Оплата</h1>
    <div class="flex flex-col gap-6">
      <h2 class="lg:text-26 text-dark font-semibold">Способы оплаты</h2>
      <p>
        При оформлении заказа вы сможете выбрать способ доставки и указать данные
        получателя. В нашем сервисе вы можете оплатить свой заказ любым удобным для вас
        способом:
      </p>
      <ul class="flex flex-wrap gap-6">
        <li
          v-for="(item, i) in payments"
          :key="'payment-item-' + i"
          class="border-r border-borderGray pr-6 flex items-center justify-center last:border-r-0 last:pr-0"
        >
          <img :src="item.img" />
        </li>
      </ul>
    </div>
    <div class="flex flex-wrap gap-8 items-center">
      <div class="max-w-[60%]">
        <h3 class="lg:text-26 font-semibold text-dark mb-6">Подробнее о "сплите"</h3>
        <div class="lg:mb-[60px]">
          Сплит - это возможность оплатить вашу покупку двумя платежами. Первая половина -
          сразу / вторая половина - после фото отчёта, при этом Вы ничего не
          переплачиваете - смысл сплита не в том, чтобы взять с Вас больше денег, он нужен
          для того, чтобы новые пользователи могли дополнительно убедиться в честности и
          скорости работы нашего сервиса. Получив фото отчёт своего заказа со склада в
          Китае, Вы можете спокойно продолжить покупку после оплаты второй части заказа.
          <br />
          <br />
          Важно! – функция сплит доступна для заказа товаров стоимостью до 20.000 руб
        </div>
        <div>
          <h3 class="lg:text-26 font-semibold text-dark mb-6">
            Как воспользоваться сплитом?
          </h3>
          <p>
            Активировать оплату "сплитом" вы сможете на странице оформления заказа при
            выборе способа оплаты. У вас будет 2 варианта на выбор - оплатить полностью и
            сплит-платёж.
          </p>
        </div>
      </div>
      <div>
        <img src="/assets/img/payments/payment-example.png" />
      </div>
    </div>
    <div>
      <h4 class="lg:text-40 font-semibold text-dark lg:mb-[60px]">Доставка</h4>
      <ul class="flex items-center gap-[10px] lg:mb-[60px]">
        <li
          v-for="(item, i) in deliveryMethods"
          :key="'delivery-method-' + i"
          class="flex items-center gap-[10px]"
        >
          <p class="lg:text-20 font-semibold">
            {{ item }}
          </p>
          <div
            class="icon-long flex items-center justify-center -mb-1"
            v-if="i !== deliveryMethods.length - 1"
          >
            <img src="@/assets/icons/long-arrow.svg" />
          </div>
        </li>
      </ul>
      <div>
        Весь путь, который проходит Ваш заказ, занимает 3-4 недели - от продавца в Китае к
        вашему пункту СДЭКа. После того, как ваш заказ будет успешно выкуплен, он
        тщательно проверяется площадкой Poizon, после чего едет на наш склад в Китае.
        Занимает это от 1 до 6 дней. На этом этапе вы получаете фото отчёт, и посылка
        выезжает в Россию.
        <br />
        <br />
        Важно: при получении заказа в СДЭКе вам не нужно будет оплачивать доставку, она
        входит в сумму заказа полностью - из Китая в указанный Вами СДЭК.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const payments = [
  { img: "/assets/img/payments/1.png" },
  { img: "/assets/img/payments/2.png" },
  { img: "/assets/img/payments/3.png" },
  { img: "/assets/img/payments/4.png" },
];

const deliveryMethods = [
  "Чек оплаты",
  "Склад",
  "Фото отчет",
  "Товар в пути",
  "Посылка в СДЭКе",
];
</script>

<style scoped lang="scss"></style>
