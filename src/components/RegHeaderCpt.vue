<template>
  <div class="sing-head-bg">
    <div class="bfb80">
      <router-link :to="{ path: '/'}">
        <img src="@/assets/img/logo.png" class="log-img sing-head-pt30">
      </router-link>
      <h1 class="sing-head-h1 sing-head-text">欢迎注册</h1>
      <p class="sing-head-jup sing-head-text">
        已有账号？
        <router-link :to="{ path: '/login'}" class="sing-login">请登录</router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "RegHeaderCpt",
  data: () => ({}),
  mounted: function() {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sing-head-bg {
  width: 100%;
  height: 140px;
}
.sing-head-h1 {
  float: left;
  padding-left: 30px;
}
.sing-head-jup {
  float: right;
}
.sing-head-text {
  font-size: 24px;
  padding-top: 55px;
}
.sing-head-pt30 {
  padding-top: 30px;
}

.sing-login {
  color: #3494f6;
}
</style>

