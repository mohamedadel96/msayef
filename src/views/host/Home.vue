<template>
  <section>
    <navbar></navbar>
    <home-header></home-header>
    <home-content></home-content>
    <home-footer></home-footer>
  </section>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Host_Components/Home_Page_Components/Navbar";
import HomeHeader from "@/components/Host_Components/Home_Page_Components/Header";
import HomeContent from "@/components/Host_Components/Home_Page_Components/Home_Content";
import HomeFooter from "@/components/Host_Components/Home_Page_Components/Footer";

export default {
  metaInfo: {
    title: "مصايف"
  },
  components: {
    Navbar,
    HomeHeader,
    HomeContent,
    HomeFooter
  }
};
</script>
