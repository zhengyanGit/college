<template>
  <div class="reported-simulation">
    <div class="reported-simulation-filter">
      <p class="reported-simulation-filter-area">
        <a href="#">湖北</a>
        <a href="#">丨</a>
        <a href="#">理科</a>
      </p>
      <el-row class="school-dts-enroll-filter-top">
        <el-col :span="2">
          <div class="grid-content school-dts-enroll-text-right">提报方式：</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">
            <el-select class="school-dts-enroll-select" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content school-dts-enroll-text-right">专业倾向：</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">
            <el-select class="school-dts-enroll-select" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content school-dts-enroll-text-right">志愿类型：</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">
            <el-select class="school-dts-enroll-select" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content school-dts-enroll-text-right">总分：</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">
            <el-input v-model="value" placeholder="请输入内容"></el-input>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content school-dts-enroll-text-right">位次：</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">
            <el-input v-model="value" placeholder="请输入内容"></el-input>
          </div>
        </el-col>
      </el-row>
      <div class="school-dts-enroll-btn">
        <el-button type="primary">保 存</el-button>
        <el-button type="primary">历史志愿</el-button>
      </div>
    </div>
    <div class="reported-simulation-table">
      <template>
        <el-table
          :header-cell-class-name="tableClassName"
          :row-class-name="tableRowClassName"
          :data="tableData"
          stripe
          header-align="center"
          style="width: 100%"
        >
          <el-table-column align="center" label="录取批次">
            <template slot-scope="scope">
              <div class="reported-simulation-table-img">本科一批志愿填报</div>
            </template>
          </el-table-column>
          <el-table-column width="320" align="center" prop="feature" label="相关信息">
            <template slot-scope="scope">
              <h2>普通类第一批录取本科学校</h2>
              <p>2018年控制线：理科：512分，文科：561分</p>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="top" label="A志愿"></el-table-column>
          <el-table-column align="center" prop="area" label="B志愿"></el-table-column>
          <el-table-column align="center" prop="concern" label="C志愿"></el-table-column>
          <el-table-column align="center" prop="concern" label="D志愿"></el-table-column>
          <el-table-column align="center" prop="concern" label="E志愿"></el-table-column>
          <el-table-column align="center" prop="concern" label="F志愿"></el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-edit">填报</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
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
      return "school-dts-enroll-tab-line";
    },
    tableClassName({ row, rowIndex }) {
      return "school-dts-enroll-tab-head";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>