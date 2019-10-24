<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-lg-offset-3 col-sm-12 CalenderContainer">
        <!-- <h3>Availability</h3> -->
        <!-- <p>You can change the availability whenever you want later</p> -->
        <form action>
          <!-- Calender is HERE ⭐⭐ -->
          <div class="flatpickr">
            <!-- <input type="text" class="date" placeholder="Select Date.." data-input /> -->

            <a class="input-button" title="toggle" data-toggle>
              <i class="icon-calendar"></i>
            </a>

            <a class="input-button" title="clear" data-clear>
              <i class="icon-close"></i>
            </a>
          </div>

          <!-- Calender is HERE ⭐⭐ -->

          <div class="switchController">
            <div class="avilable">
              <div>
                <h3>{{$t("host.calender.avilable")}}</h3>

                <label id="Open" for="Open1">
                  <input type="radio" id="Open1" name="status" value="available" v-model="status" />
                  <p>{{$t("host.calender.open")}}</p>
                </label>

                <label id="close" for="close1">
                  <input type="radio" id="close1" name="status" value="not_available" v-model="status" />
                  <p>{{$t("host.calender.close")}}</p>
                </label>
              </div>
            </div>

            <div class="changePrice">
              <h3>{{$t("host.calender.changePrice")}}</h3>

              <label for v-if="status == 'available'">
                <input type="number" v-model="price" />
              </label>

              <button :class="status == 'not_available' ? 'block' : ''" @click.prevent="submit">{{$t("host.calender.apply")}}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import flatpickr from "flatpickr";
export default {
  data() {
    return {
      status: "available",
      price: null
    };
  },
  methods: {
    submit() {
      let dateArr = $(".flatpickr")[0].value.split(" ");
      let req_body = {
        property_availability: {
          status: this.status,
          property_id: this.$route.params.id,
          start_in: dateArr[0],
          end_in: dateArr[2],
          price: this.status === "available" ? this.price : null
        }
      };
      this.$store.dispatch("SAVECALENDER", req_body);
    }
  },
  mounted() {
    let property_id = this.$route.params.id;
    this.$store.dispatch("SHOWCALENDER", property_id).then(response => {
      let availableDays = [];
      let not_availableDays = [];
      let bookedDays = [];
      response.available.map(item => {
        let dayObj = new Date(item.day);
        let month = dayObj.getUTCMonth() + 1;
        let day = dayObj.getUTCDate();
        let year = dayObj.getUTCFullYear();
        availableDays.push(Date.parse(new Date(year, month, day)));
      });
      response.not_available.map(item => {
        let dayObj = new Date(item.day);
        let month = dayObj.getUTCMonth() + 1;
        let day = dayObj.getUTCDate();
        let year = dayObj.getUTCFullYear();
        not_availableDays.push(Date.parse(new Date(year, month, day)));
      });
      response.booked.map(item => {
        let dayObj = new Date(item.day);
        let month = dayObj.getUTCMonth() + 1;
        let day = dayObj.getUTCDate();
        let year = dayObj.getUTCFullYear();
        bookedDays.push(Date.parse(new Date(year, month, day)));
      });

      $(".flatpickr").flatpickr({
        inline: true,
        mode: "range",
        dateFormat: "Y-m-d",
        minDate: new Date(),
        onDayCreate: function(dObj, dStr, fp, dayElem) {
          if (availableDays.indexOf(+dayElem.dateObj) !== -1) {
            dayElem.innerHTML += "<span class='event available'></span>";
          }
          if (bookedDays.indexOf(+dayElem.dateObj) !== -1) {
            dayElem.innerHTML += "<span class='event booked'></span>";
          }
          if (not_availableDays.indexOf(+dayElem.dateObj) !== -1) {
            dayElem.innerHTML += "<span class='event disable'></span>";
          }
        },
        disable: not_availableDays.concat(bookedDays)
      });
    });
  }
};
</script>

<style>
.event {
  position: absolute;
  width: 11px;
  height: 4px;
  border-radius: 150px;
  top: 3px;
  left: calc(50% - 5px);
  content: " ";
  display: block;
}

.event.booked {
  background: rgb(232, 236, 1);
}
.event.available {
  background: rgb(0, 197, 0);
}
.event.disable {
  background: #f64747;
}

.block {
  width: 100% !important;
}

.flatpickr-calendar {
  box-shadow: none;
}

.flatpickr-calendar.inline {
  margin: 0 auto;
  width: 100%;
  /* height: 90%; */
}

