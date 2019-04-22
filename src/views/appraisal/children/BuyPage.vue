<template>
  <div>
    购买页面
    <router-link :to="{ path: '/appraisal/step1'}">测试一</router-link>
  </div>
</template>

<script>
export default {
  name: "AppraisalBuyPage",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>