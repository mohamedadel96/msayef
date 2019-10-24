<template>
  <div class="container" v-if="termsAndCoditions">
    <div class="row">
      <div class="col-sm-8 col-sm-offset-2 TermsAndCondition">
        <h1>{{$t("host.MS_form.terms_conditions.title_1")}}</h1>
        <p>{{$i18n.locale === 'en' ? termsAndCoditions.terms_en :  termsAndCoditions.terms_ar}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    termsAndCoditions() {
      return this.$store.getters.terms_and_conditions;
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

.TermsAndCondition h1 {
  margin-bottom: 40px;
}

.TermsAndCondition p {
  color: #9298b1;
  font-weight: 300;
}
</style>