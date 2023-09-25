import { createVuestic, useColors  } from 'vuestic-ui'
import config from '../vuestic.config.js'
import 'vuestic-ui/css'
import "material-design-icons-iconfont/dist/material-design-icons.min.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(createVuestic({ config }))

const { applyPreset } = useColors()

applyPreset('dark')

app.mount('#app')
