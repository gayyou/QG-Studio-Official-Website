<style lang="scss" scoped>
.cls-1 {
  opacity: 0.5;
}
.cls-2 {
  fill: rgba($color: #fff, $alpha: 1);
  stroke: rgba($color: #fff, $alpha: 1);
}
.cls-3 {
  fill: rgba($color: #fff, $alpha: .3);
  stroke: rgba($color: #fff, $alpha: .3);
}
.circle-svg {
  width: 0.8rem;
  height: 0.75rem;
}
.svg-container {
  position: fixed;
  right: 0.6rem;
  top: 0.3rem;
  width: 0.8rem;
  height: 1.2rem;
  z-index: 11;

  span {
    display: block;
    color: #fff;
    font-size: 0.24rem;
    width: 100%;
  }
}
</style>

<template>
  <div class="svg-container">
    <svg class="circle-svg" xmlns="http://www.w3.org/2000/svg">
      <g class="cls-1">
        <path
          class="cls-3"
          d="M367.5,269.5a20,20,0,1,1-20,20,20,20,0,0,1,20-20m0-4a24,24,0,1,0,24,24,24,24,0,0,0-24-24Z"
          transform="translate(-333.5 -255.5)"
        ></path>
        <path
          class="cls-2"
          d="M367.5,269.5a20,20,0,1,1-20,20,20,20,0,0,1,20-20m0-4a24,24,0,1,0,24,24,24,24,0,0,0-24-24Z"
          transform="translate(-333.5 -255.5)"
        ></path>
      </g>
    </svg>
    <span>1 / 3</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';

@Component
export default class CircleSvg extends Vue {

}
</script>
