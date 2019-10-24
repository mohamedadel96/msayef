import Vue from 'vue'
import Router from 'vue-router'
import HostHome from './views/host/Home.vue'
// MULTI STEP FORM PAGES
import MultiStepForm from './views/host/MultiStepForm.vue'
import PropertyLocation from './components/Host_Components/Multi_Step_Form_components/Property_Location.vue'
const PropertyDetails1 = () =>
    import ('./components/Host_Components/Multi_Step_Form_components/Property_Details_1.vue')
const PropertyDetails2 = () =>
    import ('./components/Host_Components/Multi_Step_Form_components/Property_Details_2.vue')
const Amenities = () =>
    import ('./components/Host_Components/Multi_Step_Form_components/Amenities.vue')
const Earning = () =>
    import ('./components/Host_Components/Multi_Step_Form_components/Earning.vue')
const Polices = () =>
    import ('./components/Host_Components/Multi_Step_Form_components/Polices.vue')
const TermsAndConditions = () =>
    import ('./components/Host_Components/Multi_Step_Form_components/TermsAndConditions.vue')
    // APP COMPONENTS
import App from './views/host/App.vue'
import Wallet from './components/Host_Components/App_Components/Wallet.vue'
const TimeLine = () =>
    import ('./components/Host_Components/App_Components/TimeLine.vue')
const Calender = () =>
    import ('./components/Host_Components/App_Components/Calender.vue')
const Calender_Res = () =>
    import ('./components/Host_Components/App_Components/Calender_Res.vue')
const Payment_Method = () =>
    import ('./components/Host_Components/App_Components/Payment_Method.vue')
const TermsApp = () =>
    import ('./components/Host_Components/App_Components/TermsAndConditions.vue')
    // REGESTERATION COMPONENTS HOST
import RegularHost from './components/Host_Components/Registration_components/Regular.vue'
const LoginHost = () =>
    import ('./components/Host_Components/Registration_components/Login_component.vue')
const SignUpHost = () =>
    import ('./components/Host_Components/Registration_components/SignUp_Component.vue')
const VerificationHost = () =>
    import ('./components/Host_Components/Registration_components/Verification_component.vue')
const ForgetPasswordHost = () =>
    import ('./components/Host_Components/Registration_components/Forget_Password.vue')
const ResetPasswordHost = () =>
    import ('./components/Host_Components/Registration_components/Reset_Password.vue')
const UpdatePasswordHost = () =>
    import ('./components/Host_Components/Registration_components/Update_Password.vue')
    // REGISTRATION COMPONENT GUEST
import RegularGuest from './components/Guest_Components/Registration_components/Regular.vue'
const LoginGuest = () =>
    import ('./components/Guest_Components/Registration_components/Login_component.vue')
const SignUpGuest = () =>
    import ('./components/Guest_Components/Registration_components/SignUp_Component.vue')
const VerificationGuest = () =>
    import ('./components/Guest_Components/Registration_components/Verification_component.vue')
const ForgetPasswordGuest = () =>
    import ('./components/Guest_Components/Registration_components/Forget_Password.vue')
const ResetPasswordGuest = () =>
    import ('./components/Guest_Components/Registration_components/Reset_Password.vue')
const UpdatePasswordGuest = () =>
    import ('./components/Guest_Components/Registration_components/Update_Password.vue')
    // GUEST COMPONENTS
