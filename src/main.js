import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/scss/styles.scss'
import netlifyIdentity from 'netlify-identity-widget'

netlifyIdentity.init({
  // APIUrl: 'https://ele.codes/.netlify/identity',
  logo: false
})

netlifyIdentity.on('init', user => console.log(user))
netlifyIdentity.on('login', user => {
  store.commit('user/updateData', user)
})
netlifyIdentity.on('logout', () => {
  store.dispatch('user/logout')
})
netlifyIdentity.on('error', err => console.error('Logged out', err))
netlifyIdentity.on('open', () => console.log('Widget opened'))
netlifyIdentity.on('close', () => console.log('Widget closed'))

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
