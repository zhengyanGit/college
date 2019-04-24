<template>
  <div class="user-menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo menu-zy"
      text-color="#fff"
      background-color="#0a55ef"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>志愿模拟</span>
        </template>
        <el-menu-item index="1-1" class="menu-two">我的志愿</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>高考资讯</span>
        </template>
        <el-menu-item index="2-1" class="menu-two">高考资讯</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户中心</span>
        </template>
        <el-menu-item index="3-1" class="menu-two">我的账号</el-menu-item>
        <el-menu-item index="3-2" class="menu-two">我的关注</el-menu-item>
        <el-menu-item index="3-3" class="menu-two">我的留言</el-menu-item>
        <el-menu-item index="3-4" class="menu-two">我的消息</el-menu-item>
        <el-menu-item index="3-5" class="menu-two">我的经验</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "UserMenu"
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 左侧导航 */
.user-menu {
  width: 230px;
  height: 100%;
  background: #0d55f0;
  float: left;
}
.user-menu .el-menu {
  border-right: none;
}
.user-menu .el-menu li.menu-two {
  text-indent: 13px;
}
.user-menu li i {
  color: #fff;
}
</style>
