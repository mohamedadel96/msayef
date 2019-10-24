<template>
  <div class="container">
    <div class="row wallet">
      <h1>{{$t("host.App.wallet.title")}}</h1>
      <!-- <div class="col-sm-3 col-sm-push-8  part dashboard"> -->
      <div v-if="wallet" class="col-sm-3 part dashboard">
        <div>
          <h3>{{$t("host.App.wallet.dashboard.title")}}</h3>
        </div>
        <div>
          <p>{{$t("host.App.wallet.dashboard.total")}}</p>
          <p class="price total">{{Number(wallet.pending) + Number(wallet.approved)}} {{$t("host.globals.curency")}}</p>
        </div>
        <div>
          <p>{{$t("host.App.wallet.dashboard.pending")}}</p>
          <p class="price pending">{{wallet.pending}} {{$t("host.globals.curency")}}</p>
        </div>
        <div>
          <p>{{$t("host.App.wallet.dashboard.approved")}}</p>
          <p class="price approved">{{wallet.approved}} {{$t("host.globals.curency")}}</p>
        </div>
        <withdraw-money v-if="showWithdrowMoney" @close="showWithdrowMoney = false"></withdraw-money>
        <button @click="showWithdrowMoney = true">{{$t("host.App.wallet.dashboard.button")}}</button>
      </div>

      <!-- TRANSACTION SECTION IS RIGHT HEREE  <<<<<<<<<<< 💰💰💰 -->

      <!-- <div class="col-sm-7 col-sm-pull-4 col-lg-offset-1 part transaction"> -->
      <div v-if="transaction" class="col-sm-7 col-sm-offset-1 part transaction">
        <div>
          <h3>{{$t("host.App.wallet.transaction.title")}}</h3>
        </div>
        <div v-for="(doc,i) in transaction.revenue" :key="i">
          <span class="price">+{{doc.amount}} {{$t("host.globals.curency")}}</span>
          <span class="paymentMethod">{{doc.status}} {{$t("host.App.wallet.transaction.cash")}}</span>
          <p class="note">{{doc.notes}}</p>
        </div>
        <div v-for="(doc,i) in transaction.withdraw" :key="'1' + i">
          <span class="price rd">-{{doc.amount}} {{$t("host.globals.curency")}}</span>
          <span class="paymentMethod">{{doc.status}} {{$t("host.App.wallet.transaction.vodafon")}}</span>
          <p class="note">{{doc.notes}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WithdrawMoney from "../Plugins_Components/Withdraw_Money";
export default {
  components: {
    WithdrawMoney
  },
  data() {
    return {
      showWithdrowMoney: false
    };
  },
  computed: {
    wallet() {
      return this.$store.getters.get_wallet;
    },
    transaction() {
      return this.$store.getters.get_transaction;
    }
  },
  mounted() {
    this.$store.dispatch("GET_WALLET");
    this.$store.dispatch("GET_TRANSACTION");
  }
};
</script>

<style scoped>
.rd{
  color: red !important;
}
.wallet h1 {
  text-align: center;
  margin: 45px;
}

.part {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
}

.dashboard {
  text-align: center;
}

.dashboard div {
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.dashboard div:last-child {
  border-bottom: none !important;
}

.dashboard h3,
.transaction h3 {
  padding: 15px 0;
  margin: 0;
}

.dashboard p {
  color: #9298b1;
  font-weight: 100;
  font-size: 16px;
}

.dashboard .price {
  font-size: 24px;
  font-weight: bolder;
}

.dashboard button {
  height: 60px;
  background-color: #085fbc;
  border-radius: 8px;
  margin: 0 auto;
  display: block;
  width: 95%;
  border: none;
  color: #fff;
}

/* TRANSACTION PART IS HERE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 💵💵 */

.transaction div {
  padding: 30px 20px;
  border-bottom: 1px solid #eee;
}

.transaction div:first-child {
  padding: 20px;
}

.transaction div:last-child {
  /* padding: 20px; */
  border: none;
}

.transaction div span {
  font-size: 18px;
  display: inline-block;
  margin-bottom: 10px;
  /* font-weight: 700; */
}

.transaction div .price {
  color: #15b721;
  width: 72%;
}

.transaction div .paymentMethod {
  width: 25%;
  text-align: right;
  color: #0e525a;
}

.transaction div .note {
  color: #9298b1;
  margin: 0;
}
</style>