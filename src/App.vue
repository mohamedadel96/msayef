<template>
  <div id="app">
    <notifications group="notify" width="400px" position="center" />
    <loading 
    :active.sync="isLoading" 
    :can-cancel="false" 
    :is-full-page="fullPage"
    :color="'#085FBC'"
    :loader="'dots'"
    ></loading>
    <router-view v-show="!isLoading" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullPage: true
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading
    }
  }
};
</script>

<style scoped>
.vue-notification {
  padding: 10px;
  margin: 0 5px 5px;
  font-size: 12px;
  color: #fff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;
}
.vue-notification.warn {
  background: #ffb648;
  border-left-color: #f48a06;
}
.vue-notification.error {
  background: #e54d42;
  border-left-color: #b82e24;
}
.vue-notification.success {
  background: #68cd86;
  border-left-color: #42a85f;
}
</style>
