<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand">
          <router-link to="/host">
            <img class="img-responsive" src="../../../assets/images/logo.png" alt />
          </router-link>
        </a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <div class="nav-center">
          <ul class="nav navbar-nav subNav">
            <li>
              <router-link to="/host/app/calender">
                <a href>{{$t('host.popup.calender')}}</a>
              </router-link>
            </li>
            <li>
              <router-link to="/host/app/wallet">
                <a href>{{$t('host.popup.wallet')}}</a>
              </router-link>
            </li>
            <li>
              <router-link to="/host/app/timeline">
                <a href>{{$t('host.popup.timeLine')}}</a>
              </router-link>
            </li>
          </ul>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <!-- <li><a class="eng" href="#">English</a></li> -->
          <!-- Notification 🔔🔔 -->
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-bell"></i>
            </a>
            <ul class="dropdown-menu notification-down" v-if="notifications">
              <li v-for="(item,i) in notifications" :key="i">
                <div class="notification-sign"></div>
                <div class="data">
                  <h4>{{$i18n.locale === "en" ? item.title : item.title_ar}}</h4>
                  <p>{{$i18n.locale === "en" ? item.content : item.content_ar}}</p>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <a @click="changeLang" class="ar">{{$i18n.locale === 'en' ? 'عربي' : 'English'}}</a>
          </li>

          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle profile"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src="../../../assets/images/vector.png" alt />
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu profile-menu">
              <div class="cont"></div>
              <div class="photo">
                <img class="img-circle" src="../../../assets/images/vector.png" alt />
              </div>
              <div class="info" v-if="profile">
                <p class="name">{{profile.name}}</p>
                <p class="phone">{{profile.phone_number}}</p>
              </div>
              <div class="clear-fix"></div>
              <button @click="showEditProfile = true">{{$t('host.popup.editProfile')}}</button>
              <li>
                <router-link to="/host/app/paymentmethod">{{$t('host.popup.paymentMethod')}}</router-link>
              </li>
              <li>
                <router-link to="/host/app/terms_and_conditions">{{$t('host.popup.Terms')}}</router-link>
              </li>
              <li>
                <a href>{{$t('host.popup.FAQ')}}</a>
              </li>
              <li>
                <a href>{{$t('host.popup.contactUs')}}</a>
              </li>
              <li>
                <a @click.prevent="logout" href>{{$t('host.popup.signOut')}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <edit-profile v-if="showEditProfile" @close="showEditProfile = false"></edit-profile>
    </div>
  </nav>
</template>

<script>
const EditProfile = () => import("../Plugins_Components/EditProfile.vue");
export default {
  components: {
    EditProfile
  },
  data() {
    return {
      showEditProfile: false
    };
  },
  methods: {
    changeLang() {
      if (this.$i18n.locale === "ar") {
        this.$i18n.locale = "en";
        this.$store.dispatch("SETLANGUAGE", "en");
      } else {
        this.$i18n.locale = "ar";
        this.$store.dispatch("SETLANGUAGE", "ar");
      }
    },
    logout() {
      this.$store.dispatch("LOGOUT");
    }
  },
  computed: {
    notifications() {
      return this.$store.getters.get_notifications;
    },
    profile() {
      return this.$store.getters.Get_Profile;
    }
  },
  mounted() {
    setInterval(() => {
      this.$store.dispatch("GET_NOTIFICATIONS");
    }, 420000);
    this.$store.dispatch("GET_NOTIFICATIONS");
  }
};
</script>

<style scoped>
.navbar-default {
  margin: 0;
  /* background-color: rgba(8, 95, 188, 1); */
  border-radius: 0;
  border: none;
}

.container-fluid {
  background-color: rgba(8, 95, 188, 1);
}

.navbar-default .navbar-brand {
  height: 100%;
  padding: 5px 15px;
}

.navbar-default .navbar-nav > li .eng {
  color: #c49b9b;
}

.navbar-default .navbar-nav > li .ar {
  font-family: Tajawal;
  cursor: pointer;
}

.nav-center {
  display: inline-block;
  width: 65%;
  height: 45px;
  position: relative;
}

.subNav {
  position: absolute;
  right: 20%;
}

.navbar-default .navbar-nav > li a {
  color: #fff;
  font-size: 17px;
  padding-top: 30px;
}

.navbar-default .dropdown li a {
  font-size: 17px;
  padding-top: 5px;
  color: black !important;
}

.navbar-default .navbar-nav > li > a:focus,
.navbar-default .navbar-nav > li > a:hover {
  color: #fff;
}

.dropdown .profile {
  padding-top: 10px !important;
}

.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:focus,
.navbar-default .navbar-nav > .open > a:hover {
  color: rgb(253, 216, 53);
  background-color: transparent;
}

.navbar-default .navbar-nav > li > a > i {
  font-size: 20px;
}

.navbar-nav > li > .dropdown-menu {
  font-family: Rubik;
  font-weight: 600;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 3px 6px 0px rgba(146, 152, 177, 0.36);
  border: none;
  top: 77px;
}

.navbar-nav > li > .dropdown-menu::before {
  content: "\f0d8";
  font-family: FontAwesome;
  width: 0px;
  height: 0px;
  background: #333;
  position: absolute;
  top: -19px;
  right: 50%;
  font-size: 23px;
  color: #fff;
  box-shadow: 0px 3px 6px 0px rgba(146, 152, 177, 0.36);
}

.navbar-default .navbar-nav .open a:focus {
  background-color: transparent;
}

.notification-down {
  padding: 25px;
  width: 385px;
  right: -341% !important;
}

.notification-sign {
  width: 15px;
  height: 15px;
  background-color: yellow;
  border-radius: 50%;
  float: left;
  margin-top: 27px;
}

.notification-down li div.data {
  display: inline-block;
  font-weight: 500;
  width: 90%;
  margin-left: 10px;
  margin-top: 15px;
  border-bottom: 1px solid #eee;
}

.notification-down li:last-child div.data {
  border: none;
}

.notification-down li:hover {
  background-color: #eee;
  cursor: pointer;
}

/* Fix responsive devices in small deveices  */

.navbar-header button {
  margin-top: 15px;
}

/*small devices menu */
.navbar-default .navbar-toggle {
  border: none;
}

.navbar-default .navbar-toggle .icon-bar {
  background: #fff;
  height: 2px;
}

.navbar-default .navbar-toggle:focus,
.navbar-default .navbar-toggle:hover {
  background: transparent;
  border: 1px solid #fff;
}

.dropdown .profile-menu {
  width: 385px;
  padding-top: 44px;
  padding-bottom: 30px;
  font-weight: 800 !important;
}

.dropdown .profile-menu .photo {
  width: 60px;
  margin-left: 40px;
  float: left;
}

.dropdown .profile-menu .photo img {
  width: 100%;
}

.dropdown .profile-menu .info {
  float: left;
  padding: 5px;
  margin-left: 20px;
}

.dropdown .profile-menu .info p {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
  margin-bottom: 6px;
}

.dropdown .profile-menu .clear-fix {
  clear: both;
}

.dropdown .profile-menu button {
  display: block;
  width: 80%;
  height: 40px;
  margin: 0 auto;
  margin-top: 15px;
  background-color: rgba(253, 216, 53, 1);
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
  text-align: center;
  border: none;
  margin-bottom: 15px;
  outline: none;
}

.dropdown .profile-menu li a {
  padding: 9px 0;
  padding-left: 40px;
  font-weight: 500 !important;
}

.dropdown .profile-menu li:last-child a {
  color: rgba(229, 115, 115, 1);
}
</style>