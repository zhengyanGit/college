<template>
  <div>
    <school-component></school-component>
    <div class="bfb80 clearfix school-details">
      <div class="left-nav">
        <router-link active-class="active" :to="{ path: '/school/details/123'}">院校介绍</router-link>
        <router-link active-class="active" :to="{ path: '/school/details/123/faculty'}">院系设置</router-link>
        <router-link active-class="active" :to="{ path: '/school/details/123/faculty'}">专业介绍</router-link>
        <router-link active-class="active" :to="{ path: '/school/details/123/faculty'}">录取数据</router-link>
        <router-link active-class="active" :to="{ path: '/school/details/123/faculty'}">招生章程</router-link>
        <router-link active-class="active" :to="{ path: '/school/details/123/faculty'}">自主招生</router-link>
        <router-link active-class="active" :to="{ path: '/school/details/123/faculty'}">牛人帮</router-link>
      </div>
      <div class="contain">
        <div>学校名录详情{{$route.params.id}}</div>
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
}
.left-nav {
  width: 250px;
  background-color: #fff;
  float: left;
  margin-right: 18px;
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
.contain {
  width: 900px;
  background-color: antiquewhite;
  float: left;
}
</style>