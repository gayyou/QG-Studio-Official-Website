<style lang="scss" scoped>
.setType3-container {
  position: relative;
  width: 14.72rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;

  div {
    box-shadow: 0 0 2px 2px rgba($color: #000000, $alpha: .16);
    overflow: hidden;
  }

  img {
    width: 100%;
  }

  .section-left {
    position: relative;
    width: 7rem;
    height: 5rem;
  }

  .section-right {
    position: relative;
    width: 6.2rem;
    height: 4.2rem;
    margin-left: 0.72rem;
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
</style>

<template>
  <div class="setType3-container">
    <div class="section-left">
      <img :src="imgList[0]" alt="">
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
export default class SetTypeThree extends Vue{
  
}
</script>
