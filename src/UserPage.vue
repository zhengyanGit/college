<template>
  <div class="user">
    <user-header></user-header>
    <div class="user-body bfb80">
      <user-menu></user-menu>
      <div class="user-contian">
        <div class="user-contian-nr">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footer-cpt></footer-cpt>
  </div>
</template>

<script>
import UserHeader from "@/components/UserHeader";
import FooterCpt from "@/components/FooterCpt";
import UserMenu from "@/components/UserMenu";

export default {
  name: "UserPage",
  components: {
    FooterCpt,
    UserHeader,
    UserMenu
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user {
  height: 100%;
  background-color: #fafafa;
}
.user-body {
  height: 100%;
  padding-bottom: 70px;
}
.user-contian {
  padding-left: 230px;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  box-sizing: border-box;
}
.user-contian-nr {
  margin-left: 20px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  top: 20px;
}
</style>