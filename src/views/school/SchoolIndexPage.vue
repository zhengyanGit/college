<template>
  <div class="school-bg">
    <router-view/>
  </div>
</template>

<script>
import schollComponent from "../_components/scholl-component.vue";
export default {
  name: "SchoolIndexPage",
  components: {
    schollComponent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>