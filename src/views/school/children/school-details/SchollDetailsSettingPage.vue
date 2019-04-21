<template>
  <div>
    <title-component  title="哲学类院校全国TOP10"></title-component>
    <div class="school-dts-setting-hot">
      <div class="school-dts-setting-hot-table-head">
        <el-row>
          <el-col :span="8"><div class="school-dts-setting-hot-table-head-item">排名</div></el-col>
          <el-col :span="8"><div class="school-dts-setting-hot-table-head-item">学校</div></el-col>
          <el-col :span="8"><div class="school-dts-setting-hot-table-head-item">等级</div></el-col>
        </el-row>
      </div>
      <div class="school-dts-setting-hot-table-tbody">
        <el-row>
          <el-col :span="8"><div class="school-dts-setting-hot-table-tbody-item">排名</div></el-col>
          <el-col :span="8"><div class="school-dts-setting-hot-table-tbody-item">学校</div></el-col>
          <el-col :span="8"><div class="school-dts-setting-hot-table-tbody-item">等级</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><div class="school-dts-setting-hot-table-tbody-item">排名</div></el-col>
          <el-col :span="8"><div class="school-dts-setting-hot-table-tbody-item">学校</div></el-col>
          <el-col :span="8"><div class="school-dts-setting-hot-table-tbody-item">等级</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><div class="school-dts-setting-hot-table-tbody-item school-dts-setting-hot-table-tbody-item2">排名</div></el-col>
          <el-col :span="8"><div class="school-dts-setting-hot-table-tbody-item school-dts-setting-hot-table-tbody-item2">学校</div></el-col>
          <el-col :span="8"><div class="school-dts-setting-hot-table-tbody-item school-dts-setting-hot-table-tbody-item2">等级</div></el-col>
        </el-row>
      </div>
    </div>
    <title-component  title="哲学专业开设院校查询"></title-component>
    <div class="school-dts-setting-search">
      
      <div style="height:30px;"></div>
        <el-row class="school-dts-enroll-filter-top">
        <el-col :span="4"><div class="grid-content school-dts-enroll-text-right">招生地区：</div></el-col>
          <el-col :span="8"><div class="grid-content"><el-select class="school-dts-enroll-select" v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select></div></el-col>
              <el-col :span="4"><div class="grid-content school-dts-enroll-text-right">招生年份：</div></el-col>
          <el-col :span="8"><div class="grid-content"><el-select class="school-dts-enroll-select" v-model="value" placeholder="请选择">
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
      <div class="school-dts-setting-search-table">
        <template>
          <el-table
            :header-cell-class-name="tableClassName"
            :row-class-name="tableRowClassName"
            :data="tableData"
            stripe
            header-align="center"
            style="width: 100%"
          >
            <el-table-column align="center" label="学校">
              <template slot-scope="scope">
                <router-link
                  class="school-list-tab-name"
                  :to="{ path: '/school/details/123'}"
                >{{scope.row.name}}</router-link>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="feature" label="所在地区"></el-table-column>
            <el-table-column align="center" prop="area" label="招生数量"></el-table-column>
            <el-table-column align="center" prop="concern" label="平均分"></el-table-column>
          </el-table>
        </template>
        <div class="list-page-box">
          <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titleComponent from "../../../_components/title-component.vue";
export default {
  components: {
    titleComponent
  },
  name: "SchollDetailsSettingPage",
  data() {
    return {
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