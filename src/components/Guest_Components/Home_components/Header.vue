<template>
  <div class="container-fluid header">
    <div class="row mainRow">
      <div class="col-md-12">
        <div class="content">
          <div class="row">
            <div class="intro col-md-7">
              <p class="title">{{$t("host.home.header.title_1")}}</p>
              <p>{{$t("host.home.header.title_2")}}</p>
            </div>

            <div class="col-md-5">
              <!-- <router-view></router-view> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-image: url("../../../assets/images/header.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.header .content {
  display: block;
  width: 80%;
  margin: 0 auto;
  padding: 60px 0;
}

.header .content .intro {
  padding: 100px 10px;
}

.header .content .intro .title {
  color: #085fbc;
  margin-bottom: 15px;
}

.header .content .intro p {
  margin-top: 10px;
  color: #0e525a;
  font-size: 36px;
}
</style>