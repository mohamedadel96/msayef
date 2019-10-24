<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-sm-offset-3 Amenities">
        <h3>{{$t("host.MS_form.amenities.title")}}</h3>

        <form>
          <div class="cont">
            <label :class="[req.wifi? 'checked': '']">
              {{$t("host.MS_form.amenities.form.checkbox_1")}}
              <input type="checkbox" v-model="req.wifi">
              <i :class="[req.wifi? 'checked': '','icon far fa-circle']"></i>
              <i :class="[req.wifi? '': 'checked','icon fas fa-check']"></i>
            </label>

            <label :class="[req.sea_view? 'checked': '']">
              {{$t("host.MS_form.amenities.form.checkbox_2")}}
              <input
                type="checkbox"
                v-model="req.sea_view"
              >
              <i :class="[req.sea_view? 'checked': '','icon far fa-circle']"></i>
              <i :class="[req.sea_view? '': 'checked','icon fas fa-check']"></i>
            </label>

            <label :class="[req.garden? 'checked': '']">
              {{$t("host.MS_form.amenities.form.checkbox_3")}}
              <input
                type="checkbox"
                v-model="req.garden"
              >
              <i :class="[req.garden? 'checked': '','icon far fa-circle']"></i>
              <i :class="[req.garden? '': 'checked','icon fas fa-check']"></i>
            </label>

            <label :class="[req.swimming_pool? 'checked': '']">
              {{$t("host.MS_form.amenities.form.checkbox_4")}}
              <input
                type="checkbox"
                v-model="req.swimming_pool"
              >
              <i :class="[req.swimming_pool? 'checked': '','icon far fa-circle']"></i>
              <i :class="[req.swimming_pool? '': 'checked','icon fas fa-check']"></i>
            </label>

            <label :class="[req.tv? 'checked': '']">
              {{$t("host.MS_form.amenities.form.checkbox_5")}}
              <input type="checkbox" v-model="req.tv">
              <i :class="[req.tv? 'checked': '','icon far fa-circle']"></i>
              <i :class="[req.tv? '': 'checked','icon fas fa-check']"></i>
            </label>

            <label :class="[req.air_conditioning? 'checked': '']">
              {{$t("host.MS_form.amenities.form.checkbox_6")}}
              <input
                type="checkbox"
                v-model="req.air_conditioning"
              >
              <i :class="[req.air_conditioning? 'checked': '','icon far fa-circle']"></i>
              <i :class="[req.air_conditioning? '': 'checked','icon fas fa-check']"></i>
            </label>

            <label :class="[req.heater? 'checked': '']">
              {{$t("host.MS_form.amenities.form.checkbox_7")}}
              <input
                type="checkbox"
                v-model="req.heater"
              >
              <i :class="[req.heater? 'checked': '','icon far fa-circle']"></i>
              <i :class="[req.heater? '': 'checked','icon fas fa-check']"></i>
            </label>

            <label :class="[req.balcony? 'checked': '']">
              {{$t("host.MS_form.amenities.form.checkbox_8")}}
              <input
                type="checkbox"
                v-model="req.balcony"
              >
              <i :class="[req.balcony? 'checked': '','icon far fa-circle']"></i>
              <i :class="[req.balcony? '': 'checked','icon fas fa-check']"></i>
            </label>

            <label :class="[req.hairdryer? 'checked': '']">
              {{$t("host.MS_form.amenities.form.checkbox_9")}}
              <input
                type="checkbox"
                v-model="req.hairdryer"
              >
              <i :class="[req.hairdryer? 'checked': '','icon far fa-circle']"></i>
              <i :class="[req.hairdryer? '': 'checked','icon fas fa-check']"></i>
            </label>

            <label :class="[req.blackout_curtains? 'checked': '']">
              {{$t("host.MS_form.amenities.form.checkbox_10")}}
              <input
                type="checkbox"
                v-model="req.blackout_curtains"
              >
              <i :class="[req.blackout_curtains? 'checked': '','icon far fa-circle']"></i>
              <i :class="[req.blackout_curtains? '': 'checked','icon fas fa-check']"></i>
            </label>

            <label :class="[req.ironing_board? 'checked': '']">
              {{$t("host.MS_form.amenities.form.checkbox_11")}}
              <input
                type="checkbox"
                v-model="req.ironing_board"
              >
              <i :class="[req.ironing_board? 'checked': '','icon far fa-circle']"></i>
              <i :class="[req.ironing_board? '': 'checked','icon fas fa-check']"></i>
            </label>
          </div>
          <button type="submit" @click.prevent="update_amenities">{{$t("host.AuthPages.continue")}}</button>
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
        wifi: false,
        sea_view: false,
        garden: false,
        swimming_pool: false,
        tv: false,
        air_conditioning: false,
        heater: false,
        balcony: false,
        hairdryer: false,
        blackout_curtains: false,
        ironing_board: false
      }
    };
  },
  methods: {
    update_amenities() {
      this.$store.dispatch("UPDATE_AMENITIES", this.req);
    }
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
  background-color: rgba(146, 152, 177, 1);
  border-radius: 40px;
}
.cont {
  overflow-y: scroll;
  height: 400px;
}
.checked {
  background: #15b721 !important;
  color: #fff !important;
}
.Amenities {
  margin-top: 50px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0px 3px 6px 0px #9298b1;
  border-radius: 5px;
}

.Amenities form {
  margin: 36px 0px;
}

.Amenities form label {
  display: block;
  padding: 18px;
  background: #fff;
  color: #9298b1;
  font-weight: lighter;
  position: relative;
  border-radius: 5px;
  box-shadow: 0px 1px 1px 0px #cec0c0;
  height: 60px;
  font-size: 18px;
  margin: 10px 0;
}

.Amenities form label:hover {
  cursor: pointer;
}

.Amenities form label i {
  position: absolute;
  right: 10px;
  top: 20px;
}

.Amenities form input,
.Amenities form label .checked {
  display: none;
}

/* body .Amenities form label .checked{
    display:none;
} */

.Amenities form button {
  height: 60px;
  background-color: #085fbc;
  border-radius: 8px;
  width: 100%;
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  margin: 30px auto;
  margin-bottom: 0;
  outline: none;
}
</style>