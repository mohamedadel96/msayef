<template>
  <!-- <div class="container"> -->
  <div class="row">
    <div class="col-sm-12 signup">
      <h1>{{$t("host.AuthPages.signUp")}}</h1>
      <form action>
        <!-- Inputs section ⌨ -->
        <label class="styled" for>
          <input v-model="req.name" :placeholder="$t('host.AuthPages.nameInp')" type="text">
        </label>
        <div class="fixPhone">
          <label class="styled phone" id="VuePhoneNumberInput_phone_number">
            <VuePhoneNumberInput
              default-country-code="EG"
              v-model="req.phone_number"
              @update="phoneInfo($event)"
            />
          </label>
        </div>

        <label class="styled password" for>
          <input
            v-model="req.password"
            :placeholder="$t('host.AuthPages.password')"
            :type="passInput? 'password': 'text'"
          >
          <i class="fas fa-eye" @click="passInput = !passInput"></i>
        </label>
        <!-- Progrss-bar -->
        <div class="progessParent">
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 30%;"
            ></div>
          </div>
          <p class="info">it’s ok</p>
        </div>
        <p class="passwordHint">Add spacial character like (#$^%) to be more safe</p>

        <button @click.prevent="SignUp" class="signupBtn">{{$t("host.AuthPages.signUp")}}</button>
        <button class="fbSignUp">
          <i class="fab fa-facebook-square"></i>
          Continue with facebook
        </button>
        <span class="loginHint">
          <p>{{$t("host.AuthPages.loginQ")}}</p>
          <router-link to="/host/login">
            <a href>{{$t("host.AuthPages.login")}}</a>
          </router-link>
        </span>
      </form>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      req: {
        name: null,
        country_code: "20",
        phone_number: null,
        password: null
      },
      passInput: true
    };
  },
  methods: {
    phoneInfo(e) {
      if (e.formatInternational) {
        let code = e.formatInternational.replace("+", "").split(" ")[0];
        this.req.country_code = code;
      }
    },
    SignUp() {
      let phone_number = this.req.phone_number.replace(/\s/g, "");
      let req = {
        name: this.req.name,
        country_code: this.req.country_code,
        phone_number: phone_number,
        password: this.req.password
      };
      this.$store.dispatch("SIGNUP", req);
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