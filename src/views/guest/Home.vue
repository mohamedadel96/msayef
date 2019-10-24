<template>
  <div>
    <Guest-NavBar></Guest-NavBar>

    <header-section></header-section>

    <search-section></search-section>

    <search-result></search-result>

    <featured></featured>
    
    <articles></articles>

    <mega-menu></mega-menu>

    <footer-guest></footer-guest>
  </div>
</template>

<script>
import HeaderSection from "@/components/Guest_Components/Home_components/Header";
import SearchSection from "@/components/Guest_Components/Home_components/Search_Section";
import SearchResult from "@/components/Guest_Components/Home_components/Search_Result";
import Featured from "@/components/Guest_Components/Home_components/Featured";
import Articles from "@/components/Guest_Components/Home_components/Articles";
import MegaMenu from "@/components/Guest_Components/Home_components/Mega_Menu";
export default {
  metaInfo: {
    title: "مصايف",
    meta: [
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "I have things here on my site." }
    ]
  },
  components: {
    SearchSection,
    HeaderSection,
    SearchResult,
    Featured,
    Articles,
    MegaMenu
  },
  created() {
    if (this.$i18n.locale === "ar") {
      import("../../assets/Style/Home-rtl.css");
    }
  }
};
</script>

<style scoped>
</style>