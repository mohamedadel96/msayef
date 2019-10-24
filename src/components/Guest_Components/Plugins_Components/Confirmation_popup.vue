<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="payment-one">
          <div class="row">
            <div class="modal-header" v-if="bookingData">
              <i @click="$emit('close')" class="fa fa-times"></i>
            </div>
            <div class="container-fluid paymentSec">
              <div class="col-lg-5 col-md-5 col-sm-6 col-xs-6">
                <ul class="pay">
                  <li>{{$t('guest.propirity.checkIn')}}</li>
                  <li>{{bookingData.check_in}}</li>
                </ul>
              </div>

              <div class="col-md-1 hidden-sm hidden-xs">
                <i class="fas fa-minus"></i>
              </div>

              <div class="col-lg-6 col-md-5 col-sm-6 col-xs-6">
                <ul class="pay pay-2">
                  <li>{{$t('guest.propirity.checkOut')}}</li>
                  <li>{{bookingData.check_out}}</li>
                </ul>
              </div>

              <div class="col-lg-12">
                <hr />
              </div>
            </div>
          </div>
          <div class="row">
            <div class>
              <div class="col-lg-12 col-md-12 col-sm-12 total-pay">
                <div>
                  <h6>{{$t('guest.home.search_sec.list')}}</h6>
                  <span>{{bookingData.guest_count}}</span>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 total-pay">
                <div>
                  <h6>{{$t('host.popup.youwillpay')}}</h6>
                  <span>{{bookingData.will_pay}} {{$t('host.globals.curency')}}</span>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 total-pay">
                <div>
                  <h6>{{$t('host.popup.deposit')}}</h6>
                  <span :class="newBookingData !== null ? 'del': ''">{{bookingData.deposit}} {{$t('host.globals.curency')}}</span>
                  <span v-show="newBookingData">{{newBookingData ? newBookingData.deposit : ' '}} {{$t('host.globals.curency')}}</span>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 total-pay">
                <div>
                  <h6>{{$t("host.App.wallet.dashboard.total")}}</h6>
                  <span :class="newBookingData !== null ? 'del': ''">{{bookingData.total}} {{$t('host.globals.curency')}}</span>
                  <span v-show="newBookingData">{{newBookingData ? newBookingData.total : ' '}} {{$t('host.globals.curency')}}</span>
                </div>
              </div>
            </div>
          </div>

          <section class="payment">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftSec">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="promo">
                      <h2>{{$t('host.popup.promo_code')}}</h2>
                      <input v-model="promoCode" type="text" />
                      <button
                        :disabled="promoCode === null ? true : false"
                        @click="checkPromoCode"
                      >{{$t('host.popup.check')}}</button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div class="method">
                    <h2>{{$t('host.popup.payment_info')}}</h2>
                    <label>
                      <input
                        v-model="req.name"
                        :placeholder="$t('host.AuthPages.username')"
                        type="text"
                      />
                    </label>
                    <label>
                      <input v-model="req.phone" :placeholder="$t('host.AuthPages.PN')" type="text" />
                    </label>
                    <label>
                      <input
                        v-model="req.email"
                        :placeholder="$t('host.AuthPages.email')"
                        type="Email"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12 col-sm-12 pay-botton">
                    <button @click.prevent="book" class="btn-block">{{$t('host.AuthPages.book')}}</button>
                    <router-link to="/guest_terms_and_conditions" target="_blank">
                      <p class="text-center">{{$t('host.AuthPages.tail')}}</p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      promoCode: null,
      newBookingData: null,
      req: {
        name: null,
        phone: null,
        email: null
      }
    };
  },
  computed: {
    bookingData() {
      return this.$store.getters.Get_Booking_Data;
    }
  },
  methods: {
    book() {
      this.req.start_date = this.bookingData.check_in;
      this.req.end_date = this.bookingData.check_out;
      this.req.guest_count = this.bookingData.guest_count;

      let req = {
        id: this.bookingData.property_id,
        data: {
          promo_code: this.promoCode,
          reservation: this.req
        }
      };

      this.$store
        .dispatch("RESERVATION", req)
        .then(res => {
          let paymentData = JSON.stringify(res.data);
          this.$router.push(`/fawry/${paymentData}`);
        })
        .catch(error => {
          console.log(error);
        });
    },
    checkPromoCode() {
      let req = {
        id: this.bookingData.property_id,
        data: {
          calculate_price: {
            check_in: this.bookingData.check_in,
            check_out: this.bookingData.check_out
          },
          promo_code: this.promoCode
        }
      };
      this.$store.dispatch("CHECKPROMOCODE", req).then(res => {
        this.$set(this , "newBookingData", res.data)
      })
    }
  },
  created() {
    if (this.$i18n.locale === "ar") {
      import("../../../assets/Style/Confirm-Rtl.css");
    }
  }
};
</script>

