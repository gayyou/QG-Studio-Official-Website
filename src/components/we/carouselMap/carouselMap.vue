<style lang="scss" scoped>
.carouse-map {
  position: relative;
  width: 100%;
  height: 9.5rem;
  overflow: hidden;
  padding-top: 0.36rem;

  .carouse-contain {
    position: absolute;
    width: 50%;
    height: 8rem;
    top: 2rem;
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

    .slide-left-wait2 {
      // left: -100%;
      left: 0;
      transform: translateX(-300%) scale(.8);
      z-index: 8;
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

    .slide-right-wait2 {
      left: 100%;
      transform: translateX(-125%) scale(.8);
      z-index: 8;
    }
  }

  .arrow-left {
    cursor: pointer;
    position: absolute;
    z-index: 22;
    left: 0;
    top: 2rem;
    width: 50vw;
    height: 70vh;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .arrow-right {
    cursor: pointer;
    position: absolute;
    z-index: 22;
    top: 2rem;
    right: 0;
    width: 50vw;
    height: 70vh;
    
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
.counselor-title {
  font-size: 0.96rem;
  color: #2a2a2a;
  margin-bottom: 1.08rem;
}
</style>

<template>
  <div class="carouse-map">
    <span class="counselor-title">{{ title }}</span>
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
      
    </div>
    <div class="arrow-right" @click="turnRight">
      
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
  title: String = '重要时刻'
  // 轮播图类数组
  classOption: Array<String> = [
    'slide-left-wait2',
    'slide-left-wait',
    'slide-left',
    'slide-center',
    'slide-right',
    'slide-right-wait',
    'slide-right-wait2'
  ];

  imgList: Array<any> = [
    {
      url: require('@/assets/images/we/19.jpg'),
      message: '加拿大工程院院士、IEEE Fellow、国家千人特聘教授张齐军参观团队',
      className: 'slide-left-wait2'
    },
    {
      url: require('@/assets/images/we/3.jpg'),
      message: '第十二届“挑战杯”全国大学生课外学术科技作品竞赛终审决赛留影',
      className: 'slide-left-wait'
    },
    {
      url: require('@/assets/images/we/2.png'),
      message: '2015挑战杯智慧城市专项赛总决赛特等奖现场',
      className: 'slide-left'
    },
    {
      url: require('@/assets/images/we/14.jpg'),
      message: '2019年获“五四青年奖章”团体奖提名奖',
      className: 'slide-center'
    },
    {
      url: require('@/assets/images/we/4.jpg'),
      message: '广东省政协主席王荣、学校校长陈新听取工作室介绍',
      className: 'slide-right'
    },
    {
      url: require('@/assets/images/we/18.jpg'),
      message: '教育部原副部长鲁昕、学校校长陈新听取工作室创新作品介绍',
      className: 'slide-right-wait'
    },
    {
      url: require('@/assets/images/we/5.jpg'),
      message: 'QG工作室成员方锦基于2017年在人民大会堂接受“小平科技创新团队”表彰',
      className: 'slide-right-wait2'
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
    for (let i = 0; i < length; i++) {
      this.$data.imgList[(bashIndex + i) % length].className = this.$data.classOption[i];
    }
    // 下面这个 + 3 是展示区域最左边的那一张图片在整个列表的次序是第三个
    this.$data.imgMessage = this.$data.imgList[(bashIndex + 3) % length].message;
    setTimeout(() => {
      this.$data.isMoving = false;
    }, 750);
  }
}
</script>
