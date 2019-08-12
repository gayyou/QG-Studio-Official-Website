<style lang="scss" scoped>
.setType2-container {
  position: relative;
  width: 14.72rem;
  height: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;

  .section-left {
    position: relative;
    width: 7.5rem;
    height: 11rem;

    div {
      box-shadow: 0 0 2px 2px rgba($color: #000000, $alpha: .16);
      overflow: hidden;
    }

    .left-top {
      width: 100%;
      height: 5.3rem;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }

    .left-bottom {
      margin-top: 0.4rem;
      width: 100%;
      height: 5.3rem;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }

    img {
      width: 100%;
    }
  }

  .section-right {
    position: relative;
    width: 5.7rem;
    height: 10.2rem;
    box-shadow: 0 0 2px 2px rgba($color: #000000, $alpha: .16);
    overflow: hidden;
    margin-left: 0.72rem;

    img {
      width: 100%;
    }

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
    }
  }
}
.setType2-container::after {
  content: "";
  clear: both;
  display: block;
}
</style>

<template>
  <div class="setType2-container">
    <div class="section-left">
      <div class="left-top"  :style="'background-image: url(' + imgList[0] + ')'">
        <!-- <img :src="imgList[0]" alt=""> -->
      </div>
      <div class="left-bottom"  :style="'background-image: url(' + imgList[1] + ')'">
        <!-- <img :src="imgList[1]" alt=""> -->
      </div>
    </div>
    <div class="section-right">
      <span class="honor-name">{{ honorName }}</span>
      <span class="honor-time">{{ honorTime }}</span>
      <span class="honor-intro">{{ honorIntro }}</span>
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
export default class SetTypeTwo extends Vue{
  
}
</script>
