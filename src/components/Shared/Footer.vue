<template>
  <footer class="footer p-10 lg:p-20 w-full mt-20">
    <div class="container mx-auto flex justify-between flex-wrap flex-col md:flex-row items-start gap-10 md:gap-21">
      <div class="flex gap-6 flex-col max-w-[362px]">
        <div class="">
          <a href="#" class="text-24 text-white font-semibold"> +7 800 101 19 25</a>
          <p class="text-14">Телефон службы заботы, 9.00 - 21.00</p>
        </div>
        <div class="flex flex-col gap-2">
          <p href="#" class="text-14"> Для тех, кому удобнее общаться в мессенджерах, пишите в специальный чат</p>
          <div class="flex gap-4">
            <RouterLink
                class="border-b text-16 text-white"
                v-for="(item, i) in footerSocials"
                :to="item.link"
                :key="'footer-social-item-' + i"
            >{{ item.title }}</RouterLink>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <p href="#" class="text-14"> Почта для вопросов и предложений</p>
          <div class="flex gap-4">
            <RouterLink
                class="border-b text-16 text-white"
                v-for="(item, i) in footerEmail"
                :to="item.link"
                :key="'footer-email-' + i"
            >{{ item.title }}</RouterLink>
          </div>
        </div>

      </div>
      <div class="flex gap-4 flex-col">
        <div class="text-20 text-white font-semibold">Информация</div>
        <RouterLink
            class="text-14 text-lightFt"
            v-for="(item, i) in footerInfoLinks"
            :to="item.link"
            :key="'footer-info-link-' + i"
        >{{ item.title }}</RouterLink>
      </div>
      <div class="flex gap-4 flex-col">
        <div class="title text-20  text-white font-semibold">Компания</div>
        <RouterLink
            class="text-14 text-lightFt"
            v-for="(item, i) in footerICompanyLinks"
            :to="item.link"
            :key="'footer-info-link-' + i"
        >{{ item.title }}</RouterLink>
      </div>
      <div class="flex gap-4 flex-col items-start md:items-end lg:items-start 2xl:items-end max-w-[362px]">
        <div class="flex items-center justify-end gap-6">
          <div v-for="item in footerSocialIcons">
            <a :href="item.link">
              <img :src="item.img">
            </a>
          </div>
        </div>
        <p href="#" class="text-14 text-start md:text-end lg:text-start 2xl:text-end"> *Meta Platforms Ins. признана экстремистской организацией и запрещена в РФ</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  const footerInfoLinks = [
    { title: "Доставка и оплата", link: "/" },
    { title: "Гарантия оригинальности", link: "/" },
    { title: "Вопрос-ответ", link: "/" },
    { title: "Как выбрать размер", link: "/" },
  ];

  const footerICompanyLinks = [
    { title: "Контакты", link: "/" },
    { title: "Приложение", link: "/" },
    { title: "Отзывы", link: "/" },
    { title: "Политика конфендициальности", link: "/" },
    { title: "Пользовательское соглашение", link: "/" },
  ];

  const footerEmail = [
    { title: "logo@mail.ru", link: "/" },
  ];

  const footerSocials = [
    { title: "Telegram", link: "/" },
    { title: "WhatsApp", link: "/" },
  ];

  const footerSocialIcons = [
    { img: "/assets/icon/telegram.svg", link: "/" },
    { img: "/assets/icon/youtube.svg", link: "/" },
    { img: "/assets/icon/vkontakte.svg", link: "/" },
    { img: "/assets/icon/instagram.svg", link: "/" },
  ]


</script>

<style scoped>
.footer {
  background-color: #0D0D0D;
}

p {
  color: #B2B2B2;
}
</style>
