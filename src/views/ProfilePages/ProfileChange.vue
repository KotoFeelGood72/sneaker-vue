<template>
  <div class="container">
    <div>
      <div>
        <Inputs icon="email" v-model="userInfo.email" placeholder="d.solovyev@mail.ru" />
        <Inputs icon="phone" v-model="userInfo.phone" placeholder="+7 (917) 459-5673" />
      </div>
      <div class="divider"></div>
      <div>
        <h3>Телеграм</h3>
        <Inputs icon="tg" v-model="userInfo.tg" placeholder="d_solv2105" />
      </div>
      <div class="divider"></div>
      <div>
        <h3>Паспортные данные</h3>
        <div>
          <Inputs icon="user" v-model="userInfo.phone" placeholder="Соловьёв" />
          <Inputs icon="user" v-model="userInfo.phone" placeholder="Дмитрий" />
        </div>
        <div>
          <Inputs icon="user" v-model="userInfo.phone" placeholder="Станиславович" />
          <Checkbox
            v-model="pasportInfo.noLastName"
            id="noLastName"
            title="Нет отчества"
            value="Нет отчества"
          />
        </div>
        <Inputs icon="pass" v-model="userInfo.phone" placeholder="20.02.1999 г" />
        <div>
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
      <div>
        <div>
          <p>Зачем мои паспортные данные?</p>
          <Icons />
        </div>
        <div>
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
    <div>
      <ProfileListMenu />
    </div>
  </div>
</template>

<script setup lang="ts">
import Inputs from "@/components/Inputs/Inputs.vue";
import Checkbox from "@/components/Inputs/Checkbox.vue";
import Textarea from "@/components/Inputs/Textarea.vue";
import Buttons from "@/components/Buttons/Buttons.vue";
import ProfileListMenu from "@/components/list/ProfileListMenu.vue";
import { ref } from "vue";

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
</script>

<style scoped lang="scss"></style>
