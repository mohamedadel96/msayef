<template>
  <section class="nubian-house">
    <div class="container">
      <div class="row" v-if="articlesData">
        <div class="col-md-12">
          <div class="header">
            <img :src="articlesData.article.image_url" alt="">
          </div>
          <div class="post">
            <h1>{{articlesData.article.title}}</h1>
            <p>{{articlesData.article.body}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    articlesData() {
      return this.$store.getters.Get_Slug_Article;
    }
  }
};
</script>
<style scoped>
/* Start nubian-house*/
.header {
  height: 200px;
  width: 100%;
}

.header img{
  width: 100%;
  height: 200px;
}

.nubian-house {
  margin-bottom: 23px;
}

/* nubian-Simple-house */
.nubian-house .post {
  width: 664px;
  margin: 0 auto;
  padding-top: 23px;
}
.nubian-house .post h1 {
  color: rgba(8, 95, 188, 1);
  font-size: 24px;
  margin: 0;
  padding-bottom: 8px;
}
.nubian-house .post p {
  margin-bottom: 40px;
  font-size: 16px;
  color: rgba(14, 82, 90, 1);
  font-weight: normal;
}
.nubian-house .post p:last-child {
  margin-bottom: 0;
}
.nubian-house .post img {
  width: 100%;
  margin-bottom: 44px;
}
/* End poost */
</style>