<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-sm-offset-3 propertyDetails">
        <h3>{{$t("host.MS_form.property_details_2.title")}}</h3>

        <form>
          <!-- <div class="form-group">    -->
          <select class="form-control" v-model="req.property_type_id">
            <option selected value>{{$t("host.MS_form.property_details_2.form_select.option_1")}}</option>
            <option
              v-for="(prop,i) in properties"
              :key="i"
              :value="prop.id"
            >{{$i18n.locale === 'en'? prop.title_en : prop.title_ar}} 🏠</option>
          </select>
          <!-- </div> -->

          <div class="counter center-block">
            <h4>{{$t("host.MS_form.property_details_2.form_sections.section_1")}}</h4>
            <button type="button" class="control plus" @click="req.bedrooms++">+</button>
            <input type="number" class="countValue" v-model="req.bedrooms">
            <button
              type="button"
              class="control minus"
              @click="req.bedrooms--"
              :disabled="req.bedrooms < 1 ? true : false "
            >-</button>
          </div>

          <div class="counter center-block">
            <h4>{{$t("host.MS_form.property_details_2.form_sections.section_2")}}</h4>
            <button type="button" class="control plus" @click="req.bathrooms++">+</button>
            <input type="number" class="countValue" v-model="req.bathrooms">
            <button
              type="button"
              class="control minus"
              @click="req.bathrooms--"
              :disabled="req.bathrooms < 1 ? true : false "
            >-</button>
          </div>

          <div class="counter center-block">
            <h4>{{$t("host.MS_form.property_details_2.form_sections.section_3")}}</h4>
            <button type="button" class="control plus" @click="req.guests_count++">+</button>
            <input type="number" class="countValue" v-model="req.guests_count">
            <button
              type="button"
              class="control minus"
              @click="req.guests_count--"
              :disabled="req.guests_count < 1 ? true : false "
            >-</button>
          </div>

          <button
            type="submit"
            @click.prevent="update_properties"
          >{{$t("host.AuthPages.continue")}}</button>
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
        property_type_id: "",
        bedrooms: 0,
        bathrooms: 0,
        guests_count: 0,
        double_bed_room: 0,
        step: "details"
      }
    };
  },
  methods: {
    update_properties() {
      this.$store.dispatch("UPDATE_PROPERTIES", this.req);
    }
  },
  computed: {
    properties() {
      return this.$store.getters.GetProperties;
    }
  },
  mounted() {
    this.$store.dispatch("GET_PROPERTY");
  }
};
</script>

<style scoped>

.propertyDetails {
  margin-top: 50px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0px 3px 6px 0px #9298b1;
  border-radius: 5px;
}

.propertyDetails form {
  margin: 36px 0px;
}
input[type="number"] {
  display: inline-block;
  border: 1px solid rgba(146, 152, 177, 1);
  border-radius: 4px;
  width: 26px;
  text-align: center;
  padding: 5px;
  margin: 0 10px;
  font-size: 14px;
  color: rgba(146, 152, 177, 1);
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
  /* display:inline-block; */
}

.propertyDetails form select {
  display: block;
  margin: 20px auto;
  width: 100%;
  border: 1px solid #9298b1;
  padding: 5px 17px;
  border-radius: 5px;
  outline: none;
  background: transparent;
  height: 50px;
}

.propertyDetails form select:hover {
  cursor: pointer;
}

.propertyDetails form select option {
  line-height: 10px;
}

.propertyDetails form button {
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

.propertyDetails form .counter {
  font-size: 17px;
}

.propertyDetails form .counter h4 {
  margin: 0;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 5px;
  color: #9298b1;
  font-weight: 400;
  font-size: 17px;
}

.propertyDetails form .counter p {
  width: 30px;
  height: 30px;
  display: inline-block;
  border-radius: 3px;
  border: 1px solid #085fbc;
  text-align: center;
  line-height: 28px;
}

.propertyDetails form .counter button.control {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid #085fbc;
  color: #9298b1;
  margin: 0;
}
</style>