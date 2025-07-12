import '@/styles/main.scss';
import {createApp} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import i18n from './i18n/conf'

AOS.init()
const app = createApp(App)
app.use(Antd)
app.use(i18n)
app.mount('#app')

window.addEventListener('load', () => {
  const loader = document.getElementById('loader-wrapper')
  if (loader) loader.remove()
})