<template>
  <div class="cont">
    <Guest-NavBar></Guest-NavBar>
    <header v-if="flatProperty">
      <img
        :src="slider? slider: flatProperty.property.featured_image_url ? flatProperty.property.featured_image_url : 'https://images.pond5.com/motion-sea-island-background-footage-090914888_prevstill.jpeg'"
      />
    </header>
    <header-guest @changeSlider="changeSlider($event)"></header-guest>
    <Description></Description>
    <amenities></amenities>

    <location-picker
      class="header"
      v-if="location.lat !== null && location.lng !== null"
      v-model="location"
      :options="options"
    ></location-picker>

    <location></location>

    <footer-guest></footer-guest>
  </div>
</template>

<script>
import { LocationPicker } from "vue2-location-picker";
import HeaderGuest from "@/components/Guest_Components/Propirty_componets/Header_Guest";
import Amenities from "@/components/Guest_Components/Propirty_componets/Amenities";
import Location from "@/components/Guest_Components/Propirty_componets/Location";
import Description from "@/components/Guest_Components/Propirty_componets/Description";
export default {
  metaInfo: {
    title: "شقه",
    meta: [
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // { name: "og:image", content: "مصايف" },
      { name: "description", content:"مصايف" }
    ]
  },
  components: {
    HeaderGuest,
    Amenities,
    Location,
    LocationPicker,
    Description
  },
  data() {
    return {
      slider: null,
      location: {
        lat: null,
        lng: null
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
  computed: {
    flatProperty() {
      return this.$store.getters.Get_Flat_Property;
    }
  },
  watch: {
    flatProperty(val) {
      if (val) {
        this.location.lat = Number(val.property.latitude);
        this.location.lng = Number(val.property.longitude);
      }
    }
  },
  created() {
    if (this.$i18n.locale === "ar") {
      import("../../assets/Style/Propirty-rtl.css");
    }
    let req = {
      id: this.$route.params.id,
      lang: this.$i18n.locale
    };
    this.$store.dispatch("GETPROPERTIES", req);
  },
  methods: {
    changeSlider(e) {
      this.slider = e;
    }
  }
};
</script>

<style scoped>
.cont{
  margin-bottom: 100px;
} 
header{
  overflow: hidden;
}

header img {
  background-repeat: no-repeat;
  background-size: cover;
  height: 560px;
  margin-bottom: 16px;
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 10px;
}

div {
  background: white;
}
.header {
  height: 100%;
  width: 100%;
  margin-bottom: 16px;
  background-attachment: fixed;
}
@media (max-width: 1199.98px) { 
  .cont{
    margin-bottom:0;
  }
}
</style>