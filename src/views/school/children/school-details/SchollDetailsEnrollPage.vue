<template>
  <div>
  <title-component  title="录取数据"></title-component>
  <div class="school-dts-enroll">
    <ul class="school-dts-enroll-tab clearfix">
      <li class="active">院校录取数据</li>
      <li>专业录取数据</li>
      <li>招生计划数据</li>
    </ul>
    <div class="school-dts-enroll-body">
      <div style="height:30px;"></div>
      <el-row class="school-dts-enroll-filter-top">
      <el-col :span="2"><div class="grid-content school-dts-enroll-text-right">省份：</div></el-col>
        <el-col :span="4"><div class="grid-content"><el-select class="school-dts-enroll-select" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select></div></el-col>
            <el-col :span="2"><div class="grid-content school-dts-enroll-text-right">省份：</div></el-col>
        <el-col :span="4"><div class="grid-content"><el-select class="school-dts-enroll-select" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select></div></el-col>
            <el-col :span="2"><div class="grid-content school-dts-enroll-text-right">省份：</div></el-col>
        <el-col :span="4"><div class="grid-content"><el-select class="school-dts-enroll-select" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select></div></el-col>
            <el-col :span="2"><div class="grid-content school-dts-enroll-text-right">省份：</div></el-col>
        <el-col :span="4"><div class="grid-content"><el-select class="school-dts-enroll-select" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select></div></el-col>
      </el-row>
      <div class="school-dts-enroll-btn">
        <el-button type="primary">查 询</el-button>
      </div>  
      
<div class="school-dts-enroll-table">
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
              <router-link
                class="school-list-tab-name"
                :to="{ path: '/school/details/123'}"
              >{{scope.row.name}}</router-link>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="feature" label="省份"></el-table-column>
          <el-table-column align="center" prop="top" label="类别"></el-table-column>
          <el-table-column align="center" prop="area" label="文科分数线"></el-table-column>
          <el-table-column align="center" prop="concern" label="理科分数线"></el-table-column>
          <el-table-column align="center" label="其他分数线">
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
  </div>
  </div>
</template>

<script>
import titleComponent from "../../../_components/title-component.vue";
export default {
  name: "SchollDetailsEnrollPage",
  components: {
    titleComponent
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      options:[{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value:'',
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
    }
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
