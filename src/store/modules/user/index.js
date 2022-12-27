import netlifyIdentity from 'netlify-identity-widget'

export default {
  namespaced: true,
  state: () => ({
    data: null
  }),
  getters: {
    isLoggedIn (state) {
      return Boolean(state.data)
    },
    name (state) {
      return state.data?.user_metadata?.full_name || null
    }
  },
  actions: {
    login ({ commit }) {
      console.log(process.env)
      if (process.env.NODE_ENV === 'development') {
        commit('updateData', {
          api: {
            apiURL: '/.netlify/identity',
            _sameOrigin: true,
            defaultHeaders: {
              'X-Use-Cookie': '1'
            }
          },
          url: '/.netlify/identity',
          token: {
            access_token: 'fake.token',
            expires_in: '3600',
            refresh_token: 'fake_token',
            token_type: 'bearer',
            expires_at: 1672101550000
          },
          id: 'fef4775b-1df9-480c-8db9-5357abb36e42',
          aud: '',
          role: '',
          email: 'ele.starshade@gmail.com',
          confirmed_at: '2022-12-26T03:59:28Z',
          invited_at: '2022-12-26T03:42:50Z',
          recovery_sent_at: '2022-12-26T17:50:17Z',
          app_metadata: {
            provider: 'email',
            roles: [
              'owner'
            ]
          },
          user_metadata: {
            full_name: 'Bethany'
          },
          created_at: '2022-12-26T03:42:50Z',
          updated_at: '2022-12-26T03:42:50Z'
        })
      } else {
        netlifyIdentity.open('login')
      }
    },
    logout ({ commit }) {
      window.localStorage.removeItem('gotrue.user')
      netlifyIdentity.logout()
      commit('updateData')
    }
  },
  mutations: {
    updateData (state, data = null) {
      state.data = data
    }
  },
  modules: {

  }
}
