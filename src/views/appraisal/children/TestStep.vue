<template>
  <div class="appl-test-contians">
    <div class="appl-test-top">
      <div class="appl-test-title">第一部分 | 您所感兴趣的活动</div>
      <div class="appl-test-info">下面列举了若干种活动，请就这些活动判断你的喜好，喜欢就打勾。</div>
    </div>
    <div class="appl-test-item">
      <h3>
        <i></i>实际型活动
      </h3>
      <ul class="appl-test-ul clearfix">
        <li>
          <template>
            <el-checkbox v-model="checked">1、撒飞洒地方</el-checkbox>
          </template>
        </li>
        <li>
          <template>
            <el-checkbox v-model="checked">2、备选项撒可见度飞机开始加大会发生喀军队霍夫卡就哈哈十点附近发生</el-checkbox>
          </template>
        </li>
        <li>
          <template>
            <el-checkbox v-model="checked">3、就能看到分公司</el-checkbox>
          </template>
        </li>
        <li>
          <template>
            <el-checkbox v-model="checked">4、更何况加工费哈哈哈</el-checkbox>
          </template>
        </li>
        <li>
          <template>
            <el-checkbox v-model="checked">1、撒飞洒地方</el-checkbox>
          </template>
        </li>
        <li>
          <template>
            <el-checkbox v-model="checked">2、备选项</el-checkbox>
          </template>
        </li>
        <li>
          <template>
            <el-checkbox v-model="checked">3、就能看到分公司</el-checkbox>
          </template>
        </li>
        <li>
          <template>
            <el-checkbox v-model="checked">4、更何况加工费哈哈哈</el-checkbox>
          </template>
        </li>
      </ul>
    </div>
    <div class="appl-test-item">
      <h3>
        <i></i>实际型活动
      </h3>
      <ul class="appl-test-ul clearfix">
        <li>
          <template>
            <el-checkbox v-model="checked">1、撒飞洒地方</el-checkbox>
          </template>
        </li>
        <li>
          <template>
            <el-checkbox v-model="checked">2、备选项</el-checkbox>
          </template>
        </li>
        <li>
          <template>
            <el-checkbox v-model="checked">3、就能看到分公司</el-checkbox>
          </template>
        </li>
        <li>
          <template>
            <el-checkbox v-model="checked">4、更何况加工费哈哈哈</el-checkbox>
          </template>
        </li>
        <li>
          <template>
            <el-checkbox v-model="checked">1、撒飞洒地方</el-checkbox>
          </template>
        </li>
        <li>
          <template>
            <el-checkbox v-model="checked">2、备选项</el-checkbox>
          </template>
        </li>
        <li>
          <template>
            <el-checkbox v-model="checked">3、就能看到分公司</el-checkbox>
          </template>
        </li>
        <li>
          <template>
            <el-checkbox v-model="checked">4、更何况加工费哈哈哈</el-checkbox>
          </template>
        </li>
      </ul>
    </div>
    <a href="#" class="appl-test-btn"></a>
    <router-link class="appl-test-btn" :to="{ path: '/appraisal/step2'}">提交并进行下一步测试</router-link>
  </div>
</template>


<script>
export default {
  name: "AppraisalTestStepPage",
  data() {
    return {
      checked: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>