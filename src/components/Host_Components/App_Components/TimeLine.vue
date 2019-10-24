<template>
  <div class="container" v-if="get_timeline">
    <div class="row" @click.stop="showCancelBtn = null">
      <h1>{{$t("host.App.timeLine.title")}}</h1>
      <div class="col-lg-4 pending timeLine-col">
        <h1>{{$t("host.App.timeLine.cards_types.pending")}}</h1>
        <div class="item" v-for="(card,i) in get_timeline.pending" :key="i">
          <div class="basic-info">
            <div class="left">
              <p class="number">#{{card.id}}</p>
              <p
                class="name"
              >{{$i18n.locale == 'en' ? card.property.title_en : card.property.title_ar}}</p>
            </div>
            <div class="right">
              <div class="status">
                <p>{{$t("host.App.timeLine.cards_types.pending")}}</p>
              </div>
            </div>
            <div style="clear:both"></div>
          </div>
          <div class="time-info">
            <div class="left">
              <p class="key">{{$t("host.App.timeLine.cards.date_from")}}</p>
              <p class="data">{{card.start_date | formatDate}}</p>
            </div>
            <div class="right">
              <p class="key">{{$t("host.App.timeLine.cards.date_to")}}</p>
              <p class="data">{{card.end_date | formatDate}}</p>
            </div>
          </div>
          <div class="pay-info">
            <p class="key">{{$t("host.App.timeLine.cards.pay_title")}}</p>
            <p class="data">{{card.will_pay}}</p>
          </div>
          <div class="control-info">
            <button
              @click="reservation(card.id, 'approve')"
              class="approve"
            >{{$t("host.App.timeLine.cards.button_1")}}</button>
            <button class="more" @click.stop="showCancelBtn = i">
              <i class="fas fa-ellipsis-v"></i>
            </button>
            <button
              @click="reservation(card.id, 'cancel')"
              v-show="showCancelBtn === i"
              class="cancel"
            >{{$t("host.App.timeLine.cards.button_2")}}</button>
          </div>
        </div>
      </div>

      <div class="col-lg-4 accepted timeLine-col">
        <h1>{{$t("host.App.timeLine.cards_types.accepted")}}</h1>
        <div class="item" v-for="(card,i) in get_timeline.approved" :key="i">
          <div class="basic-info">
            <div class="left">
              <p class="number">#{{card.id}}</p>
              <p
                class="name"
              >{{$i18n.locale == 'en' ? card.property.title_en : card.property.title_ar}}</p>
            </div>
            <div class="right">
              <div class="status">
                <p>{{$t("host.App.timeLine.cards_types.accepted")}}</p>
              </div>
            </div>
            <div style="clear:both"></div>
          </div>
          <div class="time-info">
            <div class="left">
              <p class="key">{{$t("host.App.timeLine.cards.date_from")}}</p>
              <p class="data">{{card.start_date | formatDate}}</p>
            </div>
            <div class="right">
              <p class="key">{{$t("host.App.timeLine.cards.date_to")}}</p>
              <p class="data">{{card.end_date | formatDate}}</p>
            </div>
          </div>
          <div class="pay-info">
            <p class="key">{{$t("host.App.timeLine.cards.pay_title")}}</p>
            <p class="data">{{card.will_pay}}</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 canceled timeLine-col">
        <h1>{{$t("host.App.timeLine.cards_types.canceled")}}</h1>
        <div class="item" v-for="(card,i) in get_timeline.canceled" :key="i">
          <div class="basic-info">
            <div class="left">
              <p class="number">#{{card.id}}</p>
              <p
                class="name"
              >{{$i18n.locale == 'en' ? card.property.title_en : card.property.title_ar}}</p>
            </div>
            <div class="right">
              <div class="status">
                <p>{{$t("host.App.timeLine.cards_types.canceled")}}</p>
              </div>
            </div>
            <div style="clear:both"></div>
          </div>
          <div class="time-info">
            <div class="left">
              <p class="key">{{$t("host.App.timeLine.cards.date_from")}}</p>
              <p class="data">{{card.start_date | formatDate}}</p>
            </div>
            <div class="right">
              <p class="key">{{$t("host.App.timeLine.cards.date_to")}}</p>
              <p class="data">{{card.end_date | formatDate}}</p>
            </div>
          </div>
          <div class="pay-info">
            <p class="key">{{$t("host.App.timeLine.cards.pay_title")}}</p>
            <p class="data">{{card.will_pay}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      showCancelBtn: null
    };
  },
  computed: {
    get_timeline() {
      return this.$store.getters.get_timeline;
    }
  },
  methods: {
    reservation(id, type) {
      let req = {
        id: id,
        type: type
      };
      this.$store.dispatch("RESERVATIONACTION", req);
    }
  },
  mounted() {
    this.$store.dispatch("GET_TIMELINE");
  },
  filters: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    }
  }
};
</script>

<style scoped>
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

.timeLine-col .item .control-info .cancel {
  position: absolute;
  top: 33px;
  width: 150px;
  padding: 12px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 12px 0px rgba(146, 152, 177, 0.3);
  color: rgba(229, 115, 115, 1);
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

.canceled .item .basic-info .right p {
  display: inline-block;
  padding: 5px 14px;
  background: rgba(229, 115, 115, 1);
  color: #fff;
  font-size: 12px;
  border-radius: 10px;
  font-weight: 500;
}
</style>