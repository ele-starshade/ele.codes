<template>
  <div class="home">
    <h1>Ele Codes</h1>
    <p>Coming soon...</p>
    <div style="margin-top: 20px;" v-if="isLoggedIn">
      <p>Hello {{ user.user_metadata?.full_name }}</p>

      <button type="button" class="btn btn-error" @click="logout">Logout</button>
      <button type="button" class="btn btn-info" @click="getStarling">Get Starling Transactions</button>
    </div>
    <button type="button" class="btn btn-info" v-else @click="login">Login (Only certain users right now)</button>
  </div>
</template>

<script>
import netlifyIdentity from 'netlify-identity-widget'
import axios from 'axios'

netlifyIdentity.init({
  // APIUrl: 'https://ele.codes/.netlify/identity',
  logo: false
})

export default {
  name: 'Home',
  data () {
    return {
      starlingTransactions: null
    }
  },
  computed: {
    user () {
      return JSON.parse(window.localStorage.getItem('gotrue.user'))
    },
    isLoggedIn () {
      return this.user
    }
  },
  methods: {
    login () {
      netlifyIdentity.open('login')
    },
    logout () {
      window.localStorage.removeItem('gotrue.user')
      netlifyIdentity.logout()
    },
    getStarling () {
      try {
        const { data } = axios.get('/.netlify/functions/starling-get-transactions', {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${this.user.token.access_token}`
          }
        })

        this.starlingTransactions = data
      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted () {
    netlifyIdentity.on('init', user => console.log(user))
    netlifyIdentity.on('login', user => console.log(user))
    netlifyIdentity.on('logout', () => console.log('Logged out'))
    netlifyIdentity.on('error', err => console.error('Logged out', err))
    netlifyIdentity.on('open', () => console.log('Widget opened'))
    netlifyIdentity.on('close', () => console.log('Widget closed'))
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
</style>
