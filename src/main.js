import { createVuestic, useColors  } from 'vuestic-ui'
import config from '../vuestic.config.js'
import 'vuestic-ui/css'
import "material-design-icons-iconfont/dist/material-design-icons.min.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitch, faInstagram } from '@fortawesome/free-brands-svg-icons'
import * as regularSvgIcons from '@fortawesome/free-regular-svg-icons'
import * as solidSvgIcons from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faInstagram, faTwitch)

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.use(createVuestic({ config }))

const { applyPreset } = useColors()

applyPreset('dark')

app.mount('#app')