<style>
.del{
  text-decoration: line-through;
  color: red !important
}

.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 3000px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: block;
}
/* Start date pickr */
.payment-one {
  max-width: 670px;
  background-color: rgba(197, 200, 209, 0.85);
  border-radius: 10px;
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 5%;
  margin: 0 auto;
}

.payment-one h1 {
  font-size: 18px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
  margin: 0;
  padding-top: 18px;
  padding-bottom: 18px;
  font-weight: 500;
}

.payment-one .row {
  margin-left: 0;
  margin-right: 0;
}

.datepickerContainer {
  height: 60px;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(146, 152, 177, 1);
  border-radius: 10px;
  padding: 15px 20px;
  font-weight: 500;
}

.datepickerContainer * {
  border: none;
}

.datepickerContainer input {
  height: 100%;
  border-radius: 10px;
  box-shadow: none;
  font-size: 14px;
  font-weight: 500;
  color: rgba(146, 152, 177, 1);
  font-family: Rubik;
  box-shadow: none;
}

.datepickerContainer input::placeholder {
  color: rgba(8, 95, 188, 1);
}

.input-group-addon {
  background-color: #fff;
  border-radius: 10px;
}

.input-group-addon i {
  color: rgba(146, 152, 177, 1);
  font-size: 19px;
}

.form-control {
  padding: 0;
}

.form-control:focus {
  box-shadow: none;
}

/* .dropdown{
    margin-right: 30px;
} */

/*------------------------------------*/
.btn-primary.active.focus,
.btn-primary.active:focus,
.btn-primary.active:hover,
.btn-primary:active.focus,
.btn-primary:active:focus,
.btn-primary:active:hover,
.btn-primary:active,
.open > .dropdown-toggle.btn-primary.focus,
.open > .dropdown-toggle.btn-primary:focus,
.open > .dropdown-toggle.btn-primary:hover {
  color: #0882d4;
  background-color: #fff;
  border-color: #9298b1;
  outline: none;
  box-shadow: none;
}

/*------------------------------------*/

.datepicker-dropdown {
  font-size: 14px;
  font-weight: 500;
  color: rgba(146, 152, 177, 1);
  font-family: Rubik;
}

.custom {
  padding: 0 6px;
}

button.drop,
button.search {
  outline: none;
  color: #2e6da4;
  background-color: #337ab7;
  border-color: #2e6da4;
  height: 60px;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(146, 152, 177, 1);
  border-radius: 8px;
  width: 100%;
  height: 63px;
  font-family: "Rubik";
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
}

.btn-primary:hover {
  background-color: #fff;
  color: #323232;
}
/* End date pickr */

/* start payment pay */
.paymentSec {
  padding: 0 20px;
  padding-top: 30px;
}

.payment-one .paymentSec .pay {
  list-style: none;
  padding-left: 0px;
  margin-bottom: 0;
  color: rgba(14, 82, 90, 1);
}

.paymentSec .pay-2 {
  float: right;
  /* margin-right: 30px; */
}

.payment-one .paymentSec .pay li {
  display: inline;
  font-size: 16px;
  color: rgba(14, 82, 90, 1);
  /* padding-left: 10px; */
}

.paymentSec hr {
  border-top: 1 px solid #ddd;
}

.paymentSec ul li {
  display: inline-block;
  margin-right: 10px;
}

.payment-one .pay li:last-child {
  font-size: 16px;
  color: rgba(8, 95, 188, 1);
  margin-right: 0px;
}

.payment-one i {
  font-size: 16px;
  color: rgba(14, 82, 90, 1);
}

/* End payment pay */

