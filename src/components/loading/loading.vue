<style lang="scss" scoped>
/* Main styles */
@font-face {
  font-family: 'Open-San';
  src: url('../../assets/fonts/open-san.woff2') format('woff2');
}

.text--transparent {
  fill: transparent;
}

.anim-shape {
  -webkit-transform-origin: 0x 150px;
  -ms-transform-origin: 0x 150px;
  transform-origin: 0x 150px;
  -webkit-transform: scale(0, 1) translate(0, 0);
  -ms-transform: scale(0, 1) translate(0, 0);
  transform: scale(0, 1) translate(0, 0);
  -webkit-animation: moving-panel 3s infinite alternate;
  animation: moving-panel 3s infinite alternate;
}

.colortext .anim-shape:nth-child(1) {
  fill: #0E1826;
}

.colortext .anim-shape:nth-child(2) {
  fill: #166973;
}

.colortext .anim-shape:nth-child(3) {
  fill: #65BFA6;
}

.colortext .anim-shape:nth-child(4) {
  fill: #F2CD5C;
}

.colortext .anim-shape:nth-child(5) {
  fill: #F26444;
}

.shadow {
  -webkit-transform: translate(10px, 10px);
  -ms-transform: translate(10px, 10px);
  transform: translate(10px, 10px);
}

.anim-shape--shadow {
  fill: #000;
  fill-opacity: .2;
}

@-webkit-keyframes moving-panel {
  100% {
    -webkit-transform: scale(1, 1) translate(20px, 0);
    transform: scale(1, 1) translate(20px, 0);
  }
}

@keyframes moving-panel {
  100% {
    -webkit-transform: scale(1, 1) translate(20px, 0);
    transform: scale(1, 1) translate(20px, 0);
  }
}


svg {
  font-family: Open Sans, Impact;
  font-size: 2rem;
  font-weight: 500;
  position: absolute;
  width: 100%;
  height: 60vh;
  left: 0;
  top: .4rem;
}
.container {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  width: 100vw;
  height: 100vh;
}
</style>

<template>
  <div class="container">
    <svg viewBox="0 0 700 350">
      <!-- Symbol with text -->
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="50%" dy=".35em" class="text--line">QG Studio</text>
      </symbol>
      <!-- Clippath  with text -->
      <clipPath id="cp-text">
        <text text-anchor="middle" x="50%" y="50%" dy=".35em" class="text--line">QG Studio</text>
      </clipPath>
      <!-- Group for shadow -->
      <g clip-path="url(#cp-text)" class="shadow">
        <rect width="100%" height="100%" class="anim-shape anim-shape--shadow"></rect>
      </g>
      <!-- Group with clippath for text-->
      <g clip-path="url(#cp-text)" class="colortext">
        <!-- Animated shapes inside text -->
        <rect width="100%" height="100%" class="anim-shape"></rect>
        <rect width="80%" height="100%" class="anim-shape"></rect>
        <rect width="60%" height="100%" class="anim-shape"></rect>
        <rect width="40%" height="100%" class="anim-shape"></rect>
        <rect width="20%" height="100%" class="anim-shape"></rect>
      </g>
      <!-- Transparent copy of text to keep
      patterned text selectable-->
      <use xlink:href="#s-text" class="text--transparent"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Loading extends Vue {}
</script>
