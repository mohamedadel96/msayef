<template>
  <div>
    <NavBar></NavBar>
    <step-progress :steps="steps" :current-step="currentStep" icon-class="fa fa-check"></step-progress>
    <router-view></router-view>
  </div>
</template>

<script>
const StepProgress = () => import("vue-step-progress");
import "vue-step-progress/dist/main.css";
export default {
  metaInfo: {
    title: "مصايف"
  },
  components: {
    StepProgress
  },
  data() {
    return {
      steps: [1, 2, 3, 4, 5, 6, 7]
    };
  },
  computed: {
    currentStep() {
      return Number(this.$store.getters.Get_current_step);
    }
  }
};
</script>

<style scoped>
</style>