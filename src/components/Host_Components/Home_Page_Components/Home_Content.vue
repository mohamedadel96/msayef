<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="homeContent">
          <div class="part1">
            <h1>{{$t("host.home.content.title")}}</h1>
            <p>{{$t("host.home.content.description")}}</p>
          </div>
          <div class="part2">
            <p>$</p>
            <p>{{$t("host.home.content.image_title")}}</p>
          </div>
          <div class="part3">
            <div class="content">
              <div class="row">
                <div class="col-md-4">
                  <!--  -->
                  <img src="../../../assets/images/bag.svg">
                  <p>{{$t("host.home.content.image_description_1")}}</p>
                </div>
                <div class="col-md-4">
                  <!-- -->
                  <img src="../../../assets/images/classicBag.svg">
                  <p>{{$t("host.home.content.image_description_2")}}</p>
                </div>
                <div class="col-md-4">
                  <!-- -->
                  <img src="../../../assets/images/baseline-home-24px.svg">
                  <p>{{$t("host.home.content.image_description_3")}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.homeContent {
  width: 80%;
  margin: -30px auto;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 2px 0px rgba(146, 152, 177, 0.2);
  font-size: 18px;
  margin-bottom: 100px;
}

.homeContent .part1 {
  padding: 20px 20px;
  margin-left: 30px;
}

.homeContent .part1 h1 {
  color: rgba(49, 59, 70, 1);
  margin: 25px 0;
}

.homeContent .part1 p {
  font-weight: 200;
  color: rgba(146, 152, 177, 1);
  line-height: 2em;
}

.homeContent .part2 {
  background-image: url("../../../assets/images/haiderRejected.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 20px;
  text-align: center;
  color: #fff;
  font-size: 40px;
}
.homeContent .part2 p {
  margin: 15px;
}

.homeContent .part3 {
  padding: 40px 20px;
  text-align: center;
}

.homeContent .part3 p {
  margin: 20px;
}
</style>