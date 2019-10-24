import App_Services from '../../../Services/Host/App_Services'

export default {
  state: {
    timeLine: null,
    wallet: null,
    transaction: null,
    paymentMethods: null,
    paymentOptions: null,
    termsAndConditions: null,
    propertiesFilter: null
  },
  getters: {
    get_timeline(state) {
      return state.timeLine
    },
    get_wallet(state) {
      return state.wallet
    },
    get_transaction(state) {
      return state.transaction
    },
    payment_methods(state) {
      return state.paymentMethods
    },
    payment_options(state) {
      return state.paymentOptions
    },
    terms_and_conditions(state) {
      return state.termsAndConditions
    },
    properties_filter(state) {
      return state.propertiesFilter
    }
  },
  mutations: {
    Save_Timeline(state, payload) {
      state.timeLine = payload
    },
    Save_Wallet(state, payload) {
      state.wallet = payload
    },
    Save_Transaction(state, payload) {
      state.transaction = payload
    },
    Save_Payment_Methods(state, payload) {
      state.paymentMethods = payload
    },
    Save_Payment_Options(state, payload) {
      state.paymentOptions = payload
    },
    Save_Terms(state, payload) {
      state.termsAndConditions = payload
    },
    Dlt_Payment_Options(state) {
      state.paymentOptions = null
    },
    Dlt_Payment_Options(state) {
      state.paymentOptions = null
    },
    Properties_Filter(state, payload) {
      state.propertiesFilter = payload
    }
  },
  actions: {
    GET_TIMELINE({commit}) {
      App_Services.GET_TIMELINE().then(response => {
        commit('Save_Timeline', response.data)
      })
    },
    GET_WALLET({commit}) {
      App_Services.GET_WALLET().then(response => {
        commit('Save_Wallet', response.data)
      })
    },
    GET_TRANSACTION({commit}) {
      App_Services.GET_TRANSACTION().then(response => {
        commit('Save_Transaction', response.data)
      })
    },
    SAVECALENDER({commit}, req_body) {
      App_Services.SAVECALENDER(req_body).then(response => {
        console.log(response.data)
        // commit('Save_Transaction', response.data)
      })
    },
    PAYMENTMETHODS({commit}) {
      App_Services.PAYMENTMETHODS().then(response => {
        commit('Save_Payment_Methods', response.data)
      })
    },
    PAYMENTOPTIONS({commit}, type) {
      commit('Dlt_Payment_Options')
      App_Services.PAYMENTOPTIONS(type).then(response => {
        commit('Save_Payment_Options', response.data)
      })
    },
    ADDPAYMENTMETHOD({commit, dispatch}, req_body) {
      App_Services.ADDPAYMENTMETHOD(req_body).then(response => {
        dispatch('PAYMENTMETHODS')
      })
    },
    WITHDRAW({commit, dispatch}, req_body) {
      App_Services.WITHDRAW(req_body).then(response => {
        dispatch('GET_TRANSACTION')
        dispatch('GET_WALLET')
      })
    },
    RESERVATIONACTION({commit, dispatch}, req_body) {
      App_Services.RESERVATIONACTION(req_body).then(response => {
        dispatch('GET_TIMELINE')
      })
    },
    TERMSANDCONDITIONS({commit}) {
      App_Services.TERMSANDCONDITIONS().then(response => {
        commit('Save_Terms', response.data)
      })
    },
    PROPERTIESFILTER({commit}) {
      App_Services.PROPERTIESFILTER().then(response => {
        commit('Properties_Filter', response.data)
      })
    },
    SHOWCALENDER({ commit }, property_id) {
      return new Promise((resolve, reject) => {
        App_Services.SHOWCALENDER(property_id).then(response => {
          resolve(response.data)
        }).catch((error) => {
          reject(error)
        })
     })
    },
    EDITREQUEST({ commit }, req_body) {
      return new Promise((resolve, reject) => {
        App_Services.EDITREQUEST(req_body).then(response => {
          console.log(response.data)
          // resolve(response.data)
        }).catch((error) => {
          reject(error)
        })
     })
    }
  }
}
