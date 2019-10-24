<template>
  <div>
    <Guest-NavBar></Guest-NavBar>
    <info></info>
    <recommended-articles></recommended-articles>
  </div>
</template>
<script>
import Info from "../../components/Guest_Components/Article_components/info";
import RecommendedArticles from "../../components/Guest_Components/Article_components/recommended_articles";
export default {
  components: {
    Info,
    RecommendedArticles
  },
  mounted() {
    let req = {
      slug: this.$route.params.slug,
      lang: this.$i18n.locale
    };
    this.$store.dispatch("ARTICLEWITHSLUG", req);
  }
};
</script>
<style scoped>

</style>