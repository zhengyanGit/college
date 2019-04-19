<template>
  
    <div class="school-head-bg">
      <div class="bfb80">
        <a href="#" class="scholl-collect">
          <i class="iconfont iconshoucang mr5"></i>收藏
        </a>
        <div class="scholl-tag clearfix">
          <h2 class="scholl-tag-title">北京大学</h2>
          <span class="scholl-tag-item">双一流</span>
          <span class="scholl-tag-item">双一流</span>
          <span class="scholl-tag-item">双一流</span>
          <span class="scholl-tag-item scholl-tag-item2">公办</span>
        </div>
        <div class="scholl-icon">
          <img src="@/assets/img/icon1.png" class="scholl-icon-img">
          <img src="@/assets/img/icon2.png" class="scholl-icon-img">
        </div>
      </div>
    </div>

</template>
<script>
export default {
  name: "scholl-component"
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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