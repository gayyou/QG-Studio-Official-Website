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
    <setType1
      :honorName="'第十二届“挑战杯”全国大学生课外学术科技竞赛一等奖'"
      :honorTime="'2011年10月'"
      :imgList="[
        require('@/assets/images/we/8.png'),
        require('@/assets/images/we/9.jpg'),
        require('@/assets/images/we/9.jpg'),
      ]"
      :honorIntro="'广东工业大学QG工作室学生陈伯宁、黄灿峰、郑亮松、陈培才、张泽环同学的作品《便携式多功能数据拷贝机》在第十二届“挑战杯”全国大学生课外学术科技作品竞赛中荣获一等奖！'"
    ></setType1>
    <setType2
      :honorName="'第十二届“挑战杯”全国大学生课外学术科技竞赛一等奖'"
      :honorTime="'2011年10月'"
      :imgList="[
        require('@/assets/images/we/8.png'),
        require('@/assets/images/we/9.jpg'),
        require('@/assets/images/we/9.jpg'),
      ]"
      :honorIntro="'广东工业大学QG工作室学生陈伯宁、黄灿峰、郑亮松、陈培才、张泽环同学的作品《便携式多功能数据拷贝机》在第十二届“挑战杯”全国大学生课外学术科技作品竞赛中荣获一等奖！'"
    ></setType2>
    <setType3
      :honorName="'第十二届“挑战杯”全国大学生课外学术科技竞赛一等奖'"
      :honorTime="'2011年10月'"
      :imgList="[
        require('@/assets/images/we/8.png'),
        require('@/assets/images/we/9.jpg'),
        require('@/assets/images/we/9.jpg'),
      ]"
      :honorIntro="'广东工业大学QG工作室学生陈伯宁、黄灿峰、郑亮松、陈培才、张泽环同学的作品《便携式多功能数据拷贝机》在第十二届“挑战杯”全国大学生课外学术科技作品竞赛中荣获一等奖！'"
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
