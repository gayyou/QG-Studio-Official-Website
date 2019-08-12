<<<<<<< HEAD
<style lang="scss" scoped>
%flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.counselor-container {
  position: relative;
  margin-top: .4rem;
  width: 100%;
  padding-bottom: 1rem;

  .counselor-title {
    display: block;
    margin: .2rem auto;
    font-size: .4rem;
    text-align: center;
  }

  .display-teacher {
    @extend %flex-center;
    position: relative;
    width: 100%;

    .choice-container {
      position: relative;
      width: 3.6rem;
      // height: 1.24rem;
      
      .choice-name {
        cursor: pointer;
        display: block;
        font-size: .24rem;
        margin: .4rem;
        margin-right: .8rem;
        padding-left: .2rem;
        padding-right: .2rem;
        transition: font-size .5s ease;
      }
    }

    .display-container {
      @extend %flex-center;
      position: relative;
      width: 11.5rem;
      height: 6.24rem;
      box-shadow: 0 0 2px 2px rgba($color: #000000, $alpha: .1);
      font-size: .2rem;
      margin-right: 1.8rem;

      .section-left {
        position: relative;
        width: 3rem;
        transition: all ease .5s;
        
        .head-image-container {
          position: relative;
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 50%;
          margin: .3rem auto;
          margin-bottom: 0;
          overflow: hidden;

          img {
            width: 100%;
          }
        }

        .teacher-name {
          margin-top: .36rem;
          
          font-size: .4rem;
          color: #2a2a2a;
        }
      }

      .section-right {
        position: relative;
        width: 7rem;
        margin-left: .4rem;
        transition: all ease .5s;

        span {
          display: block;
          text-align: start;
          margin-top: .2rem;
        }

        .job-title,
        .intro-title {
          color: #5b08c3;
        }
      }
    }
  }
  
  .display-teacher::after {
    content: "";
    display: block;
    clear: both;
  }
}
.counselor-container::after {
  content: "";
  display: block;
  clear: both;
}
.active {
  font-size: .36rem!important;
  height: .2rem;
  line-height: .2rem;
  background-color: #e8d6ff;
}
.container-active {
  transform: translateX(.5rem);
  opacity: 0;
}
</style>

<template>
  <div class="counselor-container">
    <span class="counselor-title">{{ title }}</span>
    <div class="display-teacher">
      <div class="choice-container" @click="choiceTeacher">
        <span class="choice-name" data-index="1" :class="currentIndex == 1 ? 'active' : ''">谢光强博士</span>
        <span class="choice-name" data-index="2" :class="currentIndex == 2 ? 'active' : ''">李扬博士</span>
      </div>
      <div class="display-container">
        <section class="section-left" :class="isChanging ? 'container-active' : ''">
          <div class="head-image-container"><img :src="display.url" alt=""></div>
          <div class="teacher-name">{{ display.name }}</div>
        </section>
        <section class="section-right" :class="isChanging ? 'container-active' : ''">
          <div class="teacher-job">
            <span class="job-title">职位</span>
            <span class="job-value">{{ display.label }}</span>
          </div>
          <div class="teacher-introduction">
            <span class="intro-title">简介</span>
            <span class="intro-value"
              v-for="(item, index) in display.introList"
              :key="item"
              :index="index"
            >{{ item }}</span>
          </div>
        </section>
      </div>
      <!-- <li class="teacher-container"
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
      </li> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class Counselor extends Vue {
  isChanging: Boolean = true;

  currentIndex: Number = 1;

  title: String = '指导老师';

  display: any = {
    name: '谢光强博士',
    url: require('@/assets/images/we/7.png'),
    label: '广东工业大学计算机学院副院长、副教授、硕士生导师',
    introList: [
      '2005年创建QG科技创新团队、第一指导教师',
      '个人共获各类省、市、校奖项40多项',
      '获得广东省教育教学成果奖（高等教育）一等奖',
      '广东工业大学“学生最喜爱的教师”、“十佳授课教师”、“师德标兵”',
      '主持和参加国家自然基金等各类科研项目30余项',
      '已申请专利和软件著作权共30多项',
      '指导学生获各类科技竞赛奖项180余项'
    ]
  }

  teacherList: Array<Object> = [
    {
      name: '谢光强博士',
      url: require('@/assets/images/we/7.png'),
      label: '广东工业大学计算机学院副院长、副教授、硕士生导师',
      introList: [
        '2005年创建QG科技创新团队、第一指导教师',
        '个人共获各类省、市、校奖项40多项',
        '获得广东省教育教学成果奖（高等教育）一等奖',
        '广东工业大学“学生最喜爱的教师”、“十佳授课教师”、“师德标兵”',
        '主持和参加国家自然基金等各类科研项目30余项',
        '已申请专利和软件著作权共30多项',
        '指导学生获各类科技竞赛奖项180余项'
      ]
    },
    {
      name: '李杨博士',
      url: require('@/assets/images/we/6.png'),
      label: '广东工业大学副教授、硕士生导师',
      introList: [
        '2005年至今担任QG科技创新团队指导教师',
        '持和参加国家自然科学基金、省市科技等各类项目13项',
        '获专利授权10项，其中发明专利1项',
        '在国际期刊、会议和核心期刊发表论文10多篇',
        '个人共获各类省、市、校奖项30多项',
        '被评选为广东工业大学 “十佳授课教师”',
        '指导学生获各类科技竞赛奖项100多项'
      ]
    }
  ];

  mounted() {
    setTimeout(() => {
      this.isChanging = false;  
    }, 10);  
  }

  choiceTeacher(event) {
    if (this.isChanging) return ;
    let index = event.target.getAttribute('data-index');

    if (!index || parseInt(index) == this.currentIndex) return ;
    this.currentIndex = parseInt(index)
    this.isChanging = true;

    setTimeout(() => {
      this.display = {}
      this.display = this.teacherList[index - 1];
      this.isChanging = false;
    }, 500)
  }
}
</script>
=======
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
        '个人共获各类省、市、校奖项40多项',
        '获得广东省教育教学成果奖（高等教育）一等奖',
        '广东工业大学“学生最喜爱的教师”、“十佳授课教师”、“师德标兵”',
        '主持和参加国家自然基金等各类科研项目30余项',
        '已申请专利和软件著作权共30多项',
        '指导学生获各类科技竞赛奖项180余项'
      ]
    },
    {
      name: '李杨博士',
      url: require('@/assets/images/we/6.png'),
      label: '广东工业大学副教授、硕士生导师',
      introList: [
        '2005年至今担任QG科技创新团队指导教师',
        '持和参加国家自然科学基金、省市科技等各类项目13项',
        '获专利授权10项，其中发明专利1项',
        '在国际期刊、会议和核心期刊发表论文10多篇',
        '个人共获各类省、市、校奖项30多项',
        '被评选为广东工业大学 “十佳授课教师”',
        '指导学生获各类科技竞赛奖项100多项'
      ]
    }
  ]
}
</script>
>>>>>>> ccb3fdb5f928aef2f3724779c1b7534d8828d9d1
