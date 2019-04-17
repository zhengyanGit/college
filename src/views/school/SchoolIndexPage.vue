<template>
<div class="school-bg">
    <scholl-component></scholl-component>
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
.school-bg {
  padding-top: 10px;
  background-color: #f5f5f5;
}
</style>