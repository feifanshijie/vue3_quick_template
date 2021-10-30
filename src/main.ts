import { createApp } from 'vue'
import App from './pages/app'
import router from './router'
import VueI18n from './language'
import store from './store'
import './styles/global.scss' // 全局样式
import 'vfonts/Lato.css' // 通用字体
import 'vfonts/FiraCode.css' // 等宽字体

createApp(App).use(router).use(VueI18n).use(store).mount('#app')
