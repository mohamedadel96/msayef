<template>
  <div class="card">
    <h1>{{$t("host.home.header.card_title")}}</h1>
    <div class="monyMaker">
      <p>
        {{$t("host.home.header.card_discription_p1")}}
        <br />
        {{$t("host.home.header.card_dicription_p2")}}
      </p>
    </div>
    <button
      class="classic"
      @click="$router.push('/host/login')"
    >{{ $t('host.home.header.login_btn_1') }}</button>
    <!-- <button class="fb" @click="$router.push('/host/multi-step-form/property-location')">
      <i class="fab fa-facebook-square"></i>
      {{$t("host.home.header.login_btn_2")}}
    </button>-->
    <facebook-login
      class="facebook"
      appId="319598252215886"
      @login="onLogin"
      @logout="onLogout"
      @sdk-loaded="sdkLoaded"
    >
    welcome
    </facebook-login>
    <router-link to="/host/signup">
      <a class="signUp" href>{{$t("host.home.header.sign_up_link")}}</a>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isConnected: false,
      name: "",
      email: "",
      personalID: "",
      token: "",
      FB: undefined
    };
  },
  methods: {
    getUserData() {
      this.FB.api(
        "/",
        "GET",
        { fields: "id,name,email,token"},
        userInformation => {
          console.warn("get data", userInformation)
          // console.warn("data api", userInformation);
          this.personalID = userInformation.id;
          this.email = userInformation.email;
          this.name = userInformation.name;
          // this.token = userInformation.token;
        }
      );
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected;
      this.FB = payload.FB;
      if (this.isConnected) this.getUserData();
    },
    onLogin() {
      this.isConnected = true;
      this.getUserData();
    },
    onLogout() {
      this.isConnected = false;
    }
  }
};
</script>

<style scoped>
.facebook{
  width: 0;
  margin: 0 40px;
}

.header .content .card {
  margin-top: 30px;
  padding: 10px 18px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.6);
  width: 90%;
}

.header .content .card h1 {
  color: #0e525a;
  margin-bottom: 21px;
}

.header .content .card .monyMaker {
  padding: 10px 20px;
  font-size: 24px;
  color: #fff;
  background-image: url("../../../assets/images/monyMaker.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 20px;
  font-weight: 500;
}

.header .content .card button {
  display: block;
  margin: 20px auto;
  width: 100%;
  padding: 18px;
  border: none;
  border-radius: 10px;
  font-size: 17px;
}

.header .content .card button.classic {
  background-color: #fdd835;
  color: #0e525a;
  transition: all 0.3s ease-in-out;
}

.header .content .card button.classic:hover {
  color: #fdd835;
  background-color: #0e525a;
  transition: all 0.35s ease-in-out;
}

.header .content .card button.fb {
  background-color: #51549a;
  color: #fff;
  transition: all 0.35s ease-in-out;
}

.header .content .card button.fb:hover {
  color: #51549a;
  background-color: #fff;
  border: 1px solid #515451;
  transition: all 0.35s ease-in-out;
}

.header .content .card button.fb .fab {
  font-size: 22px;
  margin: 0 8px;
}

.header .content .card .signUp {
  display: block;
  margin: 10px auto;
  color: #0e525a;
}

.header .mainRow::after {
  background-image: -webkit-linear-gradient(
    rgba(250, 250, 252, 0) 0%,
    rgba(250, 250, 252, 1) 100%
  );
  background-image: -moz-linear-gradient(
    rgba(250, 250, 252, 0) 0%,
    rgba(250, 250, 252, 1) 100%
  );
  background-image: -o-linear-gradient(
    rgba(250, 250, 252, 0) 0%,
    rgba(250, 250, 252, 1) 100%
  );
  background-image: linear-gradient(
    rgba(250, 250, 252, 0) 0%,
    rgba(250, 250, 252, 1) 100%
  );
  height: 170px;
  width: 100%;
  content: "";
  bottom: 0;
}
</style>