import GuestHome from './views/guest/Home.vue'
import Property from './views/guest/Property.vue'
import GuestTerms from './views/guest/terms_guest.vue'
import Fawry from './views/guest/Fawry.vue'
import Article from './views/guest/article.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/host',
            name: 'home',
            component: HostHome,
            children: [{
                    path: '/host',
                    name: 'regular',
                    component: RegularHost,
                    meta: {
                        requiresVisitor: true
                    }
                },
                {
                    path: '/host/signup',
                    name: 'signup',
                    component: SignUpHost,
                    meta: {
                        requiresVisitor: true
                    }
                },
                {
                    path: '/host/verification',
                    name: 'verification',
                    component: VerificationHost,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/host/login',
                    name: 'login',
                    component: LoginHost,
                    meta: {
                        requiresVisitor: true
                    }
                },
                {
                    path: '/host/forgetpassword',
                    name: 'ForgetPassword',
                    component: ForgetPasswordHost,
                    meta: {
                        requiresVisitor: true
                    }
                },
                {
                    path: '/host/resetpassword/:phone',
                    name: 'ResetPassword',
                    component: ResetPasswordHost,
                    meta: {
                        requiresVisitor: true
                    }
                },
                {
                    path: '/host/updatepassword/:token',
                    name: 'UpdatePassword',
                    component: UpdatePasswordHost,
                    meta: {
                        requiresVisitor: true
                    }
                }
            ]
        },
        {
            path: '/host/multi-step-form/property-location',
            name: 'multi-step-form',
            component: MultiStepForm,
            meta: { requiresAuth: true },
            children: [{
                    path: '/host/multi-step-form/property-location',
                    name: 'property-location',
                    component: PropertyLocation,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/host/multi-step-form/property-details-1',
                    name: 'property-details-1',
                    component: PropertyDetails1,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/host/multi-step-form/property-details-2',
                    name: 'property-details-2',
                    component: PropertyDetails2,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/host/multi-step-form/amenities',
                    name: 'amenities',
                    component: Amenities,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/host/multi-step-form/earning',
                    name: 'earning',
                    component: Earning,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/host/multi-step-form/polices',
                    name: 'polices',
                    component: Polices,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/host/multi-step-form/terms-and-conditions',
                    name: 'terms-and-conditions',
                    component: TermsAndConditions,
                    meta: { requiresAuth: true }
                }
            ]
        },
        {
            path: '/host/app/wallet',
            name: 'app',
            component: App,
            meta: { requiresAuth: true },
            children: [{
                    path: '/host/app/wallet',
                    name: 'wallet',
                    component: Wallet,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/host/app/timeline',
                    name: 'time-line',
                    component: TimeLine,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/host/app/calender',
                    name: 'calender',
                    component: Calender,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/host/app/calender/:id',
                    name: 'Calender_Res',
                    component: Calender_Res,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/host/app/paymentmethod',
                    name: 'payment_method',
                    component: Payment_Method,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/host/app/terms_and_conditions',
                    name: 'TermsApp',
                    component: TermsApp,
                    meta: { requiresAuth: true }
                }
            ]
        },
        {
            path: '/',
            name: 'guest_home',
            component: GuestHome,
            children: [{
                    path: '/',
                    name: 'regular',
                    component: RegularGuest,
                    meta: {
                        requiresVisitor: false
                    }
                },
                {
                    path: '/signup',
                    name: 'signup',
                    component: SignUpGuest,
                    meta: {
                        requiresVisitor: false
                    }
                },
                {
                    path: '/verification',
                    name: 'verification',
                    component: VerificationGuest,
                    meta: { requiresAuth: false }
                },
                {
                    path: '/login',
                    name: 'login',
                    component: LoginGuest,
                    meta: {
                        requiresVisitor: false
                    }
                },
                {
                    path: '/forgetpassword',
                    name: 'ForgetPassword',
                    component: ForgetPasswordGuest,
                    meta: {
                        requiresVisitor: false
                    }
                },
                {
                    path: '/resetpassword/:phone',
                    name: 'ResetPassword',
                    component: ResetPasswordGuest,
                    meta: {
                        requiresVisitor: false
                    }
                },
                {
                    path: '/updatepassword/:token',
                    name: 'UpdatePassword',
                    component: UpdatePasswordGuest,
                    meta: {
                        requiresVisitor: false
                    }
                }
            ]
        },
        {
            path: '/guest_terms_and_conditions',
            name: 'guest_terms',
            component: GuestTerms
        },
        {
            path: '/property/:id',
            name: 'property',
            component: Property
        },
        {
            path: '/fawry/:paymentData',
            name: 'fawry',
            component: Fawry
        },
        {
            path: '/article/:slug',
            name: 'article',
            component: Article
        }
    ]
})