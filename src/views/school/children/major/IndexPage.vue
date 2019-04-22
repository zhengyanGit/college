<template>
  <div>
    <school-component></school-component>
    <div class="bfb80 clearfix school-details">
      <div class="left-nav">
        <router-link
          active-class="active"
          :to="{ path: `/school/major/${$route.params.detailId}/info`}"
        >专业详情</router-link>
        <router-link
          active-class="active"
          :to="{ path: `/school/major/${$route.params.detailId}/setting`}"
        >开设院校</router-link>
        <router-link
          active-class="active"
          :to="{ path: `/school/major/${$route.params.detailId}/fierce`}"
        >牛人帮</router-link>
      </div>
      <div class="school-contain">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import SchoolComponent from "../../../_components/school-component.vue";
export default {
  components: {
    SchoolComponent
  },
  name: "SchollDetailsPage",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.school-details {
  margin-top: 30px;
  padding-bottom: 100px;
}
.left-nav {
  width: 20%;
  background-color: #fff;
  float: left;
  margin-right: 2%;
  padding-bottom: 20px;
}
.left-nav a {
  display: block;
  height: 47px;
  line-height: 47px;
  margin-top: 20px;
  font-size: 16px;
  text-indent: 35px;
}
.left-nav a.active {
  background-color: #1782f1;
  color: #fff;
}
.school-contain {
  float: left;
  width: 75%;
}
</style>