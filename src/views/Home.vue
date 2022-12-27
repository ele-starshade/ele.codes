<template>
  <div class="home">
    <h1>Ele Codes</h1>
    <p>Coming soon...</p>
    <div style="margin-top: 20px;" v-if="isLoggedIn">
      <p>Hello {{ userName }}</p>

      <button type="button" class="btn btn-error" @click="logout">Logout</button>
      <button type="button" class="btn btn-info" @click="getStarling">Get Starling Transactions</button>
    </div>
    <button type="button" class="btn btn-info" v-else @click="login">Login (Only certain users right now)</button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      starlingTransactions: null
    }
  },
  computed: {
    ...mapState({
      userData: state => state.user.data
    }),
    ...mapGetters({
      isLoggedIn: 'user/isLoggedIn',
      userName: 'user/name'
    })
  },
  methods: {
    ...mapActions({
      login: 'user/login',
      logout: 'user/logout'
    }),
    getStarling () {
      try {
        const { data } = axios.get('/.netlify/functions/starling-get-transactions', {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${this.userData.token.access_token}`
          }
        })

        this.starlingTransactions = data
      } catch (error) {
        console.error(error)
      }
    }
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
