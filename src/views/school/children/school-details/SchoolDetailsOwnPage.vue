<template>
  <div>
    <title-component title="自主招生"></title-component>
    <div class="school-dts-intro-body">
      <p>根据《国务院关于深化考试招生制度改革的实施意见》及教育部关于高等学校自主招生改革试点工作的有关规定，我校将全面贯彻落实党的教育方针，结合北京大学“培养以天下为己任，具有健康体魄与健全人格、独立思考与创新精神、实践能力与全球视野的卓越人才”的培养目标，2018年继续通过自主招生招收学科特长突出、具备创新潜质的优秀高中毕业生。欢迎广大“热爱北大、心系天下、人格健全、学业优秀”的高中毕业生报考我校。</p>
    </div>
  </div>
</template>

<script>
import titleComponent from "../../../_components/title-component.vue";
export default {
  components: {
    titleComponent
  },
  name: "SchoolDetailsOwnPage",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>