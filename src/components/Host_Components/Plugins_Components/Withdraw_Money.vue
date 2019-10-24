<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="PaymentMethods">
          <div class="modal-header">
            <i @click="$emit('close')" class="fa fa-times"></i>
          </div>
          <form @submit.prevent="submit">
            <h3>{{$t('host.popup.paymentMethod')}}</h3>
            <select @input="handleSelect($event)">
              <option selected>{{$t('host.popup.optionDefault')}}</option>
              <option
                v-for="(method, i) in payment_methods"
                :key="i"
                :value="method.id"
              >{{$i18n.locale === "en" ? method.bank_provider.name : method.bank_provider.name_ar}} ({{method.account_number}})</option>
            </select>
            <input v-model="req.amount" type="number" :placeholder="$t('host.AuthPages.amount')">
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
        amount: null,
        payment_method_id: null
      }
    };
  },
  methods: {
    handleSelect(e) {
      this.req.payment_method_id = e.target.value;
    },
    submit() {
      this.$store.dispatch("WITHDRAW", this.req);
      this.$emit('close')
    }
  },
  computed: {
    payment_methods() {
      return this.$store.getters.payment_methods;
    }
  },
  created() {
    this.req.payment_method_id = null;
    this.$store.dispatch("PAYMENTMETHODS");
  }
};
</script>

<style scoped>
.PaymentMethods {
  max-width: 500px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(146, 152, 177, 0.2);
  padding: 33px;
}

.PaymentMethods h3 {
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
}

.PaymentMethods input,
select {
  height: 60px;
  width: 95%;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(146, 152, 177, 1);
  border-radius: 8px;
  padding-left: 10px;
  margin-top: 15px;
  outline: none;
  font-size: 14px;
}

.PaymentMethods button {
  height: 60px;
  width: 95%;
  background-color: rgba(8, 95, 188, 1);
  border-radius: 8px;
  color: #fff;
  margin-top: 15px;
  border: none;
  outline: none;
}
</style>