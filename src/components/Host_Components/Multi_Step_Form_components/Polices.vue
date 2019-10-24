<template>
  <div class="container" v-if="policies">
    <div class="row">
      <div class="col-sm-6 col-sm-offset-3 polices">
        <h3>{{$t("host.MS_form.polices.title")}}</h3>

        <form>
          <label class="radio" v-for="(policy,i) in policies" :key="i">
            <i
              :class="[req.refund_id == policy.id ? 'checked' : 'notChecked' ,'icon far fa-circle']"
            ></i>
            <i
              :class="[req.refund_id == policy.id ? 'notChecked gr' : 'checked' ,'icon fas fa-dot-circle']"
            ></i>
            <input type="radio" name="chooseOne" :value="policy.id" v-model="req.refund_id">
            <p>{{$i18n.locale == 'en'? policy.title_en : policy.title_ar}}</p>
            <span>{{$i18n.locale == 'en'? policy.body_en : policy.body_ar}}</span>
          </label>

          <div class="bottom">
            <label class="shortNote">
              <i :class="[req.time_share ? 'checked' : 'notChecked' ,'icon far fa-square']"></i>
              <i :class="[req.time_share ? 'notChecked gr' : 'checked' ,'far fa-check-square']"></i>
              <input type="checkbox" name="lastcheck" v-model="req.time_share">
              <p>{{$t("host.MS_form.polices.checkbox_title")}}</p>
              <span>{{$t("host.MS_form.polices.checkbox_description")}}</span>
            </label>
            <button @click.prevent="update_properties">{{$t("host.AuthPages.continue")}}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      req: {
        property_id: localStorage.getItem("property_id"),
        refund_id: null,
        time_share: false
      }
    };
  },
  methods: {
    update_properties() {
      this.$store.dispatch("UPDATE_PROPERTIES", this.req);
    }
  },
  computed: {
    policies() {
      return this.$store.getters.GetPolicies;
    }
  },
  mounted() {
    this.$store.commit('Update_Steps', 5)
    this.$store.dispatch("GET_POLICIES");
  }
};
</script>

<style scoped>
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 40px;
}

::-webkit-scrollbar {
  width: 8px;
}
/* Handle */
::-webkit-scrollbar-thumb {
   background-color: rgba(146, 152, 177, 1);;
  border-radius: 40px;
}

.gr {
  color: #15b721 !important;
}

.polices {
  margin-top: 50px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0px 3px 6px 0px #9298b1;
  border-radius: 5px;
  height: 668px;
  position: relative;
  padding: 36px;
}

.polices h3 {
  color: rgba(14, 82, 90, 1);
  font-size: 36px;
}

.polices form {
  margin: 36px 0px;
  overflow-y: scroll;
  height: 400px;
}

.polices form label {
  display: block;
  padding: 18px;
  padding-left: 0;
  background: #fff;
  color: #9298b1;
  font-weight: lighter;
  font-size: 24px;
  margin: 10px 0;
  border-bottom: 1px solid #ccc;
}

.polices form label:last-of-type {
  border-bottom: none;
}

.polices form label:hover {
  cursor: pointer;
}

.polices form label p {
  display: inline-block;
  color: #085fbc;
  font-weight: 500;
  font-size: 16px;
}

.polices form label span {
  display: block;
  margin-left: 20px;
  color: #9298b1;
  font-size: 16px;
}

.polices i {
  margin-right: 5px !important;
}
.polices form input,
.polices form label .checked {
  display: none !important;
}

.polices form div {
  position: absolute;
  bottom: 14px;
  width: 94%;
}

.polices form div button {
  height: 60px;
  background-color: #085fbc;
  border-radius: 8px;
  width: 94%;
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  /* margin: 30px auto; */
  margin-bottom: 0;
  outline: none;
}
</style>