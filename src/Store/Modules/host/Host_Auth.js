import Vue from 'vue'
import i18n from '../../../i18n'
import router from '../../../router'
import Authentication from '../../../Services/Host/Authentication'

export default {
  state: {
    profile: JSON.parse(localStorage.getItem('auth_data')) ? (JSON.parse(localStorage.getItem('auth_data'))).host : false,
    token: JSON.parse(localStorage.getItem('auth_data')) ? (JSON.parse(localStorage.getItem('auth_data'))).host.authentication_token : false,
    verify: JSON.parse(localStorage.getItem('auth_data')) ? (JSON.parse(localStorage.getItem('auth_data'))).host.verify : false,
    properties_count: JSON.parse(localStorage.getItem('auth_data')) ? (JSON.parse(localStorage.getItem('auth_data'))).properties_count : false
  },
  getters: {
    Get_Token(state) {
      return state.token
    },
    Get_Verification(state) {
      return state.verify
    },
    Get_properties_count(state) {
      return state.properties_count
    },
    Get_Profile(state) {
      return state.profile
    }
  },
  mutations: {
    Save_Auth_info(state, payload) {
      state.token = payload.host.authentication_token
      state.verify = payload.host.verify !== null ? payload.host.verify : false
      state.properties_count = payload.properties_count
      state.profile = payload.host
    },
    // this will be 
    Save_Profile(state, payload) {
      state.profile = payload.host
    }

  },
  actions: {
    SETLANGUAGE({commit}, lang) {
      Authentication.SETLANGUAGE(lang).then(response => {
        let auth_data = JSON.parse(localStorage.getItem('auth_data'))
        auth_data.host.lang = lang
        localStorage.setItem('auth_data', JSON.stringify(auth_data))
        localStorage.setItem('lang', lang)
        i18n.locale = lang
        location.reload()
      }).catch((error) => {
        Vue.notify({
          group: 'notify',
          type: 'warn',
          title: 'Warning',
          text: 'multi step form Error MSG'
        })
      })
    },
    SIGNUP({ commit }, payload) {
      let req = {
        host: payload
      }
      Authentication.SIGNUP(req).then(response => {
        localStorage.setItem('auth_data', JSON.stringify(response.data))
        commit('Save_Auth_info', response.data)
        router.push({name: 'verification'})
        Vue.notify({
          group: 'notify',
          title: 'Success',
          type: 'success',
          text: 'AUTHENTICATION Success MSG'
        })
      }).catch((error) => {
        Vue.notify({
          group: 'notify',
          type: 'warn',
          title: 'Warning',
          text: 'AUTHENTICATION Error MSG'
        })
      })
    },
    SENDVERIFICATION({commit}, payload) {
      Authentication.SENDVERIFICATION(payload).then(response => {
        localStorage.setItem('auth_data', JSON.stringify(response.data))
        commit('Save_Auth_info', response.data)
        router.push('/host')
        Vue.notify({
          group: 'notify',
          title: 'Success',
          type: 'success',
          text: 'AUTHENTICATION Success MSG'
        })
      }).catch((error) => {
        Vue.notify({
          group: 'notify',
          type: 'warn',
          title: 'Warning',
          text: 'AUTHENTICATION Error MSG'
        })
      })
    },
    RESENDVERIFICATION({commit}) {
      Authentication.RESENDVERIFICATION().then(response => {
        // console.log(response)
      })
    },
    LOGIN({ commit }, payload) {
      let req = {
        host: payload
      }
      Authentication.LOGIN(req).then(response => {
        localStorage.setItem('auth_data', JSON.stringify(response.data))
        commit('Save_Auth_info', response.data)
        router.push('/host')
        Vue.notify({
          group: 'notify',
          title: 'Success',
          type: 'success',
          text: 'AUTHENTICATION Success MSG'
        })
      }).catch((error) => {
        Vue.notify({
          group: 'notify',
          type: 'warn',
          title: 'Warning',
          text: 'AUTHENTICATION Error MSG'
        })
      })
    },
    LOGOUT({commit}) {
      let req = {
        host: {
          authentication_token: this.state.Host_Auth.token
        }
      }
      Authentication.LOGOUT(req).then(() => {
        localStorage.clear()
        Vue.notify({
          group: 'notify',
          title: 'Success',
          type: 'success',
          text: 'AUTHENTICATION Success MSG'
        })
        location.reload()
      }).catch((error) => {
        Vue.notify({
          group: 'notify',
          type: 'warn',
          title: 'Warning',
          text: 'AUTHENTICATION Error MSG'
        })
      })
    },
    FORGETPASSWORD({commit}, req_body) {
      let req = {
        host: req_body
      }
      Authentication.FORGETPASSWORD(req).then(() => {
        Vue.notify({
          group: 'notify',
          title: 'Success',
          type: 'success',
          text: 'AUTHENTICATION Success MSG'
        })
        router.push(`/host/resetpassword/${req_body.phone_number}`)
      }).catch((error) => {
        Vue.notify({
          group: 'notify',
          type: 'warn',
          title: 'Warning',
          text: 'AUTHENTICATION Error MSG'
        })
      })
    },
    RESETPASSWORD({commit}, req_body) {
      let req = {
        host: {
          phone_number: req_body.phone_number
        },
        code: req_body.code
      }
      Authentication.RESETPASSWORD(req).then((response) => {
        Vue.notify({
          group: 'notify',
          title: 'Success',
          type: 'success',
          text: 'AUTHENTICATION Success MSG'
        })
        // console.log(response)
        router.push(`/host/updatepassword/${response.data.token_reset_password}`)
      }).catch((error) => {
        Vue.notify({
          group: 'notify',
          type: 'warn',
          title: 'Warning',
          text: 'AUTHENTICATION Error MSG'
        })
      })
    },
    UPDATEPASSWORD({commit}, req_body) {
      Authentication.UPDATEPASSWORD(req_body).then((response) => {
        Vue.notify({
          group: 'notify',
          title: 'Success',
          type: 'success',
          text: 'AUTHENTICATION Success MSG'
        })
        // console.log(response.data)
        router.push('/host')
      }).catch((error) => {
        Vue.notify({
          group: 'notify',
          type: 'warn',
          title: 'Warning',
          text: 'AUTHENTICATION Error MSG'
        })
      })
    },
    EDITPROFILE({commit}, req_body) {
      Authentication.EDITPROFILE(req_body).then((response) => {
        Vue.notify({
          group: 'notify',
          title: 'Success',
          type: 'success',
          text: 'AUTHENTICATION Success MSG'
        })
        commit('Save_Profile', response.data)
        // need to add properties count before save
        localStorage.setItem('auth_data', JSON.stringify(response.data))
      }).catch((error) => {
        Vue.notify({
          group: 'notify',
          type: 'warn',
          title: 'Warning',
          text: 'AUTHENTICATION Error MSG'
        })
      })
    }
  }
}
