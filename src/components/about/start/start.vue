<style lang="scss" scoped>
.cls-1 {
  fill: none;
  stroke: #5b08c3;
  stroke-miterlimit: 10;
  stroke-width: 2px;
}
.cls-2 {
  fill: #e8d6ff;
}
path {
  stroke-dasharray: 1500;
  stroke-dashoffset: 1500;
  animation: dash 3.5s linear forwards;
}
svg {
  width: 150%;
  height: 100%;
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
.svg-container {
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 14.2rem;
  height: 2.8rem;
  margin-top: 2rem;
  div {
    position: relative;
  }
}
.is-show {
  opacity: 1;
}
.is-hide {
  opacity: 0;
}
.word-fill {
  transition: ease 2.5s opacity;
}
.choice-container {
  margin-top: .8rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  height: .72rem;
  opacity: 0;
  transform: translateX(.25rem);
  transition: all ease .75s;

  button {
    display: block;
    width: 2.4rem;
    height: .72rem;
    border-radius: 48px;
    background-color: #fff;
    border: .005rem solid rgba($color: #000000, $alpha: .3);
    color: #6a6a6a;
    font-size: .24rem;
    text-align: center;
    margin-left: 1rem;
  }

  button:hover {
    background-color: #e8d6ff;
  }
}
.layer-container {
  position: absolute;
  z-index: 999999;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;
  transition: all ease .75s;
  background-color: #ffe;
}

.button-active {
  opacity: 1;
  transform: translateX(0);
}
.layer-hide {
  transform: translateY(-.5rem);
  opacity: 0;
  z-index: -1000;
}
</style>

<template>
  <div class="layer-container"
    :class="isHides ? 'layer-hide' : ''"
  >
    <div class="svg-container">
      <div style="width: 2rem;">
        <svg xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.75) translate(0.2rem)">
          <g id="图层_2" data-name="图层 2" class="word-fill" :class="isShow ? 'is-show' : 'is-hide'">
            <g id="图层_1-2" data-name="图层 1">
              <path
                class="cls-2"
                d="M161.85,168.52,189.13,203H166.5l-18.72-23.77q-22.53,13.9-50.75,13.9-40.83,0-68.93-28T0,97.38A98,98,0,0,1,12.87,48.19a93,93,0,0,1,35-35.44A95.89,95.89,0,0,1,96.56,0q40.85,0,68.89,27.94t28,68.69a96.2,96.2,0,0,1-7.69,38.88Q178.13,153.13,161.85,168.52Zm-11.37-14.38q24-23.4,24-57.68a78,78,0,0,0-10.19-39.61,76.17,76.17,0,0,0-28.69-28.34,76.79,76.79,0,0,0-77.87-.06,75.81,75.81,0,0,0-28.5,28.65A80.09,80.09,0,0,0,19,97.31q0,32.78,22.63,55.36t54.63,22.58a77.66,77.66,0,0,0,40-10.64l-40.95-52h22.3Z"
              ></path>
            </g>
          </g>
          <g id="图层_2" data-name="图层 2">
            <g id="图层_2-2" data-name="图层 2">
              <path
                class="cls-1"
                d="M162.85,169.52,190.13,204H167.5l-18.72-23.77q-22.53,13.9-50.75,13.9-40.83,0-68.93-28T1,98.38A98,98,0,0,1,13.87,49.19a93,93,0,0,1,35-35.44A95.89,95.89,0,0,1,97.56,1q40.85,0,68.89,27.94t28,68.69a96.2,96.2,0,0,1-7.69,38.88Q179.13,154.13,162.85,169.52Zm-11.37-14.38q24-23.4,24-57.68a78,78,0,0,0-10.19-39.61,76.17,76.17,0,0,0-28.69-28.34,76.79,76.79,0,0,0-77.87-.06,75.81,75.81,0,0,0-28.5,28.65A80.09,80.09,0,0,0,20,98.31q0,32.78,22.63,55.36t54.63,22.58a77.66,77.66,0,0,0,40-10.64l-40.95-52h22.3Z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div style="width: 3rem;">
        <svg xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.75)">
          <g id="图层_2" data-name="图层 2" class="word-fill" :class="isShow ? 'is-show' : 'is-hide'">
            <g id="图层_1-2" data-name="图层 1">
              <path
                class="cls-2"
                d="M185.13,35.5,170.88,49a108.85,108.85,0,0,0-33.69-22.94q-18.31-7.81-35.69-7.81A85.09,85.09,0,0,0,60.31,28.88,77.12,77.12,0,0,0,30,57.69,74.36,74.36,0,0,0,19.25,96.13a75.89,75.89,0,0,0,11.13,39.44,79,79,0,0,0,30.75,29.38,88.44,88.44,0,0,0,43,10.69q28.37,0,48-16t23.25-41.5H116.75V100.38H196q-.25,42.63-25.31,67.69t-67.06,25.06q-51,0-80.75-34.75A92.36,92.36,0,0,1,0,96.5,94.85,94.85,0,0,1,13.13,47.88a93.34,93.34,0,0,1,36-35.19Q72,0,100.88,0a115.08,115.08,0,0,1,44,8.44Q165.5,16.88,185.13,35.5Z"
              ></path>
            </g>
          </g>
          <g id="图层_2" data-name="图层 2">
            <g id="图层_2-2" data-name="图层 2">
              <path
                class="cls-1"
                d="M186.13,36.5,171.88,50a108.85,108.85,0,0,0-33.69-22.94q-18.31-7.81-35.69-7.81A85.09,85.09,0,0,0,61.31,29.88,77.12,77.12,0,0,0,31,58.69,74.36,74.36,0,0,0,20.25,97.13a75.89,75.89,0,0,0,11.13,39.44,79,79,0,0,0,30.75,29.38,88.44,88.44,0,0,0,43,10.69q28.37,0,48-16t23.25-41.5H117.75V101.38H197q-.25,42.63-25.31,67.69t-67.06,25.06q-51,0-80.75-34.75A92.36,92.36,0,0,1,1,97.5,94.85,94.85,0,0,1,14.13,48.88a93.34,93.34,0,0,1,36-35.19Q73,1,101.88,1a115.08,115.08,0,0,1,44,8.44Q166.5,17.88,186.13,36.5Z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div style="width: 1.3rem;">
        <svg xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.75)">
          <g id="图层_2" data-name="图层 2" class="word-fill" :class="isShow ? 'is-show' : 'is-hide'">
            <g id="图层_1-2" data-name="图层 1">
              <path
                class="cls-2"
                d="M0,154.25l15.63-9.37q16.5,30.38,38.13,30.38a36.52,36.52,0,0,0,17.38-4.31A30.52,30.52,0,0,0,83.5,159.38,29.93,29.93,0,0,0,87.75,144q0-9.25-6.25-18.12Q72.88,113.63,50,96.38T21.38,71.25q-9.75-13-9.75-28.12a42.67,42.67,0,0,1,5.75-21.87A41,41,0,0,1,33.56,5.69,46.66,46.66,0,0,1,56.25,0,48.37,48.37,0,0,1,80.56,6.44q11.31,6.44,23.94,23.69L89.5,41.5Q79.12,27.75,71.81,23.38A30.48,30.48,0,0,0,55.88,19q-11.13,0-18.19,6.75a22.09,22.09,0,0,0-7.06,16.63A28.31,28.31,0,0,0,33.13,54q2.5,5.63,9.13,12.25Q45.87,69.75,66,84.63,89.87,102.25,98.75,116t8.88,27.63q0,20-15.19,34.75T55.5,193.13a54.19,54.19,0,0,1-30.37-8.94Q11.5,175.25,0,154.25Z"
              ></path>
            </g>
          </g>
          <g id="图层_2" data-name="图层 2">
            <g id="图层_2-2" data-name="图层 2">
              <path
                class="cls-1"
                d="M1.34,155.25,17,145.88q16.5,30.38,38.13,30.38a36.52,36.52,0,0,0,17.37-4.31,30.52,30.52,0,0,0,12.38-11.56A29.93,29.93,0,0,0,89.09,145q0-9.25-6.25-18.12-8.62-12.25-31.5-29.5T22.71,72.25Q13,59.25,13,44.13a42.67,42.67,0,0,1,5.75-21.87A41,41,0,0,1,34.9,6.69,46.66,46.66,0,0,1,57.59,1,48.37,48.37,0,0,1,81.9,7.44q11.31,6.44,23.94,23.69l-15,11.38Q80.46,28.75,73.15,24.38A30.48,30.48,0,0,0,57.21,20Q46.09,20,39,26.75A22.09,22.09,0,0,0,32,43.38,28.31,28.31,0,0,0,34.46,55q2.5,5.63,9.13,12.25,3.62,3.5,23.75,18.38Q91.21,103.25,100.09,117T109,144.63q0,20-15.19,34.75T56.84,194.13a54.19,54.19,0,0,1-30.38-8.94Q12.84,176.25,1.34,155.25Z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div style="width: 1.3rem;">
        <svg xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.75)">
          <g id="图层_2" data-name="图层 2" class="word-fill" :class="isShow ? 'is-show' : 'is-hide'">
            <g id="图层_1-2" data-name="图层 1">
              <path class="cls-2" d="M0,18V0H100.75V18h-41V183.88H41V18Z"></path>
            </g>
          </g>
          <g id="图层_2" data-name="图层 2">
            <g id="图层_2-2" data-name="图层 2">
              <path class="cls-1" d="M1,19V1H101.75V19h-41V184.88H42V19Z"></path>
            </g>
          </g>
        </svg>
      </div>
      <div style="width: 1.3rem;">
        <svg xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.75)">
          <g id="图层_2" data-name="图层 2" class="word-fill" :class="isShow ? 'is-show' : 'is-hide'">
            <g id="图层_1-2" data-name="图层 1">
              <path
                class="cls-2"
                d="M0,0H18.38V111q0,19.75.75,24.63,1.37,10.88,6.38,18.19t15.38,12.25A48.15,48.15,0,0,0,61.75,171a41.2,41.2,0,0,0,17.5-3.87,38.92,38.92,0,0,0,14-10.75,43.87,43.87,0,0,0,8.25-16.62q1.88-7,1.88-28.75V0h18.38V111q0,24.63-4.81,39.81T97.69,177.25Q83.25,188.5,62.75,188.5q-22.25,0-38.12-10.62T3.38,149.75Q0,139,0,111Z"
              ></path>
            </g>
          </g>
          <g id="图层_2" data-name="图层 2">
            <g id="图层_2-2" data-name="图层 2">
              <path
                class="cls-1"
                d="M1,1H19.38V112q0,19.75.75,24.63,1.37,10.88,6.38,18.19t15.38,12.25A48.15,48.15,0,0,0,62.75,172a41.2,41.2,0,0,0,17.5-3.87,38.92,38.92,0,0,0,14-10.75,43.87,43.87,0,0,0,8.25-16.62q1.88-7,1.88-28.75V1h18.38V112q0,24.63-4.81,39.81T98.69,178.25Q84.25,189.5,63.75,189.5q-22.25,0-38.12-10.62T4.38,150.75Q1,140,1,112Z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div style="width: 2rem;">
        <svg xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.75)">
          <g id="图层_2" data-name="图层 2" class="word-fill" :class="isShow ? 'is-show' : 'is-hide'">
            <g id="图层_1-2" data-name="图层 1">
              <path
                class="cls-2"
                d="M0,183.88V0H38.13Q79.38,0,98,6.63q26.75,9.38,41.81,32.5t15.06,55.13q0,27.63-11.94,48.63t-31,31q-19.06,10-53.44,10ZM17.63,166.5H38.88q38.12,0,52.88-4.75a61,61,0,0,0,32.63-24.29q11.87-17.55,11.88-42.9,0-26.6-12.87-45.46T87.5,23.25Q70.25,18,30.63,18h-13Z"
              ></path>
            </g>
          </g>
          <g id="图层_2" data-name="图层 2">
            <g id="图层_2-2" data-name="图层 2">
              <path
                class="cls-1"
                d="M1,184.88V1H39.13Q80.38,1,99,7.63q26.75,9.38,41.81,32.5t15.06,55.13q0,27.63-11.94,48.63t-31,31q-19.06,10-53.44,10ZM18.63,167.5H39.88q38.12,0,52.88-4.75a61,61,0,0,0,32.63-24.29q11.87-17.55,11.88-42.9,0-26.6-12.87-45.46T88.5,24.25Q71.25,19,31.63,19h-13Z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div style="width: 0.3rem;">
        <svg xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.75) translateX(0.18rem)">
          <g id="图层_2" data-name="图层 2" class="word-fill" :class="isShow ? 'is-show' : 'is-hide'">
            <g id="图层_1-2" data-name="图层 1">
              <path class="cls-2" d="M0,0H18.38V183.88H0Z"></path>
            </g>
          </g>
          <g id="图层_2" data-name="图层 2">
            <g id="图层_2-2" data-name="图层 2">
              <path class="cls-1" d="M1,1H19.38V184.88H1Z"></path>
            </g>
          </g>
        </svg>
      </div>
      <div style="width: 2rem;">
        <svg xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.75)">
          <g id="图层_2" data-name="图层 2" class="word-fill" :class="isShow ? 'is-show' : 'is-hide'">
            <g id="图层_1-2" data-name="图层 1">
              <path
                class="cls-2"
                d="M95.69,0q41.77,0,69.92,27.88T193.75,96.5q0,40.38-28.08,68.5T97.19,193.13q-40.9,0-69-28T0,97.38A98,98,0,0,1,12.82,48.25,94.7,94.7,0,0,1,95.69,0Zm.81,17.88A75.75,75.75,0,0,0,57.81,28.51,76.49,76.49,0,0,0,29.27,57.16,79.66,79.66,0,0,0,19,97.31q0,32.78,22.72,55.36T96.5,175.25a78.66,78.66,0,0,0,39.63-10.38,74.34,74.34,0,0,0,28.42-28.4,79.8,79.8,0,0,0,10.2-40,77.84,77.84,0,0,0-10.2-39.59,76.22,76.22,0,0,0-28.73-28.33A77.75,77.75,0,0,0,96.5,17.88Z"
              ></path>
            </g>
          </g>
          <g id="图层_2" data-name="图层 2">
            <g id="图层_2-2" data-name="图层 2">
              <path
                class="cls-1"
                d="M96.69,1q41.77,0,69.92,27.88T194.75,97.5q0,40.38-28.08,68.5T98.19,194.13q-40.9,0-69-28T1,98.38A98,98,0,0,1,13.82,49.25,94.7,94.7,0,0,1,96.69,1Zm.81,17.88A75.75,75.75,0,0,0,58.81,29.51,76.49,76.49,0,0,0,30.27,58.16,79.66,79.66,0,0,0,20,98.31q0,32.78,22.72,55.36T97.5,176.25a78.66,78.66,0,0,0,39.63-10.38,74.34,74.34,0,0,0,28.42-28.4,79.8,79.8,0,0,0,10.2-40,77.84,77.84,0,0,0-10.2-39.59,76.22,76.22,0,0,0-28.73-28.33A77.75,77.75,0,0,0,97.5,18.88Z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
    <div class="choice-container"
      :class="isShow ? 'button-active' : ''"
    >
      <button
        @click="seeVideo"
      >宣传视频</button>
      <button
        @click="learnMore"
      >了解更多</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from 'vue-property-decorator';

@Component
export default class Start extends Vue {
  @Prop(Boolean)
  isHides: boolean;

  isShow: boolean = false;

  mounted() {
    setTimeout(() => {
      this.isShow = true;
    }, 2300);
  }

  seeVideo(event) {
    this.$emit('isHides', true);
    this.$store.state.about.showVideo = true;
    this.$store.state.about.showMore = false;
  }

  learnMore(event) {
    this.$emit('isHides', true);
    this.$store.state.about.showVideo = false;
    this.$store.state.about.showMore = true;
  }

  @Watch('isHide')
  han(newVal) {

  }
}
</script>
