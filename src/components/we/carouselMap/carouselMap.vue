<style lang="scss" scoped>
.carouse-map {
  position: relative;
  width: 100%;
  height: 8.5rem;
  overflow: hidden;
  padding-top: 0.36rem;

  .carouse-contain {
    position: absolute;
    width: 50%;
    height: 7rem;
    left: 50%;
    transform: translateX(-50%);

    .carouse-img {
      position: absolute;
      width: 12rem;
      height: 6.74rem;
      overflow: hidden;
      border-radius: 48px;
      transition: all .75s ease;
      box-shadow: 0 3px 6px rgba($color: #000000, $alpha: .2);
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }

    .slide-left {
      // left: -50%;
      left: 0;
      transform: translateX(-75%) scale(.8);
      z-index: 10;
    }

    .slide-left-wait {
      // left: -100%;
      left: 0;
      transform: translateX(-200%) scale(.8);
      z-index: 9;
    }

    .slide-center {
      // left: 50%;
      left: 50%;
      transform: translate(-50%);
      z-index: 11;
    }

    .slide-right {
      z-index: 10;
      left: 100%;
      // right: -50%;
      transform: translateX(-25%) scale(.8);
    }
    .slide-right-wait {
      left: 100%;
      transform: scale(.8);
      z-index: 9;
    }
  }

  .arrow-left {
    cursor: pointer;
    position: absolute;
    z-index: 22;
    left: 0;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
    width: 0.82rem;
    height: 0.82rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .arrow-right {
    cursor: pointer;
    position: absolute;
    z-index: 22;
    right: 0;
    width: 0.82rem;
    height: 0.82rem;
    top: 50%;
    transform: translateY(-50%);
    
    img {
      width: 100%;
      height: 100%;
    }
  }
  
  .image-intro {
    position: absolute;
    display: block;
    font-size: 0.36rem;
    color: #1f1f1f;
    width: 15rem;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.2rem;
  }

  .image-intro::after {
    content: "";
    display: block;
    clear: both;
  }
}

</style>

<template>
  <div class="carouse-map">
    <div class="carouse-contain">
      <div
        class="carouse-img"
        v-for="(item, index) in imgList"
        :key="item.url"
        :data-index="index"
        :class="item.className"
        :style="'background-image: url(' + item.url + ')'"
      ></div>
    </div>
    <div class="arrow-left" @click="turnLeft">
      <img src="@/assets/icons/arrow-right.png" alt="">
    </div>
    <div class="arrow-right" @click="turnRight">
      <img src="@/assets/icons/arrow-right.png" alt="">
    </div>
    <span class="image-intro">{{ imgMessage }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

@Component
export default class CarouseMap extends Vue {
  // 轮播图类数组
  classOption: Array<String> = [
    'slide-left-wait',
    'slide-left',
    'slide-center',
    'slide-right',
    'slide-right-wait'
  ];

  imgList: Array<any> = [
    {
      url: require('@/assets/images/we/1.png'),
      message: '2015挑战杯智慧城市专项赛总决赛特等奖获奖合影',
      className: 'slide-left-wait'
    },
    {
      url: require('@/assets/images/we/2.png'),
      message: '2015挑战杯智慧城市专项赛总决赛特等奖现场',
      className: 'slide-left'
    },
    {
      url: require('@/assets/images/we/3.jpg'),
      message: '第十二届“挑战杯”全国大学生课外学术科技作品竞赛终审决赛留影',
      className: 'slide-center'
    },
    {
      url: require('@/assets/images/we/4.jpg'),
      message: '省教育部部长来我团队参观',
      className: 'slide-right'
    },
    {
      url: require('@/assets/images/we/5.jpg'),
      message: 'QG工作室成员方锦基于2017年在人民大会堂接受“小平科技创新团队”表彰',
      className: 'slide-right-wait'
    }
  ];

  imgMessage: String = '';

  currentIndex: Number = -1;

  isMoving: Boolean = false;

  mounted() {
    this.$data.currentIndex = 0;
  }

  turnLeft() {
    // 防止多次点击
    if (this.$data.isMoving) {
      return ;
    }

    if (this.$data.currentIndex == 0) {
      this.$data.currentIndex = this.$data.imgList.length;
    }
    this.$data.currentIndex--;
    this.$data.isMoving = true
  }

  turnRight() {
    if (this.$data.isMoving) {
      return ;
    }

    this.$data.currentIndex = (this.$data.currentIndex + 1) % this.$data.imgList.length;
    this.$data.isMoving = true
  }

  @Watch('currentIndex')
  onIndexChange(newVal: any) {
    let bashIndex = newVal,
        length = this.$data.imgList.length;
    for (let i = 0; i < 5; i++) {
      this.$data.imgList[(bashIndex + i) % length].className = this.$data.classOption[i];
    }
    this.$data.imgMessage = this.$data.imgList[(bashIndex + 2) % length].message;
    setTimeout(() => {
      this.$data.isMoving = false;
    }, 750);
  }
}
</script>
