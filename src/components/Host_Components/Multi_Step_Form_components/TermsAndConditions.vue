<template>
  <div class="container" v-if="termsAndCoditions">
    <div class="row">
      <div class="col-sm-6 col-sm-offset-3 TermsAndCondition">
        <h1>{{$t("host.MS_form.terms_conditions.title_1")}}</h1>
        <p>{{$i18n.locale === 'en' ? termsAndCoditions.terms_en :  termsAndCoditions.terms_ar}}</p>
        <p class="alert">{{$t("host.MS_form.terms_conditions.alert")}}</p>
        <button @click="submit">{{$t("host.AuthPages.done")}}</button>
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
        step: "done"
      }
    };
  },
  computed: {
    termsAndCoditions() {
      return this.$store.getters.terms_and_conditions;
    }
  },
  methods: {
    submit() {
      this.$store.dispatch("UPDATE_PROPERTIES", this.req);
    }
  },
  created() {
    this.$store.dispatch("TERMSANDCONDITIONS");
  }
};
</script>

<style scoped>
.TermsAndCondition {
  margin-top: 30px;
  padding: 36px;
  padding-top: 5px;
  background-color: #fff;
  box-shadow: 0px 3px 6px 0px rgba(146, 152, 177, 0.36);
}

.TermsAndCondition h4 {
  color: #0e525a;
}

.TermsAndCondition h1 {
  margin-bottom: 40px;
}

.TermsAndCondition p {
  color: #9298b1;
  font-weight: 300;
}

.TermsAndCondition .part {
  margin: 60px 0;
}

.TermsAndCondition p.alert {
  padding: 0;
  font-weight: 500;
  color: #085fbc;
  font-size: 16px;
}

.TermsAndCondition button {
  display: block;
  width: 100%;
  border: none;
  background-color: #085fbc;
  color: #fff;
  text-align: center;
  height: 60px;
  border-radius: 8px;
  outline: none;
}

.TermsAndCondition button:hover {
  cursor: pointer;
}
</style>