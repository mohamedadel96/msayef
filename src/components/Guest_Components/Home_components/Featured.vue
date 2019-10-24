<template>
  <section class="featured">
    <div class="container">
      <div class="row" v-if="featured_city">
        <div class="col-md-12">
          <h1 class="text-center">{{$t("guest.home.featured.h1")}}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12 custom-2" v-for="(city,i) in featured_city" :key="i">
          <div class="img-tall" :style="{backgroundImage: 'url(' + city.image_url + ')'}">
            <h3>{{$i18n.locale === "en" ? city.name_en : city.name_ar}}</h3>
          </div>
        </div>
      
    </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    featured_city() {
      return this.$store.getters.Get_Featured_City
    }
  },
  mounted() {
    this.$store.dispatch('FEATURED_CITY', this.$i18n.locale)
  }
};
</script>

<style scoped>
.featured {
  margin-bottom: 40px;
}
.featured h1 {
  font-size: 18px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
  margin-bottom: 18px;
}
.featured .img-tall img {
  height: 239px;
  width: 100%;
  border-radius: 10px;
}
.featured .img-tall {
  margin-bottom: 15px;
  background-position: center;
  height: 239px;
  background-size: cover;
  border-radius: 10px;
  position: realtive;
}
.featured .small-img h3,
.featured .img-tall h3 {
  position: absolute;
  bottom: 25px;
  left: 25px;
  font-size: 18px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-shadow: 2px 2px 10px #574242;
}

.featured .small-img img {
}

.custom-2 {
  padding-left: 7px;
  padding-right: 7px;
}
</style>