.flatpickr-current-month {
  padding-top: 0;
}

.flatpickr-months {
  display: flex;
  align-items: center;
  height: 50px;
  color: rgba(50, 57, 77, 1);
  border-bottom: 1px solid rgba(236, 241, 245, 1);
}

.flatpickr-months .flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month,
.flatpickr-next-month {
  padding: 20px;
}

.flatpickr-rContainer {
  width: 100%;
  margin-bottom: 23px;
}

.dayContainer {
  max-width: 890px;
  width: 100%;
}

.flatpickr-days {
  width: 100%;
}

.rangeMode .flatpickr-day {
  max-width: 100px;
  border: none;
  margin-top: 10px;
}

.flatpickr-weekdays {
  margin-top: 17px;
  margin-bottom: 10px;
}

.flatpickr-day.selected.startRange,
.flatpickr-day.startRange.startRange,
.flatpickr-day.endRange.startRange,
.flatpickr-day.selected.endRange,
.flatpickr-day.startRange.endRange,
.flatpickr-day.endRange.endRange {
  background-color: rgba(8, 95, 188, 1);
}

.flatpickr-day.inRange {
  background-color: rgba(8, 95, 188, 1);
  color: #fff;
  box-shadow: -5px 0 0 rgba(8, 95, 188, 1), 5px 0 0 rgba(8, 95, 188, 1) !important;
}

.flatpickr-day.selected.startRange,
.flatpickr-day.startRange.startRange,
.flatpickr-day.endRange.startRange {
  border: 0;
}

.flatpickr-day.inRange,
.flatpickr-day.prevMonthDay.inRange,
.flatpickr-day.nextMonthDay.inRange,
.flatpickr-day.today.inRange,
.flatpickr-day.prevMonthDay.today.inRange,
.flatpickr-day.nextMonthDay.today.inRange,
.flatpickr-day:hover,
.flatpickr-day.prevMonthDay:hover,
.flatpickr-day.nextMonthDay:hover,
.flatpickr-day:focus,
.flatpickr-day.prevMonthDay:focus,
.flatpickr-day.nextMonthDay:focus {
  background-color: rgba(8, 95, 188, 1);
  color: #fff;
  box-shadow: -16px 0 0 rgba(8, 95, 188, 1), 5px 0 0 rgba(8, 95, 188, 1) !important;
}

.flatpickr-day.selected.endRange,
.flatpickr-day.startRange.endRange,
.flatpickr-day.endRange.endRange {
  box-shadow: -16px 0 0 rgba(8, 95, 188, 1), 5px 0 0 rgba(8, 95, 188, 1) !important;
}

body .container .CalenderContainer {
  margin-top: 50px;
  padding: 35px;
  background-color: #fff;
  box-shadow: 0px 3px 6px 0px #9298b1;
  border-radius: 5px;
}

body .container .CalenderContainer .avilable h3 {
  font-family: "Rubik";
  font-size: 16px;
  font-weight: 500;
  color: rgba(146, 152, 177, 1);
  margin-bottom: 5px;
}

body .container .CalenderContainer .avilable p {
  margin-top: 21px;
  font-weight: 100;
  display: inline-block;
  margin: 0 12px;
  font-family: "Rubik";
  font-size: 16px;
  color: rgba(146, 152, 177, 1);
}

body .container .CalenderContainer .changePrice h3 {
  font-family: "Rubik";
  font-size: 16px;
  font-weight: 500;
  color: rgba(146, 152, 177, 1);
}

body .container .CalenderContainer .changePrice label {
  width: 70%;
}

body .container .CalenderContainer .changePrice input {
  height: 60px;
  width: 100%;
  border: 2px solid rgba(146, 152, 177, 1);
  border-radius: 8px;
  padding-left: 17px;
  outline: none;
}

body .container .CalenderContainer .changePrice button {
  display: inline-block;
  width: 28%;
  background-color: rgba(146, 152, 177, 1);
  border-radius: 8px;
  margin-top: 0;
}

body .container .CalenderContainer form {
  margin: 10px 0px;
}

.container .CalenderContainer .switchController p.hint {
  font-size: 12px;
  font-weight: 500;
  color: rgba(146, 152, 177, 1);
  margin: 0;
  margin-left: 16px;
  align-self: center;
}

.container .CalenderContainer .switchController button {
  height: 60px;
  background-color: #085fbc;
  border-radius: 8px;
  width: 100%;
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  margin: 26px auto;
  margin-bottom: 0;
  outline: none;
}
</style>