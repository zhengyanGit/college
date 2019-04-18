<template>
  <div class="bfb80 scholl-list-body">
    <div class="school-list-filter-box">
      <div class="school-list-seach-box">
        <scholl-search-component :data="seachData" title="院校查询"></scholl-search-component>
        <!-- <div class="school-list-seach">
          <h2 class="school-list-seach-title">院校查询</h2>
          <div class="school-list-seach-bfb70">
            <el-input placeholder="院校名称" v-model="schollName" class="shool-list-seach-input">
              <el-button
                slot="append"
                icon="el-icon-search"
                type="primary"
                class="school-list-seach-btn"
              >搜 索</el-button>
            </el-input>
          </div>
        </div>-->
      </div>
      <ul class="school-list-filter-body">
        <li class="clearfix">
          <h3 class="school-list-filter-title">院校地区:</h3>
          <div class="school-list-filter-line">
            <a href="#">湖北</a>
            <a href="#">撒地方</a>
            <a href="#">湖北</a>
            <a href="#">风格化法国</a>
            <a href="#">萨拉丁咖啡碱撒扩大</a>
            <a href="#">湖北</a>
            <a href="#">撒地方</a>
            <a href="#">湖北</a>
            <a href="#">风格化法国</a>
            <a href="#">萨拉丁咖啡碱撒扩大</a>
            <a href="#">湖北</a>
            <a href="#">撒地方</a>
            <a href="#">湖北</a>
            <a href="#">风格化法国</a>
            <a href="#">湖北</a>
            <a href="#">撒地方</a>
            <a href="#">湖北</a>
            <a href="#">风格化法国</a>
          </div>
          <span>更多</span>
        </li>
        <li class="clearfix">
          <h3 class="school-list-filter-title">院校地位:</h3>
          <div class="school-list-filter-line">
            <a href="#">湖北</a>
            <a href="#">撒地方</a>
            <a href="#">湖北</a>
            <a href="#">风格化法国</a>
          </div>
          <span>更多</span>
        </li>
        <li class="clearfix">
          <h3 class="school-list-filter-title">院校举办:</h3>
          <div class="school-list-filter-line">
            <a href="#">湖北</a>
            <a href="#">撒地方</a>
            <a href="#">湖北</a>
            <a href="#">风格化法国</a>
          </div>
          <span>更多</span>
        </li>
        <li class="clearfix">
          <h3 class="school-list-filter-title">学历层次:</h3>
          <div class="school-list-filter-line">
            <a href="#">湖北</a>
            <a href="#">撒地方</a>
            <a href="#">湖北</a>
            <a href="#">风格化法国</a>
          </div>
          <span>更多</span>
        </li>
        <li class="clearfix active">
          <h3 class="school-list-filter-title">院校类型:</h3>
          <div class="school-list-filter-line">
            <a href="#">湖北</a>
            <a href="#">撒地方</a>
            <a href="#">湖北</a>
            <a href="#">风格化法国</a>
          </div>
          <span>更多</span>
        </li>
      </ul>
    </div>
    <div class="school-list-result clearfix">
      <p>已选条件：</p>
      <div class="school-list-result-box">
        <el-tag
          class="school-list-result-item"
          v-for="tag in tags"
          :key="tag.name"
          closable
        >{{tag.name}}</el-tag>
      </div>
      <a href="#" class="school-list-result-color school-list-result-clear">清除所有条件</a>
      <p>
        共找到
        <span class="school-list-result-color">127</span>所院校
      </p>
    </div>
    <div class="school-list-tab">
      <template>
        <el-table
          :header-cell-class-name="tableClassName"
          :row-class-name="tableRowClassName"
          :data="tableData"
          stripe
          header-align="center"
          style="width: 100%"
        >
          <el-table-column align="center" label="院校名称">
            <template slot-scope="scope">
              <a href="#" class="school-list-tab-name">{{scope.row.name}}</a>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="feature" label="院校特色"></el-table-column>
          <el-table-column align="center" prop="top" label="院校排名"></el-table-column>
          <el-table-column align="center" prop="area" label="院校地区"></el-table-column>
          <el-table-column align="center" prop="concern" label="隶属关系"></el-table-column>
          <el-table-column align="center" label="办学类型">
            <template slot-scope="scope">
              <a href="#">{{scope.row.type}}</a>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <div class="list-page-box">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>


<script>
import SchollSearchComponent from "../../_components/scholl-search-component.vue";
export default {
  name: "SchoolListPage",
  components: {
    SchollSearchComponent
  },
  data() {
    return {
      schollName: "", //院校名称 搜索字段
      tags: [
        //条件标签
        { name: "标签一", type: "" },
        { name: "标签二", type: "success" },
        { name: "标签三", type: "info" },
        { name: "标签四", type: "warning" },
        { name: "标签五", type: "danger" }
      ],
      tableData: [
        {
          name: "清华大学",
          feature: "te",
          top: "排名",
          area: "北京市",
          concern: "关系",
          type: "大学"
        },
        {
          name: "清华大学",
          feature: "te",
          top: "排名",
          area: "北京市",
          concern: "关系",
          type: "大学"
        },
        {
          name: "清华大学",
          feature: "te",
          top: "排名",
          area: "北京市",
          concern: "关系",
          type: "大学"
        },
        {
          name: "清华大学",
          feature: "te",
          top: "排名",
          area: "北京市",
          concern: "关系",
          type: "大学"
        },
        {
          name: "清华大学",
          feature: "te",
          top: "排名",
          area: "北京市",
          concern: "关系",
          type: "大学"
        }
      ]
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      return "school-list-tab-line";
    },
    tableClassName({ row, rowIndex }) {
      return "school-list-tab-head";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>