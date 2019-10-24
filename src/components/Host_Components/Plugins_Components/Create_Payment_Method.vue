<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="Payment">
          <div class="modal-header">
            <i @click="$emit('closeCPM')" class="fa fa-times"></i>
          </div>
          <form @submit.prevent="saveOption">
            <h3>{{$t('host.popup.CreatePaymentMethod')}}</h3>

            <label for="method1">
              <input @change="getData('e_wallet')" type="radio" name="type" id="method1">
              <p>{{$t('host.popup.wallet')}}</p>
            </label>

            <label for="method2">
              <input @change="getData('bank')" type="radio" name="type" id="method2">
              <p>{{$t('host.popup.bankAccount')}}</p>
            </label>

            <input
              v-model="req.account_number"
              name="accountNum"
              type="number"
              placeholder="Acount number"
            >
            <select
              @change="handleSelect($event)"
              :disabled="paymentOptions === null ? true : false"
            >
              <option selected :value="null">{{$t('host.popup.optionDefault')}}</option>
              <option
                v-for="(option,i) in paymentOptions"
                :key="i"
                :value="option.id"
              >{{$i18n.locale === "en"? option.name : option.name_ar}}</option>
            </select>

            <button type="submit">{{$t('host.AuthPages.done')}}</button>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      req: {
        account_number: null,
        bank_provider_id: null
      }
    };
  },
  computed: {
    paymentOptions() {
      return this.$store.getters.payment_options;
    }
  },
  methods: {
    getData(type) {
      this.req.bank_provider_id = null;
      this.$store.dispatch("PAYMENTOPTIONS", type);
    },
    handleSelect(e) {
      this.req.bank_provider_id = e.target.value;
    },
    saveOption() {
      this.$store.dispatch('ADDPAYMENTMETHOD', this.req)
      this.$emit('closeCPM')
    }
  },
  created() {
    this.$store.commit("Dlt_Payment_Options");
  }
};
</script>

<style scoped>
select[disabled] {
  background: #ddd;
  cursor: not-allowed;
}

.Payment {
  max-width: 700px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(146, 152, 177, 0.2);
  padding: 33px;
}

.Payment h3 {
  font-size: 18px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
  margin-bottom: 30px;
}

.Payment p {
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  margin-left: 10px;
}
.Payment label {
  width: 45%;
}
.Payment label:nth-of-type(2) {
  margin-left: 46px;
}

.Payment input,
select {
  height: 60px;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(146, 152, 177, 1);
  border-radius: 8px;
  padding-left: 10px;
  margin-top: 20px;
  outline: none;
  font-size: 14px;
}

.Payment input[type="radio"] {
  height: 1px;
  width: 12px;
  margin-top: 0;
  /* display: none; */
  float: left;
}

.Payment input[name="accountNum"],
select {
  width: 47%;
  margin-right: 30px;
}
select {
  margin-right: 0;
}

.Payment button {
  height: 50px;
  width: 100%;
  background-color: rgba(8, 95, 188, 1);
  border-radius: 8px;
  color: #fff;
  margin-top: 80px;
  border: none;
  outline: none;
}

.Payment input[type="radio"]:not(:checked):after {
  content: "\f111";
  font-family: "Font Awesome 5 Free";
  font-weight: 400;
  width: 50px;
  height: 50px;
  color: rgba(146, 152, 177, 1);
  font-size: 18px;
}

.Payment input[type="radio"]:checked:after {
  content: "\f111";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  width: 50px;
  height: 50px;
  color: #333;
  font-size: 18px;
  color: rgba(21, 183, 33, 1);
}

@media only screen and (max-width: 619px) {
  .Payment input[name="accountNum"],
  select {
    width: 100%;
    margin-right: 0;
  }
  .Payment label:nth-of-type(2) {
    margin-left: 0;
  }
}
@media only screen and (max-width: 361px) {
  .Payment label {
    width: 100%;
  }
  .Payment label:nth-of-type(2) {
    margin-left: 0;
  }
}
</style>