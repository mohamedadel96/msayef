<template>
  <div>
    <section class="location">
      <div class="container">
        <div class="row">
          <div class="col-md-12" v-if="flatProperty">
            <h1>{{$t("guest.propirity.Location")}}</h1>
            <p>{{$i18n.locale === "en"? flatProperty.property.address_en : flatProperty.property.address_ar}}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- End Reviews 👆👆👆 -->
    <!-- start cacellation police 👇👇👇 -->
    <div class="container cancellation">
      <div class="row">
        <div class="col-lg-12 policy" v-if="flatProperty">
          <h3>{{$t("guest.propirity.Policy")}}</h3>
          <span>{{flatProperty.property.refund.title_ar}}</span>
          <p>{{flatProperty.property.refund.body_ar}}</p>
        </div>
      </div>
    </div>
  </div>
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
.location h1 {
  font-size: 18px;
  font-weight: 500;
  color: rgba(8, 95, 188, 1);
  margin: 0;
  margin-bottom: 5px;
}

.location p {
  font-size: 16px;
  color: rgba(14, 82, 90, 1);
}

/* Start location */

.cancellation .policy h3 {
  font-size: 18px;
  /* font-weight: 500; */
  color: rgba(8, 95, 188, 1);
}

.cancellation .policy span {
  font-size: 16px;
  color: rgba(14, 82, 90, 1);
  font-weight: 400;
}

.cancellation .policy p {
  font-size: 16px;
  color: rgba(146, 152, 177, 1);
  font-weight: 400;
}
</style>