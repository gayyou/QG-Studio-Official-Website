<style lang="scss" scoped>
.group-container {
  position: relative;
  width: 100%;
  margin-top: 1.8rem;

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
    }

    .status--2 {
      left: -16.2rem;
      transform: scale(0.66);
    }

    .status--1 {
      left: -13.56rem;
      transform: scale(0.66);
    }

    .status-0 {
      left: -10.92rem;
      transform: scale(0.66);
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
    }

    .status-9 {
      left: 13.56rem;
      transform: scale(0.66);
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
        v-for="(item, index) in groupList"
        :key="index + 1"
        :data-index="index"
        :class="item.className"
        :style="index == 7 ? 'background: linear-gradient(to top right, ' + item.fromColor + ', ' + item.toColor + ');' : ''"
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
      name: '计算机网络与分布式信息系统前端方向',
      intro: '',
      url: require('@/assets/icons/mobile.png'),
      activeUrl: require('@/assets/icons/mobile_small.png'),
      className: 'status--3',
      fromColor: '#FDEB2F',
      toColor: '#FFF57D'
    },
    {
      name: '计算机网络与分布式信息系统前端方向',
      intro: '',
      url: require('@/assets/icons/design.png'),
      activeUrl: require('@/assets/icons/design_small.png'),
      className: 'status--2',
      fromColor: '#FC71A4',
      toColor: '#FEAAC9'
    },
    {
      name: '计算机网络与分布式信息系统前端方向',
      intro: '',
      url: require('@/assets/icons/image.png'),
      activeUrl: require('@/assets/icons/image_small.png'),
      className: 'status--1',
      fromColor: '#EC502C',
      toColor: '#D67557'
    },
    {
      name: '计算机网络与分布式信息系统前端方向',
      intro: '',
      url: require('@/assets/icons/front.png'),
      activeUrl: require('@/assets/icons/front_small.png'),
      className: 'status-0',
      fromColor: '#ED3E46',
      toColor: '#FD7679'
    },
    {
      name: '计算机网络与分布式信息系统后台方向',
      intro: '',
      url: require('@/assets/icons/end.png'),
      activeUrl: require('@/assets/icons/end_small.png'),
      className: 'status-1',
      fromColor: '#2b8be1',
      toColor: '#5793CA'
    },
    {
      name: '计算机网络与分布式信息系统前端方向',
      intro: '',
      url: require('@/assets/icons/data.png'),
      activeUrl: require('@/assets/icons/data_small.png'),
      className: 'status-2',
      fromColor: '#EC502C',
      toColor: '#EF8F73'
    },
    {
      name: '计算机网络与分布式信息系统前端方向',
      intro: '',
      url: require('@/assets/icons/embedded.png'),
      activeUrl: require('@/assets/icons/embedded_small.png'),
      className: 'status-3',
      fromColor: '#37AC47',
      toColor: '#5CAE6B'
    },
    {
      name: '计算机网络与分布式信息系统前端方向',
      intro: '',
      url: require('@/assets/icons/mobile.png'),
      activeUrl: require('@/assets/icons/mobile_small.png'),
      className: 'status-4',
      fromColor: '#FDEB2F',
      toColor: '#FFF57D'
    },
    {
      name: '计算机网络与分布式信息系统前端方向',
      intro: '',
      url: require('@/assets/icons/design.png'),
      activeUrl: require('@/assets/icons/design_small.png'),
      className: 'status-5',
      fromColor: '#FC71A4',
      toColor: '#FEAAC9'
    },
    {
      name: '计算机网络与分布式信息系统前端方向',
      intro: '',
      url: require('@/assets/icons/image.png'),
      activeUrl: require('@/assets/icons/image_small.png'),
      className: 'status-6',
      fromColor: '#EC502C',
      toColor: '#D67557'
    },
    {
      name: '计算机网络与分布式信息系统前端方向',
      intro: '',
      url: require('@/assets/icons/front.png'),
      activeUrl: require('@/assets/icons/front_small.png'),
      className: 'status-7',
      fromColor: '#ED3E46',
      toColor: '#FD7679'
    },
    {
      name: '计算机网络与分布式信息系统后台方向',
      intro: '',
      url: require('@/assets/icons/end.png'),
      activeUrl: require('@/assets/icons/end_small.png'),
      className: 'status-8',
      fromColor: '#2b8be1',
      toColor: '#5793CA'
    },
    {
      name: '计算机网络与分布式信息系统前端方向',
      intro: '',
      url: require('@/assets/icons/data.png'),
      activeUrl: require('@/assets/icons/data_small.png'),
      className: 'status-9',
      fromColor: '#EC502C',
      toColor: '#EF8F73'
    }
  ];

  groupMessage: String = '前端在网络开发中属于呈现给用户的部分，最具有代表性的莫过于传统的网页。前端组一直紧随最前沿的技术脚步，秉承着用户体验至上的原则，完成用户的需求。前端发展至今天，所能完成的任务可不仅仅于此，前端开发者探索的脚步从未停止，我们可以用Node.js进行高性能后端开发。我们创造出挑战原生APP地位的webapp小程序，更可以开发桌面级应用。想你所想，前端的未来将由你来开拓。';

  groupName: String = '计算机网络与分布式信息系统前端方向';
}
</script>
