<style lang="scss" scoped>
.about-list {
  position: relative;
  transition: ease 1s all;
  width: 7.2rem;
  height: 100vh;
  overflow: hidden;
  border: .01rem solid rgba($color: #000000, $alpha: .1);
  overflow: hidden;
  box-shadow: 0 0 100px 1px rgba($color: #000000, $alpha: .1);
  transform-origin: left center;
  // margin: .3rem -0.5rem;

  .about-list-head {
    display: block;
    width: 100%;
    height: .5rem;
    overflow: hidden;

    .about-count {
      position: absolute;
      font-size: 0.6rem;
      left: .36rem;
      top: .15rem;
      color: transparent;
      -webkit-text-stroke: 0.015rem #5b08c3;
      stroke: 0.015rem #5b08c3;
      float: left;
    }

    .about-list-circle {
      position: absolute;
      display: block;
      border-radius: 50%;
      width: .36rem;
      height: .36rem;
      right: .36rem;
      top: .44rem;
      background-color: #5b08c3;
    }
  }
  
  .about-list-main {
    position: relative;
    overflow: hidden;
    margin: .1rem auto;
    width: 80%;
    display: flex;
    flex-direction: column;

    .about-list-title {
      display: block;
      font-size: .44rem;
      color: #707070;
      margin-top: .32rem;
      margin-bottom: .24rem;
    }

    .about-list-intro {
      display: block;
      width: 100%;
      // height: 4rem;
      padding-bottom: 0.3rem;
      line-height: .4rem;
      word-wrap: break-word;
      text-align: start;
    }

    .about-list-image {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;

      img {
        display: block;
        width: 100%;
      }
    }
  }

  .about-list-main::after {
    content: "";
    display: block;
    clear: both;
  }
}
.active {
  background-color: #e8dfff!important;
}
.pespective {
  position: relative;
  margin: 0 .0rem;
  width: 7.2rem;
  height: 100vh;
  transform-style: preserve-3d;
  perspective: 1000px;
}
.pespective-active {
  // margin: .3rem -.9rem;
}
.list-active {
  transform: rotateY(-10deg) translateZ(1.5rem) translateX(.8rem) scale(0.7);
}
</style>

<template>
  <div class="pespective" :class="isActive ? 'pespective-active' : ''">
    <div class="about-list" :class="[index % 2 == 1 ? 'active' : '', isActive ? 'list-active' : '']">
      <div class="about-list-head">
        <span class="about-count">{{ index + 1 }}</span>
        <div class="about-list-circle"></div>
      </div>
      <div class="about-list-main">
        <div class="about-list-title">{{ title }}</div>
        <div class="about-list-intro">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ message }}</div>
        <div class="about-list-image">
          <img :src="url" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class List extends Vue {
  @Prop(Number) index!: number;

  @Prop(String) url!: string;

  @Prop(String) title!: string;

  @Prop(String) message!: string;

  @Prop(Boolean) isActive!: boolean;

} 
</script>