/* Start total-pay */
.payment-one .total-pay div {
  margin-bottom: 15px;
}

.payment-one .total-pay h6 {
  padding-left: 25px;
  font-size: 16px;
  color: rgba(14, 82, 90, 1);
  display: inline;
}

.payment-one .total-pay span {
  font-size: 16px;
  color: rgba(8, 95, 188, 1);
  float: right;
  margin-right: 30px;
}

.payment-one .total-pay span:last-child {
  font-weight: 500;
}

.payment {
  max-width: 670px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 3px 4px 0px rgba(32, 37, 34, 0.15);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin: 0 auto;
  border-bottom: 2px solid;
  border-bottom-color: rgba(197, 200, 209, 1);
}

.payment h3 {
  margin: 0;
  padding-top: 20px;
  padding-bottom: 30px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
  font-weight: 800;
}

.payment .leftSec {
  border-right: 1px solid #eee;
}

.methods-one label {
  cursor: pointer;
  margin-bottom: 15px;
  display: block;
  padding-left: 40px;
}

.methods-one label input[type="checkbox"],
input[type="radio"] {
  background-color: #337ab7;
}

input[type="file"]:focus,
input[type="checkbox"]:focus,
input[type="radio"]:focus {
  background-color: #f00;
}

.methods-one p {
  display: inline-block;
}

.methods-one img {
  width: 15%;
  float: right;
}

.method label {
  background-color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid rgba(204, 204, 204, 1);
  padding-top: 5px;
  margin: 0px 15px 15px 0;
  width: 90%;
}

.method label input {
  border: 0;
  font-size: 16px;
  color: rgba(14, 82, 90, 1);
  outline: none;
  font-weight: 500;
}

.method label input::placeholder {
  color: rgba(14, 82, 90, 1);
}

.method h6 {
  margin-bottom: 0;
  font-size: 10px;
  color: rgba(146, 152, 177, 1);
}

input[type="radio"] {
  display: none;
}

.leftSec .methods-one label {
  padding-left: 60px;
}

.leftSec .methods-one label:before {
  content: "\f111";
  position: absolute;
  font-family: "Font Awesome 5 Free";
  font-weight: 400;
  left: 47px;
  color: rgba(109, 109, 109, 1);
  font-size: 18px;
}
input[type="radio"]:checked + label:before {
  content: "\f192";
  position: absolute;
  font-family: "Font Awesome 5 Free";
  font-weight: 100;
  left: 47px;
  color: rgba(0, 137, 205, 1);
  font-size: 18px;
}

.pay-botton .btn-block {
  margin-top: 40px;
  background-color: rgba(172, 172, 172, 1);
  border-radius: 8px;
  height: 60px;
  border: none;
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  width: 90%;
  margin: 0 auto;
  margin-top: 25px;
}

.pay-botton p {
  font-size: 16px;
  padding-top: 15px;
  color: rgba(8, 95, 188, 1);
}

.method h2,
.promo h2 {
  font-size: 18px;
  font-weight: 800;
  color: rgba(14, 82, 90, 1);
  margin-bottom: 28px;
}

.method label {
  background-color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid rgba(204, 204, 204, 1);
  padding-top: 5px;
  margin: 0px 15px 15px 0;
  width: 90%;
}

.method label input {
  border: 0;
  font-size: 16px;
  color: rgba(14, 82, 90, 1);
  outline: none;
  font-weight: 500;
}

.method label input::placeholder {
  color: rgba(14, 82, 90, 1);
}

.method h6 {
  margin-bottom: 0;
  font-size: 10px;
  color: rgba(146, 152, 177, 1);
}

.promo input {
  display: block;
  margin: 0 auto;
  height: 50px;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(146, 152, 177, 1);
  border-radius: 8px;
  margin-bottom: 8px;
  font-family: "Rubik";
  font-size: 14px;
  font-weight: 500;
  color: rgba(8, 95, 188, 1);
  width: 98%;
  outline: none;
  padding: 5px 22px;
}

.promo button {
  display: block;
  background-color: rgba(8, 95, 188, 1);
  border-radius: 8px;
  width: 98%;
  margin: 0 auto;
  border: none;
  color: #fff;
  height: 50px;
  font-family: "Rubik";
  font-size: 16px;
}

/* End total-pay */
</style>