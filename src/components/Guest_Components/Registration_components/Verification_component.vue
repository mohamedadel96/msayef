<template>
  <div class="verify" v-if="profile">
    <form @submit.prevent="submit">
      <h3>{{$t("host.AuthPages.VC")}} {{profile.phone_number}}</h3>
      <input v-model="req.code" type="text" :placeholder="$t('host.AuthPages.code')">
      <button type="submit">{{$t("host.AuthPages.confirm")}}</button>
      <!-- <a href="#">Not your phone number !</a> -->
      <div class="resend">
        <p>{{$t("host.AuthPages.VQ")}}</p>
        <a @click.prevent="resendCode" href>{{$t("host.AuthPages.resend")}}</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      req: {
        code: null
      }
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("SENDVERIFICATION", this.req.code);
    },
    resendCode() {
      this.$store.dispatch("RESENDVERIFICATION");
    }
  },
  computed: {
    profile() {
      return this.$store.getters.Get_Profile
    }
  },
  created() {
    if (this.$store.getters.Get_Verification) {
      this.$router.push("/app/wallet");
    }
  }
};
</script>

<style scoped>
.verify {
  max-width: 388px;
  min-height: 483px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  padding: 33px;
}

.verify h3 {
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  color: rgba(14, 82, 90, 1);
  padding: 38px 68px;
  padding-top: 0;
}

.verify input {
  height: 60px;
  width: 95%;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(14, 82, 90, 1);
  border-radius: 8px;
  padding: 22px;
  font-size: 14px;
  outline: none;
}

.verify input::placeholder {
  color: rgba(14, 82, 90, 1);
}

.verify button {
  height: 60px;
  width: 95%;
  background-color: rgba(253, 216, 53, 1);
  border-radius: 8px;
  color: rgba(14, 82, 90, 1);
  margin: 20px 0;
  border: none;
  outline: none;
  font-weight: 600;
}

.verify a {
  font-size: 14px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
  text-align: center;
  display: block;
  text-decoration: none;
}

.verify .resend {
  margin-top: 100px;
}

.verify .resend a,
.verify .resend p {
  display: inline-block;
}
.verify .resend a {
  float: right;
  color: rgba(249, 168, 37, 1);
}
</style>