// import Vue from 'vue'
// import router from '../../../router'
import Guest_Services from '../../../Services/Guest/Guest'

export default {
  state: {
    flats: null,
    flatProperty: null,
    flatsQuiries: null,
    articlesQuiries: null,
    bookingData: null,
    availableDate: null,
    featured_city: null,
    articles: null,
    slugArticle: null,
    showSeeMore: true,
    showMoreArticle: true
  },
  getters: {
    Get_Flats(state) {
      return state.flats
    },
    Get_Flat_Property(state) {
      return state.flatProperty
    },
    Get_Booking_Data(state) {
      return state.bookingData
    },
    Get_Available_Date(state) {
      return state.availableDate
    },
    Get_Featured_City(state) {
      return state.featured_city
    },
    Get_Articles(state) {
      return state.articles
    },
    Get_Slug_Article(state) {
      return state.slugArticle
    },
    Get_SeeMore_State(state) {
      return state.showSeeMore
    },
    Get_MoreArticle_State(state) {
      return state.showMoreArticle
    }
  },
  mutations: {
    Save_Flats(state, payload) {
      state.flats = payload.property
      this.state.isLoading = false
    },
    Save_Added_Flats(state, payload) {
      payload.property.map(flat => {
        state.flats.push(flat)
      })
    },
    Save_Flat_Property(state, payload) {
      state.flatProperty = payload
      this.state.isLoading = false
    },
    Save_Flats_Queries(state, payload) {
      state.flatsQuiries = payload
      this.state.isLoading = false
    },
    Save_Booking_Data(state, payload) {
      state.bookingData = payload
      this.state.isLoading = false
    },
    Save_Available_Date(state, payload) {
      state.availableDate = payload
      this.state.isLoading = false
    },
    Save_Featured_City(state, payload) {
      state.featured_city = payload
      this.state.isLoading = false
    },
    Save_Articles(state, payload) {
      state.articles = payload.articles
      this.state.isLoading = false
    },
    Save_More_Articles(state, payload) {
      payload.articles.map(article => {
        state.articles.push(article)
      })
    },
    Save_Articles_Queries(state, payload) {
      state.articlesQuiries = payload
      this.state.isLoading = false
    },
    Save_Slug_Articles(state, payload) {
      state.slugArticle = payload
      this.state.isLoading = false
    },
    Dlt_Flat_Property(state) {
      state.flatProperty = null
      this.state.isLoading = false
    },
    Change_SeeMore_State(state) {
      state.showSeeMore = false
    },
    Change_ShowArticle_State(state) {
      state.showMoreArticle = false
    }
  },
  actions: {
    PAGINATION({ commit, state }, pageNum) {
      // this.state.isLoading = true
      state.flatsQuiries.page = pageNum
      Guest_Services.FLATSEARCH(state.flatsQuiries).then(response => {
        if (response.data.property.length) {
          commit('Save_Flats_Queries', state.flatsQuiries)
          commit('Save_Added_Flats', response.data)
        } else {
          commit('Change_SeeMore_State')
        }
      })
    },
    FLATSEARCH({ commit }, payload) {
      this.state.isLoading = true
      Guest_Services.FLATSEARCH(payload).then(response => {
        commit('Save_Flats_Queries', payload)
        commit('Save_Flats', response.data)
      })
    },
    GETPROPERTIES({ commit, dispatch }, payload) {
      this.state.isLoading = true
      commit('Dlt_Flat_Property')
      Guest_Services.GETPROPERTIES(payload).then(response => {
        commit('Save_Flat_Property', response.data)
        dispatch('GETAVAILABLEDATE', payload.id)
      })
    },
    GETAVAILABLEDATE({ commit }, id) {
      this.state.isLoading = true
      Guest_Services.GETAVAILABLEDATE(id).then(response => {
        commit('Save_Available_Date', response.data.available)
      })
    },
    REQUESTTOBOOK({ commit }, payload) {
      this.state.isLoading = true
      let promise = new Promise((resolve, reject) => {
        Guest_Services.REQUESTTOBOOK(payload).then(response => {
          commit('Save_Booking_Data', response.data)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
      return promise
    },
    RESERVATION({ commit }, payload) {
      this.state.isLoading = true
      let promise = new Promise((resolve, reject) => {
        Guest_Services.RESERVATION(payload).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
      this.state.isLoading = false
      return promise
    },
    TERMSGUEST({ commit }, lang) {
      this.state.isLoading = true
      let promise = new Promise((resolve, reject) => {
        Guest_Services.TERMSGUEST(lang).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
      this.state.isLoading = false
      return promise
    },
    CHECKPROMOCODE({ commit }, payload) {
      this.state.isLoading = true
      let promise = new Promise((resolve, reject) => {
        Guest_Services.CHECKPROMOCODE(payload).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
      this.state.isLoading = false
      return promise
    },
    FEATURED_CITY({ commit }, lang) {
      this.state.isLoading = true
      Guest_Services.FEATURED_CITY(lang).then(response => {
        commit('Save_Featured_City', response.data)
      })
    },
    ARTICLES({ commit }, payload) {
      this.state.isLoading = true
      Guest_Services.ARTICLES(payload).then(response => {
        
          commit('Save_Articles', response.data)
          commit('Save_Articles_Queries', payload)
      })
    },
    MOREARTICLES({ commit, state }, pageNum) {
      // this.state.isLoading = true
      state.articlesQuiries.page = pageNum
      Guest_Services.ARTICLES(state.articlesQuiries).then(response => {
        if (response.data.length) {
          commit('Save_More_Articles', response.data)
        } else {
          commit('Change_ShowArticle_State')
        }
      })
    },
    ARTICLEWITHSLUG({ commit }, req) {
      this.state.isLoading = true
      Guest_Services.ARTICLEWITHSLUG(req).then(response => {
        commit('Save_Slug_Articles', response.data)
      })
    }
  }
}
