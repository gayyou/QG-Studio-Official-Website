<style lang="scss" scoped>
.group-container {
  position: relative;
  width: 100%;
  margin-top: 1.8rem;
  overflow: hidden;

  .group-title {
    display: block;
    position: relative;
    font-size: 0.96rem;
    color: #2a2a2a;
  }

  .all-introduction {
    display: block;
    color: #707070;
    font-size: 0.36rem;
  }

  .group-map {
    position: relative;
    width: 3rem;
    height: 3rem;
    margin: 0.64rem auto;
  
    li {
      cursor: pointer;
      position: absolute;
      width: 3rem;
      height: 3rem;
      overflow: hidden;
      border-radius: 50%;
      border: .5px solid #a0a0a0;
      transition: .75s ease all;

      .major-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;

        img {
          width: 50%;
        }
      }
    }

    .status--3 {
      left: -18.72rem;
      transform: scale(0.66);
      opacity: 0;
    }

    .status--2 {
      left: -16.2rem;
      transform: scale(0.66);
      opacity: 0;
    }

    .status--1 {
      left: -13.56rem;
      transform: scale(0.66);
      opacity: 0;
    }

    .status-0 {
      left: -10.92rem;
      transform: scale(0.66);
      opacity: 0;
    }

    .status-1 {
      left: -8.28rem;
      transform: scale(0.66);
    }

    .status-2 {
      left: -5.64rem;
      transform: scale(0.66);
    }

    .status-3 {
      left: -3rem;
      transform: scale(0.66);
    }

    .status-4 {
      left: 0;
    }

    .status-5 {
      left: 3rem;
      transform: scale(0.66);
    }

    .status-6 {
      left: 5.64rem;
      transform: scale(0.66);
    }

    .status-7 {
      left: 8.28rem;
      transform: scale(0.66);
    }

    .status-8 {
      left: 10.92rem;
      transform: scale(0.66);
      opacity: 0;
    }

    .status-9 {
      left: 13.56rem;
      transform: scale(0.66);
      opacity: 0;
    }

    .status-10 {
      left: 16.2rem;
      transform: scale(0.66);
      opacity: 0;
    }
  }

  .group-name {
    display: block;
    font-size: 0.36rem;
    color: #2a2a2a;
    margin: 0.64rem auto 0.48rem auto;
  }

  .group-introduction {
    position: relative;
    display: block;
    font-size: 0.24rem;
    color: #707070;
    line-height: 0.36rem;
    width: 80%;
    margin: 0.48rem auto;
  }
}
</style>

