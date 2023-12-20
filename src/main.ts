import './assets/main.css'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import NProgress from 'nprogress'

import App from './App'
import router from './router'

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
