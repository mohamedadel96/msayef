<template>
  <div>
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
const AppNavbar = () =>
  import("../../components/Host_Components/Plugins_Components/App_Navbar");
export default {
  metaInfo: {
    title: "مصايف"
  },
  components: {
    AppNavbar
  }
};
</script>

<style scoped>
.bar {
  width: 250px;
  margin: 30px auto;
}

a {
  border: 2px solid blueviolet;
  padding: 15px;
}
</style>