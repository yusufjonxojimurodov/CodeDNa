<script setup>
import { computed, ref } from "vue";
import { message } from "ant-design-vue";
import axios from 'axios'

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
  const regexLetters = /^[A-Za-z\s]+$/;
  const regexNumberFour = /^(?:\D*\d\D*){1,4}$/;
  const textMessage = `Mijoz ismi: ${formContact.value.name} \nMijos Xabari: ${formContact.value.messageClient} \nMijoz Raqami: ${firstNumber.value + formContact.value.number}`

  if (formContact.value.name.length <= 2) {
    message.warn("Ismingizni Toliq kiritishingiz soraymiz")
    return
  }

  if (!regexLetters.test(formContact.value.name)) {
    message.warn("Ismingizni harflarda kiriting")
    return
  }

  if (!regexNumber.test(formContact.value.number)) {
    message.warn("Raqamingizni togri kiriting")
    return
  }

  if (!regexNumberFour.test(formContact.value.messageClient)) {
    message.warn("Xabaringizda son miqdori yetarli !")
    return
  }

  const loading = message.loading("Yuborilmoqda...", 0)

  try {
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: textMessage,
    },
      {
        timeout: 5000
      })

    message.success("Xabar Yuborildi, Javobimni kuting")
    formContact.value.name = ""
    formContact.value.messageClient = ""
    formContact.value.number = ""
  } catch (error) {
    message.error(" Xabar Yuborilmadi " + error)

    if (error.code === "ECONNABORTED") {
      message.error("Server bilan bog'lana olmadik")
    }

    if (error.response.status === 400) {
      message.error("Serverga notogri turda ma'lumot jonatildi")
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
        <p class="about-text text-[35px] text-center md:text-[45px]">BOG'LANISHGA TAYYORMAN !</p>
        <a-form class="contact-form  px-4 sm:px-6 md:px-10 lg:px-0 mx-auto" :layout="formContact.layout"
          autocomplete="on" :model="formContact" name="contact" @submit.prevent="clientMessage">
          <a-form-item label="Ismingiz" name="name" :rules="[{ required: true, message: 'Ismingizni toliq kiriting' }]">
            <a-input type="text" v-model:value="formContact.name"
              class="input-field medium-input w-full h-10 rounded-md px-3" />
          </a-form-item>

          <a-form-item label="Raqamingiz" name="number" :rules="[{ required: true, message: 'Raqamingizni kiriting' }]">
            <a-input-group compact class="!flex !flex-row !w-full">
              <a-input disabled v-model:value="firstNumber" class="input-compact !w-[80px] !text-center" />
              <a-input type="tel" v-model:value="formContact.number" class="input-field-compact !w-[calc(100%-80px)]" />
            </a-input-group>
          </a-form-item>

          <a-form-item label="Xabaringiz" name="messageClient"
            :rules="[{ required: true, message: 'Xabaringizni kiriting kamida 4 dona harf' }]">
            <a-input type="text" v-model:value="formContact.messageClient"
              class="input-field w-full h-10 rounded-md px-3" />
          </a-form-item>

          <a-button :disabled="formDisable" type="primary" html-type="submit"
            class="submit-button rounded-xl w-full sm:w-fit px-6 py-2 text-base sm:text-lg mx-auto block">
            Yuborish
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