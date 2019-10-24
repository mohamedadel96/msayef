<template>
  <section class="search-result">
    <div class="container">
      <div class="row" v-if="flats">
        <!-- <h1>found in alexandria available from 12 march to 29 march</h1> -->

        <div
          class="col-md-4 col-sm-12 flat"
          @click="GetProperties(flat.id)"
          v-for="(flat,i) in flats"
          :key="i"
        >
          <div class="result">
            <div class="card">
              <div class="card-img">
                <img
                  class="card-img-top"
                  :src="flat.featured_image_url? flat.featured_image_url : require('../../../assets/images/Image_34.png')"
                  alt="Card image cap"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">{{$i18n.locale === 'en' ? flat.title_en : flat.title_ar}}</h5>
                <span class="card-cost">{{flat.nearest_price}} جــ</span>
                <p
                  class="card-text"
                >{{flat.guests_count}} {{$t("guest.home.search_res.guest")}} . {{flat.bedrooms}} {{$t("guest.home.search_res.bedroom")}} . {{flat.double_bed_room}} {{$t("guest.home.search_res.beds")}} . {{flat.bathrooms}} {{$t("guest.home.search_res.bathroom")}}</p>

                <div class="rating">
                  <span v-for="(num,i) in flat.avg_rate" :key="i" class="fa fa-star"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
        <!-- <paginate
          :page-count="flats.paginate"
          :click-handler="getPage"
          :prev-text="$t('guest.propirity.prev')"
          :next-text="$t('guest.propirity.next')"
          :container-class="'paginate'"
        ></paginate>-->
        <div class="col-md-12" v-if="showSeeMore">
          <button class="btn-mor" @click="getPage()">{{$t("guest.home.search_res.seeMore")}}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// const paginate = () => import("vuejs-paginate");
export default {
  // components: {
  //   paginate
  // },
  data() {
    return {
      pageNumber: 1
    };
  },
  computed: {
    flats() {
      return this.$store.getters.Get_Flats;
    },
    showSeeMore() {
      return this.$store.getters.Get_SeeMore_State;
    }
  },
  // watch: {
  //   flats (val) {
  //     if (val) {
  //       this.isLoading = false
  //     }
  //   }
  // },
  methods: {
    getPage() {
      this.pageNumber++;
      this.$store.dispatch("PAGINATION", this.pageNumber);
    },
    GetProperties(id) {
      this.$router.push(`/property/${id}`);
    }
  },
  created() {
    let req = {
      lang: this.$i18n.locale,
      city_id: "",
      start_in: null,
      end_in: null,
      per_page: 6,
      page: 1
    };
    this.$store.dispatch("FLATSEARCH", req);
  }
};
</script>

<style>
.search-result .paginate {
  display: flex;
  justify-content: space-around;
  margin: 20px 5px;
}

.search-result .paginate li {
  list-style: none;
  border: 2px solid #085fbc;
  padding: 6px 17px;
  border-radius: 5px;
}

.search-result .flat {
  padding-right: 9px;
  padding-left: 9px;
  margin-bottom: 25px;
  width:32.333333%;
}

.search-result h1 {
  font-size: 16px;
  color: rgba(8, 95, 188, 1);
  text-align: center;
}

/* .search-result .result .card {
  box-shadow: 0px 2px 2px 0px rgba(146, 152, 177, 0.2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  transition: all 0.17s ease-in-out;
} */

/* .search-result .result .card:hover{
  cursor: pointer;
  transform: scale(1.066);
  z-index: 5;
  position: absolute;
  box-shadow: 0px 4px 9px 0px #efbfbf;
} */

/* width */

.search-result .result .card .card-img::-webkit-scrollbar {
  width: 10px;
}

/* Track */

.search-result .result .card .card-img::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */

.search-result .result .card .card-img::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */

/* .search-result .result .card .card-img::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.search-result .result .card .card-img:hover {
  overflow: auto;
  transform: none;
} */
/* .search-result .result .card .card-img:hover::-webkit-scrollbar-thumb {
  background: #f1f1f1; 
} */
/* .search-result .result .card .card-img img:hover {
  cursor: pointer;
  position: absolute;
  box-shadow: 0px 4px 9px 0px #efbfbf;
  transition: all 0.2s ease-in-out;
  transform: translateY(-82px);
} */

.search-result .result .card .card-img {
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  height: 153px;
  width: 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.search-result .result .card .card-img img {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.search-result .result .card .card-body {
  background-color: rgba(255, 255, 255, 1);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  display: block;
}
.search-result .result .card .card-body .card-title {
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
  margin: 0;
  margin-left: 14px;
  margin-top: 10px;
  max-width: 75%;
  height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.search-result .result .card .card-body .card-cost {
  color: rgba(8, 95, 188, 1);
  margin: 0;
  margin-left: 14px;
  margin-top: 10px;
  margin-right: 10px;
  float: right;
  font-size: 14px;
  font-weight: 500;
}
.search-result .result .card .card-body .card-text {
  font-size: 14px;
  color: rgba(146, 152, 177, 1);
  margin-left: 14px;
  font-weight: 100;
}
.search-result .result .card .card-body .rating {
  margin-bottom: 15px;
  margin-left: 14px;
}

.search-result .result .cards .card-img-top {
  height: 153px;
}
.search-result .result .card .rating {
  display: inline-block;
}
.search-result .result .card span {
  float: right;
}
.search-result .result .card .card-body .rating span {
  color: rgba(249, 168, 37, 1);
  padding-left: 5px;
}

.search-result .result .card .card-body .rating .rating-number {
  line-height: 1;
  padding-left: 10px;
  color: rgba(146, 152, 177, 1);
}
.search-result .btn-mor {
  color: rgba(255, 255, 255, 1);
  height: 60px;
  width: 303px;
  background-color: rgba(146, 152, 177, 1);
  border: 0;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
}
</style>