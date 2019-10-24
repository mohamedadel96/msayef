<template>
  <div class="search-box">
    <div class="container">
      <br />
      <div class="row">
        <div class="col-lg-2 col-md-6 col-sm-12 custom">
          <select class="btn dropdown-toggle drop area" v-model="req.city_id">
            <option value disabled>{{$t("guest.home.search_sec.btn_1")}}</option>
            <option
              v-for="(city,i) in cities"
              :key="i"
              :value="city.id"
            >{{$i18n.locale == 'en'? city.name_en : city.name_ar}}</option>
          </select>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 custom">
          <div class="form-group">
            <div id="filterDate2">
              <!-- Datepicker as text field -->
              <div class="input-group datepickerContainer">
                <flat-pickr
                  :config="config_in"
                  class="form-control"
                  :placeholder="$t('guest.propirity.checkIn')"
                  v-model="req.start_in"
                ></flat-pickr>
                <div class="input-group-addon">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 custom">
          <div class="form-group">
            <div id="filterDate2">
              <!-- Datepicker as text field -->
              <div class="input-group datepickerContainer">
                <flat-pickr
                  :config="config_out"
                  class="form-control"
                  :placeholder="$t('guest.propirity.checkOut')"
                  v-model="req.end_in"
                ></flat-pickr>
                <div class="input-group-addon">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 col-sm-12 custom">
          <!-- <select disabled class="btn dropdown-toggle drop area" v-model="req.city_id">
            <option value disabled>{{$t("guest.home.search_sec.list")}}</option>
            <option></option>
          </select> -->
          <input class="btn dropdown-toggle drop area" :placeholder="$t('guest.home.search_sec.list')" type="number" v-model="req.guest">
        </div>
        <div class="col-lg-2 col-md-12 col-sm-12 custom">
          <button class="btn gg search" @click="search">{{$t("guest.home.search_sec.btn_2")}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      req: {
        city_id: "",
        start_in: null,
        end_in: null,
        guest: null,
        per_page: 12,
        page: 1
      },
      config_in: {
        minDate: new Date()
      },
      config_out: {
        minDate: new Date()
      }
    };
  },
  computed: {
    cities() {
      return this.$store.getters.GetCities;
    }
  },
  watch: {
    "req.start_in": function(val) {
      if (val) {
        let nextDay = new Date(val);
        nextDay.setDate(new Date(val).getDate() + 2);
        this.config_out.minDate = nextDay;
      }
    }
  },
  methods: {
    search() {
      this.$store.dispatch("FLATSEARCH", this.req);
    }
  },
  created() {
    this.$store.dispatch("GET_CITIES");
  }
};
</script>

<style scoped>
.datepickerContainer {
  height: 60px;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(146, 152, 177, 1);
  border-radius: 8px;
  padding: 10px 20px;
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

.input-group-addon {
  background-color: #fff;
  border-radius: 10px;
}
.input-group-addon:last-child{
  border:none;
}

.input-group-addon i {
  color: rgba(146, 152, 177, 1);
  font-size: 19px;
}
.form-control {
  padding: 0;
  background: none !important;
}

.form-control:focus {
  box-shadow: none;
}
.datepicker-dropdown > div {
  display: block;
}

.custom {
  padding-right: 5px;
  padding-left: 5px;
}

.custom .dropdown button {
  padding-top: 18px;
}

.custom .dropdown button i {
  float: right;
}

.custom .dropdown button p {
  float: left;
}

.drop,
.search {
  outline: none;
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  height: 60px;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(146, 152, 177, 1);
  border-radius: 8px;
  width: 100%;
  font-family: "Rubik";
  font-size: 16px;
  font-weight: 500;
  color: rgba(146, 152, 177, 1);
  margin-bottom: 10px;
}

.search,
.search:hover,
.search:focus {
  background-color: rgba(8, 95, 188, 1);
  color: #fff;
  font-weight: 500;
  border: none;
}

.btn-primary.active,
.btn-primary.focus,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:hover,
.open > .dropdown-toggle.btn-primary {
  background-color: rgba(255, 255, 255, 1);
  color: rgba(146, 152, 177, 1);
  border: 2px solid rgba(146, 152, 177, 1);
}

.gg {
  background-color: rgba(255, 255, 255, 1);
  color: rgba(146, 152, 177, 1);
  border: 2px solid rgba(146, 152, 177, 1);
}
</style>