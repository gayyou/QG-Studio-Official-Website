<style lang="scss" scoped>

</style>

<template>
  <div class="about-container" id="about">
    <list
      v-for="(item, index) in aboutList"
      :key="item.id"
      :data-index="index"
      :message="item.message"
      :title="item.title"
      :url="item.url"
    ></list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Provide, Prop } from 'vue-property-decorator'
import list from './list/list.vue'
import { AboutList } from '@/utils/models/interface';

@Component({
  components: {
    list
  }
})
export default class Nav extends Vue {
  aboutList: Array<AboutList> = [
    {
      url: require('@/assets/images/about/1.jpg'),
      title: 'QG工作室',
      message: [
        '工作室于2005年11月成立，由团队负责人计算机学院副院长谢光强老师创建，',
        '现有在校学生40多人，是一个致力于发掘和培养创新型人才、大力提高',
        '学生科研创新、团队协作能力的科技创新团队'
      ],
      id: '1'
    },
    {
      url: require('@/assets/images/about/2.png'),
      title: '与广东工业大学',
      message: [
        '我们的发展得到了广东工业大学和学校计算机学院',
        '大力的支持和帮助',
        '并被评为广东工业大学“标志性获奖团队”'
      ],
      id: '2'
    },
    {
      url: require('@/assets/images/about/3.jpg'),
      title: '小平科技创新团队',
      message: [
        '团队获颁2017年度“小平科技创新团队”荣誉称号，',
        '计算机学院15级学生方锦基作为“QG工作室”学生代表出席了颁奖大会。',
        '全国共有50个大学生创新团队获此殊荣（广东省仅我校与华南理工大学2个团队）'
      ],
      id: '3'
    },
  ]
}
</script>
