<style lang="scss" scoped>
%flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.counselor-container {
  position: relative;
  margin-top: 1.6rem;
  width: 100%;
  height: 12rem;

  span {
    display: block;
  }

  .counselor-title {
    font-size: 0.96rem;
    color: #2a2a2a;
    margin-bottom: 1.08rem;
  }

  .display-teacher {
    @extend %flex-center;
    
    position: relative;
    width: 100%;

    .teacher-container {
      position: relative;
      width: 7.2rem;
      height: 10rem;
      overflow: hidden;
      border: 1px solid rgba($color: #000000, $alpha: 0.16);
      box-shadow: 0 0.06rem 0.12rem rgba($color: #000000, $alpha: 0.16);
      margin: 0 0.32rem;
      
      .teacher-img {
        position: relative;
        width: 3.2rem;
        height: 3.2rem;
        margin: 0.5rem auto 0.32rem auto;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid #707070;

        img {
          width: 100%;
        }
      }

      .name {
        font-size: 0.64rem;
        width: 100%;
        color: #2a2a2a;
      }

      .simple-intro {
        font-size: 0.24rem;
        width: 100%;
        color: #707070;
        margin: 0.24rem auto 0.24rem;
      }

      .intro-title {
        font-size: 0.36rem;
        color: #2a2a2a;
        margin: 0.36rem auto;
      }

      .introduction {
        width: 100%;
        line-height: 0.24rem;
        margin: 0.18rem auto;
      }
    }
  }

  .display-teacher::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>

<template>
  <div class="counselor-container">
    <span class="counselor-title">{{ title }}</span>
    <div class="display-teacher">
      <li class="teacher-container"
        v-for="(item, index) in teacherList"
        :key="item.name"
        :data-index="index"
      >
        <div class="teacher-img">
          <img :src="item.url" alt="">
        </div>
        <span class="name">{{ item.name }}</span>
        <span class="simple-intro">{{ item.label }}</span>
        <span class="intro-title">简介</span>
        <span class="introduction"
          v-for="intro in item.introList"
          :key="intro"
        >{{ intro }}</span>
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default class Counselor extends Vue {
  title: String = '指导老师';

  teacherList: Array<Object> = [
    {
      name: '谢光强博士',
      url: require('@/assets/images/we/7.png'),
      label: '广东工业大学计算机学院副院长、副教授、硕士生导师',
      introList: [
        '2005年创建QG科技创新团队、第一指导教师',
        '个人共获各类省、市、校奖项40多项，获得广东省教育',
        '教学成果奖（高等教育）一等奖',
        '主持和参加国家自然基金等各类科研项目20多项',
        '申请专利和软件著作权共30多项',
        '指导学生获得各类学科竞赛奖项共140多项'
      ]
    },
    {
      name: '李杨博士',
      url: require('@/assets/images/we/6.png'),
      label: '广东工业大学副教授、硕士生导师',
      introList: [
        '2005年至今单人QG科技创新团队导师',
        '个人共获得各类省、市、校奖项30多项',
        '获得市级科技进步奖“二等奖” 1项',
        '指导学生获各类国家、省级、校级奖项100多项'
      ]
    }
  ]
}
</script>
