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
          <el-col class="head-mousemove" :span="3">
            <div class="grid-content">
              <router-link active-class="active" class="nav-first" :to="{ path: '/' }" exact>首页</router-link>
            </div>
          </el-col>
          <el-col class="head-mousemove" :span="3">
            <div class="grid-content">
              <router-link active-class="active" class="nav-first" :to="{ path: '/school'}">高招数据</router-link>
              <ul class="nav">
                <li>
                  <router-link active-class="active" :to="{ path: '/school/list'}">院校名录</router-link>
                </li>
                <li>
                  <router-link active-class="active" :to="{ path: '/school/major'}">专业介绍</router-link>
                </li>
                <li>
                  <router-link active-class="active" :to="{ path: '/school/segment'}">批次线查询</router-link>
                </li>
                <li>
                  <router-link active-class="active" :to="{ path: '/school/score'}">院校分数查询</router-link>
                </li>
                <li>
                  <router-link active-class="active" :to="{ path: '/school/batch'}">一分一段查询</router-link>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col class="head-mousemove" :span="3">
            <div class="grid-content">
              <router-link
                active-class="active"
                class="nav-first"
                :to="{ path: '/reported/list'}"
              >志愿填报</router-link>
            </div>
          </el-col>
          <el-col class="head-mousemove" :span="3">
            <div class="grid-content">
              <router-link active-class="active" class="nav-first" :to="{ path: '/appraisal'}">专业测评</router-link>
            </div>
          </el-col>
          <el-col class="head-mousemove" :span="3">
            <div class="grid-content">
              <router-link active-class="active" class="nav-first" :to="{ path: '/entrance'}">新高考</router-link>
            </div>
          </el-col>
          <el-col class="head-mousemove" :span="3">
            <div class="grid-content">
              <router-link active-class="active" class="nav-first" :to="{ path: '/recruit'}">自主招生</router-link>
              <ul class="nav">
                <li>
                  <router-link active-class="active" :to="{ path: '/recruit/lsit'}">专业介绍</router-link>
                </li>
                <li>
                  <router-link active-class="active" :to="{ path: '/recruit/oneself'}">自招数据查询</router-link>
                </li>
                <li>
                  <router-link active-class="active" :to="{ path: '/recruit/student'}">自主招生1对1</router-link>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col class="head-mousemove" :span="3">
            <div class="grid-content">
              <router-link
                active-class="active"
                class="nav-first"
                :to="{ path: '/community/info'}"
              >家长招生</router-link>
            </div>
          </el-col>
          <el-col class="head-mousemove" :span="3">
            <div class="grid-content">
              <router-link
                active-class="active"
                class="nav-first"
                :to="{ path: '/school/details/123'}"
              >院校详情</router-link>
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
    /* 简易导航 */

    $(".head-mousemove").mousemove(function() {
      $(this)
        .find("ul")
        .slideDown();
    });
    $(".head-mousemove").mouseleave(function() {
      $(this)
        .find("ul")
        .stop(1, 1)
        .slideUp();
    });

    /* var timer = null;
    $(".nav-first").hover(
      function() {
        $(this)
          .next()
          .slideDown();
      },
      function() {
        console.log("zoule");
        timer = setTimeout(function() {
          console.log("zoule-123");
          $(this)
            .next()
            .slideUp();
        }, 500);
      }
    );
    $(".nav").hover(
      function() {
        clearTimeout(timer);
      },
      function() {
        $(this).slideUp();
      }
    ); */
  }
};
</script>
