<template>
  <div>
    <h1 class="second-header" v-if="this.$store.state.mode == 1">QG特色</h1>
    <h1 class="second-header" v-if="this.$store.state.mode == 2">QG大事件</h1>
    <main>
      <Characteristic id="characteristic" v-if="this.$store.state.mode == 1"></Characteristic>
      <ImportantEvent id="importantEvent" v-if="this.$store.state.mode == 2"></ImportantEvent>
    </main>

    <footer class="footer">
      <p>QG十五年，从未停步</p>
      <backToTopee-button></backToTopee-button>
    </footer>

    <el-dialog :visible.sync="showMask" width="11rem" top="1rem">
      <el-carousel
        trigger="click"
        class="carousel"
        indicator-position="none"
        :autoplay="false"
        height="6.7rem"
        style="overflow: hidden;"
      >
        <el-carousel-item v-for="item in nowImgList" :key="item.time" class="carousel-item">
          <div class="carousel-img-container">
            <img :src="item.src" />
          </div>
          <p class="carousel-time">{{item.title}}</p>
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import BackToTopButton from "../nav/backToTopButton.vue";
import Characteristic from "./characteristic.vue";
import ImportantEvent from "./importantEvent.vue";
import { Watch } from 'vue-property-decorator';


@Component({
  components: {
    "backToTopee-button": BackToTopButton,
    Characteristic,
    ImportantEvent
  }
})

export default class column extends Vue {
  showMask: Boolean = false;
  nowImgList: Array<Object> = [];
  


  get imgList() {
    return this.$store.state.imgList;
  }

  @Watch ('imgList')
  onImgListChanged(val: Array<Object>, oldVal: string) {
    this.nowImgList = val;
    this.showMask = true;
  }
   
  mouted() {}
}
</script>


<style lang="scss" scoped>
.first-header {
  border: 0.02rem solid #e5e5e5;
  padding: 0.15rem 0;
  a {
    color: #2a2a2a;
    font-size: 0.23rem;
    padding: 0 0.2rem;
  }
}
.second-header {
  margin: 0.96rem auto 1.08rem auto;
  color: #2a2a2a;
  font-size: 0.96rem;
}
.carousel {
  height: auto;
  &-item {
    height: auto;
    width: 100%;
    text-align: center;
  }
  &-img-container {
    text-align: center;
    position: relative;
    img {
      height: 5.6rem;
      width: 8.4rem;
    }
  }
  &-time {
    margin: 0.42rem auto 0 auto;
    color: #2a2a2a;
    font-size: 0.3rem;
  }
}

.footer {
  color: #2a2a2a;
  font-size: 0.48rem;
  letter-spacing: 0.03rem;
  p {
    margin-top: 0.49rem;
  }
}

.zoomButton {
  position: absolute;
  top: 0.16rem;
  right: 0.16rem;
  height: 0.64rem;
  width: 0.64rem;
  background: #fff;
  border-radius: 50%;
  img {
    height: 0.32rem;
    width: 0.32rem;
    box-shadow: none;
  }
}
</style>


