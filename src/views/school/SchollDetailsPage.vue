<template>
  <div>
    <div class="left-nav">
      <router-link :to="{ path: '/school/details/123'}">专业介绍</router-link>
      <router-link :to="{ path: '/school/details/123/faculty'}">开设院校</router-link>
    </div>
    <div class="contain">
      <div>学校名录详情{{$route.params.id}}</div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-nav {
  width: 250px;
  background-color: bisque;
  float: left;
}
.contain {
  width: 900px;
  background-color: antiquewhite;
  float: left;
}
</style>