<template>
  <div class="group-container">
    <span class="group-title">研究方向</span>
    <span class="all-introduction">QG工作室一共有七个研究方向</span>
    <div class="group-map">
      <li
        @click="choiceGroup"
        v-for="(item, index) in groupList"
        :key="index + 1"
        :data-index="index"
        :class="item.className"
        :style="index == currentIndex ? 'background: linear-gradient(to top right, ' + item.fromColor + ', ' + item.toColor + ');' : ''"
      >
        <div class="major-icon">
          <img :src="index != 7 ? item.activeUrl : item.url" alt="">
        </div>
      </li>
    </div>
    <span class="group-name">{{ groupName }}</span>
    <div class="group-introduction">
      {{ groupMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class Group extends Vue {
  groupList: Array<Object> = [
    {
      name: '图形组',
      intro: '手游组的研究方向为计算机图形学与数字媒体技术。小组以DirectX 11作为学习 方向，使用Direct3D 11开发游戏及其他智能图形程序。除此之外，小组使用Unity3D游戏引擎开发多平台游戏以及体感应用。游戏制作涉及数据库开发、网络编程，以及GPU编程等等。',
      url: require('@/assets/icons/image.png'),
      activeUrl: require('@/assets/icons/image_small.png'),
      className: 'status-0',
      fromColor: '#EC502C',
      toColor: '#D67557'
    },
    {
      name: '前端组',
      intro: '前端在网络开发中属于呈现给用户的部分，最具有代表性的莫过于传统的网页。前端组一直紧随最前沿的技术脚步，秉承着用户体验至上的原则，完成用户的需求。前端发展至今天，所能完成的任务可不仅仅于此，前端开发者探索的脚步从未停止，我们可以用Node.js进行高性能后端开发。我们创造出挑战原生APP地位的webapp小程序，更可以开发桌面级应用。想你所想，前端的未来将由你来开拓。',
      url: require('@/assets/icons/front.png'),
      activeUrl: require('@/assets/icons/front_small.png'),
      className: 'status-1',
      fromColor: '#ED3E46',
      toColor: '#FD7679'
    },
    {
      name: '后台组',
      intro: '后台是一个与数据和信息打交道的方向，负责着各类数据的处理与传输。无论是网页端、移动端还是嵌入式端，都需要后台技术的支持。QG后台组基于Java语言，自成立以来致力于后台服务器的开发，成功为工作室多数项目提供了坚实的后台技术支持，慢慢成长为一支团结可靠的队伍。',
      url: require('@/assets/icons/end.png'),
      activeUrl: require('@/assets/icons/end_small.png'),
      className: 'status-2',
      fromColor: '#2b8be1',
      toColor: '#5793CA'
    },
    {
      name: '数据挖掘组',
      intro: '数据挖掘组，研究方向为大数据的存储、获取与运算以及机器学习的算法，是与当下流行的人工智能最相关的组。小组以机器学习的基本理论，使用数据分析库进行数据科学的研究和实践，利用Linux下的Hadoop、Spark等框架进行大数据的存储和运算。如果你是一个不仅喜欢编程，对数据的力量充满好奇，想要了解数据科学的话，请带上你的热情，来我们数据挖掘组报名吧！',
      url: require('@/assets/icons/data.png'),
      activeUrl: require('@/assets/icons/data_small.png'),
      className: 'status-3',
      fromColor: '#EC502C',
      toColor: '#EF8F73'
    },
    {
      name: '嵌入式组',
      intro: '作为计算机学院历史最悠久、实力最强的嵌入式开发团队。小组内部有着丰富的开发资源及技术传承，主要研究方向为基于ARM+LINUX平台以及其他各类开发板的嵌入式软件开发。小组的学习之旅主要伴随着比赛，近年来获得过许多奖项，第十四届“挑战杯”全国大学生课外学术科技作品竞赛香港专项赛特等奖更是刷新了学校在挑战杯获奖层次的记录。',
      url: require('@/assets/icons/embedded.png'),
      activeUrl: require('@/assets/icons/embedded_small.png'),
      className: 'status-4',
      fromColor: '#37AC47',
      toColor: '#5CAE6B'
    },
    {
      name: '移动组',
      intro: '智能手机应用开发小组，简称移动组。小组在结构上前前后后经历了三次变革，主攻方向从Android应用/游戏开发变为Android应用/后台开发再到现在的纯Android应用开发。',
      url: require('@/assets/icons/mobile.png'),
      activeUrl: require('@/assets/icons/mobile_small.png'),
      className: 'status-5',
      fromColor: '#FDEB2F',
      toColor: '#FFF57D'
    },
    {
      name: '设计组',
      intro: '设计组的主要研究方向是手机游戏和网页的界面设计及交互，游戏原画设计以及平面设计。我们旨在锻炼成员的创新能力、创意思想，培养成员的视觉设计和交互设计能力。<br>除此之外，设计组也在着手3D模型的设计以及3D打印机的使用，产出的智能打印机和智能头盔已经斩获多个奖项，更是在挑战杯校赛中协助取得特等奖、一等奖的好成绩。想用你的创意思维点燃技术的光芒吗？设计组在这里等你！',
      url: require('@/assets/icons/design.png'),
      activeUrl: require('@/assets/icons/design_small.png'),
      className: 'status-6',
      fromColor: '#FC71A4',
      toColor: '#FEAAC9'
    },
    {
      name: '图形组',
      intro: '手游组的研究方向为计算机图形学与数字媒体技术。小组以DirectX 11作为学习 方向，使用Direct3D 11开发游戏及其他智能图形程序。除此之外，小组使用Unity3D游戏引擎开发多平台游戏以及体感应用。游戏制作涉及数据库开发、网络编程，以及GPU编程等等。',
      url: require('@/assets/icons/image.png'),
      activeUrl: require('@/assets/icons/image_small.png'),
      className: 'status-7',
      fromColor: '#EC502C',
      toColor: '#D67557'
    },
    {
      name: '前端组',
      intro: '前端在网络开发中属于呈现给用户的部分，最具有代表性的莫过于传统的网页。前端组一直紧随最前沿的技术脚步，秉承着用户体验至上的原则，完成用户的需求。前端发展至今天，所能完成的任务可不仅仅于此，前端开发者探索的脚步从未停止，我们可以用Node.js进行高性能后端开发。我们创造出挑战原生APP地位的webapp小程序，更可以开发桌面级应用。想你所想，前端的未来将由你来开拓。',
      url: require('@/assets/icons/front.png'),
      activeUrl: require('@/assets/icons/front_small.png'),
      className: 'status-8',
      fromColor: '#ED3E46',
      toColor: '#FD7679'
    }
  ];

  currentIndex: Number = 4;

  classModel: Array<String> = [
    'status-0',
    'status-1',
    'status-2',
    'status-3',
    'status-4',
    'status-5',
    'status-6',
    'status-7',
    'status-8',
  ]

  groupMessage: String = '前端在网络开发中属于呈现给用户的部分，最具有代表性的莫过于传统的网页。前端组一直紧随最前沿的技术脚步，秉承着用户体验至上的原则，完成用户的需求。前端发展至今天，所能完成的任务可不仅仅于此，前端开发者探索的脚步从未停止，我们可以用Node.js进行高性能后端开发。我们创造出挑战原生APP地位的webapp小程序，更可以开发桌面级应用。';

  groupName: String = '计算机网络与分布式信息系统前端方向';

  choiceGroup(event: any) {
    let index = event.currentTarget.getAttribute('data-index');
    this.$data.currentIndex = index;
    let groupList = this.$data.groupList;
    let classModel = this.$data.classModel;
    for (let i = 0; i < groupList.length; i++) {
      // this.$data.groupList[(index + i) % this.$data.classModel.length].className = this.$data.classModel[(6 + i) % this.$data.classModel.length];
      groupList[(index + i) % groupList.length].className = classModel[(4 + i) % groupList.length]
    }
    this.$data.groupMessage = groupList[index].intro;
    this.$data.groupName = groupList[index].name;
  }

  mounted() {
    this.$data.groupMessage = this.$data.groupList[4].intro;
    this.$data.groupName = this.$data.groupList[4].name;
  }
}
</script>
