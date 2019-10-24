import Api from '../Api'
let body = {
  host: {
    authentication_token: null
  }
}

export default {
  GET_NOTIFICATIONS() {
    return Api().get('/host/notifications')
  },
  GET_TIMELINE() {
    return Api().get('/property/timeline/filter/all')
  },
  GET_WALLET() {
    return Api().get('/host/wallet_token')
  },
  GET_TRANSACTION() {
    return Api().get('/host/transaction')
  },
  SAVECALENDER(req_body) {
    body.host.authentication_token = JSON.parse(localStorage.getItem('auth_data')) ? (JSON.parse(localStorage.getItem('auth_data'))).host.authentication_token : null
    body.property_availability = req_body.property_availability
    return Api().post('/property/calendar', body)
  },
  PAYMENTMETHODS() {
    return Api().get('/host/payment-method/owned')
  },
  PAYMENTOPTIONS(type) {
    return Api().get(`/host/bank-type/${type}`)
  },
  ADDPAYMENTMETHOD(req_body) {
    body.host.authentication_token = JSON.parse(localStorage.getItem('auth_data')) ? (JSON.parse(localStorage.getItem('auth_data'))).host.authentication_token : null
    body.payment_method = req_body
    return Api().post('/host/payment-method', body)
  },
  WITHDRAW(req_body) {
    body.host.authentication_token = JSON.parse(localStorage.getItem('auth_data')) ? (JSON.parse(localStorage.getItem('auth_data'))).host.authentication_token : null
    body.transaction = req_body
    return Api().post('/host/transaction/withdraw', body)
  },
  RESERVATIONACTION(req_body) {
    body.host.authentication_token = JSON.parse(localStorage.getItem('auth_data')) ? (JSON.parse(localStorage.getItem('auth_data'))).host.authentication_token : null
    body.reservation = {
      id: req_body.id
    }
    return Api().put(`/property/timeline/${req_body.type}`, body)
  },
  TERMSANDCONDITIONS() {
    return Api().get('/static-info')
  },
  PROPERTIESFILTER() {
    return Api().get('/properties_filter')
  },
  SHOWCALENDER(property_id) {
    return Api().get(`https://demo.msayef.net/api/v1/property/calendar/show?property_id=${property_id}`)
  },
  EDITREQUEST(req_body) {
    let req = {
      property_edit: {
        property_id: req_body.property_id,
        title_key: req_body.title_key,
        notes: req_body.notes
    }
  }
    return Api().post('/property/editrequest', req)
  }
}
