<template>
  <div class="school-bg">
    <scholl-component></scholl-component>
    <div class="bfb80 clearfix">
      <div class="school-menu-box">
        <ul class="school-menu">
          <li>
            <router-link :to="{ path: '/school/details/123'}">院校介绍</router-link>
          </li>
          <li>
            <router-link :to="{ path: '/school/details/123/faculty'}">院校介绍</router-link>
          </li>
        </ul>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import schollComponent from "../_components/school-component.vue";
export default {
  name: "SchoolIndexPage",
  components: {
    schollComponent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.school-bg {
  padding-top: 10px;
  background-color: #f5f5f5;
}
.school-bg {
  width: 100%;
}

.school-menu-box {
  width: 230px;
  float: left;
  margin-right: 15px;
}
.school-menu {
  background-color: #fff;
}
.school-menu a {
  height: 47px;
  line-height: 47px;
  display: block;
  font-size: #333;
  font-size: 16px;
  padding-top: 20px;
}
.school-menu a.active {
  height: 47px;
  display: block;
  font-size: #fff;
  font-size: 16px;
  background-color: #1782f1;
}
</style>