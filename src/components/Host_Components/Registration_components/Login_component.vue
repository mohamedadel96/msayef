<template>
  <!-- <div class="container"> -->
  <div class="row">
    <div class="col-sm-12 login">
      <h1>{{$t("host.AuthPages.login")}}</h1>
      <form action>
        <!-- Countries flags with phone code -->
        <label class="styled phone" for>
          <VuePhoneNumberInput default-country-code="EG" v-model="req.phone_number"/>
        </label>
        <label class="styled password" for>
          <input
            v-model="req.password"
            :placeholder="$t('host.AuthPages.password')"
            :type="passInput? 'password': 'text'"
          >
          <i class="fas fa-eye" @click="passInput = !passInput"></i>
        </label>

        <button @click.prevent="login">{{$t("host.AuthPages.login")}}</button>
        <span class="loginHint forget">
          <router-link to="/host/forgetpassword">{{$t("host.AuthPages.FP")}}</router-link>
        </span>
        <button class="fbSignUp">
          <i class="fab fa-facebook-square"></i>
          {{$t("host.AuthPages.facebookBtn")}}
        </button>

        <!-- <v-facebook-login loginLabel="how" app-id="966242223397117"></v-facebook-login> -->
        <span class="loginHint">
          <p>{{$t("host.AuthPages.signQ")}}</p>
          <router-link to="/host/signup">{{$t("host.AuthPages.signUp")}}</router-link>
        </span>
      </form>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      req: {
        phone_number: null,
        password: null
      },
      passInput: true
    };
  },
  methods: {
    async login() {
      let phone_number = this.req.phone_number.replace(/\s/g, "");
      let req = {
        phone_number: phone_number,
        password: this.req.password
      };
      this.$store.dispatch("LOGIN", req);
    }
  }
};
</script>

<style scoped>
.row .signup,
.row .login {
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  background-color: rgba(255, 255, 255, 1);
  color: rgba(14, 82, 90, 0.8);
  border-radius: 10px;
  margin-top: 52px;
  padding: 36px;
  /* margin-right: 36px */
}

h1 {
  color: rgba(14, 82, 90, 0.8);
  text-align: center;
  font-size: 24px;
  margin: 0 auto;
  margin-bottom: 36px;
  font-weight: bolder;
}

label.styled {
  height: 60px;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(14, 82, 90, 0.8);
  border-radius: 8px;
  padding-left: 12px;
  padding-top: 5px;
  margin: 15px 15px 15px 0;
}
label.phone {
  padding: 2px;
  margin: 0;
}

.fixPhone {
  padding: 2px;
  border: 2px solid rgba(14, 82, 90, 0.8);
  border-radius: 8px;
}

#VuePhoneNumberInput_country_selector,
#VuePhoneNumberInput_phone_number {
  border: none;
  height: 52px;
}

input {
  border: 0;
  font-size: 14px;
  width: 90%;
  /* height: 90%; */
  outline: none;
  padding-left: 12px;
  font-weight: 500;
}

input::placeholder {
  color: rgba(14, 82, 90, 0.8);
}

label.password,
label.password input::placeholder {
  color: rgba(249, 168, 37, 1);
}

label.password .fa-eye {
  font-size: 18px;
  margin-top: 10px;
}

label.password .fa-eye:hover {
  cursor: pointer;
}

.progessParent {
  margin: 10px 0;
}

.progessParent .progress {
  border-radius: 5px;
  height: 10px;
  width: 150px;
  display: inline-block;
  background-color: rgba(14, 82, 90, 0.1);
  box-shadow: none;
  margin: 0;
}

.progessParent .progress-bar {
  background-color: rgba(253, 216, 53, 1);
  box-shadow: none;
}

.progessParent .info {
  display: inline-block;
  margin-left: 10px;
  color: rgba(253, 216, 53, 1);
  font-size: 14px;
}

.passwordHint {
  font-weight: 400;
  margin-bottom: 16px;
}

button {
  height: 60px;
  width: 90%;
  background-color: rgba(253, 216, 53, 1);
  border-radius: 8px;
  margin: 10px auto;
  text-align: center;
  font-size: 16px;
  color: rgba(14, 82, 90, 0.8);
  border: none;
  display: block;
}

button.fbSignUp {
  background-color: rgba(81, 84, 154, 1);
  color: #fff;
  margin-bottom: 23px;
}

button.fbSignUp .fa-facebook-square {
  margin-right: 7px;
  font-size: 25px;
}

.loginHint {
  display: block;
  text-align: center;
  font-size: 16px;
}

span.loginHint p {
  display: inline-block;
  color: rgba(14, 82, 90, 0.8);
}

span.loginHint a {
  color: rgba(249, 168, 37, 1);
  text-decoration: none;
}
</style>