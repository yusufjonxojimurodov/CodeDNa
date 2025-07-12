<script setup>
import { useI18n } from "vue-i18n";
import { computed, ref } from "vue";
import { message } from "ant-design-vue";
import axios from 'axios'

const { t } = useI18n()
const BOT_TOKEN = "7842388515:AAGl3wMxRQ6HRKC1mAv0Ell83enhLS6NLsc"
const CHAT_ID = "7103297843"
const firstNumber = ref("+998")
const formContact = ref({
  name: "",
  number: "",
  messageClient: "",
  layout: "vertical"
})
const formDisable = computed(() => {
  return !(formContact.value.name && formContact.value.messageClient.length > 4 && formContact.value.number);
})

async function clientMessage() {
  const regexNumber = /^[0-9]{9}$/;
  const regexNumberFour = /^([A-Za-z\s\d$€₽₩₸₺₹₴₦₿UZSsom’']*){0,6}$/;
  const regexLetters = /^[A-Za-z\s]+$/;
  const textMessage = `Mijoz ismi: ${formContact.value.name} \nMijos Xabari: ${formContact.value.messageClient} \nMijoz Raqami: ${firstNumber.value + formContact.value.number}`

  if (formContact.value.name.length <= 2) {
    message.warn(t('contact.warn.fullName'))
    return
  }

  if (!regexLetters.test(formContact.value.name)) {
    message.warn(t('contact.warn.lettersWarn'))
    return
  }

  if (!regexNumber.test(formContact.value.number)) {
    message.warn(t('contact.warn.trueNumber'))
    return
  }

  if (!regexNumberFour.test(formContact.value.messageClient)) {
    message.warn(t('contact.warn.fullNumber'))
    return
  }

  const loading = message.loading(t('contact.sending'), 0)

  try {
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: textMessage,
    },
      {
        timeout: 5000
      })

    message.success(t('contact.sendedMessage'))
    formContact.value.name = ""
    formContact.value.messageClient = ""
    formContact.value.number = ""
  } catch (error) {
    message.error(t('contact.error.failerMessage') + error)

    if (error.code === "ECONNABORTED") {
      message.error(t('contact.error.ErrorServer'))
    }

    if (error.response.status === 400) {
      message.error(t('contact.error.invalidRequest'))
    }
  } finally {
    loading()
  }
}
</script>

<template>
  <section id="contact" class="mt-[150px] m-auto">
    <div class="container">
      <div data-aos="fade-up-left" class="contact-wrapper bg-black/30 backdrop-blur-sm rounded-xl">
        <p class="about-text text-[35px] text-center md:text-[45px]">{{ t('contact.readyConnect') }}</p>
        <a-form class="contact-form  px-4 sm:px-6 md:px-10 lg:px-0 mx-auto" :layout="formContact.layout"
          autocomplete="on" :model="formContact" name="contact" @submit.prevent="clientMessage">
          <a-form-item :label="t('contact.nameInput')" name="name" :rules="[{ required: true, message: 'Ismingizni toliq kiriting' }]">
            <a-input type="text" v-model:value="formContact.name"
              class="input-field medium-input w-full h-10 rounded-md px-3" />
          </a-form-item>

          <a-form-item :label="t('contact.numberInput')" name="number" :rules="[{ required: true, message: 'Raqamingizni kiriting' }]">
            <a-input-group compact class="!flex !flex-row !w-full">
              <a-input disabled v-model:value="firstNumber" class="input-compact !w-[80px] !text-center" />
              <a-input type="tel" v-model:value="formContact.number" class="input-field-compact !w-[calc(100%-80px)]" />
            </a-input-group>
          </a-form-item>

          <a-form-item :label="t('contact.messageInput')" name="messageClient"
            :rules="[{ required: true, message: 'Xabaringizni kiriting kamida 4 dona harf' }]">
            <a-input type="text" v-model:value="formContact.messageClient"
              class="input-field w-full h-10 rounded-md px-3" />
          </a-form-item>

          <a-button :disabled="formDisable" type="primary" html-type="submit"
            class="submit-button rounded-xl w-full sm:w-fit px-6 py-2 text-base sm:text-lg mx-auto block">
            {{ t('contact.sendBtn') }}
          </a-button>
        </a-form>

      </div>
    </div>
  </section>
</template>

<style scoped>
::v-deep(.ant-form-item-label > label) {
  font-family: 'Poppins', sans-serif;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
}
</style>