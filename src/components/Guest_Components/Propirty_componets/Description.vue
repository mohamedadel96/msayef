<template>
  <section v-if="flatProperty" class="description">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="prop-title">{{$i18n.locale === "en" ? flatProperty.property.address_en : flatProperty.property.address_ar}}</h1>
          <div class="card-text">
            <span>
              {{flatProperty.property.guests_count}}
              {{$t("guest.home.search_res.guest")}}
            </span>
            <span>
              {{flatProperty.property.bedrooms}}
              {{$t("guest.home.search_res.bedroom")}}
            </span>
            <span>
              {{flatProperty.property.double_bed_room}}
              {{$t("guest.home.search_res.beds")}}
            </span>
            <span>
              {{flatProperty.property.bathrooms}}
              {{$t("guest.home.search_res.bathroom")}}
            </span>
          </div>
          <!-- <h1>{{$t("guest.propirity.Description")}}</h1> -->
          <p>{{flatProperty.property.description_ar}}</p>
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

.description .prop-title {
  font-size: 24px;
  font-weight: bold;
  color: rgba(14, 82, 90, 1);
}

.description h1 {
  font-size: 18px;
  font-weight: 500;
  color: rgba(8, 95, 188, 1);
  margin: 0;
  margin-bottom: 5px;
}

.description p {
  font-size: 16px;
  color: rgba(14, 82, 90, 1);
}

.card-text {
  font-size: 14px;
  color: rgba(146, 152, 177, 1);
  margin-left: 14px;
  margin-bottom: 12px;
}

.card-text span{
  margin-left:12px;
  margin-right: 12px;
  font-family: 'Droid Arabic Kufi', serif;
}

.card-text span:first-child{
  margin-left: 0px;
}
</style>