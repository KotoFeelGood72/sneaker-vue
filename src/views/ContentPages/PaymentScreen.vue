<template>
  <div class="container">
    <h1 class="lg:text-40 text-22 font-semibold text-dark lg:mb-10 mb-4">Оплата</h1>
    <div class="flex flex-col lg:gap-6 gap-4">
      <h2 class="lg:text-26 text-dark font-semibold">Способы оплаты</h2>
      <p class="lg:text-16 text-10">
        При оформлении заказа вы сможете выбрать способ доставки и указать данные
        получателя. В нашем сервисе вы можете оплатить свой заказ любым удобным для вас
        способом:
      </p>
      <ul class="flex lg:gap-6 gap-4 lg:mb-0 mb-4">
        <li
          v-for="(item, i) in payments"
          :key="'payment-item-' + i"
          class="border-r border-borderGray lg:pr-6 pr-4 flex items-center justify-center last:border-r-0 last:pr-0"
        >
          <img :src="item.img" />
        </li>
      </ul>
    </div>
    <div class="flex flex-wrap lg:gap-8 gap-0 items-center lg:mb-0 mb-5">
      <div class="lg:max-w-[60%]">
        <h3 class="lg:text-26 font-semibold text-dark lg:mb-6 text-18 mb-4">
          Подробнее о "сплите"
        </h3>
        <div class="lg:mb-[60px] lg:text-16 text-10 mb-4">
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
          <h3 class="lg:text-26 font-semibold text-dark lg:mb-6 text-18 mb-2">
            Как воспользоваться сплитом?
          </h3>
          <p class="lg:text-16 text-10">
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
      <h4
        class="lg:text-40 text-22 font-semibold text-dark lg:mb-[60px] lg:text-left text-center mb-4"
      >
        Доставка
      </h4>
      <ul class="lg:flex hidden items-center gap-[10px] lg:mb-[60px]">
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
      <img
        class="lg:hidden flex items-center justify-center mb-4"
        src="@/assets/img/delivery-img.svg"
      />
      <div class="lg:text-16 text-10">
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
