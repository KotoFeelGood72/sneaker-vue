<template>
  <div class="container flex lg:gap-24 justify-between flex-wrap gap-5">
    <div class="max-w-[754px] w-full lg:space-y-6 space-y-[14px]">
      <div class="lg:space-y-6 space-y-[14px]">
        <Inputs icon="email" v-model="userInfo.email" placeholder="d.solovyev@mail.ru" />
        <Inputs icon="phone" v-model="userInfo.phone" placeholder="+7 (917) 459-5673" />
      </div>
      <div class="divider"></div>
      <div class="lg:space-y-6 space-y-5">
        <h3 class="lg:text-26 text-18 font-semibold">Телеграм</h3>
        <Inputs icon="tg" v-model="userInfo.tg" placeholder="d_solv2105" />
      </div>
      <div class="divider"></div>
      <div class="lg:space-y-6 space-y-[14px]">
        <h3 class="lg:text-26 text-18 font-semibold">Паспортные данные</h3>
        <div class="grid lg:grid-cols-2 lg:gap-6 gap-2">
          <Inputs icon="user" v-model="userInfo.phone" placeholder="Соловьёв" />
          <Inputs icon="user" v-model="userInfo.phone" placeholder="Дмитрий" />
        </div>
        <div class="grid lg:grid-cols-2 lg:gap-6 gap-2">
          <Inputs icon="user" v-model="userInfo.phone" placeholder="Станиславович" />
          <Checkbox
            v-model="pasportInfo.noLastName"
            id="noLastName"
            title="Нет отчества"
            value="Нет отчества"
          />
        </div>
        <Inputs icon="pass" v-model="userInfo.phone" placeholder="20.02.1999 г" />
        <div class="grid lg:grid-cols-2 lg:gap-6 gap-2">
          <Inputs icon="pass" v-model="userInfo.phone" placeholder="45 76" />
          <Inputs icon="pass" v-model="userInfo.phone" placeholder="123456" />
        </div>
        <Inputs icon="pass" v-model="userInfo.phone" placeholder="20.02.2010 г" />
        <Textarea
          icon="pass"
          v-model="userInfo.phone"
          placeholder="УФМС России по Москве"
        />
        <Inputs icon="pass" v-model="userInfo.phone" placeholder="7701234567" />
      </div>
      <div class="relative pl-9 cursor-pointer select-none" @click="toggleWhatsPassports">
        <img
          src="/assets/icon/ui/info.svg"
          class="absolute top-1 left-0 max-lg:w-4 max-lg:h-4"
        />
        <div class="flex items-center justify-between">
          <p class="lg:text-22 text-14">Зачем мои паспортные данные?</p>
          <Icons
            :icon="
              whatsPass ? 'bitcoin-icons:minus-outline' : 'bitcoin-icons:plus-outline'
            "
          />
        </div>
        <div class="lg:py-2 max-lg:text-10 py-1" v-if="whatsPass">
          Все посылки в рамках международных отправлений проходят процедуру таможенного
          оформления. Для товаров личного пользования используется реестр экспресс-грузов,
          который, согласно приказу ФТС(федеральная таможенная служба) №1060 от 05.07.18,
          должен содержать в себе сведения о документе, удостоверяющем личность
          физического лица – паспортные данные и ИНН. Poizon действует в рамках
          таможенного законодательства и организует процесс сбора паспортных данных в
          личном кабинете на сайте. Мы не храним паспортные данные, вся информация
          передается по безопасным каналам связи.
        </div>
      </div>
      <Buttons>Сохранить изменения</Buttons>
    </div>
    <ProfileListMenu />
  </div>
</template>

<script setup lang="ts">
import Inputs from "@/components/Inputs/Inputs.vue";
import Checkbox from "@/components/Inputs/Checkbox.vue";
import Textarea from "@/components/Inputs/Textarea.vue";
import Buttons from "@/components/Buttons/Buttons.vue";
import ProfileListMenu from "@/components/list/ProfileListMenu.vue";
import { ref } from "vue";

const whatsPass = ref<boolean>(true);

const userInfo = ref<any>({
  email: "",
  phone: "",
  tg: "",
});
const pasportInfo = ref<any>({
  name: "",
  lastname: "",
  family: "",
  birthday: "",
  number: "",
  code: "",
  datePass: "",
  nameOrg: "",
  inn: "",
  noLastName: false,
});

const toggleWhatsPassports = () => {
  whatsPass.value = !whatsPass.value;
};
</script>

<style scoped lang="scss"></style>
