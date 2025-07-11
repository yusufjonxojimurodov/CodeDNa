import '@/styles/main.scss';
import {createApp} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
const app = createApp(App)
app.use(Antd)
app.mount('#app')

window.addEventListener('load', () => {
  const loader = document.getElementById('loader-wrapper')
  if (loader) loader.remove()
})