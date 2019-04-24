<template>
  <div class="user-head-bg">
    <div class="bfb80 clearfix">
      <div class="user-log">
        <img src="@/assets/img/user-log.png">
      </div>
      <div class="user-info clearfix">
        <div class="user-info-home">
          <i class="iconfont icondizhi_"></i>
          <router-link :to="{ path: '/' }">首页</router-link>
        </div>
        <div class="user-info-right">
          <a href="#" class="user-info-right-a">
            <i class="iconfont icontubiao-qiapian"></i>
          </a>
          <a href="#" class="user-info-right-a">
            <i class="iconfont iconxiaoxi"></i>
          </a>
          <a href="#" class="user-info-right-a">
            <i class="iconfont iconicon-test"></i>
          </a>
          <div class="user-info-right-box">
            <img src="@/assets/img/img2.png">
            <p>
              你好，xxx
              <router-link :to="{ path: '/' }">退出系统</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserHeader"
};
</script>
<style scoped>
.user-head-bg {
  height: 85px;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}

.user-log {
  width: 230px;
  background-color: #0d81f8;
  text-align: center;
  height: 75px;
  padding-top: 10px;
  margin-right: 20px;
  float: left;
}

.user-info-home {
  color: #3293f7;
  line-height: 85px;
  float: left;
  width: 80px;
}

.user-info-home a {
  font-size: 20px;
  color: #3293f7;
}

.user-info-right {
  float: right;
}

.user-info-right-a {
  float: left;
  padding: 0 15px;
  margin-top: 20px;
}

.user-info-right-a i {
  font-size: 30px;
  color: #666;
}

.user-info-right-box {
  float: left;
  margin-top: 28px;
  border-left: solid 1px #dcdcdc;
  padding-left: 20px;
}

.user-info-right-box p {
  float: left;
}

.user-info-right-box img {
  float: left;
  width: 28px;
  height: 28px;
  overflow: hidden;
  border-radius: 14px;
  margin-right: 20px;
}

.user-info-right-box a {
  color: #3293f7;
  padding-left: 30px;
}
</style>
