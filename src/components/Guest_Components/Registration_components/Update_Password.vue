<template>
  <div class="updatePassword">
    <form @submit.prevent="submit">
      <h3>{{$t("host.AuthPages.UP")}}</h3>
      <input v-model="req.password" type="password" :placeholder="$t('host.AuthPages.newPass')">
      <input v-model="req.password_confirmation" type="password" :placeholder="$t('host.AuthPages.conPass')">
      <button type="submit">{{$t("host.AuthPages.done")}}</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      req: {
        reset_password_token: this.$route.params.token,
        password: null,
        password_confirmation: null
      }
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("UPDATEPASSWORD", this.req);
    }
  }
};
</script>

<style scoped>
.updatePassword {
  max-width: 388px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  padding: 33px;
}

.updatePassword h3 {
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  color: rgba(14, 82, 90, 1);
  padding: 38px 68px;
}

.updatePassword input {
  height: 60px;
  width: 95%;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(14, 82, 90, 1);
  border-radius: 8px;
  padding: 22px;
  font-size: 14px;
  outline: none;
  margin-bottom: 15px;
}

.updatePassword input::placeholder {
  color: rgba(14, 82, 90, 1);
}

.updatePassword button {
  height: 60px;
  width: 95%;
  background-color: rgba(253, 216, 53, 1);
  border-radius: 8px;
  color: rgba(14, 82, 90, 1);
  margin-top: 20px;
  border: none;
  outline: none;
}
</style>