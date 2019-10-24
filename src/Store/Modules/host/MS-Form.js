import Vue from 'vue'
import router from '../../../router'
import MS_Forms_Services from '../../../Services/Host/MS-Form'

export default {
  state: {
    property_id: localStorage.getItem('property_id'),
    cities: null,
    properties: null,
    policies: null,
    current_step: localStorage.getItem('current_step')
  },
  getters: {
    Get_current_step(state) {
      return state.current_step
    },
    GetCities(state) {
      return state.cities
    },
    GetProperties(state) {
      return state.properties
    },
    GetPolicies(state) {
      return state.policies
    }
  },
  mutations: {
    Save_Cities(state, payload) {
      state.cities = payload
    },
    Save_Properties_id(state, payload) {
      state.property_id = payload
      state.current_step = 1
      localStorage.setItem('current_step', 1)
    },
    Save_Properties(state, payload) {
      state.properties = payload
    },
    Save_Policies(state, payload) {
      state.policies = payload
    },
    Update_Steps(state, payload) {
      state.current_step = payload
      localStorage.setItem('current_step', payload)
    }
  },
  actions: {
    GET_CITIES({ commit }) {
      MS_Forms_Services.GET_CITIES().then(response => {
        commit('Save_Cities', response.data)
      }).catch((error) => {
        Vue.notify({
          group: 'notify',
          type: 'warn',
          title: 'Warning',
          text: 'multi step form Error MSG'
        })
      })
    },
    GET_POLICIES({ commit }) {
      MS_Forms_Services.GET_POLICIES().then(response => {
        commit('Save_Policies', response.data)
      }).catch((error) => {
        Vue.notify({
          group: 'notify',
          type: 'warn',
          title: 'Warning',
          text: 'multi step form Error MSG'
        })
      })
    },
    GET_PROPERTY({ commit }) {
      MS_Forms_Services.GET_PROPERTY().then(response => {
        commit('Save_Properties', response.data)
      }).catch((error) => {
        Vue.notify({
          group: 'notify',
          type: 'warn',
          title: 'Warning',
          text: 'multi step form Error MSG'
        })
      })
    },
    CREATE_PROPERTY({ commit }, payload) {
      MS_Forms_Services.CREATE_PROPERTY(payload).then(response => {
        localStorage.setItem('property_id', response.data.id)
        commit('Save_Properties_id', response.data.id)
        router.push('/host/multi-step-form/property-details-1')
        Vue.notify({
          group: 'notify',
          title: 'Success',
          type: 'success',
          text: 'multi step form Success MSG'
        })
      }).catch((error) => {
        Vue.notify({
          group: 'notify',
          type: 'warn',
          title: 'Warning',
          text: 'multi step form Error MSG'
        })
      })
    },
    UPDATE_PROPERTIES({ commit }, payload) {
      MS_Forms_Services.UPDATE_PROPERTIES(payload).then(response => {
        let routePath = router.app._route.name
        let step = 0
        switch (routePath) {
          case 'property-details-1':
            router.push('/host/multi-step-form/property-details-2')
            step = 2
            break
          case 'property-details-2':
            router.push('/host/multi-step-form/amenities')
            step = 3
            break
          case 'polices':
            router.push('/host/multi-step-form/terms-and-conditions')
            step = 6
            break
          case 'terms-and-conditions':
            step = 7
            router.push('/host/app/wallet')
            break
        }
        commit('Update_Steps', step)
        Vue.notify({
          group: 'notify',
          title: 'Success',
          type: 'success',
          text: 'multi step form Success MSG'
        })
      }).catch((error) => {
        Vue.notify({
          group: 'notify',
          type: 'warn',
          title: 'Warning',
          text: 'multi step form Error MSG'
        })
      })
    },
    UPDATE_AMENITIES({ commit }, payload) {
      MS_Forms_Services.UPDATE_AMENITIES(payload).then(response => {
        commit('Update_Steps', 4)
        router.push('/host/multi-step-form/earning')
        Vue.notify({
          group: 'notify',
          title: 'Success',
          type: 'success',
          text: 'multi step form Success MSG'
        })
      }).catch((error) => {
        Vue.notify({
          group: 'notify',
          type: 'warn',
          title: 'Warning',
          text: 'multi step form Error MSG'
        })
      })
    }
  }
}
