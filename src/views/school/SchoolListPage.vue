<template>
  
    <router-view/>
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
.school-bg {
  padding-top: 10px;
  background-color: #f5f5f5;
}
.school-head-bg {
  width: 100%;
  height: 240px;
  background: #52b8f5;
}
.scholl-tag {
  padding-top: 60px;
}
.scholl-tag-title {
  font-size: 20px;
  color: #fff;
  float: left;
  margin-right: 20px;
}
.scholl-tag-item {
  float: left;
  font-size: 14px;
  background-color: #ff7c2e;
  padding: 6px 10px;
  color: #fff;
  border-radius: 5px;
  margin-right: 5px;
}
.scholl-tag-item2 {
  background-color: #00a100;
}
.scholl-collect {
  font-size: 14px;
  color: #fff;
  float: right;
  padding: 20px 30px 0 0;
}
.scholl-icon {
  margin-top: 70px;
}
.scholl-icon-img {
  float: left;
  margin-right: 18px;
}
</style>