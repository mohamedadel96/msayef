<template>
  <section class="Articles" v-if="articles">
    <h1 class="text-center">{{$t("guest.home.article.h1")}}</h1>
    <div class="container">
      <div class="row">
        <div
          class="col-md-4"
          v-for="(article,i) in articles"
          :key="i"
          @click="showArticle(article.slug)"
        >
          <div class="Articles-box">
            <div class="images">
              <img :src="article.image_url" class="img-responsive" />
            </div>
            <div class="title">
              <h3>{{article.title}}</h3>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div @click="getMoreArticles" class="Articles-mor" v-if="showMoreState">
            <h1>More</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: 1
    };
  },
  methods: {
    showArticle(slug) {
      this.$router.push(`/article/${slug}`);
    },
    getMoreArticles() {
      this.pageNumber++;
      this.$store.dispatch("MOREARTICLES", this.pageNumber);
    }
  },
  computed: {
    articles() {
      return this.$store.getters.Get_Articles;
    },
    showMoreState() {
      return this.$store.getters.Get_MoreArticle_State;
    }
  },
  created() {
    let req = {
      lang: this.$i18n.locale,
      city_id: "",
      start_in: null,
      end_in: null,
      per_page: 2,
      page: 1
    };
    this.$store.dispatch("ARTICLES", req);
  }
};
</script>

<style scoped>
.Articles h1 {
  font-size: 18px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
  margin-bottom: 13px;
}
.Articles .Articles-box {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(146, 152, 177, 0.2);
  margin-bottom: 30px;
}
.Articles .Articles-box .images {
  height: 102px;
  display: flex;
  overflow: hidden;
  border-radius: 10px 10px 0px 0px;
}

.Articles .Articles-box .images img {
  width: 100%;
  width: 100%;
  align-self: center;
}
.Articles .Articles-box .title h3 {
  font-size: 17px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
  padding: 13px;
  padding-bottom: 24px;
}

.Articles .Articles-mor {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(146, 152, 177, 0.2);
  text-align: center;
  min-height: 178px;
  display: flex;
  cursor: pointer;
}

.Articles .Articles-mor h1 {
  align-self: center;
  width: 100%;
  padding-bottom: 24px;
}
</style>