<template>
  <div class="full-page">
    <Reg-header-cpt></Reg-header-cpt>
    <div class="reg-bg">
      <div class="bfb80">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="reg-ruleForm"
        >
          <h3 class="reg-title">注册信息：</h3>
          <el-form-item label="用户名" prop="area">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="area">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="短信验证" prop="area">
            <el-input class="reg-yzm" v-model="ruleForm.name"></el-input>
            <el-button type="warning" class="reg-yzm-btn">获取验证码</el-button>
          </el-form-item>
          <el-form-item label="密码" prop="area">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="area">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>

          <h3 class="reg-title">
            考生信息：
            <span>为享受更优质的服务体验，请确保各项信息的真实性</span>
          </h3>
          <el-form-item label="所在地区" prop="area">
            <el-cascader :options="areaOptions" v-model="ruleForm.area" @change="areaChange"></el-cascader>
          </el-form-item>

          <el-form-item label="考生姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item label="就读中学" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item label="就读班级" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item label="考生类别" prop="department">
            <el-radio-group v-model="ruleForm.department">
              <el-radio label="理科"></el-radio>
              <el-radio label="文科"></el-radio>
              <el-radio label="其它"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="考生性别" prop="sex">
            <el-radio-group v-model="ruleForm.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="高考年份" prop="year">
            <el-date-picker v-model="ruleForm.year" type="year" placeholder="选择年"></el-date-picker>
          </el-form-item>

          <el-form-item class="reg-submit">
            <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import RegHeaderCpt from "@/components/RegHeaderCpt";

var areaData = [
  {
    value: "zhinan",
    label: "指南",
    children: [
      {
        value: "shejiyuanze",
        label: "设计原则",
        children: [
          {
            value: "yizhi",
            label: "一致"
          },
          {
            value: "fankui",
            label: "反馈"
          },
          {
            value: "xiaolv",
            label: "效率"
          },
          {
            value: "kekong",
            label: "可控"
          }
        ]
      },
      {
        value: "daohang",
        label: "导航",
        children: [
          {
            value: "cexiangdaohang",
            label: "侧向导航"
          },
          {
            value: "dingbudaohang",
            label: "顶部导航"
          }
        ]
      }
    ]
  },
  {
    value: "zujian",
    label: "组件",
    children: [
      {
        value: "basic",
        label: "Basic",
        children: [
          {
            value: "layout",
            label: "Layout 布局"
          },
          {
            value: "color",
            label: "Color 色彩"
          },
          {
            value: "typography",
            label: "Typography 字体"
          },
          {
            value: "icon",
            label: "Icon 图标"
          },
          {
            value: "button",
            label: "Button 按钮"
          }
        ]
      },
      {
        value: "form",
        label: "Form",
        children: [
          {
            value: "radio",
            label: "Radio 单选框"
          },
          {
            value: "checkbox",
            label: "Checkbox 多选框"
          },
          {
            value: "input",
            label: "Input 输入框"
          },
          {
            value: "input-number",
            label: "InputNumber 计数器"
          },
          {
            value: "select",
            label: "Select 选择器"
          },
          {
            value: "cascader",
            label: "Cascader 级联选择器"
          },
          {
            value: "switch",
            label: "Switch 开关"
          },
          {
            value: "slider",
            label: "Slider 滑块"
          },
          {
            value: "time-picker",
            label: "TimePicker 时间选择器"
          },
          {
            value: "date-picker",
            label: "DatePicker 日期选择器"
          },
          {
            value: "datetime-picker",
            label: "DateTimePicker 日期时间选择器"
          },
          {
            value: "upload",
            label: "Upload 上传"
          },
          {
            value: "rate",
            label: "Rate 评分"
          },
          {
            value: "form",
            label: "Form 表单"
          }
        ]
      },
      {
        value: "data",
        label: "Data",
        children: [
          {
            value: "table",
            label: "Table 表格"
          },
          {
            value: "tag",
            label: "Tag 标签"
          },
          {
            value: "progress",
            label: "Progress 进度条"
          },
          {
            value: "tree",
            label: "Tree 树形控件"
          },
          {
            value: "pagination",
            label: "Pagination 分页"
          },
          {
            value: "badge",
            label: "Badge 标记"
          }
        ]
      },
      {
        value: "notice",
        label: "Notice",
        children: [
          {
            value: "alert",
            label: "Alert 警告"
          },
          {
            value: "loading",
            label: "Loading 加载"
          },
          {
            value: "message",
            label: "Message 消息提示"
          },
          {
            value: "message-box",
            label: "MessageBox 弹框"
          },
          {
            value: "notification",
            label: "Notification 通知"
          }
        ]
      },
      {
        value: "navigation",
        label: "Navigation",
        children: [
          {
            value: "menu",
            label: "NavMenu 导航菜单"
          },
          {
            value: "tabs",
            label: "Tabs 标签页"
          },
          {
            value: "breadcrumb",
            label: "Breadcrumb 面包屑"
          },
          {
            value: "dropdown",
            label: "Dropdown 下拉菜单"
          },
          {
            value: "steps",
            label: "Steps 步骤条"
          }
        ]
      },
      {
        value: "others",
        label: "Others",
        children: [
          {
            value: "dialog",
            label: "Dialog 对话框"
          },
          {
            value: "tooltip",
            label: "Tooltip 文字提示"
          },
          {
            value: "popover",
            label: "Popover 弹出框"
          },
          {
            value: "card",
            label: "Card 卡片"
          },
          {
            value: "carousel",
            label: "Carousel 走马灯"
          },
          {
            value: "collapse",
            label: "Collapse 折叠面板"
          }
        ]
      }
    ]
  },
  {
    value: "ziyuan",
    label: "资源",
    children: [
      {
        value: "axure",
        label: "Axure Components"
      },
      {
        value: "sketch",
        label: "Sketch Templates"
      },
      {
        value: "jiaohu",
        label: "组件交互文档"
      }
    ]
  }
];

export default {
  name: "RegisterPage",
  components: {
    RegHeaderCpt
  },
  data() {
    return {
      ruleForm: {
        name: "",
        area: [],
        department: "",
        sex: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        area: [{ required: true, message: "请选择所在地区", trigger: "blur" }],
        department: [{ required: true, message: "请选择", trigger: "blur" }],
        sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
        year: [{ required: true, message: "请选择年份", trigger: "blur" }]
      },
      areaOptions: areaData
    };
  },
  methods: {
    areaChange(val) {
      console.log(val);
    },
    submitForm(formName) {
      //表单提交
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      //重置表单
      this.$refs[formName].resetFields();
    }
  }
};
</script>

