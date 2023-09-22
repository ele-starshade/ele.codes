import { createVuestic  } from 'vuestic-ui'
import 'vuestic-ui/css'

import { createApp } from 'vue'
import { createPinia } from 'pinia';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(createVuestic({
  config: {
    colors: {
      presets: {
        light: {
          primary: "#33aae6",
          secondary: "#666E75",
          success: "#3D9209",
          info: "#158DE3",
          danger: "#E42222",
          warning: "#FFD43A",
          backgroundPrimary: "#FFFFFF",
          backgroundSecondary: "#FFFFFF",
          backgroundElement: "#ECF0F1",
          backgroundBorder: "#a5e0fd",
          textPrimary: "#262824",
          textInverted: "#FFFFFF",
          shadow: "rgba(0, 0, 0, 0.12)",
          focus: "#a5e0fd",
          transparent: "rgba(0, 0, 0, 0)",
          backgroundLanding: "#f4f9fc",
          backgroundLandingBorder: "rgba(155, 179, 206, 0.8)"
        }
      }
    }
  }
}))

app.mount('#app')
