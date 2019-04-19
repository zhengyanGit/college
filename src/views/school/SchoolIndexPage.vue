<template>
  <div class="school-bg">
    <router-view/>
  </div>
</template>

<script>
import schoolComponent from "../_components/school-component.vue";
export default {
  name: "SchoolIndexPage",
  components: {
    schoolComponent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>