<template>
  <div class="school-list-seach">
    <h2 class="school-list-seach-title" v-text="data.title"></h2>
    <div class="school-list-seach-bfb70">
      <el-input :placeholder="data.placeholder" v-model="schoolName" class="shool-list-seach-input">
        <el-button
          slot="append"
          icon="el-icon-search"
          type="primary"
          class="school-list-seach-btn"
          @click="_searchFn"
        >搜 索</el-button>
      </el-input>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "school-search-component",
  props: ["data"],
  data() {
    return {
      schoolName: ""
    };
  },
  methods: {
    _searchFn() {
      this.$emit("sendSearchFn", this.schoolName);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.school-list-seach {
  padding: 22px 0;
}

.school-list-seach-title {
  color: #3293f7;
  font-size: 16px;
  float: left;
  line-height: 44px;
  padding: 0 20px 0 25px;
}

.school-list-seach-href {
  font-size: 16px;
  float: left;
  line-height: 44px;
  color: #f28443;
  padding-left: 30px;
}

.school-list-seach-btn {
  background-color: #3293f7 !important;
  color: #fff !important;
  border-radius: 0px 4px 4px 0px !important;
}

.school-list-seach-bfb70 {
  width: 500px;
  float: left;
}
</style>