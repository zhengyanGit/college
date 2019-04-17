<template>
  <div class="head-box">
    <div class="head-top-bg">
      <div class="head-top bfb80">
        <div class="head-left">
          <p class="head-p-left pl50">
            <i class="iconfont icondizhi_"></i>上海
          </p>
          <p class="head-p-left">高招大数据精准服务平台</p>
          <p class="head-p-left head-p-info">厦门大学教育研究院 亲情推荐</p>
        </div>
        <div class="head-right">
          <p class="head-p-left">你好，</p>
          <router-link class="head-a head-p-left pr20" :to="{ path: '/platform'}">后台</router-link>
          <router-link class="head-a head-p-left pr20" :to="{ path: '/login'}">请登录</router-link>
          <router-link class="head-a head-p-left pr20" :to="{ path: '/register'}">免费注册</router-link>
          <p class="head-title-1 head-p-left">我的牛人帮</p>
        </div>
      </div>
    </div>
    <div class="head-contain bfb80">
      <div class="log">
        <router-link :to="{ path: '/'}">
          <img src="@/assets/img/logo.png" class="log-img">
        </router-link>
      </div>
      <div class="head-nav">
        <el-row>
          <el-col :span="3">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <router-link active-class="active" :to="{ path: '/' }" exact>首页</router-link>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <router-link active-class="active" :to="{ path: '/school'}">高招数据</router-link>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <router-link active-class="active" :to="{ path: '/reported/list'}">志愿填报</router-link>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <router-link active-class="active" :to="{ path: '/appraisal'}">专业测评</router-link>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <router-link active-class="active" :to="{ path: '/entrance'}">新高考</router-link>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <router-link active-class="active" :to="{ path: '/recruit/list'}">自主招生</router-link>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <router-link active-class="active" :to="{ path: '/community/info'}">家长招生</router-link>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <router-link active-class="active" :to="{ path: '/school/details/123'}">院校详情</router-link>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data: () => ({
    show3: true
  }),
  mounted: function() {
    console.log($(".head-nav>a").length);
  }
};
</script>
