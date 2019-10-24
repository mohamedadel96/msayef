import Vue from "vue";
import Vuex from "vuex";
import App_Services from '../Services/Host/App_Services'

// MODULES
import MS_Form_module from "./Modules/host/MS-Form";
import Host_Auth from "./Modules/host/Host_Auth";
import Host_Module from "./Modules/host/Host_Module";
import Guest_Module from "./Modules/guest/Guest_module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        MS_Form_module,
        Host_Auth,
        Host_Module,
        Guest_Module
    },
    state: {
        notifications: null,
        isLoading: false
    },
    getters: {
        get_notifications(state) {
            return state.notifications
        },
        isLoading(state) {
            return state.isLoading
        }
    },
    mutations: {
        Get_Notifications(state, payload) {
            state.notifications = payload
            this.state.isLoading = false
        }
    },
    actions: {
        GET_NOTIFICATIONS({ commit }) {
            this.state.isLoading = true
            App_Services.GET_NOTIFICATIONS().then(response => {
                commit('Get_Notifications', response.data)
            })
        }
    }
});