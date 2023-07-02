import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



if(!navigator.geolocation){
  alert('Tu navagador no soporta el geolocation')
  throw new Error('Tu navagador no soporta el geolocation')
}
const app = createApp(App)

app.use(router)

app.mount('#app')
