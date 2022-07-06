import { createApp } from 'vue'
import App from './App.vue'
// 去除浏览器默认样式
import "./assets/css/reset.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from "./router/index"
import "../api/data"
import {openLoading,closeLoading} from "./components/Loading"
import pinia from "./store/store"


// import store from "./store/index"

// import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 引入element ui
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
const app=createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
// 使用element ui

// app.use(ElementPlus,{
//   locale:zhCn
// })
app.config.globalProperties.$openloding=openLoading
app.config.globalProperties.$closeloding=closeLoading

app.use(pinia)
app.use(router)
app.mount('#app')
