<template>
  <div class="school-bg">
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
  name: "scholl-component",
  props: ["title"],
  data: () => ({}),
  mounted: function() {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-compont-h2 {
  font-size: 20px;
  border-left: solid 5px #3293f7;
  padding-left: 13px;
  color: #040404;
  font-weight: bold;
  margin-top: 27px;
  margin-bottom: 27px;
}
</style>