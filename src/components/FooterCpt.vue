<template>
  <div class="foot-box">
    <div class="foot-link-bg">
      <div class="bfb80">
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <ul class="foot-link-list">
                <li>帮助中心</li>
                <li>
                  <router-link :to="{ path: '/404' }">使用指南</router-link>
                </li>
                <li>
                  <router-link :to="{ path: '/404' }">常见问题</router-link>
                </li>
                <li>
                  <router-link :to="{ path: '/404' }">在线留言</router-link>
                </li>
              </ul>
              <ul class="foot-link-list">
                <li>关于我们</li>
                <li>
                  <router-link :to="{ path: '/404' }">联系我们</router-link>
                </li>
                <li>
                  <router-link :to="{ path: '/404' }">合作咨询</router-link>
                </li>
                <li>
                  <router-link :to="{ path: '/404' }">免费声明</router-link>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <div class="foot-link-time">
                <h3>工作时间</h3>
                <p>周一到周六 09:00-20:00</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="foot-link-img">
                <img src="@/assets/img/wechat.png" class="foot-link-img-item">
                <p>
                  <i class="iconfont iconweixin foot-wechat-color mr5"></i>微信公众号
                </p>
              </div>
              <div class="foot-link-img">
                <img src="@/assets/img/wechat2.png" class="foot-link-img-item">
                <p>
                  <i class="iconfont icontianchongxing- foot-wechat-color2 mr5"></i>微信小程序
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="foot-info-bg">
      <p class="foot-info-p foot-info-top">浙ICP备19011267号-1 | 浙公网安备8888888888</p>
      <p class="foot-info-p">Copyright © 2019-2020 浙江牛人邦大数据科技有限公司版权所有，翻版必究</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerCpt",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>