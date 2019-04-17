<template>
  <div class="title-compont">
    <h2 class="title-compont-h2" v-text="title"></h2>
  </div>
</template>
<script>
export default {
  name: "title-component",
  props: ["title"],
  data: () => ({}),
  mounted: function() {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-compont-h2 {
  font-size: 20px;
  border-left: solid 5px #3293f7;
  padding-left: 13px;
  color: #040404;
  font-weight: bold;
  margin-top: 27px;
  margin-bottom: 27px;
}
</style>