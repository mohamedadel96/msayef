<template>
  <div class="container" @click.stop="showOptionBtn = null">
    <div class="row" v-if="properties">
      <h1>{{$t("host.calender.calender")}}</h1>
      <div class="col-lg-4 col-md-4 pending timeLine-col col-lg-offset-2 col-md-offset-2">
        <h1>{{$t("host.calender.pending")}}</h1>
        <div class="item" v-if="properties.Pending">
          <div v-for="(prop, i) in properties.Pending" :key="i">
            <div class="basic-info">
              <div class="left">
                <p class="number">#{{prop.id}}</p>
                <p class="name">{{$i18n.locale == 'en' ? prop.title_en : prop.title_ar}}</p>
                <p
                  class="description"
                >{{$i18n.locale == 'en' ? prop.description_en : prop.description_ar}}</p>
              </div>
              <div class="right">
                <div class="status">
                  <p>{{$t("host.calender.pending")}}</p>
                </div>
              </div>
              <div style="clear:both"></div>
            </div>
            <div class="control-info">
              <router-link :to="'/host/app/calender/' + prop.id">
                <button class="approve">{{$t("host.calender.CHAV")}}</button>
              </router-link>
              <button class="more" @click.stop="showOptionBtn = prop.id">
                <i class="fas fa-ellipsis-v"></i>
              </button>
              <button
                v-show="showOptionBtn == prop.id"
                class="changeReq"
                @click="editProperty(prop.id)"
              >{{$t("host.calender.edit")}}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 accepted timeLine-col">
        <h1>{{$t("host.calender.approved")}}</h1>
        <div class="item" v-if="properties.Approved">
          <div v-for="(prop, i) in properties.Approved" :key="i">
            <div class="basic-info">
              <div class="left">
                <p class="number">#{{prop.id}}</p>
                <p class="name">{{$i18n.locale == 'en' ? prop.title_en : prop.title_ar}}</p>
                <p
                  class="description"
                >{{$i18n.locale == 'en' ? prop.description_en : prop.description_ar}}</p>
              </div>
              <div class="right">
                <div class="status">
                  <p>{{$t("host.calender.approved")}}</p>
                </div>
              </div>
              <div style="clear:both"></div>
            </div>
            <div class="control-info">
              <router-link :to="'/host/app/calender/' + prop.id">
                <button class="approve">{{$t("host.calender.CHAV")}}</button>
              </router-link>
              <button class="more" @click.stop="showOptionBtn = prop.id">
                <i class="fas fa-ellipsis-v"></i>
              </button>
              <ul v-show="showOptionBtn == prop.id">
                <li>
                  <button class="changeReq" @click="showCHRQPopup = !showCHRQPopup">{{$t("host.calender.CHRQ")}}</button>
                </li>
                <li>
                  <button class="changeReq" @click="viewProperty(prop.id)">{{$t("host.calender.viewProp")}}</button>
                </li>
              </ul>
            </div>
              <change-request :property_id="prop.id" v-if="showCHRQPopup" @closeCHREQ="showCHRQPopup = false"></change-request>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChangeRequest from "../Plugins_Components/Change_Request";
export default {
  components: {
    ChangeRequest
  },
  data() {
    return {
      showOptionBtn: false,
      showCHRQPopup: false
    };
  },
  methods: {
    editProperty(property_id) {
      localStorage.setItem("property_id", property_id);
      this.$router.push("/host/multi-step-form/property-details-1");
    },
    viewProperty(property_id) {
      this.$router.push(`/property/${property_id}`);
    }
  },
  computed: {
    properties() {
      return this.$store.getters.properties_filter;
    }
  },
  mounted() {
    this.$store.dispatch("PROPERTIESFILTER");
  }
};
</script>

<style>
h1 {
  text-align: center;
  font-size: 24px;
  color: rgba(14, 82, 90, 1);
}

.timeLine-col {
  padding: 10px;
}

.timeLine-col h1 {
  text-align: center;
  font-size: 16px;
  color: rgba(14, 82, 90, 1);
}

.timeLine-col > div {
  margin: 10px auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(146, 152, 177, 0.2);
  padding: 24px;
  font-size: 16px;
}

/* Basic Info ⌨ ⌨ ⌨ styling here  */
.timeLine-col .item .basic-info {
  margin-bottom: 12px;
}

.timeLine-col .item .basic-info .left {
  float: left;
  width: 67%;
}
.timeLine-col .item .basic-info .left .description {
  font-family: "Rubik";
  font-size: 12px;
  color: rgba(146, 152, 177, 1);
}

