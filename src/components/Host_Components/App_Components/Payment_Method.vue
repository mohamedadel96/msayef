<template>
  <div class="container">
    <h3 class="text-center">{{$t('host.popup.paymentMethod')}}</h3>
    <div class="row">
      <div class="col-sm-12 paymentMethod">
        <div class="paymentContent">
          <h3>{{$t('host.popup.PMsubTitle')}}</h3>
          <div class="paymentInfo" v-for="(method, i) in payment_methods" :key="i">
            <p>{{$i18n.locale === "en" ? method.bank_provider.name : method.bank_provider.name_ar}} ({{method.account_number}})</p>
            <!-- <a href>delete</a> -->
          </div>
          <create-payment-method @closeCPM="showCPM = false" v-if="showCPM"></create-payment-method>
          <button @click="showCPM = true">{{$t('host.popup.PMbtn')}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const CreatePaymentMethod = () =>
  import("../Plugins_Components/Create_Payment_Method");
export default {
  components: {
    CreatePaymentMethod
  },
  data() {
    return {
      showCPM: false
    };
  },
  computed: {
    payment_methods() {
      return this.$store.getters.payment_methods;
    }
  },
  mounted() {
    this.$store.dispatch("PAYMENTMETHODS");
  }
};
</script>

<style scoped>
.paymentMethod .paymentContent {
  padding: 35px;
  background-color: #fff;
  box-shadow: 0px 3px 6px 0px #9298b1;
  border-radius: 5px;
  max-width: 890px;
  margin: 0 auto;
  margin-top: 50px;
  min-height: 436px;
  position: relative;
}

.paymentMethod .paymentContent h3 {
  font-size: 18px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
}

.paymentMethod .paymentContent .paymentInfo {
  margin-top: 24px;
}

.paymentMethod .paymentContent p {
  font-size: 14px;
  font-weight: 500;
  color: rgba(8, 95, 188, 1);
  margin: 0;
  display: inline-block;
}

.paymentMethod .paymentContent a {
  font-size: 14px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
  float: right;
}

/* checkBOX toggle style */

.paymentMethod .paymentContent button {
  height: 60px;
  background-color: #085fbc;
  border-radius: 8px;
  width: 90%;
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  /* margin: 26px auto;
    margin-bottom: 0; */
  outline: none;
  position: absolute;
  left: 35px;
  bottom: 35px;
}
</style>