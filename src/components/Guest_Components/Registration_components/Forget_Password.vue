<template>
  <div class="phone">
    <form @submit.prevent="submit">
      <h3>{{$t("host.AuthPages.forgetPass")}}</h3>
      <input v-model="req.phone_number" type="number" :placeholder="$t('host.AuthPages.RPass')">
      <button type="submit">{{$t("host.AuthPages.continue")}}</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      req: {
        phone_number: null
      }
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("FORGETPASSWORD", this.req);
    }
  }
};
</script>

<style scoped>
.phone {
  max-width: 388px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  padding: 33px;
}

.phone h3 {
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  color: rgba(14, 82, 90, 1);
  padding: 38px 39px;
  padding-top: 0;
}

.phone input {
  height: 60px;
  width: 95%;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(14, 82, 90, 1);
  border-radius: 8px;
  padding: 22px;
  font-size: 14px;
  outline: none;
}

.phone input::placeholder {
  color: rgba(14, 82, 90, 1);
}

.phone button {
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