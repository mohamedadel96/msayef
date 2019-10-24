import Vue from 'vue'
import VuePhoneNumberInput from 'vue-phone-number-input'
import VFacebookLogin from 'facebook-login-vuejs'
import Notifications from 'vue-notification'
import * as LocationPicker from 'vue2-location-picker'
import VueFlatPickr from 'vue-flatpickr-component';
import Meta from 'vue-meta';
import Loading from 'vue-loading-overlay'
import App from './App.vue'
import router from './router'
import store from './Store/store'
import i18n from './i18n'

// IMPORT STYLE FILES
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'flatpickr/dist/flatpickr.css';
import './assets/Style/Main.css'
if (i18n.locale === "ar") {
    import ('./assets/Style/bootstrap-rtl.min.css')
    import ('./assets/Style/main_rtl.css')
}

// PLUGINS
Vue.config.productionTip = false

Vue.use(LocationPicker, {
    installComponents: false, // If true, create it globally
})
Vue.use(Notifications)
Vue.use(VueFlatPickr);
Vue.use(Meta);
Vue.component('loading', Loading)

// PLUGINS COMPONENTS
import NavBar from './components/Host_Components/Plugins_Components/Navbar'
import GuestNavBar from './components/Guest_Components/Plugins_Components/Navbar'
import Footer_Guest from './components/Guest_Components/Plugins_Components/Footer_Guest'

Vue.component('NavBar', NavBar)
Vue.component('Guest-NavBar', GuestNavBar)
Vue.component('footer-guest', Footer_Guest)
Vue.component('VuePhoneNumberInput', VuePhoneNumberInput)
Vue.component('facebook-login', VFacebookLogin)

// Auth check
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.getters.Get_Token) {
            next({
                name: 'regular'
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters.Get_Token) {
            if (!store.getters.Get_Verification) {
                next({
                    name: 'verification'
                })
            } else {
                if (store.Get_properties_count == 0) {
                    next({
                        name: 'property-location'
                    })
                } else {
                    next({
                        name: 'wallet'
                    })
                }
            }
        } else {
            next()
        }
    } else {
        next(); // make sure to always call next()!
    }
})

// APP
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')