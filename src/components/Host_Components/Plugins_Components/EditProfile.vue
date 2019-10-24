<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="editProfile">
          <div class="modal-header">
            <i @click="$emit('close')" class="fa fa-times"></i>
          </div>
          <form @submit.prevent="submit">
            <h3>{{$t('host.popup.editProfile')}}</h3>
            <input v-model="req.name" type="text" :placeholder="$t('host.AuthPages.nameInp')">
            <input v-model="req.phone_number" type="number" :placeholder="$t('host.AuthPages.PN')">
            <button type="submit">{{$t('host.AuthPages.done')}}</button>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      req: {
        name: null,
        phone_number: null
      }
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('EDITPROFILE', this.req)
      this.$emit('close')
    }
  }
};
</script>

<style scoped>
.editProfile {
  margin: auto;
  max-width: 500px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(146, 152, 177, 0.2);
  padding: 33px;
}

.editProfile h3 {
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: rgba(14, 82, 90, 1);
}

.editProfile input {
  height: 60px;
  width: 95%;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(146, 152, 177, 1);
  border-radius: 8px;
  padding: 25px;
  margin-top: 15px;
  outline: none;
  font-size: 14px;
}

.editProfile button {
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