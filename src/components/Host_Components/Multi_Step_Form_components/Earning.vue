<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-offset-3 HowMuchEarn">
        <h1>{{$t("host.MS_form.earning.title")}}</h1>
        <form action>
          <label for>
            <input v-model="price" class="active" type="number">
            <span>{{$t("host.MS_form.earning.input_label")}}</span>
          </label>
          <p class="note">{{$t("host.MS_form.earning.note")}} {{Math.ceil(price * 0.1)}} {{$t("host.MS_form.earning.money.curency")}}</p>
          <p class="hint">{{$t("host.MS_form.earning.hint")}} {{Math.ceil(price * 0.1)}} {{$t("host.MS_form.earning.money.curency")}}</p>

          <div class="feature">
            <div>
              <i class="fas fa-check"></i>
              <p>{{$t("host.MS_form.earning.features.f_1")}}</p>
            </div>
            <div>
              <i class="fas fa-check"></i>
              <p>{{$t("host.MS_form.earning.features.f_2")}}</p>
            </div>
            <div>
              <i class="fas fa-check"></i>
              <p>{{$t("host.MS_form.earning.features.f_3")}}</p>
            </div>
          </div>
          <hr>
          <p class="MonyEarned">
            {{$t("host.MS_form.earning.money.description1")}}
            <span>{{Math.ceil(price * 0.9)}} {{$t("host.MS_form.earning.money.curency")}}</span>
          </p>
          <hr/>
          <p class="MonyEarned">
            {{$t("host.MS_form.earning.money.description2")}}
            <span>{{$t("host.MS_form.earning.money.curency")}}</span>
          </p>
          <button @click.prevent="$router.push('/host/multi-step-form/polices')">{{$t("host.AuthPages.continue")}}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      price: null
    }
  }
};
</script>

<style scoped>
.container .HowMuchEarn {
  margin-top: 50px;
  padding: 36px;
  background-color: #fff;
  box-shadow: 0px 3px 6px 0px #9298b1;
  border-radius: 5px;
  height: 668px;
  position: relative;
  margin-bottom: 7px;
}

.HowMuchEarn h1 {
  margin: 27px 0;
  margin-top: 0;
  font-size: 24px;
  color: rgba(14, 82, 90, 1);
}

.HowMuchEarn form label input {
  display: block;
  outline: none;
  width: 98%;
  height: 85%;
  padding-left: 2px;
  border: none;
  margin: 4px;
}

.HowMuchEarn form label span {
  position: absolute;
  top: 2px;
  left: 7px;
  font-size: 8px;
  font-weight: 500;
  color: rgba(146, 152, 177, 1);
}

.HowMuchEarn form label {
  display: block;
  position: relative;
  width: 99%;
  height: 60px;
  margin: 0;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(146, 152, 177, 1);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(8, 95, 188, 1);
}

.HowMuchEarn form p.note {
  font-size: 12px;
  color: rgba(146, 152, 177, 1);
  margin: 10px 0px;
}

.HowMuchEarn form p.hint {
  font-size: 16px;
  color: rgba(8, 95, 188, 1);
  margin: 10px 0px;
}

.HowMuchEarn form .feature div {
  margin: 19px 8px;
}

.HowMuchEarn form .feature div i {
  display: inline-block;
  color: rgba(21, 183, 33, 1);
  font-size: 13px;
  margin-right: 10px;
}

.HowMuchEarn form .feature div p {
  display: inline-block;
  font-size: 16px;
  color: rgba(14, 82, 90, 1);
  font-weight: 300;
}

.HowMuchEarn form .MonyEarned {
  font-size: 16px;
  color: rgba(8, 95, 188, 1);
  font-weight: 300;
}

.HowMuchEarn form .MonyEarned span {
  margin-left: 5px;
  font-weight: bold;
}

.HowMuchEarn form button {
  background-color: rgba(8, 95, 188, 1);
  border-radius: 8px;
  height: 60px;
  width: 90%;
  border: 0;
  outline: none;
  color: #fff;
  font-size: 16px;
  position: absolute;
  bottom: 10px;
  left: 5%;
}
</style>