.timeLine-col .item .basic-info .left .number {
  color: rgba(8, 95, 188, 1);
  font-weight: bold;
  margin: 0;
}

.timeLine-col .item .basic-info .left .name {
  color: rgba(49, 59, 70, 1);
  margin: 0;
}

.timeLine-col .item .basic-info .right {
  float: right;
  width: 30%;
  text-align: right;
}

.timeLine-col .item .basic-info .right p {
  display: inline-block;
  padding: 5px 14px;
  background: rgba(253, 216, 53, 1);
  color: rgba(14, 82, 90, 1);
  font-size: 12px;
  border-radius: 10px;
  font-weight: 500;
}

/* Time Info ⌚⌚⌚ in here  */

.timeLine-col .item .time-info {
  margin-bottom: 12px;
}

.timeLine-col .item .time-info .key {
  font-size: 10px;
  color: rgba(146, 152, 177, 1);
  margin-bottom: 5px;
}

.timeLine-col .item .time-info .data {
  font-size: 14px;
  color: rgba(8, 95, 188, 1);
  font-weight: 500;
}

.timeLine-col .item .time-info .left {
  float: left;
  width: 50%;
}

.timeLine-col .item .time-info .right {
  float: left;
  width: 50%;
}

/* pay-info styling 💰💰💰 */

.timeLine-col .item .pay-info .key {
  font-size: 10px;
  color: rgba(146, 152, 177, 1);
  margin-bottom: 5px;
}

.timeLine-col .item .pay-info .data {
  font-size: 14px;
  color: rgba(8, 95, 188, 1);
  font-weight: 500;
}

.timeLine-col .item .control-info {
  position: relative;
}

.timeLine-col .item .control-info .approve {
  width: 73%;
  height: 60px;
  margin-right: 10px;
  background-color: rgba(8, 95, 188, 1);
  border-radius: 10px;
  border: 0;
  color: #fff;
  text-align: center;
  font-size: 16px;
  outline: none;
}

.timeLine-col .item .control-info .more {
  height: 54px;
  width: 54px;
  padding: 10px;
  border-radius: 50%;
  border: 0;
  font-size: 16px;
  outline: none;
  color: rgba(146, 152, 177, 1);
  background: #fff;
  transition: all 0.35s ease-in-out;
}

.timeLine-col .item .control-info .more:hover {
  background-color: rgba(250, 250, 252, 1);
  transition: all 0.35s ease-in-out;
}

.timeLine-col .item .control-info ul {
  position: absolute;
  top: 33px;
  z-index: 5;
  right: 45px;
  text-align: center;
  color: rgba(229, 115, 115, 1);
  margin-left: 0;
  padding: 5px;
  border-radius: 10px 0px 10px 10px;
  background-color: #fff;
  box-shadow: 0px 2px 12px 0px rgba(146, 152, 177, 0.3);
}

.timeLine-col .item .control-info ul li {
  list-style: none;
  border-bottom: 1px solid #fafafc;
}

.timeLine-col .item .control-info ul li .changeReq {
  position: static;
  box-shadow: none;
  border-radius: 0px;
}

.timeLine-col .item .control-info .changeReq {
  position: absolute;
  top: 33px;
  width: 150px;
  padding: 12px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 12px 0px rgba(146, 152, 177, 0.3);
  color: rgba(14, 82, 90, 1);
  z-index: 5;
  right: 45px;
  text-align: center;
  border-radius: 10px 0px 10px 10px;
  border: none;
  outline: none;
  /* display: none; */
}

.accepted .item .basic-info .right p {
  display: inline-block;
  padding: 5px 14px;
  background-color: rgba(21, 183, 33, 1);
  color: #fff;
  font-size: 12px;
  border-radius: 10px;
  font-weight: 500;
}

.calceled .item .basic-info .right p {
  display: inline-block;
  padding: 5px 14px;
  background: rgba(229, 115, 115, 1);
  color: #fff;
  font-size: 12px;
  border-radius: 10px;
  font-weight: 500;
}

@media screen and (max-width: 767px) {
  .nav-center {
    position: static;
    width: auto;
    height: auto;
  }

  .nav-center .subNav {
    position: static;
  }

  .navbar-nav > li > .dropdown-menu {
    color: #fff;
  }

  .navbar-nav > li > .dropdown-menu::before {
    display: none;
  }

  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #fff;
  }
}

@media screen and (min-width: 768px) and (max-width: 1070px) {
  .nav-center {
    width: 400px;
  }
}
</style>