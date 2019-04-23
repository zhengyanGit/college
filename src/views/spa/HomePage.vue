<template>
  <div class="clearfix home-box bfb80">
    <div class="home-main">
      <div class="home-introduce">
        <div class="home-introduce-head">
          <title-component title="牛人介绍"></title-component>
        </div>
        <div class="home-introduce-body color-white clearfix">
          <div class="grid-content bg-purple home-one-img-box-left">
            <div class="home-one-img-box">
              <img src="@/assets/img/img1.png" class="home-one-img">
            </div>
            <a href="/" class="home-lx-a">联系他</a>
          </div>
          <div class="grid-content bg-purple-light home-two-right">
            <div class="home-introduce-title-box clearfix">
              <h1 class="home-introduce-title">江博士</h1>
              <p class="home-introduce-info">
                <i class="iconfont icondizhi_"></i>首席专家
              </p>
            </div>
            <p class="home-introduce-details">
              <span class="home-introduce-weith">擅长领域：</span>高考志愿填报指导、中学生生涯规划
            </p>
            <div class="home-introduce-message">
              <p class="home-introduce-message-p">
                <span class="home-introduce-weith">背景简介：</span>中国地质大学教授、博士、全国著名高考专家，教育专家，高级咨询师，从事高考志愿填报指导工作多年。对湖北、湖南、河南、山东的高考志愿填报、自主招生综合评价升学等方面有多年的实际指导经验。
              </p>
              <p class="home-introduce-message-p">
                <span class="home-introduce-weith">指导年限：</span>10年
              </p>
              <p class="home-introduce-message-p">
                <span class="home-introduce-weith">服务区域：</span>湖北省、湖南省、河南省等
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="home-list">
        <title-component title="最新咨询记录"></title-component>
        <div class="home-list-box">
          <ul class="home-list-ul">
            <li>
              <h3>
                张同学 | 湖北省
                <span>2018/07/06</span>
              </h3>
              <p>张同学在使用平台模拟填报志愿时遇到了问题，请教了平台，同时得到了专家的精心指导，于2018年7月20日以第一志愿录取心意的大学，张同学对于专家的指导表示衷心的感谢，希望其他的同学通过平台可以得到更多的帮助，圆梦大学！</p>
            </li>
            <li>
              <h3>
                张同学 | 湖北省
                <span>2018/07/06</span>
              </h3>
              <p>张同学在使用平台模拟填报志愿时遇到了问题，请教了平台，同时得到了专家的精心指导，于2018年7月20日以第一志愿录取心意的大学，张同学对于专家的指导表示衷心的感谢，希望其他的同学通过平台可以得到更多的帮助，圆梦大学！</p>
            </li>
            <li>
              <h3>
                张同学 | 湖北省
                <span>2018/07/06</span>
              </h3>
              <p>张同学在使用平台模拟填报志愿时遇到了问题，请教了平台，同时得到了专家的精心指导，于2018年7月20日以第一志愿录取心意的大学，张同学对于专家的指导表示衷心的感谢，希望其他的同学通过平台可以得到更多的帮助，圆梦大学！</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="home-aside">
      <div class="home-aside-box">
        <title-component title="牛人.专业咨询"></title-component>
        <ul class="home-aside-list">
          <li>
            <img src="@/assets/img/img2.png" class="home-aside-list-img">
            <h3>江博士</h3>
            <p>全国著名高考专家，高级辅导室</p>
          </li>
          <li>
            <img src="@/assets/img/img2.png" class="home-aside-list-img">
            <h3>江博士</h3>
            <p>全国著名高考专家，高级辅导室</p>
          </li>
          <li>
            <img src="@/assets/img/img2.png" class="home-aside-list-img">
            <h3>江博士</h3>
            <p>全国著名高考专家，高级辅导室</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import titleComponent from "../_components/title-component.vue";
export default {
  name: "index",
  data: () => ({
    show3: true,
    zy:
      "凯撒及地方艰苦撒旦反抗撒旦解放凯撒大帝健身卡的JFK撒地方考试的考生大苏打大苏打大是大非"
  }),
  components: {
    titleComponent
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>