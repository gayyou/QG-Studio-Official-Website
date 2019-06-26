<style lang="scss" scoped>
.setType-container {
  position: relative;
  width: 14.72rem;
  height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;

  .section-left {
    position: relative;
    width: 5rem;
    height: 13rem;

    div {
      box-shadow: 0 0 2px 2px rgba($color: #000000, $alpha: .16);
      overflow: hidden;
    }

    .left-top {
      width: 100%;
      height: 7.6rem;
    }

    .left-bottom {
      margin-top: 0.4rem;
      width: 100%;
      height: 5rem;
    }

    img {
      width: 100%;
    }
  }

  .section-right {
    position: relative;
    width: 9rem;
    height: 13rem;
    margin-left: 0.72rem;

    div {
      box-shadow: 0 0 2px 2px rgba($color: #000000, $alpha: .16);
      overflow: hidden;
    }

    .right-top {
      width: 100%;
      height: 5.6rem;
    }

    .right-bottom {
      margin-top: 0.4rem;
      height: 6.2rem;
      width: 8.2rem;
      padding: 0.4rem;

      span {
        display: block;
      }

      .honor-name {
        font-size: 0.36rem;
        color: #2a2a2a;
        width: 100%;
      }

      .honor-time {
        font-size: 0.3rem;
        color: #707070;
        text-align: start;
        margin-top: 0.32rem;
      }

      .honor-intro {
        font-size: 0.3rem;
        color: #2a2a2a;
        line-height: 0.6rem;
        text-align: start;
        margin-top: 0.2rem;
      }
    }

    img {
      width: 100%;
    }
  }
}
</style>

<template>
  <div class="setType-container">
    <div class="section-left">
      <div class="left-top">
        <img :src="imgList[0]" alt="">
      </div>
      <div class="left-bottom">
        <img :src="imgList[1]" alt="">
      </div>
    </div>
    <div class="section-right">
      <div class="right-top">
        <img :src="imgList[2]" alt="">
      </div>
      <div class="right-bottom">
        <span class="honor-name">{{ honorName }}</span>
        <span class="honor-time">{{ honorTime }}</span>
        <span class="honor-intro">{{ honorIntro }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({
  props: {
    imgList: Array,
    honorName: String,
    honorTime: String,
    honorIntro: String
  }
})
export default class SetTypeOne extends Vue{
  
}
</script>
