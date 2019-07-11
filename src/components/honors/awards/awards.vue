<style lang="scss" scoped>
%clear-both::after {
  content: "";
  display: block;
  clear: both;
}

.award-container {
  @extend %clear-both;

  position: relative;
  width: 100%;
  margin-bottom: .5rem;
  overflow: hidden;
  padding-bottom: 0.4rem;

  .title {
    display: block;
    margin-top: 0.4rem;
    font-size: 0.36rem;
    color: #2a2a2a;
  }

  .header {
    width: 100%;
    height: 1.28rem;
    display: flex;
    justify-content: center;

    span {
      display: block;
      font-size: .24rem;
      height: 1.28rem;
      line-height: 1.28rem;
      color: #707070;
    }
    .award-main {
      @extend %clear-both;

      position: relative;
      width: 100%;
    }
  }

  .page-container {
    margin-top: 0.3rem;
  }
}
</style>

<template>
  <div class="award-container">
    <span class="title">奖项</span>
    <div class="header">
      <span
        v-for="(item) in headerList"
        :key="item.value"
        :style="'width: ' + item.width + 'rem;'"
      >{{ item.value }}</span>
    </div>
    <div class="award-main">
    <list
      v-for="(item, index) in awardList"
      :key="index + 1"
      :index="index + 1 + bashIndex"
      :item="item"
    ></list>
    </div>
    <el-pagination
      class="page-container"
      background
      layout="prev, pager, next"
      :total="totalPage"
      :current-page="currentPage"
      @current-change="changePage"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import list from './list/list.vue'
import { Watch } from 'vue-property-decorator';
import { awards } from '@/utils/data/awards.js';

@Component({
  components: {
    list
  }
})
export default class Awards extends Vue{
  headerList: any = [
    {
      width: 1,
      value: '序号'
    },
    {
      width: 2,
      value: '项目'
    },
    {
      width: 2.5,
      value: '比赛名称'
    },
    {
      width: 1.5,
      value: '时间'
    },
    {
      width: 2,
      value: '比赛等级'
    },
    {
      width: 1.5,
      value: '获奖等级'
    },
    {
      width: 2.5,
      value: '授奖部门'
    },
    {
      width: 2.5,
      value: '获奖学生'
    },
    {
      width: 2.5,
      value: '指导老师'
    }
  ];

  awardList: any = [

  ];

  bashIndex: Number = 0;

  currentPage: Number = 0;

  totalPage: Number = 0;
  
  mounted() {
    this.currentPage = 1;
    this.totalPage = Math.ceil(awards.length);
  }

  changePage(value: any) {
    this.currentPage = value;
    console.log(value)
  };

  // turnPrev(event: any) {
  //   this.currentPage = value;
  // };

  // turnNext(event: any) {
  //   this.currentPage = value;
  // };

  @Watch('currentPage')
  turnPage(newVal) {
    this.awardList = []
    this.bashIndex = (newVal - 1) * 10;
    for (let i = (newVal - 1) * 10; i < (newVal) * 10 && i < awards.length; i++) {
      let { competition, time, level, award, department, student, teacher, project } = awards[i];
      this.awardList.push({
        competition,
        time,
        level,
        award,
        department,
        student,
        teacher,
        project
      })
    }
  }
}
</script>
