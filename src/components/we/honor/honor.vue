<style lang="scss" scoped>
.honor-container {
  position: relative;
  width: 100%;

  .honor-title {
    color: #1f1f1f;
    font-size: 0.96rem;
  }
}

.honor-container::after {
  content: "";
  display: block;
  clear: both;
}
</style>

<template>
  <div class="honor-container">
    <span class="honor-title">最近的荣誉</span>
    <setType2
      :honorName="'2019年获得“广东省五四青年”提名奖'"
      :honorTime="'2019年'"
      :imgList="[
        require('@/assets/images/we/14.jpg'),
        require('@/assets/images/we/16.jpg'),
      ]"
      :honorIntro="'“QG工作室”在学校的大力支持下，经过十几年的建设，形成了自己独特的文化和传承，工作室把团队精神的培养上升到与学术与科研能力并重，团队具有很强的凝聚力和战斗力，培养了大批多品学兼优、专业知识扎实、能独当一面的创新型人才，获得了丰硕的成果，团队成为广东工业大学“标志性获奖团队”，于2019年荣获广东省五四青年奖章提名奖。'"
    ></setType2>
    <setType1
      :honorName="'2017年获得“小平科技创新团队”称号'"
      :honorTime="'2017年'"
      :imgList="[
        require('@/assets/images/we/10.jpg'),
        require('@/assets/images/we/13.jpg'),
        require('@/assets/images/we/11.jpg'),
      ]"
      :honorIntro="'“QG工作室”在学校的大力支持下，经过十几年的建设，形成了自己独特的文化和传承，工作室把团队精神的培养上升到与学术与科研能力并重，团队具有很强的凝聚力和战斗力，培养了大批多品学兼优、专业知识扎实、能独当一面的创新型人才，获得了丰硕的成果，团队成为广东工业大学“标志性获奖团队”，于2017年被授予以邓小平同志命名的大学生“小平科技创新团队”称号，该项称号是由共青团中央、全国青联、全国学联、全国少工委、中国青少年科技创新奖励基金颁发。'"
    ></setType1>
    <setType2
      :honorName="'第十二届“挑战杯”全国大学生课外学术科技竞赛一等奖'"
      :honorTime="'2011年10月'"
      :imgList="[
        require('@/assets/images/we/8.jpg'),
        require('@/assets/images/we/9.jpg'),
      ]"
      :honorIntro="'2011年10月，梦想终于实现，工作室研发成果经过层层筛选，代表广东省参加第十二届“挑战杯”全国大学生竞赛终审决赛。不负众望，为广工大首次获得了“挑战杯”国赛“一等奖” 。作品是三年磨一剑，由三届团队成员合力完成。一切的努力都是值得的！'"
    ></setType2>
    <setType3
      :honorName="'“挑战杯”全国大学生课外学术科技作品竞赛“智慧城市”专项赛荣获特等奖'"
      :honorTime="'2015年7月'"
      :imgList="[
        require('@/assets/images/we/12.png'),
      ]"
      :honorIntro="'第十四届“挑战杯”全国大学生课外学术科技作品竞赛，“智慧城市”专项赛决赛，从全国一千多件科技作品脱颖而出。为广工大首次获得了国赛“特等奖”的殊荣！(全国共三项)'"
    ></setType3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import setType1 from './setType1/setType1.vue'
import setType2 from './setType2/setType2.vue'
import setType3 from './setType3/setType3.vue'

@Component({
  components: {
    setType1,
    setType2,
    setType3
  }
})
export default class Honor extends Vue {
  
}
</script>
