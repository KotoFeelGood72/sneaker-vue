<template>
  <div class="container">
    <div class="mb-9">
      <div class="flex items-center lg:gap-[100px] mb-6">
        <div class="max-w-[60%]">
          <h1 class="text-dark lg:text-40 font-semibold mb-20">
            Sneaker Team - гарантия оригинальности
          </h1>
          <div>
            <p class="mb-4">
              Мы гарантируем оригинальность товаров, заказанных через наш сервис, и сейчас
              расскажем, почему вы можете быть уверены в этом.
            </p>
            <ul class="flex flex-col gap-4 pl-4 mb-4">
              <li class="list-disc">
                <b>Проверенный поставщик.</b> Для начала стоит сказать, что мы делаем
                выкуп товаров исключительно через проверенный временем маркетплейс Poizon,
                который зарекомендовал себя как надежный поставщик оригинальных товаров.
              </li>
              <li class="list-disc">
                <b>Контроль на каждом этапе.</b> Мы не доверяем выкуп товаров посредникам,
                так как считаем этот процесс одним из самых ответственных. Поэтому процесс
                выкупа мы осуществляем самостоятельно, чтобы гарантировать подлинность
                каждой покупки.
              </li>
              <li class="list-disc">
                <b>Индивидуальный подход.</b> К каждому выкупленному товару мы
                прикладываем отчёт, который подтверждает, что товар был приобретён именно
                под ваш индивидуальный запрос.
              </li>
            </ul>
            <p>
              За всё время нашей работы с Poizon нам не поступал ни один поддельный товар.
            </p>
          </div>
        </div>
        <div>
          <img src="/assets/img/guarantee/1.png" />
        </div>
      </div>
      <p>
        Теперь мы хотим рассказать немного о Poizon, чтобы вы убедились, почему
        вероятность получить поддельный товар исключена. Poizon (или Dewu) — это китайский
        маркетплейс, обладающий одной из крупнейших в мире научных баз для аутентификации
        товаров. Каждый товар, продаваемый через Poizon, проходит от 9 до 20 этапов
        проверки. Один из этапов проверки, к примеру, — это анализ материала, который
        сравнивается с образцом оригинального товара, уже имеющимися в базе.
      </p>
    </div>
    <div>
      <div class="relative lg:min-h-[585px] mb-10">
        <div
          class="circle w-[585px] h-[585px] bg-lightOrange rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        ></div>
        <ul class="flex items-center justify-center relative">
          <li class="guarantee__item shadow-custom-deep p-9 bg-white -rotate-12">
            <img src="/assets/img/guarantee/list-1.png" />
          </li>
          <li class="guarantee__item shadow-custom-deep p-9 bg-white lg:mt-20 rotate-6">
            <img src="/assets/img/guarantee/list-2.png" />
          </li>
          <li
            class="guarantee__item shadow-custom-deep p-9 bg-white -rotate-3 -ml-6 -mt-6"
          >
            <img src="/assets/img/guarantee/list-3.png" />
          </li>
          <li class="guarantee__item shadow-custom-deep p-9 bg-white lg:mt-20 rotate-12">
            <img src="/assets/img/guarantee/list-4.png" />
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-6 lg:mb-[60px]">
        <p>
          Чтобы узнать больше о маркетплейсе Poizon, советуем прочитать статью
          <a href="/" class="underline">подробней о Poizon</a> (осторожно, много
          интересного текста)!
        </p>
        <p>
          Если продавец пытается отправить подделку, Poizon принимает строгие меры,
          навсегда блокируя возможность сотрудничества.
        </p>
        <p>
          После прохождения всех этапов проверки товар пломбируется фирменными бирюзовыми
          бирками Poizon, упаковывается в фирменную упаковку и сопровождается сертификатом
          подлинности. В зависимости от типа товара могут использоваться специальные
          пломбы-наклейки.
        </p>
      </div>
      <div class="flex items-center justify-center max-h-[730px]">
        <img src="/assets/img/guarantee/big.png" alt="" />
      </div>
      <div class="flex flex-col gap-6">
        <p>
          На бирках, пломбах и сертификате указан уникальный QR-код и номер заказа,
          который должен сканироваться и совпадать как с отчётом о выкупе, так и между
          собой.
        </p>
        <p>
          Все элементы, такие как отчёт о выкупе, сертификат, бирюзовые бирки или защитные
          пломбы-наклейки, являются важными и гарантируют, что ваш заказ действительно
          поступил с Poizon и прошёл все необходимые проверки.
        </p>
        <div class="flex items-center gap-2">
          <div class="line bg-orange w-[3px] h-[20px]"></div>
          <p>
            Более подробно о том, как проверить все элементы подтверждения аутентификации
            от Poizon, мы рассказываем в этой статье.
          </p>
        </div>
        <p>
          Заказывая у нас, вы можете быть уверены, что получите только оригинальные
          товары, исключая возможность подделки.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
