<template>
  <div v-if="flatProperty">
    <section class="slider">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="carousel">
              <carousel :items="8" :responsive="responsive">
                <img
                  @click="$emit('changeSlider', img.image_url)"
                  v-for="(img,i) in flatProperty.images"
                  :key="i"
                  :src="img.image_url"
                  alt
                />
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="search-box prop-search">
      <div class="container">
        <br />
        <div class="row">

          <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 custom">
            <div class="form-group">
              <div id="filterDate2">
                <!-- Datepicker as text field -->
                <div class="input-group datepickerContainer" v-if="config_in.enable">
                  <flat-pickr
                    :config="config_in"
                    class="form-control"
                    :placeholder="$t('guest.propirity.checkIn')"
                    v-model="req.check_in"
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
                <div class="input-group datepickerContainer" v-if="config_out.enable">
                  <flat-pickr
                    :config="config_out"
                    class="form-control"
                    :placeholder="$t('guest.propirity.checkOut')"
                    v-model="req.check_out"
                  ></flat-pickr>
                  <div class="input-group-addon">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-12 custom">
            <div class="dropdown">
              <input
                min="1"
                type="number"
                :placeholder="$t('guest.propirity.Guest_Count')"
                class="btn dropdown-toggle drop"
                v-model="req.guest_count"
              />
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-12 custom cost" v-if="flatProperty">
            <span>
              <h3>{{flatProperty.property.nearest_price}} جــ</h3>
              <p>فـي الـلـيـلـه</p>
            </span>
          </div>
          <div class="col-lg-2 col-md-12 col-sm-12 custom">
            <button
              class="btn btn-light search"
              @click="requestToBook"
            >{{$t('guest.propirity.RTB')}}</button>
          </div>
        </div>
      </div>
    </div>

    <confirmation-popup @close="confirmationPopup = false" v-if="confirmationPopup"></confirmation-popup>
  </div>
</template>

<script>
let carousel = () => import("vue-owl-carousel");
let ConfirmationPopup = () =>
  import("../Plugins_Components/Confirmation_popup");
export default {
  components: { carousel, ConfirmationPopup },
    created() {
    if (this.$i18n.locale === "ar") {
      import("../../../assets/Style/Propirty-rtl.css");
    }
    },
  data() {
    return {
      responsive: {
        0: {
          margin: 5,
          items: 3
        },
        600: {
          margin: 5,
          items: 4
        },
        1000: {
          margin: 5,
          items: 7
        }
      },
      confirmationPopup: false,
      config_in: {
        enable: null,
        minDate: new Date().setDate(new Date().getDate() + 2)
      },
      config_out: {
        enable: null,
        minDate: new Date().setDate(new Date().getDate() + 2)
      },
      req: {
        check_in: null,
        check_out: null,
        guest_count: Number
      }
    };
  },
  computed: {
    flatProperty() {
      return this.$store.getters.Get_Flat_Property;
    },
    AvailableDate() {
      return this.$store.getters.Get_Available_Date;
    }
  },
  watch: {
    AvailableDate: {
      handler: function(val) {
        if (val) {
          let daysArr = [];
          val.map(date => {
            daysArr.push(date.day);
          });
          this.config_in.enable = daysArr;
          this.config_out.enable = daysArr;
        }
      },
      immediate: true
    },
    "req.guest_count": function(val) {
      if (val < 1) {
        this.req.guest_count = 1;
      }
    },
    "req.check_in": function(val) {
      if (val) {
        let nextDay = new Date(val);
        let min = () => {
          if (
            this.flatProperty.property.minimum === null ||
            this.flatProperty.property.minimum === 0
          ) {
            return 1;
          } else {
            return this.flatProperty.property.minimum;
          }
        };
        nextDay.setDate(new Date(val).getDate() + min());
        this.config_out.minDate = nextDay;
      }
    }
  },
  methods: {
    requestToBook() {
      window.scrollTo(0, 0);
      let obj = {
        id: this.flatProperty.property.id,
        data: {
          calculate_price: this.req
        }
      };

      this.$store
        .dispatch("REQUESTTOBOOK", obj)
        .then(res => {
          this.confirmationPopup = true;
        })
        .catch(error => {
          alert("check data");
        });
    }
  }
};
</script>

<style scoped>
.carousel {
  direction: ltr;
}

.search-box {
  background-color: #fff;
  position: fixed;
  z-index: 2;
  width: 100%;
  bottom: 0;
}

.guest {
  width: 181px;
  height: 32px;
  padding-left: 5px;
  border-radius: 5px;
  border: 1px solid rgba(146, 152, 177, 1);
}

.datepickerContainer {
  height: 40px;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(146, 152, 177, 1);
  border-radius: 10px;
  padding: 15px 20px;
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

.drop,
.search {
  outline: none;
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  height: 65px;
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

.owl-stage {
  margin-top: 10px;
  display: block;
  margin: 0 auto;
}

.cost {
  text-align: center;
  padding: 5px 0;
}
.cost span h3 {
  margin-top: 10px;
  margin-bottom: 0px;
  color: rgba(8, 95, 188, 1);
  font-size: 18px;
  font-weight: 800;
}

.cost span p {
  font-size: 16px;
  color: rgba(146, 152, 177, 1);
  font-weight: 400;
}

/*ٍSlider*/
img {
  width: 134px !important;
  height: 124px;
  /* padding-left: 10px;
  margin: 0 10px 20px; */
}

/* @media (max-width: 575.98px) {}

@media (max-width: 767.98px) {}

@media (max-width: 991.98px) {} */

@media (max-width: 1199.98px) {
  .search-box {
    background-color: #fff;
    position: static;
    z-index: 2;
    width: 100%;
    bottom: 0;
  }
}
</style>
