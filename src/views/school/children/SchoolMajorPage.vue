<template>
  <div class="bfb80 school-list-body">
    <div class="school-major-box">
      <div class="school-list-seach-box">
        <school-search-component @sendSearchFn="_sendSearchFn" :data="seachData">
          <a href="#" class="school-list-seach-href">专业倾向测试 ></a>
        </school-search-component>
      </div>
      <p class="school-major-info">
        2012教育部公布了最新的《普通高等学校专业目录（2012年）》，对1998年原《普通高等学校本科专业目录》进行了调整。《普通高等学校专业目录（2012年）》分为基本专业
        （352种）和特设专业（154种）共506中专业，并确定了62中专业为国家控制布点专业。特设专业和国家控制布点专业分别在专业代码后加“T”和“K”表示，以示区分。
      </p>
    </div>
    <div class="school-major-tab">
      <ul class="school-major-tab-head clearfix">
        <li :class="tabIndex==0?'active':null" @click="_tabFn(0)">本科专业列表</li>
        <li :class="tabIndex==1?'active':null" @click="_tabFn(1)">专科专业列表</li>
      </ul>
      <div class="school-major-tab-body">
        <div class="school-major-lead">
          <el-row>
            <el-col :span="2">
              <div class="grid-content">哲学</div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content">经济学</div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content">法学</div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content">教育学</div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content">文学</div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content">历史学</div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content">理学</div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content">工学</div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content">农学</div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content">医学</div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content">管理学</div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content active">艺术学</div>
            </el-col>
          </el-row>
        </div>
        <div class="school-major-tab-item" v-show="tabIndex==0">
          <div class="school-major-tree">
            <div class="school-major-tree-one">
              <h3>01 哲学</h3>
              <p>1个专业类，4个本科专业</p>
            </div>
            <div class="school-major-tree-two">0101哲学类</div>
            <div class="school-major-tree-three">
              <el-row>
                <el-col :span="4">
                  <div class="grid-content">
                    <router-link class="school-list-tab-name" :to="{ path: '/school/major/123'}">哲学</router-link>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content">
                    <a href="#">哲学</a>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content">
                    <a href="#">哲学</a>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content">
                    <a href="#">算得上是</a>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content">
                    <a href="#">哲学</a>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content">
                    <a href="#">算得上是</a>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content">
                    <a href="#">哲学</a>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content">
                    <a href="#">算得上是</a>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="school-major-tab-item" v-show="tabIndex==1">专科</div>
      </div>
    </div>
  </div>
</template>


<script>
import SchoolSearchComponent from "../../_components/school-search-component.vue";
export default {
  name: "SchoolMajorPage",
  components: {
    SchoolSearchComponent
  },
  data() {
    return {
      schoolName: "", //院校名称 搜索字段
      tabIndex: 0, // tab 索引
      seachData: {
        title: "专业查询",
        placeholder: "专业名称/专业标签"
      }
    };
  },
  methods: {
    _tabFn(tabnum) {
      this.tabIndex = tabnum;
    },
    _sendSearchFn(sendParams) {
      console.log(sendParams);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>