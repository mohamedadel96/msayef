<template>
  <section class="hous-amenities" v-if="flatProperty">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1>{{$t("guest.propirity.Amenities")}}</h1>
        </div>
        <div>
          <div class="col-lg-12">
            <div class="allowed">
              <ul>
                <li v-for="(item,i) in flatProperty.amenity.title" :key="i" class="col-md-3">{{item}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1>{{$t("guest.propirity.NotAllowed")}}</h1>
        </div>
        <div class="col-md-12">
          <div class="allowed">
            <ul>
              <li v-for="(item,i) in flatProperty.prohibition.title" :key="i" class="col-md-3">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    flatProperty() {
      return this.$store.getters.Get_Flat_Property;
    }
  }
};
</script>

<style scoped>
.hous-amenities h1 {
  font-size: 18px;
  font-weight: 500;
  color: rgba(8, 95, 188, 1);
  margin: 0;
}

.hous-amenities .amenities {
  margin-bottom: 40px;
}

.hous-amenities .amenities ul {
  list-style: none;
  padding: 0;
  margin: 0;
  /* margin-top: 18px; */
}

.hous-amenities .amenities ul li {
  font-size: 16px;
  color: rgba(14, 82, 90, 1);
  margin-bottom: 15px;
  font-weight: normal;
}
.hous-amenities h1 {
  margin-bottom: 18px;
  display: block;
}

.hous-amenities .allowed ul {
  margin: 0;
  list-style: none;
  padding-left: 0;
}

.hous-amenities .allowed ul li {
  font-size: 16px;
  color: rgba(14, 82, 90, 1);
  margin-bottom: 15px;
  font-weight: normal;
}

.hous-amenities .allowed ul li:first-child{
  padding-left:0px;
  padding-right:0px;

}
</style>