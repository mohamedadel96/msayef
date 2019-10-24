<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="PaymentMethods">
          <div class="modal-header">
            <i @click="$emit('closeCHREQ')" class="fa fa-times"></i>
          </div>
          <form>
            <h3>{{$t("host.calender.CHRQ")}}</h3>
            <select v-model="title_key">
              <optgroup :label="$t('host.calender.slctLable')">
                <option value="title">{{$t("host.calender.title")}}</option>
                <option value="description">{{$t("host.calender.description")}}</option>
              </optgroup>
            </select>
            <input type="text" v-model="notes" />
            <button type="submit" @click.prevent="submit">{{$t("host.AuthPages.done")}}</button>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["property_id"],
  data() {
    return {
      title_key: null,
      notes: null
    };
  },
  methods: {
    submit() {
      let req_body = {
        property_id: this.$props.property_id,
        title_key: this.title_key,
        notes: this.notes
      };
      this.$store.dispatch("EDITREQUEST", req_body);
    }
  }
};
</script>

<style scoped>
.PaymentMethods {
  margin: 0 auto;
  max-width: 500px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(146, 152, 177, 0.2);
  padding: 33px;
}

.PaymentMethods h3 {
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
}

.PaymentMethods input,
select {
  height: 60px;
  width: 95%;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(146, 152, 177, 1);
  border-radius: 8px;
  padding-left: 10px;
  margin-top: 15px;
  outline: none;
  font-size: 14px;
}
.PaymentMethods input {
  height: 180px;
}
.PaymentMethods input::placeholder {
  justify-content: flex-start;
}
.PaymentMethods button {
  height: 60px;
  width: 95%;
  background-color: rgba(8, 95, 188, 1);
  border-radius: 8px;
  color: #fff;
  margin-top: 15px;
  border: none;
  outline: none;
}
</style>