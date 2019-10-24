import Api from '../Api'

export default {
  SETLANGUAGE(lang) {
    let body = {
      host: {
        authentication_token: JSON.parse(localStorage.getItem('auth_data')) ? (JSON.parse(localStorage.getItem('auth_data'))).host.authentication_token : null
      }
    }
    return Api().put(`/host/${lang}`, body)
  },
  SIGNUP(payload) {
    return Api().post('/host/sign_up', payload)
  },
  SENDVERIFICATION(payload) {
    let body = {
      host: {
        authentication_token: JSON.parse(localStorage.getItem('auth_data')) ? (JSON.parse(localStorage.getItem('auth_data'))).host.authentication_token : null
      },
      code: payload
    }
    return Api().post('/host/verify', body)
  },
  RESENDVERIFICATION() {
    let body = {
      host: {
        authentication_token: JSON.parse(localStorage.getItem('auth_data')) ? (JSON.parse(localStorage.getItem('auth_data'))).host.authentication_token : null
      }
    }
    return Api().post('/host/sign_up/resend', body)
  },
  LOGIN(payload) {
    return Api().post('/host/sign_in', payload)
  },
  LOGOUT(payload) {
    return Api().post('/host/sign_out', payload)
  },
  FORGETPASSWORD(payload) {
    return Api().post('/host/password/forget', payload)
  },
  RESETPASSWORD(payload) {
    return Api().post('/host/password/reset', payload)
  },
  UPDATEPASSWORD(payload) {
    return Api().put('/host/password/update', payload)
  },
  EDITPROFILE(payload) {
    let body = {
      host: {
        authentication_token: JSON.parse(localStorage.getItem('auth_data')) ? (JSON.parse(localStorage.getItem('auth_data'))).host.authentication_token : null,
        name: payload.name,
        phone_number: payload.phone_number
      }
    }
    return Api().put('/host/edit', body)
  }
}
