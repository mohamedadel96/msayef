<template>
  <div class="container" v-if="cities">
    <div class="row">
      <div class="col-sm-6 col-sm-offset-3 propertyLocation">
        <h3>{{$t("host.MS_form.property_location.title")}}</h3>
        <form action>
          <select v-model="req.city_id">
            <option value disabled>{{$t("host.MS_form.property_location.form_select")}}</option>
            <option
              v-for="(city,i) in cities"
              :key="i"
              :value="city.id"
            >{{$i18n.locale === 'en'? city.name_en : city.name_ar}}</option>
          </select>
          <textarea
            v-model="req.address_en"
            :placeholder="$t('host.MS_form.property_location.form_textarea')"
          ></textarea>
          <location-picker v-model="location" :options="options"></location-picker>
          <button
            type="submit"
            @click.prevent="create_property"
          >{{$t("host.AuthPages.continue")}}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { LocationPicker } from "vue2-location-picker";
export default {
  components: { LocationPicker },
  data() {
    return {
      req: {
        city_id: "",
        address_en: null,
        latitude: "31.205753",
        longitude: "29.924526",
        step: "location_en"
      },
      location: {
        lat: 31.205753,
        lng: 29.924526
      },
      options: {
        // is not required
        map: {
          /** other map options **/
        },
        marker: {
          /** marker options **/
        },
        autocomplete: {
          /** autocomplete options **/
        }
      }
    };
  },
  methods: {
    create_property() {
      let req_body = {};
      if (this.$i18n.locale == "ar") {
        req_body = {
          city_id: this.req.city_id,
          address_ar: this.req.address_en,
          latitude: this.req.latitude,
          longitude: this.req.longitude,
          step: "location_ar"
        };
      } else {
        req_body = this.req;
      }
      this.$store.dispatch("CREATE_PROPERTY", req_body);
    }
  },
  computed: {
    cities() {
      return this.$store.getters.GetCities;
    }
  },
  created() {
    this.$store.dispatch("GET_CITIES");
  }
};
</script>

<style scoped>
.propertyLocation {
  margin-top: 50px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0px 3px 6px 0px #9298b1;
  border-radius: 5px;
}

.propertyLocation form {
  margin: 36px 0px;
}

.propertyLocation form textarea,
.propertyLocation form select {
  display: block;
  padding: 10px 15px;
  width: 100%;
  border: 1px solid #9298b1;
  border-radius: 8px;
  margin: 20px auto;
  outline: none;
  font-size: 15px;
}

.propertyLocation form textarea {
  min-height: 150px;
}

.propertyLocation form button {
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

.propertyLocation form input[type="file"] {
  outline: none;
}
</style>