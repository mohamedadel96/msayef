<template>
  <div v-if="articlesData">
    <section class="recommended" v-if="articlesData.similar_articles.length">
      <h1 class="text-center">{{$t('Recommended Articles')}}</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div
              class="Articles"
              v-for="(article, i) in articlesData.similar_articles"
              :key="i"
              @click="showArticle(article.slug)"
            >
              <div class="images">
                <img :src="article.image_url" class="img-responsive" />
              </div>
              <div class="title">
                <h3>{{article.title}}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    articlesData() {
      return this.$store.getters.Get_Slug_Article;
    }
  },
  methods: {
    showArticle(slug) {
      this.$router.push(`/article/${slug}`);
      let req = {
        slug: slug,
        lang: this.$i18n.locale
      };
      this.$store.dispatch("ARTICLEWITHSLUG", req);
    }
  }
};
</script>

<style scoped>
/* Start recommended */
.recommended h1 {
  font-size: 18px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
  margin-bottom: 13px;
}
.recommended .Articles {
  /* height: 179px;
    width: 324px; */
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(146, 152, 177, 0.2);
  margin-bottom: 30px;
}
.recommended .Articles .images {
  height: 102px;
  display: flex;
  overflow: hidden;
  /* background-image: url("../images/Nubian-house.png");
    background-size: cover; */
  border-radius: 10px 10px 0px 0px;
}

.recommended .Articles .images img {
  width: 100%;
  width: 100%;
  align-self: center;
}
.recommended .Articles .title h3 {
  font-size: 17px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
  padding: 13px;
}
/* Start recommended */
</style>